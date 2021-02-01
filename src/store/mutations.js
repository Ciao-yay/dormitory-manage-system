/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_USER_INFO,
  RECEIVE_AUTH_STATE,
  RECEIVE_USERS,
  RESET_USER_INFO
} from './mutation-types'

export default {
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RECEIVE_AUTH_STATE](state, { isAuthed }) {
    state.isAuthed = isAuthed
  },
  [RECEIVE_USERS](state, { users }) {
    state.users = users
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
}