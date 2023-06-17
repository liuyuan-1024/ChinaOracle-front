// 当前登录用户

export default interface LoginUser {
    /**
     * 用户ID
     */
    id: number;

    /**
     * 邮箱
     */
    email: string;

    /**
     * 昵称
     */
    nickName: string;

    /**
     * 头像
     */
    avatar: string;

    /**
     * 简介
     */
    profile: string;

    /**
     * 密钥、令牌
     */
    token: string;

}
