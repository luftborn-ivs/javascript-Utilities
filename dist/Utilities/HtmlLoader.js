"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlLoader = /** @class */ (function () {
    function HtmlLoader(element) {
        if (element instanceof HTMLElement) {
            this.targetElement = element;
        }
        else if (typeof element === 'string') {
            this.targetElement = document.querySelector(element);
        }
    }
    HtmlLoader.prototype.load = function (url, method) {
        var _this = this;
        if (method === void 0) { method = "get"; }
        if (!this.targetElement) {
            throw new Error("missing target element");
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
                _this.targetElement.innerHTML = xmlHttpRequest.responseText;
            }
        };
        xmlHttpRequest.open(method, url, true);
        xmlHttpRequest.send();
    };
    return HtmlLoader;
}());
exports.default = HtmlLoader;
//# sourceMappingURL=HtmlLoader.js.map