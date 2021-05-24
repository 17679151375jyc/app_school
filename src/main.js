import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker);//省市区联动插件

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify); //滑动验证插件

import VConsole from 'vconsole';
// const vConsole = new VConsole();
// export default vConsole;

import router from './router/router'
import '@/style/style.css'
import '@/style/styleFelw.css'
import '@/style/commont_css.stylus'
import '@/style/transfrom.css'
import { components } from './components/components.js'//自定义组件注册为全局
// Vue.use(components.PopupPage)
for (let item in components) {
    Vue.use(components[item])
}//引用全局路由

Vue.config.productionTip = false

import Storage from './storage'
Vue.prototype.$storage = Storage;

import VueCropper from 'vue-cropper'
Vue.use(VueCropper)//图片裁剪插件

import { filters } from '@/utils/filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import '@/utils/tools'

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '3416f5b5b3f5c6af855ae6372c057bdc',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});

import store from './store/index'
import 'amfe-flexible'
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')