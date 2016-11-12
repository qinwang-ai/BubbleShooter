import ui.ImageView;
import math.geom.Point as Point;
import animate;
exports = Class(ui.ImageView, function(supr){
        this.init = function(opts) {
            opts = merge(opts, {
                x:145,
                y:500,
                width: 30,
                height:30,
                backgroundColor: '#FFF'
            });
            supr(this, 'init', [opts]);
            this.build();
        }
        this.build = function() {
            var target, origin = new Point(this.style.x, this.style.y),
                delay = 800, magnLength = 2000, width = 320;
            this._animate = animate(this);
            this.on('bullet:launch', bind(this, function(point){
                target = (new Point(point.x, point.y)).subtract(origin);
                target.setMagnitude(magnLength);
                target.x += origin.x;
                target.y += origin.y;
                this._animate.now({x:target.x, y:target.y}, delay);
            }));
            this.on('bullet:touchLeftWall', bind(this, function() {
                if (target.x < 0) {
                    target = new Point(-target.x, target.y);
                    this._animate.clear().now({x: target.x, y: target.y}, delay);
                }
            }));
            this.on('bullet:touchRightWall', bind(this, function() {
                if (target.x > width) {
                    target = new Point(2 * width - target.x, target.y);
                    this._animate.clear().now({x: target.x, y: target.y}, delay);
                }
            }));
        }
});
