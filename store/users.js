export const state = () => ({
    users: []
})

export const mutations = {
    setUsers(state, users){
        state.users = users
    }
}

export const actions = {
    async fetchUsers({commit}) {
        try {
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', users)
        } catch (error) {
            throw error
        }
    },
    async fetchUserById({}, userId){
        try {
            return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        } catch (error) {
            throw error
        }
        
    }
}

export const getters = {
    users: state => state.users
}