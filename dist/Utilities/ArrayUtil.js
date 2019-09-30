"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.FromNodeList = function (list) {
        return Array.prototype.concat.apply([], list);
    };
    return ArrayUtil;
}());
exports.default = ArrayUtil;
//# sourceMappingURL=ArrayUtil.js.map