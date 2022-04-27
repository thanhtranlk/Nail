"use strict";(self["webpackChunkfirebase_login"]=self["webpackChunkfirebase_login"]||[]).push([[262],{262:function(t,e,n){n.r(e),n.d(e,{default:function(){return Dl}});var s,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"booking"},[n("Scheduling")],1)},r=[],o=n(929),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientName,expression:"clientName"}],attrs:{id:"name",type:"text"},domProps:{value:t.clientName},on:{input:function(e){e.target.composing||(t.clientName=e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Enter Your Name")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientNumber,expression:"clientNumber"}],attrs:{id:"phone",type:"string"},domProps:{value:t.clientNumber},on:{input:function(e){e.target.composing||(t.clientNumber=e.target.value)}}}),n("label",{attrs:{for:"phone"}},[t._v("Enter Your Phone Number")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clientID,expression:"clientID"}],attrs:{id:"phone",type:"string"},domProps:{value:t.clientID},on:{input:function(e){e.target.composing||(t.clientID=e.target.value)}}}),n("label",{attrs:{for:"phone"}},[t._v("Enter Your Appoinment ID")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],attrs:{id:"day",type:"date"},domProps:{value:t.selectedDate},on:{input:function(e){e.target.composing||(t.selectedDate=e.target.value)}}}),n("label",{attrs:{for:"day"}},[t._v("Select a Day")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedTime,expression:"selectedTime"}],attrs:{id:"time",type:"time"},domProps:{value:t.selectedTime},on:{input:function(e){e.target.composing||(t.selectedTime=e.target.value)}}}),n("label",{attrs:{for:"time"}},[t._v("Select a time")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedServices,expression:"selectedServices"}],attrs:{id:"service",type:"text"},domProps:{value:t.selectedServices},on:{input:function(e){e.target.composing||(t.selectedServices=e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Type in service")])]),n("div",[n("button",{on:{click:t.SaveData}},[t._v("Save")]),n("p",[t._v("Enter different ID if data not saved")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointID,expression:"appointID"}],attrs:{type:"text",placeholder:"Enter your appoinemt ID"},domProps:{value:t.appointID},on:{input:function(e){e.target.composing||(t.appointID=e.target.value)}}}),n("button",{on:{click:t.DeleteAppoint}},[t._v("Cancel_Appointment")])]),n("div",[n("button",{on:{click:t.DeleteAcc}},[t._v("Delete_Account")]),n("button",{on:{click:t.outtahere}},[t._v("Logout")])]),t._l(t.selectedClient,(function(e){return n("div",{key:e.phoneNumber,attrs:{id:"face"}},[n("div",[t._v("Name: "+t._s(e.name))]),n("div",[t._v("ID: "+t._s(e.id))]),n("div",[t._v("Service: "+t._s(e.selectedServices))]),n("div",[t._v(t._s(e.date))]),n("h3",{staticClass:"truncate"},[t._v(t._s(e.time))])])})),n("div",{staticClass:"pie"},[n("my-apexchart",{attrs:{width:"340",type:"pie",options:t.chartOptions,series:t.series}})],1),n("span",{staticClass:"bottom"},[n("router-link",{attrs:{to:"/about"}},[t._v(" About")]),t._v(" | "),n("router-link",{attrs:{to:"/booking"}},[t._v(" Book an Appointment")]),t._v(" | "),n("router-link",{attrs:{to:"/services"}},[t._v(" Services")]),t._v(" | "),n("router-link",{attrs:{to:"/makeup"}},[t._v(" Makeup")])],1)],2)])},u=[],h=n(796),c=n(319),l=n(238),d=n(463),f=n(333),p=n(444),g="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},m={},y=y||{},v=g||self;function w(){}function E(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function T(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function b(t){return Object.prototype.hasOwnProperty.call(t,S)&&t[S]||(t[S]=++I)}var S="closure_uid_"+(1e9*Math.random()>>>0),I=0;function C(t,e,n){return t.call.apply(t.bind,arguments)}function A(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function N(t,e,n){return N=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C:A,N.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function D(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function k(){this.s=this.s,this.o=this.o}var R=0,L={};k.prototype.s=!1,k.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=R)){var t=b(this);delete L[t]}},k.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},M=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function V(t){t:{var e=Jn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function P(t){return Array.prototype.concat.apply([],arguments)}function O(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function F(t){return/^[\s\xa0]*$/.test(t)}var U,B=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function q(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var K=v.navigator;if(K){var G=K.userAgent;if(G){U=G;break t}}U=""}function $(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function H(t){const e={};for(const n in t)e[n]=t[n];return e}var z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<z.length;e++)n=z[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Q(t){return Q[" "](t),t}function X(t){var e=ht;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Q[" "]=w;var Y,Z=q(U,"Opera"),J=q(U,"Trident")||q(U,"MSIE"),tt=q(U,"Edge"),et=tt||J,nt=q(U,"Gecko")&&!(q(U.toLowerCase(),"webkit")&&!q(U,"Edge"))&&!(q(U,"Trident")||q(U,"MSIE"))&&!q(U,"Edge"),st=q(U.toLowerCase(),"webkit")&&!q(U,"Edge");function it(){var t=v.document;return t?t.documentMode:void 0}t:{var rt="",ot=function(){var t=U;return nt?/rv:([^\);]+)(\)|;)/.exec(t):tt?/Edge\/([\d\.]+)/.exec(t):J?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):st?/WebKit\/(\S+)/.exec(t):Z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(ot&&(rt=ot?ot[1]:""),J){var at=it();if(null!=at&&at>parseFloat(rt)){Y=String(at);break t}}Y=rt}var ut,ht={};function ct(){return X((function(){let t=0;const e=B(String(Y)).split("."),n=B("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||j(0==i[2].length,0==r[2].length)||j(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(v.document&&J){var lt=it();ut=lt||(parseInt(Y,10)||void 0)}else ut=void 0;var dt=ut,ft=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",w,e),v.removeEventListener("test",w,e)}catch(n){}return t}();function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function gt(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nt){t:{try{Q(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:mt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gt.Z.h.call(this)}}pt.prototype.h=function(){this.defaultPrevented=!0},D(gt,pt);var mt={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),vt=0;function wt(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++vt,this.ca=this.fa=!1}function Et(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Tt(t){this.src=t,this.g={},this.h=0}function bt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=x(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Et(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function St(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Tt.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=St(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new wt(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var It="closure_lm_"+(1e6*Math.random()|0),Ct={};function At(t,e,n,s,i){if(s&&s.once)return Dt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)At(t,e[r],n,s,i);return null}return n=Pt(n),t&&t[yt]?t.N(e,n,T(s)?!!s.capture:!!s,i):Nt(t,e,n,!1,s,i)}function Nt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=T(i)?!!i.capture:!!i,a=Mt(t);if(a||(t[It]=a=new Tt(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=_t(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ft||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Lt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=xt;return t}function Dt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Dt(t,e[r],n,s,i);return null}return n=Pt(n),t&&t[yt]?t.O(e,n,T(s)?!!s.capture:!!s,i):Nt(t,e,n,!0,s,i)}function kt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)kt(t,e[r],n,s,i);else s=T(s)?!!s.capture:!!s,n=Pt(n),t&&t[yt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=St(r,n,s,i),-1<n&&(Et(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=St(e,n,s,i)),(n=-1<t?e[t]:null)&&Rt(n))}function Rt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[yt])bt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Lt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Mt(e))?(bt(n,t),0==n.h&&(n.src=null,e[It]=null)):Et(t)}}}function Lt(t){return t in Ct?Ct[t]:Ct[t]="on"+t}function xt(t,e){if(t.ca)t=!0;else{e=new gt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Rt(t),t=n.call(s,e)}return t}function Mt(t){return t=t[It],t instanceof Tt?t:null}var Vt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pt(t){return"function"===typeof t?t:(t[Vt]||(t[Vt]=function(e){return t.handleEvent(e)}),t[Vt])}function Ot(){k.call(this),this.i=new Tt(this),this.P=this,this.I=null}function Ft(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(s,t),W(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ut(o,s,!0,e)&&i}if(o=e.g=t,i=Ut(o,s,!0,e)&&i,i=Ut(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ut(o,s,!1,e)&&i}function Ut(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&bt(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}D(Ot,k),Ot.prototype[yt]=!0,Ot.prototype.removeEventListener=function(t,e,n,s){kt(this,t,e,n,s)},Ot.prototype.M=function(){if(Ot.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Et(n[s]);delete e.g[t],e.h--}}this.I=null},Ot.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ot.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Bt=v.JSON.stringify;function qt(){var t=Xt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Gt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Kt,Gt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new $t),(t=>t.reset()));class $t{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ht(t){v.setTimeout((()=>{throw t}),0)}function zt(t,e){Kt||Wt(),Qt||(Kt(),Qt=!0),Xt.add(t,e)}function Wt(){var t=v.Promise.resolve(void 0);Kt=function(){t.then(Yt)}}var Qt=!1,Xt=new jt;function Yt(){for(var t;t=qt();){try{t.h.call(t.g)}catch(n){Ht(n)}var e=Gt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qt=!1}function Zt(t,e){Ot.call(this),this.h=t||1,this.g=e||v,this.j=N(this.kb,this),this.l=Date.now()}function Jt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function te(t,e,n){if("function"===typeof t)n&&(t=N(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=N(t.handleEvent,t)}return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function ee(t){t.g=te((()=>{t.g=null,t.i&&(t.i=!1,ee(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}D(Zt,Ot),s=Zt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ft(this,"tick"),this.da&&(Jt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Zt.Z.M.call(this),Jt(this),delete this.g};class ne extends k{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ee(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(t){k.call(this),this.h=t,this.g={}}D(se,k);var ie=[];function re(t,e,n,s){Array.isArray(n)||(n&&(ie[0]=n.toString()),n=ie);for(var i=0;i<n.length;i++){var r=At(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function oe(t){$(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Rt(t)}),t),t.g={}}function ae(){this.g=!0}function ue(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function he(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ce(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+de(t,n)+(s?" "+s:"")}))}function le(t,e){t.info((function(){return"TIMEOUT: "+e}))}function de(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Bt(n)}catch(a){return e}}se.prototype.M=function(){se.Z.M.call(this),oe(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ae.prototype.Aa=function(){this.g=!1},ae.prototype.info=function(){};var fe={},pe=null;function ge(){return pe=pe||new Ot}function me(t){pt.call(this,fe.Ma,t)}function ye(t){const e=ge();Ft(e,new me(e,t))}function ve(t,e){pt.call(this,fe.STAT_EVENT,t),this.stat=e}function we(t){const e=ge();Ft(e,new ve(e,t))}function Ee(t,e){pt.call(this,fe.Na,t),this.size=e}function Te(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return v.setTimeout((function(){t()}),e)}fe.Ma="serverreachability",D(me,pt),fe.STAT_EVENT="statevent",D(ve,pt),fe.Na="timingevent",D(Ee,pt);var be={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Se={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ie(){}function Ce(t){return t.h||(t.h=t.i())}function Ae(){}Ie.prototype.h=null;var Ne,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function De(){pt.call(this,"d")}function ke(){pt.call(this,"c")}function Re(){}function Le(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new se(this),this.P=Me,t=et?125:void 0,this.W=new Zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xe}function xe(){this.i=null,this.g="",this.h=!1}D(De,pt),D(ke,pt),D(Re,Ie),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},Ne=new Re;var Me=45e3,Ve={},Pe={};function Oe(t,e,n){t.K=1,t.v=hn(nn(e)),t.s=n,t.U=!0,Fe(t,null)}function Fe(t,e){t.F=Date.now(),je(t),t.A=nn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),In(n.h,"t",s),t.C=0,n=t.l.H,t.h=new xe,t.g=ks(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ne(N(t.Ia,t,t.g),t.O)),re(t.V,t.g,"readystatechange",t.gb),e=t.H?H(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ye(1),ue(t.j,t.u,t.A,t.m,t.X,t.s)}function Ue(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Be(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=qe(t,n),s==Pe){4==e&&(t.o=4,we(14),i=!1),ce(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ve){t.o=4,we(15),ce(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ce(t.j,t.m,s,null),ze(t,s)}Ue(t)&&s!=Pe&&s!=Ve&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,we(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),bs(e),e.L=!0,we(11))):(ce(t.j,t.m,n,"[Invalid Chunked Response]"),He(t),$e(t))}function qe(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Pe:(n=Number(e.substring(n,s)),isNaN(n)?Ve:(s+=1,s+n>e.length?Pe:(e=e.substr(s,n),t.C=s+n,e)))}function je(t){t.Y=Date.now()+t.P,Ke(t,t.P)}function Ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Te(N(t.eb,t),e)}function Ge(t){t.B&&(v.clearTimeout(t.B),t.B=null)}function $e(t){0==t.l.G||t.I||Cs(t.l,t)}function He(t){Ge(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Jt(t.W),oe(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ze(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ln(n.i,t)))if(n.I=t.N,!t.J&&Ln(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Is(n),ds(n)}Ts(n),we(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Te(N(n.ab,n),6e3));if(1>=Rn(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Ns(n,11)}else if((t.J||n.g==t)&&Is(n),!F(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"===typeof c&&0<c&&(s=1.5*c,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(q(t,"spdy")||q(t,"quic")||q(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(xn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,un(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Ds(s,s.H?s.la:null,s.W),o.J){Mn(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Ge(a),je(a)),s.g=o}else Es(s);0<n.l.length&&gs(n)}else"stop"!=h[0]&&"close"!=h[0]||Ns(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Ns(n,7):ls(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}ye(4)}catch(h){}}function We(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(E(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Qe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(E(t)||"string"===typeof t)M(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(E(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=We(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Xe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Xe)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ye(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ze(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],Ze(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Le.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==rs(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const c=rs(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>c)&&(3!=c||et||this.g&&(this.h.h||this.g.ga()||os(this.g)))){this.I||4!=c||7==e||ye(8==e||0>=l?3:2),Ge(this);var n=this.g.ba();this.N=n;e:if(Ue(this)){var s=os(this.g);t="";var i=s.length,r=4==rs(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){He(this),$e(this);var o="";break e}this.h.i=new v.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,he(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,we(12),He(this),$e(this);break t}ce(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ze(this,n)}this.U?(Be(this,c,o),et&&this.i&&3==c&&(re(this.V,this.W,"tick",this.fb),this.W.start())):(ce(this.j,this.m,o,null),ze(this,o)),4==c&&He(this),this.i&&!this.I&&(4==c?Cs(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),He(this),$e(this)}}}catch(c){}},s.fb=function(){if(this.g){var t=rs(this.g),e=this.g.ga();this.C<e.length&&(Ge(this),Be(this,t,e),this.i&&4!=t&&je(this))}},s.cancel=function(){this.I=!0,He(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(le(this.j,this.A),2!=this.K&&(ye(3),we(17)),He(this),this.o=2,$e(this)):Ke(this,this.Y-t)},s=Xe.prototype,s.R=function(){Ye(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return Ye(this),this.g.concat()},s.get=function(t,e){return Ze(this.h,t)?this.h[t]:e},s.set=function(t,e){Ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Je=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tn(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function en(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof en){this.g=void 0!==e?e:t.g,sn(this,t.j),this.s=t.s,rn(this,t.i),on(this,t.m),this.l=t.l,e=t.h;var n=new En;n.i=e.i,e.g&&(n.g=new Xe(e.g),n.h=e.h),an(this,n),this.o=t.o}else t&&(n=String(t).match(Je))?(this.g=!!e,sn(this,n[1]||"",!0),this.s=dn(n[2]||""),rn(this,n[3]||"",!0),on(this,n[4]),this.l=dn(n[5]||"",!0),an(this,n[6]||"",!0),this.o=dn(n[7]||"")):(this.g=!!e,this.h=new En(null,this.g))}function nn(t){return new en(t)}function sn(t,e,n){t.j=n?dn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rn(t,e,n){t.i=n?dn(e,!0):e}function on(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function an(t,e,n){e instanceof En?(t.h=e,An(t.h,t.g)):(n||(e=fn(e,vn)),t.h=new En(e,t.g))}function un(t,e,n){t.h.set(e,n)}function hn(t){return un(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cn(t){return t instanceof en?nn(t):new en(t,void 0)}function ln(t,e,n,s){var i=new en(null,void 0);return t&&sn(i,t),e&&rn(i,e),n&&on(i,n),s&&(i.l=s),i}function dn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,pn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}en.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fn(e,gn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(fn(e,gn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(fn(n,"/"==n.charAt(0)?yn:mn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fn(n,wn)),t.join("")};var gn=/[#\/\?@]/g,mn=/[#\?:]/g,yn=/[#\?]/g,vn=/[#\?@]/g,wn=/#/g;function En(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Xe,t.h=0,t.i&&tn(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function bn(t,e){Tn(t),e=Cn(t,e),Ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ye(t)))}function Sn(t,e){return Tn(t),e=Cn(t,e),Ze(t.g.h,e)}function In(t,e,n){bn(t,e),0<n.length&&(t.i=null,t.g.set(Cn(t,e),O(n)),t.h+=n.length)}function Cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function An(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(bn(this,e),In(this,n,t))}),t)),t.j=e}s=En.prototype,s.add=function(t,e){Tn(this),this.i=null,t=Cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){Tn(this),this.g.forEach((function(n,s){M(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){Tn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},s.R=function(t){Tn(this);var e=[];if("string"===typeof t)Sn(this,t)&&(e=P(e,this.g.get(Cn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=P(e,t[n])}return e},s.set=function(t,e){return Tn(this),this.i=null,t=Cn(this,t),Sn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var Nn=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||Dn,v.PerformanceNavigationTiming?(t=v.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(v.g&&v.g.Ea&&v.g.Ea()&&v.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dn=10;function kn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Rn(t){return t.h?1:t.g?t.g.size:0}function Ln(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xn(t,e){t.g?t.g.add(e):t.h=e}function Mn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Vn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return O(t.i)}function Pn(){}function On(){this.g=new Pn}function Fn(t,e,n){const s=n||"";try{Qe(t,(function(t,n){let i=t;T(t)&&(i=Bt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Un(t,e){const n=new ae;if(v.Image){const s=new Image;s.onload=_(Bn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=_(Bn,n,s,"TestLoadImage: error",!1,e),s.onabort=_(Bn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=_(Bn,n,s,"TestLoadImage: timeout",!1,e),v.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Bn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function qn(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){Ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=Vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Pn.prototype.stringify=function(t){return v.JSON.stringify(t,void 0)},Pn.prototype.parse=function(t){return v.JSON.parse(t,void 0)},D(qn,Ie),qn.prototype.g=function(){return new jn(this.l,this.j)},qn.prototype.i=function(t){return function(){return t}}({}),D(jn,Ot);var Kn=0;function Gn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function $n(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hn(t)}function Hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=jn.prototype,s.open=function(t,e){if(this.readyState!=Kn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||v).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$n(this)),this.readyState=Kn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof v.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$n(this):Hn(this),3==this.readyState&&Gn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,$n(this))},s.Ta=function(t){this.g&&(this.response=t,$n(this))},s.ha=function(){this.g&&$n(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var zn=v.JSON.parse;function Wn(t){Ot.call(this),this.headers=new Xe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qn,this.K=this.L=!1}D(Wn,Ot);var Qn="",Xn=/^https?$/i,Yn=["POST","PUT"];function Zn(t){return J&&ct()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Jn(t){return"content-type"==t.toLowerCase()}function ts(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,es(t),ss(t)}function es(t){t.D||(t.D=!0,Ft(t,"complete"),Ft(t,"error"))}function ns(t){if(t.h&&"undefined"!=typeof y&&(!t.C[1]||4!=rs(t)||2!=t.ba()))if(t.v&&4==rs(t))te(t.Fa,0,t);else if(Ft(t,"readystatechange"),4==rs(t)){t.h=!1;try{const u=t.ba();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var i=String(t.H).match(Je)[1]||null;if(!i&&v.self&&v.self.location){var r=v.self.location.protocol;i=r.substr(0,r.length-1)}s=!Xn.test(i?i.toLowerCase():"")}n=s}if(n)Ft(t,"complete"),Ft(t,"success");else{t.m=6;try{var o=2<rs(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",es(t)}}finally{ss(t)}}}function ss(t,e){if(t.g){is(t);const s=t.g,i=t.C[0]?w:null;t.g=null,t.C=null,e||Ft(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function is(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(v.clearTimeout(t.A),t.A=null)}function rs(t){return t.g?t.g.readyState:0}function os(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function as(t){let e="";return $(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function us(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=as(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):un(t,e,n))}function hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cs(t){this.za=0,this.l=[],this.h=new ae,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=hs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=hs("baseRetryDelayMs",5e3,t),this.$a=hs("retryDelaySeedMs",1e4,t),this.Ya=hs("forwardChannelMaxRetries",2,t),this.ra=hs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new On,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ls(t){if(fs(t),3==t.G){var e=t.V++,n=nn(t.F);un(n,"SID",t.J),un(n,"RID",e),un(n,"TYPE","terminate"),vs(t,n),e=new Le(t,t.h,e,void 0),e.K=2,e.v=hn(nn(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(e.v.toString(),"")),!n&&v.Image&&((new Image).src=e.v,n=!0),n||(e.g=ks(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}_s(t)}function ds(t){t.g&&(bs(t),t.g.cancel(),t.g=null)}function fs(t){ds(t),t.u&&(v.clearTimeout(t.u),t.u=null),Is(t),t.i.cancel(),t.m&&("number"===typeof t.m&&v.clearTimeout(t.m),t.m=null)}function ps(t,e){t.l.push(new Nn(t.Za++,e)),3==t.G&&gs(t)}function gs(t){kn(t.i)||t.m||(t.m=!0,zt(t.Ha,t),t.C=0)}function ms(t,e){return!(Rn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=Te(N(t.Ha,t,e),As(t,t.C)),t.C++,!0))}function ys(t,e){var n;n=e?e.m:t.V++;const s=nn(t.F);un(s,"SID",t.J),un(s,"RID",n),un(s,"AID",t.U),vs(t,s),t.o&&t.s&&us(s,t.o,t.s),n=new Le(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ws(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xn(t.i,n),Oe(n,s,e)}function vs(t,e){t.j&&Qe({},(function(t,n){un(e,n,t)}))}function ws(t,e,n){n=Math.min(t.l.length,n);var s=t.j?N(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Fn(a,t,"req"+n+"_")}catch(ii){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Es(t){t.g||t.u||(t.Y=1,zt(t.Ga,t),t.A=0)}function Ts(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Te(N(t.Ga,t),As(t,t.A)),t.A++,!0)}function bs(t){null!=t.B&&(v.clearTimeout(t.B),t.B=null)}function Ss(t){t.g=new Le(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);un(e,"RID","rpc"),un(e,"SID",t.J),un(e,"CI",t.N?"0":"1"),un(e,"AID",t.U),vs(t,e),un(e,"TYPE","xmlhttp"),t.o&&t.s&&us(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=hn(nn(e)),n.s=null,n.U=!0,Fe(n,t)}function Is(t){null!=t.v&&(v.clearTimeout(t.v),t.v=null)}function Cs(t,e){var n=null;if(t.g==e){Is(t),bs(t),t.g=null;var s=2}else{if(!Ln(t.i,e))return;n=e.D,Mn(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ge(),Ft(s,new Ee(s,n,e,i)),gs(t)}else Es(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&ms(t,e)||2==s&&Ts(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ns(t,5);break;case 4:Ns(t,10);break;case 3:Ns(t,6);break;default:Ns(t,2)}}function As(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ns(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=N(t.jb,t);n||(n=new en("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||sn(n,"https"),hn(n)),Un(n.toString(),s)}else we(2);t.G=0,t.j&&t.j.va(e),_s(t),fs(t)}function _s(t){t.G=0,t.I=-1,t.j&&(0==Vn(t.i).length&&0==t.l.length||(t.i.i.length=0,O(t.l),t.l.length=0),t.j.ua())}function Ds(t,e,n){let s=cn(n);if(""!=s.i)e&&rn(s,e+"."+s.i),on(s,s.m);else{const t=v.location;s=ln(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&$(t.aa,(function(t,e){un(s,e,t)})),e=t.D,n=t.sa,e&&n&&un(s,e,n),un(s,"VER",t.ma),vs(t,s),s}function ks(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Wn(new qn({ib:!0})):new Wn(t.qa),e.L=t.H,e}function Rs(){}function Ls(){if(J&&!(10<=Number(dt)))throw Error("Environmental error: no available transport.")}function xs(t,e){Ot.call(this),this.g=new cs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!F(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!F(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}function Ms(t){De.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Vs(){ke.call(this),this.status=1}function Ps(t){this.g=t}s=Wn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ne.g(),this.C=this.u?Ce(this.u):Ce(Ne),this.g.onreadystatechange=N(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void ts(this,r)}t=n||"";const i=new Xe(this.headers);s&&Qe(s,(function(t,e){i.set(e,t)})),s=V(i.T()),n=v.FormData&&t instanceof v.FormData,!(0<=x(Yn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{is(this),0<this.B&&((this.K=Zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=N(this.pa,this)):this.A=te(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ts(this,r)}},s.pa=function(){"undefined"!=typeof y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ft(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ft(this,"complete"),Ft(this,"abort"),ss(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ss(this,!0)),Wn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?ns(this):this.cb())},s.cb=function(){ns(this)},s.ba=function(){try{return 2<rs(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),zn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=cs.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Le(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=H(r),W(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ws(this,i,e),n=nn(this.F),un(n,"RID",t),un(n,"CVER",22),this.D&&un(n,"X-HTTP-Session-Id",this.D),vs(this,n),this.o&&r&&us(n,this.o,r),xn(this.i,i),this.Ra&&un(n,"TYPE","init"),this.ja?(un(n,"$req",e),un(n,"SID","null"),i.$=!0,Oe(i,n,null)):Oe(i,n,e),this.G=2}}else 3==this.G&&(t?ys(this,t):0==this.l.length||kn(this.i)||ys(this))},s.Ga=function(){if(this.u=null,Ss(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Te(N(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,we(10),ds(this),Ss(this))},s.ab=function(){null!=this.v&&(this.v=null,ds(this),Ts(this),we(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),we(2)):(this.h.info("Failed to ping google.com"),we(1))},s=Rs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ls.prototype.g=function(t,e){return new xs(t,e)},D(xs,Ot),xs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zt(N(t.hb,t,e))),we(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ds(t,null,t.W),gs(t)},xs.prototype.close=function(){ls(this.g)},xs.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ps(this.g,e)}else this.v?(e={},e.__data__=Bt(t),ps(this.g,e)):ps(this.g,t)},xs.prototype.M=function(){this.g.j=null,delete this.j,ls(this.g),delete this.g,xs.Z.M.call(this)},D(Ms,De),D(Vs,ke),D(Ps,Rs),Ps.prototype.xa=function(){Ft(this.g,"a")},Ps.prototype.wa=function(t){Ft(this.g,new Ms(t))},Ps.prototype.va=function(t){Ft(this.g,new Vs(t))},Ps.prototype.ua=function(){Ft(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,xs.prototype.send=xs.prototype.u,xs.prototype.open=xs.prototype.m,xs.prototype.close=xs.prototype.close,be.NO_ERROR=0,be.TIMEOUT=8,be.HTTP_ERROR=6,Se.COMPLETE="complete",Ae.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Ot.prototype.listen=Ot.prototype.N,Wn.prototype.listenOnce=Wn.prototype.O,Wn.prototype.getLastError=Wn.prototype.La,Wn.prototype.getLastErrorCode=Wn.prototype.Da,Wn.prototype.getStatus=Wn.prototype.ba,Wn.prototype.getResponseJson=Wn.prototype.Qa,Wn.prototype.getResponseText=Wn.prototype.ga,Wn.prototype.send=Wn.prototype.ea;var Os=m.createWebChannelTransport=function(){return new Ls},Fs=m.getStatEventTarget=function(){return ge()},Us=m.ErrorCode=be,Bs=m.EventType=Se,qs=m.Event=fe,js=m.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ks=m.FetchXmlHttpFactory=qn,Gs=m.WebChannel=Ae,$s=m.XhrIo=Wn;const Hs="@firebase/firestore";
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
 */class zs{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}zs.UNAUTHENTICATED=new zs(null),zs.GOOGLE_CREDENTIALS=new zs("google-credentials-uid"),zs.FIRST_PARTY=new zs("first-party-uid"),zs.MOCK_USER=new zs("mock-user");
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
let Ws="9.6.11";
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
 */const Qs=new f.Yd("@firebase/firestore");function Xs(){return Qs.logLevel}function Ys(t,...e){if(Qs.logLevel<=f["in"].DEBUG){const n=e.map(ti);Qs.debug(`Firestore (${Ws}): ${t}`,...n)}}function Zs(t,...e){if(Qs.logLevel<=f["in"].ERROR){const n=e.map(ti);Qs.error(`Firestore (${Ws}): ${t}`,...n)}}function Js(t,...e){if(Qs.logLevel<=f["in"].WARN){const n=e.map(ti);Qs.warn(`Firestore (${Ws}): ${t}`,...n)}}function ti(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function ei(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw Zs(e),new Error(e)}function ni(t,e){t||ei()}function si(t,e){return t}
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
 */const ii={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ri extends p.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class oi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ai{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ui{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(zs.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(t){this.t=t,this.currentUser=zs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new oi,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ys("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ys("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new oi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ys("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ni("string"==typeof e.accessToken),new ai(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ni(null===t||"string"==typeof t),new zs(t)}}class ci{constructor(t,e,n){this.type="FirstParty",this.user=zs.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class li{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ci(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(zs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class di{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ys("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ys("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ys("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Ys("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ni("string"==typeof t.token),this.p=t.token,new di(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class pi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function gi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */pi.A=-1;class mi{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=gi(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function yi(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class wi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ri(ii.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ri(ii.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ri(ii.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ri(ii.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wi.fromMillis(Date.now())}static fromDate(t){return wi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?yi(this.nanoseconds,t.nanoseconds):yi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new wi(0,0))}static max(){return new Ei(new wi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Ti(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Si(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Ii{constructor(t,e,n){void 0===e?e=0:e>t.length&&ei(),void 0===n?n=t.length-e:n>t.length-e&&ei(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ii.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ci extends Ii{construct(t,e,n){return new Ci(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ri(ii.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ci(e)}static emptyPath(){return new Ci([])}}const Ai=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ni extends Ii{construct(t,e,n){return new Ni(t,e,n)}static isValidIdentifier(t){return Ai.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ni.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ni(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new ri(ii.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ri(ii.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ri(ii.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new ri(ii.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ni(e)}static emptyPath(){return new Ni([])}}
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
 */class _i{constructor(t){this.fields=t,t.sort(Ni.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Di{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Di(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Di(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Di.EMPTY_BYTE_STRING=new Di("");const ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(ni(!!t),"string"==typeof t){let e=0;const n=ki.exec(t);if(ni(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Li(t.seconds),nanos:Li(t.nanos)}}function Li(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function xi(t){return"string"==typeof t?Di.fromBase64String(t):Di.fromUint8Array(t)}
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
 */function Mi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vi(t){const e=t.mapValue.fields.__previous_value__;return Mi(e)?Vi(e):e}function Pi(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new wi(e.seconds,e.nanos)}
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
 */class Oi{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fi&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Ui(t){return null==t}function Bi(t){return 0===t&&1/t==-1/0}function qi(t){return"number"==typeof t&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class ji{constructor(t){this.path=t}static fromPath(t){return new ji(Ci.fromString(t))}static fromName(t){return new ji(Ci.fromString(t).popFirst(5))}static empty(){return new ji(Ci.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ci.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ci.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ji(new Ci(t.slice()))}}
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
 */function Ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mi(t)?4:nr(t)?9:10:ei()}function Gi(t,e){if(t===e)return!0;const n=Ki(t);if(n!==Ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ri(t.timestampValue),s=Ri(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return xi(t.bytesValue).isEqual(xi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Li(t.geoPointValue.latitude)===Li(e.geoPointValue.latitude)&&Li(t.geoPointValue.longitude)===Li(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Li(t.integerValue)===Li(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Li(t.doubleValue),s=Li(e.doubleValue);return n===s?Bi(n)===Bi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Gi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ti(n)!==Ti(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Gi(n[i],s[i])))return!1;return!0}(t,e);default:return ei()}}function $i(t,e){return void 0!==(t.values||[]).find((t=>Gi(t,e)))}function Hi(t,e){if(t===e)return 0;const n=Ki(t),s=Ki(e);if(n!==s)return yi(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return yi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Li(t.integerValue||t.doubleValue),s=Li(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return zi(t.timestampValue,e.timestampValue);case 4:return zi(Pi(t),Pi(e));case 5:return yi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=xi(t),s=xi(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=yi(n[i],s[i]);if(0!==t)return t}return yi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=yi(Li(t.latitude),Li(e.latitude));return 0!==n?n:yi(Li(t.longitude),Li(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Hi(n[i],s[i]);if(t)return t}return yi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=yi(s[o],r[o]);if(0!==t)return t;const e=Hi(n[s[o]],i[r[o]]);if(0!==e)return e}return yi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw ei()}}function zi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return yi(t,e);const n=Ri(t),s=Ri(e),i=yi(n.seconds,s.seconds);return 0!==i?i:yi(n.nanos,s.nanos)}function Wi(t){return Qi(t)}function Qi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ri(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ji.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Qi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Qi(t.fields[i])}`;return n+"}"}(t.mapValue):ei();var e,n}function Xi(t){return!!t&&"integerValue"in t}function Yi(t){return!!t&&"arrayValue"in t}function Zi(t){return!!t&&"nullValue"in t}function Ji(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tr(t){return!!t&&"mapValue"in t}function er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=er(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class sr{constructor(t){this.value=t}static empty(){return new sr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=er(e)}setAll(t){let e=Ni.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=er(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){bi(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new sr(er(this.value))}}function ir(t){const e=[];return bi(t.fields,((t,n)=>{const s=new Ni([t]);if(tr(n)){const t=ir(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new _i(e)
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
 */}class rr{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new rr(t,0,Ei.min(),Ei.min(),sr.empty(),0)}static newFoundDocument(t,e,n){return new rr(t,1,e,Ei.min(),n,0)}static newNoDocument(t,e){return new rr(t,2,e,Ei.min(),sr.empty(),0)}static newUnknownDocument(t,e){return new rr(t,3,e,Ei.min(),sr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof rr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class or{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}or.UNKNOWN_ID=-1;function ar(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===s?new wi(n+1,0):new wi(n,s));return new hr(i,ji.empty(),e)}function ur(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new hr(Ei.min(),ji.empty(),-1)}static max(){return new hr(Ei.max(),ji.empty(),-1)}}function cr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ji.comparator(t.documentKey,e.documentKey),0!==n?n:yi(t.largestBatchId,e.largestBatchId))}
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
 */class lr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function dr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lr(t,e,n,s,i,r,o)}function fr(t){const e=si(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Wi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Wi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Wi(t))).join(",")),e.P=t}return e.P}function pr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Wi(e.value)}`;var e})).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Wi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Wi(t))).join(",")),`Target(${e})`}function gr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!_r(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Gi(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kr(t.startAt,e.startAt)&&kr(t.endAt,e.endAt)}function mr(t){return ji.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class yr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new vr(t,e,n):"array-contains"===e?new br(t,n):"in"===e?new Sr(t,n):"not-in"===e?new Ir(t,n):"array-contains-any"===e?new Cr(t,n):new yr(t,e,n)}static V(t,e,n){return"in"===e?new wr(t,n):new Er(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Hi(e,this.value)):null!==e&&Ki(this.value)===Ki(e)&&this.v(Hi(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ei()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vr extends yr{constructor(t,e,n){super(t,e,n),this.key=ji.fromName(n.referenceValue)}matches(t){const e=ji.comparator(t.key,this.key);return this.v(e)}}class wr extends yr{constructor(t,e){super(t,"in",e),this.keys=Tr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Er extends yr{constructor(t,e){super(t,"not-in",e),this.keys=Tr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ji.fromName(t.referenceValue)))}class br extends yr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yi(e)&&$i(e.arrayValue,this.value)}}class Sr extends yr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$i(this.value.arrayValue,e)}}class Ir extends yr{constructor(t,e){super(t,"not-in",e)}matches(t){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$i(this.value.arrayValue,e)}}class Cr extends yr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$i(this.value.arrayValue,t)))}}class Ar{constructor(t,e){this.position=t,this.inclusive=e}}class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function _r(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Dr(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ji.comparator(ji.fromName(o.referenceValue),n.key):Hi(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function kr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Rr{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Lr(t,e,n,s,i,r,o,a){return new Rr(t,e,n,s,i,r,o,a)}function xr(t){return new Rr(t)}function Mr(t){return!Ui(t.limit)&&"F"===t.limitType}function Vr(t){return!Ui(t.limit)&&"L"===t.limitType}function Pr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Or(t){for(const e of t.filters)if(e.S())return e.field;return null}function Fr(t){return null!==t.collectionGroup}function Ur(t){const e=si(t);if(null===e.D){e.D=[];const t=Or(e),n=Pr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Nr(t)),e.D.push(new Nr(Ni.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Nr(Ni.keyField(),t))}}}return e.D}function Br(t){const e=si(t);if(!e.C)if("F"===e.limitType)e.C=dr(e.path,e.collectionGroup,Ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ur(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Nr(i.field,e))}const n=e.endAt?new Ar(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Ar(e.startAt.position,!e.startAt.inclusive):null;e.C=dr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function qr(t,e,n){return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jr(t,e){return gr(Br(t),Br(e))&&t.limitType===e.limitType}function Kr(t){return`${fr(Br(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${pr(Br(t))}; limitType=${t.limitType})`}function $r(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ji.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Dr(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Ur(t),e))&&!(t.endAt&&!function(t,e,n){const s=Dr(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Ur(t),e))}(t,e)}function Hr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zr(t){return(e,n)=>{let s=!1;for(const i of Ur(t)){const t=Wr(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Wr(t,e,n){const s=t.field.isKeyField()?ji.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Hi(s,i):ei()}
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
 */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ei()}}
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
 */function Qr(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Xr(t){return{integerValue:""+t}}function Yr(t,e){return qi(e)?Xr(e):Qr(t,e)}
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
 */class Zr{constructor(){this._=void 0}}function Jr(t,e,n){return t instanceof no?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof so?io(t,e):t instanceof ro?oo(t,e):function(t,e){const n=eo(t,e),s=uo(n)+uo(t.k);return Xi(n)&&Xi(t.k)?Xr(s):Qr(t.M,s)}(t,e)}function to(t,e,n){return t instanceof so?io(t,e):t instanceof ro?oo(t,e):n}function eo(t,e){return t instanceof ao?Xi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class no extends Zr{}class so extends Zr{constructor(t){super(),this.elements=t}}function io(t,e){const n=ho(e);for(const s of t.elements)n.some((t=>Gi(t,s)))||n.push(s);return{arrayValue:{values:n}}}class ro extends Zr{constructor(t){super(),this.elements=t}}function oo(t,e){let n=ho(e);for(const s of t.elements)n=n.filter((t=>!Gi(t,s)));return{arrayValue:{values:n}}}class ao extends Zr{constructor(t,e){super(),this.M=t,this.k=e}}function uo(t){return Li(t.integerValue||t.doubleValue)}function ho(t){return Yi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function co(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof so&&e instanceof so||t instanceof ro&&e instanceof ro?vi(t.elements,e.elements,Gi):t instanceof ao&&e instanceof ao?Gi(t.k,e.k):t instanceof no&&e instanceof no}(t.transform,e.transform)}class lo{constructor(t,e){this.version=t,this.transformResults=e}}class fo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new fo}static exists(t){return new fo(void 0,t)}static updateTime(t){return new fo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function po(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class go{}function mo(t,e,n){t instanceof To?function(t,e,n){const s=t.value.clone(),i=Io(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof bo?function(t,e,n){if(!po(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Io(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(So(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function yo(t,e,n){t instanceof To?function(t,e,n){if(!po(t.precondition,e))return;const s=t.value.clone(),i=Co(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Eo(e),s).setHasLocalMutations()}(t,e,n):t instanceof bo?function(t,e,n){if(!po(t.precondition,e))return;const s=Co(t.fieldTransforms,n,e),i=e.data;i.setAll(So(t)),i.setAll(s),e.convertToFoundDocument(Eo(e),i).setHasLocalMutations()}(t,e,n):function(t,e){po(t.precondition,e)&&e.convertToNoDocument(Ei.min())}(t,e)}function vo(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=eo(s.transform,t||null);null!=i&&(null==n&&(n=sr.empty()),n.set(s.field,i))}return n||null}function wo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&vi(t,e,((t,e)=>co(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Eo(t){return t.isFoundDocument()?t.version:Ei.min()}class To extends go{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class bo extends go{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function So(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Io(t,e,n){const s=new Map;ni(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,to(o,a,n[i]))}return s}function Co(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Jr(t,r,e))}return s}class Ao extends go{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class No extends go{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class _o{constructor(t){this.count=t}}
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
 */var Do,ko;function Ro(t){switch(t){default:return ei();case ii.CANCELLED:case ii.UNKNOWN:case ii.DEADLINE_EXCEEDED:case ii.RESOURCE_EXHAUSTED:case ii.INTERNAL:case ii.UNAVAILABLE:case ii.UNAUTHENTICATED:return!1;case ii.INVALID_ARGUMENT:case ii.NOT_FOUND:case ii.ALREADY_EXISTS:case ii.PERMISSION_DENIED:case ii.FAILED_PRECONDITION:case ii.ABORTED:case ii.OUT_OF_RANGE:case ii.UNIMPLEMENTED:case ii.DATA_LOSS:return!0}}function Lo(t){if(void 0===t)return Zs("GRPC error has no .code"),ii.UNKNOWN;switch(t){case Do.OK:return ii.OK;case Do.CANCELLED:return ii.CANCELLED;case Do.UNKNOWN:return ii.UNKNOWN;case Do.DEADLINE_EXCEEDED:return ii.DEADLINE_EXCEEDED;case Do.RESOURCE_EXHAUSTED:return ii.RESOURCE_EXHAUSTED;case Do.INTERNAL:return ii.INTERNAL;case Do.UNAVAILABLE:return ii.UNAVAILABLE;case Do.UNAUTHENTICATED:return ii.UNAUTHENTICATED;case Do.INVALID_ARGUMENT:return ii.INVALID_ARGUMENT;case Do.NOT_FOUND:return ii.NOT_FOUND;case Do.ALREADY_EXISTS:return ii.ALREADY_EXISTS;case Do.PERMISSION_DENIED:return ii.PERMISSION_DENIED;case Do.FAILED_PRECONDITION:return ii.FAILED_PRECONDITION;case Do.ABORTED:return ii.ABORTED;case Do.OUT_OF_RANGE:return ii.OUT_OF_RANGE;case Do.UNIMPLEMENTED:return ii.UNIMPLEMENTED;case Do.DATA_LOSS:return ii.DATA_LOSS;default:return ei()}}(ko=Do||(Do={}))[ko.OK=0]="OK",ko[ko.CANCELLED=1]="CANCELLED",ko[ko.UNKNOWN=2]="UNKNOWN",ko[ko.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ko[ko.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ko[ko.NOT_FOUND=5]="NOT_FOUND",ko[ko.ALREADY_EXISTS=6]="ALREADY_EXISTS",ko[ko.PERMISSION_DENIED=7]="PERMISSION_DENIED",ko[ko.UNAUTHENTICATED=16]="UNAUTHENTICATED",ko[ko.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ko[ko.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ko[ko.ABORTED=10]="ABORTED",ko[ko.OUT_OF_RANGE=11]="OUT_OF_RANGE",ko[ko.UNIMPLEMENTED=12]="UNIMPLEMENTED",ko[ko.INTERNAL=13]="INTERNAL",ko[ko.UNAVAILABLE=14]="UNAVAILABLE",ko[ko.DATA_LOSS=15]="DATA_LOSS";
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
class xo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){bi(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Si(this.inner)}size(){return this.innerSize}}
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
 */class Mo{constructor(t,e){this.comparator=t,this.root=e||Po.EMPTY}insert(t,e){return new Mo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Po.BLACK,null,null))}remove(t){return new Mo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Po.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vo(this.root,t,this.comparator,!0)}}class Vo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Po{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Po.RED,this.left=null!=s?s:Po.EMPTY,this.right=null!=i?i:Po.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Po(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Po.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Po.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Po.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Po.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ei();if(this.right.isRed())throw ei();const t=this.left.check();if(t!==this.right.check())throw ei();return t+(this.isRed()?0:1)}}Po.EMPTY=null,Po.RED=!0,Po.BLACK=!1,Po.EMPTY=new class{constructor(){this.size=0}get key(){throw ei()}get value(){throw ei()}get color(){throw ei()}get left(){throw ei()}get right(){throw ei()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Po(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Oo{constructor(t){this.comparator=t,this.data=new Mo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fo(this.data.getIterator())}getIteratorFrom(t){return new Fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Oo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Oo(this.comparator);return e.data=t,e}}class Fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
const Uo=new Mo(ji.comparator);function Bo(){return Uo}const qo=new Mo(ji.comparator);function jo(){return qo}function Ko(){return new xo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Go=new Mo(ji.comparator),$o=new Oo(ji.comparator);function Ho(...t){let e=$o;for(const n of t)e=e.add(n);return e}const zo=new Oo(yi);function Wo(){return zo}
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
 */class Qo{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Xo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Qo(Ei.min(),n,Wo(),Bo(),Ho())}}class Xo{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Xo(Di.EMPTY_BYTE_STRING,e,Ho(),Ho(),Ho())}}
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
 */class Yo{constructor(t,e,n,s){this.O=t,this.removedTargetIds=e,this.key=n,this.F=s}}class Zo{constructor(t,e){this.targetId=t,this.$=e}}class Jo{constructor(t,e,n=Di.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ta{constructor(){this.B=0,this.L=sa(),this.U=Di.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Ho(),e=Ho(),n=Ho();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ei()}})),new Xo(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=sa()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ea{constructor(t){this.nt=t,this.st=new Map,this.it=Bo(),this.rt=na(),this.ot=new Oo(yi)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:ei()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,s=this.wt(e);if(s){const t=s.target;if(mr(t))if(0===n){const n=new ji(t.path);this.ct(e,n,rr.newNoDocument(n,Ei.min()))}else ni(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&mr(i.target)){const e=new ji(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.ct(s,e,rr.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=Ho();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new Qo(t,e,this.ot,this.it,n);return this.it=Bo(),this.rt=na(),this.ot=new Oo(yi),s}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new ta,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Oo(yi),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Ys("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new ta),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function na(){return new Mo(ji.comparator)}function sa(){return new Mo(ji.comparator)}
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
 */const ia=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ra=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class oa{constructor(t,e){this.databaseId=t,this.N=e}}function aa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ua(t,e){return t.N?e.toBase64():e.toUint8Array()}function ha(t,e){return aa(t,e.toTimestamp())}function ca(t){return ni(!!t),Ei.fromTimestamp(function(t){const e=Ri(t);return new wi(e.seconds,e.nanos)}(t))}function la(t,e){return function(t){return new Ci(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function da(t){const e=Ci.fromString(t);return ni(Va(e)),e}function fa(t,e){return la(t.databaseId,e.path)}function pa(t,e){const n=da(e);if(n.get(1)!==t.databaseId.projectId)throw new ri(ii.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ri(ii.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ji(va(n))}function ga(t,e){return la(t.databaseId,e)}function ma(t){const e=da(t);return 4===e.length?Ci.emptyPath():va(e)}function ya(t){return new Ci(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function va(t){return ni(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function wa(t,e,n){return{name:fa(t,e),fields:n.value.mapValue.fields}}function Ea(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ei()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(ni(void 0===e||"string"==typeof e),Di.fromBase64String(e||"")):(ni(void 0===e||e instanceof Uint8Array),Di.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ii.UNKNOWN:Lo(t.code);return new ri(e,t.message||"")}(o);n=new Jo(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=pa(t,s.document.name),r=ca(s.document.updateTime),o=new sr({mapValue:{fields:s.document.fields}}),a=rr.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Yo(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=pa(t,s.document),r=s.readTime?ca(s.readTime):Ei.min(),o=rr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=pa(t,s.document),r=s.removedTargetIds||[];n=new Yo([],r,i,null)}else{if(!("filter"in e))return ei();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new _o(s),r=t.targetId;n=new Zo(r,i)}}return n}function Ta(t,e){let n;if(e instanceof To)n={update:wa(t,e.key,e.value)};else if(e instanceof Ao)n={delete:fa(t,e.key)};else if(e instanceof bo)n={update:wa(t,e.key,e.data),updateMask:Ma(e.fieldMask)};else{if(!(e instanceof No))return ei();n={verify:fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof no)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof so)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),increment:n.k};throw ei()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ei()}(t,e.precondition)),n}function ba(t,e){return t&&t.length>0?(ni(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ca(t.updateTime):ca(e);return n.isEqual(Ei.min())&&(n=ca(e)),new lo(n,t.transformResults||[])}(t,e)))):[]}function Sa(t,e){return{documents:[ga(t,e.path)]}}function Ia(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=ga(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ga(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ji(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NAN"}};if(Zi(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ji(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NAN"}};if(Zi(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(t.field),op:Da(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ka(t.field),direction:_a(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Ui(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ca(t){let e=ma(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ni(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Na(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Nr(Ra(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Ar(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Ar(n,e)}(n.endAt)),Lr(e,i,o,r,a,"F",u,h)}function Aa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ei()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Na(t){return t?void 0!==t.unaryFilter?[xa(t)]:void 0!==t.fieldFilter?[La(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Na(t))).reduce(((t,e)=>t.concat(e))):ei():[]}function _a(t){return ia[t]}function Da(t){return ra[t]}function ka(t){return{fieldPath:t.canonicalString()}}function Ra(t){return Ni.fromServerFormat(t.fieldPath)}function La(t){return yr.create(Ra(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ei()}}(t.fieldFilter.op),t.fieldFilter.value)}function xa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ra(t.unaryFilter.field);return yr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ra(t.unaryFilter.field);return yr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ra(t.unaryFilter.field);return yr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ra(t.unaryFilter.field);return yr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ei()}}function Ma(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Va(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Pa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
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
 */class Ua{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */class Ba{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ei(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ba(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ba?e:Ba.resolve(e)}catch(t){return Ba.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ba.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ba.reject(e)}static resolve(t){return new Ba(((e,n)=>{e(t)}))}static reject(t){return new Ba(((e,n)=>{n(t)}))}static waitFor(t){return new Ba(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Ba.resolve(!1);for(const n of t)e=e.next((t=>t?Ba.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}
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
 */function qa(t){return"IndexedDbTransactionError"===t.name}
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
class ja{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&mo(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&yo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&yo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(Ei.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ho())}isEqual(t){return this.batchId===t.batchId&&vi(this.mutations,t.mutations,((t,e)=>wo(t,e)))&&vi(this.baseMutations,t.baseMutations,((t,e)=>wo(t,e)))}}class Ka{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ni(t.mutations.length===n.length);let s=Go;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Ka(t,e,n,s)}}
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
 */class Ga{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class $a{constructor(t,e,n,s,i=Ei.min(),r=Ei.min(),o=Di.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new $a(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ha{constructor(t){this.Jt=t}}function za(t){const e=Ca({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?qr(e,e.limit,"L"):e}
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
class Wa{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Li(t.integerValue));else if("doubleValue"in t){const n=Li(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Bi(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(xi(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?nr(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):ei()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const s of Object.keys(n))this.re(s,e),this.te(n[s],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const s of n)this.te(s,e)}ae(t,e){this.ne(e,37),ji.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}Wa.fe=new Wa;
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
class Qa{constructor(){this.qe=new Xa}addToCollectionParentIndex(t,e){return this.qe.add(e),Ba.resolve()}getCollectionParents(t,e){return Ba.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Ba.resolve()}deleteFieldIndex(t,e){return Ba.resolve()}getDocumentsMatchingTarget(t,e){return Ba.resolve(null)}getFieldIndex(t,e){return Ba.resolve(null)}getFieldIndexes(t,e){return Ba.resolve([])}getNextCollectionGroupToUpdate(t){return Ba.resolve(null)}updateCollectionGroup(t,e,n){return Ba.resolve()}updateIndexEntries(t,e){return Ba.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Oo(Ci.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Oo(Ci.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ya{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ya(t,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ya.DEFAULT_COLLECTION_PERCENTILE=10,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ya.DEFAULT=new Ya(41943040,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ya.DISABLED=new Ya(-1,0,0);
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
class Za{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Za(0)}static yn(){return new Za(-1)}}
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
async function Ja(t){if(t.code!==ii.FAILED_PRECONDITION||t.message!==Fa)throw t;Ys("LocalStore","Unexpectedly lost primary lease")}
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
class tu{constructor(){this.changes=new xo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,rr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ba.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class eu{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const s of e)s.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return ji.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Fr(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new ji(e)).next((t=>{let e=jo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const s=e.collectionGroup;let i=jo();return this.indexManager.getCollectionParents(t,s).next((r=>Ba.forEach(r,(r=>{const o=function(t,e){return new Rr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let s;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(s=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=rr.newInvalidDocument(n),s=s.insert(n,i)),yo(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{$r(e,n)||(s=s.remove(t))})),s)))}}
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
 */class nu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=s}static Ys(t,e){let n=Ho(),s=Ho();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(t,e.fromCache,n,s)}}
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
 */class su{Xs(t){this.Zs=t}Qs(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Ei.min())?this.ti(t,e):this.Zs.Ks(t,s).next((i=>{const r=this.ei(e,i);return(Mr(e)||Vr(e))&&this.ni(e.limitType,r,s,n)?this.ti(t,e):(Xs()<=f["in"].DEBUG&&Ys("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Gr(e)),this.Zs.Qs(t,e,ar(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Oo(zr(t));return e.forEach(((e,s)=>{$r(t,s)&&(n=n.add(s))})),n}ni(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(t,e){return Xs()<=f["in"].DEBUG&&Ys("QueryEngine","Using full collection scan to execute query:",Gr(e)),this.Zs.Qs(t,e,hr.min())}}
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
 */class iu{constructor(t,e,n,s){this.persistence=t,this.si=e,this.M=s,this.ii=new Mo(yi),this.ri=new xo((t=>fr(t)),gr),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new eu(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function ru(t,e,n,s){return new iu(t,e,n,s)}async function ou(t,e){const n=si(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.Bs.getAllMutationBatches(t).next((i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ho();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function au(t,e){const n=si(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Ba.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);ni(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,s)))}))}function uu(t){const e=si(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function hu(t,e){const n=si(t),s=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,r.addedDocuments,a))));let h=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Di.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,h,r)&&o.push(n.fs.updateTargetData(t,h))}));let a=Bo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(cu(t,r,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(Ei.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ba.waitFor(o).next((()=>r.apply(t))).next((()=>n.ci.Gs(t,a))).next((()=>a))})).then((t=>(n.ii=i,t)))}function cu(t,e,n){let s=Ho();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Bo();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(Ei.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Ys("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),s}))}function lu(t,e){const n=si(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function du(t,e){const n=si(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.fs.getTargetData(t,e).next((i=>i?(s=i,Ba.resolve(s)):n.fs.allocateTargetId(t).next((i=>(s=new $a(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.ii.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}async function fu(t,e,n){const s=si(t),i=s.ii.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!qa(t))throw t;Ys("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.ii=s.ii.remove(e),s.ri.delete(i.target)}function pu(t,e,n){const s=si(t);let i=Ei.min(),r=Ho();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=si(t),i=s.ri.get(n);return void 0!==i?Ba.resolve(s.ii.get(i)):s.fs.getTargetData(e,n)}(s,t,Br(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.si.Qs(t,e,n?i:Ei.min(),n?r:Ho()))).next((t=>(gu(s,Hr(e),t),{documents:t,li:r})))))}function gu(t,e,n){let s=Ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.oi.set(e,s)}
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
class mu{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return Ba.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:ca(n.createTime)}),Ba.resolve()}getNamedQuery(t,e){return Ba.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:za(t.bundledQuery),readTime:ca(t.readTime)}}(e)),Ba.resolve()}}
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
 */class yu{constructor(){this.overlays=new Mo(ji.comparator),this.gi=new Map}getOverlay(t,e){return Ba.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.Xt(t,e,s)})),Ba.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.gi.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),Ba.resolve()}getOverlaysForCollection(t,e,n){const s=Ko(),i=e.length+1,r=new ji(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ba.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Mo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ko(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ko(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Ba.resolve(o)}Xt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);if(null!==s){const t=this.gi.get(s.largestBatchId).delete(n.key);this.gi.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ga(e,n));let i=this.gi.get(e);void 0===i&&(i=Ho(),this.gi.set(e,i)),this.gi.set(e,i.add(n.key))}}
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
 */class vu{constructor(){this.yi=new Oo(wu.pi),this.Ii=new Oo(wu.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new wu(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new wu(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new ji(new Ci([])),n=new wu(e,t),s=new wu(e,t+1),i=[];return this.Ii.forEachInRange([n,s],(t=>{this.Ai(t),i.push(t.key)})),i}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new ji(new Ci([])),n=new wu(e,t),s=new wu(e,t+1);let i=Ho();return this.Ii.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new wu(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class wu{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return ji.comparator(t.key,e.key)||yi(t.vi,e.vi)}static Ti(t,e){return yi(t.vi,e.vi)||ji.comparator(t.key,e.key)}}
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
 */class Eu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Oo(wu.pi)}checkEmpty(t){return Ba.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new ja(i,e,n,s);this.Bs.push(r);for(const o of s)this.Di=this.Di.add(new wu(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ba.resolve(r)}lookupMutationBatch(t,e){return Ba.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.xi(n),i=s<0?0:s;return Ba.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Ba.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return Ba.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new wu(e,0),s=new wu(e,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,s],(t=>{const e=this.Ci(t.vi);i.push(e)})),Ba.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Oo(yi);return e.forEach((t=>{const e=new wu(t,0),s=new wu(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,s],(t=>{n=n.add(t.vi)}))})),Ba.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ji.isDocumentKey(i)||(i=i.child(""));const r=new wu(new ji(i),0);let o=new Oo(yi);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.vi)),!0)}),r),Ba.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ni(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return Ba.forEach(e.mutations,(s=>{const i=new wu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new wu(e,0),s=this.Di.firstAfterOrEqual(n);return Ba.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.Bs.length,Ba.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
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
 */class Tu{constructor(t){this.Mi=t,this.docs=new Mo(ji.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ba.resolve(n?n.document.mutableCopy():rr.newInvalidDocument(e))}getEntries(t,e){let n=Bo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():rr.newInvalidDocument(t))})),Ba.resolve(n)}getAllFromCollection(t,e,n){let s=Bo();const i=new ji(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||cr(ur(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Ba.resolve(s)}getAllFromCollectionGroup(t,e,n,s){ei()}Oi(t,e){return Ba.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new bu(this)}getSize(t){return Ba.resolve(this.size)}}class bu extends tu{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Kn.addEntry(t,s)):this.Kn.removeEntry(n)})),Ba.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
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
 */class Su{constructor(t){this.persistence=t,this.Fi=new xo((t=>fr(t)),gr),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.$i=0,this.Bi=new vu,this.targetCount=0,this.Li=Za.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),Ba.resolve()}getLastRemoteSnapshotVersion(t){return Ba.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ba.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),Ba.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),Ba.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new Za(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Ba.resolve()}updateTargetData(t,e){return this.Tn(e),Ba.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,Ba.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Fi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ba.waitFor(i).next((()=>s))}getTargetCount(t){return Ba.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return Ba.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),Ba.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Ba.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),Ba.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return Ba.resolve(n)}containsKey(t,e){return Ba.resolve(this.Bi.containsKey(e))}}
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
 */class Iu{constructor(t,e){this.Ui={},this.overlays={},this.es=new pi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Su(this),this.indexManager=new Qa,this.ds=function(t){return new Tu(t)}((t=>this.referenceDelegate.qi(t))),this.M=new Ha(e),this._s=new mu(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new Eu(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Ys("MemoryPersistence","Starting transaction:",t);const s=new Cu(this.es.next());return this.referenceDelegate.Ki(),n(s).next((t=>this.referenceDelegate.Gi(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Qi(t,e){return Ba.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class Cu extends Ua{constructor(t){super(),this.currentSequenceNumber=t}}class Au{constructor(t){this.persistence=t,this.ji=new vu,this.Wi=null}static zi(t){return new Au(t)}get Hi(){if(this.Wi)return this.Wi;throw ei()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),Ba.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),Ba.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),Ba.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ba.forEach(this.Hi,(n=>{const s=ji.fromPath(n);return this.Ji(t,s).next((t=>{t||e.removeEntry(s,Ei.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return Ba.or([()=>Ba.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
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
 */class Nu{constructor(){this.activeTargetIds=Wo()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _u{constructor(){this.$r=new Nu,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Nu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Du{Lr(t){}shutdown(){}}
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
 */class ku{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){Ys("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){Ys("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Ru={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Lu{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
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
 */class xu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,s,i){const r=this.uo(t,e);Ys("RestConnection","Sending: ",r,n);const o={};return this.ao(o,s,i),this.co(t,r,o,n).then((t=>(Ys("RestConnection","Received: ",t),t)),(e=>{throw Js("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ho(t,e,n,s,i){return this.oo(t,e,n,s,i)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ws,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Ru[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((i,r)=>{const o=new $s;o.listenOnce(Bs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Us.NO_ERROR:const e=o.getResponseJson();Ys("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Us.TIMEOUT:Ys("Connection",'RPC "'+t+'" timed out'),r(new ri(ii.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const n=o.getStatus();if(Ys("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ii).indexOf(e)>=0?e:ii.UNKNOWN}(t.status);r(new ri(e,t.message))}else r(new ri(ii.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ri(ii.UNAVAILABLE,"Connection failed."));break;default:ei()}}finally{Ys("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}lo(t,e,n){const s=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Os(),r=Fs(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ks({})),this.ao(o.initMessageHeaders,e,n),(0,p.uI)()||(0,p.b$)()||(0,p.d)()||(0,p.w1)()||(0,p.Mn)()||(0,p.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Ys("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let h=!1,c=!1;const l=new Lu({Wr:t=>{c?Ys("Connection","Not sending because WebChannel is closed:",t):(h||(Ys("Connection","Opening WebChannel transport."),u.open(),h=!0),Ys("Connection","WebChannel sending:",t),u.send(t))},zr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Gs.EventType.OPEN,(()=>{c||Ys("Connection","WebChannel transport opened.")})),d(u,Gs.EventType.CLOSE,(()=>{c||(c=!0,Ys("Connection","WebChannel transport closed"),l.no())})),d(u,Gs.EventType.ERROR,(t=>{c||(c=!0,Js("Connection","WebChannel transport errored:",t),l.no(new ri(ii.UNAVAILABLE,"The operation could not be completed")))})),d(u,Gs.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];ni(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Ys("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Do[t];if(void 0!==e)return Lo(e)}(t),n=i.message;void 0===e&&(e=ii.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),c=!0,l.no(new ri(e,n)),u.close()}else Ys("Connection","WebChannel received:",n),l.so(n)}})),d(r,qs.STAT_EVENT,(t=>{t.stat===js.PROXY?Ys("Connection","Detected buffering proxy"):t.stat===js.NOPROXY&&Ys("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.eo()}),0),l}}
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
 */function Mu(){return"undefined"!=typeof document?document:null}
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
 */function Vu(t){return new oa(t,!0)}class Pu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),s=Math.max(0,e-n);s>0&&Ys("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
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
 */class Ou{constructor(t,e,n,s,i,r,o,a){this.Yn=t,this.Ro=n,this.Po=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Pu(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===ii.RESOURCE_EXHAUSTED?(Zs(e.toString()),Zs("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===ii.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new ri(ii.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return Ys("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(Ys("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fu extends Ou{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.M=i}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=Ea(this.M,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?ca(e.readTime):Ei.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=ya(this.M),e.addTarget=function(t,e){let n;const s=e.target;return n=mr(s)?{documents:Sa(t,s)}:{query:Ia(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ua(t,e.resumeToken):e.snapshotVersion.compareTo(Ei.min())>0&&(n.readTime=aa(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=Aa(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=ya(this.M),e.removeTarget=t,this.Fo(e)}}class Uu extends Ou{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(ni(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=ba(t.writeResults,t.commitTime),n=ca(t.commitTime);return this.listener.Yo(n,e)}return ni(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=ya(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ta(this.M,t)))};this.Fo(e)}}
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
 */class Bu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=s,this.tu=!1}eu(){if(this.tu)throw new ri(ii.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.oo(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ii.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ri(ii.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ho(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ii.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ri(ii.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class qu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Zs(e),this.iu=!1):Ys("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
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
 */class ju{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr((t=>{n.enqueueAndForget((async()=>{Yu(this)&&(Ys("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=si(t);e.fu.add(4),await Gu(e),e.wu.set("Unknown"),e.fu.delete(4),await Ku(e)}(this))}))})),this.wu=new qu(n,s)}}async function Ku(t){if(Yu(t))for(const e of t.du)await e(!0)}async function Gu(t){for(const e of t.du)await e(!1)}function $u(t,e){const n=si(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Xu(n)?Qu(n):gh(n).xo()&&zu(n,e))}function Hu(t,e){const n=si(t),s=gh(n);n.lu.delete(e),s.xo()&&Wu(n,e),0===n.lu.size&&(s.xo()?s.Mo():Yu(n)&&n.wu.set("Unknown"))}function zu(t,e){t.mu.Z(e.targetId),gh(t).jo(e)}function Wu(t,e){t.mu.Z(e),gh(t).Wo(e)}function Qu(t){t.mu=new ea({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),gh(t).start(),t.wu.ru()}function Xu(t){return Yu(t)&&!gh(t).Co()&&t.lu.size>0}function Yu(t){return 0===si(t).fu.size}function Zu(t){t.mu=void 0}async function Ju(t){t.lu.forEach(((e,n)=>{zu(t,e)}))}async function th(t,e){Zu(t),Xu(t)?(t.wu.au(e),Qu(t)):t.wu.set("Unknown")}async function eh(t,e,n){if(t.wu.set("Online"),e instanceof Jo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.lu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.lu.delete(s),t.mu.removeTarget(s))}(t,e)}catch(n){Ys("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await nh(t,n)}else if(e instanceof Yo?t.mu.ut(e):e instanceof Zo?t.mu._t(e):t.mu.ht(e),!n.isEqual(Ei.min()))try{const e=await uu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.lu.get(s);i&&t.lu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Di.EMPTY_BYTE_STRING,n.snapshotVersion)),Wu(t,e);const s=new $a(n.target,e,1,n.sequenceNumber);zu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ys("RemoteStore","Failed to raise snapshot:",e),await nh(t,e)}}async function nh(t,e,n){if(!qa(e))throw e;t.fu.add(1),await Gu(t),t.wu.set("Offline"),n||(n=()=>uu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ys("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Ku(t)}))}function sh(t,e){return e().catch((n=>nh(t,n,e)))}async function ih(t){const e=si(t),n=mh(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;rh(e);)try{const t=await lu(e.localStore,s);if(null===t){0===e.hu.length&&n.Mo();break}s=t.batchId,oh(e,t)}catch(t){await nh(e,t)}ah(e)&&uh(e)}function rh(t){return Yu(t)&&t.hu.length<10}function oh(t,e){t.hu.push(e);const n=mh(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ah(t){return Yu(t)&&!mh(t).Co()&&t.hu.length>0}function uh(t){mh(t).start()}async function hh(t){mh(t).Zo()}async function ch(t){const e=mh(t);for(const n of t.hu)e.Jo(n.mutations)}async function lh(t,e,n){const s=t.hu.shift(),i=Ka.from(s,e,n);await sh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ih(t)}async function dh(t,e){e&&mh(t).Ho&&await async function(t,e){if(n=e.code,Ro(n)&&n!==ii.ABORTED){const n=t.hu.shift();mh(t).ko(),await sh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ih(t)}var n}(t,e),ah(t)&&uh(t)}async function fh(t,e){const n=si(t);n.asyncQueue.verifyOperationInProgress(),Ys("RemoteStore","RemoteStore received new credentials");const s=Yu(n);n.fu.add(3),await Gu(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Ku(n)}async function ph(t,e){const n=si(t);e?(n.fu.delete(2),await Ku(n)):e||(n.fu.add(2),await Gu(n),n.wu.set("Unknown"))}function gh(t){return t.gu||(t.gu=function(t,e,n){const s=si(t);return s.eu(),new Fu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)
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
 */}(t.datastore,t.asyncQueue,{Hr:Ju.bind(null,t),Yr:th.bind(null,t),Qo:eh.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),Xu(t)?Qu(t):t.wu.set("Unknown")):(await t.gu.stop(),Zu(t))}))),t.gu}function mh(t){return t.yu||(t.yu=function(t,e,n){const s=si(t);return s.eu(),new Uu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{Hr:hh.bind(null,t),Yr:dh.bind(null,t),Xo:ch.bind(null,t),Yo:lh.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await ih(t)):(await t.yu.stop(),t.hu.length>0&&(Ys("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
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
 */}class yh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new yh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ri(ii.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(Zs("AsyncQueue",`${e}: ${t}`),qa(t))return new ri(ii.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class wh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ji.comparator(e.key,n.key):(t,e)=>ji.comparator(t.key,e.key),this.keyedMap=jo(),this.sortedSet=new Mo(this.comparator)}static emptySet(t){return new wh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new wh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Eh{constructor(){this.pu=new Mo(ji.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):ei():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Th{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Th(t,e,wh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class bh{constructor(){this.Tu=void 0,this.listeners=[]}}class Sh{constructor(){this.queries=new xo((t=>Kr(t)),jr),this.onlineState="Unknown",this.Eu=new Set}}async function Ih(t,e){const n=si(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new bh),i)try{r.Tu=await n.onListen(s)}catch(t){const n=vh(t,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Au(n.onlineState),r.Tu&&e.Ru(r.Tu)&&_h(n)}async function Ch(t,e){const n=si(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ah(t,e){const n=si(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(i)&&(s=!0);e.Tu=i}}s&&_h(n)}function Nh(t,e,n){const s=si(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function _h(t){t.Eu.forEach((t=>{t.next()}))}class Dh{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Th(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=Th.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
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
class kh{constructor(t){this.key=t}}class Rh{constructor(t){this.key=t}}class Lh{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=Ho(),this.mutatedKeys=Ho(),this.Uu=zr(t),this.qu=new wh(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new Eh,s=e?e.qu:this.qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Mr(this.query)&&s.size===this.query.limit?s.last():null,u=Vr(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),c=$r(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;h&&c?h.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.ju(h,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Uu(c,a)>0||u&&this.Uu(c,u)<0)&&(o=!0)):!h&&c?(n.track({type:0,doc:c}),f=!0):h&&!c&&(n.track({type:1,doc:h}),f=!0,(a||u)&&(o=!0)),f&&(c?(r=r.add(c),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Mr(this.query)||Vr(this.query))for(;r.size>this.query.limit;){const t=Mr(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{qu:r,Qu:n,ni:o,mutatedKeys:i}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ei()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const r=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==i.length||a?{snapshot:new Th(this.query,t.qu,s,i,t.mutatedKeys,0===o,a,!1),Hu:r}:{Hu:r}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Eh,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=Ho(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new Rh(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new kh(n))})),e}Yu(t){this.$u=t.li,this.Lu=Ho();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return Th.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class xh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mh{constructor(t){this.key=t,this.Zu=!1}}class Vh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new xo((t=>Kr(t)),jr),this.na=new Map,this.sa=new Set,this.ia=new Mo(ji.comparator),this.ra=new Map,this.oa=new vu,this.ua={},this.aa=new Map,this.ca=Za.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Ph(t,e){const n=ec(t);let s,i;const r=n.ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Xu();else{const t=await du(n.localStore,Br(e));n.isPrimaryClient&&$u(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Oh(n,e,s,"current"===r)}return i}async function Oh(t,e,n,s){t.la=(e,n,s)=>async function(t,e,n,s){let i=e.view.Gu(n);i.ni&&(i=await pu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Qh(t,e.targetId,o.Hu),o.snapshot}(t,e,n,s);const i=await pu(t.localStore,e,!0),r=new Lh(e,i.li),o=r.Gu(i.documents),a=Xo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);Qh(t,n,u.Hu);const h=new xh(e,n,r);return t.ea.set(e,h),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),u.snapshot}async function Fh(t,e){const n=si(t),s=n.ea.get(e),i=n.na.get(s.targetId);if(i.length>1)return n.na.set(s.targetId,i.filter((t=>!jr(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Hu(n.remoteStore,s.targetId),zh(n,s.targetId)})).catch(Ja)):(zh(n,s.targetId),await fu(n.localStore,s.targetId,!0))}async function Uh(t,e,n){const s=nc(t);try{const t=await function(t,e){const n=si(t),s=wi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ho());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=vo(t,r.get(t.key));null!=e&&o.push(new bo(t.key,e,ir(e.value.mapValue),fo.exists(!0)))}return n.Bs.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ua[t.currentUser.toKey()];s||(s=new Mo(yi)),s=s.insert(e,n),t.ua[t.currentUser.toKey()]=s}(s,t.batchId,n),await Zh(s,t.changes),await ih(s.remoteStore)}catch(t){const e=vh(t,"Failed to persist write");n.reject(e)}}async function Bh(t,e){const n=si(t);try{const t=await hu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ra.get(e);s&&(ni(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Zu=!0:t.modifiedDocuments.size>0?ni(s.Zu):t.removedDocuments.size>0&&(ni(s.Zu),s.Zu=!1))})),await Zh(n,t,e)}catch(t){await Ja(t)}}function qh(t,e,n){const s=si(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ea.forEach(((n,s)=>{const i=s.view.Au(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=si(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Au(e)&&(s=!0)})),s&&_h(n)}(s.eventManager,e),t.length&&s.ta.Qo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jh(t,e,n){const s=si(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ra.get(e),r=i&&i.key;if(r){let t=new Mo(ji.comparator);t=t.insert(r,rr.newNoDocument(r,Ei.min()));const n=Ho().add(r),i=new Qo(Ei.min(),new Map,new Oo(yi),t,n);await Bh(s,i),s.ia=s.ia.remove(r),s.ra.delete(e),Yh(s)}else await fu(s.localStore,e,!1).then((()=>zh(s,e,n))).catch(Ja)}async function Kh(t,e){const n=si(t),s=e.batch.batchId;try{const t=await au(n.localStore,e);Hh(n,s,null),$h(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zh(n,t)}catch(t){await Ja(t)}}async function Gh(t,e,n){const s=si(t);try{const t=await function(t,e){const n=si(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.Bs.lookupMutationBatch(t,e).next((e=>(ni(null!==e),s=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,s)))}))}(s.localStore,e);Hh(s,e,n),$h(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zh(s,t)}catch(n){await Ja(n)}}function $h(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function Hh(t,e,n){const s=si(t);let i=s.ua[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ua[s.currentUser.toKey()]=i}}function zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||Wh(t,e)}))}function Wh(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(Hu(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Yh(t))}function Qh(t,e,n){for(const s of n)s instanceof kh?(t.oa.addReference(s.key,e),Xh(t,s)):s instanceof Rh?(Ys("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||Wh(t,s.key)):ei()}function Xh(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||(Ys("SyncEngine","New document in limbo: "+n),t.sa.add(s),Yh(t))}function Yh(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new ji(Ci.fromString(e)),s=t.ca.next();t.ra.set(s,new Mh(n)),t.ia=t.ia.insert(n,s),$u(t.remoteStore,new $a(Br(xr(n.path)),s,2,pi.A))}}async function Zh(t,e,n){const s=si(t),i=[],r=[],o=[];s.ea.isEmpty()||(s.ea.forEach(((t,a)=>{o.push(s.la(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=nu.Ys(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.ta.Qo(i),await async function(t,e){const n=si(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ba.forEach(e,(e=>Ba.forEach(e.Hs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ba.forEach(e.Js,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!qa(t))throw t;Ys("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.ii.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.ii=n.ii.insert(t,i)}}}(s.localStore,r))}async function Jh(t,e){const n=si(t);if(!n.currentUser.isEqual(e)){Ys("SyncEngine","User change. New user:",e.toKey());const t=await ou(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new ri(ii.CANCELLED,e))}))})),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Zh(n,t.hi)}}function tc(t,e){const n=si(t),s=n.ra.get(e);if(s&&s.Zu)return Ho().add(s.key);{let t=Ho();const s=n.na.get(e);if(!s)return t;for(const e of s){const s=n.ea.get(e);t=t.unionWith(s.view.Ku)}return t}}function ec(t){const e=si(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jh.bind(null,e),e.ta.Qo=Ah.bind(null,e.eventManager),e.ta.fa=Nh.bind(null,e.eventManager),e}function nc(t){const e=si(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gh.bind(null,e),e}class sc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Vu(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return ru(this.persistence,new su,t.initialUser,this.M)}wa(t){return new Iu(Au.zi,this.M)}_a(t){return new _u}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ic{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jh.bind(null,this.syncEngine),await ph(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sh}createDatastore(t){const e=Vu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new xu(s));var s;return function(t,e,n,s){return new Bu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>qh(this.syncEngine,t,0),r=ku.vt()?new ku:new Du,new ju(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Vh(t,e,n,s,i,r);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=si(t);Ys("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Gu(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
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
class rc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class oc{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=zs.UNAUTHENTICATED,this.clientId=mi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ys("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ys("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ri(ii.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),Ys("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await ou(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function uc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hc(t);Ys("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>fh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>fh(e.remoteStore,n))),t.onlineComponents=e}async function hc(t){return t.offlineComponents||(Ys("FirestoreClient","Using default OfflineComponentProvider"),await ac(t,new sc)),t.offlineComponents}async function cc(t){return t.onlineComponents||(Ys("FirestoreClient","Using default OnlineComponentProvider"),await uc(t,new ic)),t.onlineComponents}function lc(t){return cc(t).then((t=>t.syncEngine))}async function dc(t){const e=await cc(t),n=e.eventManager;return n.onListen=Ph.bind(null,e.syncEngine),n.onUnlisten=Fh.bind(null,e.syncEngine),n}function fc(t,e,n={}){const s=new oi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new rc({next:n=>{e.enqueueAndForget((()=>Ch(t,o))),n.fromCache&&"server"===s.source?i.reject(new ri(ii.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Dh(n,r,{includeMetadataChanges:!0,Cu:!0});return Ih(t,o)}(await dc(t),t.asyncQueue,e,n,s))),s.promise}const pc=new Map;
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
 */function gc(t,e,n){if(!n)throw new ri(ii.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mc(t,e,n,s){if(!0===e&&!0===s)throw new ri(ii.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yc(t){if(!ji.isDocumentKey(t))throw new ri(ii.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vc(t){if(ji.isDocumentKey(t))throw new ri(ii.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ei()}function Ec(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ri(ii.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wc(t);throw new ri(ii.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Tc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ri(ii.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ri(ii.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,mc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class bc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tc({}),this._settingsFrozen=!1,t instanceof Fi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ri(ii.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(t.options.projectId)}(t))}get app(){if(!this._app)throw new ri(ii.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ri(ii.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ui;switch(t.type){case"gapi":const e=t.client;return ni(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new li(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ri(ii.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pc.get(t);e&&(Ys("ComponentProvider","Removing Datastore"),pc.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Sc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Sc(this.firestore,t,this._key)}}class Ic{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ic(this.firestore,t,this._query)}}class Cc extends Ic{constructor(t,e,n){super(t,e,xr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Sc(this.firestore,null,new ji(t))}withConverter(t){return new Cc(this.firestore,t,this._path)}}function Ac(t,e,...n){if(t=(0,p.m9)(t),gc("collection","path",e),t instanceof bc){const s=Ci.fromString(e,...n);return vc(s),new Cc(t,null,s)}{if(!(t instanceof Sc||t instanceof Cc))throw new ri(ii.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ci.fromString(e,...n));return vc(s),new Cc(t.firestore,null,s)}}function Nc(t,e,...n){if(t=(0,p.m9)(t),1===arguments.length&&(e=mi.R()),gc("doc","path",e),t instanceof bc){const s=Ci.fromString(e,...n);return yc(s),new Sc(t,null,new ji(s))}{if(!(t instanceof Sc||t instanceof Cc))throw new ri(ii.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ci.fromString(e,...n));return yc(s),new Sc(t.firestore,t instanceof Cc?t.converter:null,new ji(s))}}
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
class _c{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Pu(this,"async_queue_retry"),this.qa=()=>{const t=Mu();t&&Ys("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Mu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Mu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new oi;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(D){if(!qa(D))throw D;Ys("AsyncQueue","Operation failed with retryable error: "+D)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Zs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const s=yh.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(s),s}Ka(){this.$a&&ei()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}class Dc extends bc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new _c,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lc(this),this._firestoreClient.terminate()}}function kc(t=(0,l.Mq)()){return(0,l.qX)(t,"firestore").getImmediate()}function Rc(t){return t._firestoreClient||Lc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lc(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Oi(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oc(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class xc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ri(ii.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ni(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Mc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mc(Di.fromBase64String(t))}catch(t){throw new ri(ii.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Mc(Di.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Vc{constructor(t){this._methodName=t}}
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
 */class Pc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ri(ii.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ri(ii.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yi(this._lat,t._lat)||yi(this._long,t._long)}}
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
 */const Oc=/^__.*__$/;class Fc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new bo(t,this.data,this.fieldMask,e,this.fieldTransforms):new To(t,this.data,e,this.fieldTransforms)}}function Uc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ei()}}class Bc{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new Bc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.nc(t),s}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.Ya(),s}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Yc(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Uc(this.Xa)&&Oc.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class qc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Vu(t)}ac(t,e,n,s=!1){return new Bc({Xa:t,methodName:e,uc:n,path:Ni.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function jc(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new qc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kc(t,e,n,s,i,r={}){const o=t.ac(r.merge||r.mergeFields?2:0,e,n,i);zc("Data must be an object, but it was:",o,s);const a=$c(s,o);let u,h;if(r.merge)u=new _i(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Wc(e,s,n);if(!o.contains(i))throw new ri(ii.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Zc(t,i)||t.push(i)}u=new _i(t),h=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,h=o.fieldTransforms;return new Fc(new sr(a),u,h)}function Gc(t,e){if(Hc(t=(0,p.m9)(t)))return zc("Unsupported field value:",e,t),$c(t,e);if(t instanceof Vc)return function(t,e){if(!Uc(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Gc(i,e.ic(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,p.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Yr(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wi.fromDate(t);return{timestampValue:aa(e.M,n)}}if(t instanceof wi){const n=new wi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:aa(e.M,n)}}if(t instanceof Pc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Mc)return{bytesValue:ua(e.M,t._byteString)};if(t instanceof Sc){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:la(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${wc(t)}`)}(t,e)}function $c(t,e){const n={};return Si(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((t,s)=>{const i=Gc(s,e.tc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Hc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wi||t instanceof Pc||t instanceof Mc||t instanceof Sc||t instanceof Vc)}function zc(t,e,n){if(!Hc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=wc(n);throw"an object"===s?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function Wc(t,e,n){if((e=(0,p.m9)(e))instanceof xc)return e._internalPath;if("string"==typeof e)return Xc(t,e);throw Yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qc=new RegExp("[~\\*/\\[\\]]");function Xc(t,e,n){if(e.search(Qc)>=0)throw Yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch(s){throw Yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new ri(ii.INVALID_ARGUMENT,a+t+u)}function Zc(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Jc{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new tl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(el("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class tl extends Jc{data(){return super.data()}}function el(t,e){return"string"==typeof e?Xc(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}
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
 */class nl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sl extends Jc{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(el("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class il extends sl{data(t={}){return super.data(t)}}class rl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new nl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new il(this._firestore,this._userDataWriter,n.key,n,new nl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ri(ii.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new il(t._firestore,t._userDataWriter,n.doc.key,n.doc,new nl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new il(t._firestore,t._userDataWriter,e.doc.key,e.doc,new nl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ol(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ol(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ei()}}
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
function al(t){if(Vr(t)&&0===t.explicitOrderBy.length)throw new ri(ii.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class ul{convertValue(t,e="none"){switch(Ki(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Li(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(xi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ei()}}convertObject(t,e){const n={};return bi(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Pc(Li(t.latitude),Li(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Pi(t));default:return null}}convertTimestamp(t){const e=Ri(t);return new wi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ci.fromString(t);ni(Va(n));const s=new Fi(n.get(1),n.get(3)),i=new ji(n.popFirst(5));return s.isEqual(e)||Zs(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function hl(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class cl extends ul{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Sc(this.firestore,null,e)}}function ll(t){t=Ec(t,Ic);const e=Ec(t.firestore,Dc),n=Rc(e),s=new cl(e);return al(t._query),fc(n,t._query).then((n=>new rl(e,s,t,n)))}function dl(t,e,n){t=Ec(t,Sc);const s=Ec(t.firestore,Dc),i=hl(t.converter,e,n);return pl(s,[Kc(jc(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,fo.none())])}function fl(t){return pl(Ec(t.firestore,Dc),[new Ao(t._key,fo.none())])}function pl(t,e){return function(t,e){const n=new oi;return t.asyncQueue.enqueueAndForget((async()=>Uh(await lc(t),e,n))),n.promise}(Rc(t),e)}!function(t,e=!0){!function(t){Ws=t}(l.Jn),(0,l.Xd)(new d.wA("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Dc(s,new hi(t.getProvider("auth-internal")),new fi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,l.KN)(Hs,"3.4.8",t),(0,l.KN)(Hs,"3.4.8","esm2017")}();var gl=n(72),ml=n(503),yl=function(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let vl=class extends o.w3{constructor(...t){super(...t),(0,h.Z)(this,"clientName",""),(0,h.Z)(this,"clientNumber",""),(0,h.Z)(this,"clientID",""),(0,h.Z)(this,"selectedDate",null),(0,h.Z)(this,"selectedTime",null),(0,h.Z)(this,"selectedServices",""),(0,h.Z)(this,"selectedClient",[]),(0,h.Z)(this,"selectedSave",[]),(0,h.Z)(this,"appointID",""),(0,h.Z)(this,"userPhotoURL",""),(0,h.Z)(this,"auth",null),(0,h.Z)(this,"userInfo","Thanh Tran"),(0,h.Z)(this,"message",""),(0,h.Z)(this,"chartOptions",{chart:{width:380,type:"pie"},labels:["Pedicure","Shellac Pedicure","Polish Change"],responsive:[{breakpoint:480,options:{chart:{width:700},legend:{position:"right"}}}]}),(0,h.Z)(this,"series",[28,34,12])}mounted(){this.auth=(0,c.v0)(),(0,c.Aj)(this.auth,(t=>{console.log("Auth changed",t)})),this.readData(),this.SavePrice()}readData(){this.auth=(0,c.v0)(),this.auth.onAuthStateChanged((t=>{if(null!=t){const s=t.uid;var e=(0,ml.ZF)(gl.q),n=kc(e);const i=Ac(n,s);ll(i).then((t=>{t.forEach((t=>{console.log("From Firestore: ",t.id,t.data());const e=t.data();this.selectedClient.push({name:e.name,phoneNumber:e.phoneNumber,date:e.date,time:e.time,selectedServices:e.service,id:e.id})}))}))}}))}SaveData(){const t=this.selectedClient.map((t=>t.id)).indexOf(this.clientID);if(-1==t){this.auth=(0,c.v0)();var e=this.auth.currentUser.uid;this.selectedClient.push({name:this.clientName,phoneNumber:this.clientNumber,date:this.selectedDate,time:this.selectedTime,selectedServices:this.selectedServices,id:this.clientID});var n=(0,ml.ZF)(gl.q),s=kc(n);this.selectedClient.forEach((async t=>{var n=Nc(s,e,t.id);await dl(n,{name:t.name,phoneNum:t.phoneNumber,date:t.date,time:t.time,service:t.selectedServices,id:t.id})}))}else this.showMessage("Choose different ID for appointment")}SavePrice(){var t=(0,ml.ZF)(gl.q),e=kc(t),n=Nc(e,"perdicures","service");dl(n,{name1:"pedicure",name2:"shellac pedicure",name3:"polish change"});var s=Nc(e,"perdicures","price");dl(s,{price1:"28",price2:"34",price3:"12"})}DeleteAppoint(){this.auth=(0,c.v0)();var t=this.auth.currentUser.uid,e=(0,ml.ZF)(gl.q),n=kc(e);const s=Nc(n,t,this.appointID);fl(s).then((()=>{console.log("appointment deleted"),this.selectedClient.splice(0,this.selectedClient.length),this.readData()}))}showMessage(t){this.message=t,setTimeout((()=>{this.message=""}),5e3)}DeleteAcc(){this.auth=(0,c.v0)();var t=this.auth.currentUser;(0,c.h8)(t).then((()=>{this.showMessage("Delete Account. Logging out"),this.outtahere()})).catch((t=>{this.showMessage("Unable to delete account")}))}outtahere(){this.auth&&(0,c.w7)(this.auth),this.$router.push({path:"/"})}};vl=yl([o.wA],vl);var wl,El,Tl=vl,bl=Tl,Sl=n(1),Il=(0,Sl.Z)(bl,a,u,!1,null,"2f163432",null),Cl=Il.exports;let Al=(wl=(0,o.wA)({name:"BookView",components:{Scheduling:Cl}}),wl(El=class extends o.w3{})||El);var Nl=Al,_l=(0,Sl.Z)(Nl,i,r,!1,null,null,null),Dl=_l.exports}}]);
//# sourceMappingURL=262.22580041.js.map