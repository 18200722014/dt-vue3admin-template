<template>
  <div class="layout">
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '200px'">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <span class="text-3xl font-bold underline dark:text-white"> {{ $t('common.home') }} </span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
/** 引入Header.vue */
import Header from './Header/index.vue'
/** 引入SideBar.vue */
import SideBar from './SideBar/index.vue'

/** 引入useLayoutStore */
import { useLayoutStore } from '@/store/modules/layout'
/** storeToRefs()，从store中解构属性保持响应性 */
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'Layout'
})

/** 创建layoutStore */
const layoutStore = useLayoutStore()

/** 从layoutStore中解构出isCollapse属性 */
const { isCollapse } = storeToRefs(layoutStore)
</script>

<style lang="scss" scoped>
.layout {
  .el-aside {
    background-color: $sidebar-bg-color;
    transition: width 0.3s;
  }

  .el-header {
    padding: 0;
    height: 50px;
  }
}
</style>
