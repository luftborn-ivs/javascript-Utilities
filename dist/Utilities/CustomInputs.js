"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomInputs = /** @class */ (function () {
    function CustomInputs() {
        this.customInputs = Array.prototype.concat.apply([], document.querySelectorAll(".custom-input"));
    }
    CustomInputs.prototype.execute = function () {
        var _this = this;
        this.customInputs.forEach(function (customInput) {
            customInput.addEventListener("click", function () {
                _this.radioClick(customInput);
            });
        });
    };
    CustomInputs.prototype.radioClick = function (customInput) {
        var radioElement = customInput.previousElementSibling;
        radioElement.checked = true;
    };
    return CustomInputs;
}());
exports.default = CustomInputs;
//# sourceMappingURL=CustomInputs.js.map