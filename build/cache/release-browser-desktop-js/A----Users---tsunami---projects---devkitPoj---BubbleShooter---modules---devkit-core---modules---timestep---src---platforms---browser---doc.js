4a894ecab6973e026c4b7fb49abc9a42
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
jsio("import lib.PubSub");jsio("import lib.Enum as Enum");jsio("from util.browser import $");jsio("import device");jsio("import userAgent");
var isIOS7=7===device.iosVersion,isIOSSafari=7<=device.iosVersion&&!device.isIpad&&!device.isStandalone&&!device.isUIWebView,enableLandscapeScroll=isIOSSafari&&window.parent===window,SCALING=Enum("FIXED","RESIZE","MANUAL"),defaultScalingMode=!device.isMobileNative||device.simulating?SCALING.RESIZE:SCALING.FIXED,Document=__class__,Document=Document(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){this.init=function(){if($){var a=GLOBAL.document;this._el=$({parent:a&&
a.body,style:{position:"absolute",overflow:"hidden",width:"100%",height:"100%",transform:"skewx(0.00001deg)"}});device.screen.subscribe("Resize",this,"onResize");exports.postCreateHook&&exports.postCreateHook(this);this.setScalingMode(defaultScalingMode)}};this.unsubscribeResize=function(){device.screen.unsubscribe("Resize",this,"onResize")};this.setEngine=function(a){if(a!=this._engine){if(a.getOpt("minIOSLandscapeScroll")>device.iosVersion||a.getOpt("disableIOSLandscapeScroll"))enableLandscapeScroll=
!1;this._engine=a;this._canvas=this._engine.getCanvas();enableLandscapeScroll&&(this._canvas.style.position="fixed");this.appendChild(this._canvas);this._canvas.getContext&&(a=this._canvas.getContext(window.WebGLRenderingContext?"webgl":"2d"),a.setParentNode&&a.setParentNode(this._el))}};this.getElement=function(){return this._el};this.setScalingMode=function(a,b){this._scalingMode=a;var f=this._el.style;switch(a){case SCALING.FIXED:b=merge(b,{width:device.width,height:device.height});f.width=b.width+
"px";f.height=b.height+"px";break;case SCALING.RESIZE:b=merge(b,{resizeCanvas:!0});case SCALING.MANUAL:f.margin="0px",f.width="100%",f.height="100%"}this._scalingOpts=b;this.onResize();setTimeout(bind(this,"onResize"),1E3)};this.onResize=function(){var a="iPhone OS"===userAgent.OS_TYPE,b=this._el,f=this._el.style,d=device.screen.orientation;b.className=d;enableLandscapeScroll?(document.documentElement.style.height="landscape"===d&&isIOS7?320==window.innerHeight?"320px":"640px":"100%",document.body.style.height=
isIOS7?"100%":"150%"):document.body.style.height="100%";logger.LOG&&console.log("LOG",".doc","resize",device.width,device.height);var d=device.width,g=device.height,c=this._scalingMode,e=this._scalingOpts;c==SCALING.FIXED&&(d=e.width,g=e.height);e.maxWidth&&d>e.maxWidth&&(d=e.maxWidth,c==SCALING.RESIZE&&(c=SCALING.FIXED));e.maxHeight&&g>e.maxHeight&&(g=e.maxHeight,c==SCALING.RESIZE&&(c=SCALING.FIXED));var i=a&&this._engine&&this._engine.isRunning;switch(c){case SCALING.FIXED:b.style.top=Math.round(Math.max(0,
(window.innerHeight-g)/2))+"px";b.style.left=Math.round(Math.max(0,(window.innerWidth-d)/2))+"px";f.width=d+"px";f.height=g+"px";break;case SCALING.RESIZE:var h=this._canvas&&this._canvas.style,c=device.screen.devicePixelRatio,b=d/c,c=g/c;if(e.resizeCanvas&&this._canvas&&(h.width!=b||h.height!=c)){this._canvas.width=d;this._canvas.height=g;e=this._canvas.getContext();e.resize&&e.resize(d,g);i=a&&this._engine&&this._engine.isRunning;if(a){var j=this._engine;i&&j.pause();h.display="none";setTimeout(function(){h.display=
"block";i&&j.resume()},250)}h.width=b+"px";h.height=c+"px"}f.width=b+"px";f.height=c+"px"}this._setDim(d,g);this._engine&&!i&&this._engine.render()};this._setDim=function(a,b){if(this.width!=a||this.height!=b)this.width=a,this.height=b,this.publish("Resize",a,b)};this.setColors=function(a,b){this._el&&(this._el.style.background=b,document.documentElement.style.background=document.body.style.background=a)};this.appendChild=function(a){this._el.appendChild(a)};this.getOffset=function(){return{x:this._el.offsetLeft,
y:this._el.offsetTop}}});exports=new Document;exports.SCALING=SCALING;exports.setDocStyle=function(){var a=GLOBAL.document;a&&a.body&&(a={height:"100%",margin:"0px",padding:"0px"},$.style(document.documentElement,a),$.style(document.body,a))};exports.defaultParent=null;exports.postCreateHook=null;
