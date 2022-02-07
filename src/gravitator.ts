import RigidBody from "./rigidbody"
import Vector from "./vector"

export default class Gravitator {
    G: number

    constructor(gravitationalConstant: number) {
        this.G = gravitationalConstant
    }
    calcForce(body1: RigidBody, body2: RigidBody) {
        const directionVector = Vector.sub(body2.position, body1.position)

        let m1 = body1.mass
        let m2 = body2.mass
        let G = this.G
        let r = directionVector.getMag()

        const F = G * m1 * m2 / r ** 2
        return directionVector.setMag(F)
    }
}