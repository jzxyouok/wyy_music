/**
 * Created by guojingfeng on 2016/11/25.
 */
var store = {
  state: {
    audioObj: '',// 媒体DOM对象
    isPlaying: false,// 当前状态是否在播放
    list: [],// 当前播放列表
    currentMusic: {},// 当前播放的音频
    currentTime: '',// 当前播放的音频的当前播放时间
    durationTime: '',// 当前播放的音频的总时长
    timer: '',//  定时器对象
    prevMusic: {},// 上一首播放的音频
    nextMusic: {},// 下一首播放的音频
    showPlayingList: false,// 显示悬浮的当前播放列表tab
  },
  mutations: {
    init( state ){
      state.audioObj = document.getElementById('music');
      state.audioObj.onloadedmetadata = function () {//  当元数据加载完成时才获取总时长
        state.durationTime = this.duration;// 获取媒体总时长
      };
      state.audioObj.onplaying = function () {// 播放时获取当前播放时间
        let audio = this;
        state.isPlaying = true;
        state.timer = setInterval( function () {
          state.currentTime = audio.currentTime;
        },1000)
      };
      state.audioObj.onpause = function () {//  暂停事件
        clearInterval(state.timer);//  不再获取进度条时间
        state.isPlaying = false;
      }
    },
    getList( state , list ){//  获取当前播放列表,因为没有真实后台数据，所以整个列表只能作为信息传递过来了
      state.list = list.list;
    },
    play( state ){// 播放当前音频并生成当前音频所在的播放列表
      state.audioObj.play();
    },
    pauseMusic( state ){// 暂停播放
      if ( state.audioObj != '' ){
        state.audioObj.pause();
      }
    },
    getCurrentMusic( state , currentMusic ){//  获取当前播放音频对象
      state.currentMusic = currentMusic;
      state.audioObj.src = process.env.NODE_ENV !== 'production' ? 'http://www.kittyjs.com/'+ currentMusic.src : currentMusic.src;
    },
    setCurrentTime( state , time ){
      state.currentTime = time;
      state.audioObj.currentTime = time;
    },
    togglePlayingList( state ){
      state.showPlayingList = !state.showPlayingList
    },
  },
  actions:{
  }
};
export default store
