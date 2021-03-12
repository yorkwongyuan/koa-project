/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_mailConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/mailConfig */ \"./src/config/mailConfig.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    const {\n      body\n    } = ctx.request;\n\n    try {\n      const result = await (0,_config_mailConfig__WEBPACK_IMPORTED_MODULE_0__.default)({\n        code: '1234',\n        expire: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),\n        // email: '282311878@qq.com',\n        email: body.username,\n        user: 'wangy'\n      });\n      ctx.body = {\n        code: 200,\n        data: result,\n        msg: '邮件发送成功'\n      };\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  login(ctx) {\n    // 放在payload中\n    // const token = jsonwebtoken.sign({_id: 'york', exp: Math.floor(Date.now()/1000) + 24*60*60}, config.JWT_SECRET)\n    // 放在options中\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n      _id: 'york'\n    }, _config_index__WEBPACK_IMPORTED_MODULE_3__.default.JWT_SECRET, {\n      expiresIn: '1h'\n    });\n    ctx.body = {\n      code: 200,\n      data: token,\n      msg: '邮件发送成功'\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzPzk1MDciXSwibmFtZXMiOlsiTG9naW5Db250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJmb3JnZXQiLCJjdHgiLCJib2R5IiwicmVxdWVzdCIsInJlc3VsdCIsInNlbmQiLCJjb2RlIiwiZXhwaXJlIiwibW9ubWVudCIsImFkZCIsImZvcm1hdCIsImVtYWlsIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGF0YSIsIm1zZyIsImUiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJ0b2tlbiIsImpzb253ZWJ0b2tlbiIsIl9pZCIsImNvbmZpZyIsImV4cGlyZXNJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGVBQU4sQ0FBc0I7QUFDcEJDLGFBQVcsR0FBRyxDQUFFOztBQUNKLFFBQU5DLE1BQU0sQ0FBRUMsR0FBRixFQUFPO0FBQ2pCLFVBQU07QUFBRUM7QUFBRixRQUFXRCxHQUFHLENBQUNFLE9BQXJCOztBQUNBLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsMkRBQUksQ0FBQztBQUN4QkMsWUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxjQUFNLEVBQUVDLDZDQUFPLEdBQUdDLEdBQVYsQ0FBYyxFQUFkLEVBQWtCLFNBQWxCLEVBQTZCQyxNQUE3QixDQUFvQyxxQkFBcEMsQ0FGZ0I7QUFHeEI7QUFDQUMsYUFBSyxFQUFFVCxJQUFJLENBQUNVLFFBSlk7QUFLeEJDLFlBQUksRUFBRTtBQUxrQixPQUFELENBQXpCO0FBT0FaLFNBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1RJLFlBQUksRUFBRSxHQURHO0FBRVRRLFlBQUksRUFBRVYsTUFGRztBQUdUVyxXQUFHLEVBQUU7QUFISSxPQUFYO0FBS0QsS0FiRCxDQWFFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0RHLE9BQUssQ0FBRWxCLEdBQUYsRUFBTztBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQU1tQixLQUFLLEdBQUdDLHdEQUFBLENBQWtCO0FBQUNDLFNBQUcsRUFBRTtBQUFOLEtBQWxCLEVBQWlDQyw2REFBakMsRUFBb0Q7QUFDaEVDLGVBQVMsRUFBRTtBQURxRCxLQUFwRCxDQUFkO0FBR0F2QixPQUFHLENBQUNDLElBQUosR0FBVztBQUNUSSxVQUFJLEVBQUUsR0FERztBQUVUUSxVQUFJLEVBQUVNLEtBRkc7QUFHVEwsU0FBRyxFQUFFO0FBSEksS0FBWDtBQUtEOztBQWpDbUI7O0FBb0N0QixpRUFBZSxJQUFJakIsZUFBSixFQUFmIiwiZmlsZSI6Ii4vc3JjL2FwaS9Mb2dpbkNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZCBmcm9tICcuLi9jb25maWcvbWFpbENvbmZpZydcbmltcG9ydCBtb25tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBqc29ud2VidG9rZW4gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXgnXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGFzeW5jIGZvcmdldCAoY3R4KSB7XG4gICAgY29uc3QgeyBib2R5IH0gPSBjdHgucmVxdWVzdFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kKHtcbiAgICAgICAgY29kZTogJzEyMzQnLFxuICAgICAgICBleHBpcmU6IG1vbm1lbnQoKS5hZGQoMzAsICdtaW51dGVzJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXG4gICAgICAgIC8vIGVtYWlsOiAnMjgyMzExODc4QHFxLmNvbScsXG4gICAgICAgIGVtYWlsOiBib2R5LnVzZXJuYW1lLFxuICAgICAgICB1c2VyOiAnd2FuZ3knXG4gICAgICB9KVxuICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBtc2c6ICfpgq7ku7blj5HpgIHmiJDlip8nXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgbG9naW4gKGN0eCkge1xuICAgIC8vIOaUvuWcqHBheWxvYWTkuK1cbiAgICAvLyBjb25zdCB0b2tlbiA9IGpzb253ZWJ0b2tlbi5zaWduKHtfaWQ6ICd5b3JrJywgZXhwOiBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCkgKyAyNCo2MCo2MH0sIGNvbmZpZy5KV1RfU0VDUkVUKVxuICAgIC8vIOaUvuWcqG9wdGlvbnPkuK1cbiAgICBjb25zdCB0b2tlbiA9IGpzb253ZWJ0b2tlbi5zaWduKHtfaWQ6ICd5b3JrJ30sIGNvbmZpZy5KV1RfU0VDUkVULCB7XG4gICAgICBleHBpcmVzSW46ICcxaCdcbiAgICB9KVxuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgZGF0YTogdG9rZW4sXG4gICAgICBtc2c6ICfpgq7ku7blj5HpgIHmiJDlip8nXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dpbkNvbnRyb2xsZXIoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/svgCaptchaController.js":
/*!*****************************************!*\
  !*** ./src/api/svgCaptchaController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PublicController {\n  constructor() {}\n\n  getCaptcha(ctx) {\n    const newCaptcha = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default().create({\n      size: 6,\n      // 验证码位数\n      ignoreChars: 'io0l',\n      // 不显示的几个字母或者数字\n      color: true,\n      // 字体有眼色\n      noise: Math.floor(Math.random() * 5),\n      // 干扰线条数\n      width: 150,\n      // 宽度\n      height: 50 // 高度\n\n    });\n    console.log(newCaptcha.text);\n    ctx.body = {\n      \"code\": 200,\n      \"message\": newCaptcha.data\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9hcGkvc3ZnQ2FwdGNoYUNvbnRyb2xsZXIuanM/MjY1ZiJdLCJuYW1lcyI6WyJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJnZXRDYXB0Y2hhIiwiY3R4IiwibmV3Q2FwdGNoYSIsInN2Z0NhcHRjaGEiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImJvZHkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxnQkFBTixDQUF1QjtBQUNyQkMsYUFBVyxHQUFHLENBRWI7O0FBQ0RDLFlBQVUsQ0FBRUMsR0FBRixFQUFPO0FBQ2YsVUFBTUMsVUFBVSxHQUFHQyx5REFBQSxDQUFrQjtBQUNuQ0MsVUFBSSxFQUFFLENBRDZCO0FBQzFCO0FBQ1RDLGlCQUFXLEVBQUUsTUFGc0I7QUFFZDtBQUNyQkMsV0FBSyxFQUFFLElBSDRCO0FBR3RCO0FBQ2JDLFdBQUssRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUo0QjtBQUlHO0FBQ3RDQyxXQUFLLEVBQUUsR0FMNEI7QUFLdkI7QUFDWkMsWUFBTSxFQUFFLEVBTjJCLENBTXZCOztBQU51QixLQUFsQixDQUFuQjtBQVFBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosVUFBVSxDQUFDYSxJQUF2QjtBQUNBZCxPQUFHLENBQUNlLElBQUosR0FBVztBQUNULGNBQVEsR0FEQztBQUVULGlCQUFXZCxVQUFVLENBQUNlO0FBRmIsS0FBWDtBQUlEOztBQWxCb0I7O0FBcUJ2QixpRUFBZSxJQUFJbkIsZ0JBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvc3ZnQ2FwdGNoYUNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3ZnQ2FwdGNoYSBmcm9tICdzdmctY2FwdGNoYSdcbmNsYXNzIFB1YmxpY0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIGdldENhcHRjaGEgKGN0eCkge1xuICAgIGNvbnN0IG5ld0NhcHRjaGEgPSBzdmdDYXB0Y2hhLmNyZWF0ZSh7XG4gICAgICBzaXplOiA2LCAvLyDpqozor4HnoIHkvY3mlbBcbiAgICAgIGlnbm9yZUNoYXJzOiAnaW8wbCcsIC8vIOS4jeaYvuekuueahOWHoOS4quWtl+avjeaIluiAheaVsOWtl1xuICAgICAgY29sb3I6IHRydWUsIC8vIOWtl+S9k+acieecvOiJslxuICAgICAgbm9pc2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpLCAvLyDlubLmibDnur/mnaHmlbBcbiAgICAgIHdpZHRoOiAxNTAsIC8vIOWuveW6plxuICAgICAgaGVpZ2h0OiA1MCAgLy8g6auY5bqmXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhuZXdDYXB0Y2hhLnRleHQpXG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICBcImNvZGVcIjogMjAwLFxuICAgICAgXCJtZXNzYWdlXCI6IG5ld0NhcHRjaGEuZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHVibGljQ29udHJvbGxlcigpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/svgCaptchaController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandler.js":
/*!************************************!*\
  !*** ./src/common/ErrorHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'token无效'\n      };\n    } else {\n      throw err;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb21tb24vRXJyb3JIYW5kbGVyLmpzPzhlMTciXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsImNhdGNoIiwiZXJyIiwic3RhdHVzIiwiYm9keSIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDQSxHQUFELEVBQU1DLElBQU4sS0FBZTtBQUM1QixTQUFPQSxJQUFJLEdBQUdDLEtBQVAsQ0FBY0MsR0FBRCxJQUFTO0FBQzNCLFFBQUksT0FBT0EsR0FBRyxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCSixTQUFHLENBQUNJLE1BQUosR0FBYSxHQUFiO0FBQ0FKLFNBQUcsQ0FBQ0ssSUFBSixHQUFXO0FBQ1RDLFlBQUksRUFBRSxHQURHO0FBRVRDLFdBQUcsRUFBRTtBQUZJLE9BQVg7QUFJRCxLQU5ELE1BTU87QUFDTCxZQUFNSixHQUFOO0FBQ0Q7QUFDRixHQVZNLENBQVA7QUFXRCxDQVpEIiwiZmlsZSI6Ii4vc3JjL2NvbW1vbi9FcnJvckhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoY3R4LCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0KCkuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmICg0MDEgPT0gZXJyLnN0YXR1cykge1xuICAgICAgY3R4LnN0YXR1cyA9IDQwMTtcbiAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICBjb2RlOiA0MDEsXG4gICAgICAgIG1zZzogJ3Rva2Vu5peg5pWIJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/ErrorHandler.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DB_URL = 'mongodb://test:123456@106.55.51.93:27017/testdb';\nconst REDIS = {\n  host: '106.55.51.93',\n  port: '15001',\n  password: 123456\n};\nconst JWT_SECRET = '12312123123';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  DB_URL,\n  REDIS,\n  JWT_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb25maWcvaW5kZXguanM/ZjEyMSJdLCJuYW1lcyI6WyJEQl9VUkwiLCJSRURJUyIsImhvc3QiLCJwb3J0IiwicGFzc3dvcmQiLCJKV1RfU0VDUkVUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHLGlEQUFmO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLE1BQUksRUFBRSxjQURNO0FBRVpDLE1BQUksRUFBRSxPQUZNO0FBR1pDLFVBQVEsRUFBRTtBQUhFLENBQWQ7QUFNQSxNQUFNQyxVQUFVLEdBQUcsYUFBbkI7QUFDQSxpRUFBZTtBQUNiTCxRQURhO0FBRWJDLE9BRmE7QUFHYkk7QUFIYSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERCX1VSTCA9ICdtb25nb2RiOi8vdGVzdDoxMjM0NTZAMTA2LjU1LjUxLjkzOjI3MDE3L3Rlc3RkYidcbmNvbnN0IFJFRElTID0ge1xuICBob3N0OiAnMTA2LjU1LjUxLjkzJyxcbiAgcG9ydDogJzE1MDAxJyxcbiAgcGFzc3dvcmQ6IDEyMzQ1Nixcbn1cblxuY29uc3QgSldUX1NFQ1JFVCA9ICcxMjMxMjEyMzEyMydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgREJfVVJMLFxuICBSRURJUyxcbiAgSldUX1NFQ1JFVFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/config/mailConfig.js":
/*!**********************************!*\
  !*** ./src/config/mailConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sendInfo = {\n  code: '1234',\n  expire: '2019-1-1',\n  // email: '282311878@qq.com',\n  email: '631824375@qq.com',\n  user: 'wangy'\n};\nconst url = 'http://www.baidu.com'; // async..await is not allowed in global scope, must use a wrapper\n\nasync function send(sendInfo) {\n  // 邮件打开时候看到的样式\n  let html = `<div style=\"border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;\">\n  <div style=\"height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;\">测试社区</div>\n  <div style=\"padding: 25px\">\n    <div>您好，${sendInfo.user}大佬，重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>\n    <a href=\"${url}\" style=\"padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;\">立即重置密码</a>\n    <div style=\"padding: 5px; background: #f2f2f2;\">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>\n  </div>\n  <div style=\"background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;\">系统邮件，请勿直接回复</div>\n  </div>`; // Generate test SMTP service account from ethereal.email\n  // Only needed if you don't have a real mail account for testing\n  // let testAccount = await nodemailer.createTestAccount();\n  // eleimkbqejeabffg // 授权码\n  // create reusable transporter object using the default SMTP transport\n\n  let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: \"smtp.qq.com\",\n    port: 587,\n    secure: false,\n    // true for 465, false for other ports\n    auth: {\n      user: 'codersmail@qq.com',\n      // generated ethereal user\n      pass: 'eleimkbqejeabffg' // generated ethereal password\n\n    }\n  }); // send mail with defined transport object\n\n  let info = await transporter.sendMail({\n    from: '\"账号测试\" <codersmail@qq.com>',\n    // sender address\n    to: sendInfo.email,\n    // list of receivers\n    subject: sendInfo.user === '' ? '实践课程的注册码' : `你好,${sendInfo.user},这是实践课程的注册码`,\n    // Subject line\n    text: `您在实践课程中的注册码是${sendInfo.code}`,\n    // plain text body\n    html: html // html body\n\n  });\n  return \"Message sent: %s\", info.messageId; // console.log(\"Message sent: %s\", info.messageId);\n  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n  // Preview only available when sending through an Ethereal account\n  // console.log(\"Preview URL: %s\", nodemailer.getTestMessageUrl(info));\n  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n} // main().catch(console.error);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb25maWcvbWFpbENvbmZpZy5qcz9lM2ZkIl0sIm5hbWVzIjpbInNlbmRJbmZvIiwiY29kZSIsImV4cGlyZSIsImVtYWlsIiwidXNlciIsInVybCIsInNlbmQiLCJodG1sIiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwicGFzcyIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwibWVzc2FnZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdBLE1BQU1BLFFBQVEsR0FBRztBQUNmQyxNQUFJLEVBQUUsTUFEUztBQUVmQyxRQUFNLEVBQUUsVUFGTztBQUdmO0FBQ0FDLE9BQUssRUFBRSxrQkFKUTtBQUtmQyxNQUFJLEVBQUU7QUFMUyxDQUFqQjtBQU9BLE1BQU1DLEdBQUcsR0FBRyxzQkFBWixDLENBQ0E7O0FBQ0EsZUFBZUMsSUFBZixDQUFvQk4sUUFBcEIsRUFBOEI7QUFFNUI7QUFDQSxNQUFJTyxJQUFJLEdBQUk7QUFDZDtBQUNBO0FBQ0EsY0FBY1AsUUFBUSxDQUFDSSxJQUFLLHFCQUFvQkosUUFBUSxDQUFDRSxNQUFPO0FBQ2hFLGVBQWVHLEdBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsU0FSRSxDQUg0QixDQVk1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUlHLFdBQVcsR0FBR0MsaUVBQUEsQ0FBMkI7QUFDM0NDLFFBQUksRUFBRSxhQURxQztBQUUzQ0MsUUFBSSxFQUFFLEdBRnFDO0FBRzNDQyxVQUFNLEVBQUUsS0FIbUM7QUFHNUI7QUFDZkMsUUFBSSxFQUFFO0FBQ0pULFVBQUksRUFBRSxtQkFERjtBQUN1QjtBQUMzQlUsVUFBSSxFQUFFLGtCQUZGLENBRXNCOztBQUZ0QjtBQUpxQyxHQUEzQixDQUFsQixDQWpCNEIsQ0EyQjVCOztBQUNBLE1BQUlDLElBQUksR0FBRyxNQUFNUCxXQUFXLENBQUNRLFFBQVosQ0FBcUI7QUFDcENDLFFBQUksRUFBRSw0QkFEOEI7QUFDQTtBQUNwQ0MsTUFBRSxFQUFFbEIsUUFBUSxDQUFDRyxLQUZ1QjtBQUVoQjtBQUNwQmdCLFdBQU8sRUFBRW5CLFFBQVEsQ0FBQ0ksSUFBVCxLQUFrQixFQUFsQixHQUF1QixVQUF2QixHQUFxQyxNQUFLSixRQUFRLENBQUNJLElBQUssYUFIN0I7QUFHMkM7QUFDL0VnQixRQUFJLEVBQUcsZUFBY3BCLFFBQVEsQ0FBQ0MsSUFBSyxFQUpDO0FBSUU7QUFDdENNLFFBQUksRUFBRUEsSUFMOEIsQ0FLeEI7O0FBTHdCLEdBQXJCLENBQWpCO0FBT0EsU0FBTyxvQkFBb0JRLElBQUksQ0FBQ00sU0FBaEMsQ0FuQzRCLENBb0M1QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0QsQyxDQUVEOzs7QUFDQSxpRUFBZWYsSUFBZiIsImZpbGUiOiIuL3NyYy9jb25maWcvbWFpbENvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCJcblxuXG5jb25zdCBzZW5kSW5mbyA9IHtcbiAgY29kZTogJzEyMzQnLFxuICBleHBpcmU6ICcyMDE5LTEtMScsXG4gIC8vIGVtYWlsOiAnMjgyMzExODc4QHFxLmNvbScsXG4gIGVtYWlsOiAnNjMxODI0Mzc1QHFxLmNvbScsXG4gIHVzZXI6ICd3YW5neSdcbn1cbmNvbnN0IHVybCA9ICdodHRwOi8vd3d3LmJhaWR1LmNvbSdcbi8vIGFzeW5jLi5hd2FpdCBpcyBub3QgYWxsb3dlZCBpbiBnbG9iYWwgc2NvcGUsIG11c3QgdXNlIGEgd3JhcHBlclxuYXN5bmMgZnVuY3Rpb24gc2VuZChzZW5kSW5mbykge1xuICBcbiAgLy8g6YKu5Lu25omT5byA5pe25YCZ55yL5Yiw55qE5qC35byPXG4gIGxldCBodG1sID0gYDxkaXYgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO2NvbG9yOiAjNjc2NzY3O3dpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmctYm90dG9tOiA1MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgPGRpdiBzdHlsZT1cImhlaWdodDogNjBweDsgYmFja2dyb3VuZDogIzM5M2Q0OTsgbGluZS1oZWlnaHQ6IDYwcHg7IGNvbG9yOiAjNThhMzZmOyBmb250LXNpemU6IDE4cHg7cGFkZGluZy1sZWZ0OiAxMHB4O1wiPua1i+ivleekvuWMujwvZGl2PlxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjVweFwiPlxuICAgIDxkaXY+5oKo5aW977yMJHtzZW5kSW5mby51c2VyfeWkp+S9rO+8jOmHjee9rumTvuaOpeacieaViOaXtumXtDMw5YiG6ZKf77yM6K+35ZyoJHtzZW5kSW5mby5leHBpcmV95LmL5YmN6YeN572u5oKo55qE5a+G56CB77yaPC9kaXY+XG4gICAgPGEgaHJlZj1cIiR7dXJsfVwiIHN0eWxlPVwicGFkZGluZzogMTBweCAyMHB4OyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwOWU5NDsgZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbjogMTVweCAwO1wiPueri+WNs+mHjee9ruWvhueggTwvYT5cbiAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogNXB4OyBiYWNrZ3JvdW5kOiAjZjJmMmYyO1wiPuWmguaenOivpemCruS7tuS4jeaYr+eUseS9oOacrOS6uuaTjeS9nO+8jOivt+WLv+i/m+ihjOa/gOa0u++8geWQpuWImeS9oOeahOmCrueuseWwhuS8muiiq+S7luS6uue7keWumuOAgjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjYjRiNGI0O3RleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDQ1cHg7IGhlaWdodDogNDVweDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyBib3R0b206IDA7d2lkdGg6IDEwMCU7XCI+57O757uf6YKu5Lu277yM6K+35Yu/55u05o6l5Zue5aSNPC9kaXY+XG4gIDwvZGl2PmBcbiAgLy8gR2VuZXJhdGUgdGVzdCBTTVRQIHNlcnZpY2UgYWNjb3VudCBmcm9tIGV0aGVyZWFsLmVtYWlsXG4gIC8vIE9ubHkgbmVlZGVkIGlmIHlvdSBkb24ndCBoYXZlIGEgcmVhbCBtYWlsIGFjY291bnQgZm9yIHRlc3RpbmdcbiAgLy8gbGV0IHRlc3RBY2NvdW50ID0gYXdhaXQgbm9kZW1haWxlci5jcmVhdGVUZXN0QWNjb3VudCgpO1xuICAvLyBlbGVpbWticWVqZWFiZmZnIC8vIOaOiOadg+eggVxuICAvLyBjcmVhdGUgcmV1c2FibGUgdHJhbnNwb3J0ZXIgb2JqZWN0IHVzaW5nIHRoZSBkZWZhdWx0IFNNVFAgdHJhbnNwb3J0XG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBob3N0OiBcInNtdHAucXEuY29tXCIsXG4gICAgcG9ydDogNTg3LFxuICAgIHNlY3VyZTogZmFsc2UsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogJ2NvZGVyc21haWxAcXEuY29tJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcbiAgICAgIHBhc3M6ICdlbGVpbWticWVqZWFiZmZnJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gc2VuZCBtYWlsIHdpdGggZGVmaW5lZCB0cmFuc3BvcnQgb2JqZWN0XG4gIGxldCBpbmZvID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgIGZyb206ICdcIui0puWPt+a1i+ivlVwiIDxjb2RlcnNtYWlsQHFxLmNvbT4nLCAvLyBzZW5kZXIgYWRkcmVzc1xuICAgIHRvOiBzZW5kSW5mby5lbWFpbCwgLy8gbGlzdCBvZiByZWNlaXZlcnNcbiAgICBzdWJqZWN0OiBzZW5kSW5mby51c2VyID09PSAnJyA/ICflrp7ot7Xor77nqIvnmoTms6jlhoznoIEnIDogYOS9oOWlvSwke3NlbmRJbmZvLnVzZXJ9LOi/meaYr+Wunui3teivvueoi+eahOazqOWGjOeggWAsIC8vIFN1YmplY3QgbGluZVxuICAgIHRleHQ6IGDmgqjlnKjlrp7ot7Xor77nqIvkuK3nmoTms6jlhoznoIHmmK8ke3NlbmRJbmZvLmNvZGV9YCwgLy8gcGxhaW4gdGV4dCBib2R5XG4gICAgaHRtbDogaHRtbCwgLy8gaHRtbCBib2R5XG4gIH0pO1xuICByZXR1cm4gXCJNZXNzYWdlIHNlbnQ6ICVzXCIsIGluZm8ubWVzc2FnZUlkXG4gIC8vIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50OiAlc1wiLCBpbmZvLm1lc3NhZ2VJZCk7XG4gIC8vIE1lc3NhZ2Ugc2VudDogPGI2NThmOGNhLTYyOTYtY2NmNC04MzA2LTg3ZDU3YTBiNDMyMUBleGFtcGxlLmNvbT5cblxuICAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcbiAgLy8gY29uc29sZS5sb2coXCJQcmV2aWV3IFVSTDogJXNcIiwgbm9kZW1haWxlci5nZXRUZXN0TWVzc2FnZVVybChpbmZvKSk7XG4gIC8vIFByZXZpZXcgVVJMOiBodHRwczovL2V0aGVyZWFsLmVtYWlsL21lc3NhZ2UvV2FRS01nS2RkeFFEb291Li4uXG59XG5cbi8vIG1haW4oKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbmV4cG9ydCBkZWZhdWx0IHNlbmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/mailConfig.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/ErrorHandler */ \"./src/common/ErrorHandler.js\");\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new Koa();\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_9___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_10__.default.JWT_SECRET\n}).unless({\n  path: [/^\\/public/]\n});\nconst middleWare = koa_compose__WEBPACK_IMPORTED_MODULE_8___default()([koa_body__WEBPACK_IMPORTED_MODULE_5___default()(), koa_json__WEBPACK_IMPORTED_MODULE_4___default()({\n  pretty: true,\n  param: 'pretty'\n}), _koa_cors__WEBPACK_IMPORTED_MODULE_3___default()(), koa_static__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '../public')), koa_helmet__WEBPACK_IMPORTED_MODULE_1___default()(), _common_ErrorHandler__WEBPACK_IMPORTED_MODULE_11__.default, jwt]);\nconst isDevMode =  false ? 0 : true;\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_6___default()());\n}\n\napp.use(middleWare);\napp.use((0,_routes_routes__WEBPACK_IMPORTED_MODULE_7__.default)());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbIktvYSIsInJlcXVpcmUiLCJhcHAiLCJqd3QiLCJKV1QiLCJzZWNyZXQiLCJjb25maWciLCJKV1RfU0VDUkVUIiwidW5sZXNzIiwicGF0aCIsIm1pZGRsZVdhcmUiLCJjb21wb3NlIiwiYm9keSIsImpzb24iLCJwcmV0dHkiLCJwYXJhbSIsImNvcnMiLCJzdGF0aWNzIiwiX19kaXJuYW1lIiwiaGVsbWV0IiwiRXJyb3JIYW5kbGVyIiwiaXNEZXZNb2RlIiwicHJvY2VzcyIsInVzZSIsImNvbXByZXNzIiwicm91dGVycyIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUYsR0FBSixFQUFaO0FBRUEsTUFBTUcsR0FBRyxHQUFHQyw4Q0FBRyxDQUFDO0FBQUNDLFFBQU0sRUFBRUMsOERBQWlCQztBQUExQixDQUFELENBQUgsQ0FBaUNDLE1BQWpDLENBQXdDO0FBQUNDLE1BQUksRUFBRSxDQUFDLFdBQUQ7QUFBUCxDQUF4QyxDQUFaO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxrREFBTyxDQUFDLENBQ3pCQywrQ0FBSSxFQURxQixFQUV6QkMsK0NBQUksQ0FBQztBQUFDQyxRQUFNLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FBRCxDQUZxQixFQUd6QkMsZ0RBQUksRUFIcUIsRUFJekJDLGlEQUFPLENBQUNSLGdEQUFBLENBQVVTLFNBQVYsRUFBcUIsV0FBckIsQ0FBRCxDQUprQixFQUt6QkMsaURBQU0sRUFMbUIsRUFNekJDLDBEQU55QixFQU96QmpCLEdBUHlCLENBQUQsQ0FBMUI7QUFVQSxNQUFNa0IsU0FBUyxHQUFHQyxNQUFBLEdBQXdDLENBQXhDLEdBQWdELElBQWxFOztBQUNBLElBQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkbkIsS0FBRyxDQUFDcUIsR0FBSixDQUFRQyxtREFBUSxFQUFoQjtBQUNEOztBQUNEdEIsR0FBRyxDQUFDcUIsR0FBSixDQUFRYixVQUFSO0FBQ0FSLEdBQUcsQ0FBQ3FCLEdBQUosQ0FBUUUsdURBQU8sRUFBZjtBQUVBdkIsR0FBRyxDQUFDd0IsTUFBSixDQUFXLElBQVgiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKCdrb2EnKVxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCdcbmltcG9ydCBzdGF0aWNzIGZyb20gJ2tvYS1zdGF0aWMnXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnXG5pbXBvcnQganNvbiBmcm9tICdrb2EtanNvbidcbmltcG9ydCBib2R5IGZyb20gJ2tvYS1ib2R5J1xuaW1wb3J0IGNvbXByZXNzIGZyb20gJ2tvYS1jb21wcmVzcydcbmltcG9ydCByb3V0ZXJzIGZyb20gJy4vcm91dGVzL3JvdXRlcydcbmltcG9ydCBjb21wb3NlIGZyb20gJ2tvYS1jb21wb3NlJ1xuaW1wb3J0IEpXVCBmcm9tICdrb2Etand0J1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9pbmRleCdcbmltcG9ydCBFcnJvckhhbmRsZXIgZnJvbSAnLi9jb21tb24vRXJyb3JIYW5kbGVyJ1xuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5cbmNvbnN0IGp3dCA9IEpXVCh7c2VjcmV0OiBjb25maWcuSldUX1NFQ1JFVH0pLnVubGVzcyh7cGF0aDogWy9eXFwvcHVibGljL119KVxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoW1xuICBib2R5KCksXG4gIGpzb24oe3ByZXR0eTogdHJ1ZSwgcGFyYW06ICdwcmV0dHknfSksXG4gIGNvcnMoKSxcbiAgc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpLFxuICBoZWxtZXQoKSxcbiAgRXJyb3JIYW5kbGVyLFxuICBqd3Rcbl0pXG5cbmNvbnN0IGlzRGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBmYWxzZSA6IHRydWVcbmlmICghaXNEZXZNb2RlKSB7XG4gIGFwcC51c2UoY29tcHJlc3MoKSlcbn1cbmFwcC51c2UobWlkZGxlV2FyZSlcbmFwcC51c2Uocm91dGVycygpKVxuXG5hcHAubGlzdGVuKDMwMDApIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/loginController', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.forget);\nrouter.get('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanM/M2RkMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJwcmVmaXgiLCJwb3N0IiwiTG9naW5Db250cm9sbGVyIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixFQUFmO0FBRUFELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQ7QUFDQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksa0JBQVosRUFBZ0NDLGdFQUFoQztBQUNBSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxRQUFYLEVBQXFCRCwrREFBckI7QUFDQSxpRUFBZUosTUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5pbXBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gJy4uL2FwaS9Mb2dpbkNvbnRyb2xsZXInXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXG5yb3V0ZXIucHJlZml4KCcvbG9naW4nKVxucm91dGVyLnBvc3QoJy9sb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIuZm9yZ2V0KVxucm91dGVyLmdldCgnL2xvZ2luJywgTG9naW5Db250cm9sbGVyLmxvZ2luKVxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/publicRouter.js":
