<template>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>Navigator One</span>
    </template>
    <el-menu-item index="1-2">
      <el-icon><Menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <!-- <el-sub-menu index="1-3">
        <template #title>
          <span>item four</span>
        </template>
        <el-menu-item index="1-3-1">
          <span>item one</span>
        </el-menu-item>
      </el-sub-menu> -->
  </el-sub-menu>
  <el-menu-item index="3">
    <el-icon><Menu /></el-icon>
    <span>Navigator Two</span>
  </el-menu-item>
  <el-menu-item index="4">
    <el-icon><Setting /></el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { Setting, Menu, Location } from '@element-plus/icons-vue'
defineOptions({
  name: 'SideBarItem'
})
</script>

<style lang="scss" scoped>
/* style */

.el-menu-item {
  &.is-active {
    position: relative;

    span,
    .el-icon {
      position: absolute;
      z-index: 1;
    }

    span {
      margin-left: 29px;
    }

    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%) scale(0);
    transform-origin: 0 bottom;
    content: '';
    width: 95%;
    height: 80%;
    background-color: #057cf6;
    border-radius: 5px;
    transition: transform 0.2s;
  }

  &:hover {
    span,
    .el-icon {
      color: #fff;
    }
  }
}

// 下拉菜单

.el-sub-menu {
  &.is-active {
    > :deep(.el-sub-menu__title) {
      color: #fff !important;

      :deep(.el-icon) {
        color: #fff;
      }
    }
  }

  :deep(.el-sub-menu__title) {
    &:hover {
      color: #fff !important;
    }
  }
}
</style>
