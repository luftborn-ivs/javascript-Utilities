"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debouncer = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    var args;
    var context;
    var result;
    var later = function () {
        timeout = null;
        if (!immediate) {
            result = func.apply(context, args);
            context = args = null;
        }
    };
    var debouncedFunc = function () {
        context = this;
        args = arguments;
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = window.setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
    var clear = function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    var flush = function () {
        if (timeout) {
            result = func.apply(context, args);
            context = args = null;
            clearTimeout(timeout);
            timeout = null;
        }
    };
    var debounced = (function () {
        var f = debouncedFunc;
        f.clear = clear;
        f.flush = flush;
        return f;
    })();
    return debounced;
};
exports.default = debouncer;
//# sourceMappingURL=Debouncer.js.map