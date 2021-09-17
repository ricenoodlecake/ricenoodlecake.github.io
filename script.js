const canvas = document.querySelector('canvas')
const player = document.querySelector('.player')
const gameCamera = document.getElementById('gameCamera')
const ctx = canvas.getContext('2d')

var keyPresses = []
const playerSize = 25

var screenWidth = window.screen.availWidth
var screenHeight = window.screen.availHeight

console.log(player)

//test case
var randX = []
var randY = []
for(var i = 0; i < 20; i++) {
    randX[i] = 50+Math.floor(Math.random()*screenWidth-5)
}
for(var i = 0; i < 20; i++) {
    randY[i] = 50+Math.floor(Math.random()*screenHeight-5)
}

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
        ctx.fillRect(this.x, this.y, this.wt*5, this.ht*5)

        for(var i = 0; i < 20; i++) {
            ctx.fillStyle = 'black'
            ctx.fillRect(this.x+randX[i], this.y+randY[i], 25, 25)
        }
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
        keyPresses[0] = true
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key/A
        keyPresses[1] = true
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key/S
        keyPresses[2] = true
    }
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key/D
        keyPresses[3] = true
    }
}

function resetMovement(e) {
    if(e.keyCode == 38 || e.keyCode == 87) {       //up arrow key/W
        keyPresses[0] = false
    }
    if(e.keyCode == 37 || e.keyCode == 65) {       //left arrow key/A
        keyPresses[1] = false
    }
    if(e.keyCode == 40 || e.keyCode == 83) {       //down arrow key/S
        keyPresses[2] = false
    }
    if(e.keyCode == 39 || e.keyCode == 68) {       //right arrow key/D
        keyPresses[3] = false
    }
}

function update() {
    if(keyPresses[0]) {
        map.y += 5
        map.draw()
    }
    if(keyPresses[1]) {
        map.x += 5
        map.draw()
    }
    if(keyPresses[2]) {
        map.y -= 5
        map.draw()
    }
    if(keyPresses[3]) {
        map.x -= 5
        map.draw()
    }
}

//document.onkeydown = queueMovement
//document.onkeyup = resetMovement

const map = new Map(0, 0, canvas.width, canvas.height, '#646877')
//map.draw()

//const player = new Player(canvas.width/2 - playerSize, canvas.height/3 - playerSize, playerSize, playerSize, 'white')
//player.draw()

setInterval(update, 1000/100)
