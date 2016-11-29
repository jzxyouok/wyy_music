<template>
    <div class="home" :class="{'home-padding-bottom': playingList != '' }">
      <div class="header wyy-bg-color">
        <div class="uk-container">
          <div class="uk-grid">
            <div class="uk-width-1-10">
              <img class="icon-music" src="static/wyy_res/actionbar_discover.png">
            </div>
            <div class="uk-width-8-10">
              <h3 class="app-title white-color">小小云音乐</h3>
            </div>
            <div class="uk-width-1-10">
              <img class="icon-search" src="static/wyy_res/it.png">
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <ul class="dis-tabs uk-clearfix">
          <template v-for="(item,index) in menu">
            <li class="dis-tab" :class="{ 'wyy-color': selectTab == index }" :style="{ 'width': 100/menu.length + '%'}" @click="slideTo(index)">{{ item }}</li>
          </template>
          <div class="tab-bottom wyy-bg-color" :style="{ 'width': 100/menu.length + '%','left': 100/menu.length*selectTab + '%'}"></div>
        </ul>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <list :list="list"></list>
            </div>
            <div class="swiper-slide">
              <list-mv></list-mv>
            </div>
            <div class="swiper-slide">
              <list :list="collectionList"></list>
            </div>
            <div class="swiper-slide">
              <list :list="latestList"></list>
            </div>
          </div>
        </div>
      </div>
      <buttom-player v-if="playingList != ''"></buttom-player>
    </div>
</template>
<style scoped>
  .home {
    height: 100%;
    /*background-color: #f2f4f5;*/
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 50px;
  }
  .header .app-title {
    margin: 10px 0;
    line-height: 30px;
  }
  .header .icon-music, .header .icon-search {
    display: block;
    width: 30px;
    margin: 10px auto 0;
  }
  .home .content{
    box-sizing: border-box;
    height: 100%;
    padding-top: 94px;
  }
  .home-padding-bottom .content{
    padding-bottom: 60px;
  }
  .dis-tabs {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 10;
    background: #fff;
  }
  .dis-tab {
    list-style: none;
    float: left;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: relative;
    transition: all 0.2s ease;
  }
  .tab-bottom {
    position: absolute;
    bottom: 0;
    height: 2px;
    transition: all 0.2s ease;
  }
  .swiper-container {
    background-color: #f2f4f5;
    height: 100%;
  }
  .swiper-slide {
    overflow-y: scroll;
  }
</style>
<script>
  import swiper from 'swiper'
  import buttomPlayer from './common/bottomPlayer.vue'
  import list from './common/musicList.vue'
  import listMv from './index/recommendMv.vue'
    export default{
        data(){
            return{
              list: [],
              swiperObj: '',//  swiper储存对象
              menu: ['播放列表','MV列表','收藏列表','最近播放'],//  支持的菜单
            }
        },
        computed:{
          selectTab:{
            get(){
              return this.$route.query.tab !== undefined ? this.$route.query.tab : 0;
            },
            set( val ){
              //  向浏览器中增加记录
              this.$router.push({
                path: '/index',
                query: {
                  tab: val
                }
              });
            }
          },
          playingList(){
            return this.$store.state.list;
          },
          slideIndex(){
            return this.swiperObj.realIndex
          },
          collectionList(){
            return this.$store.state.collectionList
          },
          latestList(){
            return this.$store.state.latestList
          },
        },
        created(){
          this.loadData();
        },
        methods:{
          loadData(){
            this.$http({ url: 'static/api/music_data.php'}).then(function (res) {
                console.log( res.data )
              if ( res.data.code == 200 ){
                this.list = res.data.result.tracks;
              }else {
                //  错误信息
              }
            })
          },
          slideTo( index ){
            this.swiperObj.slideTo( index, 500, false);//切换到第index个slide，速度为0.5秒
            this.selectTab = index;
          },
        },
        mounted (){
          let self = this;
          let options = {
            onSlideChangeStart: function(swiper){
              self.selectTab = swiper.activeIndex;//切换结束时，告诉我现在是第几个slide
            }
          };
          if ( this.$route.query.tab !== undefined ){
            options.initialSlide = this.$route.query.tab;
          }
          this.swiperObj = new Swiper('.swiper-container', options )
        },
        components:{
          buttomPlayer,list,listMv
        }
    }
</script>
