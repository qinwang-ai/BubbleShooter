/**
 * Created by Tsunami on 12/11/2016.
 */
import ui.View;
import ui.ImageView;
import ui.TextView;
import animate;
import src.Bullet as Bullet;
exports = Class(ui.View, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            width:320,
            height:680
        });
        supr(this, 'init', [opts]);
        this.build();
    }
    this.build = function() {
        this.on('app:start', start_game_flow.bind(this));
    }

});
function start_game_flow () {
    buildGun.call(this);
    listenEvent.call(this);
}

function buildGun() {
    var bullet = new Bullet();
    this.addSubview(bullet);
    this._bullet = bullet;
    this.on('InputSelect', function(e, p) {
        bullet.emit('bullet:launch', p);
    })
}
function listenEvent() {
    var width = this.style._width;
    GC.app.engine.on('Tick', bind(this, function (dt) {
        if (this._bullet && this._bullet.style.y > 0) {
            if(this._bullet.style.x - 15 <= 0) {
                this._bullet.emit('bullet:touchLeftWall');
            }
            if(this._bullet.style.x + 15 >= width) {
                this._bullet.emit('bullet:touchRightWall');
            }
        } else {
            delete this._bullet
        }

    }));
}