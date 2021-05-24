import Vue from 'vue'
Vue.prototype.clog = (val)=>{
    console.log('----------------------分割线---------------------');
    console.log('数据类型',typeof val);
    console.log('打出:', val);
    console.log('----------------------分割线---------------------')
}