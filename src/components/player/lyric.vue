<template>
  <div class="lyric uk-position-relative">
    <div class="volume uk-grid">
      <div class="uk-width-1-10">
        <img class="icon-volume" src="static/wyy_res/aai.png">
      </div>
      <div class="uk-width-9-10">
        <input type="range" min="0" max="20" v-model="volume" class="uk-width-1-1" style="margin-top: 14px;">
      </div>
    </div>
    <div @touchstart="touchingStart($event)" @touchend="touchingEndPos($event)" class="lyric-container uk-container uk-position-relative">
      <div :style="{ 'top': translateY + 'px'}" class="move-lyric">
        <template v-for="(item,index) in lyricArr">
          <div v-if="item.lyric != ''" class="lyric-sentence lyric-height uk-text-center"
               :class="{'white-color': currentIndex == index }">
            <div>{{ item.lyric }}</div>
            <div>{{ item.translateLyric }}</div>
          </div>
        </template>
        <div class="lyric-sentence uk-text-center">
          <div v-if="lyricMsg.lyricUserName != ''">歌词贡献者：{{ lyricMsg.lyricUserName }}</div>
          <div v-if="lyricMsg.transUserName != ''">歌词翻译者：{{ lyricMsg.transUserName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .lyric {
    width: 90%;
    margin: 0 auto;
    height: calc(100% - 200px);
    /*background-color: #000;*/
  }
  .lyric .volume {
    height: 30px;
  }
  .volume .icon-volume {
    display: block;
    width: 20px;
    margin: 5px auto 0;
  }
  .lyric .lyric-container {
    height: calc(100% - 30px);
    overflow: hidden;
  }
  .lyric-container .move-lyric {
    position: absolute;
    left: 0;
    z-index: 11;
    width: 100%;
    /*  具体不知道，随便算的 */
    margin-top: 55%;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease ;
  }
  .lyric-container .lyric-sentence{
    font-size: 16px;
    padding-bottom: 20px;
    word-break: break-word;
    color: #b8bbbf;
  }
  .lyric-container .white-color {
    color: #fff;
  }
</style>
<script>
  export default{
    props:{
      id: {
        type: [String,Number],
        default: 0
      }
    },
    data(){
      return {
        lyricArr: [],// 歌词,包含时间、歌词和翻译的对象数组
        currentIndex: -1,// 当前滚动到第几个item
        times: [],//  时间的数组
        translateY: 0,
        startTouchingPos: {},
        lyricMsg: {
          lyricUserName: '',
          transUserName: ''
        },
      }
    },
    computed:{
      currentTime(){//  当前播放时间
        return this.$store.state.currentTime
      },
      volume:{
        get(){
          return this.$store.state.volume
        },
        set( value ){
          this.$store.commit('setVolume', value)
        },
      },
    },
    watch:{
      currentTime( val ){
        if ( val < this.times[0] ){//  重新开始一首歌
          this.currentIndex = -1;
          return
        }
        for ( let i = 0; i < this.times.length; i++ ){
          if ( val >= this.times[i] && i == this.times.length -1 ){// 最后一句歌词
            if ( this.lyricArr[i].lyric == '' ){//  过滤空白的歌词时间
              break
            }
            this.currentIndex = i;
            break
          }else if ( val >= this.times[i] && val < this.times[i+1] ){
            if ( this.lyricArr[i].lyric == '' ){//  过滤空白的歌词时间
              break
            }
            this.currentIndex = i;
            break
          }
        }
      },
      currentIndex( val ){//  用于判断滚动的Item项需要偏移的高度
        if ( val == -1 ){//  重置
          this.translateY = 0;
          return
        }
        let height = 0;
        let nodeList = document.getElementsByClassName('lyric-height');
        let length = nodeList.length;
        if ( val >= length ){//  超过数目，因为过滤了空白歌词，但是时间数组没有过滤所以会超过
          return
        }
        for ( let i = 0; i < val + 1; i++ ){//  需要循环val次
          height += nodeList[i].offsetHeight
        }
        this.translateY = -height;
      },
      id( id ){
        this.loadLyric( id );
      },
    },
    methods: {
      loadLyric( id ){
        this.$http({url:'static/api/music_data.php',params:{ lyric_id: id }}).then(function (res) {
          console.log(res)
          if ( res.data.code == 200 ){
            if ( res.data.lrc.lyric == null ){//  没有歌词
              return
            }
            let self = this;
            let timeReg = /\[\d\d:\d\d\.?\d*\]/g;//  匹配时间段，如[00:14.879]
            let timeFormatReg = /\d\d:\d\d\.?\d*/g;//  匹配时间格式用来进行必要的转换，如[00:14.879] => 转化为秒
            let lyric = [];// 歌词
            let lyricTranslate = [];//  翻译
            let times = res.data.lrc.lyric.match(timeReg);// 时间段
            self.times = [];//  重置时间的数组
            self.lyricMsg.lyricUserName = res.data.lyricUser != undefined ? res.data.lyricUser.nickname : '';
            self.lyricMsg.transUserName = res.data.transUser != undefined ? res.data.transUser.nickname : '';
            if ( times == null ){// 不支持时间轴滚动
              res.data.lrc.lyric.split('\n').forEach(val=>{// 歌词
                lyric.push({
                  lyric: val.replace(timeReg,'')
                })
              });
              lyric.unshift({
                lyric: '该歌词不支持滚动'
              })
              self.lyricArr = lyric;
              return
            }
            res.data.lrc.lyric.split('\n').forEach(val=>{// 歌词
              if ( timeReg.test(val) ){
              lyric.push({
                lyric: val.replace(timeReg,'')
              })
            }
          });
            times.forEach( (value,index)=>{// 时间的格式化以及加入列表
              let min = value.match(timeFormatReg)[0].split(':')[0];//  获取分钟
            let sec = value.match(timeFormatReg)[0].split(':')[1];//  获取秒
            lyric[index].time = min*60 + sec*1;// 先把时间字符串转化为数字再进行叠加
            self.times.push(min*60 + sec*1);
          })
            if ( res.data.tlyric.lyric != null ){// 翻译,根据原语言时间来匹配翻译
              lyricTranslate = res.data.tlyric.lyric.split('\n');
              for ( let i = 0; i < times.length; i++ ){
                let regExp = times[i].replace('[','\\[').replace('.','\\.').replace(']','\\]');
                let reg = new RegExp(regExp);// 将时间作为正则匹配对象,与\[\d\d:\d\d\.?\d*\]保持一致
                for ( let j = 0; j < lyricTranslate.length; j++ ){
                  if ( reg.test(lyricTranslate[j]) ){// 匹配出对应时间的翻译
                    lyric[i].translateLyric = lyricTranslate[j].replace(reg,'');//  去除时间
                    continue
                  }
                }
              }
            }
            this.lyricArr = lyric;
          }else {}
        })
      },
      touchingStart( e ){// 触摸开始位置
//        console.log(e)
        e.preventDefault();// 阻止默认的滚屏事件
        this.startTouchingPos = e.touches[0];// 用于判断区别滚动的开始位置
      },
      touchingEndPos( e ){
        e.preventDefault();// 阻止默认的滚屏事件
        if ( e.changedTouches[0].clientY != this.startTouchingPos.clientY || e.changedTouches[0].clientX != this.startTouchingPos.clientX ){
          //  非点击判断
          return
        }
        this.$store.commit('toggleDisplayLrc');
      },
    },
    mounted (){
      this.loadLyric( this.id );
      this.$store.commit('getVolume');
    },
    components: {
    }
  }
</script>
