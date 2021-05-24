<template>
  <div>
    <headerModu :title="'附近学校'" :Isright="true" :rightData="'添加'" @rightClick='rightClick'/>
    <div class="amap-container">
      <el-amap 
        vid="amap" 
        :zoom="zoom" 
        :center="windows.position"
        :resizeEnable='true'
        :rotateEnable='true'>
        <el-amap-marker 
          :icon='iconImg'
          :vid="item.marker" 
          :position="item.position" 
          :events="marker.events"
          v-for='(item, index) in dataList'
          :key='index'></el-amap-marker>
        <el-amap-info-window
          :position="windows.position"
          :content="windows.content"
          :visible="windows.visible"
          :events="windows.events"
        ></el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>

<script>
let that;
export default {
  name: "",
  data() {
    return {
      zoom: 14, // 地图缩放级别
      center: [114.356333,27.791886], // 指定地图中心点
      iconImg: require('_icon/marker.png'),
      marker: {
        events: {
          click: (e) => {
            var index = e.target.Uh.vid
            console.log(index)
            that.windows.position = that.dataList[index].position
            that.windows.content = `<span style='font-size: 3vw;font-weight:bold;color:#38f'>${that.dataList[index].name}</span>`,
            that.windows.visible = !that.windows.visible
          }
        }
      },
      windows: {
        position: [114.356333,27.791886],
        content: `<span style='font-size: 3vw;font-weight:bold;color:#38f'>${'宜春学院'}</span>`,
        visible: false,
        events: {
          close() {            
            that.windows.visible = false
          }
        }
      },
      dataList:{
        0:{
          marker: 0,
          position:  [114.356333,27.791886],
          name: '宜春学院'
        },
        1:{
          marker: 1,
          position:  [114.346891,27.803047],
          name: '中共宜春市委党校'
        },
        2:{
          marker: 2,
          position:  [114.368931,27.79903],
          name: '宜春职业技术学院'
        }
      }
    };
  },
  methods: {
    rightClick(){
      this.$router.push({path: '/mapPage/addMarker'})
    }
  },
  created(){
    that = this
  }
};
</script>
<style lang='stylus' scoped>
>>>.amap-icon img{
  width 30px
  height 33px
}
.amap-container {
  width: 100vw;
  height: 100vh;
}
</style>