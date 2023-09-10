/** 引入图片 */
export const getImageUrl = (imageName: string): string => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}
