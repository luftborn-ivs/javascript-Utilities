"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MakeRequest = /** @class */ (function () {
    function MakeRequest(url, method, headers) {
        if (method === void 0) { method = 'get'; }
        if (headers === void 0) { headers = {}; }
        this.method = method;
        this.url = url;
        this.headers = headers;
    }
    MakeRequest.prototype.setHeaders = function (httpRequest) {
        for (var header in this.headers) {
            httpRequest.setRequestHeader(header, this.headers[header]);
        }
    };
    MakeRequest.prototype.send = function (data) {
        var _this = this;
        if (data === void 0) { data = null; }
        return new Promise(function (resolve, reject) {
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open(_this.method, _this.url);
            _this.setHeaders(xmlHttpRequest);
            xmlHttpRequest.onload = function () {
                if (xmlHttpRequest.status >= 200 &&
                    xmlHttpRequest.status < 300) {
                    resolve(xmlHttpRequest.response);
                }
                else {
                    reject({
                        status: xmlHttpRequest.status,
                        statusText: xmlHttpRequest.statusText,
                        body: xmlHttpRequest.response,
                    });
                }
            };
            xmlHttpRequest.onerror = function () {
                reject({
                    status: xmlHttpRequest.status,
                    statusText: xmlHttpRequest.statusText,
                    body: xmlHttpRequest.response,
                });
            };
            xmlHttpRequest.send(data);
        });
    };
    return MakeRequest;
}());
exports.default = MakeRequest;
//# sourceMappingURL=MakeRequest.js.map