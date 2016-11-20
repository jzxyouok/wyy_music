<template>
    <div class="recommend">
      <!--  轮播图 -->
      <banner></banner>
      <!--  私人FM、每日推荐与新歌榜单  -->
      <personal></personal>
    </div>
</template>
<style scoped>
</style>
<script>
  import personal from './personal.vue'
  import banner from './banner.vue'
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
          banner,personal
        }
    }
</script>
