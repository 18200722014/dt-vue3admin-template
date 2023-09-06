<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
/** 引入Header.vue */
import Header from './Header/index.vue'
/** 引入SideBar.vue */
import SideBar from './SideBar/index.vue'
defineOptions({
  name: 'Layout'
})
</script>

<style lang="scss" scoped>
.layout {
  .el-aside {
    border-right: solid 1px $border-color;
    background-color: $sidebar-bg-color;
  }

  .el-header {
    padding: 0;
    height: 50px;
  }
}
</style>
