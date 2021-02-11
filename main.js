const createEsWindow = (delay) => {
  console.log("es clicked");
  chrome.alarms.create("es", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.1,
    // delayInMinutes: delay,
    // periodInMinutes: delay,
  });
};

const createWalkWindow = (delay) => {
  console.log("walk clicked");
  chrome.alarms.create("walk", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.1,
    // delayInMinutes: delay,
    // periodInMinutes: delay,
  });
};

const createStWindow = (delay) => {
  console.log("stretch clicked");
  chrome.alarms.create("st", {
    // delayInMinutes: delay,
    // periodInMinutes: delay,
    delayInMinutes: 0.1,
    periodInMinutes: 0.1,
  });
};

const createWaterWindow = (delay) => {
  console.log("water clicked");
  chrome.alarms.create("wat", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.1,
    // delayInMinutes: delay,
    // periodInMinutes: delay,
  });
};

const funcObj = {
  es: createEsWindow,
  st: createStWindow,
  wat: createWaterWindow,
  walk: createWalkWindow,
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.alarms.clearAll();
  // ADD EVENT LISTENERS
  // const es20 = document.querySelector("#es20");
  // es20.addEventListener("click", () => createEsWindow(0.1));
  let health = ["es", "st", "wat", "walk"];
  for (let i = 20; i < 61; i += 20) {
    health.forEach((str) => {
      const node = document.querySelector(`#${str + i}`);
      node.addEventListener("click", () => funcObj[str](i));
    });
  }

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
});
