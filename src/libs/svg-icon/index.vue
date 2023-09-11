<!--
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-30 13:58:52
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 14:05:03
 * @FilePath: \middle-ground\src\libs\svg-icon\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <svg aria-hidden="true">
    <use :xlink-href="name" :class="fillClass"/>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
   // 显示的 svg
   name: {
    type: String,
    required: true
  },
  // svg 图标的颜色
  color: {
    type: String
  },
  // tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => {
  return `#icon-${props.name}`
})
</script>