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
</style>
<script>
    export default{
        data(){
            return{
              album: 'static/wyy_res/player/album.jpg'
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
