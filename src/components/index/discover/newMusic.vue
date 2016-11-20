<template>
    <div class="recommend-mlist">
      <common-title icon="static/wyy_res/index/discover/adw.png" title="最新音乐"></common-title>
      <div class="uk-grid">
        <div v-for="item in list" class="uk-width-1-3 mlist">
          <div class="thumb-container">
            <img class="thumb" :src="item.thumb" />
          </div>
          <p class="mlist-name">{{ item.title }}</p>
          <p class="mlist-author">{{ item.author }}</p>
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
  .mlist-author {
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
                  thumb: 'static/wyy_res/index/discover/album1.jpg',
                  title: '我什么也没忘，但有些事只适合收藏',
                  author: 'mike Tompkins',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  author: '群星',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  author: 'Sia',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  author: '许嵩',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  author: 'jennifer Lopez/Marc...',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album1.jpg',
                  title: '我什么也没忘，但有些事只适合收藏',
                  author: 'lovebugs',
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
