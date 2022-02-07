import Renderer from "./renderer";
import Updater from "./updater";
import Orbiter from "./orbiter";
import { randomRange, randomChoice } from "./helpers";

class Simulation {
    renderer: Renderer
    updater: Updater = new Updater();
    entities: any[] = []
    
    constructor(ctx: CanvasRenderingContext2D) {
        this.renderer = new Renderer(ctx);
    }
    addEntity(entity: any) {
        this.entities.push(entity);
        this.updater.queue.push(entity.rigidBody);
        this.renderer.queue.push(entity.graphic);
    }
    frameLoop() {
        this.renderer.cycle();
        this.updater.cycle();
        requestAnimationFrame(() => this.frameLoop());
    }
    start() {
        this.frameLoop();
    }
}

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const sim = new Simulation(ctx);

const colors = [
    'orange',
    'yellow',
    'orange',
    'tan',
]

const orbiters = []
for (let i = 0; i < 10; i++) {
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height;
    const color = randomChoice(colors);
    const size = randomRange(10, 20);
    orbiters.push(new Orbiter(startX, startY, 20, size, color));
}

orbiters.forEach(orbiter => sim.addEntity(orbiter));

sim.start();