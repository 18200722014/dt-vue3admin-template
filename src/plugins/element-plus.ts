/** 按需引入Element-plus组件 */
import { ElContainer, ElAside, ElHeader, ElMain, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { type App } from 'vue'

/** ElementPlusComponents：用来存放element-plus组件，便于遍历，全局注册组件 */
const ElementPlusComponents = [ElContainer, ElAside, ElHeader, ElMain, ElMenu, ElMenuItem, ElSubMenu]

/**
 * @description 全局注册element-plus组件
 * @param app vue实例对象
 */
export function useElementComponents(app: App): void {
  ElementPlusComponents.forEach((component) => {
    console.log(component)
    app.component(component.name, component)
  })
}
