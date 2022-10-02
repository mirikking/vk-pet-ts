<template>
    <div class="auth_failed">
        <h1>Вы не предоставили необходимые права доступа, а без них я работать отказываюсь! 😔</h1>
        <button class="return_btn" @click="$router.push({ name: 'main' })">Исправиться</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'AuthFailed',
}
</script>
<style scoped>
    
    .auth_failed {
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
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
    }

    .return_btn:hover {
        -webkit-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
        -moz-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
        box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.5);
    }

</style>