00d96677e7a21fb4688351a8c8796f34
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
jsio("import ui.View as View");jsio("import ui.resource.Image as Image");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_ImageView=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_ImageView(function(){return this.init&&this.init.apply(this,arguments)},View,function(d){this.init=function(a){a=merge(a,{image:null,autoSize:!1});d(this,"init",[a]);var b=this.__view._node.style;b.webkitBackgroundClip=b.backgroundClip="content-box";a.image&&this.setImage(a.image,a)};this.updateOpts=function(a){a=d(this,"updateOpts",arguments);"autoSize"in a&&(this._autoSize=!!a.autoSize);
a.image?this.setImage(a.image):this.needsReflow();return a};this.autoSize=function(){this._img&&(this.style.width=this._img.getWidth(),this.style.height=this._img.getHeight(),this.style.fixedAspectRatio&&this.style.updateAspectRatio())};this._imgCache={};this.getImage=function(){return this._img};this.setImage=function(a,b){if("string"==typeof a){var c=a;(a=this._imgCache[c])||(this._imgCache[c]=a=new Image({url:c}))}a!=this._img&&(this._img&&this._img.unsubscribe("changeBounds",this),(this._img=
a)?(a.subscribe("changeBounds",this,"updateImage"),(this._autoSize=b&&"autoSize"in b?b.autoSize:this._autoSize)&&(0<a.getWidth()&&0<a.getHeight()?this.autoSize():a.doOnLoad(this,"autoSize")),a.doOnLoad(this,"updateImage")):this.updateImage())};this.reflow=function(){this.updateImage()};this._getBackgroundNode=function(a){this._bgNodes||(this._bgNodes={});var b=this._bgNodes[a];b||(this._bgNodes[a]=b=document.createElement("div"),b.style.cssText="-webkit-background-clip:content-box;background-clip:content-box;z-index:-1;position:absolute;top:0;left:0;bottom:0;right:0;background-image:"+
a+";",this.__view._node.appendChild(b));b!=this._currentBgNode&&(this._currentBgNode&&(this._currentBgNode.style.visibility="hidden"),this._currentBgNode=b,b.style.visibility="visible");return b};this._canvasRender=function(a){var b=this._img.getSource();a.drawImage(b,0,0,b.width,b.height,0,0,this.style.width,this.style.height)};this.updateImage=function(){var a=this._img,b=this._opts["dom:multipleImageNodes"];if(a&&a.getSource()instanceof HTMLCanvasElement)this.render=this._canvasRender,this.needsRepaint();
else if(!a||!a.isReady())b&&this._currentBgNode?this._currentBgNode.style.visibility="hidden":this.__view._node.style.backgroundImage="none";else{var c='url("'+a.getSource().src+'")',d=a.getSourceWidth(),g=a.getSourceHeight(),e=this.style.width/a.getWidth(),f=this.style.height/a.getHeight();b?b=this._getBackgroundNode(c).style:(b=this.__view._node.style,this._cacheImageURL!=c&&(this._cacheImageURL=c,b.backgroundImage=c));a=a.getBounds();b.padding=f*a.marginTop+"px "+e*a.marginRight+"px "+f*a.marginBottom+
"px "+e*a.marginLeft+"px";b.backgroundPositionX=e*(-a.x+a.marginLeft)+"px";b.backgroundPositionY=f*(-a.y+a.marginTop)+"px";b.backgroundSize=d*e+"px "+g*f+"px"}};this.getOrigWidth=this.getOrigW=function(){return this._img.getOrigW()};this.getOrigHeight=this.getOrigH=function(){return this._img.getOrigH()};this.doOnLoad=function(){1==arguments.length?this._img.doOnLoad(this,arguments[0]):this._img.doOnLoad.apply(this._img,arguments);return this}});
