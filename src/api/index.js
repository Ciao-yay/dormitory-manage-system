// 引入ajax
import ajax from './ajax'
// 基本路径
// const BASIC_URL = 'http://localhost:8081'
const BASIC_URL = '/api'
const PROJECTS_URL = `${BASIC_URL}/projects`
const USERS_URL = `${BASIC_URL}/users`

// 用户模块
// 登录
export const reqLogin = data => ajax(`${USERS_URL}/login`, data, 'POST')
// 退出
export const reqLogout = () => ajax(`${USERS_URL}/logout`)
// 查看用户
export const showUsers = () => ajax(`${USERS_URL}/showUsers`)
// 移除用户
export const removeUser = id => ajax(`${USERS_URL}/removeUser`,{id},'patch')



// 项目模块
