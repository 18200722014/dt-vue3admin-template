<template>
  <el-switch
    v-model="darkMode"
    style="--el-switch-on-color: #0960bd; --el-switch-off-color: #f60"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    @change="toggleDark"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useDark } from '@vueuse/core'
/** 引入Element-Plus图标 */
import { Sunny, Moon } from '@element-plus/icons-vue'
defineOptions({
  name: 'DarkMode'
})

/**  */
// const isDark = useDark()
/** 是否切换暗黑模式 */
const darkMode = ref(false)

const toggleDark = (value: boolean): void => {
  console.log(value)
  document.documentElement.classList.toggle('dark')
}
</script>

<style lang="scss" scoped></style>
