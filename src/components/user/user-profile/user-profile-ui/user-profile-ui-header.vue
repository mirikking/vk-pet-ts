<template>
    <header class="user_ui_header">
        <div class="profile_info">
            <div class="profile_story">
                <img class="profile_avatar" :src="this.userInfo.photo_200_orig" alt="profile avatar">
            </div>
            <div class="profile_about">
                <div class="profile_full_name">
                    <h1>{{ this.userInfo.first_name }}</h1>
                    <h1>{{ this.userInfo.last_name }}</h1>
                </div>
                <div class="profile_full_about">
                    <h2 class="profile_about_text" v-if="this.userInfo.about"> {{ this.userInfo.about }} </h2>
                    <h2 class="profile_about_text" v-else>No BIO info.😩</h2>
                </div>
            </div>
            <div class="profile_contact">
                <div class="profile_msg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H7V7H17V9Z" fill="currentColor" /><path d="M7 13H17V11H7V13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z" fill="currentColor" /></svg>
                </div>
                <div class="profile_share">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z" fill="currentColor" /></svg>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import anime from "animejs";

export default {
    name: 'ProfileHeader',
    props: {
        userInfo: {
            type: Object,
            required: true
        }
    },
    mounted() {
        anime( {
            targets: ".user_ui_header",
            opacity: [
                {value: 1, duration: 500, easing: 'linear'}
            ]
        })

    }
} 
</script>
<style scoped>

    .user_ui_header {
        opacity: 0;
        box-sizing: border-box;
        padding: 2%;
    }

    .profile_info {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    
    .profile_story {
        padding: 0.5rem;
    }
    
    .profile_avatar {
        border-radius: 50%;
        width: 132px;
        height: 132px;
    }

    .profile_full_name {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .profile_full_name h1 {
        font-size: large;
    }

    .profile_info {
        display: flex;
        flex-direction: row
    }

    .profile_about {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        gap: 20px;
    }

    .profile_about_text {
        opacity: .7;
    }

    .profile_contact {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .profile_msg {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        background-color: #383838;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
    }

    .profile_share {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        background-color: #383838;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
    }

</style>