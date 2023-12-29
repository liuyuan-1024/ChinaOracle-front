/**
 * 基本工具类: 完全不依赖其他工具类, 尽量减少外部依赖
 * 路由工具类: 有关路由的一些操作都将放在这里
 */
import router from '@/router/index'

export default class RouterUtils {
  // 路由跳转，可被历史记录
  static push(to: string): void {
    // 可以依据path或name跳转路由
    if (String(to).substring(0, 1) === '/') {
      router.push({ path: to })
    } else {
      router.push({ name: to })
    }
  }

  // 返回当前路由的fullPath
  static getCurrentRouterPath(): string {
    return router.currentRoute.value.fullPath
  }
}
