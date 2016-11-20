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
    color: #CE3D3E;
  }
  .wyy-bg-color {
    background-color: #CE3D3E;
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
  /*  框架重设  */
  /*  间距  */
.uk-container {
  padding: 0 10px;
}
.uk-grid {
  margin-left: -5px;
}
.uk-grid>* {
  padding-left: 5px;
}
</style>
