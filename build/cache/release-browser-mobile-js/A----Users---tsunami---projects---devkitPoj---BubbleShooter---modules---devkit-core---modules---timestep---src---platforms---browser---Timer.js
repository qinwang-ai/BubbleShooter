9724cc5674cac77a0cc627b1f28dd5a6
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
var _onTick=null,disableRequestAnimFrame=!1,disablePostMessage=!0,asFastAsPossible=!1,MIN_DT=16;if(window.postMessage){var postMessageCb=function(a){"timestep.TICK"==a.data&&onFrame()};window.addEventListener?window.addEventListener("message",postMessageCb,!1):window.attachEvent("onmessage",postMessageCb)}else disablePostMessage=!0,tickNow=sendTimeoutNow;function sendPostMessage(){window.postMessage("timestep.TICK","*")}function sendTimeout(){setTimeout(onFrame,MIN_DT)}
function sendTimeoutNow(){setTimeout(onFrame,0)}var fastDriver=sendTimeoutNow,mainDriver=sendTimeout,cancelDriver,driverId;
if(asFastAsPossible)disablePostMessage?mainDriver=sendTimeoutNow:fastDriver=mainDriver=sendPostMessage;else{var reqAnim=window.requestAnimationFrame,cancelAnim=window.cancelAnimationFrame,prefixes=["","webkit","moz","o","ms"];if(!disableRequestAnimFrame)for(var i=0;i<prefixes.length&&!reqAnim;++i)reqAnim=window[prefixes[i]+"RequestAnimationFrame"],cancelAnim=window[prefixes[i]+"CancelAnimationFrame"]||window[prefixes[i]+"CancelRequestAnimationFrame"];reqAnim?(fastDriver=mainDriver=reqAnim,cancelDriver=
cancelAnim):disablePostMessage||(fastDriver=sendPostMessage)}function onFrame(){if(_onTick){var a=Date.now(),b=a-(exports.last||a);exports.last=a;_onTick(b);driverId=b>MIN_DT?fastDriver.call(window,onFrame):mainDriver.call(window,onFrame)}}exports.last=null;exports.start=function(a){_onTick=a;driverId=mainDriver.call(window,onFrame)};exports.stop=function(){_onTick=null;driverId&&(cancelDriver.call(window,driverId),driverId=null)};
