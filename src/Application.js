import ui.TextView as TextView;
import device;
import ui.StackView as StackView;
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.SoundController as SoundController;

exports = Class(GC.Application, function () {

  this.initUI = function () {
      var titleScreen = new TitleScreen(),
          gameScreen = new GameScreen(),
         // sound = SoundController.getSound(),
          rootView = new StackView({
              superview:this,
              x:0,
              y:0,
              width:320,
              height:680,
              clip:true,
              scale:device.width / 320
          });
      rootView.push(titleScreen);
      titleScreen.on("titlescreen:start", function() {
          rootView.push(gameScreen);
          gameScreen.emit('app:start');
      });
      gameScreen.on('gamescreen:end', function() {
          rootView.pop();
      });

  };
  this.launchUI = function () {
  };
});
