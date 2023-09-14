<template>
  <!-- 用户头像 -->
  <el-avatar :size="35" :src="getImageUrl('logo.png')" />
  <!-- 用户信息 -->
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <iconify-icon icon-name="formkit:down"></iconify-icon>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>仓库地址</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
/** 引入图片工具函数 */
import { getImageUrl } from '@/utils/index'
/** 引入iconify-icon */
import IconifyIcon from '@/components/Icon/IconifyIcon.vue'

defineOptions({
  name: 'UserAvatar'
})
</script>

<style lang="scss" scoped>
.nav-right__user {
  display: flex;
  align-items: center;

  i {
    font-size: 14px;
  }
}

.el-dropdown {
  color: $font-size-black;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
}
</style>
