import RigidBody from "./rigidbody";
import Graphic from "./graphic";

export default class Orbiter {
    rigidBody: RigidBody;
    graphic: Graphic;

    constructor(x: number, y: number, mass: number, size: number, color: string) {
        this.rigidBody = new RigidBody(x, y, mass, size)
        this.graphic = new Graphic(this.rigidBody, color)
    }
}