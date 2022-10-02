<template>
    <main>
        <Welcome 
        v-if="!this.isWelcomeShowed"
        :userInfo="this.userInfo"
        @welcomeShown="destroyWelcome"
        ></Welcome>
        <ProfileHeader
        v-if="this.isWelcomeShowed"
        :userInfo="this.userInfo"
        ></ProfileHeader>
    </main>
</template>
<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/userState.ts';

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
            isWelcomeShowed: false
        }
    },
    created() {
        const router = useRouter();
        axios({
            method: "post",
            url: "https://api.vk.com/method/users.get",
            withCredentials: true,
            data: `user_ids=${this.userId}&fields=photo_100,photo_200_orig,stories,about,activities,bdate,career,city,connections,contacts,counters,country,domain,education,followers_count,interests,occupation,photo_max_orig,status,universities,relation&access_token=${this.accessToken}&v=5.131`,
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
        destroyWelcome(isAnimationCompleted:Boolean) {
            this.isWelcomeShowed = isAnimationCompleted;
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