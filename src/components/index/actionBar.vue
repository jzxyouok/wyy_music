<template>
    <div class="header wyy-bg-color">
      <div class="action-bar">
        <tab>
          <tab-item default-color="transparent">
            <img v-show="selectTab == 0" class="actionbar-img" src="static/wyy_res/index/actionbar_discover_selected.png">
            <img v-show="selectTab != 0" class="actionbar-img" @click="selectTab = 0" src="static/wyy_res/index/actionbar_discover_normal.png">
          </tab-item>
          <tab-item>
            <img v-show="selectTab == 1" class="actionbar-img" src="static/wyy_res/index/actionbar_music_selected.png">
            <img v-show="selectTab != 1" class="actionbar-img" @click="selectTab = 1" src="static/wyy_res/index/actionbar_music_normal.png">
          </tab-item>
          <tab-item>
            <img v-show="selectTab == 2" class="actionbar-img" src="static/wyy_res/index/actionbar_friends_selected.png">
            <img v-show="selectTab != 2" class="actionbar-img" @click="selectTab = 2" src="static/wyy_res/index/actionbar_friends_normal.png">
          </tab-item>
        </tab>
      </div>

    </div>
</template>
<style scoped>
  .header {
    width: 100%;
    /*height: 60px;*/
    padding: 8px 0;
  }
  .action-bar {
    width: 60%;
    margin: 0 auto;
  }
  /*  取消框架白色背景  */
  .vux-tab {
    background-color: transparent;
  }
  /*  取消框架底部背景  */
  .vux-tab .vux-tab-item {
    background: none;
  }
  .actionbar-img {
    height: 42px;
  }
</style>
<script>
  import tab from 'vux/tab/tab'
  import tabItem from 'vux/tab/tab-item'
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
          tab,tabItem
        }
    }
</script>
