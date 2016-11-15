7166d79e98603abadb3be8062c286c02
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
jsio("import lib.PubSub");jsio("import device");jsio("from util.underscore import _");
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_MobileBrowserAPI=__class__,AudioAPI=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_MobileBrowserAPI(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(e){var f={oneChannelOnly:device.isMobileBrowser,compiledFilename:"compiled"};this.init=function(a){a=merge(a,f);e(this,"init",[a]);this._opts=
a;this._map=a.map;this._audios={};this.oneChannelOnly=a.oneChannelOnly;setInterval(bind(this,"_ontimeupdate"),200);this.oneChannelOnly||_.each(a.background,function(b){a.map[b]={name:b}},this);this._load();this.oneChannelOnly&&(this._boundLoadHandler=bind(this,"_playFirst"),document.body.addEventListener(device.events.start,this._boundLoadHandler,!0));window.addEventListener("pagehide",bind(this,"pause"),!1)};this._createChannel=function(a,b){var c=new Audio(b);this._audios[a]=c;c.addEventListener("error",
bind(this,"_onerror"));c.addEventListener("timeupdate",bind(this,"_ontimeupdate"));c.load()};this.setMuted=function(a){(this.muted=a)&&this.setVolume(0)};this.setVolume=function(a){_.each(this._audios,function(b){b.volume=a})};this.unload=function(){this.pause();_.each(this._audios,function(a){a.src=""},this)};this._load=function(){this._audios={};var a=this._opts.path.replace(/\/$/,"");if(this.oneChannelOnly)this._createChannel("AUDIO",a+"/"+this._opts.compiledFilename+".m4a");else for(var b in this._map)this._map.hasOwnProperty(b)&&
"SILENCE"!=b&&this._createChannel(b,a+"/"+b+".mp3");logger.INFO&&console.info("INFO",".MobileBrowserAPI","now loading",this._opts.src);this._publishedReady||(this.publish("Ready"),this._publishedReady=!0)};this._playFirst=function(){document.body.removeEventListener(device.events.start,this._boundLoadHandler,!0);this._audios.AUDIO.play()};this._ontimeupdate=function(){_.each(this._audios,function(a){a.paused&&!a._pausedOnce&&(a.pause(),a._pausedOnce=!0,a._ready=!0);this.oneChannelOnly&&(!this._nowPlaying||
a.currentTime>=this._nowPlaying.end)&&this.play("SILENCE")},this)};this._onerror=function(a){var b="",c;for(c in a)b+=a[c]+" ";logger.INFO&&console.info("INFO",".MobileBrowserAPI","ERROR",b)};this.canPlay=function(a){if(!this._map[a])return!1;var b=null;this.oneChannelOnly&&(b=this._map[a].end,a="AUDIO");a=this._audios[a];if(!a)return!1;if(a._ready||!b)return!0;try{var c=a.seekable.end();return b<=c}catch(d){return logger.LOG&&console.log("LOG",".MobileBrowserAPI",d),!1}};this.play=function(a,b){if(!this.muted)if(void 0===
b&&(b=1),this.canPlay(a)){var c=this._audios[this.oneChannelOnly?"AUDIO":a];try{c.paused||c.pause();var d=0;this.oneChannelOnly&&null!=this._map[a].start&&(d=this._map[a].start);c.currentTime!=d&&(c.currentTime=d);c.volume=b;c.play();this._nowPlaying=this._map[a]}catch(e){}}else logger.INFO&&console.info("INFO",".MobileBrowserAPI","Not ready yet")};this.pause=function(){_.each(this._audios,function(a){a.pause()},this)};this.playBackgroundMusic=function(a,b){if(!this.muted){if(this.oneChannelOnly)return!1;
this._backgroundSoundPlaying=a;this.play(a,b)}};this.pauseBackgroundMusic=function(){this._backgroundSoundPlaying&&this._audios[this._backgroundSoundPlaying].pause()}});
