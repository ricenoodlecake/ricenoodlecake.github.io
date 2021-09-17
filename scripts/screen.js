const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

var keyPresses = []

const canvasFillColor = "#35363A"
const tickRate = 100

const initX = 200
const initY = 100
const cWidth = 50
const cHeight = 50
const xVel = 8
const yVel = 8

canvas.width = window.screen.availWidth
canvas.height = window.screen.availHeight

class Controller {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }
    draw() {
        ctx.fillStyle = canvasFillColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, cWidth, cHeight)
    }
    moveX(xV) {
        this.x += xV
        if(this.x < 0) this.x = 0
        if(this.x + this.w > canvas.width) this.x = canvas.width - this.w
        this.draw()
    }
    moveY(yV) {
        this.y += yV
        if(this.y < 0) this.y = 0
        if(this.y + this.h > canvas.height) this.y = canvas.height - this.h
        this.draw()
    }
}

function queueMovement(e) {
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key
        keyPresses[0] = true
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key
        keyPresses[1] = true
    }
    if(e.keyCode == 38 || e.keyCode == 87) {       //up arrow key
        keyPresses[2] = true
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key
        keyPresses[3] = true
    }
}

function resetMovement(e) {
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key
        keyPresses[0] = false
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key
        keyPresses[1] = false
    }
    if(e.keyCode == 38 || e.keyCode == 87) {       //up arrow key
        keyPresses[2] = false
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key
        keyPresses[3] = false
    }
}

function calculateXMovement() {
    xV = 0
    if(keyPresses[0]) xV = xVel
    if(keyPresses[1]) xV = -xVel
    return xV
}

function calculateYMovement() {
    yV = 0
    if(keyPresses[2]) yV = -yVel
    if(keyPresses[3]) yV = yVel
    return yV
}

function animate() {
    controller.moveX(calculateXMovement())
    controller.moveY(calculateYMovement())
    controller.draw()

    console.log('ticks')
}

function resetCanvasSize() {
    if(innerWidth > canvas.width || innerHeight > canvas.height) {
        canvas.width = innerWidth
        canvas.height = innerHeight
    }
}

document.onkeydown = queueMovement
document.onkeyup = resetMovement
window.onresize = resetCanvasSize;

const controller = new Controller(initX, initY, 50, 50, 'white')
controller.draw()

console.log(innerWidth + " " + innerHeight)
setInterval(animate, 1000/tickRate)
