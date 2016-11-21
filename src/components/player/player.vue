<template>
    <div class="player">
      <div class="player-bg" :style="{ 'background': 'url(' + album + ') no-repeat center center' }"></div>
      <div class="title uk-grid">
          <div class="uk-width-1-5">
            <img src="static/wyy_res/player/i0.png" class="icon-btn" />
          </div>
          <div class="uk-width-3-5">
            <h3>Anna Binaku</h3>
            <p>my hood</p>
          </div>
          <div class="uk-width-1-5">
            <img src="static/wyy_res/player/wk.png" class="icon-btn" />
          </div>
        </div>
      <!--  显示专辑图片组件 -->
      <album></album>
      <div class="menu">
        <!--  收藏等功能列表 -->
        <div class="uk-grid">
          <div class="uk-width-4-5 uk-container-center">
            <div class="uk-grid">
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-collection" src="static/wyy_res/player/a_z.png" />
                <!--<img class="icon-menu icon-collection" src="static/wyy_res/player/q5.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-download" src="static/wyy_res/player/a_q.png" />
                <!--<img class="icon-menu icon-download" src="static/wyy_res/player/a_s.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-comment" src="static/wyy_res/player/a_m.png" />
                <!--<img class="icon-menu icon-comment" src="static/wyy_res/player/a_n.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-detail" src="static/wyy_res/player/aa4.png" />
              </div>
            </div>
          </div>
        </div>
        <!--  进度条 -->
        <div class="uk-container progress">
          <div class="uk-grid">
            <div class="uk-width-1-10">
              <span class="time start-time">{{ currentTime | transformMediaTime }}</span>
            </div>
            <div class="uk-width-4-5">
              <!--  这个进度条太丑了，后期再调整  -->
              <input type="range" class="uk-width-1-1" min="0" max="100" />
            </div>
            <div class="uk-width-1-10">
              <span class="time end-time">{{ durationTime | transformMediaTime }}</span>
            </div>
          </div>
        </div>
        <!--  播放模式、控制、列表  -->
        <div class="uk-grid mine-control">
          <div class="uk-width-1-5">
            <img class="play-mode" src="static/wyy_res/player/a_x.png" />
            <!--<img class="play-mode" src="static/wyy_res/player/aag.png" />-->
            <!--<img class="play-mode" src="static/wyy_res/player/aa6.png" />-->
          </div>
          <div class="uk-width-3-5">
            <div class="uk-grid">
              <div class="uk-width-3-10">
                <img class="icon-control pre-control" src="static/wyy_res/player/a9t.png" />
              </div>
              <div class="uk-width-2-5 play-container">
                <img v-if="!isPlaying" class="icon-control play-control" @click="audioPlay" src="static/wyy_res/player/ab2.png" />
                <img v-else class="icon-control pause-control" @click="audioPause" src="static/wyy_res/player/ab0.png" />
              </div>
              <div class="uk-width-3-10">
                <img class="icon-control next-control" src="static/wyy_res/player/a10.png" />
              </div>
            </div>
          </div>
          <div class="uk-width-1-5">
            <img class="icon-list" src="static/wyy_res/player/aaj.png" />
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .player {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .player-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: 100% 100%!important;
    /*  高斯模糊背景  */
    -webkit-filter: blur(20px);
    filter: blur(20px);
  }
  .title {
    height: 60px;
  }
  h3,p {
    margin: 0;
  }
  h3 {
    color: #fff;
    margin-top: 8px;
  }
  p {
    color: #888;
  }
  .icon-btn {
    display: block;
    margin: 15px auto 0;
    width: 30px;
  }
  /*  底部功能菜单  */
  .menu {
    width: 100%;
    height: calc(35% - 61px);
    position: absolute;
    bottom: 0;
    /*overflow: hidden;*/
  }
  .icon-container {
    position: relative;
    height: 40px;
    overflow: hidden;
  }
  .icon-menu {
    position: absolute;
    top: -10px;
    /*left: -15px;*/
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
  .progress {
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
  }
  /*  更改浏览器默认的系统主题样式-开始  */
  input[type="range"] {
    -webkit-appearance: none;
    background-color: #888;
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
  .time {
    font-size: 10px;
    color: #888;
  }
  .mine-control {
    height: calc(100% - 90px);
  }
  .play-mode,.icon-list {
    display: block;
    width: 60px;
    margin: 5px auto 0;
  }
  .pre-control,.next-control {
    display: block;
    width: 70px;
    margin: 0 auto;
  }
  .play-container {
    max-height: 70px;
    overflow: hidden;
  }
  .play-control,.pause-control {
    display: block;
    width: 90px;
    margin: -10px auto 0;
  }
</style>
<script>
  import album from './album.vue'
    export default{
        data(){
            return{
              audioObj: '',
              currentTime: 0,// 当前播放时间进度
              durationTime: 0,// 总播放时长
              isPlaying: false,//  当前是否在播放
              album: 'static/wyy_res/player/album.jpg'
            }
        },
        methods:{
          audioPlay(){//  控制播放
            let self = this;
            this.durationTime = this.audioObj.duration;// 获取媒体总时长
            this.audioObj.play();
            this.audioObj.onplaying = function () {
              self.isPlaying = true;
            }
            this.audioObj.onprogress = function () {//  获取当前播放进度，未缓存进度时
              self.currentTime = this.currentTime;
            }
            this.audioObj.onended = function () {//  结束播放
              self.isPlaying = false;
              self.currentTime = 0;
            }
          },
          audioPause(){// 播放暂停
            let self = this;
            this.audioObj.pause();
            this.audioObj.onpause = function () {
              self.isPlaying = false;
            }
          },
        },
        mounted (){
          this.audioObj = document.getElementById('music');
        },
        components:{
          album
        }
    }
</script>
