<template>
  <div class="page_css" @click='othersPopup' v-if='show_'>
    <!-- <div class="page_css" v-if='IsShow' @click='othersPopup'> -->
      
    <transition name="slide-fade" v-if='IsShow'>
      <div class="bottomPage_css"  @click.stop=''>
          <div class="dis_row_between_center title_css" v-if="titleBoxShow">
              <span @click='close'>取消</span>
              <span v-if='titleShow' style="font-size: 4.5vw">标题</span>
              <span style="color:#38f" @click='quedClick'>确定</span>
          </div>
          <slot name="popup_div"></slot>
      </div>
    <!-- </div> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show_: false
    };
  },
  watch:{
    IsShow:function(val){
      let that = this
      setTimeout(()=>{
        that.show_ = val
      }, 200)
    }
  },
  props:{
    IsPopupShowIf:{
      type: Boolean,
      default: true
    },
    IsShow:{
      type: Boolean,
      default: false
    },
    titleBoxShow:{
      type: Boolean,
      default: true
    },
    titleShow:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    othersPopup(){
      let that = this
      console.log(that.IsPopupShowIf)
      if(that.IsPopupShowIf){
        that.close();
      }
    },
    close(){
      let that = this
      that.$emit('coloseClick', {});
    },
    quedClick(){
      let that = this
      that.close();
      that.$emit('quedingClick', {});
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/style/area.stylus';
.page_css{
    width 100vw
    height 100vh
    position absolute
    z-index 500
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.4)
}
.bottomPage_css {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 96vw;
  padding: 2vw;
  background-color: #F2F2FF;
  z-index: 1000;
  min-height: 80vh;
  font-size: 4vw;
  border-top: 1px solid #E9E9FF;
}
.title_css{
    width 96vw
    height 8vw  
    margin 0 -2vw
    padding 0 2vw
    border-bottom 1px solid #38f
}
</style>