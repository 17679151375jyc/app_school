<template>
  <div>
    <headerModu :title="'菜单'" :Isright="false" />
    <div style='margin-top:1vw;border-top: 1px solid #E1E5FA;background-color: #F8F8FD'>
      <ul>
        <!-- <router-link :to="{path:'/memberPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconxiugaimima1"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">修改密码</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
        <!-- <router-link :to="{path:'/memberPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont icongenggaishoujihao"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">更换手机</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
        <!-- <router-link :to="{path:'/memberPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconqingchuhuancun"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">清除缓存</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
        <!-- <router-link :to="{path:'/collectionPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconjianchagengxin"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">检查更新</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
        <!-- <router-link :to="{path:'/historyPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont iconguanyu"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">关于我们</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
        <!-- <router-link :to="{path:'/historyPage'}"> -->
          <li class="dis_row_between_center li_list_css">
            <span>
              <i class="iconfont icontuichudenglu"></i>
              <span style="margin-left:2vw;font-size:4.2vw;">退出登录</span>
            </span>
            <i class="iconfont icontubiaozhizuo-"></i>
          </li>
        <!-- </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='stylus' scoped>
.li_list_css {
  width: 92vw;
  padding: 0 4vw;
  height: 13vw;
  line-height: 13vw;
  border-bottom: 1px solid #C4DCFD;
  color: #38f;
}
</style>