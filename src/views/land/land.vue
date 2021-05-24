<template>
  <div>
    <headerModu
            :title="'登录账号'"
            :leftTz='true'
            :Isright="false"/>
    <div class="dis_column_center_center land_css">
    <img :src="require('_icon/logo1.png')" class="img_logo">
      <ul>
        <li class="dis_row_around_center li_css">
          <span class="span_lable_css">账号</span>
          <cube-input 
            placeholder="请输入您的账号"
            v-model="inputValue" 
            class="input_css"
            :clearable='true'></cube-input>
        </li>
        <li class="dis_row_around_center li_css">
          <span class="span_lable_css">密码</span>
          <cube-input 
            placeholder="请输入您的密码"
            v-model="passWordValue" 
            class="input_css"
            type='password'
            :eye='{ open: false, reverse: false }'></cube-input>
        </li>
        <li class="dis_row_between_center li_wz">
          <router-link :to="{name:'register'}"><span>立即注册</span></router-link>
          <router-link :to="{name:'forget'}"><span>忘记密码</span></router-link>
        </li>
      </ul>
      <cube-button :active="true" class="success_but_css" style='margin-top:10vw' @click='landClick'>登录</cube-button>
    </div>
    <TransModu/>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      validity: {},
      valid: undefined,
      inputValue: '',
      passWordValue: ''
    };
  },
  methods: {
    landClick(){
      this.$createToast({
        txt: '登录成功',
        type: 'correct'
      }).show()
      setTimeout(()=>{
        this.$router.push({path:'/myInfo'})
      }, 1000)
    }
  }
};
</script>
<style lang='stylus' scoped>
input{
  background:none;
  border:none;
  outline: none;
  display:black;
}
.land_css {
  width: 88vw;
  margin: 0 auto;

  .li_css {
    width: 100%;
    height: 13vw;
    margin-top: 10px;

    .span_lable_css {
      font-size: 4.8vw;
      color #38f
      // width 15vw
      text-align left 
      padding-right 5vw
    }

    .input_css {
      width: 70vw;
    }
  }
  .li_wz{
    width 77.5%
    height: 5vw;
    margin-left 22%
    span{
      text-decoration underline  
      color #38f
    }
  }
}
</style>