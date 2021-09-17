const canvas = document.querySelector('canvas')
const gameCamera = document.getElementById('gameCamera')
const ctx = canvas.getContext('2d')

var keyPresses = []
const playerSize = 25

canvas.width = gameCamera.clientWidth
canvas.height = gameCamera.clientHeight

console.log(canvas.width)

class Map {
    constructor(x, y, wt, ht, color) {
        this.x = x
        this.y = y
        this.wt = wt
        this.ht = ht
        this.color = color
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.wt, this.ht)
    }
}

class Player {
    constructor(x, y, wt, ht, color) {
        this.x = x
        this.y = y
        this.wt = wt
        this.ht = ht
        this.color = color
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.wt, this.ht)
    }
}

function queueMovement(e) {
    if(e.keyCode == 38 || e.keyCode == 87) {       //up arrow key/W
        keyPresses[2] = true
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key/A
        keyPresses[1] = true
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key/S
        keyPresses[3] = true
    }
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key/D
        keyPresses[0] = true
    }
}

function resetMovement(e) {
    if(e.keyCode == 38 || e.keyCode == 87) {       //up arrow key/W
        keyPresses[2] = false
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key/A
        keyPresses[1] = false
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key/S
        keyPresses[3] = false
    }
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key/D
        keyPresses[0] = false
    }
}

function update() {
    for(var i = 0; i < keyPresses.length; i++) {
        if(keyPresses[i]) console.log("Moving")
    }
}

document.onkeydown = queueMovement
document.onkeyup = resetMovement

const map = new Map(0, 0, canvas.width, canvas.height, '#646877')
map.draw()

const player = new Player(canvas.width/2 - playerSize, canvas.height/2 - playerSize, playerSize, playerSize, 'white')
player.draw()

setInterval(update, 1000/100)
