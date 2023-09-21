<template>
  <!-- 中英文切换 -->
  <el-dropdown trigger="click" @command="changeLanguage">
    <span class="el-dropdown-link">{{ currentLocale }}</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="lang in langs" :key="lang.key" :command="lang">{{ lang.title }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/** 导入解构pinia状态保持响应式的函数 */
import { storeToRefs } from 'pinia'
/** 导入已有的语言列表 */
import { langs } from '@/locales'
/** 导入locales仓库 */
import { useLocalesStore } from '@/store/modules/locales'
defineOptions({
  name: 'Language'
})

/** 初始化locales仓库 */
const localesStore = useLocalesStore()

/** 从localesStore仓库中解构属性，并保持响应式 */
const { locale: curLocale } = storeToRefs(localesStore)

console.log('currentLocale', curLocale)
/** 头部导航栏语言下拉菜单显示的当前语言环境 */
const currentLocale = ref(langs.find((locale) => locale.key === curLocale.value)?.title ?? '')

/** 切换当前语言环境 */
const changeLanguage = (locale: any): void => {
  /** 当切换语言环境的时候，同时切换显示的当前语言 */
  currentLocale.value = locale.title
  /** 切换当前语言环境 */
  localesStore.setLocale(locale.key)
}
</script>

<style lang="scss" scoped></style>
