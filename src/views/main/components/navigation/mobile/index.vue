<!--
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 14:16:12
 * @FilePath: \middle-ground\src\views\main\components\navigation\mobile\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-500 overflow-hidden">
      <!-- 汉堡按钮 -->
      <li class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20">
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5"></m-svg-icon>
      </li>
      <li v-for="item in data" :key="item.id" class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mb-4">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
// vite 构建的项目中，我们可以直接使用 defineProps 方法
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>