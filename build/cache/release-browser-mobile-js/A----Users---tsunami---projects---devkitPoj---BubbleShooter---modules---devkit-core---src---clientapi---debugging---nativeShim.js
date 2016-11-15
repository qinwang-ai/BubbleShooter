d03c242c5f36916849efba5f3dccf706
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
jsio("import lib.PubSub");jsio("import lib.Callback");exports.isShim=!0;exports.backButton=new lib.PubSub;exports.dialogs={showDialog:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","Showing a dialog!")},showAppRater:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","Showing rate dialog!")}};var _withContacts=new lib.Callback;_withContacts.fire();
exports.contacts=merge(new lib.PubSub,{getContactList:function(){return[]},withContacts:function(){_withContacts.forward(arguments)},sendAutomatedSMS:function(a,b,c){logger.LOG&&console.log("LOG","..debugging.nativeShim","Send Automated SMS:",a,b);c&&c()},sendSMS:function(a,b,c){logger.LOG&&console.log("LOG","..debugging.nativeShim","Send SMS:",a,b);c&&c()},getPicture:function(){return null},getPictures:function(){return null},getPictureBase64:function(){return null}});var _withPhoneNumber=new lib.Callback;
_withPhoneNumber.fire(null);_withPhoneNumber=new lib.Callback;_withPhoneNumber.fire(null);exports.profile={fullName:"",getPicture:function(){return null},getPictureBase64:function(){return null},withPhoneNumber:function(){_withPhoneNumber.forward(arguments)}};
exports.sound={playSound:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: play a sound")},loadSound:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: load a sound")},pauseSound:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: pause a sound")},stopSound:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: stop a sound")},setVolume:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim",
"NATIVE shim: set the volume of a sound")},loadBackgroundMusic:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: load background music")},playBackgroundMusic:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: play background music")},registerMusic:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: register background music")}};exports.events={registerHandler:function(){}};
exports.plugins={sendEvent:function(a,b){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: send a "+b+" event to the "+a+" plugin")},sendRequest:function(a,b){logger.LOG&&console.log("LOG","..debugging.nativeShim","NATIVE shim: send a "+b+" request to the "+a+" plugin")}};exports.alerts=new lib.PubSub;
merge(exports.alerts,{onNotificationLoad:function(){},showNotification:function(){return-1},showRecurringNotification:function(){logger.LOG&&console.log("LOG","..debugging.nativeShim","Setting up a recurring notification!");return-1}});exports.social=new lib.PubSub;exports.isSimulator=function(){return jsio("import device").isNativeSimulator};GLOBAL.NATIVE||(GLOBAL.NATIVE=exports);
