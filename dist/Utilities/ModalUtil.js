"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil_1 = require("./ArrayUtil");
var DomUtil_1 = require("./DomUtil");
var ModalUtil = /** @class */ (function () {
    function ModalUtil() {
    }
    ModalUtil.prototype.execute = function () {
        var _this = this;
        this.Elements = ArrayUtil_1.default.FromNodeList(document.querySelectorAll(".modal"));
        document.querySelector('body').addEventListener('click', function (event) {
            var target = event.target;
            if (target.hasAttribute("data-toggle") && target.getAttribute("data-toggle") === "modal") {
                var domUtil = new DomUtil_1.default(target);
                var targetSelector = domUtil.getDataAttr("target");
                var targetModal = document.querySelector(targetSelector);
                _this.toggleModal(targetModal);
            }
        });
        this.Modals = this.Elements.map(function (modal) { return new Modal(modal); });
    };
    ModalUtil.prototype.toggleModal = function (element) {
        var modal = new Modal(element);
        if (element.style.display === "block") {
            modal.hide();
        }
        else {
            modal.show();
        }
    };
    return ModalUtil;
}());
exports.default = ModalUtil;
// tslint:disable-next-line: max-classes-per-file
var Modal = /** @class */ (function () {
    function Modal(element) {
        this.Modal = element;
        this.bindClick();
        this.bindClose();
        this.bindSubmit();
        this.bindEscape();
        this.backDrop = document.createElement("div");
        this.backDrop.classList.add("modal-backdrop", "fade", "show");
    }
    Modal.prototype.show = function () {
        this.Modal.style.display = "block";
        this.Modal.classList.add("show");
        document.documentElement.append(this.backDrop);
    };
    Modal.prototype.hide = function () {
        this.Modal.style.display = "none";
        this.Modal.classList.remove("show");
        var backdrop = document.querySelector(".modal-backdrop.fade.show");
        if (backdrop) {
            backdrop.remove();
        }
    };
    Modal.prototype.bindClick = function () {
        var _this = this;
        this.Modal.addEventListener("click", function (event) {
            if (event.target !== _this.Modal) {
                return;
            }
            else {
                new Modal(_this.Modal).hide();
            }
        });
    };
    Modal.prototype.bindClose = function () {
        var _this = this;
        var dismiss = ArrayUtil_1.default.FromNodeList(this.Modal.querySelectorAll("[data-dismiss]"));
        dismiss.forEach(function (element) {
            element.addEventListener("click", _this.hide.bind(_this));
        });
    };
    Modal.prototype.bindSubmit = function () {
        var _this = this;
        var submit = ArrayUtil_1.default.FromNodeList(this.Modal.querySelectorAll("[data-submit]"));
        submit.forEach(function (element) {
            var domUtil = new DomUtil_1.default(element);
            var value = domUtil.getDataAttr("submit-value");
            var targetSelector = domUtil.getDataAttr("submit");
            element.addEventListener("click", function () {
                _this.hide();
                document.querySelector(targetSelector).scrollIntoView();
                var positionInput = document.getElementById("position");
                positionInput.value = value;
            });
        });
    };
    Modal.prototype.bindEscape = function () {
        var _this = this;
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                _this.hide();
            }
        });
    };
    return Modal;
}());
//# sourceMappingURL=ModalUtil.js.map