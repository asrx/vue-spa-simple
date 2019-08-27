import JwtToken from './helpers/jwt'

window._ = require('lodash')

try {
    window.Popper = require('popper.js').default
    window.$ = window.jQuery = require('jquery')
}catch (e) {}

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.baseURL = ''
// window.axios.defaults.headers.common['Authorization'] = ''
// window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 每次发起请求都加入headers
window.axios.interceptors.request.use(config => {
    if (JwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
    }
    return config
},error => {
    return Promise.reject(error)
})
