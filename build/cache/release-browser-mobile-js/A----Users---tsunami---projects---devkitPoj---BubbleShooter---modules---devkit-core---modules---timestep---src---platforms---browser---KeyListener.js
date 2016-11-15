180400ebbff1af42277d75d78157305c
/*

 This file is part of the Game Closure SDK.

 The Game Closure SDK is free software: you can redistribute it and/or modify
 it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 The Game Closure SDK is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 Mozilla Public License v. 2.0 for more details.

 You should have received a copy of the Mozilla Public License v. 2.0
 along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
*/
jsio("import lib.PubSub as PubSub");jsio("import lib.Enum");jsio("import event.input.keys as keyConstants");jsio("import device");jsio("import timer");jsio("from util.browser import $");var gListenerSingleton=null,gCancelKeys=lib.Enum(keyConstants.SPACE,keyConstants.LEFT,keyConstants.RIGHT,keyConstants.UP,keyConstants.DOWN),Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_KeyListener=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_KeyListener(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){if(gListenerSingleton)return gListenerSingleton;gListenerSingleton=this;this._el=a=a||document;this._events=[];this._shortcuts=[];this._isEnabled=!0;this._keyMap={};$.onEvent(a,"keydown",this,"onKeyDown");$.onEvent(a,"keypress",this,"onKeyPress");$.onEvent(a,"keyup",this,"onKeyUp");
$.onEvent(window,"blur",this,"liftAll")};this.setEnabled=function(a){this._isEnabled=a};this.captureShortcut=function(a){this._shortcuts.push(a)};this.getPressed=function(){return this._keyMap};this.onKeyDown=function(a){if(this._isEnabled){var b={code:a.keyCode,ctrl:a.ctrlKey,shift:a.shiftKey,alt:a.altKey,meta:a.metaKey,lifted:!1,dt:timer.getTickProgress()};if(b.ctrl||b.shift||b.alt||b.meta){for(var d=!1,e=0,c;c=this._shortcuts[e];++e)c.compare(b)&&(c.publish("Down",b),d=!0);d&&$.stopEvent(a)}else $.stopEvent(a),
a.keyCode in this._keyMap||(this._events.push(b),this._keyMap[a.keyCode]=+new Date)}};this.liftAll=function(){var a=timer.getTickProgress(),b;for(b in this._keyMap)this._events.push({code:b,lifted:!0,dt:a});this._keyMap={}};this.onKeyUp=function(a){var b=timer.getTickProgress();delete this._keyMap[a.keyCode];this._events.push({code:a.keyCode,lifted:!0,dt:b});$.stopEvent(a)};this.onKeyPress=function(a){this._isEnabled&&a.keyCode in gCancelKeys&&$.stopEvent(a)};this.peekEvents=function(){return this._events};
this.popEvents=function(){return this._events.splice(0,this._events.length)}});merge(exports.prototype,keyConstants);exports.Shortcut=__class__;exports.Shortcut=exports.Shortcut(function(){return this.init&&this.init.apply(this,arguments)},PubSub,function(){this.init=function(a,b,d,e,c){this.ctrl=!!b;this.shift=!!d;this.alt=!!e;this.meta=!!c;this.code=!!a};this.compare=function(a){return this.ctrl==a.ctrl&&this.alt==a.alt&&this.meta==a.meta&&this.shift==a.shift&&this.code==a.code}});
