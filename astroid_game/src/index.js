const MovingObject = require("./movingObject.js")
const Asteroid = require("./asteroid.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;




document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 500, 500);


    const mo = new MovingObject({
        pos: [100, 100],
        vel: [100, 100],
        radius: 50,
        color: "#00FF00"
    });

    mo.draw(ctx);

    // setTimeout ( function () {
    //     console.log("hello")
    //     mo.move();
    //     mo.color = 'magenta'
    //     mo.draw(ctx);

    // }, 1000)
    console.log(mo);

});

