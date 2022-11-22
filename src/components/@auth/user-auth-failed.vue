<template>
    <section class="failed_main">
        <div class="auth_failed">
            <h1 class="failed_text">Вы не предоставили необходимые права доступа, а без них я работать отказываюсь! 😔</h1>
            <router-link to="/" class="return_link"><button class="return_btn">Исправиться</button></router-link>
        </div>
    </section>
</template>
<script lang="ts">
export default {
    name: 'AuthFailed',
}
</script>
<style scoped>

    .failed_main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .auth_failed {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        display: flex;
        margin-bottom: 120px;
    }

    .return_btn {
        background: rgb(0, 119, 255); 
        width: 10rem;
        height: 2.5rem;
        display: flex;
        padding: 0 10px 0 10px;
        align-items: center;
        border-radius: 8px;
        justify-content: center;
        border: none;
        transition: all 0.4s;
        cursor: pointer;
    }

    .return_btn:hover {
        -webkit-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
        -moz-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
        box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
    }

    .return_link {
        text-decoration: none;
    }

</style>