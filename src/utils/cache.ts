/**
 * @description 存储数据到本地缓存localstorage
 * @param key 属性名
 * @param value 值
 */
export const setCacheOfLocal = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 从本地给缓存localStorage中获取数据
 * @param key 属性名
 * @returns any
 */
export const getCacheOfLocal = (key: string): any => {
  return JSON.parse(window.localStorage.getItem(key) as string)
}

/**
 * @description 从本地缓存localStorage中删除指定的属性&值
 * @param key 属性名
 */
export const removeCacheOfLocal = (key: string): void => {
  window.localStorage.removeItem(key)
}

/**
 * @description 清空本地缓存localStorage中的数据
 */
export const clearCacheOfLocal = (): void => {
  window.localStorage.clear()
}

/**
 * @description 存储数据到本地缓存sessionStorage
 * @param key 属性名
 * @param value 值
 */
export const setCacheOfSession = (key: string, value: any): void => {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 从本地给缓存sessionStorage中获取数据
 * @param key 属性名
 * @returns any
 */
export const getCacheOfSession = (key: string): any => {
  return JSON.parse(window.sessionStorage.getItem(key) as string)
}

/**
 * @description 从本地缓存sessionStorage中删除指定的属性&值
 * @param key 属性名
 */
export const removeCacheOfSession = (key: string): void => {
  window.sessionStorage.removeItem(key)
}

/**
 * @description 清空本地缓存sessionStorage中的数据
 */
export const clearCacheOfSession = (): void => {
  window.sessionStorage.clear()
}
