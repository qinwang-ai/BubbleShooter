319f58364cb9cd17a246ab98f8fb8e5f
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
jsio("import .Context2D");jsio("import .webgl.WebGLContext2D as WebGLContext2D");var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_Canvas=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_Canvas(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){a=merge(a,{width:300,height:200});this._width=a.width;this._height=a.height;this.isWebGL=!!a.useWebGL&&!!CONFIG.useWebGL&&WebGLContext2D.isSupported;var b;b=this.isWebGL?WebGLContext2D.getContext(this,a):new Context2D(a);a=this._el=b.getElement();a.complete=!0;a.style&&(a.style.userSelect=
a.style.webkitUserSelect=a.style.webkitTouchCallout="none");a.getContext=function(){return b};return a};Object.defineProperties(this,{width:{get:function(){return this._width},set:function(a){this._width=a;this.isWebGL&&this.getContext().resize(this.width,this.height)}},height:{get:function(){return this._height},set:function(a){this._height=a;this.isWebGL&&this.getContext().resize(this.width,this.height)}}})});
