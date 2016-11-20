<template>
    <div class="recommend-mlist">
      <common-title icon="static/wyy_res/index/discover/adz.png" title="推荐歌单"></common-title>
      <div class="uk-grid">
        <div v-for="item in list" class="uk-width-1-3 mlist">
          <div class="thumb-container">
            <img class="thumb" :src="item.thumb" />
            <div class="user-view">
                <img class="wyy-icon" src="static/wyy_res/index/discover/p5.png" />
                <span class="view-count">{{ item.viewCount | transformCount }}</span>
            </div>
          </div>
          <p class="mlist-name">{{ item.title }}</p>
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
  }
  .user-view .wyy-icon {
    width: 14px;
    height: 14px;
  }
  .user-view .mlist-name {
    display: inline-block;
    float: right;
    height: 20px;
    line-height: 20px;
  }
</style>
<script>
  import commonTitle from '../common/commonTitle.vue'
    export default{
        data(){
            return{
              list: [
                {
                  thumb: 'static/wyy_res/index/discover/album1.jpg',
                  title: '我什么也没忘，但有些事只适合收藏',
                  viewCount: '754856',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  viewCount: '24242',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  viewCount: '33757575',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  viewCount: '24242',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  viewCount: '33757575',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album1.jpg',
                  title: '我什么也没忘，但有些事只适合收藏',
                  viewCount: '754856',
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
