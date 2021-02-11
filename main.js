const createEsWindow = (delay) => {
  console.log("es clicked");
  chrome.alarms.create("es", {
    delayInMinutes: 0.2,
    periodInMinutes: 0.2,
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

const createTestWindow = (str) => {
  const map = {
    es: "eyes.html",
    st: "stretch.html",
    walk: "walk.html",
    wat: "water.html",
  };
  chrome.windows.create({
    url: `${map[str]}`,
    type: "popup",
    height: 500,
    width: 400,
  });
};

function changeButtonColor() {
  console.log(this);
  this.setAttribute("class", "active");
  // this.style.backgroundColor = "rgb(75, 150, 201)";
  // this.style.color = "rgb(255, 166, 0)";
  // this.style.textShadow = "0 0 2px #000000, 0 0 5px #000000";
  this.innerText = new Date(Date.now() + 20 * 60 * 1000).toLocaleTimeString();
}

document.addEventListener("DOMContentLoaded", () => {
  // chrome.alarms.clearAll();
  // ADD EVENT LISTENERS
  let health = ["es", "st", "wat", "walk"];
  const buttons = [];
  for (let i = 20; i < 61; i += 20) {
    health.forEach((str) => {
      let node = document.querySelector(`#${str + i}`);
      if (i === 20) {
        node.addEventListener("click", () => createTestWindow(str));
      } else {
        node.addEventListener("click", () => funcObj[str](i));
      }
      node.addEventListener("click", changeButtonColor.bind(node));
      buttons.push(node);
    });
  }

  const clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", () => {
    chrome.alarms.clearAll();
    buttons.forEach((btn, i) => {
      btn.removeAttribute("class");
      if (btn.getAttribute("id").includes("20")) btn.innerText = "20 min";
      if (btn.getAttribute("id").includes("40")) btn.innerText = "40 min";
      if (btn.getAttribute("id").includes("60")) btn.innerText = "60 min";
    });
  });

  // chrome.alarms.onAlarm.addListener(function (alarm) {
  //   console.log(alarm);
  //   if (alarm.name === "es") {
  //     chrome.windows.create({
  //       url: "eyes.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "st") {
  //     chrome.windows.create({
  //       url: "stretch.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "walk") {
  //     chrome.windows.create({
  //       url: "walk.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "wat") {
  //     chrome.windows.create({
  //       url: "water.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  // });
});
