83457609657abb7dbf230fc4722732a4
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
jsio("import device");jsio("import .FontRenderer");
exports=function(h){var f=h&&h.el||document.createElement("canvas");f.width=h.width;f.height=h.height;var a=f.getContext("2d");a.font="11px "+device.defaultFontFamily;a.getElement=function(){return f};a.reset=function(){};a.clear=function(){this.save();this.setTransform(1,0,0,1,0,0);this.clearRect(0,0,f.width,f.height);this.restore()};a.clipRect=function(n,c,d,e){a.beginPath();a.rect(n,c,d,e);a.clip()};a.swap=function(){};a.execSwap=function(){};a.circle=function(a,c,d){this.beginPath();this.arc(a,
c,d,0,2*Math.PI,!0)};var k=null,l=null,m=null;a.drawPointSprites=function(a,c,d,e){var b=this.pointSprite;if(b&&b.complete){var f=b.width,h=b.height,i=m||(m=document.createElement("canvas"));if(b!=k||this.strokeStyle!=l){k=b;l=this.strokeStyle;i.width=f;i.height=h;var g=i.getContext("2d");g.fillStyle=this.strokeStyle;g.fillRect(0,0,f,h);g.globalCompositeOperation="destination-in";g.drawImage(b,0,0)}d-=a;e-=c;b=Math.ceil(Math.sqrt(d*d+e*e)/this.pointSpriteStep);1>b&&(b=1);for(var g=this.lineWidth,
j=0;j<b;++j)this.drawImage(i,0,0,f,h,a+d*j/b-g/2,c+e*j/b-g/2,g,g)}};a.roundRect=function(a,c,d,e,b){this.beginPath();this.moveTo(a,c+b);this.lineTo(a,c+e-b);this.quadraticCurveTo(a,c+e,a+b,c+e);this.lineTo(a+d-b,c+e);this.quadraticCurveTo(a+d,c+e,a+d,c+e-b);this.lineTo(a+d,c+b);this.quadraticCurveTo(a+d,c,a+d-b,c);this.lineTo(a+b,c);this.quadraticCurveTo(a,c,a,c+b)};a.loadIdentity=function(){this.setTransform(1,0,0,1,0,0)};a.measureText=FontRenderer.wrapMeasureText(a.measureText);a.fillText=FontRenderer.wrapFillText(a.fillText);
a.strokeText=FontRenderer.wrapStrokeText(a.strokeText);a.filter=null;a.setFilter=function(a){this.filter=a};a.setFilters=function(){logger.WARN&&console.warn("WARN",".Context2D","ctx.setFilters is deprecated, use ctx.setFilter instead.");for(var a in filters){this.setFilter(filters[a]);break}};a.clearFilter=function(){this.filter=null};a.clearFilters=function(){logger.WARN&&console.warn("WARN",".Context2D","ctx.clearFilters is deprecated, use ctx.clearFilter instead.");this.clearFilter()};return a};
