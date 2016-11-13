import ui.ImageView;
import math.geom.Point as Point;
import math.geom.Circle as Circle;
import animate;
import src.Config as config;
import src.SoundController as Sound;
exports = Class(ui.ImageView, function(supr) {
    this.init = function (opts) {
        this._color = Math.floor(Math.random()*6);
        opts = merge(opts, {
            x: Math.random()*(config.globalSize.width - r) + r,
            y: config.globalSize.height,
            width: r*2,
            height: r*2,
            offsetX:-r,
            offsetY:-r,
            image: types[this._color]
        });
        supr(this, 'init', [opts]);
        this.build();
    }
    this.build = function() {
        var sound = Sound.getSound();
        this.on('bubble:hit', function() {
            sound.play('attack');

        })
        GC.app.engine.on('Tick', bind(this, function (dt) {
        }));
    };
    this.update = function(gun) {
        if(gun._bullet) {
            var bullet = new Point(gun._bullet.style.x, gun._bullet.style.y);
            var self = new Point(this.style.x, this.style.y);
            var distance = (self.subtract(bullet)).getMagnitude();
            if (distance <= r*2) {
                gun._bullet._animate.clear();
                this.emit('bubble:hit');
                gun.emit('gun:loaded');
                gun._bullet = null;
            }
        }
        return true;
    }


});
var types = config.bubble.types;
var r = config.bubble.radius;
