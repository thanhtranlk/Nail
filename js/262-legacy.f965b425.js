(self["webpackChunkfirebase_login"]=self["webpackChunkfirebase_login"]||[]).push([[262],{1262:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Pl}});var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"booking"},[n("Scheduling")],1)},r=[],o=n(2751),a=n(6133),u=n(796),h=n(3855),c=n(1929),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientName,expression:"clientName"}],attrs:{id:"name",type:"text"},domProps:{value:t.clientName},on:{input:function(e){e.target.composing||(t.clientName=e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Enter Your Name")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientNumber,expression:"clientNumber"}],attrs:{id:"phone",type:"string"},domProps:{value:t.clientNumber},on:{input:function(e){e.target.composing||(t.clientNumber=e.target.value)}}}),n("label",{attrs:{for:"phone"}},[t._v("Enter Your Phone Number")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientID,expression:"clientID"}],attrs:{id:"phone",type:"string"},domProps:{value:t.clientID},on:{input:function(e){e.target.composing||(t.clientID=e.target.value)}}}),n("label",{attrs:{for:"phone"}},[t._v("Enter Your Appoinment ID")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],attrs:{id:"day",type:"date"},domProps:{value:t.selectedDate},on:{input:function(e){e.target.composing||(t.selectedDate=e.target.value)}}}),n("label",{attrs:{for:"day"}},[t._v("Select a Day")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedTime,expression:"selectedTime"}],attrs:{id:"time",type:"time"},domProps:{value:t.selectedTime},on:{input:function(e){e.target.composing||(t.selectedTime=e.target.value)}}}),n("label",{attrs:{for:"time"}},[t._v("Select a time")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedServices,expression:"selectedServices"}],attrs:{id:"service",type:"text"},domProps:{value:t.selectedServices},on:{input:function(e){e.target.composing||(t.selectedServices=e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Type in service")])]),n("div",[n("button",{on:{click:t.SaveData}},[t._v("Save")]),n("p",[t._v("Enter different ID if data not saved")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointID,expression:"appointID"}],attrs:{type:"text",placeholder:"Enter your appoinemt ID"},domProps:{value:t.appointID},on:{input:function(e){e.target.composing||(t.appointID=e.target.value)}}}),n("button",{on:{click:t.DeleteAppoint}},[t._v("Cancel_Appointment")])]),n("div",[n("button",{on:{click:t.DeleteAcc}},[t._v("Delete_Account")]),n("button",{on:{click:t.outtahere}},[t._v("Logout")])]),t._l(t.selectedClient,(function(e){return n("div",{key:e.phoneNumber,attrs:{id:"face"}},[n("div",[t._v("Name: "+t._s(e.name))]),n("div",[t._v("ID: "+t._s(e.id))]),n("div",[t._v("Service: "+t._s(e.selectedServices))]),n("div",[t._v(t._s(e.date))]),n("h3",{staticClass:"truncate"},[t._v(t._s(e.time))])])})),n("div",{staticClass:"pie"},[n("my-apexchart",{attrs:{width:"340",type:"pie",options:t.chartOptions,series:t.series}})],1),n("span",{staticClass:"bottom"},[n("router-link",{attrs:{to:"/about"}},[t._v(" About")]),t._v(" | "),n("router-link",{attrs:{to:"/booking"}},[t._v(" Book an Appointment")]),t._v(" | "),n("router-link",{attrs:{to:"/services"}},[t._v(" Services")]),t._v(" | "),n("router-link",{attrs:{to:"/makeup"}},[t._v(" Makeup")])],1)],2)])},d=[],f=n(6198),p=n(3263),g=n(3796),m=n(9726),y=(n(5666),n(5003),n(1539),n(1299),n(2222),n(4747),n(8309),n(1249),n(561),n(5319)),v=n(2238),w=n(8463),E=n(3333),T=n(4444),b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},S={},I=I||{},C=b||self;function A(){}function N(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function _(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function D(t){return Object.prototype.hasOwnProperty.call(t,k)&&t[k]||(t[k]=++R)}var k="closure_uid_"+(1e9*Math.random()>>>0),R=0;function L(t,e,n){return t.call.apply(t.bind,arguments)}function x(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function M(t,e,n){return M=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?L:x,M.apply(null,arguments)}function V(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function P(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function O(){this.s=this.s,this.o=this.o}var F=0,U={};O.prototype.s=!1,O.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=F)){var t=D(this);delete U[t]}},O.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const B=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},q=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function j(t){t:{var e=oi;const n=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function K(t){return Array.prototype.concat.apply([],arguments)}function G(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function $(t){return/^[\s\xa0]*$/.test(t)}var H,z=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function W(t,e){return-1!=t.indexOf(e)}function Q(t,e){return t<e?-1:t>e?1:0}t:{var X=C.navigator;if(X){var Y=X.userAgent;if(Y){H=Y;break t}}H=""}function Z(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function J(t){const e={};for(const n in t)e[n]=t[n];return e}var tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function et(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<tt.length;e++)n=tt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function nt(t){return nt[" "](t),t}function it(t){var e=mt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}nt[" "]=A;var st,rt=W(H,"Opera"),ot=W(H,"Trident")||W(H,"MSIE"),at=W(H,"Edge"),ut=at||ot,ht=W(H,"Gecko")&&!(W(H.toLowerCase(),"webkit")&&!W(H,"Edge"))&&!(W(H,"Trident")||W(H,"MSIE"))&&!W(H,"Edge"),ct=W(H.toLowerCase(),"webkit")&&!W(H,"Edge");function lt(){var t=C.document;return t?t.documentMode:void 0}t:{var dt="",ft=function(){var t=H;return ht?/rv:([^\);]+)(\)|;)/.exec(t):at?/Edge\/([\d\.]+)/.exec(t):ot?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):ct?/WebKit\/(\S+)/.exec(t):rt?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(ft&&(dt=ft?ft[1]:""),ot){var pt=lt();if(null!=pt&&pt>parseFloat(dt)){st=String(pt);break t}}st=dt}var gt,mt={};function yt(){return it((function(){let t=0;const e=z(String(st)).split("."),n=z("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Q(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Q(0==s[2].length,0==r[2].length)||Q(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(C.document&&ot){var vt=lt();gt=vt||(parseInt(st,10)||void 0)}else gt=void 0;var wt=gt,Et=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{C.addEventListener("test",A,e),C.removeEventListener("test",A,e)}catch(n){}return t}();function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function bt(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ht){t:{try{nt(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:St[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bt.Z.h.call(this)}}Tt.prototype.h=function(){this.defaultPrevented=!0},P(bt,Tt);var St={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var It="closure_listenable_"+(1e6*Math.random()|0),Ct=0;function At(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Ct,this.ca=this.fa=!1}function Nt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _t(t){this.src=t,this.g={},this.h=0}function Dt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=B(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Nt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function kt(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}_t.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=kt(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new At(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};var Rt="closure_lm_"+(1e6*Math.random()|0),Lt={};function xt(t,e,n,i,s){if(i&&i.once)return Pt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xt(t,e[r],n,i,s);return null}return n=Kt(n),t&&t[It]?t.N(e,n,_(i)?!!i.capture:!!i,s):Mt(t,e,n,!1,i,s)}function Mt(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=_(s)?!!s.capture:!!s,a=qt(t);if(a||(t[Rt]=a=new _t(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Vt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Et||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ut(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Bt;return t}function Pt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pt(t,e[r],n,i,s);return null}return n=Kt(n),t&&t[It]?t.O(e,n,_(i)?!!i.capture:!!i,s):Mt(t,e,n,!0,i,s)}function Ot(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ot(t,e[r],n,i,s);else i=_(i)?!!i.capture:!!i,n=Kt(n),t&&t[It]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=kt(r,n,i,s),-1<n&&(Nt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=qt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kt(e,n,i,s)),(n=-1<t?e[t]:null)&&Ft(n))}function Ft(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[It])Dt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ut(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=qt(e))?(Dt(n,t),0==n.h&&(n.src=null,e[Rt]=null)):Nt(t)}}}function Ut(t){return t in Lt?Lt[t]:Lt[t]="on"+t}function Bt(t,e){if(t.ca)t=!0;else{e=new bt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Ft(t),t=n.call(i,e)}return t}function qt(t){return t=t[Rt],t instanceof _t?t:null}var jt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kt(t){return"function"===typeof t?t:(t[jt]||(t[jt]=function(e){return t.handleEvent(e)}),t[jt])}function Gt(){O.call(this),this.i=new _t(this),this.P=this,this.I=null}function $t(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var s=e;e=new Tt(i,t),et(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ht(o,i,!0,e)&&s}if(o=e.g=t,s=Ht(o,i,!0,e)&&s,s=Ht(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ht(o,i,!1,e)&&s}function Ht(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Dt(t.i,o),s=!1!==a.call(u,i)&&s}}return s&&!i.defaultPrevented}P(Gt,O),Gt.prototype[It]=!0,Gt.prototype.removeEventListener=function(t,e,n,i){Ot(this,t,e,n,i)},Gt.prototype.M=function(){if(Gt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Nt(n[i]);delete e.g[t],e.h--}}this.I=null},Gt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Gt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var zt=C.JSON.stringify;function Wt(){var t=ie;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Qt{constructor(){this.h=this.g=null}add(t,e){const n=Yt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Xt,Yt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Zt),(t=>t.reset()));class Zt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Jt(t){C.setTimeout((()=>{throw t}),0)}function te(t,e){Xt||ee(),ne||(Xt(),ne=!0),ie.add(t,e)}function ee(){var t=C.Promise.resolve(void 0);Xt=function(){t.then(se)}}var ne=!1,ie=new Qt;function se(){for(var t;t=Wt();){try{t.h.call(t.g)}catch(n){Jt(n)}var e=Yt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ne=!1}function re(t,e){Gt.call(this),this.h=t||1,this.g=e||C,this.j=M(this.kb,this),this.l=Date.now()}function oe(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ae(t,e,n){if("function"===typeof t)n&&(t=M(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=M(t.handleEvent,t)}return 2147483647<Number(e)?-1:C.setTimeout(t,e||0)}function ue(t){t.g=ae((()=>{t.g=null,t.i&&(t.i=!1,ue(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}P(re,Gt),i=re.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),$t(this,"tick"),this.da&&(oe(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){re.Z.M.call(this),oe(this),delete this.g};class he extends O{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ue(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(t){O.call(this),this.h=t,this.g={}}P(ce,O);var le=[];function de(t,e,n,i){Array.isArray(n)||(n&&(le[0]=n.toString()),n=le);for(var s=0;s<n.length;s++){var r=xt(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function fe(t){Z(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ft(t)}),t),t.g={}}function pe(){this.g=!0}function ge(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function me(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ye(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+we(t,n)+(i?" "+i:"")}))}function ve(t,e){t.info((function(){return"TIMEOUT: "+e}))}function we(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return zt(n)}catch(a){return e}}ce.prototype.M=function(){ce.Z.M.call(this),fe(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},pe.prototype.Aa=function(){this.g=!1},pe.prototype.info=function(){};var Ee={},Te=null;function be(){return Te=Te||new Gt}function Se(t){Tt.call(this,Ee.Ma,t)}function Ie(t){const e=be();$t(e,new Se(e,t))}function Ce(t,e){Tt.call(this,Ee.STAT_EVENT,t),this.stat=e}function Ae(t){const e=be();$t(e,new Ce(e,t))}function Ne(t,e){Tt.call(this,Ee.Na,t),this.size=e}function _e(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return C.setTimeout((function(){t()}),e)}Ee.Ma="serverreachability",P(Se,Tt),Ee.STAT_EVENT="statevent",P(Ce,Tt),Ee.Na="timingevent",P(Ne,Tt);var De={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ke={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Re(){}function Le(t){return t.h||(t.h=t.i())}function xe(){}Re.prototype.h=null;var Me,Ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pe(){Tt.call(this,"d")}function Oe(){Tt.call(this,"c")}function Fe(){}function Ue(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ce(this),this.P=qe,t=ut?125:void 0,this.W=new re(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Be}function Be(){this.i=null,this.g="",this.h=!1}P(Pe,Tt),P(Oe,Tt),P(Fe,Re),Fe.prototype.g=function(){return new XMLHttpRequest},Fe.prototype.i=function(){return{}},Me=new Fe;var qe=45e3,je={},Ke={};function Ge(t,e,n){t.K=1,t.v=mn(cn(e)),t.s=n,t.U=!0,$e(t,null)}function $e(t,e){t.F=Date.now(),Qe(t),t.A=cn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Rn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Be,t.g=Oi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new he(M(t.Ia,t,t.g),t.O)),de(t.V,t.g,"readystatechange",t.gb),e=t.H?J(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ie(1),ge(t.j,t.u,t.A,t.m,t.X,t.s)}function He(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ze(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=We(t,n),i==Ke){4==e&&(t.o=4,Ae(14),s=!1),ye(t.j,t.m,null,"[Incomplete Response]");break}if(i==je){t.o=4,Ae(15),ye(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}ye(t.j,t.m,i,null),tn(t,i)}He(t)&&i!=Ke&&i!=je&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ae(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Di(e),e.L=!0,Ae(11))):(ye(t.j,t.m,n,"[Invalid Chunked Response]"),Je(t),Ze(t))}function We(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ke:(n=Number(e.substring(n,i)),isNaN(n)?je:(i+=1,i+n>e.length?Ke:(e=e.substr(i,n),t.C=i+n,e)))}function Qe(t){t.Y=Date.now()+t.P,Xe(t,t.P)}function Xe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=_e(M(t.eb,t),e)}function Ye(t){t.B&&(C.clearTimeout(t.B),t.B=null)}function Ze(t){0==t.l.G||t.I||Li(t.l,t)}function Je(t){Ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,oe(t.W),fe(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function tn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Un(n.i,t)))if(n.I=t.N,!t.J&&Un(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(h){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ri(n),wi(n)}_i(n),Ae(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=_e(M(n.ab,n),6e3));if(1>=Fn(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Mi(n,11)}else if((t.J||n.g==t)&&Ri(n),!$(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"===typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(W(t,"spdy")||W(t,"quic")||W(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Bn(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,gn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Pi(i,i.H?i.la:null,i.W),o.J){qn(i.i,o);var a=o,u=i.K;u&&a.setTimeout(u),a.B&&(Ye(a),Qe(a)),i.g=o}else Ni(i);0<n.l.length&&bi(n)}else"stop"!=h[0]&&"close"!=h[0]||Mi(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Mi(n,7):vi(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}Ie(4)}catch(h){}}function en(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(N(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function nn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(N(t)||"string"===typeof t)q(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(N(t)||"string"===typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=en(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function sn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof sn)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function rn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];on(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],on(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function on(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Ue.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==di(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const c=di(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>c)&&(3!=c||ut||this.g&&(this.h.h||this.g.ga()||fi(this.g)))){this.I||4!=c||7==e||Ie(8==e||0>=l?3:2),Ye(this);var n=this.g.ba();this.N=n;e:if(He(this)){var i=fi(this.g);t="";var s=i.length,r=4==di(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Je(this),Ze(this);var o="";break e}this.h.i=new C.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,me(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Ae(12),Je(this),Ze(this);break t}ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tn(this,n)}this.U?(ze(this,c,o),ut&&this.i&&3==c&&(de(this.V,this.W,"tick",this.fb),this.W.start())):(ye(this.j,this.m,o,null),tn(this,o)),4==c&&Je(this),this.i&&!this.I&&(4==c?Li(this.l,this):(this.i=!1,Qe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),Je(this),Ze(this)}}}catch(c){}},i.fb=function(){if(this.g){var t=di(this.g),e=this.g.ga();this.C<e.length&&(Ye(this),ze(this,t,e),this.i&&4!=t&&Qe(this))}},i.cancel=function(){this.I=!0,Je(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ve(this.j,this.A),2!=this.K&&(Ie(3),Ae(17)),Je(this),this.o=2,Ze(this)):Xe(this,this.Y-t)},i=sn.prototype,i.R=function(){rn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return rn(this),this.g.concat()},i.get=function(t,e){return on(this.h,t)?this.h[t]:e},i.set=function(t,e){on(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var an=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function un(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof hn){this.g=void 0!==e?e:t.g,ln(this,t.j),this.s=t.s,dn(this,t.i),fn(this,t.m),this.l=t.l,e=t.h;var n=new Nn;n.i=e.i,e.g&&(n.g=new sn(e.g),n.h=e.h),pn(this,n),this.o=t.o}else t&&(n=String(t).match(an))?(this.g=!!e,ln(this,n[1]||"",!0),this.s=wn(n[2]||""),dn(this,n[3]||"",!0),fn(this,n[4]),this.l=wn(n[5]||"",!0),pn(this,n[6]||"",!0),this.o=wn(n[7]||"")):(this.g=!!e,this.h=new Nn(null,this.g))}function cn(t){return new hn(t)}function ln(t,e,n){t.j=n?wn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dn(t,e,n){t.i=n?wn(e,!0):e}function fn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pn(t,e,n){e instanceof Nn?(t.h=e,xn(t.h,t.g)):(n||(e=En(e,Cn)),t.h=new Nn(e,t.g))}function gn(t,e,n){t.h.set(e,n)}function mn(t){return gn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yn(t){return t instanceof hn?cn(t):new hn(t,void 0)}function vn(t,e,n,i){var s=new hn(null,void 0);return t&&ln(s,t),e&&dn(s,e),n&&fn(s,n),i&&(s.l=i),s}function wn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function En(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Tn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Tn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(En(e,bn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(En(e,bn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(En(n,"/"==n.charAt(0)?In:Sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",En(n,An)),t.join("")};var bn=/[#\/\?@]/g,Sn=/[#\?:]/g,In=/[#\?]/g,Cn=/[#\?@]/g,An=/#/g;function Nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _n(t){t.g||(t.g=new sn,t.h=0,t.i&&un(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Dn(t,e){_n(t),e=Ln(t,e),on(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,on(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&rn(t)))}function kn(t,e){return _n(t),e=Ln(t,e),on(t.g.h,e)}function Rn(t,e,n){Dn(t,e),0<n.length&&(t.i=null,t.g.set(Ln(t,e),G(n)),t.h+=n.length)}function Ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xn(t,e){e&&!t.j&&(_n(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Dn(this,e),Rn(this,n,t))}),t)),t.j=e}i=Nn.prototype,i.add=function(t,e){_n(this),this.i=null,t=Ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){_n(this),this.g.forEach((function(n,i){q(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){_n(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},i.R=function(t){_n(this);var e=[];if("string"===typeof t)kn(this,t)&&(e=K(e,this.g.get(Ln(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=K(e,t[n])}return e},i.set=function(t,e){return _n(this),this.i=null,t=Ln(this,t),kn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};var Mn=class{constructor(t,e){this.h=t,this.g=e}};function Vn(t){this.l=t||Pn,C.PerformanceNavigationTiming?(t=C.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(C.g&&C.g.Ea&&C.g.Ea()&&C.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pn=10;function On(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Fn(t){return t.h?1:t.g?t.g.size:0}function Un(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Bn(t,e){t.g?t.g.add(e):t.h=e}function qn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function jn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return G(t.i)}function Kn(){}function Gn(){this.g=new Kn}function $n(t,e,n){const i=n||"";try{nn(t,(function(t,n){let s=t;_(t)&&(s=zt(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Hn(t,e){const n=new pe;if(C.Image){const i=new Image;i.onload=V(zn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=V(zn,n,i,"TestLoadImage: error",!1,e),i.onabort=V(zn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=V(zn,n,i,"TestLoadImage: timeout",!1,e),C.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function zn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(r){}}function Wn(t){this.l=t.$b||null,this.j=t.ib||!1}function Qn(t,e){Gt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vn.prototype.cancel=function(){if(this.i=jn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Kn.prototype.stringify=function(t){return C.JSON.stringify(t,void 0)},Kn.prototype.parse=function(t){return C.JSON.parse(t,void 0)},P(Wn,Re),Wn.prototype.g=function(){return new Qn(this.l,this.j)},Wn.prototype.i=function(t){return function(){return t}}({}),P(Qn,Gt);var Xn=0;function Yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Zn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jn(t)}function Jn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Qn.prototype,i.open=function(t,e){if(this.readyState!=Xn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||C).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zn(this)),this.readyState=Xn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof C.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zn(this):Jn(this),3==this.readyState&&Yn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Zn(this))},i.Ta=function(t){this.g&&(this.response=t,Zn(this))},i.ha=function(){this.g&&Zn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ti=C.JSON.parse;function ei(t){Gt.call(this),this.headers=new sn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ni,this.K=this.L=!1}P(ei,Gt);var ni="",ii=/^https?$/i,si=["POST","PUT"];function ri(t){return ot&&yt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function oi(t){return"content-type"==t.toLowerCase()}function ai(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ui(t),ci(t)}function ui(t){t.D||(t.D=!0,$t(t,"complete"),$t(t,"error"))}function hi(t){if(t.h&&"undefined"!=typeof I&&(!t.C[1]||4!=di(t)||2!=t.ba()))if(t.v&&4==di(t))ae(t.Fa,0,t);else if($t(t,"readystatechange"),4==di(t)){t.h=!1;try{const u=t.ba();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===u){var s=String(t.H).match(an)[1]||null;if(!s&&C.self&&C.self.location){var r=C.self.location.protocol;s=r.substr(0,r.length-1)}i=!ii.test(s?s.toLowerCase():"")}n=i}if(n)$t(t,"complete"),$t(t,"success");else{t.m=6;try{var o=2<di(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",ui(t)}}finally{ci(t)}}}function ci(t,e){if(t.g){li(t);const i=t.g,s=t.C[0]?A:null;t.g=null,t.C=null,e||$t(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function li(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(C.clearTimeout(t.A),t.A=null)}function di(t){return t.g?t.g.readyState:0}function fi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ni:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function pi(t){let e="";return Z(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function gi(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=pi(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):gn(t,e,n))}function mi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yi(t){this.za=0,this.l=[],this.h=new pe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=mi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=mi("baseRetryDelayMs",5e3,t),this.$a=mi("retryDelaySeedMs",1e4,t),this.Ya=mi("forwardChannelMaxRetries",2,t),this.ra=mi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vn(t&&t.concurrentRequestLimit),this.Ca=new Gn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function vi(t){if(Ei(t),3==t.G){var e=t.V++,n=cn(t.F);gn(n,"SID",t.J),gn(n,"RID",e),gn(n,"TYPE","terminate"),Ci(t,n),e=new Ue(t,t.h,e,void 0),e.K=2,e.v=mn(cn(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(e.v.toString(),"")),!n&&C.Image&&((new Image).src=e.v,n=!0),n||(e.g=Oi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qe(e)}Vi(t)}function wi(t){t.g&&(Di(t),t.g.cancel(),t.g=null)}function Ei(t){wi(t),t.u&&(C.clearTimeout(t.u),t.u=null),Ri(t),t.i.cancel(),t.m&&("number"===typeof t.m&&C.clearTimeout(t.m),t.m=null)}function Ti(t,e){t.l.push(new Mn(t.Za++,e)),3==t.G&&bi(t)}function bi(t){On(t.i)||t.m||(t.m=!0,te(t.Ha,t),t.C=0)}function Si(t,e){return!(Fn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=_e(M(t.Ha,t,e),xi(t,t.C)),t.C++,!0))}function Ii(t,e){var n;n=e?e.m:t.V++;const i=cn(t.F);gn(i,"SID",t.J),gn(i,"RID",n),gn(i,"AID",t.U),Ci(t,i),t.o&&t.s&&gi(i,t.o,t.s),n=new Ue(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ai(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bn(t.i,n),Ge(n,i,e)}function Ci(t,e){t.j&&nn({},(function(t,n){gn(e,n,t)}))}function Ai(t,e,n){n=Math.min(t.l.length,n);var i=t.j?M(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{$n(a,t,"req"+n+"_")}catch(ls){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Ni(t){t.g||t.u||(t.Y=1,te(t.Ga,t),t.A=0)}function _i(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=_e(M(t.Ga,t),xi(t,t.A)),t.A++,!0)}function Di(t){null!=t.B&&(C.clearTimeout(t.B),t.B=null)}function ki(t){t.g=new Ue(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=cn(t.oa);gn(e,"RID","rpc"),gn(e,"SID",t.J),gn(e,"CI",t.N?"0":"1"),gn(e,"AID",t.U),Ci(t,e),gn(e,"TYPE","xmlhttp"),t.o&&t.s&&gi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=mn(cn(e)),n.s=null,n.U=!0,$e(n,t)}function Ri(t){null!=t.v&&(C.clearTimeout(t.v),t.v=null)}function Li(t,e){var n=null;if(t.g==e){Ri(t),Di(t),t.g=null;var i=2}else{if(!Un(t.i,e))return;n=e.D,qn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=be(),$t(i,new Ne(i,n,e,s)),bi(t)}else Ni(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==i&&Si(t,e)||2==i&&_i(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}function xi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=M(t.jb,t);n||(n=new hn("//www.google.com/images/cleardot.gif"),C.location&&"http"==C.location.protocol||ln(n,"https"),mn(n)),Hn(n.toString(),i)}else Ae(2);t.G=0,t.j&&t.j.va(e),Vi(t),Ei(t)}function Vi(t){t.G=0,t.I=-1,t.j&&(0==jn(t.i).length&&0==t.l.length||(t.i.i.length=0,G(t.l),t.l.length=0),t.j.ua())}function Pi(t,e,n){let i=yn(n);if(""!=i.i)e&&dn(i,e+"."+i.i),fn(i,i.m);else{const t=C.location;i=vn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Z(t.aa,(function(t,e){gn(i,e,t)})),e=t.D,n=t.sa,e&&n&&gn(i,e,n),gn(i,"VER",t.ma),Ci(t,i),i}function Oi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ei(new Wn({ib:!0})):new ei(t.qa),e.L=t.H,e}function Fi(){}function Ui(){if(ot&&!(10<=Number(wt)))throw Error("Environmental error: no available transport.")}function Bi(t,e){Gt.call(this),this.g=new yi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!$(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}function qi(t){Pe.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ji(){Oe.call(this),this.status=1}function Ki(t){this.g=t}i=ei.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Me.g(),this.C=this.u?Le(this.u):Le(Me),this.g.onreadystatechange=M(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void ai(this,r)}t=n||"";const s=new sn(this.headers);i&&nn(i,(function(t,e){s.set(e,t)})),i=j(s.T()),n=C.FormData&&t instanceof C.FormData,!(0<=B(si,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{li(this),0<this.B&&((this.K=ri(this.g))?(this.g.timeout=this.B,this.g.ontimeout=M(this.pa,this)):this.A=ae(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ai(this,r)}},i.pa=function(){"undefined"!=typeof I&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$t(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$t(this,"complete"),$t(this,"abort"),ci(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),ei.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?hi(this):this.cb())},i.cb=function(){hi(this)},i.ba=function(){try{return 2<di(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ti(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=yi.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ue(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=J(r),et(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ai(this,s,e),n=cn(this.F),gn(n,"RID",t),gn(n,"CVER",22),this.D&&gn(n,"X-HTTP-Session-Id",this.D),Ci(this,n),this.o&&r&&gi(n,this.o,r),Bn(this.i,s),this.Ra&&gn(n,"TYPE","init"),this.ja?(gn(n,"$req",e),gn(n,"SID","null"),s.$=!0,Ge(s,n,null)):Ge(s,n,e),this.G=2}}else 3==this.G&&(t?Ii(this,t):0==this.l.length||On(this.i)||Ii(this))},i.Ga=function(){if(this.u=null,ki(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=_e(M(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ae(10),wi(this),ki(this))},i.ab=function(){null!=this.v&&(this.v=null,wi(this),_i(this),Ae(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ae(2)):(this.h.info("Failed to ping google.com"),Ae(1))},i=Fi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ui.prototype.g=function(t,e){return new Bi(t,e)},P(Bi,Gt),Bi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),te(M(t.hb,t,e))),Ae(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Pi(t,null,t.W),bi(t)},Bi.prototype.close=function(){vi(this.g)},Bi.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,Ti(this.g,e)}else this.v?(e={},e.__data__=zt(t),Ti(this.g,e)):Ti(this.g,t)},Bi.prototype.M=function(){this.g.j=null,delete this.j,vi(this.g),delete this.g,Bi.Z.M.call(this)},P(qi,Pe),P(ji,Oe),P(Ki,Fi),Ki.prototype.xa=function(){$t(this.g,"a")},Ki.prototype.wa=function(t){$t(this.g,new qi(t))},Ki.prototype.va=function(t){$t(this.g,new ji(t))},Ki.prototype.ua=function(){$t(this.g,"b")},Ui.prototype.createWebChannel=Ui.prototype.g,Bi.prototype.send=Bi.prototype.u,Bi.prototype.open=Bi.prototype.m,Bi.prototype.close=Bi.prototype.close,De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,ke.COMPLETE="complete",xe.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",Gt.prototype.listen=Gt.prototype.N,ei.prototype.listenOnce=ei.prototype.O,ei.prototype.getLastError=ei.prototype.La,ei.prototype.getLastErrorCode=ei.prototype.Da,ei.prototype.getStatus=ei.prototype.ba,ei.prototype.getResponseJson=ei.prototype.Qa,ei.prototype.getResponseText=ei.prototype.ga,ei.prototype.send=ei.prototype.ea;var Gi=S.createWebChannelTransport=function(){return new Ui},$i=S.getStatEventTarget=function(){return be()},Hi=S.ErrorCode=De,zi=S.EventType=ke,Wi=S.Event=Ee,Qi=S.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Xi=S.FetchXmlHttpFactory=Wn,Yi=S.WebChannel=xe,Zi=S.XhrIo=ei;const Ji="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ts.UNAUTHENTICATED=new ts(null),ts.GOOGLE_CREDENTIALS=new ts("google-credentials-uid"),ts.FIRST_PARTY=new ts("first-party-uid"),ts.MOCK_USER=new ts("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let es="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new E.Yd("@firebase/firestore");function is(){return ns.logLevel}function ss(t,...e){if(ns.logLevel<=E["in"].DEBUG){const n=e.map(as);ns.debug(`Firestore (${es}): ${t}`,...n)}}function rs(t,...e){if(ns.logLevel<=E["in"].ERROR){const n=e.map(as);ns.error(`Firestore (${es}): ${t}`,...n)}}function os(t,...e){if(ns.logLevel<=E["in"].WARN){const n=e.map(as);ns.warn(`Firestore (${es}): ${t}`,...n)}}function as(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw rs(e),new Error(e)}function hs(t,e){t||us()}function cs(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ds extends T.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ts.UNAUTHENTICATED)))}shutdown(){}}class ms{constructor(t){this.t=t,this.currentUser=ts.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fs,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{ss("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ss("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fs)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ss("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(hs("string"==typeof e.accessToken),new ps(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return hs(null===t||"string"==typeof t),new ts(t)}}class ys{constructor(t,e,n){this.type="FirstParty",this.user=ts.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class vs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ys(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ts.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Es{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&ss("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,ss("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{ss("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):ss("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(hs("string"==typeof t.token),this.p=t.token,new ws(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ts.A=-1;class Ss{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=bs(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Is(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ds(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ds(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ds(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ds(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return As.fromMillis(Date.now())}static fromDate(t){return As.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new As(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Is(this.nanoseconds,t.nanoseconds):Is(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ns(t)}static min(){return new Ns(new As(0,0))}static max(){return new Ns(new As(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ks(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e,n){void 0===e?e=0:e>t.length&&us(),void 0===n?n=t.length-e:n>t.length-e&&us(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Rs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ls extends Rs{construct(t,e,n){return new Ls(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ds(ls.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ls(e)}static emptyPath(){return new Ls([])}}const xs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ms extends Rs{construct(t,e,n){return new Ms(t,e,n)}static isValidIdentifier(t){return xs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ms.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ms(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new ds(ls.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ds(ls.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ds(ls.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new ds(ls.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ms(e)}static emptyPath(){return new Ms([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.fields=t,t.sort(Ms.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Cs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ps(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ps(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Is(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ps.EMPTY_BYTE_STRING=new Ps("");const Os=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fs(t){if(hs(!!t),"string"==typeof t){let e=0;const n=Os.exec(t);if(hs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Us(t.seconds),nanos:Us(t.nanos)}}function Us(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Bs(t){return"string"==typeof t?Ps.fromBase64String(t):Ps.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function js(t){const e=t.mapValue.fields.__previous_value__;return qs(e)?js(e):e}function Ks(t){const e=Fs(t.mapValue.fields.__local_write_time__.timestampValue);return new As(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class $s{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $s&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){return null==t}function zs(t){return 0===t&&1/t==-1/0}function Ws(t){return"number"==typeof t&&Number.isInteger(t)&&!zs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.path=t}static fromPath(t){return new Qs(Ls.fromString(t))}static fromName(t){return new Qs(Ls.fromString(t).popFirst(5))}static empty(){return new Qs(Ls.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ls.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ls.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Qs(new Ls(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qs(t)?4:hr(t)?9:10:us()}function Ys(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fs(t.timestampValue),i=Fs(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Bs(t.bytesValue).isEqual(Bs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Us(t.geoPointValue.latitude)===Us(e.geoPointValue.latitude)&&Us(t.geoPointValue.longitude)===Us(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Us(t.integerValue)===Us(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Us(t.doubleValue),i=Us(e.doubleValue);return n===i?zs(n)===zs(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Ys);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(_s(n)!==_s(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Ys(n[s],i[s])))return!1;return!0}(t,e);default:return us()}}function Zs(t,e){return void 0!==(t.values||[]).find((t=>Ys(t,e)))}function Js(t,e){if(t===e)return 0;const n=Xs(t),i=Xs(e);if(n!==i)return Is(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Is(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Us(t.integerValue||t.doubleValue),i=Us(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return tr(t.timestampValue,e.timestampValue);case 4:return tr(Ks(t),Ks(e));case 5:return Is(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Bs(t),i=Bs(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=Is(n[s],i[s]);if(0!==t)return t}return Is(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Is(Us(t.latitude),Us(e.latitude));return 0!==n?n:Is(Us(t.longitude),Us(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Js(n[s],i[s]);if(t)return t}return Is(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=Is(i[o],r[o]);if(0!==t)return t;const e=Js(n[i[o]],s[r[o]]);if(0!==e)return e}return Is(i.length,r.length)}(t.mapValue,e.mapValue);default:throw us()}}function tr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Is(t,e);const n=Fs(t),i=Fs(e),s=Is(n.seconds,i.seconds);return 0!==s?s:Is(n.nanos,i.nanos)}function er(t){return nr(t)}function nr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Qs.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=nr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${nr(t.fields[s])}`;return n+"}"}(t.mapValue):us();var e,n}function ir(t){return!!t&&"integerValue"in t}function sr(t){return!!t&&"arrayValue"in t}function rr(t){return!!t&&"nullValue"in t}function or(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ar(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ds(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ur(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(t){this.value=t}static empty(){return new cr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ar(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ur(e)}setAll(t){let e=Ms.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=ur(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ar(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ys(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ar(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ds(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new cr(ur(this.value))}}function lr(t){const e=[];return Ds(t.fields,((t,n)=>{const i=new Ms([t]);if(ar(n)){const t=lr(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Vs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dr{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new dr(t,0,Ns.min(),Ns.min(),cr.empty(),0)}static newFoundDocument(t,e,n){return new dr(t,1,e,Ns.min(),n,0)}static newNoDocument(t,e){return new dr(t,2,e,Ns.min(),cr.empty(),0)}static newUnknownDocument(t,e){return new dr(t,3,e,Ns.min(),cr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof dr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class fr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}fr.UNKNOWN_ID=-1;function pr(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Ns.fromTimestamp(1e9===i?new As(n+1,0):new As(n,i));return new mr(s,Qs.empty(),e)}function gr(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new mr(Ns.min(),Qs.empty(),-1)}static max(){return new mr(Ns.max(),Qs.empty(),-1)}}function yr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Qs.comparator(t.documentKey,e.documentKey),0!==n?n:Is(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function wr(t,e=null,n=[],i=[],s=null,r=null,o=null){return new vr(t,e,n,i,s,r,o)}function Er(t){const e=cs(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+er(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Hs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>er(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>er(t))).join(",")),e.P=t}return e.P}function Tr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${er(e.value)}`;var e})).join(", ")}]`),Hs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>er(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>er(t))).join(",")),`Target(${e})`}function br(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Vr(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Ys(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Or(t.startAt,e.startAt)&&Or(t.endAt,e.endAt)}function Sr(t){return Qs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ir extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Cr(t,e,n):"array-contains"===e?new Dr(t,n):"in"===e?new kr(t,n):"not-in"===e?new Rr(t,n):"array-contains-any"===e?new Lr(t,n):new Ir(t,e,n)}static V(t,e,n){return"in"===e?new Ar(t,n):new Nr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Js(e,this.value)):null!==e&&Xs(this.value)===Xs(e)&&this.v(Js(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return us()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Cr extends Ir{constructor(t,e,n){super(t,e,n),this.key=Qs.fromName(n.referenceValue)}matches(t){const e=Qs.comparator(t.key,this.key);return this.v(e)}}class Ar extends Ir{constructor(t,e){super(t,"in",e),this.keys=_r("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Nr extends Ir{constructor(t,e){super(t,"not-in",e),this.keys=_r("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function _r(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Qs.fromName(t.referenceValue)))}class Dr extends Ir{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return sr(e)&&Zs(e.arrayValue,this.value)}}class kr extends Ir{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zs(this.value.arrayValue,e)}}class Rr extends Ir{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zs(this.value.arrayValue,e)}}class Lr extends Ir{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!sr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zs(this.value.arrayValue,t)))}}class xr{constructor(t,e){this.position=t,this.inclusive=e}}class Mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Pr(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Qs.comparator(Qs.fromName(o.referenceValue),n.key):Js(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Or(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ys(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ur(t,e,n,i,s,r,o,a){return new Fr(t,e,n,i,s,r,o,a)}function Br(t){return new Fr(t)}function qr(t){return!Hs(t.limit)&&"F"===t.limitType}function jr(t){return!Hs(t.limit)&&"L"===t.limitType}function Kr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gr(t){for(const e of t.filters)if(e.S())return e.field;return null}function $r(t){return null!==t.collectionGroup}function Hr(t){const e=cs(t);if(null===e.D){e.D=[];const t=Gr(e),n=Kr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Mr(t)),e.D.push(new Mr(Ms.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Mr(Ms.keyField(),t))}}}return e.D}function zr(t){const e=cs(t);if(!e.C)if("F"===e.limitType)e.C=wr(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Hr(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Mr(s.field,e))}const n=e.endAt?new xr(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new xr(e.startAt.position,!e.startAt.inclusive):null;e.C=wr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Wr(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qr(t,e){return br(zr(t),zr(e))&&t.limitType===e.limitType}function Xr(t){return`${Er(zr(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${Tr(zr(t))}; limitType=${t.limitType})`}function Zr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Qs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Pr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Hr(t),e))&&!(t.endAt&&!function(t,e,n){const i=Pr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Hr(t),e))}(t,e)}function Jr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function to(t){return(e,n)=>{let i=!1;for(const s of Hr(t)){const t=eo(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function eo(t,e,n){const i=t.field.isKeyField()?Qs.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Js(i,s):us()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return us()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(e)?"-0":e}}function io(t){return{integerValue:""+t}}function so(t,e){return Ws(e)?io(e):no(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this._=void 0}}function oo(t,e,n){return t instanceof ho?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof co?lo(t,e):t instanceof fo?po(t,e):function(t,e){const n=uo(t,e),i=mo(n)+mo(t.k);return ir(n)&&ir(t.k)?io(i):no(t.M,i)}(t,e)}function ao(t,e,n){return t instanceof co?lo(t,e):t instanceof fo?po(t,e):n}function uo(t,e){return t instanceof go?ir(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ho extends ro{}class co extends ro{constructor(t){super(),this.elements=t}}function lo(t,e){const n=yo(e);for(const i of t.elements)n.some((t=>Ys(t,i)))||n.push(i);return{arrayValue:{values:n}}}class fo extends ro{constructor(t){super(),this.elements=t}}function po(t,e){let n=yo(e);for(const i of t.elements)n=n.filter((t=>!Ys(t,i)));return{arrayValue:{values:n}}}class go extends ro{constructor(t,e){super(),this.M=t,this.k=e}}function mo(t){return Us(t.integerValue||t.doubleValue)}function yo(t){return sr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof co&&e instanceof co||t instanceof fo&&e instanceof fo?Cs(t.elements,e.elements,Ys):t instanceof go&&e instanceof go?Ys(t.k,e.k):t instanceof ho&&e instanceof ho}(t.transform,e.transform)}class wo{constructor(t,e){this.version=t,this.transformResults=e}}class Eo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Eo}static exists(t){return new Eo(void 0,t)}static updateTime(t){return new Eo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function To(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class bo{}function So(t,e,n){t instanceof _o?function(t,e,n){const i=t.value.clone(),s=Ro(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Do?function(t,e,n){if(!To(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Ro(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ko(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n){t instanceof _o?function(t,e,n){if(!To(t.precondition,e))return;const i=t.value.clone(),s=Lo(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(No(e),i).setHasLocalMutations()}(t,e,n):t instanceof Do?function(t,e,n){if(!To(t.precondition,e))return;const i=Lo(t.fieldTransforms,n,e),s=e.data;s.setAll(ko(t)),s.setAll(i),e.convertToFoundDocument(No(e),s).setHasLocalMutations()}(t,e,n):function(t,e){To(t.precondition,e)&&e.convertToNoDocument(Ns.min())}(t,e)}function Co(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=uo(i.transform,t||null);null!=s&&(null==n&&(n=cr.empty()),n.set(i.field,s))}return n||null}function Ao(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Cs(t,e,((t,e)=>vo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function No(t){return t.isFoundDocument()?t.version:Ns.min()}class _o extends bo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Do extends bo{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function ko(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Ro(t,e,n){const i=new Map;hs(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,ao(o,a,n[s]))}return i}function Lo(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,oo(t,r,e))}return i}class xo extends bo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Mo extends bo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Po,Oo;function Fo(t){switch(t){default:return us();case ls.CANCELLED:case ls.UNKNOWN:case ls.DEADLINE_EXCEEDED:case ls.RESOURCE_EXHAUSTED:case ls.INTERNAL:case ls.UNAVAILABLE:case ls.UNAUTHENTICATED:return!1;case ls.INVALID_ARGUMENT:case ls.NOT_FOUND:case ls.ALREADY_EXISTS:case ls.PERMISSION_DENIED:case ls.FAILED_PRECONDITION:case ls.ABORTED:case ls.OUT_OF_RANGE:case ls.UNIMPLEMENTED:case ls.DATA_LOSS:return!0}}function Uo(t){if(void 0===t)return rs("GRPC error has no .code"),ls.UNKNOWN;switch(t){case Po.OK:return ls.OK;case Po.CANCELLED:return ls.CANCELLED;case Po.UNKNOWN:return ls.UNKNOWN;case Po.DEADLINE_EXCEEDED:return ls.DEADLINE_EXCEEDED;case Po.RESOURCE_EXHAUSTED:return ls.RESOURCE_EXHAUSTED;case Po.INTERNAL:return ls.INTERNAL;case Po.UNAVAILABLE:return ls.UNAVAILABLE;case Po.UNAUTHENTICATED:return ls.UNAUTHENTICATED;case Po.INVALID_ARGUMENT:return ls.INVALID_ARGUMENT;case Po.NOT_FOUND:return ls.NOT_FOUND;case Po.ALREADY_EXISTS:return ls.ALREADY_EXISTS;case Po.PERMISSION_DENIED:return ls.PERMISSION_DENIED;case Po.FAILED_PRECONDITION:return ls.FAILED_PRECONDITION;case Po.ABORTED:return ls.ABORTED;case Po.OUT_OF_RANGE:return ls.OUT_OF_RANGE;case Po.UNIMPLEMENTED:return ls.UNIMPLEMENTED;case Po.DATA_LOSS:return ls.DATA_LOSS;default:return us()}}(Oo=Po||(Po={}))[Oo.OK=0]="OK",Oo[Oo.CANCELLED=1]="CANCELLED",Oo[Oo.UNKNOWN=2]="UNKNOWN",Oo[Oo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oo[Oo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oo[Oo.NOT_FOUND=5]="NOT_FOUND",Oo[Oo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oo[Oo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oo[Oo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oo[Oo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oo[Oo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oo[Oo.ABORTED=10]="ABORTED",Oo[Oo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oo[Oo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oo[Oo.INTERNAL=13]="INTERNAL",Oo[Oo.UNAVAILABLE=14]="UNAVAILABLE",Oo[Oo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ds(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return ks(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e){this.comparator=t,this.root=e||Ko.EMPTY}insert(t,e){return new qo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ko.BLACK,null,null))}remove(t){return new qo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ko.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jo(this.root,t,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jo(this.root,t,this.comparator,!0)}}class jo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ko{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Ko.RED,this.left=null!=i?i:Ko.EMPTY,this.right=null!=s?s:Ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Ko(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ko.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ko.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw us();if(this.right.isRed())throw us();const t=this.left.check();if(t!==this.right.check())throw us();return t+(this.isRed()?0:1)}}Ko.EMPTY=null,Ko.RED=!0,Ko.BLACK=!1,Ko.EMPTY=new class{constructor(){this.size=0}get key(){throw us()}get value(){throw us()}get color(){throw us()}get left(){throw us()}get right(){throw us()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Ko(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(t){this.comparator=t,this.data=new qo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Go))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Go(this.comparator);return e.data=t,e}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ho=new qo(Qs.comparator);function zo(){return Ho}const Wo=new qo(Qs.comparator);function Qo(){return Wo}function Xo(){return new Bo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Yo=new qo(Qs.comparator),Zo=new Go(Qs.comparator);function Jo(...t){let e=Zo;for(const n of t)e=e.add(n);return e}const ta=new Go(Is);function ea(){return ta}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,ia.createSynthesizedTargetChangeForCurrentChange(t,e)),new na(Ns.min(),n,ea(),zo(),Jo())}}class ia{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new ia(Ps.EMPTY_BYTE_STRING,e,Jo(),Jo(),Jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.F=i}}class ra{constructor(t,e){this.targetId=t,this.$=e}}class oa{constructor(t,e,n=Ps.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class aa{constructor(){this.B=0,this.L=ca(),this.U=Ps.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Jo(),e=Jo(),n=Jo();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:us()}})),new ia(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=ca()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ua{constructor(t){this.nt=t,this.st=new Map,this.it=zo(),this.rt=ha(),this.ot=new Go(Is)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:us()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,i=this.wt(e);if(i){const t=i.target;if(Sr(t))if(0===n){const n=new Qs(t.path);this.ct(e,n,dr.newNoDocument(n,Ns.min()))}else hs(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&Sr(s.target)){const e=new Qs(s.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,dr.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}}));let n=Jo();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new na(t,e,this.ot,this.it,n);return this.it=zo(),this.rt=ha(),this.ot=new Go(Is),i}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new aa,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Go(Is),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||ss("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new aa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function ha(){return new qo(Qs.comparator)}function ca(){return new qo(Qs.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),da=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class fa{constructor(t,e){this.databaseId=t,this.N=e}}function pa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ga(t,e){return t.N?e.toBase64():e.toUint8Array()}function ma(t,e){return pa(t,e.toTimestamp())}function ya(t){return hs(!!t),Ns.fromTimestamp(function(t){const e=Fs(t);return new As(e.seconds,e.nanos)}(t))}function va(t,e){return function(t){return new Ls(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function wa(t){const e=Ls.fromString(t);return hs(ja(e)),e}function Ea(t,e){return va(t.databaseId,e.path)}function Ta(t,e){const n=wa(e);if(n.get(1)!==t.databaseId.projectId)throw new ds(ls.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ds(ls.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Qs(Ca(n))}function ba(t,e){return va(t.databaseId,e)}function Sa(t){const e=wa(t);return 4===e.length?Ls.emptyPath():Ca(e)}function Ia(t){return new Ls(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ca(t){return hs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Aa(t,e,n){return{name:Ea(t,e),fields:n.value.mapValue.fields}}function Na(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:us()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.N?(hs(void 0===e||"string"==typeof e),Ps.fromBase64String(e||"")):(hs(void 0===e||e instanceof Uint8Array),Ps.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ls.UNKNOWN:Uo(t.code);return new ds(e,t.message||"")}(o);n=new oa(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ta(t,i.document.name),r=ya(i.document.updateTime),o=new cr({mapValue:{fields:i.document.fields}}),a=dr.newFoundDocument(s,r,o),u=i.targetIds||[],h=i.removedTargetIds||[];n=new sa(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ta(t,i.document),r=i.readTime?ya(i.readTime):Ns.min(),o=dr.newNoDocument(s,r),a=i.removedTargetIds||[];n=new sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ta(t,i.document),r=i.removedTargetIds||[];n=new sa([],r,s,null)}else{if(!("filter"in e))return us();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new Vo(i),r=t.targetId;n=new ra(r,s)}}return n}function _a(t,e){let n;if(e instanceof _o)n={update:Aa(t,e.key,e.value)};else if(e instanceof xo)n={delete:Ea(t,e.key)};else if(e instanceof Do)n={update:Aa(t,e.key,e.data),updateMask:qa(e.fieldMask)};else{if(!(e instanceof Mo))return us();n={verify:Ea(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ho)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof co)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof go)return{fieldPath:e.field.canonicalString(),increment:n.k};throw us()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ma(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:us()}(t,e.precondition)),n}function Da(t,e){return t&&t.length>0?(hs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ya(t.updateTime):ya(e);return n.isEqual(Ns.min())&&(n=ya(e)),new wo(n,t.transformResults||[])}(t,e)))):[]}function ka(t,e){return{documents:[ba(t,e.path)]}}function Ra(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ba(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ba(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(or(t.value))return{unaryFilter:{field:Oa(t.field),op:"IS_NAN"}};if(rr(t.value))return{unaryFilter:{field:Oa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(or(t.value))return{unaryFilter:{field:Oa(t.field),op:"IS_NOT_NAN"}};if(rr(t.value))return{unaryFilter:{field:Oa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oa(t.field),op:Pa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Oa(t.field),direction:Va(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Hs(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function La(t){let e=Sa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){hs(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Ma(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Mr(Fa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Hs(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new xr(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new xr(n,e)}(n.endAt)),Ur(e,s,o,r,a,"F",u,h)}function xa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return us()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ma(t){return t?void 0!==t.unaryFilter?[Ba(t)]:void 0!==t.fieldFilter?[Ua(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ma(t))).reduce(((t,e)=>t.concat(e))):us():[]}function Va(t){return la[t]}function Pa(t){return da[t]}function Oa(t){return{fieldPath:t.canonicalString()}}function Fa(t){return Ms.fromServerFormat(t.fieldPath)}function Ua(t){return Ir.create(Fa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return us()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ba(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fa(t.unaryFilter.field);return Ir.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fa(t.unaryFilter.field);return Ir.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fa(t.unaryFilter.field);return Ir.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fa(t.unaryFilter.field);return Ir.create(s,"!=",{nullValue:"NULL_VALUE"});default:return us()}}function qa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ja(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ga=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$a="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&us(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new za(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof za?e:za.resolve(e)}catch(t){return za.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):za.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):za.reject(e)}static resolve(t){return new za(((e,n)=>{e(t)}))}static reject(t){return new za(((e,n)=>{n(t)}))}static waitFor(t){return new za(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=za.resolve(!1);for(const n of t)e=e.next((t=>t?za.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&So(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Io(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Io(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Ns.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Jo())}isEqual(t){return this.batchId===t.batchId&&Cs(this.mutations,t.mutations,((t,e)=>Ao(t,e)))&&Cs(this.baseMutations,t.baseMutations,((t,e)=>Ao(t,e)))}}class Xa{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){hs(t.mutations.length===n.length);let i=Yo;const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Xa(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,i,s=Ns.min(),r=Ns.min(),o=Ps.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Za(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Za(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Za(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.Jt=t}}function tu(t){const e=La({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Us(t.integerValue));else if("doubleValue"in t){const n=Us(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),zs(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Bs(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?hr(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):us()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const i of Object.keys(n))this.re(i,e),this.te(n[i],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const i of n)this.te(i,e)}ae(t,e){this.ne(e,37),Qs.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}eu.fe=new eu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(){this.qe=new iu}addToCollectionParentIndex(t,e){return this.qe.add(e),za.resolve()}getCollectionParents(t,e){return za.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return za.resolve()}deleteFieldIndex(t,e){return za.resolve()}getDocumentsMatchingTarget(t,e){return za.resolve(null)}getFieldIndex(t,e){return za.resolve(null)}getFieldIndexes(t,e){return za.resolve([])}getNextCollectionGroupToUpdate(t){return za.resolve(null)}updateCollectionGroup(t,e,n){return za.resolve()}updateIndexEntries(t,e){return za.resolve()}}class iu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Go(Ls.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Go(Ls.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class su{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new su(t,su.DEFAULT_COLLECTION_PERCENTILE,su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */su.DEFAULT_COLLECTION_PERCENTILE=10,su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,su.DEFAULT=new su(41943040,su.DEFAULT_COLLECTION_PERCENTILE,su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),su.DISABLED=new su(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new ru(0)}static yn(){return new ru(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ou(t){if(t.code!==ls.FAILED_PRECONDITION||t.message!==$a)throw t;ss("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(){this.changes=new Bo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,dr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?za.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const i of e)i.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Qs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):$r(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Qs(e)).next((t=>{let e=Qo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const i=e.collectionGroup;let s=Qo();return this.indexManager.getCollectionParents(t,i).next((r=>za.forEach(r,(r=>{const o=function(t,e){return new Fr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}zs(t,e,n){let i;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(i=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=i.get(n);null==s&&(s=dr.newInvalidDocument(n),i=i.insert(n,s)),Io(t,s,e.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((t,n)=>{Zr(e,n)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=i}static Ys(t,e){let n=Jo(),i=Jo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hu(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{Xs(t){this.Zs=t}Qs(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Ns.min())?this.ti(t,e):this.Zs.Ks(t,i).next((s=>{const r=this.ei(e,s);return(qr(e)||jr(e))&&this.ni(e.limitType,r,i,n)?this.ti(t,e):(is()<=E["in"].DEBUG&&ss("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yr(e)),this.Zs.Qs(t,e,pr(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Go(to(t));return e.forEach(((e,i)=>{Zr(t,i)&&(n=n.add(i))})),n}ni(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(t,e){return is()<=E["in"].DEBUG&&ss("QueryEngine","Using full collection scan to execute query:",Yr(e)),this.Zs.Qs(t,e,mr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,i){this.persistence=t,this.si=e,this.M=i,this.ii=new qo(Is),this.ri=new Bo((t=>Er(t)),br),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new uu(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function du(t,e,n,i){return new lu(t,e,n,i)}async function fu(t,e){const n=cs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.Bs.getAllMutationBatches(t).next((s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Jo();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function pu(t,e){const n=cs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=za.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);hs(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,i)))}))}function gu(t){const e=cs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function mu(t,e){const n=cs(t),i=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const o=[];e.targetChanges.forEach(((r,a)=>{const u=s.get(a);if(!u)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,r.addedDocuments,a))));let h=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Ps.EMPTY_BYTE_STRING,Ns.min()).withLastLimboFreeSnapshotVersion(Ns.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,i)),s=s.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,h,r)&&o.push(n.fs.updateTargetData(t,h))}));let a=zo();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(yu(t,r,e.documentUpdates).next((t=>{a=t}))),!i.isEqual(Ns.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return za.waitFor(o).next((()=>r.apply(t))).next((()=>n.ci.Gs(t,a))).next((()=>a))})).then((t=>(n.ii=s,t)))}function yu(t,e,n){let i=Jo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=zo();return n.forEach(((n,s)=>{const r=t.get(n);s.isNoDocument()&&s.version.isEqual(Ns.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):ss("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version)})),i}))}function vu(t,e){const n=cs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function wu(t,e){const n=cs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.fs.getTargetData(t,e).next((s=>s?(i=s,za.resolve(i)):n.fs.allocateTargetId(t).next((s=>(i=new Za(e,s,0,t.currentSequenceNumber),n.fs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ii.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}async function Eu(t,e,n){const i=cs(t),s=i.ii.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Wa(t))throw t;ss("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ii=i.ii.remove(e),i.ri.delete(s.target)}function Tu(t,e,n){const i=cs(t);let s=Ns.min(),r=Jo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=cs(t),s=i.ri.get(n);return void 0!==s?za.resolve(i.ii.get(s)):i.fs.getTargetData(e,n)}(i,t,zr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.si.Qs(t,e,n?s:Ns.min(),n?r:Jo()))).next((t=>(bu(i,Jr(e),t),{documents:t,li:r})))))}function bu(t,e,n){let i=Ns.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.oi.set(e,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return za.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:ya(n.createTime)}),za.resolve()}getNamedQuery(t,e){return za.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:tu(t.bundledQuery),readTime:ya(t.readTime)}}(e)),za.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.overlays=new qo(Qs.comparator),this.gi=new Map}getOverlay(t,e){return za.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Xt(t,e,i)})),za.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.gi.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),za.resolve()}getOverlaysForCollection(t,e,n){const i=Xo(),s=e.length+1,r=new Qs(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return za.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new qo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Xo(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Xo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return za.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.gi.get(i.largestBatchId).delete(n.key);this.gi.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ya(e,n));let s=this.gi.get(e);void 0===s&&(s=Jo(),this.gi.set(e,s)),this.gi.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.yi=new Go(Au.pi),this.Ii=new Go(Au.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new Au(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new Au(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new Qs(new Ls([])),n=new Au(e,t),i=new Au(e,t+1),s=[];return this.Ii.forEachInRange([n,i],(t=>{this.Ai(t),s.push(t.key)})),s}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new Qs(new Ls([])),n=new Au(e,t),i=new Au(e,t+1);let s=Jo();return this.Ii.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Au(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Au{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return Qs.comparator(t.key,e.key)||Is(t.vi,e.vi)}static Ti(t,e){return Is(t.vi,e.vi)||Qs.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Go(Au.pi)}checkEmpty(t){return za.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new Qa(s,e,n,i);this.Bs.push(r);for(const o of i)this.Di=this.Di.add(new Au(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return za.resolve(r)}lookupMutationBatch(t,e){return za.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.xi(n),s=i<0?0:i;return za.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return za.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return za.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Au(e,0),i=new Au(e,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([n,i],(t=>{const e=this.Ci(t.vi);s.push(e)})),za.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Go(Is);return e.forEach((t=>{const e=new Au(t,0),i=new Au(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,i],(t=>{n=n.add(t.vi)}))})),za.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Qs.isDocumentKey(s)||(s=s.child(""));const r=new Au(new Qs(s),0);let o=new Go(Is);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.vi)),!0)}),r),za.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){hs(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return za.forEach(e.mutations,(i=>{const s=new Au(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new Au(e,0),i=this.Di.firstAfterOrEqual(n);return za.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,za.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.Mi=t,this.docs=new qo(Qs.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return za.resolve(n?n.document.mutableCopy():dr.newInvalidDocument(e))}getEntries(t,e){let n=zo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():dr.newInvalidDocument(t))})),za.resolve(n)}getAllFromCollection(t,e,n){let i=zo();const s=new Qs(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||yr(gr(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return za.resolve(i)}getAllFromCollectionGroup(t,e,n,i){us()}Oi(t,e){return za.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Du(this)}getSize(t){return za.resolve(this.size)}}class Du extends au{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(n)})),za.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.persistence=t,this.Fi=new Bo((t=>Er(t)),br),this.lastRemoteSnapshotVersion=Ns.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Cu,this.targetCount=0,this.Li=ru.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),za.resolve()}getLastRemoteSnapshotVersion(t){return za.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return za.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),za.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),za.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new ru(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,za.resolve()}updateTargetData(t,e){return this.Tn(e),za.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,za.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Fi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),za.waitFor(s).next((()=>i))}getTargetCount(t){return za.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return za.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),za.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),za.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),za.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return za.resolve(n)}containsKey(t,e){return za.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e){this.Ui={},this.overlays={},this.es=new Ts(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new ku(this),this.indexManager=new nu,this.ds=function(t){return new _u(t)}((t=>this.referenceDelegate.qi(t))),this.M=new Ja(e),this._s=new Su(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Iu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new Nu(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){ss("MemoryPersistence","Starting transaction:",t);const i=new Lu(this.es.next());return this.referenceDelegate.Ki(),n(i).next((t=>this.referenceDelegate.Gi(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Qi(t,e){return za.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class Lu extends Ha{constructor(t){super(),this.currentSequenceNumber=t}}class xu{constructor(t){this.persistence=t,this.ji=new Cu,this.Wi=null}static zi(t){return new xu(t)}get Hi(){if(this.Wi)return this.Wi;throw us()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),za.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),za.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),za.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return za.forEach(this.Hi,(n=>{const i=Qs.fromPath(n);return this.Ji(t,i).next((t=>{t||e.removeEntry(i,Ns.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return za.or([()=>za.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.activeTargetIds=ea()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vu{constructor(){this.$r=new Mu,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Mu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){ss("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){ss("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,i,s){const r=this.uo(t,e);ss("RestConnection","Sending: ",r,n);const o={};return this.ao(o,i,s),this.co(t,r,o,n).then((t=>(ss("RestConnection","Received: ",t),t)),(e=>{throw os("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ho(t,e,n,i,s){return this.oo(t,e,n,i,s)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+es,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Fu[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,i){return new Promise(((s,r)=>{const o=new Zi;o.listenOnce(zi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Hi.NO_ERROR:const e=o.getResponseJson();ss("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Hi.TIMEOUT:ss("Connection",'RPC "'+t+'" timed out'),r(new ds(ls.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const n=o.getStatus();if(ss("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ls).indexOf(e)>=0?e:ls.UNKNOWN}(t.status);r(new ds(e,t.message))}else r(new ds(ls.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ds(ls.UNAVAILABLE,"Connection failed."));break;default:us()}}finally{ss("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}lo(t,e,n){const i=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Gi(),r=$i(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Xi({})),this.ao(o.initMessageHeaders,e,n),(0,T.uI)()||(0,T.b$)()||(0,T.d)()||(0,T.w1)()||(0,T.Mn)()||(0,T.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");ss("Connection","Creating WebChannel: "+a,o);const u=s.createWebChannel(a,o);let h=!1,c=!1;const l=new Uu({Wr:t=>{c?ss("Connection","Not sending because WebChannel is closed:",t):(h||(ss("Connection","Opening WebChannel transport."),u.open(),h=!0),ss("Connection","WebChannel sending:",t),u.send(t))},zr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Yi.EventType.OPEN,(()=>{c||ss("Connection","WebChannel transport opened.")})),d(u,Yi.EventType.CLOSE,(()=>{c||(c=!0,ss("Connection","WebChannel transport closed"),l.no())})),d(u,Yi.EventType.ERROR,(t=>{c||(c=!0,os("Connection","WebChannel transport errored:",t),l.no(new ds(ls.UNAVAILABLE,"The operation could not be completed")))})),d(u,Yi.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];hs(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){ss("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Po[t];if(void 0!==e)return Uo(e)}(t),n=s.message;void 0===e&&(e=ls.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),c=!0,l.no(new ds(e,n)),u.close()}else ss("Connection","WebChannel received:",n),l.so(n)}})),d(r,Wi.STAT_EVENT,(t=>{t.stat===Qi.PROXY?ss("Connection","Detected buffering proxy"):t.stat===Qi.NOPROXY&&ss("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.eo()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return new fa(t,!0)}class Ku{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),i=Math.max(0,e-n);i>0&&ss("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e,n,i,s,r,o,a){this.Yn=t,this.Ro=n,this.Po=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Ku(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===ls.RESOURCE_EXHAUSTED?(rs(e.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===ls.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new ds(ls.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return ss("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(ss("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $u extends Gu{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.M=s}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=Na(this.M,t),n=function(t){if(!("targetChange"in t))return Ns.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ns.min():e.readTime?ya(e.readTime):Ns.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=Ia(this.M),e.addTarget=function(t,e){let n;const i=e.target;return n=Sr(i)?{documents:ka(t,i)}:{query:Ra(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ga(t,e.resumeToken):e.snapshotVersion.compareTo(Ns.min())>0&&(n.readTime=pa(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=xa(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Ia(this.M),e.removeTarget=t,this.Fo(e)}}class Hu extends Gu{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(hs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=Da(t.writeResults,t.commitTime),n=ya(t.commitTime);return this.listener.Yo(n,e)}return hs(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=Ia(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>_a(this.M,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=i,this.tu=!1}eu(){if(this.tu)throw new ds(ls.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.oo(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ls.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(ls.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ho(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ls.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(ls.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class Wu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(rs(e),this.iu=!1):ss("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr((t=>{n.enqueueAndForget((async()=>{sh(this)&&(ss("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=cs(t);e.fu.add(4),await Yu(e),e.wu.set("Unknown"),e.fu.delete(4),await Xu(e)}(this))}))})),this.wu=new Wu(n,i)}}async function Xu(t){if(sh(t))for(const e of t.du)await e(!0)}async function Yu(t){for(const e of t.du)await e(!1)}function Zu(t,e){const n=cs(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),ih(n)?nh(n):bh(n).xo()&&th(n,e))}function Ju(t,e){const n=cs(t),i=bh(n);n.lu.delete(e),i.xo()&&eh(n,e),0===n.lu.size&&(i.xo()?i.Mo():sh(n)&&n.wu.set("Unknown"))}function th(t,e){t.mu.Z(e.targetId),bh(t).jo(e)}function eh(t,e){t.mu.Z(e),bh(t).Wo(e)}function nh(t){t.mu=new ua({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),bh(t).start(),t.wu.ru()}function ih(t){return sh(t)&&!bh(t).Co()&&t.lu.size>0}function sh(t){return 0===cs(t).fu.size}function rh(t){t.mu=void 0}async function oh(t){t.lu.forEach(((e,n)=>{th(t,e)}))}async function ah(t,e){rh(t),ih(t)?(t.wu.au(e),nh(t)):t.wu.set("Unknown")}async function uh(t,e,n){if(t.wu.set("Online"),e instanceof oa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.lu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.lu.delete(i),t.mu.removeTarget(i))}(t,e)}catch(n){ss("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hh(t,n)}else if(e instanceof sa?t.mu.ut(e):e instanceof ra?t.mu._t(e):t.mu.ht(e),!n.isEqual(Ns.min()))try{const e=await gu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.lu.get(i);s&&t.lu.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Ps.EMPTY_BYTE_STRING,n.snapshotVersion)),eh(t,e);const i=new Za(n.target,e,1,n.sequenceNumber);th(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ss("RemoteStore","Failed to raise snapshot:",e),await hh(t,e)}}async function hh(t,e,n){if(!Wa(e))throw e;t.fu.add(1),await Yu(t),t.wu.set("Offline"),n||(n=()=>gu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ss("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Xu(t)}))}function ch(t,e){return e().catch((n=>hh(t,n,e)))}async function lh(t){const e=cs(t),n=Sh(e);let i=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;dh(e);)try{const t=await vu(e.localStore,i);if(null===t){0===e.hu.length&&n.Mo();break}i=t.batchId,fh(e,t)}catch(t){await hh(e,t)}ph(e)&&gh(e)}function dh(t){return sh(t)&&t.hu.length<10}function fh(t,e){t.hu.push(e);const n=Sh(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ph(t){return sh(t)&&!Sh(t).Co()&&t.hu.length>0}function gh(t){Sh(t).start()}async function mh(t){Sh(t).Zo()}async function yh(t){const e=Sh(t);for(const n of t.hu)e.Jo(n.mutations)}async function vh(t,e,n){const i=t.hu.shift(),s=Xa.from(i,e,n);await ch(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await lh(t)}async function wh(t,e){e&&Sh(t).Ho&&await async function(t,e){if(n=e.code,Fo(n)&&n!==ls.ABORTED){const n=t.hu.shift();Sh(t).ko(),await ch(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await lh(t)}var n}(t,e),ph(t)&&gh(t)}async function Eh(t,e){const n=cs(t);n.asyncQueue.verifyOperationInProgress(),ss("RemoteStore","RemoteStore received new credentials");const i=sh(n);n.fu.add(3),await Yu(n),i&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Xu(n)}async function Th(t,e){const n=cs(t);e?(n.fu.delete(2),await Xu(n)):e||(n.fu.add(2),await Yu(n),n.wu.set("Unknown"))}function bh(t){return t.gu||(t.gu=function(t,e,n){const i=cs(t);return i.eu(),new $u(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:oh.bind(null,t),Yr:ah.bind(null,t),Qo:uh.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),ih(t)?nh(t):t.wu.set("Unknown")):(await t.gu.stop(),rh(t))}))),t.gu}function Sh(t){return t.yu||(t.yu=function(t,e,n){const i=cs(t);return i.eu(),new Hu(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(t.datastore,t.asyncQueue,{Hr:mh.bind(null,t),Yr:wh.bind(null,t),Xo:yh.bind(null,t),Yo:vh.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await lh(t)):(await t.yu.stop(),t.hu.length>0&&(ss("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ih{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Ih(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ds(ls.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(rs("AsyncQueue",`${e}: ${t}`),Wa(t))return new ds(ls.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Qs.comparator(e.key,n.key):(t,e)=>Qs.comparator(t.key,e.key),this.keyedMap=Qo(),this.sortedSet=new qo(this.comparator)}static emptySet(t){return new Ah(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ah))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ah;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.pu=new qo(Qs.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):us():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class _h{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new _h(t,e,Ah.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.Tu=void 0,this.listeners=[]}}class kh{constructor(){this.queries=new Bo((t=>Xr(t)),Qr),this.onlineState="Unknown",this.Eu=new Set}}async function Rh(t,e){const n=cs(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Dh),s)try{r.Tu=await n.onListen(i)}catch(t){const n=Ch(t,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Au(n.onlineState),r.Tu&&e.Ru(r.Tu)&&Vh(n)}async function Lh(t,e){const n=cs(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function xh(t,e){const n=cs(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(s)&&(i=!0);e.Tu=s}}i&&Vh(n)}function Mh(t,e,n){const i=cs(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Vh(t){t.Eu.forEach((t=>{t.next()}))}class Ph{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new _h(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=_h.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(t){this.key=t}}class Fh{constructor(t){this.key=t}}class Uh{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=Jo(),this.mutatedKeys=Jo(),this.Uu=to(t),this.qu=new Ah(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new Nh,i=e?e.qu:this.qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=qr(this.query)&&i.size===this.query.limit?i.last():null,u=jr(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const h=i.get(t),c=Zr(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;h&&c?h.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.ju(h,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Uu(c,a)>0||u&&this.Uu(c,u)<0)&&(o=!0)):!h&&c?(n.track({type:0,doc:c}),f=!0):h&&!c&&(n.track({type:1,doc:h}),f=!0,(a||u)&&(o=!0)),f&&(c?(r=r.add(c),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),qr(this.query)||jr(this.query))for(;r.size>this.query.limit;){const t=qr(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{qu:r,Qu:n,ni:o,mutatedKeys:s}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const s=t.Qu.Iu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return us()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const r=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==s.length||a?{snapshot:new _h(this.query,t.qu,i,s,t.mutatedKeys,0===o,a,!1),Hu:r}:{Hu:r}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Nh,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=Jo(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new Fh(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new Oh(n))})),e}Yu(t){this.$u=t.li,this.Lu=Jo();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return _h.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Bh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class qh{constructor(t){this.key=t,this.Zu=!1}}class jh{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new Bo((t=>Xr(t)),Qr),this.na=new Map,this.sa=new Set,this.ia=new qo(Qs.comparator),this.ra=new Map,this.oa=new Cu,this.ua={},this.aa=new Map,this.ca=ru.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Kh(t,e){const n=uc(t);let i,s;const r=n.ea.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Xu();else{const t=await wu(n.localStore,zr(e));n.isPrimaryClient&&Zu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Gh(n,e,i,"current"===r)}return s}async function Gh(t,e,n,i){t.la=(e,n,i)=>async function(t,e,n,i){let s=e.view.Gu(n);s.ni&&(s=await Tu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return nc(t,e.targetId,o.Hu),o.snapshot}(t,e,n,i);const s=await Tu(t.localStore,e,!0),r=new Uh(e,s.li),o=r.Gu(s.documents),a=ia.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);nc(t,n,u.Hu);const h=new Bh(e,n,r);return t.ea.set(e,h),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),u.snapshot}async function $h(t,e){const n=cs(t),i=n.ea.get(e),s=n.na.get(i.targetId);if(s.length>1)return n.na.set(i.targetId,s.filter((t=>!Qr(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Eu(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ju(n.remoteStore,i.targetId),tc(n,i.targetId)})).catch(ou)):(tc(n,i.targetId),await Eu(n.localStore,i.targetId,!0))}async function Hh(t,e,n){const i=hc(t);try{const t=await function(t,e){const n=cs(t),i=As.now(),s=e.reduce(((t,e)=>t.add(e.key)),Jo());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=Co(t,r.get(t.key));null!=e&&o.push(new Do(t.key,e,lr(e.value.mapValue),Eo.exists(!0)))}return n.Bs.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ua[t.currentUser.toKey()];i||(i=new qo(Is)),i=i.insert(e,n),t.ua[t.currentUser.toKey()]=i}(i,t.batchId,n),await rc(i,t.changes),await lh(i.remoteStore)}catch(t){const e=Ch(t,"Failed to persist write");n.reject(e)}}async function zh(t,e){const n=cs(t);try{const t=await mu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ra.get(e);i&&(hs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Zu=!0:t.modifiedDocuments.size>0?hs(i.Zu):t.removedDocuments.size>0&&(hs(i.Zu),i.Zu=!1))})),await rc(n,t,e)}catch(t){await ou(t)}}function Wh(t,e,n){const i=cs(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ea.forEach(((n,i)=>{const s=i.view.Au(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=cs(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Au(e)&&(i=!0)})),i&&Vh(n)}(i.eventManager,e),t.length&&i.ta.Qo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Qh(t,e,n){const i=cs(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ra.get(e),r=s&&s.key;if(r){let t=new qo(Qs.comparator);t=t.insert(r,dr.newNoDocument(r,Ns.min()));const n=Jo().add(r),s=new na(Ns.min(),new Map,new Go(Is),t,n);await zh(i,s),i.ia=i.ia.remove(r),i.ra.delete(e),sc(i)}else await Eu(i.localStore,e,!1).then((()=>tc(i,e,n))).catch(ou)}async function Xh(t,e){const n=cs(t),i=e.batch.batchId;try{const t=await pu(n.localStore,e);Jh(n,i,null),Zh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await rc(n,t)}catch(t){await ou(t)}}async function Yh(t,e,n){const i=cs(t);try{const t=await function(t,e){const n=cs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.Bs.lookupMutationBatch(t,e).next((e=>(hs(null!==e),i=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,i)))}))}(i.localStore,e);Jh(i,e,n),Zh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await rc(i,t)}catch(n){await ou(n)}}function Zh(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function Jh(t,e,n){const i=cs(t);let s=i.ua[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.ua[i.currentUser.toKey()]=s}}function tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.na.get(e))t.ea.delete(i),n&&t.ta.fa(i,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||ec(t,e)}))}function ec(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(Ju(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),sc(t))}function nc(t,e,n){for(const i of n)i instanceof Oh?(t.oa.addReference(i.key,e),ic(t,i)):i instanceof Fh?(ss("SyncEngine","Document no longer in limbo: "+i.key),t.oa.removeReference(i.key,e),t.oa.containsKey(i.key)||ec(t,i.key)):us()}function ic(t,e){const n=e.key,i=n.path.canonicalString();t.ia.get(n)||t.sa.has(i)||(ss("SyncEngine","New document in limbo: "+n),t.sa.add(i),sc(t))}function sc(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Qs(Ls.fromString(e)),i=t.ca.next();t.ra.set(i,new qh(n)),t.ia=t.ia.insert(n,i),Zu(t.remoteStore,new Za(zr(Br(n.path)),i,2,Ts.A))}}async function rc(t,e,n){const i=cs(t),s=[],r=[],o=[];i.ea.isEmpty()||(i.ea.forEach(((t,a)=>{o.push(i.la(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=hu.Ys(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.ta.Qo(s),await async function(t,e){const n=cs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>za.forEach(e,(e=>za.forEach(e.Hs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>za.forEach(e.Js,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Wa(t))throw t;ss("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.ii.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.ii=n.ii.insert(t,s)}}}(i.localStore,r))}async function oc(t,e){const n=cs(t);if(!n.currentUser.isEqual(e)){ss("SyncEngine","User change. New user:",e.toKey());const t=await fu(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new ds(ls.CANCELLED,e))}))})),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await rc(n,t.hi)}}function ac(t,e){const n=cs(t),i=n.ra.get(e);if(i&&i.Zu)return Jo().add(i.key);{let t=Jo();const i=n.na.get(e);if(!i)return t;for(const e of i){const i=n.ea.get(e);t=t.unionWith(i.view.Ku)}return t}}function uc(t){const e=cs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ac.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qh.bind(null,e),e.ta.Qo=xh.bind(null,e.eventManager),e.ta.fa=Mh.bind(null,e.eventManager),e}function hc(t){const e=cs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yh.bind(null,e),e}class cc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=ju(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return du(this.persistence,new cu,t.initialUser,this.M)}wa(t){return new Ru(xu.zi,this.M)}_a(t){return new Vu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Wh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=oc.bind(null,this.syncEngine),await Th(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new kh}createDatastore(t){const e=ju(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Bu(i));var i;return function(t,e,n,i){return new zu(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Wh(this.syncEngine,t,0),r=Ou.vt()?new Ou:new Pu,new Qu(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new jh(t,e,n,i,s,r);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=cs(t);ss("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Yu(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ts.UNAUTHENTICATED,this.clientId=Ss.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ss("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ss("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ds(ls.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ch(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function pc(t,e){t.asyncQueue.verifyOperationInProgress(),ss("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await fu(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function gc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mc(t);ss("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Eh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Eh(e.remoteStore,n))),t.onlineComponents=e}async function mc(t){return t.offlineComponents||(ss("FirestoreClient","Using default OfflineComponentProvider"),await pc(t,new cc)),t.offlineComponents}async function yc(t){return t.onlineComponents||(ss("FirestoreClient","Using default OnlineComponentProvider"),await gc(t,new lc)),t.onlineComponents}function vc(t){return yc(t).then((t=>t.syncEngine))}async function wc(t){const e=await yc(t),n=e.eventManager;return n.onListen=Kh.bind(null,e.syncEngine),n.onUnlisten=$h.bind(null,e.syncEngine),n}function Ec(t,e,n={}){const i=new fs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new dc({next:n=>{e.enqueueAndForget((()=>Lh(t,o))),n.fromCache&&"server"===i.source?s.reject(new ds(ls.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Ph(n,r,{includeMetadataChanges:!0,Cu:!0});return Rh(t,o)}(await wc(t),t.asyncQueue,e,n,i))),i.promise}const Tc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e,n){if(!n)throw new ds(ls.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sc(t,e,n,i){if(!0===e&&!0===i)throw new ds(ls.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ic(t){if(!Qs.isDocumentKey(t))throw new ds(ls.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(Qs.isDocumentKey(t))throw new ds(ls.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ac(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":us()}function Nc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ds(ls.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ac(t);throw new ds(ls.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ds(ls.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ds(ls.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Sc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _c({}),this._settingsFrozen=!1,t instanceof $s?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ds(ls.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(t.options.projectId)}(t))}get app(){if(!this._app)throw new ds(ls.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ds(ls.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _c(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new gs;switch(t.type){case"gapi":const e=t.client;return hs(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new vs(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ds(ls.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Tc.get(t);e&&(ss("ComponentProvider","Removing Datastore"),Tc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kc(this.firestore,t,this._key)}}class Rc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rc(this.firestore,t,this._query)}}class Lc extends Rc{constructor(t,e,n){super(t,e,Br(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kc(this.firestore,null,new Qs(t))}withConverter(t){return new Lc(this.firestore,t,this._path)}}function xc(t,e,...n){if(t=(0,T.m9)(t),bc("collection","path",e),t instanceof Dc){const i=Ls.fromString(e,...n);return Cc(i),new Lc(t,null,i)}{if(!(t instanceof kc||t instanceof Lc))throw new ds(ls.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ls.fromString(e,...n));return Cc(i),new Lc(t.firestore,null,i)}}function Mc(t,e,...n){if(t=(0,T.m9)(t),1===arguments.length&&(e=Ss.R()),bc("doc","path",e),t instanceof Dc){const i=Ls.fromString(e,...n);return Ic(i),new kc(t,null,new Qs(i))}{if(!(t instanceof kc||t instanceof Lc))throw new ds(ls.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ls.fromString(e,...n));return Ic(i),new kc(t.firestore,t instanceof Lc?t.converter:null,new Qs(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Ku(this,"async_queue_retry"),this.qa=()=>{const t=qu();t&&ss("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=qu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=qu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new fs;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(P){if(!Wa(P))throw P;ss("AsyncQueue","Operation failed with retryable error: "+P)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw rs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const i=Ih.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(i),i}Ka(){this.$a&&us()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}class Pc extends Dc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Vc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uc(this),this._firestoreClient.terminate()}}function Oc(t=(0,v.Mq)()){return(0,v.qX)(t,"firestore").getImmediate()}function Fc(t){return t._firestoreClient||Uc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Gs(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new fc(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ds(ls.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ms(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qc(Ps.fromBase64String(t))}catch(t){throw new ds(ls.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new qc(Ps.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ds(ls.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ds(ls.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Is(this._lat,t._lat)||Is(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=/^__.*__$/;class $c{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Do(t,this.data,this.fieldMask,e,this.fieldTransforms):new _o(t,this.data,e,this.fieldTransforms)}}function Hc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw us()}}class zc{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new zc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Za({path:n,ec:!1});return i.nc(t),i}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Za({path:n,ec:!1});return i.Ya(),i}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return sl(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Hc(this.Xa)&&Gc.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class Wc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||ju(t)}ac(t,e,n,i=!1){return new zc({Xa:t,methodName:e,uc:n,path:Ms.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Qc(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new Wc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xc(t,e,n,i,s,r={}){const o=t.ac(r.merge||r.mergeFields?2:0,e,n,s);tl("Data must be an object, but it was:",o,i);const a=Zc(i,o);let u,h;if(r.merge)u=new Vs(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=el(e,i,n);if(!o.contains(s))throw new ds(ls.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);rl(t,s)||t.push(s)}u=new Vs(t),h=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,h=o.fieldTransforms;return new $c(new cr(a),u,h)}function Yc(t,e){if(Jc(t=(0,T.m9)(t)))return tl("Unsupported field value:",e,t),Zc(t,e);if(t instanceof jc)return function(t,e){if(!Hc(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Yc(s,e.ic(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,T.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return so(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=As.fromDate(t);return{timestampValue:pa(e.M,n)}}if(t instanceof As){const n=new As(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pa(e.M,n)}}if(t instanceof Kc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qc)return{bytesValue:ga(e.M,t._byteString)};if(t instanceof kc){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:va(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${Ac(t)}`)}(t,e)}function Zc(t,e){const n={};return ks(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(t,((t,i)=>{const s=Yc(i,e.tc(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof As||t instanceof Kc||t instanceof qc||t instanceof kc||t instanceof jc)}function tl(t,e,n){if(!Jc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ac(n);throw"an object"===i?e.rc(t+" a custom object"):e.rc(t+" "+i)}}function el(t,e,n){if((e=(0,T.m9)(e))instanceof Bc)return e._internalPath;if("string"==typeof e)return il(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const nl=new RegExp("[~\\*/\\[\\]]");function il(t,e,n){if(e.search(nl)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bc(...e.split("."))._internalPath}catch(i){throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${i}`),o&&(u+=` in document ${s}`),u+=")"),new ds(ls.INVALID_ARGUMENT,a+t+u)}function rl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new al(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ul("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class al extends ol{data(){return super.data()}}function ul(t,e){return"string"==typeof e?il(t,e):e instanceof Bc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cl extends ol{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ul("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ll extends cl{data(t={}){return super.data(t)}}class dl{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new hl(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ll(this._firestore,this._userDataWriter,n.key,n,new hl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ds(ls.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ll(t._firestore,t._userDataWriter,n.doc.key,n.doc,new hl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new ll(t._firestore,t._userDataWriter,e.doc.key,e.doc,new hl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:fl(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return us()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pl(t){if(jr(t)&&0===t.explicitOrderBy.length)throw new ds(ls.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{convertValue(t,e="none"){switch(Xs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Us(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw us()}}convertObject(t,e){const n={};return Ds(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Kc(Us(t.latitude),Us(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=js(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ks(t));default:return null}}convertTimestamp(t){const e=Fs(t);return new As(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ls.fromString(t);hs(ja(n));const i=new $s(n.get(1),n.get(3)),s=new Qs(n.popFirst(5));return i.isEqual(e)||rs(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class yl extends gl{constructor(t){super(),this.firestore=t}convertBytes(t){return new qc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kc(this.firestore,null,e)}}function vl(t){t=Nc(t,Rc);const e=Nc(t.firestore,Pc),n=Fc(e),i=new yl(e);return pl(t._query),Ec(n,t._query).then((n=>new dl(e,i,t,n)))}function wl(t,e,n){t=Nc(t,kc);const i=Nc(t.firestore,Pc),s=ml(t.converter,e,n);return Tl(i,[Xc(Qc(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Eo.none())])}function El(t){return Tl(Nc(t.firestore,Pc),[new xo(t._key,Eo.none())])}function Tl(t,e){return function(t,e){const n=new fs;return t.asyncQueue.enqueueAndForget((async()=>Hh(await vc(t),e,n))),n.promise}(Fc(t),e)}!function(t,e=!0){!function(t){es=t}(v.Jn),(0,v.Xd)(new w.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Pc(i,new ms(t.getProvider("auth-internal")),new Es(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,v.KN)(Ji,"3.4.8",t),(0,v.KN)(Ji,"3.4.8","esm2017")}();var bl=n(5072),Sl=n(5503),Il=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,m.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},Cl=function(t){(0,u.Z)(n,t);var e=(0,h.Z)(n);function n(){var t;(0,a.Z)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return t=e.call.apply(e,[this].concat(s)),(0,g.Z)((0,p.Z)(t),"clientName",""),(0,g.Z)((0,p.Z)(t),"clientNumber",""),(0,g.Z)((0,p.Z)(t),"clientID",""),(0,g.Z)((0,p.Z)(t),"selectedDate",null),(0,g.Z)((0,p.Z)(t),"selectedTime",null),(0,g.Z)((0,p.Z)(t),"selectedServices",""),(0,g.Z)((0,p.Z)(t),"selectedClient",[]),(0,g.Z)((0,p.Z)(t),"selectedSave",[]),(0,g.Z)((0,p.Z)(t),"appointID",""),(0,g.Z)((0,p.Z)(t),"userPhotoURL",""),(0,g.Z)((0,p.Z)(t),"auth",null),(0,g.Z)((0,p.Z)(t),"userInfo","Thanh Tran"),(0,g.Z)((0,p.Z)(t),"message",""),(0,g.Z)((0,p.Z)(t),"chartOptions",{chart:{width:380,type:"pie"},labels:["Pedicure","Shellac Pedicure","Polish Change"],responsive:[{breakpoint:480,options:{chart:{width:700},legend:{position:"right"}}}]}),(0,g.Z)((0,p.Z)(t),"series",[28,34,12]),t}return(0,o.Z)(n,[{key:"mounted",value:function(){this.auth=(0,y.v0)(),(0,y.Aj)(this.auth,(function(t){console.log("Auth changed",t)})),this.readData(),this.SavePrice()}},{key:"readData",value:function(){var t=this;this.auth=(0,y.v0)(),this.auth.onAuthStateChanged((function(e){if(null!=e){var n=e.uid,i=(0,Sl.ZF)(bl.q),s=Oc(i),r=xc(s,n);vl(r).then((function(e){e.forEach((function(e){console.log("From Firestore: ",e.id,e.data());var n=e.data();t.selectedClient.push({name:n.name,phoneNumber:n.phoneNumber,date:n.date,time:n.time,selectedServices:n.service,id:n.id})}))}))}}))}},{key:"SaveData",value:function(){var t=this.selectedClient.map((function(t){return t.id})).indexOf(this.clientID);if(-1==t){this.auth=(0,y.v0)();var e=this.auth.currentUser.uid;this.selectedClient.push({name:this.clientName,phoneNumber:this.clientNumber,date:this.selectedDate,time:this.selectedTime,selectedServices:this.selectedServices,id:this.clientID});var n=(0,Sl.ZF)(bl.q),i=Oc(n);this.selectedClient.forEach(function(){var t=(0,f.Z)(regeneratorRuntime.mark((function t(n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=Mc(i,e,n.id),t.next=3,wl(s,{name:n.name,phoneNum:n.phoneNumber,date:n.date,time:n.time,service:n.selectedServices,id:n.id});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else this.showMessage("Choose different ID for appointment")}},{key:"SavePrice",value:function(){var t=(0,Sl.ZF)(bl.q),e=Oc(t),n=Mc(e,"perdicures","service");wl(n,{name1:"pedicure",name2:"shellac pedicure",name3:"polish change"});var i=Mc(e,"perdicures","price");wl(i,{price1:"28",price2:"34",price3:"12"})}},{key:"DeleteAppoint",value:function(){var t=this;this.auth=(0,y.v0)();var e=this.auth.currentUser.uid,n=(0,Sl.ZF)(bl.q),i=Oc(n),s=Mc(i,e,this.appointID);El(s).then((function(){console.log("appointment deleted"),t.selectedClient.splice(0,t.selectedClient.length),t.readData()}))}},{key:"showMessage",value:function(t){var e=this;this.message=t,setTimeout((function(){e.message=""}),5e3)}},{key:"DeleteAcc",value:function(){var t=this;this.auth=(0,y.v0)();var e=this.auth.currentUser;(0,y.h8)(e).then((function(){t.showMessage("Delete Account. Logging out"),t.outtahere()})).catch((function(e){t.showMessage("Unable to delete account")}))}},{key:"outtahere",value:function(){this.auth&&(0,y.w7)(this.auth),this.$router.push({path:"/"})}}]),n}(c.w3);Cl=Il([c.wA],Cl);var Al,Nl,_l=Cl,Dl=_l,kl=n(1001),Rl=(0,kl.Z)(Dl,l,d,!1,null,"2f163432",null),Ll=Rl.exports,xl=(Al=(0,c.wA)({name:"BookView",components:{Scheduling:Ll}}),Al(Nl=function(t){(0,u.Z)(n,t);var e=(0,h.Z)(n);function n(){return(0,a.Z)(this,n),e.apply(this,arguments)}return(0,o.Z)(n)}(c.w3))||Nl),Ml=xl,Vl=(0,kl.Z)(Ml,s,r,!1,null,null,null),Pl=Vl.exports},8533:function(t,e,n){"use strict";var i=n(2092).forEach,s=n(9341),r=s("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},9341:function(t,e,n){"use strict";var i=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){return 1},1)}))}},1249:function(t,e,n){"use strict";var i=n(2109),s=n(2092).map,r=n(1194),o=r("map");i({target:"Array",proto:!0,forced:!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},561:function(t,e,n){"use strict";var i=n(2109),s=n(7854),r=n(1400),o=n(9303),a=n(6244),u=n(7908),h=n(5417),c=n(6135),l=n(1194),d=l("splice"),f=s.TypeError,p=Math.max,g=Math.min,m=9007199254740991,y="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,i,s,l,d,v,w=u(this),E=a(w),T=r(t,E),b=arguments.length;if(0===b?n=i=0:1===b?(n=0,i=E-T):(n=b-2,i=g(p(o(e),0),E-T)),E+n-i>m)throw f(y);for(s=h(w,i),l=0;l<i;l++)d=T+l,d in w&&c(s,l,w[d]);if(s.length=i,n<i){for(l=T;l<E-i;l++)d=l+i,v=l+n,d in w?w[v]=w[d]:delete w[v];for(l=E;l>E-i+n;l--)delete w[l-1]}else if(n>i)for(l=E-i;l>T;l--)d=l+i-1,v=l+n-1,d in w?w[v]=w[d]:delete w[v];for(l=0;l<n;l++)w[l+T]=arguments[l+2];return w.length=E-i+n,s}})},8309:function(t,e,n){var i=n(9781),s=n(6530).EXISTS,r=n(1702),o=n(3070).f,a=Function.prototype,u=r(a.toString),h=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=r(h.exec),l="name";i&&!s&&o(a,l,{configurable:!0,get:function(){try{return c(h,u(this))[1]}catch(t){return""}}})},4747:function(t,e,n){var i=n(7854),s=n(8324),r=n(8509),o=n(8533),a=n(8880),u=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var h in s)s[h]&&u(i[h]&&i[h].prototype);u(r)}}]);
//# sourceMappingURL=262-legacy.f965b425.js.map