<template>
  <div>
    <headerModu :title="'查找学校'" :leftTz="true" :Isright="false" />
    <div class="box_div1_css">
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
      <div class="index_css">
        <ul>
          <li class="dis_row_between_center">
            <div @click="choose" class="addre_css">
              <i class="iconfont iconweizhi icon_jia_css"></i>
              <span style="font-size: 4vw;color:#333">{{ CityValue }}</span>
            </div>
          </li>
          <li class="dis_row_between_center but_city">
            <div style="width: 100%">
              <cube-select
                style="width: 100%;font-size:4.2vw"
                placeholder="请选择学校的类型"
                @change="selectChange"
                v-model="schoolValue"
                :options="options"
              ></cube-select>
            </div>
          </li>
          <li class="dis_row_between_center but_city">
            <div style="width: 100%">
              <cube-input
                v-model="schoolName"
                style="width: 100%;font-size:4.2vw"
                placeholder="请输入学校名称"
              ></cube-input>
            </div>
          </li>
          <li class="dis_row_between_center but_city">
            <div style="width: 100%">
              <cube-input
                v-model="phoneName"
                style="width: 100%;font-size:4.2vw"
                placeholder="请输入用户名称"
              ></cube-input>
            </div>
          </li>
        </ul>
      </div>
      <cube-button
        @click='butClick'
        :active="true"
        class="success_but_css"
        style="width: 90.8%;margin:0 auto;margin-top:40%"
      >
        <i class="iconfont iconchazhao"></i>
        <span>查找</span>
      </cube-button>
    </div>
    <div class="his_css">
      <div class="title_his_css">搜索历史：</div>
      <ul>
        <li class="dis_row_between_center li_css" v-for="(item, index) in 10" :key="index">
          <i class="iconfont iconchuyidong" style="margin-top:1vw;font-size:6vw"></i>
          <span>宜春学院</span>
        </li>
      </ul>
    </div>    
    <TransModu/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneName: null,
      schoolName: "",
      CityValue: "江西省-宜春市",
      schoolValue: null,
      areaShow: false,
      // options: [2013, 2014, 2015, 2016, 2017, 2018],
      options: [
        "普通大学",
        "职业学校",
        "技术学校",
        "985名校",
        "211名校",
        "普通高中"
      ],
      schoolCode: 0
    };
  },
  props: ["ips"],
  methods: {
    selectChange(data, index) {
      this.schoolCode = index;
      console.log(this.schoolCode);
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
    },
    onChangeArea: function(data) {
      this.CityValue = this.CityValue + "-" + data.value;
      this.areaShow = false;
    },
    butClick(){
      this.$router.push({path: '/queryIndex/querySchoolLsit'})
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '~@/style/area.stylus';
.index_css {
  width: 100vw;
  height: 20vw;
  margin: 0 auto;
  margin-top: 5vw;
  margin: 0 auto;

  .but_city {
    width: 90%;
    height: 12vw;
    margin: 0 auto;
    padding: 0 5vw;
    margin-bottom: 2vw;
    background-color: #F8F9FE;

    .but_css {
      width: 25%;
      height: 10vw;
      line-height: 0vw;
      padding: 0;
    }
  }
}

.icon_jia_css {
  color: #333;
  font-size: 5vw;
  height: 10vw;
  margin-right: 1vw;
}

.addre_css {
  min-width: 20vw;
  color: #fff;
  height: 10vw;
  line-height: 12vw;
  text-align: left;
  margin-left 5vw
  margin-bottom 3vw
}
.box_div1_css{
  background-color #F7FAFD
  padding-bottom 5vw
}
.his_css{
  width 100vw;
  height 40vh
  background-color #F7FAFD
  margin-top 1vw
}
.title_his_css{
  width 96vw
  font-size 3.74vw
  padding 2vw
  border-bottom 1px solid #ccc
}
.li_css{
  border 1px solid #cccccc
  float left
  height 6vw
  padding 1vw
  padding-right 2vw
  border-radius 2vw
  line-height 5vw
  margin 2vw
  margin-right 1vw
}
</style>