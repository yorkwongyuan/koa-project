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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_mailConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/mailConfig */ \"./src/config/mailConfig.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Util */ \"./src/common/Util.js\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ \"./src/model/User.js\");\n\n\n\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    const {\n      body\n    } = ctx.request;\n\n    try {\n      const result = await (0,_config_mailConfig__WEBPACK_IMPORTED_MODULE_0__.default)({\n        code: '1234',\n        expire: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),\n        // email: '282311878@qq.com',\n        email: body.username,\n        user: 'wangy'\n      });\n      ctx.body = {\n        code: 200,\n        data: result,\n        msg: '邮件发送成功'\n      };\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  async login(ctx) {\n    const {\n      body\n    } = ctx.request;\n    const sid = body.uuid;\n    const code = body.code;\n    const userInfo = await _model_User__WEBPACK_IMPORTED_MODULE_5__.default.findOne({\n      username: body.username\n    });\n    let password = userInfo.password;\n    console.log(userInfo, 'userInfo');\n    const isCodeAvailable = await (0,_common_Util__WEBPACK_IMPORTED_MODULE_4__.checkCode)(sid, code);\n    console.log(isCodeAvailable, 'isCodeAvailable'); // 验证码是否正确\n\n    if (isCodeAvailable) {\n      let bool = password === body.password; // 用户名密码正确\n\n      if (bool) {\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n          _id: '1111ork'\n        }, _config_index__WEBPACK_IMPORTED_MODULE_3__.default.JWT_SECRET, {\n          expiresIn: '1h'\n        });\n        ctx.body = {\n          code: 200,\n          data: token,\n          msg: '登录成功'\n        };\n      } else {\n        ctx.body = {\n          code: 404,\n          msg: '账号密码不正确'\n        };\n      }\n    } else {\n      ctx.body = {\n        msg: '图片验证码不正确,请检查',\n        code: 401\n      };\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzPzk1MDciXSwibmFtZXMiOlsiTG9naW5Db250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJmb3JnZXQiLCJjdHgiLCJib2R5IiwicmVxdWVzdCIsInJlc3VsdCIsInNlbmQiLCJjb2RlIiwiZXhwaXJlIiwibW9ubWVudCIsImFkZCIsImZvcm1hdCIsImVtYWlsIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGF0YSIsIm1zZyIsImUiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJzaWQiLCJ1dWlkIiwidXNlckluZm8iLCJVc2VyIiwicGFzc3dvcmQiLCJpc0NvZGVBdmFpbGFibGUiLCJjaGVja0NvZGUiLCJib29sIiwidG9rZW4iLCJqc29ud2VidG9rZW4iLCJfaWQiLCJjb25maWciLCJleHBpcmVzSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxlQUFOLENBQXNCO0FBQ3BCQyxhQUFXLEdBQUcsQ0FBRTs7QUFDSixRQUFOQyxNQUFNLENBQUVDLEdBQUYsRUFBTztBQUNqQixVQUFNO0FBQUVDO0FBQUYsUUFBV0QsR0FBRyxDQUFDRSxPQUFyQjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLDJEQUFJLENBQUM7QUFDeEJDLFlBQUksRUFBRSxNQURrQjtBQUV4QkMsY0FBTSxFQUFFQyw2Q0FBTyxHQUFHQyxHQUFWLENBQWMsRUFBZCxFQUFrQixTQUFsQixFQUE2QkMsTUFBN0IsQ0FBb0MscUJBQXBDLENBRmdCO0FBR3hCO0FBQ0FDLGFBQUssRUFBRVQsSUFBSSxDQUFDVSxRQUpZO0FBS3hCQyxZQUFJLEVBQUU7QUFMa0IsT0FBRCxDQUF6QjtBQU9BWixTQUFHLENBQUNDLElBQUosR0FBVztBQUNUSSxZQUFJLEVBQUUsR0FERztBQUVUUSxZQUFJLEVBQUVWLE1BRkc7QUFHVFcsV0FBRyxFQUFFO0FBSEksT0FBWDtBQUtELEtBYkQsQ0FhRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUNGOztBQUNVLFFBQUxHLEtBQUssQ0FBRWxCLEdBQUYsRUFBTztBQUNoQixVQUFNO0FBQUVDO0FBQUYsUUFBV0QsR0FBRyxDQUFDRSxPQUFyQjtBQUNBLFVBQU1pQixHQUFHLEdBQUdsQixJQUFJLENBQUNtQixJQUFqQjtBQUNBLFVBQU1mLElBQUksR0FBR0osSUFBSSxDQUFDSSxJQUFsQjtBQUNBLFVBQU1nQixRQUFRLEdBQUcsTUFBTUMsd0RBQUEsQ0FBYTtBQUFDWCxjQUFRLEVBQUVWLElBQUksQ0FBQ1U7QUFBaEIsS0FBYixDQUF2QjtBQUNBLFFBQUlZLFFBQVEsR0FBR0YsUUFBUSxDQUFDRSxRQUF4QjtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWixFQUFzQixVQUF0QjtBQUNBLFVBQU1HLGVBQWUsR0FBRyxNQUFNQyx1REFBUyxDQUFDTixHQUFELEVBQU1kLElBQU4sQ0FBdkM7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVlPLGVBQVosRUFBNkIsaUJBQTdCLEVBUmdCLENBU2hCOztBQUNBLFFBQUlBLGVBQUosRUFBcUI7QUFDbkIsVUFBSUUsSUFBSSxHQUFHSCxRQUFRLEtBQUt0QixJQUFJLENBQUNzQixRQUE3QixDQURtQixDQUVuQjs7QUFDQSxVQUFJRyxJQUFKLEVBQVU7QUFDUixjQUFNQyxLQUFLLEdBQUdDLHdEQUFBLENBQWtCO0FBQUNDLGFBQUcsRUFBRTtBQUFOLFNBQWxCLEVBQW9DQyw2REFBcEMsRUFBdUQ7QUFDbkVDLG1CQUFTLEVBQUU7QUFEd0QsU0FBdkQsQ0FBZDtBQUdBL0IsV0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVEksY0FBSSxFQUFFLEdBREc7QUFFVFEsY0FBSSxFQUFFYyxLQUZHO0FBR1RiLGFBQUcsRUFBRTtBQUhJLFNBQVg7QUFLRCxPQVRELE1BU087QUFDTGQsV0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVEksY0FBSSxFQUFFLEdBREc7QUFFVFMsYUFBRyxFQUFFO0FBRkksU0FBWDtBQUlEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTGQsU0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVGEsV0FBRyxFQUFFLGNBREk7QUFFVFQsWUFBSSxFQUFFO0FBRkcsT0FBWDtBQUlEO0FBQ0Y7O0FBdkRtQjs7QUEwRHRCLGlFQUFlLElBQUlSLGVBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbmQgZnJvbSAnQC9jb25maWcvbWFpbENvbmZpZydcbmltcG9ydCBtb25tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBqc29ud2VidG9rZW4gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXgnXG5pbXBvcnQgeyBjaGVja0NvZGUgfSBmcm9tICcuLi9jb21tb24vVXRpbCdcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVsL1VzZXInXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGFzeW5jIGZvcmdldCAoY3R4KSB7XG4gICAgY29uc3QgeyBib2R5IH0gPSBjdHgucmVxdWVzdFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kKHtcbiAgICAgICAgY29kZTogJzEyMzQnLFxuICAgICAgICBleHBpcmU6IG1vbm1lbnQoKS5hZGQoMzAsICdtaW51dGVzJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXG4gICAgICAgIC8vIGVtYWlsOiAnMjgyMzExODc4QHFxLmNvbScsXG4gICAgICAgIGVtYWlsOiBib2R5LnVzZXJuYW1lLFxuICAgICAgICB1c2VyOiAnd2FuZ3knXG4gICAgICB9KVxuICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBtc2c6ICfpgq7ku7blj5HpgIHmiJDlip8nXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgbG9naW4gKGN0eCkge1xuICAgIGNvbnN0IHsgYm9keSB9ID0gY3R4LnJlcXVlc3RcbiAgICBjb25zdCBzaWQgPSBib2R5LnV1aWRcbiAgICBjb25zdCBjb2RlID0gYm9keS5jb2RlXG4gICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VyLmZpbmRPbmUoe3VzZXJuYW1lOiBib2R5LnVzZXJuYW1lfSlcbiAgICBsZXQgcGFzc3dvcmQgPSB1c2VySW5mby5wYXNzd29yZFxuICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvLCAndXNlckluZm8nKVxuICAgIGNvbnN0IGlzQ29kZUF2YWlsYWJsZSA9IGF3YWl0IGNoZWNrQ29kZShzaWQsIGNvZGUpXG4gICAgY29uc29sZS5sb2coaXNDb2RlQXZhaWxhYmxlLCAnaXNDb2RlQXZhaWxhYmxlJylcbiAgICAvLyDpqozor4HnoIHmmK/lkKbmraPnoa5cbiAgICBpZiAoaXNDb2RlQXZhaWxhYmxlKSB7XG4gICAgICBsZXQgYm9vbCA9IHBhc3N3b3JkID09PSBib2R5LnBhc3N3b3JkXG4gICAgICAvLyDnlKjmiLflkI3lr4bnoIHmraPnoa5cbiAgICAgIGlmIChib29sKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oe19pZDogJzExMTFvcmsnfSwgY29uZmlnLkpXVF9TRUNSRVQsIHtcbiAgICAgICAgICBleHBpcmVzSW46ICcxaCdcbiAgICAgICAgfSlcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIGRhdGE6IHRva2VuLFxuICAgICAgICAgIG1zZzogJ+eZu+W9leaIkOWKnydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgY29kZTogNDA0LFxuICAgICAgICAgIG1zZzogJ+i0puWPt+WvhueggeS4jeato+ehridcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgbXNnOiAn5Zu+54mH6aqM6K+B56CB5LiN5q2j56GuLOivt+ajgOafpScsXG4gICAgICAgIGNvZGU6IDQwMVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9naW5Db250cm9sbGVyKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/svgCaptchaController.js":
/*!*****************************************!*\
  !*** ./src/api/svgCaptchaController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\n\nclass PublicController {\n  constructor() {}\n\n  getCaptcha(ctx) {\n    const newCaptcha = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default().create({\n      size: 4,\n      // 验证码位数\n      ignoreChars: 'io0l',\n      // 不显示的几个字母或者数字\n      color: true,\n      // 字体有眼色\n      noise: Math.floor(Math.random() * 5),\n      // 干扰线条数\n      width: 150,\n      // 宽度\n      height: 50 // 高度\n\n    });\n    const uuid = Math.random();\n    (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__.setValue)(uuid, newCaptcha.text, 35);\n    ctx.body = {\n      \"code\": 200,\n      \"message\": newCaptcha.data,\n      \"uuid\": uuid\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9hcGkvc3ZnQ2FwdGNoYUNvbnRyb2xsZXIuanM/MjY1ZiJdLCJuYW1lcyI6WyJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJnZXRDYXB0Y2hhIiwiY3R4IiwibmV3Q2FwdGNoYSIsInN2Z0NhcHRjaGEiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJoZWlnaHQiLCJ1dWlkIiwic2V0VmFsdWUiLCJ0ZXh0IiwiYm9keSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1BLGdCQUFOLENBQXVCO0FBQ3JCQyxhQUFXLEdBQUcsQ0FFYjs7QUFDREMsWUFBVSxDQUFFQyxHQUFGLEVBQU87QUFDZixVQUFNQyxVQUFVLEdBQUdDLHlEQUFBLENBQWtCO0FBQ25DQyxVQUFJLEVBQUUsQ0FENkI7QUFDMUI7QUFDVEMsaUJBQVcsRUFBRSxNQUZzQjtBQUVkO0FBQ3JCQyxXQUFLLEVBQUUsSUFINEI7QUFHdEI7QUFDYkMsV0FBSyxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBSjRCO0FBSUc7QUFDdENDLFdBQUssRUFBRSxHQUw0QjtBQUt2QjtBQUNaQyxZQUFNLEVBQUUsRUFOMkIsQ0FNdkI7O0FBTnVCLEtBQWxCLENBQW5CO0FBUUEsVUFBTUMsSUFBSSxHQUFHTCxJQUFJLENBQUNFLE1BQUwsRUFBYjtBQUNBSSxpRUFBUSxDQUFDRCxJQUFELEVBQU9YLFVBQVUsQ0FBQ2EsSUFBbEIsRUFBd0IsRUFBeEIsQ0FBUjtBQUNBZCxPQUFHLENBQUNlLElBQUosR0FBVztBQUNULGNBQVEsR0FEQztBQUVULGlCQUFXZCxVQUFVLENBQUNlLElBRmI7QUFHVCxjQUFRSjtBQUhDLEtBQVg7QUFLRDs7QUFwQm9COztBQXVCdkIsaUVBQWUsSUFBSWYsZ0JBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvc3ZnQ2FwdGNoYUNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3ZnQ2FwdGNoYSBmcm9tICdzdmctY2FwdGNoYSdcbmltcG9ydCB7IHNldFZhbHVlIH0gZnJvbSAnLi4vY29uZmlnL1JlZGlzQ29uZmlnJ1xuY2xhc3MgUHVibGljQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbiAgZ2V0Q2FwdGNoYSAoY3R4KSB7XG4gICAgY29uc3QgbmV3Q2FwdGNoYSA9IHN2Z0NhcHRjaGEuY3JlYXRlKHtcbiAgICAgIHNpemU6IDQsIC8vIOmqjOivgeeggeS9jeaVsFxuICAgICAgaWdub3JlQ2hhcnM6ICdpbzBsJywgLy8g5LiN5pi+56S655qE5Yeg5Liq5a2X5q+N5oiW6ICF5pWw5a2XXG4gICAgICBjb2xvcjogdHJ1ZSwgLy8g5a2X5L2T5pyJ55y86ImyXG4gICAgICBub2lzZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSksIC8vIOW5suaJsOe6v+adoeaVsFxuICAgICAgd2lkdGg6IDE1MCwgLy8g5a695bqmXG4gICAgICBoZWlnaHQ6IDUwICAvLyDpq5jluqZcbiAgICB9KVxuICAgIGNvbnN0IHV1aWQgPSBNYXRoLnJhbmRvbSgpXG4gICAgc2V0VmFsdWUodXVpZCwgbmV3Q2FwdGNoYS50ZXh0LCAzNSApXG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICBcImNvZGVcIjogMjAwLFxuICAgICAgXCJtZXNzYWdlXCI6IG5ld0NhcHRjaGEuZGF0YSxcbiAgICAgIFwidXVpZFwiOiB1dWlkXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQdWJsaWNDb250cm9sbGVyKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/svgCaptchaController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandler.js":
/*!************************************!*\
  !*** ./src/common/ErrorHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    console.log('1');\n\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'token无效'\n      };\n    } else {\n      ctx.status = err.status || 500;\n      ctx.body = {\n        code: 500,\n        msg: err.message\n      };\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb21tb24vRXJyb3JIYW5kbGVyLmpzPzhlMTciXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImJvZHkiLCJjb2RlIiwibXNnIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUNBLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQzVCLFNBQU9BLElBQUksR0FBR0MsS0FBUCxDQUFjQyxHQUFELElBQVM7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7O0FBQ0EsUUFBSSxPQUFPRixHQUFHLENBQUNHLE1BQWYsRUFBdUI7QUFDckJOLFNBQUcsQ0FBQ00sTUFBSixHQUFhLEdBQWI7QUFDQU4sU0FBRyxDQUFDTyxJQUFKLEdBQVc7QUFDVEMsWUFBSSxFQUFFLEdBREc7QUFFVEMsV0FBRyxFQUFFO0FBRkksT0FBWDtBQUlELEtBTkQsTUFNTztBQUNMVCxTQUFHLENBQUNNLE1BQUosR0FBYUgsR0FBRyxDQUFDRyxNQUFKLElBQWMsR0FBM0I7QUFDQU4sU0FBRyxDQUFDTyxJQUFKLEdBQVc7QUFDVEMsWUFBSSxFQUFFLEdBREc7QUFFVEMsV0FBRyxFQUFFTixHQUFHLENBQUNPO0FBRkEsT0FBWDtBQUlEO0FBQ0YsR0FmTSxDQUFQO0FBZ0JELENBakJEIiwiZmlsZSI6Ii4vc3JjL2NvbW1vbi9FcnJvckhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoY3R4LCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0KCkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCcxJylcbiAgICBpZiAoNDAxID09IGVyci5zdGF0dXMpIHtcbiAgICAgIGN0eC5zdGF0dXMgPSA0MDE7XG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNDAxLFxuICAgICAgICBtc2c6ICd0b2tlbuaXoOaViCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNTAwXG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNTAwLFxuICAgICAgICBtc2c6IGVyci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/ErrorHandler.js\n");

/***/ }),

