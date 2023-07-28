const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  screen.getAllDisplays().forEach((screen) => {
    const screenWindow = new BrowserWindow({
      width: screen.bounds.width,
      height: screen.bounds.height,
      x: screen.bounds.x,
      y: screen.bounds.y,
      alwaysOnTop: true,
      frame: false,
      hasShadow: false,
      hiddenInMissionControl: true,
      movable: false,
      resizable: false,
      roundedCorners: false,
      skipTaskbar: true,
      titleBarStyle: 'hidden',
      transparent: true
    });
    screenWindow.setIgnoreMouseEvents(true)
    // screenWindow.webContents.openDevTools();
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      screenWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
      screenWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }
  })
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
