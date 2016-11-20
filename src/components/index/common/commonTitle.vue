<template>
  <div class="title uk-clearfix">
    <template v-if="type == 'mlist'">
      <img class="title-img" src="static/wyy_res/index/discover/adz.png" />
      <span class="title-name">推荐歌单</span>
      <span class="more">更多&nbsp;&gt;</span>
    </template>
  </div>
</template>
<style scoped>
  /*  模块标题  */
  .title {
    width: 100%;
    height: 44px;
  }
  .title span {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
  .title-img, .title-name {
    float: left;
  }
  .title .more {
    float: right;
  }
  .title-img {
    height: 20px;
    margin-top: 12px;
    margin-right: 5px;
  }
</style>
<script>
    export default{
      props:{
        type: String
      },
        data(){
            return{
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
