<script lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import { useUserStore } from '../../../stores/userState.ts'
    
    export default {
        name: 'AuthCallback',
        setup() {
            const tokenParseRegex: RegExp = /access_token=(.*?)&/;
            const idParseRegex: RegExp = /user_id=(.*?)$/;
            const exAccessToken: RegExpMatchArray | null = useRoute().hash.match(tokenParseRegex);
            const exUserId: RegExpMatchArray | null = useRoute().hash.match(idParseRegex);
            if (exAccessToken![1] !== null) {
                useUserStore().userAccess.accessToken = exAccessToken![1];
                useUserStore().userAccess.userId = exUserId![1];
                useUserStore().userAccess.isAuthorized = true;
                localStorage.setItem('userAccess', JSON.stringify(useUserStore().userAccess))
            } else {
                return
            }
            if (useUserStore().userAccess.accessToken !== null) {
                useRouter().push({
                    name: 'UI',
                    params: {usedId: exUserId![1]}
                })
            }
        }   
    }
</script>