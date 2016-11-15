b47095444ca93b9213da2e16dd953e0c
jsio("from util.browser import $");jsio("import .Widget");
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Canvas=__class__,Canvas=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Canvas(function(){return this.init&&this.init.apply(this,arguments)},Widget,function(b){this._css="cnvs";this._type="canvas";this.init=function(a){a=merge(a,{tag:"canvas"});this._isEnabled=a.isEnabled;b(this,"init",[a])};this.create=function(){b(this,"create",arguments)};this.buildWidget=function(){var a=
this._el;a.width=this._opts.width;a.height=this._opts.height;this._opts.color&&(a.style.backgroundColor=this._opts.color);this.initMouseEvents(a);this.initKeyEvents(a)}});
