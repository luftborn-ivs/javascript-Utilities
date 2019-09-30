"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserUtil = /** @class */ (function () {
    function BrowserUtil() {
    }
    BrowserUtil.prototype.supportWebp = function () {
        var canvas = typeof document === 'object' ? document.createElement('canvas') : {};
        canvas.width = canvas.height = 1;
        var index = canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
        return index;
    };
    return BrowserUtil;
}());
exports.default = BrowserUtil;
//# sourceMappingURL=BrowserUtil.js.map