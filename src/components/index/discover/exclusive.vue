<template>
    <div class="exclusive">
      <common-title icon="static/wyy_res/index/discover/ads.png" title="独家放送"></common-title>
      <div class="uk-grid">
        <template v-for="(item,index) in list">
          <div v-if="index != list.length - 1" class="uk-width-1-2">
            <div class="thumb-container">
              <img class="thumb" :src="item.thumb" />
              <img class="wyy-icon" src="static/wyy_res/index/discover/ae5.png" />
            </div>
            <p class="mlist-name">{{ item.title }}</p>
          </div>
          <div v-if="list.length%2 != 0 && index == list.length - 1" class="uk-width-1-1 line-top">
            <div class="thumb-container">
              <img class="thumb" :src="item.thumb" />
              <img class="wyy-icon" src="static/wyy_res/index/discover/ae5.png" />
            </div>
            <p class="mlist-name">{{ item.title }}</p>
          </div>
        </template>
      </div>
    </div>
</template>
<style scoped>
  .thumb-container {
    position: relative;
    margin-top: 10px;
  }
  .thumb-container .thumb {
    width: 100%;
  }
  .thumb-container .wyy-icon {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .line-top {
    margin-top: 20px;
    border-top: 1px solid #ddd;
  }
</style>
<script>
  import commonTitle from '../common/commonTitle.vue'
    export default{
        data(){
            return{
              list: [
                {
                  thumb: 'static/wyy_res/index/discover/mv3.jpg',
                  title: '一周热评 第116期 就喜欢这种好帅气不做作的真男团'
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv2.jpg',
                  title: '天籁之战第九期明星歌单 独家投票中'
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv1.jpg',
                  title: '音乐专栏 张曼玉可以游戏，我们却不敢调戏'
                },
              ]
            }
        },
        methods:{
        },
        mounted (){
        },
        components:{
          commonTitle
        }
    }
</script>
