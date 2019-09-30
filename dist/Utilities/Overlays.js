"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlays = /** @class */ (function () {
    function Overlays() {
    }
    Overlays.Spinner = function (target) {
        var elem = (document.createElement("div"));
        elem.innerHTML = "<i class='fas fa-spinner'></i>";
        elem.classList.add("spinner");
        target.appendChild(elem);
        return elem;
    };
    Overlays.CheckMark = function (target) {
        var elem = (document.createElement("div"));
        elem.classList.add("spinner");
        elem.innerHTML = "<i class='fas fa-check'></i>";
        target.appendChild(elem);
        setTimeout(function () {
            elem.remove();
        }, this.overlayTime);
    };
    Overlays.CrossMark = function (target) {
        var elem = (document.createElement("div"));
        elem.classList.add("spinner");
        elem.innerHTML = "<i class='fa fa-times' aria-hidden='true'></i>";
        target.appendChild(elem);
        setTimeout(function () {
            elem.remove();
        }, this.overlayTime);
    };
    Overlays.overlayTime = 3000;
    return Overlays;
}());
exports.default = Overlays;
//# sourceMappingURL=Overlays.js.map