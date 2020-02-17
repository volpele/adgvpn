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
/******/ 	return __webpack_require__(__webpack_require__.s = 351);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.6.0 - Mon Dec 23 2019 12:32:53 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var CURRENT_LEVEL = 'DEBUG';
var LEVELS = {
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4
};

var getLocalTimeString = function getLocalTimeString(date) {
  var ONE_MINUTE_MS = 60 * 1000;
  var timeZoneOffsetMs = date.getTimezoneOffset() * ONE_MINUTE_MS;
  var localTime = new Date(date - timeZoneOffsetMs);
  return localTime.toISOString().replace('Z', '');
};

var print = function print(level, method, args) {
  var _console;

  // check log level
  if (LEVELS[CURRENT_LEVEL] < LEVELS[level]) {
    return;
  }

  if (!args || args.length === 0 || !args[0]) {
    return;
  }

  var formatted = getLocalTimeString(new Date()); // eslint-disable-next-line no-console

  (_console = console)[method].apply(_console, [formatted].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));
};

var log = {
  debug: function debug() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    print('DEBUG', 'log', args);
  },
  info: function info() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    print('INFO', 'info', args);
  },
  warn: function warn() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    print('WARN', 'info', args);
  },
  error: function error() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    print('ERROR', 'error', args);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (log);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SETTINGS_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MESSAGES_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR_STATUSES; });
var SETTINGS_IDS = {
  PROXY_ENABLED: 'proxy.enabled',
  RATE_SHOW: 'rate.show',
  EXCLUSIONS: 'exclusions.list',
  HANDLE_WEBRTC_ENABLED: 'webrtc.handle.enabled'
};
var MESSAGES_TYPES = {
  ENDPOINTS_UPDATED: 'vpn.updated',
  CURRENT_ENDPOINT_UPDATED: 'proxy.current.endpoint.updated',
  VPN_TOKEN_NOT_FOUND: 'vpn.token.not.found',
  VPN_INFO_UPDATED: 'vpnInfo.updated',
  AUTHENTICATE_SOCIAL: 'authenticate.social',
  AUTHENTICATE_SOCIAL_SUCCESS: 'authenticate.social.success',
  PERMISSIONS_ERROR_UPDATE: 'permissions.error.update',
  EXCLUSIONS_UPDATED: 'exclusions.updated',
  EXTENSION_PROXY_ENABLED: 'proxy.extension.enabled',
  EXTENSION_PROXY_DISABLED: 'proxy.extension.disabled'
};
var ERROR_STATUSES = {
  NETWORK_ERROR: 'network.error',
  INVALID_TOKEN_ERROR: 'invalid.token.error'
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Notifier */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var Notifier =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notifier, [{
    key: "getListenerId",
    value: function getListenerId() {
      var id = this.listenerId;
      this.listenerId += 1;
      return id;
    }
  }]);

  function Notifier(types) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notifier);

    this.types = {};
    this.events = {};
    this.listeners = {};
    this.listenersEvents = {};
    this.listenerId = 0;
    this.types = types;
    Object.entries(this.types).forEach(function (_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      _this.events[value] = key;
    });
  }
  /**
   * Subscribes listener to the specified events
   *
   * @param {string} events - List of event types listener will be notified of
   * @param {function} listener - Listener object
   * @returns {number} Index of the listener
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notifier, [{
    key: "addSpecifiedListener",
    value: function addSpecifiedListener(events, listener) {
      if (typeof listener !== 'function') {
        throw new Error('Illegal listener');
      }

      var listenerId = this.getListenerId();
      this.listeners[listenerId] = listener;
      this.listenersEvents[listenerId] = events;
      return listenerId;
    }
    /**
     * Subscribe specified listener to all events
     *
     * @param {function} listener Listener
     * @returns {number} Index of the listener
     */

  }, {
    key: "addListener",
    value: function addListener(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Illegal listener');
      }

      var listenerId = this.getListenerId();
      this.listeners[listenerId] = listener;
      return listenerId;
    }
    /**
     * Unsubscribe listener
     * @param listenerId Index of listener to unsubscribe
     */

  }, {
    key: "removeListener",
    value: function removeListener(listenerId) {
      delete this.listeners[listenerId];
      delete this.listenersEvents[listenerId];
    }
    /**
     * Notifies listeners about the events passed as arguments of this function.
     */

  }, {
    key: "notifyListeners",
    value: function notifyListeners(event) {
      if (!event || !(event in this.events)) {
        throw new Error("Illegal event: ".concat(event));
      } // eslint-disable-next-line no-restricted-syntax


      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var _i = 0, _Object$entries = Object.entries(this.listeners); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
            listenerId = _Object$entries$_i[0],
            listener = _Object$entries$_i[1];

        var events = this.listenersEvents[listenerId];

        if (events && events.length > 0 && events.indexOf(event) < 0) {
          // eslint-disable-next-line no-continue
          continue;
        }

        try {
          listener.apply(listener, args);
        } catch (ex) {
          var message = "Error invoking listener for event: \"".concat(event, "\" cause: ").concat(ex);
          throw new Error(message);
        }
      }
    }
  }]);

  return Notifier;
}();
var types = {
  SETTING_UPDATED: 'event.update.setting.value',
  ADD_NON_ROUTABLE_DOMAIN: 'event.add.non.routable.domain',
  CREDENTIALS_UPDATED: 'event.credentials.updated',
  USER_AUTHENTICATED: 'event.authentication.authenticated',
  USER_DEAUTHENTICATED: 'event.authentication.deauthenticated',
  TAB_UPDATED: 'event.tab.updated',
  TAB_ACTIVATED: 'event.tab.activated',
  EXCLUSIONS_UPDATED_BACK_MESSAGE: 'exclusions.updated.back.message'
};
var notifier = new Notifier(types);
/* harmony default export */ __webpack_exports__["a"] = (notifier);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return VPN_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTH_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return WS_API_URL_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTH_ACCESS_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AUTH_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AUTH_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AUTH_REDIRECT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PASSWORD_RECOVERY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PRIVACY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EULA_URL; });
/* unused harmony export BUY_LICENSE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return OTHER_PRODUCTS_URL; });
/* unused harmony export POPUP_STORE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return POPUP_FEEDBACK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return POPUP_DEFAULT_SUPPORT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_ACCOUNT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return WEBSITE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return STORE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FEEDBACK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SUGGEST_FEATURE; });
// https://bit.adguard.com/projects/ADGUARD/repos/adguard-account-service/browse
var ACCOUNT_API_URL = 'https://account.adguard.com/api/1.0'; // https://bit.adguard.com/projects/ADGUARD/repos/adguard-vpn-backend-service/browse

var VPN_API_URL = 'https://backend.adguard.io/api/v1'; // https://bit.adguard.com/projects/ADGUARD/repos/adguard-auth-service/browse

var AUTH_API_URL = 'https://auth.adguard.com'; // Websocket

var WS_API_URL_TEMPLATE = 'wss://{{host}}:8443/user_metrics'; // Auth section

var AUTH_ACCESS_TOKEN_KEY = 'auth.access.token';
var AUTH_CLIENT_ID = 'adguard-vpn-extension';
var AUTH_BASE_URL = 'https://auth.adguard.com/oauth/authorize';
var AUTH_REDIRECT_URI = 'https://auth.adguard.com/oauth.html';
var PASSWORD_RECOVERY_URL = 'https://adguard-vpn.com/forward.html?action=recovery_password&from=popup&app=vpn_extension'; // Privacy and EULA

var PRIVACY_URL = 'https://adguard-vpn.com/forward.html?action=privacy&from=popup&app=vpn_extension';
var EULA_URL = 'https://adguard-vpn.com/forward.html?action=eula&from=popup&app=vpn_extension'; // Commercial

var BUY_LICENSE_URL = 'https://adguard-vpn.com/forward.html?action=buy_license&from=popup&app=vpn_extension';
var OTHER_PRODUCTS_URL = 'https://adguard-vpn.com/forward.html?action=other_products&from=popup&app=vpn_extension';
var POPUP_STORE_URL = 'https://adguard-vpn.com/forward.html?action=store&from=popup&app=vpn_extension'; // Support

var POPUP_FEEDBACK_URL = 'https://adguard-vpn.com/forward.html?action=feedback&from=popup&app=vpn_extension';
var POPUP_DEFAULT_SUPPORT_URL = 'https://adguard-vpn.com/forward.html?action=support&from=popup&app=vpn_extension'; // Options page

var EDIT_ACCOUNT_URL = 'https://adguard-vpn.com/forward.html?action=account_settings&from=options_screen&app=vpn_extension';
var WEBSITE_URL = 'https://adguard-vpn.com/forward.html?action=adguard_site&from=options_screen&app=vpn_extension';
var STORE_URL = 'https://adguard-vpn.com/forward.html?action=store&from=options_screen&app=vpn_extension';
var FEEDBACK_URL = 'https://adguard-vpn.com/forward.html?action=feedback&from=options_screen&app=vpn_extension';
var SUGGEST_FEATURE = 'https://adguard-vpn.com/forward.html?action=suggest_feature&from=options_screen&app=vpn_extension';

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_5__);







var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Storage);

    this.vault = webextension_polyfill__WEBPACK_IMPORTED_MODULE_5___default.a.storage.local;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Storage, [{
    key: "set",
    value: function () {
      var _set = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key, data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.vault.set(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, data)));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function set(_x, _x2) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(key) {
        var value;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.vault.get([key]);

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value[key]);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x3) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(key) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.vault.remove([key]));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function remove(_x4) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);

  return Storage;
}();

var storage = new Storage();
/* harmony default export */ __webpack_exports__["a"] = (storage);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);


var translate = function translate(key) {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.i18n.getMessage(key);
};

var translator = {
  translate: translate
};
/* harmony default export */ __webpack_exports__["a"] = (translator);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(105);

var iterableToArrayLimit = __webpack_require__(106);

var nonIterableRest = __webpack_require__(107);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(46);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(5);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);

// CONCATENATED MODULE: ./src/lib/pacGenerator.js
/**
 * Returns pac script text
 * We use pacScriptTimeToLiveMs in order to make pac script file inactive if
 * it remained in the proxy setting after browser restart
 * @param proxy
 * @param exclusionsList
 * @param inverted
 * @param defaultExclusions
 * @returns {string}
 */
function proxyPacScript(proxy, exclusionsList, inverted, defaultExclusions) {
  // Used to adjust pacscript after application or browser restart
  var pacScriptTimeToLiveMs = 200; // Used to adjust pacscript lifetime after internet reconnection
  // After this period of time pacscript is always considered activated

  var pacScriptActivationTimeoutMs = 2000;
  return "\n            let active = false;\n            const created = ".concat(Date.now(), ";\n            const started = Date.now();\n\n            if (started < (created + ").concat(pacScriptTimeToLiveMs, ")) {\n              active = true;\n            }\n\n            function FindProxyForURL(url, host) {\n                const DIRECT = \"DIRECT\";\n                const PROXY = \"HTTPS ").concat(proxy, "\";\n\n                if (!active && (Date.now() > started + ").concat(pacScriptActivationTimeoutMs, ")) {\n                    active = true;\n                }\n\n                if (!active) {\n                    return DIRECT;\n                }\n\n                const areHostnamesEqual = (hostnameA, hostnameB) => {\n                    const wwwRegex = /^www\\./;\n                    const oldHostnameWithoutWww = hostnameA.replace(wwwRegex, '');\n                    const newHostnameWithoutWww = hostnameB.replace(wwwRegex, '');\n                    return oldHostnameWithoutWww === newHostnameWithoutWww;\n                };\n\n                if (isPlainHostName(host)\n                    || shExpMatch(host, 'localhost')) {\n                    return DIRECT;\n                }\n\n                const defaultExclusions = [").concat(defaultExclusions.map(function (l) {
    return "\"".concat(l, "\"");
  }).join(', '), "];\n                if (defaultExclusions.some(el => (areHostnamesEqual(host, el) || shExpMatch(host, el)))) {\n                    return DIRECT;\n                }\n\n                const inverted = ").concat(inverted, ";\n                const list = [").concat(exclusionsList.map(function (l) {
    return "\"".concat(l, "\"");
  }).join(', '), "];\n\n                if (list.some(el => (areHostnamesEqual(host, el) || shExpMatch(host, el)))) {\n                    if (inverted) {\n                        return PROXY;\n                    } else {\n                        return DIRECT;\n                    }\n                }\n\n                return inverted ? DIRECT : PROXY;\n            }");
}

function directPacScript() {
  return "function FindProxyForURL() {\n        return 'DIRECT';\n    }";
}

var generate = function generate(proxy) {
  var exclusionsList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var defaultExclusions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (!proxy) {
    return directPacScript();
  }

  return proxyPacScript(proxy, exclusionsList, inverted, defaultExclusions);
};

/* harmony default export */ var pacGenerator = ({
  generate: generate
});
// CONCATENATED MODULE: ./src/background/proxy/chrome/proxyApi.js



var proxyApi_proxyGet = function proxyGet() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve) {
    browser_polyfill_default.a.proxy.settings.get(config, function (details) {
      resolve(details);
    });
  });
};
/**
 * @typedef proxyConfig
 * @type {Object}
 * @property {string[]} [bypassList] - array of bypassed values
 * @property {string} [host] - proxy host address
 * @property {number} [port] - proxy port
 * @property {string} [scheme] - proxy scheme
 * @property {{username: string, password: string}} credentials
 * e.g.   const config = {
 *            bypassList: [],
 *            host: 'do-de-fra1-01.adguard.io',
 *            port: 443,
 *            scheme: 'https',
 *            inverted: false,
 *            credentials: {
 *                username: 'foo',
 *                password: 'bar',
 *            }
 *        };
 */

/**
 * @typedef chromeConfig
 * @type {Object}
 *
 * e.g.     const chromeConfig = {
 *               value: {
 *                   mode: "pac_script",
 *                   pacScript: {
 *                       data: "function FindProxyForURL() {return 'DIRECT';}"
 *                   }
 *               },
 *               scope: "regular"
 *           }
 */

/**
 * Converts proxyConfig to chromeConfig
 * @param proxyConfig
 * @returns chromeConfig
 */


var proxyApi_convertToChromeConfig = function convertToChromeConfig(proxyConfig) {
  var bypassList = proxyConfig.bypassList,
      host = proxyConfig.host,
      port = proxyConfig.port,
      inverted = proxyConfig.inverted,
      defaultExclusions = proxyConfig.defaultExclusions;
  var proxyAddress = "".concat(host, ":").concat(port);
  var pacScript = pacGenerator.generate(proxyAddress, bypassList, inverted, defaultExclusions);
  return {
    value: {
      mode: 'pac_script',
      pacScript: {
        data: pacScript
      }
    },
    scope: 'regular'
  };
};

var GLOBAL_PROXY_CONFIG = {};
/**
 * Handles onAuthRequired events
 * @param details
 * @returns {{}|{authCredentials: {password: string, username: string}}}
 */

var onAuthRequiredHandler = function onAuthRequiredHandler(details) {
  var challenger = details.challenger;

  if (challenger && challenger.host !== GLOBAL_PROXY_CONFIG.host) {
    return {};
  }

  return {
    authCredentials: GLOBAL_PROXY_CONFIG.credentials
  };
};

var proxyApi_addAuthHandler = function addAuthHandler() {
  if (browser_polyfill_default.a.webRequest.onAuthRequired.hasListener(onAuthRequiredHandler)) {
    return;
  }

  browser_polyfill_default.a.webRequest.onAuthRequired.addListener(onAuthRequiredHandler, {
    urls: ['<all_urls>']
  }, ['blocking']);
};

var proxyApi_removeAuthHandler = function removeAuthHandler() {
  browser_polyfill_default.a.webRequest.onAuthRequired.removeListener(onAuthRequiredHandler);
};
/**
 * Clears proxy settings
 * @returns {Promise<void>}
 */


var proxyApi_proxyClear = function proxyClear() {
  return new Promise(function (resolve) {
    proxyApi_removeAuthHandler();
    browser_polyfill_default.a.proxy.settings.clear({}, function () {
      GLOBAL_PROXY_CONFIG = {};
      resolve();
    });
  });
};
/**
 * Sets proxy config
 * @param {proxyConfig} config - proxy config
 * @returns {Promise<void>}
 */


var proxyApi_proxySet = function proxySet(config) {
  return new Promise(function (resolve) {
    GLOBAL_PROXY_CONFIG = config;
    proxyApi_addAuthHandler();
    var chromeConfig = proxyApi_convertToChromeConfig(config);
    browser_polyfill_default.a.proxy.settings.set(chromeConfig, function () {
      resolve();
    });
  });
};

var onProxyError = function () {
  return {
    addListener: function addListener(cb) {
      browser_polyfill_default.a.proxy.onProxyError.addListener(cb);
    },
    removeListener: function removeListener(cb) {
      browser_polyfill_default.a.proxy.onProxyError.removeListener(cb);
    }
  };
}();

var proxyApi = {
  proxySet: proxyApi_proxySet,
  proxyGet: proxyApi_proxyGet,
  proxyClear: proxyApi_proxyClear,
  onProxyError: onProxyError
};
/* harmony default export */ var chrome_proxyApi = (proxyApi);
// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./src/background/storage.js
var storage = __webpack_require__(18);

// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(11);

// EXTERNAL MODULE: ./src/background/browserApi/index.js + 1 modules
var browserApi = __webpack_require__(34);

// CONCATENATED MODULE: ./src/background/proxy/proxyConsts.js
var CONNECTION_TYPE_FIREFOX = {
  DIRECT: 'direct'
};
var LEVELS_OF_CONTROL = {
  NOT_CONTROLLABLE: 'not_controllable',
  CONTROLLED_BY_OTHER_EXTENSION: 'controlled_by_other_extensions'
};
var DEFAULT_EXCLUSIONS = ['*.adguard.com', 'adguard.com', '*.adguard-vpn.com', 'adguard-vpn.com', '*.adguard.io', '*.adguard.ws', 'localhost', '*.local', '127.0.0.1'];
// CONCATENATED MODULE: ./src/background/proxy/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return proxy; });





// !IMPORTANT!
// export './abstractProxyApi' is replaced during webpack compilation
// with NormalModuleReplacementPlugin to proper browser implementation
// from './firefox/proxyApi' or ./chrome/proxyApi






var CURRENT_ENDPOINT_KEY = 'proxyCurrentEndpoint';
var DEFAULTS = {
  currentEndpoint: '',
  currentHost: ''
};

var proxy_ExtensionProxy =
/*#__PURE__*/
function () {
  function ExtensionProxy() {
    var _this = this;

    classCallCheck_default()(this, ExtensionProxy);

    this.setBypassList =
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var exclusions,
            inverted,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                exclusions = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
                inverted = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                _this.bypassList = exclusions;
                _this.inverted = inverted;
                _context.next = 6;
                return _this.applyConfig();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }();

    this.setHost =
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(host) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.currentHost = host;
                _context2.next = 3;
                return _this.applyConfig();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.setAccessCredentials =
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(credentials) {
        var endpoint, domainName;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.getCurrentEndpoint();

              case 2:
                endpoint = _context3.sent;

                if (endpoint) {
                  _context3.next = 5;
                  break;
                }

                throw new Error('current endpoint is empty');

              case 5:
                domainName = endpoint.domainName;
                _this.credentials = credentials;

                _this.setHost(domainName);

                return _context3.abrupt("return", {
                  domainName: domainName
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.getDomainName =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      var endpoint;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.getCurrentEndpoint();

            case 2:
              endpoint = _context4.sent;

              if (endpoint) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", null);

            case 5:
              return _context4.abrupt("return", endpoint.domainName);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    this.setCurrentEndpoint =
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(endpoint) {
        var domainName;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.currentEndpoint = endpoint;
                domainName = _this.currentEndpoint.domainName;

                _this.setHost(domainName);

                _context5.next = 5;
                return storage["a" /* default */].set(CURRENT_ENDPOINT_KEY, endpoint);

              case 5:
                browserApi["a" /* default */].runtime.sendMessage({
                  type: constants["b" /* MESSAGES_TYPES */].CURRENT_ENDPOINT_UPDATED,
                  data: endpoint
                });
                return _context5.abrupt("return", {
                  domainName: domainName
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.getCurrentEndpoint =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (_this.currentEndpoint) {
                _context6.next = 4;
                break;
              }

              _context6.next = 3;
              return storage["a" /* default */].get(CURRENT_ENDPOINT_KEY);

            case 3:
              _this.currentEndpoint = _context6.sent;

            case 4:
              return _context6.abrupt("return", _this.currentEndpoint ? _this.currentEndpoint : null);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    this.resetSettings =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee7() {
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this.turnOff();

            case 2:
              _context7.next = 4;
              return storage["a" /* default */].remove(CURRENT_ENDPOINT_KEY);

            case 4:
              _this.currentHost = DEFAULTS.currentHost;
              _this.currentEndpoint = DEFAULTS.currentEndpoint;

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    this.isActive = false;
    this.currentConfig = this.getConfig();
    this.bypassList = [];
    this.currentEndpoint = '';
    this.currentHost = '';
  }

  createClass_default()(ExtensionProxy, [{
    key: "turnOn",
    value: function () {
      var _turnOn = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8() {
        var _ref8, canControlProxy, cause;

        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.canControlProxy();

              case 2:
                _ref8 = _context8.sent;
                canControlProxy = _ref8.canControlProxy;
                cause = _ref8.cause;

                if (canControlProxy) {
                  _context8.next = 7;
                  break;
                }

                throw new Error("Can't set proxy due to: ".concat(cause));

              case 7:
                _context8.prev = 7;
                _context8.next = 10;
                return chrome_proxyApi.proxySet(this.currentConfig);

              case 10:
                this.isActive = true;
                _context8.next = 16;
                break;

              case 13:
                _context8.prev = 13;
                _context8.t0 = _context8["catch"](7);
                throw new Error("Failed to turn on proxy with config: ".concat(JSON.stringify(this.currentConfig), " because of error, ").concat(_context8.t0.message));

              case 16:
                logger["a" /* default */].info('Proxy turned on');
                chrome_proxyApi.onProxyError.addListener(ExtensionProxy.errorHandler);

              case 18:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[7, 13]]);
      }));

      function turnOn() {
        return _turnOn.apply(this, arguments);
      }

      return turnOn;
    }()
  }, {
    key: "turnOff",
    value: function () {
      var _turnOff = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee9() {
        var _ref9, canControlProxy, cause;

        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.canControlProxy();

              case 2:
                _ref9 = _context9.sent;
                canControlProxy = _ref9.canControlProxy;
                cause = _ref9.cause;

                if (!canControlProxy) {
                  // set state to turned off
                  this.isActive = false;
                  chrome_proxyApi.onProxyError.removeListener(ExtensionProxy.errorHandler);
                  logger["a" /* default */].info("Proxy cant be controlled due to: ".concat(cause));
                  logger["a" /* default */].info('Set state to turned off');
                }

                _context9.prev = 6;
                _context9.next = 9;
                return chrome_proxyApi.proxyClear();

              case 9:
                this.isActive = false;
                _context9.next = 15;
                break;

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](6);
                throw new Error("Failed to turn off proxy due to error: ".concat(_context9.t0.message));

              case 15:
                logger["a" /* default */].info('Proxy turned off');
                chrome_proxyApi.onProxyError.removeListener(ExtensionProxy.errorHandler);

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[6, 12]]);
      }));

      function turnOff() {
        return _turnOff.apply(this, arguments);
      }

      return turnOff;
    }()
  }, {
    key: "canControlProxy",
    value: function () {
      var _canControlProxy = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee10() {
        var _ref10, levelOfControl;

        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return chrome_proxyApi.proxyGet();

              case 2:
                _ref10 = _context10.sent;
                levelOfControl = _ref10.levelOfControl;
                _context10.t0 = levelOfControl;
                _context10.next = _context10.t0 === LEVELS_OF_CONTROL.NOT_CONTROLLABLE ? 7 : _context10.t0 === LEVELS_OF_CONTROL.CONTROLLED_BY_OTHER_EXTENSION ? 7 : 8;
                break;

              case 7:
                return _context10.abrupt("return", {
                  canControlProxy: false,
                  cause: levelOfControl
                });

              case 8:
                return _context10.abrupt("return", {
                  canControlProxy: true
                });

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function canControlProxy() {
        return _canControlProxy.apply(this, arguments);
      }

      return canControlProxy;
    }()
  }, {
    key: "getConfig",
    value: function getConfig() {
      return {
        bypassList: this.getBypassList(),
        defaultExclusions: DEFAULT_EXCLUSIONS,
        host: this.currentHost,
        port: 443,
        scheme: 'https',
        inverted: this.inverted,
        credentials: this.credentials
      };
    }
  }, {
    key: "updateConfig",
    value: function updateConfig() {
      this.currentConfig = this.getConfig();
    }
  }, {
    key: "applyConfig",
    value: function () {
      var _applyConfig = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee11() {
        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.updateConfig();

                if (!this.isActive) {
                  _context11.next = 4;
                  break;
                }

                _context11.next = 4;
                return chrome_proxyApi.proxySet(this.currentConfig);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function applyConfig() {
        return _applyConfig.apply(this, arguments);
      }

      return applyConfig;
    }()
  }, {
    key: "getBypassList",
    value: function getBypassList() {
      if (this.bypassList) {
        return toConsumableArray_default()(this.bypassList);
      }

      return [];
    }
  }], [{
    key: "errorHandler",
    value: function errorHandler(details) {
      logger["a" /* default */].error(JSON.stringify(details));
    }
  }]);

  return ExtensionProxy;
}();

var proxy = new proxy_ExtensionProxy();


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(71);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lazyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClosestEndpointByCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatBytes; });
/* unused harmony export sleep */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return runWithCancel; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Returns the value of the property from the cache,
 * otherwise, calculates it using the callback, memoizes it, and returns the value
 * @param {object} obj
 * @param {string} prop
 * @param {function} func
 * @returns {any}
 */

var lazyGet = function lazyGet(obj, prop, func) {
  var cachedProp = "_".concat(prop);

  if (cachedProp in obj) {
    return obj[cachedProp];
  }

  var value = func.apply(obj); // eslint-disable-next-line no-param-reassign

  obj[cachedProp] = value;
  return value;
};
/**
 * Returns hostname of url if it was correct, otherwise return input url
 * @param {string} url
 * @returns {string}
 */

var getUrlProperties = function getUrlProperties(url) {
  var urlObj;

  try {
    urlObj = new URL(url);
  } catch (e) {
    return url;
  }

  return urlObj;
};
/**
 * Returns hostname of url if it was correct, otherwise return input url
 * @param {string} url
 * @returns {string}
 */


var getHostname = function getHostname(url) {
  var urlObj = getUrlProperties(url);
  var hostname = urlObj && urlObj.hostname ? urlObj.hostname : url;
  return hostname;
};
/**
 * Returns protocol of url if it was correct, otherwise return input url
 * @param {string} url
 * @returns {string}
 */

var getProtocol = function getProtocol(url) {
  var urlObj = getUrlProperties(url);
  var protocol = urlObj && urlObj.protocol ? urlObj.protocol : url;
  return protocol;
};
/**
 * Returns the closest endpoint to the current coordinates
 * @param {{ coordinates: [number, number] }} currentEndpoint
 * @param {{ coordinates: [number, number] }[]} endpoints
 * @returns {{ coordinates: [number, number] }}
 */

var getClosestEndpointByCoordinates = function getClosestEndpointByCoordinates(currentEndpoint, endpoints) {
  var coordinates = currentEndpoint.coordinates;
  var distances = endpoints.map(function (endpoint) {
    var _coordinates = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(coordinates, 2),
        lon1 = _coordinates[0],
        lat1 = _coordinates[1];

    var _endpoint$coordinates = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(endpoint.coordinates, 2),
        lon2 = _endpoint$coordinates[0],
        lat2 = _endpoint$coordinates[1];

    var currentCoordinates = {
      longitude: lon1,
      latitude: lat1
    };
    var endpointCoordinates = {
      longitude: lon2,
      latitude: lat2
    };
    return {
      endpoint: endpoint,
      distance: geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_2___default()(currentCoordinates, endpointCoordinates)
    };
  });
  var sortedDistances = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(distances, 'distance');
  return sortedDistances[0].endpoint;
};
/**
 * Formats bytes into units
 * @param {number} bytes
 * @returns {{unit: string, value: string}}
 */

