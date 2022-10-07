import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let shapes = [];
shapes[0] = new Circle('hình tròn', 3);
shapes[1] = new Rectangle('hình chữ nhật', 4, 5);
shapes[2] = new Square('hình vuông', 6);

console.log('-----Trước khi thay đổi-----');
shapes.forEach(shape=>{
    console.log(shape.toString());
});

console.log('-----Thay đổi-----');
shapes.forEach(shape=>{
    shape.resize(Math.random()*100);
});

console.log('-----Sau khi thay đổi-----');
shapes.forEach(shape=>{
    console.log(shape.toString());
});



