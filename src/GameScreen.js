/**
 * Created by Tsunami on 12/11/2016.
 */
import ui.View;
import ui.ImageView;
import ui.TextView;
import animate;
import src.Bullet as Bullet;
import src.Gun as Gun;
import src.SoundController as Sound;
import src.Config as config;
import math.geom.Point as Point;
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            width:config.globalSize.width,
            height:config.globalSize.width,
            image: 'resources/images/background_1.jpg',
        });
        supr(this, 'init', [opts]);
        this.build();
    }
    this.build = function() {
        this.on('app:start', start_game_flow.bind(this));
        this._sound = Sound.getSound();
        this._scoreboard = new ui.TextView({
            superview: this,
            x: 0,
            y: 15,
            width: config.globalSize.width,
            height: 50,
            autoSize: false,
            size: 38,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: false,
            color: '#FFFFFF'
        });
    }

});
function start_game_flow () {
    var that = this;
    // Ready go
    animate(this._scoreboard).wait(1000)
        .then(function () {
            that._scoreboard.setText("Ready");
            that._sound.play('start_ready');
        }).wait(1000).then(function () {
            that._scoreboard.setText("GO");
            that._sound.play('start_go');
        }).wait(1000).then(function(){
        that._scoreboard.setText("Score:0");
        that._sound.play('bg_music');
        play_game.call(that);
    });
}
function play_game() {
    var backButton = new ui.ImageView({
        superview:this,
        x: 200,
        y: 15,
        width: 50,
        height:50,
        image: 'resources/images/start.png'
    });
    backButton.once('InputSelect', bind(this, function() {
        this.emit('gamescreen:end');
    }));
    buildGun.call(this);
    buildInitBubbles.call(this);
    update.call(this);
}
function buildGun() {
    var gun = new Gun();
    this._gun = gun;
    this.addSubview(gun);
    gun.emit('gun:loaded');
    this.on('InputMove', function(e, p) {
        gun.emit('gun:setTarget', p);
    });
    this.on('InputSelect', function(e, p) {
        gun.emit('gun:fire', p);
    });
}

function update() {
    GC.app.engine.on('Tick', bind(this, function (dt) {
        if (this._gun && this._gun._bullet) {
            var gun = this._gun;
            var bullet = gun._bullet;
            if (bullet._animate.hasFrames()) {
                bullet.updateAsFlyingBullet();
                // if hit bubble during loop, it will clear the frame,
                // when loop finished
                // tick can't access here, because has no frames
                // when updateNormalBubble may change _bubbles list
                for(var uid in this._bubbles) {
                    this._bubbles[uid].updateAsNormalBubble(gun);
                    if (bullet._hit) break;
                }
                if (!bullet._isLoaded) {
                    gun.emit('gun:loaded');
                }
            }
        }
    }));
}
function buildInitBubbles() {
    this._bubbles = {};
    var r = config.bubble.radius;
    var r2 = config.bubble.radius2;
    var types = config.bubble.types;
    var initColor = Math.floor(Math.random() * 5);
    var initBubble = new Bullet({superview: this, x: r2, y: r, type: initColor, image: types[initColor]});
    this._bubbles[initBubble.uid] = initBubble;
    var bias = 5;
    var key = Math.floor(Math.random() * 6) + 1;
    var k = 0;
    for (var _y = r; _y<= config.globalSize.height * config.initBubbleAreaHeight; _y += 2*r) {
        for (var _x = r2; _x<= config.globalSize.width - r2 + bias; _x += 3*r2) {
            var color = (++k == key) ? 5 : Math.floor(Math.random() * 5)
            var bubble = new Bullet({superview: this, x: _x, y: _y, type: color, image: types[color]});
            this._bubbles[bubble.uid] = bubble;
        }
    }
    for (var _x = 2.5*r2; _x<= config.globalSize.width - 2.5 * r2 + bias; _x += 3*r2) {
        for (var _y = 2*r; _y<= config.globalSize.height * config.initBubbleAreaHeight; _y += 2*r) {
            var color = Math.floor(Math.random() * 5);
            var bubble = new Bullet({superview: this, x: _x, y: _y, type: color, image: types[color]});
            this._bubbles[bubble.uid] = bubble;
        }
    }
    // addEdges
    var bubbles = this._bubbles;
    for (var uid in bubbles) {
        var n = bubbles[uid];
        for (var uid2 in bubbles) {
            if(uid2 == uid) continue;
            var o = bubbles[uid2];
            var p1 = new Point(n.style.x, n.style.y);
            var p2 = new Point(o.style.x, o.style.y);
            var distance = (p1.subtract(p2)).getMagnitude();
            if (distance <= r * 2 + config.bias) {
                n._edges[uid2] = o;
                o._edges[uid] = n;
            }
        }
    }
}



