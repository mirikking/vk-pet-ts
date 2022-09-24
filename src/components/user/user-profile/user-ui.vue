<template>
    <div>
        
    </div>
</template>
<script lang="ts">
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/userState.ts';

export default {
    data()  {
        return {
            accessToken: useUserStore().userAccess.accessToken,
            userId: useUserStore().userAccess.userId,
            isAuthorized: useUserStore().userAccess.isAuthorized
        }
    },
    created() {
        const router = useRouter();
        axios({
            method: "post",
            url: "https://api.vk.com/method/users.get",
            withCredentials: true,
            data: `user_ids=${this.userId}&fields=photo_100&access_token=${this.accessToken}&v=5.131`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            if (response.data.error) {
                router.push({
                    name: 'main'
                })
            } else {
                console.log(response.data.response[0])
            }
        })
    }
}
</script>
<style>
    
</style>