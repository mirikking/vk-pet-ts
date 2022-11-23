<template>
    <main class="app_tieser">
        <Welcome 
            v-if="!welcomeShowed"
            :userInfo="userInfo"
            @welcomeMsg="welcomeMsg"
        ></Welcome>
        <ProfileHeader
            v-if="welcomeShowed"
            :userInfo="userInfo"
            :accessToken="accessToken"
        ></ProfileHeader>
    </main>
</template>
<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/userState';
import { useAnimationState } from '../../../stores/animationState';

export default {
    name: 'UserInit',
    data()  {
        return {
            accessToken: useUserStore().accessToken,
            userId: useRouter().currentRoute.value.params.usedId,
            isAuthorized: useUserStore().isAuthorized,
            userInfo: {} as object,
            welcomeShowed: useAnimationState().welcomeShowed
        }
    },
    mounted() {
        this.mountUser(this.userId)
    }, 
    methods: {
        welcomeMsg(isAnimationCompleted:boolean) {
            this.welcomeShowed = isAnimationCompleted
            useAnimationState().setWelcomeState(isAnimationCompleted)
        },
        mountUser(id: string | string[]) {
            const router = useRouter()
            axios({
                method: "post",
                url: "https://api.vk.com/method/users.get",
                withCredentials: true,
                data: `user_ids=${id}&fields=photo_100,photo_200_orig,stories,about,activities,bdate,career,city,connections,contacts,counters,country,domain,education,interests,occupation,photo_max_orig,status,universities,relation,counters,&access_token=${this.accessToken}&v=5.131`,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                }
            }).then((response) => {
                if (response.data.error) {
                    router.push({
                        name: 'main'
                    })
                } else {
                    this.userInfo = response.data.response[0];
                }
            })
        }
    }
}
</script>
<style scoped>

.app_tieser {
    width: 100%;
    height: 100vh;
}

</style>