var formatBytes = function formatBytes(bytes) {
  if (!bytes) {
    return {
      value: '0.0',
      unit: 'KB'
    };
  }

  var DECIMALS = 1;
  var UNITS = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  var k = 1000;
  var i = Math.floor(Math.log(bytes) / Math.log(k)) || 1;
  return {
    value: parseFloat(bytes / Math.pow(k, i)).toFixed(DECIMALS),
    unit: UNITS[i]
  };
};
/**
 * awaits given period of time
 * @param wait
 * @returns {Promise<unknown>}
 */

var sleep = function sleep(wait) {
  return new Promise(function (resolve) {
    setTimeout(resolve, wait);
  });
};
/**
 * Runs generator with possibility to cancel
 * @param fn - generator to run
 * @param args - args
 * @returns {{cancel: Function, promise: Promise<unknown>}}
 */

var runWithCancel = function runWithCancel(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var gen = fn.apply(void 0, args);
  var cancelled;
  var cancel;
  var promise = new Promise(function (resolve, reject) {
    // define cancel function to return it from our fn
    cancel = function cancel() {
      cancelled = true; // eslint-disable-next-line prefer-promise-reject-errors

      reject({
        reason: 'cancelled'
      });
    }; // eslint-disable-next-line consistent-return


    function onFulfilled(res) {
      if (!cancelled) {
        var result;

        try {
          result = gen.next(res);
        } catch (e) {
          return reject(e);
        } // eslint-disable-next-line no-use-before-define


        next(result);
      }
    } // eslint-disable-next-line consistent-return


    function onRejected(err) {
      var result;

      try {
        result = gen.throw(err);
      } catch (e) {
        return reject(e);
      } // eslint-disable-next-line no-use-before-define


      next(result);
    }

    function next(_ref) {
      var done = _ref.done,
          value = _ref.value;

      if (done) {
        return resolve(value);
      } // we assume we always receive promises, so no type checks


      return value.then(onFulfilled, onRejected);
    }

    onFulfilled();
  });
  return {
    promise: promise,
    cancel: cancel
  };
};

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js
var index_browser = __webpack_require__(43);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);

// EXTERNAL MODULE: ./node_modules/crypto-js/md5.js
var md5 = __webpack_require__(334);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(92);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./src/background/api/index.js + 2 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./src/background/providers/accountProvider.js




var getVpnToken =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(accessToken) {
    var vpnTokenData, vpnToken, token, licenseStatus, timeExpiresSec, licenseKey, subscription;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api["a" /* accountApi */].getVpnToken(accessToken);

          case 2:
            vpnTokenData = _context.sent;

            if (!(!vpnTokenData || !vpnTokenData.tokens)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", null);

          case 5:
            vpnToken = vpnTokenData.tokens.find(function (token) {
              if (vpnTokenData.token) {
                return token.token === vpnTokenData.token;
              }

              return token.token;
            });

            if (vpnToken) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", null);

          case 8:
            token = vpnToken.token, licenseStatus = vpnToken.license_status, timeExpiresSec = vpnToken.time_expires_sec, licenseKey = vpnToken.license_key, subscription = vpnToken.subscription;
            return _context.abrupt("return", {
              token: token,
              licenseStatus: licenseStatus,
              timeExpiresSec: timeExpiresSec,
              licenseKey: licenseKey,
              subscription: subscription
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getVpnToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getAccountInfo =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(accessToken) {
    var _ref3, email;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api["a" /* accountApi */].getAccountInfo(accessToken);

          case 2:
            _ref3 = _context2.sent;
            email = _ref3.email;
            return _context2.abrupt("return", email);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAccountInfo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var accountProvider = ({
  getVpnToken: getVpnToken,
  getAccountInfo: getAccountInfo
});
// EXTERNAL MODULE: ./src/background/auth.js + 2 modules
var auth = __webpack_require__(64);

// EXTERNAL MODULE: ./src/background/storage.js
var storage = __webpack_require__(18);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./src/background/providers/vpnProvider.js
var vpnProvider = __webpack_require__(65);

// EXTERNAL MODULE: ./src/background/permissionsChecker/permissionsError.js
var permissionsError = __webpack_require__(50);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// EXTERNAL MODULE: ./src/background/proxy/index.js + 3 modules
var proxy = __webpack_require__(21);

// CONCATENATED MODULE: ./src/background/credentials.js
















var credentials_Credentials =
/*#__PURE__*/
function () {
  function Credentials() {
    var _this = this;

    classCallCheck_default()(this, Credentials);

    this.VPN_TOKEN_KEY = 'credentials.token';
    this.APP_ID_KEY = 'credentials.app.id';
    this.VPN_CREDENTIALS_KEY = 'credentials.vpn';

    this.areCredentialsEqual = function (newCred, oldCred) {
      var path = 'result.credentials';
      return get_default()(newCred, path) === get_default()(oldCred, path);
    };

    this.getVpnCredentialsLocal =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var vpnCredentials;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.vpnCredentials) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", _this.vpnCredentials);

            case 2:
              _context.next = 4;
              return storage["a" /* default */].get(_this.VPN_CREDENTIALS_KEY);

            case 4:
              vpnCredentials = _context.sent;
              _this.vpnCredentials = vpnCredentials;
              return _context.abrupt("return", vpnCredentials);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    this.updateProxyCredentials =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var _ref3, credentials;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getAccessCredentials();

            case 2:
              _ref3 = _context2.sent;
              credentials = _ref3.credentials;
              _context2.next = 6;
              return proxy["a" /* proxy */].setAccessCredentials(credentials);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  }

  createClass_default()(Credentials, [{
    key: "getVpnTokenLocal",
    value: function () {
      var _getVpnTokenLocal = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.vpnToken) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this.vpnToken);

              case 2:
                return _context3.abrupt("return", storage["a" /* default */].get(this.VPN_TOKEN_KEY));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getVpnTokenLocal() {
        return _getVpnTokenLocal.apply(this, arguments);
      }

      return getVpnTokenLocal;
    }()
  }, {
    key: "persistVpnToken",
    value: function () {
      var _persistVpnToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(token) {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.vpnToken = token;
                _context4.next = 3;
                return storage["a" /* default */].set(this.VPN_TOKEN_KEY, token);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function persistVpnToken(_x) {
        return _persistVpnToken.apply(this, arguments);
      }

      return persistVpnToken;
    }()
  }, {
    key: "getVpnTokenRemote",
    value: function () {
      var _getVpnTokenRemote = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5() {
        var accessToken, vpnToken;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return auth["a" /* default */].getAccessToken();

              case 2:
                accessToken = _context5.sent;
                vpnToken = null;
                _context5.prev = 4;
                _context5.next = 7;
                return accountProvider.getVpnToken(accessToken);

              case 7:
                vpnToken = _context5.sent;
                _context5.next = 19;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](4);

                if (!(_context5.t0.status === 401)) {
                  _context5.next = 18;
                  break;
                }

                logger["a" /* default */].debug('Access token expired'); // deauthenticate user

                _context5.next = 16;
                return auth["a" /* default */].deauthenticate();

              case 16:
                // clear vpnToken
                this.persistVpnToken(null);
                return _context5.abrupt("return", null);

              case 18:
                throw _context5.t0;

              case 19:
                // save vpnToken in memory
                this.persistVpnToken(vpnToken);
                return _context5.abrupt("return", vpnToken);

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 10]]);
      }));

      function getVpnTokenRemote() {
        return _getVpnTokenRemote.apply(this, arguments);
      }

      return getVpnTokenRemote;
    }()
  }, {
    key: "gainVpnToken",
    value: function () {
      var _gainVpnToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(forceRemote, useLocalFallback) {
        var vpnToken;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!forceRemote) {
                  _context6.next = 16;
                  break;
                }

                _context6.prev = 1;
                _context6.next = 4;
                return this.getVpnTokenRemote();

              case 4:
                vpnToken = _context6.sent;
                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);

                if (useLocalFallback) {
                  _context6.next = 11;
                  break;
                }

                throw _context6.t0;

              case 11:
                if (!(!vpnToken && useLocalFallback)) {
                  _context6.next = 15;
                  break;
                }

                _context6.next = 14;
                return this.getVpnTokenLocal();

              case 14:
                vpnToken = _context6.sent;

              case 15:
                return _context6.abrupt("return", vpnToken);

              case 16:
                _context6.next = 18;
                return this.getVpnTokenLocal();

              case 18:
                vpnToken = _context6.sent;

                if (vpnToken) {
                  _context6.next = 23;
                  break;
                }

                _context6.next = 22;
                return this.getVpnTokenRemote();

              case 22:
                vpnToken = _context6.sent;

              case 23:
                return _context6.abrupt("return", vpnToken);

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 7]]);
      }));

      function gainVpnToken(_x2, _x3) {
        return _gainVpnToken.apply(this, arguments);
      }

      return gainVpnToken;
    }()
  }, {
    key: "isValid",
    value: function isValid(vpnToken) {
      var VALID_VPN_TOKEN_STATUS = 'VALID';
      return !!(vpnToken && vpnToken.licenseStatus === VALID_VPN_TOKEN_STATUS);
    }
  }, {
    key: "gainValidVpnToken",
    value: function () {
      var _gainValidVpnToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7() {
        var forceRemote,
            useLocalFallback,
            vpnToken,
            error,
            _args7 = arguments;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                forceRemote = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;
                useLocalFallback = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : true;
                _context7.next = 4;
                return this.gainVpnToken(forceRemote, useLocalFallback);

              case 4:
                vpnToken = _context7.sent;

                if (this.isValid(vpnToken)) {
                  _context7.next = 9;
                  break;
                }

                error = Error("Vpn token is not valid. Token: ".concat(JSON.stringify(vpnToken)));
                permissionsError["a" /* default */].setError(error);
                throw error;

              case 9:
                return _context7.abrupt("return", vpnToken);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function gainValidVpnToken() {
        return _gainValidVpnToken.apply(this, arguments);
      }

      return gainValidVpnToken;
    }()
    /**
     * Returns valid vpn credentials or throws an error and sets permissionsError
     * @param forceRemote
     * @param useLocalFallback
     * @returns {Promise<*>}
     */

  }, {
    key: "gainValidVpnCredentials",
    value: function () {
      var _gainValidVpnCredentials = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8() {
        var forceRemote,
            useLocalFallback,
            vpnCredentials,
            error,
            _args8 = arguments;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                forceRemote = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : false;
                useLocalFallback = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : true;
                _context8.next = 4;
                return this.gainVpnCredentials(forceRemote, useLocalFallback);

              case 4:
                vpnCredentials = _context8.sent;

                if (this.areCredentialsValid(vpnCredentials)) {
                  _context8.next = 9;
                  break;
                }

                error = Error("Vpn credentials are not valid: Credentials: ".concat(JSON.stringify(vpnCredentials)));
                permissionsError["a" /* default */].setError(error);
                throw error;

              case 9:
                return _context8.abrupt("return", vpnCredentials);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function gainValidVpnCredentials() {
        return _gainValidVpnCredentials.apply(this, arguments);
      }

      return gainValidVpnCredentials;
    }()
    /**
     * Returns valid vpn credentials or null
     * @returns {Promise}
     */

  }, {
    key: "getVpnCredentialsRemote",
    value: function () {
      var _getVpnCredentialsRemote = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee9() {
        var appId, vpnToken, vpnCredentials;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                appId = this.getAppId();
                _context9.next = 3;
                return this.gainValidVpnToken();

              case 3:
                vpnToken = _context9.sent;
                _context9.next = 6;
                return vpnProvider["a" /* default */].getVpnCredentials(appId, vpnToken.token);

              case 6:
                vpnCredentials = _context9.sent;

                if (this.areCredentialsValid(vpnCredentials)) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt("return", null);

              case 9:
                if (this.areCredentialsEqual(vpnCredentials, this.vpnCredentials)) {
                  _context9.next = 17;
                  break;
                }

                this.vpnCredentials = vpnCredentials;
                _context9.next = 13;
                return storage["a" /* default */].set(this.VPN_CREDENTIALS_KEY, vpnCredentials);

              case 13:
                _context9.next = 15;
                return this.updateProxyCredentials();

              case 15:
                notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.CREDENTIALS_UPDATED);
                logger["a" /* default */].info('Got new credentials');

              case 17:
                return _context9.abrupt("return", vpnCredentials);

              case 18:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getVpnCredentialsRemote() {
        return _getVpnCredentialsRemote.apply(this, arguments);
      }

      return getVpnCredentialsRemote;
    }()
  }, {
    key: "areCredentialsValid",
    value: function areCredentialsValid(vpnCredentials) {
      if (!vpnCredentials) {
        return false;
      }

      var licenseStatus = vpnCredentials.licenseStatus,
          timeExpiresSec = vpnCredentials.timeExpiresSec;
      var currentTimeSec = Math.ceil(Date.now() / 1000);
      return !(licenseStatus !== 'VALID' || timeExpiresSec < currentTimeSec);
    }
    /**
     * Checks if credential strings are equal
     * credentials object example:
     * const credentialsObject = {
     *       licenseStatus: "VALID",
     *       result: {
     *           credentials: "fcofp9dhhve2nxjx",
     *           expiresInSec: 13825,
     *       },
     *       timeExpiresSec: 4728282135
     *   }
     * @param newCred
     * @param oldCred
     * @returns {boolean}
     */

  }, {
    key: "gainVpnCredentials",
    value: function () {
      var _gainVpnCredentials = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee10() {
        var forceRemote,
            useLocalFallback,
            vpnCredentials,
            _args10 = arguments;
        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                forceRemote = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : false;
                useLocalFallback = _args10.length > 1 ? _args10[1] : undefined;

                if (!forceRemote) {
                  _context10.next = 18;
                  break;
                }

                _context10.prev = 3;
                _context10.next = 6;
                return this.getVpnCredentialsRemote();

              case 6:
                vpnCredentials = _context10.sent;
                _context10.next = 13;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](3);

                if (useLocalFallback) {
                  _context10.next = 13;
                  break;
                }

                throw _context10.t0;

              case 13:
                if (!(!this.areCredentialsValid(vpnCredentials) && useLocalFallback)) {
                  _context10.next = 17;
                  break;
                }

                _context10.next = 16;
                return this.getVpnCredentialsLocal();

              case 16:
                vpnCredentials = _context10.sent;

              case 17:
                return _context10.abrupt("return", vpnCredentials);

              case 18:
                _context10.next = 20;
                return this.getVpnCredentialsLocal();

              case 20:
                vpnCredentials = _context10.sent;

                if (this.areCredentialsValid(vpnCredentials)) {
                  _context10.next = 25;
                  break;
                }

                _context10.next = 24;
                return this.getVpnCredentialsRemote();

              case 24:
                vpnCredentials = _context10.sent;

              case 25:
                return _context10.abrupt("return", vpnCredentials);

              case 26:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[3, 9]]);
      }));

      function gainVpnCredentials() {
        return _gainVpnCredentials.apply(this, arguments);
      }

      return gainVpnCredentials;
    }()
  }, {
    key: "getAccessCredentials",

    /**
     * Returns access password and username for proxy and websocket domain prefix
     * @returns {Promise<{credentials: {password: string, username: string}, prefix: string}>}
     */
    value: function () {
      var _getAccessCredentials = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee11() {
        var _ref4, token, _ref5, credentials, appId;

        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.gainValidVpnToken();

              case 2:
                _ref4 = _context11.sent;
                token = _ref4.token;
                _context11.next = 6;
                return this.gainValidVpnCredentials();

              case 6:
                _ref5 = _context11.sent;
                credentials = _ref5.result.credentials;
                appId = this.getAppId();
                return _context11.abrupt("return", {
                  prefix: md5_default()("".concat(appId, ":").concat(token, ":").concat(credentials)).toString(),
                  credentials: {
                    username: token,
                    password: credentials
                  },
                  token: token
                });

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getAccessCredentials() {
        return _getAccessCredentials.apply(this, arguments);
      }

      return getAccessCredentials;
    }()
  }, {
    key: "gainAppId",
    value: function () {
      var _gainAppId = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee12() {
        var appId;
        return regenerator_default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return storage["a" /* default */].get(this.APP_ID_KEY);

              case 3:
                appId = _context12.sent;
                _context12.next = 10;
                break;

              case 6:
                _context12.prev = 6;
                _context12.t0 = _context12["catch"](0);
                logger["a" /* default */].error(_context12.t0.message);
                throw _context12.t0;

              case 10:
                if (appId) {
                  _context12.next = 22;
                  break;
                }

                logger["a" /* default */].debug('generating app id');
                appId = index_browser_default()();
                _context12.prev = 13;
                _context12.next = 16;
                return storage["a" /* default */].set(this.APP_ID_KEY, appId);

              case 16:
                _context12.next = 22;
                break;

              case 18:
                _context12.prev = 18;
                _context12.t1 = _context12["catch"](13);
                logger["a" /* default */].error(_context12.t1.message);
                throw _context12.t1;

              case 22:
                return _context12.abrupt("return", appId);

              case 23:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 6], [13, 18]]);
      }));

      function gainAppId() {
        return _gainAppId.apply(this, arguments);
      }

      return gainAppId;
    }()
  }, {
    key: "getAppId",
    value: function getAppId() {
      return this.appId;
    }
  }, {
    key: "fetchUsername",
    value: function () {
      var _fetchUsername = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee13() {
        var accessToken;
        return regenerator_default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return auth["a" /* default */].getAccessToken();

              case 2:
                accessToken = _context13.sent;
                return _context13.abrupt("return", accountProvider.getAccountInfo(accessToken));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function fetchUsername() {
        return _fetchUsername.apply(this, arguments);
      }

      return fetchUsername;
    }()
  }, {
    key: "getUsername",
    value: function () {
      var _getUsername = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee14() {
        return regenerator_default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!this.currentUsername) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt("return", this.currentUsername);

              case 2:
                return _context14.abrupt("return", this.fetchUsername());

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getUsername() {
        return _getUsername.apply(this, arguments);
      }

      return getUsername;
    }()
    /**
     * After every new install or update posts request to the server if wasn't posted yet
     * @param runInfo
     * @param appId
     * @returns {Promise<void>}
     */

  }, {
    key: "trackInstallation",
    value: function () {
      var _trackInstallation = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee15(runInfo, appId) {
        var TRACKED_INSTALLATIONS_KEY, tracked;
        return regenerator_default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                TRACKED_INSTALLATIONS_KEY = 'credentials.tracked.installations';

                if (!(runInfo.isFirstRun || runInfo.isUpdate)) {
                  _context15.next = 18;
                  break;
                }

                _context15.prev = 2;
                _context15.next = 5;
                return storage["a" /* default */].get(TRACKED_INSTALLATIONS_KEY);

              case 5:
                tracked = _context15.sent;

                if (!tracked) {
                  _context15.next = 8;
                  break;
                }

                return _context15.abrupt("return");

              case 8:
                _context15.next = 10;
                return vpnProvider["a" /* default */].postExtensionInstalled(appId);

              case 10:
                _context15.next = 12;
                return storage["a" /* default */].set(TRACKED_INSTALLATIONS_KEY, true);

              case 12:
                logger["a" /* default */].info('Installation successfully tracked');
                _context15.next = 18;
                break;

              case 15:
                _context15.prev = 15;
                _context15.t0 = _context15["catch"](2);
                logger["a" /* default */].error('Error occurred during track request', _context15.t0.message);

              case 18:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[2, 15]]);
      }));

      function trackInstallation(_x4, _x5) {
        return _trackInstallation.apply(this, arguments);
      }

      return trackInstallation;
    }()
  }, {
    key: "handleUserDeauthentication",
    value: function () {
      var _handleUserDeauthentication = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee16() {
        return regenerator_default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.persistVpnToken(null);

              case 2:
                this.vpnCredentials = null;
                _context16.next = 5;
                return storage["a" /* default */].set(this.VPN_CREDENTIALS_KEY, null);

              case 5:
                this.currentUsername = null;

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function handleUserDeauthentication() {
        return _handleUserDeauthentication.apply(this, arguments);
      }

      return handleUserDeauthentication;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee17(runInfo) {
        var forceRemote;
        return regenerator_default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                notifier["a" /* default */].addSpecifiedListener(notifier["a" /* default */].types.USER_DEAUTHENTICATED, this.handleUserDeauthentication.bind(this));
                _context17.next = 4;
                return this.gainAppId();

              case 4:
                this.appId = _context17.sent;
                _context17.next = 7;
                return this.trackInstallation(runInfo, this.appId);

              case 7:
                // On extension initialisation use local fallback if was unable to get data remotely
                // it might be useful on browser restart
                forceRemote = true;
                _context17.next = 10;
                return this.gainValidVpnToken(forceRemote);

              case 10:
                this.vpnToken = _context17.sent;
                _context17.next = 13;
                return this.gainValidVpnCredentials(forceRemote);

              case 13:
                this.vpnCredentials = _context17.sent;
                _context17.next = 16;
                return this.fetchUsername();

              case 16:
                this.currentUsername = _context17.sent;
                _context17.next = 22;
                break;

              case 19:
                _context17.prev = 19;
                _context17.t0 = _context17["catch"](0);
                logger["a" /* default */].debug('Unable to init credentials module, due to error:', _context17.t0.message);

              case 22:
                logger["a" /* default */].info('Credentials module is ready');

              case 23:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 19]]);
      }));

      function init(_x6) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return Credentials;
}();

var credentials_credentials = new credentials_Credentials();
/* harmony default export */ var background_credentials = __webpack_exports__["a"] = (credentials_credentials);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.areaConversion=exports.timeConversion=exports.distanceConversion=exports.altitudeKeys=exports.latitudeKeys=exports.longitudeKeys=exports.MAXLON=exports.MINLON=exports.MAXLAT=exports.MINLAT=exports.earthRadius=exports.sexagesimalPattern=void 0;var sexagesimalPattern=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;exports.sexagesimalPattern=sexagesimalPattern;var earthRadius=6378137;exports.earthRadius=earthRadius;var MINLAT=-90;exports.MINLAT=MINLAT;var MAXLAT=90;exports.MAXLAT=MAXLAT;var MINLON=-180;exports.MINLON=MINLON;var MAXLON=180;exports.MAXLON=MAXLON;var longitudeKeys=["lng","lon","longitude",0];exports.longitudeKeys=longitudeKeys;var latitudeKeys=["lat","latitude",1];exports.latitudeKeys=latitudeKeys;var altitudeKeys=["alt","altitude","elevation","elev",2];exports.altitudeKeys=altitudeKeys;var distanceConversion={m:1,km:0.001,cm:100,mm:1000,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/0.9144};exports.distanceConversion=distanceConversion;var timeConversion={m:60,h:3600,d:86400};exports.timeConversion=timeConversion;var areaConversion={m2:1,km2:0.000001,ha:0.0001,a:0.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};exports.areaConversion=areaConversion;areaConversion.sqm=areaConversion.m2;areaConversion.sqkm=areaConversion.km2;areaConversion.sqft=areaConversion.ft2;areaConversion.sqyd=areaConversion.yd2;areaConversion.sqin=areaConversion.in2;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(174),
    getValue = __webpack_require__(177);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(5);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./src/background/browserApi/runtime.js




/**
 * This function moved into separate api file, in order to hide unhandled promise errors
 * @param args
 * @returns {Promise<void>}
 */

var sendMessage =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var _browser$runtime,
        _args = arguments;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (_browser$runtime = browser_polyfill_default.a.runtime).sendMessage.apply(_browser$runtime, _args);

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            logger["a" /* default */].info(_context.t0.message);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function sendMessage() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var runtime = ({
  sendMessage: sendMessage
});
// CONCATENATED MODULE: ./src/background/browserApi/index.js

var browserApi = {
  runtime: runtime
};
/* harmony default export */ var background_browserApi = __webpack_exports__["a"] = (browserApi);

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(39),
    isObjectLike = __webpack_require__(40);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(37),
    getRawTag = __webpack_require__(100),
    objectToString = __webpack_require__(101);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(321);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

if (false) {}

var crypto = self.crypto || self.msCrypto

// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
var url = '-_'
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
var i = 36
while (i--) {
  // 36 is radix. Number.prototype.toString(36) returns number
  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
  url += i.toString(36)
}
// Loop from 36 to 10 (from Z to A in Base36).
i = 36
while (i-- - 10) {
  url += i.toString(36).toUpperCase()
}

module.exports = function (size) {
  var id = ''
  var bytes = crypto.getRandomValues(new Uint8Array(size || 21))
  i = size || 21

  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (i--) {
    // We can’t use bytes bigger than the alphabet. 63 is 00111111 bitmask.
    // This mask reduces random byte 0-255 to 0-63 values.
    // There is no need in `|| ''` and `* 1.6` hacks in here,
    // because bitmask trim bytes exact to alphabet size.
    id += url[bytes[i] & 63]
  }
  return id
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(67);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(63);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(68);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(49);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/background/api/Api.js + 1 modules
var Api = __webpack_require__(93);

// EXTERNAL MODULE: ./src/background/config.js
var background_config = __webpack_require__(15);

// CONCATENATED MODULE: ./src/background/api/vpnApi.js






 // https://bit.adguard.com/projects/ADGUARD/repos/adguard-vpn-backend-service/browse

var vpnApi_VpnApi =
/*#__PURE__*/
function (_Api) {
  inherits_default()(VpnApi, _Api);

  function VpnApi() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, VpnApi);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(VpnApi)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.GET_ENDPOINTS = {
      path: 'endpoints',
      method: 'GET'
    };

    _this.getEndpoints = function (vpnToken) {
      var _this$GET_ENDPOINTS = _this.GET_ENDPOINTS,
          path = _this$GET_ENDPOINTS.path,
          method = _this$GET_ENDPOINTS.method;
      var params = {
        token: vpnToken
      };
      return _this.makeRequest(path, method, {
        params: params
      });
    };

    _this.GET_VPN_CREDENTIALS = {
      path: 'proxy_credentials',
      method: 'POST'
    };

    _this.getVpnCredentials = function (appId, vpnToken) {
      var _this$GET_VPN_CREDENT = _this.GET_VPN_CREDENTIALS,
          path = _this$GET_VPN_CREDENT.path,
          method = _this$GET_VPN_CREDENT.method;
      var data = {
        app_id: appId,
        token: vpnToken
      };
      var config = {
        data: lib_default.a.stringify(data)
      };
      return _this.makeRequest(path, method, config);
    };

    _this.GET_CURRENT_LOCATION = {
      path: 'geo_location',
      method: 'GET'
    };

    _this.getCurrentLocation = function () {
      var _this$GET_CURRENT_LOC = _this.GET_CURRENT_LOCATION,
          path = _this$GET_CURRENT_LOC.path,
          method = _this$GET_CURRENT_LOC.method;
      return _this.makeRequest(path, method);
    };

    _this.VPN_EXTENSION_INFO = {
      path: 'info/extension',
      method: 'GET'
    };

    _this.getVpnExtensionInfo = function (vpnToken) {
      var _this$VPN_EXTENSION_I = _this.VPN_EXTENSION_INFO,
          path = _this$VPN_EXTENSION_I.path,
          method = _this$VPN_EXTENSION_I.method;
      var params = {
        token: vpnToken
      };
      return _this.makeRequest(path, method, {
        params: params
      });
    };

    _this.TRACK_EXTENSION_INSTALL = {
      path: 'init/extension',
      method: 'POST'
    };

    _this.postExtensionInstalled = function (appId) {
      var _this$TRACK_EXTENSION = _this.TRACK_EXTENSION_INSTALL,
          path = _this$TRACK_EXTENSION.path,
          method = _this$TRACK_EXTENSION.method;
      var config = {
        data: lib_default.a.stringify({
          app_id: appId
        })
      };
      return _this.makeRequest(path, method, config);
    };

    return _this;
  }

  return VpnApi;
}(Api["a" /* default */]);

var vpnApi = new vpnApi_VpnApi(background_config["q" /* VPN_API_URL */]);
/* harmony default export */ var api_vpnApi = (vpnApi);
// EXTERNAL MODULE: ./src/background/api/authApi.js
var authApi = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/background/api/accountApi.js








var accountApi_AccountApi =
/*#__PURE__*/
function (_Api) {
  inherits_default()(AccountApi, _Api);

  function AccountApi() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AccountApi);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AccountApi)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.GET_VPN_TOKEN = {
      path: 'products/licenses/vpn.json',
      method: 'GET'
    };
    _this.GET_ACCOUNT_INFO = {
      path: 'account/info',
      method: 'GET'
    };
    return _this;
  }

  createClass_default()(AccountApi, [{
    key: "getVpnToken",
    value: function getVpnToken(accessToken) {
      var _this$GET_VPN_TOKEN = this.GET_VPN_TOKEN,
          path = _this$GET_VPN_TOKEN.path,
          method = _this$GET_VPN_TOKEN.method;
      var config = {
        headers: {
          Authorization: "Bearer ".concat(accessToken)
        }
      };
      return this.makeRequest(path, method, config);
    }
  }, {
    key: "getAccountInfo",
    value: function getAccountInfo(accessToken) {
      var _this$GET_ACCOUNT_INF = this.GET_ACCOUNT_INFO,
          path = _this$GET_ACCOUNT_INF.path,
          method = _this$GET_ACCOUNT_INF.method;
      var config = {
        headers: {
          Authorization: "Bearer ".concat(accessToken)
        }
      };
      return this.makeRequest(path, method, config);
    }
  }]);

  return AccountApi;
}(Api["a" /* default */]);

