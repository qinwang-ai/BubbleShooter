import ui.View;
import ui.ImageView;
import animate;
import src.SoundController as Sound;
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            y:0,
            image: 'resources/images/menu.jpg',
        });
        supr(this, 'init', [opts]);
        this._sound = Sound.getSound();
        this._sound.play('main_music');
        this.build();
    }
    this.build = function() {
        var startButton = new ui.ImageView({
            superview:this,
            x: 70,
            y: 250,
            width: 150,
            height:150,
            image: 'resources/images/start.png'
        });
        this.animateStartButton(startButton)
        startButton.on('InputSelect', bind(this, function(){
            this.emit('titlescreen:start');
        }))
    }
    this.animateStartButton = function(startButton) {
        animate(startButton).now({x:80, y:260, width:130, height:130}, 1000, animate.easeIn).then({
            x: 70,
            y: 250,
            width: 150,
            height:150,
        },1000, animate.easeOut).then(bind(this, function(){
            this.animateStartButton(startButton);
        }));
    }
});
