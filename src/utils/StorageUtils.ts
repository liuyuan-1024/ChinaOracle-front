export default class StorageUtils {
  static ACCESS: string = 'access_token'
  static REFRESH: string = 'refresh_token'
  static LOGIN_USER = 'loginUser'

  // ================================== local storage start ================================== //

  /**
   * localStorage存储access_token
   * @param access_token 权限令牌
   */
  static setAccessTokenToLocal(access_token: string) {
    localStorage.setItem(this.ACCESS, access_token)
  }

  /**
   * localStorage存储refresh_token
   * @param refresh_token 刷新令牌
   */
  static setRefreshTokenToLocal(refresh_token: string) {
    localStorage.setItem(this.REFRESH, refresh_token)
  }

  /**
   * 移除localStorage中存储的access_token
   */
  static delAccessTokenFromLocal() {
    localStorage.removeItem(this.ACCESS)
  }

  /**
   * 移除localStorage中存储的refresh_token
   */
  static delRefreshTokenFromLocal() {
    localStorage.removeItem(this.REFRESH)
  }

  /**
   * 获取localStorage中存储的access_token
   */
  static getAccessTokenFromLocal(): string {
    return localStorage.getItem(this.ACCESS) || ''
  }

  /**
   * 获取localStorage中存储的refresh_token
   */
  static getRefreshTokenFromLocal(): string {
    return localStorage.getItem(this.REFRESH) || ''
  }

  /**
   * 清空localStorage
   */
  static clearLocal() {
    localStorage.clear()
  }

  // =================================== local storage end =================================== //

  // ================================= session storage start ================================= //

  /**
   * sessionStorage存储登录用户信息
   * @param loginUser 登录用户信息
   */
  //  setLoginUserToSession(loginUser: LoginUser) {
  //   sessionStorage.setItem(LOGIN_USER, JSON.stringify(loginUser))
  // }

  /**
   * 移除sessionStorage中存储的用户信息
   */
  static delLoginUserFromSession() {
    sessionStorage.removeItem(this.LOGIN_USER)
  }

  /**
   * sessionStorage存储用户信息
   */
  //  getLoginUserFromSession(): LoginUser | '' {
  //   const item = sessionStorage.getItem(LOGIN_USER)
  //   if (item === null || item === '') {
  //     return ''
  //   } else {
  //     return JSON.parse(item)
  //   }
  // }

  /**
   * 清空sessionStorage
   */
  static clearSession() {
    sessionStorage.clear()
  }

  // ================================== session storage end ================================== //
}
