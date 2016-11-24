<template>
  <div class="music-list">
    <!--  歌单列表  -->
    <div class="uk-container">
      <div class="cate-type uk-grid">
        <div class="uk-width-3-4 uk-position-relative">
          <span class="border-left wyy-bg-color"></span>
          <h3 class="cate-title">全部歌单</h3>
        </div>
        <div class="uk-width-1-4">
          <div class="select-cate-container uk-position-relative">
            <div class="select-cate wyy-gray-color"></div>
            <div class="select-cate-name">选择分类</div>
          </div>
        </div>
      </div>
      <!--  精品歌单  -->
      <div class="good-music-list uk-grid">
        <div class="uk-width-1-4">
          <img src="static/wyy_res/player/album.jpg">
        </div>
        <div class="white-color-bg uk-width-2-4">
          <h3 class="uk-position-relative list-title"><img src="static/wyy_res/common/yw.png" />精品歌单</h3>
          <p class="wyy-gray-color text-ellipsis uk-margin-top-remove">怀抱着的即兴与浪漫--手风琴精选</p>
        </div>
        <div class="white-color-bg uk-width-1-4">
          <img class="icon-goto-list" src="static/wyy_res/common/yv.png" />
        </div>
      </div>
      <!--  所有歌单列表  -->
      <all-music-list :list="list"></all-music-list>
    </div>
  </div>
</template>
<style scoped>
  .music-list {
    background-color: #f3f3f3;
  }
  .cate-type {
    margin-top: 10px;
    height: 44px;
  }
  .cate-type .border-left {
    display: inline-block;
    width: 5px;
    height: 24px;
    position: absolute;
    top: 10px;
    left: 5px;
    border-radius: 5px;
  }
  .cate-type .cate-title {
    padding-left: 15px;
    margin-top: 10px;
  }
  .cate-type .select-cate-container {
    width: 100%;
    height: 30px;
    margin-top: 6px;
    border: 1px solid #888;
    border-radius: 5px;
  }
  .cate-type .select-cate {
    position: absolute;
    top: -3px;
    left: 0px;
    width: 36px;
    height: 36px;
    background: url("/static/wyy_res/common/so.9.png") no-repeat -18px -21px;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  .cate-type .select-cate-name {
    position: absolute;
    top: 5px;
    left: 30px;
    /*width: 100%;*/
    height: 20px;
    line-height: 20px;
  }
  .good-music-list {
    margin: 10px 0;
    height: 80px;
    background-color: #fff;
  }
  .good-music-list div:first-child {
    padding: 0;
  }
  .good-music-list img {
    width: 80px;
    height: 80px;
  }
  .good-music-list .list-title {
    margin: 10px 0;
    padding-left: 30px;
  }
  .list-title img {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
  }
  .good-music-list .icon-goto-list {
    display: block;
    width: 10px;
    height: 20px;
    margin: 30px auto 0;
   }
</style>
<script>
  import allMusicList from '../../listItem/allMusicList.vue'
  export default{
    data(){
      return {
        list:[
          {
            id: 1,
            viewCount:12315,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album1.jpg',// 歌单封面地址
          },
          {
            id: 2,
            viewCount:4272287,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album2.jpg',// 歌单封面地址
          },
          {
            id: 3,
            viewCount:245,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album3.jpg',// 歌单封面地址
          },
          {
            id: 4,
            viewCount:12315,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album1.jpg',// 歌单封面地址
          },
          {
            id: 5,
            viewCount:4272287,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album2.jpg',// 歌单封面地址
          },
          {
            id: 6,
            viewCount:245,//  歌单收听量
            name: '歌单名称',// 歌单名称
            createUser: '创建用户',// 歌单创建用户
            coverSrc: 'static/wyy_res/index/discover/album3.jpg',// 歌单封面地址
          },
        ]
      }
    },
    methods: {
      doAdd(){
        this.list = this.list.concat( this.list )
      },
    },
    mounted (){
    },
    components: {
      allMusicList
    }
  }
</script>
