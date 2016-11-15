c4f3b18106adc7bc242d34e8eecc2160
jsio("import .Button, .Widget");jsio("from util.browser import $");
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_TextButton=__class__,TextButton=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_TextButton(function(){return this.init&&this.init.apply(this,arguments)},Button,function(){this._type="text-button";this.buildWidget=function(){var a=this._el;$.setText(a,this.getI18n("label")||this.getI18n("text"));this.initMouseEvents(a);this.initKeyEvents(a)};this.setLabel=function(a){this._opts.label=
a;this._el&&$.setText(this._el,a)}});Widget.register(TextButton,"TextButton");
