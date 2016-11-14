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

    };
});
