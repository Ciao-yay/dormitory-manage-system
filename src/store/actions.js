/* 
  通过 mutations 间接改变 state 的多个方法

*/
import {
  RECEIVE_USER_INFO,
  RECEIVE_AUTH_STATE,
  RECEIVE_USERS,
} from './mutation-types'

import {
  reqAuthState,
  reqUserInfo,
  showUsers,
  reqLogout
} from '../api'
export default {
  // 异步获取用户信息
  async getUserInfo({ commit }) {
    // 发送异步请求
    try {
      let result = await reqUserInfo()
      result = result.data
      if (result.code === 1) {
        const userInfo = result.data[0]
        commit(RECEIVE_USER_INFO, { userInfo })
      } else {
        console.log(result.msg)
      }
    } catch (e) {
      console.log(e)
    }
  },
  // 异步获取认证状态
  async getAuthState({ commit }) {
    // 发送异步请求
    try {
      let result = await reqAuthState()
      result = result.data
      if (result.code === 1) {
        const isAuthed = result.data.isAuthed
        commit(RECEIVE_AUTH_STATE, { isAuthed })
      } else {
        console.log(result.msg)
      }
    } catch (e) {
      console.log(e)
    }
  },
  // 异步获取用户列表
  async getUsers({ commit }) {
    // 发送异步请求
    try {
      let result = await showUsers()
      result = result.data
      if (result.code === 1) {
        const users = result.data
        commit(RECEIVE_USERS, { users })
      } else {
        console.log(result.msg)
      }
    } catch (e) {
      console.log(e)
    }
  },
  // 异步登出
  async logout({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
}