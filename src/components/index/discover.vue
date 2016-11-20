<template>
    <div class="discover">
      <ul class="dis-tabs clearfix">
        <template v-for="(item,index) in menu">
          <li class="dis-tab" :class="{ 'wyy-color': selectTab == index }" :style="{ 'width': 100/menu.length + '%'}" @click="selected( index )">{{ item }}</li>
        </template>
        <div class="tab-bottom wyy-bg-color" :style="{ 'width': 100/menu.length + '%','left': 100/menu.length*selectTab + '%'}"></div>
      </ul>
      <template v-if="selectTab == 0">
        <!--  个性推荐  -->
        <recommend></recommend>
      </template>
    </div>
</template>
<style scoped>
  .dis-tabs {
    position: relative;
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
    bottom: -2px;
    height: 2px;
    transition: all 0.2s ease;
  }
</style>
<script>
  import recommend from './discover/recommend.vue'
  export default{
        data(){
            return{
              selectTab: 0,
              menu: ['个性推荐','歌单','主播电台','排行榜']
            }
        },
        methods:{
          selected( index ){
            this.selectTab = index
          },
        },
        ready (){
        },
        components:{
          recommend
        }
    }
</script>
