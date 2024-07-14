/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.divide = exports.multiply = exports.subtract = exports.add = void 0;\nconst add_1 = __webpack_require__(/*! ./operations/add */ "./src/operations/add.ts");\nObject.defineProperty(exports, "add", ({ enumerable: true, get: function () { return add_1.add; } }));\nconst subtract_1 = __webpack_require__(/*! ./operations/subtract */ "./src/operations/subtract.ts");\nObject.defineProperty(exports, "subtract", ({ enumerable: true, get: function () { return subtract_1.subtract; } }));\nconst multiply_1 = __webpack_require__(/*! ./operations/multiply */ "./src/operations/multiply.ts");\nObject.defineProperty(exports, "multiply", ({ enumerable: true, get: function () { return multiply_1.multiply; } }));\nconst divide_1 = __webpack_require__(/*! ./operations/divide */ "./src/operations/divide.ts");\nObject.defineProperty(exports, "divide", ({ enumerable: true, get: function () { return divide_1.divide; } }));\n\n\n//# sourceURL=webpack://lint_configuration/./src/index.ts?'
        );

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          "\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nconst num1Input = document.getElementById('num1');\nconst num2Input = document.getElementById('num2');\nconst operationSelect = document.getElementById('operation');\nconst resultDiv = document.getElementById('result');\nconst calculateButton = document.getElementById('calculate');\ncalculateButton.addEventListener('click', () => {\n    const num1 = parseFloat(num1Input.value);\n    const num2 = parseFloat(num2Input.value);\n    const operation = operationSelect.value;\n    let result;\n    switch (operation) {\n        case 'add':\n            result = (0, index_1.add)(num1, num2);\n            break;\n        case 'subtract':\n            result = (0, index_1.subtract)(num1, num2);\n            break;\n        case 'multiply':\n            result = (0, index_1.multiply)(num1, num2);\n            break;\n        case 'divide':\n            result = (0, index_1.divide)(num1, num2);\n            break;\n        default:\n            result = NaN;\n    }\n    resultDiv.textContent = `Result: ${result}`;\n});\n\n\n//# sourceURL=webpack://lint_configuration/./src/main.ts?"
        );

        /***/
      },

    /***/ './src/operations/add.ts':
      /*!*******************************!*\
  !*** ./src/operations/add.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.add = add;\nfunction add(a, b) {\n    return a + b;\n}\n\n\n//# sourceURL=webpack://lint_configuration/./src/operations/add.ts?'
        );

        /***/
      },

    /***/ './src/operations/divide.ts':
      /*!**********************************!*\
  !*** ./src/operations/divide.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.divide = divide;\nfunction divide(a, b) {\n    if (b === 0) {\n        throw new Error(\'Division by zero is not allowed.\');\n    }\n    return a / b;\n}\n\n\n//# sourceURL=webpack://lint_configuration/./src/operations/divide.ts?'
        );

        /***/
      },

    /***/ './src/operations/multiply.ts':
      /*!************************************!*\
  !*** ./src/operations/multiply.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.multiply = multiply;\nfunction multiply(a, b) {\n    return a * b;\n}\n\n\n//# sourceURL=webpack://lint_configuration/./src/operations/multiply.ts?'
        );

        /***/
      },

    /***/ './src/operations/subtract.ts':
      /*!************************************!*\
  !*** ./src/operations/subtract.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.subtract = subtract;\nfunction subtract(a, b) {\n    return a - b;\n}\n\n\n//# sourceURL=webpack://lint_configuration/./src/operations/subtract.ts?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/main.ts');
  /******/
  /******/
})();
