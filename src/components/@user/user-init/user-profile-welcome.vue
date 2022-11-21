<template>
    <div class="welcome_notify">
        <div class="welcome_text_show">
            <img class="welcome_avatar" :src="userInfo.photo_100" alt="">
            <h1>Здравствуйте, {{ userInfo.first_name }}</h1>
        </div>
    </div>
</template>
<script lang="ts">
import anime from 'animejs'

export default {
    name: 'Welcome',
    props: {
        userInfo: {
            type: Object,
            required: true
        },
    },
    mounted() {
        anime({
            targets: ".welcome_text_show",
            opacity: [
                {value: 1, duration: 2000, easing: "linear"},
                {value: 0, duration: 1000, easing: "linear"},
            ],
            complete: (anim: any) =>  {
                if (anim.finished) {
                    this.$emit('welcomeMsg', true)
                }
            }
        })
    }
    
}
</script>
<style scoped>

    .welcome_notify {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .welcome_text_show {
        display: flex;
        flex-direction: row;
        gap: 14px;
        opacity: 0;
        align-items: center;
    }

    .welcome_avatar {
        border-radius: 100%;
        width: 36px;
        height: 36px;
    }

</style>