import Vector from "./vector";

export default class RigidBody {
    position: Vector
    velocity: Vector = new Vector(0, 0)
    acceleration: Vector = new Vector(0, 0)
    mass: number
    size: number

    constructor(x: number, y: number, mass: number, size: number) {
        this.position = new Vector(x, y)
        this.mass = mass * size
        this.size = size
    }
}