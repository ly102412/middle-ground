/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-11 10:55:03
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-11 11:01:23
 * @FilePath: \middle-ground\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default service