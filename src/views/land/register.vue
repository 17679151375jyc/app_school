<template>
  <div class="page_box_css">
    <headerModu :title="'注册账号'" :Isright="false" />
    <popupModu 
        :IsShow='IsShow' 
        :titleText="'验证'"
        :butShow='false'
        @coloseClick="coloseClick()">
        <div slot='popup_div'>
            <slide-verify
                class="yanzheng_box"
                slider-text="向右滑动"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
            ></slide-verify>
            <div ref='myMsgFef' class="msg_css" v-if="msgShow">{{msg}}</div>
        </div>
    </popupModu>
    <div class="dis_column_center_center land_css">
      <img :src="require('_icon/logo1.png')" class="img_logo" />
      <ul>
        <li class="dis_row_around_center li_css">
          <span class="span_lable_css">手机号</span>
          <cube-input
            placeholder="请输入您的手机号"
            v-model="inputValue"
            class="input_css"
            :clearable="true"
          ></cube-input>
        </li>
        <!-- <li class="dis_row_around_center li_css">
          <span class="span_lable_css">验证码</span>
          <div class="dis_row_between_center input_css">
            <cube-input
              placeholder="请输入验证码"
              v-model="inputValue"
              style="width:38vw;"
              :clearable="true"
            ></cube-input>
            <cube-button
              :disabled="disabledBut"
              :outline="true"
              class="yanzheng_but"
              @click="IsVerification"
            >{{ text }}</cube-button>
          </div>
        </li> -->
        <li class="dis_row_around_center li_css">
          <span class="span_lable_css">密码</span>
          <cube-input
            placeholder="请输入您的密码"
            v-model="passWordValue"
            class="input_css"
            type="password"
            :eye="{ open: false, reverse: false }"
          ></cube-input>
        </li>
        <li class="dis_row_around_center li_css">
          <span class="span_lable_css">确认密码</span>
          <cube-input
            placeholder="请再次输入您的密码"
            v-model="passWordValue"
            class="input_css"
            type="password"
            :eye="{ open: false, reverse: false }"
          ></cube-input>
        </li>
      </ul>
      <cube-button :active="true" class="success_but_css" style="margin-top:6vw">注册</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      validity: {},
      valid: undefined,
      inputValue: "",
      passWordValue: "",
      disabledBut: false,
      text: "获取验证码",
      IsVerificationStatus: false,
      IsShow: false,
      msg: "",
      msgShow: true
    };
  },
  methods: {
    //拖动验证成功时
    onSuccess() {
      this.$refs.myMsgFef.style.color = '#0ABC0A'
      this.msg = "验证成功";
      setTimeout(()=>{
        this.IsShow = false
        this.IsVerificationStatus = true
        this.getPhoneCode();
      }, 1000)

    },
    //拖动验证失败时
    onFail() {
      this.IsVerificationStatus = false
      this.$refs.myMsgFef.style.color = 'red'
      this.msg = "验证错误，请重试";
      setTimeout(()=>{
        this.msg = "";
      }, 1500)
    },
    //刷新
    onRefresh() {
      this.msg = "";
    },
    //关闭弹窗
    coloseClick(){
        this.IsShow = false
    },
    //弹窗
    IsVerification(){
        if(this.IsVerificationStatus){
            this.getPhoneCode()
        }else{
            this.IsShow = true
        }
    },
    //验证码按钮
    getPhoneCode() {
      this.disabledBut = true;
      let time = 60;
      this.text = `${time}秒之后重试`;
      const setTime = setInterval(() => {
        if (time == 1) {
          clearTimeout(setTime);
          this.disabledBut = false;
          this.text = "获取验证码";
        } else {
          time--;
          this.text = `${time} s后重试`;
        }
      }, 1000);
    }
  }
};
</script>
<style lang='stylus' scoped>
>>>.slide-verify-refresh-icon{
    left: 61vw;
    top: 38vw;
}
.yanzheng_box{
  width 100px
}
.cube-btn-outline::after{
    border: 0!important    
}

.land_css {
  width: 88vw;
  margin: 0 auto;

  .li_css {
    width: 100%;
    height: 13vw;
    margin-top: 10px;
    .yanzheng_but{
        width:28vw;
        height:10vw;
        line-height:0vw;
        float:left;
        color:#38f;
        border:1px solid #38f;
        text-algin:center;
        padding:0
    }
    .span_lable_css {
      font-size: 4vw;
      color: #38f;
      width: 18vw;
      text-align: left;
    }

    .input_css {
      width: 72vw;
    }
  }
}
.msg_css{
  width 100%
  height 10vw
  text-align center
  color red
  line-height 10vw
  margin-top -10vw
  font-size 4vw
}
</style>