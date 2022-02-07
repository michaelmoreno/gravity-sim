import Orbiter from "./orbiter"
import Vector from "./vector"

export default class Gravitator {
    bodies: Orbiter[] = []
    G: number

    constructor(gravitationalConstant: number) {
        this.G = gravitationalConstant
    }
    attract(body1: Orbiter, body2: Orbiter) {
        const directionVector = Vector.sub(body2.rigidBody.position, body1.rigidBody.position)

        let m1 = body1.rigidBody.mass
        let m2 = body2.rigidBody.mass
        let G = this.G
        let r = directionVector.getMag()

        const F = G * m1 * m2 / r ** 2
        directionVector.setMag(F)

        body1.rigidBody.applyForce(directionVector)
    }
    gravitate() {
        for (let i = 0; i < this.bodies.length; i++) {
            for (let j = 0; j < this.bodies.length; j++) {
                if (i !== j) {
                    this.attract(this.bodies[i], this.bodies[j])
                }
            }
        }
    }
}