<template>
  <div id="app">
    <router-view></router-view>
    <music-play></music-play>
  </div>
</template>

<script>
import musicPlay from './components/common/musicPlay.vue'

export default {
  name: 'app',
  components: {
    musicPlay
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
  /*  宽度和高度 */
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  body {
    color: #333;
  }
  /*  列表高度和悬浮播放控件高度 */
  .list-height {
    height: 60px;
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
