/**
 * Created by Tsunami on 12/11/2016.
 */
import ui.View;
import ui.ImageView;
import ui.TextView;
import animate;
import src.Bullet as Bullet;
import src.Gun as Gun;
import src.SoundController as sound;
import src.Config as config;
import math.geom.Point as Point;
import ui.ParticleEngine as ParticleEngine;

exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            y:0,
            width:GLOBAL.SCREEN_SIZE.width,
            height:GLOBAL.SCREEN_SIZE.height,
            image: 'resources/images/background_1.jpg',
        });
        supr(this, 'init', [opts]);
        this._bubbles = {};
        this._sound = sound.getSound();
        this._gun = null;
        this._timeBoard = null;
        this._keyPosition = null;
        this._isRemoving = false;
        this._gameStart = false;
        this.build();
    }
    this.build = function() {
        buildGun.call(this);
        this.on('app:start', startGameFlow.bind(this));
        this.on('app:end', endGameFlow.bind(this));
        checkEachFrame.call(this);
        this._perfect = new ui.ImageView({
            superview:this,
            x:GLOBAL.SCREEN_SIZE.width/2,
            y:GLOBAL.SCREEN_SIZE.height/2,
            image:'resources/images/perfect.png',
            width:260,
            height:61,
            offsetX:-130,
            offsetY:-30,
            visible:false
        });
        this._great = new ui.ImageView(merge({
            image:'resources/images/great.png',
            width:198,
            height:58,
            offsetX:-99,
            offsetY:-29,
        },this._perfect._opts));
        this._nice = new ui.ImageView(merge({
            image:'resources/images/nice.png',
            width:138,
            height:57,
            offsetX:-69,
            offsetY:-28.5,
        },this._perfect._opts));
    }
});
function startGameFlow () {
    var that = this;
    var readyBoard = new ui.TextView({
        superview: this,
        fontFamily:'Comic Sans MS',
        x: 0,
        y: 15,
        width: GLOBAL.SCREEN_SIZE.width,
        height: 50,
        autoSize: false,
        size: 38,
        verticalAlign: 'middle',
        horizontalAlign: 'center',
        wrap: false,
        color: '#fffc88'
    });
    that._sound.stop('main_music');
    animate(readyBoard).wait(1000)
        .then(function () {
            readyBoard.setText("Ready...");
            that._sound.play('start_ready');
        }).wait(1000).then(function () {
            readyBoard.setText("Go!");
            that._sound.play('start_go');
        }).wait(1000).then(function(){
        that._sound.play('bg_music');
        readyBoard.removeFromSuperview();
        play_game.call(that);
    });
}
function play_game() {
    this._gun.emit('gun:loaded');
    initBubbles.call(this);
    initTimeBoard.call(this);
    this._gameStart = true;
}
function buildGun() {
    var gun = new Gun({superview:this});
    this._gun = gun;
    this.on('InputMove', function(e, p) {
        gun.emit('gun:setTarget', p);
    });
    this.on('InputSelect', function(e, p) {
        gun.emit('gun:fire', p);
    });
}

function checkEachFrame() {
    GC.app.engine.on('Tick', bind(this, function (dt) {
        if (this._gun && this._gameStart) {
            var gun = this._gun;
            var bullet = gun._bullet;
            if(!bullet) return;
            if (bullet._animate.hasFrames()) {
                bullet.bulletParticle();
                bullet.updateAsFlyingBullet();
                // if hit bubble during loop, it will clear the frame,
                // when loop finished
                // tick can't access here, because has no frames
                // when updateNormalBubble may change _bubbles list
                for(var uid in this._bubbles) {
//                    this._bubbles[uid]._pEngine.runTick(500);
  //                  bulletParticle.call(this, this._bubbles[uid]);
                    if(Object.keys(this._bubbles[uid]._edges).length == 6) continue;
                    this._bubbles[uid].updateAsNormalBubble(gun);
                    if (bullet._hit)
                        break;
                }
                if(bullet._hit && bullet.style.y > GLOBAL.LOSE_LINE) {
                    this.emit('app:end', false);
                    return;
                }
                if (!bullet._isLoaded) {
                    gun.emit('gun:loaded');
                }
            }
            for(var uid in this._bubbles) {
               this._bubbles[uid].updateParticle();
            }
        }
    }));
}

