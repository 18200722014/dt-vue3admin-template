<template>
  <div class="nav">
    <!-- 左侧区域 -->
    <div class="nav-left">
      <!-- 折叠图标 -->
      <iconify-icon
        :icon-name="isCollapse ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined'"
        @click="changeIsCpllapse"
      ></iconify-icon>
      <!-- 面包屑 -->
      <Breadcrumb />
    </div>
    <!-- 右侧区域 -->
    <ul class="nav-right">
      <!-- 搜索图标 -->
      <li class="nav-right__item">
        <iconify-icon icon-name="fe:search"></iconify-icon>
      </li>
      <!-- 暗黑模式切换开关 -->
      <li class="nav-right__item">
        <el-switch
          v-model="darkMode"
          style="--el-switch-on-color: #0960bd; --el-switch-off-color: #f60"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
        />
      </li>
      <!-- 中英文切换 -->
      <li class="nav-right__item">
        <Language />
      </li>
      <!-- 消息通知 -->
      <li class="nav-right__item">
        <iconify-icon icon-name="ant-design:bell-outlined"></iconify-icon>
      </li>
      <!-- 全屏 -->
      <li class="nav-right__item">
        <iconify-icon icon-name="icon-park:full-screen"></iconify-icon>
      </li>
      <!-- 用户头像和信息 -->
      <li class="nav-right__item nav-right__user">
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
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/** 引入面包屑组件 */
import Breadcrumb from './Breadcrumb.vue'
/** 引入中英文切换组件 */
import Language from './Language.vue'
/** 引入iconify-icon */
import IconifyIcon from '@/components/Icon/IconifyIcon.vue'
/** 引入Element-Plus图标 */
import { Sunny, Moon } from '@element-plus/icons-vue'
/** 引入图片工具函数 */
import { getImageUrl } from '@/utils/index'
/** 引入 useLayoutStore */
import { useLayoutStore } from '@/store/modules/layout'
/** 引入storeToRef()函数，从store中解构属性保持响应性 */
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'DTNav'
})

/** layoutstore */
const layoutStore = useLayoutStore()

/** 获取layoutstore中的方法 */
const { changeIsCpllapse } = layoutStore

/** 获取layoutstore中的属性 */
const { isCollapse } = storeToRefs(layoutStore)

/** 是否切换暗黑模式 */
const darkMode = ref(false)
</script>

<style lang="scss" scoped>
$font-size-balck: #303133;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  border-bottom: 1px solid $border-color;

  i {
    font-size: 18px;
  }

  &-left {
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  &-right {
    display: flex;
    align-items: center;

    &__item {
      display: flex;
      margin-right: 15px;
      cursor: pointer;

      &.nav-right__user {
        display: flex;
        align-items: center;

        i {
          font-size: 14px;
        }
      }

      .el-dropdown {
        color: $font-size-balck;

        .el-dropdown-link {
          display: flex;
          align-items: center;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
