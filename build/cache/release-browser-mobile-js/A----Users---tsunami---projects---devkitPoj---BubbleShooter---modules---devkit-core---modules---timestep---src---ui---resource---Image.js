567e3c5a44ff095e14c1c79bb5c06c98
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
jsio("import device");jsio("import lib.PubSub");jsio("import event.Callback as Callback");jsio("import ui.resource.loader as resourceLoader");jsio("import ui.backend.canvas.filterRenderer as filterRenderer");var ImageCache={},GET_IMAGE_DATA_NOT_SUPPORTED=!GLOBAL.document||!document.createElement;function imageOnLoad(h,f,e){h&&!this.width?3>=e?setTimeout(bind(this,imageOnLoad,h,f,(e||0)+1),0):this.__cb.fire(!1):this.__cb.fire(!h)}
resourceLoader.on(resourceLoader.IMAGE_LOADED,function(h,f){ImageCache[f.resource]=h;h.__cb=new Callback;imageOnLoad.call(h,!0)});var ImageMap=!CONFIG.disableNativeViews&&NATIVE.timestep&&NATIVE.timestep.ImageMap;
ImageMap||(ImageMap=__class__,ImageMap=ImageMap(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(h,f,e,j,a,c,b,d,g,n){this.url=n;this.x=f;this.y=e;this.width=j;this.height=a;this.marginTop=c;this.marginRight=b;this.marginBottom=d;this.marginLeft=g}}));var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_resource_Image=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_ui_resource_Image(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){var h=GLOBAL.NATIVE&&!device.isNativeSimulator,f=device.get("Canvas"),e=null,j=null;this.init=function(a){a||(a={});this._cb=new Callback;this._map=new ImageMap(this,0,0,-1,-1,0,0,0,0,a.url||"");this._originalURL=a.url||"";this._scale=a.scale||1;this._isError=false;resourceLoader._updateImageMap(this._map,
a.url,a.sourceX,a.sourceY,a.sourceW,a.sourceH);this._setSrcImg(a.srcImage,this._map.url,a.forceReload)};this._setSrcImg=function(a,c,b){this._cb.reset();this._isError=false;!a&&(c&&!b&&ImageCache[c])&&(a=ImageCache[c]);if(!a&&!b&&Image.get){var d=Image.get(c);typeof d==="object"?a=d:d&&(c=d)}if(b){a&&a.destroy&&a.destroy();c&&(NATIVE.gl&&NATIVE.gl.deleteTexture)&&NATIVE.gl.deleteTexture(c)}if(!a){a=new Image;a.crossOrigin="use-credentials"}this._srcImg=a;if(a instanceof HTMLCanvasElement||a instanceof
f)this._onLoad(false,a);else{if(!a.__cb){a.__cb=new Callback;a.addEventListener("load",bind(a,imageOnLoad,true),false);a.addEventListener("error",bind(a,imageOnLoad,false),false);c&&(ImageCache[c]=a);if(!a.src&&c)a.src=this._map.url=c}a.__cb.run(this,function(b){this._onLoad(b,a)})}};this.getSource=this.getSrcImg=function(){return this._srcImg};this.setSource=this.setSrcImg=function(a){this._setSrcImg(a)};this.reload=function(a){var c=this._srcImg;if(c){a&&a.chain&&(a=a.chain());var b=this._cb.fired();
if(c.reload){var d=bind(this,function(){c.removeEventListener("reload",d,false);b&&this._cb.fire(null,this);a&&a()});c.addEventListener("reload",d,false);c.reload();b&&this._cb.reset()}else a&&(this._cb.fired()?setTimeout(a,0):this._cb.run(a))}};this.getURL=function(){return this._map.url};this.getOriginalURL=function(){return this._originalURL};this.getSourceX=function(){return this._map.x};this.getSourceY=function(){return this._map.y};this.getSourceWidth=this.getSourceW=function(){return this._map.width};
this.getSourceHeight=this.getSourceH=function(){return this._map.height};this.getOrigWidth=this.getOrigW=function(){return this._srcImg.width};this.getOrigHeight=this.getOrigH=function(){return this._srcImg.height};this.setSourceX=function(a){this._map.x=a};this.setSourceY=function(a){this._map.y=a};this.setSourceWidth=this.setSourceW=function(a){this._map.width=a};this.setSourceHeight=this.setSourceH=function(a){this._map.height=a};this.setMarginTop=function(a){this._map.marginTop=a};this.setMarginRight=
function(a){this._map.marginRight=a};this.setMarginBottom=function(a){this._map.marginBottom=a};this.setMarginLeft=function(a){this._map.marginLeft=a};this.setURL=function(a,c){resourceLoader._updateImageMap(this._map,a);this._setSrcImg(null,this._map.url,c)};this.getWidth=function(){var a=this._map;return(a.width==-1?0:a.width+a.marginLeft+a.marginRight)/a.scale};this.getHeight=function(){var a=this._map;return(a.height===-1?0:a.height+a.marginTop+a.marginBottom)/a.scale};this.getMap=this.getBounds=
function(){return this._map};this.setMap=this.setBounds=function(a,c,b,d,g,h,e,f){var i=this._map;i.x=a;i.y=c;i.width=b;i.height=d;i.marginTop=g||0;i.marginRight=h||0;i.marginBottom=e||0;i.marginLeft=f||0;this.emit("changeBounds")};this.doOnLoad=function(){this._cb.forward(arguments);return this};this._onLoad=function(a,c){var b=this._map,d=this._srcImg;if(!(c&&c!==d))if(a){logger.ERROR&&console.error("ERROR","ui.resource.Image","Image failed to load:",b.url);this._isError=true;this._cb.fire({NoImage:true})}else{this._isError=
false;d.width===0&&logger.WARN&&console.warn("WARN","ui.resource.Image","Image has no width",this._url);if(this._scale!==1&&(b.width!==-1||b.height!==-1)){if(b.width===-1)b.width=d.width*b.height/d.height;if(b.height===-1)b.height=d.height*b.width/d.width;d.width=b.width;d.height=b.height}else{if(b.width===-1)b.width=d.width;if(b.height===-1)b.height=d.height}b.url=d.src;this._cb.fire(null,this)}};this.isError=function(){return this._isError};this.isLoaded=this.isReady=function(){return!this._isError&&
this._cb.fired()};this.render=function(a){if(this._cb.fired()&&!this._isError){var c=arguments.length,b=this._map,d=this._srcImg,g=b.x,e=b.y,f=b.width,j=b.height,i=c>5?arguments[5]:arguments[1]||0,m=c>6?arguments[6]:arguments[2]||0,k=c>7?arguments[7]:arguments[3]||0,l=c>8?arguments[8]:arguments[4]||0;if(c<9){k=k/(b.marginLeft+b.width+b.marginRight);l=l/(b.marginTop+b.height+b.marginBottom);i=i+k*b.marginLeft;m=m+l*b.marginTop;k=k*b.width;l=l*b.height}else{g=arguments[1];e=arguments[2];f=arguments[3];
j=arguments[4]}if(!h&&a.filter)if(b=filterRenderer.renderFilter(a,this,g,e,f,j)){d=b;e=g=0}a.drawImage(d,g,e,f,j,i,m,k,l)}};this.getImageData=function(a,c,b,d){if(e===null){e=new f;j=e.getContext("2d")}var g=this._map;if(GET_IMAGE_DATA_NOT_SUPPORTED)throw"Not supported";if(!g.width||!g.height)throw"Not loaded";a=a||0;c=c||0;b=b||g.width;d=d||g.height;e.width=b;e.height=d;j.clear();this.render(j,a,c,b,d,0,0,b,d);return j.getImageData(0,0,b,d)};this.setImageData=function(){};this.destroy=function(){this._srcImg.destroy&&
this._srcImg.destroy()}});exports.__clearCache__=function(){ImageCache={}};