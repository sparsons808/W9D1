function MovingObject (obj) {
    this.pos = obj.pos;
    this.val = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
};

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

console.log(mo);

module.exports = MovingObject;