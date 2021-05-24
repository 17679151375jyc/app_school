<template>
  <div>
    <headerModu :title="'添加学校标记点'" :Isright="false" />
    <span class="title_box">
      选择经纬度
      <i class="iconfont iconkeshi icon_css"></i>
    </span>
    <div class="dis_row_between_center jingweiTitle_css">
        <span>经度</span>  
            |
        <span>纬度</span>  
    </div>
    <input type="text" class="input_css" v-model="xyValue" readonly placeholder="点击选择经纬度" @click="inputClick" />
    <span class="title_box">
      输入学校名
      <i class="iconfont iconkeshi icon_css"></i>
    </span>
    <input type="text" class="input_css" v-model="schoolName" placeholder="输入学校全称" />
    <cube-button :active="true" class="success_but_css but_css" @click="determine">确认添加</cube-button>
    <popupModu :IsShow="IsShow" :titleText="'选择经纬度'" @coloseClick="coloseClick()" @quedingClick="quedingClick">
      <div slot="popup_div" class="map_box">
          <el-amap 
            class="map_css"
            vid="amap" 
            :zoom="14" 
            :center="center"
            :resizeEnable='true'
            :rotateEnable='true'
            :events="events"></el-amap>
            <div class="dis_row_between_center div_input_css">
                <span>经度</span>
                <input v-model="longitudeVal" type="text">   
            </div>
            <div class="dis_row_between_center div_input_css">
                <span>纬度</span>
                <input v-model="latitudeVal" type="text">   
            </div>
      </div>
    </popupModu>
    <popupModu 
        :IsShow='IsShowIf' 
        @quedingClick='quedingClick1'
        @coloseClick="coloseClick1()">
        <div slot='popup_div' style='text-align:center'>
            图标将直接添加到云地图，是否继续？
        </div>
    </popupModu>
  </div>
</template>

<script>
let that;
export default {
  name: "",
  data() {
    return {
        IsShowIf: false,
      IsShow: false,
      center: [114.356333,27.791886], // 指定地图中心点
      events:{
          click: (e) => {
            that.longitudeVal = e.lnglat.O;
            that.latitudeVal = e.lnglat.P;
            console.log(that.longitudeVal, that.latitudeVal)
          }
      },
      longitudeVal: null,
      latitudeVal: null,
      xyValue: null,
      schoolName: null
    };
  },
  methods: {
    inputClick() {
        that.IsShow = true;
    },
    coloseClick() {
      that.IsShow = false;
    },
    coloseClick1(){
      that.IsShowIf = false;
    },
    quedingClick(){
        that.xyValue = that.longitudeVal + "——" + that.latitudeVal;
        that.IsShow = false;

    },
    quedingClick1(){
        console.log('继续')
    },
    determine(){
      that.IsShowIf = true;
    }
  },
  created(){
    that = this
  }
};
</script>
<style lang='stylus' scoped>
.title_box {
  display: block;
  margin: 1vw 0;
  padding-left: 2vw;
  width: 40%;
  height: 9.31vw;
  line-height: 10vw;
  font-size: 4.5vw;
  color: #fff;
  border-top-right-radius: 5vw;
  border-bottom-right-radius: 5vw;
  background: linear-gradient(to right, #2583FA, #A056FB) !important;
}

.icon_css {
  margin-left: 2vw;
  margin-top: -1vw;
  font-size: 4.5vw;
}

.input_css {
  width: 96vw;
  padding: 0 2vw;
  outline: none;
  height: 10vw;
  text-align: center;
  background-color: #EDF4FD;
  font-size: 3.74vw;
  border-bottom: 1px solid #38f;
}
.map_box{
    width 100%
    height 55vh
}
.map_css{
    width 100%
    height 78%
}
.div_input_css{
    width 100%
    height 8vw
    border-bottom 1px solid #38f
    margin-top 2vw
    span{
        color #38f
    }
    input{
        height 95%
        width 82%
        background-color #EDF4FD
        padding 0 2%
        text-align center
    }
}
.jingweiTitle_css{
    width 80vw
    height 6vw
    line-height 6vw
    padding 0 10vw
    font-size 3vw
    color #38f
}
.but_css{
    width: 96%
    height 12vw
    padding 0
    margin 3vw auto
    margin-top 20vw

}
</style>