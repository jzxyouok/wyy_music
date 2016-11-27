<template>
    <div @touchstart="touchingStart($event)" @touchend="touchingEndPos($event)" class="album">
      <!--  控制杆 -->
      <!--<div class="joystick">
        <img :class="{ 'img-control': isPlaying }" src="static/wyy_res/aao.png" />
      </div>-->
      <!--  磁碟  -->
      <div class="diskette">
        <div class="diskette-bg"></div>
        <div class="diskette-container rotating-album" :class="{ 'running': !isPlaying }">
          <!--  磁碟图 -->
          <div class="diskette-img"></div>
          <!--  专辑图 -->
          <div class="diskette-album">
            <img :src="albumImg" id="album" />
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .album {
    position: relative;
    width: 100%;
    height: calc(100% - 260px);
    /*  后期处理成两端渐变 */
    border-top: 1px solid #f3f3f3;
    overflow: hidden;
  }
  /*  控制杆 */
/*  .album .joystick {
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
  }*/
  /*  磁碟  */
  .album .diskette {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 260px;
    height: 260px;
    margin: -130px 0 0 -130px;
  }
  .diskette .diskette-bg, .diskette .diskette-container {
    position: absolute;
    top: 0;
    left: 0;
    /*z-index: 2;*/
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
  }
  .diskette .diskette-container {
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
  }
  .diskette-container .diskette-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: url("/static/wyy_res/a9f.png") no-repeat 0 0;
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
    /*background-size: 100% 100%;*/
  }
  .diskette-album img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  /*  磁碟旋转动画  */
  .rotating-album {
    -webkit-animation: rotating 20s linear 0.5s infinite;
    animation: rotating 20s linear 0.5s infinite;
  }
  .running {
  /*暂停动画并保存当前动画位置*/
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  @-webkit-keyframes rotating {
    from{
      -webkit-transform: rotate(0deg);
    }
    to{
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from{
      transform: rotate(0deg);
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
          default: '/static/wyy_res/album.jpg'
        },
        isPlaying: {//  当前播放状态
          type: Boolean,
          default: false
        }
      },
        data(){
            return{
              startTouchingPos: {},
            }
        },
        methods:{
          touchingStart( e ){// 触摸开始位置
//        console.log(e)
            e.preventDefault();// 阻止默认的滚屏事件
            this.startTouchingPos = e.touches[0];// 用于判断区别滚动的开始位置
          },
          touchingEndPos( e ){
            e.preventDefault();// 阻止默认的滚屏事件
            if ( e.changedTouches[0].clientY != this.startTouchingPos.clientY || e.changedTouches[0].clientX != this.startTouchingPos.clientX ){
              //  非点击判断
              return
            }
            this.$store.commit('toggleDisplayLrc');
          },
        },
        mounted (){
        },
        components:{
        }
    }
</script>
