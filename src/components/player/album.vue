<template>
    <div class="album">
      <!--  控制杆 -->
      <div class="joystick">
        <img :class="{ 'img-control': isPlaying }" src="static/wyy_res/player/aao.png" />
      </div>
      <!--  磁碟  -->
      <div class="diskette">
        <div class="diskette-bg"></div>
        <div class="diskette-container rotating-album" :class="{ 'running': !isPlaying }">
          <!--  磁碟图 -->
          <div class="diskette-img"></div>
          <!--  专辑图 -->
          <div class="diskette-album" :style="{ 'background-image': 'url(' + albumImg + ')' }"></div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .album {
    position: relative;
    width: 100%;
    height: 65%;
    /*  后期处理成两端渐变 */
    border-top: 1px solid #f3f3f3;
    overflow: hidden;
  }
  /*  控制杆 */
  .album .joystick {
    height: 28%;
    width: 42%;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 5;
    margin-left: -5%;
  }
  .joystick img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: -8px;
    left: 0;
    z-index: 9;
    transform-origin: 0 0 0;
    transform: rotate(-10deg);
    transition: all 0.5s ease;
  }
  .joystick .img-control {
    top: -22px;
    transform: rotate(15deg);
  }
  /*  磁碟  */
  .album .diskette {
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 1;
    width: 90%;
    height: 90%;
    margin-left: -45%;
  }
  .diskette .diskette-bg, .diskette .diskette-container {
    position: absolute;
    top: 10%;
    left: 50%;
    z-index: 2;
    width: 80vw;
    height: 80vw;
    margin-left: -40vw;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
  }
  .diskette .diskette-container {
    z-index: 3;
    top: 11%;
    width: 78vw;
    height: 78vw;
    margin-left: -39vw;
  }
  .diskette-container .diskette-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: url("/static/wyy_res/player/a9f.png") no-repeat 0 0;
    background-size: 100% 100%;
  }
  .diskette-container .diskette-album {
    position: absolute;
    top: 15%;
    left: 15%;
    z-index: 4;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-size: 100% 100%;
  }
  /*  磁碟旋转动画  */
  .rotating-album {
    animation: rotating 20s linear 0.5s infinite;
  }
  .running {
  /*暂停动画并保存当前动画位置*/
    animation-play-state: paused;
  }
  @keyframes rotating {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
<script>
    export default{
      props:{
        albumImg: {//  专辑封面
          type: String,
          default: '/static/wyy_res/player/album.jpg'
        },
        isPlaying: {//  当前播放状态
          type: Boolean,
          default: false
        }
      },
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
