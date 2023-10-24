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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/SmallTall.png":
/*!*******************************!*\
  !*** ./src/img/SmallTall.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "129fe29cc0e2ad4380f54b71bef375da.png");

/***/ }),

/***/ "./src/img/backfinal.png":
/*!*******************************!*\
  !*** ./src/img/backfinal.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d476adc935eecfb64f62306e2802725b.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteStandRigth.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRigth.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "37b620a1fdc2289492a3a626ade012a4.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_backfinal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/backfinal.png */ "./src/img/backfinal.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_SmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/SmallTall.png */ "./src/img/SmallTall.png");
/* harmony import */ var _img_spriteStandRigth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandRigth.png */ "./src/img/spriteStandRigth.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024; // largura da pagina
canvas.height = 590; // altura da pagina

var gravity = 1.1; //Definiçao da altura do salto
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 10; // decide a velocidade do player
    this.position = {
      x: 100,
      y: 150
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 60;
    this.height = 150;
    this.image = createImage(_img_spriteStandRigth_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.frames = 0;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, 165 * this.frames, 0, 165, 402, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frames++;
      if (this.frames > 20) this.frames = 0;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height >= canvas.height) {
        this.position.y = canvas.height - this.height; // Define a posição no chão
        this.velocity.y = 0; // Zera a velocidade y
      } else {
        this.velocity.y += gravity; // Aplica a gravidade se não estiver no chão
      }
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [new Platform({
  x: platformImage.width * 4 + 100,
  y: 470,
  image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: platformImage.width * 1.6 + 100 + platformImage.width,
  y: 340,
  image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: platformImage.width * 4 + 100,
  y: 470,
  image: createImage(_img_SmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: platformImage.width * 5 + 100 + platformImage.width,
  y: 470,
  image: createImage(_img_SmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: -1,
  y: 470,
  image: platformImage
}), new Platform({
  x: platformImage.width - 3,
  y: 470,
  image: platformImage
}),
//criaçao da plataforma inferior
new Platform({
  x: platformImage.width * 2.1 + 100,
  y: 470,
  image: platformImage
}), new Platform({
  x: platformImage.width * 3.7 + 100,
  y: 465,
  image: platformImage
}), new Platform({
  x: platformImage.width * 4.69 + 100,
  y: 465,
  image: platformImage
}), new Platform({
  x: platformImage.width * 6.5 + 100,
  y: 470,
  image: platformImage
}), new Platform({
  x: platformImage.width * 7.491 + 100,
  y: 470,
  image: platformImage
})];
var genericObject = [new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_img_backfinal_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})
// new GenericObject({
//   x: -1,
//   y: 218,
//   image: createImage(hills)

// })
];

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scroolloffset = 0;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  // corrigir as limitaçoes do mapa

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scroolloffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scroolloffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scroolloffset > 0) {
      scroolloffset = player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed * 0.66;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }
  // platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  // win condition
  if (scroolloffset > platformImage.width * 700 - 2) {
    console.log('you win');
  }
  if (player.position.y > canvas.height) {
    // location.reload()
    console.log('cai e me lasquei!!');
  }
}
animate();
document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 15;
      break;
  }
});
document.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      player.velocity.x = 0;
      break;
    case 87:
      console.log("up");
      player.velocity.y += 6.5;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map