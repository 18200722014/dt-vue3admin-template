<template>
  <div class="sidebar">
    <!-- logo -->
    <Logo />
    <!-- Menu菜单 -->
    <el-menu
      default-active="2"
      background-color="#001428"
      text-color="#BBB"
      active-text-color="#fff"
      class="el-menu-vertical-demo"
    >
      <SideBarItem />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
/** 引入Logo.vue */
import Logo from './components/Logo.vue'
/** 引入SideBarItem.vue */
import SideBarItem from './components/SideBarItem.vue'
defineOptions({
  name: 'SideBar'
})
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}
</style>
