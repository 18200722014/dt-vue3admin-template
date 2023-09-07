<template>
  <div class="nav">
    <!-- 左侧区域 -->
    <div class="nav-left">
      <!-- 折叠图标 -->
      <i class="nav-left__iscollapse">
        <iconify-icon icon-name="ant-design:menu-fold-outlined"></iconify-icon>
      </i>
      <!-- 面包屑 -->
      <Breadcrumb />
    </div>
    <!-- 右侧区域 -->
    <ul class="nav-right">
      <li class="nav-right__item">
        <i>
          <iconify-icon icon-name="fe:search"></iconify-icon>
        </i>
      </li>
      <li class="nav-right__item">
        <i>
          <iconify-icon icon-name="ant-design:bell-outlined"></iconify-icon>
        </i>
      </li>
      <li class="nav-right__item">
        <i>
          <iconify-icon icon-name="icon-park:full-screen"></iconify-icon>
        </i>
      </li>
      <li class="nav-right__item">
        <el-avatar :size="35" :src="getImageUrl('logo.png')" />
      </li>
      <li class="nav-right__item">
        <i>
          <iconify-icon icon-name="uil:setting"></iconify-icon>
        </i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/** 引入面包屑组件 */
import Breadcrumb from './Breadcrumb.vue'
/** 引入iconify-icon */
import IconifyIcon from '@/components/Icon/IconifyIcon.vue'
/** 引入图片工具函数 */
import { getImageUrl } from '@/utils/index'
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
      display: flex;
      margin-right: 10px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  &-right {
    display: flex;
    align-items: center;

    &__item {
      margin-right: 15px;
      cursor: pointer;

      i {
        display: flex;
        font-size: 18px;
      }
    }
  }
}
</style>
