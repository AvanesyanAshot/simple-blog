<template>
    <div>
        <h1>{{user.name}}</h1>
        <hr />
        <b>{{user.email}}</b>
        <hr />
        <nuxt-link to='/'>home</nuxt-link>
    </div>
</template>

<script>
export default {
    validate({params}) {
        return /^\d+$/.test(params.id) //! проверка на число  
    },
    async asyncData({params, error, store}){
        try {
            const user = await store.dispatch('users/fetchUserById', params.id)
            return {user}
        } catch (e) {
            error(e)
        }
    }
}   
</script>