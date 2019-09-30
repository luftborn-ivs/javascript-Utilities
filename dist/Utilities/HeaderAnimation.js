"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var DomUtil_1 = require("./DomUtil");
var ViewportUtil_1 = require("./ViewportUtil");
var HeaderAnimation = /** @class */ (function () {
    function HeaderAnimation() {
        this.minScreenWidth = 768;
        this.screenWidth = document.documentElement.offsetWidth;
        this.header = document.querySelector("header");
        this.brand = document.querySelector(".navbar-brand");
        this.domUtil = new DomUtil_1.default(this.header);
        var animationContainers = ArrayUtil_1.default.FromNodeList(document.querySelectorAll(".animation-container"));
        var delayedElements = ArrayUtil_1.default.FromNodeList(document.querySelectorAll(".delayed"));
        this.scrollEvent();
        // display elements after page load and new position is taken.
        delayedElements.forEach(function (element) { element.style.opacity = "1"; });
        // add transition delay after first scroll Event
        this.setAnimationDelay(animationContainers);
    }
    HeaderAnimation.prototype.execute = function () {
        var animationEvent = this.domUtil.getDataAttr("animation-event");
        if (animationEvent === "load") {
            window.addEventListener("load", this.lyingPosition.bind(this), true);
        }
        else if (animationEvent === "scroll" && this.screenWidth >= this.minScreenWidth) {
            window.addEventListener("scroll", this.scrollEvent.bind(this), true);
        }
        else if (animationEvent === "scroll" && this.screenWidth < this.minScreenWidth) {
            this.lyingPosition();
        }
    };
    HeaderAnimation.prototype.lyingPosition = function () {
        if (this.header !== null) {
            this.header.classList.add("animated");
            this.brand.style.opacity = "1";
        }
    };
    HeaderAnimation.prototype.defaultPosition = function () {
        if (this.header !== null) {
            this.header.classList.remove("animated");
            this.brand.style.opacity = "0";
        }
    };
    HeaderAnimation.prototype.scrollEvent = function () {
        if (new ViewportUtil_1.ViewportUtil().WindowTop(40)) {
            this.lyingPosition();
        }
        else {
            this.defaultPosition();
        }
    };
    HeaderAnimation.prototype.setAnimationDelay = function (animationContainers) {
        var animatioDelay = this.domUtil.getDataAttr("animation-delay");
        var addtransitionedClass = function (elements) { return elements.forEach(function (element) { element.classList.add("transitioned"); }); };
        if (animatioDelay === 0 || animatioDelay === "0") {
            addtransitionedClass(animationContainers);
        }
        else {
            setTimeout(function () {
                addtransitionedClass(animationContainers);
            }, animatioDelay);
        }
    };
    return HeaderAnimation;
}());
exports.default = HeaderAnimation;
//# sourceMappingURL=HeaderAnimation.js.map