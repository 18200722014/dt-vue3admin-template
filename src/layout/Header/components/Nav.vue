<template>
  <div class="nav">
    <!-- 左侧区域 -->
    <div class="nav-left">
      <!-- 折叠图标 -->
      <i class="nav-left__iscollapse">
        <component :is="renderIconIfyIcon('ant-design:menu-fold-outlined')" />
      </i>
      <!-- 面包屑 -->
      <Breadcrumb />
    </div>
    <!-- 右侧区域 -->
    <div class="nav-right"></div>
  </div>
</template>

<script setup lang="ts">
/** 创建icon */
import { renderIconIfyIcon } from '@/utils/index'
/** 引入面包屑组件 */
import Breadcrumb from './Breadcrumb.vue'

defineOptions({
  name: 'DTNav'
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  border-bottom: 1px solid $border-color;

  &-left {
    display: flex;
    align-items: center;

    &__iscollapse {
      margin-right: 10px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
