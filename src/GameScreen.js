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
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            width:320,
            height:680,
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
            width: 320,
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
    listenEvent.call(this);
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
function listenEvent() {
    GC.app.engine.on('Tick', bind(this, function (dt) {
        if (this._gun) {
            this._gun.update();
        }
    }));
}