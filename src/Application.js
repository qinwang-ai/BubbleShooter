import ui.TextView as TextView;
import device;
import ui.StackView as StackView;
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.GameOverScreen as GameOverScreen;
import src.Config as config;
import src.SoundController as Sound;

exports = Class(GC.Application, function () {

  this.initUI = function () {
      var titleScreen = new TitleScreen(),
          gameOverScreen = new GameOverScreen(),
          gameScreen = new GameScreen(),
          rootView = new StackView({
              superview:this,
              x:0,
              y:0,
              width:GLOBAL.SCREEN_SIZE.width,
              height:GLOBAL.SCREEN_SIZE.height,
              clip:true,
              scale:device.width / GLOBAL.SCREEN_SIZE.width
          });
      rootView.push(titleScreen);
      titleScreen.on("titlescreen:start", function() {
          rootView.push(gameScreen);
          gameScreen.emit('app:start');
      });
      gameScreen.on('gamescreen:end', function(score) {
          rootView.push(gameOverScreen);
          gameOverScreen.emit('gameoverscreen:score', score);
      });
      gameOverScreen.on('InputSelect', function(){
          rootView.pop();
          rootView.pop();
          (Sound.getSound()).play('main_music');
      });
  };
  this.launchUI = function () {};
});
