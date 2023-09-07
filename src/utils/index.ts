/** 引入图片 */
export const getImageUrl = (imageName: string): string => {
  console.log(imageName)
  console.log(import.meta.url)
  console.log('new URL', new URL(`../assets/images/${imageName}`, import.meta.url))
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}