/*!************************************!*\
  !*** ./src/routes/publicRouter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_svgCaptchaController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/svgCaptchaController */ \"./src/api/svgCaptchaController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/public');\nrouter.get('/getCaptcha', _api_svgCaptchaController__WEBPACK_IMPORTED_MODULE_1__.default.getCaptcha);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9yb3V0ZXMvcHVibGljUm91dGVyLmpzP2QzYzUiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwiZ2V0IiwicHVibGljQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsbURBQUosRUFBZjtBQUVBRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxTQUFkO0FBQ0FGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLGFBQVgsRUFBeUJDLHlFQUF6QjtBQUNBLGlFQUFlSixNQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9wdWJsaWNSb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5pbXBvcnQgcHVibGljQ29udHJvbGxlciBmcm9tICcuLi9hcGkvc3ZnQ2FwdGNoYUNvbnRyb2xsZXInXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXG5yb3V0ZXIucHJlZml4KCcvcHVibGljJylcbnJvdXRlci5nZXQoJy9nZXRDYXB0Y2hhJyxwdWJsaWNDb250cm9sbGVyLmdldENhcHRjaGEpXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/publicRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _publicRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicRouter */ \"./src/routes/publicRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n\n\n\nconst router = koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_publicRouter__WEBPACK_IMPORTED_MODULE_1__.default, _loginRouter__WEBPACK_IMPORTED_MODULE_2__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwibmFtZXMiOlsicm91dGVyIiwiY29tYmluZVJvdXRlciIsInB1YmxpY1JvdXRlciIsImxvZ2luUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsMERBQWEsQ0FBQ0Msa0RBQUQsRUFBZUMsaURBQWYsQ0FBNUI7QUFFQSxpRUFBZUgsTUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXIgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycydcbmltcG9ydCBwdWJsaWNSb3V0ZXIgZnJvbSAnLi9wdWJsaWNSb3V0ZXInXG5pbXBvcnQgbG9naW5Sb3V0ZXIgZnJvbSAnLi9sb2dpblJvdXRlcidcblxuY29uc3Qgcm91dGVyID0gY29tYmluZVJvdXRlcihwdWJsaWNSb3V0ZXIsIGxvZ2luUm91dGVyKVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@koa/cors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-body");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("koa-compose");;

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("koa-compress");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-json");;

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("koa-jwt");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("svg-captcha");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;