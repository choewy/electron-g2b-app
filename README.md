# Electron Todo App

## Framework

- client : React, Electron
- server : NestJS

## Dependencies

### Client

- craco : React에서 절대 경로 alias를 사용하기 위한 모듈
- concurrently : react, electron을 동시에 실행할 수 있도록 해주는 모듈
- wait-on : react, electron의 동작 순서를 제어하기 위한 모듈
- cross-env : OS에 상관없이 CLI 환경에서 환경변수를 적용할 수 있는 모듈
- @electron/remote : IPC 통신을 위한 모듈
- electron-is-dev : 동작 중인 환경변수 체크 모듈
- electron-builder : 배포 라이브버리

## Setting

### install dependencies

```
mkdir client
npx create-react-app . --template=typescript
npm i craco concurrently cross-env @electron/remote wait-on electron-is-dev
npm i -D electron electron-builder
```

> `electron`, `electron-builder` 설치 시 반드시 `devDependencies`로 설치해야 함.
> Package "electron-builder" is only allowed in "devDependencies". Please remove it from the "dependencies" section in your package.json.

### craco setting

```js
/** @path ./craco.config.js */

const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

### update package.json

- React with craro

```json
{
  /* ... */
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  }
  /* ... */
}
```

- Electron

```json
{
  "homepage": "./",
  "main": "public/main.js",
  /* ... */
  "scripts": {
    /* ... */
    "electron": "wait-on tcp:3000 && electron .",
    "electron:start": "concurrently -k \"cross-env BROWSER=none npm run start\" \"npm run electron\"",
    "electron:build": "npm run build && electron-builder -c.extraMetadata.main=build/main.js"
  },
  /* ... */
  "build": {
    "extends": null,
    "appId": "com.example.electron-cra",
    "files": ["dist/**/*", "build/**/*", "package.json"],
    "directories": {
      "buildResources": "assets"
    }
  }
}
```

### electron runner

```js
/** @path ./public/main.js */

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

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```
