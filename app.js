/*

const mainWindow = new BrowserWindow({
  webPreferences: {
    preload: path.join(app.getAppPath(), 'preload.js')
  }
})


var electron = require('electron')


electron.app.on('ready', function () {
      var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
      mainWindow.loadURL('file://' + __dirname + '/index.html')
    })

//this was commented out separately
electron.app.on('ready', () => {
    mainWindow = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
});
*/

const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {  // this is security concern
      nodeIntegration: true,
      enableRemoteModule: true //have to add that to get pdf to work
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
