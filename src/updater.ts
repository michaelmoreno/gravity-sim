import Gravitator from "./gravitator";
import RigidBody from "./rigidbody";
import Vector from "./vector";

export default class Updater {
    gravitator: Gravitator = new Gravitator(1);
    queue: RigidBody[] = [];

    applyForce(force: Vector, body: RigidBody) {
        const a = force.div(body.mass)
        body.acceleration.add(a)
    }

    detectCollision(body1: RigidBody, body2: RigidBody) {
        const dx = body1.position.x - body2.position.x
        const dy = body1.position.y - body2.position.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        const combinedRadius = body1.size + body2.size
        if (distance < combinedRadius) {
            return true
        }
        return false
    }
    gravitate(body1: RigidBody, body2: RigidBody) {
        const gravity = this.gravitator.calcForce(body1, body2)
        this.applyForce(gravity, body1)
    }

    updateBody(body: RigidBody) {
        body.velocity.add(body.acceleration)
        body.position.add(body.velocity)
        body.acceleration.setMag(0)
    }

    cycle() {
        for (let i = 0; i < this.queue.length; i++) {
            for (let j = 0; j < this.queue.length; j++) {
                if (i !== j) {
                    this.gravitate(this.queue[i], this.queue[j])
                    this.detectCollision(this.queue[i], this.queue[j])
                    this.updateBody(this.queue[i])
                }
            }
        }
    }
}