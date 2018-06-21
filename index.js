const electron = require('electron');
const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', () => {
    const {userWidth, userHeight} = electron.screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow();
    mainWindow.maximize();
    mainWindow.loadURL('http://localhost:3000');
});