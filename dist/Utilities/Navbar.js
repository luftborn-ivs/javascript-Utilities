"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var throttle_1 = require("./throttle");
var DomUtil_1 = require("./DomUtil");
var NavBar = /** @class */ (function () {
    function NavBar() {
        var mainNavLinks = document.querySelectorAll("nav ul li a");
        var mainSections = document.querySelectorAll("main section");
        this.togglerButton = new DomUtil_1.default(document.querySelector("nav button.navbar-toggler"));
        this.mainNavLinks = [].slice
            .call(mainNavLinks);
        this.mainSections = [].slice
            .call(mainSections);
    }
    NavBar.prototype.execute = function () {
        var _this = this;
        document.addEventListener("scroll", function () {
            throttle_1.throttle(_this.scrollEvent, 100).bind(_this);
        });
        this.togglerButton.element.addEventListener("click", function () {
            document.querySelector(_this.togglerButton.getDataAttr("target")).classList.toggle("collapse");
        });
    };
    NavBar.prototype.scrollEvent = function () {
        var fromTop = window.scrollY;
        this.mainNavLinks.forEach(function (link) {
            var section = document.querySelector(link.href);
            if (section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("current");
            }
            else {
                link.classList.remove("current");
            }
        });
    };
    return NavBar;
}());
exports.default = NavBar;
//# sourceMappingURL=Navbar.js.map