"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = function (fn, ms, immediate) {
    if (ms === void 0) { ms = 0; }
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) {
                fn.apply(_this, args);
            }
        }, ms);
        if (immediate && !timeout) {
            fn.apply(_this, __spreadArrays(args));
        }
    };
};
exports.debounce = debounce;
var throttle = function (func, ms) {
    var lastFunc;
    var lastRan;
    return function () {
        var context = this;
        var args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= ms) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, ms - (Date.now() - lastRan));
        }
    };
};
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map