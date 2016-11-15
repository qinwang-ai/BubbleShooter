60271c918bd36dbc12961dac95d5086f
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
jsio("import lib.PubSub");jsio("import .SoundManager");jsio("from util.underscore import _");var soundManager=new SoundManager;soundManager.url="media/swf";soundManager.flashVersion=9;soundManager.useMovieStar=!0;soundManager.debugMode=!1;soundManager.consoleOnly=!0;soundManager.useHighPerformance=!0;soundManager.useFastPolling=!0;
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_FlashAPI=__class__,AudioAPI=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_timestep_src_platforms_browser_FlashAPI(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(c){this.init=function(a){a=merge(a,{map:{},background:[]});c(this,"init",[a]);this._map={};_.each(a.background,function(b){a.map[b]={name:b}},this);soundManager.onready(bind(this,
function(){logger.LOG&&console.log("LOG",".FlashAPI","SoundManager onReady");for(key in a.map)logger.LOG&&console.log("LOG",".FlashAPI","SoundManager key: ",key),(this._map[key]=soundManager.createSound({id:key,bufferTime:3,url:"media/audio/"+key+".mp3"})).load();this.publish("Ready")}))};this.canPlay=function(a){return a in this._map};this.setVolume=function(a){this._soundPlaying&&soundManager.setVolume(this._soundPlaying,a);this._backgroundSoundPlaying&&soundManager.setVolume(this._backgroundSoundPlaying,
a)};this.setMuted=function(a){(this.muted=a)&&this.setVolume(0)};this.play=function(a,b){this.canPlay(a)&&!this.muted&&(void 0===b&&(b=1),this._soundPlaying=a,this._map[a].setVolume(100*b|0),this._map[a].play())};this.pause=function(){this._map[this._soundPlaying].pause();this._soundPlaying=null};this.playBackgroundMusic=function(a,b){this.canPlay(a)&&!this.muted&&(void 0===b&&(b=1),this._backgroundSoundPlaying=a,this._map[a].setVolume(100*b|0),this._map[a].play())};this.pauseBackgroundMusic=function(){this._backgroundSoundPlaying&&
(this._map[this._backgroundSoundPlaying].pause(),this._backgroundSoundPlaying=null)}});
