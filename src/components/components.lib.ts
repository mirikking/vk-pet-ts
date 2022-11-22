import UserAuth from './@auth/user-auth.vue';
import UserInit from './@user/user-init/user-profile-init.vue';
import Welcome from './@user/user-init/user-profile-welcome.vue';
import AuthFailed from './@auth/user-auth-failed.vue';
import ProfileHeader from './@user/user-main/user-profile-ui-header.vue';

export default [
    UserAuth,  
    UserInit, 
    Welcome, 
    AuthFailed, 
    ProfileHeader
];