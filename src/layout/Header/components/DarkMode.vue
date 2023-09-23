<template>
  <el-switch
    v-model="isDark"
    style="--el-switch-on-color: #0960bd; --el-switch-off-color: #f60"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    @change="toggleDark"
  />
</template>

<script setup lang="ts">
/** 引入Element-Plus图标 */
import { Sunny, Moon } from '@element-plus/icons-vue'
/** 引入暗黑模式hook函数 */
import { useDark, useToggle } from '@/hooks/useDark'
defineOptions({
  name: 'DarkMode'
})
/** 是否切换为暗黑模式，初始值为当前模式，当前模式为dark则为true，否则为false */
const isDark = useDark()

/** 开关值发生变化事件的事件处理函数 */
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped></style>
