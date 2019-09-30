"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var UrlUtil_1 = require("./UrlUtil");
var AnalyticsClickEvents = /** @class */ (function () {
    function AnalyticsClickEvents() {
        this.selector = "[ga-track]";
        this.pageUrl = new UrlUtil_1.default().pathArray().join("-");
        this.elements = ArrayUtil_1.default.FromNodeList(document.querySelectorAll(this.selector));
        if (!this.pageUrl) {
            this.pageUrl = "FrontPage";
        }
    }
    AnalyticsClickEvents.prototype.execute = function () {
        var _this = this;
        this.elements.forEach(function (element) {
            element.addEventListener("click", function () {
                ga("send", {
                    eventAction: element.getAttribute("ga-action"),
                    eventCategory: _this.pageUrl,
                    eventLabel: element.getAttribute("ga-label"),
                    hitType: "event",
                });
            });
        });
    };
    return AnalyticsClickEvents;
}());
exports.default = AnalyticsClickEvents;
//# sourceMappingURL=AnalyticsClickEvents.js.map