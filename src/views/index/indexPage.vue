<template>
  <div class="Page_css">
    <div class="dis_row_between_center indexPage_css">
      <router-link :to="{path:'/queryIndex'}" style="color:#fff">
        <i class="iconfont iconchazhao icon_jia_css"></i>
      </router-link>
      <div style="position:relative;margin-right:2vw">
        <i class="iconfont iconweizhi icon_jia_css" @click="choose"></i>
        <span style="font-size: 3.74vw;" @click="choose">{{ CityValue }}</span>
        <!-- <router-link :to="{path:'/index/newInfoList'}" style="color:#fff">
          <i class="iconfont iconlingdang icon_jia_css" style="margin:0 2vw 0 4vw"></i>
          <span class="span_new_css"></span>
        </router-link> -->
      </div>
    </div>
    <div style="width:100%;height:25vw;margin-top:1vw;background-color:#fff">
      <cube-slide ref="slide">
        <cube-slide-item>
          <img class="img_title_css" :src="require('_bj/title1.png')">
        </cube-slide-item>
        <cube-slide-item>
          <img class="img_title_css" :src="require('_bj/title2.png')">
        </cube-slide-item>
        <cube-slide-item>
          <img class="img_title_css" :src="require('_bj/title3.png')">
        </cube-slide-item>
        <cube-slide-item>
          <img class="img_title_css" :src="require('_bj/title4.png')">
        </cube-slide-item>
        
      </cube-slide>
    </div>
    <div class="dis_row_between_center span_title_css">
      <cube-input 
            placeholder="请输入关键字"
            v-model="inputText" 
            class="input_text_css"
            clearable></cube-input>
      <cube-button :active="true" class="success_but_css">搜索</cube-button>
    </div>
    <div style="width:100%;padding:0%;">
      <cube-scroll 
        class="sco_yangshi"
          :options="options"
          @pulling-up="onPullingUp"
          @pulling-down="onPullingDown"
        ref="scroll">
        <ul>
            <li class="li_box_info_css" @click="detailClick" v-for='(item, index) in 10' :key='index'>
                <i class="iconfont icontianjiajiahaowubiankuang-- jia_uptate_css" @click.stop="uptateClick"></i>
                <span class="topOne_css">top:{{1}}</span>
                <div class="img_list_box_css">
                  <ImgListModu :imgList='imgList'/>
                </div>
                <span class="school_css">
                    <i class="iconfont iconxueli" style='color: #fff;margin-right: 2vw'></i>宜春学院</span>
                <span class="dis_row_center_center num_css">
                  <span>4张</span>
                </span>
                <span class="li_info_css">
                    <i class="iconfont iconxuexiaomingpian" style='color: #fff;margin-right: 2vw;font-size:3vw'></i>二本</span>
                <span class="li_info_css" style='border-bottom:0;'>
                    <i class="iconfont icondiqu" style='color: #fff;margin-right: 2vw;font-size:3vw'></i>宜春市袁州区</span>
            </li>
        </ul>
      </cube-scroll>
    </div>
    <!--遮罩层-->
    <div class="blacks" v-if="areaShow" @click="countermand"></div>
    <transition name="slide-fade">
      <div class="divwrap" v-if="areaShow">
        <v-distpicker
          type="mobile"
          @province="onChangeProvince1"
          @city="onChangeCity"
          @area="onChangeArea"
        ></v-distpicker>
      </div>
    </transition>
  </div>
