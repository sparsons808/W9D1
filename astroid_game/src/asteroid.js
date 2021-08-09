
const MovingObject = require("./movingObject");
const { inherits, randomVec } = require("./utils");

inherits(Asteroid, MovingObject);

function Asteroid (pos = [300, 100]) {
    return new MovingObject ({
        color: "magenta",
        radius: 10,
        pos: pos,
        vel: randomVec(50)
    });
}

module.exports = Asteroid;