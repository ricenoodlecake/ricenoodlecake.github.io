const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasFillColor = "#bcbcbc";
const canvasOutlineColor = "#000000";

canvas.width = innerWidth
canvas.height = innerHeight

class Controller {
    constructor(x, y, w, h, color, isMoving) {
        this.x = x
        this.xV = 0
        this.y = y 
        this.yV = 0
        this.w = w
        this.h = h
        this.color = color
        this.isMoving = isMoving
    }
    draw() {
        ctx.fillStyle = canvasFillColor
        ctx.strokeStyle = canvasOutlineColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const controller = new Controller(100, 100, 25, 25, 'black', false)
controller.draw()

function animate() {
    controller.draw()
    console.log('ticks')
}

window.addEventListener('keydown', (event) => {
    const { style } = controller;
});

setInterval(animate, 1000/5)
