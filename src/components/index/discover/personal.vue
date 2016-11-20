<template>
    <div class="personal">
      <div class="uk-grid">
        <div class="uk-width-1-3 personal-fm">
          <div class="personal-img" :style="{ 'background-image': 'url(' + (touchOne ? imgs[1] : imgs[0]) + ')' }"
               @mouseover="touchOne = true" @mouseout="touchOne = false"></div>
          <p class="personal-name">私人FM</p>
        </div>
        <div class="uk-width-1-3 personal-music">
          <div class="personal-img" :style="{ 'background-image': 'url(' + (touchTwo ? imgs[3] : imgs[2]) + ')' }"
               @mouseover="touchTwo = true" @mouseout="touchTwo = false">
            <span class="today wyy-color">{{ new Date().getDate() }}</span>
          </div>
          <p class="personal-name">每日歌曲推荐</p>
        </div>
        <div class="uk-width-1-3 personal-new">
          <div class="personal-img" :style="{ 'background-image': 'url(' + (touchThree ? imgs[5] : imgs[4]) + ')' }"
               @mouseover="touchThree = true" @mouseout="touchThree = false"></div>
          <p class="personal-name">云音乐新歌榜</p>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .personal-fm, .personal-music, .personal-new {
    /*height: 100px;*/
  }
  .personal-img {
    width: 60px;
    height: 60px;
    margin: 10px auto;
    background-size: 100%;
  }
  .personal-music .personal-img {
    position: relative;
  }
  .personal-music .personal-img .today {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 40px;
    top: 10px;
    line-height: 40px;
    text-align: center;
    font-size: 32px;
  }
  .personal-img:hover .today {
    color: #fff;
  }
  .personal-name {
    width: 100%;
    margin: 0;
    text-align: center;
  }
</style>
<script>
    export default{
        data(){
            return{
              imgs: [
                'static/wyy_res/index/discover/adt.png',
                'static/wyy_res/index/discover/adu.png',
                'static/wyy_res/index/discover/adq.png',
                'static/wyy_res/index/discover/adr.png',
                'static/wyy_res/index/discover/ae7.png',
                'static/wyy_res/index/discover/ae8.png'
              ],
              touchOne: false,//  三个选项的被点击时改变背景图片
              touchTwo: false,
              touchThree: false,
            }
        },
        methods:{
        },
        mounted (){
        },
        components:{
        }
    }
</script>
