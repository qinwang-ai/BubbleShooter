748df68499aad187285fe69d1ea5d2ab
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
jsio("import ui.View as View");jsio("import device");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_TextView=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_backend_dom_TextView(function(){return this.init&&this.init.apply(this,arguments)},View,function(f){this._displayStyle="table";var g={wrap:!1,autoSize:!1,autoFontSize:!0,verticalPadding:0,horizontalPadding:0,lineHeight:1.2,color:"#000000",fontFamily:device.defaultFontFamily,fontWeight:"",size:128,lineWidth:2,strokeColor:"",shadowColor:"",verticalAlign:"middle",horizontalAlign:"center",backgroundColor:""};
this.init=function(a){var b=this._textNode=document.createElement("div");b.className="view text";f(this,"init",[merge(a,g)]);this.__view.getElement().appendChild(b)};this.updateOpts=function(a){var a=f(this,"updateOpts",arguments),b=this.__view.getElement().style;a.horizontalPadding&&(isArray(a.horizontalPadding)?(b.paddingLeft=a.horizontalPadding[0]+"px",b.paddingRight=a.horizontalPadding[0]+"px"):(b.paddingLeft=a.horizontalPadding+"px",b.paddingRight=a.horizontalPadding+"px"));a.verticalPadding&&
(isArray(a.verticalPadding)?(b.paddingTop=a.verticalPadding[0]+"px",b.paddingBottom=a.verticalPadding[0]+"px"):(b.paddingTop=a.verticalPadding+"px",b.paddingBottom=a.verticalPadding+"px"));a.color&&(b.color=a.color);a.size&&(this._fontSize=a.size);a.fontFamily&&(b.fontFamily=a.fontFamily);a.horizontalAlign&&(b.textAlign=a.horizontalAlign);a.verticalAlign&&(this._verticalAlign=a.verticalAlign);a.fontWeight&&(b.fontWeight=a.fontWeight);a.shadowColor&&(b.textShadow=a.shadowColor+" 2px 2px 1px");a.lineHeight&&
(b.lineHeight=a.lineHeight*a.size+"px");a.strokeColor&&this._updateStroke();a.wrap||(b.whiteSpace="nowrap");this.setText(a.text||"")};this.getText=function(){return this._text};this.reflow=function(){var a=this._opts,b=this._textNode;if(b){if(a.autoSize){var d=b.scrollHeight;if(!this.style.height||this.style.height<d)this.style.height=d}if(a.autoFontSize){var c,d=c=this._fontSize;if(!a.wrap){var e=b.scrollWidth-this.style.width;1<e&&(c-=d/=2,b.style.fontSize=c+"px")}e=b.scrollHeight-this.style.height;
1<e&&(c-=d/2,b.style.fontSize=c+"px");this._computedFontSize=c;b.style.lineHeight=a.lineHeight*c+"px"}this._computeVerticalAlign();this._strokeNode&&(this._strokeNode.style.width=this._fillNode.offsetWidth+"px")}};this.setText=function(a){if("function"==typeof a)return a(this);a=void 0!=a?a.toString():"";this._text!=a&&(this._text=a,this._strokeNode?(this._fillNode.innerText=a,this._strokeNode.innerText=a):this._textNode.innerText=a,this._textNode.style.fontSize=this._fontSize+"px",this.needsReflow())};
this._computeVerticalAlign=function(){var a=this._opts,b=this._computedFontSize||this._fontSize,d=Math.round(this._textNode.offsetHeight/(a.lineHeight*b)),c=this.style.padding,e=c.top;"middle"==a.verticalAlign&&(e+=(this.style.height-c.top-c.bottom-(1<d?a.lineHeight*d:1)*b)/2);this._textNode.style.marginTop=e+"px"};this._updateStroke=function(){var a=this._opts;a.strokeColor&&a.strokeWidth?(this._strokeNode||(this._textNode.innerHTML='<span style="position:relative"><span></span><span style="position:absolute;left:0;top:1px;right:0px;z-index:-1"></span></span>',
this._fillNode=this._textNode.childNodes[0].childNodes[0],this._strokeNode=this._textNode.childNodes[0].childNodes[1]),this._strokeNode.style.webkitTextStroke=1*a.strokeWidth+"px "+a.strokeColor,this.needsReflow()):this._strokeNode&&(this._fillNode=this._strokeNode=null,this.setText(this._text))}});
