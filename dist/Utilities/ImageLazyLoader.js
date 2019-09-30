"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var BrowserType_1 = require("./BrowserType");
var DomUtil_1 = require("./DomUtil");
var ViewportUtil_1 = require("./ViewportUtil");
var ImageLazyLoader = /** @class */ (function () {
    function ImageLazyLoader() {
        this.browserType = new BrowserType_1.default();
        this.active = false;
        this.lazyImages = ArrayUtil_1.default.FromNodeList(document.querySelectorAll("img.lazy"));
        if (!Boolean(this.lazyImages)) {
            console.debug("no lazyload images... continueing");
            this.lazyImages = [];
            return;
        }
    }
    ImageLazyLoader.prototype.execute = function () {
        this.lazyload();
        this.scrollObservable();
    };
    ImageLazyLoader.prototype.scrollLazyLoad = function () {
        window.addEventListener("scroll", this.lazyload.bind(this), true);
        window.addEventListener("resize", this.lazyload.bind(this), true);
        window.addEventListener("orientationchange", this.lazyload.bind(this), true);
    };
    ImageLazyLoader.prototype.scrollObservable = function () {
        /*
        if ("IntersectionObserver" in window) {
            const lazyObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target as HTMLImageElement);
                        lazyObserver.unobserve(entry.target);
                    }
                });
            });
            this.lazyImages.forEach((lazyImage) => { lazyObserver.observe(lazyImage); });
        } else {
            this.scrollLazyLoad();
        }
        */
        this.scrollLazyLoad();
    };
    ImageLazyLoader.prototype.loadImage = function (image) {
        var imageDomUtil = new DomUtil_1.default(image);
        var url = imageDomUtil.getDataAttr("src");
        if (!url) {
            return;
        }
        if (this.getExtension(url) !== "svg") {
            if (this.browserType.isChrome() || this.browserType.isOpera()) {
                url = this.replaceExtension(url, "webp");
            }
            else if (this.browserType.isSafari()) {
                url = this.replaceExtension(url, "jp2");
            }
            else if (this.browserType.isEdge() || this.browserType.isIE()) {
                url = this.replaceExtension(url, "jxr");
            }
            else if (this.browserType.isFirefox() && this.browserType.majorVersion >= 65) {
                url = this.replaceExtension(url, "webp");
            }
        }
        imageDomUtil.setAttr("src", url);
        imageDomUtil.removeDataAttr("src");
        if (imageDomUtil.hasClass("lazy")) {
            imageDomUtil.removeClass("lazy");
        }
        imageDomUtil.appendClass("image--loaded");
        var imageIndex = this.lazyImages.findIndex(function (img) { return img === image; });
        this.lazyImages.splice(imageIndex, 1);
    };
    ImageLazyLoader.prototype.lazyload = function () {
        if (!this.lazyImages)
            return;
        for (var i = this.lazyImages.length - 1; i >= 0; i--) {
            var lazyImage = this.lazyImages[i];
            this.active = true;
            var imageViewPort = new ViewportUtil_1.ViewportUtil(lazyImage);
            if (imageViewPort.IsOffsetVisible(300)) {
                this.loadImage(lazyImage);
                if (this.lazyImages.length === 0) {
                    window.removeEventListener("scroll", this.lazyload.bind(this), true);
                    window.removeEventListener("resize", this.lazyload.bind(this));
                    window.removeEventListener("orientationchange", this.lazyload.bind(this));
                }
            }
        }
        this.active = false;
    };
    ImageLazyLoader.prototype.getExtension = function (src) {
        return src.split(".").pop();
    };
    ImageLazyLoader.prototype.replaceExtension = function (src, replacement) {
        return src.substr(0, src.lastIndexOf(".")) + "." + replacement;
    };
    return ImageLazyLoader;
}());
exports.default = ImageLazyLoader;
//# sourceMappingURL=ImageLazyLoader.js.map