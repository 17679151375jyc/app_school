<template>
    <div>
        <div class="popup" v-if='IsShow'>
            <div class="tanchu_box">
                <span class="del_icon_css" @click="closeClick" v-if="closeIcon">
                    <img :src="require('_icon/del_icon.png')">
                </span>
                <span class="title_css" v-if='titleShow'>{{titleText}}</span>
                <div class="cont_css" :style="`margin-top:${contTopVal}vw`">
                    <slot v-if="type=='custom'" name="popup_div"></slot>
                    <div v-if="type=='warn'" class="warn_css">{{warnText}}</div>
                </div>
                <div class="dis_row_between_center but_css" v-if="butShow&&type=='custom'">
                    <div class="dis_row_center_center close_css" @click="closeClick">取消</div>
                    <span class="span_shu_css"></span>
                    <div @click="quedingClick" class="dis_row_center_center queding_css">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'popupModu',
    props:{
        titleShow:{
            type: Boolean,
            default: true,
        },
        titleText:{
            type: String,
            default: '温馨提示'
        },
        butShow:{
            type: Boolean,
            default: true,
        },
        IsShow: {
            type: Boolean,
            default: false,
        },
        type:{
            type: String,
            default: 'custom'
        },
        warnText: {
            type: String,
            default: '请求超时'
        },
        closeIcon: {
            type: Boolean,
            default: true,
        }
    },
    watch:{
        titleShow: function(val){
            let that = this
            if(val){
                that.contTopVal = 2
            }else{
                that.contTopVal = 10
            }
        }
    },
    data(){
        return{
            contTopVal: 2,
            popupHeight: null
        }
    },
    methods:{
        quedingClick(){
            let that = this
            that.$emit('quedingClick',{})
        },
        closeClick(){            
            let that = this
            that.$emit('coloseClick', {});
        }
    },
    mounted(){
        let that = this
        if(that.titleShow){
            that.contTopVal = 2
        }else{
            that.contTopVal = 10
        }
    }
}
</script>
<style lang="stylus" scoped>
.popup{
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background-color rgba(0, 0, 0, 0.4)
    animation: popupAnima 0.3s linear normal 
    display flex;
    z-index 100000000
    font-size 3.74vw
}
@keyframes popupAnima {
    0%{opacity: 0}
    100%{opacity: 1}
}
.tanchu_box{
    position absolute
    border-radius 2.7vw
    width 80vw
    left 10vw
    background-color #fff
    padding-bottom 2vw
    // top 30%
    align-self center
}
.del_icon_css{
    display block
    width 4vw
    height 4vw
    position absolute
    top 2vw
    right 2vw
}
.del_icon_css img{
    width 100%
    height 100%
}
.title_css{
    border-bottom 1px solid rgba(204,204,204, .5)
    width 100%
    display block
    text-align center
    height 10vw
    line-height 11vw
    font-weight bold
    font-size 4.2vw
    color #333
}
.cont_css{
    width 94%
    margin 0 2%
    min-height 10vw
    display block
    max-height 90vh
    overflow-y scroll
    padding 1%
    overflow hidden
}
.but_css{
    height 10vw
}
.close_css{
    padding-left 3vw
    height 100%
    width 30vw
    color #999
    font-weight bold
}
.span_shu_css{
    display block
    width 1px
    height 100%
    background-color rgba(204,204,204, .5)
}
.queding_css{
    padding-right 3vw
    height 100%
    width 30vw
    color #38f
    font-weight bold
}
.warn_css{
    width 100%;
    min-height 15vw
    margin-top 4vw
    text-align center
}
</style>