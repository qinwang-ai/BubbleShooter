0e5cd43fe1eb64ce3ef37481f97bab80
jsio("from util.browser import $");jsio("import squill.Widget");jsio("import squill.models.bindings as bindings");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Label=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Label(function(){return this.init&&this.init.apply(this,arguments)},squill.Widget,function(){this._css="label";this._def={children:[{id:"_labelSpan",tag:"span"}]};this.buildWidget=function(){this.setLabel(this.getI18n("label"));var a=this._opts;a.format&&bindings.parseFormat(this,a.format)};this.setData=this.setValue=this.setLabel=this.setText=function(a){$.setText(this._labelSpan,a)};this.setHTML=function(a){this._labelSpan.innerHTML=
a}});
