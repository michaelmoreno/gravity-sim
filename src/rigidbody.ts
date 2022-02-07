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
    applyForce(force: Vector) {
        const a = force.div(this.mass)
        this.acceleration.add(a)
    }
    update() {
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.acceleration.setMag(0)
    }
}