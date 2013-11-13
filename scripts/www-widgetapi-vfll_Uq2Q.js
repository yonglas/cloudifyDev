(function(){var g=void 0,h=!0,j=null,k=!1,l,m=this,p=function(a){for(var a=a.split("."),c=m,b;b=a.shift();)if(c[b]!=j)c=c[b];else return j;return c},q=function(a){return"string"==typeof a},aa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ba=0,ca=function(a,c,b){return a.call.apply(a.bind,arguments)},da=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,
d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},s=function(a,c,b){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return s.apply(j,arguments)},t=Date.now||function(){return+new Date},u=function(a,c){var b=a.split("."),d=m;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&c!==g?d[e]=c:d=d[e]?d[e]:d[e]={}},v=function(a,c){function b(){}b.prototype=c.prototype;a.X=c.prototype;a.prototype=
new b};Function.prototype.bind=Function.prototype.bind||function(a,c){if(1<arguments.length){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return s.apply(j,b)}return s(this,a)};var w=function(a){this.stack=Error().stack||"";a&&(this.message=""+a)};v(w,Error);w.prototype.name="CustomError";var ea=function(a,c){for(var b=1;b<arguments.length;b++)var d=(""+arguments[b]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a},x=function(a){if(!fa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ga,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ha,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ia,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ja,"&quot;"));return a},ga=/&/g,ha=/</g,ia=/>/g,ja=/\"/g,fa=/[&<>\"]/;var y=function(a,c){c.unshift(a);w.call(this,ea.apply(j,c));c.shift()};v(y,w);y.prototype.name="AssertionError";var z=function(a,c,b){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(c)var e=e+(": "+c),f=d;throw new y(""+e,f||[]);}},ka=function(a,c){throw new y("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=Array.prototype,la=A.indexOf?function(a,c,b){z(a.length!=j);return A.indexOf.call(a,c,b)}:function(a,c,b){b=b==j?0:0>b?Math.max(0,a.length+b):b;if(q(a))return!q(c)||1!=c.length?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},ma=A.forEach?function(a,c,b){z(a.length!=j);A.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)},na=function(a,c,b){z(a.length!=j);return 2>=arguments.length?A.slice.call(a,c):
A.slice.call(a,c,b)};var oa=function(a){var c=B,b;for(b in c)if(a.call(g,c[b],b,c))return b};var C,pa,D,qa,ra=function(){return m.navigator?m.navigator.userAgent:j};qa=D=pa=C=k;var E;if(E=ra()){var sa=m.navigator;C=0==E.indexOf("Opera");pa=!C&&-1!=E.indexOf("MSIE");D=!C&&-1!=E.indexOf("WebKit");qa=!C&&!D&&"Gecko"==sa.product}var F=pa,ta=qa,ua=D,va;
a:{var G="",H;if(C&&m.opera)var wa=m.opera.version,G="function"==typeof wa?wa():wa;else if(ta?H=/rv\:([^\);]+)(\)|;)/:F?H=/MSIE\s+([^\);]+)(\)|;)/:ua&&(H=/WebKit\/(\S+)/),H)var xa=H.exec(ra()),G=xa?xa[1]:"";if(F){var ya,za=m.document;ya=za?za.documentMode:g;if(ya>parseFloat(G)){va=""+ya;break a}}va=G}
var Aa=va,Ba={},Ca=function(a){var c;if(!(c=Ba[a])){c=0;for(var b=(""+Aa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,d.length),f=0;0==c&&f<e;f++){var i=b[f]||"",o=d[f]||"",J=RegExp("(\\d*)(\\D*)","g"),K=RegExp("(\\d*)(\\D*)","g");do{var n=J.exec(i)||["","",""],r=K.exec(o)||["","",""];if(0==n[0].length&&0==r[0].length)break;c=((0==n[1].length?0:parseInt(n[1],10))<(0==r[1].length?0:parseInt(r[1],10))?-1:(0==n[1].length?
0:parseInt(n[1],10))>(0==r[1].length?0:parseInt(r[1],10))?1:0)||((0==n[2].length)<(0==r[2].length)?-1:(0==n[2].length)>(0==r[2].length)?1:0)||(n[2]<r[2]?-1:n[2]>r[2]?1:0)}while(0==c)}c=Ba[a]=0<=c}return c},Da={},Ea=function(){return Da[9]||(Da[9]=F&&!!document.documentMode&&9<=document.documentMode)};!F||Ea();!ta&&!F||F&&Ea()||ta&&Ca("1.9.1");F&&Ca("9");var Fa=function(){};var I=function(){this.d=[];this.h={}};v(I,Fa);I.prototype.B=1;I.prototype.j=0;var Ga=function(a,c,b){var d=a.h[c];d||(d=a.h[c]=[]);var e=a.B;a.d[e]=c;a.d[e+1]=b;a.d[e+2]=g;a.B=e+3;d.push(e)};I.prototype.N=function(a){if(0!=this.j)this.i||(this.i=[]),this.i.push(a);else{var c=this.d[a];if(c){if(c=this.h[c]){var b=la(c,a);0<=b&&(z(c.length!=j),A.splice.call(c,b,1))}delete this.d[a];delete this.d[a+1];delete this.d[a+2]}}};
I.prototype.V=function(a,c){var b=this.h[a];if(b){this.j++;for(var d=na(arguments,1),e=0,f=b.length;e<f;e++){var i=b[e];this.d[i+1].apply(this.d[i+2],d)}this.j--;if(this.i&&0==this.j)for(;b=this.i.pop();)this.N(b)}};var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Ja=function(a){if(Ia){Ia=k;var c=m.location;if(c){var b=c.href;if(b&&(b=(b=Ja(b)[3]||j)&&decodeURIComponent(b))&&b!=c.hostname)throw Ia=h,Error();}}return a.match(Ha)},Ia=ua;var Ka=p("yt.dom.getNextId_");if(!Ka){Ka=function(){return++La};u("yt.dom.getNextId_",Ka);var La=0};var Ma=function(a){if(a=a||p("window.event")){this.type=a.type;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;if(c=a.relatedTarget)try{c=c.nodeName&&c}catch(b){c=j}else"mouseover"==this.type?c=a.fromElement:"mouseout"==this.type&&(c=a.toElement);this.relatedTarget=c;this.data=a.data;this.source=a.source;this.origin=a.origin;this.state=a.state;this.clientX=a.clientX!==g?a.clientX:a.pageX;this.clientY=a.clientY!==g?a.clientY:a.pageY;if(a.pageX||a.pageY)this.pageX=a.pageX,
this.pageY=a.pageY;else if((a.clientX||a.clientY)&&document.body&&document.documentElement)this.pageX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,this.pageY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;0==this.type.indexOf("touch")&&(this.touches=a.touches,this.changedTouches=
a.changedTouches);0==this.type.indexOf("gesture")&&(this.scale=a.scale,this.rotation=a.rotation)}};l=Ma.prototype;l.type="";l.target=j;l.relatedTarget=j;l.currentTarget=j;l.data=j;l.source=j;l.origin=j;l.state=j;l.keyCode=0;l.charCode=0;l.altKey=k;l.ctrlKey=k;l.shiftKey=k;l.clientX=0;l.clientY=0;l.pageX=0;l.pageY=0;l.touches=j;l.changedTouches=j;var B=p("yt.events.listeners_")||{};u("yt.events.listeners_",B);var Na=p("yt.events.counter_")||{count:0};u("yt.events.counter_",Na);var Oa=function(a,c){return oa(function(b){return b[0]==a&&"message"==b[1]&&b[2]==c&&b[4]==k})},Pa=function(a,c){if(a&&(a.addEventListener||a.attachEvent)){var b=Oa(a,c);if(!b){var b=++Na.count+"",d=function(b){b=new Ma(b);b.currentTarget=a;return c.call(a,b)};B[b]=[a,"message",c,d,k];a.addEventListener?a.addEventListener("message",d,k):a.attachEvent("onmessage",d)}}};u("yt.config_",window.yt&&window.yt.config_||{});u("yt.globals_",window.yt&&window.yt.globals_||{});u("yt.msgs_",window.yt&&window.yt.msgs_||{});u("yt.timeouts_",window.yt&&window.yt.timeouts_||[]);var Qa=window.yt&&window.yt.intervals_||[];u("yt.intervals_",Qa);eval("/*@cc_on!@*/false");var Ra=window.YTConfig||{},L=function(a){this.R=a||{};this.c={};this.c.width=640;this.c.height=390;this.c.title="";this.c.host=("https:"==document.location.protocol?"https:":"http:")+"//www.youtube.com"},M=j,N=function(a,c){return a.R[c]||Ra[c]||a.c[c]};L.prototype.M=function(a){a.origin==N(this,"host")&&(a=JSON.parse(a.data),M[a.id].C(a))};
var O=function(a,c){this.b=c;this.p=this.a=j;this.o=this.id=0;this.pubsub=j;var b=q(a)?document.getElementById(a):a;if(b){if("iframe"!=b.tagName.toLowerCase()){var d=document.createElement("div");d.innerHTML+=p("YT.embed_template");d=d||document;d=d.querySelectorAll&&d.querySelector&&(!ua||"CSS1Compat"==document.compatMode||Ca("528"))?d.querySelectorAll("IFRAME"):d.getElementsByTagName("IFRAME");for(var d=d.length?d[0]:j,e=0,f=b.attributes.length;e<f;e++)d.setAttribute(b.attributes[e].name,b.attributes[e].value);
d.removeAttribute("width");d.removeAttribute("height");d.removeAttribute("src");d.setAttribute("title","YouTube "+N(this.b,"title"));d.height=N(this.b,"height");d.width=N(this.b,"width");d.src=this.z();this.p=b;(e=b.parentNode)&&e.replaceChild(d,b);b=d}this.a=b;this.id=this[aa]||(this[aa]=++ba);if(window.JSON&&window.postMessage){this.pubsub=new I;b=this.b;d=this.id;M||(M={},Pa(window,s(b.M,b)));M[d]=this;b=s(this.L,this);b=window.setInterval(b,250);Qa.push(b);this.o=b;var b=N(this.b,"events"),i;
for(i in b)b.hasOwnProperty(i)&&this.addEventListener(i,b[i])}}};O.prototype.destroy=function(){if(this.p){var a=this.a,c=a.parentNode;c&&c.replaceChild(this.p,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a)};O.prototype.L=function(){this.a&&this.a.contentWindow?Sa(this,{event:"listening"}):window.clearInterval(this.o)};O.prototype.addEventListener=function(a,c){var b=c;"string"==typeof c&&(b=function(){window[c].apply(window,arguments)});Ga(this.pubsub,a,b);return this};
var P=function(a,c,b){a.pubsub.V(c,{target:a,data:b})},Ta=function(a,c,b){b=b||[];b=Array.prototype.slice.call(b);Sa(a,{event:"command",func:c,args:b})},Sa=function(a,c){c.id=a.id;var b=JSON.stringify(c),d=Ja(a.a.src),e=d[1],f=d[2],i=d[3],d=d[4],o=[];e&&o.push(e,":");i&&(o.push("//"),f&&o.push(f,"@"),o.push(i),d&&o.push(":",d));a.a.contentWindow.postMessage(b,o.join(""))};O.prototype.setSize=function(a,c){this.a.width=a;this.a.height=c;return this};O.prototype.U=function(){return this.a};var Q=function(){this.D=t()},Ua=new Q;Q.prototype.set=function(a){this.D=a};Q.prototype.reset=function(){this.set(t())};Q.prototype.get=function(){return this.D};var Va=function(a){this.G=a||"";this.H=Ua};l=Va.prototype;l.v=h;l.J=h;l.I=h;l.w=k;l.K=k;var R=function(a){return 10>a?"0"+a:""+a},Wa=function(a,c){var b=(a.t-c)/1E3,d=b.toFixed(3),e=0;if(1>b)e=2;else for(;100>b;)e++,b*=10;for(;0<e--;)d=" "+d;return d},Xa=function(a){Va.call(this,a)};v(Xa,Va);var Za=function(a){return Ya(a||arguments.callee.caller,[])},Ya=function(a,c){var b=[];if(0<=la(c,a))b.push("[...circular reference...]");else if(a&&50>c.length){b.push($a(a)+"(");for(var d=a.arguments,e=0;e<d.length;e++){0<e&&b.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=""+f;break;case "boolean":f=f?"true":"false";break;case "function":f=(f=$a(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");b.push(f)}c.push(a);
b.push(")\n");try{b.push(Ya(a.caller,c))}catch(i){b.push("[exception trying to get caller]\n")}}else a?b.push("[...long stack...]"):b.push("[end]");return b.join("")},$a=function(a){if(S[a])return S[a];a=""+a;if(!S[a]){var c=/function ([^\(]+)/.exec(a);S[a]=c?c[1]:"[Anonymous]"}return S[a]},S={};var T=function(a,c,b,d,e){this.reset(a,c,b,d,e)};T.prototype.m=j;T.prototype.l=j;var ab=0;T.prototype.reset=function(a,c,b,d,e){"number"==typeof e||ab++;this.t=d||t();this.e=a;this.P=c;this.s=b;delete this.m;delete this.l};T.prototype.getLevel=function(){return this.e};T.prototype.r=function(a){this.e=a};T.prototype.getMessage=function(){return this.P};var U=function(a){this.S=a};U.prototype.k=j;U.prototype.e=j;U.prototype.q=j;U.prototype.g=j;var V=function(a,c){this.name=a;this.value=c};V.prototype.toString=function(){return this.name};var bb=new V("SHOUT",1200),cb=new V("SEVERE",1E3),db=new V("WARNING",900),eb=new V("INFO",800),fb=new V("CONFIG",700);U.prototype.getParent=function(){return this.k};U.prototype.r=function(a){this.e=a};U.prototype.getLevel=function(){return this.e};
var gb=function(a){if(a.e)return a.e;if(a.k)return gb(a.k);ka("Root logger has no level set.");return j};U.prototype.log=function(a,c,b){if(a.value>=gb(this).value){a=this.T(a,c,b);c="log:"+a.getMessage();m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c));m.msWriteProfilerMark&&m.msWriteProfilerMark(c);for(c=this;c;){var b=c,d=a;if(b.g)for(var e=0,f=g;f=b.g[e];e++)f(d);c=c.getParent()}}};
U.prototype.T=function(a,c,b){var d=new T(a,""+c,this.S);if(b){d.m=b;var e;var f=arguments.callee.caller;try{var i;var o=p("window.location.href");if(q(b))i={message:b,name:"Unknown error",lineNumber:"Not available",fileName:o,stack:"Not available"};else{var J,K,n=k;try{J=b.lineNumber||b.W||"Not available"}catch(r){J="Not available",n=h}try{K=b.fileName||b.filename||b.sourceURL||o}catch(vb){K="Not available",n=h}i=n||!b.lineNumber||!b.fileName||!b.stack?{message:b.message,name:b.name,lineNumber:J,
fileName:K,stack:b.stack||"Not available"}:b}e="Message: "+x(i.message)+'\nUrl: <a href="view-source:'+i.fileName+'" target="_new">'+i.fileName+"</a>\nLine: "+i.lineNumber+"\n\nBrowser stack:\n"+x(i.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+x(Za(f)+"-> ")}catch(rb){e="Exception trying to expose exception! You win, we lose. "+rb}d.l=e}return d};
var hb={},W=j,ib=function(){W||(W=new U(""),hb[""]=W,W.r(fb))},jb=function(a){ib();var c;if(!(c=hb[a])){c=new U(a);var b=a.lastIndexOf("."),d=a.substr(b+1),b=jb(a.substr(0,b));b.q||(b.q={});b.q[d]=c;c.k=b;hb[a]=c}return c};var kb=function(){this.Q=s(this.O,this);this.n=new Xa;this.n.v=k;this.A=this.n.w=k;this.u="";this.F={}};
kb.prototype.O=function(a){if(!this.F[a.s]){var c;c=this.n;var b=[];b.push(c.G," ");if(c.v){var d=new Date(a.t);b.push("[",R(d.getFullYear()-2E3)+R(d.getMonth()+1)+R(d.getDate())+" "+R(d.getHours())+":"+R(d.getMinutes())+":"+R(d.getSeconds())+"."+R(Math.floor(d.getMilliseconds()/10)),"] ")}c.J&&b.push("[",Wa(a,c.H.get()),"s] ");c.I&&b.push("[",a.s,"] ");c.K&&b.push("[",a.getLevel().name,"] ");b.push(a.getMessage(),"\n");c.w&&a.m&&b.push(a.l,"\n");c=b.join("");if(X&&X.firebug)switch(a.getLevel()){case bb:X.info(c);
break;case cb:X.error(c);break;case db:X.warn(c);break;default:X.debug(c)}else X?X.log(c):window.opera?window.opera.postError(c):this.u+=c}};var lb=j,X=window.console;lb||(lb=new kb);if(-1!=window.location.href.indexOf("Debug=true")){var mb=lb;if(h!=mb.A){ib();var nb=W,ob=mb.Q;nb.g||(nb.g=[]);nb.g.push(ob);mb.A=h}}jb("yt.player.logger").r(eb);var pb={"0":"onEnded",1:"onPlaying",2:"onPaused",3:"onBuffering",5:"onVideoCued"},qb=function(a){L.call(this,a);this.c.title="video player";this.c.apiReady="onYouTubePlayerAPIReady";this.c.videoId=""};v(qb,L);var Y=function(a,c){O.call(this,a,new qb(c));this.f={}};v(Y,O);
Y.prototype.z=function(){var a=N(this.b,"playerVars")||[];a.enablejsapi=1;window.location.host&&(a.origin=window.location.protocol+"//"+window.location.host);var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(b+"="+a[b]);return N(this.b,"host")+"/embed/"+N(this.b,"videoId")+"?"+c.join("&")};
Y.prototype.C=function(a){switch(a.event){case "onReady":window.clearInterval(this.o);P(this,"onReady");break;case "onStateChange":var c=a.info.playerState;Z(this,a);P(this,"onStateChange",c);-1!=c&&P(this,pb[c]);break;case "onPlaybackQualityChange":Z(this,a);P(this,"onPlaybackQualityChange",this.f.playbackQuality);break;case "onError":P(this,"onError",a.error);break;case "infoDelivery":Z(this,a);break;case "initialDelivery":sb(this,a.apiInterface),Z(this,a)}};
var Z=function(a,c){var b=c.info||{},d;for(d in b)a.f[d]=b[d]},sb=function(a,c){ma(c,function(a){this[a]||(this[a]=0==a.search("cue")||0==a.search("load")?function(){this.f={};Ta(this,a,arguments);return this}:0==a.search("get")||0==a.search("is")?function(){var c=this.f,e=0;0==a.search("get")?e=3:0==a.search("is")&&(e=2);return c[a.charAt(e).toLowerCase()+a.substr(e+1)]}:function(){Ta(this,a,arguments);return this})},a)};
Y.prototype.getVideoEmbedCode=function(){var a=this.a.cloneNode(k),c=this.f.videoData,b=N(this.b,"host");a.src=c&&c.video_id?b+"/embed/"+c.video_id:a.src;c=document.createElement("div");c.appendChild(a);return c.innerHTML};var tb=function(a){L.call(this,a);this.c.title="upload widget";this.c.apiReady="onYouTubeUploadWidgetReady"};v(tb,L);var $=function(a,c){O.call(this,a,new tb(c))};v($,O);$.prototype.z=function(){return N(this.b,"host")+"/upload_embed?action_widget=1"};$.prototype.C=function(a){switch(a.event){case "onUploadSuccess":P(this,"onUploadSuccess",a.videoId)}};u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.Player",Y);u("YT.UploadWidget",$);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getIframe=Y.prototype.U;Y.prototype.addEventListener=Y.prototype.addEventListener;var ub=function(a){(a=p(N(a,"apiReady")))&&a()};ub(new qb);ub(new tb);})();
