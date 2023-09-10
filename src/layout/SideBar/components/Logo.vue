<template>
  <div class="logo">
    <img class="logo-image" :src="getImageUrl('logo.png')" alt="logo.png" />
    <Transition enter-active-class="animate__animated animate__fadeInDown" mode="out-in">
      <h1 class="logo-text" v-if="!isCollapse">DaiTuAdmin</h1>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/index'
/** 引入useLayoutStore */
import { useLayoutStore } from '@/store/modules/layout'
/** 引入storeToRefs()，从store中解构属性保持响应性 */
import { storeToRefs } from 'pinia'
/** 引入animate.css */
import 'animate.css'
defineOptions({
  name: 'Logo'
})

/** 创建layoutStore */
const layoutStore = useLayoutStore()

/** 从layoutStore中解构属性 */
const { isCollapse } = storeToRefs(layoutStore)
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $sidebar-bg-color;

  &-image {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  &-text {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
}
</style>
