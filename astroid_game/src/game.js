const Asteroid = require("./asteroid");



// Game.DIM_X = 500;
// Game.DIM_Y = 500;
// Game.NUM_ASTEROIDS = 5;


function Game(ctx) {
    this.asteroids = [];

    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 5;

    this.addAsteroids();

    this.draw(ctx);

}

Game.prototype.addAsteroids = function() {
    console.log(this.NUM_ASTEROIDS);
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        console.log(this);
        console.log(this.asteroids);
        let rand = this.randomPosition();
        this.asteroids.push(new Asteroid(rand));
    }

    console.log(this.asteroids);
}


Game.prototype.draw = function(ctx) {
    // ctx.clearRect(0, 0, 500, 500);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 500, 500);

    for (let i = 0; i < this.asteroids.length; i++) {
        console.log(this.asteroids[i]);
        this.asteroids[i].draw(ctx);
    }
}


Game.prototype.moveObject = function () {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
        console.log("WORK PLS");
    }
}


Game.prototype.randomPosition = function() {
    const pos_x = getRandom();
    const pos_y = getRandom();

    return [pos_x, pos_y]
}

function getRandom() {
    const min = 1;
    const max = 501;

    let min1 = Math.round(min);
    let max1 = Math.floor(max);

    return Math.floor(Math.random() * (max1 - min1) + min1)
}





module.exports = Game;