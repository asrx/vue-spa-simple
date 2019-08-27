import JwtToken from './../../helpers/jwt'
import * as api from './../api-list'

export default {
    methods: {
        loginRequest({dispatch}, formData){
            return axios.post(api.AUTH_LOGIN, formData).then(response => {
                dispatch('loginSuccess', response.data)
            })
        },
        loginSuccess({dispatch}, tokenResponse){
            JwtToken.setToken(tokenResponse.token)
            // JwtToken.setAuthId(tokenResponse.auth_id)
            dispatch('setAuthUser')
        },
        logoutRequest({dispatch}){
            return axios.post(api.AUTH_LOGOUT).then(response => {
                dispatch('unsetAuthUser')
                JwtToken.removeToken()
            })
        }
    }
}
