/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("get",function(a,j){var k=require("path"),b=require("vm"),f=require("fs"),e=require("request"),g=f.existsSync||k.existsSync;a.Get=function(){};a.config.base=k.join(__dirname,"../");YUI.require=require;YUI.process=process;var i=function(l){return l.replace(/\\/g,"\\\\");};a.Get._exec=function(r,n,l){var q=i(k.dirname(n));var s=i(n);if(q.match(/^https?:\/\//)){q=".";s="remoteResource";}var o="(function(YUI) { var __dirname = '"+q+"'; "+"var __filename = '"+s+"'; "+"var process = YUI.process;"+"var require = function(file) {"+" if (file.indexOf('./') === 0) {"+"   file = __dirname + file.replace('./', '/'); }"+" return YUI.require(file); }; "+r+" ;return YUI; })";var m=b.createScript(o,n);var p=m.runInThisContext(o);YUI=p(YUI);l(null,n);};a.Get._include=function(o,l){var n=this;if(o.match(/^https?:\/\//)){var m={url:o,timeout:n.timeout};e(m,function(s,r,q){if(s){l(s,o);}else{a.Get._exec(q,o,l);}});}else{if(a.config.useSync){if(g(o)){var p=f.readFileSync(o,"utf8");a.Get._exec(p,o,l);}else{l("Path does not exist: "+o,o);}}else{f.readFile(o,"utf8",function(r,q){if(r){l(r,o);}else{a.Get._exec(q,o,l);}});}}};var d=function(m,n,l){if(a.Lang.isFunction(m.onEnd)){m.onEnd.call(a,n,l);}},h=function(l){if(a.Lang.isFunction(l.onSuccess)){l.onSuccess.call(a,l);}d(l,"success","success");},c=function(l,m){m.errors=[m];if(a.Lang.isFunction(l.onFailure)){l.onFailure.call(a,m,l);}d(l,m,"fail");};a.Get.js=function(v,w){var o=a.Array,u=this,t=o(v),m,q,p=t.length,r=0,n=function(){if(r===p){h(w);}};for(q=0;q<p;q++){m=t[q];if(a.Lang.isObject(m)){m=m.url;}m=m.replace(/'/g,"%27");a.Get._include(m,function(s,l){if(!a.config){a.config={debug:true};}if(w.onProgress){w.onProgress.call(w.context||a,l);}if(s){c(w,s);}else{r++;n();}});}};a.Get.script=a.Get.js;a.Get.css=function(m,l){h(l);};},"3.7.1pr1");