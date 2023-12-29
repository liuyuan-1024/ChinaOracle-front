"use strict";
const electron = require("electron");
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => {
    electron.ipcRenderer.send(channel, data);
  },
  on: (channel, func) => {
    electron.ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});
