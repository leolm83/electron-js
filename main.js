const { app, BrowserWindow } = require("electron");

const createWindow = () => {

    const win = new BrowserWindow({
        height: 500,
        width: 800,
    });

    win.loadFile("index.html");

};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })