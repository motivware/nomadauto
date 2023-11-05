(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@shopify/draggable/lib/draggable.js
  var require_draggable = __commonJS({
    "node_modules/@shopify/draggable/lib/draggable.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define("Draggable", [], factory);
        else if (typeof exports === "object")
          exports["Draggable"] = factory();
        else
          root["Draggable"] = factory();
      })(exports, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.i = function(value) {
              return value;
            };
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, {
                  /******/
                  configurable: false,
                  /******/
                  enumerable: true,
                  /******/
                  get: getter
                  /******/
                });
              }
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 95);
          }([
            /* 0 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              exports2.default = function(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              };
            },
            /* 1 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _defineProperty = __webpack_require__(103);
              var _defineProperty2 = _interopRequireDefault(_defineProperty);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = function() {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                      descriptor.writable = true;
                    (0, _defineProperty2.default)(target, descriptor.key, descriptor);
                  }
                }
                return function(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                  if (staticProps)
                    defineProperties(Constructor, staticProps);
                  return Constructor;
                };
              }();
            },
            /* 2 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _setPrototypeOf = __webpack_require__(104);
              var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
              var _create = __webpack_require__(102);
              var _create2 = _interopRequireDefault(_create);
              var _typeof2 = __webpack_require__(41);
              var _typeof3 = _interopRequireDefault(_typeof2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = function(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                  throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
                }
                subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
                  constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                });
                if (superClass)
                  _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
              };
            },
            /* 3 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _typeof2 = __webpack_require__(41);
              var _typeof3 = _interopRequireDefault(_typeof2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = function(self2, call) {
                if (!self2) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self2;
              };
            },
            /* 4 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _AbstractEvent = __webpack_require__(96);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _AbstractEvent2.default;
            },
            /* 5 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var store = __webpack_require__(34)("wks"), uid = __webpack_require__(24), Symbol2 = __webpack_require__(7).Symbol, USE_SYMBOL = typeof Symbol2 == "function";
              var $exports = module2.exports = function(name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
              };
              $exports.store = store;
            },
            /* 6 */
            /***/
            function(module2, exports2) {
              var core = module2.exports = { version: "2.4.0" };
              if (typeof __e == "number")
                __e = core;
            },
            /* 7 */
            /***/
            function(module2, exports2) {
              var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
              if (typeof __g == "number")
                __g = global;
            },
            /* 8 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(12), IE8_DOM_DEFINE = __webpack_require__(43), toPrimitive = __webpack_require__(36), dP = Object.defineProperty;
              exports2.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return dP(O, P, Attributes);
                  } catch (e) {
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported!");
                if ("value" in Attributes)
                  O[P] = Attributes.value;
                return O;
              };
            },
            /* 9 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = !__webpack_require__(22)(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            },
            /* 10 */
            /***/
            function(module2, exports2) {
              var hasOwnProperty = {}.hasOwnProperty;
              module2.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
              };
            },
            /* 11 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var IObject = __webpack_require__(121), defined = __webpack_require__(27);
              module2.exports = function(it) {
                return IObject(defined(it));
              };
            },
            /* 12 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(17);
              module2.exports = function(it) {
                if (!isObject(it))
                  throw TypeError(it + " is not an object!");
                return it;
              };
            },
            /* 13 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(7), core = __webpack_require__(6), ctx = __webpack_require__(26), hide = __webpack_require__(14), PROTOTYPE = "prototype";
              var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports3[PROTOTYPE], target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL)
                  source = name;
                for (key in source) {
                  own = !IS_FORCED && target && target[key] !== void 0;
                  if (own && key in exports3)
                    continue;
                  out = own ? target[key] : source[key];
                  exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(a, b, c) {
                      if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();
                          case 1:
                            return new C(a);
                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                      }
                      return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                  }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                  if (IS_PROTO) {
                    (exports3.virtual || (exports3.virtual = {}))[key] = out;
                    if (type & $export.R && expProto && !expProto[key])
                      hide(expProto, key, out);
                  }
                }
              };
              $export.F = 1;
              $export.G = 2;
              $export.S = 4;
              $export.P = 8;
              $export.B = 16;
              $export.W = 32;
              $export.U = 64;
              $export.R = 128;
              module2.exports = $export;
            },
            /* 14 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var dP = __webpack_require__(8), createDesc = __webpack_require__(19);
              module2.exports = __webpack_require__(9) ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
              } : function(object, key, value) {
                object[key] = value;
                return object;
              };
            },
            /* 15 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Sensor = __webpack_require__(73);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Sensor2.default;
            },
            /* 16 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.scroll = exports2.closest = void 0;
              var _closest = __webpack_require__(98);
              var _closest2 = _interopRequireDefault(_closest);
              var _scroll = __webpack_require__(99);
              var _scroll2 = _interopRequireDefault(_scroll);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.closest = _closest2.default;
              exports2.scroll = _scroll2.default;
            },
            /* 17 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
              };
            },
            /* 18 */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            },
            /* 19 */
            /***/
            function(module2, exports2) {
              module2.exports = function(bitmap, value) {
                return {
                  enumerable: !(bitmap & 1),
                  configurable: !(bitmap & 2),
                  writable: !(bitmap & 4),
                  value
                };
              };
            },
            /* 20 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Mirror = exports2.Accessibility = void 0;
              var _Draggable = __webpack_require__(59);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _Plugins = __webpack_require__(40);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.Accessibility = _Plugins.Accessibility;
              exports2.Mirror = _Plugins.Mirror;
              exports2.default = _Draggable2.default;
            },
            /* 21 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SensorEvent = __webpack_require__(74);
              Object.defineProperty(exports2, "SensorEvent", {
                enumerable: true,
                get: function get() {
                  return _SensorEvent.SensorEvent;
                }
              });
              Object.defineProperty(exports2, "DragStartSensorEvent", {
                enumerable: true,
                get: function get() {
                  return _SensorEvent.DragStartSensorEvent;
                }
              });
              Object.defineProperty(exports2, "DragMoveSensorEvent", {
                enumerable: true,
                get: function get() {
                  return _SensorEvent.DragMoveSensorEvent;
                }
              });
              Object.defineProperty(exports2, "DragStopSensorEvent", {
                enumerable: true,
                get: function get() {
                  return _SensorEvent.DragStopSensorEvent;
                }
              });
              Object.defineProperty(exports2, "DragPressureSensorEvent", {
                enumerable: true,
                get: function get() {
                  return _SensorEvent.DragPressureSensorEvent;
                }
              });
            },
            /* 22 */
            /***/
            function(module2, exports2) {
              module2.exports = function(exec) {
                try {
                  return !!exec();
                } catch (e) {
                  return true;
                }
              };
            },
            /* 23 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $keys = __webpack_require__(48), enumBugKeys = __webpack_require__(28);
              module2.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
              };
            },
            /* 24 */
            /***/
            function(module2, exports2) {
              var id = 0, px = Math.random();
              module2.exports = function(key) {
                return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
              };
            },
            /* 25 */
            /***/
            function(module2, exports2) {
              var toString = {}.toString;
              module2.exports = function(it) {
                return toString.call(it).slice(8, -1);
              };
            },
            /* 26 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var aFunction = __webpack_require__(114);
              module2.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === void 0)
                  return fn;
                switch (length) {
                  case 1:
                    return function(a) {
                      return fn.call(that, a);
                    };
                  case 2:
                    return function(a, b) {
                      return fn.call(that, a, b);
                    };
                  case 3:
                    return function(a, b, c) {
                      return fn.call(that, a, b, c);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            },
            /* 27 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (it == void 0)
                  throw TypeError("Can't call method on  " + it);
                return it;
              };
            },
            /* 28 */
            /***/
            function(module2, exports2) {
              module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
            },
            /* 29 */
            /***/
            function(module2, exports2) {
              module2.exports = true;
            },
            /* 30 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(12), dPs = __webpack_require__(130), enumBugKeys = __webpack_require__(28), IE_PROTO = __webpack_require__(33)("IE_PROTO"), Empty = function() {
              }, PROTOTYPE = "prototype";
              var createDict = function() {
                var iframe = __webpack_require__(42)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">", iframeDocument;
                iframe.style.display = "none";
                __webpack_require__(120).appendChild(iframe);
                iframe.src = "javascript:";
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--)
                  delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
              };
              module2.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                  Empty[PROTOTYPE] = anObject(O);
                  result = new Empty();
                  Empty[PROTOTYPE] = null;
                  result[IE_PROTO] = O;
                } else
                  result = createDict();
                return Properties === void 0 ? result : dPs(result, Properties);
              };
            },
            /* 31 */
            /***/
            function(module2, exports2) {
              exports2.f = {}.propertyIsEnumerable;
            },
            /* 32 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var def = __webpack_require__(8).f, has = __webpack_require__(10), TAG = __webpack_require__(5)("toStringTag");
              module2.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG))
                  def(it, TAG, { configurable: true, value: tag });
              };
            },
            /* 33 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(34)("keys"), uid = __webpack_require__(24);
              module2.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
              };
            },
            /* 34 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(7), SHARED = "__core-js_shared__", store = global[SHARED] || (global[SHARED] = {});
              module2.exports = function(key) {
                return store[key] || (store[key] = {});
              };
            },
            /* 35 */
            /***/
            function(module2, exports2) {
              var ceil = Math.ceil, floor = Math.floor;
              module2.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
              };
            },
            /* 36 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(17);
              module2.exports = function(it, S) {
                if (!isObject(it))
                  return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            /* 37 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(7), core = __webpack_require__(6), LIBRARY = __webpack_require__(29), wksExt = __webpack_require__(38), defineProperty = __webpack_require__(8).f;
              module2.exports = function(name) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name.charAt(0) != "_" && !(name in $Symbol))
                  defineProperty($Symbol, name, { value: wksExt.f(name) });
              };
            },
            /* 38 */
            /***/
            function(module2, exports2, __webpack_require__) {
              exports2.f = __webpack_require__(5);
            },
            /* 39 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _ForceTouchSensor = __webpack_require__(70);
              var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _ForceTouchSensor2.default;
            },
            /* 40 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Accessibility = exports2.Mirror = void 0;
              var _Mirror = __webpack_require__(67);
              var _Mirror2 = _interopRequireDefault(_Mirror);
              var _Accessibility = __webpack_require__(65);
              var _Accessibility2 = _interopRequireDefault(_Accessibility);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.Mirror = _Mirror2.default;
              exports2.Accessibility = _Accessibility2.default;
            },
            /* 41 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _iterator = __webpack_require__(106);
              var _iterator2 = _interopRequireDefault(_iterator);
              var _symbol = __webpack_require__(105);
              var _symbol2 = _interopRequireDefault(_symbol);
              var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
                return typeof obj;
              } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
              };
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof(obj);
              } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
              };
            },
            /* 42 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(17), document2 = __webpack_require__(7).document, is = isObject(document2) && isObject(document2.createElement);
              module2.exports = function(it) {
                return is ? document2.createElement(it) : {};
              };
            },
            /* 43 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = !__webpack_require__(9) && !__webpack_require__(22)(function() {
                return Object.defineProperty(__webpack_require__(42)("div"), "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            },
            /* 44 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var LIBRARY = __webpack_require__(29), $export = __webpack_require__(13), redefine = __webpack_require__(49), hide = __webpack_require__(14), has = __webpack_require__(10), Iterators = __webpack_require__(18), $iterCreate = __webpack_require__(125), setToStringTag = __webpack_require__(32), getPrototypeOf = __webpack_require__(132), ITERATOR = __webpack_require__(5)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
              var returnThis = function() {
                return this;
              };
              module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                  if (!BUGGY && kind in proto)
                    return proto[kind];
                  switch (kind) {
                    case KEYS:
                      return function keys() {
                        return new Constructor(this, kind);
                      };
                    case VALUES:
                      return function values() {
                        return new Constructor(this, kind);
                      };
                  }
                  return function entries() {
                    return new Constructor(this, kind);
                  };
                };
                var TAG = NAME + " Iterator", DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = false, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0, $anyNative = NAME == "Array" ? proto.entries || $native : $native, methods, key, IteratorPrototype;
                if ($anyNative) {
                  IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                  if (IteratorPrototype !== Object.prototype) {
                    setToStringTag(IteratorPrototype, TAG, true);
                    if (!LIBRARY && !has(IteratorPrototype, ITERATOR))
                      hide(IteratorPrototype, ITERATOR, returnThis);
                  }
                }
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                  VALUES_BUG = true;
                  $default = function values() {
                    return $native.call(this);
                  };
                }
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                  hide(proto, ITERATOR, $default);
                }
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                  methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                  };
                  if (FORCED)
                    for (key in methods) {
                      if (!(key in proto))
                        redefine(proto, key, methods[key]);
                    }
                  else
                    $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
              };
            },
            /* 45 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var pIE = __webpack_require__(31), createDesc = __webpack_require__(19), toIObject = __webpack_require__(11), toPrimitive = __webpack_require__(36), has = __webpack_require__(10), IE8_DOM_DEFINE = __webpack_require__(43), gOPD = Object.getOwnPropertyDescriptor;
              exports2.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return gOPD(O, P);
                  } catch (e) {
                  }
                if (has(O, P))
                  return createDesc(!pIE.f.call(O, P), O[P]);
              };
            },
            /* 46 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $keys = __webpack_require__(48), hiddenKeys = __webpack_require__(28).concat("length", "prototype");
              exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return $keys(O, hiddenKeys);
              };
            },
            /* 47 */
            /***/
            function(module2, exports2) {
              exports2.f = Object.getOwnPropertySymbols;
            },
            /* 48 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(10), toIObject = __webpack_require__(11), arrayIndexOf = __webpack_require__(116)(false), IE_PROTO = __webpack_require__(33)("IE_PROTO");
              module2.exports = function(object, names) {
                var O = toIObject(object), i = 0, result = [], key;
                for (key in O)
                  if (key != IE_PROTO)
                    has(O, key) && result.push(key);
                while (names.length > i)
                  if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                  }
                return result;
              };
            },
            /* 49 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(14);
            },
            /* 50 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(35), min = Math.min;
              module2.exports = function(it) {
                return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
              };
            },
            /* 51 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var defined = __webpack_require__(27);
              module2.exports = function(it) {
                return Object(defined(it));
              };
            },
            /* 52 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var $at = __webpack_require__(134)(true);
              __webpack_require__(44)(String, "String", function(iterated) {
                this._t = String(iterated);
                this._i = 0;
              }, function() {
                var O = this._t, index = this._i, point;
                if (index >= O.length)
                  return { value: void 0, done: true };
                point = $at(O, index);
                this._i += point.length;
                return { value: point, done: false };
              });
            },
            /* 53 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Droppable = __webpack_require__(78);
              var _Droppable2 = _interopRequireDefault(_Droppable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Droppable2.default;
            },
            /* 54 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Snappable = exports2.Collidable = void 0;
              var _Collidable = __webpack_require__(84);
              var _Collidable2 = _interopRequireDefault(_Collidable);
              var _Snappable = __webpack_require__(88);
              var _Snappable2 = _interopRequireDefault(_Snappable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.Collidable = _Collidable2.default;
              exports2.Snappable = _Snappable2.default;
            },
            /* 55 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Sortable = __webpack_require__(89);
              var _Sortable2 = _interopRequireDefault(_Sortable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Sortable2.default;
            },
            /* 56 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Swappable = __webpack_require__(92);
              var _Swappable2 = _interopRequireDefault(_Swappable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Swappable2.default;
            },
            /* 57 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DragStopEvent = exports2.DragPressureEvent = exports2.DragOverEvent = exports2.DragOverContainerEvent = exports2.DragOutEvent = exports2.DragOutContainerEvent = exports2.DragMoveEvent = exports2.DragStartEvent = exports2.DragEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var DragEvent = exports2.DragEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(DragEvent2, _AbstractEvent);
                function DragEvent2() {
                  (0, _classCallCheck3.default)(this, DragEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragEvent2.__proto__ || Object.getPrototypeOf(DragEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragEvent2, [{
                  key: "hasMirror",
                  value: function hasMirror() {
                    return Boolean(this.mirror);
                  }
                }, {
                  key: "source",
                  get: function get() {
                    return this.data.source;
                  }
                }, {
                  key: "originalSource",
                  get: function get() {
                    return this.data.originalSource;
                  }
                }, {
                  key: "mirror",
                  get: function get() {
                    return this.data.mirror;
                  }
                }, {
                  key: "sourceContainer",
                  get: function get() {
                    return this.data.sourceContainer;
                  }
                }, {
                  key: "sensorEvent",
                  get: function get() {
                    return this.data.sensorEvent;
                  }
                }, {
                  key: "originalEvent",
                  get: function get() {
                    if (this.sensorEvent) {
                      return this.sensorEvent.originalEvent;
                    }
                    return null;
                  }
                }]);
                return DragEvent2;
              }(_AbstractEvent3.default);
              var DragStartEvent = exports2.DragStartEvent = function(_DragEvent) {
                (0, _inherits3.default)(DragStartEvent2, _DragEvent);
                function DragStartEvent2() {
                  (0, _classCallCheck3.default)(this, DragStartEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragStartEvent2.__proto__ || Object.getPrototypeOf(DragStartEvent2)).apply(this, arguments));
                }
                return DragStartEvent2;
              }(DragEvent);
              DragStartEvent.type = "drag:start";
              var DragMoveEvent = exports2.DragMoveEvent = function(_DragEvent2) {
                (0, _inherits3.default)(DragMoveEvent2, _DragEvent2);
                function DragMoveEvent2() {
                  (0, _classCallCheck3.default)(this, DragMoveEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragMoveEvent2.__proto__ || Object.getPrototypeOf(DragMoveEvent2)).apply(this, arguments));
                }
                return DragMoveEvent2;
              }(DragEvent);
              DragMoveEvent.type = "drag:move";
              var DragOutContainerEvent = exports2.DragOutContainerEvent = function(_DragEvent3) {
                (0, _inherits3.default)(DragOutContainerEvent2, _DragEvent3);
                function DragOutContainerEvent2() {
                  (0, _classCallCheck3.default)(this, DragOutContainerEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragOutContainerEvent2.__proto__ || Object.getPrototypeOf(DragOutContainerEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragOutContainerEvent2, [{
                  key: "overContainer",
                  get: function get() {
                    return this.data.overContainer;
                  }
                }]);
                return DragOutContainerEvent2;
              }(DragEvent);
              DragOutContainerEvent.type = "drag:out:container";
              var DragOutEvent = exports2.DragOutEvent = function(_DragEvent4) {
                (0, _inherits3.default)(DragOutEvent2, _DragEvent4);
                function DragOutEvent2() {
                  (0, _classCallCheck3.default)(this, DragOutEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragOutEvent2.__proto__ || Object.getPrototypeOf(DragOutEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragOutEvent2, [{
                  key: "overContainer",
                  get: function get() {
                    return this.data.overContainer;
                  }
                }, {
                  key: "over",
                  get: function get() {
                    return this.data.over;
                  }
                }]);
                return DragOutEvent2;
              }(DragEvent);
              DragOutEvent.type = "drag:out";
              var DragOverContainerEvent = exports2.DragOverContainerEvent = function(_DragEvent5) {
                (0, _inherits3.default)(DragOverContainerEvent2, _DragEvent5);
                function DragOverContainerEvent2() {
                  (0, _classCallCheck3.default)(this, DragOverContainerEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragOverContainerEvent2.__proto__ || Object.getPrototypeOf(DragOverContainerEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragOverContainerEvent2, [{
                  key: "overContainer",
                  get: function get() {
                    return this.data.overContainer;
                  }
                }]);
                return DragOverContainerEvent2;
              }(DragEvent);
              DragOverContainerEvent.type = "drag:over:container";
              var DragOverEvent = exports2.DragOverEvent = function(_DragEvent6) {
                (0, _inherits3.default)(DragOverEvent2, _DragEvent6);
                function DragOverEvent2() {
                  (0, _classCallCheck3.default)(this, DragOverEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragOverEvent2.__proto__ || Object.getPrototypeOf(DragOverEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragOverEvent2, [{
                  key: "overContainer",
                  get: function get() {
                    return this.data.overContainer;
                  }
                }, {
                  key: "over",
                  get: function get() {
                    return this.data.over;
                  }
                }]);
                return DragOverEvent2;
              }(DragEvent);
              DragOverEvent.type = "drag:over";
              var DragPressureEvent = exports2.DragPressureEvent = function(_DragEvent7) {
                (0, _inherits3.default)(DragPressureEvent2, _DragEvent7);
                function DragPressureEvent2() {
                  (0, _classCallCheck3.default)(this, DragPressureEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragPressureEvent2.__proto__ || Object.getPrototypeOf(DragPressureEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DragPressureEvent2, [{
                  key: "pressure",
                  get: function get() {
                    return this.data.pressure;
                  }
                }]);
                return DragPressureEvent2;
              }(DragEvent);
              DragPressureEvent.type = "drag:pressure";
              var DragStopEvent = exports2.DragStopEvent = function(_DragEvent8) {
                (0, _inherits3.default)(DragStopEvent2, _DragEvent8);
                function DragStopEvent2() {
                  (0, _classCallCheck3.default)(this, DragStopEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragStopEvent2.__proto__ || Object.getPrototypeOf(DragStopEvent2)).apply(this, arguments));
                }
                return DragStopEvent2;
              }(DragEvent);
              DragStopEvent.type = "drag:stop";
            },
            /* 58 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DragEvent = __webpack_require__(57);
              Object.defineProperty(exports2, "DragStartEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragStartEvent;
                }
              });
              Object.defineProperty(exports2, "DragMoveEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragMoveEvent;
                }
              });
              Object.defineProperty(exports2, "DragOutContainerEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragOutContainerEvent;
                }
              });
              Object.defineProperty(exports2, "DragOutEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragOutEvent;
                }
              });
              Object.defineProperty(exports2, "DragOverContainerEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragOverContainerEvent;
                }
              });
              Object.defineProperty(exports2, "DragOverEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragOverEvent;
                }
              });
              Object.defineProperty(exports2, "DragStopEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragStopEvent;
                }
              });
              Object.defineProperty(exports2, "DragPressureEvent", {
                enumerable: true,
                get: function get() {
                  return _DragEvent.DragPressureEvent;
                }
              });
            },
            /* 59 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _toConsumableArray2 = __webpack_require__(107);
              var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _utils = __webpack_require__(16);
              var _Plugins = __webpack_require__(40);
              var _Sensors = __webpack_require__(77);
              var _DraggableEvent = __webpack_require__(61);
              var _DragEvent = __webpack_require__(58);
              var _MirrorEvent = __webpack_require__(63);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var defaults = {
                draggable: ".draggable-source",
                handle: null,
                delay: 0,
                placedTimeout: 800,
                native: false,
                plugins: [],
                classes: {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  mirror: "draggable-mirror"
                }
              };
              var Draggable = function() {
                function Draggable2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, Draggable2);
                  this.containers = containers;
                  this.options = Object.assign({}, defaults, options);
                  this.activeSensors = [];
                  this.activePlugins = [];
                  this.callbacks = {};
                  this.dragging = false;
                  this.dragStart = this.dragStart.bind(this);
                  this.dragMove = this.dragMove.bind(this);
                  this.dragStop = this.dragStop.bind(this);
                  this.dragPressure = this.dragPressure.bind(this);
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = void 0;
                  try {
                    for (var _iterator = this.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var container = _step.value;
                      container.addEventListener("drag:start", this.dragStart, true);
                      container.addEventListener("drag:move", this.dragMove, true);
                      container.addEventListener("drag:stop", this.dragStop, true);
                      container.addEventListener("drag:pressure", this.dragPressure, true);
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                  var _arr = [_Plugins.Mirror, _Plugins.Accessibility].concat((0, _toConsumableArray3.default)(this.options.plugins));
                  for (var _i = 0; _i < _arr.length; _i++) {
                    var Plugin = _arr[_i];
                    var plugin = new Plugin(this);
                    plugin.attach();
                    this.activePlugins.push(plugin);
                  }
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = void 0;
                  try {
                    for (var _iterator2 = this.sensors()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var Sensor = _step2.value;
                      var sensor = new Sensor(this.containers, options);
                      sensor.attach();
                      this.activeSensors.push(sensor);
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                  var draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
                    draggable: this
                  });
                  this.triggerEvent(draggableInitializedEvent);
                }
                (0, _createClass3.default)(Draggable2, [{
                  key: "destroy",
                  value: function destroy() {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = void 0;
                    try {
                      for (var _iterator3 = this.containers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var container = _step3.value;
                        container.removeEventListener("drag:start", this.dragStart, true);
                        container.removeEventListener("drag:move", this.dragMove, true);
                        container.removeEventListener("drag:stop", this.dragStop, true);
                        container.removeEventListener("drag:pressure", this.dragPressure, true);
                      }
                    } catch (err) {
                      _didIteratorError3 = true;
                      _iteratorError3 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                        }
                      } finally {
                        if (_didIteratorError3) {
                          throw _iteratorError3;
                        }
                      }
                    }
                    var draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
                      draggable: this
                    });
                    this.triggerEvent(draggableDestroyEvent);
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = void 0;
                    try {
                      for (var _iterator4 = this.activePlugins[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var activePlugin = _step4.value;
                        activePlugin.detach();
                      }
                    } catch (err) {
                      _didIteratorError4 = true;
                      _iteratorError4 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                        }
                      } finally {
                        if (_didIteratorError4) {
                          throw _iteratorError4;
                        }
                      }
                    }
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = void 0;
                    try {
                      for (var _iterator5 = this.activeSensors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var activeSensor = _step5.value;
                        activeSensor.detach();
                      }
                    } catch (err) {
                      _didIteratorError5 = true;
                      _iteratorError5 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                        }
                      } finally {
                        if (_didIteratorError5) {
                          throw _iteratorError5;
                        }
                      }
                    }
                  }
                  /**
                   * Adds listener for draggable events
                   * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
                   */
                }, {
                  key: "on",
                  value: function on(type, callback) {
                    if (!this.callbacks[type]) {
                      this.callbacks[type] = [];
                    }
                    this.callbacks[type].push(callback);
                    return this;
                  }
                  /**
                   * Removes listener from draggable
                   * @example draggable.off('drag:start', handlerFunction);
                   */
                }, {
                  key: "off",
                  value: function off(type, callback) {
                    if (!this.callbacks[type]) {
                      return null;
                    }
                    var copy = this.callbacks[type].slice(0);
                    for (var i = 0; i < copy.length; i++) {
                      if (callback === copy[i]) {
                        this.callbacks[type].splice(i, 1);
                      }
                    }
                    return this;
                  }
                }, {
                  key: "trigger",
                  value: function trigger(type) {
                    if (!this.callbacks[type]) {
                      return;
                    }
                    var callbacks = Array.from(this.callbacks[type]);
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      args[_key - 1] = arguments[_key];
                    }
                    for (var i = callbacks.length - 1; i >= 0; i--) {
                      var callback = callbacks[i];
                      callback.apply(void 0, args);
                    }
                  }
                  /**
                   * Active sensors
                   * @return {Array} sensors
                   */
                }, {
                  key: "sensors",
                  value: function sensors() {
                    return [_Sensors.TouchSensor, this.options.native ? _Sensors.DragSensor : _Sensors.MouseSensor];
                  }
                }, {
                  key: "dragStart",
                  value: function dragStart(event) {
                    var sensorEvent = getSensorEvent(event);
                    var target = sensorEvent.target, container = sensorEvent.container, originalEvent = sensorEvent.originalEvent;
                    if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
                      sensorEvent.cancel();
                      return;
                    }
                    this.originalSource = (0, _utils.closest)(target, this.options.draggable);
                    this.sourceContainer = container;
                    if (!this.originalSource) {
                      sensorEvent.cancel();
                      return;
                    }
                    this.dragging = true;
                    this.source = this.originalSource.cloneNode(true);
                    if (!isDragEvent(originalEvent)) {
                      var appendableContainer = this.getAppendableContainer({ source: this.originalSource });
                      this.mirror = this.source.cloneNode(true);
                      var mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        mirror: this.mirror,
                        sourceContainer: container,
                        sensorEvent
                      });
                      var mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        mirror: this.mirror,
                        sourceContainer: container,
                        sensorEvent
                      });
                      this.triggerEvent(mirrorCreatedEvent);
                      appendableContainer.appendChild(this.mirror);
                      this.triggerEvent(mirrorAttachedEvent);
                    }
                    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
                    this.originalSource.style.display = "none";
                    this.source.classList.add(this.getClassNameFor("source:dragging"));
                    this.sourceContainer.classList.add(this.getClassNameFor("container:dragging"));
                    document.body.classList.add(this.getClassNameFor("body:dragging"));
                    applyUserSelect(document.body, "none");
                    if (this.mirror) {
                      var mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent
                      });
                      this.triggerEvent(mirrorMoveEvent);
                    }
                    this.scrollableParent = (0, _utils.closest)(container, function(element) {
                      return element.offsetHeight < element.scrollHeight;
                    });
                    var dragEvent = new _DragEvent.DragStartEvent({
                      source: this.source,
                      mirror: this.mirror,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent
                    });
                    this.triggerEvent(dragEvent);
                    if (!dragEvent.canceled()) {
                      return;
                    }
                    if (this.mirror) {
                      this.mirror.parentNode.removeChild(this.mirror);
                    }
                    this.source.classList.remove(this.getClassNameFor("source:dragging"));
                    this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging"));
                    document.body.classList.remove(this.getClassNameFor("body:dragging"));
                  }
                }, {
                  key: "triggerEvent",
                  value: function triggerEvent(event) {
                    return this.trigger(event.type, event);
                  }
                }, {
                  key: "dragMove",
                  value: function dragMove(event) {
                    var sensorEvent = getSensorEvent(event);
                    var container = sensorEvent.container;
                    var target = sensorEvent.target;
                    var dragMoveEvent = new _DragEvent.DragMoveEvent({
                      source: this.source,
                      mirror: this.mirror,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent
                    });
                    this.triggerEvent(dragMoveEvent);
                    if (dragMoveEvent.canceled()) {
                      sensorEvent.cancel();
                    }
                    if (this.mirror && !dragMoveEvent.canceled()) {
                      var mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent
                      });
                      this.triggerEvent(mirrorMoveEvent);
                    }
                    target = (0, _utils.closest)(target, this.options.draggable);
                    var overContainer = sensorEvent.overContainer || this.closestContainer(sensorEvent.target);
                    var isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
                    var isLeavingDraggable = this.currentOver && target !== this.currentOver;
                    var isOverContainer = overContainer && this.currentOverContainer !== overContainer;
                    var isOverDraggable = target && this.currentOver !== target;
                    if (isLeavingDraggable) {
                      var dragOutEvent = new _DragEvent.DragOutEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent,
                        over: this.currentOver
                      });
                      this.triggerEvent(dragOutEvent);
                      this.currentOver.classList.remove(this.getClassNameFor("draggable:over"));
                      this.currentOver = null;
                    }
                    if (isLeavingContainer) {
                      var dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent,
                        overContainer: this.overContainer
                      });
                      this.triggerEvent(dragOutContainerEvent);
                      this.currentOverContainer.classList.remove(this.getClassNameFor("container:over"));
                      this.currentOverContainer = null;
                    }
                    if (isOverContainer) {
                      overContainer.classList.add(this.getClassNameFor("container:over"));
                      var dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent,
                        overContainer
                      });
                      this.triggerEvent(dragOverContainerEvent);
                      this.currentOverContainer = overContainer;
                    }
                    if (isOverDraggable) {
                      target.classList.add(this.getClassNameFor("draggable:over"));
                      var dragOverEvent = new _DragEvent.DragOverEvent({
                        source: this.source,
                        mirror: this.mirror,
                        originalSource: this.originalSource,
                        sourceContainer: container,
                        sensorEvent,
                        overContainer,
                        over: target
                      });
                      this.triggerEvent(dragOverEvent);
                      this.currentOver = target;
                    }
                  }
                }, {
                  key: "dragStop",
                  value: function dragStop(event) {
                    var _this = this;
                    this.dragging = false;
                    var sensorEvent = getSensorEvent(event);
                    var dragStopEvent = new _DragEvent.DragStopEvent({
                      source: this.source,
                      mirror: this.mirror,
                      originalSource: this.originalSource,
                      sensorEvent: event.sensorEvent,
                      sourceContainer: this.sourceContainer
                    });
                    this.triggerEvent(dragStopEvent);
                    this.source.parentNode.insertBefore(this.originalSource, this.source);
                    this.source.parentNode.removeChild(this.source);
                    this.originalSource.style.display = "";
                    this.source.classList.remove(this.getClassNameFor("source:dragging"));
                    this.originalSource.classList.add(this.getClassNameFor("source:placed"));
                    this.sourceContainer.classList.add(this.getClassNameFor("container:placed"));
                    this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging"));
                    document.body.classList.remove(this.getClassNameFor("body:dragging"));
                    applyUserSelect(document.body, "");
                    if (this.currentOver) {
                      this.currentOver.classList.remove(this.getClassNameFor("draggable:over"));
                    }
                    if (this.currentOverContainer) {
                      this.currentOverContainer.classList.remove(this.getClassNameFor("container:over"));
                    }
                    if (this.mirror) {
                      var mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
                        source: this.source,
                        mirror: this.mirror,
                        sourceContainer: sensorEvent.container,
                        sensorEvent
                      });
                      this.triggerEvent(mirrorDestroyEvent);
                      if (!mirrorDestroyEvent.canceled()) {
                        this.mirror.parentNode.removeChild(this.mirror);
                      }
                    }
                    var lastSource = this.originalSource;
                    var lastSourceContainer = this.sourceContainer;
                    setTimeout(function() {
                      if (lastSource) {
                        lastSource.classList.remove(_this.getClassNameFor("source:placed"));
                      }
                      if (lastSourceContainer) {
                        lastSourceContainer.classList.remove(_this.getClassNameFor("container:placed"));
                      }
                    }, this.options.placedTimeout);
                    this.source = null;
                    this.mirror = null;
                    this.originalSource = null;
                    this.currentOverContainer = null;
                    this.currentOver = null;
                    this.sourceContainer = null;
                  }
                }, {
                  key: "dragPressure",
                  value: function dragPressure(event) {
                    var sensorEvent = getSensorEvent(event);
                    var source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
                    var dragPressureEvent = new _DragEvent.DragPressureEvent({
                      sensorEvent,
                      source,
                      pressure: sensorEvent.pressure
                    });
                    this.triggerEvent(dragPressureEvent);
                  }
                }, {
                  key: "getAppendableContainer",
                  value: function getAppendableContainer(_ref) {
                    var source = _ref.source;
                    var appendTo = this.options.appendTo;
                    if (typeof appendTo === "string") {
                      return document.querySelector(appendTo);
                    } else if (appendTo instanceof HTMLElement) {
                      return appendTo;
                    } else if (typeof appendTo === "function") {
                      return appendTo(source);
                    } else {
                      return document.body;
                    }
                  }
                }, {
                  key: "getClassNameFor",
                  value: function getClassNameFor(name) {
                    return this.options.classes[name] || defaults.classes[name];
                  }
                }, {
                  key: "closestContainer",
                  value: function closestContainer(target) {
                    var _this2 = this;
                    return (0, _utils.closest)(target, function(element) {
                      var _iteratorNormalCompletion6 = true;
                      var _didIteratorError6 = false;
                      var _iteratorError6 = void 0;
                      try {
                        for (var _iterator6 = _this2.containers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                          var containerEl = _step6.value;
                          if (element === containerEl) {
                            return true;
                          }
                        }
                      } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                          }
                        } finally {
                          if (_didIteratorError6) {
                            throw _iteratorError6;
                          }
                        }
                      }
                      return false;
                    });
                  }
                }]);
                return Draggable2;
              }();
              exports2.default = Draggable;
              function getSensorEvent(event) {
                return event.detail;
              }
              function isDragEvent(event) {
                return /^drag/.test(event.type);
              }
              function applyUserSelect(element, value) {
                element.style.webkitUserSelect = value;
                element.style.mozUserSelect = value;
                element.style.msUserSelect = value;
                element.style.oUserSelect = value;
                element.style.userSelect = value;
              }
            },
            /* 60 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DraggableDestroyEvent = exports2.DraggableInitializedEvent = exports2.DraggableEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var DraggableEvent = exports2.DraggableEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(DraggableEvent2, _AbstractEvent);
                function DraggableEvent2() {
                  (0, _classCallCheck3.default)(this, DraggableEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DraggableEvent2.__proto__ || Object.getPrototypeOf(DraggableEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DraggableEvent2, [{
                  key: "draggable",
                  get: function get() {
                    return this.data.draggable;
                  }
                }]);
                return DraggableEvent2;
              }(_AbstractEvent3.default);
              DraggableEvent.type = "draggable";
              var DraggableInitializedEvent = exports2.DraggableInitializedEvent = function(_DraggableEvent) {
                (0, _inherits3.default)(DraggableInitializedEvent2, _DraggableEvent);
                function DraggableInitializedEvent2() {
                  (0, _classCallCheck3.default)(this, DraggableInitializedEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DraggableInitializedEvent2.__proto__ || Object.getPrototypeOf(DraggableInitializedEvent2)).apply(this, arguments));
                }
                return DraggableInitializedEvent2;
              }(DraggableEvent);
              DraggableInitializedEvent.type = "draggable:initialize";
              var DraggableDestroyEvent = exports2.DraggableDestroyEvent = function(_DraggableEvent2) {
                (0, _inherits3.default)(DraggableDestroyEvent2, _DraggableEvent2);
                function DraggableDestroyEvent2() {
                  (0, _classCallCheck3.default)(this, DraggableDestroyEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DraggableDestroyEvent2.__proto__ || Object.getPrototypeOf(DraggableDestroyEvent2)).apply(this, arguments));
                }
                return DraggableDestroyEvent2;
              }(DraggableEvent);
              DraggableDestroyEvent.type = "draggable:destroy";
            },
            /* 61 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DraggableEvent = __webpack_require__(60);
              Object.defineProperty(exports2, "DraggableInitializedEvent", {
                enumerable: true,
                get: function get() {
                  return _DraggableEvent.DraggableInitializedEvent;
                }
              });
              Object.defineProperty(exports2, "DraggableDestroyEvent", {
                enumerable: true,
                get: function get() {
                  return _DraggableEvent.DraggableDestroyEvent;
                }
              });
            },
            /* 62 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.MirrorDestroyEvent = exports2.MirrorMoveEvent = exports2.MirrorAttachedEvent = exports2.MirrorCreatedEvent = exports2.MirrorEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var MirrorEvent = exports2.MirrorEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(MirrorEvent2, _AbstractEvent);
                function MirrorEvent2() {
                  (0, _classCallCheck3.default)(this, MirrorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (MirrorEvent2.__proto__ || Object.getPrototypeOf(MirrorEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(MirrorEvent2, [{
                  key: "source",
                  get: function get() {
                    return this.data.source;
                  }
                }, {
                  key: "originalSource",
                  get: function get() {
                    return this.data.originalSource;
                  }
                }, {
                  key: "mirror",
                  get: function get() {
                    return this.data.mirror;
                  }
                }, {
                  key: "sourceContainer",
                  get: function get() {
                    return this.data.sourceContainer;
                  }
                }, {
                  key: "sensorEvent",
                  get: function get() {
                    return this.data.sensorEvent;
                  }
                }, {
                  key: "originalEvent",
                  get: function get() {
                    if (this.sensorEvent) {
                      return this.sensorEvent.originalEvent;
                    }
                    return null;
                  }
                }]);
                return MirrorEvent2;
              }(_AbstractEvent3.default);
              var MirrorCreatedEvent = exports2.MirrorCreatedEvent = function(_MirrorEvent) {
                (0, _inherits3.default)(MirrorCreatedEvent2, _MirrorEvent);
                function MirrorCreatedEvent2() {
                  (0, _classCallCheck3.default)(this, MirrorCreatedEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (MirrorCreatedEvent2.__proto__ || Object.getPrototypeOf(MirrorCreatedEvent2)).apply(this, arguments));
                }
                return MirrorCreatedEvent2;
              }(MirrorEvent);
              MirrorCreatedEvent.type = "mirror:created";
              var MirrorAttachedEvent = exports2.MirrorAttachedEvent = function(_MirrorEvent2) {
                (0, _inherits3.default)(MirrorAttachedEvent2, _MirrorEvent2);
                function MirrorAttachedEvent2() {
                  (0, _classCallCheck3.default)(this, MirrorAttachedEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (MirrorAttachedEvent2.__proto__ || Object.getPrototypeOf(MirrorAttachedEvent2)).apply(this, arguments));
                }
                return MirrorAttachedEvent2;
              }(MirrorEvent);
              MirrorAttachedEvent.type = "mirror:attached";
              var MirrorMoveEvent = exports2.MirrorMoveEvent = function(_MirrorEvent3) {
                (0, _inherits3.default)(MirrorMoveEvent2, _MirrorEvent3);
                function MirrorMoveEvent2() {
                  (0, _classCallCheck3.default)(this, MirrorMoveEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (MirrorMoveEvent2.__proto__ || Object.getPrototypeOf(MirrorMoveEvent2)).apply(this, arguments));
                }
                return MirrorMoveEvent2;
              }(MirrorEvent);
              MirrorMoveEvent.type = "mirror:move";
              var MirrorDestroyEvent = exports2.MirrorDestroyEvent = function(_MirrorEvent4) {
                (0, _inherits3.default)(MirrorDestroyEvent2, _MirrorEvent4);
                function MirrorDestroyEvent2() {
                  (0, _classCallCheck3.default)(this, MirrorDestroyEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (MirrorDestroyEvent2.__proto__ || Object.getPrototypeOf(MirrorDestroyEvent2)).apply(this, arguments));
                }
                return MirrorDestroyEvent2;
              }(MirrorEvent);
              MirrorDestroyEvent.type = "mirror:destroy";
            },
            /* 63 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _MirrorEvent = __webpack_require__(62);
              Object.defineProperty(exports2, "MirrorCreatedEvent", {
                enumerable: true,
                get: function get() {
                  return _MirrorEvent.MirrorCreatedEvent;
                }
              });
              Object.defineProperty(exports2, "MirrorAttachedEvent", {
                enumerable: true,
                get: function get() {
                  return _MirrorEvent.MirrorAttachedEvent;
                }
              });
              Object.defineProperty(exports2, "MirrorMoveEvent", {
                enumerable: true,
                get: function get() {
                  return _MirrorEvent.MirrorMoveEvent;
                }
              });
              Object.defineProperty(exports2, "MirrorDestroyEvent", {
                enumerable: true,
                get: function get() {
                  return _MirrorEvent.MirrorDestroyEvent;
                }
              });
            },
            /* 64 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var ARIA_GRABBED = "aria-grabbed";
              var ARIA_DROPEFFECT = "aria-dropeffect";
              var TABINDEX = "tabindex";
              var Accessibility = function() {
                function Accessibility2(draggable) {
                  (0, _classCallCheck3.default)(this, Accessibility2);
                  this.draggable = draggable;
                  this._onInit = this._onInit.bind(this);
                  this._onDestroy = this._onDestroy.bind(this);
                }
                (0, _createClass3.default)(Accessibility2, [{
                  key: "attach",
                  value: function attach() {
                    this.draggable.on("init", this._onInit).on("destroy", this._onDestroy).on("drag:start", _onDragStart).on("drag:stop", _onDragStop);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    this.draggable.off("init", this._onInit).off("destroy", this._onDestroy).off("drag:start", _onDragStart).off("drag:stop", _onDragStop);
                  }
                }, {
                  key: "_onInit",
                  value: function _onInit(_ref) {
                    var containers = _ref.containers;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var container = _step.value;
                        container.setAttribute(ARIA_DROPEFFECT, this.draggable.options.type);
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = void 0;
                        try {
                          for (var _iterator2 = container.querySelectorAll(this.draggable.options.draggable)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var element = _step2.value;
                            element.setAttribute(TABINDEX, 0);
                            element.setAttribute(ARIA_GRABBED, false);
                          }
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                              _iterator2.return();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                  }
                }, {
                  key: "_onDestroy",
                  value: function _onDestroy(_ref2) {
                    var containers = _ref2.containers;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = void 0;
                    try {
                      for (var _iterator3 = containers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var container = _step3.value;
                        container.removeAttribute(ARIA_DROPEFFECT);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = void 0;
                        try {
                          for (var _iterator4 = container.querySelectorAll(this.draggable.options.draggable)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var element = _step4.value;
                            element.removeAttribute(TABINDEX, 0);
                            element.removeAttribute(ARIA_GRABBED, false);
                          }
                        } catch (err) {
                          _didIteratorError4 = true;
                          _iteratorError4 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                              _iterator4.return();
                            }
                          } finally {
                            if (_didIteratorError4) {
                              throw _iteratorError4;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError3 = true;
                      _iteratorError3 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                        }
                      } finally {
                        if (_didIteratorError3) {
                          throw _iteratorError3;
                        }
                      }
                    }
                  }
                }]);
                return Accessibility2;
              }();
              exports2.default = Accessibility;
              function _onDragStart(_ref3) {
                var source = _ref3.source;
                source.setAttribute(ARIA_GRABBED, true);
              }
              function _onDragStop(_ref4) {
                var source = _ref4.source;
                source.setAttribute(ARIA_GRABBED, false);
              }
            },
            /* 65 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Accessibility = __webpack_require__(64);
              var _Accessibility2 = _interopRequireDefault(_Accessibility);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Accessibility2.default;
            },
            /* 66 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Mirror = function() {
                function Mirror2(draggable) {
                  (0, _classCallCheck3.default)(this, Mirror2);
                  this.draggable = draggable;
                  this._onMirrorCreated = this._onMirrorCreated.bind(this);
                  this._onMirrorMove = this._onMirrorMove.bind(this);
                }
                (0, _createClass3.default)(Mirror2, [{
                  key: "attach",
                  value: function attach() {
                    this.draggable.on("mirror:created", this._onMirrorCreated).on("mirror:created", onMirrorCreated).on("mirror:move", this._onMirrorMove);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    this.draggable.off("mirror:created", this._onMirrorCreated).off("mirror:created", onMirrorCreated).off("mirror:move", this._onMirrorMove);
                  }
                }, {
                  key: "_onMirrorCreated",
                  value: function _onMirrorCreated(_ref) {
                    var _this = this;
                    var mirror = _ref.mirror, source = _ref.source, sensorEvent = _ref.sensorEvent;
                    var mirrorClass = this.draggable.getClassNameFor("mirror");
                    var setState = function setState2(data) {
                      _this.mirrorOffset = data.mirrorOffset;
                      return data;
                    };
                    Promise.resolve({ mirror, source, sensorEvent, mirrorClass }).then(computeMirrorDimensions).then(calculateMirrorOffset).then(addMirrorClasses).then(positionMirror()).then(removeMirrorID).then(setState).catch();
                  }
                }, {
                  key: "_onMirrorMove",
                  value: function _onMirrorMove(_ref2) {
                    var mirror = _ref2.mirror, sensorEvent = _ref2.sensorEvent;
                    Promise.resolve({ mirror, sensorEvent, mirrorOffset: this.mirrorOffset }).then(positionMirror({ raf: true })).catch();
                  }
                }]);
                return Mirror2;
              }();
              exports2.default = Mirror;
              function onMirrorCreated(_ref3) {
                var mirror = _ref3.mirror, source = _ref3.source;
                Promise.resolve({ mirror, source }).then(resetMirror).catch();
              }
              function resetMirror(data) {
                return withPromise(function(resolve) {
                  var mirror = data.mirror, source = data.source;
                  mirror.style.position = "fixed";
                  mirror.style.pointerEvents = "none";
                  mirror.style.top = 0;
                  mirror.style.left = 0;
                  mirror.style.width = source.offsetWidth + "px";
                  mirror.style.height = source.offsetHeight + "px";
                  resolve(data);
                });
              }
              function computeMirrorDimensions(data) {
                return withPromise(function(resolve) {
                  var source = data.source;
                  var sourceRect = source.getBoundingClientRect();
                  resolve(Object.assign({}, data, { sourceRect }));
                });
              }
              function calculateMirrorOffset(data) {
                return withPromise(function(resolve) {
                  var sensorEvent = data.sensorEvent, sourceRect = data.sourceRect;
                  var mirrorOffset = { top: sensorEvent.clientY - sourceRect.top, left: sensorEvent.clientX - sourceRect.left };
                  resolve(Object.assign({}, data, { mirrorOffset }));
                });
              }
              function addMirrorClasses(data) {
                return withPromise(function(resolve) {
                  var mirror = data.mirror, mirrorClass = data.mirrorClass;
                  mirror.classList.add(mirrorClass);
                  resolve(data);
                });
              }
              function removeMirrorID(data) {
                return withPromise(function(resolve) {
                  var mirror = data.mirror;
                  mirror.removeAttribute("id");
                  delete mirror.id;
                  resolve(data);
                });
              }
              function positionMirror() {
                var _ref4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref4$withFrame = _ref4.withFrame, withFrame = _ref4$withFrame === void 0 ? false : _ref4$withFrame;
                return function(data) {
                  return withPromise(function(resolve) {
                    var mirror = data.mirror, sensorEvent = data.sensorEvent, mirrorOffset = data.mirrorOffset;
                    if (mirrorOffset) {
                      var x = sensorEvent.clientX - mirrorOffset.left;
                      var y = sensorEvent.clientY - mirrorOffset.top;
                      mirror.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
                    }
                    resolve(data);
                  }, { frame: withFrame });
                };
              }
              function withPromise(callback) {
                var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref5$raf = _ref5.raf, raf = _ref5$raf === void 0 ? false : _ref5$raf;
                return new Promise(function(resolve, reject) {
                  if (raf) {
                    requestAnimationFrame(function() {
                      callback(resolve, reject);
                    });
                  } else {
                    callback(resolve, reject);
                  }
                });
              }
            },
            /* 67 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Mirror = __webpack_require__(66);
              var _Mirror2 = _interopRequireDefault(_Mirror);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Mirror2.default;
            },
            /* 68 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _utils = __webpack_require__(16);
              var _Sensor2 = __webpack_require__(15);
              var _Sensor3 = _interopRequireDefault(_Sensor2);
              var _SensorEvent = __webpack_require__(21);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var DragSensor = function(_Sensor) {
                (0, _inherits3.default)(DragSensor2, _Sensor);
                function DragSensor2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, DragSensor2);
                  var _this = (0, _possibleConstructorReturn3.default)(this, (DragSensor2.__proto__ || Object.getPrototypeOf(DragSensor2)).call(this, containers, options));
                  _this.dragging = false;
                  _this.currentContainer = null;
                  _this._onMouseDown = _this._onMouseDown.bind(_this);
                  _this._onMouseUp = _this._onMouseUp.bind(_this);
                  _this._onDragStart = _this._onDragStart.bind(_this);
                  _this._onDragOver = _this._onDragOver.bind(_this);
                  _this._onDragEnd = _this._onDragEnd.bind(_this);
                  _this._onDragDrop = _this._onDragDrop.bind(_this);
                  return _this;
                }
                (0, _createClass3.default)(DragSensor2, [{
                  key: "attach",
                  value: function attach() {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = this.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var container = _step.value;
                        container.addEventListener("mousedown", this._onMouseDown, true);
                        container.addEventListener("dragstart", this._onDragStart, false);
                        container.addEventListener("dragover", this._onDragOver, false);
                        container.addEventListener("dragend", this._onDragEnd, false);
                        container.addEventListener("drop", this._onDragDrop, false);
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    document.addEventListener("mouseup", this._onMouseUp, true);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = void 0;
                    try {
                      for (var _iterator2 = this.containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var container = _step2.value;
                        container.removeEventListener("mousedown", this._onMouseDown, true);
                        container.removeEventListener("dragstart", this._onDragStart, false);
                        container.removeEventListener("dragover", this._onDragOver, false);
                        container.removeEventListener("dragend", this._onDragEnd, false);
                        container.removeEventListener("drop", this._onDragDrop, false);
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                    document.removeEventListener("mouseup", this._onMouseUp, true);
                  }
                  // private
                }, {
                  key: "_onDragStart",
                  value: function _onDragStart(event) {
                    event.dataTransfer.setData("text", "");
                    event.dataTransfer.effectAllowed = this.options.type;
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    this.currentContainer = event.currentTarget;
                    var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragStartEvent);
                    if (dragStartEvent.canceled()) {
                      this.dragging = false;
                      event.preventDefault();
                    } else {
                      this.dragging = true;
                    }
                  }
                }, {
                  key: "_onDragOver",
                  value: function _onDragOver(event) {
                    if (!this.dragging) {
                      return;
                    }
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var container = event.currentTarget;
                    var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      overContainer: container,
                      originalEvent: event
                    });
                    this.trigger(container, dragMoveEvent);
                    if (!dragMoveEvent.canceled()) {
                      event.preventDefault();
                    }
                  }
                }, {
                  key: "_onDragEnd",
                  value: function _onDragEnd(event) {
                    if (!this.dragging) {
                      return;
                    }
                    event.preventDefault();
                    var container = event.currentTarget;
                    var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      originalEvent: event,
                      container
                    });
                    this.trigger(container, dragStopEvent);
                    this.dragging = false;
                  }
                }, {
                  key: "_onDragDrop",
                  value: function _onDragDrop(event) {
                    event.preventDefault();
                  }
                }, {
                  key: "_onMouseDown",
                  value: function _onMouseDown(event) {
                    if (event.target && (event.target.form || event.target.contenteditable)) {
                      return;
                    }
                    var target = (0, _utils.closest)(event.target, this.options.draggable);
                    if (target) {
                      clearTimeout(this.mouseDownTimeout);
                      this.mouseDownTimeout = setTimeout(function() {
                        target.draggable = true;
                      }, this.options.delay);
                    }
                  }
                }, {
                  key: "_onMouseUp",
                  value: function _onMouseUp(event) {
                    clearTimeout(this.mouseDownTimeout);
                    var target = (0, _utils.closest)(event.target, this.options.draggable);
                    if (target) {
                      target.draggable = false;
                    }
                  }
                }]);
                return DragSensor2;
              }(_Sensor3.default);
              exports2.default = DragSensor;
            },
            /* 69 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DragSensor = __webpack_require__(68);
              var _DragSensor2 = _interopRequireDefault(_DragSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _DragSensor2.default;
            },
            /* 70 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _Sensor2 = __webpack_require__(15);
              var _Sensor3 = _interopRequireDefault(_Sensor2);
              var _SensorEvent = __webpack_require__(21);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var ForceTouchSensor = function(_Sensor) {
                (0, _inherits3.default)(ForceTouchSensor2, _Sensor);
                function ForceTouchSensor2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, ForceTouchSensor2);
                  var _this = (0, _possibleConstructorReturn3.default)(this, (ForceTouchSensor2.__proto__ || Object.getPrototypeOf(ForceTouchSensor2)).call(this, containers, options));
                  _this.dragging = false;
                  _this.mightDrag = false;
                  _this.currentContainer = null;
                  _this._onMouseForceWillBegin = _this._onMouseForceWillBegin.bind(_this);
                  _this._onMouseForceDown = _this._onMouseForceDown.bind(_this);
                  _this._onMouseDown = _this._onMouseDown.bind(_this);
                  _this._onMouseForceChange = _this._onMouseForceChange.bind(_this);
                  _this._onMouseMove = _this._onMouseMove.bind(_this);
                  _this._onMouseUp = _this._onMouseUp.bind(_this);
                  return _this;
                }
                (0, _createClass3.default)(ForceTouchSensor2, [{
                  key: "attach",
                  value: function attach() {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = this.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var container = _step.value;
                        container.addEventListener("webkitmouseforcewillbegin", this._onMouseForceWillBegin, false);
                        container.addEventListener("webkitmouseforcedown", this._onMouseForceDown, false);
                        container.addEventListener("mousedown", this._onMouseDown, true);
                        container.addEventListener("webkitmouseforcechanged", this._onMouseForceChange, false);
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    document.addEventListener("mousemove", this._onMouseMove);
                    document.addEventListener("mouseup", this._onMouseUp);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = void 0;
                    try {
                      for (var _iterator2 = this.containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var container = _step2.value;
                        container.removeEventListener("webkitmouseforcewillbegin", this._onMouseForceWillBegin, false);
                        container.removeEventListener("webkitmouseforcedown", this._onMouseForceDown, false);
                        container.removeEventListener("mousedown", this._onMouseDown, true);
                        container.removeEventListener("webkitmouseforcechanged", this._onMouseForceChange, false);
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                    document.removeEventListener("mousemove", this._onMouseMove);
                    document.removeEventListener("mouseup", this._onMouseUp);
                  }
                }, {
                  key: "_onMouseForceWillBegin",
                  value: function _onMouseForceWillBegin(event) {
                    event.preventDefault();
                    this.mightDrag = true;
                  }
                }, {
                  key: "_onMouseForceDown",
                  value: function _onMouseForceDown(event) {
                    if (this.dragging) {
                      return;
                    }
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var container = event.currentTarget;
                    var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container,
                      originalEvent: event
                    });
                    this.trigger(container, dragStartEvent);
                    this.currentContainer = container;
                    this.dragging = !dragStartEvent.canceled();
                    this.mightDrag = false;
                  }
                }, {
                  key: "_onMouseUp",
                  value: function _onMouseUp(event) {
                    if (!this.dragging) {
                      return;
                    }
                    var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target: null,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragStopEvent);
                    this.currentContainer = null;
                    this.dragging = false;
                    this.mightDrag = false;
                  }
                }, {
                  key: "_onMouseDown",
                  value: function _onMouseDown(event) {
                    if (!this.mightDrag) {
                      return;
                    }
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    event.preventDefault();
                  }
                }, {
                  key: "_onMouseMove",
                  value: function _onMouseMove(event) {
                    if (!this.dragging) {
                      return;
                    }
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragMoveEvent);
                  }
                }, {
                  key: "_onMouseForceChange",
                  value: function _onMouseForceChange(event) {
                    if (this.dragging) {
                      return;
                    }
                    var target = event.target;
                    var container = event.currentTarget;
                    var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                      pressure: event.webkitForce,
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container,
                      originalEvent: event
                    });
                    this.trigger(container, dragPressureEvent);
                  }
                }, {
                  key: "_onMouseForceGlobalChange",
                  value: function _onMouseForceGlobalChange(event) {
                    if (!this.dragging) {
                      return;
                    }
                    var target = event.target;
                    var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                      pressure: event.webkitForce,
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragPressureEvent);
                  }
                }]);
                return ForceTouchSensor2;
              }(_Sensor3.default);
              exports2.default = ForceTouchSensor;
            },
            /* 71 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _Sensor2 = __webpack_require__(15);
              var _Sensor3 = _interopRequireDefault(_Sensor2);
              var _SensorEvent = __webpack_require__(21);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var MouseSensor = function(_Sensor) {
                (0, _inherits3.default)(MouseSensor2, _Sensor);
                function MouseSensor2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, MouseSensor2);
                  var _this = (0, _possibleConstructorReturn3.default)(this, (MouseSensor2.__proto__ || Object.getPrototypeOf(MouseSensor2)).call(this, containers, options));
                  _this.dragging = false;
                  _this.mouseDown = false;
                  _this.currentContainer = null;
                  _this._onContextMenuWhileDragging = _this._onContextMenuWhileDragging.bind(_this);
                  _this._onMouseDown = _this._onMouseDown.bind(_this);
                  _this._onMouseMove = _this._onMouseMove.bind(_this);
                  _this._onMouseUp = _this._onMouseUp.bind(_this);
                  return _this;
                }
                (0, _createClass3.default)(MouseSensor2, [{
                  key: "attach",
                  value: function attach() {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = this.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var container = _step.value;
                        container.addEventListener("mousedown", this._onMouseDown, true);
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    document.addEventListener("mousemove", this._onMouseMove);
                    document.addEventListener("mouseup", this._onMouseUp);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = void 0;
                    try {
                      for (var _iterator2 = this.containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var container = _step2.value;
                        container.removeEventListener("mousedown", this._onMouseDown, true);
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                    document.removeEventListener("mousemove", this._onMouseMove);
                    document.removeEventListener("mouseup", this._onMouseUp);
                  }
                }, {
                  key: "_onMouseDown",
                  value: function _onMouseDown(event) {
                    var _this2 = this;
                    if (event.button !== 0 || event.ctrlKey) {
                      return;
                    }
                    this.mouseDown = true;
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var container = event.currentTarget;
                    clearTimeout(this.mouseDownTimeout);
                    this.mouseDownTimeout = setTimeout(function() {
                      if (!_this2.mouseDown) {
                        return;
                      }
                      var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        target,
                        container,
                        originalEvent: event
                      });
                      _this2.trigger(container, dragStartEvent);
                      _this2.currentContainer = container;
                      _this2.dragging = !dragStartEvent.canceled();
                      if (_this2.dragging) {
                        document.addEventListener("contextmenu", _this2._onContextMenuWhileDragging);
                        document.addEventListener("dragstart", preventNativeDragStart);
                      }
                    }, this.options.delay);
                  }
                }, {
                  key: "_onMouseMove",
                  value: function _onMouseMove(event) {
                    if (!this.dragging) {
                      return;
                    }
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragMoveEvent);
                  }
                }, {
                  key: "_onMouseUp",
                  value: function _onMouseUp(event) {
                    this.mouseDown = Boolean(this.openedContextMenu);
                    if (this.openedContextMenu) {
                      this.openedContextMenu = false;
                      return;
                    }
                    if (!this.dragging) {
                      return;
                    }
                    var target = document.elementFromPoint(event.clientX, event.clientY);
                    var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragStopEvent);
                    document.removeEventListener("contextmenu", this._onContextMenuWhileDragging);
                    document.removeEventListener("dragstart", preventNativeDragStart);
                    this.currentContainer = null;
                    this.dragging = false;
                  }
                }, {
                  key: "_onContextMenuWhileDragging",
                  value: function _onContextMenuWhileDragging(event) {
                    event.preventDefault();
                    this.openedContextMenu = true;
                  }
                }]);
                return MouseSensor2;
              }(_Sensor3.default);
              exports2.default = MouseSensor;
              function preventNativeDragStart(event) {
                event.preventDefault();
              }
            },
            /* 72 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _MouseSensor = __webpack_require__(71);
              var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _MouseSensor2.default;
            },
            /* 73 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Sensor = function() {
                function Sensor2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, Sensor2);
                  this.containers = containers;
                  this.options = options;
                }
                (0, _createClass3.default)(Sensor2, [{
                  key: "attach",
                  value: function attach() {
                    return this;
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    return this;
                  }
                }, {
                  key: "trigger",
                  value: function trigger(element, sensorEvent) {
                    var event = document.createEvent("Event");
                    event.detail = sensorEvent;
                    event.initEvent(sensorEvent.type, true, true);
                    element.dispatchEvent(event);
                    this.lastEvent = sensorEvent;
                    return sensorEvent;
                  }
                }]);
                return Sensor2;
              }();
              exports2.default = Sensor;
            },
            /* 74 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DragPressureSensorEvent = exports2.DragStopSensorEvent = exports2.DragMoveSensorEvent = exports2.DragStartSensorEvent = exports2.SensorEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var SensorEvent = exports2.SensorEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(SensorEvent2, _AbstractEvent);
                function SensorEvent2() {
                  (0, _classCallCheck3.default)(this, SensorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SensorEvent2.__proto__ || Object.getPrototypeOf(SensorEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SensorEvent2, [{
                  key: "originalEvent",
                  get: function get() {
                    return this.data.originalEvent;
                  }
                }, {
                  key: "clientX",
                  get: function get() {
                    return this.data.clientX;
                  }
                }, {
                  key: "clientY",
                  get: function get() {
                    return this.data.clientY;
                  }
                }, {
                  key: "target",
                  get: function get() {
                    return this.data.target;
                  }
                }, {
                  key: "container",
                  get: function get() {
                    return this.data.container;
                  }
                }, {
                  key: "overContainer",
                  get: function get() {
                    return this.data.overContainer;
                  }
                }, {
                  key: "pressure",
                  get: function get() {
                    return this.data.pressure;
                  }
                }]);
                return SensorEvent2;
              }(_AbstractEvent3.default);
              var DragStartSensorEvent = exports2.DragStartSensorEvent = function(_SensorEvent) {
                (0, _inherits3.default)(DragStartSensorEvent2, _SensorEvent);
                function DragStartSensorEvent2() {
                  (0, _classCallCheck3.default)(this, DragStartSensorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragStartSensorEvent2.__proto__ || Object.getPrototypeOf(DragStartSensorEvent2)).apply(this, arguments));
                }
                return DragStartSensorEvent2;
              }(SensorEvent);
              DragStartSensorEvent.type = "drag:start";
              var DragMoveSensorEvent = exports2.DragMoveSensorEvent = function(_SensorEvent2) {
                (0, _inherits3.default)(DragMoveSensorEvent2, _SensorEvent2);
                function DragMoveSensorEvent2() {
                  (0, _classCallCheck3.default)(this, DragMoveSensorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragMoveSensorEvent2.__proto__ || Object.getPrototypeOf(DragMoveSensorEvent2)).apply(this, arguments));
                }
                return DragMoveSensorEvent2;
              }(SensorEvent);
              DragMoveSensorEvent.type = "drag:move";
              var DragStopSensorEvent = exports2.DragStopSensorEvent = function(_SensorEvent3) {
                (0, _inherits3.default)(DragStopSensorEvent2, _SensorEvent3);
                function DragStopSensorEvent2() {
                  (0, _classCallCheck3.default)(this, DragStopSensorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragStopSensorEvent2.__proto__ || Object.getPrototypeOf(DragStopSensorEvent2)).apply(this, arguments));
                }
                return DragStopSensorEvent2;
              }(SensorEvent);
              DragStopSensorEvent.type = "drag:stop";
              var DragPressureSensorEvent = exports2.DragPressureSensorEvent = function(_SensorEvent4) {
                (0, _inherits3.default)(DragPressureSensorEvent2, _SensorEvent4);
                function DragPressureSensorEvent2() {
                  (0, _classCallCheck3.default)(this, DragPressureSensorEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DragPressureSensorEvent2.__proto__ || Object.getPrototypeOf(DragPressureSensorEvent2)).apply(this, arguments));
                }
                return DragPressureSensorEvent2;
              }(SensorEvent);
              DragPressureSensorEvent.type = "drag:pressure";
            },
            /* 75 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _utils = __webpack_require__(16);
              var _Sensor2 = __webpack_require__(15);
              var _Sensor3 = _interopRequireDefault(_Sensor2);
              var _SensorEvent = __webpack_require__(21);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var TouchSensor = function(_Sensor) {
                (0, _inherits3.default)(TouchSensor2, _Sensor);
                function TouchSensor2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, TouchSensor2);
                  var _this = (0, _possibleConstructorReturn3.default)(this, (TouchSensor2.__proto__ || Object.getPrototypeOf(TouchSensor2)).call(this, containers, options));
                  _this.dragging = false;
                  _this.currentContainer = null;
                  _this.currentScrollableParent = null;
                  _this._onTouchStart = _this._onTouchStart.bind(_this);
                  _this._onTouchHold = _this._onTouchHold.bind(_this);
                  _this._onTouchEnd = _this._onTouchEnd.bind(_this);
                  _this._onTouchMove = _this._onTouchMove.bind(_this);
                  _this._onScroll = _this._onScroll.bind(_this);
                  return _this;
                }
                (0, _createClass3.default)(TouchSensor2, [{
                  key: "attach",
                  value: function attach() {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = this.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var container = _step.value;
                        container.addEventListener("touchstart", this._onTouchStart, false);
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    document.addEventListener("touchend", this._onTouchEnd, false);
                    document.addEventListener("touchcancel", this._onTouchEnd, false);
                    document.addEventListener("touchmove", this._onTouchMove, false);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = void 0;
                    try {
                      for (var _iterator2 = this.containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var container = _step2.value;
                        container.removeEventListener("touchstart", this._onTouchStart, false);
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                    document.removeEventListener("touchend", this._onTouchEnd, false);
                    document.removeEventListener("touchcancel", this._onTouchEnd, false);
                    document.removeEventListener("touchmove", this._onTouchMove, false);
                  }
                }, {
                  key: "_onScroll",
                  value: function _onScroll() {
                    clearTimeout(this.tapTimeout);
                  }
                }, {
                  key: "_onTouchStart",
                  value: function _onTouchStart(event) {
                    event.preventDefault();
                    var container = event.currentTarget;
                    document.addEventListener("scroll", this._onScroll);
                    container.addEventListener("contextmenu", _onContextMenu);
                    this.currentScrollableParent = (0, _utils.closest)(container, function(element) {
                      return element.offsetHeight < element.scrollHeight;
                    });
                    if (this.currentScrollableParent) {
                      this.currentScrollableParent.addEventListener("scroll", this._onScroll);
                    }
                    this.tapTimeout = setTimeout(this._onTouchHold(event, container), this.options.delay);
                  }
                }, {
                  key: "_onTouchHold",
                  value: function _onTouchHold(event, container) {
                    var _this2 = this;
                    return function() {
                      var touch = event.touches[0] || event.changedTouches[0];
                      var target = event.target;
                      var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                        clientX: touch.pageX,
                        clientY: touch.pageY,
                        target,
                        container,
                        originalEvent: event
                      });
                      _this2.trigger(container, dragStartEvent);
                      _this2.currentContainer = container;
                      _this2.dragging = !dragStartEvent.canceled();
                    };
                  }
                }, {
                  key: "_onTouchMove",
                  value: function _onTouchMove(event) {
                    if (!this.dragging) {
                      return;
                    }
                    event.stopPropagation();
                    var touch = event.touches[0] || event.changedTouches[0];
                    var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
                    var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                      clientX: touch.pageX,
                      clientY: touch.pageY,
                      target,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragMoveEvent);
                  }
                }, {
                  key: "_onTouchEnd",
                  value: function _onTouchEnd(event) {
                    var container = event.currentTarget;
                    document.removeEventListener("scroll", this._onScroll);
                    container.removeEventListener("contextmenu", _onContextMenu);
                    if (this.currentScrollableParent) {
                      this.currentScrollableParent.removeEventListener("scroll", this._onScroll);
                    }
                    clearTimeout(this.tapTimeout);
                    if (!this.dragging) {
                      return;
                    }
                    var touch = event.touches[0] || event.changedTouches[0];
                    event.preventDefault();
                    var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                      clientX: touch.pageX,
                      clientY: touch.pageY,
                      target: null,
                      container: this.currentContainer,
                      originalEvent: event
                    });
                    this.trigger(this.currentContainer, dragStopEvent);
                    this.currentContainer = null;
                    this.dragging = false;
                  }
                }]);
                return TouchSensor2;
              }(_Sensor3.default);
              exports2.default = TouchSensor;
              function _onContextMenu(event) {
                event.preventDefault();
              }
            },
            /* 76 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _TouchSensor = __webpack_require__(75);
              var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _TouchSensor2.default;
            },
            /* 77 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.ForceTouchSensor = exports2.DragSensor = exports2.TouchSensor = exports2.MouseSensor = exports2.Sensor = void 0;
              var _Sensor = __webpack_require__(15);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              var _MouseSensor = __webpack_require__(72);
              var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
              var _TouchSensor = __webpack_require__(76);
              var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
              var _DragSensor = __webpack_require__(69);
              var _DragSensor2 = _interopRequireDefault(_DragSensor);
              var _ForceTouchSensor = __webpack_require__(39);
              var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.Sensor = _Sensor2.default;
              exports2.MouseSensor = _MouseSensor2.default;
              exports2.TouchSensor = _TouchSensor2.default;
              exports2.DragSensor = _DragSensor2.default;
              exports2.ForceTouchSensor = _ForceTouchSensor2.default;
            },
            /* 78 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _utils = __webpack_require__(16);
              var _Draggable = __webpack_require__(20);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _DroppableEvent = __webpack_require__(80);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var defaults = {
                classes: {
                  "droppable:active": "draggable-droppable--active",
                  "droppable:occupied": "draggable-droppable--occupied"
                }
              };
              var Droppable = function() {
                function Droppable2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, Droppable2);
                  this.draggable = new _Draggable2.default(containers, options);
                  this.options = Object.assign({}, defaults, options);
                  this._onDragStart = this._onDragStart.bind(this);
                  this._onDragMove = this._onDragMove.bind(this);
                  this._onDragStop = this._onDragStop.bind(this);
                  this.draggable.on("drag:start", this._onDragStart).on("drag:move", this._onDragMove).on("drag:stop", this._onDragStop);
                }
                (0, _createClass3.default)(Droppable2, [{
                  key: "destroy",
                  value: function destroy() {
                    this.draggable.off("drag:start", this._onDragStart).off("drag:move", this._onDragMove).off("drag:stop", this._onDragStop).destroy();
                  }
                }, {
                  key: "on",
                  value: function on(type, callback) {
                    this.draggable.on(type, callback);
                    return this;
                  }
                }, {
                  key: "off",
                  value: function off(type, callback) {
                    this.draggable.off(type, callback);
                    return this;
                  }
                }, {
                  key: "getClassNameFor",
                  value: function getClassNameFor(name) {
                    return this.options.classes[name] || defaults.classes[name];
                  }
                }, {
                  key: "_onDragStart",
                  value: function _onDragStart(event) {
                    if (event.canceled()) {
                      return;
                    }
                    this.droppables = this._getDroppables();
                    var droppable = (0, _utils.closest)(event.sensorEvent.target, this.options.droppable);
                    if (!droppable) {
                      event.cancel();
                      return;
                    }
                    this.initialDroppable = droppable;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = void 0;
                    try {
                      for (var _iterator = this.droppables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var droppableElement = _step.value;
                        if (droppableElement.classList.contains(this.getClassNameFor("droppable:occupied"))) {
                          continue;
                        }
                        droppableElement.classList.add(this.getClassNameFor("droppable:active"));
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                  }
                }, {
                  key: "_onDragMove",
                  value: function _onDragMove(event) {
                    if (event.canceled()) {
                      return;
                    }
                    var droppable = this._closestDroppable(event.sensorEvent.target);
                    var overEmptyDroppable = droppable && !droppable.classList.contains(this.getClassNameFor("droppable:occupied"));
                    if (overEmptyDroppable && this._drop(event, droppable)) {
                      this.lastDroppable = droppable;
                    } else if ((!droppable || droppable === this.initialDroppable) && this.lastDroppable) {
                      this._release(event);
                      this.lastDroppable = null;
                    }
                  }
                }, {
                  key: "_onDragStop",
                  value: function _onDragStop() {
                    var occupiedClass = this.getClassNameFor("droppable:occupied");
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = void 0;
                    try {
                      for (var _iterator2 = this.droppables[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var droppable = _step2.value;
                        droppable.classList.remove(this.getClassNameFor("droppable:active"));
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                    if (this.lastDroppable && this.lastDroppable !== this.initialDroppable) {
                      this.initialDroppable.classList.remove(occupiedClass);
                    }
                    this.droppables = null;
                    this.lastDroppable = null;
                    this.initialDroppable = null;
                  }
                }, {
                  key: "_drop",
                  value: function _drop(event, droppable) {
                    var droppableOverEvent = new _DroppableEvent.DroppableOverEvent({
                      dragEvent: event,
                      droppable
                    });
                    this.draggable.triggerEvent(droppableOverEvent);
                    if (droppableOverEvent.canceled()) {
                      return false;
                    }
                    var occupiedClass = this.getClassNameFor("droppable:occupied");
                    if (this.lastDroppable) {
                      this.lastDroppable.classList.remove(occupiedClass);
                    }
                    droppable.appendChild(event.source);
                    droppable.classList.add(occupiedClass);
                    return true;
                  }
                }, {
                  key: "_release",
                  value: function _release(event) {
                    var droppableOutEvent = new _DroppableEvent.DroppableOutEvent({
                      dragEvent: event,
                      droppable: this.lastDroppable
                    });
                    this.draggable.triggerEvent(droppableOutEvent);
                    if (droppableOutEvent.canceled()) {
                      return;
                    }
                    this.initialDroppable.appendChild(event.source);
                    this.lastDroppable.classList.remove(this.getClassNameFor("droppable:occupied"));
                  }
                }, {
                  key: "_closestDroppable",
                  value: function _closestDroppable(target) {
                    var _this = this;
                    if (!this.droppables) {
                      return null;
                    }
                    return (0, _utils.closest)(target, function(element) {
                      return Array.from(_this.droppables).includes(element);
                    });
                  }
                }, {
                  key: "_getDroppables",
                  value: function _getDroppables() {
                    var droppables = this.options.droppable;
                    if (typeof droppables === "string") {
                      return document.querySelectorAll(droppables);
                    } else if (droppables instanceof NodeList || droppables instanceof Array) {
                      return droppables;
                    } else if (typeof droppables === "function") {
                      return droppables();
                    } else {
                      return [];
                    }
                  }
                }]);
                return Droppable2;
              }();
              exports2.default = Droppable;
            },
            /* 79 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DroppableOutEvent = exports2.DroppableOverEvent = exports2.DroppableEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var DroppableEvent = exports2.DroppableEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(DroppableEvent2, _AbstractEvent);
                function DroppableEvent2() {
                  (0, _classCallCheck3.default)(this, DroppableEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DroppableEvent2.__proto__ || Object.getPrototypeOf(DroppableEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(DroppableEvent2, [{
                  key: "dragEvent",
                  get: function get() {
                    return this.data.dragEvent;
                  }
                }, {
                  key: "droppable",
                  get: function get() {
                    return this.data.droppable;
                  }
                }]);
                return DroppableEvent2;
              }(_AbstractEvent3.default);
              DroppableEvent.type = "droppable";
              var DroppableOverEvent = exports2.DroppableOverEvent = function(_DroppableEvent) {
                (0, _inherits3.default)(DroppableOverEvent2, _DroppableEvent);
                function DroppableOverEvent2() {
                  (0, _classCallCheck3.default)(this, DroppableOverEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DroppableOverEvent2.__proto__ || Object.getPrototypeOf(DroppableOverEvent2)).apply(this, arguments));
                }
                return DroppableOverEvent2;
              }(DroppableEvent);
              DroppableOverEvent.type = "droppable:over";
              var DroppableOutEvent = exports2.DroppableOutEvent = function(_DroppableEvent2) {
                (0, _inherits3.default)(DroppableOutEvent2, _DroppableEvent2);
                function DroppableOutEvent2() {
                  (0, _classCallCheck3.default)(this, DroppableOutEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (DroppableOutEvent2.__proto__ || Object.getPrototypeOf(DroppableOutEvent2)).apply(this, arguments));
                }
                return DroppableOutEvent2;
              }(DroppableEvent);
              DroppableOutEvent.type = "droppable:out";
            },
            /* 80 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DroppableEvent = __webpack_require__(79);
              Object.defineProperty(exports2, "DroppableOverEvent", {
                enumerable: true,
                get: function get() {
                  return _DroppableEvent.DroppableOverEvent;
                }
              });
              Object.defineProperty(exports2, "DroppableOutEvent", {
                enumerable: true,
                get: function get() {
                  return _DroppableEvent.DroppableOutEvent;
                }
              });
            },
            /* 81 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _utils = __webpack_require__(16);
              var _CollidableEvent = __webpack_require__(83);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Collidable = function() {
                function Collidable2(draggable) {
                  (0, _classCallCheck3.default)(this, Collidable2);
                  this.draggable = draggable;
                  this._onDragMove = this._onDragMove.bind(this);
                  this._onDragStop = this._onDragStop.bind(this);
                  this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this);
                }
                (0, _createClass3.default)(Collidable2, [{
                  key: "attach",
                  value: function attach() {
                    this.draggable.on("drag:move", this._onDragMove);
                    this.draggable.on("drag:stop", this._onDragStop);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    this.draggable.off("drag:move", this._onDragMove);
                    this.draggable.off("drag:stop", this._onDragStop);
                  }
                }, {
                  key: "_onDragMove",
                  value: function _onDragMove(event) {
                    var target = event.sensorEvent.target;
                    this.currentAnimationFrame = requestAnimationFrame(this._onRequestAnimationFrame(target));
                    if (this.currentlyCollidingElement) {
                      event.cancel();
                    }
                    var collidableInEvent = new _CollidableEvent.CollidableInEvent({
                      dragEvent: event,
                      collidingElement: this.currentlyCollidingElement
                    });
                    var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
                      dragEvent: event,
                      collidingElement: this.lastCollidingElement
                    });
                    var enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
                    var leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                    if (enteringCollidable) {
                      if (this.lastCollidingElement) {
                        this.draggable.triggerEvent(collidableOutEvent);
                      }
                      this.draggable.triggerEvent(collidableInEvent);
                    } else if (leavingCollidable) {
                      this.draggable.triggerEvent(collidableOutEvent);
                    }
                    this.lastCollidingElement = this.currentlyCollidingElement;
                  }
                }, {
                  key: "_onDragStop",
                  value: function _onDragStop(event) {
                    var lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
                    var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
                      dragEvent: event,
                      collidingElement: lastCollidingElement
                    });
                    if (lastCollidingElement) {
                      this.draggable.triggerEvent(collidableOutEvent);
                    }
                    this.lastCollidingElement = null;
                    this.currentlyCollidingElement = null;
                  }
                }, {
                  key: "_onRequestAnimationFrame",
                  value: function _onRequestAnimationFrame(target) {
                    var _this = this;
                    return function() {
                      var collidables = _this._getCollidables();
                      _this.currentlyCollidingElement = (0, _utils.closest)(target, function(element) {
                        return collidables.includes(element);
                      });
                    };
                  }
                }, {
                  key: "_getCollidables",
                  value: function _getCollidables() {
                    var collidables = this.draggable.options.collidables;
                    if (typeof collidables === "string") {
                      return Array.prototype.slice.call(document.querySelectorAll(collidables));
                    } else if (collidables instanceof NodeList || collidables instanceof Array) {
                      return Array.prototype.slice.call(collidables);
                    } else if (collidables instanceof HTMLElement) {
                      return [collidables];
                    } else if (typeof collidables === "function") {
                      return collidables();
                    } else {
                      return [];
                    }
                  }
                }]);
                return Collidable2;
              }();
              exports2.default = Collidable;
            },
            /* 82 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.CollidableOutEvent = exports2.CollidableInEvent = exports2.CollidableEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var CollidableEvent = exports2.CollidableEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(CollidableEvent2, _AbstractEvent);
                function CollidableEvent2() {
                  (0, _classCallCheck3.default)(this, CollidableEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (CollidableEvent2.__proto__ || Object.getPrototypeOf(CollidableEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(CollidableEvent2, [{
                  key: "dragEvent",
                  get: function get() {
                    return this.data.dragEvent;
                  }
                }]);
                return CollidableEvent2;
              }(_AbstractEvent3.default);
              CollidableEvent.type = "collidable";
              var CollidableInEvent = exports2.CollidableInEvent = function(_CollidableEvent) {
                (0, _inherits3.default)(CollidableInEvent2, _CollidableEvent);
                function CollidableInEvent2() {
                  (0, _classCallCheck3.default)(this, CollidableInEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (CollidableInEvent2.__proto__ || Object.getPrototypeOf(CollidableInEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(CollidableInEvent2, [{
                  key: "collidingElement",
                  get: function get() {
                    return this.data.collidingElement;
                  }
                }]);
                return CollidableInEvent2;
              }(CollidableEvent);
              CollidableInEvent.type = "collidable:in";
              var CollidableOutEvent = exports2.CollidableOutEvent = function(_CollidableEvent2) {
                (0, _inherits3.default)(CollidableOutEvent2, _CollidableEvent2);
                function CollidableOutEvent2() {
                  (0, _classCallCheck3.default)(this, CollidableOutEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (CollidableOutEvent2.__proto__ || Object.getPrototypeOf(CollidableOutEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(CollidableOutEvent2, [{
                  key: "collidingElement",
                  get: function get() {
                    return this.data.collidingElement;
                  }
                }]);
                return CollidableOutEvent2;
              }(CollidableEvent);
              CollidableOutEvent.type = "collidable:out";
            },
            /* 83 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _CollidableEvent = __webpack_require__(82);
              Object.defineProperty(exports2, "CollidableInEvent", {
                enumerable: true,
                get: function get() {
                  return _CollidableEvent.CollidableInEvent;
                }
              });
              Object.defineProperty(exports2, "CollidableOutEvent", {
                enumerable: true,
                get: function get() {
                  return _CollidableEvent.CollidableOutEvent;
                }
              });
            },
            /* 84 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Collidable = __webpack_require__(81);
              var _Collidable2 = _interopRequireDefault(_Collidable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Collidable2.default;
            },
            /* 85 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _SnappableEvent = __webpack_require__(87);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Snappable = function() {
                function Snappable2(draggable) {
                  (0, _classCallCheck3.default)(this, Snappable2);
                  this.draggable = draggable;
                  this._onDragStart = this._onDragStart.bind(this);
                  this._onDragStop = this._onDragStop.bind(this);
                  this._onDragOver = this._onDragOver.bind(this);
                  this._onDragOut = this._onDragOut.bind(this);
                }
                (0, _createClass3.default)(Snappable2, [{
                  key: "attach",
                  value: function attach() {
                    this.draggable.on("drag:start", this._onDragStart).on("drag:stop", this._onDragStop).on("drag:over", this._onDragOver).on("drag:out", this._onDragOut).on("droppable:over", this._onDragOver).on("droppable:out", this._onDragOut);
                  }
                }, {
                  key: "detach",
                  value: function detach() {
                    this.draggable.off("drag:start", this._onDragStart).off("drag:stop", this._onDragStop).off("drag:over", this._onDragOver).off("drag:out", this._onDragOut).off("droppable:over", this._onDragOver).off("droppable:out", this._onDragOut);
                  }
                }, {
                  key: "_onDragStart",
                  value: function _onDragStart(event) {
                    if (event.canceled()) {
                      return;
                    }
                    this.firstSource = event.source;
                  }
                }, {
                  key: "_onDragStop",
                  value: function _onDragStop() {
                    this.firstSource = null;
                  }
                }, {
                  key: "_onDragOver",
                  value: function _onDragOver(event) {
                    var _this = this;
                    if (event.canceled()) {
                      return;
                    }
                    var source = event.source || event.dragEvent.source;
                    var mirror = event.mirror || event.dragEvent.mirror;
                    if (source === this.firstSource) {
                      this.firstSource = null;
                      return;
                    }
                    var snapInEvent = new _SnappableEvent.SnapInEvent({
                      dragEvent: event
                    });
                    this.draggable.triggerEvent(snapInEvent);
                    if (snapInEvent.canceled()) {
                      return;
                    }
                    if (mirror) {
                      mirror.style.display = "none";
                    }
                    source.classList.remove(this.draggable.getClassNameFor("source:dragging"));
                    source.classList.add(this.draggable.getClassNameFor("source:placed"));
                    setTimeout(function() {
                      source.classList.remove(_this.draggable.getClassNameFor("source:placed"));
                    }, this.draggable.options.placedTimeout);
                  }
                }, {
                  key: "_onDragOut",
                  value: function _onDragOut(event) {
                    if (event.canceled()) {
                      return;
                    }
                    var mirror = event.mirror || event.dragEvent.mirror;
                    var source = event.source || event.dragEvent.source;
                    var snapOutEvent = new _SnappableEvent.SnapOutEvent({
                      dragEvent: event
                    });
                    this.draggable.triggerEvent(snapOutEvent);
                    if (snapOutEvent.canceled()) {
                      return;
                    }
                    if (mirror) {
                      mirror.style.display = "";
                    }
                    source.classList.add(this.draggable.getClassNameFor("source:dragging"));
                  }
                }]);
                return Snappable2;
              }();
              exports2.default = Snappable;
            },
            /* 86 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SnapOutEvent = exports2.SnapInEvent = exports2.SnapEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var SnapEvent = exports2.SnapEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(SnapEvent2, _AbstractEvent);
                function SnapEvent2() {
                  (0, _classCallCheck3.default)(this, SnapEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SnapEvent2.__proto__ || Object.getPrototypeOf(SnapEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SnapEvent2, [{
                  key: "dragEvent",
                  get: function get() {
                    return this.data.dragEvent;
                  }
                }]);
                return SnapEvent2;
              }(_AbstractEvent3.default);
              var SnapInEvent = exports2.SnapInEvent = function(_SnapEvent) {
                (0, _inherits3.default)(SnapInEvent2, _SnapEvent);
                function SnapInEvent2() {
                  (0, _classCallCheck3.default)(this, SnapInEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SnapInEvent2.__proto__ || Object.getPrototypeOf(SnapInEvent2)).apply(this, arguments));
                }
                return SnapInEvent2;
              }(SnapEvent);
              SnapInEvent.type = "snap:in";
              var SnapOutEvent = exports2.SnapOutEvent = function(_SnapEvent2) {
                (0, _inherits3.default)(SnapOutEvent2, _SnapEvent2);
                function SnapOutEvent2() {
                  (0, _classCallCheck3.default)(this, SnapOutEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SnapOutEvent2.__proto__ || Object.getPrototypeOf(SnapOutEvent2)).apply(this, arguments));
                }
                return SnapOutEvent2;
              }(SnapEvent);
              SnapOutEvent.type = "snap:out";
            },
            /* 87 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SnappableEvent = __webpack_require__(86);
              Object.defineProperty(exports2, "SnapInEvent", {
                enumerable: true,
                get: function get() {
                  return _SnappableEvent.SnapInEvent;
                }
              });
              Object.defineProperty(exports2, "SnapOutEvent", {
                enumerable: true,
                get: function get() {
                  return _SnappableEvent.SnapOutEvent;
                }
              });
            },
            /* 88 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Snappable = __webpack_require__(85);
              var _Snappable2 = _interopRequireDefault(_Snappable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Snappable2.default;
            },
            /* 89 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _Draggable = __webpack_require__(20);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _SortableEvent = __webpack_require__(91);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Sortable2 = function() {
                function Sortable3() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, Sortable3);
                  this.draggable = new _Draggable2.default(containers, options);
                  this._onDragStart = this._onDragStart.bind(this);
                  this._onDragOverContainer = this._onDragOverContainer.bind(this);
                  this._onDragOver = this._onDragOver.bind(this);
                  this._onDragStop = this._onDragStop.bind(this);
                  this.draggable.on("drag:start", this._onDragStart).on("drag:over:container", this._onDragOverContainer).on("drag:over", this._onDragOver).on("drag:stop", this._onDragStop);
                }
                (0, _createClass3.default)(Sortable3, [{
                  key: "destroy",
                  value: function destroy() {
                    this.draggable.off("drag:start", this._onDragStart).off("drag:over:container", this._onDragOverContainer).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop).destroy();
                  }
                }, {
                  key: "on",
                  value: function on(type, callback) {
                    this.draggable.on(type, callback);
                    return this;
                  }
                }, {
                  key: "off",
                  value: function off(type, callback) {
                    this.draggable.off(type, callback);
                    return this;
                  }
                }, {
                  key: "_onDragStart",
                  value: function _onDragStart(event) {
                    this.startIndex = index(event.source);
                    var sortableStartEvent = new _SortableEvent.SortableStartEvent({
                      dragEvent: event,
                      startIndex: this.startIndex
                    });
                    this.draggable.trigger(sortableStartEvent);
                    if (sortableStartEvent.canceled()) {
                      event.cancel();
                    }
                  }
                }, {
                  key: "_onDragOverContainer",
                  value: function _onDragOverContainer(event) {
                    if (event.canceled()) {
                      return;
                    }
                    var moves = move(event.source, event.over, event.overContainer);
                    if (!moves) {
                      return;
                    }
                    var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                      dragEvent: event,
                      moves
                    });
                    this.draggable.triggerEvent(sortableSortedEvent);
                  }
                }, {
                  key: "_onDragOver",
                  value: function _onDragOver(event) {
                    if (event.over === event.originalSource || event.over === event.source) {
                      return;
                    }
                    var moves = move(event.source, event.over, event.overContainer);
                    if (!moves) {
                      return;
                    }
                    var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                      dragEvent: event,
                      moves
                    });
                    this.draggable.triggerEvent(sortableSortedEvent);
                  }
                }, {
                  key: "_onDragStop",
                  value: function _onDragStop(event) {
                    var sortableStopEvent = new _SortableEvent.SortableStopEvent({
                      dragEvent: event,
                      oldIndex: this.startIndex,
                      newIndex: index(event.source)
                    });
                    this.draggable.triggerEvent(sortableStopEvent);
                    this.startIndex = null;
                    this.offset = null;
                  }
                }]);
                return Sortable3;
              }();
              exports2.default = Sortable2;
              function index(element) {
                return Array.prototype.indexOf.call(element.parentNode.children, element);
              }
              function move(source, over, overContainer) {
                var emptyOverContainer = !overContainer.children.length;
                var differentContainer = over && source.parentNode !== over.parentNode;
                var sameContainer = over && source.parentNode === over.parentNode;
                if (emptyOverContainer) {
                  return moveInsideEmptyContainer(source, overContainer);
                } else if (sameContainer) {
                  return moveWithinContainer(source, over);
                } else if (differentContainer) {
                  return moveOutsideContainer(source, over);
                } else {
                  return null;
                }
              }
              function moveInsideEmptyContainer(source, overContainer) {
                var oldContainer = source.parentNode;
                var oldIndex = index(source);
                overContainer.appendChild(source);
                return { oldIndex, newIndex: index(source), oldContainer, newContainer: overContainer };
              }
              function moveWithinContainer(source, over) {
                var oldIndex = index(source);
                var newIndex = index(over);
                if (oldIndex < newIndex) {
                  source.parentNode.insertBefore(source, over.nextElementSibling);
                } else {
                  source.parentNode.insertBefore(source, over);
                }
                return { oldIndex, newIndex, oldContainer: source.parentNode, newContainer: source.parentNode };
              }
              function moveOutsideContainer(source, over) {
                var oldContainer = source.parentNode;
                var oldIndex = index(source);
                var newIndex = index(over);
                over.parentNode.insertBefore(source, over);
                return { oldIndex, newIndex, oldContainer, newContainer: source.parentNode };
              }
            },
            /* 90 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SortableStopEvent = exports2.SortableSortedEvent = exports2.SortableStartEvent = exports2.SortableEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var SortableEvent = exports2.SortableEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(SortableEvent2, _AbstractEvent);
                function SortableEvent2() {
                  (0, _classCallCheck3.default)(this, SortableEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SortableEvent2.__proto__ || Object.getPrototypeOf(SortableEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SortableEvent2, [{
                  key: "dragEvent",
                  get: function get() {
                    return this.data.dragEvent;
                  }
                }]);
                return SortableEvent2;
              }(_AbstractEvent3.default);
              var SortableStartEvent = exports2.SortableStartEvent = function(_SortableEvent) {
                (0, _inherits3.default)(SortableStartEvent2, _SortableEvent);
                function SortableStartEvent2() {
                  (0, _classCallCheck3.default)(this, SortableStartEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SortableStartEvent2.__proto__ || Object.getPrototypeOf(SortableStartEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SortableStartEvent2, [{
                  key: "startIndex",
                  get: function get() {
                    return this.data.startIndex;
                  }
                }]);
                return SortableStartEvent2;
              }(SortableEvent);
              SortableStartEvent.type = "sortable:start";
              var SortableSortedEvent = exports2.SortableSortedEvent = function(_SortableEvent2) {
                (0, _inherits3.default)(SortableSortedEvent2, _SortableEvent2);
                function SortableSortedEvent2() {
                  (0, _classCallCheck3.default)(this, SortableSortedEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SortableSortedEvent2.__proto__ || Object.getPrototypeOf(SortableSortedEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SortableSortedEvent2, [{
                  key: "moves",
                  get: function get() {
                    return this.data.moves;
                  }
                }]);
                return SortableSortedEvent2;
              }(SortableEvent);
              SortableSortedEvent.type = "sortable:sorted";
              var SortableStopEvent = exports2.SortableStopEvent = function(_SortableEvent3) {
                (0, _inherits3.default)(SortableStopEvent2, _SortableEvent3);
                function SortableStopEvent2() {
                  (0, _classCallCheck3.default)(this, SortableStopEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SortableStopEvent2.__proto__ || Object.getPrototypeOf(SortableStopEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SortableStopEvent2, [{
                  key: "oldIndex",
                  get: function get() {
                    return this.data.oldIndex;
                  }
                }, {
                  key: "newIndex",
                  get: function get() {
                    return this.data.newIndex;
                  }
                }]);
                return SortableStopEvent2;
              }(SortableEvent);
              SortableStopEvent.type = "sortable:stop";
            },
            /* 91 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SortableEvent = __webpack_require__(90);
              Object.defineProperty(exports2, "SortableStartEvent", {
                enumerable: true,
                get: function get() {
                  return _SortableEvent.SortableStartEvent;
                }
              });
              Object.defineProperty(exports2, "SortableSortedEvent", {
                enumerable: true,
                get: function get() {
                  return _SortableEvent.SortableSortedEvent;
                }
              });
              Object.defineProperty(exports2, "SortableStopEvent", {
                enumerable: true,
                get: function get() {
                  return _SortableEvent.SortableStopEvent;
                }
              });
            },
            /* 92 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _Draggable = __webpack_require__(20);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _SwappableEvent = __webpack_require__(94);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var Swappable = function() {
                function Swappable2() {
                  var containers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  (0, _classCallCheck3.default)(this, Swappable2);
                  this.draggable = new _Draggable2.default(containers, options);
                  this._onDragStart = this._onDragStart.bind(this);
                  this._onDragOver = this._onDragOver.bind(this);
                  this._onDragStop = this._onDragStop.bind(this);
                  this.draggable.on("drag:start", this._onDragStart).on("drag:over", this._onDragOver).on("drag:stop", this._onDragStop);
                }
                (0, _createClass3.default)(Swappable2, [{
                  key: "destroy",
                  value: function destroy() {
                    this.draggable.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop).destroy();
                  }
                }, {
                  key: "on",
                  value: function on(type, callback) {
                    this.draggable.on(type, callback);
                    return this;
                  }
                }, {
                  key: "off",
                  value: function off(type, callback) {
                    this.draggable.off(type, callback);
                    return this;
                  }
                }, {
                  key: "_onDragStart",
                  value: function _onDragStart(event) {
                    var swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
                      dragEvent: event
                    });
                    this.draggable.triggerEvent(swappableStartEvent);
                    if (swappableStartEvent.canceled()) {
                      event.cancel();
                    }
                  }
                }, {
                  key: "_onDragOver",
                  value: function _onDragOver(event) {
                    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
                      return;
                    }
                    if (this.lastOver && this.lastOver !== event.over) {
                      swap(this.lastOver, event.source);
                    }
                    if (this.lastOver === event.over) {
                      this.lastOver = null;
                    } else {
                      this.lastOver = event.over;
                    }
                    swap(event.source, event.over);
                    var swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
                      dragEvent: event,
                      swappedElement: event.over
                    });
                    this.draggable.triggerEvent(swappableSwappedEvent);
                  }
                }, {
                  key: "_onDragStop",
                  value: function _onDragStop(event) {
                    var swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
                      dragEvent: event
                    });
                    this.draggable.triggerEvent(swappableStopEvent);
                    this.lastOver = null;
                  }
                }]);
                return Swappable2;
              }();
              exports2.default = Swappable;
              function withTempElement(callback) {
                var tmpElement = document.createElement("div");
                callback(tmpElement);
                tmpElement.parentNode.removeChild(tmpElement);
              }
              function swap(source, over) {
                var overParent = over.parentNode;
                var sourceParent = source.parentNode;
                withTempElement(function(tmpElement) {
                  sourceParent.insertBefore(tmpElement, source);
                  overParent.insertBefore(source, over);
                  sourceParent.insertBefore(over, tmpElement);
                });
              }
            },
            /* 93 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SwappableStopEvent = exports2.SwappableSwappedEvent = exports2.SwappableStartEvent = exports2.SwappableEvent = void 0;
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              var _possibleConstructorReturn2 = __webpack_require__(3);
              var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
              var _inherits2 = __webpack_require__(2);
              var _inherits3 = _interopRequireDefault(_inherits2);
              var _AbstractEvent2 = __webpack_require__(4);
              var _AbstractEvent3 = _interopRequireDefault(_AbstractEvent2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var SwappableEvent = exports2.SwappableEvent = function(_AbstractEvent) {
                (0, _inherits3.default)(SwappableEvent2, _AbstractEvent);
                function SwappableEvent2() {
                  (0, _classCallCheck3.default)(this, SwappableEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SwappableEvent2.__proto__ || Object.getPrototypeOf(SwappableEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SwappableEvent2, [{
                  key: "dragEvent",
                  get: function get() {
                    return this.data.dragEvent;
                  }
                }]);
                return SwappableEvent2;
              }(_AbstractEvent3.default);
              var SwappableStartEvent = exports2.SwappableStartEvent = function(_SwappableEvent) {
                (0, _inherits3.default)(SwappableStartEvent2, _SwappableEvent);
                function SwappableStartEvent2() {
                  (0, _classCallCheck3.default)(this, SwappableStartEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SwappableStartEvent2.__proto__ || Object.getPrototypeOf(SwappableStartEvent2)).apply(this, arguments));
                }
                return SwappableStartEvent2;
              }(SwappableEvent);
              SwappableStartEvent.type = "swappable:start";
              var SwappableSwappedEvent = exports2.SwappableSwappedEvent = function(_SwappableEvent2) {
                (0, _inherits3.default)(SwappableSwappedEvent2, _SwappableEvent2);
                function SwappableSwappedEvent2() {
                  (0, _classCallCheck3.default)(this, SwappableSwappedEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SwappableSwappedEvent2.__proto__ || Object.getPrototypeOf(SwappableSwappedEvent2)).apply(this, arguments));
                }
                (0, _createClass3.default)(SwappableSwappedEvent2, [{
                  key: "swappedElement",
                  get: function get() {
                    return this.data.swappedElement;
                  }
                }]);
                return SwappableSwappedEvent2;
              }(SwappableEvent);
              SwappableSwappedEvent.type = "swappable:swapped";
              var SwappableStopEvent = exports2.SwappableStopEvent = function(_SwappableEvent3) {
                (0, _inherits3.default)(SwappableStopEvent2, _SwappableEvent3);
                function SwappableStopEvent2() {
                  (0, _classCallCheck3.default)(this, SwappableStopEvent2);
                  return (0, _possibleConstructorReturn3.default)(this, (SwappableStopEvent2.__proto__ || Object.getPrototypeOf(SwappableStopEvent2)).apply(this, arguments));
                }
                return SwappableStopEvent2;
              }(SwappableEvent);
              SwappableStopEvent.type = "swappable:stop";
            },
            /* 94 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SwappableEvent = __webpack_require__(93);
              Object.defineProperty(exports2, "SwappableStartEvent", {
                enumerable: true,
                get: function get() {
                  return _SwappableEvent.SwappableStartEvent;
                }
              });
              Object.defineProperty(exports2, "SwappableSwappedEvent", {
                enumerable: true,
                get: function get() {
                  return _SwappableEvent.SwappableSwappedEvent;
                }
              });
              Object.defineProperty(exports2, "SwappableStopEvent", {
                enumerable: true,
                get: function get() {
                  return _SwappableEvent.SwappableStopEvent;
                }
              });
            },
            /* 95 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.BaseEvent = exports2.ForceTouchSensor = exports2.Collidable = exports2.Snappable = exports2.Droppable = exports2.Swappable = exports2.Sortable = exports2.Draggable = void 0;
              var _AbstractEvent = __webpack_require__(4);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              var _Draggable = __webpack_require__(20);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _Droppable = __webpack_require__(53);
              var _Droppable2 = _interopRequireDefault(_Droppable);
              var _Swappable = __webpack_require__(56);
              var _Swappable2 = _interopRequireDefault(_Swappable);
              var _Sortable = __webpack_require__(55);
              var _Sortable2 = _interopRequireDefault(_Sortable);
              var _Plugins = __webpack_require__(54);
              var _ForceTouchSensor = __webpack_require__(39);
              var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.Draggable = _Draggable2.default;
              exports2.Sortable = _Sortable2.default;
              exports2.Swappable = _Swappable2.default;
              exports2.Droppable = _Droppable2.default;
              exports2.Snappable = _Plugins.Snappable;
              exports2.Collidable = _Plugins.Collidable;
              exports2.ForceTouchSensor = _ForceTouchSensor2.default;
              exports2.BaseEvent = _AbstractEvent2.default;
            },
            /* 96 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _classCallCheck2 = __webpack_require__(0);
              var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
              var _createClass2 = __webpack_require__(1);
              var _createClass3 = _interopRequireDefault(_createClass2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              var AbstractEvent = function() {
                function AbstractEvent2(data) {
                  (0, _classCallCheck3.default)(this, AbstractEvent2);
                  this._canceled = false;
                  this.data = data;
                }
                (0, _createClass3.default)(AbstractEvent2, [{
                  key: "cancel",
                  /**
                   * Cancels a specific event
                   * @abstract
                   */
                  value: function cancel() {
                    this._canceled = true;
                  }
                  /**
                   * Check if event has been canceled
                   * @abstract
                   * @return {Boolean}
                   */
                }, {
                  key: "canceled",
                  value: function canceled() {
                    return Boolean(this._canceled);
                  }
                }, {
                  key: "type",
                  get: function get() {
                    return this.constructor.type;
                  }
                }, {
                  key: "cancelable",
                  get: function get() {
                    return this.constructor.cancelable;
                  }
                }]);
                return AbstractEvent2;
              }();
              AbstractEvent.type = "event";
              AbstractEvent.cancelable = false;
              exports2.default = AbstractEvent;
            },
            /* 97 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = closest;
              var matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
              function closest(element, selector) {
                if (!element) {
                  return null;
                }
                function conditionFn(currentElement) {
                  if (!currentElement) {
                    return currentElement;
                  } else if (typeof selector === "string") {
                    return matchFunction.call(currentElement, selector);
                  } else {
                    return selector(currentElement);
                  }
                }
                var current = element;
                do {
                  current = current.correspondingUseElement || current.correspondingElement || current;
                  if (conditionFn(current)) {
                    return current;
                  }
                  current = current.parentNode;
                } while (current && current !== document.body && current !== document);
                return null;
              }
            },
            /* 98 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _closest = __webpack_require__(97);
              var _closest2 = _interopRequireDefault(_closest);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _closest2.default;
            },
            /* 99 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _scroll = __webpack_require__(100);
              var _scroll2 = _interopRequireDefault(_scroll);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _scroll2.default;
            },
            /* 100 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = scroll;
              var scrollAnimationFrame = void 0;
              function scroll(element, _ref) {
                var clientX = _ref.clientX, clientY = _ref.clientY, speed = _ref.speed, sensitivity = _ref.sensitivity;
                if (scrollAnimationFrame) {
                  cancelAnimationFrame(scrollAnimationFrame);
                }
                function scrollFn() {
                  var rect = element.getBoundingClientRect();
                  var offsetY = (Math.abs(rect.bottom - clientY) <= sensitivity) - (Math.abs(rect.top - clientY) <= sensitivity);
                  var offsetX = (Math.abs(rect.right - clientX) <= sensitivity) - (Math.abs(rect.left - clientX) <= sensitivity);
                  element.scrollTop += offsetY * speed;
                  element.scrollLeft += offsetX * speed;
                  scrollAnimationFrame = requestAnimationFrame(scrollFn);
                }
                scrollAnimationFrame = requestAnimationFrame(scrollFn);
              }
            },
            /* 101 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(108), __esModule: true };
            },
            /* 102 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(109), __esModule: true };
            },
            /* 103 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(110), __esModule: true };
            },
            /* 104 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(111), __esModule: true };
            },
            /* 105 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(112), __esModule: true };
            },
            /* 106 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(113), __esModule: true };
            },
            /* 107 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _from = __webpack_require__(101);
              var _from2 = _interopRequireDefault(_from);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = function(arr) {
                if (Array.isArray(arr)) {
                  for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                  }
                  return arr2;
                } else {
                  return (0, _from2.default)(arr);
                }
              };
            },
            /* 108 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(52);
              __webpack_require__(137);
              module2.exports = __webpack_require__(6).Array.from;
            },
            /* 109 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(139);
              var $Object = __webpack_require__(6).Object;
              module2.exports = function create(P, D) {
                return $Object.create(P, D);
              };
            },
            /* 110 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(140);
              var $Object = __webpack_require__(6).Object;
              module2.exports = function defineProperty(it, key, desc) {
                return $Object.defineProperty(it, key, desc);
              };
            },
            /* 111 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(141);
              module2.exports = __webpack_require__(6).Object.setPrototypeOf;
            },
            /* 112 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(143);
              __webpack_require__(142);
              __webpack_require__(144);
              __webpack_require__(145);
              module2.exports = __webpack_require__(6).Symbol;
            },
            /* 113 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(52);
              __webpack_require__(146);
              module2.exports = __webpack_require__(38).f("iterator");
            },
            /* 114 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (typeof it != "function")
                  throw TypeError(it + " is not a function!");
                return it;
              };
            },
            /* 115 */
            /***/
            function(module2, exports2) {
              module2.exports = function() {
              };
            },
            /* 116 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIObject = __webpack_require__(11), toLength = __webpack_require__(50), toIndex = __webpack_require__(135);
              module2.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                  var O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length), value;
                  if (IS_INCLUDES && el != el)
                    while (length > index) {
                      value = O[index++];
                      if (value != value)
                        return true;
                    }
                  else
                    for (; length > index; index++)
                      if (IS_INCLUDES || index in O) {
                        if (O[index] === el)
                          return IS_INCLUDES || index || 0;
                      }
                  return !IS_INCLUDES && -1;
                };
              };
            },
            /* 117 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(25), TAG = __webpack_require__(5)("toStringTag"), ARG = cof(function() {
                return arguments;
              }()) == "Arguments";
              var tryGet = function(it, key) {
                try {
                  return it[key];
                } catch (e) {
                }
              };
              module2.exports = function(it) {
                var O, T, B;
                return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
              };
            },
            /* 118 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var $defineProperty = __webpack_require__(8), createDesc = __webpack_require__(19);
              module2.exports = function(object, index, value) {
                if (index in object)
                  $defineProperty.f(object, index, createDesc(0, value));
                else
                  object[index] = value;
              };
            },
            /* 119 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var getKeys = __webpack_require__(23), gOPS = __webpack_require__(47), pIE = __webpack_require__(31);
              module2.exports = function(it) {
                var result = getKeys(it), getSymbols = gOPS.f;
                if (getSymbols) {
                  var symbols = getSymbols(it), isEnum = pIE.f, i = 0, key;
                  while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++]))
                      result.push(key);
                }
                return result;
              };
            },
            /* 120 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(7).document && document.documentElement;
            },
            /* 121 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(25);
              module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == "String" ? it.split("") : Object(it);
              };
            },
            /* 122 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Iterators = __webpack_require__(18), ITERATOR = __webpack_require__(5)("iterator"), ArrayProto = Array.prototype;
              module2.exports = function(it) {
                return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
              };
            },
            /* 123 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var cof = __webpack_require__(25);
              module2.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == "Array";
              };
            },
            /* 124 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(12);
              module2.exports = function(iterator, fn, value, entries) {
                try {
                  return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (e) {
                  var ret = iterator["return"];
                  if (ret !== void 0)
                    anObject(ret.call(iterator));
                  throw e;
                }
              };
            },
            /* 125 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var create = __webpack_require__(30), descriptor = __webpack_require__(19), setToStringTag = __webpack_require__(32), IteratorPrototype = {};
              __webpack_require__(14)(IteratorPrototype, __webpack_require__(5)("iterator"), function() {
                return this;
              });
              module2.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + " Iterator");
              };
            },
            /* 126 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var ITERATOR = __webpack_require__(5)("iterator"), SAFE_CLOSING = false;
              try {
                var riter = [7][ITERATOR]();
                riter["return"] = function() {
                  SAFE_CLOSING = true;
                };
                Array.from(riter, function() {
                  throw 2;
                });
              } catch (e) {
              }
              module2.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING)
                  return false;
                var safe = false;
                try {
                  var arr = [7], iter = arr[ITERATOR]();
                  iter.next = function() {
                    return { done: safe = true };
                  };
                  arr[ITERATOR] = function() {
                    return iter;
                  };
                  exec(arr);
                } catch (e) {
                }
                return safe;
              };
            },
            /* 127 */
            /***/
            function(module2, exports2) {
              module2.exports = function(done, value) {
                return { value, done: !!done };
              };
            },
            /* 128 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var getKeys = __webpack_require__(23), toIObject = __webpack_require__(11);
              module2.exports = function(object, el) {
                var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
                while (length > index)
                  if (O[key = keys[index++]] === el)
                    return key;
              };
            },
            /* 129 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var META = __webpack_require__(24)("meta"), isObject = __webpack_require__(17), has = __webpack_require__(10), setDesc = __webpack_require__(8).f, id = 0;
              var isExtensible = Object.isExtensible || function() {
                return true;
              };
              var FREEZE = !__webpack_require__(22)(function() {
                return isExtensible(Object.preventExtensions({}));
              });
              var setMeta = function(it) {
                setDesc(it, META, { value: {
                  i: "O" + ++id,
                  // object ID
                  w: {}
                  // weak collections IDs
                } });
              };
              var fastKey = function(it, create) {
                if (!isObject(it))
                  return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
                if (!has(it, META)) {
                  if (!isExtensible(it))
                    return "F";
                  if (!create)
                    return "E";
                  setMeta(it);
                }
                return it[META].i;
              };
              var getWeak = function(it, create) {
                if (!has(it, META)) {
                  if (!isExtensible(it))
                    return true;
                  if (!create)
                    return false;
                  setMeta(it);
                }
                return it[META].w;
              };
              var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
                  setMeta(it);
                return it;
              };
              var meta = module2.exports = {
                KEY: META,
                NEED: false,
                fastKey,
                getWeak,
                onFreeze
              };
            },
            /* 130 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var dP = __webpack_require__(8), anObject = __webpack_require__(12), getKeys = __webpack_require__(23);
              module2.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties), length = keys.length, i = 0, P;
                while (length > i)
                  dP.f(O, P = keys[i++], Properties[P]);
                return O;
              };
            },
            /* 131 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIObject = __webpack_require__(11), gOPN = __webpack_require__(46).f, toString = {}.toString;
              var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
              var getWindowNames = function(it) {
                try {
                  return gOPN(it);
                } catch (e) {
                  return windowNames.slice();
                }
              };
              module2.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
              };
            },
            /* 132 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(10), toObject = __webpack_require__(51), IE_PROTO = __webpack_require__(33)("IE_PROTO"), ObjectProto = Object.prototype;
              module2.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO))
                  return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) {
                  return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectProto : null;
              };
            },
            /* 133 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(17), anObject = __webpack_require__(12);
              var check = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null)
                  throw TypeError(proto + ": can't set as prototype!");
              };
              module2.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? (
                  // eslint-disable-line
                  function(test, buggy, set) {
                    try {
                      set = __webpack_require__(26)(Function.call, __webpack_require__(45).f(Object.prototype, "__proto__").set, 2);
                      set(test, []);
                      buggy = !(test instanceof Array);
                    } catch (e) {
                      buggy = true;
                    }
                    return function setPrototypeOf(O, proto) {
                      check(O, proto);
                      if (buggy)
                        O.__proto__ = proto;
                      else
                        set(O, proto);
                      return O;
                    };
                  }({}, false)
                ) : void 0),
                check
              };
            },
            /* 134 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(35), defined = __webpack_require__(27);
              module2.exports = function(TO_STRING) {
                return function(that, pos) {
                  var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
                  if (i < 0 || i >= l)
                    return TO_STRING ? "" : void 0;
                  a = s.charCodeAt(i);
                  return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
                };
              };
            },
            /* 135 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(35), max = Math.max, min = Math.min;
              module2.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
              };
            },
            /* 136 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(117), ITERATOR = __webpack_require__(5)("iterator"), Iterators = __webpack_require__(18);
              module2.exports = __webpack_require__(6).getIteratorMethod = function(it) {
                if (it != void 0)
                  return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
              };
            },
            /* 137 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var ctx = __webpack_require__(26), $export = __webpack_require__(13), toObject = __webpack_require__(51), call = __webpack_require__(124), isArrayIter = __webpack_require__(122), toLength = __webpack_require__(50), createProperty = __webpack_require__(118), getIterFn = __webpack_require__(136);
              $export($export.S + $export.F * !__webpack_require__(126)(function(iter) {
                Array.from(iter);
              }), "Array", {
                // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                from: function from(arrayLike) {
                  var O = toObject(arrayLike), C = typeof this == "function" ? this : Array, aLen = arguments.length, mapfn = aLen > 1 ? arguments[1] : void 0, mapping = mapfn !== void 0, index = 0, iterFn = getIterFn(O), length, result, step, iterator;
                  if (mapping)
                    mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
                  if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                      createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                  } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                  }
                  result.length = index;
                  return result;
                }
              });
            },
            /* 138 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var addToUnscopables = __webpack_require__(115), step = __webpack_require__(127), Iterators = __webpack_require__(18), toIObject = __webpack_require__(11);
              module2.exports = __webpack_require__(44)(Array, "Array", function(iterated, kind) {
                this._t = toIObject(iterated);
                this._i = 0;
                this._k = kind;
              }, function() {
                var O = this._t, kind = this._k, index = this._i++;
                if (!O || index >= O.length) {
                  this._t = void 0;
                  return step(1);
                }
                if (kind == "keys")
                  return step(0, index);
                if (kind == "values")
                  return step(0, O[index]);
                return step(0, [index, O[index]]);
              }, "values");
              Iterators.Arguments = Iterators.Array;
              addToUnscopables("keys");
              addToUnscopables("values");
              addToUnscopables("entries");
            },
            /* 139 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(13);
              $export($export.S, "Object", { create: __webpack_require__(30) });
            },
            /* 140 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(13);
              $export($export.S + $export.F * !__webpack_require__(9), "Object", { defineProperty: __webpack_require__(8).f });
            },
            /* 141 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(13);
              $export($export.S, "Object", { setPrototypeOf: __webpack_require__(133).set });
            },
            /* 142 */
            /***/
            function(module2, exports2) {
            },
            /* 143 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var global = __webpack_require__(7), has = __webpack_require__(10), DESCRIPTORS = __webpack_require__(9), $export = __webpack_require__(13), redefine = __webpack_require__(49), META = __webpack_require__(129).KEY, $fails = __webpack_require__(22), shared = __webpack_require__(34), setToStringTag = __webpack_require__(32), uid = __webpack_require__(24), wks = __webpack_require__(5), wksExt = __webpack_require__(38), wksDefine = __webpack_require__(37), keyOf = __webpack_require__(128), enumKeys = __webpack_require__(119), isArray = __webpack_require__(123), anObject = __webpack_require__(12), toIObject = __webpack_require__(11), toPrimitive = __webpack_require__(36), createDesc = __webpack_require__(19), _create = __webpack_require__(30), gOPNExt = __webpack_require__(131), $GOPD = __webpack_require__(45), $DP = __webpack_require__(8), $keys = __webpack_require__(23), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
              var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
              var setSymbolDesc = DESCRIPTORS && $fails(function() {
                return _create(dP({}, "a", {
                  get: function() {
                    return dP(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc)
                  delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto)
                  dP(ObjectProto, key, protoDesc);
              } : dP;
              var wrap = function(tag) {
                var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                sym._k = tag;
                return sym;
              };
              var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
                return typeof it == "symbol";
              } : function(it) {
                return it instanceof $Symbol;
              };
              var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto)
                  $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                  if (!D.enumerable) {
                    if (!has(it, HIDDEN))
                      dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                  } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key])
                      it[HIDDEN][key] = false;
                    D = _create(D, { enumerable: createDesc(0, false) });
                  }
                  return setSymbolDesc(it, key, D);
                }
                return dP(it, key, D);
              };
              var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys(P = toIObject(P)), i2 = 0, l = keys.length, key;
                while (l > i2)
                  $defineProperty(it, key = keys[i2++], P[key]);
                return it;
              };
              var $create = function create(it, P) {
                return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
              };
              var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, key = toPrimitive(key, true));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                  return false;
                return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
              };
              var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                  return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
                  D.enumerable = true;
                return D;
              };
              var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it)), result = [], i2 = 0, key;
                while (names.length > i2) {
                  if (!has(AllSymbols, key = names[i2++]) && key != HIDDEN && key != META)
                    result.push(key);
                }
                return result;
              };
              var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i2 = 0, key;
                while (names.length > i2) {
                  if (has(AllSymbols, key = names[i2++]) && (IS_OP ? has(ObjectProto, key) : true))
                    result.push(AllSymbols[key]);
                }
                return result;
              };
              if (!USE_NATIVE) {
                $Symbol = function Symbol2() {
                  if (this instanceof $Symbol)
                    throw TypeError("Symbol is not a constructor!");
                  var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
                  var $set = function(value) {
                    if (this === ObjectProto)
                      $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                      this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                  };
                  if (DESCRIPTORS && setter)
                    setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                  return wrap(tag);
                };
                redefine($Symbol[PROTOTYPE], "toString", function toString() {
                  return this._k;
                });
                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
                __webpack_require__(31).f = $propertyIsEnumerable;
                __webpack_require__(47).f = $getOwnPropertySymbols;
                if (DESCRIPTORS && !__webpack_require__(29)) {
                  redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
                }
                wksExt.f = function(name) {
                  return wrap(wks(name));
                };
              }
              $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
              for (var symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
              ), i = 0; symbols.length > i; )
                wks(symbols[i++]);
              for (var symbols = $keys(wks.store), i = 0; symbols.length > i; )
                wksDefine(symbols[i++]);
              $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
                // 19.4.2.1 Symbol.for(key)
                "for": function(key) {
                  return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                },
                // 19.4.2.5 Symbol.keyFor(sym)
                keyFor: function keyFor(key) {
                  if (isSymbol(key))
                    return keyOf(SymbolRegistry, key);
                  throw TypeError(key + " is not a symbol!");
                },
                useSetter: function() {
                  setter = true;
                },
                useSimple: function() {
                  setter = false;
                }
              });
              $export($export.S + $export.F * !USE_NATIVE, "Object", {
                // 19.1.2.2 Object.create(O [, Properties])
                create: $create,
                // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                defineProperty: $defineProperty,
                // 19.1.2.3 Object.defineProperties(O, Properties)
                defineProperties: $defineProperties,
                // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                // 19.1.2.7 Object.getOwnPropertyNames(O)
                getOwnPropertyNames: $getOwnPropertyNames,
                // 19.1.2.8 Object.getOwnPropertySymbols(O)
                getOwnPropertySymbols: $getOwnPropertySymbols
              });
              $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
                var S = $Symbol();
                return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
              })), "JSON", {
                stringify: function stringify(it) {
                  if (it === void 0 || isSymbol(it))
                    return;
                  var args = [it], i2 = 1, replacer, $replacer;
                  while (arguments.length > i2)
                    args.push(arguments[i2++]);
                  replacer = args[1];
                  if (typeof replacer == "function")
                    $replacer = replacer;
                  if ($replacer || !isArray(replacer))
                    replacer = function(key, value) {
                      if ($replacer)
                        value = $replacer.call(this, key, value);
                      if (!isSymbol(value))
                        return value;
                    };
                  args[1] = replacer;
                  return _stringify.apply($JSON, args);
                }
              });
              $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
              setToStringTag($Symbol, "Symbol");
              setToStringTag(Math, "Math", true);
              setToStringTag(global.JSON, "JSON", true);
            },
            /* 144 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(37)("asyncIterator");
            },
            /* 145 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(37)("observable");
            },
            /* 146 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(138);
              var global = __webpack_require__(7), hide = __webpack_require__(14), Iterators = __webpack_require__(18), TO_STRING_TAG = __webpack_require__(5)("toStringTag");
              for (var collections = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], i = 0; i < 5; i++) {
                var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG])
                  hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
              }
            }
            /******/
          ])
        );
      });
    }
  });

  // node_modules/@hotwired/stimulus/dist/stimulus.js
  var EventListener = class {
    constructor(eventTarget, eventName, eventOptions) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.eventOptions = eventOptions;
      this.unorderedBindings = /* @__PURE__ */ new Set();
    }
    connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
      const extendedEvent = extendEvent(event);
      for (const binding of this.bindings) {
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    }
    hasBindings() {
      return this.unorderedBindings.size > 0;
    }
    get bindings() {
      return Array.from(this.unorderedBindings).sort((left, right) => {
        const leftIndex = left.index, rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  };
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      const { stopImmediatePropagation } = event;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation.call(this);
        }
      });
    }
  }
  var Dispatcher = class {
    constructor(application2) {
      this.application = application2;
      this.eventListenerMaps = /* @__PURE__ */ new Map();
      this.started = false;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach((eventListener) => eventListener.connect());
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach((eventListener) => eventListener.disconnect());
      }
    }
    get eventListeners() {
      return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners)
        this.clearEventListenersForBinding(binding);
    }
    handleError(error2, message, detail = {}) {
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
      const eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
    removeMappedEventListenerFor(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap.delete(cacheKey);
      if (eventListenerMap.size == 0)
        this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      let eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
      const eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
      let eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = /* @__PURE__ */ new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
      const parts = [eventName];
      Object.keys(eventOptions).sort().forEach((key) => {
        parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
      });
      return parts.join(":");
    }
  };
  var defaultActionDescriptorFilters = {
    stop({ event, value }) {
      if (value)
        event.stopPropagation();
      return true;
    },
    prevent({ event, value }) {
      if (value)
        event.preventDefault();
      return true;
    },
    self({ event, value, element }) {
      if (value) {
        return element === event.target;
      } else {
        return true;
      }
    }
  };
  var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
  function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
      eventName += `.${keyFilter}`;
      keyFilter = "";
    }
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName,
      eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
      identifier: matches[5],
      methodName: matches[6],
      keyFilter: matches[1] || keyFilter
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
  }
  function isSomething(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  var allModifiers = ["meta", "ctrl", "alt", "shift"];
  var Action = class {
    constructor(element, index, descriptor, schema) {
      this.element = element;
      this.index = index;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
      this.eventOptions = descriptor.eventOptions || {};
      this.identifier = descriptor.identifier || error("missing identifier");
      this.methodName = descriptor.methodName || error("missing method name");
      this.keyFilter = descriptor.keyFilter || "";
      this.schema = schema;
    }
    static forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
      const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
      const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
      return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      const standardFilter = filters.filter((key) => !allModifiers.includes(key))[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error(`contains unknown key filter: ${this.keyFilter}`);
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
    get params() {
      const params = {};
      const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
      for (const { name, value } of Array.from(this.element.attributes)) {
        const match = name.match(pattern);
        const key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
    get eventTargetName() {
      return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
      return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
      const [meta, ctrl, alt, shift] = allModifiers.map((modifier) => filters.includes(modifier));
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  };
  var defaultEventNames = {
    a: () => "click",
    button: () => "click",
    form: () => "submit",
    details: () => "toggle",
    input: (e) => e.getAttribute("type") == "submit" ? "click" : "input",
    select: () => "change",
    textarea: () => "input"
  };
  function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error(message) {
    throw new Error(message);
  }
  function typecast(value) {
    try {
      return JSON.parse(value);
    } catch (o_O) {
      return value;
    }
  }
  var Binding = class {
    constructor(context, action) {
      this.context = context;
      this.action = action;
    }
    get index() {
      return this.action.index;
    }
    get eventTarget() {
      return this.action.eventTarget;
    }
    get eventOptions() {
      return this.action.eventOptions;
    }
    get identifier() {
      return this.context.identifier;
    }
    handleEvent(event) {
      const actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
    get eventName() {
      return this.action.eventName;
    }
    get method() {
      const method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
      const { element } = this.action;
      const { actionDescriptorFilters } = this.context.application;
      const { controller } = this.context;
      let passes = true;
      for (const [name, value] of Object.entries(this.eventOptions)) {
        if (name in actionDescriptorFilters) {
          const filter = actionDescriptorFilters[name];
          passes = passes && filter({ name, value, event, element, controller });
        } else {
          continue;
        }
      }
      return passes;
    }
    prepareActionEvent(event) {
      return Object.assign(event, { params: this.action.params });
    }
    invokeWithEvent(event) {
      const { target, currentTarget } = event;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
      } catch (error2) {
        const { identifier, controller, element, index } = this;
        const detail = { identifier, controller, element, index, event };
        this.context.handleError(error2, `invoking action "${this.action}"`, detail);
      }
    }
    willBeInvokedByEvent(event) {
      const eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
    get controller() {
      return this.context.controller;
    }
    get methodName() {
      return this.action.methodName;
    }
    get element() {
      return this.scope.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var ElementObserver = class {
    constructor(element, delegate) {
      this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = /* @__PURE__ */ new Set();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
    pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        const matches = new Set(this.matchElementsInTree());
        for (const element of Array.from(this.elements)) {
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (const element of Array.from(matches)) {
          this.addElement(element);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
    processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
    processRemovedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
    processAddedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
    matchElement(element) {
      return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
      return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
      for (const element of this.matchElementsInTree(tree)) {
        processor.call(this, element);
      }
    }
    elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
    elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
    addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
    removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  };
  var AttributeObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
      return this.elementObserver.element;
    }
    get selector() {
      return `[${this.attributeName}]`;
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get started() {
      return this.elementObserver.started;
    }
    matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
      const match = this.matchElement(tree) ? [tree] : [];
      const matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
    elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
    elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
    elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  };
  function add(map, key, value) {
    fetch2(map, key).add(value);
  }
  function del(map, key, value) {
    fetch2(map, key).delete(value);
    prune(map, key);
  }
  function fetch2(map, key) {
    let values = map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = class {
    constructor() {
      this.valuesByKey = /* @__PURE__ */ new Map();
    }
    get keys() {
      return Array.from(this.valuesByKey.keys());
    }
    get values() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((values, set) => values.concat(Array.from(set)), []);
    }
    get size() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((size, set) => size + set.size, 0);
    }
    add(key, value) {
      add(this.valuesByKey, key, value);
    }
    delete(key, value) {
      del(this.valuesByKey, key, value);
    }
    has(key, value) {
      const values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
    hasKey(key) {
      return this.valuesByKey.has(key);
    }
    hasValue(value) {
      const sets = Array.from(this.valuesByKey.values());
      return sets.some((set) => set.has(value));
    }
    getValuesForKey(key) {
      const values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(([_key, values]) => values.has(value)).map(([key, _values]) => key);
    }
  };
  var SelectorObserver = class {
    constructor(element, selector, delegate, details) {
      this._selector = selector;
      this.details = details;
      this.elementObserver = new ElementObserver(element, this);
      this.delegate = delegate;
      this.matchesByElement = new Multimap();
    }
    get started() {
      return this.elementObserver.started;
    }
    get selector() {
      return this._selector;
    }
    set selector(selector) {
      this._selector = selector;
      this.refresh();
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get element() {
      return this.elementObserver.element;
    }
    matchElement(element) {
      const { selector } = this;
      if (selector) {
        const matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
    matchElementsInTree(tree) {
      const { selector } = this;
      if (selector) {
        const match = this.matchElement(tree) ? [tree] : [];
        const matches = Array.from(tree.querySelectorAll(selector)).filter((match2) => this.matchElement(match2));
        return match.concat(matches);
      } else {
        return [];
      }
    }
    elementMatched(element) {
      const { selector } = this;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
    elementUnmatched(element) {
      const selectors = this.matchesByElement.getKeysForValue(element);
      for (const selector of selectors) {
        this.selectorUnmatched(element, selector);
      }
    }
    elementAttributeChanged(element, _attributeName) {
      const { selector } = this;
      if (selector) {
        const matches = this.matchElement(element);
        const matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
    selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement.delete(selector, element);
    }
  };
  var StringMapObserver = class {
    constructor(element, delegate) {
      this.element = element;
      this.delegate = delegate;
      this.started = false;
      this.stringMap = /* @__PURE__ */ new Map();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
        this.refresh();
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        for (const attributeName of this.knownAttributeNames) {
          this.refreshAttribute(attributeName, null);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      const attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
    refreshAttribute(attributeName, oldValue) {
      const key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        const value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          const oldValue2 = this.stringMap.get(attributeName);
          this.stringMap.delete(attributeName);
          if (oldValue2)
            this.stringMapKeyRemoved(key, attributeName, oldValue2);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
    stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
    stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
    get knownAttributeNames() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
      return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
      return Array.from(this.stringMap.keys());
    }
  };
  var TokenListObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    get started() {
      return this.attributeObserver.started;
    }
    start() {
      this.attributeObserver.start();
    }
    pause(callback) {
      this.attributeObserver.pause(callback);
    }
    stop() {
      this.attributeObserver.stop();
    }
    refresh() {
      this.attributeObserver.refresh();
    }
    get element() {
      return this.attributeObserver.element;
    }
    get attributeName() {
      return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
      const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
      tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
      tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
      const previousTokens = this.tokensByElement.getValuesForKey(element);
      const currentTokens = this.readTokensForElement(element);
      const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
    readTokensForElement(element) {
      const attributeName = this.attributeName;
      const tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  };
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content) => content.length).map((content, index) => ({ element, attributeName, content, index }));
  }
  function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({ length }, (_, index) => [left[index], right[index]]);
  }
  function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
  }
  var ValueListObserver = class {
    constructor(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = /* @__PURE__ */ new WeakMap();
      this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
    }
    get started() {
      return this.tokenListObserver.started;
    }
    start() {
      this.tokenListObserver.start();
    }
    stop() {
      this.tokenListObserver.stop();
    }
    refresh() {
      this.tokenListObserver.refresh();
    }
    get element() {
      return this.tokenListObserver.element;
    }
    get attributeName() {
      return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
    tokenUnmatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
    fetchParseResultForToken(token) {
      let parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
    fetchValuesByTokenForElement(element) {
      let valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = /* @__PURE__ */ new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
    parseToken(token) {
      try {
        const value = this.delegate.parseValueForToken(token);
        return { value };
      } catch (error2) {
        return { error: error2 };
      }
    }
  };
  var BindingObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
    stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
    get element() {
      return this.context.element;
    }
    get identifier() {
      return this.context.identifier;
    }
    get actionAttribute() {
      return this.schema.actionAttribute;
    }
    get schema() {
      return this.context.schema;
    }
    get bindings() {
      return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
      const binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
      const binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
    disconnectAllActions() {
      this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
      this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
      const action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
    elementMatchedValue(element, action) {
      this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  };
  var ValueObserver = class {
    constructor(context, receiver) {
      this.context = context;
      this.receiver = receiver;
      this.stringMapObserver = new StringMapObserver(this.element, this);
      this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
      this.stringMapObserver.stop();
    }
    get element() {
      return this.context.element;
    }
    get controller() {
      return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
    stringMapKeyAdded(key, attributeName) {
      const descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
    stringMapValueChanged(value, name, oldValue) {
      const descriptor = this.valueDescriptorNameMap[name];
      if (value === null)
        return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      const descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
    invokeChangedCallbacksForDefaultValues() {
      for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
        if (defaultValue != void 0 && !this.controller.data.has(key)) {
          this.invokeChangedCallback(name, writer(defaultValue), void 0);
        }
      }
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
      const changedMethodName = `${name}Changed`;
      const changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        const descriptor = this.valueDescriptorNameMap[name];
        try {
          const value = descriptor.reader(rawValue);
          let oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error2) {
          if (error2 instanceof TypeError) {
            error2.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error2.message}`;
          }
          throw error2;
        }
      }
    }
    get valueDescriptors() {
      const { valueDescriptorMap } = this;
      return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
      const descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach((key) => {
        const descriptor = this.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
    hasValue(attributeName) {
      const descriptor = this.valueDescriptorNameMap[attributeName];
      const hasMethodName = `has${capitalize(descriptor.name)}`;
      return this.receiver[hasMethodName];
    }
  };
  var TargetObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.targetsByName = new Multimap();
    }
    start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
    stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
    tokenMatched({ element, content: name }) {
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
    tokenUnmatched({ element, content: name }) {
      this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
      }
    }
    disconnectTarget(element, name) {
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
      }
    }
    disconnectAllTargets() {
      for (const name of this.targetsByName.keys) {
        for (const element of this.targetsByName.getValuesForKey(name)) {
          this.disconnectTarget(element, name);
        }
      }
    }
    get attributeName() {
      return `data-${this.context.identifier}-target`;
    }
    get element() {
      return this.context.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var OutletObserver = class {
    constructor(context, delegate) {
      this.started = false;
      this.context = context;
      this.delegate = delegate;
      this.outletsByName = new Multimap();
      this.outletElementsByName = new Multimap();
      this.selectorObserverMap = /* @__PURE__ */ new Map();
      this.attributeObserverMap = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.started) {
        this.outletDefinitions.forEach((outletName) => {
          this.setupSelectorObserverForOutlet(outletName);
          this.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach((context) => context.refresh());
      }
    }
    refresh() {
      this.selectorObserverMap.forEach((observer) => observer.refresh());
      this.attributeObserverMap.forEach((observer) => observer.refresh());
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
    stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach((observer) => observer.stop());
        this.selectorObserverMap.clear();
      }
    }
    stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach((observer) => observer.stop());
        this.attributeObserverMap.clear();
      }
    }
    selectorMatched(element, _selector, { outletName }) {
      const outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
    selectorUnmatched(element, _selector, { outletName }) {
      const outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
    selectorMatchElement(element, { outletName }) {
      const selector = this.selector(outletName);
      const hasOutlet = this.hasOutlet(element, outletName);
      const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
    elementMatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementAttributeValueChanged(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementUnmatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    connectOutlet(outlet, element, outletName) {
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
      }
    }
    disconnectOutlet(outlet, element, outletName) {
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.delete(outletName, outlet);
        this.outletElementsByName.delete(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
      }
    }
    disconnectAllOutlets() {
      for (const outletName of this.outletElementsByName.keys) {
        for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
          for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
            this.disconnectOutlet(outlet, element, outletName);
          }
        }
      }
    }
    updateSelectorObserverForOutlet(outletName) {
      const observer = this.selectorObserverMap.get(outletName);
      if (observer) {
        observer.selector = this.selector(outletName);
      }
    }
    setupSelectorObserverForOutlet(outletName) {
      const selector = this.selector(outletName);
      const selectorObserver = new SelectorObserver(document.body, selector, this, { outletName });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
      const attributeName = this.attributeNameForOutletName(outletName);
      const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
    selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
      return this.outletDefinitions.find((outletName) => this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
      const dependencies = new Multimap();
      this.router.modules.forEach((module) => {
        const constructor = module.definition.controllerConstructor;
        const outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
      });
      return dependencies;
    }
    get outletDefinitions() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
      const identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
    }
    get scope() {
      return this.context.scope;
    }
    get schema() {
      return this.context.schema;
    }
    get identifier() {
      return this.context.identifier;
    }
    get application() {
      return this.context.application;
    }
    get router() {
      return this.application.router;
    }
  };
  var Context = class {
    constructor(module, scope) {
      this.logDebugActivity = (functionName, detail = {}) => {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.logDebugActivity(this.identifier, functionName, detail);
      };
      this.module = module;
      this.scope = scope;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      this.valueObserver = new ValueObserver(this, this.controller);
      this.targetObserver = new TargetObserver(this, this);
      this.outletObserver = new OutletObserver(this, this);
      try {
        this.controller.initialize();
        this.logDebugActivity("initialize");
      } catch (error2) {
        this.handleError(error2, "initializing controller");
      }
    }
    connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error2) {
        this.handleError(error2, "connecting controller");
      }
    }
    refresh() {
      this.outletObserver.refresh();
    }
    disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error2) {
        this.handleError(error2, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
    get application() {
      return this.module.application;
    }
    get identifier() {
      return this.module.identifier;
    }
    get schema() {
      return this.application.schema;
    }
    get dispatcher() {
      return this.application.dispatcher;
    }
    get element() {
      return this.scope.element;
    }
    get parentElement() {
      return this.element.parentElement;
    }
    handleError(error2, message, detail = {}) {
      const { identifier, controller, element } = this;
      detail = Object.assign({ identifier, controller, element }, detail);
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
      this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
      this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
      const controller = this.controller;
      if (typeof controller[methodName] == "function") {
        controller[methodName](...args);
      }
    }
  };
  function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
  }
  function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
  }
  function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
      const properties = blessing(constructor);
      for (const key in properties) {
        const descriptor = blessedProperties[key] || {};
        blessedProperties[key] = Object.assign(descriptor, properties[key]);
      }
      return blessedProperties;
    }, {});
  }
  function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
      const descriptor = getShadowedDescriptor(prototype, properties, key);
      if (descriptor) {
        Object.assign(shadowProperties, { [key]: descriptor });
      }
      return shadowProperties;
    }, {});
  }
  function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
      const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
      if (shadowingDescriptor) {
        descriptor.get = shadowingDescriptor.get || descriptor.get;
        descriptor.set = shadowingDescriptor.set || descriptor.set;
      }
      return descriptor;
    }
  }
  var getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: bless(definition.controllerConstructor)
    };
  }
  var Module = class {
    constructor(application2, definition) {
      this.application = application2;
      this.definition = blessDefinition(definition);
      this.contextsByScope = /* @__PURE__ */ new WeakMap();
      this.connectedContexts = /* @__PURE__ */ new Set();
    }
    get identifier() {
      return this.definition.identifier;
    }
    get controllerConstructor() {
      return this.definition.controllerConstructor;
    }
    get contexts() {
      return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
      const context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
    disconnectContextForScope(scope) {
      const context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
    fetchContextForScope(scope) {
      let context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  };
  var ClassMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    has(name) {
      return this.data.has(this.getDataKey(name));
    }
    get(name) {
      return this.getAll(name)[0];
    }
    getAll(name) {
      const tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
    getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
      return `${name}-class`;
    }
    get data() {
      return this.scope.data;
    }
  };
  var DataMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
    set(key, value) {
      const name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
    has(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
    delete(key) {
      if (this.has(key)) {
        const name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
    getAttributeNameForKey(key) {
      return `data-${this.identifier}-${dasherize(key)}`;
    }
  };
  var Guide = class {
    constructor(logger) {
      this.warnedKeysByObject = /* @__PURE__ */ new WeakMap();
      this.logger = logger;
    }
    warn(object, key, message) {
      let warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = /* @__PURE__ */ new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  };
  function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
  }
  var TargetSet = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(targetName) {
      return this.find(targetName) != null;
    }
    find(...targetNames) {
      return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), void 0);
    }
    findAll(...targetNames) {
      return targetNames.reduce((targets, targetName) => [
        ...targets,
        ...this.findAllTargets(targetName),
        ...this.findAllLegacyTargets(targetName)
      ], []);
    }
    findTarget(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
      const attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
      const targetDescriptor = `${this.identifier}.${targetName}`;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
      if (element) {
        const { identifier } = this;
        const attributeName = this.schema.targetAttribute;
        const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
      }
      return element;
    }
    get guide() {
      return this.scope.guide;
    }
  };
  var OutletSet = class {
    constructor(scope, controllerElement) {
      this.scope = scope;
      this.controllerElement = controllerElement;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(outletName) {
      return this.find(outletName) != null;
    }
    find(...outletNames) {
      return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), void 0);
    }
    findAll(...outletNames) {
      return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
    }
    getSelectorForOutletName(outletName) {
      const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      if (selector)
        return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
      const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  };
  var Scope = class _Scope {
    constructor(schema, element, identifier, logger) {
      this.targets = new TargetSet(this);
      this.classes = new ClassMap(this);
      this.data = new DataMap(this);
      this.containsElement = (element2) => {
        return element2.closest(this.controllerSelector) === this.element;
      };
      this.schema = schema;
      this.element = element;
      this.identifier = identifier;
      this.guide = new Guide(logger);
      this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
      return [
        ...this.element.matches(selector) ? [this.element] : [],
        ...this.queryElements(selector).filter(this.containsElement)
      ];
    }
    queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
      return this.element === document.documentElement;
    }
    get documentScope() {
      return this.isDocumentScope ? this : new _Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  };
  var ScopeObserver = class {
    constructor(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap();
      this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
    }
    start() {
      this.valueListObserver.start();
    }
    stop() {
      this.valueListObserver.stop();
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
      const { element, content: identifier } = token;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
      const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      let scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
    elementMatchedValue(element, value) {
      const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
    elementUnmatchedValue(element, value) {
      const referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
    fetchScopesByIdentifierForElement(element) {
      let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = /* @__PURE__ */ new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  };
  var Router = class {
    constructor(application2) {
      this.application = application2;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = /* @__PURE__ */ new Map();
    }
    get element() {
      return this.application.element;
    }
    get schema() {
      return this.application.schema;
    }
    get logger() {
      return this.application.logger;
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    get modules() {
      return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
      return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
      this.scopeObserver.start();
    }
    stop() {
      this.scopeObserver.stop();
    }
    loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      const module = new Module(this.application, definition);
      this.connectModule(module);
      const afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
    unloadIdentifier(identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
    getContextForElementAndIdentifier(element, identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find((context) => context.element == element);
      }
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      const scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope) {
        this.scopeObserver.elementMatchedValue(scope.element, scope);
      } else {
        console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
      }
    }
    handleError(error2, message, detail) {
      this.application.handleError(error2, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
    scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
    connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.connectContextForScope(scope));
    }
    disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.disconnectContextForScope(scope));
    }
  };
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  var Application = class {
    constructor(element = document.documentElement, schema = defaultSchema) {
      this.logger = console;
      this.debug = false;
      this.logDebugActivity = (identifier, functionName, detail = {}) => {
        if (this.debug) {
          this.logFormattedMessage(identifier, functionName, detail);
        }
      };
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
      this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
      const application2 = new this(element, schema);
      application2.start();
      return application2;
    }
    async start() {
      await domReady();
      this.logDebugActivity("application", "starting");
      this.dispatcher.start();
      this.router.start();
      this.logDebugActivity("application", "start");
    }
    stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
      this.load({ identifier, controllerConstructor });
    }
    registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
      const definitions = Array.isArray(head) ? head : [head, ...rest];
      definitions.forEach((definition) => {
        if (definition.controllerConstructor.shouldLoad) {
          this.router.loadDefinition(definition);
        }
      });
    }
    unload(head, ...rest) {
      const identifiers = Array.isArray(head) ? head : [head, ...rest];
      identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
      return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
      const context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
    handleError(error2, message, detail) {
      var _a;
      this.logger.error(`%s

%o

%o`, message, error2, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error2);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
      detail = Object.assign({ application: this }, detail);
      this.logger.groupCollapsed(`${identifier} #${functionName}`);
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  };
  function domReady() {
    return new Promise((resolve) => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve());
      } else {
        resolve();
      }
    });
  }
  function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
  }
  function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
      return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant(type);
      if (constantFromType)
        return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
      type,
      key,
      name: camelize(key),
      get defaultValue() {
        return defaultValueForDefinition(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault(typeDefinition) !== void 0;
      },
      reader: readers[type],
      writer: writers[type] || writers.default
    };
  }
  var defaultValuesByType = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
  };
  function writeJSON(value) {
    return JSON.stringify(value);
  }
  function writeString(value) {
    return `${value}`;
  }
  var Controller = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing
  ];
  Controller.targets = [];
  Controller.outlets = [];
  Controller.values = {};

  // app/javascript/controllers/application.js
  var application = Application.start();
  application.debug = false;
  window.Stimulus = application;

  // node_modules/stimulus/dist/stimulus.js
  function camelize2(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize2(value) {
    return camelize2(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize2(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize2(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function isSomething2(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty2(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  function readInheritableStaticArrayValues2(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor2(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues2(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs2(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor2(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs2(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor2(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues2(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs2(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var getOwnKeys2 = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend2 = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  var defaultSchema2 = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries2("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries2("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries2(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  function ClassPropertiesBlessing2(constructor) {
    const classes = readInheritableStaticArrayValues2(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition2(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition2(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize2(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing2(constructor) {
    const outlets = readInheritableStaticArrayValues2(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition2(outletDefinition));
    }, {});
  }
  function getOutletController2(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope2(controller, element, outletName) {
    let outletController = getOutletController2(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController2(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition2(name) {
    const camelizedName = namespaceCamelize2(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope2(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope2(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize2(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing2(constructor) {
    const targets = readInheritableStaticArrayValues2(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition2(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition2(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize2(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing2(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs2(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair2(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair2(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair2(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair2(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize2(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair2([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition2({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant2(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault2(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject2(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething2(typeObject.type);
    const hasDefault = isSomething2(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant2(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault2(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition2(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject2(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault2(typeDefinition);
    const typeFromConstant = parseValueTypeConstant2(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition2(typeDefinition) {
    const constant = parseValueTypeConstant2(typeDefinition);
    if (constant)
      return defaultValuesByType2[constant];
    const hasDefault = hasProperty2(typeDefinition, "default");
    const hasType = hasProperty2(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant2(type);
      if (constantFromType)
        return defaultValuesByType2[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition2(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize2(token)}-value`;
    const type = parseValueTypeDefinition2(payload);
    return {
      type,
      key,
      name: camelize2(key),
      get defaultValue() {
        return defaultValueForDefinition2(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault2(typeDefinition) !== void 0;
      },
      reader: readers2[type],
      writer: writers2[type] || writers2.default
    };
  }
  var defaultValuesByType2 = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers2 = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault2(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault2(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers2 = {
    default: writeString2,
    array: writeJSON2,
    object: writeJSON2
  };
  function writeJSON2(value) {
    return JSON.stringify(value);
  }
  function writeString2(value) {
    return `${value}`;
  }
  var Controller2 = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller2.blessings = [
    ClassPropertiesBlessing2,
    TargetPropertiesBlessing2,
    ValuePropertiesBlessing2,
    OutletPropertiesBlessing2
  ];
  Controller2.targets = [];
  Controller2.outlets = [];
  Controller2.values = {};

  // app/javascript/controllers/draggable_controller.js
  var import_draggable = __toESM(require_draggable());
  var draggable_controller_default = class extends Controller2 {
    static targets = ["column", "item"];
    initialize() {
    }
    connect() {
      if (this.hasItemTarget) {
        const sortable = new import_draggable.Sortable(this.columnTargets, {
          draggable: "li",
          mirror: {
            constrainDimensions: true,
            cursorOffsetX: 0,
            cursorOffsetY: 0
          }
        });
        this.itemTargets.forEach((item) => {
          item.setAttribute("style", "z-index: 1000;");
          sortable.on("drag:move", function() {
            console.log(item);
            item.setAttribute("style", "display: none;");
          });
        });
        sortable.on("sortable:stop", function(event) {
          let url = event.dragEvent.source.getAttribute("data-url");
          let column = event.newContainer.getAttribute("data-id");
          let data = { item: { column_id: column } };
          let token = document.head.querySelector('meta[name="csrf-token"]').getAttribute("content");
          fetch(url, {
            method: "PUT",
            credentials: "same-origin",
            headers: {
              "X-CSRF-Token": token,
              "Accept": "application/json",
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          });
        });
      }
    }
    disconnect() {
    }
  };

  // app/javascript/controllers/dynamic_select_controller.js
  var dynamic_select_controller_default = class extends Controller2 {
    static targets = ["select", "choice", "long", "short"];
    connect() {
      this.selected();
    }
    selected() {
      this.hideFields();
      switch (this.selectTarget.value) {
        case "single_choice":
          this.choiceTarget.classList.remove("hidden");
          break;
        case "multiple_choice":
          this.choiceTarget.classList.remove("hidden");
          break;
        case "long_answer":
          this.longTarget.classList.remove("hidden");
          break;
        case "short_answer":
          this.longTarget.classList.remove("hidden");
          break;
      }
    }
    hideFields() {
      this.choiceTarget.classList.add("hidden");
      this.longTarget.classList.add("hidden");
    }
  };

  // app/javascript/controllers/hello_controller.js
  var hello_controller_default = class extends Controller {
    connect() {
      this.element.textContent = "Hello World!";
    }
  };

  // app/javascript/controllers/nested_form_controller.js
  var nested_form_controller_default = class extends Controller2 {
    static targets = ["add_item", "template"];
    static values = { index: String };
    add_association(event) {
      event.preventDefault();
      var content = this.templateTarget.innerHTML.replace(new RegExp(this.indexValue, "g"), (/* @__PURE__ */ new Date()).valueOf());
      this.add_itemTarget.insertAdjacentHTML("beforebegin", content);
    }
    remove_association(event) {
      event.preventDefault();
      let item = event.target.closest(".nested-fields");
      item.querySelector("input[name*='_destroy']").value = 1;
      item.style.display = "none";
    }
  };

  // app/javascript/controllers/index.js
  application.register("draggable", draggable_controller_default);
  application.register("dynamic-select", dynamic_select_controller_default);
  application.register("hello", hello_controller_default);
  application.register("nested-form", nested_form_controller_default);
})();

