e4b1e8d6f441edcdcfe9bbee85472276
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
jsio("import ui.View");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_StackView=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_StackView(function(){return this.init&&this.init.apply(this,arguments)},View,function(d){this.init=function(a){d(this,"init",arguments);this.stack=[]};this.getCurrentView=function(){return!this.stack.length?null:this.stack[this.stack.length-1]};this.push=function(a,b){!this.stack[0]&&!1!==b&&(b=!0);var c=this.getCurrentView();c&&this._hide(c,b);a.style.width=this.style.width;a.style.height=
this.style.height;this.stack.push(a);this._show(a,b);return a};this._hide=function(a,b,c){a.publish("ViewWillDisappear");b?(this.removeSubview(a),a.publish("ViewDidDisappear")):(b=new View({parent:a,zIndex:1E5}),a.then({x:(c?1:-1)*a.style.width}).then(bind(this,"removeSubview",a)).then(bind(a,"publish","ViewDidDisappear")).then(bind(b,"removeFromSuperview")))};this._show=function(a,b,c){a.publish("ViewWillAppear");a.style.visible=!0;b?(this.addSubview(a),a.style.x=0,a.publish("ViewDidAppear")):(a.style.x=
(c?-1:1)*this.style.width,this.addSubview(a),a.then({x:0}).then(bind(a,"publish","ViewDidAppear")))};this.pop=function(a){if(!this.stack.length)return!1;var b=this.stack.pop();this._hide(b,a,!0);this.stack.length&&this._show(this.stack[this.stack.length-1],a,!0);return b};this.popAll=function(a){for(;this.stack[1];)this.pop(a)}});
