3eb60d6a50d32ce94819fc23a938d961
var gLang=null;exports.setLang=function(a){gLang=a};exports.get=function(a){return gLang&&gLang.get(a)};exports.Language=__class__;exports.Language=exports.Language(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){this._dict=a};this.add=function(a,b){this._dict[a]=b};this.get=function(a){return this._dict[a]}});
