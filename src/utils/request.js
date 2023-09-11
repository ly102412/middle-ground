/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-11 10:55:03
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 17:46:30
 * @FilePath: \middle-ground\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const service = axios.create({
  // 根据项目状态自动切换请求的服务地址
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use((config) => {
  config.headers.icode = '256F27AC22623C4F'
  return config
})

/**
 * 相应拦截器
 * 服务端返回数据之后,前端 .then 之前被调用
 */
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  // TODO: 业务请求错误
  return Promise.reject(new Error(message))
})

export default service
