<template>
  <div class="all-music-list">
    <div class="uk-grid">
      <template v-for="item in list">
        <div class="uk-width-1-2">
          <router-link to="/kindOfMusic">
            <div class="list-msg uk-position-relative">
              <img class="list-cover" :src="item.coverSrc" />
              <div class="user-view">
                <img class="wyy-icon" src="static/wyy_res/index/discover/p5.png" />
                <span class="view-count">{{ item.viewCount | transformCount }}</span>
              </div>
              <div class="list-user">
                <img class="icon-user-head" src="static/wyy_res/common/abz.png">
                <span class="white-color">{{ item.createUser }}</span>
              </div>
            </div>
            <p class="list-desc">{{ item.name }}</p>
          </router-link>

        </div>
      </template>
    </div>
  </div>
</template>
<style scoped>
  .uk-grid {
    margin-left: -15px;
  }
  .uk-width-1-2 {
    padding-left: 15px;
  }
  .list-msg {
    margin-top: 10px;
  }
  .list-msg img {
    width: 100%;
    height: 100%;
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
    width: 12px;
    height: 12px;
    margin-bottom: 1px;
  }
  .user-view .mlist-name {
    display: inline-block;
    float: right;
    height: 20px;
    line-height: 20px;
  }
  .list-user {
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 20px;
    line-height: 20px;
  }
  .list-user .icon-user-head {
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
  }
  .list-desc {
    margin: 10px 0;
  }
</style>
<script>
  export default{
    props: {
      list: Array,
    },
    data(){
      return {

      }
    },
    methods: {

    },
    mounted (){
    },
    components: {

    }
  }
</script>
