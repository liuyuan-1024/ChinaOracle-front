// 关于 登录登出 的工具类

import requests from '@/api/requests';
import RouterUtils from '@/utils/base/RouterUtils';
import { LoginUserStore } from '@/stores';
import LoginUser from '@/types/LoginUser';
import StorageUtils from '@/utils/StorageUtils';

export default class LoginUtils {
    /**
     * 注册
     * @param args 邮箱, 密码, 确认密码
     */
    static register(args: {
        email: string;
        password: string;
        checkPassword?: string
    }) {
        requests
            .post('/user/register', {
                email: args.email,
                password: args.password,
                checkPassword: args.checkPassword
            })
            .then((res: any) => {
                RouterUtils.push('/');
            })
            .catch((error) => {
                // todo 错误信息提示
                // window.$message.error(error.message);
            });
    }

    /**
     * 登录
     * @param args 邮箱, 密码
     */
    static login(args: { email: string; password: string }) {
        requests.post('/user/login', {
            email: args.email,
            password: args.password
        })
            .then((res: any) => {
                let loginUser: LoginUser = res.data;
                LoginUserStore().changeState(loginUser);
                StorageUtils.setAccessTokenToLocal(loginUser.token);
                RouterUtils.push('/');
            })
            .catch((error) => {
                // todo 错误信息提示
                // window.$message.error(error.message);
                // TODO: 开发完成后删除此行code
                RouterUtils.push('/');
            });
    }

    /**
     * 登出
     */
    static logout() {
        requests.post('/user/logout')
            .then((res) => {
                // 清空local storage
                StorageUtils.clearLocal();
                RouterUtils.push('/login');
            })
            .catch((error) => {
                // todo 错误信息提示
                // window.$message.error(error.message);
                // TODO: 开发完成后删除此行code
                RouterUtils.push('/login');
            });
    }
}
