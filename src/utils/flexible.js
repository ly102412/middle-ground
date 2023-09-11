/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 11:27:12
 * @FilePath: \middle-ground\src\utils\flexible.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

// 判断当前是否是移动设备，判断依据为屏幕的宽度是否大于指定的值（1280）
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态指定 rem 基准值，最大为 40px
 * 根据用户的屏幕宽度，进行一些计算，把计算出来的赋值给 html 的根标签作为 fontsize 大小
 */
export const useRem = () => {
  // 定义最大的 fontsize
  const MAX_FONT_SIZE = 40
  // 监听 html 文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    // 获取 html 标签
    const html = document.querySelector('html')
    // 计算 fontsize，根据屏幕宽度/10
    let fontsize = window.innerWidth / 10
    fontsize = fontsize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontsize
    // 赋值给 html 标签
    html.style.fontSize = fontsize + 'px'
  })
}
