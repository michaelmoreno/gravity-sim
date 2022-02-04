import Graphic from "./graphic";

export default class Renderer {
    ctx: CanvasRenderingContext2D;
    queue: Graphic[] = [];

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.resizeCanvas();
    }
    cycle() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].render(this.ctx);
        }
    }
    resizeCanvas() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
    }
}