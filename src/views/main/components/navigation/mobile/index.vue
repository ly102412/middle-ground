<!--
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-11 11:15:01
 * @FilePath: \middle-ground\src\views\main\components\navigation\mobile\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>我是移动端下的 navigation</div>
</template>

<script setup>
import { getCategory } from '@/api/category';

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}

getCategoryData()
</script>