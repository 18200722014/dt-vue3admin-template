<template>
  <div class="logo">
    <img class="logo-image" :src="getImageUrl('logo.png')" alt="logo.png" />
    <h1 class="logo-text">DaiTuAdmin</h1>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/index'

defineOptions({
  name: 'Logo'
})
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $sidebar-bg-color;

  &-image {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  &-text {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
}
</style>
