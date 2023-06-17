# ChinaOracle

> ChinaOracle 古灵精怪的 code 记录创意代码 代码也可以很有趣前端使用 vue3 + ts +
> sass + naive-ui
> axios 作为前后端的通信工具后端使用 Java（SpringBoot）

## UI 设计

![ChinaOracle](/public/ChinaOracle.png 'ChinaOracle')

## UI 组件库

> Naive UI <https://www.naiveui.com/zh-CN/os-theme>

### 自动引入组件

> unplugin-auto-import 插件来自动导入 API
>
> unplugin-vue-components 插件来按需自动加载组件，插件会自动解析模板中的使用到的组件，
> 并导入组件。
>
> 安装这两个插件:
>
> npm i unplugin-vue-components -D
>
> npm i unplugin-vue-components -D

```ts
// 配置插件
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
                },
            ],
        }),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
    ],
});
```

## icon 图标

- iconfont 的 stack 项目
  <https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.22&manage_type=myprojects&projectId=3628784&keyword=&project_type=&page=>

- 采用 symbol 方式引入，并且自定义 symbol icon 组件

## rem 适配

> 采用 **postcss-pxtorem 和 amfe-flexible（新版的 lib-flexible）** 进行 rem 适配

## 开发思路

- 自定义 titleBar
- 系统托盘

## 已解决问题

> 1. VUE 页面中无法直接调用 electron api
>
> 原因：electron 不允许直接在页面中使用 electron 的 api
>
> 解决
>
> - createWindow->win->webPreferences->nodeIntegration: true
> - 直接 window. 调用对应 api
> - 编辑器会报错, 可以给 window 添加一个声明文件

## 未解决问题

> 记得安装 Electron DevTools Installer
> <https://github.com/MarshallOfSound/electron-devtools-installer>
>
> 1. 生产构建时会有部分静态资源无法打包
>
> 原因：没有在代码中直接使用该静态资源，而是使用变量代替了该资源
>
> 2. 添加滚动条时，会出现一个白色小块
>
> 原因：暂时还不清楚
