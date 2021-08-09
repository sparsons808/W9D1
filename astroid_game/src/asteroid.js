
const MovingObject = require("./movingObject");
const { inherits } = require("./utils");

inherits(Asteroid, MovingObject);

function Asteroid (obj) {
    new MovingObject ({
        color: "magenta",
        radius: 10,
        pos: obj.pos,
        vel:         

    })
    

}

module.exports = Asteroid;