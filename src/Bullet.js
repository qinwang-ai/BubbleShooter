import ui.ImageView;
import math.geom.Point as Point;
import animate;
import src.Config as config;
import src.SoundController as Sound;
import ui.ParticleEngine as ParticleEngine;
exports = Class(ui.ImageView, function(supr){
        this.init = function(opts) {
            opts = merge(opts, {
                x:165,
                y:450,
                width: 2*r,
                height:2*r,
                offsetX:-r,
                offsetY:-r,
                image:types[0],
                type:0
            });
            supr(this, 'init', [opts]);
            this._deviceWidth = GLOBAL.SCREEN_SIZE.width;
            this._magnLength = config.bulletMagnLength;
            this._delay = config.bulletSpeedDelay;
            this._sound = Sound.getSound();
            this._origin = new Point(this.style.x, this.style.y);
            this._type = opts.type;
            this._hit = false;
            this._shock = false;
            this._spark = false;
            this._edges = [];
            this._pEngine = new ParticleEngine({superview: this});

            this.build();
        }
        this.build = function() {
            var target, width = this._deviceWidth, delay = this._delay;
            this._animate = animate(this);
            this.on('bullet:launch', bind(this, function(point){
                if(this._isLoaded) {
                    target = this.magnitudeLength(point);
                    this._sound.play('lightning');
                    this._animate.now({x: target.x, y: target.y}, delay, animate.linear);
                    this._isLoaded = false;
                } else {
                    console.error('Bullet.build : bullet not loaded');
                }
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

        };
        // update every frame invoke by gamescreen's update
        this.updateParticle = function () {
            if(this._shock) {
                this.bulletParticle();
            }
            if(this._spark) {
                this.bulletSpark();
            }
            this._pEngine.runTick(500);
        };
        this.bulletParticle = function() {
            var particleObjects = this._pEngine.obtainParticleArray(10);
            for (var i = 0; i < 10; i++) {
                var pObj = particleObjects[i];
                pObj.dx = Math.random() * 10;
                pObj.width = 33;
                pObj.height = 33;
                if(this._animate.hasFrames()){
                    pObj.dy = Math.random() * 10;
                    pObj.image = GLOBAL.BULLET_PARTICLE[this._type];
                } else{
                    pObj.dy = -Math.random() * 10;
                    pObj.image = GLOBAL.TYPES[this._type];
                }
            }
            this._pEngine.emitParticles(particleObjects);
        }
        this.bulletSpark = function() {
            var particleObjects = this._pEngine.obtainParticleArray(5);
            for (var i = 0; i < 5; i++) {
                var pObj = particleObjects[i];
                pObj.dx = Math.random() * 40 - 20;
                pObj.dy = Math.random() * 40 - 20;
                pObj.width = 40;
                pObj.height = 40;
                pObj.image = 'resources/images/bomb.png';
            }
            this._pEngine.emitParticles(particleObjects);
        }
        this.updateAsFlyingBullet = function() {
            if (this.style.y > 0) {
                if(this.style.x <= r) {
                    this.emit('bullet:touchLeftWall');
                }
                if(this.style.x + r >= this._deviceWidth) {
                    this.emit('bullet:touchRightWall');
                }
            } else {
                this._animate.clear();
                this.removeFromSuperview();
            }
        };
        this.updateAsNormalBubble = function(gun) {
            var bullet = gun._bullet;
            var v1 = new Point(bullet.style.x, bullet.style.y);
            var v2 = new Point(this.style.x, this.style.y);
            var distance = (v1.subtract(v2)).getMagnitude();
            if (distance <= r * 2) {
                // stop
                bullet._animate.clear();
                // adjust position
                this.deployBulletAfterHit(v1.getAngle(), bullet);
                this._sound.play('attack');
                bullet._hit = true;
                this.searchOverlapBubble(bullet);
            }
        };
        this.shock = function() {
            var that = this;
            that._shock = true;
            setTimeout(function(){that._shock = false}, 200);
        }
        this.spark = function() {
            var that = this;
            that._spark = true;
            this._sound.play('bubble_xiaochu');
            setTimeout(function(){
                that._spark = false;
            }, 200);
        }
        this.searchOverlapBubble = function (bullet) {
            var superview = this.getSuperview();
            var bubbles = superview._bubbles, findTheKey = false;
            for(var i in bubbles){
                var v1 = new Point(bullet.style.x, bullet.style.y);
                var v2 = new Point(bubbles[i].style.x, bubbles[i].style.y);
                var distance = (v1.subtract(v2)).getMagnitude();
                if (distance <= r * 2 + config.bias) {
                    if (bubbles[i]._type == config.keyType) {
                        findTheKey = true;
                        break;
                    }
                    bullet._edges[i] = bubbles[i];
                    bubbles[i]._edges[bullet.uid] = bullet;
                    bubbles[i].shock();
                }
            }
            bubbles[bullet.uid] = bullet;
            if(findTheKey) {
                setTimeout(bind(this, function(){
                    this.getSuperview().emit('app:end', true);
                }), 300);
                return;
            }
            var removeList = this.checkRemoveBFS(bullet);
            if (removeList.length >= 3) {
                setTimeout(bind(this,function(){
                    this.removeBubbles(removeList, bubbles);
                    setTimeout(bind(this,function(){
                        this.removeSuspendBubble(bubbles);
                    }), 400);
                }), 400);
            }
        }

        this.checkRemoveBFS = function (bullet) {
            var queue = [], head = 0, tail = 0, flag =[], removeList = [];
            queue.push(bullet);
            while(head<=tail) {
                var n = queue[head];
                flag[n.uid] = true;
                head += 1;
                removeList.push(n);
                for (var i in n._edges) {
                    var o = n._edges[i];
                    if ((o._type == n._type) && !flag[o.uid]) {
                        tail += 1;
                        queue.push(o);
                    }
                }
            }
            return removeList;
        }
        this.removeSuspendBubble = function(bubbles){
            var removeList = [];
            for (var i in bubbles) {
                if (!this.canAccessCelling(bubbles[i])) {
                   removeList.push(bubbles[i]);
                }
            }
            if (removeList.length > 0){
                this.removeBubbles(removeList, bubbles, true);
            }
        };
        this.removeBubbles = function (removeList, bubbles, isSuspend){
            var gameScreen = removeList[0].getSuperview();
            gameScreen._isRemoving = true;
            for (var i = 0;i < removeList.length;i ++) {
                var o = removeList[i];
                // remove this object from other bubbles
                for (var j in o._edges) {
                    var other = o._edges[j];
                    delete(other._edges[o.uid]);
                }
                // remove from global bubbles list
                o.spark();
            }
            // after play spark frames
            setTimeout(function() {
                for (var i = 0;i < removeList.length;i ++) {
                    var o = removeList[i];
                    o.removeFromSuperview();
                    delete(bubbles[o.uid]);
                }
                var _gameScreen = gameScreen;
                setTimeout(function(){_gameScreen._isRemoving = false},200);
            }, 300);

            if (!isSuspend){
                setTimeout(bind(this, function(){
                    var ad = admire[Math.floor(Math.random()*3)];
                    this._sound.play(ad);
                    if(ad == 'perfect') ad = gameScreen._perfect;
                    else if(ad == 'great') ad = gameScreen._great;
                        else if(ad == 'nice') ad = gameScreen._nice;
                    ad.show();
                    setTimeout(function(){ad.hide()},500);
                }), 600);
            }
        }
        this.canAccessCelling = function (b) {
            var queue = [], head = 0, tail = 0, flag =[], removeList = [];
            queue.push(b);
            if (b.style.y <= r) return true;
            while(head<=tail) {
                var n = queue[head];
               flag[n.uid] = true;
                head += 1;
                removeList.push(n);
                for (var i in n._edges) {
                    var o = n._edges[i];
                    if (o.style.y <= r) return true;
                    if (!flag[o.uid]) {
                        tail += 1;
                        queue.push(o);
                    }
                }
            }
            return false;
        }
        this.deployBulletAfterHit = function(angle, bullet) {
            var t = this.style, mini;
            for (var i = 0; i< Edge.length;i++){
                if(Hexagon[i].s < angle && angle < Hexagon[i].t) {
                    bullet.style.x = t.x + Edge[i].dx;
                    bullet.style.y = t.y + Edge[i].dy;
                    mini = i;
                    break;
                }
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

var r = GLOBAL.BUBBLE_RADIUS;
var r2 = GLOBAL.BUBBLE_RADIUS2;
var types = GLOBAL.TYPES;
var Hexagon = config.Hexagon;
var Edge = config.Edge;
var admire = [
    'perfect',
    'nice',
    'great'
];
