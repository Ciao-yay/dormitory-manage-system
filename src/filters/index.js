// 引入vue
import Vue from 'vue'
// 引入moment库
import moment from 'moment'

Vue.filter('date_format',(value, formatStr = 'YYYY-MM-DD') => {
  return moment(value).format(formatStr)
})