import axios from 'axios';
import qs from 'qs';
const service = axios.create({
    baseURL: 'http://dingtalk.test.jxwrd.gov.cn', // api的base_url
    timeout: 15000, // 请求超时时间
    // headers: {'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
    headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Content-Type': 'application/json' }
});
//添加请求拦截器
service.interceptors.request.use(request => {
    //在发送请求之前做某事，比如说 设置loading动画显示
    return request
}, error => {
    //请求错误时做些事
    return Promise.reject(error)
})

//拦截返回的数据res,通过返回值直接获取到服务器的数据
service.interceptors.response.use(response => {
    const res = response.data;
    const _CODE = res.code;
    if (_CODE === 401 || _CODE === 500 || _CODE === 400) {
        // alert(res.message)
    }
    return Promise.resolve(res);
}, error => {
    // alert(res.message)
    return Promise.reject(error);
})
export default service;