"use strict";
const electron = require("electron");
const path = require("path");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
let mainWindow;
let tray;
const trayMenu = electron.Menu.buildFromTemplate([
  {
    label: "显示窗口",
    click: () => {
      mainWindow == null ? void 0 : mainWindow.show();
    }
  },
  {
    label: "最小化",
    click: () => {
      mainWindow == null ? void 0 : mainWindow.minimize();
    }
  },
  {
    label: "退出",
    click: () => {
      if (process.platform !== "darwin") {
        electron.app.quit();
      }
    }
  }
]);
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    frame: false,
    resizable: true,
    width: 1024,
    // 实际W=1400
    height: 720,
    // 实际H=1000
    backgroundColor: "#2e2b43",
    icon: path.join(__dirname, "../public/favicon.ico"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js")
    }
  });
  if (process.env.VITE_USER_NODE_ENV !== "development") {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html")).then();
  } else {
    mainWindow.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}:
                            ${process.env["VITE_DEV_SERVER_PORT"]}`).then();
    mainWindow.webContents.openDevTools();
  }
}
function createTray() {
  tray = new electron.Tray(path.join(__dirname, "../public/favicon.ico"));
  tray.setToolTip("ChinaOracle");
  tray.setContextMenu(trayMenu);
}
electron.app.whenReady().then(() => {
  createWindow();
  createTray();
  mainWindow == null ? void 0 : mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
      callback({
        requestHeaders: { Origin: "*", ...details.requestHeaders }
      });
    }
  );
  mainWindow == null ? void 0 : mainWindow.webContents.session.webRequest.onHeadersReceived(
    (details, callback) => {
      callback({
        responseHeaders: {
          "Access-Control-Allow-Origin": ["*"],
          ...details.responseHeaders
        }
      });
    }
  );
  electron.app.on("activate", function(e) {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
  tray == null ? void 0 : tray.on("click", function() {
    mainWindow == null ? void 0 : mainWindow.show();
  });
});
electron.app.on("ready", () => {
  electron.ipcMain.on("minimize-window", () => {
    mainWindow == null ? void 0 : mainWindow.minimize();
  });
  electron.ipcMain.on("maximize-window", () => {
    if (mainWindow == null ? void 0 : mainWindow.isMaximized()) {
      mainWindow == null ? void 0 : mainWindow.unmaximize();
    } else {
      mainWindow == null ? void 0 : mainWindow.maximize();
    }
  });
  electron.ipcMain.on("close-window", (ev) => {
    ev.preventDefault();
    mainWindow == null ? void 0 : mainWindow.hide();
  });
});
