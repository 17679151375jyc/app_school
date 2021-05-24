<template>
  <div class="Page_css">
    <div class="dis_column_end_center header_css">
      <div style="position:relative;margin-right:2vw">
        <i class="iconfont iconweizhi icon_jia_css" @click="choose"></i>
        <span style="font-size: 3.74vw;" @click="choose">{{ CityValue }}</span>
      </div>
    </div>
    <h3 style="margin-top:5vw">校圈页面暂未开发</h3>
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
export default {
  name: "",
  data() {
    return {
      CityValue: "江西省-宜春市",
      areaShow: false
    };
  },
  methods: {
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
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/style/area.stylus';

.header_css {
  width: 100vw;
  height: 12vw;
  background-color: #7BB1FC;
  color: #fff;
}

.icon_jia_css {
  font-size: 5.5vw;
  margin-left: 2vw;
}
</style>