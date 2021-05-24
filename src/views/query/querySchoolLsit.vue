<template>
  <div class="page_box_css">
    <headerModu :title="'消息详情'" :leftTz="true" :Isright="false" />
    <div style="width:100%;padding:0%;">
      <cube-scroll
        class="sco_yangshi"
        :options="options"
        @pulling-up="onPullingUp"
        @pulling-down="onPullingDown"
        ref="scroll"
      >
        <ul>
          <li class="li_box_info_css" @click="detailClick" v-for="(item, index) in 10" :key="index">
            <i
              class="iconfont icontianjiajiahaowubiankuang-- jia_uptate_css"
              @click.stop="uptateClick"
            ></i>
            <span class="topOne_css">top:{{1}}</span>
            <div class="img_list_box_css">
              <ImgListModu :imgList="imgList" />
            </div>
            <span class="school_css">
              <i class="iconfont iconxueli" style="color: #fff;margin-right: 2vw"></i>宜春学院
            </span>
            <span class="dis_row_center_center num_css">
              <span>4张</span>
            </span>
            <span class="li_info_css">
              <i
                class="iconfont iconxuexiaomingpian"
                style="color: #fff;margin-right: 2vw;font-size:3vw"
              ></i>二本
            </span>
            <span class="li_info_css" style="border-bottom:0;">
              <i class="iconfont icondiqu" style="color: #fff;margin-right: 2vw;font-size:3vw"></i>宜春市袁州区
            </span>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
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
      },
      imgList: [
        require("_imgList/3.jpg"),
        require("_imgList/2.jpg"),
        require("_imgList/1.jpg"),
        require("_imgList/4.jpg")
      ]
    };
  },
  methods: {
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
    },
    //跳转到详情
    detailClick() {
      this.$router.push({ path: "/detailPage" });
    }
  }
};
</script>
<style lang='stylus' scoped>
.sco_yangshi {
  background-color: #F1F7FF;
  width: 98vw;
  padding: 1vw;
  height: calc(100vh - 15vw);
  border-radius: 1vw;
}

.li_box_info_css {
  width: 42vw;
  min-height: 56vw;
  border-radius: 2vw;
  border: 1px solid #fff;
  float: left;
  margin: 2vw 0 2vw 4vw;
  overflow: hidden;
  position: relative;
  color: #fff;
  background-color: #fff;
  box-shadow: 4vw 2vw 4vw -3vw #999;
  background: linear-gradient(to top, #75A6FA, #DCDEFF) !important;
}

.jia_uptate_css {
  position: absolute;
  top: 0.6vw;
  right: 0.6vw;
  color: #fff;
  background: #3388ff;
  border-radius: 50%;
  font-size: 4vw;
}

.topOne_css {
  position: absolute;
  top: -3.2vw;
  left: -9.5vw;
  display: block;
  width: 24vw;
  height: 10vw;
  font-size: 3vw;
  background-color: #38f;
  text-align: center;
  line-height: 15vw;
  color: #ffffff;
  z-index: 11;
  transform: rotate(-40deg);
}

.img_list_box_css {
  width: 38vw;
  min-height: 30vw;
  border-radius: 1vw;
  overflow: hidden;
  margin: 2vw;
  margin-top: 5vw;
}

.school_css {
  float: left;
  width: 80%;
  height: 6vw;
  display: block;
  text-align: center;
  line-height: 6vw;
  font-size: 3.74vw;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.num_css {
  float: right;
  width: 19%;
  height: 16vw;
  padding: 1vw 0;
  text-align: center;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
}

.li_info_css {
  display: block;
  height: 6vw;
  border-bottom: 1px solid #fff;
  line-height: 6vw;
  width: 80%;
  float: left;
  font-size: 2.7vw;
  text-align: center;
}

.leix_css {
  display: block;
  width: 40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.address_css {
  display: block;
  background-color: yellow;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

>>>.cube-pulldown-loaded {
  color: #38f;
  font-size: 4vw;
}
</style>