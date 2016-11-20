<template>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/1.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/2.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/3.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/4.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/5.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/6.jpg" /></div>
          <div class="swiper-slide"><img src="static/wyy_res/index/discover/banner/7.jpg" /></div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  @import "~swiper/dist/css/swiper.min.css";
</style>
<script>
  import Swiper from 'swiper'
    export default{
        data(){
            return{
            }
        },
        methods:{
        },
        mounted (){
          var swiper = new Swiper('.swiper-container', {
            autoplay: 5000,//可选选项，自动滑动
          });
        },
        components:{
        }
    }
</script>
