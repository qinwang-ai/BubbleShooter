import ui.View;
import ui.ImageView;
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x:0,
            y:0,
            image: "resources/images/title_screen.png",
        });
        supr(this, 'init', [opts]);
        this.build();
    }
    this.build = function() {
        var startButton = new ui.View({
            superview:this,
            x: 58,
            y:313,
            width:200,
            height:100,
            backgroundColor: '#F16E50'
        });
        startButton.on('InputSelect', bind(this, function(){
            this.emit('titlescreen:start');
        }))
    }
});