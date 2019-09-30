"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyUtility = /** @class */ (function () {
    function CopyUtility() {
    }
    CopyUtility.deepCopy = function (destination, source) {
        for (var key in source) {
            if (destination.hasOwnProperty(key)) {
                if (destination[key] instanceof Object) {
                    this.deepCopy(destination[key], source[key]);
                }
                else {
                    destination[key] = source[key];
                }
            }
            else {
                destination[key] = source[key];
            }
        }
    };
    return CopyUtility;
}());
exports.CopyUtility = CopyUtility;
//# sourceMappingURL=Copy Utility.js.map