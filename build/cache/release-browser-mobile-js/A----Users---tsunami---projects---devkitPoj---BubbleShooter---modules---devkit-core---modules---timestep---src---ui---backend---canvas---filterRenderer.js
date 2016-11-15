4477c3bfe46c70e5365c28dba72afc7d
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
jsio("import cache.LRUCache as LRUCache");jsio("import device");
var FilterRenderer=__class__,FilterRenderer=FilterRenderer(function(){return this.init&&this.init.apply(this,arguments)},function(){var k=null,o=null,j=null;this.cache=new LRUCache(1024);var p={},l={},n=0,q=!0;this.initialize=function(){k=device.get("Canvas");o=new k({useWebGL:CONFIG.useWebGL});q=!1;this.useCache=!device.isNative&&!CONFIG.useWebGL;this.useWebGL=CONFIG.useWebGL;this.useCache&&jsio("import ui.Engine").get().subscribe("Tick",this,this.onTick)};this.onTick=function(){n++;p=l;l={}};this.renderFilter=
function(b,g,d,h,e,a){q&&this.initialize();var c=b.filter,i=c&&c.getType&&c.getType(),f=this.useWebGL&&"NegativeMask"!==i&&"PositiveMask"!==i;if(!c||f||!c.getType)return null;if(this.useCache){var m=this.getCacheKey(g.getURL(),d,h,e,a,c);if(f=this.cache.get(m))return f}var r=this.useCache&&this.testShouldCache(m);r?f=this.getCanvas(e,a):(f=o,f.width=e,f.height=a);switch(i){case "LinearAdd":this.renderColorFilter(b,g,d,h,e,a,c,"lighter",f);break;case "Tint":this.renderColorFilter(b,g,d,h,e,a,c,"source-over",
f);break;case "Multiply":this.renderMultiply(b,g,d,h,e,a,c,f);break;case "NegativeMask":this.renderMask(b,g,d,h,e,a,c.getMask(),"source-in",f);break;case "PositiveMask":this.renderMask(b,g,d,h,e,a,c.getMask(),"source-out",f)}r&&(j=(b=this.cache.put(m,f))?b.value:null);return f};this.testShouldCache=function(b){b=l[b]=p[b]||n;return 3<n-b};this.renderColorFilter=function(b,g,d,h,e,a,c,i,f){b=f.getContext("2d");b.globalCompositeOperation="source-over";g.render(b,d,h,e,a,0,0,e,a);b.globalCompositeOperation=
i;b.fillStyle=c.getColorString();b.fillRect(0,0,e,a);b.globalCompositeOperation="destination-in";g.render(b,d,h,e,a,0,0,e,a);return f};this.renderMultiply=function(b,g,d,h,e,a,c,i){for(var c=c.get(),b=i.getContext("2d"),g=g.getImageData(d,h,e,a),d=g.data,a=c.a,h=1+a*(c.r/255-1),e=1+a*(c.g/255-1),c=1+a*(c.b/255-1),a=0,f=d.length;a<f;a+=4)d[a]*=h,d[a+1]*=e,d[a+2]*=c;b.putImageData(g,0,0);return i};this.renderMask=function(b,g,d,h,e,a,c,i,f){var b=f.getContext("2d"),m=c.getSourceX(),j=c.getSourceY(),
k=c.getSourceW(),l=c.getSourceH();b.globalCompositeOperation="source-over";c.render(b,m,j,k,l,0,0,e,a);b.globalCompositeOperation=i;g.render(b,d,h,e,a,0,0,e,a);return f};this.clearCache=function(){this.cache.removeAll()};this.getCacheKey=function(b,g,d,h,e,a){var c=a&&a.getType&&a.getType();"NegativeMask"===c||"PositiveMask"===c?a=a.getMask().getURL():(a=a.get(),a=""+(255*a.a&255)+"|"+a.r+"|"+a.g+"|"+a.b);return c+"|"+b+"|"+g+"|"+d+"|"+h+"|"+e+"|"+a};this.getCanvas=function(b,g){var d;j?(d=j,d.width=
b,d.height=g,j=null):d=new k({width:b,height:g});return d}});exports=new FilterRenderer;
