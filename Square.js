"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Square = void 0;
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, width) {
        return _super.call(this, name, width, width) || this;
    }
    Square.prototype.resize = function (percent) {
        this.width *= 1 + percent / 100;
        this.height *= 1 + percent / 100;
    };
    Square.prototype.toString = function () {
        return "".concat(_super.prototype.show.call(this), " and I have side = ").concat(this.width, " with Area = ").concat(this.calculateArea());
    };
    return Square;
}(Rectangle_1.Rectangle));
exports.Square = Square;
