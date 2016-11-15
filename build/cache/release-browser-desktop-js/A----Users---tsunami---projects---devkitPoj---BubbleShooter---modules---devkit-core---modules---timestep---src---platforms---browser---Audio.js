8a87f6bc1f999dfb6875b0b1ccc79c8f
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
exports=function(a){var a=merge(a,{autoplay:!1,preload:"auto",volume:1,loop:0,src:""}),b=document.createElement("Audio");b.autoplay=a.autoplay;b.preload=a.preload;b.volume=a.volume;b.loop=a.loop;b.src=a.src;return b};
