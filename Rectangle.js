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
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (this.width + this.height) * 2;
    };
    Rectangle.prototype.resize = function (percent) {
        this.width *= 1 + percent / 100;
        this.height *= 1 + percent / 100;
    };
    Rectangle.prototype.toString = function () {
        return "".concat(_super.prototype.show.call(this), ". I have width = ").concat(this.width, ", height = ").concat(this.height, " with Area = ").concat(this.calculateArea());
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
