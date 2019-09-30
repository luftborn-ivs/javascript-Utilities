"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.StringFormat = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return str.replace(/{(\d+)}/g, function (match, index) { return args[index] || ''; });
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
//# sourceMappingURL=StringUtil.js.map