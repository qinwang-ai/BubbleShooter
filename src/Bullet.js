import ui.ImageView;
import math.geom.Point as Point;
import animate;
import src.SoundController as Sound;
exports = Class(ui.ImageView, function(supr){
        this.init = function(opts) {
            opts = merge(opts, {
                x:162,
                y:527,
                width: 34,
                height:34,
                offsetX:-17,
                offsetY:-17
            });
            supr(this, 'init', [opts]);
            this._deviceWidth = 320;
            this._magnLength = 1000;
            this._delay = 800;
            this._sound = Sound.getSound();
            this._origin = new Point(this.style.x, this.style.y);
            this._type = opts.type;
            this.build();
        }
        this.build = function() {
            var target, width = this._deviceWidth, delay = this._delay;
            this._animate = animate(this);
            this.on('bullet:launch', bind(this, function(point){
                target = this.magnitudeLength(point);
                this._sound.play('lightning');
                this._animate.now({x:target.x, y:target.y}, delay, animate.linear);
            }));
            this.on('bullet:touchLeftWall', bind(this, function() {
                if (target.x < 0) {
                    target = this.magnitudeLength(new Point(-target.x, target.y));
                    this._animate.clear().now({x: target.x, y: target.y}, delay, animate.linear);
                }
            }));
            this.on('bullet:touchRightWall', bind(this, function() {
                if (target.x > width) {
                    target = this.magnitudeLength(new Point(2 * width - target.x, target.y));
                    this._animate.clear().now({x: target.x, y: target.y}, delay, animate.linear);
                }
            }));
        }
        this.update = function () {
            if (this.style.y > 0) {
                if(this.style.x <= 0) {
                    this.emit('bullet:touchLeftWall');
                }
                if(this.style.x + this.style._width >= this._deviceWidth) {
                    this.emit('bullet:touchRightWall');
                }
                return true;
            } else {
                this.removeFromSuperview();
                return false;
            }

        };
        this.magnitudeLength = function (target) {
            var origin = this._origin;
            target = (new Point(target.x, target.y)).subtract(origin);
            target.setMagnitude(this._magnLength);
            target.x += origin.x;
            target.y += origin.y;
            return target;
        }
});

