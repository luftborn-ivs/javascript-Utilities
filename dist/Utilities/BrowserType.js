"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserType = /** @class */ (function () {
    function BrowserType() {
        this.nVer = navigator.appVersion;
        this.nAgt = navigator.userAgent;
        this.browserName = navigator.appName;
        this.fullVersion = parseFloat(navigator.appVersion);
        this.majorVersion = parseInt(navigator.appVersion, 10);
        this.platformName = "Unknown OS";
        if (navigator.userAgent.indexOf("Win") !== -1) {
            this.platformName = "Windows";
        }
        if (navigator.userAgent.indexOf("Mac") !== -1) {
            this.platformName = "Macintosh";
        }
        if (navigator.userAgent.indexOf("Linux") !== -1) {
            this.platformName = "Linux";
        }
        if (navigator.userAgent.indexOf("Android") !== -1) {
            this.platformName = "Android";
        }
        if (navigator.userAgent.indexOf("like Mac") !== -1) {
            this.platformName = "iOS";
        }
        this.userAgentString = navigator.userAgent;
        // In Opera, the true version is after "Opera" or after "Version"
        if ((this.verOffset = this.nAgt.indexOf("Opera")) != -1) {
            this.browserName = "Opera";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 6));
            if ((this.verOffset = this.nAgt.indexOf("Version")) != -1)
                this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 8));
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((this.verOffset = this.nAgt.indexOf("MSIE")) != -1) {
            this.browserName = "Microsoft Internet Explorer";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 5));
        }
        else if ((this.verOffset = this.nAgt.indexOf("Edge")) != -1) {
            this.browserName = "Edge";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 5));
        }
        // In Chrome, the true version is after "Chrome"
        else if ((this.verOffset = this.nAgt.indexOf("Chrome")) != -1) {
            this.browserName = "Chrome";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 7));
        }
        // In Safari, the true version is after "Safari" or after "Version"
        else if ((this.verOffset = this.nAgt.indexOf("Safari")) != -1) {
            this.browserName = "Safari";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 7));
            if ((this.verOffset = this.nAgt.indexOf("Version")) != -1)
                this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 8));
        }
        // In Firefox, the true version is after "Firefox"
        else if ((this.verOffset = this.nAgt.indexOf("Firefox")) != -1) {
            this.browserName = "Firefox";
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 8));
        }
        // In most other browsers, "name/version" is at the end of userAgent
        else if ((this.nameOffset = this.nAgt.lastIndexOf(" ") + 1) <
            (this.verOffset = this.nAgt.lastIndexOf("/"))) {
            this.browserName = this.nAgt.substring(this.nameOffset, this.verOffset);
            this.fullVersion = parseFloat(this.nAgt.substring(this.verOffset + 1));
            if (this.browserName.toLowerCase() == this.browserName.toUpperCase()) {
                this.browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        /*
            if ((this.ix = this.fullVersion.indexOf(";")) != -1)
            this.fullVersion = this.fullVersion.substring(0, ix);
            if ((this.ix = this.fullVersion.indexOf(" ")) != -1)
            this.fullVersion = this.fullVersion.substring(0, ix);
        */
        this.majorVersion = parseInt("" + this.fullVersion, 10);
        if (isNaN(this.majorVersion)) {
            this.fullVersion = parseFloat(navigator.appVersion);
            this.majorVersion = parseInt(navigator.appVersion, 10);
        }
    }
    BrowserType.prototype.isChrome = function () {
        return this.browserName === "Chrome";
    };
    BrowserType.prototype.isFirefox = function () {
        return this.browserName === "Firefox";
    };
    BrowserType.prototype.isEdge = function () {
        return this.browserName === "Edge";
    };
    BrowserType.prototype.isOpera = function () {
        return this.browserName === "Opera";
    };
    BrowserType.prototype.isIE = function () {
        return this.browserName === "Microsoft Internet Explorer" || this.browserName === "Netscape";
    };
    BrowserType.prototype.isSafari = function () {
        return this.browserName === "Safari";
    };
    BrowserType.prototype.iPhone = function () {
        var iDevices = ["iPhone Simulator", "iPod Simulator", "iPhone", "iPod"];
        if (navigator.platform) {
            while (iDevices.length) {
                if (navigator.platform === iDevices.pop()) {
                    return true;
                }
            }
        }
        return false;
    };
    BrowserType.prototype.isMobile = function () {
        return /Mobi/i.test(navigator.userAgent);
    };
    BrowserType.prototype.iOSversion = function () {
        if (!this.isMobile() && !this.iPhone()) {
            return null;
        }
        return this.majorVersion + "";
    };
    BrowserType.prototype.hasPlugin = function (name) {
        name = name.toLowerCase();
        var plugins = window.navigator.plugins;
        for (var i = 0; i < plugins.length; i++) {
            if (plugins[i][name])
                return true;
        }
        return false;
    };
    BrowserType.prototype.isIframe = function () {
        return document.querySelector("body").classList.contains("iframe");
    };
    BrowserType.prototype.is_touch_device = function () {
        var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if ("ontouchstart" in window) {
            return true;
        }
        var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
        return mq(query);
    };
    BrowserType.prototype.useNativePdfViewer = function () {
        if (this.isIframe() || this.isMobile()) {
            return false;
        }
        return this.hasPlugin("application/pdf");
    };
    return BrowserType;
}());
exports.default = BrowserType;
//# sourceMappingURL=BrowserType.js.map