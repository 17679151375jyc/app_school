<template>
  <div class="Page_css">
    <div class="header_css">
      <router-link :to="{name:'land'}">
        <img
          :src="sex == 1 ?require('_bj/title1.png'):require('_icon/header1.png')"
          class="img_header_css"
        />
      </router-link>
      <router-link :to="{path:'/setPage'}">
        <i style="font-size:7.5vw;color:#fff" class="iconfont iconcaidan1 i_caidan_css"></i>
      </router-link>
      <div class="header_top_css nan" :class="sex == 1 ? 'header_top_css nan':'header_top_css nv'">
        <div v-if='LoadStatus'>
          <i class="iconfont iconnv icon_nan_css" v-if="sex == 1"></i>
          <i class="iconfont iconnan icon_nan_css" style="color:#F955C8" v-else></i>
        </div>
        <span class="span_css" v-if='LoadStatus'>偷猪的韩信</span>
        <span class="span_css" v-else>未登录</span>
      </div>
      <div class="header_bottom_css"  v-if='LoadStatus'>
        <span class="lable_css">账号：{{inputValue}}</span>
        <span class="lable_css" style="top:9vw">手机：{{phoneValue}}</span>
      </div>
    </div>
    <span class="hengxian_css"></span>
    <div style="background-color:#F8F8FD">
      <ul>
        <router-link :to="{path:'/detailPage'}">
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconxuexiao1"></i>
              <span style="margin-left:2vw;font-size:4.8vw;">我的学校</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        </router-link>
        <router-link :to="{path:'/mapPage'}">
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconditu"></i>
              <span style="margin-left:2vw;font-size:4.8vw;">附近学校</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        </router-link>
        <!-- <router-link :to="{path:'/memberPage'}">
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconhuiyuan-"></i>
              <span style="margin-left:2vw;font-size:4.8vw;">我的会员</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        </router-link> -->
        <router-link :to="{path:'/collectionPage'}">
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconshoucang2"></i>
              <span style="margin-left:2vw;font-size:4.8vw;">我的收藏</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        </router-link>
        <router-link :to="{path:'/historyPage'}">
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconicon-test"></i>
              <span style="margin-left:2vw;font-size:4.8vw;">浏览历史</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      inputValue: "jycCode",
      phoneValue: "13878976532",
      sex: "1",
      LoadStatus: true
    };
  },
  methods: {}
};
</script>
<style lang='stylus' scoped>
.header_css {
  width: 100vw;
  height: 55vw;
  position: relative;

  .i_caidan_css {
    position: absolute;
    top: 3vw;
    right: 2vw;
    z-index: 10;
    color: #333;
    font-size 5vw!important
  }

  .nan {
    background: linear-gradient(to top, #3388ff, #30CAFF) !important;
  }

  .nv {
    background: linear-gradient(to top, #F924BD, #F898DD) !important;
  }

  .header_top_css {
    width: 100vw;
    height: 34vw;
    background-color: #38f;
    position: relative;

    .icon_nan_css {
      position: absolute;
      top: 28.8vw;
      left: 35vw;
      background-color: #fff;
      color: #38f;
      font-size: 3vw;
      display: block;
      width: 6.5vw;
      height: 3vw;
      text-align: center;
      padding: 1vw;
      border-top-left-radius: 1.5vw;
      border-top-right-radius: 1.5vw;
    }

    .span_css {
      position: absolute;
      top: 24.5vw;
      left: 45vw;
      color: #fff;
      font-size: 7vw;
      display: block;
      max-width: 52vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .header_bottom_css {
    width: 100vw;
    height: 20vw;
    position: relative;

    .lable_css {
      position: absolute;
      top: 2vw;
      left: 35vw;
      display: block;
      font-size: 4.74vw;
      color: #555;
    }
  }

  .img_header_css {
    position: absolute;
    width: 23vw;
    height: 23vw;
    border-radius: 50%;
    z-index: 10;
    top: 22vw;
    left: 7vw;
    border: 3px solid #fff;
    background-color: #fff;
  }
}

.li_list_css {
  width: 92vw;
  padding: 0 4vw;
  height: 13vw;
  line-height: 13vw;
  border-bottom: 1px solid #E1E5FA;
  color: #666;
}
</style>