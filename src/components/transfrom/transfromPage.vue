<template>
   <div>       
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           
       }
   },
   methods:{
       
   }
}

</script>
<style lang='stylus' scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(100vw);
}

</style>