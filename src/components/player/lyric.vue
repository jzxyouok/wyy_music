<template>
  <div class="lyric">
    <div class="volume uk-grid">
      <div class="uk-width-1-10">
        <img class="icon-volume" src="static/wyy_res/aai.png">
      </div>
      <div class="uk-width-9-10">
        <input type="range" class="uk-width-1-1" style="margin-top: 14px;">
      </div>
    </div>
    <div class="lyric-container uk-container">
      <div :style="{ 'transform': 'translateY(' + translateY + 'px)'}" class="move-lyric">
        <template v-for="item in lyricArr">
          <div v-if="item.type == 'lyric'" class="lyric-sentence">
            <div class="wyy-gray-color uk-text-center">{{ item.lyric }}</div>
            <div class="wyy-gray-color uk-text-center">{{ item.translateLyric }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .lyric {
    width: 90%;
    margin: 0 auto;
    height: calc(100% - 200px);
    background-color: #000;
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
    margin-top: 50%;
  }
  .lyric-container .lyric-sentence{
    font-size: 16px;
    margin-bottom: 20px;
    word-break: break-word;
  }
</style>
<script>
  export default{
    props:{
      src: String
    },
    data(){
      return {
        lyricArr: [],// 歌词,包含时间、歌词和翻译的对象数组
      }
    },
    computed:{
      translateY(){
        return 0
      },
    },
    methods: {
      loadLyric(){
        //  所有操作都是在有歌词文件的情况下完成，如果歌曲没有歌词，将不会进行请求
        this.$http({ url: 'static/lyric/Beauty and a Beat'}).then(function (res) {
//          console.log(res)
          let timeReg = /\[\d\d:\d\d\.?\d*\]/g;//  匹配时间段，如[00:14.879]
          let timeFormatReg = /\d\d:\d\d\.?\d*/g;//  匹配时间格式用来进行必要的转换，如[00:14.879] => 转化为秒
          let msgReg = /\[\w{1,2}:\w+\]/ig;//  匹配其他信息,如[by:idiotest]
          let keyReg = /\w+/ig;//  分开匹配的其他信息的键和值
          let lyric = [];// 歌词
          let lyricTranslate = [];//  翻译
          let lyricMsg = {};//  其他信息载体
          let msgList = [];
          let times = res.data.lyric.match(timeReg);// 时间段
          res.data.lyric.split('\n').forEach(val=>{// 歌词
            lyric.push({
              type: 'lyric',
              lyric: val.replace(timeReg,'')
            })
          });
          times.forEach( (value,index)=>{// 时间的格式化以及加入列表
            let min = value.match(timeFormatReg)[0].split(':')[0];//  获取分钟
            let sec = value.match(timeFormatReg)[0].split(':')[1];//  获取秒
            lyric[index].time = min*60 + sec*1;// 先把时间字符串转化为数字再进行叠加
          })
          if ( res.data.translateLyric != '' ){// 翻译,根据原语言时间来匹配翻译
            lyricTranslate = res.data.translateLyric.split('\n');
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
          if ( msgReg.test(res.data.lyric) ){//  其他信息的匹配
            res.data.lyric.match(msgReg).forEach(val=>{
              msgList.push({
              type:'lyricMsg',
              key: val.match(keyReg)[0],
              value: val.match(keyReg)[1]
              })
            })
          }
          if ( res.data.translateLyric != '' && msgReg.test(res.data.translateLyric) ){//  其他信息的匹配
            res.data.translateLyric.match(msgReg).forEach(val=>{
              msgList.push({
                type:'translateLyricMsg',
                key: val.match(keyReg)[0],
                value: val.match(keyReg)[1]
              })
            })
          }
          this.lyricArr = lyric.concat(msgList);
//          console.log( this.lyricArr )
        })
      },
    },
    mounted (){
      this.loadLyric();
    },
    components: {
    }
  }
</script>
