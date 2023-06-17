import { createPinia, defineStore } from 'pinia';

import LoginUser from '@/types/LoginUser';

const pinia = createPinia();

export default pinia;

// useStore 可以是 useUser、useCart 之类的任何东西
// 'LoginUser' 是storeId，自己随便取，保证唯一
export const LoginUserStore = defineStore('LoginUserStore', {
    // 推荐使用 完整类型推断的箭头函数
    // state是store的初始状态
    state: () => {

        let loginUser: LoginUser = {
            id: -1,
            email: '',
            nickName: '',
            avatar: '',
            profile: '',
            token: ''
        };

        return loginUser;
    },

    getters: {},

    // 注意：actions中不推荐使用箭头函数，因为箭头函数的this是绑定了外部的this，而非store的this
    actions: {

        changeState(currentUser: LoginUser) {
            this.id = currentUser.id;
            this.email = currentUser.email;
            this.nickName = currentUser.nickName;
            this.avatar = currentUser.avatar;
            this.profile = currentUser.profile;
            this.token = currentUser.token;
        }
    }
});