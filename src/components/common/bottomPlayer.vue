<template>
    <div class="bottom-player">
      <div class="uk-grid uk-container">
        <div class="uk-width-7-10">
          <div class="uk-grid">
            <div class="uk-width-1-5">
              <img class="bottom-album" src="static/wyy_res/player/album.jpg" />
            </div>
            <div class="uk-width-4-5">
              <!--  如果名字过长，后期将进行滚动显示  -->
              <h4 class="music-name">Ninna Nanna</h4>
              <p class="music-author">Mariangela</p>
            </div>
          </div>
        </div>
        <div class="uk-width-3-10">
          <div class="uk-grid">
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img class="bottom-btn btn-list" src="static/wyy_res/common/playbar_btn_playlist.png" />
            </div>
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img class="bottom-btn btn-control" src="static/wyy_res/common/playbar_btn_play.png" />
              <!--<img class="bottom-btn btn-control" src="static/wyy_res/common/playbar_btn_pause.png" />-->
            </div>
            <div class="bottom-height uk-width-1-3 uk-vertical-align">
              <img class="bottom-btn btn-next" src="static/wyy_res/common/playbar_btn_next.png" />
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
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        methods:{
        },
        mounted (){
        },
        components:{
        }
    }
</script>
