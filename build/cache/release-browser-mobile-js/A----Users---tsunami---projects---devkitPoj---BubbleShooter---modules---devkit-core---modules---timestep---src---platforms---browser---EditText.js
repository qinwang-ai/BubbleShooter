108cb708a25586d164e366259f1452c1
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
jsio("from util.browser import $");jsio("import squill.Widget");jsio("import device");
var __keyboardIsOpen=!1,InputField=__class__,InputField=InputField(function(){return this.init&&this.init.apply(this,arguments)},squill.Widget,function(e){this._def={tag:"input",parent:document.body,style:{position:"absolute",background:"transparent",border:"none",outline:"none",zIndex:"990000",left:"0px",top:"0px"}};this.buildWidget=function(){this.initKeyEvents();this.initFocusEvents()};this.setValue=function(a){this._prevValue=this._el.value=a};this.setCursor=function(a){this._el.selectionStart=
this._el.selectionEnd=a};this.setPlaceholder=function(a){this._el.placeholder=a};this.setMaxLength=function(a){this._el.maxlength=a};this.show=function(){e(this,"show",arguments);this._el.focus()};this.onKeyUp=function(a){var b=this._el;_focused&&_focused.onChange(b.value,this._prevValue,b.selectionStart,b.selectionEnd);this._prevValue=b.value;13==a.keyCode&&_focused&&_focused.closeEditField()};this.getValue=function(){return this._el.value};this.onBlur=function(){this.hide();if(__keyboardIsOpen){__keyboardIsOpen=
!1;var a=new Event("keyboardClosed");a.height=device.screen.height;window.dispatchEvent(a)}_focused&&_focused.closeEditField();_focused=null};this.setFontColor=function(a){this._el.style.color=a};this.setHorizontalPadding=function(a,b){this._el.style.paddingLeft=a+"px";this._el.style.paddingRight=b+"px"};this.setFontSize=function(a){this._el.style.fontSize=a+"px"};this.setFontFamily=function(a){this._el.style.fontFamily=a};this.setPosition=function(a,b,c,e){var d=this._el.style;d.top=b-1+"px";d.left=
a+"px";d.width=c+"px";d.height=e+"px"}}),_input=new InputField;_input.hide();var _focused=null,Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_EditText=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_EditText(function(){return this.init&&this.init.apply(this,arguments)},function(){var e={hint:"",inputType:"default",maxLength:-1};this.init=function(a){this._opts=merge(a,e);this._textEditView=a.textEditView;this.onFocusChange=a.onFocusChange||function(){};this.onSubmit=a.onSubmit||function(){}};this.onChange=function(a,b,c){this._value=a;if(this._opts.onChange)this._opts.onChange(a,
b,c)};this.getValue=function(){return this._value};this.setValue=function(a){this._value=a;this.onChange(a)};this.requestFocus=function(a){_focused!==this&&(null!=_focused&&_focused.removeFocus(a),this.onFocusChange(!0));_focused=this};this.closeEditField=function(a){console.log("TextEditView editText removeFocus");null!=_focused&&_focused.removeFocus(a);this._showTextBox();_input.hide();__keyboardIsOpen&&(__keyboardIsOpen=!1,a=new Event("keyboardClosed"),a.height=device.screen.height,window.dispatchEvent(a))};
this._hideTextBox=function(){this._textEditView._textBox.style.visible=!1};this._showTextBox=function(){this._textEditView._textBox.style.visible=!0};this.refresh=function(a,b,c,e){this._hideTextBox();var b=this._textEditView._textBox,c=this._textEditView.getPosition(),d=c.width/this._textEditView.style.width;_input.setCursor(e);_input.setValue(a);_input.setPlaceholder(this._opts.hint);_input.setMaxLength(this._opts.maxLength);_input.setFontColor(this._opts.color);_input.setHorizontalPadding(this._opts.paddingLeft*
d,this._opts.paddingRight*d);_input.setFontSize(b.getOpts().size*d);_input.setFontFamily(b.getOpts().fontFamily);_input.setPosition(c.x,c.y,c.width,c.height);_input.show();__keyboardIsOpen||(__keyboardIsOpen=!0,a=new Event("keyboardOpened"),a.height=0.6*device.screen.height,window.dispatchEvent(a))};this.hasFocus=function(){return this==_focused};this.removeFocus=function(a){this.onFocusChange(!1);if(!a)this.onSubmit(_input.getValue());_focused==this&&(_focused=null)};this.setHint=function(a){this._opts.hint=
a}});
