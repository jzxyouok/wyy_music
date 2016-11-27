<template>
    <div class="home" :class="{'home-padding-bottom': playingList != '' }">
      <action-bar></action-bar>
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
    padding-top: 60px;
    background-color: #f2f4f5;
  }
  .home-padding-bottom {
    padding-bottom: 60px;
  }
  .content {
    padding-top: 44px;
  }
  .dis-tabs {
    position: fixed;
    top: 60px;
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
</style>
<script>
  import swiper from 'swiper'
  import actionBar from './index/actionBar.vue'
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
            this.$http({ url: 'static/api/music.php'}).then(function (res) {
  //              console.log( res.data )
              if ( res.data.status == 200 ){
                this.list = res.data.data;
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
          actionBar,buttomPlayer,list,listMv
        }
    }
</script>
