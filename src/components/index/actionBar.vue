<template>
    <div class="header wyy-bg-color">
      <div class="uk-grid uk-container">
        <div class="uk-width-1-10">
          <img class="icon-btn-top" src="static/wyy_res/common/i6.png">
        </div>
        <div class="uk-width-1-10"></div>
        <div class="uk-width-6-10">
          <ul class="action-bar uk-grid">
            <li class="action-tab uk-width-1-3">
              <img v-show="selectTab == 0" class="actionbar-img" src="static/wyy_res/index/actionbar_discover_selected.png">
              <img v-show="selectTab != 0" class="actionbar-img" @click="chooseTab(0)" src="static/wyy_res/index/actionbar_discover_normal.png">
            </li>
            <li class="action-tab uk-width-1-3">
              <img v-show="selectTab == 1" class="actionbar-img" src="static/wyy_res/index/actionbar_music_selected.png">
              <img v-show="selectTab != 1" class="actionbar-img" @click="chooseTab(1)" src="static/wyy_res/index/actionbar_music_normal.png">
            </li>
            <li class="action-tab uk-width-1-3">
              <img v-show="selectTab == 2" class="actionbar-img" src="static/wyy_res/index/actionbar_friends_selected.png">
              <img v-show="selectTab != 2" class="actionbar-img" @click="chooseTab(2)" src="static/wyy_res/index/actionbar_friends_normal.png">
            </li>
          </ul>
        </div>
        <div class="uk-width-1-10"></div>
        <div class="uk-width-1-10">
          <img class="icon-btn-top" src="static/wyy_res/common/it.png">
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
  .action-bar {
    margin: 0 auto;
  }
  .action-tab {
    max-height: 60px;
    overflow: hidden;
  }
  .actionbar-img {
    margin-top: -6px;
    width: 72px;
    height: 72px;
  }
  .header .icon-btn-top {
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
                  music: this.$route.query.music,
                  friends: this.$route.query.friends,
                }
              })
            }else if ( index == 1 ){
              this.$router.push({
                path: '/index/music',
                query: {
                  discover: this.$route.query.discover ,//  记录各个模块之前所在的位置
                  music: this.$route.query.music,
                  friends: this.$route.query.friends,
                }
              })
            }else {
              this.$router.push({
                path: '/index/friends',
                query: {
                  discover: this.$route.query.discover ,//  记录各个模块之前所在的位置
                  music: this.$route.query.music,
                  friends: this.$route.query.friends,
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
