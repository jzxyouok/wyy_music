/**
 * Created by guojingfeng on 2016/11/20.
 */
import vue from 'vue'
vue.filter('transformCount', val=>{
  // 过滤用户查看量数值
  if ( val < 100000 ){//  10万内
    return val;
  }else if ( val > 100000 && val < 100000000 ){// 1百万到1亿之间
    return Math.ceil( val/10000 ) + '万';
  }else if ( val > 100000000 ){//  1亿以后
    return Math.ceil( val/100000000 ) + '亿';
  }
});
vue.filter('transformMediaTime',time=>{
  // 返回播放时间格式，传入参数为秒，转化为00:00格式
  if ( time == 0 ){
    return '00:00'
  }else {// 时长大于一个小时的未计入该考虑范围内
    // 保持分钟和秒数都为2位数
    let minutes = Math.floor(time/60) > 9 ? Math.floor(time/60) : '0'+ Math.floor(time/60);
    let seconds = Math.floor(time%60) > 9 ? Math.floor(time%60) : '0'+ Math.floor(time%60);
    return minutes + ':' + seconds;
  }
});
vue.filter('transformWeek', val=>{
  //  返回星期几的过滤器，其中0为星期天
  let str = '星期';
  switch ( val ){
    case 0:
          return str + '日';
          break;
    case 1:
      return str + '一';
      break;
    case 2:
      return str + '二';
      break;
    case 3:
      return str + '三';
      break;
    case 4:
      return str + '四';
      break;
    case 5:
      return str + '五';
      break;
    case 6:
      return str + '六';
      break;
  }
});
