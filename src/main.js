// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// 引入moment库
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 过滤器
Vue.filter('date_format',(value, formatStr = 'YYYY-MM-DD') => {
  return moment(value).format(formatStr)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
