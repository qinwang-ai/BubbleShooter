import ui.TextView as TextView;
import device;
import ui.StackView as StackView;
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.SoundController as Sound;
import src.Config as config;

exports = Class(GC.Application, function () {

  this.initUI = function () {
      var titleScreen = new TitleScreen(),
          gameScreen = new GameScreen(),
            sound = Sound.getSound(),
          rootView = new StackView({
              superview:this,
              x:0,
              y:0,
              width:config.globalSize.width,
              height:680,
              clip:true,
              scale:device.width / config.globalSize.width
          });
      rootView.push(titleScreen);
      sound.play('main_music');
      titleScreen.on("titlescreen:start", function() {
          sound.stop('main_music');
          rootView.push(gameScreen);
          gameScreen.emit('app:start');
      });
      gameScreen.on('gamescreen:end', function() {
          sound.stop('bg_music');
          rootView.pop();
          sound.play('main_music');
      });

  };
  this.launchUI = function () {
  };
});
