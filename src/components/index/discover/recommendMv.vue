<template>
    <div class="recommend-mlist">
      <common-title icon="static/wyy_res/index/discover/adv.png" title="推荐MV"></common-title>
      <div class="uk-grid">
        <div v-for="item in list" class="uk-width-1-2 mlist">
          <div class="thumb-container">
            <img class="thumb" :src="item.thumb" />
            <div class="user-view">
                <img class="wyy-icon" src="static/wyy_res/index/discover/ae9.png" />
                <span class="view-count">{{ item.viewCount | transformCount }}</span>
            </div>
          </div>
          <p class="mv-name">{{ item.title }}</p>
          <p class="mv-author">{{ item.author }}</p>
        </div>
      </div>
    </div>
</template>
<style scoped>
  /*  单个推荐歌单  */
  .mlist {
    position: relative;
    margin-top: 10px;
  }
  .mlist .thumb {
    width: 100%;
  }
  .mlist .user-view {
    position: absolute;
    width: 80%;
    height: 20px;
    top: 0;
    right: 0;
    background: linear-gradient(90deg,transparent,rgba(0,0,0,0.3));
    color: #fff;
    font-size: 12px;
    text-align: right;
    padding-right: 5px;
  }
  .user-view .wyy-icon {
    width: 14px;
    height: 14px;
  }
  .mv-author {
    color: #888;
    font-size: 12px;
  }
</style>
<script>
  import commonTitle from '../common/commonTitle.vue'
    export default{
        data(){
            return{
              list: [
                {
                  thumb: 'static/wyy_res/index/discover/mv1.jpg',
                  title: 'We Don\'t Talk Anymore (Official Live Performance)',
                  viewCount: '754856',
                  author: 'Charlie Puth',
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv2.jpg',
                  title: 'Counting Stars',
                  viewCount: '14727',
                  author: 'Alex Goot',
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv3.jpg',
                  title: 'Beauty and a Beat',
                  viewCount: '272727',
                  author: 'Alex Goot',
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv1.jpg',
                  title: 'We Don\'t Talk Anymore (Official Live Performance)',
                  viewCount: '75258277',
                  author: 'Charlie Puth',
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv2.jpg',
                  title: 'Counting Stars',
                  viewCount: '141',
                  author: 'Alex Goot',
                },
                {
                  thumb: 'static/wyy_res/index/discover/mv3.jpg',
                  title: 'Beauty and a Beat',
                  viewCount: '75758252',
                  author: 'Alex Goot',
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
