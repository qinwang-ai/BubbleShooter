cb3cd4a6a0d60e6e1369e2c7a1a4dd6c
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
var inputQueue=[];NATIVE.events.setResponder&&NATIVE.events.setResponder(inputQueue);NATIVE.input.getTouchEvents=function(){return inputQueue.splice(0,inputQueue.length)};