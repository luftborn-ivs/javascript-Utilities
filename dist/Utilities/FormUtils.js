"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormUtils = /** @class */ (function () {
    function FormUtils(element) {
        this.element = element;
    }
    FormUtils.prototype.getFormDataOject = function () {
        var values = {};
        var inputs = this.element.elements;
        for (var i = 0; i < inputs.length; i++) {
            if (values[inputs[i]['name']] != '')
                values[inputs[i]['name']] = inputs[i]['value'];
        }
        return values;
    };
    FormUtils.prototype.getFormDataString = function () {
        var values = "";
        var inputs = this.element.elements;
        for (var i = 0; i < inputs.length; i++) {
            if (values[inputs[i]['name']])
                values += [inputs[i]['name']] + "=" + inputs[i]['value'] + "&";
        }
        return values;
    };
    FormUtils.prototype.reset = function () {
        this.element.reset();
    };
    return FormUtils;
}());
exports.default = FormUtils;
//# sourceMappingURL=FormUtils.js.map