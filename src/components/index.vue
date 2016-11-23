<template>
    <div class="home">
      <action-bar></action-bar>
      <router-view></router-view>
      <buttom-player></buttom-player>
    </div>
</template>
<style scoped>
  .home {
    padding-bottom: 60px;
  }
</style>
<script>
  import actionBar from './index/actionBar.vue'
  import buttomPlayer from './common/bottomPlayer.vue'
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
          actionBar,buttomPlayer
        }
    }
</script>
