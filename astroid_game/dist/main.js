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
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (14:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|         vel:         \\n| \\n>     })\\n|     \\n| \");\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 500;\n    canvas.height = 500;\n\n    const ctx = canvas.getContext('2d');\n\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(0, 0, 500, 500);\n\n\n    const mo = new MovingObject({\n        pos: [100, 100],\n        vel: [100, 100],\n        radius: 50,\n        color: \"#00FF00\"\n    });\n\n    mo.draw(ctx);\n\n    // setTimeout ( function () {\n    //     console.log(\"hello\")\n    //     mo.move();\n    //     mo.color = 'magenta'\n    //     mo.draw(ctx);\n\n    // }, 1000)\n    console.log(mo);\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((module) => {

eval("function MovingObject (obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n};\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1], \n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n}\n// console.log(mo);\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/movingObject.js?");

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