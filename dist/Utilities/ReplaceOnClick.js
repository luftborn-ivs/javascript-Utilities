"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomUtil_1 = require("./DomUtil");
var HtmlLoader_1 = require("./HtmlLoader");
var ReplaceOnClick = /** @class */ (function () {
    function ReplaceOnClick(selector) {
        if (selector === void 0) { selector = '.content-replace'; }
        var elements = document.querySelectorAll(selector);
        if (elements) {
            this.elements = [].slice
                .call(elements);
        }
    }
    ReplaceOnClick.prototype.execute = function () {
        this.elements.forEach(this.replace);
    };
    ReplaceOnClick.prototype.replace = function (element) {
        var elementUtil = new DomUtil_1.default(element);
        var targetUrl = elementUtil.getDataAttr('url');
        if (!targetUrl)
            return;
        var targetSelector = elementUtil.getDataAttr('target');
        if (!targetSelector)
            return;
        var target = document.querySelector(targetSelector);
        if (!target)
            return;
        element.addEventListener('click', function (event) { return new HtmlLoader_1.default(target).load(targetUrl); });
    };
    return ReplaceOnClick;
}());
exports.ReplaceOnClick = ReplaceOnClick;
//# sourceMappingURL=ReplaceOnClick.js.map