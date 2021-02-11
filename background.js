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
  chrome.alarms.clearAll();
  chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm);
    if (alarm.name === "es") {
      chrome.windows.create({
        url: "eyes.html",
        type: "popup",
        height: 500,
        width: 400,
      });
    }
    if (alarm.name === "st") {
      chrome.windows.create({
        url: "stretch.html",
        type: "popup",
        height: 500,
        width: 400,
      });
    }
    if (alarm.name === "walk") {
      chrome.windows.create({
        url: "walk.html",
        type: "popup",
        height: 500,
        width: 400,
      });
    }
    if (alarm.name === "wat") {
      chrome.windows.create({
        url: "water.html",
        type: "popup",
        height: 500,
        width: 400,
      });
    }
  });
  //     "index.html", {
  //     id: "main",
  //     bounds: { width: 620, height: 500 },
  //   });
});

//chrome.windows.create({url: "local.html", type: "popup"});
//chrome.windows.create({url: chrome.extension.getURL("local.html"), type: "popup"});

// chrome.runtime.onStartup is only called when Chrome starts, not when the extension starts.
