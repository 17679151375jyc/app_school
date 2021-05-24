export default {
    state: {
        token: '',
        pageStatus: 0
    },
    getters: {

    },
    mutations:{
        setToken(state, token){
            state.token = token
        },
        setPageStatus(state, pageStatus){
            state.pageStatus = pageStatus
        }
    },
    actions: {
        abc({ commit }){
            commit('setToken', 'token111')
        },
        aaa(context, data){
            context.state.token = data
        }
    }
}