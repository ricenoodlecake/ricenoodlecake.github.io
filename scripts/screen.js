const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let start, timeStamp
var scriptControl, scriptIsRunning

canvas.width = innerWidth
canvas.height = innerHeight

class Controller {

    constructor(x, y, w, h, color) {
        this.x = x
        this.xV = 0
        this.y = y 
        this.yV = 1
        this.w = w
        this.h = h
        this.color = color
        this.time = 1
    }

    draw() {
        ctx.fillRect(this.x + this.xV, this.y + this.xY, this.w, this.h)
        //this.time++
        //console.log(this.time)
    }

    update() {
        this.x += this.xV
        this.y += this.yV
        if(this.y > canvas.width) this.y = 0
    }
}

const controller = new Controller(100, 100, 25, 25, 'red')
controller.draw()

timeStamp = 200
var previousTimeStamp = 0

function animate() {
    console.log('go')
}
setInterval(animate, 1000)

console.log(controller)
