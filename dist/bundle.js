/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphic.ts":
/*!************************!*\
  !*** ./src/graphic.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Graphic {\n    constructor(rigidBody, color) {\n        this.rigidBody = rigidBody;\n        this.color = color;\n    }\n    render(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.rigidBody.position.x, this.rigidBody.position.y, 10, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    }\n}\nexports[\"default\"] = Graphic;\n\n\n//# sourceURL=webpack://gravity-sim/./src/graphic.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst renderer_1 = __webpack_require__(/*! ./renderer */ \"./src/renderer.ts\");\nconst updater_1 = __webpack_require__(/*! ./updater */ \"./src/updater.ts\");\nconst orbiter_1 = __webpack_require__(/*! ./orbiter */ \"./src/orbiter.ts\");\nclass Simulation {\n    constructor(ctx) {\n        this.updater = new updater_1.default();\n        this.entities = [];\n        this.renderer = new renderer_1.default(ctx);\n    }\n    addEntity(entity) {\n        this.entities.push(entity);\n        this.updater.queue.push(entity.rigidBody);\n        this.renderer.queue.push(entity.graphic);\n    }\n    frameLoop() {\n        this.renderer.cycle();\n        this.updater.cycle();\n        requestAnimationFrame(() => this.frameLoop());\n    }\n    start() {\n        this.frameLoop();\n    }\n}\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\nconst sim = new Simulation(ctx);\nconst orbiters = [];\nfor (let i = 0; i < 10; i++) {\n    const startX = Math.random() * canvas.width;\n    const startY = Math.random() * canvas.height;\n    orbiters.push(new orbiter_1.default(startX, startY, 10, 'orange'));\n}\norbiters.forEach(orbiter => sim.addEntity(orbiter));\nsim.start();\n\n\n//# sourceURL=webpack://gravity-sim/./src/main.ts?");

/***/ }),

/***/ "./src/orbiter.ts":
/*!************************!*\
  !*** ./src/orbiter.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst rigidbody_1 = __webpack_require__(/*! ./rigidbody */ \"./src/rigidbody.ts\");\nconst graphic_1 = __webpack_require__(/*! ./graphic */ \"./src/graphic.ts\");\nclass Orbiter {\n    constructor(x, y, mass, color) {\n        this.rigidBody = new rigidbody_1.default(x, y, mass);\n        this.graphic = new graphic_1.default(this.rigidBody, color);\n    }\n}\nexports[\"default\"] = Orbiter;\n\n\n//# sourceURL=webpack://gravity-sim/./src/orbiter.ts?");

/***/ }),

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Renderer {\n    constructor(ctx) {\n        this.queue = [];\n        this.ctx = ctx;\n        this.resizeCanvas();\n    }\n    cycle() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        for (let i = 0; i < this.queue.length; i++) {\n            this.queue[i].render(this.ctx);\n        }\n    }\n    resizeCanvas() {\n        this.ctx.canvas.width = window.innerWidth;\n        this.ctx.canvas.height = window.innerHeight;\n    }\n}\nexports[\"default\"] = Renderer;\n\n\n//# sourceURL=webpack://gravity-sim/./src/renderer.ts?");

/***/ }),

/***/ "./src/rigidbody.ts":
/*!**************************!*\
  !*** ./src/rigidbody.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vector_1 = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\nfunction randomRange(min, max) {\n    return Math.random() * (max - min) + min;\n}\nclass RigidBody {\n    constructor(x, y, mass) {\n        this.velocity = new vector_1.default(0, 0);\n        this.acceleration = new vector_1.default(0, 0);\n        this.position = new vector_1.default(x, y);\n        this.mass = mass;\n    }\n    applyForce(force) {\n        const a = force.div(this.mass);\n        this.acceleration.add(a);\n    }\n    update() {\n        this.velocity.add(this.acceleration);\n        this.position.add(this.velocity);\n        this.acceleration.setMag(0);\n    }\n}\nexports[\"default\"] = RigidBody;\n\n\n//# sourceURL=webpack://gravity-sim/./src/rigidbody.ts?");

/***/ }),

/***/ "./src/updater.ts":
/*!************************!*\
  !*** ./src/updater.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Updater {\n    constructor() {\n        this.queue = [];\n    }\n    cycle() {\n        for (let i = 0; i < this.queue.length; i++) {\n            this.queue[i].update();\n        }\n    }\n}\nexports[\"default\"] = Updater;\n\n\n//# sourceURL=webpack://gravity-sim/./src/updater.ts?");

/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    getMag() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    normalize() {\n        return this.div(this.getMag());\n    }\n    setMag(mag) {\n        return this.normalize().mul(mag);\n    }\n    limit(max) {\n        if (this.getMag() > max) {\n            return this.setMag(max);\n        }\n        return this;\n    }\n    static add(v1, v2) {\n        return new Vector(v1.x + v2.x, v1.y + v2.y);\n    }\n    add(quantity) {\n        if (typeof quantity === \"number\") {\n            this.x += quantity;\n            this.y += quantity;\n            return this;\n        }\n        this.x += quantity.x;\n        this.y += quantity.y;\n        return this;\n    }\n    static sub(v1, v2) {\n        return new Vector(v1.x - v2.x, v1.y - v2.y);\n    }\n    sub(quantity) {\n        if (typeof quantity === \"number\") {\n            this.x -= quantity;\n            this.y -= quantity;\n            return this;\n        }\n        this.x -= quantity.x;\n        this.y -= quantity.y;\n        return this;\n    }\n    static mul(v1, v2) {\n        return new Vector(v1.x * v2.x, v1.y * v2.y);\n    }\n    mul(quantity) {\n        if (typeof quantity === \"number\") {\n            this.x *= quantity;\n            this.y *= quantity;\n            return this;\n        }\n        this.x *= quantity.x;\n        this.y *= quantity.y;\n        return this;\n    }\n    static div(v1, v2) {\n        return new Vector(v1.x / v2.x, v1.y / v2.y);\n    }\n    div(quantity) {\n        if (typeof quantity === \"number\") {\n            this.x /= quantity;\n            this.y /= quantity;\n            return this;\n        }\n        this.x /= quantity.x;\n        this.y /= quantity.y;\n        return this;\n    }\n}\nexports[\"default\"] = Vector;\n\n\n//# sourceURL=webpack://gravity-sim/./src/vector.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;