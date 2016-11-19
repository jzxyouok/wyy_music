<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
/*  app主体色类  */
  .wyy-color {
    color: #EA0606;
  }
  .wyy-bg-color {
    background-color: #EA0606;
  }
  body {
    color: #333;
  }
  /*  清浮动工具类  */
  .clearfix:before,.clearfix:after {
    content: ' ';
    display: table;
    clear: both;
  }
  /*  通用样式  */
  ul {
    margin: 0;
    padding: 0;
  }
</style>