var accountApi = new accountApi_AccountApi(background_config["a" /* ACCOUNT_API_URL */]);
/* harmony default export */ var api_accountApi = (accountApi);
// CONCATENATED MODULE: ./src/background/api/index.js
/* concated harmony reexport vpnApi */__webpack_require__.d(__webpack_exports__, "c", function() { return api_vpnApi; });
/* concated harmony reexport authApi */__webpack_require__.d(__webpack_exports__, "b", function() { return authApi["a" /* default */]; });
/* concated harmony reexport accountApi */__webpack_require__.d(__webpack_exports__, "a", function() { return api_accountApi; });







/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(102);

var iterableToArray = __webpack_require__(103);

var nonIterableSpread = __webpack_require__(104);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _lib_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);








var Tabs =
/*#__PURE__*/
function () {
  function Tabs() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tabs);

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.onUpdated.addListener(
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tabId, changeInfo, tab) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (changeInfo.status === 'complete' || changeInfo.status === 'loading') {
                  if (tab && tab.active) {
                    _lib_notifier__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].notifyListeners(_lib_notifier__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].types.TAB_UPDATED, tab.url);
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.onActivated.addListener(
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
        var tabId, tab;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tabId = _ref3.tabId;
                _context2.next = 3;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.get(tabId);

              case 3:
                tab = _context2.sent;

                if (tab && tab.active) {
                  _lib_notifier__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].notifyListeners(_lib_notifier__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].types.TAB_ACTIVATED, tab.url);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Tabs, [{
    key: "getCurrent",
    value: function () {
      var _getCurrent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _ref4, windowId, tabs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.windows.getCurrent();

              case 2:
                _ref4 = _context3.sent;
                windowId = _ref4.id;
                _context3.next = 6;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.query({
                  active: true,
                  windowId: windowId
                });

              case 6:
                tabs = _context3.sent;
                return _context3.abrupt("return", tabs[0]);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getCurrent() {
        return _getCurrent.apply(this, arguments);
      }

      return getCurrent;
    }()
  }, {
    key: "openRecovery",
    value: function () {
      var _openRecovery = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.create({
                  url: _config__WEBPACK_IMPORTED_MODULE_5__[/* PASSWORD_RECOVERY_URL */ "k"]
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function openRecovery() {
        return _openRecovery.apply(this, arguments);
      }

      return openRecovery;
    }()
  }, {
    key: "openTab",
    value: function () {
      var _openTab = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(url) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.create({
                  url: url,
                  active: true
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function openTab(_x5) {
        return _openTab.apply(this, arguments);
      }

      return openTab;
    }()
    /**
     * Closes one or more tabs.
     * @param {(number|number[])} tabsIds
     * @returns {Promise<void>}
     */

  }, {
    key: "closeTab",
    value: function () {
      var _closeTab = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(tabsIds) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.tabs.remove(tabsIds);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function closeTab(_x6) {
        return _closeTab.apply(this, arguments);
      }

      return closeTab;
    }()
  }, {
    key: "openSocialAuthTab",
    value: function () {
      var _openSocialAuthTab = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(authUrl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.openTab(authUrl);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function openSocialAuthTab(_x7) {
        return _openSocialAuthTab.apply(this, arguments);
      }

      return openSocialAuthTab;
    }()
  }]);

  return Tabs;
}();

var tabs = new Tabs();
/* harmony default export */ __webpack_exports__["a"] = (tabs);

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(354);
var parse = __webpack_require__(355);
var formats = __webpack_require__(320);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browserApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




var PermissionsError = function PermissionsError() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PermissionsError);

  this.setError = function (error) {
    if (_this.error !== error) {
      _this.notifyOnUpdate(error);
    }

    _this.error = error;
  };

  this.notifyOnUpdate = function (error) {
    _browserApi__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].runtime.sendMessage({
      type: _lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* MESSAGES_TYPES */ "b"].PERMISSIONS_ERROR_UPDATE,
      data: error
    });
  };

  this.getError = function () {
    return _this.error;
  };

  this.clearError = function () {
    if (_this.error !== null) {
      _this.notifyOnUpdate(null);
    }

    _this.error = null;
  };

  this.error = null;
};

var permissionsError = new PermissionsError();
/* harmony default export */ __webpack_exports__["a"] = (permissionsError);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(54);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(11);

// CONCATENATED MODULE: ./src/background/settings/SettingsService.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SCHEME_VERSION = '3';
var THROTTLE_TIMEOUT = 100;

var SettingsService_SettingsService =
/*#__PURE__*/
function () {
  function SettingsService(storage, defaults) {
    var _this = this;

    classCallCheck_default()(this, SettingsService);

    this.SETTINGS_KEY = 'settings.service.key';

    this.migrateFrom1to2 = function (oldSettings) {
      var exclusions = oldSettings[constants["c" /* SETTINGS_IDS */].EXCLUSIONS];
      var newExclusions = {
        inverted: false,
        blacklist: exclusions,
        whitelist: {}
      };
      return _objectSpread({}, oldSettings, defineProperty_default()({
        VERSION: '2'
      }, constants["c" /* SETTINGS_IDS */].EXCLUSIONS, newExclusions));
    };

    this.migrateFrom2to3 = function (oldSettings) {
      return _objectSpread({}, oldSettings, defineProperty_default()({
        VERSION: '3'
      }, constants["c" /* SETTINGS_IDS */].HANDLE_WEBRTC_ENABLED, _this.defaults[constants["c" /* SETTINGS_IDS */].HANDLE_WEBRTC_ENABLED]));
    };

    this.migrationFunctions = [this.migrateFrom1to2, this.migrateFrom2to3];
    this.persist = throttle_default()(
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var settings,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                settings = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.settings;
                _context.next = 3;
                return _this.storage.set(_this.SETTINGS_KEY, settings);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }(), THROTTLE_TIMEOUT, {
      leading: false
    });
    this.storage = storage;
    this.defaults = defaults;
  }

  createClass_default()(SettingsService, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var settings;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.storage.get(this.SETTINGS_KEY);

              case 3:
                settings = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                logger["a" /* default */].error("Was unable to get ".concat(this.SETTINGS_KEY, " from storage, due to: "), _context2.t0.message);

              case 9:
                if (settings) {
                  _context2.next = 13;
                  break;
                }

                this.settings = _objectSpread({
                  VERSION: SCHEME_VERSION
                }, this.defaults);
                this.persist();
                return _context2.abrupt("return");

              case 13:
                this.settings = this.checkSchemeMatch(settings);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "applyMigrations",
    value: function applyMigrations(newVersion, oldVersion, oldSettings) {
      var migrationsToApply = this.migrationFunctions.slice(oldVersion - 1, newVersion - 1);
      return migrationsToApply.reduce(function (acc, migration) {
        return migration(acc);
      }, oldSettings);
    }
    /**
     * Currently this method doesn't contain logic of migration,
     * because we never have changed the scheme yet
     * @param oldSettings
     * @returns {{VERSION: *}}
     */

  }, {
    key: "migrateSettings",
    value: function migrateSettings(oldSettings) {
      logger["a" /* default */].info("Settings were converted from ".concat(oldSettings.VERSION, " to ").concat(SCHEME_VERSION));
      var newSettings;
      var newVersionInt = Number.parseInt(SCHEME_VERSION, 10);
      var oldVersionInt = Number.parseInt(oldSettings.VERSION, 10);

      if (newVersionInt > oldVersionInt) {
        newSettings = this.applyMigrations(newVersionInt, oldVersionInt, oldSettings);
      } else {
        newSettings = _objectSpread({
          VERSION: SCHEME_VERSION
        }, this.defaults);
      }

      this.persist(newSettings);
      return newSettings;
    }
  }, {
    key: "checkSchemeMatch",
    value: function checkSchemeMatch(settings) {
      var version = settings.VERSION;

      if (version === SCHEME_VERSION) {
        return settings;
      }

      logger["a" /* default */].warn("Expected scheme version ".concat(SCHEME_VERSION, " and got ").concat(version));
      return this.migrateSettings(settings);
    }
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      this.settings[key] = value;
      this.persist();
    }
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings && this.settings[key];
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      return this.settings;
    }
  }, {
    key: "clearSettings",
    value: function () {
      var _clearSettings = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.settings = {};
                _context3.next = 3;
                return this.storage.remove(this.SETTINGS_KEY);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clearSettings() {
        return _clearSettings.apply(this, arguments);
      }

      return clearSettings;
    }()
  }]);

  return SettingsService;
}();

/* harmony default export */ var settings_SettingsService = (SettingsService_SettingsService);
// EXTERNAL MODULE: ./src/background/storage.js
var background_storage = __webpack_require__(18);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// EXTERNAL MODULE: ./src/lib/helpers.js
var helpers = __webpack_require__(23);

// EXTERNAL MODULE: ./src/background/credentials.js + 1 modules
var credentials = __webpack_require__(28);

// EXTERNAL MODULE: ./src/background/proxy/index.js + 3 modules
var proxy = __webpack_require__(21);

// EXTERNAL MODULE: ./src/background/connectivity/connectivity.js + 4 modules
var connectivity = __webpack_require__(69);

// EXTERNAL MODULE: ./src/background/actions.js
var actions = __webpack_require__(94);

// EXTERNAL MODULE: ./src/background/browserApi/index.js + 1 modules
var browserApi = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(155);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(5);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);

// CONCATENATED MODULE: ./src/background/browserApi/webrtc.js




var webrtc_WebRTC = function WebRTC() {
  var _this = this;

  classCallCheck_default()(this, WebRTC);

  this.handleBlockWebRTC = function (webRTCDisabled) {
    // Edge doesn't support privacy api
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy
    if (!browser_polyfill_default.a.privacy) {
      return;
    } // Since chromium 48


    if (typeof_default()(browser_polyfill_default.a.privacy.network.webRTCIPHandlingPolicy) === 'object') {
      if (webRTCDisabled) {
        browser_polyfill_default.a.privacy.network.webRTCIPHandlingPolicy.set({
          value: 'disable_non_proxied_udp',
          scope: 'regular'
        });
      } else {
        browser_polyfill_default.a.privacy.network.webRTCIPHandlingPolicy.clear({
          scope: 'regular'
        });
      }
    }

    if (typeof_default()(browser_polyfill_default.a.privacy.network.peerConnectionEnabled) === 'object') {
      if (webRTCDisabled) {
        browser_polyfill_default.a.privacy.network.peerConnectionEnabled.set({
          value: false,
          scope: 'regular'
        });
      } else {
        browser_polyfill_default.a.privacy.network.peerConnectionEnabled.clear({
          scope: 'regular'
        });
      }
    }
  };

  this.blockWebRTC = function () {
    if (!_this.WEB_RTC_HANDLING_ALLOWED) {
      return;
    }

    _this.handleBlockWebRTC(true);
  };

  this.unblockWebRTC = function () {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!_this.WEB_RTC_HANDLING_ALLOWED && !force) {
      return;
    }

    _this.handleBlockWebRTC(false);
  };

  this.setWebRTCHandlingAllowed = function (webRTCHandlingAllowed, proxyEnabled) {
    _this.WEB_RTC_HANDLING_ALLOWED = webRTCHandlingAllowed;

    if (!webRTCHandlingAllowed || !proxyEnabled) {
      _this.unblockWebRTC(true);
    } else if (webRTCHandlingAllowed && proxyEnabled) {
      _this.blockWebRTC();
    }
  };

  this.WEB_RTC_HANDLING_ALLOWED = false;
};

var webrtc = new webrtc_WebRTC();
/* harmony default export */ var browserApi_webrtc = (webrtc);
// CONCATENATED MODULE: ./src/background/switcher.js




var _marked =
/*#__PURE__*/
regenerator_default.a.mark(turnOnProxy),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(turnOffProxy);











function turnOnProxy() {
  var accessCredentials, _ref, domainName, wsHost;

  return regenerator_default.a.wrap(function turnOnProxy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return credentials["a" /* default */].getAccessCredentials();

        case 3:
          accessCredentials = _context.sent;
          _context.next = 6;
          return proxy["a" /* proxy */].setAccessCredentials(accessCredentials.credentials);

        case 6:
          _ref = _context.sent;
          domainName = _ref.domainName;
          wsHost = "".concat(accessCredentials.prefix, ".").concat(domainName);
          _context.next = 11;
          return connectivity["a" /* default */].setCredentials(wsHost, domainName, accessCredentials.token, true);

        case 11:
          _context.next = 13;
          return proxy["a" /* proxy */].turnOn();

        case 13:
          browserApi_webrtc.blockWebRTC();
          _context.next = 16;
          return actions["a" /* default */].setIconEnabled();

        case 16:
          browserApi["a" /* default */].runtime.sendMessage({
            type: constants["b" /* MESSAGES_TYPES */].EXTENSION_PROXY_ENABLED
          });
          _context.next = 31;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          _context.next = 23;
          return connectivity["a" /* default */].stop();

        case 23:
          _context.next = 25;
          return proxy["a" /* proxy */].turnOff();

        case 25:
          browserApi_webrtc.unblockWebRTC();
          _context.next = 28;
          return actions["a" /* default */].setIconDisabled();

        case 28:
          browserApi["a" /* default */].runtime.sendMessage({
            type: constants["b" /* MESSAGES_TYPES */].EXTENSION_PROXY_DISABLED
          });
          logger["a" /* default */].error(_context.t0 && _context.t0.message);
          throw _context.t0;

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 19]]);
}

function turnOffProxy() {
  return regenerator_default.a.wrap(function turnOffProxy$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return connectivity["a" /* default */].stop();

        case 3:
          _context2.next = 5;
          return proxy["a" /* proxy */].turnOff();

        case 5:
          browserApi_webrtc.unblockWebRTC();
          _context2.next = 8;
          return actions["a" /* default */].setIconDisabled();

        case 8:
          browserApi["a" /* default */].runtime.sendMessage({
            type: constants["b" /* MESSAGES_TYPES */].EXTENSION_PROXY_DISABLED
          });
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          logger["a" /* default */].error(_context2.t0 && _context2.t0.message);
          throw _context2.t0;

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

var switcher_Switcher =
/*#__PURE__*/
function () {
  function Switcher() {
    classCallCheck_default()(this, Switcher);
  }

  createClass_default()(Switcher, [{
    key: "turnOn",
    value: function turnOn(withCancel) {
      if (this.cancel && withCancel) {
        this.cancel();
      }

      var _runWithCancel = Object(helpers["f" /* runWithCancel */])(turnOnProxy),
          promise = _runWithCancel.promise,
          cancel = _runWithCancel.cancel;

      this.cancel = cancel;
      this.promise = promise;
      return promise;
    }
  }, {
    key: "turnOff",
    value: function turnOff(withCancel) {
      if (this.cancel && withCancel) {
        this.cancel();
      }

      var _runWithCancel2 = Object(helpers["f" /* runWithCancel */])(turnOffProxy),
          promise = _runWithCancel2.promise,
          cancel = _runWithCancel2.cancel;

      this.cancel = cancel;
      this.promise = promise;
      return promise;
    }
  }]);

  return Switcher;
}();

var switcher = new switcher_Switcher();
/* harmony default export */ var background_switcher = (switcher);
// CONCATENATED MODULE: ./src/background/settings/settings.js




var _DEFAULT_SETTINGS;








var DEFAULT_SETTINGS = (_DEFAULT_SETTINGS = {}, defineProperty_default()(_DEFAULT_SETTINGS, constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, false), defineProperty_default()(_DEFAULT_SETTINGS, constants["c" /* SETTINGS_IDS */].RATE_SHOW, true), defineProperty_default()(_DEFAULT_SETTINGS, constants["c" /* SETTINGS_IDS */].EXCLUSIONS, {}), defineProperty_default()(_DEFAULT_SETTINGS, constants["c" /* SETTINGS_IDS */].HANDLE_WEBRTC_ENABLED, true), _DEFAULT_SETTINGS);
var settingsService = new settings_SettingsService(background_storage["a" /* default */], DEFAULT_SETTINGS);

var proxySwitcherHandler =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(value) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!value) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return background_switcher.turnOn(true);

          case 4:
            _context.next = 8;
            break;

          case 6:
            _context.next = 8;
            return background_switcher.turnOff(true);

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            settingsService.setSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, false);
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function proxySwitcherHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Returns proxy settings enabled status
 * @returns {boolean}
 */


var settings_isProxyEnabled = function isProxyEnabled() {
  var setting = settingsService.getSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED);
  return setting === true;
};

