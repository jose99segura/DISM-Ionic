const { app, ipcMain, BrowserWindow } = require("electron");
// const Store = require("electron-store");

let appWin;
// const store = new Store();

// if (!store.get("clicks")) {
//     store.set("clicks", 0);
// }

//This function creates the window and its properties.
createWindow = () => {
    appWin = new BrowserWindow({
        width: 360,
        height: 640,
        title: "Angular and Electron",
        resizable: false,
        webPreferences: {
            preload: `${app.getAppPath()}/preload.js`
        }
    });

    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    //appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => app.quit());

/* ipcMain is listening the "message" channel, and when the message arrives,
  it replies with "pong" */
ipcMain.on("message", (event, message) => {
    if (message === "ping") {
        event.reply("reply", "pong");
    }
});
