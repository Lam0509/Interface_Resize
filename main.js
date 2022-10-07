"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var shapes = [];
shapes[0] = new Circle_1.Circle('hình tròn', 3);
shapes[1] = new Rectangle_1.Rectangle('hình chữ nhật', 4, 5);
shapes[2] = new Square_1.Square('hình vuông', 6);
console.log('-----Trước khi thay đổi-----');
shapes.forEach(function (shape) {
    console.log(shape.toString());
});
console.log('-----Thay đổi-----');
shapes.forEach(function (shape) {
    shape.resize(Math.random() * 100);
});
console.log('-----Sau khi thay đổi-----');
shapes.forEach(function (shape) {
    console.log(shape.toString());
});
