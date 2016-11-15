aeac4c259ac8c9882ab117168c8794e6
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
jsio("import math.geom.Point as Point");jsio("import device");jsio("import lib.Enum");exports.eventTypes=new lib.Enum("START","MOVE","SELECT","SCROLL","CLEAR");exports.VERTICAL_AXIS=2;exports.HORIZONTAL_AXIS=1;
exports.dispatchEvent=function(b,a){a.root=b;exports.traceEvt(b,a,a.srcPt);var e=a.depth;exports._evtHistory[a.type]=a;for(var f=exports._evtCb[a.type]||exports.getEvtCbName(a.type),c=e-1;0<=c;--c){var d=a.trace[c],g=a.pt[d.uid];d.publish(f+"Capture",a,g,0==c);if(a.cancelled||d.__input.blockEvents)return}for(var h="on"+f,c=0;c<e;++c)if(d=a.trace[c],d.__input.canHandleEvents){g=a.pt[d.uid];if(d[h])d[h](a,g,0==c);d.publish(f,a,g,0==c);d._onEventPropagate(a,g,0==c);if(a.cancelled)break}};
exports.traceEvt=function(b,a,e){e=b.style.localizePoint(new Point(e));if(!b.getInput().containsEvent(a,e))return!1;var f=b.getInput().canHandleEvents;f&&(a.depth++,a.trace.unshift(b),a.pt[b.uid]=e);for(var c=b.getSubviews(),d=c.length-1;0<=d;--d)if(c[d].style.visible&&exports.traceEvt(c[d],a,e))return!0;if(f)return a.target=b,!0};exports._evtHistory={};exports._activeInputOver={};
exports.clearOverState=function(b){if(b){var a=exports._activeInputOver[b];if(a&&(delete exports._activeInputOver[b],a=a.trace))for(var e=0,f;f=a[e];++e)f.__input.onLeave(b)}else for(b in exports._activeInputOver)exports.clearOverState(b)};exports._isDragging=!1;exports.isDragging=function(){return exports._isDragging};exports._evtCb={};exports.getEvtCbName=function(b){var a=exports.eventTypes[b];return exports._evtCb[b]="Input"+a.charAt(0)+a.substring(1).toLowerCase()};exports.InputListener=device.get("Input");
exports.KeyListener=device.get("KeyListener");jsio("import .InputEvent as exports.InputEvent");
