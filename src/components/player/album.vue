<template>
    <div @touchstart="touchingStart($event)" @touchend="touchingEndPos($event)" class="album">
      <!--  控制杆 -->
      <div class="joystick" :class="{ 'img-control': isPlaying }">
        <img src="static/wyy_res/aao.png" />
      </div>
      <!--  磁碟  -->
      <div class="diskette">
        <div class="diskette-bg"></div>
        <div class="diskette-container rotating-album" :class="{ 'pausing': !isPlaying }">
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
    height: calc(100% - 200px);
    /*  后期处理成两端渐变 */
    border-top: 1px solid #f3f3f3;
    overflow: hidden;
  }
  /*  控制杆 */
  .album .joystick {
    height: 150px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 5;
    margin-left: -50px;
    -webkit-transform-origin: 50px 0px 0px;
    transform-origin: 50px 0px 0px;
    -webkit-transform: rotate(-25deg);
    transform: rotate(-25deg);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

  }
  .album .img-control {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .joystick img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: -18px;
    left: 32px;
    z-index: 9;
  }
  /*  磁碟  */
  .album .diskette {
    position: absolute;
    top: 72px;
    left: 50%;
    width: 260px;
    height: 260px;
    margin-left: -130px;
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
    -webkit-animation: rotating 20s linear 0.5s running infinite;
    /*animation: rotating 20s linear 0.5s running infinite;*/
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
