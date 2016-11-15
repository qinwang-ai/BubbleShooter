a8966fa128b8198300b60a82a2787482
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
jsio("import device");jsio("import userAgent");
var DEFAULT_RANK=0,DEFAULT_ALLOW_REDUCTION=!0,DEFAULT_FPS_LOWER_BOUND=10,DEFAULT_FPS_UPPER_BOUND=60,MIN_SCORE=0,MAX_SCORE=100,TICKS_TIL_ADJUST_DPR=500,MIN_DPR_SCORE=20,MAX_DPR_SCORE=60,MIN_DPR=1,TICKS_TIL_CHECK_SCORE=20,START_AVERAGE_DELTA=16,START_AVERAGE_SCORE=100,DELTA_AVERAGE_WEIGHT=0.6,DELTA_WEIGHT=0.4,SCORE_AVERAGE_WEIGHT=0.6,SCORE_WEIGHT=0.4,MIN_SCORE_FOR_DPR=40,DPR_DECREASE_VALUE=0.5,Performance=__class__,Performance=Performance(function(){return this.init&&this.init.apply(this,arguments)},
function(){function n(){if(e){var a=Date.now(),c=a-f;f=a;g=g*DELTA_AVERAGE_WEIGHT+c*DELTA_WEIGHT;++i>=TICKS_TIL_CHECK_SCORE&&(i=0,a=Math.min(1E3/g,DEFAULT_FPS_UPPER_BOUND),a=Math.max(0,MIN_SCORE+(MAX_SCORE-MIN_SCORE)*((a-j)/(m-j))),b=b*SCORE_AVERAGE_WEIGHT+a*SCORE_WEIGHT);k&&++l>=TICKS_TIL_ADJUST_DPR&&(l=0,b<MIN_SCORE_FOR_DPR&&d>MIN_DPR&&(d-=DPR_DECREASE_VALUE,device.setDevicePixelRatio(d),logger.LOG&&console.log("LOG","performance","PERFORMANCE SCORE OF "+b," DETECTED, SETTING DPR TO "+d)));h&&logger.LOG&&
console.log("LOG","performance","score ",b)}}var l=0,i=0,j=DEFAULT_FPS_LOWER_BOUND,m=DEFAULT_FPS_UPPER_BOUND,e,k,f,h,g=START_AVERAGE_DELTA,b=START_AVERAGE_SCORE,d=device.screen.defaultDevicePixelRatio;this.init=function(){e=!0;k=h=!1;setTimeout(bind(this,function(){f=Date.now();jsio("import ui.Engine").get().on("Render",bind(this,n))}),0)};this.showDebugLogs=function(){h=!0};this.hideDebugLogs=function(){h=!1};this.clear=function(){b=START_AVERAGE_SCORE;g=START_AVERAGE_DELTA;i=l=0};this.pause=function(){e=
!1};this.resume=function(){f=Date.now();e=!0};this.setTargetFPSRange=function(a,c){j=a;m=c};this.getPerformanceScore=function(){return b};this.getAdjustedParticleCount=function(a,c,b){var d=a,e=this.getPerformanceScore(),c=c||DEFAULT_RANK,b="undefined"!==typeof b?b:DEFAULT_ALLOW_REDUCTION;e<c&&(d=b?a*e/c:0);return d};this.setDPRScalingEnabled=function(a){"browser"!==userAgent.APP_RUNTIME?logger.WARN&&console.warn("WARN","performance","Auto DPR scaling only supported in browsers!"):"iPhone OS"===userAgent.OS_TYPE?
logger.WARN&&console.warn("WARN","performance","Auto DPR not currently supported on iOS."):k=a}});exports=new Performance;
