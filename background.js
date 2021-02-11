/**
 * Listens for the app launching then creates the window
 *
 * @see /apps/app.window.html
 */
chrome.runtime.onStartup.addListener(function () {
  // chrome.windows.create({
  //   url: "index.html",
  //   type: "popup",
  //   height: 700,
  //   width: 500,
  // });

  chrome.alarms.create("test Alarm", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.2,
  });

  chrome.alarms.onAlarm.addListener(function (alarm) {
    //   alert("Beep");
    // chrome.windows.create({ url: "index.html", type: "popup" });
  });

  //     "index.html", {
  //     id: "main",
  //     bounds: { width: 620, height: 500 },
  //   });
});

//chrome.windows.create({url: "local.html", type: "popup"});
//chrome.windows.create({url: chrome.extension.getURL("local.html"), type: "popup"});

// chrome.runtime.onStartup is only called when Chrome starts, not when the extension starts.
