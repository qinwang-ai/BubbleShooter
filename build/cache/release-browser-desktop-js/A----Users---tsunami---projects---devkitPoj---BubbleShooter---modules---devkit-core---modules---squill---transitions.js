a3e6ef27269b92295e8f224a898e003b
jsio("import lib.PubSub");
var Transition=__class__,Transition=Transition(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){this.init=function(a){this._target=a.target;this._start=a.start;this._end=a.end;setTimeout(bind(this,"run"),0)};this.run=function(){}}),CSSTransition=__class__,CSSTransition=CSSTransition(function(){return this.init&&this.init.apply(this,arguments)},Transition,function(){this.run=function(){var a=this._target;this._start&&this._start(a);this.emit("start",this._target);
(a=getComputedStyle(a).transitionDuration||0)&&(a=parseFloat(a)*(/ms/.test(a)?1:1E3));setTimeout(bind(this,"end"),a)};this.end=function(){var a=this._target;this._end&&this._end(a);this.emit("end",a)}});exports.Transition=Transition;exports.CSSTransition=CSSTransition;exports.cssFadeIn=function(a){return new CSSTransition({target:a,start:function(a){a.style.opacity=1}})};
exports.cssFadeOut=function(a){var b;return new CSSTransition({target:a,start:function(a){b=a.style.pointerEvents;a.style.pointerEvents="none";a.style.opacity=0},end:function(a){a.style.pointerEvents=b;a.parentNode&&a.parentNode.removeChild(a)}})};