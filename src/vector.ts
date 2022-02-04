export default class Vector {
    x: number;
    y: number;
    mag: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.mag = Math.sqrt(x * x + y * y);
    }
    add(v: Vector | number): Vector {
        if (typeof v === "number") {
            return new Vector(this.x + v, this.y + v);
        }
        return new Vector(this.x + v.x, this.y + v.y);
    }
    sub(v: Vector | number): Vector {
        if (typeof v === "number") {
            return new Vector(this.x - v, this.y - v);
        }
        return new Vector(this.x - v.x, this.y - v.y);
    }
    mul(v: Vector | number): Vector {
        if (typeof v === "number") {
            return new Vector(this.x * v, this.y * v);
        }
        return new Vector(this.x * v.x, this.y * v.y);
    }
    div(v: Vector | number): Vector {
        if (typeof v === "number") {
            return new Vector(this.x / v, this.y / v);
        }
        return new Vector(this.x / v.x, this.y / v.y);
    }
}

