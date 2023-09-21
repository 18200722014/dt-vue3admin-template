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
/** 引入Element-Plus图标 */
import { Sunny, Moon } from '@element-plus/icons-vue'
defineOptions({
  name: 'DarkMode'
})

/** 是否切换为暗黑模式 */
const darkMode = ref(false)

/** switch开关值发生变化触发的回调，用来控制html元素类的切换 */
const toggleDark = (): void => {
  document.documentElement.classList.toggle('dark')
}
</script>

<style lang="scss" scoped></style>
