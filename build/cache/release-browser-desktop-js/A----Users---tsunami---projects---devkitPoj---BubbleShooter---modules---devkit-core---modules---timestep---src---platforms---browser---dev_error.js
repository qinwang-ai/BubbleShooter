220cb22b3f28ac9926e5f5d95b3c1987
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
exports.render=function(a){logger.ERROR&&console.error("ERROR",".dev_error","unhandled tick exception");logger.ERROR&&console.error("ERROR",".dev_error",a.stack);for(var d=document.getElementsByTagName("canvas"),b=0,e;e=d[b];++b)render(e.getContext("2d"),a)};
function render(a,d){function b(b){a.fillText(b,e,c);c+=20}a.fillStyle="rgb(0, 0, 255)";a.fillRect(0,0,a.canvas.width,a.canvas.height);var e=30,c=40;a.fillStyle="#FFF";a.font='bold 12px Monaco,"Bitstream Vera Sans Mono","Lucida Console",Terminal,monospace';b(d.message);c+=40;d.stack.split("\n").map(b)};
