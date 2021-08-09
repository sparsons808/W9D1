function GameView(ctx) {

    this.ctx = ctx;

    this.game = new Game(ctx);

}


GameView.prototype.start = function(ctx) {
    let that = this;
    let c = ctx;

    setInterval(function () {
        that.game.draw(c);
        that.game.moveObject();
    }, 200);

}


module.exports = GameView;