<template>
    <div class="player" :class="{'player-bg': displayLrc }">
      <canvas id="musicBg"></canvas>
      <div class="title uk-grid">
          <div class="uk-width-1-5">
            <img @click="goBack" src="static/wyy_res/i0.png" class="icon-btn" />
          </div>
          <div class="uk-width-3-5">
            <h3 class="text-ellipsis">{{ currentMusic.name || '未知'}}</h3>
            <p class="text-ellipsis">{{ currentMusic.artists | transformAuthors }}</p>
          </div>
          <div class="uk-width-1-5">
            <img src="static/wyy_res/a4x.png" class="icon-btn" />
          </div>
        </div>
      <!--  显示专辑图片组件 -->
      <album :is-playing="isPlaying" :album-img="currentMusic.album.picUrl" :class="{ 'to-bottom': displayLrc }"></album>
      <lyric :id="currentMusic.id" :class="{ 'to-bottom': !displayLrc }"></lyric>
      <div class="menu">
        <!--  收藏等功能列表 -->
        <!--<div v-show="!displayLrc" class="uk-grid">
          <div class="uk-width-4-5 uk-container-center">
            <div class="uk-grid">
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-collection" src="static/wyy_res/a_z.png" />
                &lt;!&ndash;<img class="icon-menu icon-collection" src="static/wyy_res/q5.png" />&ndash;&gt;
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-download" src="static/wyy_res/a_q.png" />
                &lt;!&ndash;<img class="icon-menu icon-download" src="static/wyy_res/a_s.png" />&ndash;&gt;
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-comment" src="static/wyy_res/a_m.png" />
                &lt;!&ndash;<img class="icon-menu icon-comment" src="static/wyy_res/a_n.png" />&ndash;&gt;
              </div>
              <div class="uk-width-1-4 icon-container">
                <img class="icon-menu icon-detail" src="static/wyy_res/aa4.png" />
              </div>
            </div>
          </div>
        </div>-->
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
            <img v-show="playStyle == 0" @click="changePlayStyle(0)" class="play-mode" src="static/wyy_res/a_x.png" />
            <img v-show="playStyle == 1" @click="changePlayStyle(1)" class="play-mode" src="static/wyy_res/aag.png" />
            <img v-show="playStyle == 2" @click="changePlayStyle(2)" class="play-mode" src="static/wyy_res/aa6.png" />
          </div>
          <div class="uk-width-3-5">
            <div class="uk-grid">
              <div class="uk-width-3-10">
                <img @click="prevMusic" class="icon-control pre-control" src="static/wyy_res/a9t.png" />
              </div>
              <div class="uk-width-2-5 play-container">
                <img v-if="!isPlaying" class="icon-control play-control" @click="audioPlay" src="static/wyy_res/a9r.png" />
                <img v-else class="icon-control pause-control" @click="audioPause" src="static/wyy_res/a9p.png" />
              </div>
              <div class="uk-width-3-10">
                <img @click="nextMusic" class="icon-control next-control" src="static/wyy_res/a9n.png" />
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
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease ;
  }
  .player-bg {
    background-color: rgba(0,0,0,0.3);
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
  .to-bottom {
    /*  用于降低封面图或者歌词所在的层级和隐藏界面，防止两个组件的touch事件同时触发 */
    opacity: 0;
    z-index: -999;
    height: 0!important;
  }
</style>
<script>
  import album from './album.vue'
  import stackblur from 'stackblur-canvas'
  import lyric from './lyric.vue'
    export default{
        data(){
            return{
              album: 'static/wyy_res/album.jpg'
            }
        },
        computed:{
          currentMusic(){
            return this.$store.state.currentMusic
          },
          playingList(){//  正在播放的列表
            return this.$store.state.list;
          },
          isPlaying(){
            return this.$store.state.isPlaying
          },
          playStyle(){//  当前播放模式，模式详情看store的注释
            return this.$store.state.playStyle
          },
          displayLrc(){// 是否显示歌词界面
            return this.$store.state.displayLrc
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
           this.$store.commit('play');
          },
          audioPause(){// 暂停
            this.$store.commit('pauseMusic');
          },
          prevMusic(){//  上一首
            if ( this.playStyle == 1 ){// 反正都是随机，上一首和下一首没差别了
              this.$store.dispatch('playNext');
              return
            }
            //  单曲循环和列表循环都使用下面的方法播放
            for ( let i =0; i < this.playingList.length; i++ ){
              if ( this.playingList[i].id == this.currentMusic.id ){// 假定当前为循环模式
                if ( i == 0 ){//  当前为列表第一首
                  this.$store.commit('getCurrentMusic', this.playingList[this.playingList.length-1]);
                  break
                }else {
                  this.$store.commit('getCurrentMusic', this.playingList[i-1]);
                  break
                }
              }
            }
            this.audioPlay();
          },
          changePlayStyle( val ){//  更改播放模式
            let mode;
            if ( val < 2 ){
              mode = ++val;
            }else {
              mode = 0;
            }
            this.$store.commit('changePlayStyle',mode)

          },
          nextMusic(){//  下一首
            if ( this.playStyle == 0 || this.playStyle == 1 ){
              this.$store.dispatch('playNext');
              return
            }
            //  只有单曲循环模式才会获取下一首
            for ( let i =0; i < this.playingList.length; i++ ){
              // 这里使用for循环是因为在foreach中，当索引小于数组长度时，value.id == self.currentMusic.id 总是成立，无法立即跳出循环
              // 会不停的匹配当前播放音乐，而播放上一首的方法中同样存在这个问题
              if ( this.playingList[i].id == this.currentMusic.id ){// 假定当前为循环模式
                if ( i == this.playingList.length - 1 ){//  当前为列表最后一首
                  this.$store.commit('getCurrentMusic', this.playingList[0]);
                  break
                }else {
                  this.$store.commit('getCurrentMusic', this.playingList[i+1]);
                  break
                }
              }
            }
            this.audioPlay();
          },
          togglePlayingList(){//  显示悬浮的正在播放列表
            this.$store.commit('togglePlayingList');
          },
          createBg(){//  创建高斯模糊背景
            let img = new Image();
            /*if ( this.currentMusic.album.picUrl != '' ){//  存在跨域问题
              img.src = this.currentMusic.album.picUrl;
            }else {*/
              img.src = this.album;
            /*}
            img.crossOrigin = 'anonymous'*/
            img.onload = function () {
              stackblur.image(img, 'musicBg', 180);
            }
          },
        },
        mounted (){
          //  默认封面背景
          this.createBg();
        },
        components:{
          album,lyric
        }
    }
</script>
