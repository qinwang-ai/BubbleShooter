c23c970ff6eb94d6f948cb1506ad9b48
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
jsio("import lib.PubSub");jsio("from util.browser import $");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_TextInput=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_TextInput(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){this.init=function(d){this._el=$({tag:"input",parent:document.body,style:{position:"absolute",left:"-100px",top:"-100px"},attrs:{type:"text",value:d&&d.value||""}});this._value=this._el.value;this._selectionEnd=this._selectionStart=0;$.onEvent(this._el,"keydown",this,"checkValue");$.onEvent(this._el,
"keyup",this,"checkValue");$.onEvent(this._el,"keypress",this,"checkValue");$.onEvent(this._el,"focus",this,"onFocus");$.onEvent(this._el,"blur",this,"onBlur")};this.onFocus=function(){this.publish("Focus")};this.onBlur=function(){this.publish("Blur")};this.checkValue=function(d){var a=d.target,d=a.selectionStart,a=a.selectionEnd,b=this._el.value;b!=this._value&&(this.publish("ChangeValue",b),this._value=b);d!=this._selectionStart&&(this._selectionStart=d,this.publish("ChangeSelectionStart",d));a!=
this._selectionEnd&&(this._selectionEnd=a,this.publish("ChangeSelectionEnd",a))};this.focus=function(){logger.LOG&&console.log("LOG",".TextInput","focus");this._el.focus()};this.blur=function(){this._el.blur()}});var tab="    ",tabLength=4;Array.prototype.map.call(document.getElementsByTagName("textarea"),function(d){d.addEventListener("keydown",checkTab,!1)});
function checkTab(d){var a=d.target,b=a.selectionStart,e=a.selectionEnd;if(9==d.keyCode)if(d.preventDefault(),d.shiftKey)if(b!=e&&-1!=a.value.slice(b,e).indexOf("\n")){for(var c=b;c&&"\n"!=a.value.charAt(c-1);)--c;var d=a.value.slice(0,c),f=a.value.slice(e,a.value.length),c=a.value.slice(c,e).replace(RegExp("(^|\n)"+tab,"g"),function(a){e-=tab.length;if("\n"==a.charAt(0))return"\n";b-=tab.length;return""});a.value=d.concat(c).concat(f);a.selectionStart=b;a.selectionEnd=e}else{for(c=b;c&&"\n"!=a.value.charAt(c-
1);)--c;a.value.substring(c,c+tab.length)==tab&&(a.value=a.value.slice(0,c).concat(a.value.slice(c+tab.length,a.value.length)),b==e?a.selectionStart=a.selectionEnd=b-(b==c?0:tab.length):(a.selectionStart=b-(b==c?0:tab.length),a.selectionEnd=e-tab.length))}else if(b!=e&&-1!=a.value.slice(b,e).indexOf("\n")){for(c=b;c&&"\n"!=a.value.charAt(c-1);)--c;d=a.value.slice(0,c);f=a.value.slice(e,a.value.length);c=a.value.slice(c,e).replace(/\n/g,function(){e+=tab.length;return"\n"+tab});a.value=d.concat(tab).concat(c).concat(f);
a.selectionStart=b+tab.length;a.selectionEnd=e+tab.length}else{for(c=b;c&&"\n"!=a.value.charAt(c-1);)--c;a.value=a.value.slice(0,c).concat(tab).concat(a.value.slice(c,a.value.length));b==e?a.selectionStart=a.selectionEnd=b+tab.length:(a.selectionStart=b+tab.length,a.selectionEnd=e+tab.length)}else!d.shiftKey&&(!d.metaKey&&!d.ctrlKey)&&(8==d.keyCode&&a.value.slice(b-tabLength,b)==tab?(d.preventDefault(),a.value=a.value.slice(0,b-tabLength).concat(a.value.slice(b,a.value.length)),a.selectionStart=a.selectionEnd=
b-tab.length):46==d.keyCode&&a.value.slice(e,e+tabLength)==tab?(d.preventDefault(),a.value=a.value.slice(0,b).concat(a.value.slice(b+tabLength,a.value.length)),a.selectionStart=a.selectionEnd=b):37==d.keyCode&&a.value.slice(b-tabLength,b)==tab?(d.preventDefault(),a.selectionStart=a.selectionEnd=b-tabLength):39==d.keyCode&&a.value.slice(b,b+tabLength)==tab&&(d.preventDefault(),a.selectionStart=a.selectionEnd=b+tabLength))};
