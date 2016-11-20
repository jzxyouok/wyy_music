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
      </div>
    </div>
</template>
<style scoped>
</style>
<script>
  import banner from './banner.vue'
  import personal from './personal.vue'
  import recommendMlist from './recommendMlist.vue'
  import exclusive from './exclusive.vue'
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
          banner,personal,recommendMlist,exclusive
        }
    }
</script>
