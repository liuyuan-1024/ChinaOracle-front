import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron';
import path from 'path';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// 主窗口
let mainWindow: BrowserWindow | null;

// 系统托盘和它的上下文菜单
let tray: Tray | null;
const trayMenu = Menu.buildFromTemplate([
    {
        label: '显示窗口',
        click: () => {
            mainWindow?.show();
        }
    },
    {
        label: '最小化',
        click: () => {
            mainWindow?.minimize();
        }
    },
    {
        label: '退出',
        click: () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        }
    }
]);

// 创建浏览器窗口
function createWindow() {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: true,
        width: 1024, // 实际W=1400
        height: 720, // 实际H=1000
        backgroundColor: '#2e2b43',
        icon: path.join(__dirname, '../public/favicon.ico'),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // 加载 index.html
    if (process.env.NODE_ENV !== 'development') {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html')).then();
    } else {
        mainWindow
            .loadURL(`${process.env['VITE_DEV_SERVER_URL']}:
                            ${process.env['VITE_DEV_SERVER_PORT']}`)
            .then();
        // 打开开发工具
        mainWindow.webContents.openDevTools();
    }
}

// 创建系统图标
function createTray() {
    tray = new Tray(path.join(__dirname, '../public/favicon.ico'));
    tray.setToolTip('ChinaOracle');
    tray.setContextMenu(trayMenu);
}

/**
 * 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用；
 * 部分 API 在 ready 事件触发后才能使用。
 */
app.whenReady().then(() => {
    createWindow();
    createTray();

    // 允许跨域
    mainWindow?.webContents.session.webRequest.onBeforeSendHeaders(
        (details, callback) => {
            callback({
                requestHeaders: { Origin: '*', ...details.requestHeaders }
            });
        });
    mainWindow?.webContents.session.webRequest.onHeadersReceived(
        (details, callback) => {
            callback({
                responseHeaders: {
                    'Access-Control-Allow-Origin': ['*'],
                    ...details.responseHeaders
                }
            });
        });

    app.on('activate', function(e) {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
        // 打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    tray?.on('click', function() {
        mainWindow?.show();
    });
});

app.on('ready', () => {
    // 监听最小化窗口事件
    ipcMain.on('minimize-window', () => {
        mainWindow?.minimize();
    });

    // 监听最大化/还原窗口事件
    ipcMain.on('maximize-window', () => {
        if (mainWindow?.isMaximized()) {
            mainWindow?.unmaximize();
        } else {
            mainWindow?.maximize();
        }
    });

    // 监听关闭窗口事件(实际上是最小化到托盘)
    ipcMain.on('close-window', (ev) => {
        // 阻止关闭
        ev.preventDefault();
        // 隐藏窗口
        mainWindow?.hide();
    });
});
