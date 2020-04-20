<template>
    <div class="container">
        <nuxt />
    </div>
</template>

<script>
export default {
    computed:{
        error(){
            return this.$store.getters.error
        }
    },
    watch:{
        error(value){
            this.$message.error(value)
        }
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 4rem;
    }
</style>