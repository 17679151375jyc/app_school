<template>
  <div>
    <headerModu :title="'浏览历史'" :leftTz="true" :Isright="false" />
    <div class="content_css">
      <cube-loading v-if="loadingShow" :size="28" class="losding_css"></cube-loading>

      <ul style="margin-top:3vw;height: auto!important">
        <cube-scroll
          style="height:89vh"
          ref="scroll"
          :options="options"
          @pulling-up="onPullingUp"
          @pulling-down="onPullingDown"
        >
          <li class="li_css" v-for="(item, index) in 10" :key="index">
            <img :src="require('_imgList/1.jpg')" />
            <span class="school_name_css">宜春学院</span>
            <cube-button
              :active="true"
              class="success_but_css but_shangc_css"
              @click="uptateClick"
            >删除<br/>历史</cube-button>
            <div class="dis_row_between_center bottom_css">
              <span class="leix_css">普通大专</span>
              <span class="diqu_css">
                <i class="iconfont icondiqu" style="color:#fff;margin-right: 2vw;font-size:3vw"></i>宜春学院
              </span>
            </div>
          </li>
        </cube-scroll>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loadingShow: false,
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
    uptateClick(){

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
      that
        .$createToast({
          type: "txt",
          txt: "这是最后一条啦"
        })
        .show();
      setTimeout(() => {
        that
          .$createToast({
            type: "txt",
            txt: "这是最后一条啦"
          })
          .show();
        that.$refs.scroll.forceUpdate(true);
      }, 2000);
    }
  }
};
</script>
<style lang='stylus' scoped>
.but_css {
  width: 20vw;
  height: 10vw;
  float: left;
  line-height: 10vw;
  padding: 0;
  font-size: 4vw;
  margin: 2vw 0 0 2vw;
}

.content_css {
  margin: 2vw auto;
  padding: 0 2vw;
  float: left;
  width: 96vw;
  min-height: 20vw;
  position: relative;
}

.losding_css {
  position: absolute;
  top: 5vw;
  left: 47%;
}

.li_css {
  width: 100%;
  height: 20vw;
  border-radius: 1vw;
  // background-color #CFC9FD
  background: linear-gradient(to right, #CFC9FD, #3388ff) !important;
  margin-bottom: 2vw;
  color: #fff;
}

.li_css img {
  width: 18vw;
  margin: 0.5vw;
  height: 18vw;
  border: 0.5vw solid #fff;
  float: left;
}

.school_name_css {
  display: block;
  font-weight: bold;
  width: 55vw;
  padding-left: 3vw;
  height: 8vw;
  line-height: 8vw;
  float: left;
  font-size: 4.5vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bottom_css {
  width: 53vw;
  height: 11vw;
  padding: 0 2vw;
  padding-left: 3vw;
  float: left;
}

.leix_css {
  width: 25vw;
  height: 11vw;
  display: block;
  line-height: 13vw;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.diqu_css {
  text-align: right;
  width: 40vw;
  height: 11vw;
  line-height: 13vw;
  display: block;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.but_shangc_css {
  width: 16vw;
  height: 20vw;
  padding: 0;
  font-size: 3.74vw;
  line-height: 5vw;
  float: right;
  background: linear-gradient(to right, #30CAFF, #78B2FB) !important;
}

>>>.cube-pullup-wrapper {
  // display none!important
}

>>>.cube-pulldown-loaded {
  color: #38f;
  font-size: 4vw;
}
</style>