<template>
    <div class="music-list uk-container">
      <!--<div class="list-title uk-grid">
        <div class="uk-width-1-10">
          <img class="icon-btn" src="static/wyy_res/common/xl.png" />
        </div>
        <div class="uk-width-8-10">
          <h3 class="title">播放全部<span class="wyy-gray-color">(共{{ total }}首)</span></h3>
        </div>
        <div class="uk-width-1-10">
          <img class="icon-btn" src="static/wyy_res/others/xc.png" />
        </div>
      </div>-->
      <ul class="list-content">
        <template v-for="(item,index) in list">
          <li class="list-item">
            <div class="uk-grid">
              <div class="uk-width-1-10">
                <div v-if="isPlayingIndex != item.id" class="number wyy-gray-color">{{ index+1 }}</div>
                <img v-else class="icon-menu" src="static/wyy_res/ahm.png" />
              </div>
              <div @click="playThis(item)" class="item-border-bottom uk-width-8-10">
                <h4 class="music-name">
                  <span>{{ item.name }}</span>
                  <span v-if="item.mvid != 0" class="has-mv"></span></h4>
                <p class="music-msg wyy-gray-color">{{ item | transformMusicMsg }}</p>
              </div>
              <div class="item-border-bottom uk-width-1-10">
                <img class="icon-menu" src="static/wyy_res/xf.png" />
              </div>
            </div>

          </li>
        </template>
      </ul>
    </div>
</template>
<style scoped>
  .music-list {
    padding-right: 0;
  }
  .list-title {
    height: 60px;
    border-bottom: 1px solid #f3f3f3;
  }
  .list-title .icon-btn {
    display: block;
    margin: 18px auto 0;
    width: 24px;
  }
  .list-title .title {
    margin-top: 18px;
    padding-left: 5px;
  }
  .title span{
    font-size: 14px;
  }

  .list-item {
    height: 60px;
  }
  .list-item .number {
    height: 30px;
    margin: 15px auto;
    line-height: 30px;
    text-align: center;
    /*font-size: 18px;*/
  }
  .list-item .icon-menu {
    display: block;
    height: 16px;
    margin: 22px auto;
  }
  .list-item .music-name {
    margin: 10px 0 0;
    height: 24px;
    font-size: 0;
  }
  .music-name span {
    font-size: 16px;
  }
  .music-name span:first-child {
    display: inline-block;
    width: calc(100% - 35px);
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
  }
  .music-name .has-mv {
    display: inline-block;
    width: 30px;
    height: 14px;
    margin-left: 5px;
    margin-bottom: 5px;
    background: url("/static/wyy_res/l5.png") no-repeat;
    background-size: 100% 100%;
  }
  .list-item .music-msg {
    margin: 0;
    font-size: 10px;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
<script>
    export default{
        props:{
          list: Array,
          total: [String,Number]
        },
        data(){
            return{
//              isPlayingIndex: -1,// 正在播放的音乐位置索引
            }
        },
        computed:{
          isPlayingIndex(){
            return this.$store.state.currentMusic.id
          },
        },
        methods:{
          playThis( item ){
            if ( this.isPlayingIndex == item.id ){// 如果正在播放当前音乐，则跳转到播放页面
              this.$router.push({
                path:'/player',
              });
              return
            }
            this.$store.commit('getCurrentMusic',item);
            this.$store.commit({//  以对象风格的提交，当然也可以直接传递数组
              type: 'getList',
              list: this.list,
            });
            this.$store.commit('play');
//            this.isPlayingIndex = id;
          },
        },
        mounted (){
        },
        components:{
        }
    }
</script>
