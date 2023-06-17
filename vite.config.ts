import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
    // 加载环境变量
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [
            vue(),
            electron([
                {
                    entry: 'electron/main.ts'
                },
                {
                    entry: 'electron/preload.ts',
                    onstart(options) {
                        // 预加载脚本生成完成后，通知渲染器进程重新加载页面,
                        // 而不是重新启动整个Electron应用程序
                        options.reload();
                    }
                }
            ])
        ],
        // 相对路径的代称 @
        base: './',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        server: {
            // 解决跨域问题
            proxy: {
                // 代理Java后端
                '/api': {
                    target: env.VITE_REAL_URL, // 代理的地址(实际请求地址)
                    changeOrigin: true, // 允许跨域
                    secure: false, // 如果是不是https接口，可以不配置这个参数
                    ws: true, //代理 web socked
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    });
};
