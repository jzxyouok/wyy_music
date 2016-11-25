<template>
    <div class="header wyy-bg-color">
      <div class="uk-grid uk-container">
        <div class="uk-width-1-10">
          <img class="icon-music" src="static/wyy_res/actionbar_discover.png">
        </div>
        <div class="uk-width-8-10">
          <h3 class="app-title white-color">vue-music-player</h3>
        </div>
        <div class="uk-width-1-10">
          <img class="icon-search" src="static/wyy_res/it.png">
        </div>
      </div>
    </div>
</template>
<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
  }
  .header .app-title {
    margin: 15px 0;
    font-size: 20px;
    line-height: 30px;
  }
  .header .icon-music, .header .icon-search {
    display: block;
    width: 30px;
    margin: 15px auto 0;
  }
</style>
<script>
    export default{
        data(){
            return{
              selectTab: 0,
            }
        },
        methods:{
          chooseTab( index ){
            this.selectTab = index;
            if ( index == 0 ){
              this.$router.push({
                path: '/index/discover',
                query: {
                  discover: this.$route.query.discover ,//  记录各个模块之前所在的位置
                  /*music: this.$route.query.music,
                  friends: this.$route.query.friends,*/
                }
              })
            }else if ( index == 1 ){
              this.$router.push({
                path: '/index/music',
                query: {
                  discover: this.$route.query.discover ,//  记录各个模块之前所在的位置
                  /*music: this.$route.query.music,
                  friends: this.$route.query.friends,*/
                }
              })
            }else {
              this.$router.push({
                path: '/index/friends',
                query: {
                  discover: this.$route.query.discover ,//  记录各个模块之前所在的位置
                  /*music: this.$route.query.music,
                  friends: this.$route.query.friends,*/
                }
              })
            }
          },
        },
        ready (){
        },
        components:{
        }
    }
</script>
