const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 400,
        height: 850,
        minimizable : false,
        maximizable : false,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`,

    })


    win.setResizable(false);
    win.setAlwaysOnTop(true, 'screen');

    win.loadURL(`file://${__dirname}/dist/arabclicks-postback/index.html`)

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function() {
        win = null
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})