6f73400e9baca263a6d3521f5993b1f4
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
var LOCALE_CODES=navigator.language&&navigator.language.split("-"),LANGUAGE_CODE=(LOCALE_CODES[0]||"en").toLowerCase(),REGION_CODE=(LOCALE_CODES[1]||"US").toUpperCase(),EU_REGIONS="AD AT BE BL CY DE EE ES EU FI FR GR IE IT LU LV MC ME MT MQ NL PM PT RE SI SK SM VA YT".split(" "),Users_tsunami_projects_devkitPoj_helloworld_modules_devkit_core_modules_timestep_src_ui_resource_i18n=__class__;
exports=Users_tsunami_projects_devkitPoj_helloworld_modules_devkit_core_modules_timestep_src_ui_resource_i18n(function(){return this.init&&this.init.apply(this,arguments)},function(){var e={languageCode:LANGUAGE_CODE,regionCode:REGION_CODE,stringsPath:"resources/strings/",defaultStringsFile:"en.json"};this.init=function(b){b=merge(b,e);this._languageCode=b.languageCode;this._regionCode=b.regionCode;this._stringsPath=b.stringsPath;this._defaultStringsFile=b.defaultStringsFile;this._strings={};this.loadStrings(this._stringsPath,
this._defaultStringsFile)};this.getLanguageCode=function(){return this._languageCode};this.getRegionCode=function(){return this._regionCode};this.loadStrings=function(b,c){var f=this._languageCode,d=b+f+"-"+this._regionCode+".json",f=b+f+".json",a=b+c,e=CACHE[d]||CACHE[f]||CACHE[a];if(e)try{this._strings=JSON.parse(e)}catch(h){console.error("Error loading strings JSON:"),console.error(h)}else console.error("No JSON found for files:",d,f,a)};this.getString=function(b){var c=this._strings[b];return void 0!==
c?c:b}});exports.localizeResourceMap=function(e){var b={},c="resources-"+LANGUAGE_CODE+"-"+REGION_CODE,f="resources-"+LANGUAGE_CODE,d="resources-"+REGION_CODE,a;for(a in e){var g=a,h=a.indexOf(c),i=a.indexOf(f),j=a.indexOf(d),k=a.indexOf("resources-EU");0===h?g="resources"+a.substring(c.length):0===i?g="resources"+a.substring(f.length):0===j?g="resources"+a.substring(d.length):0===k&&-1!==EU_REGIONS.indexOf(REGION_CODE)&&(g="resources"+a.substring(12));b[g]=e[a]}return b};
exports.applyResourceMap=function(e,b){var c={},f="resources-"+b,d;for(d in e){var a=d;0===d.indexOf(f)?(a="resources"+d.substring(f.length),c[a]=e[d]):0>Object.keys(c).indexOf(a)&&(c[a]=e[d])}return c};
