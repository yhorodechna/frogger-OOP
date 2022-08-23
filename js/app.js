const canvasWidth = 505;
const canvasHeight = 605;
const cellHeight = 83;
const cellWidth = 101;



// Enemies our player must avoid

class Enemy {
    constructor(x, y, speed,) {
        this.x = x;
        this.y = y;
        this.speed = speed
        this.sprite = 'images/enemy-bug.png';
    };
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update = function (dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    };
    // Draw the enemy on the screen, required method for game
    render = function () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }
    update = function (dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    };
    render = function (dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    };
    handleInput = function (dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    };
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = []
allEnemies.push(new Enemy())
const player = new Player(83, 101);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
