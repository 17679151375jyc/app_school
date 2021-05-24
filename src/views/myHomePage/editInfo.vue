<template>
  <div class="page_box_css">
    <headerModu
      :title="title"
      :leftTz="true"
      :Isright="true"
      :maxlength="50"
      :rightData="rightData"
      @rightClick="rightClick"
    />
    <div class="div_box">
      <!-- <input  type="text" v-model="value" class="Input_css"> -->
      <div class="div_img_css" v-if="title == '头像'">
        <img :src="header_img" />
      </div>
      <cube-textarea
        class="text_css"
        placeholder="点击输入"
        :readonly="!butShow"
        v-model="value"
        v-if="title == '个性签名' && title !== '头像'"
      ></cube-textarea>
      <cube-input
        v-if="title !== '个性签名' && title !== '头像'"
        placeholder="点击输入"
        v-model="value"
        :readonly="!butShow"
        class="Input_css"
        :eye="{ open: false, reverse: false }"
      ></cube-input>
    </div>
    <div class="but_bottom_boox">
        <input type="file" class="shangchaun" v-if="title == '头像'" @change="fileChange($event)">
        <cube-button
        v-if="butShow"
        :active="true"
        class="success_but_css but_css"
        style="margin-top:10vw"
        @click="preservation"
        >{{butText}}</cube-button>
    </div>
    <img src="">
    <div class="div_can_box" v-if='option.img'>
        <headerModu
            :title="'裁剪图片'"
            :IsleftData="true"
            :Isright="true"
            :maxlength="50"
            :rightData="'确定'"
            @leftDataClick="leftDataClick"
            @rightClick="determine"
            />
        <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"
            ></vueCropper>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
      rightData: "编辑",
      butText: "保存",
      butShow: false,
      option: {
        img: null, // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量
        outputType: "jpeg", // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        // autoCropWidth: 300, // 默认生成截图框宽度
        // autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [5, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      header_img: require('_icon/header.png'),
    };
  },
  props: {
    title: {
      type: String,
      default: null
    }
  },
  methods: {
    preservation() {
      console.log(0)
    },
    //拿到图片base64文件
    fileChange(e){
        let file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        let that = this;
        reader.onload = function (e) {
          let url = this.result.substring(this.result.indexOf(',')+1);
          that.option.img = 'data:image/png;base64,' + url
        }
    },
    leftDataClick(){
        let that = this;
        that.option.img = ''
    },
    determine(){
        let that = this;
        that.$refs.cropper.getCropData((data) => {
            that.header_img = data
            that.option.img = ''
        })
    },
    rightClick() {
      if (this.title !== "头像") {
        if (!this.butShow) {
          this.rightData = "取消";
          this.butShow = true;
        } else {
          this.rightData = "编辑";
          this.butShow = false;
        }
      } else {
        if (!this.butShow) {
          this.rightData = "取消";
          this.butText = "更改";
          this.butShow = true;
        } else {
          this.rightData = "编辑";
          this.butShow = false;
        }
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
.div_box {
  width: 100vw;
  min-height: 15vw;
  border-bottom: 1px solid #38f;
}

.Input_css {
  width: 94vw;
  height: 12vw;
  margin: 5vw 3vw;
  outline: none;
  text-align: left;
  background-color: transparent;
  color: #000;
  border-radius: 1vw;
}

.but_css {
  width: 94vw;
  margin: 0 auto;
}

.text_css {
  width: 94vw;
  margin: 5vw 3vw;
}

.div_img_css {
  width: 30vw;
  height: 30vw;
  border: 2px solid #38f;
  margin: 5vw auto;
  border-radius: 50%;
  overflow hidden
}

.div_img_css img {
  width: 100%;
  height: 100%;
}
.div_can_box{
    width 100vw;
    height 100vh
    position absolute
    top 0
    left 0
}
.but_bottom_boox{
    width 94vw
    height 12vw
    position relative
    margin 0 auto
}
.shangchaun{
    position absolute
    width 100%
    height 100%
    top 0 
    left 0
    opacity 0
}
</style>