import { h, type VNode } from 'vue'
import { Icon } from '@iconify/vue'

/** 引入图片 */
export const getImageUrl = (imageName: string): string => {
  console.log(imageName)
  console.log(import.meta.url)
  console.log('new URL', new URL(`../assets/images/${imageName}`, import.meta.url))
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

/** 渲染iconify图标，一般用来动态渲染图标，例如：侧边栏等 */
export const renderIconIfyIcon = (icon: string): VNode => {
  return h('i', { style: { display: 'flex' } }, [h(Icon, { icon })])
}
