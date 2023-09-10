<template>
  <i style="display: flex">
    <IconifyIcon :icon="iconName" :style="{ ...attr }" />
  </i>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { useAttrs } from 'vue'

defineOptions({
  name: 'IconifyIcon'
})

/** 父组件绑定在子组件上但子组件没有使用props接收的属性 */
const attr = useAttrs()
console.log(attr)

const props = withDefaults(defineProps<{ iconName: string }>(), {
  iconName: ''
})

console.log(props)
</script>

<style lang="scss" scoped></style>
