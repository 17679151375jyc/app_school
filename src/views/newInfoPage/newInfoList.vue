<template>
  <div class="Page_css">
    <div class="dis_column_end_center header_css">
      <i class="iconfont iconhaoyouliebiao" style="color:#fff;margin-right: 2vw;font-size:5.2vw"></i>
    </div>
    <div class="swipe-wrapper">
      <cube-swipe class="swipe">
        <transition-group name="swipe" tag="ul">
          <li
            class="swipe-item-wrapper"
            v-for="(item, index) in 1"
            :key="index"
            @touchstart="start"
            @touchend="end"
          >
            <cube-swipe-item
              ref="swipeItem"
              :index="index"
              :btns="btns"
              @btn-click="onBtnClick"
              :autoShrink="true"
            >
              <div class="div_box" @click='liClick'>
                <div class="img_box_css">
                  <img :src="require('_icon/header.png')" />
                </div>
                <span class="span_name_css">系统消息</span>
                <span class="span_name_css span_neir">欢迎来到慕校</span>
                <span class="date_css">08:00</span>
              </div>
            </cube-swipe-item>
          </li>
        </transition-group>
      </cube-swipe>
    </div>
    <popupModu :IsShow="IsShow" @quedingClick="quedingClick" @coloseClick="coloseClick()">
      <div slot="popup_div" style="text-align:center">是否删除该条消息？</div>
    </popupModu>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loop: null,
      IsShow: false,
      value: "ansc",
      btns: [
        {
          action: "delete",
          text: "删除"
        }
      ]
    };
  },

  methods: {
    start() {
      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {
        this.IsShow = true;
      }, 1000);
    },
    end() {
      clearTimeout(this.loop); //清空定时器，防止重复注册定时器
    },
    onBtnClick() {
      this.IsShow = true;
    },
    coloseClick() {
      this.IsShow = false;
    },
    quedingClick() {
      console.log("确定");
    },
    liClick(){
      console.log("单击");
      this.$router.push({path:'/infoDetail'})
    }
  }
};
</script>
<style lang='stylus' scoped>
.swipe-wrapper {
  width: 100vw;
  height: auto;
  margin-top: 1vw;
}

.swipe {
  width: 100vw;
}

.swipe-item-wrapper {
  width: 100vw;
  height: 18vw;
  background-color: #C6CCFC;
  overflow: hidden;
}

>>> .cube-swipe-btn {
  background-color: #FB0B0B;
  height: 17vw;
}

.div_box {
  width: 96vw;
  padding: 0 2vw;
  height: 17vw;
  background-color: #DFE3FD;
  position: relative;
}

.img_box_css {
  width: 14vw;
  height: 14vw;
  position: absolute;
  top: 1.5vw;
  border-radius: 50%;
}

.span_name_css {
  position: absolute;
  top: 2vw;
  left: 18vw;
  font-size: 4.8vw;
  display: block;
  color: #555;
  max-width: 60vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.span_neir {
  max-width: 75vw;
  top: 10vw;
  left: 18vw;
  font-size: 3.8vw;
}

.date_css {
  position: absolute;
  top: 2vw;
  right: 2vw;
  font-size: 3.74vw;
  display: block;
  color: #555;
  max-width: 40vw;
  text-align: center;
}
.header_css{
  width 100vw
  height 12vw
  background #7BB1FC
}
</style>