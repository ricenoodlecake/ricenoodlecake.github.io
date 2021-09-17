const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

var keyPresses = []

const canvasFillColor = "#35363A"
const tickRate = 100

canvas.width = innerWidth
canvas.height = innerHeight

class Controller {
    constructor(x, y, w, h, color, isMoving) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.isMoving = isMoving
    }
    draw() {
        ctx.fillStyle = canvasFillColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
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

const controller = new Controller(100, 100, 25, 25, 'white', false)
controller.draw()


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
    if(keyPresses[0]) xV = 4
    if(keyPresses[1]) xV = -4
    return xV
}

function calculateYMovement() {
    yV = 0
    if(keyPresses[2]) yV = -4
    if(keyPresses[3]) yV = 4
    return yV
}

function animate() {
    controller.moveX(calculateXMovement())
    controller.moveY(calculateYMovement())
    controller.draw()
    console.log('ticks')
}

document.onkeydown = queueMovement
document.onkeyup = resetMovement

setInterval(animate, 1000/tickRate)
