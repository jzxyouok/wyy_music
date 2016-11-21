<template>
    <div class="home">
      <action-bar></action-bar>
      <router-view></router-view>
    </div>
</template>
<style scoped>
  .home {
    padding-bottom: 60px;
  }
</style>
<script>
  import actionBar from './index/actionBar.vue'
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
          actionBar
        }
    }
</script>