function initBubbles() {
    var r = GLOBAL.BUBBLE_RADIUS;
    var r2 = GLOBAL.BUBBLE_RADIUS2;
    var types = GLOBAL.TYPES;
    var bias = 5;
    var key = Math.floor(Math.random() * 6) + 1;
    var k = 0;
    for (var _y = -r; _y<= GLOBAL.SCREEN_SIZE.height * config.initBubbleAreaHeight; _y += 2*r) {
        for (var _x = r2; _x<= GLOBAL.SCREEN_SIZE.width - r2 + bias; _x += 3*r2) {
            var bubble;
            if(_y == -r) {
                // prevent bullet out the screen
                bubble = new Bullet({superview: this, x: _x, y: _y, type: -1, image: ""});
            } else {
                var color = (++k == key) ? config.keyType : Math.floor(Math.random() * config.numberOfColor);
                if (color == config.keyType) this._keyPosition = {x:_x, y:_y};
                bubble = new Bullet({superview: this, x: _x, y: _y, type: color, image: types[color]});
            }
            this._bubbles[bubble.uid] = bubble;
        }
    }
    for (var _x = 2.5*r2; _x<= GLOBAL.SCREEN_SIZE.width - 2.5 * r2 + bias; _x += 3*r2) {
        for (var _y = 2*r; _y<= GLOBAL.SCREEN_SIZE.height * config.initBubbleAreaHeight; _y += 2*r) {
            var color = Math.floor(Math.random() * config.numberOfColor);
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
function initTimeBoard(){
    var m = 0, s = 0;
    this._timeBoard = new ui.TextView({
        superview: this,
        x: 0,
        y: 400,
        width: GLOBAL.SCREEN_SIZE.width,
        height: 20,
        autoSize: false,
        verticalAlign: 'middle',
        horizontalAlign: 'right',
        wrap: false,
        color: '#65f9ff',
        text:'00:00',
        opacity:0.5,
        padding:[0,14,0,0]
    });
    this._timer = setInterval(bind(this, function() {
        if(s >= 60) {
            s = 0;
            m += 1;
        }
        if(m >= 60) {
            this.emit('app:end');
        }
        var _m,_s;
        _m = (m < 10) ? '0' + m.toString() : m.toString();
        _s = (s < 10) ? '0' + s.toString() : s.toString();
        this._timeBoard.setText(_m+':'+_s);
        s += 1;
    }), 1000);
}
function endGameFlow(isWin) {
    this._gameStart = false;
    this._sound.stop('bg_music');
    var key = new ui.ImageView({
        superview:this,
        x :this._keyPosition.x,
        y :this._keyPosition.y,
        image:'resources/images/big_key.png',
        anchorX:0.5,
        anchorY:0.5,
        width:1,
        height:1
    });
    var that = this;
    if(isWin)
        animate(key).now({scale:300, x:GLOBAL.SCREEN_SIZE.width/2,
            y:GLOBAL.SCREEN_SIZE.width/2}, 1500).then(function(){
                key.removeFromSuperview();
                resetGame.call(that);
                that.emit('gamescreen:end', that._timeBoard.getText());
            }
        )
    else {
        that.emit('gamescreen:end', false);
        resetGame.call(that);
    }
}

function resetGame() {
    clearInterval(this._timer);
    this._timeBoard.removeFromSuperview();
    for(var i in this._bubbles) {
        this._bubbles[i].removeFromSuperview();
    }
    this._bubbles = {};
    if(this._gun._bullet) {
        this._gun._bullet.removeFromSuperview();
    }
}