var setSetting =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(id, value, force) {
    var setting, proxyEnabled;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setting = settingsService.getSetting(id); // No need to change same value unless is not force set

            if (!(setting === value && !force)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", false);

          case 3:
            _context2.t0 = id;
            _context2.next = _context2.t0 === constants["c" /* SETTINGS_IDS */].HANDLE_WEBRTC_ENABLED ? 6 : 9;
            break;

          case 6:
            proxyEnabled = settings_isProxyEnabled();
            browserApi_webrtc.setWebRTCHandlingAllowed(value, proxyEnabled);
            return _context2.abrupt("break", 10);

          case 9:
            return _context2.abrupt("break", 10);

          case 10:
            notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.SETTING_UPDATED, id, value);
            settingsService.setSetting(id, value);
            logger["a" /* default */].info("Setting with id: \"".concat(id, "\" was set to: \"").concat(value, "\""));
            return _context2.abrupt("return", true);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setSetting(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var disableProxy =
/*#__PURE__*/
function () {
  var _ref3 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(force, withCancel) {
    var shouldApply;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return setSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, false, force);

          case 2:
            shouldApply = _context3.sent;

            if (shouldApply) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            _context3.prev = 5;
            _context3.next = 8;
            return background_switcher.turnOff(withCancel);

          case 8:
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](5);
            _context3.next = 14;
            return setSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, true, force);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 10]]);
  }));

  return function disableProxy(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var enableProxy =
/*#__PURE__*/
function () {
  var _ref4 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee4(force, withCancel) {
    var shouldApply;
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return setSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, true, force);

          case 2:
            shouldApply = _context4.sent;

            if (shouldApply) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return");

          case 5:
            _context4.prev = 5;
            _context4.next = 8;
            return background_switcher.turnOn(withCancel);

          case 8:
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](5);
            _context4.next = 14;
            return setSetting(constants["c" /* SETTINGS_IDS */].PROXY_ENABLED, false, force);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 10]]);
  }));

  return function enableProxy(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Checks if setting is enabled
 * @param settingId
 * @returns {boolean}
 */


var isSettingEnabled = function isSettingEnabled(settingId) {
  var enabledSettingValue = true;
  var settingValue = settingsService.getSetting(settingId);
  return settingValue === enabledSettingValue;
};

var applySettings =
/*#__PURE__*/
function () {
  var _ref5 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee5() {
    var proxyEnabled;
    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            proxyEnabled = settings_isProxyEnabled();
            browserApi_webrtc.setWebRTCHandlingAllowed(isSettingEnabled(constants["c" /* SETTINGS_IDS */].HANDLE_WEBRTC_ENABLED), proxyEnabled);
            _context5.next = 5;
            return proxySwitcherHandler(proxyEnabled);

          case 5:
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            _context5.next = 11;
            return disableProxy();

          case 11:
            logger["a" /* default */].info('Settings were applied');

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function applySettings() {
    return _ref5.apply(this, arguments);
  };
}();

var getSetting = function getSetting(id) {
  return settingsService.getSetting(id);
};

var settings_getExclusions = function getExclusions() {
  return settingsService.getSetting(constants["c" /* SETTINGS_IDS */].EXCLUSIONS) || {};
};

var settings_setExclusions = function setExclusions(exclusions) {
  settingsService.setSetting(constants["c" /* SETTINGS_IDS */].EXCLUSIONS, exclusions);
};

var settings_init =
/*#__PURE__*/
function () {
  var _ref6 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee6() {
    return regenerator_default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return settingsService.init();

          case 2:
            logger["a" /* default */].info('Settings module is ready');

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function init() {
    return _ref6.apply(this, arguments);
  };
}();

var settings_settings = {
  init: settings_init,
  getSetting: getSetting,
  setSetting: setSetting,
  disableProxy: disableProxy,
  enableProxy: enableProxy,
  isProxyEnabled: settings_isProxyEnabled,
  SETTINGS_IDS: constants["c" /* SETTINGS_IDS */],
  settingsService: settingsService,
  applySettings: applySettings,
  getExclusions: settings_getExclusions,
  setExclusions: settings_setExclusions
};
/* harmony default export */ var background_settings_settings = __webpack_exports__["a"] = (settings_settings);

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(87),
    isObject = __webpack_require__(29);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(164),
    listCacheDelete = __webpack_require__(165),
    listCacheGet = __webpack_require__(166),
    listCacheHas = __webpack_require__(167),
    listCacheSet = __webpack_require__(168);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(73);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(186);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(111),
    isLength = __webpack_require__(78);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(49);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js
var index_browser = __webpack_require__(43);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(5);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);

// EXTERNAL MODULE: ./src/background/api/index.js + 2 modules
var api = __webpack_require__(44);

// EXTERNAL MODULE: ./src/background/api/authApi.js
var authApi = __webpack_require__(145);

// CONCATENATED MODULE: ./src/background/providers/authProvider.js




var accessTokenModel = {
  fromRemoteToLocal: function fromRemoteToLocal(remoteAccessToken) {
    var accessToken = remoteAccessToken.access_token,
        expiresIn = remoteAccessToken.expires_in,
        scope = remoteAccessToken.scope,
        tokenType = remoteAccessToken.token_type;
    return {
      accessToken: accessToken,
      expiresIn: expiresIn,
      scope: scope,
      tokenType: tokenType
    };
  }
};

var authProvider_getAccessToken =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(credentials) {
    var accessTokenData, errorsMap, _JSON$parse, errorCode, error;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorsMap = {
              '2fa_required': browser_polyfill_default.a.i18n.getMessage('authentication_error_2fa_required'),
              '2fa_invalid': browser_polyfill_default.a.i18n.getMessage('authentication_error_2fa_invalid'),
              account_disabled: browser_polyfill_default.a.i18n.getMessage('authentication_error_account_disabled'),
              account_locked: browser_polyfill_default.a.i18n.getMessage('authentication_error_account_locked'),
              bad_credentials: browser_polyfill_default.a.i18n.getMessage('authentication_error_bad_credentials'),
              default: browser_polyfill_default.a.i18n.getMessage('authentication_error_default')
            };
            _context.prev = 1;
            _context.next = 4;
            return authApi["a" /* default */].getAccessToken(credentials);

          case 4:
            accessTokenData = _context.sent;
            _context.next = 14;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            _JSON$parse = JSON.parse(_context.t0.message), errorCode = _JSON$parse.error_code;

            if (!(errorCode === '2fa_required')) {
              _context.next = 12;
              break;
            }

            throw new Error(JSON.stringify({
              status: errorCode
            }));

          case 12:
            error = errorsMap[errorCode] || errorsMap.default;
            throw new Error(JSON.stringify({
              error: error
            }));

          case 14:
            return _context.abrupt("return", accessTokenModel.fromRemoteToLocal(accessTokenData));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function getAccessToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var authProvider_register =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(credentials) {
    var fieldsMap, errorsMap, accessTokenData, _JSON$parse2, errorCode, field, extensionField, error;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fieldsMap = {
              email: 'username'
            };
            errorsMap = {
              'validation.not_empty': browser_polyfill_default.a.i18n.getMessage('registration_error_not_empty'),
              'validation.not_valid': browser_polyfill_default.a.i18n.getMessage('registration_error_not_valid'),
              'validation.min_length': browser_polyfill_default.a.i18n.getMessage('registration_error_min_length'),
              'validation.compromised.password': browser_polyfill_default.a.i18n.getMessage('registration_error_compromised_password'),
              'validation.unique_constraint': browser_polyfill_default.a.i18n.getMessage('registration_error_unique_constraint'),
              default: browser_polyfill_default.a.i18n.getMessage('registration_error_default')
            };
            _context2.prev = 2;
            _context2.next = 5;
            return authApi["a" /* default */].register(credentials);

          case 5:
            accessTokenData = _context2.sent;
            _context2.next = 14;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            _JSON$parse2 = JSON.parse(_context2.t0.message), errorCode = _JSON$parse2.error_code, field = _JSON$parse2.field;
            extensionField = fieldsMap[field] || field;
            error = errorsMap[errorCode] || errorsMap.default;
            throw new Error(JSON.stringify({
              error: error,
              field: extensionField
            }));

          case 14:
            return _context2.abrupt("return", accessTokenModel.fromRemoteToLocal(accessTokenData));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function register(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var authProvider = ({
  getAccessToken: authProvider_getAccessToken,
  register: authProvider_register
});
// EXTERNAL MODULE: ./src/background/storage.js
var storage = __webpack_require__(18);

// EXTERNAL MODULE: ./src/background/tabs.js
var tabs = __webpack_require__(47);

// EXTERNAL MODULE: ./src/background/proxy/index.js + 3 modules
var proxy = __webpack_require__(21);

// EXTERNAL MODULE: ./src/background/prefs.js + 1 modules
var prefs = __webpack_require__(149);

// CONCATENATED MODULE: ./src/background/notifications.js







var notifications_Notifications = function Notifications() {
  classCallCheck_default()(this, Notifications);

  this.create =
  /*#__PURE__*/
  function () {
    var _ref = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(options) {
      var notificationOptions;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              notificationOptions = {
                type: 'basic',
                iconUrl: prefs["a" /* Prefs */].ICONS.GREEN['128'],
                title: 'AdGuard VPN',
                message: options.message
              };
              _context.next = 3;
              return browser_polyfill_default.a.notifications.create(index_browser_default()(), notificationOptions);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var notifications = new notifications_Notifications();
/* harmony default export */ var background_notifications = (notifications);
// EXTERNAL MODULE: ./src/background/config.js
var config = __webpack_require__(15);

// EXTERNAL MODULE: ./src/background/browserApi/index.js + 1 modules
var browserApi = __webpack_require__(34);

// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(11);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// CONCATENATED MODULE: ./src/background/auth.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var auth_Auth =
/*#__PURE__*/
function () {
  function Auth() {
    classCallCheck_default()(this, Auth);

    this.socialAuthState = null;
    this.accessTokenData = null;
  }

  createClass_default()(Auth, [{
    key: "authenticate",
    value: function () {
      var _authenticate = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(credentials) {
        var accessToken;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return proxy["a" /* proxy */].turnOff();

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                logger["a" /* default */].error(_context.t0.message);

              case 8:
                _context.prev = 8;
                _context.next = 11;
                return authProvider.getAccessToken(credentials);

              case 11:
                accessToken = _context.sent;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t1 = _context["catch"](8);
                return _context.abrupt("return", JSON.parse(_context.t1.message));

              case 17:
                _context.next = 19;
                return this.setAccessToken(accessToken);

              case 19:
                return _context.abrupt("return", {
                  status: 'ok'
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5], [8, 14]]);
      }));

      function authenticate(_x) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
  }, {
    key: "isAuthenticated",
    value: function () {
      var _isAuthenticated = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var accessToken;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getAccessToken();

              case 3:
                accessToken = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", false);

              case 9:
                return _context2.abrupt("return", accessToken);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function isAuthenticated() {
        return _isAuthenticated.apply(this, arguments);
      }

      return isAuthenticated;
    }()
  }, {
    key: "startSocialAuth",
    value: function () {
      var _startSocialAuth = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(socialProvider) {
        var authUrl;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return proxy["a" /* proxy */].turnOff();

              case 3:
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                logger["a" /* default */].error(_context3.t0.message);

              case 8:
                // Generates uniq state id, which will be checked on the auth end
                this.socialAuthState = index_browser_default()();
                authUrl = this.getImplicitAuthUrl(socialProvider);
                _context3.next = 12;
                return tabs["a" /* default */].openSocialAuthTab(authUrl);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      function startSocialAuth(_x2) {
        return _startSocialAuth.apply(this, arguments);
      }

      return startSocialAuth;
    }()
  }, {
    key: "getImplicitAuthUrl",
    value: function getImplicitAuthUrl(socialProvider) {
      var params = {
        response_type: 'token',
        client_id: config["e" /* AUTH_CLIENT_ID */],
        redirect_uri: config["f" /* AUTH_REDIRECT_URI */],
        scope: 'trust',
        state: this.socialAuthState
      };

      switch (socialProvider) {
        case 'google':
          {
            params.social_provider = 'google';
            break;
          }

        case 'twitter':
          {
            params.social_provider = 'twitter';
            break;
          }

        case 'vk':
          {
            params.social_provider = 'vk';
            break;
          }

        case 'yandex':
          {
            params.social_provider = 'yandex';
            break;
          }

        case 'facebook':
          {
            params.social_provider = 'facebook';
            break;
          }

        default:
          throw new Error("There is no such provider: \"".concat(socialProvider, "\""));
      }

      return "".concat(config["d" /* AUTH_BASE_URL */], "?").concat(lib_default.a.stringify(params));
    }
  }, {
    key: "authenticateSocial",
    value: function () {
      var _authenticateSocial = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(queryString, tabId) {
        var data, accessToken, expiresIn, tokenType, state;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = lib_default.a.parse(queryString);
                accessToken = data.access_token, expiresIn = data.expires_in, tokenType = data.token_type, state = data.state;

                if (!(state && state === this.socialAuthState)) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 5;
                return this.setAccessToken({
                  accessToken: accessToken,
                  expiresIn: expiresIn,
                  tokenType: tokenType
                });

              case 5:
                _context4.next = 7;
                return tabs["a" /* default */].closeTab(tabId);

              case 7:
                this.socialAuthState = null;

              case 8:
                _context4.next = 10;
                return browserApi["a" /* default */].runtime.sendMessage({
                  type: constants["b" /* MESSAGES_TYPES */].AUTHENTICATE_SOCIAL_SUCCESS,
                  data: true
                });

              case 10:
                _context4.next = 12;
                return background_notifications.create({
                  message: browser_polyfill_default.a.i18n.getMessage('authentication_successful_social')
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function authenticateSocial(_x3, _x4) {
        return _authenticateSocial.apply(this, arguments);
      }

      return authenticateSocial;
    }()
  }, {
    key: "deauthenticate",
    value: function () {
      var _deauthenticate = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5() {
        var accessToken;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.getAccessToken();

              case 3:
                accessToken = _context5.sent;
                _context5.next = 6;
                return this.removeAccessToken();

              case 6:
                _context5.next = 8;
                return api["b" /* authApi */].revokeToken(accessToken);

              case 8:
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                logger["a" /* default */].error('Unable to revoke token. Error: ', _context5.t0.message);

              case 13:
                _context5.next = 15;
                return proxy["a" /* proxy */].resetSettings();

              case 15:
                notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.USER_DEAUTHENTICATED);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function deauthenticate() {
        return _deauthenticate.apply(this, arguments);
      }

      return deauthenticate;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(credentials) {
        var locale, accessToken, _JSON$parse, error, field;

        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                locale = navigator.language;
                _context6.prev = 1;
                _context6.next = 4;
                return authProvider.register(_objectSpread({}, credentials, {
                  locale: locale,
                  clientId: config["e" /* AUTH_CLIENT_ID */]
                }));

              case 4:
                accessToken = _context6.sent;
                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                _JSON$parse = JSON.parse(_context6.t0.message), error = _JSON$parse.error, field = _JSON$parse.field;
                return _context6.abrupt("return", {
                  error: error,
                  field: field
                });

              case 11:
                if (!accessToken) {
                  _context6.next = 15;
                  break;
                }

                _context6.next = 14;
                return this.setAccessToken(accessToken);

              case 14:
                return _context6.abrupt("return", {
                  status: 'ok'
                });

              case 15:
                return _context6.abrupt("return", {
                  error: browser_polyfill_default.a.i18n.getMessage('global_error_message')
                });

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 7]]);
      }));

      function register(_x5) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "setAccessToken",
    value: function () {
      var _setAccessToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(accessToken) {
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.accessTokenData = accessToken;
                _context7.next = 3;
                return storage["a" /* default */].set(config["b" /* AUTH_ACCESS_TOKEN_KEY */], accessToken);

              case 3:
                notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.USER_AUTHENTICATED);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setAccessToken(_x6) {
        return _setAccessToken.apply(this, arguments);
      }

      return setAccessToken;
    }()
  }, {
    key: "removeAccessToken",
    value: function () {
      var _removeAccessToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8() {
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.accessTokenData = null;
                _context8.next = 3;
                return storage["a" /* default */].remove(config["b" /* AUTH_ACCESS_TOKEN_KEY */]);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function removeAccessToken() {
        return _removeAccessToken.apply(this, arguments);
      }

      return removeAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee9() {
        var accessTokenData;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(this.accessTokenData && this.accessTokenData.accessToken)) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return", this.accessTokenData.accessToken);

              case 2:
                _context9.next = 4;
                return storage["a" /* default */].get(config["b" /* AUTH_ACCESS_TOKEN_KEY */]);

              case 4:
                accessTokenData = _context9.sent;

                if (!(accessTokenData && accessTokenData.accessToken)) {
                  _context9.next = 8;
                  break;
                }

                this.accessTokenData = accessTokenData;
                return _context9.abrupt("return", accessTokenData.accessToken);

              case 8:
                _context9.prev = 8;
                _context9.next = 11;
                return proxy["a" /* proxy */].turnOff();

              case 11:
                _context9.next = 16;
                break;

              case 13:
                _context9.prev = 13;
                _context9.t0 = _context9["catch"](8);
                logger["a" /* default */].error(_context9.t0.message);

              case 16:
                throw new Error('No access token, user is not authenticated');

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[8, 13]]);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee10() {
        var accessTokenData;
        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return storage["a" /* default */].get(config["b" /* AUTH_ACCESS_TOKEN_KEY */]);

              case 2:
                accessTokenData = _context10.sent;

                if (!(!accessTokenData || !accessTokenData.accessToken)) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return");

              case 5:
                this.accessTokenData = accessTokenData;
                notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.USER_AUTHENTICATED);
                logger["a" /* default */].info('Authentication module is ready');

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return Auth;
}();

var auth = new auth_Auth();
/* harmony default export */ var background_auth = __webpack_exports__["a"] = (auth);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(337);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var getEndpoints =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(vpnToken) {
    var endpointsObj, endpoints, uniqEndpoints;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_6__[/* vpnApi */ "c"].getEndpoints(vpnToken);

          case 2:
            endpointsObj = _context.sent;
            endpoints = endpointsObj.endpoints;
            uniqEndpoints = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default()(endpoints, 'city_name');
            return _context.abrupt("return", uniqEndpoints.reduce(function (acc, endpoint) {
              var cityName = endpoint.city_name,
                  countryCode = endpoint.country_code,
                  countryName = endpoint.country_name,
                  domainName = endpoint.domain_name,
                  latitude = endpoint.latitude,
                  longitude = endpoint.longitude,
                  premiumOnly = endpoint.premium_only,
                  publicKey = endpoint.public_key;
              return _objectSpread({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, domainName, {
                id: domainName,
                cityName: cityName,
                countryCode: countryCode,
                countryName: countryName,
                domainName: domainName,
                coordinates: [longitude, latitude],
                premiumOnly: premiumOnly,
                publicKey: publicKey
              }));
            }, {}));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEndpoints(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getSplitter = function getSplitter(localeCode) {
  var dashSplitter = '-';
  var underscoreSplitter = '_';

  if (localeCode.indexOf(dashSplitter) > -1) {
    return dashSplitter;
  }

  if (localeCode.indexOf(underscoreSplitter) > -1) {
    return underscoreSplitter;
  }

  return null;
};

var getLocaleFirstPart = function getLocaleFirstPart(localeCode, splitter) {
  var _localeCode$split = localeCode.split(splitter),
      _localeCode$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_localeCode$split, 1),
      firstPart = _localeCode$split2[0];

  return firstPart;
};

var getLocalizedName = function getLocalizedName(names, locale) {
  if (!names) {
    return null;
  }

  var DEFAULT_LOCALE = 'en'; // eslint-disable-next-line no-param-reassign

  locale = locale || DEFAULT_LOCALE;
  var name = names.find(function (localizedName) {
    return locale === localizedName.locale;
  });

  if (name) {
    return name.name;
  }

  var splitter = getSplitter(locale);

  if (!splitter) {
    return getLocalizedName(names);
  }

  var localeFirstPart = getLocaleFirstPart(locale, splitter);
  return getLocalizedName(names, localeFirstPart);
};

var getCurrentLocation =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var currentLocation, city, country, countryCode, ip, _currentLocation$loca, latitude, longitude, locale, localizedCityName, localizedCountryName;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_6__[/* vpnApi */ "c"].getCurrentLocation();

          case 2:
            currentLocation = _context2.sent;
            city = currentLocation.city, country = currentLocation.country, countryCode = currentLocation.country_code, ip = currentLocation.ip, _currentLocation$loca = currentLocation.location, latitude = _currentLocation$loca.latitude, longitude = _currentLocation$loca.longitude;
            locale = webextension_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.i18n.getUILanguage();
            localizedCityName = city ? getLocalizedName(city.names, locale) : null;
            localizedCountryName = country ? getLocalizedName(country.names, locale) : null;
            return _context2.abrupt("return", {
              cityName: localizedCityName,
              countryName: localizedCountryName,
              countryCode: countryCode,
              ip: ip,
              coordinates: [longitude, latitude]
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCurrentLocation() {
    return _ref2.apply(this, arguments);
  };
}();

var getVpnExtensionInfo =
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(vpnToken) {
    var info, bandwidthFreeMbits, premiumPromoPage, premiumPromoEnabled, refreshTokens, vpnFailurePage;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_6__[/* vpnApi */ "c"].getVpnExtensionInfo(vpnToken);

          case 2:
            info = _context3.sent;
            bandwidthFreeMbits = info.bandwidth_free_mbits, premiumPromoPage = info.premium_promo_page, premiumPromoEnabled = info.premium_promo_enabled, refreshTokens = info.refresh_tokens, vpnFailurePage = info.vpn_failure_page;
            return _context3.abrupt("return", {
              bandwidthFreeMbits: bandwidthFreeMbits,
              premiumPromoPage: premiumPromoPage,
              premiumPromoEnabled: premiumPromoEnabled,
              refreshTokens: refreshTokens,
              vpnFailurePage: vpnFailurePage
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getVpnExtensionInfo(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getVpnCredentials =
/*#__PURE__*/
function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(appId, vpnToken) {
    var responseData, licenseStatus, _responseData$result, credentials, expiresInSec, timeExpiresSec;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_6__[/* vpnApi */ "c"].getVpnCredentials(appId, vpnToken);

          case 2:
            responseData = _context4.sent;
            licenseStatus = responseData.license_status, _responseData$result = responseData.result, credentials = _responseData$result.credentials, expiresInSec = _responseData$result.expires_in_sec, timeExpiresSec = responseData.time_expires_sec;
            return _context4.abrupt("return", {
              licenseStatus: licenseStatus,
              result: {
                credentials: credentials,
                expiresInSec: expiresInSec
              },
              timeExpiresSec: timeExpiresSec
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getVpnCredentials(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var postExtensionInstalled =
/*#__PURE__*/
function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(appId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _api__WEBPACK_IMPORTED_MODULE_6__[/* vpnApi */ "c"].postExtensionInstalled(appId));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function postExtensionInstalled(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var vpnProvider = {
  getEndpoints: getEndpoints,
  getCurrentLocation: getCurrentLocation,
  getVpnExtensionInfo: getVpnExtensionInfo,
  getVpnCredentials: getVpnCredentials,
  postExtensionInstalled: postExtensionInstalled
};
/* harmony default export */ __webpack_exports__["a"] = (vpnProvider);

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(155);

var assertThisInitialized = __webpack_require__(316);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(253);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./src/background/connectivity/connectivity.proto
var connectivity_proto = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/reconnecting-websocket/dist/reconnecting-websocket-mjs.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w !== 'undefined' && !!w && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = undefined;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = undefined;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = undefined;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = undefined;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                // @ts-ignore
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            if (this._ws) {
                return this._ws.readyState;
            }
            return this._options.startClosed
                ? ReconnectingWebSocket.CLOSED
                : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, __spread(['RWS>'], args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (!!url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ var reconnecting_websocket_mjs = (ReconnectingWebSocket);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./src/background/api/websocketApi.js







var websocketApi_WebsocketApi =
/*#__PURE__*/
function () {
  function WebsocketApi(url) {
    var _this = this;

    classCallCheck_default()(this, WebsocketApi);

    this.RECONNECTING_OPTIONS = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000 + Math.random() * 4000,
      reconnectionDelayGrowFactor: 1.3,
      minUptime: 5000,
      connectionTimeout: 4000,
      maxRetries: Infinity,
      maxEnqueuedMessages: Infinity,
      startClosed: true,
      debug: false
    };
    var ws = new reconnecting_websocket_mjs(url, [], this.RECONNECTING_OPTIONS);
    ws.binaryType = 'arraybuffer';
    this.ws = ws;
    this.onClose(function (event) {
      logger["a" /* default */].info('WebSocket closed with next event code:', event.code);
    });
    this.onError(function (event) {
      logger["a" /* default */].warn('Error occurred with socket event:', event);
    });
    this.onOpen(function (event) {
      var url = event.target.url;
      logger["a" /* default */].info("Websocket connection to: ".concat(url, " opened. Retry count: ").concat(_this.ws.retryCount));
    });
  }

  createClass_default()(WebsocketApi, [{
    key: "open",
    value: function open() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.ws.reconnect();

        var removeListeners = function removeListeners() {
          /* eslint-disable no-use-before-define */
          _this2.ws.removeEventListener('open', resolveHandler);

          _this2.ws.removeEventListener('error', rejectHandler);
          /* eslint-enable no-use-before-define */

        }; // TODO [maximtop] implement own websocket reconnecting library,
        //  or find out and fix error in the used library "reconnecting-websocket".
        //  Currently if we call .reconnect() method right after ws constructor
        //  to the distant endpoints, e.g. Australia, Sydney
        //  reconnecting-websocket fails with error:
        //  "failed: Error in connection establishment: net::ERR_SSL_PROTOCOL_ERROR"
        // Uses 1 redundant attempt to avoid error described above


        var MAX_OPEN_ATTEMPTS = 1;
        var attempts = MAX_OPEN_ATTEMPTS;

        function rejectHandler(e) {
          if (attempts) {
            attempts -= 1;
            return;
          }

          reject(e);
          attempts = MAX_OPEN_ATTEMPTS;
          removeListeners();
        }

        function resolveHandler() {
          resolve();
          removeListeners();
        }

        _this2.ws.addEventListener('open', resolveHandler);

        _this2.ws.addEventListener('error', rejectHandler);
      });
    }
  }, {
    key: "send",
    value: function send(message) {
      if (this.ws.readyState === reconnecting_websocket_mjs.OPEN) {
        this.ws.send(message);
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(handler) {
      this.ws.addEventListener('message', handler);
    }
  }, {
    key: "removeMessageListener",
    value: function removeMessageListener(handler) {
      this.ws.removeEventListener('message', handler);
    }
  }, {
    key: "onError",
    value: function onError(cb) {
      this.ws.addEventListener('error', cb);
    }
  }, {
    key: "onClose",
    value: function onClose(cb) {
      this.ws.addEventListener('close', cb);
    }
  }, {
    key: "onOpen",
    value: function onOpen(cb) {
      this.ws.addEventListener('open', cb);
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.ws.close(); // resolve immediately if is closed already


        if (_this3.ws.readyState === 3) {
          resolve();
        }

        var removeListeners = function removeListeners() {
          /* eslint-disable no-use-before-define */
          _this3.ws.removeEventListener('error', rejectHandler);

          _this3.ws.removeEventListener('close', resolveHandler);
          /* eslint-enable no-use-before-define */

        };

        function rejectHandler(e) {
          reject(e);
          removeListeners();
        }

        function resolveHandler() {
          resolve();
          removeListeners();
        }

        _this3.ws.addEventListener('close', resolveHandler);

        _this3.ws.addEventListener('error', rejectHandler);
      });
    }
  }]);

  return WebsocketApi;
}();

var wsFactory = function () {
  var ws;

  var getWebsocket =
  /*#__PURE__*/
  function () {
    var _ref = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(url) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (url) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", null);

            case 2:
              if (!ws) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return ws.close();

            case 5:
              ws = new websocketApi_WebsocketApi(url);
              return _context.abrupt("return", ws);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getWebsocket(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    getWebsocket: getWebsocket
  };
}();

/* harmony default export */ var websocketApi = (wsFactory);
// EXTERNAL MODULE: ./src/background/config.js
var config = __webpack_require__(15);

// EXTERNAL MODULE: ./src/lib/string-utils.js
var string_utils = __webpack_require__(88);

// EXTERNAL MODULE: ./src/background/storage.js
var background_storage = __webpack_require__(18);

// CONCATENATED MODULE: ./src/background/connectivity/statsStorage/StatsStorage.js





var StatsStorage_StatsStorage =
/*#__PURE__*/
function () {
  function StatsStorage(storage) {
    classCallCheck_default()(this, StatsStorage);

    this.STATS_STORAGE_KEY = 'stats.storage.key';
    this.EMPTY_STATS = {
      total: {
        downloaded: 0,
        uploaded: 0
      },
      current: {
        downloaded: 0,
        uploaded: 0
      }
    };
    this.storage = storage;
    this.sessions = new Set();
  }
  /**
   * Received stats contains the traffic gathered since the last check
   * Method adds these values to the total stats and to the current stats
   * (current stats reset when we save stats for the first time after startup)
   *
   * @param domain Proxy domain
   * @param stats Traffic statistic
   * @returns {Promise<void>}
   */


  createClass_default()(StatsStorage, [{
    key: "saveStats",
    value: function () {
      var _saveStats = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(domain, stats) {
        var downloaded, uploaded, key, statsFromStorage, storageStats, _storageStats$total, _storageStats$total$d, totalDownloaded, _storageStats$total$u, totalUploaded, _storageStats$current, _storageStats$current2, currentDownloaded, _storageStats$current3, currentUploaded;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (stats) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                downloaded = stats.downloaded, uploaded = stats.uploaded;
                key = this.getKey(domain);
                _context.next = 6;
                return this.storage.get(key);

              case 6:
                statsFromStorage = _context.sent;
                storageStats = statsFromStorage || this.EMPTY_STATS;
                _storageStats$total = storageStats.total, _storageStats$total$d = _storageStats$total.downloaded, totalDownloaded = _storageStats$total$d === void 0 ? 0 : _storageStats$total$d, _storageStats$total$u = _storageStats$total.uploaded, totalUploaded = _storageStats$total$u === void 0 ? 0 : _storageStats$total$u, _storageStats$current = storageStats.current, _storageStats$current2 = _storageStats$current.downloaded, currentDownloaded = _storageStats$current2 === void 0 ? 0 : _storageStats$current2, _storageStats$current3 = _storageStats$current.uploaded, currentUploaded = _storageStats$current3 === void 0 ? 0 : _storageStats$current3; // If we've just start the session then reset the current traffic counter

                if (!this.sessions.has(domain)) {
                  this.sessions.add(domain);
                  currentDownloaded = 0;
                  currentUploaded = 0;
                }

                totalDownloaded += downloaded;
                totalUploaded += uploaded;
                currentDownloaded += downloaded;
                currentUploaded += uploaded;
                _context.next = 16;
                return this.storage.set(key, {
                  current: {
                    downloaded: currentDownloaded,
                    uploaded: currentUploaded
                  },
                  total: {
                    downloaded: totalDownloaded,
                    uploaded: totalUploaded
                  }
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveStats(_x, _x2) {
        return _saveStats.apply(this, arguments);
      }

      return saveStats;
    }()
  }, {
    key: "getKey",
    value: function getKey(domainName) {
      return "".concat(this.STATS_STORAGE_KEY, "-").concat(domainName);
    }
  }, {
    key: "getStats",
    value: function () {
      var _getStats = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(domain) {
        var key, statsFromStorage, _statsFromStorage$tot, downloaded, uploaded;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                key = this.getKey(domain);
                _context2.next = 3;
                return this.storage.get(key);

              case 3:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.t0 = this.EMPTY_STATS;

              case 6:
                statsFromStorage = _context2.t0;
                _statsFromStorage$tot = statsFromStorage.total, downloaded = _statsFromStorage$tot.downloaded, uploaded = _statsFromStorage$tot.uploaded;
                return _context2.abrupt("return", {
                  downloaded: downloaded,
                  uploaded: uploaded
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStats(_x3) {
        return _getStats.apply(this, arguments);
      }

      return getStats;
    }()
    /**
     * Reset the stats for the proxy domain
     * @param domain Proxy domain
     * @returns {Promise<void>}
     */

  }, {
    key: "resetStats",
    value: function () {
      var _resetStats = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(domain) {
        var key;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                key = this.getKey(domain);
                this.sessions.delete(domain);
                _context3.next = 4;
                return this.storage.set(key, this.EMPTY_STATS);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function resetStats(_x4) {
        return _resetStats.apply(this, arguments);
      }

      return resetStats;
    }()
  }]);

  return StatsStorage;
}();


// CONCATENATED MODULE: ./src/background/connectivity/statsStorage/index.js


var statsStorage = new StatsStorage_StatsStorage(background_storage["a" /* default */]);
/* harmony default export */ var connectivity_statsStorage = (statsStorage);
// EXTERNAL MODULE: ./src/background/credentials.js + 1 modules
var credentials = __webpack_require__(28);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// EXTERNAL MODULE: ./src/background/proxy/index.js + 3 modules
var proxy = __webpack_require__(21);

// CONCATENATED MODULE: ./src/background/connectivity/connectivity.js




// connectivity.proto will be converted to js object by webpack
// https://github.com/protobufjs/protobuf.js#using-generated-static-code
// see webpack proto-loader https://github.com/PermissionData/protobufjs-loader








var CONNECTIVITY_STATE = {
  WORKING: 'working',
  PAUSED: 'paused'
};

var connectivity_Connectivity =
/*#__PURE__*/
function () {
  function Connectivity() {
    var _this = this;

    classCallCheck_default()(this, Connectivity);

    this.PING_UPDATE_INTERVAL_MS = 1000 * 60;
    this.updateCredentials =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var vpnToken, prefix, accessCredentials, domainName, wsHost;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return credentials["a" /* default */].getAccessCredentials();

            case 3:
              accessCredentials = _context.sent;
              prefix = accessCredentials.prefix;
              vpnToken = accessCredentials.token;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return");

            case 11:
              _context.next = 13;
              return proxy["a" /* proxy */].getDomainName();

            case 13:
              domainName = _context.sent;

              if (!(!vpnToken || !prefix || !domainName)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return");

            case 16:
              wsHost = "".concat(prefix, ".").concat(domainName); // do not set if credentials are the same

              if (!(wsHost === _this.wsHost && domainName === _this.domainName && vpnToken === _this.vpnToken)) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return");

            case 19:
              _context.next = 21;
              return _this.setCredentials(wsHost, domainName, vpnToken);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    this.start =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var averagePing;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.state !== CONNECTIVITY_STATE.WORKING)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return _this.ws.open();

            case 3:
              _this.state = CONNECTIVITY_STATE.WORKING;

            case 4:
              _this.startGettingPing();

              _this.startGettingConnectivityInfo(); // when first ping received we can connect to proxy


              _context2.next = 8;
              return _this.getAveragePing();

            case 8:
              averagePing = _context2.sent;

              _this.updatePingValue(averagePing);

              return _context2.abrupt("return", averagePing);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    this.stop =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (_this.pingGetInterval) {
                clearInterval(_this.pingGetInterval);
              }

              _this.ping = null;

              if (!_this.ws) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return _this.ws.close();

            case 5:
              _this.state = CONNECTIVITY_STATE.PAUSED;

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    this.preparePingMessage = function (currentTime) {
      var pingMsg = connectivity_proto["WsPingMsg"].create({
        requestTime: currentTime,
        token: Object(string_utils["d" /* stringToUint8Array */])(_this.vpnToken),
        applicationId: Object(string_utils["d" /* stringToUint8Array */])(credentials["a" /* default */].getAppId())
      });
      var protocolMsg = connectivity_proto["WsConnectivityMsg"].create({
        pingMsg: pingMsg
      });
      return connectivity_proto["WsConnectivityMsg"].encode(protocolMsg).finish();
    };

    this.decodeMessage = function (arrBufMessage) {
      var message = connectivity_proto["WsConnectivityMsg"].decode(new Uint8Array(arrBufMessage));
      return connectivity_proto["WsConnectivityMsg"].toObject(message);
    };

    this.pollPing = function () {
      return new Promise(function (resolve) {
        var arrBufMessage = _this.preparePingMessage(Date.now());

        _this.ws.send(arrBufMessage);

        var messageHandler = function messageHandler(event) {
          var receivedTime = Date.now();

          var _this$decodeMessage = _this.decodeMessage(event.data),
              pingMsg = _this$decodeMessage.pingMsg;

          if (pingMsg) {
            var requestTime = pingMsg.requestTime;
            var ping = receivedTime - requestTime;

            _this.ws.removeMessageListener(messageHandler);

            resolve(ping);
          }
        };

        _this.ws.onMessage(messageHandler);
      });
    };

    this.getAveragePing =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      var POLLS_NUM, results, i, result, sum;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              POLLS_NUM = 3;
              results = [];
              i = 0;

            case 3:
              if (!(i < POLLS_NUM)) {
                _context4.next = 11;
                break;
              }

              _context4.next = 6;
              return _this.pollPing();

            case 6:
              result = _context4.sent;
              results.push(result);

            case 8:
              i += 1;
              _context4.next = 3;
              break;

            case 11:
              sum = results.reduce(function (prev, next) {
                return prev + next;
              });
              return _context4.abrupt("return", Math.floor(sum / POLLS_NUM));

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    this.updatePingValue = function (ping) {
      _this.ping = ping;
    };

    this.startGettingPing =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (_this.pingGetInterval) {
                clearInterval(_this.pingGetInterval);
              }

              _this.pingGetInterval = setInterval(
              /*#__PURE__*/
              asyncToGenerator_default()(
              /*#__PURE__*/
              regenerator_default.a.mark(function _callee5() {
                var averagePing;
                return regenerator_default.a.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _this.getAveragePing();

                      case 2:
                        averagePing = _context5.sent;

                        _this.updatePingValue(averagePing);

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })), _this.PING_UPDATE_INTERVAL_MS);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    this.updateConnectivityInfo =
    /*#__PURE__*/
    function () {
      var _ref7 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(stats) {
        var _stats$bytesDownloade, bytesDownloaded, _stats$bytesUploaded, bytesUploaded;

        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _stats$bytesDownloade = stats.bytesDownloaded, bytesDownloaded = _stats$bytesDownloade === void 0 ? 0 : _stats$bytesDownloade, _stats$bytesUploaded = stats.bytesUploaded, bytesUploaded = _stats$bytesUploaded === void 0 ? 0 : _stats$bytesUploaded;
                _context7.next = 3;
                return connectivity_statsStorage.saveStats(_this.domainName, {
                  downloaded: bytesDownloaded,
                  uploaded: bytesUploaded
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.handleErrorMsg = function (connectivityErrorMsg) {
      var NON_ROUTABLE_CODE = 'NON_ROUTABLE';
      var code = connectivityErrorMsg.code,
          payload = connectivityErrorMsg.payload;

      if (code === NON_ROUTABLE_CODE) {
        notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.ADD_NON_ROUTABLE_DOMAIN, payload);
      }
    };

    this.startGettingConnectivityInfo =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee9() {
      var messageHandler;
      return regenerator_default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              messageHandler =
              /*#__PURE__*/
              function () {
                var _ref9 = asyncToGenerator_default()(
                /*#__PURE__*/
                regenerator_default.a.mark(function _callee8(event) {
                  var _this$decodeMessage2, connectivityInfoMsg, connectivityErrorMsg;

                  return regenerator_default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _this$decodeMessage2 = _this.decodeMessage(event.data), connectivityInfoMsg = _this$decodeMessage2.connectivityInfoMsg, connectivityErrorMsg = _this$decodeMessage2.connectivityErrorMsg;

                          if (!connectivityInfoMsg) {
                            _context8.next = 4;
                            break;
                          }

                          _context8.next = 4;
                          return _this.updateConnectivityInfo(connectivityInfoMsg);

                        case 4:
                          if (connectivityErrorMsg) {
                            _this.handleErrorMsg(connectivityErrorMsg);
                          }

                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function messageHandler(_x2) {
                  return _ref9.apply(this, arguments);
                };
              }();

              _this.ws.onMessage(messageHandler);

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    this.getPing = function () {
      if (!_this.ping || _this.state === CONNECTIVITY_STATE.PAUSED) {
        return null;
      }

      return _this.ping;
    };

    this.getStats =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee10() {
      var stats;
      return regenerator_default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(_this.state === CONNECTIVITY_STATE.PAUSED)) {
                _context10.next = 2;
                break;
              }

              return _context10.abrupt("return", null);

            case 2:
              _context10.next = 4;
              return connectivity_statsStorage.getStats(_this.domainName);

            case 4:
              stats = _context10.sent;
              return _context10.abrupt("return", {
                bytesDownloaded: stats.downloaded,
                bytesUploaded: stats.uploaded
              });

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    this.state = CONNECTIVITY_STATE.PAUSED;
    notifier["a" /* default */].addSpecifiedListener(notifier["a" /* default */].types.CREDENTIALS_UPDATED, this.updateCredentials);
  }

  createClass_default()(Connectivity, [{
    key: "setCredentials",
    value: function () {
      var _setCredentials = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee11(wsHost, domainName, vpnToken, shouldStart) {
        var restart, websocketUrl;
        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.vpnToken = vpnToken;
                this.domainName = domainName;
                this.wsHost = wsHost;
                restart = false;

                if (!(this.state === CONNECTIVITY_STATE.WORKING)) {
                  _context11.next = 8;
                  break;
                }

                restart = true;
                _context11.next = 8;
                return this.stop();

              case 8:
                websocketUrl = Object(string_utils["b" /* renderTemplate */])(config["s" /* WS_API_URL_TEMPLATE */], {
                  host: wsHost
                });
                _context11.prev = 9;
                _context11.next = 12;
                return websocketApi.getWebsocket(websocketUrl);

              case 12:
                this.ws = _context11.sent;
                _context11.next = 19;
                break;

              case 15:
                _context11.prev = 15;
                _context11.t0 = _context11["catch"](9);
                this.state = CONNECTIVITY_STATE.PAUSED;
                throw new Error("Failed to create new websocket because of: ".concat(JSON.stringify(_context11.t0.message)));

              case 19:
                if (!(restart || shouldStart)) {
                  _context11.next = 22;
                  break;
                }

                _context11.next = 22;
                return this.start();

              case 22:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[9, 15]]);
      }));

      function setCredentials(_x3, _x4, _x5, _x6) {
        return _setCredentials.apply(this, arguments);
      }

      return setCredentials;
    }()
  }]);

  return Connectivity;
}();

var connectivity = new connectivity_Connectivity();
/* harmony default export */ var connectivity_connectivity = __webpack_exports__["a"] = (connectivity);

/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(160),
    isObjectLike = __webpack_require__(40);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31),
    root = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(178),
    mapCacheDelete = __webpack_require__(185),
    mapCacheGet = __webpack_require__(187),
    mapCacheHas = __webpack_require__(188),
    mapCacheSet = __webpack_require__(189);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(203),
    baseKeys = __webpack_require__(208),
    isArrayLike = __webpack_require__(59);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(27),
    isSymbol = __webpack_require__(38);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var getCoordinateKey=function getCoordinateKey(point,keysToLookup){return keysToLookup.reduce(function(foundKey,key){if(typeof point==="undefined"||point===null){throw new Error("'".concat(point,"' is no valid coordinate."))}if(Object.prototype.hasOwnProperty.call(point,key)&&typeof key!=="undefined"&&typeof foundKey==="undefined"){foundKey=key;return key}return foundKey},undefined)};var _default=getCoordinateKey;exports.default=_default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var isDecimal=function isDecimal(value){var checkedValue=value.toString().trim();if(isNaN(parseFloat(checkedValue))){return false}return parseFloat(checkedValue)===Number(checkedValue)};var _default=isDecimal;exports.default=_default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=__webpack_require__(30);var isSexagesimal=function isSexagesimal(value){return _constants.sexagesimalPattern.test(value.toString().trim())};var _default=isSexagesimal;exports.default=_default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=__webpack_require__(30);var sexagesimalToDecimal=function sexagesimalToDecimal(sexagesimal){var data=new RegExp(_constants.sexagesimalPattern).exec(sexagesimal);if(typeof data==="undefined"||data===null){throw new Error("Given value is not in sexagesimal format")}var min=Number(data[2])/60||0;var sec=Number(data[4])/3600||0;var decimal=parseFloat(data[1])+min+sec;return["S","W"].includes(data[7])?-decimal:decimal};var _default=sexagesimalToDecimal;exports.default=_default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(385);

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(386);

// base class of rpc.Service
util.EventEmitter = __webpack_require__(387);

// float handling accross browsers
util.float = __webpack_require__(388);

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(389);

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(390);

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(391);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(392);

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29),
    now = __webpack_require__(98),
    toNumber = __webpack_require__(99);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return stringToUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areHostnamesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shExpMatch; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Renders string templates
 *
 * e.g.
 * const template = "https://{{host}}/path"
 * const tags = { host: example.org }
 * console.log(renderTemplate(template, tags)); -> outputs: "https://example.org/path"
 *
 * @param {string} template
 * @param {object} tags
 * @returns {string}
 */
var renderTemplate = function renderTemplate(template, tags) {
  return Object.entries(tags).reduce(function (acc, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var regex = new RegExp("{{".concat(key, "}}"), 'g');
    return acc.replace(regex, value);
  }, template);
};
/**
 * Converts string into Uint8Array
 * @param str
 * @returns {!Uint8Array}
 */

var stringToUint8Array = function stringToUint8Array(str) {
  return new TextEncoder('utf-8').encode(str);
};
/**
 * Compares if two hostnames w/ or w/o www are equal
 * @param hostnameA
 * @param hostnameB
 * @returns {boolean}
 */

var areHostnamesEqual = function areHostnamesEqual(hostnameA, hostnameB) {
  var wwwRegex = /^www\./;
  var oldHostnameWithoutWww = hostnameA.replace(wwwRegex, '');
  var newHostnameWithoutWww = hostnameB.replace(wwwRegex, '');
  return oldHostnameWithoutWww === newHostnameWithoutWww;
};
/**
 * Checks is wildcard pattern matches with url
 * @param url
 * @param pattern
 * @returns {boolean}
 */

var shExpMatch = function shExpMatch(url, pattern) {
  var regexpStr = pattern.replace(/\./g, '\\.');
  regexpStr = regexpStr.replace(/\*/g, '.*');
  var regexp = new RegExp("^".concat(regexpStr, "$"));
  return regexp.test(url);
};

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/background/browserApi/index.js + 1 modules
var browserApi = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(20);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js
var index_browser = __webpack_require__(43);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);

// EXTERNAL MODULE: ./src/lib/helpers.js
var helpers = __webpack_require__(23);

// EXTERNAL MODULE: ./src/lib/string-utils.js
var string_utils = __webpack_require__(88);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./src/background/exclusions/ExclusionsHandler.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ExclusionsHandler_ExclusionsHandler =
/*#__PURE__*/
function () {
  function ExclusionsHandler(updateHandler, _exclusions, type) {
    var _this = this;

    classCallCheck_default()(this, ExclusionsHandler);

    this.handleExclusionsUpdate = function (exclusions) {
      if (exclusions && exclusions.length > 0) {
        _this.updateHandler(_this._type, _this._exclusions, exclusions);
      } else {
        _this.updateHandler(_this._type, _this._exclusions);
      }
    };

    this.addToExclusions =
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(url) {
        var enabled,
            options,
            hostname,
            _options$considerWild,
            considerWildcard,
            _options$forceEnable,
            forceEnable,
            exclusions,
            shouldUpdate,
            exclusion,
            _exclusions2,
            id,
            _args = arguments;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                enabled = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                hostname = Object(helpers["c" /* getHostname */])(url);

                if (hostname) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _options$considerWild = options.considerWildcard, considerWildcard = _options$considerWild === void 0 ? true : _options$considerWild, _options$forceEnable = options.forceEnable, forceEnable = _options$forceEnable === void 0 ? true : _options$forceEnable; // check there are already exclusions for current url

                exclusions = _this.getExclusionsByUrl(url, considerWildcard);
                shouldUpdate = false;

                // if it was disabled, enable, otherwise add the new one
                if (exclusions.length > 0) {
                  _exclusions2 = slicedToArray_default()(exclusions, 1);
                  exclusion = _exclusions2[0];

                  if (!exclusion.enabled && enabled && forceEnable) {
                    _this._exclusions[exclusion.id] = _objectSpread({}, exclusion, {
                      enabled: enabled
                    });
                    shouldUpdate = true;
                  }
                } else {
                  id = index_browser_default()();
                  exclusion = {
                    id: id,
                    hostname: hostname,
                    enabled: enabled
                  };
                  _this._exclusions[id] = exclusion;
                  logger["a" /* default */].info("Added to exclusions: ".concat(hostname));
                  shouldUpdate = true;
                }

                if (!shouldUpdate) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return _this.handleExclusionsUpdate(exclusion);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.removeFromExclusions =
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(id) {
        var exclusion;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                exclusion = _this._exclusions[id];

                if (exclusion) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                delete _this._exclusions[id];
                _context2.next = 6;
                return _this.handleExclusionsUpdate(exclusion);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.disableExclusionByUrl =
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(hostname) {
        var exclusions;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                exclusions = _this.getExclusionsByUrl(hostname);
                exclusions.forEach(function (exclusion) {
                  _this._exclusions[exclusion.id] = _objectSpread({}, exclusion, {
                    enabled: false
                  });
                });
                _context3.next = 4;
                return _this.handleExclusionsUpdate(exclusions);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.getExclusionsByUrl = function (url) {
      var includeWildcards = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var hostname = Object(helpers["c" /* getHostname */])(url);

      if (!hostname) {
        return undefined;
      }

      return Object.values(_this._exclusions).filter(function (exclusion) {
        return Object(string_utils["a" /* areHostnamesEqual */])(hostname, exclusion.hostname) || includeWildcards && Object(string_utils["c" /* shExpMatch */])(url, exclusion.hostname);
      });
    };

    this.isExcluded = function (url) {
      var exclusions = _this.getExclusionsByUrl(url);

      return exclusions.some(function (exclusion) {
        return exclusion.enabled;
      });
    };

    this.toggleExclusion =
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(id) {
        var exclusion;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                exclusion = _this._exclusions[id];

                if (exclusion) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                exclusion = _objectSpread({}, exclusion, {
                  enabled: !exclusion.enabled
                });
                _this._exclusions[id] = exclusion;
                _context4.next = 7;
                return _this.handleExclusionsUpdate(exclusion);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.renameExclusion =
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(id, newUrl) {
        var hostname, exclusion;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                hostname = Object(helpers["c" /* getHostname */])(newUrl);

                if (hostname) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                exclusion = _this._exclusions[id];

                if (exclusion) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                _this._exclusions[id] = _objectSpread({}, exclusion, {
                  hostname: hostname
                });
                _context5.next = 9;
                return _this.handleExclusionsUpdate();

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.clearExclusions =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this._exclusions = {};
              _context6.next = 3;
              return _this.handleExclusionsUpdate();

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    this.getExclusionsList = function () {
      return Object.values(_this._exclusions);
    };

    this.updateHandler = updateHandler;
    this._exclusions = _exclusions;
    this._type = type;
  }

  createClass_default()(ExclusionsHandler, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "exclusions",
    get: function get() {
      return this._exclusions;
    }
  }]);

  return ExclusionsHandler;
}();


// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(11);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// CONCATENATED MODULE: ./src/background/exclusions/Exclusions.js










var Exclusions_Exclusions =
/*#__PURE__*/
function () {
  function Exclusions(browser, proxy, settings) {
    var _this = this;

    classCallCheck_default()(this, Exclusions);

    this.TYPES = {
      WHITELIST: 'whitelist',
      BLACKLIST: 'blacklist'
    };
    this.init =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var _ref2, _this$exclusions, _ref3, _this$exclusions2, _ref4, _this$exclusions3;

      var whitelist, blacklist;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.exclusions = _this.settings.getExclusions() || {};
              whitelist = (_ref2 = (_this$exclusions = _this.exclusions) === null || _this$exclusions === void 0 ? void 0 : _this$exclusions[_this.TYPES.WHITELIST]) !== null && _ref2 !== void 0 ? _ref2 : {};
              blacklist = (_ref3 = (_this$exclusions2 = _this.exclusions) === null || _this$exclusions2 === void 0 ? void 0 : _this$exclusions2[_this.TYPES.BLACKLIST]) !== null && _ref3 !== void 0 ? _ref3 : {};
              _this.inverted = (_ref4 = (_this$exclusions3 = _this.exclusions) === null || _this$exclusions3 === void 0 ? void 0 : _this$exclusions3.inverted) !== null && _ref4 !== void 0 ? _ref4 : false;
              _this.whitelistHandler = new ExclusionsHandler_ExclusionsHandler(_this.handleExclusionsUpdate, whitelist, _this.TYPES.WHITELIST);
              _this.blacklistHandler = new ExclusionsHandler_ExclusionsHandler(_this.handleExclusionsUpdate, blacklist, _this.TYPES.BLACKLIST);
              _this.currentHandler = _this.inverted ? _this.whitelistHandler : _this.blacklistHandler; // update bypass list in proxy on init

              _context.next = 9;
              return _this.handleExclusionsUpdate();

            case 9:
              notifier["a" /* default */].addSpecifiedListener(notifier["a" /* default */].types.ADD_NON_ROUTABLE_DOMAIN, function (payload) {
                if (_this.currentHandler.type === _this.TYPES.BLACKLIST) {
                  _this.currentHandler.addToExclusions(payload, true, {
                    forceEnable: false
                  });
                }
              });
              logger["a" /* default */].info('ExclusionsHandler list is ready');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    this.handleExclusionsUpdate =
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(exclusions) {
        var _exclusionsRepository;

        var enabledExclusions, exclusionsRepository;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (exclusions) {
                  _this.browser.runtime.sendMessage({
                    type: constants["b" /* MESSAGES_TYPES */].EXCLUSIONS_UPDATED,
                    data: {
                      exclusions: exclusions
                    }
                  });

                  notifier["a" /* default */].notifyListeners(notifier["a" /* default */].types.EXCLUSIONS_UPDATED_BACK_MESSAGE);
                }

                enabledExclusions = _this.current.getExclusionsList().filter(function (_ref6) {
                  var enabled = _ref6.enabled;
                  return enabled;
                }).map(function (_ref7) {
                  var hostname = _ref7.hostname;
                  return hostname;
                });
                _context2.next = 4;
                return _this.proxy.setBypassList(enabledExclusions, _this.inverted);

              case 4:
                exclusionsRepository = (_exclusionsRepository = {
                  inverted: _this.inverted
                }, defineProperty_default()(_exclusionsRepository, _this.TYPES.WHITELIST, _this.whitelist.exclusions), defineProperty_default()(_exclusionsRepository, _this.TYPES.BLACKLIST, _this.blacklist.exclusions), _exclusionsRepository);

                _this.settings.setExclusions(exclusionsRepository);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.browser = browser;
    this.proxy = proxy;
    this.settings = settings;
  }

  createClass_default()(Exclusions, [{
    key: "setCurrentHandler",
    value: function () {
      var _setCurrentHandler = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(type) {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = type;
                _context3.next = _context3.t0 === this.TYPES.WHITELIST ? 3 : _context3.t0 === this.TYPES.BLACKLIST ? 6 : 9;
                break;

              case 3:
                this.currentHandler = this.whitelistHandler;
                this.inverted = true;
                return _context3.abrupt("break", 10);

              case 6:
                this.currentHandler = this.blacklistHandler;
                this.inverted = false;
                return _context3.abrupt("break", 10);

              case 9:
                throw Error("Wrong type received ".concat(type));

              case 10:
                _context3.next = 12;
                return this.handleExclusionsUpdate();

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setCurrentHandler(_x2) {
        return _setCurrentHandler.apply(this, arguments);
      }

      return setCurrentHandler;
    }()
  }, {
    key: "getHandler",
    value: function getHandler(type) {
      switch (type) {
        case this.TYPES.WHITELIST:
          {
            return this.whitelist;
          }

        case this.TYPES.BLACKLIST:
          {
            return this.blacklist;
          }

        default:
          throw Error("Wrong type requested: ".concat(type));
      }
    }
  }, {
    key: "enableVpnByUrl",
    value: function () {
      var _enableVpnByUrl = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(url) {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.inverted) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 3;
                return this.currentHandler.addToExclusions(url);

              case 3:
                _context4.next = 7;
                break;

              case 5:
                _context4.next = 7;
                return this.currentHandler.disableExclusionByUrl(url);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function enableVpnByUrl(_x3) {
        return _enableVpnByUrl.apply(this, arguments);
      }

      return enableVpnByUrl;
    }()
  }, {
    key: "disableVpnByUrl",
    value: function () {
      var _disableVpnByUrl = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(url) {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.inverted) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 3;
                return this.currentHandler.disableExclusionByUrl(url);

              case 3:
                _context5.next = 7;
                break;

              case 5:
                _context5.next = 7;
                return this.currentHandler.addToExclusions(url);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function disableVpnByUrl(_x4) {
        return _disableVpnByUrl.apply(this, arguments);
      }

      return disableVpnByUrl;
    }()
  }, {
    key: "isVpnEnabledByUrl",
    value: function isVpnEnabledByUrl(url) {
      var isExcluded = this.currentHandler.isExcluded(url);
      return this.inverted ? isExcluded : !isExcluded;
    }
  }, {
    key: "isInverted",
    value: function isInverted() {
      return this.inverted;
    }
  }, {
    key: "whitelist",
    get: function get() {
      return this.whitelistHandler;
    }
  }, {
    key: "blacklist",
    get: function get() {
      return this.blacklistHandler;
    }
  }, {
    key: "current",
    get: function get() {
      return this.currentHandler;
    }
  }]);

  return Exclusions;
}();

/* harmony default export */ var exclusions_Exclusions = (Exclusions_Exclusions);
// EXTERNAL MODULE: ./src/background/proxy/index.js + 3 modules
var background_proxy = __webpack_require__(21);

// EXTERNAL MODULE: ./src/background/settings/settings.js + 3 modules
var settings_settings = __webpack_require__(51);

// CONCATENATED MODULE: ./src/background/exclusions/index.js




var exclusions_exclusions = new exclusions_Exclusions(browserApi["a" /* default */], background_proxy["a" /* proxy */], settings_settings["a" /* default */]);
/* harmony default export */ var background_exclusions = __webpack_exports__["a"] = (exclusions_exclusions);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(190),
    isObjectLike = __webpack_require__(40);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(120);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(13);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(335);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(67);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(63);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(316);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(68);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(336);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/lib/CustomError.js







var CustomError_CustomError =
/*#__PURE__*/
function (_Error) {
  inherits_default()(CustomError, _Error);

  function CustomError(status) {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, CustomError);

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(CustomError)).call.apply(_getPrototypeOf2, [this].concat(params))); // Maintains proper stack trace for where our error was thrown (only available on V8)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(assertThisInitialized_default()(_this), CustomError);
    }

    _this.name = 'CustomError'; // Custom debugging information

    _this.status = status;
    return _this;
  }

  return CustomError;
}(wrapNativeSuper_default()(Error));

/* harmony default export */ var lib_CustomError = (CustomError_CustomError);
// CONCATENATED MODULE: ./src/background/api/Api.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Api_Api =
/*#__PURE__*/
function () {
  function Api(baseUrl) {
    classCallCheck_default()(this, Api);

    this.baseUrl = baseUrl;
  }

  createClass_default()(Api, [{
    key: "makeRequest",
    value: function () {
      var _makeRequest = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(path) {
        var method,
            config,
            response,
            errorPath,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'POST';
                config = _args.length > 2 ? _args[2] : undefined;
                _context.prev = 2;
                _context.next = 5;
                return axios_default()(_objectSpread({
                  url: "".concat(this.baseUrl, "/").concat(path),
                  method: method
                }, config));

              case 5:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                errorPath = "".concat(this.baseUrl, "/").concat(path);

                if (!_context.t0.response) {
                  _context.next = 14;
                  break;
                }

                throw new lib_CustomError(_context.t0.response.status, JSON.stringify(_context.t0.response.data));

              case 14:
                throw new lib_CustomError(constants["a" /* ERROR_STATUSES */].NETWORK_ERROR, "".concat(errorPath, " | ").concat(_context.t0.message || JSON.stringify(_context.t0)));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function makeRequest(_x) {
        return _makeRequest.apply(this, arguments);
      }

      return makeRequest;
    }()
  }]);

  return Api;
}();

/* harmony default export */ var api_Api = __webpack_exports__["a"] = (Api_Api);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);





var openOptionsPage =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.openOptionsPage());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openOptionsPage() {
    return _ref.apply(this, arguments);
  };
}();

var setIconEnabled =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.browserAction.setIcon({
              path: _prefs__WEBPACK_IMPORTED_MODULE_3__[/* Prefs */ "a"].ICONS.GREEN
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setIconEnabled() {
    return _ref2.apply(this, arguments);
  };
}();

var setIconDisabled =
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.browserAction.setIcon({
              path: _prefs__WEBPACK_IMPORTED_MODULE_3__[/* Prefs */ "a"].ICONS.GREY
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function setIconDisabled() {
    return _ref3.apply(this, arguments);
  };
}();

var actions = {
  openOptionsPage: openOptionsPage,
  setIconEnabled: setIconEnabled,
  setIconDisabled: setIconDisabled
};
/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _connectivity_connectivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69);
/* harmony import */ var _browserApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);













var vpnCache = {
  endpoints: null,
  vpnInfo: null,
  currentLocation: null
};

var reconnectEndpoint =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint) {
    var _ref2, domainName, _ref3, prefix, token, wsHost;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _proxy__WEBPACK_IMPORTED_MODULE_8__[/* proxy */ "a"].setCurrentEndpoint(endpoint);

          case 2:
            _ref2 = _context.sent;
            domainName = _ref2.domainName;
            _context.next = 6;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getAccessCredentials();

          case 6:
            _ref3 = _context.sent;
            prefix = _ref3.prefix;
            token = _ref3.token;
            wsHost = "".concat(prefix, ".").concat(domainName);
            _context.next = 12;
            return _connectivity_connectivity__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].setCredentials(wsHost, domainName, token);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function reconnectEndpoint(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getClosestEndpointAndReconnect =
/*#__PURE__*/
function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(endpoints, currentEndpoint) {
    var endpointsArr, sameCityEndpoint, closestCityEndpoint;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpointsArr = Object.keys(endpoints).map(function (endpointKey) {
              return endpoints[endpointKey];
            });
            sameCityEndpoint = endpointsArr.find(function (endpoint) {
              return endpoint.cityName === currentEndpoint.cityName;
            });

            if (!sameCityEndpoint) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return reconnectEndpoint(sameCityEndpoint);

          case 5:
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].debug("Reconnect endpoint from ".concat(currentEndpoint.id, " to same city ").concat(sameCityEndpoint.id));
            return _context2.abrupt("return");

          case 7:
            closestCityEndpoint = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__[/* getClosestEndpointByCoordinates */ "b"])(currentEndpoint, endpointsArr);
            _context2.next = 10;
            return reconnectEndpoint(closestCityEndpoint);

          case 10:
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].debug("Reconnect endpoint from ".concat(currentEndpoint.id, " to closest city ").concat(closestCityEndpoint.id));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getClosestEndpointAndReconnect(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();

var getEndpointsRemotely =
/*#__PURE__*/
function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var vpnToken, endpoints;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gainValidVpnToken();

          case 3:
            vpnToken = _context3.sent;
            _context3.next = 10;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].debug('Unable to get vpn token because: ', _context3.t0.message);
            return _context3.abrupt("return", null);

          case 10:
            _context3.next = 12;
            return _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getEndpoints(vpnToken.token);

          case 12:
            endpoints = _context3.sent;

            if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(endpoints, vpnCache.endpoints)) {
              vpnCache.endpoints = endpoints;
              _browserApi__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].runtime.sendMessage({
                type: _lib_constants__WEBPACK_IMPORTED_MODULE_7__[/* MESSAGES_TYPES */ "b"].ENDPOINTS_UPDATED,
                data: endpoints
              });
            }

            return _context3.abrupt("return", endpoints);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function getEndpointsRemotely() {
    return _ref5.apply(this, arguments);
  };
}();

var vpnTokenChanged = function vpnTokenChanged(oldVpnToken, newVpnToken) {
  return oldVpnToken.licenseKey !== newVpnToken.licenseKey;
};

var getVpnInfoRemotely =
/*#__PURE__*/
function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var vpnToken, vpnInfo, shouldReconnect, updatedVpnToken, endpoints, currentEndpoint, currentEndpointInEndpoints;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gainValidVpnToken();

          case 3:
            vpnToken = _context4.sent;
            _context4.next = 10;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].debug('Unable to get vpn info because: ', _context4.t0.message);
            return _context4.abrupt("return");

          case 10:
            _context4.next = 12;
            return _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getVpnExtensionInfo(vpnToken.token);

          case 12:
            vpnInfo = _context4.sent;
            shouldReconnect = false;

            if (!vpnInfo.refreshTokens) {
              _context4.next = 25;
              break;
            }

            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].info('refreshing tokens');
            _context4.next = 18;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gainValidVpnToken(true, false);

          case 18:
            updatedVpnToken = _context4.sent;

            if (vpnTokenChanged(vpnToken, updatedVpnToken)) {
              shouldReconnect = true;
            }

            _context4.next = 22;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gainValidVpnCredentials(true);

          case 22:
            _context4.next = 24;
            return _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getVpnExtensionInfo(updatedVpnToken.token);

          case 24:
            vpnInfo = _context4.sent;

          case 25:
            _context4.next = 27;
            return getEndpointsRemotely();

          case 27:
            endpoints = _context4.sent;
            _context4.next = 30;
            return _proxy__WEBPACK_IMPORTED_MODULE_8__[/* proxy */ "a"].getCurrentEndpoint();

          case 30:
            currentEndpoint = _context4.sent;

            if (!(endpoints && endpoints.length > 0 && currentEndpoint)) {
              _context4.next = 37;
              break;
            }

            currentEndpointInEndpoints = currentEndpoint && Object.keys(endpoints).some(function (endpoint) {
              return endpoint === currentEndpoint.id;
            }); // if there is no currently connected endpoint in the list of endpoints,
            // get closest and reconnect

            if (currentEndpointInEndpoints) {
              _context4.next = 37;
              break;
            }

            _context4.next = 36;
            return getClosestEndpointAndReconnect(endpoints, currentEndpoint);

          case 36:
            shouldReconnect = false;

          case 37:
            if (!shouldReconnect) {
              _context4.next = 40;
              break;
            }

            _context4.next = 40;
            return getClosestEndpointAndReconnect(endpoints, currentEndpoint);

          case 40:
            vpnCache.vpnInfo = vpnInfo;
            _browserApi__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].runtime.sendMessage({
              type: _lib_constants__WEBPACK_IMPORTED_MODULE_7__[/* MESSAGES_TYPES */ "b"].VPN_INFO_UPDATED,
              data: vpnInfo
            });

          case 42:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function getVpnInfoRemotely() {
    return _ref6.apply(this, arguments);
  };
}();

var getVpnInfo = function getVpnInfo() {
  getVpnInfoRemotely();

  if (vpnCache.vpnInfo) {
    return vpnCache.vpnInfo;
  }

  return null;
};

var getEndpoints = function getEndpoints() {
  if (vpnCache.endpoints) {
    return vpnCache.endpoints;
  }

  return null;
};

var getCurrentLocationRemote =
/*#__PURE__*/
function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var MIDDLE_OF_EUROPE, currentLocation;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            MIDDLE_OF_EUROPE = {
              coordinates: [51.05, 13.73]
            }; // Chosen approximately

            _context5.prev = 1;
            _context5.next = 4;
            return _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getCurrentLocation();

          case 4:
            currentLocation = _context5.sent;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].error(_context5.t0.message);

          case 10:
            // if current location wasn't received use predefined
            currentLocation = currentLocation || MIDDLE_OF_EUROPE;

            if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(vpnCache.currentLocation, currentLocation)) {
              vpnCache.currentLocation = currentLocation;
            }

            return _context5.abrupt("return", currentLocation);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function getCurrentLocationRemote() {
    return _ref7.apply(this, arguments);
  };
}();

var getCurrentLocation = function getCurrentLocation() {
  // update current location information in background
  getCurrentLocationRemote();

  if (vpnCache.currentLocation) {
    return vpnCache.currentLocation;
  }

  return null;
};

var getSelectedEndpoint =
/*#__PURE__*/
function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var proxySelectedEndpoint, currentLocation, endpoints, closestEndpoint;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _proxy__WEBPACK_IMPORTED_MODULE_8__[/* proxy */ "a"].getCurrentEndpoint();

          case 2:
            proxySelectedEndpoint = _context6.sent;

            if (!proxySelectedEndpoint) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", proxySelectedEndpoint);

          case 5:
            currentLocation = getCurrentLocation();
            endpoints = getEndpoints();

            if (!(!currentLocation || !endpoints)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", null);

          case 9:
            closestEndpoint = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__[/* getClosestEndpointByCoordinates */ "b"])(currentLocation, Object.values(endpoints));
            _context6.next = 12;
            return _proxy__WEBPACK_IMPORTED_MODULE_8__[/* proxy */ "a"].setCurrentEndpoint(closestEndpoint);

          case 12:
            return _context6.abrupt("return", closestEndpoint);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getSelectedEndpoint() {
    return _ref8.apply(this, arguments);
  };
}();

var getVpnFailurePage =
/*#__PURE__*/
function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var vpnToken, token, vpnInfo, appendToQueryString, vpnFailurePage, appId, queryString, separator;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gainValidVpnToken();

          case 3:
            vpnToken = _context7.sent;
            _context7.next = 9;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](0);
            _lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].error('Unable to get valid vpn token. Error: ', _context7.t0.message);

          case 9:
            // undefined values will be omitted in the querystring
            token = vpnToken.token || undefined;
            vpnInfo = vpnCache.vpnInfo; // if no vpn info, then get vpn failure url with empty token

            appendToQueryString = false;

            if (vpnInfo) {
              _context7.next = 23;
              break;
            }

            _context7.prev = 13;
            _context7.next = 16;
            return _providers_vpnProvider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getVpnExtensionInfo(token);

          case 16:
            vpnInfo = _context7.sent;
            _context7.next = 23;
            break;

          case 19:
            _context7.prev = 19;
            _context7.t1 = _context7["catch"](13);
            vpnInfo = {
              vpnFailurePage: _config__WEBPACK_IMPORTED_MODULE_12__[/* POPUP_DEFAULT_SUPPORT_URL */ "l"]
            };
            appendToQueryString = true;

          case 23:
            vpnFailurePage = vpnInfo && vpnInfo.vpnFailurePage;
            appId = _credentials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getAppId();
            queryString = qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
              token: token,
              app_id: appId
            });
            separator = appendToQueryString ? '&' : '?';
            return _context7.abrupt("return", "".concat(vpnFailurePage).concat(separator).concat(queryString));

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 6], [13, 19]]);
  }));

  return function getVpnFailurePage() {
    return _ref9.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  getEndpoints: getEndpoints,
  getCurrentLocation: getCurrentLocation,
  getVpnInfo: getVpnInfo,
  getEndpointsRemotely: getEndpointsRemotely,
  getSelectedEndpoint: getSelectedEndpoint,
  getVpnFailurePage: getVpnFailurePage
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (true)
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(383)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    /* CommonJS */ else {}

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.WsPingMsg = (function() {
    
        /**
         * Properties of a WsPingMsg.
         * @exports IWsPingMsg
         * @interface IWsPingMsg
         * @property {number|Long|null} [requestTime] WsPingMsg requestTime
         * @property {Uint8Array|null} [token] WsPingMsg token
         * @property {Uint8Array|null} [applicationId] WsPingMsg applicationId
         */
    
        /**
         * Constructs a new WsPingMsg.
         * @exports WsPingMsg
         * @classdesc Represents a WsPingMsg.
         * @implements IWsPingMsg
         * @constructor
         * @param {IWsPingMsg=} [properties] Properties to set
         */
        function WsPingMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WsPingMsg requestTime.
         * @member {number|Long} requestTime
         * @memberof WsPingMsg
         * @instance
         */
        WsPingMsg.prototype.requestTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * WsPingMsg token.
         * @member {Uint8Array} token
         * @memberof WsPingMsg
         * @instance
         */
        WsPingMsg.prototype.token = $util.newBuffer([]);
    
        /**
         * WsPingMsg applicationId.
         * @member {Uint8Array} applicationId
         * @memberof WsPingMsg
         * @instance
         */
        WsPingMsg.prototype.applicationId = $util.newBuffer([]);
    
        /**
         * Creates a new WsPingMsg instance using the specified properties.
         * @function create
         * @memberof WsPingMsg
         * @static
         * @param {IWsPingMsg=} [properties] Properties to set
         * @returns {WsPingMsg} WsPingMsg instance
         */
        WsPingMsg.create = function create(properties) {
            return new WsPingMsg(properties);
        };
    
        /**
         * Encodes the specified WsPingMsg message. Does not implicitly {@link WsPingMsg.verify|verify} messages.
         * @function encode
         * @memberof WsPingMsg
         * @static
         * @param {IWsPingMsg} message WsPingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsPingMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestTime);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.applicationId);
            return writer;
        };
    
        /**
         * Encodes the specified WsPingMsg message, length delimited. Does not implicitly {@link WsPingMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WsPingMsg
         * @static
         * @param {IWsPingMsg} message WsPingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsPingMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WsPingMsg message from the specified reader or buffer.
         * @function decode
         * @memberof WsPingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WsPingMsg} WsPingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsPingMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsPingMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestTime = reader.int64();
                    break;
                case 2:
                    message.token = reader.bytes();
                    break;
                case 3:
                    message.applicationId = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WsPingMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WsPingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WsPingMsg} WsPingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsPingMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WsPingMsg message.
         * @function verify
         * @memberof WsPingMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsPingMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                if (!$util.isInteger(message.requestTime) && !(message.requestTime && $util.isInteger(message.requestTime.low) && $util.isInteger(message.requestTime.high)))
                    return "requestTime: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                if (!(message.applicationId && typeof message.applicationId.length === "number" || $util.isString(message.applicationId)))
                    return "applicationId: buffer expected";
            return null;
        };
    
        /**
         * Creates a WsPingMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WsPingMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WsPingMsg} WsPingMsg
         */
        WsPingMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WsPingMsg)
                return object;
            var message = new $root.WsPingMsg();
            if (object.requestTime != null)
                if ($util.Long)
                    (message.requestTime = $util.Long.fromValue(object.requestTime)).unsigned = false;
                else if (typeof object.requestTime === "string")
                    message.requestTime = parseInt(object.requestTime, 10);
                else if (typeof object.requestTime === "number")
                    message.requestTime = object.requestTime;
                else if (typeof object.requestTime === "object")
                    message.requestTime = new $util.LongBits(object.requestTime.low >>> 0, object.requestTime.high >>> 0).toNumber();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            if (object.applicationId != null)
                if (typeof object.applicationId === "string")
                    $util.base64.decode(object.applicationId, message.applicationId = $util.newBuffer($util.base64.length(object.applicationId)), 0);
                else if (object.applicationId.length)
                    message.applicationId = object.applicationId;
            return message;
        };
    
        /**
         * Creates a plain object from a WsPingMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WsPingMsg
         * @static
         * @param {WsPingMsg} message WsPingMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsPingMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestTime = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
                if (options.bytes === String)
                    object.applicationId = "";
                else {
                    object.applicationId = [];
                    if (options.bytes !== Array)
                        object.applicationId = $util.newBuffer(object.applicationId);
                }
            }
            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                if (typeof message.requestTime === "number")
                    object.requestTime = options.longs === String ? String(message.requestTime) : message.requestTime;
                else
                    object.requestTime = options.longs === String ? $util.Long.prototype.toString.call(message.requestTime) : options.longs === Number ? new $util.LongBits(message.requestTime.low >>> 0, message.requestTime.high >>> 0).toNumber() : message.requestTime;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                object.applicationId = options.bytes === String ? $util.base64.encode(message.applicationId, 0, message.applicationId.length) : options.bytes === Array ? Array.prototype.slice.call(message.applicationId) : message.applicationId;
            return object;
        };
    
        /**
         * Converts this WsPingMsg to JSON.
         * @function toJSON
         * @memberof WsPingMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsPingMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WsPingMsg;
    })();
    
    $root.WsConnectivityInfoMsg = (function() {
    
        /**
         * Properties of a WsConnectivityInfoMsg.
         * @exports IWsConnectivityInfoMsg
         * @interface IWsConnectivityInfoMsg
         * @property {Uint8Array|null} [token] WsConnectivityInfoMsg token
         * @property {boolean|null} [refreshTokens] WsConnectivityInfoMsg refreshTokens
         * @property {number|null} [bytesDownloaded] WsConnectivityInfoMsg bytesDownloaded
         * @property {number|null} [bytesUploaded] WsConnectivityInfoMsg bytesUploaded
         */
    
        /**
         * Constructs a new WsConnectivityInfoMsg.
         * @exports WsConnectivityInfoMsg
         * @classdesc Represents a WsConnectivityInfoMsg.
         * @implements IWsConnectivityInfoMsg
         * @constructor
         * @param {IWsConnectivityInfoMsg=} [properties] Properties to set
         */
        function WsConnectivityInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WsConnectivityInfoMsg token.
         * @member {Uint8Array} token
         * @memberof WsConnectivityInfoMsg
         * @instance
         */
        WsConnectivityInfoMsg.prototype.token = $util.newBuffer([]);
    
        /**
         * WsConnectivityInfoMsg refreshTokens.
         * @member {boolean} refreshTokens
         * @memberof WsConnectivityInfoMsg
         * @instance
         */
        WsConnectivityInfoMsg.prototype.refreshTokens = false;
    
        /**
         * WsConnectivityInfoMsg bytesDownloaded.
         * @member {number} bytesDownloaded
         * @memberof WsConnectivityInfoMsg
         * @instance
         */
        WsConnectivityInfoMsg.prototype.bytesDownloaded = 0;
    
        /**
         * WsConnectivityInfoMsg bytesUploaded.
         * @member {number} bytesUploaded
         * @memberof WsConnectivityInfoMsg
         * @instance
         */
        WsConnectivityInfoMsg.prototype.bytesUploaded = 0;
    
        /**
         * Creates a new WsConnectivityInfoMsg instance using the specified properties.
         * @function create
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {IWsConnectivityInfoMsg=} [properties] Properties to set
         * @returns {WsConnectivityInfoMsg} WsConnectivityInfoMsg instance
         */
        WsConnectivityInfoMsg.create = function create(properties) {
            return new WsConnectivityInfoMsg(properties);
        };
    
        /**
         * Encodes the specified WsConnectivityInfoMsg message. Does not implicitly {@link WsConnectivityInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {IWsConnectivityInfoMsg} message WsConnectivityInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
            if (message.refreshTokens != null && message.hasOwnProperty("refreshTokens"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.refreshTokens);
            if (message.bytesDownloaded != null && message.hasOwnProperty("bytesDownloaded"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.bytesDownloaded);
            if (message.bytesUploaded != null && message.hasOwnProperty("bytesUploaded"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.bytesUploaded);
            return writer;
        };
    
        /**
         * Encodes the specified WsConnectivityInfoMsg message, length delimited. Does not implicitly {@link WsConnectivityInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {IWsConnectivityInfoMsg} message WsConnectivityInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WsConnectivityInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WsConnectivityInfoMsg} WsConnectivityInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsConnectivityInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.bytes();
                    break;
                case 6:
                    message.refreshTokens = reader.bool();
                    break;
                case 7:
                    message.bytesDownloaded = reader.float();
                    break;
                case 8:
                    message.bytesUploaded = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WsConnectivityInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WsConnectivityInfoMsg} WsConnectivityInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WsConnectivityInfoMsg message.
         * @function verify
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsConnectivityInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.refreshTokens != null && message.hasOwnProperty("refreshTokens"))
                if (typeof message.refreshTokens !== "boolean")
                    return "refreshTokens: boolean expected";
            if (message.bytesDownloaded != null && message.hasOwnProperty("bytesDownloaded"))
                if (typeof message.bytesDownloaded !== "number")
                    return "bytesDownloaded: number expected";
            if (message.bytesUploaded != null && message.hasOwnProperty("bytesUploaded"))
                if (typeof message.bytesUploaded !== "number")
                    return "bytesUploaded: number expected";
            return null;
        };
    
        /**
         * Creates a WsConnectivityInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WsConnectivityInfoMsg} WsConnectivityInfoMsg
         */
        WsConnectivityInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WsConnectivityInfoMsg)
                return object;
            var message = new $root.WsConnectivityInfoMsg();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            if (object.refreshTokens != null)
                message.refreshTokens = Boolean(object.refreshTokens);
            if (object.bytesDownloaded != null)
                message.bytesDownloaded = Number(object.bytesDownloaded);
            if (object.bytesUploaded != null)
                message.bytesUploaded = Number(object.bytesUploaded);
            return message;
        };
    
        /**
         * Creates a plain object from a WsConnectivityInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WsConnectivityInfoMsg
         * @static
         * @param {WsConnectivityInfoMsg} message WsConnectivityInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsConnectivityInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
                object.refreshTokens = false;
                object.bytesDownloaded = 0;
                object.bytesUploaded = 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.refreshTokens != null && message.hasOwnProperty("refreshTokens"))
                object.refreshTokens = message.refreshTokens;
            if (message.bytesDownloaded != null && message.hasOwnProperty("bytesDownloaded"))
                object.bytesDownloaded = options.json && !isFinite(message.bytesDownloaded) ? String(message.bytesDownloaded) : message.bytesDownloaded;
            if (message.bytesUploaded != null && message.hasOwnProperty("bytesUploaded"))
                object.bytesUploaded = options.json && !isFinite(message.bytesUploaded) ? String(message.bytesUploaded) : message.bytesUploaded;
            return object;
        };
    
        /**
         * Converts this WsConnectivityInfoMsg to JSON.
         * @function toJSON
         * @memberof WsConnectivityInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsConnectivityInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WsConnectivityInfoMsg;
    })();
    
    $root.WsConnectivityErrorMsg = (function() {
    
        /**
         * Properties of a WsConnectivityErrorMsg.
         * @exports IWsConnectivityErrorMsg
         * @interface IWsConnectivityErrorMsg
         * @property {string|null} [code] WsConnectivityErrorMsg code
         * @property {string|null} [payload] WsConnectivityErrorMsg payload
         */
    
        /**
         * Constructs a new WsConnectivityErrorMsg.
         * @exports WsConnectivityErrorMsg
         * @classdesc Represents a WsConnectivityErrorMsg.
         * @implements IWsConnectivityErrorMsg
         * @constructor
         * @param {IWsConnectivityErrorMsg=} [properties] Properties to set
         */
        function WsConnectivityErrorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WsConnectivityErrorMsg code.
         * @member {string} code
         * @memberof WsConnectivityErrorMsg
         * @instance
         */
        WsConnectivityErrorMsg.prototype.code = "";
    
        /**
         * WsConnectivityErrorMsg payload.
         * @member {string} payload
         * @memberof WsConnectivityErrorMsg
         * @instance
         */
        WsConnectivityErrorMsg.prototype.payload = "";
    
        /**
         * Creates a new WsConnectivityErrorMsg instance using the specified properties.
         * @function create
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {IWsConnectivityErrorMsg=} [properties] Properties to set
         * @returns {WsConnectivityErrorMsg} WsConnectivityErrorMsg instance
         */
        WsConnectivityErrorMsg.create = function create(properties) {
            return new WsConnectivityErrorMsg(properties);
        };
    
        /**
         * Encodes the specified WsConnectivityErrorMsg message. Does not implicitly {@link WsConnectivityErrorMsg.verify|verify} messages.
         * @function encode
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {IWsConnectivityErrorMsg} message WsConnectivityErrorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityErrorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified WsConnectivityErrorMsg message, length delimited. Does not implicitly {@link WsConnectivityErrorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {IWsConnectivityErrorMsg} message WsConnectivityErrorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityErrorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WsConnectivityErrorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WsConnectivityErrorMsg} WsConnectivityErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityErrorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsConnectivityErrorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.payload = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WsConnectivityErrorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WsConnectivityErrorMsg} WsConnectivityErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityErrorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WsConnectivityErrorMsg message.
         * @function verify
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsConnectivityErrorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!$util.isString(message.payload))
                    return "payload: string expected";
            return null;
        };
    
        /**
         * Creates a WsConnectivityErrorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WsConnectivityErrorMsg} WsConnectivityErrorMsg
         */
        WsConnectivityErrorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WsConnectivityErrorMsg)
                return object;
            var message = new $root.WsConnectivityErrorMsg();
            if (object.code != null)
                message.code = String(object.code);
            if (object.payload != null)
                message.payload = String(object.payload);
            return message;
        };
    
        /**
         * Creates a plain object from a WsConnectivityErrorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WsConnectivityErrorMsg
         * @static
         * @param {WsConnectivityErrorMsg} message WsConnectivityErrorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsConnectivityErrorMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = "";
                object.payload = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            return object;
        };
    
        /**
         * Converts this WsConnectivityErrorMsg to JSON.
         * @function toJSON
         * @memberof WsConnectivityErrorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsConnectivityErrorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WsConnectivityErrorMsg;
    })();
    
    $root.WsConnectivityMsg = (function() {
    
        /**
         * Properties of a WsConnectivityMsg.
         * @exports IWsConnectivityMsg
         * @interface IWsConnectivityMsg
         * @property {IWsPingMsg|null} [pingMsg] WsConnectivityMsg pingMsg
         * @property {IWsConnectivityInfoMsg|null} [connectivityInfoMsg] WsConnectivityMsg connectivityInfoMsg
         * @property {IWsConnectivityErrorMsg|null} [connectivityErrorMsg] WsConnectivityMsg connectivityErrorMsg
         */
    
        /**
         * Constructs a new WsConnectivityMsg.
         * @exports WsConnectivityMsg
         * @classdesc Represents a WsConnectivityMsg.
         * @implements IWsConnectivityMsg
         * @constructor
         * @param {IWsConnectivityMsg=} [properties] Properties to set
         */
        function WsConnectivityMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WsConnectivityMsg pingMsg.
         * @member {IWsPingMsg|null|undefined} pingMsg
         * @memberof WsConnectivityMsg
         * @instance
         */
        WsConnectivityMsg.prototype.pingMsg = null;
    
        /**
         * WsConnectivityMsg connectivityInfoMsg.
         * @member {IWsConnectivityInfoMsg|null|undefined} connectivityInfoMsg
         * @memberof WsConnectivityMsg
         * @instance
         */
        WsConnectivityMsg.prototype.connectivityInfoMsg = null;
    
        /**
         * WsConnectivityMsg connectivityErrorMsg.
         * @member {IWsConnectivityErrorMsg|null|undefined} connectivityErrorMsg
         * @memberof WsConnectivityMsg
         * @instance
         */
        WsConnectivityMsg.prototype.connectivityErrorMsg = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * WsConnectivityMsg payload.
         * @member {"pingMsg"|"connectivityInfoMsg"|"connectivityErrorMsg"|undefined} payload
         * @memberof WsConnectivityMsg
         * @instance
         */
        Object.defineProperty(WsConnectivityMsg.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["pingMsg", "connectivityInfoMsg", "connectivityErrorMsg"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new WsConnectivityMsg instance using the specified properties.
         * @function create
         * @memberof WsConnectivityMsg
         * @static
         * @param {IWsConnectivityMsg=} [properties] Properties to set
         * @returns {WsConnectivityMsg} WsConnectivityMsg instance
         */
        WsConnectivityMsg.create = function create(properties) {
            return new WsConnectivityMsg(properties);
        };
    
        /**
         * Encodes the specified WsConnectivityMsg message. Does not implicitly {@link WsConnectivityMsg.verify|verify} messages.
         * @function encode
         * @memberof WsConnectivityMsg
         * @static
         * @param {IWsConnectivityMsg} message WsConnectivityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pingMsg != null && message.hasOwnProperty("pingMsg"))
                $root.WsPingMsg.encode(message.pingMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.connectivityInfoMsg != null && message.hasOwnProperty("connectivityInfoMsg"))
                $root.WsConnectivityInfoMsg.encode(message.connectivityInfoMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.connectivityErrorMsg != null && message.hasOwnProperty("connectivityErrorMsg"))
                $root.WsConnectivityErrorMsg.encode(message.connectivityErrorMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified WsConnectivityMsg message, length delimited. Does not implicitly {@link WsConnectivityMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WsConnectivityMsg
         * @static
         * @param {IWsConnectivityMsg} message WsConnectivityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsConnectivityMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WsConnectivityMsg message from the specified reader or buffer.
         * @function decode
         * @memberof WsConnectivityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WsConnectivityMsg} WsConnectivityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsConnectivityMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pingMsg = $root.WsPingMsg.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectivityInfoMsg = $root.WsConnectivityInfoMsg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.connectivityErrorMsg = $root.WsConnectivityErrorMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WsConnectivityMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WsConnectivityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WsConnectivityMsg} WsConnectivityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsConnectivityMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WsConnectivityMsg message.
         * @function verify
         * @memberof WsConnectivityMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsConnectivityMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.pingMsg != null && message.hasOwnProperty("pingMsg")) {
                properties.payload = 1;
                {
                    var error = $root.WsPingMsg.verify(message.pingMsg);
                    if (error)
                        return "pingMsg." + error;
                }
            }
            if (message.connectivityInfoMsg != null && message.hasOwnProperty("connectivityInfoMsg")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.WsConnectivityInfoMsg.verify(message.connectivityInfoMsg);
                    if (error)
                        return "connectivityInfoMsg." + error;
                }
            }
            if (message.connectivityErrorMsg != null && message.hasOwnProperty("connectivityErrorMsg")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.WsConnectivityErrorMsg.verify(message.connectivityErrorMsg);
                    if (error)
                        return "connectivityErrorMsg." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a WsConnectivityMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WsConnectivityMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WsConnectivityMsg} WsConnectivityMsg
         */
        WsConnectivityMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WsConnectivityMsg)
                return object;
            var message = new $root.WsConnectivityMsg();
            if (object.pingMsg != null) {
                if (typeof object.pingMsg !== "object")
                    throw TypeError(".WsConnectivityMsg.pingMsg: object expected");
                message.pingMsg = $root.WsPingMsg.fromObject(object.pingMsg);
            }
            if (object.connectivityInfoMsg != null) {
                if (typeof object.connectivityInfoMsg !== "object")
                    throw TypeError(".WsConnectivityMsg.connectivityInfoMsg: object expected");
                message.connectivityInfoMsg = $root.WsConnectivityInfoMsg.fromObject(object.connectivityInfoMsg);
            }
            if (object.connectivityErrorMsg != null) {
                if (typeof object.connectivityErrorMsg !== "object")
                    throw TypeError(".WsConnectivityMsg.connectivityErrorMsg: object expected");
                message.connectivityErrorMsg = $root.WsConnectivityErrorMsg.fromObject(object.connectivityErrorMsg);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a WsConnectivityMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WsConnectivityMsg
         * @static
         * @param {WsConnectivityMsg} message WsConnectivityMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsConnectivityMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.pingMsg != null && message.hasOwnProperty("pingMsg")) {
                object.pingMsg = $root.WsPingMsg.toObject(message.pingMsg, options);
                if (options.oneofs)
                    object.payload = "pingMsg";
            }
            if (message.connectivityInfoMsg != null && message.hasOwnProperty("connectivityInfoMsg")) {
                object.connectivityInfoMsg = $root.WsConnectivityInfoMsg.toObject(message.connectivityInfoMsg, options);
                if (options.oneofs)
                    object.payload = "connectivityInfoMsg";
            }
            if (message.connectivityErrorMsg != null && message.hasOwnProperty("connectivityErrorMsg")) {
                object.connectivityErrorMsg = $root.WsConnectivityErrorMsg.toObject(message.connectivityErrorMsg, options);
                if (options.oneofs)
                    object.payload = "connectivityErrorMsg";
            }
            return object;
        };
    
        /**
         * Converts this WsConnectivityMsg to JSON.
         * @function toJSON
         * @memberof WsConnectivityMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsConnectivityMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WsConnectivityMsg;
    })();

    return $root;
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29),
    isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(55),
    stackClear = __webpack_require__(169),
    stackDelete = __webpack_require__(170),
    stackGet = __webpack_require__(171),
    stackHas = __webpack_require__(172),
    stackSet = __webpack_require__(173);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(39),
    isObject = __webpack_require__(29);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(151),
    arraySome = __webpack_require__(193),
    cacheHas = __webpack_require__(152);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(22),
    stubFalse = __webpack_require__(205);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(91)(module)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(206),
    baseUnary = __webpack_require__(117),
    nodeUtil = __webpack_require__(207);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(121),
    toKey = __webpack_require__(60);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(27),
    isKey = __webpack_require__(79),
    stringToPath = __webpack_require__(218),
    toString = __webpack_require__(221);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _isDecimal=_interopRequireDefault(__webpack_require__(81));var _isSexagesimal=_interopRequireDefault(__webpack_require__(82));var _sexagesimalToDecimal=_interopRequireDefault(__webpack_require__(83));var _isValidCoordinate=_interopRequireDefault(__webpack_require__(248));var _getCoordinateKeys=_interopRequireDefault(__webpack_require__(123));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var toDecimal=function toDecimal(value){if((0,_isDecimal.default)(value)){return Number(value)}if((0,_isSexagesimal.default)(value)){return(0,_sexagesimalToDecimal.default)(value)}if((0,_isValidCoordinate.default)(value)){var keys=(0,_getCoordinateKeys.default)(value);if(Array.isArray(value)){return value.map(function(v,index){return[0,1].includes(index)?toDecimal(v):v})}return _objectSpread({},value,{},keys.latitude&&_defineProperty({},keys.latitude,toDecimal(value[keys.latitude])),{},keys.longitude&&_defineProperty({},keys.longitude,toDecimal(value[keys.longitude])))}if(Array.isArray(value)){return value.map(function(point){return(0,_isValidCoordinate.default)(point)?toDecimal(point):point})}return value};var _default=toDecimal;exports.default=_default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=__webpack_require__(30);var _getCoordinateKey=_interopRequireDefault(__webpack_require__(80));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var getCoordinateKeys=function getCoordinateKeys(point){var keysToLookup=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{longitude:_constants.longitudeKeys,latitude:_constants.latitudeKeys,altitude:_constants.altitudeKeys};var longitude=(0,_getCoordinateKey.default)(point,keysToLookup.longitude);var latitude=(0,_getCoordinateKey.default)(point,keysToLookup.latitude);var altitude=(0,_getCoordinateKey.default)(point,keysToLookup.altitude);return _objectSpread({latitude:latitude,longitude:longitude},altitude?{altitude:altitude}:{})};var _default=getCoordinateKeys;exports.default=_default;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(158),
    baseOrderBy = __webpack_require__(161),
    baseRest = __webpack_require__(238),
    isIterateeCall = __webpack_require__(246);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _getLatitude=_interopRequireDefault(__webpack_require__(247));var _getLongitude=_interopRequireDefault(__webpack_require__(251));var _toRad=_interopRequireDefault(__webpack_require__(252));var _constants=__webpack_require__(30);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var normalizeACosArg=function normalizeACosArg(val){if(val>1){return 1}if(val<-1){return-1}return val};var getDistance=function getDistance(from,to){var accuracy=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;accuracy=typeof accuracy!=="undefined"&&!isNaN(accuracy)?accuracy:1;var fromLat=(0,_getLatitude.default)(from);var fromLon=(0,_getLongitude.default)(from);var toLat=(0,_getLatitude.default)(to);var toLon=(0,_getLongitude.default)(to);var distance=Math.acos(normalizeACosArg(Math.sin((0,_toRad.default)(toLat))*Math.sin((0,_toRad.default)(fromLat))+Math.cos((0,_toRad.default)(toLat))*Math.cos((0,_toRad.default)(fromLat))*Math.cos((0,_toRad.default)(fromLon)-(0,_toRad.default)(toLon))))*_constants.earthRadius;return Math.round(distance/accuracy)*accuracy};var _default=getDistance;exports.default=_default;

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);







 // Documentation
// https://bit.adguard.com/projects/ADGUARD/repos/adguard-auth-service/browse/oauth.md

var AuthApi =
/*#__PURE__*/
function (_Api) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AuthApi, _Api);

  function AuthApi() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthApi);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AuthApi)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.GET_TOKEN = {
      path: 'oauth/token',
      method: 'POST'
    };
    _this.REGISTER_USER = {
      path: 'api/1.0/registration',
      method: 'POST'
    };
    _this.REVOKE_TOKEN = {
      path: 'oauth/revoke_token',
      method: 'POST'
    };

    _this.revokeToken = function (accessToken) {
      var _this$REVOKE_TOKEN = _this.REVOKE_TOKEN,
          path = _this$REVOKE_TOKEN.path,
          method = _this$REVOKE_TOKEN.method;
      var config = {
        data: qs__WEBPACK_IMPORTED_MODULE_5___default.a.stringify({
          token: accessToken
        })
      };
      return _this.makeRequest(path, method, config);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AuthApi, [{
    key: "getAccessToken",
    value: function getAccessToken(credentials) {
      var username = credentials.username,
          password = credentials.password,
          twoFactor = credentials.twoFactor;
      var _this$GET_TOKEN = this.GET_TOKEN,
          path = _this$GET_TOKEN.path,
          method = _this$GET_TOKEN.method;
      var data = {
        username: username,
        password: password,
        scope: 'trust',
        grant_type: 'password_2fa',
        client_id: 'adguard-vpn-extension'
      };

      if (twoFactor) {
        data['2fa_token'] = twoFactor;
      }

      var config = {
        data: qs__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(data)
      };
      return this.makeRequest(path, method, config);
    }
  }, {
    key: "register",
    value: function register(credentials) {
      var username = credentials.username,
          password = credentials.password,
          marketingConsent = credentials.marketingConsent,
          locale = credentials.locale,
          clientId = credentials.clientId;
      var _this$REGISTER_USER = this.REGISTER_USER,
          path = _this$REGISTER_USER.path,
          method = _this$REGISTER_USER.method;
      var data = {
        email: username,
        password: password,
        marketingConsent: marketingConsent,
        locale: locale,
        clientId: clientId,
        source: 'EXTENSION'
      };
      var config = {
        data: qs__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(data)
      };
      return this.makeRequest(path, method, config);
    }
  }]);

  return AuthApi;
}(_Api__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);

