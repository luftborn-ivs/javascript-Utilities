"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtil = /** @class */ (function () {
    function UrlUtil() {
        this.queryValue = function (field, url) {
            var href = url ? url : window.location.href;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1].toLowerCase() : null;
        };
        this.currentURL = function () { return window.location.href; };
        this.getURLParameters = function (url) {
            return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
                return ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a);
            }, {});
        };
        this.redirect = function (url, asLink) {
            if (asLink === void 0) { asLink = true; }
            return asLink ? (window.location.href = url) : window.location.replace(url);
        };
        this.baseUrl = function () { return window.location.origin; };
        this.host = function () { return window.location.host; };
        this.pathArray = function () { return window.location.pathname.split('/'); };
    }
    return UrlUtil;
}());
exports.default = UrlUtil;
//# sourceMappingURL=UrlUtil.js.map