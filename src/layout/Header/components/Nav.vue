<template>
  <div class="nav dark:bg-black/75 dark:text-white">
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
        <Search />
      </li>
      <!-- 暗黑模式切换开关 -->
      <li class="nav-right__item">
        <DarkMode />
      </li>
      <!-- 中英文切换 -->
      <li class="nav-right__item">
        <Language />
      </li>
      <!-- 消息通知 -->
      <li class="nav-right__item">
        <Message />
      </li>
      <!-- 全屏 -->
      <li class="nav-right__item">
        <FullScreen />
      </li>
      <!-- 用户头像和信息 -->
      <li class="nav-right__item nav-right__user">
        <UserAvatar />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/** 引入面包屑组件 */
import Breadcrumb from './Breadcrumb.vue'
/** 引入全局搜索组件 */
import Search from './Search.vue'
/** 引入暗黑模式开关 */
import DarkMode from './DarkMode.vue'
/** 引入中英文切换组件 */
import Language from './Language.vue'
/** 引入消息组件 */
import Message from './Message.vue'

/** 引入全屏组件 */
import FullScreen from './FullScreen.vue'

/** 引入用户头像组件 */
import UserAvatar from './UserAvatar.vue'
/** 引入iconify-icon */
import IconifyIcon from '@/components/Icon/IconifyIcon.vue'
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
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  box-shadow: 0 4px 4px -4px rgb(0, 0, 0, 0.5);

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
    }
  }
}
</style>
