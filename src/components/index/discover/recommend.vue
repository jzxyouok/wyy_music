<template>
    <div class="recommend">
      <!--  轮播图 -->
      <banner></banner>
      <!--  私人FM、每日推荐与新歌榜单  -->
      <personal></personal>
      <!--  主要内容  -->
      <div class="uk-container">
        <!--  推荐歌单  -->
        <recommend-mlist></recommend-mlist>
        <!--  独家放送  -->
        <exclusive></exclusive>
        <!--  最新音乐  -->
        <new-music></new-music>
        <!--  推荐MV  -->
        <recommend-mv></recommend-mv>
        <!--  主播电台  -->
        <radio-fm></radio-fm>
        <!--  底部排序功能  -->
        <div class="resort-container">
          <p class="wyy-gray-color uk-text-center resort-tips">现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
          <div class="resort uk-text-center">
            <button class="resort-button uk-button wyy-color">调整栏目顺序</button>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .resort-container {
    margin: 10px 0;
    padding: 10px 0;
    border-top: 1px solid #f3f3f3;
  }
  .resort-tips {
    font-size: 12px;
  }
  .resort-button {
    background-color: transparent;
    border: 1px solid #CE3D3E;
    border-radius: 2px;
  }
</style>
<script>
  import banner from './banner.vue'
  import personal from './personal.vue'
  import recommendMlist from './recommendMlist.vue'
  import exclusive from './exclusive.vue'
  import newMusic from './newMusic.vue'
  import recommendMv from './recommendMv.vue'
  import radioFm from './radioFm.vue'
    export default{
        data(){
            return{
            }
        },
        methods:{
        },
        ready (){
        },
        components:{
          banner,personal,recommendMlist,exclusive,newMusic,recommendMv,radioFm
        }
    }
</script>
