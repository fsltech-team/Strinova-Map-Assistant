// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const { autoUpdater } = require("electron-updater")

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 820,
    icon: 'https://strinova.fsltech.cn/favicon.ico' ? 'https://strinova.fsltech.cn/favicon.ico' : 'favicon.ico',
    title: "Strinova Map Assistant",
    frame: true,
    autoHideMenuBar: true,
    devTools: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  autoUpdater.checkForUpdatesAndNotify()
}

autoUpdater.on('checking-for-update', () => {
  console.log('Checking for update...')
})
autoUpdater.on('update-available', (info) => {
  console.log('Update available.')
})
autoUpdater.on('update-not-available', (info) => {
  console.log('Update not available.')
})
autoUpdater.on('error', (err) => {
  console.log('Error in auto-updater. ' + err)
})
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')'
  console.log(log_message)
})
autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded')
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