var vpnApi = new AuthApi(_config__WEBPACK_IMPORTED_MODULE_7__[/* AUTH_API_URL */ "c"]);
/* harmony default export */ __webpack_exports__["a"] = (vpnApi);

/***/ }),
/* 146 */,
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _permissionsError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _lib_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);









var CHECK_THROTTLE_TIMEOUT_MS = 60 * 1000;

var updatePermissionsErrorHandler =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(error) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].error('Permissions were not updated due to:', error.message); // do not consider network error as a reason to set permission error

            if (!(error.status === _lib_constants__WEBPACK_IMPORTED_MODULE_5__[/* ERROR_STATUSES */ "a"].NETWORK_ERROR)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _permissionsError__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].setError(error); // clear proxy settings if error occurred,
            // in order not to block connections with broken proxy

            _context.prev = 4;
            _context.next = 7;
            return _settings_settings__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].disableProxy(true);

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].error(_context.t0.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 9]]);
  }));

  return function updatePermissionsErrorHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

var checkPermissions =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _credentials__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gainValidVpnToken(true, false);

          case 3:
            _context2.next = 5;
            return _credentials__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gainValidVpnCredentials(true, false);

          case 5:
            // if no error, clear permissionError
            _permissionsError__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].clearError();
            _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info('Permissions were checked successfully');
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            _context2.next = 13;
            return updatePermissionsErrorHandler(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function checkPermissions() {
    return _ref2.apply(this, arguments);
  };
}();

