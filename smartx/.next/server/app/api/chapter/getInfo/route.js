"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
  var exports = {};
  exports.id = "app/api/chapter/getInfo/route";
  exports.ids = ["app/api/chapter/getInfo/route"];
  exports.modules = {
    /***/ "@prisma/client":
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require("@prisma/client");

        /***/
      },

    /***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
      /*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

        /***/
      },

    /***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
      /*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

        /***/
      },

    /***/ assert:
      /*!*************************!*\
  !*** external "assert" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("assert");

        /***/
      },

    /***/ events:
      /*!*************************!*\
  !*** external "events" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("events");

        /***/
      },

    /***/ fs:
      /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require("fs");

        /***/
      },

    /***/ http:
      /*!***********************!*\
  !*** external "http" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("http");

        /***/
      },

    /***/ https:
      /*!************************!*\
  !*** external "https" ***!
  \************************/
      /***/ (module) => {
        module.exports = require("https");

        /***/
      },

    /***/ os:
      /*!*********************!*\
  !*** external "os" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require("os");

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("path");

        /***/
      },

    /***/ stream:
      /*!*************************!*\
  !*** external "stream" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("stream");

        /***/
      },

    /***/ tty:
      /*!**********************!*\
  !*** external "tty" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require("tty");

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require("url");

        /***/
      },

    /***/ util:
      /*!***********************!*\
  !*** external "util" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("util");

        /***/
      },

    /***/ zlib:
      /*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("zlib");

        /***/
      },

    /***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchapter%2FgetInfo%2Froute&page=%2Fapi%2Fchapter%2FgetInfo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchapter%2FgetInfo%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
      /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchapter%2FgetInfo%2Froute&page=%2Fapi%2Fchapter%2FgetInfo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchapter%2FgetInfo%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ "(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shrey_My_PC_XPS_Downloads_SmartLearningX_Copy_smartx_src_app_api_chapter_getInfo_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chapter/getInfo/route.ts */ "(rsc)/./src/app/api/chapter/getInfo/route.ts");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = ""\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: "/api/chapter/getInfo/route",\n        pathname: "/api/chapter/getInfo",\n        filename: "route",\n        bundlePath: "app/api/chapter/getInfo/route"\n    },\n    resolvedPagePath: "C:\\\\Users\\\\shrey\\\\My PC (XPS)\\\\Downloads\\\\SmartLearningX - Copy\\\\smartx\\\\src\\\\app\\\\api\\\\chapter\\\\getInfo\\\\route.ts",\n    nextConfigOutput,\n    userland: C_Users_shrey_My_PC_XPS_Downloads_SmartLearningX_Copy_smartx_src_app_api_chapter_getInfo_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we\'ve moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = "/api/chapter/getInfo/route";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGFwdGVyJTJGZ2V0SW5mbyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2hhcHRlciUyRmdldEluZm8lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjaGFwdGVyJTJGZ2V0SW5mbyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaHJleSU1Q015JTIwUEMlMjAoWFBTKSU1Q0Rvd25sb2FkcyU1Q1NtYXJ0TGVhcm5pbmdYJTIwLSUyMENvcHklNUNzbWFydHglNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3NocmV5JTVDTXklMjBQQyUyMChYUFMpJTVDRG93bmxvYWRzJTVDU21hcnRMZWFybmluZ1glMjAtJTIwQ29weSU1Q3NtYXJ0eCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0U7QUFDL0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydHgvPzFkMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2hyZXlcXFxcTXkgUEMgKFhQUylcXFxcRG93bmxvYWRzXFxcXFNtYXJ0TGVhcm5pbmdYIC0gQ29weVxcXFxzbWFydHhcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hhcHRlclxcXFxnZXRJbmZvXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGFwdGVyL2dldEluZm8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGFwdGVyL2dldEluZm9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXB0ZXIvZ2V0SW5mby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNocmV5XFxcXE15IFBDIChYUFMpXFxcXERvd25sb2Fkc1xcXFxTbWFydExlYXJuaW5nWCAtIENvcHlcXFxcc21hcnR4XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNoYXB0ZXJcXFxcZ2V0SW5mb1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hhcHRlci9nZXRJbmZvL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchapter%2FgetInfo%2Froute&page=%2Fapi%2Fchapter%2FgetInfo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchapter%2FgetInfo%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/app/api/chapter/getInfo/route.ts":
      /*!**********************************************!*\
  !*** ./src/app/api/chapter/getInfo/route.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ "(rsc)/./src/lib/db.ts");\n/* harmony import */ var _lib_gemini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/gemini */ "(rsc)/./src/lib/gemini.ts");\n/* harmony import */ var _lib_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/youtube */ "(rsc)/./src/lib/youtube.ts");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ "(rsc)/./node_modules/zod/lib/index.mjs");\n\n\n\n\n\nconst bodyParser = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({\n    chapterId: zod__WEBPACK_IMPORTED_MODULE_4__.z.string()\n});\nasync function POST(req, res) {\n    try {\n        const body = await req.json();\n        const { chapterId } = bodyParser.parse(body);\n        const chapter = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.chapter.findUnique({\n            where: {\n                id: chapterId\n            }\n        });\n        if (!chapter) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                success: false,\n                error: "Chapter not found"\n            }, {\n                status: 400\n            });\n        }\n        const videoId = await (0,_lib_youtube__WEBPACK_IMPORTED_MODULE_2__.searchYoutube)(chapter.youtubeSearchQuery);\n        let transcript = await (0,_lib_youtube__WEBPACK_IMPORTED_MODULE_2__.getTranscript)(videoId);\n        let maxLength = 500;\n        transcript = transcript.split(" ").slice(0, maxLength).join(" ");\n        const { summary } = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_1__.strict_output)("You are an AI, working under SmartLearnX, a platform that provides personalized courses generated by AI. You are tasked with generating summaries for YouTube videos based on the transcript provided to you. Avoid talking about any sponsors mentioned in the transcript. Ensure that you read the entire transcript, interpret it well, understand the topic being discussed, and then generate the summary only to summarize the concept.", "summarise in 250 words or less and do not talk of the sponsors or anything unrelated to the main topic, also do not introduce what the summary is about.\\n" + transcript, {\n            summary: "summary of the transcript"\n        });\n        const questions = await (0,_lib_youtube__WEBPACK_IMPORTED_MODULE_2__.getQuestionsFromTranscript)(transcript, chapter.name);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.question.createMany({\n            data: questions.map((question)=>{\n                let options = [\n                    question.answer,\n                    question.option1,\n                    question.option2,\n                    question.option3\n                ];\n                options = options.sort(()=>Math.random() - 0.5);\n                return {\n                    question: question.question,\n                    answer: question.answer,\n                    options: JSON.stringify(options),\n                    chapterId: chapterId\n                };\n            })\n        });\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.chapter.update({\n            where: {\n                id: chapterId\n            },\n            data: {\n                videoId: videoId,\n                summary: summary\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_4__.z.ZodError) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                success: false,\n                error: "Invalid Body"\n            }, {\n                status: 400\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                success: false,\n                error: "unknown"\n            }, {\n                status: 500\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGFwdGVyL2dldEluZm8vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ1c7QUFDNEM7QUFDOUM7QUFDbkI7QUFFeEIsTUFBTU8sYUFBYUQsa0NBQUNBLENBQUNFLE1BQU0sQ0FBQztJQUN4QkMsV0FBV0gsa0NBQUNBLENBQUNJLE1BQU07QUFDdkI7QUFFTyxlQUFlQyxLQUFLQyxHQUFZLEVBQUVDLEdBQWE7SUFDbEQsSUFBRztRQUNDLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQixNQUFNLEVBQUNOLFNBQVMsRUFBQyxHQUFHRixXQUFXUyxLQUFLLENBQUNGO1FBQ3JDLE1BQU1HLFVBQVUsTUFBTWpCLDJDQUFNQSxDQUFDaUIsT0FBTyxDQUFDQyxVQUFVLENBQUM7WUFDNUNDLE9BQU87Z0JBQ0hDLElBQUlYO1lBQ1I7UUFDSjtRQUNBLElBQUcsQ0FBQ1EsU0FBUztZQUNULE9BQU9aLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3JCO2dCQUNDTSxTQUFRO2dCQUNSQyxPQUFNO1lBQ1AsR0FDQTtnQkFDQ0MsUUFBUTtZQUNUO1FBRVA7UUFFQSxNQUFNQyxVQUFVLE1BQU1wQiwyREFBYUEsQ0FBQ2EsUUFBUVEsa0JBQWtCO1FBQzlELElBQUlDLGFBQWEsTUFBTXZCLDJEQUFhQSxDQUFDcUI7UUFDckMsSUFBSUcsWUFBWTtRQUNoQkQsYUFBYUEsV0FBV0UsS0FBSyxDQUFDLEtBQUtDLEtBQUssQ0FBQyxHQUFFRixXQUFXRyxJQUFJLENBQUM7UUFDM0QsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBd0IsTUFBTTlCLDBEQUFhQSxDQUN4RCxpYkFFQSwrSkFBK0p5QixZQUMvSjtZQUFFSyxTQUFTO1FBQTRCO1FBRzNDLE1BQU1DLFlBQVksTUFBTTlCLHdFQUEwQkEsQ0FBQ3dCLFlBQVlULFFBQVFnQixJQUFJO1FBRTNFLE1BQU1qQywyQ0FBTUEsQ0FBQ2tDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO1lBQzdCQyxNQUFNSixVQUFVSyxHQUFHLENBQUNILENBQUFBO2dCQUNoQixJQUFJSSxVQUFVO29CQUFDSixTQUFTSyxNQUFNO29CQUFFTCxTQUFTTSxPQUFPO29CQUFFTixTQUFTTyxPQUFPO29CQUFDUCxTQUFTUSxPQUFPO2lCQUFDO2dCQUNwRkosVUFBVUEsUUFBUUssSUFBSSxDQUFDLElBQU1DLEtBQUtDLE1BQU0sS0FBSztnQkFDN0MsT0FBTztvQkFDSFgsVUFBVUEsU0FBU0EsUUFBUTtvQkFDM0JLLFFBQVFMLFNBQVNLLE1BQU07b0JBQ3ZCRCxTQUFTUSxLQUFLQyxTQUFTLENBQUNUO29CQUN4QjdCLFdBQVdBO2dCQUNmO1lBQ0o7UUFDSjtRQUVBLE1BQU1ULDJDQUFNQSxDQUFDaUIsT0FBTyxDQUFDK0IsTUFBTSxDQUFDO1lBQ3hCN0IsT0FBTztnQkFBRUMsSUFBSVg7WUFBVTtZQUN2QjJCLE1BQU07Z0JBQ0paLFNBQVNBO2dCQUNUTyxTQUFTQTtZQUNYO1FBQ0Y7UUFFRixPQUFPMUIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFTSxTQUFTO1FBQUk7SUFDNUMsRUFDQSxPQUFPQyxPQUFPO1FBQ1YsSUFBR0EsaUJBQWlCaEIsa0NBQUNBLENBQUMyQyxRQUFRLEVBQUU7WUFDNUIsT0FBTzVDLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3BCO2dCQUNJTSxTQUFTO2dCQUNUQyxPQUFPO1lBQ1gsR0FDQTtnQkFDSUMsUUFBUTtZQUNaO1FBRVIsT0FDSztZQUNELE9BQU9sQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUNyQk0sU0FBUztnQkFDVEMsT0FBTztZQUNYLEdBQUc7Z0JBQ0NDLFFBQVE7WUFDWjtRQUNKO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9hcHAvYXBpL2NoYXB0ZXIvZ2V0SW5mby9yb3V0ZS50cz9lYzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgc3RyaWN0X291dHB1dCB9IGZyb20gXCJAL2xpYi9nZW1pbmlcIjtcbmltcG9ydCB7IGdldFF1ZXN0aW9uc0Zyb21UcmFuc2NyaXB0LCBnZXRUcmFuc2NyaXB0LCBzZWFyY2hZb3V0dWJlIH0gZnJvbSBcIkAvbGliL3lvdXR1YmVcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgYm9keVBhcnNlciA9IHoub2JqZWN0KHtcbiAgICBjaGFwdGVySWQ6IHouc3RyaW5nKCksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgICAgICBjb25zdCB7Y2hhcHRlcklkfSA9IGJvZHlQYXJzZXIucGFyc2UoYm9keSlcbiAgICAgICAgY29uc3QgY2hhcHRlciA9IGF3YWl0IHByaXNtYS5jaGFwdGVyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZDogY2hhcHRlcklkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCFjaGFwdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczpmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjpcIkNoYXB0ZXIgbm90IGZvdW5kXCIsXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXR1czogNDAwXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aWRlb0lkID0gYXdhaXQgc2VhcmNoWW91dHViZShjaGFwdGVyLnlvdXR1YmVTZWFyY2hRdWVyeSk7XG4gICAgICAgIGxldCB0cmFuc2NyaXB0ID0gYXdhaXQgZ2V0VHJhbnNjcmlwdCh2aWRlb0lkKTtcbiAgICAgICAgbGV0IG1heExlbmd0aCA9IDUwMDtcbiAgICAgICAgdHJhbnNjcmlwdCA9IHRyYW5zY3JpcHQuc3BsaXQoJyAnKS5zbGljZSgwLG1heExlbmd0aCkuam9pbignICcpO1xuICAgICAgICBjb25zdCB7IHN1bW1hcnkgfTogeyBzdW1tYXJ5OiBzdHJpbmcgfSA9IGF3YWl0IHN0cmljdF9vdXRwdXQoXG4gICAgICAgICAgICBcIllvdSBhcmUgYW4gQUksIHdvcmtpbmcgdW5kZXIgU21hcnRMZWFyblgsIGEgcGxhdGZvcm0gdGhhdCBwcm92aWRlcyBwZXJzb25hbGl6ZWQgY291cnNlcyBnZW5lcmF0ZWQgYnkgQUkuIFlvdSBhcmUgdGFza2VkIHdpdGggZ2VuZXJhdGluZyBzdW1tYXJpZXMgZm9yIFlvdVR1YmUgdmlkZW9zIGJhc2VkIG9uIHRoZSB0cmFuc2NyaXB0IHByb3ZpZGVkIHRvIHlvdS4gQXZvaWQgdGFsa2luZyBhYm91dCBhbnkgc3BvbnNvcnMgbWVudGlvbmVkIGluIHRoZSB0cmFuc2NyaXB0LiBFbnN1cmUgdGhhdCB5b3UgcmVhZCB0aGUgZW50aXJlIHRyYW5zY3JpcHQsIGludGVycHJldCBpdCB3ZWxsLCB1bmRlcnN0YW5kIHRoZSB0b3BpYyBiZWluZyBkaXNjdXNzZWQsIGFuZCB0aGVuIGdlbmVyYXRlIHRoZSBzdW1tYXJ5IG9ubHkgdG8gc3VtbWFyaXplIHRoZSBjb25jZXB0LlwiLFxuXG4gICAgICAgICAgICBcInN1bW1hcmlzZSBpbiAyNTAgd29yZHMgb3IgbGVzcyBhbmQgZG8gbm90IHRhbGsgb2YgdGhlIHNwb25zb3JzIG9yIGFueXRoaW5nIHVucmVsYXRlZCB0byB0aGUgbWFpbiB0b3BpYywgYWxzbyBkbyBub3QgaW50cm9kdWNlIHdoYXQgdGhlIHN1bW1hcnkgaXMgYWJvdXQuXFxuXCIgKyB0cmFuc2NyaXB0LFxuICAgICAgICAgICAgeyBzdW1tYXJ5OiBcInN1bW1hcnkgb2YgdGhlIHRyYW5zY3JpcHRcIiB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgZ2V0UXVlc3Rpb25zRnJvbVRyYW5zY3JpcHQodHJhbnNjcmlwdCwgY2hhcHRlci5uYW1lKTtcblxuICAgICAgICBhd2FpdCBwcmlzbWEucXVlc3Rpb24uY3JlYXRlTWFueSh7XG4gICAgICAgICAgICBkYXRhOiBxdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IFtxdWVzdGlvbi5hbnN3ZXIsIHF1ZXN0aW9uLm9wdGlvbjEsIHF1ZXN0aW9uLm9wdGlvbjIscXVlc3Rpb24ub3B0aW9uM11cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IHF1ZXN0aW9uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBwcmlzbWEuY2hhcHRlci51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGNoYXB0ZXJJZCB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB2aWRlb0lkOiB2aWRlb0lkLFxuICAgICAgICAgICAgICBzdW1tYXJ5OiBzdW1tYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZihlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIEJvZHlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiA1MDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsInN0cmljdF9vdXRwdXQiLCJnZXRRdWVzdGlvbnNGcm9tVHJhbnNjcmlwdCIsImdldFRyYW5zY3JpcHQiLCJzZWFyY2hZb3V0dWJlIiwiTmV4dFJlc3BvbnNlIiwieiIsImJvZHlQYXJzZXIiLCJvYmplY3QiLCJjaGFwdGVySWQiLCJzdHJpbmciLCJQT1NUIiwicmVxIiwicmVzIiwiYm9keSIsImpzb24iLCJwYXJzZSIsImNoYXB0ZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInN1Y2Nlc3MiLCJlcnJvciIsInN0YXR1cyIsInZpZGVvSWQiLCJ5b3V0dWJlU2VhcmNoUXVlcnkiLCJ0cmFuc2NyaXB0IiwibWF4TGVuZ3RoIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJzdW1tYXJ5IiwicXVlc3Rpb25zIiwibmFtZSIsInF1ZXN0aW9uIiwiY3JlYXRlTWFueSIsImRhdGEiLCJtYXAiLCJvcHRpb25zIiwiYW5zd2VyIiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlIiwiWm9kRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chapter/getInfo/route.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/db.ts":
      /*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! server-only */ "(rsc)/./node_modules/next/dist/compiled/server-only/empty.js");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ3pCO0FBT2QsSUFBSUMsT0FBcUI7QUFDaEMsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEM7SUFDQUMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBcInNlcnZlci1vbmx5XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhciwgbm8tdW51c2VkLXZhcnNcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5leHBvcnQgbGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcbiAgICBnbG9iYWwuY2FjaGVkUHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5jYWNoZWRQcmlzbWE7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/gemini.ts":
      /*!***************************!*\
  !*** ./src/lib/gemini.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   strict_output: () => (/* binding */ strict_output)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ "(rsc)/./node_modules/@google/generative-ai/dist/index.mjs");\n\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI("<Google API Key>");\nasync function strict_output(system_prompt, user_prompt, output_format, default_category = "", output_value_only = false, model = "gemini-pro", temperature = 1, num_tries = 3, verbose = false) {\n    const list_input = Array.isArray(user_prompt);\n    const dynamic_elements = /<.*?>/.test(JSON.stringify(output_format));\n    const list_output = /\\[.*?\\]/.test(JSON.stringify(output_format));\n    let error_msg = "";\n    const generativeModel = genAI.getGenerativeModel({\n        model\n    });\n    for(let i = 0; i < num_tries; i++){\n        let output_format_prompt = `\\nYou are to output ${list_output && "an array of objects in"} the following in json format: ${JSON.stringify(output_format)}. \\nDo not put quotation marks or escape character \\\\ in the output fields.`;\n        if (list_output) {\n            output_format_prompt += `\\nIf output field is a list, classify output into the best element of the list.`;\n        }\n        if (dynamic_elements) {\n            output_format_prompt += `\\nAny text enclosed by < and > indicates you must generate content to replace it. Example input: Go to <location>, Example output: Go to the garden\\nAny output key containing < and > indicates you must generate the key name to replace it. Example input: {\'<location>\': \'description of location\'}, Example output: {school: a place for education}`;\n        }\n        if (list_input) {\n            output_format_prompt += `\\nGenerate an array of json, one json for each input element.`;\n        }\n        const prompt = `${system_prompt}${output_format_prompt}${error_msg}\\n\\n${user_prompt.toString()}`;\n        const result = await generativeModel.generateContent(prompt);\n        const response = await result.response;\n        const text = response.text();\n        if (verbose) {\n            console.log("System prompt:", prompt);\n            console.log("\\nGemini response:", text);\n        }\n        try {\n            // Ensure proper escaping of quotes within the JSON string\n            const sanitizedText = text.replace(/\\\\n/g, "\\\\\\\\n").replace(/\\\\"/g, \'\\\\\\\\"\');\n            const cleanedText = sanitizedText.replace(/\\n/g, "");\n            let output = JSON.parse(cleanedText);\n            if (list_input) {\n                if (!Array.isArray(output)) {\n                    throw new Error("Output format not in an array of json");\n                }\n            } else {\n                output = [\n                    output\n                ];\n            }\n            for(let index = 0; index < output.length; index++){\n                for(const key in output_format){\n                    if (/<.*?>/.test(key)) {\n                        continue;\n                    }\n                    if (!(key in output[index])) {\n                        throw new Error(`${key} not in json output`);\n                    }\n                    if (Array.isArray(output_format[key])) {\n                        const choices = output_format[key];\n                        if (Array.isArray(output[index][key])) {\n                            output[index][key] = output[index][key][0];\n                        }\n                        if (!choices.includes(output[index][key]) && default_category) {\n                            output[index][key] = default_category;\n                        }\n                        if (output[index][key].includes(":")) {\n                            output[index][key] = output[index][key].split(":")[0];\n                        }\n                    }\n                }\n                if (output_value_only) {\n                    output[index] = Object.values(output[index]);\n                    if (output[index].length === 1) {\n                        output[index] = output[index][0];\n                    }\n                }\n            }\n            return list_input ? output : output[0];\n        } catch (e) {\n            error_msg = `\\n\\nResult: ${text}\\n\\nError message: ${e}`;\n            console.log("An exception occurred:", e);\n            console.log("Current invalid json format ", text);\n        }\n    }\n    return [];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNFLElBQUksQ0FBQyxFQUFFO3dCQUM1Qzt3QkFDQSxJQUFJLENBQUNDLFFBQVFDLFFBQVEsQ0FBQ1AsTUFBTSxDQUFDRyxNQUFNLENBQUNFLElBQUksS0FBS25DLGtCQUFrQjs0QkFDN0Q4QixNQUFNLENBQUNHLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHbkM7d0JBQ3ZCO3dCQUNBLElBQUk4QixNQUFNLENBQUNHLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRSxRQUFRLENBQUMsTUFBTTs0QkFDcENQLE1BQU0sQ0FBQ0csTUFBTSxDQUFDRSxJQUFJLEdBQUdMLE1BQU0sQ0FBQ0csTUFBTSxDQUFDRSxJQUFJLENBQUNHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDdkQ7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSXJDLG1CQUFtQjtvQkFDckI2QixNQUFNLENBQUNHLE1BQU0sR0FBR00sT0FBT0MsTUFBTSxDQUFDVixNQUFNLENBQUNHLE1BQU07b0JBQzNDLElBQUlILE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLEtBQUssR0FBRzt3QkFDOUJKLE1BQU0sQ0FBQ0csTUFBTSxHQUFHSCxNQUFNLENBQUNHLE1BQU0sQ0FBQyxFQUFFO29CQUNsQztnQkFDRjtZQUNGO1lBRUEsT0FBTzNCLGFBQWF3QixTQUFTQSxNQUFNLENBQUMsRUFBRTtRQUN4QyxFQUFFLE9BQU9XLEdBQUc7WUFDVjNCLFlBQVksQ0FBQyxZQUFZLEVBQUVVLEtBQUssbUJBQW1CLEVBQUVpQixFQUFFLENBQUM7WUFDeERoQixRQUFRQyxHQUFHLENBQUMsMEJBQTBCZTtZQUN0Q2hCLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NGO1FBQzlDO0lBQ0Y7SUFFQSxPQUFPLEVBQUU7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9saWIvZ2VtaW5pLnRzPzk5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlR2VuZXJhdGl2ZUFJIH0gZnJvbSBcIkBnb29nbGUvZ2VuZXJhdGl2ZS1haVwiO1xuXG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoXCJBSXphU3lEZDJQOHo0OVRkQVNyNzJQWjFxZ3J4ZzVuQlFLZm9Bb0VcIik7XG5cbmludGVyZmFjZSBPdXRwdXRGb3JtYXQge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB8IE91dHB1dEZvcm1hdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0cmljdF9vdXRwdXQoXG4gIHN5c3RlbV9wcm9tcHQ6IHN0cmluZyxcbiAgdXNlcl9wcm9tcHQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICBvdXRwdXRfZm9ybWF0OiBPdXRwdXRGb3JtYXQsXG4gIGRlZmF1bHRfY2F0ZWdvcnk6IHN0cmluZyA9IFwiXCIsXG4gIG91dHB1dF92YWx1ZV9vbmx5OiBib29sZWFuID0gZmFsc2UsXG4gIG1vZGVsOiBzdHJpbmcgPSBcImdlbWluaS1wcm9cIixcbiAgdGVtcGVyYXR1cmU6IG51bWJlciA9IDEsXG4gIG51bV90cmllczogbnVtYmVyID0gMyxcbiAgdmVyYm9zZTogYm9vbGVhbiA9IGZhbHNlXG4pIHtcbiAgY29uc3QgbGlzdF9pbnB1dDogYm9vbGVhbiA9IEFycmF5LmlzQXJyYXkodXNlcl9wcm9tcHQpO1xuICBjb25zdCBkeW5hbWljX2VsZW1lbnRzOiBib29sZWFuID0gLzwuKj8+Ly50ZXN0KEpTT04uc3RyaW5naWZ5KG91dHB1dF9mb3JtYXQpKTtcbiAgY29uc3QgbGlzdF9vdXRwdXQ6IGJvb2xlYW4gPSAvXFxbLio/XFxdLy50ZXN0KEpTT04uc3RyaW5naWZ5KG91dHB1dF9mb3JtYXQpKTtcbiAgbGV0IGVycm9yX21zZzogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdCBnZW5lcmF0aXZlTW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbCB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV90cmllczsgaSsrKSB7XG4gICAgbGV0IG91dHB1dF9mb3JtYXRfcHJvbXB0OiBzdHJpbmcgPSBgXFxuWW91IGFyZSB0byBvdXRwdXQgJHtcbiAgICAgIGxpc3Rfb3V0cHV0ICYmIFwiYW4gYXJyYXkgb2Ygb2JqZWN0cyBpblwiXG4gICAgfSB0aGUgZm9sbG93aW5nIGluIGpzb24gZm9ybWF0OiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgb3V0cHV0X2Zvcm1hdFxuICAgICl9LiBcXG5EbyBub3QgcHV0IHF1b3RhdGlvbiBtYXJrcyBvciBlc2NhcGUgY2hhcmFjdGVyIFxcXFwgaW4gdGhlIG91dHB1dCBmaWVsZHMuYDtcblxuICAgIGlmIChsaXN0X291dHB1dCkge1xuICAgICAgb3V0cHV0X2Zvcm1hdF9wcm9tcHQgKz0gYFxcbklmIG91dHB1dCBmaWVsZCBpcyBhIGxpc3QsIGNsYXNzaWZ5IG91dHB1dCBpbnRvIHRoZSBiZXN0IGVsZW1lbnQgb2YgdGhlIGxpc3QuYDtcbiAgICB9XG5cbiAgICBpZiAoZHluYW1pY19lbGVtZW50cykge1xuICAgICAgb3V0cHV0X2Zvcm1hdF9wcm9tcHQgKz0gYFxcbkFueSB0ZXh0IGVuY2xvc2VkIGJ5IDwgYW5kID4gaW5kaWNhdGVzIHlvdSBtdXN0IGdlbmVyYXRlIGNvbnRlbnQgdG8gcmVwbGFjZSBpdC4gRXhhbXBsZSBpbnB1dDogR28gdG8gPGxvY2F0aW9uPiwgRXhhbXBsZSBvdXRwdXQ6IEdvIHRvIHRoZSBnYXJkZW5cXG5Bbnkgb3V0cHV0IGtleSBjb250YWluaW5nIDwgYW5kID4gaW5kaWNhdGVzIHlvdSBtdXN0IGdlbmVyYXRlIHRoZSBrZXkgbmFtZSB0byByZXBsYWNlIGl0LiBFeGFtcGxlIGlucHV0OiB7Jzxsb2NhdGlvbj4nOiAnZGVzY3JpcHRpb24gb2YgbG9jYXRpb24nfSwgRXhhbXBsZSBvdXRwdXQ6IHtzY2hvb2w6IGEgcGxhY2UgZm9yIGVkdWNhdGlvbn1gO1xuICAgIH1cblxuICAgIGlmIChsaXN0X2lucHV0KSB7XG4gICAgICBvdXRwdXRfZm9ybWF0X3Byb21wdCArPSBgXFxuR2VuZXJhdGUgYW4gYXJyYXkgb2YganNvbiwgb25lIGpzb24gZm9yIGVhY2ggaW5wdXQgZWxlbWVudC5gO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdCA9IGAke3N5c3RlbV9wcm9tcHR9JHtvdXRwdXRfZm9ybWF0X3Byb21wdH0ke2Vycm9yX21zZ31cXG5cXG4ke3VzZXJfcHJvbXB0LnRvU3RyaW5nKCl9YDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0aXZlTW9kZWwuZ2VuZXJhdGVDb250ZW50KHByb21wdCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQucmVzcG9uc2U7XG4gICAgY29uc3QgdGV4dCA9IHJlc3BvbnNlLnRleHQoKTtcblxuICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN5c3RlbSBwcm9tcHQ6XCIsIHByb21wdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlxcbkdlbWluaSByZXNwb25zZTpcIiwgdGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEVuc3VyZSBwcm9wZXIgZXNjYXBpbmcgb2YgcXVvdGVzIHdpdGhpbiB0aGUgSlNPTiBzdHJpbmdcbiAgICAgIGNvbnN0IHNhbml0aXplZFRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFxuL2csICdcXFxcXFxcXG4nKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1xcXFxcXFxcXFxcIicpO1xuICAgIGNvbnN0IGNsZWFuZWRUZXh0ID0gc2FuaXRpemVkVGV4dC5yZXBsYWNlKC9cXG4vZywgJycpO1xuICAgIGxldCBvdXRwdXQ6IGFueSA9IEpTT04ucGFyc2UoY2xlYW5lZFRleHQpO1xuXG4gICAgICBpZiAobGlzdF9pbnB1dCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3V0cHV0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk91dHB1dCBmb3JtYXQgbm90IGluIGFuIGFycmF5IG9mIGpzb25cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IFtvdXRwdXRdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3V0cHV0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvdXRwdXRfZm9ybWF0KSB7XG4gICAgICAgICAgaWYgKC88Lio/Pi8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gb3V0cHV0W2luZGV4XSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtrZXl9IG5vdCBpbiBqc29uIG91dHB1dGApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG91dHB1dF9mb3JtYXRba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZXMgPSBvdXRwdXRfZm9ybWF0W2tleV0gYXMgc3RyaW5nW107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvdXRwdXRbaW5kZXhdW2tleV0pKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtpbmRleF1ba2V5XSA9IG91dHB1dFtpbmRleF1ba2V5XVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2hvaWNlcy5pbmNsdWRlcyhvdXRwdXRbaW5kZXhdW2tleV0pICYmIGRlZmF1bHRfY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2luZGV4XVtrZXldID0gZGVmYXVsdF9jYXRlZ29yeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdXRwdXRbaW5kZXhdW2tleV0uaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtpbmRleF1ba2V5XSA9IG91dHB1dFtpbmRleF1ba2V5XS5zcGxpdChcIjpcIilbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dHB1dF92YWx1ZV9vbmx5KSB7XG4gICAgICAgICAgb3V0cHV0W2luZGV4XSA9IE9iamVjdC52YWx1ZXMob3V0cHV0W2luZGV4XSk7XG4gICAgICAgICAgaWYgKG91dHB1dFtpbmRleF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvdXRwdXRbaW5kZXhdID0gb3V0cHV0W2luZGV4XVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RfaW5wdXQgPyBvdXRwdXQgOiBvdXRwdXRbMF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JfbXNnID0gYFxcblxcblJlc3VsdDogJHt0ZXh0fVxcblxcbkVycm9yIG1lc3NhZ2U6ICR7ZX1gO1xuICAgICAgY29uc29sZS5sb2coXCJBbiBleGNlcHRpb24gb2NjdXJyZWQ6XCIsIGUpO1xuICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGludmFsaWQganNvbiBmb3JtYXQgXCIsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5lcmF0aXZlQUkiLCJnZW5BSSIsInN0cmljdF9vdXRwdXQiLCJzeXN0ZW1fcHJvbXB0IiwidXNlcl9wcm9tcHQiLCJvdXRwdXRfZm9ybWF0IiwiZGVmYXVsdF9jYXRlZ29yeSIsIm91dHB1dF92YWx1ZV9vbmx5IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm51bV90cmllcyIsInZlcmJvc2UiLCJsaXN0X2lucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZHluYW1pY19lbGVtZW50cyIsInRlc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdF9vdXRwdXQiLCJlcnJvcl9tc2ciLCJnZW5lcmF0aXZlTW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJpIiwib3V0cHV0X2Zvcm1hdF9wcm9tcHQiLCJwcm9tcHQiLCJ0b1N0cmluZyIsInJlc3VsdCIsImdlbmVyYXRlQ29udGVudCIsInJlc3BvbnNlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzYW5pdGl6ZWRUZXh0IiwicmVwbGFjZSIsImNsZWFuZWRUZXh0Iiwib3V0cHV0IiwicGFyc2UiLCJFcnJvciIsImluZGV4IiwibGVuZ3RoIiwia2V5IiwiY2hvaWNlcyIsImluY2x1ZGVzIiwic3BsaXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/gemini.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/youtube.ts":
      /*!****************************!*\
  !*** ./src/lib/youtube.ts ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getQuestionsFromTranscript: () => (/* binding */ getQuestionsFromTranscript),\n/* harmony export */   getTranscript: () => (/* binding */ getTranscript),\n/* harmony export */   searchYoutube: () => (/* binding */ searchYoutube)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "(rsc)/./node_modules/axios/lib/axios.js");\n/* harmony import */ var youtube_transcript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! youtube-transcript */ "(rsc)/./node_modules/youtube-transcript/dist/youtube-transcript.esm.js");\n/* harmony import */ var _gemini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gemini */ "(rsc)/./src/lib/gemini.ts");\n\n\n\nasync function searchYoutube(searchQuery) {\n    // hello world => hello+world\n    searchQuery = encodeURIComponent(searchQuery);\n    const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${searchQuery}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`);\n    if (!data) {\n        console.log("youtube fail");\n        return null;\n    }\n    if (data.items[0] == undefined) {\n        console.log("youtube fail");\n        return null;\n    }\n    return data.items[0].id.videoId;\n}\nasync function getTranscript(videoId) {\n    try {\n        let transcript_arr = await youtube_transcript__WEBPACK_IMPORTED_MODULE_0__.YoutubeTranscript.fetchTranscript(videoId, {\n            lang: "en"\n        });\n        let transcript = "";\n        for (let t of transcript_arr){\n            transcript += t.text + " ";\n        }\n        return transcript.replaceAll("\\n", "");\n    } catch (error) {\n        return "";\n    }\n}\nasync function getQuestionsFromTranscript(transcript, course_title) {\n    const questions = await (0,_gemini__WEBPACK_IMPORTED_MODULE_1__.strict_output)("You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words", new Array(5).fill(`You are to generate a random medium to hard mcq question about ${course_title}`), {\n        question: "question",\n        answer: "answer with max length of 15 words",\n        option1: "option1 with max length of 15 words",\n        option2: "option2 with max length of 15 words",\n        option3: "option3 with max length of 15 words"\n    });\n    return questions;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3lvdXR1YmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQzZCO0FBQ2Q7QUFFbEMsZUFBZUcsY0FBY0MsV0FBbUI7SUFDckQsNkJBQTZCO0lBQzdCQSxjQUFjQyxtQkFBbUJEO0lBQ2pDLE1BQU0sRUFBRUUsSUFBSSxFQUFFLEdBQUcsTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FDOUIsQ0FBQyxpREFBaUQsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlLENBQUMsR0FBRyxFQUFFTixZQUFZLGtFQUFrRSxDQUFDO0lBRXRLLElBQUksQ0FBQ0UsTUFBTTtRQUNUSyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPO0lBQ1Q7SUFDQSxJQUFJTixLQUFLTyxLQUFLLENBQUMsRUFBRSxJQUFJQyxXQUFXO1FBQzlCSCxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPO0lBQ1Q7SUFDQSxPQUFPTixLQUFLTyxLQUFLLENBQUMsRUFBRSxDQUFDRSxFQUFFLENBQUNDLE9BQU87QUFDakM7QUFFTyxlQUFlQyxjQUFjRCxPQUFlO0lBQ2pELElBQUk7UUFDRixJQUFJRSxpQkFBaUIsTUFBTWpCLGlFQUFpQkEsQ0FBQ2tCLGVBQWUsQ0FBQ0gsU0FBUztZQUNwRUksTUFBTTtRQUNSO1FBQ0EsSUFBSUMsYUFBYTtRQUNqQixLQUFLLElBQUlDLEtBQUtKLGVBQWdCO1lBQzVCRyxjQUFjQyxFQUFFQyxJQUFJLEdBQUc7UUFDekI7UUFDQSxPQUFPRixXQUFXRyxVQUFVLENBQUMsTUFBTTtJQUNyQyxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDLDJCQUNsQkwsVUFBa0IsRUFDbEJNLFlBQW9CO0lBU3BCLE1BQU1DLFlBQXdCLE1BQU0xQixzREFBYUEsQ0FDL0MsdUlBQ0EsSUFBSTJCLE1BQU0sR0FBR0MsSUFBSSxDQUNmLENBQUMsK0RBQStELEVBQUVILGFBQWEsQ0FBQyxHQUVsRjtRQUNFSSxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtJQUVGLE9BQU9QO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydHgvLi9zcmMvbGliL3lvdXR1YmUudHM/ZjY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBZb3V0dWJlVHJhbnNjcmlwdCB9IGZyb20gXCJ5b3V0dWJlLXRyYW5zY3JpcHRcIjtcbmltcG9ydCB7IHN0cmljdF9vdXRwdXQgfSBmcm9tIFwiLi9nZW1pbmlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFlvdXR1YmUoc2VhcmNoUXVlcnk6IHN0cmluZykge1xuICAvLyBoZWxsbyB3b3JsZCA9PiBoZWxsbyt3b3JsZFxuICBzZWFyY2hRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaD9rZXk9JHtwcm9jZXNzLmVudi5ZT1VUVUJFX0FQSV9LRVl9JnE9JHtzZWFyY2hRdWVyeX0mdmlkZW9EdXJhdGlvbj1tZWRpdW0mdmlkZW9FbWJlZGRhYmxlPXRydWUmdHlwZT12aWRlbyZtYXhSZXN1bHRzPTVgXG4gICk7XG4gIGlmICghZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwieW91dHViZSBmYWlsXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChkYXRhLml0ZW1zWzBdID09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUubG9nKFwieW91dHViZSBmYWlsXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBkYXRhLml0ZW1zWzBdLmlkLnZpZGVvSWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc2NyaXB0KHZpZGVvSWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGxldCB0cmFuc2NyaXB0X2FyciA9IGF3YWl0IFlvdXR1YmVUcmFuc2NyaXB0LmZldGNoVHJhbnNjcmlwdCh2aWRlb0lkLCB7XG4gICAgICBsYW5nOiBcImVuXCIsXG4gICAgfSk7XG4gICAgbGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xuICAgIGZvciAobGV0IHQgb2YgdHJhbnNjcmlwdF9hcnIpIHtcbiAgICAgIHRyYW5zY3JpcHQgKz0gdC50ZXh0ICsgXCIgXCI7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2NyaXB0LnJlcGxhY2VBbGwoXCJcXG5cIiwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uc0Zyb21UcmFuc2NyaXB0KFxuICAgIHRyYW5zY3JpcHQ6IHN0cmluZyxcbiAgICBjb3Vyc2VfdGl0bGU6IHN0cmluZ1xuICApIHtcbiAgICB0eXBlIFF1ZXN0aW9uID0ge1xuICAgICAgcXVlc3Rpb246IHN0cmluZztcbiAgICAgIGFuc3dlcjogc3RyaW5nO1xuICAgICAgb3B0aW9uMTogc3RyaW5nO1xuICAgICAgb3B0aW9uMjogc3RyaW5nO1xuICAgICAgb3B0aW9uMzogc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3QgcXVlc3Rpb25zOiBRdWVzdGlvbltdID0gYXdhaXQgc3RyaWN0X291dHB1dChcbiAgICAgIFwiWW91IGFyZSBhIGhlbHBmdWwgQUkgdGhhdCBpcyBhYmxlIHRvIGdlbmVyYXRlIG1jcSBxdWVzdGlvbnMgYW5kIGFuc3dlcnMsIHRoZSBsZW5ndGggb2YgZWFjaCBhbnN3ZXIgc2hvdWxkIG5vdCBiZSBtb3JlIHRoYW4gMTUgd29yZHNcIixcbiAgICAgIG5ldyBBcnJheSg1KS5maWxsKFxuICAgICAgICBgWW91IGFyZSB0byBnZW5lcmF0ZSBhIHJhbmRvbSBtZWRpdW0gdG8gaGFyZCBtY3EgcXVlc3Rpb24gYWJvdXQgJHtjb3Vyc2VfdGl0bGV9YFxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgcXVlc3Rpb246IFwicXVlc3Rpb25cIixcbiAgICAgICAgYW5zd2VyOiBcImFuc3dlciB3aXRoIG1heCBsZW5ndGggb2YgMTUgd29yZHNcIixcbiAgICAgICAgb3B0aW9uMTogXCJvcHRpb24xIHdpdGggbWF4IGxlbmd0aCBvZiAxNSB3b3Jkc1wiLFxuICAgICAgICBvcHRpb24yOiBcIm9wdGlvbjIgd2l0aCBtYXggbGVuZ3RoIG9mIDE1IHdvcmRzXCIsXG4gICAgICAgIG9wdGlvbjM6IFwib3B0aW9uMyB3aXRoIG1heCBsZW5ndGggb2YgMTUgd29yZHNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBxdWVzdGlvbnM7XG4gIH0iXSwibmFtZXMiOlsiYXhpb3MiLCJZb3V0dWJlVHJhbnNjcmlwdCIsInN0cmljdF9vdXRwdXQiLCJzZWFyY2hZb3V0dWJlIiwic2VhcmNoUXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIllPVVRVQkVfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsInVuZGVmaW5lZCIsImlkIiwidmlkZW9JZCIsImdldFRyYW5zY3JpcHQiLCJ0cmFuc2NyaXB0X2FyciIsImZldGNoVHJhbnNjcmlwdCIsImxhbmciLCJ0cmFuc2NyaXB0IiwidCIsInRleHQiLCJyZXBsYWNlQWxsIiwiZXJyb3IiLCJnZXRRdWVzdGlvbnNGcm9tVHJhbnNjcmlwdCIsImNvdXJzZV90aXRsZSIsInF1ZXN0aW9ucyIsIkFycmF5IiwiZmlsbCIsInF1ZXN0aW9uIiwiYW5zd2VyIiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/youtube.ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../../../../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [
      "vendor-chunks/next",
      "vendor-chunks/mime-db",
      "vendor-chunks/axios",
      "vendor-chunks/follow-redirects",
      "vendor-chunks/debug",
      "vendor-chunks/form-data",
      "vendor-chunks/asynckit",
      "vendor-chunks/combined-stream",
      "vendor-chunks/mime-types",
      "vendor-chunks/proxy-from-env",
      "vendor-chunks/ms",
      "vendor-chunks/supports-color",
      "vendor-chunks/delayed-stream",
      "vendor-chunks/has-flag",
      "vendor-chunks/zod",
      "vendor-chunks/@google",
      "vendor-chunks/youtube-transcript",
    ],
    () =>
      __webpack_exec__(
        "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchapter%2FgetInfo%2Froute&page=%2Fapi%2Fchapter%2FgetInfo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchapter%2FgetInfo%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!"
      )
  );
  module.exports = __webpack_exports__;
})();
