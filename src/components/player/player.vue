<template>
    <div class="player">
      <canvas id="musicBg"></canvas>
      <div class="title uk-grid">
          <div class="uk-width-1-5">
            <img @click="goBack" src="static/wyy_res/player/i0.png" class="icon-btn" />
          </div>
          <div class="uk-width-3-5">
            <h3>{{ mediaObj.name }}</h3>
            <p>{{ mediaObj.author | transformAuthors }}</p>
          </div>
          <div class="uk-width-1-5">
            <img src="static/wyy_res/player/wk.png" class="icon-btn" />
          </div>
        </div>
      <!--  显示专辑图片组件 -->
      <album :is-playing="isPlaying"></album>
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
              <input type="range" class="uk-width-1-1" v-model="percentage" min="0" :max="Math.floor(durationTime)" />
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
  #musicBg {
    /*  禁止stackblur设定宽度和高度  */
    width: 100%!important;
    height: 100%!important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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
  import stackblur from 'stackblur-canvas'
    export default{
        data(){
            return{
              audioObj: '',
              mediaObj: {},// 存储歌曲信息
              currentTime: 0,// 当前播放时间进度
              durationTime: 0,// 总播放时长
              isPlaying: false,//  当前是否在播放
              timer: '',//  定时获取播放时间的定时器
              album: 'static/wyy_res/player/album.jpg'
            }
        },
        computed:{
          percentage:{// 当前播放进度条所在位置
            get(){
              return Math.floor(this.currentTime);
            },
            set( percentage ){// 播放进度的控制
              if ( this.audioObj == false ){//  存在媒体类型对象时
                return
              }
              this.audioObj.currentTime = percentage;
              this.currentTime = percentage;
            }
          }
        },
        methods:{
          audioPlay(){//  控制播放
            let self = this;
            if ( this.audioObj.src == false ) {
              this.audioObj.src = process.env.NODE_ENV !== 'production' ? 'http://www.kittyjs.com/'+ this.mediaObj.src : this.mediaObj.src;
            }else {
              this.audioObj.play();
            }
            this.audioObj.onloadedmetadata = function () {//  当元数据加载完成时才获取总时长
              self.durationTime = self.audioObj.duration;// 获取媒体总时长
            };
            this.audioObj.oncanplay = function () {
              self.audioObj.play();
            };
            this.audioObj.onplaying = function () {
              let audio = this;
              self.isPlaying = true;
              self.timer = setInterval( function () {
                self.currentTime = audio.currentTime;
              },1000)
            }
            this.audioObj.onended = function () {//  结束播放
              self.isPlaying = false;
              self.currentTime = 0;
            }
          },
          audioPause(){// 播放暂停
            let self = this;
            clearInterval(self.timer);//  不再获取进度条时间
            this.audioObj.pause();
            this.audioObj.onpause = function () {
              self.isPlaying = false;
            }
          },
          loadData( id ){// 加载歌曲所需的资源
            this.$http({ url: 'static/api/music.php', params:{ mId: id }}).then(function (res) {
//              console.log( res )
              if ( res.data.status == 200 ){
                if ( res.data.data.albumSrc != false ){
                  this.album = res.data.data.albumSrc
                }
                this.mediaObj = res.data.data;
              }else {
                //  错误信息
              }
            })
          },
          createBg(){//  创建高斯模糊背景
            let img = new Image();
            img.src = this.album;
//            img.onload = function () {
              stackblur.image(img, 'musicBg', 180);
//            }
          },
        },
        mounted (){
          this.audioObj = document.getElementById('music');
          if ( this.$route.query.mId != '' ){
            this.loadData( this.$route.query.mId )
          }
          //  默认封面背景
          this.createBg();
        },
        components:{
          album
        }
    }
</script>
