const path = require('path');
const isDev = require('electron-is-dev');

const { app, BrowserWindow } = require('electron');
const remote = require('@electron/remote/main');

remote.initialize();

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  remote.enable(window.webContents);
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'drawin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
