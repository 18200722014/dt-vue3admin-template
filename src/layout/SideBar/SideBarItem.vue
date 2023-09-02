<template>
  <div class="sidebar-item">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-sub-menu index="1-3">
        <template #title>
          <span>item four</span>
        </template>
        <el-menu-item index="1-3-1">
          <span>item one</span>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SideBarItem'
})
</script>

<style lang="scss" scoped>
/* style */
.sidebar-item {
  // 菜单项
  .el-menu-item {
    &.is-active {
      position: relative;

      span {
        position: absolute;
        z-index: 1;
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
      span {
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
}
</style>
