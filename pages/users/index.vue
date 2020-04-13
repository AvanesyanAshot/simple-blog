<template>
    <section>
        <h1>{{ pageTitle }}</h1>
        <ul>
            <li v-for="user of users" :key='user.id'>  
                <a href="#" @click.prevent="goTo(user)">{{ user.name }} {{ user.email }}</a>              
                
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    async asyncData({store, error}) {
        try {
            const users = await store.dispatch('users/fetchUsers')
            return {users}
        } catch (error) {
            error(error);
        }
    },
    data() { 
        return{
            pageTitle: 'USERS'
        }
    },
    methods:{
        goTo(user) {
            this.$router.push(`/users/` + user.id)
        }
    }
}
</script>