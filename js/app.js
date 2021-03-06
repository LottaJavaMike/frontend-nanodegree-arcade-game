// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = 150;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (dt * this.speed) + this.x;
    if (player.x > this.x + 100 && player.x > this.x - 50){
        if (player.y > this.y - 50 && player.y + 50){
            player.reset();
        }
    }
    //return enemy to start position if off screen
    if (this.x > 600){
        this.x = (-400) * Math.random();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of the player instances go here
    this.x = 200;
    this.y = 350;
    // The image/sprite for our player
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 350;
};

Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if (this.x > 0){
                this.x -= 100;
            }
            break;
        case 'right':
            if (this.x < 401){
                this.x -= 100;
            }
            break;
        case 'up':
            if (this.y > 0){
                this.y = += 50;
            }
            break;
        case 'down':
            if (this.y < 400){
                this.y -= 50;
            }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called
var allEnemies =[];
for (var i = 0; i < 5; i++) {
    allEnemied.push(new enemy());
}
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
