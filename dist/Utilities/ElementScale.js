"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var ElementScale = /** @class */ (function () {
    function ElementScale() {
    }
    ElementScale.prototype.Execute = function () {
        this.scaleRightElements = ArrayUtil_1.default.FromNodeList(document.querySelectorAll("[class*='scale-']"));
        this.Init();
        this.ScaleRight();
    };
    ElementScale.prototype.Init = function () {
        this.documentWdthOffset = document.documentElement.getBoundingClientRect().right;
    };
    ElementScale.prototype.ScaleRight = function () {
        var _this = this;
        this.scaleRightElements.forEach(function (element) {
            var elementRight = element.getBoundingClientRect().right;
            var spaceToEdge = _this.documentWdthOffset - elementRight;
            var ratio = (spaceToEdge / element.offsetWidth) + 1;
            element.style.transform = "scaleX(" + ratio + ")";
        });
    };
    return ElementScale;
}());
exports.default = ElementScale;
//# sourceMappingURL=ElementScale.js.map