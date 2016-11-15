0b50891ee97f214a315207014782368d
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
jsio("import device");jsio("import ui.resource.Image as Image");jsio("import ui.Color as Color");jsio("import ui.filter as filter");jsio("import ui.resource.Font as Font");var max=Math.max,_customFonts={},_customFontInfo={},_origMeasureText;exports.init=function(){var a=window.CONFIG;if(a&&a.fonts)for(var a=a.fonts,b=0,c=a.length;b<c;b++){var d=a[b],g={fontName:d.fontName,settings:d,imagesLoaded:-1,imagesTotal:0,loaded:!1};_customFonts[d.fontName]=g;loadingCustomFont(g)}};
var loadCustomFontImage=function(a,b,c){b=new Image({url:"resources/fonts/"+a.fontName+"_"+b+(c?"_Stroke.png":".png")});b.doOnLoad(function(){a.imagesLoaded++;a.loaded=a.imagesLoaded===a.imagesTotal});return b},findVerticalInfo=function(a){for(var b=[{start:65,end:90},{start:97,end:122},{start:32,end:255}],c=!1,d=0,g=0,f=0,e=b.length;f<e;f++){for(var i=b[f],h=i.start;h<=i.end;h++){var l=a[h];l&&(d=max(d,l.h),g=max(g,l.h),c=!0)}if(c)break}return{baseline:d,bottom:g}},findHorizontalInfo=function(a){for(var b=
[{start:97,end:122},{start:65,end:90},{start:32,end:255}],c=0,d=0,g=0,f=b.length;g<f;g++){for(var e=b[g],i=e.start;i<=e.end;i++){var h=a[i];h&&(c+=h.w,d++)}if(0!==d)break}return{width:0.8*c/d}},loadingCustomFont=function(a){if(-1!==a.imagesLoaded)return!a.loaded;var b=a.settings,c=b.fontName,d=_customFontInfo[c];d?(a.dimensions=d.dimensions,a.horizontal=d.horizontal,a.vertical=d.vertical):(a.dimensions=JSON.parse(CACHE["resources/fonts/"+c+".json"]),a.horizontal=findHorizontalInfo(a.dimensions),a.vertical=
findVerticalInfo(a.dimensions),_customFontInfo[c]={dimensions:a.dimensions,horizontal:a.horizontal,vertical:a.vertical});for(var c=a.images=[],d=a.strokeImages=[],g=a.imagesLoaded=0;g<b.count;g++)c.push(loadCustomFontImage(a,g,!1)),a.imagesTotal++,a.settings.stroke&&(d.push(loadCustomFontImage(a,g,!0)),a.imagesTotal++);return!0},measure=function(a,b,c){var d=b.customFont,g=d.dimensions,f=b.scale,e=(d.settings.spacing||0)*f,i=0,h=!0;if(g)for(var h=!1,l=0,m=0,n=c.length;m<n;m++){var k=c.charCodeAt(m);
if(9===k)i+=4*d.horizontal.width*f;else if(32===k)i+=d.horizontal.width*f;else if(g[k])var j=g[k],i=i+((j.xadvance+(j.kerning[l]||0))*f+e);else h=!0;if(h)break;l=k}return h?(d=a.font,a.font=b.size.value+b.size.unit+" "+(a.defaultFontFamily||device.defaultFontFamily),b={failed:!0,width:_origMeasureText.apply(a,[c])},a.font=d,b):{failed:!1,width:i}},renderCustomFont=function(a,b,c,d,g,f,e,i){var h=measure(a,e,g);if(h.failed)return!1;var f=e.customFont,i=0===i?f.images:f.strokeImages,l=f.dimensions,
e=e.scale,h=h.width;h>d&&(e*=d/h);d=(f.settings.spacing||0)*e;"alphabetic"===a.textBaseline?c-=f.vertical.baseline*e:"middle"===a.textBaseline?c-=f.vertical.bottom/2*e:"bottom"===a.textBaseline&&(c-=f.vertical.bottom*e);"center"===a.textAlign?b-=h/2:"right"===a.textAlign&&(b-=h);for(var m=h=0,n=g.length;m<n;m++){var k=g.charCodeAt(m);if(9===k)b+=4*f.horizontal.width*e;else if(32===k)b+=f.horizontal.width*e;else{var j=l[k],b=b+(j.kerning[h]||0);i[j.sheetIndex].render(a,j.x,j.y,j.w,j.h,b+j.ox*e,c+j.oy*
e,j.w*e,j.h*e);b+=j.xadvance*e+d}h=k}return!0};exports.findFontInfo=function(a){var a=Font.parse(a.font),b=a.getName();return b&&_customFonts[b]?(customFont=_customFonts[b],a.customFont=customFont,a.scale=a.getSize()/customFont.settings.size,a):null};exports.wrapMeasureText=function(a){_origMeasureText=a;return function(b){var c=exports.findFontInfo(this);if(!c)return a.apply(this,arguments);c=measure(this,c,b);return c.failed?a.apply(this,arguments):c}};
exports.wrapFillText=function(a){return function(b,c,d,g){var f=exports.findFontInfo(this);if(!f)return a.apply(this,arguments);if(!loadingCustomFont(f.customFont)){isNaN(c)&&(c=0);isNaN(d)&&(d=0);var e=Color.parse(this.fillStyle);this.filter||(this.filter=new filter.TintFilter(e));this.__bmpTxtColor!==e&&(this.__bmpTxtColor=e,this.filter.update(e));renderCustomFont(this,c,d,g,b+"",this.fillStyle,f,0)||(e=this.font,this.font=f.size.value+f.size.unit+" "+(this.defaultFontFamily||device.defaultFontFamily),
a.apply(this,[b,c,d]),this.font=e)}}};
exports.wrapStrokeText=function(a){return function(b,c,d,g){var f=exports.findFontInfo(this);if(!f)return a.apply(this,arguments);if(!loadingCustomFont(f.customFont)){isNaN(c)&&(c=0);isNaN(d)&&(d=0);var e=Color.parse(this.strokeStyle);this.filter||(this.filter=new filter.TintFilter(e));this.__bmpTxtColor!==e&&(this.__bmpTxtColor=e,this.filter.update(e));renderCustomFont(this,c,d,g,b+"",this.strokeStyle,f,1)||(e=this.font,this.font=f.size.value+f.size.unit+" "+(this.defaultFontFamily||device.defaultFontFamily),
a.apply(this,[b,c,d]),this.font=e)}}};
