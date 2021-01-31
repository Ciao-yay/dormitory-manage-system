/* 
  封装ajax模块
  先安装  npm i axios --S
  引入axios
  基于promise，返回promise对象
*/
import axios from 'axios'
export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    // 执行异步ajax请求
    let promise
    if (method === 'GET') {
      promise = axios({
        method,
        url,
        params: data
      })
    } else {
      promise = axios({
        method,
        url,
        data
      })
    }
    promise.then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
