var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Thu, 02 Aug 2018 01:01:23 GMT\x0aServer: Apache/2.4.10 (Debian) PHP/5.6.11\x0aLast-Modified: Thu, 23 Jul 2015 19:18:04 GMT\x0aETag: \x227fc0-51b8fbf1a5300-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-12389/12390\x0aContent-Length: 12390\x0aKeep-Alive: timeout=5, max=70\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*\x0a * Ext JS Library 3.0.3\x0a * Copyright(c) 2006-2009 Ext JS, LLC\x0a * licensing@extjs.com\x0a * http://www.extjs.com/license\x0a */\x0awindow.undefined=window.undefined;Ext={version:\x223.0.3\x22};Ext.apply=function(d,e,b){if(b){Ext.apply(d,b)}if(d&&e&&typeof e==\x22object\x22){for(var a in e){d[a]=e[a]}}return d};(function(){var g=0,s=Object.prototype.toString,t=navigator.userAgent.toLowerCase(),y=function(e){return e.test(t)},i=document,l=i.compatMode==\x22CSS1Compat\x22,A=y(/opera/),h=y(/chrome/),u=y(/webkit/),x=!h&&y(/safari/),f=x&&y(/applewebkit\x5c/4/),b=x&&y(/version\x5c/3/),B=x&&y(/version\x5c/4/),r=!A&&y(/msie/),p=r&&y(/msie 7/),o=r&&y(/msie 8/),q=r&&!p&&!o,n=!u&&y(/gecko/),d=n&&y(/rv:1\x5c.8/),a=n&&y(/rv:1\x5c.9/),v=r&&!l,z=y(/windows|win32/),k=y(/macintosh|mac os x/),j=y(/adobeair/),m=y(/linux/),c=/^https/i.test(window.location.protocol);if(q){try{i.execCommand(\x22BackgroundImageCache\x22,false,true)}catch(w){}}Ext.apply(Ext,{SSL_SECURE_URL:c&&r?\x27javascript:\x22\x22\x27:\x22about:blank\x22,isStrict:l,isSecure:c,isReady:false,enableGarbageCollector:true,enableListenerCollection:false,USE_NATIVE_JSON:false,applyIf:function(C,D){if(C){for(var e in D){if(!Ext.isDefined(C[e])){C[e]=D[e]}}}return C},id:function(e,C){return(e=Ext.getDom(e)||{}).id=e.id||(C||\x22ext-gen\x22)+(++g)},extend:function(){var C=function(E){for(var D in E){this[D]=E[D]}};var e=Object.prototype.constructor;return function(J,G,I){if(Ext.isObject(G)){I=G;G=J;J=I.constructor!=e?I.constructor:function(){G.apply(this,arguments)}}var E=function(){},H,D=G.prototype;E.prototype=D;H=J.prototype=new E();H.constructor=J;J.superclass=D;if(D.constructor==e){D.constructor=G}J.override=function(F){Ext.override(J,F)};H.superclass=H.supr=(function(){return D});H.override=C;Ext.override(J,I);J.extend=function(F){return Ext.extend(J,F)};return J}}(),override:function(e,D){if(D){var C=e.prototype;Ext.apply(C,D);if(Ext.isIE&&D.toString!=e.toString){C.toString=D.toString}}},namespace:function(){var C,e;Ext.each(arguments,function(D){e=D.split(\x22.\x22);C=window[e[0]]=window[e[0]]||{};Ext.each(e.slice(1),function(E){C=C[E]=C[E]||{}})});return C},urlEncode:function(G,F){var D,C=[],E=encodeURIComponent;Ext.iterate(G,function(e,H){D=Ext.isEmpty(H);Ext.each(D?e:H,function(I){C.push(\x22&\x22,E(e),\x22=\x22,(!Ext.isEmpty(I)&&(I!=e||!D))?(Ext.isDate(I)?Ext.encode(I).replace(/\x22/g,\x22\x22):E(I)):\x22\x22)})});if(!F){C.shift();F=\x22\x22}return F+C.join(\x22\x22)},urlDecode:function(D,C){if(Ext.isEmpty(D)){return{}}var G={},F=D.split(\x22&\x22),H=decodeURIComponent,e,E;Ext.each(F,function(I){I=I.split(\x22=\x22);e=H(I[0]);E=H(I[1]);G[e]=C||!G[e]?E:[].concat(G[e]).concat(E)});return G},urlAppend:function(e,C){if(!Ext.isEmpty(C)){return e+(e.indexOf(\x22?\x22)===-1?\x22?\x22:\x22&\x22)+C}return e},toArray:function(){return r?function(e,E,C,D){D=[];Ext.each(e,function(F){D.push(F)});return D.slice(E||0,C||D.length)}:function(e,D,C){return Array.prototype.slice.call(e,D||0,C||e.length)}}(),isIterable:function(e){if(Ext.isArray(e)||e.callee){return true}if(/NodeList|HTMLCollection/.test(s.call(e))){return true}return((e.nextNode||e.item)&&Ext.isNumber(e.length))},each:function(F,E,D){if(Ext.isEmpty(F,true)){return}if(!Ext.isIterable(F)||Ext.isPrimitive(F)){F=[F]}for(var C=0,e=F.length;C\x3ce;C++){if(E.call(D||F[C],F[C],C,F)===false){return C}}},iterate:function(D,C,e){if(Ext.isEmpty(D)){return}if(Ext.isIterable(D)){Ext.each(D,C,e);return}else{if(Ext.isObject(D)){for(var E in D){if(D.hasOwnProperty(E)){if(C.call(e||D,E,D[E])===false){return}}}}}},getDom:function(e){if(!e||!i){return null}return e.dom?e.dom:(Ext.isString(e)?i.getElementById(e):e)},getBody:function(){return Ext.get(i.body||i.documentElement)},removeNode:r?function(){var e;return function(C){if(C&&C.tagName!=\x22BODY\x22){e=e||i.createElement(\x22div\x22);e.appendChild(C);e.innerHTML=\x22\x22}}}():function(e){if(e&&e.parentNode&&e.tagName!=\x22BODY\x22){e.parentNode.removeChild(e)}},isEmpty:function(C,e){return C===null||C===undefined||((Ext.isArray(C)&&!C.length))||(!e?C===\x22\x22:false)},isArray:function(e){return s.apply(e)===\x22[object Array]\x22},isDate:function(e){return s.apply(e)===\x22[object Date]\x22},isObject:function(e){return e&&typeof e==\x22object\x22},isPrimitive:function(e){return Ext.isString(e)||Ext.isNumber(e)||Ext.isBoolean(e)},isFunction:function(e){return s.apply(e)===\x22[object Function]\x22},isNumber:function(e){return typeof e===\x22number\x22&&isFinite(e)},isString:function(e){return typeof e===\x22string\x22},isBoolean:function(e){return typeof e===\x22boolean\x22},isDefined:function(e){return typeof e!==\x22undefined\x22},isOpera:A,isWebKit:u,isChrome:h,isSafari:x,isSafari3:b,isSafari4:B,isSafari2:f,isIE:r,isIE6:q,isIE7:p,isIE8:o,isGecko:n,isGecko2:d,isGecko3:a,isBorderBox:v,isLinux:m,isWindows:z,isMac:k,isAir:j});Ext.ns=Ext.namespace})();Ext.ns(\x22Ext\x22,\x22Ext.util\x22,\x22Ext.lib\x22,\x22Ext.data\x22);Ext.apply(Function.prototype,{createInterceptor:function(b,a){var c=this;return !Ext.isFunction(b)?this:function(){var e=this,d=arguments;b.target=e;b.method=c;return(b.apply(a||e||window,d)!==false)?c.apply(e||window,d):null}},createCallback:function(){var a=arguments,b=this;return function(){return b.apply(window,a)}},createDelegate:function(c,b,a){var d=this;return function(){var f=b||arguments;if(a===true){f=Array.prototype.slice.call(arguments,0);f=f.concat(b)}else{if(Ext.isNumber(a)){f=Array.prototype.slice.call(arguments,0);var e=[a,0].concat(b);Array.prototype.splice.apply(f,e)}}return d.apply(c||window,f)}},defer:function(c,e,b,a){var d=this.createDelegate(e,b,a);if(c\x3e0){return setTimeout(d,c)}d();return 0}});Ext.applyIf(String,{format:function(b){var a=Ext.toArray(arguments,1);return b.replace(/\x5c{(\x5cd+)\x5c}/g,function(c,d){return a[d]})}});Ext.applyIf(Array.prototype,{indexOf:function(b,c){var a=this.length;c=c||0;c+=(c\x3c0)?a:0;for(;c\x3ca;++c){if(this[c]===b){return c}}return -1},remove:function(b){var a=this.indexOf(b);if(a!=-1){this.splice(a,1)}return this}});Ext.ns(\x22Ext.grid\x22,\x22Ext.dd\x22,\x22Ext.tree\x22,\x22Ext.form\x22,\x22Ext.menu\x22,\x22Ext.state\x22,\x22Ext.layout\x22,\x22Ext.app\x22,\x22Ext.ux\x22,\x22Ext.chart\x22,\x22Ext.direct\x22);Ext.apply(Ext,function(){var c=Ext,a=0,b=null;return{emptyFn:function(){},BLANK_IMAGE_URL:Ext.isIE6||Ext.isIE7||Ext.isAir?\x22http://extjs.com/s.gif\x22:\x22data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\x22,extendX:function(d,e){return Ext.extend(d,e(d.prototype))},getDoc:function(){return Ext.get(document)},num:function(e,d){e=Number(Ext.isEmpty(e)||Ext.isBoolean(e)?NaN:e);return isNaN(e)?d:e},value:function(f,d,e){return Ext.isEmpty(f,e)?d:f},escapeRe:function(d){return d.replace(/([-.*+?^${}()|[\x5c]\x5c/\x5c\x5c])/g,\x22\x5c\x5c$1\x22)},sequence:function(g,d,f,e){g[d]=g[d].createSequence(f,e)},addBehaviors:function(h){if(!Ext.isReady){Ext.onReady(function(){Ext.addBehaviors(h)})}else{var e={},g,d,f;for(d in h){if((g=d.split(\x22@\x22))[1]){f=g[0];if(!e[f]){e[f]=Ext.select(f)}e[f].on(g[1],h[d])}}e=null}},getScrollBarWidth:function(f){if(!Ext.isReady){return 0}if(f===true||b===null){var h=Ext.getBody().createChild(\x27\x3cdiv class=\x22x-hide-offsets\x22 style=\x22width:100px;height:50px;overflow:hidden;\x22\x3e\x3cdiv style=\x22height:200px;\x22\x3e\x3c/div\x3e\x3c/div\x3e\x27),g=h.child(\x22div\x22,true);var e=g.offsetWidth;h.setStyle(\x22overflow\x22,(Ext.isWebKit||Ext.isGecko)?\x22auto\x22:\x22scroll\x22);var d=g.offsetWidth;h.remove();b=e-d+2}return b},combine:function(){var f=arguments,e=f.length,h=[];for(var g=0;g\x3ce;g++){var d=f[g];if(Ext.isArray(d)){h=h.concat(d)}else{if(d.length!==undefined&&!d.substr){h=h.concat(Array.prototype.slice.call(d,0))}else{h.push(d)}}}return h},copyTo:function(d,e,f){if(Ext.isString(f)){f=f.split(/[,;\x5cs]/)}Ext.each(f,function(g){if(e.hasOwnProperty(g)){d[g]=e[g]}},this);return d},destroy:function(){Ext.each(arguments,function(d){if(d){if(Ext.isArray(d)){this.destroy.apply(this,d)}else{if(Ext.isFunction(d.destroy)){d.destroy()}else{if(d.dom){d.remove()}}}}},this)},destroyMembers:function(k,h,f,g){for(var j=1,e=arguments,d=e.length;j\x3cd;j++){Ext.destroy(k[e[j]]);delete k[e[j]]}},clean:function(d){var e=[];Ext.each(d,function(f){if(!!f){e.push(f)}});return e},unique:function(d){var e=[],f={};Ext.each(d,function(g){if(!f[g]){e.push(g)}f[g]=true});return e},flatten:function(d){var f=[];function e(g){Ext.each(g,function(h){if(Ext.isArray(h)){e(h)}else{f.push(h)}});return f}return e(d)},min:function(d,e){var f=d[0];e=e||function(h,g){return h\x3cg?-1:1};Ext.each(d,function(g){f=e(f,g)==-1?f:g});return f},max:function(d,e){var f=d[0];e=e||function(h,g){return h\x3eg?1:-1};Ext.each(d,function(g){f=e(f,g)==1?f:g});return f},mean:function(d){return Ext.sum(d)/d.length},sum:function(d){var e=0;Ext.each(d,function(f){e+=f});return e},partition:function(d,e){var f=[[],[]];Ext.each(d,function(h,j,g){f[(e&&e(h,j,g))||(!e&&h)?0:1].push(h)});return f},invoke:function(d,e){var g=[],f=Array.prototype.slice.call(arguments,2);Ext.each(d,function(h,j){if(h&&Ext.isFunction(h[e])){g.push(h[e].apply(h,f))}else{g.push(undefined)}});return g},pluck:function(d,f){var e=[];Ext.each(d,function(g){e.push(g[f])});return e},zip:function(){var m=Ext.partition(arguments,function(i){return !Ext.isFunction(i)}),h=m[0],l=m[1][0],d=Ext.max(Ext.pluck(h,\x22length\x22)),g=[];for(var k=0;k\x3cd;k++){g[k]=[];if(l){g[k]=l.apply(l,Ext.pluck(h,k))}else{for(var f=0,e=h.length;f\x3ce;f++){g[k].push(h[f][k])}}}return g},getCmp:function(d){return Ext.ComponentMgr.get(d)},useShims:c.isIE6||(c.isMac&&c.isGecko2),type:function(e){if(e===undefined||e===null){return false}if(e.htmlElement){return\x22element\x22}var d=typeof e;if(d==\x22object\x22&&e.nodeName){switch(e.nodeType){case 1:return\x22element\x22;case 3:return(/\x5cS/).test(e.nodeValue)?\x22textnode\x22:\x22whitespace\x22}}if(d==\x22object\x22||d==\x22function\x22){switch(e.constructor){case Array:return\x22array\x22;case RegExp:return\x22regexp\x22;case Date:return\x22date\x22}if(Ext.isNumber(e.length)&&Ext.isFunction(e.item)){return\x22nodelist\x22}}return d},intercept:function(g,d,f,e){g[d]=g[d].createInterceptor(f,e)},callback:function(d,g,f,e){if(Ext.isFunction(d)){if(e){d.defer(e,g,f||[])}else{d.apply(g,f||[])}}}}}());Ext.apply(Function.prototype,{createSequence:function(b,a){var c=this;return !Ext.isFunction(b)?this:function(){var d=c.apply(this||window,arguments);b.apply(a||this||window,arguments);return d}}});Ext.applyIf(String,{escape:function(a){return a.replace(/(\x27|\x5c\x5c)/g,\x22\x5c\x5c$1\x22)},leftPad:function(d,b,c){var a=String(d);if(!c){c=\x22 \x22}while(a.length\x3cb){a=c+a}return a}});String.prototype.toggle=function(b,a){return this==b?a:b};String.prototype.trim=function(){var a=/^\x5cs+|\x5cs+$/g;return function(){return this.replace(a,\x22\x22)}}();Date.prototype.getElapsed=function(a){return Math.abs((a||new Date()).getTime()-this.getTime())};Ext.applyIf(Number.prototype,{constrain:function(b,a){return Math.min(Math.max(this,b),a)}});Ext.util.TaskRunner=function(e){e=e||10;var f=[],a=[],b=0,g=false,d=function(){g=false;clearInterval(b);b=0},h=function(){if(!g){g=true;b=setInterval(i,e)}},c=function(j){a.push(j);if(j.onStop){j.onStop.apply(j.scope||j)}},i=function(){var l=a.length,n=new Date().getTime();if(l\x3e0){for(var p=0;p\x3cl;p++){f.remove(a[p])}a=[];if(f.length\x3c1){d();return}}for(var p=0,o,k,m,j=f.length;p\x3cj;++p){o=f[p];k=n-o.taskRunTime;if(o.interval\x3c=k){m=o.run.apply(o.scope||o,o.args||[++o.taskRunCount]);o.taskRunTime=n;if(m===false||o.taskRunCount===o.repeat){c(o);return}}if(o.duration&&o.duration\x3c=(n-o.taskStartTime)){c(o)}}};this.start=function(j){f.push(j);j.taskStartTime=new Date().getTime();j.taskRunTime=0;j.taskRunCount=0;h();return j};this.stop=function(j){c(j);return j};this.stopAll=function(){d();for(var k=0,j=f.length;k\x3cj;k++){if(f[k].onStop){f[k].onStop()}}f=[];a=[]}};Ext.TaskMgr=new Ext.util.TaskRunner();(function(){var b;function c(d){if(!b){b=new Ext.Element.Flyweight()}b.dom=d;return b}(function(){var g=document,e=g.compatMode==\x22CSS1Compat\x22,f=Math.max,d=Math.round,h=parseInt;Ext.lib.Dom={isAncestor:function(j,k){var i=false;j=Ext.getDom(j);k=Ext.getDom(k);if(j&&k){if(j.contains){return j.contains(k)}else{if(j.compareDocumentPosition){return !!(j.compareDocumentPosition(k)&16)}else{while(k=k.parentNode){i=k==j||i}}}}return i},getViewWidth:function(i){return i?this.getDocumentWidth():this.getViewportWidth()},getViewHeight:function(i){return i?this.getDocumentHeight():this.getViewportHeight()},getDocumentHeight:function(){return f(!e?g.body.scrollHeight:g.documentElement.scrollHeight,this.getViewportHeight())},getDocumentWidth:function(){return f(!e?g.body.scrollWidth:g.documentElement.scrollWidth,this.getViewportWidth())},getViewportHeight:function(){return Ext.isIE?(Ext.isStrict?g.documentElement.clientHeight:g.body.clientHeight):self.innerHeight},getViewportWidth:function(){return !Ext.isStrict&&!Ext.isOpera?g.body.clientWidth:Ext.isIE?g.documentElement.clientWidth:self.innerWidth},getY:function(i){return this.getXY(i)[1]},getX:function(i){return this.getXY(i)[0]},getXY:function(k){var j,q,s,v,l,m,u=0,r=0,t,i,n=(g.body||g.documentElement),o=[0,0];k=Ext.getDom(k);if(k!=n){if(k.getBoundingClientRect){s=k.getBoundingClientRect();t=c(document).getScroll();o=[d(s.left+t.left),d(s.top+t.top)]}else{j=k;i=c(k).isStyle(\x22position\x22,\x22absolute\x22);while(j){q=c(j);u+=j.offsetLeft;r+=j.offsetTop;i=i||q.isStyle(\x22position\x22,\x22absolute\x22);if(Ext.isGecko){r+=v=h(q.getStyle(\x22borderTopWidth\x22),10)||0;u+=l=h(q.getStyle(\x22borderLeftWidth\x22),10)||0;if(j!=k&&!q.isStyle(\x22overflow\x22,\x22visible\x22)){u+=l;r+=v}}j=j.offsetParent}if(Ext.isSafari&&i){u-=n.offsetLeft;r-=n.offsetTop}if(Ext.isGecko&&!i){m=c(n);u+=h(m.getStyle(\x22borderLeftWidth\x22),10)||0;r+=h(m.getStyle(\x22borderTopWidth\x22),10)||0}j=k.parentNode;while(j&&j!=n){if(!Ext.isOpera||(j.tagName!=\x22TR\x22&&!c(j).isStyle(\x22display\x22,\x22inline\x22))){u-=j.scrollLeft;r-=j.scrollTop}j=j.parentNode}o=[u,r]}}return o},setXY:function(j,k){(j=Ext.fly(j,\x22_setXY\x22)).position();var l=j.translatePoints(k),i=j.dom.style,m;for(m in l){if(!isNaN(l[m])){i[m]=l[m]+\x22px\x22}}},setX:function(j,i){this.setXY(j,[i,false])},setY:function(i,j){this.setXY(i,[false,j])}}})();Ext.lib.Dom.getRegion=function(d){return Ext.lib.Region.getRegion(d)};Ext.lib.Event=function(){var x=false,v=[],g=[],C=0,p=[],d,E=false,k=window,I=document,l=200,s=20,D=0,r=1,i=2,m=3,t=3,y=4,u=\x22scrollLeft\x22,q=\x22scrollTop\x22,f=\x22unload\x22,A=\x22mouseover\x22,H=\x22mouseout\x22,e=function(){var J;if(k.addEventListener){J=function(N,L,M,K){if(L==\x22mouseenter\x22){M=M.createInterceptor(o);N.addEventListener(A,M,(K))}else{if(L==\x22mouseleave\x22){M=M.createInterceptor(o);N.addEventListener(H,M,(K))}else{N.addEventListener(L,M,(K))}}return M}}else{if(k.attachEvent){J=function(N,L,M,K){N.attachEvent(\x22on\x22+L,M);return M}}else{J=function(){}}}return J}(),h=function(){var J;if(k.removeEventListener){J=function(N,L,M,K){if(L==\x22mouseenter\x22){L=A}else{if(L==\x22mouseleave\x22){L=H}}N.removeEventListener(L,M,(K))}}else{if(k.detachEvent){J=function(M,K,L){M.detachEvent(\x22on\x22+K,L)}}else{J=function(){}}}return J}();function o(J){return !w(J.currentTarget,z.getRelatedTarget(J))}function w(J,K){if(J&&J.firstChild){while(K){if(K===J){return true}K=K.parentNode;if(K&&(K.nodeType!=1)){K=null}}}return false}function B(P,L,O){for(var K,M=-1,J=v.length,N=J-1;N\x3e=0;--N){K=v[N];if(K&&K[i]==O&&K[D]==P&&K[r]==L){M=N;break}}return M}function F(){var J=false,M=[],K,L=!x||(C\x3e0);if(!E){E=true;Ext.each(p,function(O,P,N){if(O&&(K=I.getElementById(O.id))){if(!O.checkReady||x||K.nextSibling||(I&&I.body)){K=O.override?(O.override===true?O.obj:O.override):K;O.fn.call(K,O.obj);p[P]=null}else{M.push(O)}}});C=(M.length===0)?0:C-1;if(L){n()}else{clearInterval(d);d=null}J=!(E=false)}return J}function n(){if(!d){var J=function(){F()};d=setInterval(J,s)}}function G(){var J=I.documentElement,K=I.body;if(J&&(J[q]||J[u])){return[J[u],J[q]]}else{if(K){return[K[u],K[q]]}else{return[0,0]}}}function j(J,K){J=J.browserEvent||J;var L=J[\x22page\x22+K];if(!L&&L!==0){L=J[\x22client\x22+K]||0;if(Ext.isIE){L+=G()[K==\x22X\x22?0:1]}}return L}var z={onAvailable:function(L,J,M,K){p.push({id:L,fn:J,obj:M,override:K,checkReady:false});C=l;n()},addListener:function(M,J,L){var K;M=Ext.getDom(M);if(M&&L){if(f==J){K=!!(g[g.length]=[M,J,L])}else{v.push([M,J,L,K=e(M,J,L,false)])}}return !!K},removeListener:function(O,K,N){var M=false,L,J;O=Ext.getDom(O);if(!N){M=this.purgeElement(O,false,K)}else{if(f==K){Ext.each(g,function(Q,R,P){if(Q&&Q[0]==O&&Q[1]==K&&Q[2]==N){g.splice(R,1);M=true}})}else{L=arguments[3]||B(O,K,N);J=v[L];if(O&&J){h(O,K,J[m],false);J[m]=J[i]=null;v.splice(L,1);M=true}}}return M},getTarget:function(J){J=J.browserEvent||J;return this.resolveTextNode(J.target||J.srcElement)},resolveTextNode:Ext.isGecko?function(K){if(!K){return}var J=HTMLElement.prototype.toString.call(K);if(J==\x22[xpconnect wrapped native prototype]\x22||J==\x22[object XULElement]\x22){return}return K.nodeType==3?K.parentNode:K}:function(J){return J&&J.nodeType==3?J.parentNode:J},getRelatedTarget:function(J){J=J.browserEvent||J;return this.resolveTextNode(J.relatedTarget||(J.type==H?J.toElement:J.type==A?J.fromElement:null))},getPageX:function(J){return j(J,\x22X\x22)},getPageY:function(J){return j(J,\x22Y\x22)},getXY:function(J){return[this.getPageX(J),this.getPageY(J)]},stopEvent:function(J){this.stopPropagation(J);this.preventDefault(J)},stopPropagation:function(J){J=J.browserEvent||J;if(J.stopPropagation){J.stopPropagation()}else{J.cancelBubble=true}},preventDefault:function(J){J=J.browserEvent||J;if(J.preventDefault){J.preventDefault()}else{J.returnValue=false}},getEvent:function(J){J=J||k.event;if(!J){var K=this.getEvent.caller;while(K){J=K.arguments[0];if(J&&Event==J.constructor){break}K=K.caller}}return J},getCharCode:function(J){J=J.browserEvent||J;return J.charCode||J.keyCode||0},_load:function(K){x=true;var J=Ext.lib.Event;if(Ext.isIE&&K!==true){h(k,\x22load\x22,arguments.callee)}},purgeElement:function(K,M,J){var L=this;Ext.each(L.getListeners(K,J),function(N){if(N){L.removeListener(K,N.type,N.fn,N.index)}});if(M&&K&&K.childNodes){Ext.each(K.childNodes,function(N){L.purgeElement(N,M,J)})}},getListeners:function(M,K){var N=this,L=[],J;if(K){J=K==f?g:v}else{J=v.concat(g)}Ext.each(J,function(O,P){if(O&&O[D]==M&&(!K||K==O[r])){L.push({type:O[r],fn:O[i],obj:O[t],adjust:O[y],index:P})}});return L.length?L:null},_unload:function(Q){var P=Ext.lib.Event,N,M,K,J,L,O;Ext.each(g,function(R){if(R){try{O=R[y]?(R[y]===true?R[t]:R[y]):k;R[i].call(O,P.getEvent(Q),R[t])}catch(S){}}});g=null;if(v&&(M=v.length)){while(M){if((K=v[L=--M])){P.removeListener(K[D],K[r],K[i],L)}}}h(k,f,P._unload)}};z.on=z.addListener;z.un=z.removeListener;if(I&&I.body){z._load(true)}else{e(k,\x22load\x22,z._load)}e(k,f,z._unload);F();return z}();Ext.lib.Ajax=function(){var g=[\x22MSXML2.XMLHTTP.3.0\x22,\x22MSXML2.XMLHTTP\x22,\x22Microsoft.XMLHTTP\x22],d=\x22Content-Type\x22;function h(s){var r=s.conn,t;function q(u,v){for(t in v){if(v.hasOwnProperty(t)){u.setRequestHeader(t,v[t])}}}if(k.defaultHeaders){q(r,k.defaultHeaders)}if(k.headers){q(r,k.headers);delete k.headers}}function e(t,s,r,q){return{tId:t,status:r?-1:0,statusText:r?\x22transaction aborted\x22:\x22communication failure\x22,isAbort:r,isTimeout:q,argument:s}}function j(q,r){(k.headers=k.headers||{})[q]=r}function o(z,x){var r={},v,w=z.conn,q,u;try{v=z.conn.getAllResponseHeaders();Ext.each(v.replace(/\x5cr\x5cn/g,\x22\x5cn\x22).split(\x22\x5cn\x22),function(s){q=s.indexOf(\x22:\x22);if(q\x3e=0){u=s.substr(0,q).toLowerCase();if(s.charAt(q+1)==\x22 \x22){++q}r[u]=s.substr(q+1)}})}catch(y){}return{tId:z.tId,status:w.status,statusText:w.statusText,getResponseHeader:function(s){return r[s.toLowerCase()]},getAllResponseHeaders:function(){return v},responseText:w.responseText,responseXML:w.responseXML,argument:x}}function n(q){q.conn=null;q=null}function f(v,w,r,q){if(!w){n(v);return}var t,s;try{if(v.conn.status!==undefined&&v.conn.status!=0){t=v.conn.status}else{t=13030}}catch(u){t=13030}if((t\x3e=200&&t\x3c300)||(Ext.isIE&&t==1223)){s=o(v,w.argument);if(w.success){if(!w.scope){w.success(s)}else{w.success.apply(w.scope,[s])}}}else{switch(t){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:s=e(v.tId,w.argument,(r?r:false),q);if(w.failure){if(!w.scope){w.failure(s)}else{w.failure.apply(w.scope,[s])}}break;default:s=o(v,w.argument);if(w.failure){if(!w.scope){w.failure(s)}else{w.failure.apply(w.scope,[s])}}}}n(v);s=null}function m(s,v){v=v||{};var q=s.conn,u=s.tId,r=k.poll,t=v.timeout||null;if(t){k.timeout[u]=setTimeout(function(){k.abort(s,v,true)},t)}r[u]=setInterval(function(){if(q&&q.readyState==4){clearInterval(r[u]);r[u]=null;if(t){clearTimeout(k.timeout[u]);k.timeout[u]=null}f(s,v)}},k.pollInterval)}function i(u,r,t,q){var s=l()||null;if(s){s.conn.open(u,r,true);if(k.useDefaultXhrHeader){j(\x22X-Requested-With\x22,k.defaultXhrHeader)}if(q&&k.useDefaultHeader&&(!k.headers||!k.headers[d])){j(d,k.defaultPostHeader)}if(k.defaultHeaders||k.headers){h(s)}m(s,t);s.conn.send(q||null)}return s}function l(){var r;try{if(r=p(k.transactionId)){k.transactionId++}}catch(q){}finally{return r}}function p(t){var q;try{q=new XMLHttpRequest()}catch(s){for(var r=0;r\x3cg.length;++r){try{q=new ActiveXObject(g[r]);break}catch(s){}}}finally{return{conn:q,tId:t}}}var k={request:function(q,s,t,u,y){if(y){var v=this,r=y.xmlData,w=y.jsonData,x;Ext.applyIf(v,y);if(r||w){x=v.headers;if(!x||!x[d]){j(d,r?\x22text/xml\x22:\x22application/json\x22)}u=r||(Ext.isObject(w)?Ext.encode(w):w)}}return i(q||y.method||\x22POST\x22,s,t,u)},serializeForm:function(r){var s=r.elements||(document.forms[r]||Ext.getDom(r)).elements,y=false,x=encodeURIComponent,v,z,q,t,u=\x22\x22,w;Ext.each(s,function(A){q=A.name;w=A.type;if(!A.disabled&&q){if(/select-(one|multiple)/i.test(w)){Ext.each(A.options,function(B){if(B.selected){u+=String.format(\x22{0}={1}&\x22,x(q),x((B.hasAttribute?B.hasAttribute(\x22value\x22):B.getAttribute(\x22value\x22)!==null)?B.value:B.text))}})}else{if(!/file|undefined|reset|button/i.test(w)){if(!(/radio|checkbox/i.test(w)&&!A.checked)&&!(w==\x22submit\x22&&y)){u+=x(q)+\x22=\x22+x(A.value)+\x22&\x22;y=/submit/i.test(w)}}}}});return u.substr(0,u.length-1)},useDefaultHeader:true,defaultPostHeader:\x22application/x-www-form-urlencoded; charset=UTF-8\x22,useDefaultXhrHeader:true,defaultXhrHeader:\x22XMLHttpRequest\x22,poll:{},timeout:{},pollInterval:50,transactionId:0,abort:function(t,v,q){var s=this,u=t.tId,r=false;if(s.isCallInProgress(t)){t.conn.abort();clearInterval(s.poll[u]);s.poll[u]=null;if(q){s.timeout[u]=null}f(t,v,(r=true),q)}return r},isCallInProgress:function(q){return q.conn&&!{0:true,4:true}[q.conn.readyState]}};return k}();Ext.lib.Region=function(f,h,d,e){var g=this;g.top=f;g[1]=f;g.right=h;g.bottom=d;g.left=e;g[0]=e};Ext.lib.Region.prototype={contains:function(e){var d=this;return(e.left\x3e=d.left&&e.right\x3c=d.right&&e.top\x3e=d.top&&e.bottom\x3c=d.bottom)},getArea:function(){var d=this;return((d.bottom-d.top)*(d.right-d.left))},intersect:function(i){var h=this,f=Math.max(h.top,i.top),g=Math.min(h.right,i.right),d=Math.min(h.bottom,i.bottom),e=Math.max(h.left,i.left);if(d\x3e=f&&g\x3e=e){return new Ext.lib.Region(f,g,d,e)}},union:function(i){var h=this,f=Math.min(h.top,i.top),g=Math.max(h.right,i.right),d=Math.max(h.bottom,i.bottom),e=Math.min(h.left,i.left);return new Ext.lib.Region(f,g,d,e)},constrainTo:function(e){var d=this;d.top=d.top.constrain(e.top,e.bottom);d.bottom=d.bottom.constrain(e.top,e.bottom);d.left=d.left.constrain(e.left,e.right);d.right=d.right.constrain(e.left,e.right);return d},adjust:function(f,e,d,h){var g=this;g.top+=f;g.left+=e;g.right+=h;g.bottom+=d;return g}};Ext.lib.Region.getRegion=function(g){var i=Ext.lib.Dom.getXY(g),f=i[1],h=i[0]+g.offsetWidth,d=i[1]+g.offsetHeight,e=i[0];return new Ext.lib.Region(f,h,d,e)};Ext.lib.Point=function(d,f){if(Ext.isArray(d)){f=d[1];d=d[0]}var e=this;e.x=e.right=e.left=e[0]=d;e.y=e.top=e.bottom=e[1]=f};Ext.lib.Point.prototype=new Ext.lib.Region();(function(){var g=Ext.lib,i=/width|height|opacity|padding/i,f=/^((width|height)|(top|left))$/,d=/width|height|top$|bottom$|left$|right$/i,h=/\x5cd+(em|%|en|ex|pt|in|cm|mm|pc)$/i,j=function(k){return typeof k!==\x22undefined\x22},e=function(){return new Date()};g.Anim={motion:function(n,l,o,p,k,m){return this.run(n,l,o,p,k,m,Ext.lib.Motion)},run:function(o,l,q,r,k,n,m){m=m||Ext.lib.AnimBase;if(typeof r==\x22string\x22){r=Ext.lib.Easing[r]}var p=new m(o,l,q,r);p.animateX(function(){if(Ext.isFunction(k)){k.call(n)}});return p}};g.AnimBase=function(l,k,m,n){if(l){this.init(l,k,m,n)}};g.AnimBase.prototype={doMethod:function(k,n,l){var m=this;return m.method(m.curFrame,n,l-n,m.totalFrames)},setAttr:function(k,m,l){if(i.test(k)&&m\x3c0){m=0}Ext.fly(this.el,\x22_anim\x22).setStyle(k,m+l)},getAttr:function(k){var m=Ext.fly(this.el),n=m.getStyle(k),l=f.exec(k)||[];if(n!==\x22auto\x22&&!h.test(n)){return parseFloat(n)}return(!!(l[2])||(m.getStyle(\x22position\x22)==\x22absolute\x22&&!!(l[3])))?m.dom[\x22offset\x22+l[0].charAt(0).toUpperCase()+l[0].substr(1)]:0},getDefaultUnit:function(k){return d.test(k)?\x22px\x22:\x22\x22},animateX:function(n,k){var l=this,m=function(){l.onComplete.removeListener(m);if(Ext.isFunction(n)){n.call(k||l,l)}};l.onComplete.addListener(m,l);l.animate()},setRunAttr:function(n){var p=this,q=this.attributes[n],r=q.to,o=q.by,s=q.from,t=q.unit,l=(this.runAttrs[n]={}),m;if(!j(r)&&!j(o)){return false}var k=j(s)?s:p.getAttr(n);if(j(r)){m=r}else{if(j(o)){if(Ext.isArray(k)){m=[];Ext.each(k,function(u,w){m[w]=u+o[w]})}else{m=k+o}}}Ext.apply(l,{start:k,end:m,unit:j(t)?t:p.getDefaultUnit(n)})},init:function(l,p,o,k){var r=this,n=0,s=g.AnimMgr;Ext.apply(r,{isAnimated:false,startTime:null,el:Ext.getDom(l),attributes:p||{},duration:o||1,method:k||g.Easing.easeNone,useSec:true,curFrame:0,totalFrames:s.fps,runAttrs:{},animate:function(){var u=this,v=u.duration;if(u.isAnimated){return false}u.curFrame=0;u.totalFrames=u.useSec?Math.ceil(s.fps*v):v;s.registerElement(u)},stop:function(u){var v=this;if(u){v.curFrame=v.totalFrames;v._onTween.fire()}s.stop(v)}});var t=function(){var v=this,u;v.onStart.fire();v.runAttrs={};for(u in this.attributes){this.setRunAttr(u)}v.isAnimated=true;v.startTime=e();n=0};var q=function(){var v=this;v.onTween.fire({duration:e()-v.startTime,curFrame:v.curFrame});var w=v.runAttrs;for(var u in w){this.setAttr(u,v.doMethod(u,w[u].start,w[u].end),w[u].unit)}++n};var m=function(){var u=this,w=(e()-u.startTime)/1000,v={duration:w,frames:n,fps:n/w};u.isAnimated=false;n=0;u.onComplete.fire(v)};r.onStart=new Ext.util.Event(r);r.onTween=new Ext.util.Event(r);r.onComplete=new Ext.util.Event(r);(r._onStart=new Ext.util.Event(r)).addListener(t);(r._onTween=new Ext.util.Event(r)).addListener(q);(r._onComplete=new Ext.util.Event(r)).addListener(m)}};Ext.lib.AnimMgr=new function(){var o=this,m=null,l=[],k=0;Ext.apply(o,{fps:1000,delay:1,registerElement:function(q){l.push(q);++k;q._onStart.fire();o.start()},unRegister:function(r,q){r._onComplete.fire();q=q||p(r);if(q!=-1){l.splice(q,1)}if(--k\x3c=0){o.stop()}},start:function(){if(m===null){m=setInterval(o.run,o.delay)}},stop:function(s){if(!s){clearInterval(m);for(var r=0,q=l.length;r\x3cq;++r){if(l[0].isAnimated){o.unRegister(l[0],0)}}l=[];m=null;k=0}else{o.unRegister(s)}},run:function(){var q;Ext.each(l,function(r){if(r&&r.isAnimated){q=r.totalFrames;if(r.curFrame\x3cq||q===null){++r.curFrame;if(r.useSec){n(r)}r._onTween.fire()}else{o.stop(r)}}},o)}});var p=function(r){var q=-1;Ext.each(l,function(t,s){if(t==r){q=s;return false}});return q};var n=function(r){var v=r.totalFrames,u=r.curFrame,t=r.duration,s=(u*t*1000/v),q=(e()-r.startTime),w=0;if(q\x3ct*1000){w=Math.round((q/s-1)*u)}else{w=v-(u+1)}if(w\x3e0&&isFinite(w)){if(r.curFrame+w\x3e=v){w=v-(u+1)}r.curFrame+=w}}};g.Bezier=new function(){this.getPosition=function(p,o){var r=p.length,m=[],q=1-o,l,k;for(l=0;l\x3cr;++l){m[l]=[p[l][0],p[l][1]]}for(k=1;k\x3cr;++k){for(l=0;l\x3cr-k;++l){m[l][0]=q*m[l][0]+o*m[parseInt(l+1,10)][0];m[l][1]=q*m[l][1]+o*m[parseInt(l+1,10)][1]}}return[m[0][0],m[0][1]]}};g.Easing={easeNone:function(l,k,n,m){return n*l/m+k},easeIn:function(l,k,n,m){return n*(l/=m)*l+k},easeOut:function(l,k,n,m){return -n*(l/=m)*(l-2)+k}};(function(){g.Motion=function(p,o,q,r){if(p){g.Motion.superclass.constructor.call(this,p,o,q,r)}};Ext.extend(g.Motion,Ext.lib.AnimBase);var n=g.Motion.superclass,m=g.Motion.prototype,l=/^points$/i;Ext.apply(g.Motion.prototype,{setAttr:function(o,s,r){var q=this,p=n.setAttr;if(l.test(o)){r=r||\x22px\x22;p.call(q,\x22left\x22,s[0],r);p.call(q,\x22top\x22,s[1],r)}else{p.call(q,o,s,r)}},getAttr:function(o){var q=this,p=n.getAttr;return l.test(o)?[p.call(q,\x22left\x22),p.call(q,\x22top\x22)]:p.call(q,o)},doMethod:function(o,r,p){var q=this;return l.test(o)?g.Bezier.getPosition(q.runAttrs[o],q.method(q.curFrame,0,100,q.totalFrames)/100):n.doMethod.call(q,o,r,p)},setRunAttr:function(v){if(l.test(v)){var x=this,q=this.el,A=this.attributes.points,t=A.control||[],y=A.from,z=A.to,w=A.by,B=g.Dom,p,s,r,u,o;if(t.length\x3e0&&!Ext.isArray(t[0])){t=[t]}else{}Ext.fly(q,\x22_anim\x22).position();B.setXY(q,j(y)?y:B.getXY(q));p=x.getAttr(\x22points\x22);if(j(z)){r=k.call(x,z,p);for(s=0,u=t.length;s\x3cu;++s){t[s]=k.call(x,t[s],p)}}else{if(j(w)){r=[p[0]+w[0],p[1]+w[1]];for(s=0,u=t.length;s\x3cu;++s){t[s]=[p[0]+t[s][0],p[1]+t[s][1]]}}}o=this.runAttrs[v]=[p];if(t.length\x3e0){o=o.concat(t)}o[o.length]=r}else{n.setRunAttr.call(this,v)}}});var k=function(o,q){var p=g.Dom.getXY(this.el);return[o[0]-p[0]+q[0],o[1]-p[1]+q[1]]}})()})();(function(){var d=Math.abs,i=Math.PI,h=Math.asin,g=Math.pow,e=Math.sin,f=Ext.lib;Ext.apply(f.Easing,{easeBoth:function(k,j,m,l){return((k/=l/2)\x3c1)?m/2*k*k+j:-m/2*((--k)*(k-2)-1)+j},easeInStrong:function(k,j,m,l){return m*(k/=l)*k*k*k+j},easeOutStrong:function(k,j,m,l){return -m*((k=k/l-1)*k*k*k-1)+j},easeBothStrong:function(k,j,m,l){return((k/=l/2)\x3c1)?m/2*k*k*k*k+j:-m/2*((k-=2)*k*k*k-2)+j},elasticIn:function(l,j,q,o,k,n){if(l==0||(l/=o)==1){return l==0?j:j+q}n=n||(o*0.3);var m;if(k\x3e=d(q)){m=n/(2*i)*h(q/k)}else{k=q;m=n/4}return -(k*g(2,10*(l-=1))*e((l*o-m)*(2*i)/n))+j},elasticOut:function(l,j,q,o,k,n){if(l==0||(l/=o)==1){return l==0?j:j+q}n=n||(o*0.3);var m;if(k\x3e=d(q)){m=n/(2*i)*h(q/k)}else{k=q;m=n/4}return k*g(2,-10*l)*e((l*o-m)*(2*i)/n)+q+j},elasticBoth:function(l,j,q,o,k,n){if(l==0||(l/=o/2)==2){return l==0?j:j+q}n=n||(o*(0.3*1.5));var m;if(k\x3e=d(q)){m=n/(2*i)*h(q/k)}else{k=q;m=n/4}return l\x3c1?-0.5*(k*g(2,10*(l-=1))*e((l*o-m)*(2*i)/n))+j:k*g(2,-10*(l-=1))*e((l*o-m)*(2*i)/n)*0.5+q+j},backIn:function(k,j,n,m,l){l=l||1.70158;return n*(k/=m)*k*((l+1)*k-l)+j},backOut:function(k,j,n,m,l){if(!l){l=1.70158}return n*((k=k/m-1)*k*((l+1)*k+l)+1)+j},backBoth:function(k,j,n,m,l){l=l||1.70158;return((k/=m/2)\x3c1)?n/2*(k*k*(((l*=(1.525))+1)*k-l))+j:n/2*((k-=2)*k*(((l*=(1.525))+1)*k+l)+2)+j},bounceIn:function(k,j,m,l){return m-f.Easing.bounceOut(l-k,0,m,l)+j},bounceOut:function(k,j,m,l){if((k/=l)\x3c(1/2.75)){return m*(7.5625*k*k)+j}else{if(k\x3c(2/2.75)){return m*(7.5625*(k-=(1.5/2.75))*k+0.75)+j}else{if(k\x3c(2.5/2.75)){return m*(7.5625*(k-=(2.25/2.75))*k+0.9375)+j}}}return m*(7.5625*(k-=(2.625/2.75))*k+0.984375)+j},bounceBoth:function(k,j,m,l){return(k\x3cl/2)?f.Easing.bounceIn(k*2,0,m,l)*0.5+j:f.Easing.bounceOut(k*2-l,0,m,l)*0.5+m*0.5+j}})})();(function(){var h=Ext.lib;h.Anim.color=function(p,n,q,r,m,o){return h.Anim.run(p,n,q,r,m,o,h.ColorAnim)};h.ColorAnim=function(n,m,o,p){h.ColorAnim.superclass.constructor.call(this,n,m,o,p)};Ext.extend(h.ColorAnim,h.AnimBase);var j=h.ColorAnim.superclass,i=/color$/i,f=/^transparent|rgba\x5c(0, 0, 0, 0\x5c)$/,l=/^rgb\x5c(([0-9]+)\x5cs*,\x5cs*([0-9]+)\x5cs*,\x5cs*([0-9]+)\x5c)$/i,d=/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,e=/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i,g=function(m){return typeof m!==\x22undefined\x22};function k(n){var p=parseInt,o,m=null,q;if(n.length==3){return n}Ext.each([d,l,e],function(s,r){o=(r%2==0)?16:10;q=s.exec(n);if(q&&q.length==4){m=[p(q[1],o),p(q[2],o),p(q[3],o)];return false}});return m}Ext.apply(h.ColorAnim.prototype,{getAttr:function(m){var o=this,n=o.el,p;if(i.test(m)){while(n&&f.test(p=Ext.fly(n).getStyle(m))){n=n.parentNode;p=\x22fff\x22}}else{p=j.getAttr.call(o,m)}return p},doMethod:function(m,r,n){var p=this,q,o=Math.floor;if(i.test(m)){q=[];Ext.each(r,function(s,t){q[t]=j.doMethod.call(p,m,s,n[t])});q=\x22rgb(\x22+o(q[0])+\x22,\x22+o(q[1])+\x22,\x22+o(q[2])+\x22)\x22}else{q=j.doMethod.call(p,m,r,n)}return q},setRunAttr:function(m){var p=this,o=p.attributes[m],t=o.to,q=o.by,r;j.setRunAttr.call(p,m);r=p.runAttrs[m];if(i.test(m)){var s=k(r.start),n=k(r.end);if(!g(t)&&g(q)){n=k(q);Ext.each(s,function(v,u){n[u]=v+n[u]})}r.start=s;r.end=n}}})})();(function(){var d=Ext.lib;d.Anim.scroll=function(j,h,k,l,g,i){return d.Anim.run(j,h,k,l,g,i,d.Scroll)};d.Scroll=function(h,g,i,j){if(h){d.Scroll.superclass.constructor.call(this,h,g,i,j)}};Ext.extend(d.Scroll,d.ColorAnim);var f=d.Scroll.superclass,e=\x22scroll\x22;Ext.apply(d.Scroll.prototype,{doMethod:function(g,m,h){var k,j=this,l=j.curFrame,i=j.totalFrames;if(g==e){k=[j.method(l,m[0],h[0]-m[0],i),j.method(l,m[1],h[1]-m[1],i)]}else{k=f.doMethod.call(j,g,m,h)}return k},getAttr:function(g){var h=this;if(g==e){return[h.el.scrollLeft,h.el.scrollTop]}else{return f.getAttr.call(h,g)}},setAttr:function(g,j,i){var h=this;if(g==e){h.el.scrollLeft=j[0];h.el.scrollTop=j[1]}else{f.setAttr.call(h,g,j,i)}}})})();if(Ext.isIE){function a(){var d=Function.prototype;delete d.createSequence;delete d.defer;delete d.createDelegate;delete d.createCallback;delete d.createInterceptor;window.detachEvent(\x22onunload\x22,a)}window.attachEvent(\x22onunload\x22,a)}})();'}