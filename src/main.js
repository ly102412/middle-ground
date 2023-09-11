/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 14:08:33
 * @FilePath: \middle-ground\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import mLibs from './libs'
import { useRem } from './utils/flexible'

useRem()
createApp(App).use(router).use(mLibs).mount('#app')
