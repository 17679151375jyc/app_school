<template>
  <div>
    <headerModu
      :title="'学校详情'"
      :leftTz="true"
      :Isright="true"
      :rightData="'上传'"
      @rightClick="rightClick"
    />
    <span class="name_css">宜春学院</span>
    <cube-scroll class="bottom_box_css" ref="scroll">
      <div>
        <span class="title_box">
          课室
          <i class="iconfont iconkeshi icon_css"></i>
        </span>
        <div class="div_box">
          <ul style="clear:both">
            <li class="img_css" v-for="(item, index) in imgList" :key="index">
              <div class="img_one_css" @click="showImagePreview(index)">
                <img :src="item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="title_box">
          宿舍
          <i class="iconfont iconsushe icon_css"></i>
        </span>
        <div class="div_box">
          <ul style="clear:both">
            <li class="img_css" v-for="(item, index) in imgList" :key="index">
              <div class="img_one_css" @click="showImagePreview(index)">
                <img :src="item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="title_box">
          食堂
          <i class="iconfont iconshitang icon_css"></i>
        </span>
        <div class="div_box">
          <ul style="clear:both">
            <li class="img_css" v-for="(item, index) in imgList" :key="index">
              <div class="img_one_css" @click="showImagePreview(index)">
                <img :src="item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="title_box">
          其他
          <i class="iconfont iconqita icon_css"></i>
        </span>
        <div class="div_box">
          <ul style="clear:both">
            <li class="img_css" v-for="(item, index) in imgList" :key="index">
              <div class="img_one_css" @click="showImagePreview(index)">
                <img :src="item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </cube-scroll>

    <div class="dis_row_between_center school_css">
      <span class="but_css" @click="schoolClick">学校详情</span>
      <span class="but_css" @click="abccc">学校官网</span>
      <span class="but_css" @click="luntan">学校论坛</span>
      <span class="but_css" @click="schoolClick1">学校地图</span>
    </div>
    <BpopupModu :IsShow="IsShow" @coloseClick="coloseClick">
      <div class="solt_div_css" slot="popup_div">
        <cube-scroll ref="scrol2" style="height: 69vh;">
          <div class="jianjie_css">
            <i class="iconfont icongongsiquancheng aicon_css"></i>学校全称
          </div>
          <div style="padding: 2vw">
            <p class="p_css">宜春学院</p>
          </div>
          <div class="jianjie_css">
            <i class="iconfont iconjianjie aicon_css"></i>学校简介
          </div>
          <div style="padding: 2vw">
            <p
              class="p_css"
            >宜春学院地处赣西中心城市——江西省宜春市。宜春自古就有“江南佳丽之地，文物昌盛之邦”的美誉，是国家第一批生态试点城市、国家园林城市、全国绿化模范城市、中国优秀旅游城市和全国卫生城市。宜春风光旖旎，交通便利，沪瑞高速、杭长高铁、浙赣铁路穿城而过，明月山民用机场四通八达。</p>
          </div>
          <div class="jianjie_css">
            <i class="iconfont iconrongyu1 aicon_css"></i>学历资质
          </div>
          <div style="padding: 2vw">
            <p class="p_css">普通本科</p>
          </div>
          <div class="jianjie_css">
            <i class="iconfont iconxueke aicon_css"></i>专业学科
          </div>
          <div style="padding: 2vw">
            <p class="p_css">暂未调研</p>
          </div>
          <div class="jianjie_css">
            <i class="iconfont iconquyu aicon_css"></i>所在区域
          </div>
          <div style="padding: 2vw">
            <p class="p_css">江西省-宜春市</p>
          </div>
        </cube-scroll>
        <div class="dis_row_between_center jianjie_css caozuo">
          <span>
            <i
              @click="fabulousClick"
              :class="fabulous?'iconfont icondianzan1':'iconfont iconzan-copy'"
              :style="fabulous?'color: #FCD525':'color: #888'"
            ></i>
            {{ fabulousVal }}
          </span>
          <span>
            <i
              @click="collectionClick"
              :class="collection?'iconfont iconshoucang3':'iconfont iconshoucang'"
              :style="collection?'color: #FCD525':'color: #888'"
            ></i>
          </span>
        </div>
      </div>
    </BpopupModu>

    <BpopupModu :IsShow="IsShow1" @coloseClick="coloseClick1">
      <div class="solt_div_css1" slot="popup_div">
        <el-amap
          class="map_css"
          vid="amap1"
          :zoom="14"
          :center="center"
          :resizeEnable="true"
          :rotateEnable="true"
        >
          <el-amap-marker :icon="iconImg" vid="markers" :position="center"></el-amap-marker>
        </el-amap>
      </div>
    </BpopupModu>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      IsShow: false,
      IsShow1: false,
      imgList: [
        require("_imgList/1.jpg"),
        require("_imgList/2.jpg"),
        require("_imgList/3.jpg"),
        require("_imgList/4.jpg")
      ],
      center: [114.356333, 27.791886], // 指定地图中心点
      iconImg: require("_icon/marker.png"),
      fabulous: false,
      collection: 0,
      fabulousVal: 0
    };
  },
  methods: {
    fabulousClick() {
      this.fabulous = !this.fabulous;
      if (this.fabulous) {
        this.fabulousVal = this.fabulousVal + 1;
      } else {
        this.fabulousVal = this.fabulousVal - 1;
      }
    },
    collectionClick() {
      this.collection = !this.collection;
      if (this.collection) {
        this.$createToast({
          time: 1000,
          txt: "已收藏",
          type: "txt"
        }).show();
      } else {
        this.$createToast({
          time: 1000,
          txt: "取消收藏",
          type: "txt"
        }).show();
      }
    },
    coloseClick1() {
      this.IsShow1 = false;
    },
    coloseClick() {
      this.IsShow = false;
    },
    schoolClick() {
      this.IsShow = true;
    },
    schoolClick1() {
      this.IsShow1 = true;
    },
    rightClick() {
      let that = this;
      that.$router.push({ path: "/uptate" });
    },
    showImagePreview(index) {
      let that = this;
      that
        .$createImagePreview({
          imgs: that.imgList,
          initialIndex: index
        })
        .show();
    },
    abccc() {
      let url = "http://www.jxycu.edu.cn/";
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$createToast({
        time: 2000,
        txt: "网址复制成功",
        type: "txt"
      }).show();
      oInput.remove();
    },
    luntan() {}
  }
};
</script>
<style lang='stylus' scoped>
>>>.amap-icon img {
  width: 30px;
  height: 33px;
}

