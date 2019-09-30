"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomUtil_1 = require("./DomUtil");
var ViewportUtil_1 = require("./ViewportUtil");
var NavBarScrolled = /** @class */ (function () {
    function NavBarScrolled() {
        this.scrolledClass = "scrolled";
        this.navBar = document.querySelector("nav");
        this.domUtil = new DomUtil_1.default(this.navBar);
    }
    NavBarScrolled.prototype.execute = function () {
        document.addEventListener("scroll", this.scrollEvent.bind(this), true);
        this.scrollEvent();
    };
    NavBarScrolled.prototype.scrollEvent = function () {
        if (new ViewportUtil_1.ViewportUtil().WindowTop(40)) {
            this.domUtil.appendClass(this.scrolledClass);
        }
        else {
            this.domUtil.removeClass(this.scrolledClass);
        }
    };
    return NavBarScrolled;
}());
exports.default = NavBarScrolled;
//# sourceMappingURL=NavBarScrolled.js.map