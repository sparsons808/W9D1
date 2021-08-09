const MovingObject = require("./movingObject.js")
const Asteroid = require("./asteroid.js")
const Game = require("./game.js")
const GameView = require("./game_view.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');



    const gv = new GameView(ctx);
    gv.start(ctx);


    // const mo = new MovingObject({
    //     pos: [100, 100],
    //     vel: [100, 100],
    //     radius: 50,
    //     color: "#00FF00"
    // });

    // const aster = new Asteroid({
    //     pos: [30, 30]
    // });

});