/***/ "./src/common/Util.js":
/*!****************************!*\
  !*** ./src/common/Util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCode\": () => (/* binding */ checkCode)\n/* harmony export */ });\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/RedisConfig */ \"./src/config/RedisConfig.js\");\n // 判断验证码\n\nconst checkCode = async (key, value) => {\n  let redisData = await (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__.getValue)(key);\n  console.log(redisData.toLowerCase() === value.toLowerCase(), 'bool'); // redis 中有这个数据\n\n  if (redisData !== null) {\n    // 值相同\n    if (redisData.toLowerCase() === value.toLowerCase()) {\n      return true; // 值不同\n    } else {\n      return false;\n    } // redis中没有\n\n  } else {\n    return false;\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb21tb24vVXRpbC5qcz81M2I3Il0sIm5hbWVzIjpbImNoZWNrQ29kZSIsImtleSIsInZhbHVlIiwicmVkaXNEYXRhIiwiZ2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7O0NBRUE7O0FBQ0EsTUFBTUEsU0FBUyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsS0FBWixLQUFzQjtBQUN0QyxNQUFJQyxTQUFTLEdBQUcsTUFBTUMsNkRBQVEsQ0FBQ0gsR0FBRCxDQUE5QjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBUyxDQUFDSSxXQUFWLE9BQTRCTCxLQUFLLENBQUNLLFdBQU4sRUFBeEMsRUFBNkQsTUFBN0QsRUFGc0MsQ0FHdEM7O0FBQ0EsTUFBSUosU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCO0FBQ0EsUUFBSUEsU0FBUyxDQUFDSSxXQUFWLE9BQTRCTCxLQUFLLENBQUNLLFdBQU4sRUFBaEMsRUFBcUQ7QUFDbkQsYUFBTyxJQUFQLENBRG1ELENBRW5EO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsYUFBTyxLQUFQO0FBQ0QsS0FQcUIsQ0FRdEI7O0FBQ0QsR0FURCxNQVNPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQWhCRCIsImZpbGUiOiIuL3NyYy9jb21tb24vVXRpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSAnLi4vY29uZmlnL1JlZGlzQ29uZmlnJ1xuXG4vLyDliKTmlq3pqozor4HnoIFcbmNvbnN0IGNoZWNrQ29kZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG4gIGxldCByZWRpc0RhdGEgPSBhd2FpdCBnZXRWYWx1ZShrZXkpXG4gIGNvbnNvbGUubG9nKHJlZGlzRGF0YS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpLCAnYm9vbCcpXG4gIC8vIHJlZGlzIOS4reaciei/meS4quaVsOaNrlxuICBpZiAocmVkaXNEYXRhICE9PSBudWxsKSB7XG4gICAgLy8g5YC855u45ZCMXG4gICAgaWYgKHJlZGlzRGF0YS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgICAgLy8g5YC85LiN5ZCMXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyByZWRpc+S4reayoeaciVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNoZWNrQ29kZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/Util.js\n");

