import axios from 'axios'
import store from '@/store'
import qs from 'qs'
class HttpRequest {
    getInsideConfig() {
        const config = {
            baseURL: 'http://dingtalk.test.jxwrd.gov.cn',
            headers: {
                // 'token': store.state.user.token,
                // 'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return config
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            if (store.state.app && store.state.app.token) {
                config.data.token = store.state.app.token
            } else {
                console.log(config)
                // config.data.token = ''
            }
            if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') { // 如果为json格式，不需要转码
                config.data = qs.stringify(config.data)
            }
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            return res
        }, error => {
            return Promise.reject(error)
        })
    }
    request(options) {
        // console.log('options', options)
        // options.url = `${options.url}` // 把token和userId作为参数写在url后面
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
const URL = new HttpRequest()
export default URL;