var throttledCheckPermissions = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(checkPermissions, CHECK_THROTTLE_TIMEOUT_MS);
var intervalId = null;

var startChecker = function startChecker() {
  _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info('Permissions interval checker started');
  var TIME_CHECK_INTERVAL_MS = 5 * 1000; // 5 sec

  var RUN_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes

  var prevCheck = Date.now();

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(function () {
    var currTime = Date.now();

    if (currTime >= prevCheck + RUN_INTERVAL_MS) {
      throttledCheckPermissions();
      prevCheck += RUN_INTERVAL_MS;
    }
  }, TIME_CHECK_INTERVAL_MS);
};

var stopChecker = function stopChecker() {
  if (intervalId) {
    _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info('Permissions interval checker stopped');
    clearInterval(intervalId);
    intervalId = null;
  }
};
/**
 * Listens to connection state change
 * When browser comes online, updates permissions
 */


var handleConnectionChange = function handleConnectionChange() {
  window.addEventListener('online',
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info('Browser switched to online mode');
            throttledCheckPermissions();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
};

var handleUserAuthentication = function handleUserAuthentication() {
  _permissionsError__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].clearError();
  startChecker();
};

var handleUserDeauthentication = function handleUserDeauthentication() {
  _permissionsError__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].clearError();
  stopChecker();
};

