b0a33a7fe229e405e58ac892b7c92087
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
jsio("import device");
var randomColorElement=function(){var b=Math.floor(255*Math.random()).toString(16);return(1===b.length?"0":"")+b},randomColor=function(){return"#"+randomColorElement()+randomColorElement()+randomColorElement()},Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_FontBuffer=__class__,FontBuffer=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_FontBuffer(function(){return this.init&&this.init.apply(this,
arguments)},function(){this.init=function(){var b=[{size:24,count:8},{size:32,count:10},{size:64,count:8}],f,d,e,a=0,c,g;this._canvas=document.createElement("canvas");this._canvas.width=1024;this._canvas.height=1024;this._ctx=this._canvas.getContext("2d");this._list=[];for(c=0;c<b.length;c++){d=[];f=b[c];for(g=0;g<f.count;g++)e={previous:null,next:null,x:0,y:a,width:1024,height:0,hash:null,frame:0,refresh:!0,ctx:this._ctx},d.push(e),a+=f.size;this._list.push({size:f.size,lines:d})}this._hashMap={};
this._currentFrame=0;this._frameTimeout=3;jsio("import ui.Engine").get().subscribe("Tick",this,this._onTick)};this._onTick=function(){this._currentFrame++;var b=this._currentFrame,f=this._frameTimeout,d=this._list,e,a,c,g,h,i;c=0;for(g=d.length;c<g;c++){e=d[c].lines;h=0;for(i=e.length;h<i;h++)for(a=e[h];a;)null===a.hash?a.next&&null===a.next.hash&&(a.width+=a.next.width,a.next=a.next.next):b>a.frame+f&&(this._ctx.fillStyle=randomColor(),this._ctx.fillRect(a.x,a.y,a.width,a.height),delete this._hashMap[a.hash],
a.hash=null),a=a.next}};this.alloc=function(b){var f=b.height,d=b.width+3,b=(b.strokeStyle||"")+"_"+(b.fillStyle||"")+"_"+(b.font||"")+"_"+b.text,e=this._list,a=this._hashMap[b],c,g;if(a)return a.frame=this._currentFrame,a.refresh=!1,a;a=0;for(c=e.length;a<c;a++)if(f<=e[a].size){e=e[a].lines;c=0;for(g=e.length;c<g;c++)for(a=e[c];a;){if(d<=a.width&&null===a.hash)return d!==a.width&&(a.next={previous:a,next:a.next,x:a.x+d,y:a.y,width:a.width-d,hash:null,frame:0,ctx:this._ctx}),a.frame=this._currentFrame,
a.hash=b,a.width=d,a.height=f,a.refresh=!0,this._ctx.clearRect(a.x,a.y,d,f),this._hashMap[b]=a;a=a.next}break}return!1};this.getCanvas=function(){return this._canvas}});
