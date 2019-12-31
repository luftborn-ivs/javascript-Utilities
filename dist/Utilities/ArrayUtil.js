"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.FromNodeList = function (list) {
        return Array.prototype.concat.apply([], list);
    };
    ArrayUtil.divideAccordingProperty = function (points, selector) {
        var _this = this;
        var chunks = [];
        points.reduce(function (a, b) {
            if (selector(a) === selector(b)) {
                _this.addToCurrent(chunks, selector(b));
            }
            else {
                _this.addToNew(chunks, selector(b));
            }
            return b;
        });
        return chunks;
    };
    ArrayUtil.addToCurrent = function (chunks, item) {
        if (!chunks.length) {
            chunks[0] = [];
        }
        chunks[0].push(item);
    };
    ArrayUtil.addToNew = function (chunks, item) {
        chunks[chunks.length] = new Array();
        chunks[chunks.length].push(item);
    };
    return ArrayUtil;
}());
exports.default = ArrayUtil;
//# sourceMappingURL=ArrayUtil.js.map