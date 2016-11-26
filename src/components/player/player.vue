<template>
    <div class="player">
      <canvas id="musicBg"></canvas>
      <div class="title uk-grid">
          <div class="uk-width-1-5">
            <img @click="goBack" src="static/wyy_res/i0.png" class="icon-btn" />
          </div>
          <div class="uk-width-3-5">
            <h3 class="text-ellipsis">{{ mediaObj.name || '未知'}}</h3>
            <p class="text-ellipsis">{{ mediaObj.author | transformAuthors }}</p>
          </div>
          <div class="uk-width-1-5">
            <img src="static/wyy_res/a4x.png" class="icon-btn" />
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
                <img class="icon-menu icon-collection" src="static/wyy_res/a_z.png" />
                <!--<img class="icon-menu icon-collection" src="static/wyy_res/q5.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-download" src="static/wyy_res/a_q.png" />
                <!--<img class="icon-menu icon-download" src="static/wyy_res/a_s.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-comment" src="static/wyy_res/a_m.png" />
                <!--<img class="icon-menu icon-comment" src="static/wyy_res/a_n.png" />-->
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-detail" src="static/wyy_res/aa4.png" />
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
            <img class="play-mode" src="static/wyy_res/a_x.png" />
            <!--<img class="play-mode" src="static/wyy_res/aag.png" />-->
            <!--<img class="play-mode" src="static/wyy_res/aa6.png" />-->
          </div>
          <div class="uk-width-3-5">
            <div class="uk-grid">
              <div class="uk-width-3-10">
                <img class="icon-control pre-control" src="static/wyy_res/a9t.png" />
              </div>
              <div class="uk-width-2-5 play-container">
                <img v-if="!isPlaying" class="icon-control play-control" @click="audioPlay" src="static/wyy_res/a9r.png" />
                <img v-else class="icon-control pause-control" @click="audioPause" src="static/wyy_res/a9p.png" />
              </div>
              <div class="uk-width-3-10">
                <img class="icon-control next-control" src="static/wyy_res/a9n.png" />
              </div>
            </div>
          </div>
          <div class="uk-width-1-5">
            <img @click="togglePlayingList" class="icon-list" src="static/wyy_res/aaj.png" />
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
    /*height: calc(35% - 61px);*/
    position: absolute;
    bottom: 0;
    /*overflow: hidden;*/
  }
  .icon-container {
    position: relative;
    height: 60px;
    overflow: hidden;
  }
  .icon-menu {
    position: absolute;
    top: -10px;
    /*left: -15px;*/
    width: 100%;
    /*height: 60px;*/
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
    display: inline-block;
    font-size: 10px;
    line-height: 40px;
    color: #888;
  }
  .mine-control {
    height: 70px;
    padding: 10px 0;
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
              album: 'static/wyy_res/album.jpg'
            }
        },
        computed:{
          mediaObj(){
            return this.$store.state.currentMusic
          },
          isPlaying(){
            return this.$store.state.isPlaying
          },
          currentTime(){
            return this.$store.state.currentTime
          },
          durationTime(){
            return this.$store.state.durationTime
          },
          percentage:{// 当前播放进度条所在位置
            get(){
              return Math.floor(this.currentTime);
            },
            set( percentage ){// 播放进度的控制
              this.$store.commit('setCurrentTime', percentage);
            }
          }
        },
        methods:{
          audioPlay(){//  控制播放
           this.$store.dispatch('play');
          },
          audioPause(){// 暂停
            this.$store.commit('pauseMusic');
          },
          togglePlayingList(){//  显示悬浮的正在播放列表
            this.$store.commit('togglePlayingList');
          },
          loadData( id ){// 加载歌曲所需的资源
            this.$http({ url: 'static/api/music.php', params:{ mId: id }}).then(function (res) {
//              console.log( res )
              if ( res.data.status == 200 ){
                if ( res.data.data.albumSrc != false ){
                  this.album = res.data.data.albumSrc
                  this.createBg()
                }
                this.$store.commit('getCurrentMusic', res.data.data );
              }else {
                //  错误信息
              }
            })
          },
          createBg(){//  创建高斯模糊背景
            let img = new Image();
            img.src = this.album;
            img.onload = function () {
              stackblur.image(img, 'musicBg', 180);
            }
          },
        },
        mounted (){
          if ( this.$route.query.mId != '' && !this.isPlaying ){
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
