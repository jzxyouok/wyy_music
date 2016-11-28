<template>
    <div class="bottom-player">
      <div class="uk-container uk-clearfix">
        <div @click="gotoPlay" class="uk-float-left left-control">
          <div class="uk-float-left">
            <img class="bottom-album" src="static/wyy_res/album.jpg" />
          </div>
          <div class="uk-float-left left-music-msg">
            <!--  如果名字过长，后期将进行滚动显示  -->
            <h3 class="music-name text-ellipsis">{{ currentMusic.name || '未知'}}</h3>
            <p class="music-author text-ellipsis">{{ currentMusic.artists | transformAuthors }}</p>
          </div>
        </div>
        <div class="uk-float-left right-control">
          <div class="uk-grid">
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img @click="togglePlayingList" class="bottom-btn btn-list" src="static/wyy_res/playbar_btn_playlist.png" />
            </div>
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img v-if="!isPlaying" @click.stop="audioPlay" class="bottom-btn btn-control" src="static/wyy_res/playbar_btn_play.png" />
              <img v-else @click.stop="pauseMusic" class="bottom-btn btn-control" src="static/wyy_res/playbar_btn_pause.png" />
            </div>
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img @click="nextMusic" class="bottom-btn btn-next" src="static/wyy_res/playbar_btn_next.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .bottom-player {
    width: 100%;
    height: 50px;
    padding: 5px 0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(255,255,255,0.9);
  }
  .bottom-player .bottom-album {
    width: 50px;
    height: 50px;
  }
  .bottom-player .music-name {
    margin: 5px 0;
    /*  预留滚动显示的左右模糊边界 */
    padding: 0 5px;
  }
  .bottom-player .music-author {
    margin: 0;
    padding-left: 5px;
    font-size: 10px;
  }
  .bottom-player .music-name, .bottom-player .music-author {
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
   }
  .bottom-height {
    height: 50px;
  }
  .bottom-player .left-control {
    width: calc(100% - 120px)
  }
  .left-control .left-music-msg {
    width: calc(100% - 50px)
  }
  .bottom-player .right-control {
    width: 120px;
  }
</style>
<script>
    export default{
        data(){
            return{
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
        },
        methods:{
          audioPlay(){
            this.$store.commit('play');
          },
          pauseMusic(){
            this.$store.commit('pauseMusic');
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
          gotoPlay(){// 去到播放界面
            this.$router.push({ path: '/player' })
          },
          togglePlayingList(){
            this.$store.commit('togglePlayingList');
          },
        },
        mounted (){
        },
        components:{
        }
    }
</script>
