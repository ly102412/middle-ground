<!--
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 17:23:54
 * @FilePath: \middle-ground\src\views\main\components\navigation\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import mobileNavigationVue from './mobile/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { getCategory } from '@/api/category'
import { ref } from 'vue'

const categoryData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  console.log(categoryData.value)
}

getCategoryData()
</script>
