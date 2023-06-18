import { createDiscreteApi } from 'naive-ui';

/**
 * naive ui的 message、notification、dialog、loadingBar组件的API
 * 使用 createDiscreteApi 将上面四个组件的api导出，使其可以在setup外部使用
 */
export const {
    message, notification,
    dialog, loadingBar
} = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar']
);
