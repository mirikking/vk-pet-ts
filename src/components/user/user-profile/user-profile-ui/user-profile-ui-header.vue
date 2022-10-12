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
                <div @click="showMsgModal" class="profile_msg">
                    <svg width="20" height="20" viewBox="-5.5 -5 36 36" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H7V7H17V9Z" fill="currentColor" /><path d="M7 13H17V11H7V13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z" fill="currentColor" /></svg>
                    <div v-if="this.msgModal == 'shown'" class="profile_msg_modal modal_arrow_right">
                        <h1>К сожалению с данным типом приложения - отправка сообщений ограничена.</h1>
                    </div>
                </div>
                <div @click="showNotifyModal" class="profile_notify">
                    <div class="count_notification"><h1> {{ this.notificationCount }} </h1></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z" fill="currentColor" /></svg>
                    <div v-if="this.notifyModal == 'shown'" class="profile_notify_modal modal_arrow_right">
                        <h1>К сожалению с данным типом приложения - отправка сообщений ограничена.</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import anime from "animejs";
import axios from "axios";

export default {
    name: 'ProfileHeader',
    props: {
        userInfo: {
            type: Object,
            required: true
        },
        accessToken: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            msgModal: 'hidden' as string,
            notifyModal: 'hidden' as string,
            notificationCount: 0 as number,
        }
    },
    created() {
        axios({
            method: "post",
            url: "https://api.vk.com/method/notifications.get",
            withCredentials: true,
            data: `count=1&access_token=${this.accessToken}&v=5.131`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            console.log(response.data.response.count)
        })
    },
    mounted() {
        anime( {
            targets: ".user_ui_header",
            opacity: [
                {value: 1, duration: 500, easing: 'linear'}
            ]
        })

    },
    methods: {
        showMsgModal() {
            if (this.msgModal == 'hidden') {
                this.msgModal = 'shown';
            } else {
                this.msgModal = 'hidden';
            }
            return;
        },
        showNotifyModal() {
            if (this.notifyModal == 'hidden') {
                this.notifyModal = 'shown';
            } else {
                this.notifyModal = 'hidden';
            }
            return;
        }
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
        transition: all 0.5s;
        cursor: pointer;
    }

    .profile_msg:hover {
        -webkit-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
    }

    .profile_msg svg {
        width: 32px;
        height: 32px;
    }

    .profile_notify {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        background-color: #383838;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        cursor: pointer;
    }

    .profile_notify:hover{
        -webkit-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 18px 1px rgba(255, 255, 255, 0.2);
    }

    .count_notification {
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #383838;
        position: absolute;
        background-color: #fff;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        right: 35px;
        top: 125px;
        user-select: none;
        opacity: 0;
    }

    .profile_msg_modal {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 20px;
        right: 112px;
        width: 200px;
        font-size: small;
        background-color: #383838;
        box-sizing: border-box;
        padding: 12px;
        border-radius: 8px;
        user-select: none;
        cursor: default;
    }

    .profile_msg_modal:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: solid transparent;
    }

    .modal_arrow_right:after {
        border-left-color: #383838;
        border-width: 15px;
        left: 100%;
        top: 40%;
        margin-top: -15px;
    }

</style>