<template>
  <div id="app">
    <router-view></router-view>
    <audio id="music"></audio>
    <playing-list></playing-list>
  </div>
</template>

<script>
import playingList from './components/common/playingList.vue'
export default {
  name: 'app',
  components: {
    playingList
  },
  mounted(){
    this.$store.dispatch('autoNext');
  }
}
</script>

<style>
  @import "~swiper/dist/css/swiper.min.css";
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
  .white-color-bg {
    background-color: #fcfdfd;
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
  /*  更改浏览器默认的系统主题样式-开始  */
  input[type="range"] {
    -webkit-appearance: none;
    background-color: rgba(255,255,255,0.1);
    height: 2px;
  }
  /*滑块*/
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    height: 15px;
    width: 15px;
    border: 0;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    -webkit-box-shadow: 0 2px 7px -5px rgba(0, 0, 0, 1);
    box-shadow: 0 2px 7px -5px rgba(0, 0, 0, 1);
  }
  /*  更改浏览器默认的系统主题样式-结束  */

  /*  1像素解决方案 */
  .item-border-bottom {
    position: relative;
  }
  .item-border-bottom:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    pointer-events: none;/*  解决内部元素无法点击问题  */
  }
</style>
