import ui.ImageView;
import math.geom.Point as Point;
import animate;
import src.Config as config;
import src.SoundController as Sound;
exports = Class(ui.ImageView, function(supr){
        this.init = function(opts) {
            opts = merge(opts, {
                x:162,
                y:527,
                width: 2*r,
                height:2*r,
                offsetX:-r,
                offsetY:-r,
                image:types[0],
                type:0
            });
            supr(this, 'init', [opts]);
            this._deviceWidth = 320;
            this._magnLength = 1000;
            this._delay = 1000;
            this._sound = Sound.getSound();
            this._origin = new Point(this.style.x, this.style.y);
            this._type = opts.type;
            this._flying = false;
            this._edges = [];
            this.build();
        }
        this.build = function() {
            var target, width = this._deviceWidth, delay = this._delay;
            this._animate = animate(this);
            this.on('bullet:launch', bind(this, function(point){
                target = this.magnitudeLength(point);
                this._sound.play('lightning');
                this._flying = true;
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
            this.on('bubble:hit',bind(this,function () {
                this._sound.play('attack');
            }))
        };
        this.updateFlyingBullet = function() {
            if (this.style.y > 0) {
                if(this.style.x <= r) {
                    this.emit('bullet:touchLeftWall');
                }
                if(this.style.x + r >= this._deviceWidth) {
                    this.emit('bullet:touchRightWall');
                }
                return true;
            } else {
                this._flying = false;
                this.removeFromSuperview();
                return false;
            }
        };
        this.updateNormalBubble = function(gun) {
            if (this._flying) return;
            var bullet = gun._bullet;
            if (bullet && bullet._flying) {
                var v1 = new Point(bullet.style.x, bullet.style.y);
                var v2 = new Point(this.style.x, this.style.y);
                var distance = (v1.subtract(v2)).getMagnitude();
                if (distance <= r * 2 ) {
                    bullet._animate.clear();
                    this.deployBullet(v1.getAngle(), bullet);
                    gun.style._superview._bubbles.push(bullet);
                    this.emit('bubble:hit');
                    gun.emit('gun:loaded');
                    bullet._flying = false;
                }
            }
        };
        this.deployBullet = function(angle, bullet) {
            var t = this.style, mini;
            for (var i = 0; i< Edge.length;i++){
                if(Hexagon[i].s < angle && angle < Hexagon[i].t) {
                    bullet.style.x = t.x + Edge[i].dx;
                    bullet.style.y = t.y + Edge[i].dy;
                    mini = i;
                    break;
                }
            }
            bullet._edges.push(this);
            this._edges.push(bullet);
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

var r = config.bubble.radius;
var r2 = config.bubble.radius2;
var types = config.bubble.types;
var Hexagon = [
    {s:0,      t:1.0472},
    {s:1.0473, t:2.0943},
    {s:2.0944, t:3.1416},
    {s:-3.1416,t:-2.0944},
    {s:-2.0943,t:-1.0473},
    {s:-1.0472,t:0}
];
// relative to Hexagon
var Edge = [
    {dx:1.5*r2 , dy:r   },
    {dx:0      , dy:2*r },
    {dx:-1.5*r2, dy:r   },
    {dx:-1.5*r2, dy:-r  },
    {dx:0      , dy:-2*r},
    {dx:1.5*r2 , dy:-r  }
]


