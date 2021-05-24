<template>
  <div>
    <div class="dis_row_between_center header">
      <div class="dis_row_start_center left_css">
        <span class="leftData_css" @click='leftDataClick' v-if='IsleftData'>{{leftData}}</span>
        <div v-if="IsLeft && !IsleftData" class="dis_row_start_center" @click="leftImgClick">
          <img
            :style="leftImgCss" 
            :src="imgLeftUrl">
        </div>
      </div>
      <div class="dis_row_center_center cont_css" :style="contTitleCss">{{title}}</div>
      <div class="dis_row_end_center right_css">
        <div @click="rightClick" v-if="Isright&&!IsRightIcon" :style="rightTextCss">{{rightData}}</div>
        <div class="dis_row_end_center" @click="rightClick">
          <img v-if="Isright&&IsRightIcon" :style="rightImgCss" :src="rightImgUrl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerModu',
  data(){
    return{
      imgLeftUrl: require('_icon/back_1.png')
    }
  },
  props:{
    rightImgUrl:{//左边返回图标
      type: String,
      default: require('_icon/back_1.png')
    },
    leftImgCss:{//图标样式
      type: Object,
      default:()=> {
        return {
          width: '5vw',
          height: '5vw'
        }
      }
    },
    leftTz:{
      type: Boolean,
      default: false
    },
    title: {//标题
      type: String,
      default: '标题'
    },
    contTitleCss: {//标题样式
      type: Object,
      default:()=> {
        return {
          color: '#ffffff',
          fontSize: '4.8vw'
        }
      }
    },
    rightData: {//右边文字
      type: String,
      default: '确定'
    },
    rightTextCss: {//右边文字样式
      type: Object,
      default:()=> {
        return {
          color: '#ffffff',
          fontSize: '4vw'
        }
      }
    },
    rightImgCss: {//右边图标样式
      type: Object,
      default:()=> {
        return {
          width: '5vw',
          height: '5vw'
        }
      }
    },
    IsLeft: {
      type: Boolean,
      default: true
    },
    IsleftData:{
      type: Boolean,
      default: false
    },
    leftData:{
      type: String,
      default: '取消'
    },
    IsTitle: {
      type: Boolean,
      default: true
    },
    Isright: {
      type: Boolean,
      default: true
    },
    IsRightIcon: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    leftDataClick(){
      let that = this
      that.$emit('leftDataClick', {});
    },
    leftImgClick(){
      let that = this 
      that.$router.back()
    },
    rightClick(){
      let that = this
      that.$emit('rightClick', {});
    }
  }
}
</script>
<style lang="stylus" scoped>
.header{
   width: 96%;
   height: 12vw;
   padding: 0 2vw
   border-bottom: 1px solid #f5f5f5;
   background-color #3388ff
   color #ffffff
}
.header .left_css{
  height: 100%;
  min-width: 20vw
}
.header .cont_css{
  height: 100%;  
  width: 40vw;
} 
.header .right_css{
  height: 100%;
  min-width: 20vw
}
.leftData_css{
  font-size 4vw
}
</style>
