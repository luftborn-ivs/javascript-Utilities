"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewportUtil = /** @class */ (function () {
    function ViewportUtil(element) {
        if (element === void 0) { element = null; }
        this.element = element;
    }
    ViewportUtil.prototype.IsVisible = function () {
        var bounds = this.element.getBoundingClientRect();
        return (((bounds.top > 0 && bounds.top < innerHeight) ||
            (bounds.bottom > 0 && bounds.bottom < innerHeight)) &&
            ((bounds.left > 0 && bounds.left < innerWidth) ||
                (bounds.right > 0 && bounds.right < innerWidth)));
    };
    ViewportUtil.prototype.IsPartiallyVisible = function () {
        var bounds = this.element.getBoundingClientRect();
        return (bounds.top >= 0 ||
            bounds.left >= 0 ||
            bounds.bottom <= innerHeight ||
            bounds.right <= innerWidth);
    };
    ViewportUtil.prototype.IsOffsetVisible = function (offset) {
        if (offset === void 0) { offset = 300; }
        var bounds = this.element.getBoundingClientRect();
        // tslint:disable-next-line: max-line-length
        return (bounds.top + offset >= 0 ||
            bounds.left + offset >= 0 ||
            bounds.bottom - offset <= innerHeight ||
            bounds.right - offset <= innerWidth);
    };
    ViewportUtil.prototype.WindowTop = function (offset) {
        if (offset === void 0) { offset = 0; }
        var YOffset = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        return offset <= YOffset;
    };
    return ViewportUtil;
}());
exports.ViewportUtil = ViewportUtil;
//# sourceMappingURL=ViewportUtil.js.map