var init = function init() {
  _lib_notifier__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].addSpecifiedListener(_lib_notifier__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].types.USER_AUTHENTICATED, handleUserAuthentication);
  _lib_notifier__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].addSpecifiedListener(_lib_notifier__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].types.USER_DEAUTHENTICATED, handleUserDeauthentication);
  handleConnectionChange();
  _lib_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info('Permissions checker module initiated');
};

var permissionsChecker = {
  init: init,
  checkPermissions: checkPermissions
};
/* harmony default export */ __webpack_exports__["a"] = (permissionsChecker);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(54);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// EXTERNAL MODULE: ./node_modules/ipaddr.js/lib/ipaddr.js
var ipaddr = __webpack_require__(156);
var ipaddr_default = /*#__PURE__*/__webpack_require__.n(ipaddr);

// EXTERNAL MODULE: ./src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./src/lib/notifier.js
var notifier = __webpack_require__(14);

// EXTERNAL MODULE: ./src/lib/helpers.js
var helpers = __webpack_require__(23);

// CONCATENATED MODULE: ./src/background/routability/nonRoutableNets.js
var NON_ROUTABLE_NETS = ['0.0.0.0/8', '10.0.0.0/8', '14.0.0.0/8', '24.0.0.0/8', '39.0.0.0/8', '127.0.0.0/8', '128.0.0.0/16', '169.254.0.0/16', '172.16.0.0/12', '191.255.0.0/16', '192.0.0.0/24', '192.0.2.0/24', '192.88.99.0/24', '192.168.0.0/16', '198.18.0.0/15', '223.255.255.0/24', '224.0.0.0/4', '240.0.0.0/4'];
// CONCATENATED MODULE: ./src/background/routability/NonRoutableService.js











var NonRoutableService_NonRoutableService =
/*#__PURE__*/
function () {
  function NonRoutableService(storage) {
    var _this = this;

    classCallCheck_default()(this, NonRoutableService);

    this.NON_ROUTABLE_KEY = 'non-routable.storage.key';
    this.NON_ROUTABLE_MAX_LENGTH = 1000;
    this.CLEAR_CAPACITY = 50;
    this.STORAGE_UPDATE_TIMEOUT_MS = 1000;
    this.LOCALHOST = 'localhost';
    this.nonRoutableList = [];
    this.updateStorage = throttle_default()(
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              while (_this.nonRoutableList.length > _this.NON_ROUTABLE_MAX_LENGTH) {
                _this.nonRoutableList = _this.nonRoutableList.slice(_this.CLEAR_CAPACITY);
              }

              _context.next = 3;
              return _this.storage.set(_this.NON_ROUTABLE_KEY, _this.nonRoutableList);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), this.STORAGE_UPDATE_TIMEOUT_MS);
    this.storage = storage;
    this.parsedCIDRList = NON_ROUTABLE_NETS.map(function (net) {
      return ipaddr_default.a.parseCIDR(net);
    });
  }

  createClass_default()(NonRoutableService, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.get(this.NON_ROUTABLE_KEY);

              case 2:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.t0 = [];

              case 5:
                this.nonRoutableList = _context2.t0;
                notifier["a" /* default */].addSpecifiedListener(notifier["a" /* default */].types.ADD_NON_ROUTABLE_DOMAIN, function (payload) {
                  _this2.addDomainHandler(payload);
                });
                logger["a" /* default */].info('NonRoutable module was initiated successfully');

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addDomainHandler",
    value: function addDomainHandler(payload) {
      var hostname = Object(helpers["c" /* getHostname */])(payload);
      this.addHostname(hostname);
    }
  }, {
    key: "addHostname",
    value: function addHostname(hostname) {
      if (this.nonRoutableList.includes(hostname)) {
        return;
      }

      this.nonRoutableList.push(hostname);
      this.updateStorage();
    }
  }, {
    key: "isUrlRoutable",
    value: function isUrlRoutable(url) {
      var hostname = Object(helpers["c" /* getHostname */])(url);

      if (!hostname) {
        return true;
      }

      if (hostname === this.LOCALHOST || this.nonRoutableList.includes(hostname)) {
        return false;
      }

      if (!ipaddr_default.a.isValid(hostname)) {
        return true;
      }

      var addr = ipaddr_default.a.parse(hostname);

      if (addr.kind() === 'ipv6') {
        return true;
      }

      return !this.parsedCIDRList.some(function (parsedCIDR) {
        return addr.match(parsedCIDR);
      });
    }
  }, {
    key: "getNonRoutableList",
    value: function getNonRoutableList() {
      return this.nonRoutableList;
    }
  }]);

  return NonRoutableService;
}();

/* harmony default export */ var routability_NonRoutableService = (NonRoutableService_NonRoutableService);
// EXTERNAL MODULE: ./src/background/storage.js
var background_storage = __webpack_require__(18);

// CONCATENATED MODULE: ./src/background/routability/nonRoutable.js


var nonRoutableService = new routability_NonRoutableService(background_storage["a" /* default */]);
var nonRoutable = {
  isUrlRoutable: nonRoutableService.isUrlRoutable.bind(nonRoutableService),
  init: nonRoutableService.init.bind(nonRoutableService),
  getNonRoutableList: nonRoutableService.getNonRoutableList.bind(nonRoutableService)
};
/* harmony default export */ var routability_nonRoutable = __webpack_exports__["a"] = (nonRoutable);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(5);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);

// CONCATENATED MODULE: ./src/background/runtime.js

var runtime_getUrl = function getUrl(url) {
  return browser_polyfill_default.a.runtime.getURL(url);
};
// EXTERNAL MODULE: ./src/lib/helpers.js
var helpers = __webpack_require__(23);

// CONCATENATED MODULE: ./src/background/prefs.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prefs; });


var ICONS_PATH = 'assets/images/icons';
var Prefs = {
  get ICONS() {
    return Object(helpers["e" /* lazyGet */])(Prefs, 'ICONS', function () {
      return {
        GREEN: {
          19: runtime_getUrl("".concat(ICONS_PATH, "/green-19.png")),
          38: runtime_getUrl("".concat(ICONS_PATH, "/green-38.png")),
          128: runtime_getUrl("".concat(ICONS_PATH, "/green-128.png"))
        },
        GREY: {
          19: runtime_getUrl("".concat(ICONS_PATH, "/grey-19.png")),
          38: runtime_getUrl("".concat(ICONS_PATH, "/grey-38.png")),
          128: runtime_getUrl("".concat(ICONS_PATH, "/grey-128.png"))
        }
      };
    });
  }

};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(162),
    baseMatchesProperty = __webpack_require__(217),
    identity = __webpack_require__(61),
    isArray = __webpack_require__(27),
    property = __webpack_require__(226);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(75),
    setCacheAdd = __webpack_require__(191),
    setCacheHas = __webpack_require__(192);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31),
    root = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 154 */,
/* 155 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function() {
  var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root, zoneIndex;

  ipaddr = {};

  root = this;

  if (( true && module !== null) && module.exports) {
    module.exports = ipaddr;
  } else {
    root['ipaddr'] = ipaddr;
  }

  matchCIDR = function(first, second, partSize, cidrBits) {
    var part, shift;
    if (first.length !== second.length) {
      throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
    }
    part = 0;
    while (cidrBits > 0) {
      shift = partSize - cidrBits;
      if (shift < 0) {
        shift = 0;
      }
      if (first[part] >> shift !== second[part] >> shift) {
        return false;
      }
      cidrBits -= partSize;
      part += 1;
    }
    return true;
  };

  ipaddr.subnetMatch = function(address, rangeList, defaultName) {
    var k, len, rangeName, rangeSubnets, subnet;
    if (defaultName == null) {
      defaultName = 'unicast';
    }
    for (rangeName in rangeList) {
      rangeSubnets = rangeList[rangeName];
      if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
        rangeSubnets = [rangeSubnets];
      }
      for (k = 0, len = rangeSubnets.length; k < len; k++) {
        subnet = rangeSubnets[k];
        if (address.kind() === subnet[0].kind()) {
          if (address.match.apply(address, subnet)) {
            return rangeName;
          }
        }
      }
    }
    return defaultName;
  };

  ipaddr.IPv4 = (function() {
    function IPv4(octets) {
      var k, len, octet;
      if (octets.length !== 4) {
        throw new Error("ipaddr: ipv4 octet count should be 4");
      }
      for (k = 0, len = octets.length; k < len; k++) {
        octet = octets[k];
        if (!((0 <= octet && octet <= 255))) {
          throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
        }
      }
      this.octets = octets;
    }

    IPv4.prototype.kind = function() {
      return 'ipv4';
    };

    IPv4.prototype.toString = function() {
      return this.octets.join(".");
    };

    IPv4.prototype.toNormalizedString = function() {
      return this.toString();
    };

    IPv4.prototype.toByteArray = function() {
      return this.octets.slice(0);
    };

    IPv4.prototype.match = function(other, cidrRange) {
      var ref;
      if (cidrRange === void 0) {
        ref = other, other = ref[0], cidrRange = ref[1];
      }
      if (other.kind() !== 'ipv4') {
        throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
      }
      return matchCIDR(this.octets, other.octets, 8, cidrRange);
    };

    IPv4.prototype.SpecialRanges = {
      unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
      broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
      multicast: [[new IPv4([224, 0, 0, 0]), 4]],
      linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
      loopback: [[new IPv4([127, 0, 0, 0]), 8]],
      carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
      "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
      reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
    };

    IPv4.prototype.range = function() {
      return ipaddr.subnetMatch(this, this.SpecialRanges);
    };

    IPv4.prototype.toIPv4MappedAddress = function() {
      return ipaddr.IPv6.parse("::ffff:" + (this.toString()));
    };

    IPv4.prototype.prefixLengthFromSubnetMask = function() {
      var cidr, i, k, octet, stop, zeros, zerotable;
      zerotable = {
        0: 8,
        128: 7,
        192: 6,
        224: 5,
        240: 4,
        248: 3,
        252: 2,
        254: 1,
        255: 0
      };
      cidr = 0;
      stop = false;
      for (i = k = 3; k >= 0; i = k += -1) {
        octet = this.octets[i];
        if (octet in zerotable) {
          zeros = zerotable[octet];
          if (stop && zeros !== 0) {
            return null;
          }
          if (zeros !== 8) {
            stop = true;
          }
          cidr += zeros;
        } else {
          return null;
        }
      }
      return 32 - cidr;
    };

    return IPv4;

  })();

  ipv4Part = "(0?\\d+|0x[a-f0-9]+)";

  ipv4Regexes = {
    fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", 'i'),
    longValue: new RegExp("^" + ipv4Part + "$", 'i')
  };

  ipaddr.IPv4.parser = function(string) {
    var match, parseIntAuto, part, shift, value;
    parseIntAuto = function(string) {
      if (string[0] === "0" && string[1] !== "x") {
        return parseInt(string, 8);
      } else {
        return parseInt(string);
      }
    };
    if (match = string.match(ipv4Regexes.fourOctet)) {
      return (function() {
        var k, len, ref, results;
        ref = match.slice(1, 6);
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          part = ref[k];
          results.push(parseIntAuto(part));
        }
        return results;
      })();
    } else if (match = string.match(ipv4Regexes.longValue)) {
      value = parseIntAuto(match[1]);
      if (value > 0xffffffff || value < 0) {
        throw new Error("ipaddr: address outside defined range");
      }
      return ((function() {
        var k, results;
        results = [];
        for (shift = k = 0; k <= 24; shift = k += 8) {
          results.push((value >> shift) & 0xff);
        }
        return results;
      })()).reverse();
    } else {
      return null;
    }
  };

  ipaddr.IPv6 = (function() {
    function IPv6(parts, zoneId) {
      var i, k, l, len, part, ref;
      if (parts.length === 16) {
        this.parts = [];
        for (i = k = 0; k <= 14; i = k += 2) {
          this.parts.push((parts[i] << 8) | parts[i + 1]);
        }
      } else if (parts.length === 8) {
        this.parts = parts;
      } else {
        throw new Error("ipaddr: ipv6 part count should be 8 or 16");
      }
      ref = this.parts;
      for (l = 0, len = ref.length; l < len; l++) {
        part = ref[l];
        if (!((0 <= part && part <= 0xffff))) {
          throw new Error("ipaddr: ipv6 part should fit in 16 bits");
        }
      }
      if (zoneId) {
        this.zoneId = zoneId;
      }
    }

    IPv6.prototype.kind = function() {
      return 'ipv6';
    };

    IPv6.prototype.toString = function() {
      return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, '::');
    };

    IPv6.prototype.toRFC5952String = function() {
      var bestMatchIndex, bestMatchLength, match, regex, string;
      regex = /((^|:)(0(:|$)){2,})/g;
      string = this.toNormalizedString();
      bestMatchIndex = 0;
      bestMatchLength = -1;
      while ((match = regex.exec(string))) {
        if (match[0].length > bestMatchLength) {
          bestMatchIndex = match.index;
          bestMatchLength = match[0].length;
        }
      }
      if (bestMatchLength < 0) {
        return string;
      }
      return string.substring(0, bestMatchIndex) + '::' + string.substring(bestMatchIndex + bestMatchLength);
    };

    IPv6.prototype.toByteArray = function() {
      var bytes, k, len, part, ref;
      bytes = [];
      ref = this.parts;
      for (k = 0, len = ref.length; k < len; k++) {
        part = ref[k];
        bytes.push(part >> 8);
        bytes.push(part & 0xff);
      }
      return bytes;
    };

    IPv6.prototype.toNormalizedString = function() {
      var addr, part, suffix;
      addr = ((function() {
        var k, len, ref, results;
        ref = this.parts;
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          part = ref[k];
          results.push(part.toString(16));
        }
        return results;
      }).call(this)).join(":");
      suffix = '';
      if (this.zoneId) {
        suffix = '%' + this.zoneId;
      }
      return addr + suffix;
    };

    IPv6.prototype.toFixedLengthString = function() {
      var addr, part, suffix;
      addr = ((function() {
        var k, len, ref, results;
        ref = this.parts;
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          part = ref[k];
          results.push(part.toString(16).padStart(4, '0'));
        }
        return results;
      }).call(this)).join(":");
      suffix = '';
      if (this.zoneId) {
        suffix = '%' + this.zoneId;
      }
      return addr + suffix;
    };

    IPv6.prototype.match = function(other, cidrRange) {
      var ref;
      if (cidrRange === void 0) {
        ref = other, other = ref[0], cidrRange = ref[1];
      }
      if (other.kind() !== 'ipv6') {
        throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
      }
      return matchCIDR(this.parts, other.parts, 16, cidrRange);
    };

    IPv6.prototype.SpecialRanges = {
      unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
      linkLocal: [new IPv6([0xfe80, 0, 0, 0, 0, 0, 0, 0]), 10],
      multicast: [new IPv6([0xff00, 0, 0, 0, 0, 0, 0, 0]), 8],
      loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
      uniqueLocal: [new IPv6([0xfc00, 0, 0, 0, 0, 0, 0, 0]), 7],
      ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 0xffff, 0, 0]), 96],
      rfc6145: [new IPv6([0, 0, 0, 0, 0xffff, 0, 0, 0]), 96],
      rfc6052: [new IPv6([0x64, 0xff9b, 0, 0, 0, 0, 0, 0]), 96],
      '6to4': [new IPv6([0x2002, 0, 0, 0, 0, 0, 0, 0]), 16],
      teredo: [new IPv6([0x2001, 0, 0, 0, 0, 0, 0, 0]), 32],
      reserved: [[new IPv6([0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]), 32]]
    };

    IPv6.prototype.range = function() {
      return ipaddr.subnetMatch(this, this.SpecialRanges);
    };

    IPv6.prototype.isIPv4MappedAddress = function() {
      return this.range() === 'ipv4Mapped';
    };

    IPv6.prototype.toIPv4Address = function() {
      var high, low, ref;
      if (!this.isIPv4MappedAddress()) {
        throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
      }
      ref = this.parts.slice(-2), high = ref[0], low = ref[1];
      return new ipaddr.IPv4([high >> 8, high & 0xff, low >> 8, low & 0xff]);
    };

    IPv6.prototype.prefixLengthFromSubnetMask = function() {
      var cidr, i, k, part, stop, zeros, zerotable;
      zerotable = {
        0: 16,
        32768: 15,
        49152: 14,
        57344: 13,
        61440: 12,
        63488: 11,
        64512: 10,
        65024: 9,
        65280: 8,
        65408: 7,
        65472: 6,
        65504: 5,
        65520: 4,
        65528: 3,
        65532: 2,
        65534: 1,
        65535: 0
      };
      cidr = 0;
      stop = false;
      for (i = k = 7; k >= 0; i = k += -1) {
        part = this.parts[i];
        if (part in zerotable) {
          zeros = zerotable[part];
          if (stop && zeros !== 0) {
            return null;
          }
          if (zeros !== 16) {
            stop = true;
          }
          cidr += zeros;
        } else {
          return null;
        }
      }
      return 128 - cidr;
    };

    return IPv6;

  })();

  ipv6Part = "(?:[0-9a-f]+::?)+";

  zoneIndex = "%[0-9a-z]{1,}";

  ipv6Regexes = {
    zoneIndex: new RegExp(zoneIndex, 'i'),
    "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", 'i'),
    transitional: new RegExp(("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)") + (ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part) + ("(" + zoneIndex + ")?$"), 'i')
  };

  expandIPv6 = function(string, parts) {
    var colonCount, lastColon, part, replacement, replacementCount, zoneId;
    if (string.indexOf('::') !== string.lastIndexOf('::')) {
      return null;
    }
    zoneId = (string.match(ipv6Regexes['zoneIndex']) || [])[0];
    if (zoneId) {
      zoneId = zoneId.substring(1);
      string = string.replace(/%.+$/, '');
    }
    colonCount = 0;
    lastColon = -1;
    while ((lastColon = string.indexOf(':', lastColon + 1)) >= 0) {
      colonCount++;
    }
    if (string.substr(0, 2) === '::') {
      colonCount--;
    }
    if (string.substr(-2, 2) === '::') {
      colonCount--;
    }
    if (colonCount > parts) {
      return null;
    }
    replacementCount = parts - colonCount;
    replacement = ':';
    while (replacementCount--) {
      replacement += '0:';
    }
    string = string.replace('::', replacement);
    if (string[0] === ':') {
      string = string.slice(1);
    }
    if (string[string.length - 1] === ':') {
      string = string.slice(0, -1);
    }
    parts = (function() {
      var k, len, ref, results;
      ref = string.split(":");
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        part = ref[k];
        results.push(parseInt(part, 16));
      }
      return results;
    })();
    return {
      parts: parts,
      zoneId: zoneId
    };
  };

  ipaddr.IPv6.parser = function(string) {
    var addr, k, len, match, octet, octets, zoneId;
    if (ipv6Regexes['native'].test(string)) {
      return expandIPv6(string, 8);
    } else if (match = string.match(ipv6Regexes['transitional'])) {
      zoneId = match[6] || '';
      addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
      if (addr.parts) {
        octets = [parseInt(match[2]), parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];
        for (k = 0, len = octets.length; k < len; k++) {
          octet = octets[k];
          if (!((0 <= octet && octet <= 255))) {
            return null;
          }
        }
        addr.parts.push(octets[0] << 8 | octets[1]);
        addr.parts.push(octets[2] << 8 | octets[3]);
        return {
          parts: addr.parts,
          zoneId: addr.zoneId
        };
      }
    }
    return null;
  };

  ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
    return this.parser(string) !== null;
  };

  ipaddr.IPv4.isValid = function(string) {
    var e;
    try {
      new this(this.parser(string));
      return true;
    } catch (error1) {
      e = error1;
      return false;
    }
  };

  ipaddr.IPv4.isValidFourPartDecimal = function(string) {
    if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
      return true;
    } else {
      return false;
    }
  };

  ipaddr.IPv6.isValid = function(string) {
    var addr, e;
    if (typeof string === "string" && string.indexOf(":") === -1) {
      return false;
    }
    try {
      addr = this.parser(string);
      new this(addr.parts, addr.zoneId);
      return true;
    } catch (error1) {
      e = error1;
      return false;
    }
  };

  ipaddr.IPv4.parse = function(string) {
    var parts;
    parts = this.parser(string);
    if (parts === null) {
      throw new Error("ipaddr: string is not formatted like ip address");
    }
    return new this(parts);
  };

  ipaddr.IPv6.parse = function(string) {
    var addr;
    addr = this.parser(string);
    if (addr.parts === null) {
      throw new Error("ipaddr: string is not formatted like ip address");
    }
    return new this(addr.parts, addr.zoneId);
  };

  ipaddr.IPv4.parseCIDR = function(string) {
    var maskLength, match, parsed;
    if (match = string.match(/^(.+)\/(\d+)$/)) {
      maskLength = parseInt(match[2]);
      if (maskLength >= 0 && maskLength <= 32) {
        parsed = [this.parse(match[1]), maskLength];
        Object.defineProperty(parsed, 'toString', {
          value: function() {
            return this.join('/');
          }
        });
        return parsed;
      }
    }
    throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
  };

  ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
    var filledOctetCount, j, octets;
    prefix = parseInt(prefix);
    if (prefix < 0 || prefix > 32) {
      throw new Error('ipaddr: invalid IPv4 prefix length');
    }
    octets = [0, 0, 0, 0];
    j = 0;
    filledOctetCount = Math.floor(prefix / 8);
    while (j < filledOctetCount) {
      octets[j] = 255;
      j++;
    }
    if (filledOctetCount < 4) {
      octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - (prefix % 8);
    }
    return new this(octets);
  };

  ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
    var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
    try {
      cidr = this.parseCIDR(string);
      ipInterfaceOctets = cidr[0].toByteArray();
      subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
      octets = [];
      i = 0;
      while (i < 4) {
        octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
        i++;
      }
      return new this(octets);
    } catch (error1) {
      error = error1;
      throw new Error('ipaddr: the address does not have IPv4 CIDR format');
    }
  };

  ipaddr.IPv4.networkAddressFromCIDR = function(string) {
    var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
    try {
      cidr = this.parseCIDR(string);
      ipInterfaceOctets = cidr[0].toByteArray();
      subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
      octets = [];
      i = 0;
      while (i < 4) {
        octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
        i++;
      }
      return new this(octets);
    } catch (error1) {
      error = error1;
      throw new Error('ipaddr: the address does not have IPv4 CIDR format');
    }
  };

  ipaddr.IPv6.parseCIDR = function(string) {
    var maskLength, match, parsed;
    if (match = string.match(/^(.+)\/(\d+)$/)) {
      maskLength = parseInt(match[2]);
      if (maskLength >= 0 && maskLength <= 128) {
        parsed = [this.parse(match[1]), maskLength];
        Object.defineProperty(parsed, 'toString', {
          value: function() {
            return this.join('/');
          }
        });
        return parsed;
      }
    }
    throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
  };

  ipaddr.isValid = function(string) {
    return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
  };

  ipaddr.parse = function(string) {
    if (ipaddr.IPv6.isValid(string)) {
      return ipaddr.IPv6.parse(string);
    } else if (ipaddr.IPv4.isValid(string)) {
      return ipaddr.IPv4.parse(string);
    } else {
      throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
    }
  };

  ipaddr.parseCIDR = function(string) {
    var e;
    try {
      return ipaddr.IPv6.parseCIDR(string);
    } catch (error1) {
      e = error1;
      try {
        return ipaddr.IPv4.parseCIDR(string);
      } catch (error1) {
        e = error1;
        throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
      }
    }
  };

  ipaddr.fromByteArray = function(bytes) {
    var length;
    length = bytes.length;
    if (length === 4) {
      return new ipaddr.IPv4(bytes);
    } else if (length === 16) {
      return new ipaddr.IPv6(bytes);
    } else {
      throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
    }
  };

  ipaddr.process = function(string) {
    var addr;
    addr = this.parse(string);
    if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
      return addr.toIPv4Address();
    } else {
      return addr;
    }
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(91)(module)))

/***/ }),
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(108),
    isFlattenable = __webpack_require__(159);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(37),
    isArguments = __webpack_require__(72),
    isArray = __webpack_require__(27);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(39),
    isObjectLike = __webpack_require__(40);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(109),
    baseIteratee = __webpack_require__(150),
    baseMap = __webpack_require__(229),
    baseSortBy = __webpack_require__(235),
    baseUnary = __webpack_require__(117),
    compareMultiple = __webpack_require__(236),
    identity = __webpack_require__(61);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(163),
    getMatchData = __webpack_require__(216),
    matchesStrictComparable = __webpack_require__(119);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(110),
    baseIsEqual = __webpack_require__(90);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(56);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(56);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(56);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(56);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(55);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(55),
    Map = __webpack_require__(74),
    MapCache = __webpack_require__(75);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(111),
    isMasked = __webpack_require__(175),
    isObject = __webpack_require__(29),
    toSource = __webpack_require__(112);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(176);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(179),
    ListCache = __webpack_require__(55),
    Map = __webpack_require__(74);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(180),
    hashDelete = __webpack_require__(181),
    hashGet = __webpack_require__(182),
    hashHas = __webpack_require__(183),
    hashSet = __webpack_require__(184);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(57);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(57);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(57);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(57);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(58);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(58);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(58);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(58);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(110),
    equalArrays = __webpack_require__(113),
    equalByTag = __webpack_require__(194),
    equalObjects = __webpack_require__(197),
    getTag = __webpack_require__(212),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(115),
    isTypedArray = __webpack_require__(116);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(37),
    Uint8Array = __webpack_require__(195),
    eq = __webpack_require__(73),
    equalArrays = __webpack_require__(113),
    mapToArray = __webpack_require__(196),
    setToArray = __webpack_require__(114);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(198);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(199),
    getSymbols = __webpack_require__(200),
    keys = __webpack_require__(76);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(108),
    isArray = __webpack_require__(27);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(201),
    stubArray = __webpack_require__(202);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(204),
    isArguments = __webpack_require__(72),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(115),
    isIndex = __webpack_require__(77),
    isTypedArray = __webpack_require__(116);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 205 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(39),
    isLength = __webpack_require__(78),
    isObjectLike = __webpack_require__(40);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(71);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(91)(module)))

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(209),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(211);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(213),
    Map = __webpack_require__(74),
    Promise = __webpack_require__(214),
    Set = __webpack_require__(153),
    WeakMap = __webpack_require__(215),
    baseGetTag = __webpack_require__(39),
    toSource = __webpack_require__(112);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31),
    root = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31),
    root = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31),
    root = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(118),
    keys = __webpack_require__(76);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(90),
    get = __webpack_require__(92),
    hasIn = __webpack_require__(223),
    isKey = __webpack_require__(79),
    isStrictComparable = __webpack_require__(118),
    matchesStrictComparable = __webpack_require__(119),
    toKey = __webpack_require__(60);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(219);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(220);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(75);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(222);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(37),
    arrayMap = __webpack_require__(109),
    isArray = __webpack_require__(27),
    isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(224),
    hasPath = __webpack_require__(225);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(121),
    isArguments = __webpack_require__(72),
    isArray = __webpack_require__(27),
    isIndex = __webpack_require__(77),
    isLength = __webpack_require__(78),
    toKey = __webpack_require__(60);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(227),
    basePropertyDeep = __webpack_require__(228),
    isKey = __webpack_require__(79),
    toKey = __webpack_require__(60);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(120);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(230),
    isArrayLike = __webpack_require__(59);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(231),
    createBaseEach = __webpack_require__(234);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(232),
    keys = __webpack_require__(76);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(233);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(59);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 235 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(237);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(38);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(61),
    overRest = __webpack_require__(239),
    setToString = __webpack_require__(241);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(240);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(242),
    shortOut = __webpack_require__(245);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(243),
    defineProperty = __webpack_require__(244),
    identity = __webpack_require__(61);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(73),
    isArrayLike = __webpack_require__(59),
    isIndex = __webpack_require__(77),
    isObject = __webpack_require__(29);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=__webpack_require__(30);var _getCoordinateKey=_interopRequireDefault(__webpack_require__(80));var _toDecimal=_interopRequireDefault(__webpack_require__(122));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var getLatitude=function getLatitude(point,raw){var latKey=(0,_getCoordinateKey.default)(point,_constants.latitudeKeys);if(typeof latKey==="undefined"||latKey===null){return}var value=point[latKey];return raw===true?value:(0,_toDecimal.default)(value)};var _default=getLatitude;exports.default=_default;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _getCoordinateKeys2=_interopRequireDefault(__webpack_require__(123));var _isValidLatitude=_interopRequireDefault(__webpack_require__(249));var _isValidLongitude=_interopRequireDefault(__webpack_require__(250));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var isValidCoordinate=function isValidCoordinate(point){var _getCoordinateKeys=(0,_getCoordinateKeys2.default)(point),latitude=_getCoordinateKeys.latitude,longitude=_getCoordinateKeys.longitude;if(Array.isArray(point)&&point.length>=2){return(0,_isValidLongitude.default)(point[0])&&(0,_isValidLatitude.default)(point[1])}if(typeof latitude==="undefined"||typeof longitude==="undefined"){return false}var lon=point[longitude];var lat=point[latitude];if(typeof lat==="undefined"||typeof lon==="undefined"){return false}if((0,_isValidLatitude.default)(lat)===false||(0,_isValidLongitude.default)(lon)===false){return false}return true};var _default=isValidCoordinate;exports.default=_default;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _isDecimal=_interopRequireDefault(__webpack_require__(81));var _isSexagesimal=_interopRequireDefault(__webpack_require__(82));var _sexagesimalToDecimal=_interopRequireDefault(__webpack_require__(83));var _constants=__webpack_require__(30);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var isValidLatitude=function isValidLatitude(value){if((0,_isDecimal.default)(value)){if(parseFloat(value)>_constants.MAXLAT||value<_constants.MINLAT){return false}return true}if((0,_isSexagesimal.default)(value)){return isValidLatitude((0,_sexagesimalToDecimal.default)(value))}return false};var _default=isValidLatitude;exports.default=_default;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _isDecimal=_interopRequireDefault(__webpack_require__(81));var _isSexagesimal=_interopRequireDefault(__webpack_require__(82));var _sexagesimalToDecimal=_interopRequireDefault(__webpack_require__(83));var _constants=__webpack_require__(30);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var isValidLongitude=function isValidLongitude(value){if((0,_isDecimal.default)(value)){if(parseFloat(value)>_constants.MAXLON||value<_constants.MINLON){return false}return true}if((0,_isSexagesimal.default)(value)){return isValidLongitude((0,_sexagesimalToDecimal.default)(value))}return false};var _default=isValidLongitude;exports.default=_default;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=__webpack_require__(30);var _getCoordinateKey=_interopRequireDefault(__webpack_require__(80));var _toDecimal=_interopRequireDefault(__webpack_require__(122));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var getLongitude=function getLongitude(point,raw){var latKey=(0,_getCoordinateKey.default)(point,_constants.longitudeKeys);if(typeof latKey==="undefined"||latKey===null){return}var value=point[latKey];return raw===true?value:(0,_toDecimal.default)(value)};var _default=getLongitude;exports.default=_default;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var toRad=function toRad(value){return value*Math.PI/180};var _default=toRad;exports.default=_default;

