<template>
  <div>
    <div class="img_list__div">
      <div v-if="!imgNum" class="img0_css">没有图片信息</div>
      <div v-if="imgNum == 1" style="width: 100%;height:100%" >
        <img :src="imgList[0]" class="ck_css" />
      </div>
      <div v-if="imgNum == 2" class="img_box imgTow">
        <img :src="imgList[0]" class="ck_css"/>
      </div>
      <div v-if="imgNum == 2" class="img_box imgTow1">
        <img :src="imgList[1]" class="ck_css"/>
      </div>
      <div class="img_box" v-if="imgNum == 3">
        <img :src="imgList[0]" class="ck_css" />
      </div>
      <div class="img_box img2" v-if="imgNum == 3">
        <img :src="imgList[1]" class="ck_css"/>
      </div>
      <div class="img_box img3" v-if="imgNum == 3">
        <img :src="imgList[2]" class="ck_css" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imgNum: 0
    };
  },
  props: {
    imgList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  watch: {
    imgList: function(val, oldVal) {
      console.log(val);
      if (val.length == 1) {
        this.imgNum = 1;
      } else if (val.length == 2) {
        this.imgNum = 2;
      } else if (val.length >= 3) {
        this.imgNum = 3;
      } else {
        this.imgNum = 0;
      }
    }
  },
  methods: {},
  mounted() {
    if (this.imgList.length == 1) {
      this.imgNum = 1;
    } else if (this.imgList.length == 2) {
      this.imgNum = 2;
    } else if (this.imgList.length >= 3) {
      this.imgNum = 3;
    } else {
      this.imgNum = 0;
    }
  }
};
</script>
<style lang='stylus' scoped>
.img_list__div {
  width: 100%;
  height: 30vw;
  position: relative;
}

.img_box {
  width: 25vw;
  height: 25vw;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  left: 2vw;
  z-index: 10;
}

.img2 {
  bottom: 2.5vw;
  left: 6vw;
  z-index: 9;
}

.img3 {
  bottom: 5vw;
  left: 10vw;
  z-index: 8;
}

.imgTow {
  width: 27vw;
  height: 27vw;
  bottom: 2vw;
  left: 7vw;
}

.imgTow1 {
  left: 4vw;
}

.img0_css {
  line-height: 25vw;
  text-align: center;
  font-size: 5vw;
  color: #000;
}
.ck_css{
  width calc(100% - 4px);
  height calc(100% - 2px);
  border-radius 2vw
  border 1px solid #fff
}
</style>