</template>
<script>
import { getPost1, getGet1 } from '@/utils/api1'
import { getPost, getGet } from '@/utils/api'
export default {
  data() {
    return {
      current: "学校",
      CityValue: "江西省-宜春市",
      areaShow: false,
      index: null,
      inputText:'',
      indexMinPage: 2,
      imgList:[require('_imgList/3.jpg'), require('_imgList/2.jpg'), require('_imgList/1.jpg'), require('_imgList/4.jpg'), ],
      options: {
        observeDOM: false,
        click: true,
        probeType: 1,
        scrollbar: true,
        pullDownRefresh: {
          stopTime: 500,
          txt: "刷新成功"
        },
        pullUpLoad: true
      }
    };
  },
  methods: {
    // 跳转上传按钮
     uptateClick(){
        this.$router.push({path:'/uptate'})
     },
     //跳转到详情
    detailClick(){
      this.$router.push({path:'/detailPage'})
    },
    //取消选择地区
    countermand: function() {
      this.areaShow = false;
    },
    //打开选择地区
    choose: function() {
      this.areaShow = true;
    },
    onChangeProvince1: function(data) {
      this.CityValue = data.value;
    },
    onChangeCity: function(data) {
      this.CityValue = this.CityValue + "-" + data.value;
      this.areaShow = false;
    },
    onChangeArea: function(data) {
      this.CityValue = this.CityValue + "-" + data.value;
      this.areaShow = false;
    },
      //下拉刷新
    onPullingDown() {
      let that = this;
      setTimeout(() => {
        that.$refs.scroll.forceUpdate(true);
      }, 2000);
    },
    //   上拉加载
    onPullingUp() {
      let that = this;
      setTimeout(() => {
        that
          .$createToast({
            type: "txt",
            txt: "这是最后一条啦"
          })
          .show();
        that.$refs.scroll.forceUpdate(true);
      }, 2000);
    },
  },
  mounted(){
    let opts = {
      userId: 42183
    }
    let data = {
      userId: 42183,
      type: '3',
      cardNo: '987654',
      startTime: '',
      endTime: ''
    }
    // getPost(opts).then(res=>{
    //   console.log(res)
    // })
    // getPost1(opts).then(res=>{
    //   console.log(res)
    // })
    // getGet(data).then(res=>{      
    //   console.log(res)
    // })
    // getGet1(data).then(res=>{    
    //   console.log(res)
    // })

  }
};
</script>
<style lang="stylus" scoped>
@import '~@/style/area.stylus';

.indexPage_css {
  background-color: #7BB1FC;
  height: 12vw;
  width: 100%;
  color: #fff;

  .icon_jia_css {
    font-size: 5.5vw;
    margin-left: 2vw;
  }

  .span_new_css {
    width: 2.5vw;
    height: 2.5vw;
    display: block;
    position: absolute;
    border-radius: 50%;
    z-index: 10;
    top: -0.8vw;
    right: 1.8vw;
    background-color red
  }
}
.img_title_css{
  width 100%
  height 100%
}
.span_title_css {
  width: 96%;
  padding: 0 2%;
  height: 12vw;
  line-height: 10vw;
  font-size: 4.5vw;
  color:#000;
  background-color #fff
  margin: 1vw auto;
}
.success_but_css{
  width 25vw
  height 10vw
  padding 0
  line-height 10vw
  background: linear-gradient(to right , #77A7FA, #BB8BFF)!important
}
.input_text_css{
  height 10vw
  width: 70%;
  margin 0
  padding 0
}
.sco_yangshi {
  background-color: #F1F7FF;
  width: 98vw;
  padding 1vw
  height:calc(100vh - 70vw);
  border-radius: 1vw;
}
.li_box_info_css{
    width 42vw
    min-height 56vw
    border-radius 2vw    
    border 1px solid #fff
    float left
    margin 2vw 0 2vw 4vw
    overflow hidden
    position relative
    color #fff
    background-color #fff
    box-shadow: 4vw 2vw 4vw -3vw #999;
    background: linear-gradient(to top, #75A6FA, #DCDEFF) !important;
}
.jia_uptate_css{
  position absolute
  top .6vw
  right .6vw
  color #fff
  background #3388ff
  border-radius 50%
  font-size 4vw
}
.topOne_css{
    position absolute
    top -3.2vw
    left -9.5vw
    display block
    width 24vw;
    height 10vw;
    font-size 3vw
    background-color #38f    
    text-align center
    line-height 15vw
    color #ffffff
    z-index 11
    transform rotate(-40deg)
}
.img_list_box_css{
    width 38vw;
    min-height 30vw
    border-radius 1vw
    overflow hidden
    margin 2vw 
    margin-top 5vw
}
.school_css{
    float left 
    width: 80%;
    height: 6vw;
    display: block;
    text-align: center;
    line-height: 6vw;
    font-size 3.74vw
    border-top 1px solid #fff
    border-bottom 1px solid #fff
}
.num_css{
    float right 
    width 19%
    height: 16vw;
    padding 1vw 0;
    text-align: center;
    border-left 1px solid #fff
    border-top 1px solid #fff
}
.li_info_css{
    display block
    height: 6vw;
    border-bottom 1px solid #fff
    line-height: 6vw;
    width: 80%;
    float left
    font-size 2.7vw
    text-align: center;
}
.leix_css{
    display block
    width 40%
    overflow hidden
    white-space:nowrap;
    text-overflow: ellipsis;
}
.address_css{
    display block
    background-color yellow
    width 50%
    overflow hidden
    white-space:nowrap;
    text-overflow: ellipsis;
}
>>>.cube-pulldown-loaded {
  color: #38f;
  font-size: 4vw;
}
</style>