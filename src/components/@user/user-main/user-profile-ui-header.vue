<template>
    <header class="user_ui_header">
        <div class="profile_info" v-if="userInfo.id">
            <div class="profile_story">
                <img class="profile_avatar" :src="userInfo.photo_200_orig" alt="profile avatar">
            </div>
            <div class="profile_about">
                <div class="profile_full_name">
                    <h1 class="profile_first_name">{{ userInfo.first_name }}</h1>
                    <h1 class="profile_last_name">{{ userInfo.last_name }}</h1>
                    <span class="profile_status_content">
                        <p class="profile_status_text">{{ userInfo.status }}</p>
                    </span>
                </div>
                <div class="profile_counters">
                    <div class="profile_friends">
                        <PhUsers></PhUsers>
                        <h1>Друзей: {{ userInfo.counters.friends }}</h1>
                    </div>
                    <div class="profile_followers">
                        <Followed></Followed>
                        <h1>Подписчиков: {{ userInfo.counters.clips_followers }}</h1>
                    </div>
                </div>
                <div class="profile_additional_info">
                    <h1 class="profile_city">
                        <MdiHomeVariant />
                        {{ userInfo.city.title }}
                    </h1>
                    <h1 class="profile_study">
                        <IcTwotoneMenuBook></IcTwotoneMenuBook>
                        {{ userInfo.university_name }}
                    </h1>
                </div>
            </div>
            <div class="profile_contact">
                <div @click="showMsgModal" class="profile_msg">
                    <p class="profile_contact_additional">Настройки</p>
                    <PhGear></PhGear>
                    <div v-if="msgModal == 'shown'" class="profile_msg_modal modal_arrow_right">
                        <h1>К сожалению с данным типом приложения - настройка ограничена.</h1>
                    </div>
                </div>
                <div @click="showNotifyModal" class="profile_notify">
                    <p class="profile_contact_additional">Оповещения</p>
                    <div class="count_notification"><h1> {{ notificationCount }} </h1></div>
                    <LucideBell></LucideBell>
                    <div v-if="notifyModal == 'shown'" class="profile_notify_modal modal_arrow_right">
                        <h1>...</h1>
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
            this.notificationCount = response.data.response.count
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
        font-size: 16px;
        opacity: .7;
    }

    .profile_contact {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
    }

    .profile_msg {
        width: auto;
        height: 48px;
        border-radius: 100%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        cursor: pointer;
    }

    .profile_msg svg {
        width: 22px;
        height: 22px;
    }

    .profile_notify {
        width: auto;
        height: 48px;
        border-radius: 100%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        cursor: pointer;
    }

    .count_notification {
        font-size: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #383838;
        position: absolute;
        background-color: rgb(0, 119, 255);
        width: 18px;
        height: 18px;
        border-radius: 100%;
        right: 32px;
        top: 110px;
        user-select: none;
        box-sizing: border-box;
        padding: 2px;
        border: #242424 2px solid;
        color: white;
    }

    .profile_msg_modal {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 20px;
        right: 170px;
        width: 200px;
        font-size: small;
        background-color: #383838;
        box-sizing: border-box;
        padding: 12px;
        border-radius: 8px;
        user-select: none;
        cursor: default;
    }

    .profile_msg_modal:after,
    .profile_notify_modal::after {
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

    .profile_notify_modal {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 90px;
        right: 170px;
        width: 200px;
        font-size: small;
        background-color: #383838;
        box-sizing: border-box;
        padding: 12px;
        border-radius: 8px;
        user-select: none;
        cursor: default;
    }

    .profile_contact_additional {
        font-size: 12px;
    }

    .profile_additional_info {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    .profile_city,
    .profile_study {
        display: flex;
        flex-direction: row;
        gap: 5px;
        opacity: .7;
        font-size: 13px;
        align-items: center;
        user-select: none;
    }

    .profile_friends,
    .profile_followers {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
    }

    .profile_counters {
        display: flex;
        flex-direction: row;
        font-size: 10px;
        gap: 12px;
    }

    .profile_status_content {
        width: auto;
        height: 1rem;
        background-color: #1b1b1b;
        padding: 6px;
        border-radius: 12px;
    }

    .profile_status_text {
        font-size: 12px;
        user-select: none;
    }

</style>