<template>
   <div>
       <headerModu
            :title="'我的资料'"
            :leftTz='true'
            :Isright="false"/>
        <div class="box_box">
            <ul>
                <li class="dis_row_between_center li_css" @click='pageClick(0)'>
                    <span>
                        <i class="iconfont iconavatar" style="margin-right:0vw"></i>
                        {{titleList[0]}}</span>
                    <div class="headerImg_css">
                        <img :src="formData.headerImg">
                    </div>
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(1)'>
                    <span>
                        <i class="iconfont iconzhanghao1" style="margin-right:0vw"></i>
                        {{titleList[1]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.zhanghao" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(2)'>
                    <span>
                        <i class="iconfont iconshoujihao" style="margin-right:0vw"></i>
                        {{titleList[2]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.phone" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(3)'>
                    <span>
                        <i class="iconfont iconwenjian" style="margin-right:0vw"></i>
                        {{titleList[3]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.name" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(4)'>
                    <span>
                        <i class="iconfont iconxingbie" style="margin-right:0vw"></i>
                        {{titleList[4]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.sex" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(5)'>
                    <span>
                        <i class="iconfont iconnianling" style="margin-right:0vw"></i>
                        {{titleList[5]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.age" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(6)'>
                    <span>
                        <i class="iconfont iconxuexiao1" style="margin-right:0vw"></i>
                        {{titleList[6]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.schoolName" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(7)'>
                    <span>
                        <i class="iconfont iconshengshi" style="margin-right:0vw"></i>
                        {{titleList[7]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.areaNames" type="text" :readonly='status' class="Input_css">
                </li>
                <li class="dis_row_between_center li_css" @click='pageClick(8)'>
                    <span>
                        <i class="iconfont icongexingqianming" style="margin-right:0vw"></i>
                        {{titleList[8]}}</span>
                    <input :placeholder="placeholderText" v-model="formData.autographText" type="text" :readonly='status' class="Input_css">
                </li>
            </ul>
        </div>
        <transition name="slide-fade">
            <router-view :title='title'></router-view>
        </transition>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           title: '头像',
           formData: {
               headerImg: require('_bj/title1.png'),
               zhanghao: 'jycCode',
               phone: '13712345678',
               name: '偷猪的韩信',
               sex: '男',
               age: 18,
               schoolName: '宜春学院',
               areaNames: '江西省-宜春市',
               autographText : '无'
           },
           text: '',
           status: true,
           placeholderText:'点击更改',
           titleList:['头像','账号', '手机号', '名称', '性别', '年龄', '学校名称', '所在地区', '个性签名']
       }
   },
   methods:{
       pageClick(index){
           const T = this.$createToast({
                    time: 1000,
                    txt: '该信息不可更改',
                    type: 'txt'
                })
           if(index == 1){
               T.show()
           }else{
                this.title = this.titleList[index]
                this.$router.push({path:'/myInfo/editInfo'})
           }
       }
   }
}

</script>
<style lang='stylus' scoped>
.box_box{
    width 100vw;
    min-height 50vh
    margin-top 3vw
    background-color #FCFDFE
}
.li_css{
    width 92%
    padding 0 4vw
    min-height 15vw
    border-bottom 1px solid #DFECFF
    color #38f
    font-size 4vw
    line-height 12vw
}
.Input_css{
    max-width 70vw
    height 11vw
    outline none
    text-align right 
    padding 0 2vw
    background-color transparent
    color #333
    overflow hidden
    font-size 4vw
    white-space nowrap
    text-overflow ellipsis
}
.headerImg_css{
    width 12vw
    height 12vw
    border-radius 50%
    border 2px solid #38f
    margin 1vw 
    overflow hidden
}
.headerImg_css img{
    width 100%
    height 100%
}
</style>