<template>
    <div class="kind-of-music">
      <div class="uk-container" style="position: relative;">
        <!--  高斯模糊背景  -->
        <canvas id="listDetailBg"></canvas>
        <div class="kind-head uk-container uk-grid">
          <div class="uk-width-1-10">
            <img @click="goBack" class="icon-btn-top" src="static/wyy_res/player/i0.png" />
          </div>
          <div class="uk-width-7-10">
            <h3 class="head-title white-color">歌单</h3>
            <p class="head-msg wyy-gray-color">{{ listDetail.recommendMsg }}</p>
          </div>
          <div class="uk-width-1-10">
            <img class="icon-btn-top" src="static/wyy_res/common/it.png" />
          </div>
          <div class="uk-width-1-10">
            <img class="icon-btn-top" src="static/wyy_res/common/il.png" />
          </div>
        </div>
        <!--  歌单信息  -->
        <div class="kind-list-detail uk-grid">
          <div class="uk-position-relative my-padding-left uk-width-2-5">
            <img style="width:100%;" :src="listDetail.listAlbum" />
            <div class="user-view">
              <img class="wyy-icon" src="static/wyy_res/index/discover/p5.png" />
              <span class="view-count">{{ listDetail.viewCount | transformCount }}</span>
            </div>
            <img class="icon-detail" src="static/wyy_res/common/wh.png" />
          </div>
          <div class="my-padding-left uk-width-3-5">
            <h3 class="white-color">{{ listDetail.listTitle }}</h3>
            <div class="user-msg uk-grid">
              <div class="uk-width-1-5">
                <img class="icon-user-head" src="static/wyy_res/common/a8y.png" />
              </div>
              <div class="uk-width-4-5">
                <span class="user-name white-color">萌妹子</span>
                <img class="icon-to-user" src="static/wyy_res/common/adf.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="uk-grid">
          <div class="uk-width-1-4">
            <img v-if="listDetail.isCollection == 0" @click="collectionUp" class="icon-function" src="static/wyy_res/common/ip.png" />
            <img v-else class="icon-function" @click="collectionDown" src="static/wyy_res/common/iq.png" />
            <p class="white-color uk-text-center uk-margin-top-remove my-padding-bottom">{{ listDetail.collectionCount }}</p>
          </div>
          <div class="uk-width-1-4">
            <img class="icon-function" src="static/wyy_res/common/w_.png" />
            <p class="white-color uk-text-center uk-margin-top-remove my-padding-bottom">{{ listDetail.commentCount }}</p>
          </div>
          <div class="uk-width-1-4">
            <img class="icon-function" src="static/wyy_res/common/iu.png" />
            <p class="white-color uk-text-center uk-margin-top-remove my-padding-bottom">{{ listDetail.shareCount }}</p>
          </div>
          <div class="uk-width-1-4">
            <img v-if="listDetail.isDownloaded == 0" @click="listDetail.isDownloaded = 1" class="icon-function" src="static/wyy_res/common/in.png" />
            <img v-else class="icon-function" src="static/wyy_res/common/io.png" />
            <p class="white-color uk-text-center uk-margin-top-remove my-padding-bottom">{{ listDetail.isDownloaded ? "已下载":"下载" }}</p>
          </div>
      </div>
      </div>
      <music-list :list="list" :total="total"></music-list>
    </div>
</template>
<style scoped>
  #listDetailBg {
    width: 100%!important;
    height: 100%!important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .kind-head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }
  .kind-head-bg {
    background-color: rgba(155,155,155,0.1);
  }
  .icon-btn-top {
    display: block;
    width: 24px;
    margin: 18px auto 0;
  }
  .head-title {
    margin: 8px 0 5px;
  }
  .head-msg {
    margin: 0;
    font-size: 10px;
  }
  .kind-list-detail {
    margin: 0;
    padding-top: 70px;
  }
  .my-padding-left {
    padding-left: 25px;
  }
  .user-view {
    position: absolute;
    width: 100%;
    height: 20px;
    top: 0;
    right: 0;
    background: linear-gradient(90deg,transparent,rgba(0,0,0,0.1));
    color: #fff;
    font-size: 12px;
    text-align: right;
    padding-right: 5px;
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
  .icon-detail {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 20px;
  }
  .icon-user-head {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .user-name {
    font-size: 16px;
    line-height: 30px;
  }
  .icon-to-user {
    width: 7px;
    height: 15px;
  }
  .icon-function {
    display: block;
    height: 30px;
    margin: 0 auto;
  }
  .my-padding-bottom {
    padding-bottom: 10px;
  }
</style>
<script>
  import stackblur from 'stackblur-canvas'
  import headHeight from '../common/headHeight.vue'
  import musicList from '../listItem/musicList.vue'
    export default{
        data(){
            return{
              listDetail:{
                listAlbum: 'static/wyy_res/player/album.jpg',// 歌单封面图
                listTitle: '离别没说再见你是否心酸',// 歌单名称
                listIntro: '...',// 歌单简介
                recommendMsg: '沙海拉',// 推荐信息
                createUser: 'Mortal-Throne',//  歌单创建者
                createUserHeadImg: 'static/wyy_res/common/a8y.png',//  创建者的头像
                viewCount: 15464345,//  收听统计
                collectionCount: 2254,//  被收藏统计
                commentCount: 124,//  被评论统计
                shareCount: 243,//  被分享统计
                isCollection: 0,//  是否已收藏该歌单
                isDownloaded: 0,//  是否已下载该歌单所有曲目
              },
              list: [],
              total: 10,
            }
        },
        created(){
          this.loadData();
        },
        methods:{
          loadData(){
            this.$http({ url: 'static/api/music.php'}).then(function (res) {
//              console.log( res.data )
              if ( res.data.status == 200 ){
                res.data.data = res.data.data.concat(res.data.data);
                this.list = res.data.data;
              }else {
                //  错误信息
              }
            })
          },
          collectionUp(){// 收藏
            this.listDetail.isCollection = 1;
            this.listDetail.collectionCount ++;
          },
          collectionDown(){// 取消收藏
            this.listDetail.isCollection = 0;
            this.listDetail.collectionCount --;
          },
          createBg(){//  创建高斯模糊背景
            let img = new Image();
            img.src = this.listDetail.listAlbum;
//            img.onload = function () {
              stackblur.image(img, 'listDetailBg', 180);
//            }
          },
        },
        mounted (){
          //  默认封面背景
          this.createBg();
        },
        components:{
          headHeight,musicList
        }
    }
</script>
