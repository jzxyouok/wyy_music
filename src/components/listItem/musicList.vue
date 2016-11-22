<template>
    <div class="music-list uk-container">
      <div class="list-title uk-grid">
        <div class="uk-width-1-10">
          <img class="icon-btn" src="static/wyy_res/common/xl.png" />
        </div>
        <div class="uk-width-8-10">
          <h2 class="title">播放全部<span class="wyy-gray-color">(共{{ total }}首)</span></h2>
        </div>
        <div class="uk-width-1-10">
          <img class="icon-btn" src="static/wyy_res/others/xc.png" />
        </div>
      </div>
      <ul class="list-content">
        <template v-for="(item,index) in list">
          <li class="list-item">
            <div class="uk-grid">
              <div class="uk-width-1-10">
                <div v-if="isPlayingIndex != item.id" class="number wyy-gray-color">{{ index+1 }}</div>
                <img v-else class="icon-menu" src="static/wyy_res/others/ahm.png" />
              </div>
              <div @click="playThis(item.src,item.id)" class="list-item-hr uk-width-8-10">
                <h3 class="music-name">
                  <span>{{ item.name }}</span>
                  <span v-if="item.mv != false" class="has-mv"></span></h3>
                <p class="music-msg wyy-gray-color">{{ item.author + '-' + item.name }}</p>
              </div>
              <div class="list-item-hr uk-width-1-10">
                <img class="icon-menu" src="static/wyy_res/common/xf.png" />
              </div>
            </div>

          </li>
        </template>
      </ul>
    </div>
</template>
<style scoped>
  .list-title {
    height: 60px;
    border-bottom: 1px solid #f3f3f3;
  }
  .list-title .icon-btn {
    display: block;
    margin: 15px auto 0;
    width: 30px;
  }
  .list-title .title {
    height: 30px;
    margin-top: 15px;
    padding-left: 5px;
  }
  .title span{
    font-size: 16px;
  }
  /*  列表分割线 */
  .list-item-hr {
    border-bottom: 1px solid #f3f3f3;
  }
  .list-item {
    height: 60px;
  }
  .list-item .number {
    height: 30px;
    margin: 15px auto;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
  }
  .list-item .icon-menu {
    display: block;
    height: 20px;
    margin: 20px auto;
  }
  .list-item .music-name {
    margin: 5px 0;
    height: 24px;
    font-size: 0;
  }
  .music-name span {
    font-size: 18px;
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
    background: url("/static/wyy_res/others/l5.png") no-repeat;
    background-size: 100% 100%;
  }
  .list-item .music-msg {
    margin: 0;
    font-size: 12px;
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
              audioObj: '',
              isPlayingIndex: -1,// 正在播放的音乐位置索引
            }
        },
        methods:{
          playThis( src , index ){
            if ( this.isPlayingIndex == index ){// 如果正在播放当前音乐，则跳转到播放页面
              this.$router.push({
                path:'/player',
                query: {
                  mId: index
                }
              });
              return
            }
            this.audioObj.src = 'http://www.kittyjs.com/' + src;
            this.audioObj.oncanplay = function () {
              this.play();
            };
            this.isPlayingIndex = index;
          },
        },
        mounted (){
          this.audioObj = document.getElementById('music');
        },
        components:{
        }
    }
</script>
