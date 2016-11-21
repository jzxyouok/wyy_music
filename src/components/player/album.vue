<template>
    <div class="album">
      <!--  控制杆 -->
      <div class="joystick"></div>
      <!--  磁碟  -->
      <div class="diskette">
        <div class="diskette-bg"></div>
        <div class="diskette-container">
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
  }
  /*  控制杆 */
  .album .joystick {
    height: 27%;
    width: 40%;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 9;
    margin-left: -5%;
    background: url("/static/wyy_res/player/aao.png") no-repeat -5px -10px;
    background-size: 100% 100%;
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
    top: 15%;
    left: 50%;
    z-index: 2;
    width: 70vw;
    height: 70vw;
    margin-left: -35vw;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.3);
  }
  .diskette .diskette-container {
    z-index: 3;
    top: 16%;
    width: 68vw;
    height: 68vw;
    margin-left: -34vw;
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
</style>
<script>
    export default{
      props:{
        albumImg: {
          type: String,
          default: '/static/wyy_res/player/album.jpg'
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
