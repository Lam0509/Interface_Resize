import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Interface Resize";

export class Square extends Rectangle implements Resizeable {

    constructor(name: string,
                width: number) {
        super(name, width, width);
    }

    resize(percent: number): void {
        this.width *= 1 + percent/100;
        this.height *= 1 + percent/100;
    }

    toString(): string {
        return `${super.show()} and I have side = ${this.width} with Area = ${this.calculateArea()}`;
    }
}