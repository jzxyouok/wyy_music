<template>
    <div class="player">
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
