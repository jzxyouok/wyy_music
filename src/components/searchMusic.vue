<template>
  <div class="search-music">
    <div class="search-container uk-position-relative">
      <div class="search-input-container">
        <input class="search-input" type="text" placeholder="搜索音乐、歌手、歌词、歌单、MV、专辑">
      </div>
      <img class="search-btn" src="static/wyy_res/ahr.png">
    </div>
  </div>
</template>
<style scoped>
  .search-music {
    width: 100%;
    height: 100%;
  }
  .search-music .search-container{
    height: 40px;
    padding-top: 10px;
    background-color: #fff;
    box-shadow: 2px 1px 5px #ddd;
    border-radius: 2px;
  }
  .search-container .search-input-container {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 35px;
    width: 100%;
    height: 100%;
  }
  .search-container .search-input{
    width: 100%;
    height: 30px;
    padding-left: 25px;
    border: none;
    border-bottom: 1px solid #CE3D3E;
    font-size: 16px;
  }
  .search-container .search-btn {
    position: absolute;
    top: 15px;
    left: 10px;
    z-index: 20;
    width: 20px;
  }
</style>
<script>
  export default{
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
