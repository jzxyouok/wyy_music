<template>
  <div v-show="showPlayingList" @click.self="togglePlayingList" class="playing-list">

    <div class="white-color-bg list-container uk-container" :style="{ 'transform': translateY > 0 ? 'translateY(' + translateY + 'px)' : 'translateY(0px)' }">
      <div class="list-head white-color-bg item-border-bottom uk-container">
        <div class="uk-grid">
          <div class="uk-width-1-5">
            <span class="span-btn wyy-gray-color">收藏全部</span>
          </div>
          <div class="uk-width-3-5">
            <h4 class="list-title uk-text-center">播放列表{{ list.length != 0 ? '（'+list.length+'）' : '' }}</h4>
          </div>
          <div class="uk-width-1-5 span-clear">
            <span @click="clearPlayingList" class="span-btn wyy-gray-color">清空</span>
          </div>
        </div>
      </div>
      <div @touchstart="touchingStart($event)" @touchmove="touchingMove($event)" @touchend="touchingEnd($event)"
           class="list-item-container" :style="{ 'transform': translateY < 0 ? 'translateY(' + translateY + 'px)' : 'translateY(0px)' }">
        <template v-for="item in list">
          <div class="list-item uk-grid item-border-bottom">
            <div v-if="isPlayingIndex == item.id" class="uk-width-1-10">
              <img class="icon-playing" src="static/wyy_res/ahm.png" />
            </div>
            <div @touchstart="touchingStart" @touchend="playThis( item , $event )" :class="[{'uk-width-7-10': isPlayingIndex == item.id },{'uk-width-9-10': isPlayingIndex != item.id }]">
              <div class="music-name text-ellipsis" :class="{'wyy-color': isPlayingIndex == item.id }">{{ item.name }}<span class="music-author" :class="{'wyy-gray-color': isPlayingIndex != item.id }"> - {{ item.artists | transformAuthors }}</span></div>
            </div>
            <div v-if="isPlayingIndex == item.id" class="uk-width-1-10">
              <img class="icon-detail" src="static/wyy_res/aas.png" />
            </div>
            <div class="uk-width-1-10">
              <img class="icon-delete" src="static/wyy_res/aap.png" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .playing-list {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.5);
  }
  .list-head {
    width: 100%;
    height: 50px;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;
    margin-left: -5px;
    /*border-bottom: 1px solid #ddd;*/
  }
  .list-head .span-btn {
    display: inline-block;
    font-size: 14px;
  }
  .list-head .span-clear {
    text-align: right;
  }
  .list-head .span-btn,.list-head .list-title {
    margin-top: 13px;
    line-height: 24px;
  }
  .playing-list .list-container {
    width: 100%;
    height: 378px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding-right: 0;
    overflow: hidden;
    /*overflow-y: auto;*/
  }
  .list-container .list-item-container {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .list-container .list-item {
    height: 44px;
    /*border-bottom: 1px solid #ddd;*/
    margin-top: 0;
  }
  .list-item .music-name {
    margin-top: 15px;
    font-size: 16px;
  }
  .music-name span {
    font-size: 12px;
  }
  .list-item .icon-playing, .list-item .icon-detail, .list-item .icon-delete {
    display: block;
    margin: 0 auto;
  }
  .list-item .icon-playing {
    width: 20px;
    height: 18px;
    margin-top: 16px;
  }
  .list-item .icon-detail {
    width: 16px;
    height: 16px;
    margin-top: 17px;
  }
  .list-item .icon-delete {
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
</style>
<script>
  export default{
    data(){
      return {
        translateY: 0,// 偏移量
        startPos: {},// 触摸开始位置
        startTouchingPos: {},// 为单个音乐项目准备的触摸开始位置
      }
    },
    computed:{
      list(){
        return this.$store.state.list;
      },
      isPlayingIndex(){
        return this.$store.state.currentMusic.id
      },
      showPlayingList(){
        return this.$store.state.showPlayingList;
      },
    },
    methods: {
      touchingStart( e ){// 触摸开始位置
//        console.log(e)
        e.preventDefault();// 阻止默认的滚屏事件
        this.startPos = e.touches[0];
        this.startTouchingPos = e.touches[0];// 用于判断区别滚动的开始位置
      },
      touchingMove( e ){// 触摸滚动时
//        console.log(e)
        e.preventDefault();// 阻止默认的滚屏事件
        let diffY = e.touches[0].clientY - this.startPos.clientY;// Y轴偏移量
        let diffX = e.touches[0].clientX - this.startPos.clientX;// X轴偏移量
        if ( diffY > 0 && diffY < diffX || diffY < 0 && diffY > diffX ){// 认为水平偏移，不滚动
          return
        }
//        console.log(diffY)
        if ( Math.abs(diffY) < 20 ){// 防止移动过程中偏移过小造成的抖动
          return
        }
        this.startPos = e.touches[0];
        this.translateY += diffY * 2;
        if ( this.translateY > 200 ){// 用户可以向下滑动大距离隐藏列表
          this.$store.commit('togglePlayingList');
        }
      },
      touchingEnd( e ){// 触摸结束位置
//        console.log(e)
        e.preventDefault();// 阻止默认的滚屏事件
        let diffY = e.changedTouches[0].clientY - this.startPos.clientY;// Y轴偏移量
        let diffX = e.changedTouches[0].clientX - this.startPos.clientX;// X轴偏移量
        if ( diffY > 0 && diffY < diffX || diffY < 0 && diffY > diffX ){// 认为水平偏移，不滚动
          return
        }
        this.translateY += diffY * 2;
        if ( this.translateY > 0 ){// 超出向下滚动范围，重置偏移量
          this.translateY = 0;
        }else if ( this.translateY > 100){
          this.$store.commit('togglePlayingList');
        }
      },
      togglePlayingList(){
        this.$store.commit('togglePlayingList');
      },
      clearPlayingList(){
        this.$store.commit('clearList');
        this.$store.commit('togglePlayingList');
        this.goBack();
      },
      playThis( item , e ){
        if ( e.changedTouches[0].clientY != this.startTouchingPos.clientY || e.changedTouches[0].clientX != this.startTouchingPos.clientX ){
          //  与滚动事件会发生冲突，故做个是否是需要滚动还是点击播放的判断
          return
        }
        if ( this.isPlayingIndex == item.id ){// 如果正在播放当前音乐，则跳转到播放页面
          return
        }
        this.$store.commit('getCurrentMusic',item);
        this.$store.commit('play');
      },
    },
    mounted (){
    },
    components: {
    }
  }
</script>
