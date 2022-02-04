import RigidBody from "./rigidbody";

export default class Updater {
    queue: RigidBody[] = [];

    cycle() {
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].update();
        }
    }
}