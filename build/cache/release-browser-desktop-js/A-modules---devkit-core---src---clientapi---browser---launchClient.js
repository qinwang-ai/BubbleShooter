23e15841b5d64640c292e733b8f99030
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
jsio.__env.fetch=function(){return!1};jsio("import Promise");GLOBAL.Promise=Promise;var isSimulator=GLOBAL.CONFIG&&!!CONFIG.simulator,isNative=/^native/.test(CONFIG.target);isSimulator&&(jsio.__env.debugPath=function(b){return"http://"+(CONFIG.bundleID||CONFIG.packageName)+"/"+b.replace(/^[\.\/]+/,"")},isNative&&jsio("import ..debugging.nativeShim"));window.JSON||jsio("import std.JSON").createGlobal();
window.console||(window.console={},window.console.log=window.console.info=window.console.error=window.console.warn=function(){});"undefined"!==typeof localStorage&&(localStorage={getItem:function(){},setItem:function(){},removeItem:function(){}});isSimulator||jsio("import .cache");var splash=document.getElementById("_GCSplash");
splash&&!CONFIG.splash.hide&&(CONFIG.splash.hide=function(){setTimeout(function(){splash.style.opacity=0;splash.style.pointerEvents="none";setTimeout(function(){splash.parentNode.removeChild(splash)},500)},100)});jsio("import std.uri");var uri=new std.uri(window.location),mute=uri.hash("mute");CONFIG.isMuted=void 0!==mute&&"false"!==mute&&"0"!==mute&&"no"!==mute;var simulatorModules;
DEBUG&&isSimulator&&Array.isArray(CONFIG.simulator.modules)?(simulatorModules=[],Promise.map(CONFIG.simulator.modules,function(b){try{var a=jsio(b);if(a){simulatorModules.push(a);if(typeof a.onLaunch=="function")return a.onLaunch()}}catch(c){console.warn(c)}}).timeout(5E3).finally(queueStart)):queueStart();
function queueStart(){if(window.GC_LIVE_EDIT&&GC_LIVE_EDIT._isLiveEdit)var b=setInterval(function(){if(GC_LIVE_EDIT._liveEditReady){try{startApp()}catch(a){console.error("Error while starting app",a)}clearInterval(b)}},100);else startApp()}
function startApp(){jsio("import device");jsio("import platforms.browser.initialize");device.init();jsio("import devkit");GLOBAL.GC=new devkit.ClientAPI;if(simulatorModules)GLOBAL.GC.on("app",function(b){simulatorModules.forEach(function(a){if(typeof a.onApp=="function")a.onApp(b)})});GLOBAL.GC.buildApp("launchUI")};