/***/ }),
/* 253 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(90);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 318 */,
/* 319 */,
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(254);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(41);
var normalizeHeaderName = __webpack_require__(361);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(325);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(325);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(124)))

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);
var settle = __webpack_require__(362);
var buildURL = __webpack_require__(322);
var buildFullPath = __webpack_require__(364);
var parseHeaders = __webpack_require__(367);
var isURLSameOrigin = __webpack_require__(368);
var createError = __webpack_require__(326);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(369);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(363);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(84);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(84);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(353));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(63);

var setPrototypeOf = __webpack_require__(253);

var isNativeFunction = __webpack_require__(372);

var construct = __webpack_require__(373);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(150),
    baseUniq = __webpack_require__(374);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(339);
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(339, 1);








var AppStatus =
/*#__PURE__*/
function () {
  function AppStatus() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AppStatus);

    this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_6__.version;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AppStatus, [{
    key: "canControlProxy",
    value: function () {
      var _canControlProxy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var controlStatus, proxyEnabled;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _proxy__WEBPACK_IMPORTED_MODULE_4__[/* proxy */ "a"].canControlProxy();

              case 2:
                controlStatus = _context.sent;

                if (!controlStatus.canControlProxy) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", controlStatus);

              case 5:
                _context.next = 7;
                return _settings_settings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].isSettingEnabled(_settings_settings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].SETTINGS_IDS.PROXY_ENABLED);

              case 7:
                proxyEnabled = _context.sent;

                if (!proxyEnabled) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return _settings_settings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].disableProxy();

              case 11:
                return _context.abrupt("return", controlStatus);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function canControlProxy() {
        return _canControlProxy.apply(this, arguments);
      }

      return canControlProxy;
    }()
  }, {
    key: "version",
    get: function get() {
      return this.appVersion;
    }
  }]);

  return AppStatus;
}();

var appStatus = new AppStatus();
/* harmony default export */ __webpack_exports__["a"] = (appStatus);

/***/ }),
/* 339 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"adguard-vpn\",\"version\":\"0.5.0\",\"description\":\"AdGuard VPN\",\"author\":\"adguard@adguard.com\",\"license\":\"LGPL-3.0\",\"scripts\":{\"lint\":\"eslint .\",\"watch\":\"NODE_ENV=dev run-p \\\"build:chrome --watch\\\" \\\"build:firefox --watch\\\"\",\"watch:firefox\":\"NODE_ENV=dev run-s \\\"build:firefox --watch\\\"\",\"dev\":\"NODE_ENV=dev run-p build:*\",\"beta\":\"NODE_ENV=beta run-p build:*\",\"release\":\"NODE_ENV=release run-p build:*\",\"build:chrome\":\"BROWSER=chrome webpack --config tasks/chrome/webpack.chrome.js\",\"build:firefox\":\"BROWSER=firefox webpack --config tasks/firefox/webpack.firefox.js\",\"build:edge\":\"BROWSER=edge webpack --config tasks/edge/webpack.edge.js\",\"locales:download\":\"LOCALES=DOWNLOAD node tasks/locales.js\",\"test\":\"jest\",\"test:watch\":\"jest --watch\",\"locales:upload\":\"LOCALES=UPLOAD node tasks/locales.js\"},\"husky\":{\"hooks\":{\"pre-commit\":\"yarn lint\",\"pre-push\":\"yarn test\"}},\"devDependencies\":{\"@babel/cli\":\"^7.8.4\",\"@babel/core\":\"^7.8.4\",\"@babel/plugin-proposal-class-properties\":\"^7.8.3\",\"@babel/plugin-proposal-decorators\":\"^7.8.3\",\"@babel/plugin-proposal-export-default-from\":\"^7.8.3\",\"@babel/plugin-proposal-export-namespace-from\":\"^7.8.3\",\"@babel/plugin-proposal-nullish-coalescing-operator\":\"^7.8.3\",\"@babel/plugin-proposal-optional-chaining\":\"^7.8.3\",\"@babel/plugin-transform-runtime\":\"^7.8.3\",\"@babel/preset-env\":\"^7.8.4\",\"@babel/preset-react\":\"^7.8.3\",\"axios\":\"^0.19.2\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^5.1.1\",\"create-file-webpack\":\"^1.0.2\",\"css-loader\":\"^3.4.2\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-airbnb\":\"^18.0.1\",\"eslint-plugin-import\":\"^2.20.0\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.18.0\",\"file-loader\":\"^5.0.2\",\"form-data\":\"^3.0.0\",\"html-webpack-plugin\":\"^3.2.0\",\"husky\":\"^4.2.1\",\"jest\":\"^25.1.0\",\"loader-utils\":\"^1.2.3\",\"npm-run-all\":\"^4.1.5\",\"pac-resolver\":\"^3.0.0\",\"postcss-import\":\"^12.0.1\",\"postcss-loader\":\"^3.0.0\",\"postcss-nested\":\"^4.2.1\",\"postcss-preset-env\":\"^6.7.0\",\"postcss-svg\":\"^3.0.0\",\"schema-utils\":\"^2.6.4\",\"style-loader\":\"^1.1.3\",\"tmp-promise\":\"^2.0.2\",\"webpack\":\"^4.41.5\",\"webpack-cli\":\"^3.3.10\",\"webpack-conditional-loader\":\"^1.0.12\",\"webpack-merge\":\"^4.2.2\",\"zip-webpack-plugin\":\"^3.0.0\"},\"dependencies\":{\"@babel/runtime\":\"^7.8.4\",\"classnames\":\"^2.2.6\",\"crypto-js\":\"^3.1.9-1\",\"geolib\":\"^3.2.1\",\"ipaddr.js\":\"^1.9.1\",\"lodash\":\"^4.17.15\",\"mobx\":\"^5.15.4\",\"mobx-react\":\"^6.1.4\",\"nanoid\":\"^2.1.11\",\"prop-types\":\"^15.7.2\",\"protobufjs\":\"^6.8.8\",\"qs\":\"^6.9.1\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"react-html-parser\":\"^2.0.2\",\"react-modal\":\"^3.11.1\",\"react-router-dom\":\"^5.1.2\",\"react-simple-maps\":\"^0.12.1\",\"react-transition-group\":\"^4.3.0\",\"reconnecting-websocket\":\"^4.2.0\",\"webextension-polyfill\":\"^0.6.0\"}}");

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AuthCache() {
  var DEFAULTS = {
    username: '',
    password: '',
    step: ''
  };

  var authStorage = _objectSpread({}, DEFAULTS);
  /**
   * Sets values to default
   */


  var clearAuthCache = function clearAuthCache() {
    authStorage = _objectSpread({}, DEFAULTS);
  };
  /**
   * Sets values to the storage
   * @param {string} field
   * @param {string} value
   */


  var updateAuthCache = function updateAuthCache(field, value) {
    authStorage[field] = value;
  };
  /**
   * Returns all values
   * @returns {{step, login, username}}
   */


  var getAuthCache = function getAuthCache() {
    return authStorage;
  };

  return {
    updateAuthCache: updateAuthCache,
    getAuthCache: getAuthCache,
    clearAuthCache: clearAuthCache
  };
}

var authCache = new AuthCache();
/* harmony default export */ __webpack_exports__["a"] = (authCache);

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);


 // message handler used for message exchange with content pages only
// for other cases use global variable "adguard"
// eslint-disable-next-line no-unused-vars

var messagesHandler = function messagesHandler(request, sender, sendResponse) {
  var type = request.type;

  switch (type) {
    case _lib_constants__WEBPACK_IMPORTED_MODULE_1__[/* MESSAGES_TYPES */ "b"].AUTHENTICATE_SOCIAL:
      {
        var id = sender.tab.id;
        var queryString = request.queryString;
        _auth__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].authenticateSocial(queryString, id);
        break;
      }

    default:
      break;
  }

  return true;
};

var init = function init() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.onMessage.addListener(messagesHandler);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  init: init
});

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vpn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _permissionsChecker_permissionsError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var _routability_nonRoutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(148);
/* harmony import */ var _permissionsChecker_permissionsChecker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(147);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);




var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(getPopupDataRetry);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var throttledPermissionsChecker = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(_permissionsChecker_permissionsChecker__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].checkPermissions, 2000);

var getPopupData =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
    var isAuthenticated, error, isRoutable, vpnInfo, endpoints, selectedEndpoint, canControlProxy, isProxyEnabled;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return adguard.auth.isAuthenticated();

          case 2:
            isAuthenticated = _context.sent;

            if (isAuthenticated) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              isAuthenticated: isAuthenticated
            });

          case 5:
            error = _permissionsChecker_permissionsError__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getError();
            isRoutable = _routability_nonRoutable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].isUrlRoutable(url);
            vpnInfo = _vpn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getVpnInfo();
            endpoints = _vpn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getEndpoints();
            _context.next = 11;
            return _vpn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getSelectedEndpoint();

          case 11:
            selectedEndpoint = _context.sent;
            _context.next = 14;
            return adguard.appStatus.canControlProxy();

          case 14:
            canControlProxy = _context.sent;
            isProxyEnabled = adguard.settings.getSetting(_lib_constants__WEBPACK_IMPORTED_MODULE_6__[/* SETTINGS_IDS */ "c"].PROXY_ENABLED); // If error check permissions when popup is opened, ignoring multiple retries

            if (error) {
              throttledPermissionsChecker();
            }

            return _context.abrupt("return", {
              permissionsError: error,
              vpnInfo: vpnInfo,
              endpoints: endpoints,
              selectedEndpoint: selectedEndpoint,
              isAuthenticated: isAuthenticated,
              canControlProxy: canControlProxy,
              isProxyEnabled: isProxyEnabled,
              isRoutable: isRoutable
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPopupData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var sleep = function sleep(waitTime) {
  return new Promise(function (resolve) {
    setTimeout(resolve, waitTime);
  });
};

var retryCounter = 0;
var DEFAULT_RETRY_DELAY = 400;

function getPopupDataRetry(url) {
  var retryNum,
      retryDelay,
      backoffIndex,
      data,
      vpnInfo,
      endpoints,
      selectedEndpoint,
      hasRequiredData,
      _args2 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getPopupDataRetry$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          retryNum = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
          retryDelay = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : DEFAULT_RETRY_DELAY;
          backoffIndex = 1.5;
          _context2.next = 5;
          return getPopupData(url);

        case 5:
          data = _context2.sent;
          retryCounter += 1;

          if (!(!data.isAuthenticated || data.permissionsError)) {
            _context2.next = 10;
            break;
          }

          retryCounter = 0;
          return _context2.abrupt("return", data);

        case 10:
          vpnInfo = data.vpnInfo, endpoints = data.endpoints, selectedEndpoint = data.selectedEndpoint;
          hasRequiredData = true;

          if (!(!vpnInfo || !endpoints || !selectedEndpoint)) {
            _context2.next = 25;
            break;
          }

          if (!(retryNum <= 1)) {
            _context2.next = 20;
            break;
          }

          if (!data.isProxyEnabled) {
            _context2.next = 17;
            break;
          }

          _context2.next = 17;
          return adguard.settings.disableProxy();

        case 17:
          retryCounter = 0;
          hasRequiredData = false;
          return _context2.abrupt("return", _objectSpread({}, data, {
            hasRequiredData: hasRequiredData
          }));

        case 20:
          _context2.next = 22;
          return sleep(retryDelay);

        case 22:
          _lib_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].debug("Retry get popup data again retry: ".concat(retryCounter));
          return _context2.delegateYield(getPopupDataRetry(url, retryNum - 1, retryDelay * backoffIndex), "t0", 24);

        case 24:
          return _context2.abrupt("return", _context2.t0);

        case 25:
          retryCounter = 0;
          return _context2.abrupt("return", _objectSpread({}, data, {
            hasRequiredData: hasRequiredData
          }));

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

var cancel;
var promise;

var getPopupDataRetryWithCancel = function getPopupDataRetryWithCancel(url, retryNum) {
  if (cancel) {
    cancel();
    retryCounter = 0;
  }

  var _runWithCancel = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_10__[/* runWithCancel */ "f"])(getPopupDataRetry, url, retryNum);

  promise = _runWithCancel.promise;
  cancel = _runWithCancel.cancel;
  return promise;
};
/**
 * If popup is closed we call this function
 * This is done because if user doesn't wait until extension gets data and closes popup,
 * then extension freezes
 */


var cancelGettingPopupData = function cancelGettingPopupData() {
  if (cancel) {
    cancel();
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getPopupDataRetryWithCancel: getPopupDataRetryWithCancel,
  cancelGettingPopupData: cancelGettingPopupData
});

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




var PROXY_PERMISSION = 'proxy';
/**
 * Returns list of enabled extensions with proxy permission, except extension itself
 * @returns {Promise<*>}
 */

var getEnabledProxyExtensions =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var extensions;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.management.getAll();

          case 2:
            extensions = _context.sent;
            return _context.abrupt("return", extensions.filter(function (extension) {
              var permissions = extension.permissions,
                  enabled = extension.enabled,
                  id = extension.id;
              return permissions.includes(PROXY_PERMISSION) && id !== webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.id && enabled;
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEnabledProxyExtensions() {
    return _ref.apply(this, arguments);
  };
}();

var turnOffProxyExtensions =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var enabledProxyExtensions, promises;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getEnabledProxyExtensions();

          case 2:
            enabledProxyExtensions = _context3.sent;
            promises = enabledProxyExtensions.map(
            /*#__PURE__*/
            function () {
              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(extension) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.management.setEnabled(extension.id, false);

                      case 3:
                        _context2.next = 8;
                        break;

                      case 5:
                        _context2.prev = 5;
                        _context2.t0 = _context2["catch"](0);
                        _lib_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].error(_context2.t0);

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 5]]);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context3.next = 6;
            return Promise.all(promises);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function turnOffProxyExtensions() {
    return _ref2.apply(this, arguments);
  };
}();

var management = {
  turnOffProxyExtensions: turnOffProxyExtensions
};
/* harmony default export */ __webpack_exports__["a"] = (management);

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




var APP_VERSION_KEY = 'update.service.app.version';

var getAppVersionFromStorage = function getAppVersionFromStorage() {
  return _storage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].get(APP_VERSION_KEY);
};

var getAppVersionFromManifest = function getAppVersionFromManifest() {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.getManifest().version;
};

var setAppVersionInStorage = function setAppVersionInStorage(appVersion) {
  return _storage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(APP_VERSION_KEY, appVersion);
};
/**
 * Returns run info
 * @returns {Promise<{
 *  isFirstRun: boolean,
 *  isUpdate: boolean,
 *  currentVersion: string,
 *  prevVersion: string
 *  }>}
 */


var getRunInfo =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var prevVersion, currentVersion, isFirstRun, isUpdate;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getAppVersionFromStorage();

          case 2:
            prevVersion = _context.sent;
            _context.next = 5;
            return getAppVersionFromManifest();

          case 5:
            currentVersion = _context.sent;
            _context.next = 8;
            return setAppVersionInStorage(currentVersion);

          case 8:
            isFirstRun = currentVersion !== prevVersion && !prevVersion;
            isUpdate = !!(currentVersion !== prevVersion && prevVersion);
            return _context.abrupt("return", {
              isFirstRun: isFirstRun,
              isUpdate: isUpdate,
              currentVersion: currentVersion,
              prevVersion: prevVersion
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRunInfo() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  getRunInfo: getRunInfo
});

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _exclusions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _lib_translator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var renewContextMenuItems =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(menuItems) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return webextension_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.contextMenus.removeAll();

          case 2:
            menuItems.forEach(function (itemOptions) {
              webextension_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.contextMenus.create(_objectSpread({
                contexts: ['all']
              }, itemOptions));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renewContextMenuItems(_x) {
    return _ref.apply(this, arguments);
  };
}();

var CONTEXT_MENU_ITEMS = {
  enable_vpn: {
    id: 'enable_vpn',
    title: _lib_translator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].translate('context_menu_enable_vpn')
  },
  disable_vpn: {
    id: 'disable_vpn',
    title: _lib_translator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].translate('context_menu_disable_vpn')
  }
};

var getContextMenuItems = function getContextMenuItems(tabUrl) {
  if (!tabUrl) {
    return [];
  }

  var vpnSwitcher;

  if (_exclusions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].isVpnEnabledByUrl(tabUrl)) {
    vpnSwitcher = CONTEXT_MENU_ITEMS.disable_vpn;

    vpnSwitcher.onclick = function () {
      return _exclusions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].disableVpnByUrl(tabUrl);
    };
  } else {
    vpnSwitcher = CONTEXT_MENU_ITEMS.enable_vpn;

    vpnSwitcher.onclick = function () {
      return _exclusions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].enableVpnByUrl(tabUrl);
    };
  }

  return [vpnSwitcher];
};

var updateContextMenu =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(tabUrl) {
    var menuItems;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            menuItems = getContextMenuItems(tabUrl);
            _context2.next = 3;
            return renewContextMenuItems(menuItems);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateContextMenu(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var init =
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var throttleTimeoutMs, throttledUpdater;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            throttleTimeoutMs = 100;
            throttledUpdater = lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(updateContextMenu, throttleTimeoutMs);
            _lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].addSpecifiedListener(_lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].types.TAB_UPDATED, throttledUpdater);
            _lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].addSpecifiedListener(_lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].types.TAB_ACTIVATED, throttledUpdater); // actualize context menu on exclusions update

            _lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].addSpecifiedListener(_lib_notifier__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].types.EXCLUSIONS_UPDATED_BACK_MESSAGE,
            /*#__PURE__*/
            _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
              var tab;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _tabs__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getCurrent();

                    case 2:
                      tab = _context3.sent;
                      throttledUpdater(tab.url);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

var contextMenu = {
  init: init
};
/* harmony default export */ __webpack_exports__["a"] = (contextMenu);

/***/ }),
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _exclusions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _connectivity_connectivity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69);
/* harmony import */ var _appStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(338);
/* harmony import */ var _authentication_authCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(340);
/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(341);
/* harmony import */ var _vpn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95);
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony import */ var _permissionsChecker_permissionsChecker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(147);
/* harmony import */ var _permissionsChecker_permissionsError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50);
/* harmony import */ var _popupData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(342);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18);
/* harmony import */ var _routability_nonRoutable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(148);
/* harmony import */ var _management__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(343);
/* harmony import */ var _updateService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(344);
/* harmony import */ var _contextMenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(345);
























global.adguard = {
  settings: _settings_settings__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  proxy: _proxy__WEBPACK_IMPORTED_MODULE_8__[/* proxy */ "a"],
  vpnApi: _api__WEBPACK_IMPORTED_MODULE_4__[/* vpnApi */ "c"],
  tabs: _tabs__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  exclusions: _exclusions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  connectivity: _connectivity_connectivity__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  appStatus: _appStatus__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
  authCache: _authentication_authCache__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
  vpn: _vpn__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
  popupData: _popupData__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
  storage: _storage__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"],
  permissionsChecker: _permissionsChecker_permissionsChecker__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
  permissionsError: _permissionsChecker_permissionsError__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
  credentials: _credentials__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
  nonRoutable: _routability_nonRoutable__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],
  management: _management__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]
};

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var runInfo;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _updateService__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].getRunInfo();

        case 3:
          runInfo = _context.sent;
          _permissionsChecker_permissionsChecker__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].init(); // should be initiated before auth module

          _context.next = 7;
          return _auth__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].init();

        case 7:
          _context.next = 9;
          return _settings_settings__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init();

        case 9:
          _context.next = 11;
          return _credentials__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].init(runInfo);

        case 11:
          _context.next = 13;
          return _exclusions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].init();

        case 13:
          _context.next = 15;
          return _settings_settings__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].applySettings();

        case 15:
          _context.next = 17;
          return _routability_nonRoutable__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].init();

        case 17:
          _context.next = 19;
          return _contextMenu__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"].init();

        case 19:
          _messaging__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].init();
          _lib_logger__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].info('Extension loaded all necessary modules');
          _context.next = 26;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          _lib_logger__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].error('Unable to start extension because of error:', _context.t0 && _context.t0.message);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 23]]);
}))();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),
/* 352 */,
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(254);
var formats = __webpack_require__(320);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(254);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset, 'value');
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);
var bind = __webpack_require__(321);
var Axios = __webpack_require__(357);
var mergeConfig = __webpack_require__(327);
var defaults = __webpack_require__(324);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(328);
axios.CancelToken = __webpack_require__(370);
axios.isCancel = __webpack_require__(323);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(371);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);
var buildURL = __webpack_require__(322);
var InterceptorManager = __webpack_require__(358);
var dispatchRequest = __webpack_require__(359);
var mergeConfig = __webpack_require__(327);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);
var transformData = __webpack_require__(360);
var isCancel = __webpack_require__(323);
var defaults = __webpack_require__(324);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(326);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(365);
var combineURLs = __webpack_require__(366);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(41);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(328);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 372 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(253);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(151),
    arrayIncludes = __webpack_require__(375),
    arrayIncludesWith = __webpack_require__(380),
    cacheHas = __webpack_require__(152),
    createSet = __webpack_require__(381),
    setToArray = __webpack_require__(114);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(376);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(377),
    baseIsNaN = __webpack_require__(378),
    strictIndexOf = __webpack_require__(379);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 377 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 378 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 379 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 380 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(153),
    noop = __webpack_require__(382),
    setToArray = __webpack_require__(114);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 382 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(384);


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(329);
protobuf.BufferWriter = __webpack_require__(393);
protobuf.Reader       = __webpack_require__(330);
protobuf.BufferReader = __webpack_require__(394);

// Utility
protobuf.util         = __webpack_require__(84);
protobuf.rpc          = __webpack_require__(395);
protobuf.roots        = __webpack_require__(397);
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Set up buffer utility according to the environment
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(84);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(329);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(84);

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(330);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(84);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(396);


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(84);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ })
/******/ ]);