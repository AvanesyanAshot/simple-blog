export const state = () => ({
    token: true
})

export const actions = {
    async login({commit, dispatch}, formData) {
        try {
            const token = await new Promise((resolve, reject) =>{
                setTimeout(()=> resolve('mock-token'),2000)
            })
            // console.log(2);
            
            dispatch('setToken',token)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
        
    },
    async createUser({commit}, formData) {
        try {
            console.log("create User", formData)
        } catch (e) {
            
        }
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
        state.token = null
    }
}

export const getters  = {
    isAuth: state => !!state.token
}