.title_box {
  display: block;
  margin: 1vw 0;
  float: left;
  padding-left: 2vw;
  width: 20%;
  height: 9.31vw;
  line-height: 10vw;
  font-size: 4.5vw;
  color: #fff;
  border-top-right-radius: 5vw;
  border-bottom-right-radius: 5vw;
  background: linear-gradient(to right, #2583FA, #A056FB) !important;
}

.icon_css {
  margin-top: -1vw;
  margin-left: 2vw;
  font-size: 4.5vw;
}

.bottom_box_css {
  width: 100vw;
  height: calc(100vh - 33vw);
}

.div_box {
  width: 100vw;
  min-height: 26vw;
  background-color: #E8E8FE;
  border-radius: 1vw;
  float: left;
}

.img_css {
  width: 20.3vw;
  height: 20.5vw;
  border: 1px solid #fff;
  background-color: #F6F6F8;
  margin: 2vw;
  float: left;
}

.img_one_css {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  box-sizing: border-box;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.school_css {
  width: 96vw;
  padding: 0 2vw;
  height: 12vw;
  border-top: 1px solid #fff;
  background-color: #E8E8FE;
}

.but_css {
  width: 20vw;
  height: 8vw;
  background-color: #3388ff;
  font-size: 3.5vw;
  color: #fff;
  line-height: 8vw;
  text-align: center;
  border-radius: 1vw;
  border: 1px solid #fff;
}

.solt_div_css {
  width: 100%;
  height: 74vh;
  background-color: #ffffff;
  margin-top: 2vw;
  position: relative;
}

.jianjie_css {
  width: 96%;
  padding: 0 2vw;
  height: 8vw;
  line-height: 8vw;
  background: linear-gradient(to left, #69AAFD, #E9E9FF) !important;
  font-size: 3vw;
}

.caozuo {
  position: absolute;
  left: 0;
  bottom: 0px;
  background: #fff !important;
  background-color: #fff;
  border-top: 2px solid #F2F2FF;
}

.p_css {
  text-indent: 0.7rem;
  line-height: 5.5vw;
  letter-spacing: 2px;
  text-align: justify;
  color: #38f;
}

.solt_div_css1 {
  width: 100%;
  margin-top: 2vw;
  height: 74vh;
  background-color: #ffffff;
}

.map_css {
  width: 100%;
  height: 74vh;
}

.name_css {
  display: block;
  width: 96vw;
  height: 8vw;
  padding: 0 2vw;
  line-height: 8vw;
  text-align: left;
  font-size: 4vw;
  color: #3388ff;
  border-bottom: 1px solid #E8E8FE;
}

.aicon_css {
  font-size: 3vw;
  margin-right: 1vw;
}
</style>