<template>
  <div id="app" class="page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // tabbarShow: true,
      // arrTab: ["/home", "/cat", "/history", "/me"]
    };
  },
  mounted() {
    // 安卓后退键
    // this.$mui.plusReady(() => {
    //   var backcount = 0;
    //   this.$mui.back = () => {
    //     let path = this.$route.path;
    //     console.log("path:" + path);

    //     if (this.arrTab.includes(path)) {
    //       // 主导航页
    //       if (this.$mui.os.ios) return;
    //       if (backcount > 0) {
    //         if (window.plus) {
    //           plus.runtime.quit();
    //         }
    //         return;
    //       }
    //       this.$toast("再点击一次退出应用!");
    //       backcount++;
    //       setTimeout(() => {
    //         backcount = 0;
    //       }, 2000);
    //     } else {
    //       // 子页面
    //       console.log("子页面后退键");
    //       this.$router.go(-1);
    //     }
    //   };
    // });
  }
};
</script>

<style>
.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
