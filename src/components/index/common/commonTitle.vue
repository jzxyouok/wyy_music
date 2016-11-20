<template>
  <div class="title uk-clearfix">
    <template>
      <img class="title-img" :src="icon" />
      <span class="title-name">{{ title }}</span>
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
        icon: String,
        title: String,
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
