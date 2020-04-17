<template>
    <div class="error-layout">
        <div class="error-content">
            <h1 class="error-title">Ошибка 404</h1>
            <nuxt-link class="error-link" to="/">Вернуться на главную страницу</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .error-context {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .error-title {
        color: rgb(145, 6, 6);
        margin-bottom: 1rem;
    }
    .error-link {
        color:royalblue;
    }
</style>