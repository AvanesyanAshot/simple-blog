export const state = () => ({
    token: null
})

export const actions = {
    async login({commit, dispatch}, formData) {
        const token = await new Promise(resolve =>{
            setTimeout(()=> resolve('mock-token'),2000)
        })
        console.log('b')
        dispatch('setToken',token)
    },
    setToken({commit}, token){
        commit('setToken', token)
    },
    logout({commit}){
        commit('clearToken')
    }

}

export const mutations = {
    setToken(state, token){
        state.token = token
    },
    clearToken(state){
        console.log(state.token)
        state.token = null
    }
}

export const getters  = {
    isAuth: state => !!state.token
}