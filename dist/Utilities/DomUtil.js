"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewportUtil_1 = require("./ViewportUtil");
var DomUtil = /** @class */ (function () {
    function DomUtil(element) {
        this.element = element;
        this.viewPortUtil = new ViewportUtil_1.ViewportUtil(this.element);
    }
    DomUtil.prototype.getDataAttr = function (attr, defaultvalue) {
        if (!this.element) {
            return null;
        }
        var value = this.element.getAttribute("data-" + attr);
        return value !== undefined ? value : defaultvalue;
    };
    DomUtil.prototype.setDataAttr = function (attr, value) {
        if (!this.element) {
            return null;
        }
        return this.element.setAttribute("data-" + attr, value);
    };
    DomUtil.prototype.getAttr = function (attr, defaultvalue) {
        if (!this.element) {
            return null;
        }
        var value = this.element.getAttribute(attr);
        return value !== undefined ? value : defaultvalue;
    };
    DomUtil.prototype.setAttr = function (attr, value) {
        if (!this.element) {
            return null;
        }
        this.element.setAttribute(attr, value);
    };
    DomUtil.prototype.removeAttr = function (attr) {
        if (!this.element) {
            return null;
        }
        this.element.removeAttribute(attr);
    };
    DomUtil.prototype.removeDataAttr = function (attr) {
        if (!this.element) {
            return null;
        }
        this.element.removeAttribute("data-" + attr);
    };
    DomUtil.prototype.hasAttr = function (attr) {
        if (!this.element) {
            return null;
        }
        return this.element.hasAttribute(attr);
    };
    DomUtil.prototype.shake = function () {
        var _this = this;
        this.appendClass('shake');
        setTimeout(function () {
            _this.removeClass('shake');
            _this.element.readOnly = false;
        }, 600);
    };
    DomUtil.prototype.error = function () {
        var _this = this;
        this.appendClass('error');
        setTimeout(function () {
            _this.removeClass('error');
            _this.element.readOnly = false;
        }, 5000);
    };
    DomUtil.prototype.focus = function () {
        if (!this.viewPortUtil.IsVisible()) {
            this.element.scrollIntoView();
        }
    };
    DomUtil.prototype.removeClass = function (classname) {
        this.element.classList.remove(classname);
    };
    DomUtil.prototype.appendClass = function (classname) {
        this.element.classList.add(classname);
    };
    DomUtil.prototype.deleteElement = function () {
        if (!this.element) {
            return null;
        }
        this.element.remove();
    };
    DomUtil.prototype.setChildElementByAttrName = function (name, value) {
        var firstLetter = name.replace(/^\w/, function (c) { return c.toUpperCase(); });
        var SubElement = this.element.querySelector("[name=\"" + firstLetter + "\"]");
        if (SubElement) {
            SubElement.value = value;
        }
    };
    DomUtil.prototype.hasClass = function (className) {
        return this.element.classList.contains(className);
    };
    DomUtil.prototype.getStyle = function (ruleName) {
        return getComputedStyle(this.element)[ruleName];
    };
    return DomUtil;
}());
exports.default = DomUtil;
//# sourceMappingURL=DomUtil.js.map