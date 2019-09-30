"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalDomUtil = /** @class */ (function () {
    function GlobalDomUtil(elements) {
        if (elements === void 0) { elements = null; }
        if (elements)
            this.elements = [].slice.call(elements);
    }
    GlobalDomUtil.prototype.show = function () {
        this.elements.forEach(function (element) { return (element.style.display = ''); });
    };
    GlobalDomUtil.prototype.hide = function () {
        this.elements.forEach(function (e) { return (e.style.display = 'none'); });
    };
    return GlobalDomUtil;
}());
exports.default = GlobalDomUtil;
//# sourceMappingURL=GlobalDomUtil.js.map