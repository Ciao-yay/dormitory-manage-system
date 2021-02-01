/* 
  入口文件

*/
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 引入操作文件
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


// 声明使用Vuex
Vue.use(Vuex)

// 导出Vuex.store实例对象
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  state
})