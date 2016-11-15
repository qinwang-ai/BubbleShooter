import ui.ImageView;
import ui.TextView;
import animate;
import src.Config as config;
import src.SoundController as Sound;
import util.ajax as ajax;
import ui.ParticleEngine as ParticleEngine;
exports = Class(ui.ImageView, function(supr){
    this.init = function(opts) {
        opts = merge(opts, {
            x: 0,
            y: 0,
            width:GLOBAL.SCREEN_SIZE.width,
            height:GLOBAL.SCREEN_SIZE.height,
            image: 'resources/images/background_4.jpg'
        });
        supr(this, 'init', [opts]);
        this._sound = Sound.getSound();
        this._spark = false;
        this.build();
    }
    this.build = function() {
        var scoreBoard = new ui.TextView({
            superview: this,
            x: 0,
            y: 290,
            width: GLOBAL.SCREEN_SIZE.width,
            height: 190,
            size: 19,
            fontFamily:'Comic Sans MS',
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: true,
            color: '#FF9800',
            opacity:1,
            autoFontSize:false
        });
        var bestScore = new ui.TextView({
            superview: this,
            x:0,
            y: 255,
            width: GLOBAL.SCREEN_SIZE.width,
            height: 40,
            size: 30,
            fontFamily:'Comic Sans MS',
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            color: '#fe546c',
            opacity:1,
            autoFontSize:false
        })
        var myScore = new ui.TextView({
            superview : this,
            x:0,
            y:120,
            fontFamily:'Comic Sans MS',
            width: GLOBAL.SCREEN_SIZE.width,
            height: 50,
            size: 35,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: false,
            color: '#fffc88',
            opacity:1,
            text:'Time: ' + '00:00'
        });
        var myRank = new ui.TextView({
            superview : this,
            x:0,
            fontFamily:'Comic Sans MS',
            y:50,
            width: GLOBAL.SCREEN_SIZE.width,
            height: 40,
            size: 25,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: false,
            color: '#fffc88',
            opacity:1,
            text:'network error'
        });
        var goOn = new ui.TextView({
            superview : this,
            x:0,
            y:460,
            fontFamily:'Comic Sans MS',
            width: GLOBAL.SCREEN_SIZE.width,
            height: 50,
            size: 35,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            wrap: false,
            color: '#fff',
            opacity:1,
            text:'Go On'
        });
        this._pEngine = new ParticleEngine({
            superview: this
        });
        this.on('gameoverscreen:score', function(_score) {
            if(!_score) {
                this._sound.play('lose');
                myScore.setText('Lose');
                myRank.setText('no rank');
                scoreBoard.setText('');
                bestScore.setText('');
                return;
            }
            this._sound.play('win');
            this._spark = true;
            setTimeout(bind(this,function() {
                this._spark = false;
            }), 1000);
            myScore.setText('Time: ' + _score);
            ajax.get({
                url: config.serverUrl,
                data: {score: _score}
            }, function (err, res) {
                if (err) {
                    console.log(err);
                    myRank.setText('network error');
                } else {
                    res = eval("("+res+")");
                    myRank.setText(res.rank.toString() + 'th');
                    bestScore.setText("Best: " + res.scoreList[0]);
                    var t = '';
                    for(var i = 1; i < res.scoreList.length; i++) {
                        t += (i+1).toString() +'th: ' + res.scoreList[i] + '\n';
                    }
                    scoreBoard.setText(t);
                }
            });
        });
        GC.app.engine.on('Tick', bind(this, function (dt) {
            this._pEngine.runTick(400);
            if(this._spark){
                this.spark();
            }
        }));
    };
    this.spark = function() {
            var particleObjects = this._pEngine.obtainParticleArray(50);
            for (var i = 0; i < 50; i++) {
                var pObj = particleObjects[i];
                pObj.dx = Math.random() * 400;
                pObj.dy = Math.random() * 400;
                pObj.width = 15;
                pObj.height = 15;
                pObj.image = 'resources/images/spark.png';
            }
            this._pEngine.emitParticles(particleObjects);
        }
});
