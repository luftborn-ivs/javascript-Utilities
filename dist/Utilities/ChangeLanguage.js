"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var DomUtil_1 = require("./DomUtil");
var ChangeLanguage = /** @class */ (function () {
    function ChangeLanguage() {
        this.languageForm = document.getElementById('selectLanguage');
        this.languages = ArrayUtil_1.default.FromNodeList(this.languageForm.querySelectorAll('li'));
    }
    ChangeLanguage.prototype.execute = function () {
        var _this = this;
        this.languages.forEach(function (language) {
            if (language.classList.contains('active'))
                return;
            language.addEventListener('click', _this.setLanguage.bind(_this));
        });
    };
    ChangeLanguage.prototype.setLanguage = function (event) {
        var languageUtil = new DomUtil_1.default(event.currentTarget);
        var actionUrl = this.languageForm.action;
        if (actionUrl.indexOf('?') < 0) {
            actionUrl += "?culture=" + languageUtil.getDataAttr('lang');
        }
        else {
            actionUrl += "&culture=" + languageUtil.getDataAttr('lang');
        }
        this.languageForm.action = actionUrl;
        this.languageForm.submit();
    };
    return ChangeLanguage;
}());
exports.default = ChangeLanguage;
//# sourceMappingURL=ChangeLanguage.js.map