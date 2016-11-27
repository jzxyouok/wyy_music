/**
 * Created by guojingfeng on 2016/11/25.
 */
var store = {
  state: {
    audioObj: '',// 媒体DOM对象
    isPlaying: false,// 当前状态是否在播放
    list: [],// 当前播放列表
    collectionList: [],// 收藏列表
    latestList: [],// 最近播放列表
    currentMusic: {},// 当前播放的音频
    currentTime: '',// 当前播放的音频的当前播放时间
    durationTime: '',// 当前播放的音频的总时长
    timer: '',//  定时器对象
    timerTimeout: '',//  计时器对象
    prevMusic: {},// 上一首播放的音频
    nextMusic: {},// 下一首播放的音频
    showPlayingList: false,// 显示悬浮的当前播放列表tab
    volume: '',// 正在播放的音频声音大小
    displayLrc: false,//  播放界面显示歌词组件
    playStyle: 0,// 默认播放模式，0=>列表循环，1=>列表随机，2=>单曲循环
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
    getVolume( state ){// 获取当前音频音量，总步长为20
      state.volume = state.audioObj.volume*20;
    },
    setVolume( state , value ){
      state.audioObj.volume = value/20;
      state.volume = value;
    },
    getList( state , list ){//  获取当前播放列表,因为没有真实后台数据，所以整个列表只能作为信息传递过来了
      state.list = list.list;
    },
    play( state ){// 播放当前音频并生成当前音频所在的播放列表
      state.audioObj.play();
    },
    changePlayStyle( state, val ){
      console.log(val)
      state.playStyle = val;
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
    toggleDisplayLrc( state ){// 显示专辑图或者歌词界面
      state.displayLrc = !state.displayLrc;
    },
  },
  actions:{
    autoNext(context){
      if ( context.state.audioObj == '' ){
        context.commit('init')
      }
      context.state.audioObj.onended = function () {
        context.dispatch('playNext');
      }
    },
    playNext( { commit, state } ){//  一首歌曲完了自动播放下一首，播放模式，0=>列表循环，1=>列表随机，2=>单曲循环
      if ( state.playStyle == 0 ){
        state.list.forEach(( value, index )=>{
          if ( value.id == state.currentMusic.id ){
            if ( index != state.list.length-1 ){
              state.nextMusic = state.list[index+1];
            }else {
              state.nextMusic = state.list[0];
            }
          }
        })
        commit('getCurrentMusic', state.nextMusic)
      }else if ( state.playStyle == 1 ){
        let nextMusic = state.list[Math.floor(Math.random()*state.list.length)]
        while ( nextMusic.id == state.currentMusic.id ){//  防止随机到当前音乐
          nextMusic = state.list[Math.floor(Math.random()*state.list.length)]
        }
        commit('getCurrentMusic', nextMusic)
      }
      state.timerTimeout = setTimeout(function () {
        commit('play')
        clearTimeout(state.timerTimeout)
      },2000)

    },
  }
};
export default store
