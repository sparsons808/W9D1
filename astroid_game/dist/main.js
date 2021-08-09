/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst { inherits, randomVec } = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\ninherits(Asteroid, MovingObject);\n\nfunction Asteroid (pos = [300, 100]) {\n    return new MovingObject ({\n        color: \"magenta\",\n        radius: 10,\n        pos: pos,\n        vel: randomVec(50)\n    });\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\n\r\n\r\n\r\n// Game.DIM_X = 500;\r\n// Game.DIM_Y = 500;\r\n// Game.NUM_ASTEROIDS = 5;\r\n\r\n\r\nfunction Game(ctx) {\r\n    this.asteroids = [];\r\n\r\n    this.DIM_X = 500;\r\n    this.DIM_Y = 500;\r\n    this.NUM_ASTEROIDS = 5;\r\n\r\n    this.addAsteroids();\r\n\r\n    this.draw(ctx);\r\n\r\n}\r\n\r\nGame.prototype.addAsteroids = function() {\r\n    console.log(this.NUM_ASTEROIDS);\r\n    while (this.asteroids.length < this.NUM_ASTEROIDS) {\r\n        console.log(this);\r\n        console.log(this.asteroids);\r\n        let rand = this.randomPosition();\r\n        this.asteroids.push(new Asteroid(rand));\r\n    }\r\n\r\n    console.log(this.asteroids);\r\n}\r\n\r\n\r\nGame.prototype.draw = function(ctx) {\r\n    // ctx.clearRect(0, 0, 500, 500);\r\n\r\n    ctx.fillStyle = \"blue\";\r\n    ctx.fillRect(0, 0, 500, 500);\r\n\r\n    for (let i = 0; i < this.asteroids.length; i++) {\r\n        console.log(this.asteroids[i]);\r\n        this.asteroids[i].draw(ctx);\r\n    }\r\n}\r\n\r\n\r\nGame.prototype.moveObject = function () {\r\n    for (let i = 0; i < this.asteroids.length; i++) {\r\n        this.asteroids[i].move();\r\n        console.log(\"WORK PLS\");\r\n    }\r\n}\r\n\r\n\r\nGame.prototype.randomPosition = function() {\r\n    const pos_x = getRandom();\r\n    const pos_y = getRandom();\r\n\r\n    return [pos_x, pos_y]\r\n}\r\n\r\nfunction getRandom() {\r\n    const min = 1;\r\n    const max = 501;\r\n\r\n    let min1 = Math.round(min);\r\n    let max1 = Math.floor(max);\r\n\r\n    return Math.floor(Math.random() * (max1 - min1) + min1)\r\n}\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("function GameView(ctx) {\r\n\r\n    this.ctx = ctx;\r\n\r\n    this.game = new Game(ctx);\r\n\r\n}\r\n\r\n\r\nGameView.prototype.start = function(ctx) {\r\n    let that = this;\r\n    let c = ctx;\r\n\r\n    setInterval(function () {\r\n        that.game.draw(c);\r\n        that.game.moveObject();\r\n    }, 200);\r\n\r\n}\r\n\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 500;\n    canvas.height = 500;\n\n    const ctx = canvas.getContext('2d');\n\n\n\n    const gv = new GameView(ctx);\n    gv.start(ctx);\n\n\n    // const mo = new MovingObject({\n    //     pos: [100, 100],\n    //     vel: [100, 100],\n    //     radius: 50,\n    //     color: \"#00FF00\"\n    // });\n\n    // const aster = new Asteroid({\n    //     pos: [30, 30]\n    // });\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((module) => {

eval("function MovingObject (obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n};\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1], \n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n  console.log(\"Drew asteroids\");\n}\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n}\n// console.log(mo);\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        const Suragate = function (){};\n        Suragate.prototype = parentClass.prototype;\n        childClass.prototype = new Suragate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n      \n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;