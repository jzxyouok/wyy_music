<template>
    <div class="header wyy-bg-color">
        <ul class="action-bar uk-grid">
          <li class="action-tab uk-width-1-3">
            <img v-show="selectTab == 0" class="actionbar-img" src="static/wyy_res/index/actionbar_discover_selected.png">
            <img v-show="selectTab != 0" class="actionbar-img" @click="selectTab = 0" src="static/wyy_res/index/actionbar_discover_normal.png">
          </li>
          <li class="action-tab uk-width-1-3">
            <img v-show="selectTab == 1" class="actionbar-img" src="static/wyy_res/index/actionbar_music_selected.png">
            <img v-show="selectTab != 1" class="actionbar-img" @click="selectTab = 1" src="static/wyy_res/index/actionbar_music_normal.png">
          </li>
          <li class="action-tab uk-width-1-3">
            <img v-show="selectTab == 2" class="actionbar-img" src="static/wyy_res/index/actionbar_friends_selected.png">
            <img v-show="selectTab != 2" class="actionbar-img" @click="selectTab = 2" src="static/wyy_res/index/actionbar_friends_normal.png">
          </li>
        </ul>
    </div>
</template>
<style scoped>
  .header {
    width: 100%;
  }
  .action-bar {
    width: 50%;
    margin: 0 auto;
  }
  .action-tab {
    max-height: 60px;
    overflow: hidden;
  }
  .actionbar-img {
    margin-top: -3px;
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
        },
        ready (){
        },
        components:{
        }
    }
</script>
