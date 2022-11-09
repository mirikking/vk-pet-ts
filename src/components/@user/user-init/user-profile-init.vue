<template>
    <main>
        <Welcome 
            v-if="!this.welcomeShowed"
            :userInfo="this.userInfo"
            @welcomeMsg="welcomeMsg"
        ></Welcome>
        <ProfileHeader
            v-if="this.welcomeShowed"
            :userInfo="this.userInfo"
            :accessToken="this.accessToken"
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
            accessToken: useUserStore().userAccess.accessToken,
            userId: useUserStore().userAccess.userId,
            isAuthorized: useUserStore().userAccess.isAuthorized,
            userInfo: {
                type: Object,
                default: {}  
            },
            welcomeShowed: useAnimationState().animationState.welcomeShowed
        }
    },
    mounted() {
        const router = useRouter();
        axios({
            method: "post",
            url: "https://api.vk.com/method/users.get",
            withCredentials: true,
            data: `user_ids=${this.userId}&fields=photo_100,photo_200_orig,stories,about,activities,bdate,career,city,connections,contacts,counters,country,domain,education,interests,occupation,photo_max_orig,status,universities,relation,counters,&access_token=${this.accessToken}&v=5.131`,
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
    },
    methods: {
        welcomeMsg(isAnimationCompleted:string) {
            this.welcomeShowed = isAnimationCompleted;
            useAnimationState().animationState.welcomeShowed = isAnimationCompleted;
            sessionStorage.setItem('animationState', JSON.stringify(useAnimationState().animationState))
        }
    }
}
</script>
<style scoped>

main {
    width: 100%;
    height: 100vh;
}

</style>