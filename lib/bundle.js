/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game__ = __webpack_require__(1);


const canvasEl = document.getElementsByTagName("canvas")[0];

canvasEl.height = 1000;
canvasEl.width = 1000;

new __WEBPACK_IMPORTED_MODULE_0__lib_game__["a" /* default */](
  canvasEl.width,
  canvasEl.height
).start(canvasEl);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lander__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lander___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lander__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surface__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__surface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);





class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = null;
    this.lander = new __WEBPACK_IMPORTED_MODULE_0__lander___default.a(100, 100, 10, "green", 0, 0, 0);
    this.landingColor = null;
    this.gameStatus = null;
  }

  renderBackground(ctx) {
    ctx.save();


    ctx.fillStyle = "black";
    ctx.fillRect(0,0, 800, 800);
    ctx.restore();
  }

  render(ctx) {
    this.renderBackground(ctx);
    // ctx.clearRect(0,0, this.xDim, this.yDim);
    this.lander.render(ctx);
    this.surface.render(ctx);
    this.lander.renderInfo(ctx);
    // this.renderGameStatus(ctx);

  }

  moveLander() {
    this.lander.move();
  }

  changeAccel() {
    this.lander.gravity();
  }

  fireThruster() {
    this.lander.thruster();
  }

  rotateLander(dir) {
    this.lander.landerRotate(dir);
  }



  checkLanding() {
    let padCoords = this.surface.padCoords();
    if (this.lander.centerX >= padCoords[0] && this.lander.centerX <= padCoords[1]
    && this.lander.centerY <= padCoords[2]) {
    }
  }

  renderGameStatus(ctx) {
    // ctx.save();
    // ctx.font="30px Arial";
    // this.fillStyle = "white";
    // ctx.fillText(this.gameStatus, 300, 300);
    // ctx.fill();
    // ctx.restore();


    ctx.save();
    ctx.fillStyle ="white";
    ctx.font = "30px Arial";
    ctx.fillText(this.gameStatus, 300, 300);


    ctx.fill();
    ctx.restore();
    console.log(this.gameStatus);


  }

  start(canvasEl) {

    const ctx = canvasEl.getContext("2d");
    this.surface = new __WEBPACK_IMPORTED_MODULE_1__surface___default.a(ctx);
    key("up", () => {this.fireThruster()});
    key("left", () => {this.rotateLander(1)});
    key("right", () => {this.rotateLander(2)})
    // this.render();

    key("down", () => {
      // let firstthing = ctx.getImageData(this.lander.centerX, this.lander.centerY+11, 2, 2)
      // console.log(firstthing);
      //
      // let thing = ctx.getImageData(105,610, 2, 2);
      // console.log(thing);
      // console.log(thing);
      // console.log(Util.checkRed(thing.data));
      // console.log(Util.checkRed(firstthing.data));
      // this.lander.stop();
      console.log("alsjfsdklfj");
      this.renderGameStatus(ctx);

    });

    const animateCallback = () => {
      var rightHitBox = this.lander.rightHitBox(ctx);
      var leftHitbox = this.lander.leftHitbox(ctx);

      var lowHitBox = this.lander.lowHitbox(ctx);





      if (__WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkRed */](rightHitBox) || __WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkRed */](leftHitbox) || __WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkRed */](lowHitBox)) {
        if (this.lander.velY > 1.2) {
          this.gameStatus = "LANDED TOO HARD GAME OVER";
        }
        else {
          if (!this.gameStatus) {
              this.gameStatus = "GREAT LANDING";
          }

        }
        this.lander.stop();
      } else if (__WEBPACK_IMPORTED_MODULE_2__util__["b" /* checkWhite */](rightHitBox) || __WEBPACK_IMPORTED_MODULE_2__util__["b" /* checkWhite */](leftHitbox) || __WEBPACK_IMPORTED_MODULE_2__util__["b" /* checkWhite */](lowHitBox)) {
        // console.log("you lose");
        this.gameStatus = "GAME OVER";
        this.lander.stop();
      }
      else {
        this.changeAccel();
        this.render(ctx);
        this.moveLander();
        this.checkLanding();

      }
      if (this.gameStatus) {
        this.renderGameStatus(ctx);
      }
      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, exports) {



class Lander {
  constructor(centerX, centerY, radius, color, velX, velY, angle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
    this.fuel = 300;
  }

  thruster() {
    this.velY = this.velY + - (.07) * (Math.cos(this.angle));
    this.velX = this.velX + (.07) * (Math.cos(this.angle - Math.PI/2));
    this.fuel = this.fuel - 1;
  }

  gravity() {
    this.velY = this.velY + .005;
  }

  lowHitbox(ctx) {
    let box = ctx.getImageData(this.centerX, this.centerY + 12, 1, 1).data;
    // if (box[0] !== 0) {
    //   console.log(box[0]);
    // }

    return box;

    // console.log("adsfljafl");
  }

  rightHitBox(ctx) {
    let box = ctx.getImageData(this.centerX + 12, this.centerY, 1, 1).data;
    return box;
    // console.log("asdflkajsf");
  }

  leftHitbox(ctx) {
    let box = ctx.getImageData(this.centerX-12, this.centerY, 1, 1).data;
    return box;
    // console.log("asdflkjasf");
  }

  asdf() {
    console.log("asdfkaljsflk");
  }



  landerRotate(dir) {

    if (dir === 2) {
      this.angle = this.angle+.05;
    }
    if (dir === 1) {
      this.angle = this.angle-.05;
    }

  }

  stop() {

    this.velX = 0;
    this.velY = 0;
  }

  move() {
    let dx = this.velX;
    let dy = this.velY;

    this.centerX = this.centerX + dx;
    this.centerY = this.centerY + dy;
  }

  render(ctx) {
    ctx.save();
    // ctx.translate(this.centerX, this.centerY);
    // ctx.rotate(this.angle);


    ctx.fillStyle = "white";
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, this.angle, Math.PI + this.angle,false);
    ctx.fill();
    ctx.restore();
  }

  renderInfo(ctx) {
    ctx.save();
    ctx.fillStyle ="white";
    ctx.fillText("vertical velocity (m/s): " + Math.round(this.velY *1000) /1000, 100, 100);
    ctx.fillText("fuel level: " + this.fuel, 100, 110);

    ctx.fill();
    ctx.restore();

  }
}

