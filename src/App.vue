<template>
  <div id="app">
    <router-view></router-view>
    <audio id="music"></audio>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  mounted(){
    this.$store.commit('init');
  }
}
</script>

<style>
/*  app主体色类  */
  .wyy-color {
    /*  主字体颜色 */
    color: #CE3D3E;
  }
  .wyy-bg-color {
    /*  主背景色  */
    background-color: #CE3D3E;
  }
  .wyy-gray-color {
    /*  灰色字体颜色  */
    color: #888;
  }
  .white-color {
    /*  白色字体  */
    color: #fff;
  }
  /*  宽度和高度 */
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  body,a {
    color: #333;
  }
  a {
    text-decoration: none;
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
  .text-ellipsis {
    /*  缩略显示过长文字类 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*  通用样式  */
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
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
/*  swiper激活的分页器背景色 */
.swiper-pagination-bullet-active {
  background: #CE3D3E!important;
}
</style>
