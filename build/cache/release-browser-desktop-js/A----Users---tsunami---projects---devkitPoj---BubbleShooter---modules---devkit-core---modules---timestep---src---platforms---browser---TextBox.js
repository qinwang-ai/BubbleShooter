bbf5937152e8ee43a88e0b28537cbeae
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
jsio("from util.browser import $");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_TextBox=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_TextBox(function(){return this.init&&this.init.apply(this,arguments)},function(){var c={padding:0,lineHeight:1.4,border:"none",display:"none",textAlign:"center",verticalAlign:"middle",fontSize:16,fontFamily:null,fontWeight:"",opacity:1,position:"absolute",backgroundColor:"transparent",top:0,left:0};this.init=function(a){var a=merge(a,{color:"black",height:20}),b=merge({},c);a.color&&(b.color=
a.color);this._el=$({tag:a.multiLine?"textarea":"input",attrs:{type:"text"},style:b});$.onEvent(this._el,"blur",this,"onBlur");$.onEvent(this._el,"focus",this,"onFocus");$.onEvent(this._el,"change",this,"onChange");$.onEvent(this._el,"click",this,"onClick")};this.onBlur=this.onFocus=this.onChange=this.onClick=function(){};this.destroy=function(){$.remove(this._el);this._el=null};this.setApp=function(a){if(a!=this._app||!this._el.parentNode)this._app=a,a=a._ctx.canvas,logger.LOG&&console.log("LOG",
".TextBox","setting parent",this._el),a.parentNode.appendChild(this._el)};this.change=function(){};this.click=function(){};this.selectAll=function(){this._el.focus();this._el.select()};this.show=function(){$.show(this._el)};this.hide=function(){$.hide(this._el)};this.setValue=function(a){this._el.value=a;return this};this.setOpacity=function(a){this._el.style.opacity=a;return this};this.setType=function(a){this._el.type=a;return this};this.setVisible=function(a){return this[a?"show":" hide"]()};this.getX=
function(){return parseInt(this._el.style.left)};this.getY=function(){return parseInt(this._el.style.top)};this.getWidth=function(){return this._el.offsetWidth};this.getHeight=function(){return this._el.offsetHeight};this.getValue=function(){return this._el.value};this.getOpacity=function(){return this._el.style.opacity};this.getType=function(){return this._el.type};this.getVisible=function(){return this._el.parentNode&&"block"==this._el.style.display};this.setPosition=function(a){this._el.style.top=
a.y+"px";this._el.style.left=a.x+"px"};this.getPosition=function(){return{x:this.getX(),y:this.getY()}};this.setDimensions=function(a){this._el.style.width=a.width+"px";this._el.style.height=a.height+"px";return this};this.getDimensions=function(){return{width:this.getWidth(),height:this.getHeight()}}});
