/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-11 11:01:49
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-11 11:09:23
 * @FilePath: \middle-ground\src\api\category.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'


export const getCategory= () => {
  return request({
    url: '/category'
  })
}
