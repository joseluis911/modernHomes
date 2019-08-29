var ksystem={};(function(){function r(e){return Math.pow(t,e)}function i(e){return Math.log(e)/Math.log(t)}var e=ksystem;e.isMac=!1,e.isLinux=!1,e.isWindows=!1,e.is64bit=!1;var t=1.2,n=1;e.runDetection=function(){var t=require("nw.gui"),n=require("os"),r=require("path"),i=(n.platform()+n.type()+process.platform).toLowerCase(),s=i.indexOf("darwin")>=0||i.indexOf("mac")>=0,o=!s&&i.indexOf("freebsd")>=0||i.indexOf("linux")>=0,u=!s&&!o&&i.indexOf("win")>=0,a=process.env["PROCESSOR_ARCHITECTURE"]=="AMD64"||process.env["PROCESSOR_ARCHITEW6432"]=="AMD64";e.isMac=s,e.isLinux=o,e.isWindows=u,e.is64bit=a};var s=1,o=1;e.setSystemScale=function(t){o=t,e.setZoomFactor(s)},e.getSystemScale=function(){return o},e.setZoomFactor=function(e,t){var r=require("nw.gui"),u=r.Window.get();if(!isNaN(e)&&e>=.25&&e<=3){t!==undefined&&!isNaN(Number(t))&&(o=Number(t)),s=e,e*=o;var a=i(e);u.zoomLevel=[a],n=top.devicePixelRatio/e*o}},e.getZoomFactor=function(){var e=require("nw.gui"),t=e.Window.get(),r=top.devicePixelRatio/n,i=top.outerWidth/top.innerWidth,s=Math.round(i*4)/4;return i<1&&(s=Math.round(i*20)/20,s/=o),r!=1||o!=1?r:r==1&&s!=1?s:1},e.detectflash=function(){var e,t;if(navigator.plugins){e=navigator.plugins["Shockwave Flash"];if(typeof e=="object"){t=e.description;if(t){var n=!0;if(navigator.mimeTypes){var r=navigator.mimeTypes["application/x-shockwave-flash"];r&&(r.enabledPlugin||(n=!1))}if(n){var i=t.split(" ");for(var s=0;s<i.length;++s){var o=parseFloat(i[s]);if(isNaN(o))continue;return o}}}}}if(window.ActiveXObject)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(e){t=e.GetVariable("$version");if(t)return parseFloat(t.split(" ")[1].split(",").join("."))}}catch(u){}return 0},e.detectwebgl=function(){var e=null,t=0;try{var n=document.createElement("canvas");for(var r=0;r<4;r++){e=n.getContext(["webgl","experimental-webgl","moz-webgl","webkit-3d"][r]);if(e)break}e&&(t=e.getParameter(e.MAX_TEXTURE_SIZE))}catch(i){}return e=null,n=null,t},e.detectcss3d=function(){var e=!1,t=document.createElement("div");for(var n=0;n<5;n++)if(typeof t.style[["p","msP","MozP","WebkitP","OP"][n]+"erspective"]!="undefined"){e=!0;if(n==3&&window.matchMedia){var r=window.matchMedia("(-webkit-transform-3d)");r&&(e=r.matches==1)}break}return e},e.walkDirASync=function u(e,t){var n=top.require("path"),r=top.require("fs"),i=[];r.readdir(e,function(s,o){if(s)return t(s);var a=o.length;if(!a)return t(null,i);o.forEach(function(s){s.charAt(0)!="."?(s=e+n.sep+s,r.stat(s,function(e,n){n&&n.isDirectory()?u(s,function(e,n){i=i.concat(n),--a||t(null,i)}):(n&&i.push({path:s,size:n.size}),--a||t(null,i))})):--a||t(null,i)})})},e.walkDirSync=function a(e,t){var n=top.require("path"),r=top.require("fs"),i=[];r.readdir(e,function(n,s){if(n)return t(n);var o=0;(function u(){var n=s[o++];if(!n)return t(null,i);n.charAt(0)!="."?(n=e+"/"+n,r.stat(n,function(e,t){t&&t.isDirectory()?a(n,function(e,t){i=i.concat(t),u()}):(t&&i.push({path:n,size:t.size}),u())})):u()})()})}})()