module.exports = Lander;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Surface {
  constructor(ctx) {

  }

  padCoords() {
    return [[100, 200, 600]];
  }

  render(ctx) {


    ctx.save();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(100,600);
    // ctx.moveTo(100,600);
    // pad 1
    // ctx.lineTo(200, 600);
    // ctx.rect(100, 600, 100, 30);

    ctx.moveTo(200,600);
    ctx.lineTo(250, 550);
    ctx.moveTo(250, 550);
    ctx.lineTo(275, 500);
    ctx.moveTo(275,500);
    ctx.lineTo(285, 450);
    ctx.moveTo(285,450);
    ctx.lineTo(300, 400);
    // ctx.moveTo(300,400);
    // pad 2
    // ctx.lineTo(330, 400);

    ctx.moveTo(330,400);
    ctx.lineTo(340,360);
    ctx.moveTo(340,360);
    ctx.lineTo(345, 330);
    ctx.moveTo(345,330);
    ctx.lineTo(365, 290);
    ctx.moveTo(365, 290);
    ctx.lineTo(375, 320);
    ctx.moveTo(375, 320);
    ctx.lineTo(385, 390);
    ctx.moveTo(385, 390);
    ctx.lineTo(390, 465);
    // ctx.moveTo(390, 465);
    // pad 3
    // ctx.lineTo(420, 465);

    ctx.stroke();
    ctx.restore();



    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(100, 600, 100, 30);
    ctx.fillRect(300, 400, 30, 30);
    ctx.fillRect(390, 465, 30, 30);
    ctx.stroke();
    ctx.restore();










  }
}

module.exports = Surface;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const checkRed = (pixelData) => {
  // for (let i = 0; i < pixelData.length; i=i+3) {
  //
  //   if (pixelData[i] === 255) {
  //     console.log(pixelData);
  //     return true;
  //   }
  // }
  if ((pixelData[0] === 255) && (pixelData[3] === 255) && (pixelData[1] === 0) && (pixelData[2] === 0)){
    // console.log(pixelData);
    return true;
  }
  return false;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = checkRed;


const checkWhite = (pixelData) => {
  if ((pixelData[0] === 255) && (pixelData[3] === 255) && (pixelData[1] === 255) && (pixelData[2] === 255)){
    // console.log(pixelData);
    return true;
  }
  return false;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = checkWhite;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map