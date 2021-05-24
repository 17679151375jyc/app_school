<template>
  <div>
    <cube-upload
      @file-removed='changgeFild'
      @file-success='uptateFild'
      ref="upload"
      :max='8'
      :action="action"
      :multiple='true'
      :simultaneous-uploads="3"
      :process-file="processFile"
      @file-submitted="fileSubmitted"
    />
  </div>
</template>
<script>
import compress from '@/common/commont'
export default {
  name: "uptatec",
  data() {
    return {
      list:[],
      action: {
        prop: "base64Value",
        list:[]
      }
    };
  },
  props:{
      index:{
          type: Number,
          default: null
      }
  },
  methods: {
    processFile(file, next) {
        compress(file,{
                compress: {
                    width: 1600,
                    height: 1600,
                    quality: 0.5
                }
            },next
        );
    },
    fileSubmitted(file) {
      file.base64Value = file.file.base64;
    },
    uptateFild(file){
      let that = this
      file.base64Value = file.file.base64;
      that.list.push(file.base64Value)
      that.$emit('imgListChanged', [that.list, that.index])
    },
    changgeFild(file){
      let that = this
      if(that.list.length>0){
        file.base64Value = file.file.base64;
        let data = that.list.indexOf(file.base64Value)
        that.list.splice(data, 1)
        that.$emit('imgListChanged', that.list)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
>>>.cube-upload-file-status .cubeic-right{
    color #38f
}
>>>.cube-upload-file-state{
  opacity 0!important
  display none!important
  width 0!important
  height 0!important
}
</style>