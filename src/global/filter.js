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
