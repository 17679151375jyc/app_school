<template>
   <div class="page_box_css">
      <headerModu :title="'上传'" :Isright="true" @rightClick='rightClick'/>
      <cube-scroll style='height:93vh;' ref="scroll">
         <span class="title_box">课室<i class="iconfont iconkeshi icon_css"></i></span>
         <div class="content_css"><uptatecModu :index='0' @imgListChanged='getVal' /></div>
         <span class="title_box">宿舍<i class="iconfont iconsushe icon_css"></i></span>
         <div class="content_css"><uptatecModu :index='1' @imgListChanged='getVal' /></div>
         <span class="title_box">食堂<i class="iconfont iconshitang icon_css"></i></span>
         <div class="content_css"><uptatecModu :index='2' @imgListChanged='getVal' /></div>
         <span class="title_box">其他<i class="iconfont iconqita icon_css"></i></span>
         <div class="content_css"><uptatecModu :index='3' @imgListChanged='getVal' /></div>
      </cube-scroll>
    <popupModu 
        :IsShow='IsShow' 
        @quedingClick='quedingClick'
        @coloseClick="coloseClick()">
        <div slot='popup_div' style='text-align:center'>
            图片将全部上传，是否继续？
        </div>
    </popupModu>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           IsShow: false,
           imgList:{
              classroom:[],
              dormitory:[],
              canteen:[],
              others:[]
           }
       }
   },
   methods:{
      getVal([list, index]){
         let that = this 
         switch(index){
            case 0:
               that.imgList.classroom = list;
               break;
            case 1:
               that.imgList.dormitory = list
               break;
            case 2:
               that.imgList.canteen = list
               break;
            case 3:
               that.imgList.others = list
               break;
         }
      },
      rightClick(){
         this.IsShow = true
      },
       //关闭弹窗
      coloseClick(){
         this.IsShow = false
      },
      quedingClick(){
         console.log('确定')
      }
   }
}

</script>
<style lang='stylus' scoped>
.title_box{
  display block
  margin 1vw 0
  padding-left 2vw
  width: 20%;
  height: 9.31vw;
  line-height: 10vw;
  font-size: 4.5vw;
  color:#fff;
  border-top-right-radius 5vw
  border-bottom-right-radius 5vw
  background: linear-gradient(to right,#2583FA, #A056FB) !important;
}
.content_css{
  width: 96vw;
  padding: 3vw 2vw;
  min-height: 20vw
  background-color #EDF4FD
}
.icon_css{
   margin-left 2vw
   margin-top -1vw
   font-size: 4.5vw;
}
</style>