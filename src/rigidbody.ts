import Vector from "./vector";

function randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export default class RigidBody {
    position: Vector
    velocity: Vector = new Vector(0, 0)
    acceleration: Vector = new Vector(0, 0)
    mass: number

    constructor(x: number, y: number, mass: number) {
        this.position = new Vector(x, y)
        this.mass = mass
    }
    update() {
        const v = new Vector(randomRange(-5, 5), randomRange(-5, 5))
        
        this.position = this.position.add(v)
    }
}