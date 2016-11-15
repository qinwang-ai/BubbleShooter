6b2fad074154529841cbb93573a2c324
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
jsio("import device");jsio("from util.browser import $");device.registerDevice("browser","platforms.browser");
exports.init=function(){var d=function(){var a=device.screen.devicePixelRatio,c=window.document,b=(window.innerWidth||c.clientWidth||c.clientWidth)*a,a=(window.innerHeight||c.clientHeight||c.clientHeight)*a;if(b!=device.width||a!=device.height||!device.screen.orientation)device.width=b,device.height=a,device.screen.width=b,device.screen.height=a,b>a?(device.screen.isPortrait=!1,device.screen.isLandscape=!0,device.screen.orientation="landscape"):(device.screen.isPortrait=!0,device.screen.isLandscape=
!1,device.screen.orientation="portrait"),device.screen.publish("Resize",b,a)};$.onEvent(window,"resize",d,!1);d()};
