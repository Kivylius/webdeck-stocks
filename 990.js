(self['webpackChunkwebdeck_stocks'] = self['webpackChunkwebdeck_stocks'] || []).push([["990"], {
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"697"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"251");
}),
"130": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  init: function() { return init; },
  manifest: function() { return manifest; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"697");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */"498");
/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */"419");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
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
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




 var init = function() {
    var _ref = _async_to_generator(function(param) {
        var drawKey, getConfig, fetchDataAndDraw, interval;
        return _ts_generator(this, function(_state) {
            drawKey = param.drawKey, getConfig = param.getConfig;
            fetchDataAndDraw = function() {
                var _ref = _async_to_generator(function() {
                    var _getConfig, symbol, market, type, timeframe, fn, result, nextResult, len, trend;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _getConfig = getConfig(), symbol = _getConfig.symbol, market = _getConfig.market, type = _getConfig.type, timeframe = _getConfig.timeframe;
                                fn = type == "stocks" ? "TIME_SERIES_DAILY" : "DIGITAL_CURRENCY_DAILY";
                                return [
                                    4,
                                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getData)({
                                        fn: fn,
                                        symbol: symbol,
                                        market: market,
                                        type: type
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                len = result.arr.length;
                                switch(timeframe){
                                    case "3m":
                                        nextResult = result;
                                        nextResult.arr = nextResult.arr.slice(len - 90, len);
                                        break;
                                    case "m":
                                        nextResult = result;
                                        nextResult.arr = nextResult.arr.slice(len - 30, len);
                                        break;
                                    case "w":
                                        nextResult = result;
                                        nextResult.arr = nextResult.arr.slice(len - 7, len);
                                        break;
                                    default:
                                        nextResult = result;
                                }
                                trend = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.trend_value)(nextResult.arr);
                                drawKey(function(arg) {
                                    return (0, _utils__WEBPACK_IMPORTED_MODULE_3__.tickerUI)(arg, nextResult, trend);
                                });
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function fetchDataAndDraw() {
                    return _ref.apply(this, arguments);
                };
            }();
            fetchDataAndDraw();
            interval = setInterval(/*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    fetchDataAndDraw();
                    return [
                        2
                    ];
                });
            }), 3456000); // every 1 hour
            return [
                2,
                function() {
                    clearInterval(interval);
                }
            ];
        });
    });
    return function init(_) {
        return _ref.apply(this, arguments);
    };
}();
 var manifest = {
    version: 1,
    bespoke: true
};
var App = function(param) {
    var config = param.config, setConfig = param.setConfig;
    var _symbols_config_type;
    var onChange = function(e) {
        return setConfig(_object_spread_props(_object_spread({}, config), _define_property({}, e.target.name, e.target.value)));
    };
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "webdeck-plugin",
        style: {
            background: "purple"
        },
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                className: "webdeck-title",
                children: "Webdeck Stocks Plugin"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "webdeck-setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "type",
                        children: "type: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: true,
                        name: "type",
                        onChange: onChange,
                        value: config.type || "",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "",
                                disabled: true,
                                hidden: true,
                                children: "select..."
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "crypto",
                                children: "crypto "
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "stocks",
                                disabled: true,
                                children: "stocks"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "webdeck-setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "symbol",
                        children: "symbol: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: true,
                        name: "symbol",
                        onChange: onChange,
                        value: config.symbol || "",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "",
                                disabled: true,
                                hidden: true,
                                children: "select..."
                            }),
                            (_symbols_config_type = _data__WEBPACK_IMPORTED_MODULE_2__.symbols[config === null || config === void 0 ? void 0 : config.type]) === null || _symbols_config_type === void 0 ? void 0 : _symbols_config_type.map(function(s) {
                                return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                    value: s.split(",")[0],
                                    children: s.split(",")[1]
                                }, s);
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "webdeck-setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "market",
                        children: "market: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: true,
                        name: "market",
                        onChange: onChange,
                        value: config.market || "",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "",
                                disabled: true,
                                hidden: true,
                                children: "select..."
                            }),
                            _data__WEBPACK_IMPORTED_MODULE_2__.markets.map(function(m) {
                                return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                    value: m.split(",")[0],
                                    children: m.split(",")[1]
                                }, m);
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "webdeck-setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "type",
                        children: "timeframe: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: true,
                        name: "timeframe",
                        onChange: onChange,
                        value: config.timeframe || "",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "",
                                disabled: true,
                                hidden: true,
                                children: "year"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "y",
                                children: "year"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "3m",
                                children: "quarter"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "m",
                                children: "month"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: "w",
                                children: "week"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),
"498": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  markets: function() { return markets; },
  symbols: function() { return symbols; }
});
 var markets = [
    "AUD,Australian Dollar",
    "CAD,Canadian Dollar",
    "CHF,Swiss Franc",
    "CNY,Chinese Yuan",
    "EUR,Euro",
    "GBP,British Pound Sterling",
    "RUB,Russian Ruble",
    "USD,United States Dollar"
];
 var symbols = {
    stocks: [
        "AAPL,Apple Inc",
        "ADBE,Adobe Inc",
        "AMD,Advanced Micro Devices, Inc",
        "AMZN,Amazon.com, Inc",
        "ASML,ASML Holding N.V",
        "AVGO,Broadcom Inc",
        "COST,Costco Wholesale Corporation",
        "CSCO,Cisco Systems, Inc",
        "GOOG,Alphabet Inc. (Class C)",
        "GOOGL Alphabet Inc. (Class A)",
        "INTC,Intel Corporation",
        "META,Meta Platforms Inc",
        "MSFT,Microsoft Corporation",
        "NFLX,Netflix Inc",
        "NVDA,NVIDIA Corporation",
        "PEP,PepsiCo Inc.",
        "PYPL,PayPal Holdings Inc",
        "QCOM,Qualcomm Incorporated",
        "TSLA,Tesla Inc",
        "TXN,Texas Instruments Incorporated"
    ],
    crypto: [
        "AAVE,Aave",
        "ADA,Cardano",
        "ATOM,Cosmos",
        "AVAX,Avalanche",
        "BNB,Binance-Coin",
        "BTC,Bitcoin",
        "BUSD,Binance-USD",
        "CAKE,PancakeSwap",
        "COMP,Compound",
        "DAI,Dai",
        "DASH,Dash",
        "DOGE,DogeCoin",
        "DOT,Polkadot",
        "ELIX,Elixir",
        "EOS,EOS",
        "ETH,Ethereum",
        "LINK,ChainLink",
        "LTC,Litecoin",
        "MATIC,Polygon",
        "NEO,NEO",
        "UNI,Uniswap",
        "UST,TerraUSD",
        "XRP,Ripple",
        "XZC,ZCoin"
    ]
};
}),
"419": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getData: function() { return getData; },
  tickerUI: function() { return tickerUI; },
  trend_value: function() { return trend_value; }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var keys = {
    data: "Time Series (Digital Currency Daily)",
    value: "4. close",
    meta: "Meta Data",
    a: "2. Digital Currency Code",
    b: "4. Market Code"
};
var parseData = function(data) {
    var parsedData = {};
    console.log("DDDATRAA", data);
    try {
        var meta = data[keys.meta];
        parsedData.name = "".concat(meta[keys.a], "-").concat(meta[keys.b]);
        parsedData.data = data[keys.data];
        parsedData.arr = Object.values(parsedData.data).map(function(value) {
            var price = parseInt(value[keys.value]);
            return price;
        }).reverse();
        console.log({
            F: true,
            parsedData: parsedData
        });
        return parsedData;
    } catch (e) {
        return parsedData;
    }
};
var DB = sessionStorage.getItem("stockdb");
 var getData = function(param) {
    var type = param.type, fn = param.fn, symbol = param.symbol, market = param.market;
    return new Promise(function() {
        var _ref = _async_to_generator(function(resolve, reject) {
            var url, result, data, parsedData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        switch(type){
                            case "stocks":
                                return [
                                    3,
                                    1
                                ];
                            case "crypto":
                                return [
                                    3,
                                    2
                                ];
                        }
                        return [
                            3,
                            5
                        ];
                    case 1:
                        resolve({});
                        return [
                            3,
                            6
                        ];
                    case 2:
                        if (DB) return [
                            2,
                            resolve(JSON.parse(DB))
                        ];
                        url = "https://www.alphavantage.co/query?function=".concat(fn, "&symbol=").concat(symbol, "&market=").concat(market, '&apikey=BSYOR5SXYSHVA229"');
                        return [
                            4,
                            fetch(url)
                        ];
                    case 3:
                        result = _state.sent();
                        return [
                            4,
                            result.json()
                        ];
                    case 4:
                        data = _state.sent();
                        console.log("crypto data", data);
                        parsedData = parseData(data);
                        sessionStorage.setItem("stockdb", JSON.stringify(parsedData));
                        resolve(parsedData);
                        return [
                            3,
                            6
                        ];
                    case 5:
                        reject({});
                        _state.label = 6;
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
        return function(resolve, reject) {
            return _ref.apply(this, arguments);
        };
    }());
};
 var tickerUI = function(param, data, num) {
    var canvas = param.canvas, ctx = param.ctx;
    // draw grapgh
    drawGraph(ctx, data.arr, num);
    // draw title
    drawCenterText(ctx, canvas, parseFloat(data.arr[data.arr.length - 1]).toFixed(2));
    // drop top tilte
    drawTopText(ctx, canvas, data.name);
};
var drawGraph = function(ctx, dataArrInput, num) {
    var GRAPH_TOP = 50;
    var GRAPH_BOTTOM = 52;
    var GRAPH_LEFT = 5;
    var GRAPH_RIGHT = 70;
    var GRAPH_HEIGHT = 22;
    var GRAPH_WIDTH = 72;
    var dataArr = dataArrInput || [
        6,
        8,
        10,
        12,
        11,
        7,
        5,
        8,
        11,
        5,
        2,
        3,
        4,
        6
    ];
    var arrayLen = dataArr.length;
    // calculate largest piece of data
    var largest = 0;
    for(var i = 0; i < arrayLen; i++)if (dataArr[i] > largest) largest = dataArr[i];
    ctx.beginPath();
    // make your graph look less jagged
    ctx.lineJoin = "round";
    ctx.strokeStyle = num > 0 ? "green" : "red";
    // add first point in the graph
    ctx.moveTo(GRAPH_LEFT, GRAPH_HEIGHT - dataArr[0] / largest * GRAPH_HEIGHT + GRAPH_TOP);
    // loop over data and add points starting from the 2nd index in the array as the first has been added already
    for(var i = 1; i < arrayLen; i++)ctx.lineTo(GRAPH_RIGHT / arrayLen * i + GRAPH_LEFT, GRAPH_HEIGHT - dataArr[i] / largest * GRAPH_HEIGHT + GRAPH_TOP);
    // actually draw the graph
    ctx.stroke();
};
var drawCenterText = function(ctx, canvas, price) {
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    var textString = price, textWidth = ctx.measureText(textString).width;
    ctx.fillText(textString, canvas.width / 2 - textWidth / 2, canvas.height / 2 + 5, canvas.width);
};
var drawTopText = function(ctx, canvas, title) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "10px sans-serif";
    var textString = title, textWidth = ctx.measureText(textString).width;
    ctx.fillText(textString, canvas.width / 2 - textWidth / 2, 15, canvas.width);
};
 var trend_value = function trend_value(nums) {
    var summed_nums = nums.reduce(function(a, b) {
        return parseFloat(a) + parseFloat(b);
    }); //sum(nums)
    var multiplied_data = 0;
    var summed_index = 0;
    var squared_index = 0;
    nums.forEach(function(num, index) {
        //for index, num in enumerate(nums):
        index += 1;
        multiplied_data += index * parseFloat(num);
        summed_index += index;
        squared_index += Math.pow(index, 2);
    });
    var numerator = nums.length * multiplied_data - summed_nums * summed_index;
    var denominator = nums.length * squared_index - Math.pow(summed_index, 2);
    if (denominator != 0) return numerator / denominator;
    else return 0;
};
}),

}]);
//# sourceMappingURL=990.js.map