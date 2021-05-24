<template>
    <div>

        <div class="footer_css" v-if="footerShow">
            <ul>
                <li class="dis_column_center_center">
                    <span class="dis_column_center_center" @click="pageClick(0)">
                        <img 
                            :src="status == 0 ? 
                                require('_icon/shouye2.png'):
                                require('_icon/shouye1.png')">
                        <span 
                            class="spanSize"
                            :style="status == 0?'color: #38f;':'color: #979999;'">首页</span>
                    </span>
                </li>
                <li class="dis_column_center_center">
                    <span class="dis_column_center_center" @click="pageClick(1)">
                        <img 
                            :src="status == 1 ? 
                                require('_icon/fangda2.png'):
                                require('_icon/fangda1.png')">
                        <span 
                            class="spanSize"
                            :style="status == 1?'color: #38f;':'color: #979999;'">校圈</span>
                    </span>
                </li>
                <li class="dis_column_center" style="width:18vw;position:relative">
                    <span class="dis_column_center_center xiangji_box_css" @click="cameraPageClick">
                        <img class="img_xj"
                            :src="true ? 
                                require('_icon/xiangji2.png'):
                                require('_icon/xiangji1.png')">
                    </span>
                </li>
                <li class="dis_column_center_center">
                    <span class="dis_column_center_center" @click="pageClick(3)">
                        <img 
                            :src="status == 3 ? 
                                require('_icon/xiaoxi2.png'):
                                require('_icon/xiaoxi1.png')">
                        <span 
                            class="spanSize" 
                            :style="status == 3?'color: #38f;':'color: #979999;'">消息</span>
                    </span>
                </li>
                <li class="dis_column_center_center">
                    <span class="dis_column_center_center " @click="pageClick(4)">
                        <img 
                            :src="status == 4 ? 
                                require('_icon/wode2.png'):
                                require('_icon/wode1.png')">
                        <span 
                            class="spanSize" 
                            :style="status == 4?'color: #38f;':'color: #979999;'">我的</span>
                    </span>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            status: 2,
            footerShow: true
        }
    },
    components:{

    },
    computed:{        
        ...mapState({
            pageStatus: state => state.app.pageStatus
        })
    },
    methods:{
        pageClick(status){
            this.status = status
            this.$store.commit('setPageStatus', status);
            this.pegeFunc(status)
        },
        pegeFunc(status){
            switch(status){
                case 0:
                    this.$router.push({path:'/index/indexPage'})
                    break;
                case 1:
                    this.$router.push({path:'/index/schoolCircleIndex'})
                    break;
                // case 2:
                //     this.$router.push({path:'/index/cameraIndex'})
                //     break;
                case 3:
                    this.$router.push({path:'/index/newInfoList'})
                    break;
                case 4:
                    this.$router.push({path:'/index/myHomePageIndex'})
                    break;
            }
        },
        cameraPageClick(){
            this.$router.push({path: '/cameraIndex'})
        }
    },
    mounted(){
        this.status = this.pageStatus
        this.pegeFunc(this.pageStatus)
        let Bheight = document.documentElement.clientHeight;
        window.onresize = () => {//监听屏幕高度变化，控制底部按钮的显示与隐藏
            if( Bheight > document.documentElement.clientHeight ){
                this.footerShow = false;
            }else{
                this.footerShow = true;
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.footer_css{
    width 100vw
    height 15vw
    position absolute
    bottom 0
    left 0
    background-color #F3F5FF
    border-top .5px solid #A5B1FE
    z-index 10000
    box-shadow 0vw 0vw 14vw -4vw #38F;
    li{
        float left
        width 20.5vw
        // width 25%
        height 100%
        text-align center
        img{
            width 7.8vw
            height 7.8vw
            margin 1vw
            margin-top 2vw
            margin-bottom 0
        }
        span{
            margin 1vw
            transform scale(0.9)
        }
        .xiangji_box_css{
            display block
            position absolute
            bottom -2vw
            border 1px solid #A5B1FE
            border-bottom 0
            width 15vw
            height 20vw
            border-top-left-radius 33%
            border-top-right-radius 33%
            background-color #F3F5FF
            // margin-top -10vw
        }
    }
}
.img_xj{
    width 12vw!important
    height 12vw!important
    margin-top 2vw!important
    animation:jyc 1s infinite linear;
}
@keyframes jyc{
    0%{ transform:scale(0.8); }
    50%{ transform:scale(0.82); }
    100%{ transform:scale(0.8); }
}
</style>