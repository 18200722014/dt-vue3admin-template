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
      :collapse="isCollapse"
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
/** 引入 useLayoutStore */
import { useLayoutStore } from '@/store/modules/layout'
/** 引入storeToRef()函数，从store中解构属性保持响应性 */
import { storeToRefs } from 'pinia'
defineOptions({
  name: 'SideBar'
})

/** 创建useLayoutStore */
const layoutStore = useLayoutStore()

/** 获取layoutStore中的属性 */
const { isCollapse } = storeToRefs(layoutStore)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}
</style>
