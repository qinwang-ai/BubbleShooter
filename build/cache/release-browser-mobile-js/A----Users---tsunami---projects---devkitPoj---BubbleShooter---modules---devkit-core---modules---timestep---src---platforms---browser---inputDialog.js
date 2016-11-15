553120c538a8e9de831716c6fa3c5b1b
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
jsio("import device");jsio("from util.browser import $");jsio("import ...ui.keyboardTypes as keyboardTypes");jsio("import .dom");exports.show=function(b,a){new InputDialog(b,a)};
var css={classes:{base:"timestep-native-dialog",dialog:"dialog",title:"title",hasMessage:"has-message",message:"message",buttons:"buttons",input:"input"},getStylesheet:function(){var b=dom.getCSSPrefix();return(new dom.Stylesheet("."+this.classes.base)).add("","position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 9999999; background: rgba(0, 0, 0, 0.5);").add("*",b+"box-sizing: border-box; font: 12px Helvetica").add("."+this.classes.dialog,"position: absolute; color: #444; background: rgba(255, 255, 255, 0.93); border-radius: 5px; text-align: left; "+
b+"box-shadow: 0px 3px 40px rgba(0, 0, 0, 0.2)").add("."+this.classes.hasMessage,"margin-bottom: 16px").add("."+this.classes.title,"padding: 16px; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap").add("."+this.classes.message,"padding: 0px 16px; color: #888").add("."+this.classes.buttons,"margin: 16px 0px 0px 0px; height: 34px; border-top: 1px solid #CCC").add("."+this.classes.input,"padding: 0px 8px").add("button","position: relative; border: 0px; margin: 0px; width: 50%; height: 100%; cursor: pointer; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: bold; background: transparent; outline: none").add("button:active",
"background: #FFF").add("button:first-child","border-bottom-left-radius: 5px").add("button:last-child","border-bottom-right-radius: 5px").add("button:only-child","width: 100%; border-bottom-right-radius: 5px").add("button:nth-child(2):before",'content:""; position: absolute; left: 0px; top: 0px; width: 1px; height: 100%; border-left: 1px solid #CCC').add("input","margin: 0px; border: 1px solid #ccc; padding: 4px 8px; text-align: left; width: 100%")},sizeAndPositionDialog:function(b,a){var c=device.devicePixelRatio,
d=$.size(window);a.style.overflow="auto";a.style.maxHeight=Math.min(200*c,Math.floor(d.height/3))+"px";b.style.maxWidth=Math.min(300*c,Math.floor(d.width-40))+"px";b.style.left=Math.max(0,(d.width-b.offsetWidth)/2)+"px";b.style.top=Math.max(0,(d.height-b.offsetHeight)/2)+"px"}},dialogStylesheet,InputDialog=__class__,InputDialog=InputDialog(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(b,a){var c=a.defaultBrowserStyles;!dialogStylesheet&&c&&(dialogStylesheet=
css.getStylesheet().scale(device.devicePixelRatio).insert());!a.okText&&!a.cancelText&&(a.okText="ok");this._buttons=[];a.cancelText&&this._createButton(a.cancelText,a.onCancel);a.okText&&this._createButton(a.okText,a.onSubmit);a.isPassword&&(a.keyboardType="password");this._createInputField(a.value,a.keyboardType,a.onChange);var d=$({className:a.message&&c&&css.classes.hasMessage,children:[{className:c&&css.classes.title,text:a.title},{className:a.message&&c&&css.classes.message,text:a.message}]}),
e=$({className:c&&css.classes.dialog,children:[d,{className:c&&css.classes.input,children:[this._input]},{className:c&&css.classes.buttons,children:this._buttons}]});this._el=$({parent:document.body,className:c&&css.classes.base,children:[e]});$.onEvent(this._el,device.events.move,function(a){for(var b=a.target;b&&b!=document.body;){if(b==e)return;b=b.parentNode}a.preventDefault()});c&&css.sizeAndPositionDialog(e,d);a.autoFocus&&this._input.focus();if(a.onShow)a.onShow(e)};this.close=function(){$.remove(this._el)};
this._createButton=function(b,a){var c=$({tag:"button",text:b,attrs:{noCapture:!0}});$.onEvent(c,device.events.end,function(){this.close();a&&a&&a(this.getValue())}.bind(this));this._buttons.push(c)};this._createInputField=function(b,a,c){a=$({tag:"input",value:b,attrs:{noCapture:!0,type:keyboardTypes.getHTMLType(a)}});if(c){void 0===b&&(b="");var d=function(a){var d=this.getValue();b!==d&&(b=d,c(d,a))}.bind(this);$.onEvent(a,"keyup",d);$.onEvent(a,"change",d)}this._input=a};this.getValue=function(){return this._input&&
this._input.value}});
