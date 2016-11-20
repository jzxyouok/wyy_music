<template>
    <div class="recommend-mlist">
      <common-title icon="static/wyy_res/index/discover/ady.png" title="主播电台"></common-title>
      <div class="uk-grid">
        <div v-for="item in list" class="uk-width-1-3 mlist">
          <div class="thumb-container">
            <img class="thumb" :src="item.thumb" />
            <div class="user-view uk-clearfix">
                <img class="wyy-icon" src="static/wyy_res/index/discover/ae_.png" />
                <span class="radio-author">{{ item.author }}</span>
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
    margin-top: 10px;
  }
  .thumb-container {
    position: relative;
  }
  .mlist .thumb {
    width: 100%;
  }
  .mlist .user-view {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 12px;
  }
  .user-view .wyy-icon {
    float: right;
  }
  .user-view .wyy-icon {
    width: 25%;
    max-width: 40px;
    padding: 0 5px 5px 0;
  }
  .user-view .radio-author {
    display: inline-block;
    position: absolute;
    width: calc(75% - 5px);
    left: 5px;
    bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
                  author: 'Konekt Asia FM',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  author: 'MakeVoice--',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  author: '裤子的店铺音',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album2.jpg',
                  title: '聆听内心的呼唤',
                  author: '高考',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album3.jpg',
                  title: '[后摇] 一只孤独的巨兽在深海里呼喊',
                  author: '电台名称',
                },
                {
                  thumb: 'static/wyy_res/index/discover/album1.jpg',
                  title: '我什么也没忘，但有些事只适合收藏',
                  author: 'this is radio name',
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
