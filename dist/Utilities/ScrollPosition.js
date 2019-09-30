"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollPosition = /** @class */ (function () {
    function ScrollPosition(element) {
        if (element === void 0) { element = window; }
        this.element = element;
    }
    ScrollPosition.prototype.get = function () {
        if (this.element instanceof Window) {
            return {
                x: this.element.pageXOffset,
                y: this.element.pageYOffset
            };
        }
        return {
            x: this.element.scrollLeft,
            y: this.element.scrollTop
        };
    };
    return ScrollPosition;
}());
exports.ScrollPosition = ScrollPosition;
//# sourceMappingURL=ScrollPosition.js.map