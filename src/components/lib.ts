import UserAuth from './user/user-interact/user-auth.vue';
import UserCallback from './user/user-interact/user-callback.ts'
import UserInit from './user/user-profile/user-profile-init.vue';
import Welcome from './user/user-profile/user-profile-welcome.vue';
import AuthFailed from './user/user-interact/user-auth-failed.vue';
import ProfileHeader from './user/user-profile/user-profile-ui/user-profile-ui-header.vue';

export default [
    UserAuth, 
    UserCallback, 
    UserInit, 
    Welcome, 
    AuthFailed, 
    ProfileHeader
];