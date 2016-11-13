import ui.ImageView;
import math.geom.Point as Point;
import animate;
import src.Bullet as Bullet;
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x: 107,
            y: 500,
            autoSize:true,
            image: 'resources/images/gun_base.png'
        });
        supr(this, 'init', [opts]);
        this.build();
    }
    this.build = function() {
        // this is true gun, Class Gun is gunBase
        var gun = new ui.ImageView({
            superview:this,
            x: -3,
            y: -70,
            autoSize:true,
            image: 'resources/images/gun.png',
            anchorX : 56,
            anchorY : 92
        });
        var girl = new ui.ImageView({
            superview:this,
            x: -100,
            y: -70,
            scale: 0.6,
            autoSize:true,
            image: 'resources/images/girl.png',
        });
        var nextBullet = new ui.ImageView({
            superview:girl,
            x:80,
            y:100,
            width:50,
            height:50,
            image: 'resources/images/bubble.png',
        });
        var that = this;
        this.on('gun:setTarget', function(p) {
            var target = p.subtract(new Point(145, 510));
            var r = -1.57079 - target.getAngle();
            gun.style.r = -r;
        });
        this.on('gun:loaded', function(){
            animate(nextBullet).now({x:230, y:140}, 200, animate.linear)
                .then(function() {
                    nextBullet.updateOpts({x: 80, y: 100});
                    var bullet = new Bullet();
                    that.style._superview.addSubview(bullet);
                    that._bullet = bullet;
                });
        });
        this.on('gun:fire', function(p) {
            if (that._bullet && animate(that._bullet).hasFrames()) {
                return;
            } else {
                if (that._bullet){
                    that._bullet.emit('bullet:launch', p);
                }
            }
        });
    }
    this.update = function(){
        if (this._bullet){
            if(!this._bullet.update()){
                // bullet is out of date, need load new one
                this._bullet = null;
                this.emit('gun:loaded');
            }
        }
    }
});
