import RigidBody from "./rigidbody"

export default class Graphic {
    rigidBody: RigidBody
    color: string

    constructor(rigidBody: RigidBody, color: string) {
        this.rigidBody = rigidBody
        this.color = color
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.rigidBody.position.x, this.rigidBody.position.y, 10, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
}