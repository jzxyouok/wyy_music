<template>
    <div class="recommended-daily">
      <head-height>
        <div class="uk-grid uk-container">
          <div class="uk-width-1-10">
            <img class="icon-btn" src="static/wyy_res/player/i0.png" />
          </div>
          <div class="uk-width-4-5">
            <h2 class="head-title">每日歌曲推荐</h2>
          </div>
          <div class="uk-width-1-10">
            <img class="icon-btn" src="static/wyy_res/others/a4x.png" />
          </div>
        </div>
      </head-height>
      <!--  广告图及日期  -->
      <div class="ad-date">
        <img src="static/wyy_res/index/discover/banner/3.jpg" />
        <div class="date">
          <div class="week wyy-bg-color">{{ new Date().getDay() | transformWeek }}</div>
          <div class="now-date">{{ new Date().getDate() }}</div>
        </div>
        <p class="tips">
          <img src="static/wyy_res/others/st.png" />
          <span>根据你的音乐口味生成，每天6:00更新</span>
        </p>
      </div>
      <!--  歌曲列表  -->
      <music-list :list="list" :total="total"></music-list>
    </div>
</template>
<style scoped>
  .recommended-daily {
    padding-bottom: 60px;
  }
  .icon-btn {
    width: 30px;
  }
  .icon-btn, .head-title {
    margin-top: 15px;
    color: #fff;
  }
  .ad-date {
    position: relative;
  }
  .ad-date .date {
    position: absolute;
    left: 20px;
    bottom: 50px;
    width: 70px;
    height: 70px;
    background: url("/static/wyy_res/others/lk.png") no-repeat;
    background-size: 100% 100%;
    border-radius: 2px;
    overflow: hidden;
  }
  .date .week {
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  .date .now-date {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 40px;
    letter-spacing: 5px;
    padding-left: 5px;
    color: #888;
  }
  .ad-date .tips {
    position: absolute;
    bottom: 10px;
    left: 15px;
    font-size: 12px;
    color: #fff;
  }
  .tips img {
    height: 14px;
  }
</style>
<script>
  import headHeight from '../common/headHeight.vue'
  import musicList from '../listItem/musicList.vue'
    export default{
        data(){
            return{
              list: [],
              total: 10,//  写死吧，反正也就是10条,哈哈
            }
        },
        created(){
          this.loadData();
        },
        methods:{
          loadData(){
            this.$http({ url: 'static/api/music.php'}).then(function (res) {
//              console.log( res.data )
              let data = JSON.parse(res.data);
              if ( data.status == 200 ){
                this.list = data.data;
              }else {
                //  错误信息
              }
            })
          },
        },
        mounted (){
        },
        components:{
          headHeight,musicList
        }
    }
</script>
