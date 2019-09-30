"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScriptLoader = /** @class */ (function () {
    function ScriptLoader(script, callback) {
        this.script = script;
        this.callback = callback;
    }
    ScriptLoader.prototype.load = function () {
        // Adding t<he script tag to the head as suggested before
        var head = document.head;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this.script;
        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onloadend = this.callback();
        // Fire the loading
        head.appendChild(script);
    };
    return ScriptLoader;
}());
exports.ScriptLoader = ScriptLoader;
//# sourceMappingURL=ScriptLoader.js.map