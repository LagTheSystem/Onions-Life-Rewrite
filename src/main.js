import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";
import loadAssets from "./assets.js";
import {LEVELS, levelConf} from "./levels.js";
var canvasWidth = document.documentElement.clientWidth;
var canvasHeight = document.documentElement.clientHeight;
let deviceMode = null;
    let heightStretch = 0;
    if ((window.matchMedia('(display-mode: fullscreen)').matches || window.navigator.fullscreen) && navigator.userAgent.includes('Android')) {
      // Code for PWA running on Android
      deviceMode = "Android";
      heightStretch = 75;
    } else if ((window.matchMedia('(display-mode: fullscreen)').matches || window.navigator.fullscreen) && navigator.userAgent.includes('CrOS')) {
      // Code for PWA running on Chrome OS
      deviceMode = "ChromeOS";
    } else {
      // Code for non-PWA behavior or other platforms
      deviceMode = "Other";
    }
kaboom({
    background: [153, 204, 255],
    width: canvasWidth,
    height: canvasHeight + heightStretch,
    camScale: [0.5, 0.5],
    font: "apl386",
})

setGravity(1600);
loadAssets();
addLevel(LEVELS[0], levelConf)
