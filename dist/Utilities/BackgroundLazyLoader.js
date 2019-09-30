"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserType_1 = require("./BrowserType");
var DomUtil_1 = require("./DomUtil");
var ViewportUtil_1 = require("./ViewportUtil");
var BackgroundLazyLoader = /** @class */ (function () {
    function BackgroundLazyLoader() {
        this.browserType = new BrowserType_1.default();
        this.active = false;
        var lazyBackgrounds = document.querySelectorAll(".lazy-background");
        if (!lazyBackgrounds) {
            this.lazyBackgrounds = [];
            console.debug("no lazyload images... continueing");
            return;
        }
        this.lazyBackgrounds = [].slice.call(lazyBackgrounds);
    }
    BackgroundLazyLoader.prototype.execute = function () {
        this.lazyloadBackgrounds();
        if ("IntersectionObserver" in window) {
            this.scrollObservable();
        }
        else {
            this.scrollLazyLoad();
        }
    };
    BackgroundLazyLoader.prototype.scrollLazyLoad = function () {
        /*if ("IntersectionObserver" in window) {
            this.scrollObservable();
        } else {
            window.addEventListener("scroll", this.lazyloadBackgrounds.bind(this), true)
        }*/
        window.addEventListener("scroll", this.lazyloadBackgrounds.bind(this), true);
        window.addEventListener("resize", this.lazyloadBackgrounds.bind(this));
        window.addEventListener("orientationchange", this.lazyloadBackgrounds.bind(this));
    };
    BackgroundLazyLoader.prototype.scrollObservable = function () {
        if ("IntersectionObserver" in window) {
            var lazyObserver_1 = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        lazyObserver_1.unobserve(entry.target);
                    }
                });
            });
            this.lazyBackgrounds.forEach(function (lazyImage) { return lazyObserver_1.observe(lazyImage); });
        }
    };
    BackgroundLazyLoader.prototype.lazyloadBackgrounds = function () {
        var _this = this;
        this.lazyBackgrounds.forEach(function (lazyImage) {
            _this.active = true;
            var imageViewPort = new ViewportUtil_1.ViewportUtil(lazyImage);
            var imageDomUtil = new DomUtil_1.default(lazyImage);
            if (imageViewPort.IsOffsetVisible(300)) {
                imageDomUtil.appendClass("visible");
                _this.lazyBackgrounds = _this.lazyBackgrounds.filter(function (image) { return image !== lazyImage; });
                if (_this.lazyBackgrounds.length === 0) {
                    document.removeEventListener("scroll", _this.lazyloadBackgrounds.bind(_this));
                    window.removeEventListener("resize", _this.lazyloadBackgrounds.bind(_this));
                    window.removeEventListener("orientationchange", _this.lazyloadBackgrounds.bind(_this));
                }
            }
        });
        this.active = false;
    };
    return BackgroundLazyLoader;
}());
exports.default = BackgroundLazyLoader;
//# sourceMappingURL=BackgroundLazyLoader.js.map