/***/ }),

/***/ "./src/config/DBHelper.js":
/*!********************************!*\
  !*** ./src/config/DBHelper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\nconst EVENTS = {\n  CONNECTED: 'connected',\n  ERROR: 'error',\n  DISCONNECTED: 'disconnected'\n};\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_index__WEBPACK_IMPORTED_MODULE_1__.default.DB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}); // 连接成功\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(EVENTS.CONNECTED, () => {\n  console.log('mongodb connected');\n}); // 连接异常\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(EVENTS.ERROR, err => {\n  console.log(err);\n}); // 断开连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(EVENTS.DISCONNECTED, () => {\n  console.log('mongodb disconnected');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb25maWcvREJIZWxwZXIuanM/MmE0YiJdLCJuYW1lcyI6WyJFVkVOVFMiLCJDT05ORUNURUQiLCJFUlJPUiIsIkRJU0NPTk5FQ1RFRCIsIm1vbmdvb3NlIiwiY29uZmlnIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsV0FBUyxFQUFFLFdBREU7QUFFYkMsT0FBSyxFQUFFLE9BRk07QUFHYkMsY0FBWSxFQUFFO0FBSEQsQ0FBZjtBQUtBQyx1REFBQSxDQUFpQkMsa0RBQWpCLEVBQWdDO0FBQUNDLGlCQUFlLEVBQUUsSUFBbEI7QUFBd0JDLG9CQUFrQixFQUFFO0FBQTVDLENBQWhDLEUsQ0FFQTs7QUFDQUgsNkRBQUEsQ0FBdUJKLE1BQU0sQ0FBQ0MsU0FBOUIsRUFBeUMsTUFBTTtBQUM3Q08sU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQUwsNkRBQUEsQ0FBdUJKLE1BQU0sQ0FBQ0UsS0FBOUIsRUFBc0NRLEdBQUQsSUFBUztBQUM1Q0YsU0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQU4sNkRBQUEsQ0FBdUJKLE1BQU0sQ0FBQ0csWUFBOUIsRUFBNEMsTUFBTTtBQUNoREssU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDRCxDQUZEO0FBR0EsaUVBQWVMLGlEQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy9EQkhlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRVZFTlRTID0ge1xuICBDT05ORUNURUQ6ICdjb25uZWN0ZWQnLFxuICBFUlJPUjogJ2Vycm9yJyxcbiAgRElTQ09OTkVDVEVEOiAnZGlzY29ubmVjdGVkJ1xufVxubW9uZ29vc2UuY29ubmVjdChjb25maWcuREJfVVJMLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KVxuXG4vLyDov57mjqXmiJDlip9cbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oRVZFTlRTLkNPTk5FQ1RFRCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbW9uZ29kYiBjb25uZWN0ZWQnKVxufSlcblxuLy8g6L+e5o6l5byC5bi4XG5tb25nb29zZS5jb25uZWN0aW9uLm9uKEVWRU5UUy5FUlJPUiwgKGVycikgPT4ge1xuICBjb25zb2xlLmxvZyhlcnIpXG59KVxuXG4vLyDmlq3lvIDov57mjqVcbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oRVZFTlRTLkRJU0NPTk5FQ1RFRCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbW9uZ29kYiBkaXNjb25uZWN0ZWQnKVxufSlcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/DBHelper.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"setValue\": () => (/* binding */ setValue),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"getHValue\": () => (/* binding */ getHValue),\n/* harmony export */   \"delValue\": () => (/* binding */ delValue)\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\n\nconst options = { ..._index__WEBPACK_IMPORTED_MODULE_2__.default.REDIS,\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === \"ECONNREFUSED\") {\n      // End reconnecting on a specific error and flush all commands with\n      // a individual error\n      return new Error(\"The server refused the connection\");\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // End reconnecting after a specific timeout and flush all commands\n      // with a individual error\n      return new Error(\"Retry time exhausted\");\n    }\n\n    if (options.attempt > 10) {\n      // End reconnecting with built in error\n      return undefined;\n    } // reconnect after\n\n\n    return Math.min(options.attempt * 100, 3000);\n  }\n};\nbluebird__WEBPACK_IMPORTED_MODULE_1___default().promisifyAll((redis__WEBPACK_IMPORTED_MODULE_0___default()));\nconst client = redis__WEBPACK_IMPORTED_MODULE_0___default().createClient(options);\n\nconst setValue = (key, value, time) => {\n  const arr = [null, 'null', undefined, 'undefined'];\n  if (arr.includes(value)) return;\n\n  if (typeof value === 'string') {\n    client.set(key, value);\n  } else if (typeof value === 'object') {\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], (redis__WEBPACK_IMPORTED_MODULE_0___default().print));\n    });\n  }\n\n  client.expire(key, time);\n}; // const { promisify } = require(\"util\");\n// const getAsync = promisify(client.get).bind(client);\n// 获取字符串\n\n\nconst getValue = key => {\n  // return getAsync(key)\n  return client.getAsync(key);\n}; // 获取整个hash表里的数据\n\n\nconst getHValue = key => {\n  // return promisify(client.hgetall).bind(client)(key)\n  return client.hgetallAsync(key);\n}; // 删除\n\n\nconst delValue = key => {\n  client.del(key, (err, res) => {\n    if (res === 1) {\n      console.log('success');\n    } else {\n      console.log('fail', err);\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9jb25maWcvUmVkaXNDb25maWcuanM/Yjc4OSJdLCJuYW1lcyI6WyJvcHRpb25zIiwiY29uZmlnIiwiZGV0ZWN0X2J1ZmZlcnMiLCJyZXRyeV9zdHJhdGVneSIsImVycm9yIiwiY29kZSIsIkVycm9yIiwidG90YWxfcmV0cnlfdGltZSIsImF0dGVtcHQiLCJ1bmRlZmluZWQiLCJNYXRoIiwibWluIiwiYmx1ZWJpcmQiLCJyZWRpcyIsImNsaWVudCIsInNldFZhbHVlIiwia2V5IiwidmFsdWUiLCJ0aW1lIiwiYXJyIiwiaW5jbHVkZXMiLCJzZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJoc2V0IiwiZXhwaXJlIiwiZ2V0VmFsdWUiLCJnZXRBc3luYyIsImdldEhWYWx1ZSIsImhnZXRhbGxBc3luYyIsImRlbFZhbHVlIiwiZGVsIiwiZXJyIiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxFQUNkLEdBQUdDLGlEQURXO0FBRWRDLGdCQUFjLEVBQUUsSUFGRjtBQUdkQyxnQkFBYyxFQUFFLFVBQVNILE9BQVQsRUFBa0I7QUFDaEMsUUFBSUEsT0FBTyxDQUFDSSxLQUFSLElBQWlCSixPQUFPLENBQUNJLEtBQVIsQ0FBY0MsSUFBZCxLQUF1QixjQUE1QyxFQUE0RDtBQUMxRDtBQUNBO0FBQ0EsYUFBTyxJQUFJQyxLQUFKLENBQVUsbUNBQVYsQ0FBUDtBQUNEOztBQUNELFFBQUlOLE9BQU8sQ0FBQ08sZ0JBQVIsR0FBMkIsT0FBTyxFQUFQLEdBQVksRUFBM0MsRUFBK0M7QUFDN0M7QUFDQTtBQUNBLGFBQU8sSUFBSUQsS0FBSixDQUFVLHNCQUFWLENBQVA7QUFDRDs7QUFDRCxRQUFJTixPQUFPLENBQUNRLE9BQVIsR0FBa0IsRUFBdEIsRUFBMEI7QUFDeEI7QUFDQSxhQUFPQyxTQUFQO0FBQ0QsS0FkK0IsQ0FlaEM7OztBQUNBLFdBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTWCxPQUFPLENBQUNRLE9BQVIsR0FBa0IsR0FBM0IsRUFBZ0MsSUFBaEMsQ0FBUDtBQUNEO0FBcEJhLENBQWhCO0FBdUJBSSw0REFBQSxDQUFzQkMsOENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCx5REFBQSxDQUFtQmIsT0FBbkIsQ0FBZjs7QUFDQSxNQUFNZSxRQUFRLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWFDLElBQWIsS0FBc0I7QUFDckMsUUFBTUMsR0FBRyxHQUFHLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZVYsU0FBZixFQUEwQixXQUExQixDQUFaO0FBQ0EsTUFBSVUsR0FBRyxDQUFDQyxRQUFKLENBQWFILEtBQWIsQ0FBSixFQUF5Qjs7QUFDekIsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCSCxVQUFNLENBQUNPLEdBQVAsQ0FBV0wsR0FBWCxFQUFnQkMsS0FBaEI7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDSyxVQUFNLENBQUNDLElBQVAsQ0FBWU4sS0FBWixFQUFtQk8sT0FBbkIsQ0FBNEJDLElBQUQsSUFBVTtBQUNuQ1gsWUFBTSxDQUFDWSxJQUFQLENBQVlWLEdBQVosRUFBaUJTLElBQWpCLEVBQXVCUixLQUFLLENBQUNRLElBQUQsQ0FBNUIsRUFBb0NaLG9EQUFwQztBQUNELEtBRkQ7QUFHRDs7QUFDREMsUUFBTSxDQUFDYSxNQUFQLENBQWNYLEdBQWQsRUFBbUJFLElBQW5CO0FBQ0QsQ0FYRCxDLENBYUE7QUFDQTtBQUVBOzs7QUFDQSxNQUFNVSxRQUFRLEdBQUlaLEdBQUQsSUFBUztBQUN4QjtBQUNBLFNBQU9GLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQmIsR0FBaEIsQ0FBUDtBQUNELENBSEQsQyxDQUtBOzs7QUFDQSxNQUFNYyxTQUFTLEdBQUlkLEdBQUQsSUFBUztBQUN6QjtBQUNBLFNBQU9GLE1BQU0sQ0FBQ2lCLFlBQVAsQ0FBb0JmLEdBQXBCLENBQVA7QUFDRCxDQUhELEMsQ0FLQTs7O0FBQ0EsTUFBTWdCLFFBQVEsR0FBSWhCLEdBQUQsSUFBUztBQUN4QkYsUUFBTSxDQUFDbUIsR0FBUCxDQUFXakIsR0FBWCxFQUFnQixDQUFDa0IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDNUIsUUFBSUEsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JILEdBQXBCO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FSRCIsImZpbGUiOiIuL3NyYy9jb25maWcvUmVkaXNDb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkaXMgZnJvbSAncmVkaXMnXG5pbXBvcnQgYmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vaW5kZXgnXG5jb25zdCBvcHRpb25zID0ge1xuICAuLi5jb25maWcuUkVESVMsXG4gIGRldGVjdF9idWZmZXJzOiB0cnVlLFxuICByZXRyeV9zdHJhdGVneTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmVycm9yICYmIG9wdGlvbnMuZXJyb3IuY29kZSA9PT0gXCJFQ09OTlJFRlVTRURcIikge1xuICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyBvbiBhIHNwZWNpZmljIGVycm9yIGFuZCBmbHVzaCBhbGwgY29tbWFuZHMgd2l0aFxuICAgICAgLy8gYSBpbmRpdmlkdWFsIGVycm9yXG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIHNlcnZlciByZWZ1c2VkIHRoZSBjb25uZWN0aW9uXCIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50b3RhbF9yZXRyeV90aW1lID4gMTAwMCAqIDYwICogNjApIHtcbiAgICAgIC8vIEVuZCByZWNvbm5lY3RpbmcgYWZ0ZXIgYSBzcGVjaWZpYyB0aW1lb3V0IGFuZCBmbHVzaCBhbGwgY29tbWFuZHNcbiAgICAgIC8vIHdpdGggYSBpbmRpdmlkdWFsIGVycm9yXG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiUmV0cnkgdGltZSBleGhhdXN0ZWRcIik7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmF0dGVtcHQgPiAxMCkge1xuICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyB3aXRoIGJ1aWx0IGluIGVycm9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyByZWNvbm5lY3QgYWZ0ZXJcbiAgICByZXR1cm4gTWF0aC5taW4ob3B0aW9ucy5hdHRlbXB0ICogMTAwLCAzMDAwKTtcbiAgfVxufVxuXG5ibHVlYmlyZC5wcm9taXNpZnlBbGwocmVkaXMpXG5jb25zdCBjbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQob3B0aW9ucylcbmNvbnN0IHNldFZhbHVlID0gKGtleSwgdmFsdWUsIHRpbWUpID0+IHtcbiAgY29uc3QgYXJyID0gW251bGwsICdudWxsJywgdW5kZWZpbmVkLCAndW5kZWZpbmVkJ11cbiAgaWYgKGFyci5pbmNsdWRlcyh2YWx1ZSkpIHJldHVyblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNsaWVudC5zZXQoa2V5LCB2YWx1ZSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNsaWVudC5oc2V0KGtleSwgaXRlbSwgdmFsdWVbaXRlbV0sIHJlZGlzLnByaW50KVxuICAgIH0pXG4gIH1cbiAgY2xpZW50LmV4cGlyZShrZXksIHRpbWUpXG59XG5cbi8vIGNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcbi8vIGNvbnN0IGdldEFzeW5jID0gcHJvbWlzaWZ5KGNsaWVudC5nZXQpLmJpbmQoY2xpZW50KTtcblxuLy8g6I635Y+W5a2X56ym5LiyXG5jb25zdCBnZXRWYWx1ZSA9IChrZXkpID0+IHtcbiAgLy8gcmV0dXJuIGdldEFzeW5jKGtleSlcbiAgcmV0dXJuIGNsaWVudC5nZXRBc3luYyhrZXkpXG59XG5cbi8vIOiOt+WPluaVtOS4qmhhc2jooajph4znmoTmlbDmja5cbmNvbnN0IGdldEhWYWx1ZSA9IChrZXkpID0+IHtcbiAgLy8gcmV0dXJuIHByb21pc2lmeShjbGllbnQuaGdldGFsbCkuYmluZChjbGllbnQpKGtleSlcbiAgcmV0dXJuIGNsaWVudC5oZ2V0YWxsQXN5bmMoa2V5KVxufVxuXG4vLyDliKDpmaRcbmNvbnN0IGRlbFZhbHVlID0gKGtleSkgPT4ge1xuICBjbGllbnQuZGVsKGtleSwgKGVyciwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcyA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZmFpbCcsIGVycilcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGNsaWVudCxcbiAgc2V0VmFsdWUsXG4gIGdldFZhbHVlLFxuICBnZXRIVmFsdWUsXG4gIGRlbFZhbHVlXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/ErrorHandler */ \"./src/common/ErrorHandler.js\");\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new Koa();\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_9___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_10__.default.JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /\\/login/]\n});\nconst middleWare = koa_compose__WEBPACK_IMPORTED_MODULE_8___default()([koa_body__WEBPACK_IMPORTED_MODULE_5___default()(), koa_json__WEBPACK_IMPORTED_MODULE_4___default()({\n  pretty: true,\n  param: 'pretty'\n}), _koa_cors__WEBPACK_IMPORTED_MODULE_3___default()(), koa_static__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '../public')), koa_helmet__WEBPACK_IMPORTED_MODULE_1___default()(), _common_ErrorHandler__WEBPACK_IMPORTED_MODULE_11__.default, jwt]);\nconst isDevMode =  false ? 0 : true;\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_6___default()());\n}\n\napp.use(middleWare);\napp.use((0,_routes_routes__WEBPACK_IMPORTED_MODULE_7__.default)());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbIktvYSIsInJlcXVpcmUiLCJhcHAiLCJqd3QiLCJKV1QiLCJzZWNyZXQiLCJjb25maWciLCJKV1RfU0VDUkVUIiwidW5sZXNzIiwicGF0aCIsIm1pZGRsZVdhcmUiLCJjb21wb3NlIiwiYm9keSIsImpzb24iLCJwcmV0dHkiLCJwYXJhbSIsImNvcnMiLCJzdGF0aWNzIiwiX19kaXJuYW1lIiwiaGVsbWV0IiwiRXJyb3JIYW5kbGVyIiwiaXNEZXZNb2RlIiwicHJvY2VzcyIsInVzZSIsImNvbXByZXNzIiwicm91dGVycyIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUYsR0FBSixFQUFaO0FBRUEsTUFBTUcsR0FBRyxHQUFHQyw4Q0FBRyxDQUFDO0FBQUNDLFFBQU0sRUFBRUMsOERBQWlCQztBQUExQixDQUFELENBQUgsQ0FBaUNDLE1BQWpDLENBQXdDO0FBQUNDLE1BQUksRUFBRSxDQUFDLFdBQUQsRUFBYyxTQUFkO0FBQVAsQ0FBeEMsQ0FBWjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Msa0RBQU8sQ0FBQyxDQUN6QkMsK0NBQUksRUFEcUIsRUFFekJDLCtDQUFJLENBQUM7QUFBQ0MsUUFBTSxFQUFFLElBQVQ7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBQUQsQ0FGcUIsRUFHekJDLGdEQUFJLEVBSHFCLEVBSXpCQyxpREFBTyxDQUFDUixnREFBQSxDQUFVUyxTQUFWLEVBQXFCLFdBQXJCLENBQUQsQ0FKa0IsRUFLekJDLGlEQUFNLEVBTG1CLEVBTXpCQywwREFOeUIsRUFPekJqQixHQVB5QixDQUFELENBQTFCO0FBVUEsTUFBTWtCLFNBQVMsR0FBR0MsTUFBQSxHQUF3QyxDQUF4QyxHQUFnRCxJQUFsRTs7QUFDQSxJQUFJLENBQUNELFNBQUwsRUFBZ0I7QUFDZG5CLEtBQUcsQ0FBQ3FCLEdBQUosQ0FBUUMsbURBQVEsRUFBaEI7QUFDRDs7QUFDRHRCLEdBQUcsQ0FBQ3FCLEdBQUosQ0FBUWIsVUFBUjtBQUNBUixHQUFHLENBQUNxQixHQUFKLENBQVFFLHVEQUFPLEVBQWY7QUFFQXZCLEdBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxJQUFYIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgS29hID0gcmVxdWlyZSgna29hJylcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2tvYS1oZWxtZXQnXG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJ1xuaW1wb3J0IGNvcnMgZnJvbSAnQGtvYS9jb3JzJ1xuaW1wb3J0IGpzb24gZnJvbSAna29hLWpzb24nXG5pbXBvcnQgYm9keSBmcm9tICdrb2EtYm9keSdcbmltcG9ydCBjb21wcmVzcyBmcm9tICdrb2EtY29tcHJlc3MnXG5pbXBvcnQgcm91dGVycyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnXG5pbXBvcnQgY29tcG9zZSBmcm9tICdrb2EtY29tcG9zZSdcbmltcG9ydCBKV1QgZnJvbSAna29hLWp3dCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvaW5kZXgnXG5pbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gJy4vY29tbW9uL0Vycm9ySGFuZGxlcidcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKVxuXG5jb25zdCBqd3QgPSBKV1Qoe3NlY3JldDogY29uZmlnLkpXVF9TRUNSRVR9KS51bmxlc3Moe3BhdGg6IFsvXlxcL3B1YmxpYy8sIC9cXC9sb2dpbi9dfSlcbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlKFtcbiAgYm9keSgpLFxuICBqc29uKHtwcmV0dHk6IHRydWUsIHBhcmFtOiAncHJldHR5J30pLFxuICBjb3JzKCksXG4gIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSxcbiAgaGVsbWV0KCksXG4gIEVycm9ySGFuZGxlcixcbiAgand0XG5dKVxuXG5jb25zdCBpc0Rldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gZmFsc2UgOiB0cnVlXG5pZiAoIWlzRGV2TW9kZSkge1xuICBhcHAudXNlKGNvbXByZXNzKCkpXG59XG5hcHAudXNlKG1pZGRsZVdhcmUpXG5hcHAudXNlKHJvdXRlcnMoKSlcblxuYXBwLmxpc3RlbigzMDAwKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/DBHelper */ \"./src/config/DBHelper.js\");\n\nconst Schema = _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__.default.Schema; // 定义了一个数据骨架\n\nconst UserSchema = new Schema({\n  username: {\n    type: String\n  },\n  password: {\n    type: String\n  }\n}); // model为连接collection的方法\n\nconst User = _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__.default.model('users', UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9tb2RlbC9Vc2VyLmpzPzc2ZmUiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicGFzc3dvcmQiLCJVc2VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHQyw0REFBZixDLENBRUE7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUM1QkcsVUFBUSxFQUFFO0FBQUNDLFFBQUksRUFBRUM7QUFBUCxHQURrQjtBQUU1QkMsVUFBUSxFQUFFO0FBQUNGLFFBQUksRUFBRUM7QUFBUDtBQUZrQixDQUFYLENBQW5CLEMsQ0FLQTs7QUFDQSxNQUFNRSxJQUFJLEdBQUdOLDJEQUFBLENBQWUsT0FBZixFQUF3QkMsVUFBeEIsQ0FBYjtBQUVBLGlFQUFlSyxJQUFmIiwiZmlsZSI6Ii4vc3JjL21vZGVsL1VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi4vY29uZmlnL0RCSGVscGVyJ1xuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXG5cbi8vIOWumuS5ieS6huS4gOS4quaVsOaNrumqqOaetlxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VybmFtZToge3R5cGU6IFN0cmluZ30sXG4gIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfSxcbn0pXG5cbi8vIG1vZGVs5Li66L+e5o6lY29sbGVjdGlvbueahOaWueazlVxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVsKCd1c2VycycsIFVzZXJTY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/model/User.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/loginController', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.forget);\nrouter.post('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtcHJvamVjdC8uL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanM/M2RkMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJwcmVmaXgiLCJwb3N0IiwiTG9naW5Db250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixFQUFmO0FBRUFELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQ7QUFDQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksa0JBQVosRUFBZ0NDLGdFQUFoQztBQUNBSixNQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaLEVBQXNCQywrREFBdEI7QUFDQSxpRUFBZUosTUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5pbXBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gJy4uL2FwaS9Mb2dpbkNvbnRyb2xsZXInXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXG5yb3V0ZXIucHJlZml4KCcvbG9naW4nKVxucm91dGVyLnBvc3QoJy9sb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIuZm9yZ2V0KVxucm91dGVyLnBvc3QoJy9sb2dpbicsIExvZ2luQ29udHJvbGxlci5sb2dpbilcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

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

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bluebird");;

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

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

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");;

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