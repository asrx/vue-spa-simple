import * as types from './../mutation-type'
import * as api from './../api-list'

export default {
    state: {
        authenticated: false,
        name: null,
        email: null
    },
    mutations: {
        [types.SET_AUTH_USER](state,payload){
            state.authenticated = true
            state.name = payload.user.name
            state.email = payload.user.email
        },
        [types.UNSET_AUTH_USER](state){
            state.authenticated = false
            state.name = null
            state.email = null
        }
    },
    actions: {
        setAuthUser({commit,dispatch}){
            return axios.get(api.AUTH_ME).then(response => {
                commit({
                    type: types.SET_AUTH_USER,
                    user: response.data
                })
            })
        },
        unsetAuthUser({commit}){
            commit({
                type: types.UNSET_AUTH_USER
            })
        },
        refreshToken({commit,dispatch}){
            return axios.post(api.AUTH_REFRESH_TOKEN).then(response => {
                dispatch('loginSuccess',response.data)
            }).catch(error => {
                dispatch('logoutRequest')
            })
        }
    }
}
