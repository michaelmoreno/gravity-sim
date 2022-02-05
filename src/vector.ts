export default class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getMag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize(): Vector {
        return this.div(this.getMag());
    }
    setMag(mag: number): Vector {
        return this.normalize().mul(mag)
    }
    limit(max: number): Vector {
        if (this.getMag() > max) {
            return this.setMag(max);
        }
        return this;
    }
    static add(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    add(quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            this.x += quantity;
            this.y += quantity;
            return this
        }
        this.x += quantity.x;
        this.y += quantity.y;
        return this
    }
    static sub(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    sub(quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            this.x -= quantity;
            this.y -= quantity;
            return this
        }
        this.x -= quantity.x;
        this.y -= quantity.y;
        return this
    }
    static mul(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x * v2.x, v1.y * v2.y);
    }
    mul(quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            this.x *= quantity;
            this.y *= quantity;
            return this
        }
        this.x *= quantity.x;
        this.y *= quantity.y;
        return this
    }
    static div(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x / v2.x, v1.y / v2.y);
    }
    div(quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            this.x /= quantity;
            this.y /= quantity;
            return this
        }
        this.x /= quantity.x;
        this.y /= quantity.y;
        return this
    }
}