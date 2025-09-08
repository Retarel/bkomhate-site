(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ab(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $g={exports:{}},_c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function uD(){if(a0)return _c;a0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:i,type:n,key:c,ref:a!==void 0?a:null,props:l}}return _c.Fragment=e,_c.jsx=t,_c.jsxs=t,_c}var o0;function cD(){return o0||(o0=1,$g.exports=uD()),$g.exports}var L=cD(),Wg={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function hD(){if(l0)return De;l0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function I(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,W={};function Q(x,ee,ue){this.props=x,this.context=ee,this.refs=W,this.updater=ue||O}Q.prototype.isReactComponent={},Q.prototype.setState=function(x,ee){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,ee,"setState")},Q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function de(){}de.prototype=Q.prototype;function he(x,ee,ue){this.props=x,this.context=ee,this.refs=W,this.updater=ue||O}var ae=he.prototype=new de;ae.constructor=he,G(ae,Q.prototype),ae.isPureReactComponent=!0;var Ie=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Te=Object.prototype.hasOwnProperty;function N(x,ee,ue,re,ve,xe){return ue=xe.ref,{$$typeof:i,type:x,key:ee,ref:ue!==void 0?ue:null,props:xe}}function S(x,ee){return N(x.type,ee,void 0,void 0,void 0,x.props)}function A(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function D(x){var ee={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return ee[ue]})}var P=/\/+/g;function k(x,ee){return typeof x=="object"&&x!==null&&x.key!=null?D(""+x.key):ee.toString(36)}function C(){}function tn(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(C,C):(x.status="pending",x.then(function(ee){x.status==="pending"&&(x.status="fulfilled",x.value=ee)},function(ee){x.status==="pending"&&(x.status="rejected",x.reason=ee)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function vt(x,ee,ue,re,ve){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Se=!1;if(x===null)Se=!0;else switch(xe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(x.$$typeof){case i:case e:Se=!0;break;case y:return Se=x._init,vt(Se(x._payload),ee,ue,re,ve)}}if(Se)return ve=ve(x),Se=re===""?"."+k(x,0):re,Ie(ve)?(ue="",Se!=null&&(ue=Se.replace(P,"$&/")+"/"),vt(ve,ee,ue,"",function(br){return br})):ve!=null&&(A(ve)&&(ve=S(ve,ue+(ve.key==null||x&&x.key===ve.key?"":(""+ve.key).replace(P,"$&/")+"/")+Se)),ee.push(ve)),1;Se=0;var Kt=re===""?".":re+":";if(Ie(x))for(var st=0;st<x.length;st++)re=x[st],xe=Kt+k(re,st),Se+=vt(re,ee,ue,xe,ve);else if(st=I(x),typeof st=="function")for(x=st.call(x),st=0;!(re=x.next()).done;)re=re.value,xe=Kt+k(re,st++),Se+=vt(re,ee,ue,xe,ve);else if(xe==="object"){if(typeof x.then=="function")return vt(tn(x),ee,ue,re,ve);throw ee=String(x),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Y(x,ee,ue){if(x==null)return x;var re=[],ve=0;return vt(x,re,"","",function(xe){return ee.call(ue,xe,ve++)}),re}function oe(x){if(x._status===-1){var ee=x._result;ee=ee(),ee.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=ee)}if(x._status===1)return x._result.default;throw x._result}var ye=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Ge(){}return De.Children={map:Y,forEach:function(x,ee,ue){Y(x,function(){ee.apply(this,arguments)},ue)},count:function(x){var ee=0;return Y(x,function(){ee++}),ee},toArray:function(x){return Y(x,function(ee){return ee})||[]},only:function(x){if(!A(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},De.Component=Q,De.Fragment=t,De.Profiler=a,De.PureComponent=he,De.StrictMode=n,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,De.__COMPILER_RUNTIME={__proto__:null,c:function(x){return me.H.useMemoCache(x)}},De.cache=function(x){return function(){return x.apply(null,arguments)}},De.cloneElement=function(x,ee,ue){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var re=G({},x.props),ve=x.key,xe=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(xe=void 0),ee.key!==void 0&&(ve=""+ee.key),ee)!Te.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(re[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)re.children=ue;else if(1<Se){for(var Kt=Array(Se),st=0;st<Se;st++)Kt[st]=arguments[st+2];re.children=Kt}return N(x.type,ve,void 0,void 0,xe,re)},De.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},De.createElement=function(x,ee,ue){var re,ve={},xe=null;if(ee!=null)for(re in ee.key!==void 0&&(xe=""+ee.key),ee)Te.call(ee,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ve[re]=ee[re]);var Se=arguments.length-2;if(Se===1)ve.children=ue;else if(1<Se){for(var Kt=Array(Se),st=0;st<Se;st++)Kt[st]=arguments[st+2];ve.children=Kt}if(x&&x.defaultProps)for(re in Se=x.defaultProps,Se)ve[re]===void 0&&(ve[re]=Se[re]);return N(x,xe,void 0,void 0,null,ve)},De.createRef=function(){return{current:null}},De.forwardRef=function(x){return{$$typeof:f,render:x}},De.isValidElement=A,De.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:oe}},De.memo=function(x,ee){return{$$typeof:g,type:x,compare:ee===void 0?null:ee}},De.startTransition=function(x){var ee=me.T,ue={};me.T=ue;try{var re=x(),ve=me.S;ve!==null&&ve(ue,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Ge,ye)}catch(xe){ye(xe)}finally{me.T=ee}},De.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},De.use=function(x){return me.H.use(x)},De.useActionState=function(x,ee,ue){return me.H.useActionState(x,ee,ue)},De.useCallback=function(x,ee){return me.H.useCallback(x,ee)},De.useContext=function(x){return me.H.useContext(x)},De.useDebugValue=function(){},De.useDeferredValue=function(x,ee){return me.H.useDeferredValue(x,ee)},De.useEffect=function(x,ee,ue){var re=me.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(x,ee)},De.useId=function(){return me.H.useId()},De.useImperativeHandle=function(x,ee,ue){return me.H.useImperativeHandle(x,ee,ue)},De.useInsertionEffect=function(x,ee){return me.H.useInsertionEffect(x,ee)},De.useLayoutEffect=function(x,ee){return me.H.useLayoutEffect(x,ee)},De.useMemo=function(x,ee){return me.H.useMemo(x,ee)},De.useOptimistic=function(x,ee){return me.H.useOptimistic(x,ee)},De.useReducer=function(x,ee,ue){return me.H.useReducer(x,ee,ue)},De.useRef=function(x){return me.H.useRef(x)},De.useState=function(x){return me.H.useState(x)},De.useSyncExternalStore=function(x,ee,ue){return me.H.useSyncExternalStore(x,ee,ue)},De.useTransition=function(){return me.H.useTransition()},De.version="19.1.1",De}var u0;function uy(){return u0||(u0=1,Wg.exports=hD()),Wg.exports}var Fe=uy();const dD=Ab(Fe);var Xg={exports:{}},yc={},Jg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function fD(){return c0||(c0=1,(function(i){function e(Y,oe){var ye=Y.length;Y.push(oe);e:for(;0<ye;){var Ge=ye-1>>>1,x=Y[Ge];if(0<a(x,oe))Y[Ge]=oe,Y[ye]=x,ye=Ge;else break e}}function t(Y){return Y.length===0?null:Y[0]}function n(Y){if(Y.length===0)return null;var oe=Y[0],ye=Y.pop();if(ye!==oe){Y[0]=ye;e:for(var Ge=0,x=Y.length,ee=x>>>1;Ge<ee;){var ue=2*(Ge+1)-1,re=Y[ue],ve=ue+1,xe=Y[ve];if(0>a(re,ye))ve<x&&0>a(xe,re)?(Y[Ge]=xe,Y[ve]=ye,Ge=ve):(Y[Ge]=re,Y[ue]=ye,Ge=ue);else if(ve<x&&0>a(xe,ye))Y[Ge]=xe,Y[ve]=ye,Ge=ve;else break e}}return oe}function a(Y,oe){var ye=Y.sortIndex-oe.sortIndex;return ye!==0?ye:Y.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var m=[],g=[],y=1,T=null,I=3,O=!1,G=!1,W=!1,Q=!1,de=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Ie(Y){for(var oe=t(g);oe!==null;){if(oe.callback===null)n(g);else if(oe.startTime<=Y)n(g),oe.sortIndex=oe.expirationTime,e(m,oe);else break;oe=t(g)}}function me(Y){if(W=!1,Ie(Y),!G)if(t(m)!==null)G=!0,Te||(Te=!0,k());else{var oe=t(g);oe!==null&&vt(me,oe.startTime-Y)}}var Te=!1,N=-1,S=5,A=-1;function D(){return Q?!0:!(i.unstable_now()-A<S)}function P(){if(Q=!1,Te){var Y=i.unstable_now();A=Y;var oe=!0;try{e:{G=!1,W&&(W=!1,he(N),N=-1),O=!0;var ye=I;try{t:{for(Ie(Y),T=t(m);T!==null&&!(T.expirationTime>Y&&D());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,I=T.priorityLevel;var x=Ge(T.expirationTime<=Y);if(Y=i.unstable_now(),typeof x=="function"){T.callback=x,Ie(Y),oe=!0;break t}T===t(m)&&n(m),Ie(Y)}else n(m);T=t(m)}if(T!==null)oe=!0;else{var ee=t(g);ee!==null&&vt(me,ee.startTime-Y),oe=!1}}break e}finally{T=null,I=ye,O=!1}oe=void 0}}finally{oe?k():Te=!1}}}var k;if(typeof ae=="function")k=function(){ae(P)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,tn=C.port2;C.port1.onmessage=P,k=function(){tn.postMessage(null)}}else k=function(){de(P,0)};function vt(Y,oe){N=de(function(){Y(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_next=function(Y){switch(I){case 1:case 2:case 3:var oe=3;break;default:oe=I}var ye=I;I=oe;try{return Y()}finally{I=ye}},i.unstable_requestPaint=function(){Q=!0},i.unstable_runWithPriority=function(Y,oe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ye=I;I=Y;try{return oe()}finally{I=ye}},i.unstable_scheduleCallback=function(Y,oe,ye){var Ge=i.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ge+ye:Ge):ye=Ge,Y){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ye+x,Y={id:y++,callback:oe,priorityLevel:Y,startTime:ye,expirationTime:x,sortIndex:-1},ye>Ge?(Y.sortIndex=ye,e(g,Y),t(m)===null&&Y===t(g)&&(W?(he(N),N=-1):W=!0,vt(me,ye-Ge))):(Y.sortIndex=x,e(m,Y),G||O||(G=!0,Te||(Te=!0,k()))),Y},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Y){var oe=I;return function(){var ye=I;I=oe;try{return Y.apply(this,arguments)}finally{I=ye}}}})(Zg)),Zg}var h0;function mD(){return h0||(h0=1,Jg.exports=fD()),Jg.exports}var e_={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function pD(){if(d0)return mn;d0=1;var i=uy();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,mn.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},mn.flushSync=function(m){var g=c.T,y=n.p;try{if(c.T=null,n.p=2,m)return m()}finally{c.T=g,n.p=y,n.d.f()}},mn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,n.d.C(m,g))},mn.prefetchDNS=function(m){typeof m=="string"&&n.d.D(m)},mn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin),I=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?n.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:I,fetchPriority:O}):y==="script"&&n.d.X(m,{crossOrigin:T,integrity:I,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},mn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);n.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&n.d.M(m)},mn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin);n.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},mn.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);n.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else n.d.m(m)},mn.requestFormReset=function(m){n.d.r(m)},mn.unstable_batchedUpdates=function(m,g){return m(g)},mn.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},mn.useFormStatus=function(){return c.H.useHostTransitionStatus()},mn.version="19.1.1",mn}var f0;function gD(){if(f0)return e_.exports;f0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),e_.exports=pD(),e_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function _D(){if(m0)return yc;m0=1;var i=mD(),e=uy(),t=gD();function n(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(n(188))}function m(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(n(188));return s!==r?null:r}for(var o=r,u=s;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return f(d),r;if(p===u)return f(d),s;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var E=!1,w=d.child;w;){if(w===o){E=!0,o=d,u=p;break}if(w===u){E=!0,u=d,o=p;break}w=w.sibling}if(!E){for(w=p.child;w;){if(w===o){E=!0,o=p,u=d;break}if(w===u){E=!0,u=p,o=d;break}w=w.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),he=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function k(r){return r===null||typeof r!="object"?null:(r=P&&r[P]||r["@@iterator"],typeof r=="function"?r:null)}var C=Symbol.for("react.client.reference");function tn(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===C?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case G:return"Fragment";case Q:return"Profiler";case W:return"StrictMode";case me:return"Suspense";case Te:return"SuspenseList";case A:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case O:return"Portal";case ae:return(r.displayName||"Context")+".Provider";case he:return(r._context.displayName||"Context")+".Consumer";case Ie:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case N:return s=r.displayName||null,s!==null?s:tn(r.type)||"Memo";case S:s=r._payload,r=r._init;try{return tn(r(s))}catch{}}return null}var vt=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ge=[],x=-1;function ee(r){return{current:r}}function ue(r){0>x||(r.current=Ge[x],Ge[x]=null,x--)}function re(r,s){x++,Ge[x]=r.current,r.current=s}var ve=ee(null),xe=ee(null),Se=ee(null),Kt=ee(null);function st(r,s){switch(re(Se,s),re(xe,r),re(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Ow(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Ow(s),r=kw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(ve),re(ve,r)}function br(){ue(ve),ue(xe),ue(Se)}function Hi(r){r.memoizedState!==null&&re(Kt,r);var s=ve.current,o=kw(s,r.type);s!==o&&(re(xe,r),re(ve,o))}function ii(r){xe.current===r&&(ue(ve),ue(xe)),Kt.current===r&&(ue(Kt),dc._currentValue=ye)}var Js=Object.prototype.hasOwnProperty,Zs=i.unstable_scheduleCallback,ea=i.unstable_cancelCallback,uu=i.unstable_shouldYield,Hh=i.unstable_requestPaint,Wn=i.unstable_now,$m=i.unstable_getCurrentPriorityLevel,cu=i.unstable_ImmediatePriority,go=i.unstable_UserBlockingPriority,ta=i.unstable_NormalPriority,Wm=i.unstable_LowPriority,_o=i.unstable_IdlePriority,hu=i.log,Gh=i.unstable_setDisableYieldValue,Et=null,$e=null;function Mn(r){if(typeof hu=="function"&&Gh(r),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Et,r)}catch{}}var dn=Math.clz32?Math.clz32:na,Kh=Math.log,Xm=Math.LN2;function na(r){return r>>>=0,r===0?32:31-(Kh(r)/Xm|0)|0}var ra=256,ia=4194304;function dr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function yo(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var d=0,p=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?d=dr(u):(E&=w,E!==0?d=dr(E):o||(o=w&~r,o!==0&&(d=dr(o))))):(w=u&~p,w!==0?d=dr(w):E!==0?d=dr(E):o||(o=u&~r,o!==0&&(d=dr(o)))),d===0?0:s!==0&&s!==d&&(s&p)===0&&(p=d&-d,o=s&-s,p>=o||p===32&&(o&4194048)!==0)?s:d}function sa(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function du(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fu(){var r=ra;return ra<<=1,(ra&4194048)===0&&(ra=256),r}function mu(){var r=ia;return ia<<=1,(ia&62914560)===0&&(ia=4194304),r}function si(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function ai(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function pu(r,s,o,u,d,p){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var w=r.entanglements,R=r.expirationTimes,q=r.hiddenUpdates;for(o=E&~o;0<o;){var $=31-dn(o),J=1<<$;w[$]=0,R[$]=-1;var F=q[$];if(F!==null)for(q[$]=null,$=0;$<F.length;$++){var j=F[$];j!==null&&(j.lane&=-536870913)}o&=~J}u!==0&&Ar(r,u,0),p!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=p&~(E&~s))}function Ar(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-dn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function gu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-dn(o),d=1<<u;d&s|r[u]&s&&(r[u]|=s),o&=~d}}function Gi(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function vo(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Ki(){var r=oe.p;return r!==0?r:(r=window.event,r===void 0?32:e0(r.type))}function Qh(r,s){var o=oe.p;try{return oe.p=r,s()}finally{oe.p=o}}var ct=Math.random().toString(36).slice(2),Bt="__reactFiber$"+ct,Pt="__reactProps$"+ct,Xn="__reactContainer$"+ct,_u="__reactEvents$"+ct,Jm="__reactListeners$"+ct,Qi="__reactHandles$"+ct,Yh="__reactResources$"+ct,aa="__reactMarker$"+ct;function Yi(r){delete r[Bt],delete r[Pt],delete r[_u],delete r[Jm],delete r[Qi]}function oi(r){var s=r[Bt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Xn]||o[Bt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=Bw(r);r!==null;){if(o=r[Bt])return o;r=Bw(r)}return s}r=o,o=r.parentNode}return null}function Sr(r){if(r=r[Bt]||r[Xn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Rr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(n(33))}function En(r){var s=r[Yh];return s||(s=r[Yh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function St(r){r[aa]=!0}var yu=new Set,Eo={};function fr(r,s){li(r,s),li(r+"Capture",s)}function li(r,s){for(Eo[r]=s,r=0;r<s.length;r++)yu.add(s[r])}var $h=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wh={},oa={};function Xh(r){return Js.call(oa,r)?!0:Js.call(Wh,r)?!1:$h.test(r)?oa[r]=!0:(Wh[r]=!0,!1)}function $i(r,s,o){if(Xh(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Cr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function nn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var la,Jh;function ui(r){if(la===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);la=s&&s[1]||"",Jh=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+la+r+Jh}var To=!1;function wo(r,s){if(!r||To)return"";To=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(j){var F=j}Reflect.construct(r,[],J)}else{try{J.call()}catch(j){F=j}r.call(J.prototype)}}else{try{throw Error()}catch(j){F=j}(J=r())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(j){if(j&&F&&typeof j.stack=="string")return[j.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],w=p[1];if(E&&w){var R=E.split(`
`),q=w.split(`
`);for(d=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;d<q.length&&!q[d].includes("DetermineComponentFrameRoot");)d++;if(u===R.length||d===q.length)for(u=R.length-1,d=q.length-1;1<=u&&0<=d&&R[u]!==q[d];)d--;for(;1<=u&&0<=d;u--,d--)if(R[u]!==q[d]){if(u!==1||d!==1)do if(u--,d--,0>d||R[u]!==q[d]){var $=`
`+R[u].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),$}while(1<=u&&0<=d);break}}}finally{To=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?ui(o):""}function vu(r){switch(r.tag){case 26:case 27:case 5:return ui(r.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 15:return wo(r.type,!1);case 11:return wo(r.type.render,!1);case 1:return wo(r.type,!0);case 31:return ui("Activity");default:return""}}function Io(r){try{var s="";do s+=vu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Tn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Eu(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Zm(r){var s=Eu(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function bo(r){r._valueTracker||(r._valueTracker=Zm(r))}function Tu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Eu(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function ua(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var ep=/[\n"\\]/g;function Vt(r){return r.replace(ep,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ln(r,s,o,u,d,p,E,w){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Tn(s)):r.value!==""+Tn(s)&&(r.value=""+Tn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?Wi(r,E,Tn(s)):o!=null?Wi(r,E,Tn(o)):u!=null&&r.removeAttribute("value"),d==null&&p!=null&&(r.defaultChecked=!!p),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+Tn(w):r.removeAttribute("name")}function ca(r,s,o,u,d,p,E,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),s!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||s!=null))return;o=o!=null?""+Tn(o):"",s=s!=null?""+Tn(s):o,w||s===r.value||(r.value=s),r.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=w?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Wi(r,s,o){s==="number"&&ua(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function ci(r,s,o,u){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Tn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function et(r,s,o){if(s!=null&&(s=""+Tn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Tn(o):""}function ha(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(n(92));if(vt(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Tn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Jn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var da=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zh(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||da.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function wu(r,s,o){if(s!=null&&typeof s!="object")throw Error(n(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&Zh(r,d,u)}else for(var p in s)s.hasOwnProperty(p)&&Zh(r,p,s[p])}function Iu(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ao(r){return np.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var hi=null;function Zn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var di=null,fi=null;function bu(r){var s=Sr(r);if(s&&(r=s.stateNode)){var o=r[Pt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Ln(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var d=u[Pt]||null;if(!d)throw Error(n(90));Ln(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Tu(u)}break e;case"textarea":et(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ci(r,!!o.multiple,s,!1)}}}var Dr=!1;function ed(r,s,o){if(Dr)return r(s,o);Dr=!0;try{var u=r(s);return u}finally{if(Dr=!1,(di!==null||fi!==null)&&(Qd(),di&&(s=di,r=fi,fi=di=null,bu(s),r)))for(s=0;s<r.length;s++)bu(r[s])}}function fa(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Pt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(mr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){er=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{er=!1}var Nr=null,Xi=null,mi=null;function Au(){if(mi)return mi;var r,s=Xi,o=s.length,u,d="value"in Nr?Nr.value:Nr.textContent,p=d.length;for(r=0;r<o&&s[r]===d[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===d[p-u];u++);return mi=d.slice(r,1<u?1-u:void 0)}function xr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Pr(){return!0}function Su(){return!1}function Qt(r){function s(o,u,d,p,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pr:Su,this.isPropagationStopped=Su,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),s}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Qt(Qe),pa=y({},Qe,{view:0,detail:0}),td=Qt(pa),Ro,Co,Vr,ga=y({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Vr&&(Vr&&r.type==="mousemove"?(Ro=r.screenX-Vr.screenX,Co=r.screenY-Vr.screenY):Co=Ro=0,Vr=r),Ro)},movementY:function(r){return"movementY"in r?r.movementY:Co}}),tr=Qt(ga),nd=y({},ga,{dataTransfer:0}),rp=Qt(nd),_a=y({},pa,{relatedTarget:0}),Do=Qt(_a),Ru=y({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),No=Qt(Ru),rd=y({},Qe,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),xo=Qt(rd),ip=y({},Qe,{data:0}),Cu=Qt(ip),ya={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=sd[r])?!!s[r]:!1}function va(){return Du}var ad=y({},pa,{key:function(r){if(r.key){var s=ya[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=xr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?id[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(r){return r.type==="keypress"?xr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?xr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Po=Qt(ad),od=y({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=Qt(od),pi=y({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),ld=Qt(pi),ud=y({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=Qt(ud),hd=y({},ga,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Vo=Qt(hd),wn=y({},Qe,{newState:0,oldState:0}),dd=Qt(wn),fd=[9,13,27,32],Or=mr&&"CompositionEvent"in window,h=null;mr&&"documentMode"in document&&(h=document.documentMode);var _=mr&&"TextEvent"in window&&!h,v=mr&&(!Or||h&&8<h&&11>=h),b=" ",U=!1;function K(r,s){switch(r){case"keyup":return fd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ue=!1;function zt(r,s){switch(r){case"compositionend":return ie(s);case"keypress":return s.which!==32?null:(U=!0,b);case"textInput":return r=s.data,r===b&&U?null:r;default:return null}}function Be(r,s){if(Ue)return r==="compositionend"||!Or&&K(r,s)?(r=Au(),mi=Xi=Nr=null,Ue=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Yt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Yt[r.type]:s==="textarea"}function gi(r,s,o,u){di?fi?fi.push(u):fi=[u]:di=u,s=Zd(s,"onChange"),0<s.length&&(o=new So("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var rn=null,kr=null;function xu(r){Dw(r,0)}function md(r){var s=Rr(r);if(Tu(s))return r}function Wv(r,s){if(r==="change")return s}var Xv=!1;if(mr){var sp;if(mr){var ap="oninput"in document;if(!ap){var Jv=document.createElement("div");Jv.setAttribute("oninput","return;"),ap=typeof Jv.oninput=="function"}sp=ap}else sp=!1;Xv=sp&&(!document.documentMode||9<document.documentMode)}function Zv(){rn&&(rn.detachEvent("onpropertychange",eE),kr=rn=null)}function eE(r){if(r.propertyName==="value"&&md(kr)){var s=[];gi(s,kr,r,Zn(r)),ed(xu,s)}}function B1(r,s,o){r==="focusin"?(Zv(),rn=s,kr=o,rn.attachEvent("onpropertychange",eE)):r==="focusout"&&Zv()}function z1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return md(kr)}function q1(r,s){if(r==="click")return md(s)}function F1(r,s){if(r==="input"||r==="change")return md(s)}function j1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:j1;function Pu(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Js.call(s,d)||!Un(r[d],s[d]))return!1}return!0}function tE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function nE(r,s){var o=tE(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tE(o)}}function rE(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?rE(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function iE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ua(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ua(r.document)}return s}function op(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var H1=mr&&"documentMode"in document&&11>=document.documentMode,Oo=null,lp=null,Vu=null,up=!1;function sE(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;up||Oo==null||Oo!==ua(u)||(u=Oo,"selectionStart"in u&&op(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vu&&Pu(Vu,u)||(Vu=u,u=Zd(lp,"onSelect"),0<u.length&&(s=new So("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Oo)))}function Ea(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var ko={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},cp={},aE={};mr&&(aE=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Ta(r){if(cp[r])return cp[r];if(!ko[r])return r;var s=ko[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in aE)return cp[r]=s[o];return r}var oE=Ta("animationend"),lE=Ta("animationiteration"),uE=Ta("animationstart"),G1=Ta("transitionrun"),K1=Ta("transitionstart"),Q1=Ta("transitioncancel"),cE=Ta("transitionend"),hE=new Map,hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hp.push("scrollEnd");function pr(r,s){hE.set(r,s),fr(s,[r])}var dE=new WeakMap;function nr(r,s){if(typeof r=="object"&&r!==null){var o=dE.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Io(s)},dE.set(r,s),s)}return{value:r,source:s,stack:Io(s)}}var rr=[],Mo=0,dp=0;function pd(){for(var r=Mo,s=dp=Mo=0;s<r;){var o=rr[s];rr[s++]=null;var u=rr[s];rr[s++]=null;var d=rr[s];rr[s++]=null;var p=rr[s];if(rr[s++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}p!==0&&fE(o,d,p)}}function gd(r,s,o,u){rr[Mo++]=r,rr[Mo++]=s,rr[Mo++]=o,rr[Mo++]=u,dp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function fp(r,s,o,u){return gd(r,s,o,u),_d(r)}function Lo(r,s){return gd(r,null,null,s),_d(r)}function fE(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(d=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,d&&s!==null&&(d=31-dn(o),r=p.hiddenUpdates,u=r[d],u===null?r[d]=[s]:u.push(s),s.lane=o|536870912),p):null}function _d(r){if(50<ic)throw ic=0,vg=null,Error(n(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Uo={};function Y1(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(r,s,o,u){return new Y1(r,s,o,u)}function mp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _i(r,s){var o=r.alternate;return o===null?(o=Bn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function mE(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function yd(r,s,o,u,d,p){var E=0;if(u=r,typeof r=="function")mp(r)&&(E=1);else if(typeof r=="string")E=WC(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case A:return r=Bn(31,o,s,d),r.elementType=A,r.lanes=p,r;case G:return wa(o.children,d,p,s);case W:E=8,d|=24;break;case Q:return r=Bn(12,o,s,d|2),r.elementType=Q,r.lanes=p,r;case me:return r=Bn(13,o,s,d),r.elementType=me,r.lanes=p,r;case Te:return r=Bn(19,o,s,d),r.elementType=Te,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case de:case ae:E=10;break e;case he:E=9;break e;case Ie:E=11;break e;case N:E=14;break e;case S:E=16,u=null;break e}E=29,o=Error(n(130,r===null?"null":typeof r,"")),u=null}return s=Bn(E,o,s,d),s.elementType=r,s.type=u,s.lanes=p,s}function wa(r,s,o,u){return r=Bn(7,r,u,s),r.lanes=o,r}function pp(r,s,o){return r=Bn(6,r,null,s),r.lanes=o,r}function gp(r,s,o){return s=Bn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Bo=[],zo=0,vd=null,Ed=0,ir=[],sr=0,Ia=null,yi=1,vi="";function ba(r,s){Bo[zo++]=Ed,Bo[zo++]=vd,vd=r,Ed=s}function pE(r,s,o){ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=Ia,Ia=r;var u=yi;r=vi;var d=32-dn(u)-1;u&=~(1<<d),o+=1;var p=32-dn(s)+d;if(30<p){var E=d-d%5;p=(u&(1<<E)-1).toString(32),u>>=E,d-=E,yi=1<<32-dn(s)+d|o<<d|u,vi=p+r}else yi=1<<p|o<<d|u,vi=r}function _p(r){r.return!==null&&(ba(r,1),pE(r,1,0))}function yp(r){for(;r===vd;)vd=Bo[--zo],Bo[zo]=null,Ed=Bo[--zo],Bo[zo]=null;for(;r===Ia;)Ia=ir[--sr],ir[sr]=null,vi=ir[--sr],ir[sr]=null,yi=ir[--sr],ir[sr]=null}var In=null,Tt=null,Ke=!1,Aa=null,Mr=!1,vp=Error(n(519));function Sa(r){var s=Error(n(418,""));throw Mu(nr(s,r)),vp}function gE(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Bt]=r,s[Pt]=u,o){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(o=0;o<ac.length;o++)Oe(ac[o],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Oe("invalid",s),ca(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),bo(s);break;case"select":Oe("invalid",s);break;case"textarea":Oe("invalid",s),ha(s,u.value,u.defaultValue,u.children),bo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Vw(s.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",s),Oe("toggle",s)),u.onScroll!=null&&Oe("scroll",s),u.onScrollEnd!=null&&Oe("scrollend",s),u.onClick!=null&&(s.onclick=ef),s=!0):s=!1,s||Sa(r)}function _E(r){for(In=r.return;In;)switch(In.tag){case 5:case 13:Mr=!1;return;case 27:case 3:Mr=!0;return;default:In=In.return}}function Ou(r){if(r!==In)return!1;if(!Ke)return _E(r),Ke=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||kg(r.type,r.memoizedProps)),o=!o),o&&Tt&&Sa(r),_E(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Tt=_r(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,fs(r.type)?(r=Bg,Bg=null,Tt=r):Tt=s):Tt=In?_r(r.stateNode.nextSibling):null;return!0}function ku(){Tt=In=null,Ke=!1}function yE(){var r=Aa;return r!==null&&(xn===null?xn=r:xn.push.apply(xn,r),Aa=null),r}function Mu(r){Aa===null?Aa=[r]:Aa.push(r)}var Ep=ee(null),Ra=null,Ei=null;function Ji(r,s,o){re(Ep,s._currentValue),s._currentValue=o}function Ti(r){r._currentValue=Ep.current,ue(Ep)}function Tp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function wp(r,s,o,u){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var p=d.dependencies;if(p!==null){var E=d.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=d;for(var R=0;R<s.length;R++)if(w.context===s[R]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),Tp(p.return,o,r),u||(E=null);break e}p=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Tp(E,o,r),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===r){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Lu(r,s,o,u){r=null;for(var d=s,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(n(387));if(E=E.memoizedProps,E!==null){var w=d.type;Un(d.pendingProps.value,E.value)||(r!==null?r.push(w):r=[w])}}else if(d===Kt.current){if(E=d.alternate,E===null)throw Error(n(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(dc):r=[dc])}d=d.return}r!==null&&wp(s,r,o,u),s.flags|=262144}function Td(r){for(r=r.firstContext;r!==null;){if(!Un(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ca(r){Ra=r,Ei=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function fn(r){return vE(Ra,r)}function wd(r,s){return Ra===null&&Ca(r),vE(r,s)}function vE(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Ei===null){if(r===null)throw Error(n(308));Ei=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Ei=Ei.next=s;return o}var $1=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},W1=i.unstable_scheduleCallback,X1=i.unstable_NormalPriority,Ft={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ip(){return{controller:new $1,data:new Map,refCount:0}}function Uu(r){r.refCount--,r.refCount===0&&W1(X1,function(){r.controller.abort()})}var Bu=null,bp=0,qo=0,Fo=null;function J1(r,s){if(Bu===null){var o=Bu=[];bp=0,qo=Sg(),Fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return bp++,s.then(EE,EE),s}function EE(){if(--bp===0&&Bu!==null){Fo!==null&&(Fo.status="fulfilled");var r=Bu;Bu=null,qo=0,Fo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function Z1(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var TE=Y.S;Y.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&J1(r,s),TE!==null&&TE(r,s)};var Da=ee(null);function Ap(){var r=Da.current;return r!==null?r:at.pooledCache}function Id(r,s){s===null?re(Da,Da.current):re(Da,s.pool)}function wE(){var r=Ap();return r===null?null:{parent:Ft._currentValue,pool:r}}var zu=Error(n(460)),IE=Error(n(474)),bd=Error(n(542)),Sp={then:function(){}};function bE(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ad(){}function AE(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ad,Ad),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,RE(r),r;default:if(typeof s.status=="string")s.then(Ad,Ad);else{if(r=at,r!==null&&100<r.shellSuspendCounter)throw Error(n(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,RE(r),r}throw qu=s,zu}}var qu=null;function SE(){if(qu===null)throw Error(n(459));var r=qu;return qu=null,r}function RE(r){if(r===zu||r===bd)throw Error(n(483))}var Zi=!1;function Rp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function es(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ts(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=_d(r),fE(r,null,o),s}return gd(r,u,s,o),_d(r)}function Fu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,gu(r,o)}}function Dp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=s:p=p.next=s}else d=p=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Np=!1;function ju(){if(Np){var r=Fo;if(r!==null)throw r}}function Hu(r,s,o,u){Np=!1;var d=r.updateQueue;Zi=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var R=w,q=R.next;R.next=null,E===null?p=q:E.next=q,E=R;var $=r.alternate;$!==null&&($=$.updateQueue,w=$.lastBaseUpdate,w!==E&&(w===null?$.firstBaseUpdate=q:w.next=q,$.lastBaseUpdate=R))}if(p!==null){var J=d.baseState;E=0,$=q=R=null,w=p;do{var F=w.lane&-536870913,j=F!==w.lane;if(j?(ze&F)===F:(u&F)===F){F!==0&&F===qo&&(Np=!0),$!==null&&($=$.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=r,we=w;F=s;var rt=o;switch(we.tag){case 1:if(Ae=we.payload,typeof Ae=="function"){J=Ae.call(rt,J,F);break e}J=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=we.payload,F=typeof Ae=="function"?Ae.call(rt,J,F):Ae,F==null)break e;J=y({},J,F);break e;case 2:Zi=!0}}F=w.callback,F!==null&&(r.flags|=64,j&&(r.flags|=8192),j=d.callbacks,j===null?d.callbacks=[F]:j.push(F))}else j={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},$===null?(q=$=j,R=J):$=$.next=j,E|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;j=w,w=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);$===null&&(R=J),d.baseState=R,d.firstBaseUpdate=q,d.lastBaseUpdate=$,p===null&&(d.shared.lanes=0),us|=E,r.lanes=E,r.memoizedState=J}}function CE(r,s){if(typeof r!="function")throw Error(n(191,r));r.call(s)}function DE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)CE(o[r],s)}var jo=ee(null),Sd=ee(0);function NE(r,s){r=Ci,re(Sd,r),re(jo,s),Ci=r|s.baseLanes}function xp(){re(Sd,Ci),re(jo,jo.current)}function Pp(){Ci=Sd.current,ue(jo),ue(Sd)}var ns=0,Ne=null,tt=null,Ot=null,Rd=!1,Ho=!1,Na=!1,Cd=0,Gu=0,Go=null,eC=0;function Rt(){throw Error(n(321))}function Vp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Un(r[o],s[o]))return!1;return!0}function Op(r,s,o,u,d,p){return ns=p,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=r===null||r.memoizedState===null?fT:mT,Na=!1,p=o(u,d),Na=!1,Ho&&(p=PE(s,o,u,d)),xE(r),p}function xE(r){Y.H=Od;var s=tt!==null&&tt.next!==null;if(ns=0,Ot=tt=Ne=null,Rd=!1,Gu=0,Go=null,s)throw Error(n(300));r===null||$t||(r=r.dependencies,r!==null&&Td(r)&&($t=!0))}function PE(r,s,o,u){Ne=r;var d=0;do{if(Ho&&(Go=null),Gu=0,Ho=!1,25<=d)throw Error(n(301));if(d+=1,Ot=tt=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Y.H=oC,p=s(o,u)}while(Ho);return p}function tC(){var r=Y.H,s=r.useState()[0];return s=typeof s.then=="function"?Ku(s):s,r=r.useState()[0],(tt!==null?tt.memoizedState:null)!==r&&(Ne.flags|=1024),s}function kp(){var r=Cd!==0;return Cd=0,r}function Mp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Lp(r){if(Rd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Rd=!1}ns=0,Ot=tt=Ne=null,Ho=!1,Gu=Cd=0,Go=null}function Dn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Ne.memoizedState=Ot=r:Ot=Ot.next=r,Ot}function kt(){if(tt===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=tt.next;var s=Ot===null?Ne.memoizedState:Ot.next;if(s!==null)Ot=s,tt=r;else{if(r===null)throw Ne.alternate===null?Error(n(467)):Error(n(310));tt=r,r={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Ot===null?Ne.memoizedState=Ot=r:Ot=Ot.next=r}return Ot}function Up(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ku(r){var s=Gu;return Gu+=1,Go===null&&(Go=[]),r=AE(Go,r,s),s=Ne,(Ot===null?s.memoizedState:Ot.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?fT:mT),r}function Dd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Ku(r);if(r.$$typeof===ae)return fn(r)}throw Error(n(438,String(r)))}function Bp(r){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Up(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=D;return s.index++,o}function wi(r,s){return typeof s=="function"?s(r):s}function Nd(r){var s=kt();return zp(s,tt,r)}function zp(r,s,o){var u=r.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=o;var d=r.baseQueue,p=u.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}s.baseQueue=d=p,u.pending=null}if(p=r.baseState,d===null)r.memoizedState=p;else{s=d.next;var w=E=null,R=null,q=s,$=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(ze&J)===J:(ns&J)===J){var F=q.revertLane;if(F===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===qo&&($=!0);else if((ns&F)===F){q=q.next,F===qo&&($=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=J,E=p):R=R.next=J,Ne.lanes|=F,us|=F;J=q.action,Na&&o(p,J),p=q.hasEagerState?q.eagerState:o(p,J)}else F={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=F,E=p):R=R.next=F,Ne.lanes|=J,us|=J;q=q.next}while(q!==null&&q!==s);if(R===null?E=p:R.next=w,!Un(p,r.memoizedState)&&($t=!0,$&&(o=Fo,o!==null)))throw o;r.memoizedState=p,r.baseState=E,r.baseQueue=R,u.lastRenderedState=p}return d===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function qp(r){var s=kt(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=r;var u=o.dispatch,d=o.pending,p=s.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=r(p,E.action),E=E.next;while(E!==d);Un(p,s.memoizedState)||($t=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function VE(r,s,o){var u=Ne,d=kt(),p=Ke;if(p){if(o===void 0)throw Error(n(407));o=o()}else o=s();var E=!Un((tt||d).memoizedState,o);E&&(d.memoizedState=o,$t=!0),d=d.queue;var w=ME.bind(null,u,d,r);if(Qu(2048,8,w,[r]),d.getSnapshot!==s||E||Ot!==null&&Ot.memoizedState.tag&1){if(u.flags|=2048,Ko(9,xd(),kE.bind(null,u,d,o,s),null),at===null)throw Error(n(349));p||(ns&124)!==0||OE(u,s,o)}return o}function OE(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Up(),Ne.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function kE(r,s,o,u){s.value=o,s.getSnapshot=u,LE(s)&&UE(r)}function ME(r,s,o){return o(function(){LE(s)&&UE(r)})}function LE(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Un(r,o)}catch{return!0}}function UE(r){var s=Lo(r,2);s!==null&&Hn(s,r,2)}function Fp(r){var s=Dn();if(typeof r=="function"){var o=r;if(r=o(),Na){Mn(!0);try{o()}finally{Mn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:r},s}function BE(r,s,o,u){return r.baseState=o,zp(r,tt,typeof u=="function"?u:wi)}function nC(r,s,o,u,d){if(Vd(r))throw Error(n(485));if(r=s.action,r!==null){var p={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};Y.T!==null?o(!0):p.isTransition=!1,u(p),o=s.pending,o===null?(p.next=s.pending=p,zE(s,p)):(p.next=o.next,s.pending=o.next=p)}}function zE(r,s){var o=s.action,u=s.payload,d=r.state;if(s.isTransition){var p=Y.T,E={};Y.T=E;try{var w=o(d,u),R=Y.S;R!==null&&R(E,w),qE(r,s,w)}catch(q){jp(r,s,q)}finally{Y.T=p}}else try{p=o(d,u),qE(r,s,p)}catch(q){jp(r,s,q)}}function qE(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){FE(r,s,u)},function(u){return jp(r,s,u)}):FE(r,s,o)}function FE(r,s,o){s.status="fulfilled",s.value=o,jE(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,zE(r,o)))}function jp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,jE(s),s=s.next;while(s!==u)}r.action=null}function jE(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function HE(r,s){return s}function GE(r,s){if(Ke){var o=at.formState;if(o!==null){e:{var u=Ne;if(Ke){if(Tt){t:{for(var d=Tt,p=Mr;d.nodeType!==8;){if(!p){d=null;break t}if(d=_r(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Tt=_r(d.nextSibling),u=d.data==="F!";break e}}Sa(u)}u=!1}u&&(s=o[0])}}return o=Dn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:HE,lastRenderedState:s},o.queue=u,o=cT.bind(null,Ne,u),u.dispatch=o,u=Fp(!1),p=Yp.bind(null,Ne,!1,u.queue),u=Dn(),d={state:s,dispatch:null,action:r,pending:null},u.queue=d,o=nC.bind(null,Ne,d,p,o),d.dispatch=o,u.memoizedState=r,[s,o,!1]}function KE(r){var s=kt();return QE(s,tt,r)}function QE(r,s,o){if(s=zp(r,s,HE)[0],r=Nd(wi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Ku(s)}catch(E){throw E===zu?bd:E}else u=s;s=kt();var d=s.queue,p=d.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Ko(9,xd(),rC.bind(null,d,o),null)),[u,p,r]}function rC(r,s){r.action=s}function YE(r){var s=kt(),o=tt;if(o!==null)return QE(s,o,r);kt(),s=s.memoizedState,o=kt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Ko(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Up(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function xd(){return{destroy:void 0,resource:void 0}}function $E(){return kt().memoizedState}function Pd(r,s,o,u){var d=Dn();u=u===void 0?null:u,Ne.flags|=r,d.memoizedState=Ko(1|s,xd(),o,u)}function Qu(r,s,o,u){var d=kt();u=u===void 0?null:u;var p=d.memoizedState.inst;tt!==null&&u!==null&&Vp(u,tt.memoizedState.deps)?d.memoizedState=Ko(s,p,o,u):(Ne.flags|=r,d.memoizedState=Ko(1|s,p,o,u))}function WE(r,s){Pd(8390656,8,r,s)}function XE(r,s){Qu(2048,8,r,s)}function JE(r,s){return Qu(4,2,r,s)}function ZE(r,s){return Qu(4,4,r,s)}function eT(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function tT(r,s,o){o=o!=null?o.concat([r]):null,Qu(4,4,eT.bind(null,s,r),o)}function Hp(){}function nT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Vp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function rT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Vp(s,u[1]))return u[0];if(u=r(),Na){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u}function Gp(r,s,o){return o===void 0||(ns&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=aw(),Ne.lanes|=r,us|=r,o)}function iT(r,s,o,u){return Un(o,s)?o:jo.current!==null?(r=Gp(r,o,u),Un(r,s)||($t=!0),r):(ns&42)===0?($t=!0,r.memoizedState=o):(r=aw(),Ne.lanes|=r,us|=r,s)}function sT(r,s,o,u,d){var p=oe.p;oe.p=p!==0&&8>p?p:8;var E=Y.T,w={};Y.T=w,Yp(r,!1,s,o);try{var R=d(),q=Y.S;if(q!==null&&q(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var $=Z1(R,u);Yu(r,s,$,jn(r))}else Yu(r,s,u,jn(r))}catch(J){Yu(r,s,{then:function(){},status:"rejected",reason:J},jn())}finally{oe.p=p,Y.T=E}}function iC(){}function Kp(r,s,o,u){if(r.tag!==5)throw Error(n(476));var d=aT(r).queue;sT(r,d,s,ye,o===null?iC:function(){return oT(r),o(u)})}function aT(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:ye},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function oT(r){var s=aT(r).next.queue;Yu(r,s,{},jn())}function Qp(){return fn(dc)}function lT(){return kt().memoizedState}function uT(){return kt().memoizedState}function sC(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=jn();r=es(o);var u=ts(s,r,o);u!==null&&(Hn(u,s,o),Fu(u,s,o)),s={cache:Ip()},r.payload=s;return}s=s.return}}function aC(r,s,o){var u=jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Vd(r)?hT(s,o):(o=fp(r,s,o,u),o!==null&&(Hn(o,r,u),dT(o,s,u)))}function cT(r,s,o){var u=jn();Yu(r,s,o,u)}function Yu(r,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vd(r))hT(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var E=s.lastRenderedState,w=p(E,o);if(d.hasEagerState=!0,d.eagerState=w,Un(w,E))return gd(r,s,d,0),at===null&&pd(),!1}catch{}finally{}if(o=fp(r,s,d,u),o!==null)return Hn(o,r,u),dT(o,s,u),!0}return!1}function Yp(r,s,o,u){if(u={lane:2,revertLane:Sg(),action:u,hasEagerState:!1,eagerState:null,next:null},Vd(r)){if(s)throw Error(n(479))}else s=fp(r,o,u,2),s!==null&&Hn(s,r,2)}function Vd(r){var s=r.alternate;return r===Ne||s!==null&&s===Ne}function hT(r,s){Ho=Rd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function dT(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,gu(r,o)}}var Od={readContext:fn,use:Dd,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt},fT={readContext:fn,use:Dd,useCallback:function(r,s){return Dn().memoizedState=[r,s===void 0?null:s],r},useContext:fn,useEffect:WE,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Pd(4194308,4,eT.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Pd(4194308,4,r,s)},useInsertionEffect:function(r,s){Pd(4,2,r,s)},useMemo:function(r,s){var o=Dn();s=s===void 0?null:s;var u=r();if(Na){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Dn();if(o!==void 0){var d=o(s);if(Na){Mn(!0);try{o(s)}finally{Mn(!1)}}}else d=s;return u.memoizedState=u.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},u.queue=r,r=r.dispatch=aC.bind(null,Ne,r),[u.memoizedState,r]},useRef:function(r){var s=Dn();return r={current:r},s.memoizedState=r},useState:function(r){r=Fp(r);var s=r.queue,o=cT.bind(null,Ne,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Hp,useDeferredValue:function(r,s){var o=Dn();return Gp(o,r,s)},useTransition:function(){var r=Fp(!1);return r=sT.bind(null,Ne,r.queue,!0,!1),Dn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ne,d=Dn();if(Ke){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),at===null)throw Error(n(349));(ze&124)!==0||OE(u,s,o)}d.memoizedState=o;var p={value:o,getSnapshot:s};return d.queue=p,WE(ME.bind(null,u,p,r),[r]),u.flags|=2048,Ko(9,xd(),kE.bind(null,u,p,o,s),null),o},useId:function(){var r=Dn(),s=at.identifierPrefix;if(Ke){var o=vi,u=yi;o=(u&~(1<<32-dn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Cd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=eC++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Qp,useFormState:GE,useActionState:GE,useOptimistic:function(r){var s=Dn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Yp.bind(null,Ne,!0,o),o.dispatch=s,[r,s]},useMemoCache:Bp,useCacheRefresh:function(){return Dn().memoizedState=sC.bind(null,Ne)}},mT={readContext:fn,use:Dd,useCallback:nT,useContext:fn,useEffect:XE,useImperativeHandle:tT,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rT,useReducer:Nd,useRef:$E,useState:function(){return Nd(wi)},useDebugValue:Hp,useDeferredValue:function(r,s){var o=kt();return iT(o,tt.memoizedState,r,s)},useTransition:function(){var r=Nd(wi)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Ku(r),s]},useSyncExternalStore:VE,useId:lT,useHostTransitionStatus:Qp,useFormState:KE,useActionState:KE,useOptimistic:function(r,s){var o=kt();return BE(o,tt,r,s)},useMemoCache:Bp,useCacheRefresh:uT},oC={readContext:fn,use:Dd,useCallback:nT,useContext:fn,useEffect:XE,useImperativeHandle:tT,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rT,useReducer:qp,useRef:$E,useState:function(){return qp(wi)},useDebugValue:Hp,useDeferredValue:function(r,s){var o=kt();return tt===null?Gp(o,r,s):iT(o,tt.memoizedState,r,s)},useTransition:function(){var r=qp(wi)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Ku(r),s]},useSyncExternalStore:VE,useId:lT,useHostTransitionStatus:Qp,useFormState:YE,useActionState:YE,useOptimistic:function(r,s){var o=kt();return tt!==null?BE(o,tt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Bp,useCacheRefresh:uT},Qo=null,$u=0;function kd(r){var s=$u;return $u+=1,Qo===null&&(Qo=[]),AE(Qo,r,s)}function Wu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Md(r,s){throw s.$$typeof===T?Error(n(525)):(r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function pT(r){var s=r._init;return s(r._payload)}function gT(r){function s(M,V){if(r){var z=M.deletions;z===null?(M.deletions=[V],M.flags|=16):z.push(V)}}function o(M,V){if(!r)return null;for(;V!==null;)s(M,V),V=V.sibling;return null}function u(M){for(var V=new Map;M!==null;)M.key!==null?V.set(M.key,M):V.set(M.index,M),M=M.sibling;return V}function d(M,V){return M=_i(M,V),M.index=0,M.sibling=null,M}function p(M,V,z){return M.index=z,r?(z=M.alternate,z!==null?(z=z.index,z<V?(M.flags|=67108866,V):z):(M.flags|=67108866,V)):(M.flags|=1048576,V)}function E(M){return r&&M.alternate===null&&(M.flags|=67108866),M}function w(M,V,z,X){return V===null||V.tag!==6?(V=pp(z,M.mode,X),V.return=M,V):(V=d(V,z),V.return=M,V)}function R(M,V,z,X){var fe=z.type;return fe===G?$(M,V,z.props.children,X,z.key):V!==null&&(V.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===S&&pT(fe)===V.type)?(V=d(V,z.props),Wu(V,z),V.return=M,V):(V=yd(z.type,z.key,z.props,null,M.mode,X),Wu(V,z),V.return=M,V)}function q(M,V,z,X){return V===null||V.tag!==4||V.stateNode.containerInfo!==z.containerInfo||V.stateNode.implementation!==z.implementation?(V=gp(z,M.mode,X),V.return=M,V):(V=d(V,z.children||[]),V.return=M,V)}function $(M,V,z,X,fe){return V===null||V.tag!==7?(V=wa(z,M.mode,X,fe),V.return=M,V):(V=d(V,z),V.return=M,V)}function J(M,V,z){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pp(""+V,M.mode,z),V.return=M,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case I:return z=yd(V.type,V.key,V.props,null,M.mode,z),Wu(z,V),z.return=M,z;case O:return V=gp(V,M.mode,z),V.return=M,V;case S:var X=V._init;return V=X(V._payload),J(M,V,z)}if(vt(V)||k(V))return V=wa(V,M.mode,z,null),V.return=M,V;if(typeof V.then=="function")return J(M,kd(V),z);if(V.$$typeof===ae)return J(M,wd(M,V),z);Md(M,V)}return null}function F(M,V,z,X){var fe=V!==null?V.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:w(M,V,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case I:return z.key===fe?R(M,V,z,X):null;case O:return z.key===fe?q(M,V,z,X):null;case S:return fe=z._init,z=fe(z._payload),F(M,V,z,X)}if(vt(z)||k(z))return fe!==null?null:$(M,V,z,X,null);if(typeof z.then=="function")return F(M,V,kd(z),X);if(z.$$typeof===ae)return F(M,V,wd(M,z),X);Md(M,z)}return null}function j(M,V,z,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(z)||null,w(V,M,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return M=M.get(X.key===null?z:X.key)||null,R(V,M,X,fe);case O:return M=M.get(X.key===null?z:X.key)||null,q(V,M,X,fe);case S:var Pe=X._init;return X=Pe(X._payload),j(M,V,z,X,fe)}if(vt(X)||k(X))return M=M.get(z)||null,$(V,M,X,fe,null);if(typeof X.then=="function")return j(M,V,z,kd(X),fe);if(X.$$typeof===ae)return j(M,V,z,wd(V,X),fe);Md(V,X)}return null}function Ae(M,V,z,X){for(var fe=null,Pe=null,_e=V,be=V=0,Xt=null;_e!==null&&be<z.length;be++){_e.index>be?(Xt=_e,_e=null):Xt=_e.sibling;var je=F(M,_e,z[be],X);if(je===null){_e===null&&(_e=Xt);break}r&&_e&&je.alternate===null&&s(M,_e),V=p(je,V,be),Pe===null?fe=je:Pe.sibling=je,Pe=je,_e=Xt}if(be===z.length)return o(M,_e),Ke&&ba(M,be),fe;if(_e===null){for(;be<z.length;be++)_e=J(M,z[be],X),_e!==null&&(V=p(_e,V,be),Pe===null?fe=_e:Pe.sibling=_e,Pe=_e);return Ke&&ba(M,be),fe}for(_e=u(_e);be<z.length;be++)Xt=j(_e,M,be,z[be],X),Xt!==null&&(r&&Xt.alternate!==null&&_e.delete(Xt.key===null?be:Xt.key),V=p(Xt,V,be),Pe===null?fe=Xt:Pe.sibling=Xt,Pe=Xt);return r&&_e.forEach(function(ys){return s(M,ys)}),Ke&&ba(M,be),fe}function we(M,V,z,X){if(z==null)throw Error(n(151));for(var fe=null,Pe=null,_e=V,be=V=0,Xt=null,je=z.next();_e!==null&&!je.done;be++,je=z.next()){_e.index>be?(Xt=_e,_e=null):Xt=_e.sibling;var ys=F(M,_e,je.value,X);if(ys===null){_e===null&&(_e=Xt);break}r&&_e&&ys.alternate===null&&s(M,_e),V=p(ys,V,be),Pe===null?fe=ys:Pe.sibling=ys,Pe=ys,_e=Xt}if(je.done)return o(M,_e),Ke&&ba(M,be),fe;if(_e===null){for(;!je.done;be++,je=z.next())je=J(M,je.value,X),je!==null&&(V=p(je,V,be),Pe===null?fe=je:Pe.sibling=je,Pe=je);return Ke&&ba(M,be),fe}for(_e=u(_e);!je.done;be++,je=z.next())je=j(_e,M,be,je.value,X),je!==null&&(r&&je.alternate!==null&&_e.delete(je.key===null?be:je.key),V=p(je,V,be),Pe===null?fe=je:Pe.sibling=je,Pe=je);return r&&_e.forEach(function(lD){return s(M,lD)}),Ke&&ba(M,be),fe}function rt(M,V,z,X){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case I:e:{for(var fe=z.key;V!==null;){if(V.key===fe){if(fe=z.type,fe===G){if(V.tag===7){o(M,V.sibling),X=d(V,z.props.children),X.return=M,M=X;break e}}else if(V.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===S&&pT(fe)===V.type){o(M,V.sibling),X=d(V,z.props),Wu(X,z),X.return=M,M=X;break e}o(M,V);break}else s(M,V);V=V.sibling}z.type===G?(X=wa(z.props.children,M.mode,X,z.key),X.return=M,M=X):(X=yd(z.type,z.key,z.props,null,M.mode,X),Wu(X,z),X.return=M,M=X)}return E(M);case O:e:{for(fe=z.key;V!==null;){if(V.key===fe)if(V.tag===4&&V.stateNode.containerInfo===z.containerInfo&&V.stateNode.implementation===z.implementation){o(M,V.sibling),X=d(V,z.children||[]),X.return=M,M=X;break e}else{o(M,V);break}else s(M,V);V=V.sibling}X=gp(z,M.mode,X),X.return=M,M=X}return E(M);case S:return fe=z._init,z=fe(z._payload),rt(M,V,z,X)}if(vt(z))return Ae(M,V,z,X);if(k(z)){if(fe=k(z),typeof fe!="function")throw Error(n(150));return z=fe.call(z),we(M,V,z,X)}if(typeof z.then=="function")return rt(M,V,kd(z),X);if(z.$$typeof===ae)return rt(M,V,wd(M,z),X);Md(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,V!==null&&V.tag===6?(o(M,V.sibling),X=d(V,z),X.return=M,M=X):(o(M,V),X=pp(z,M.mode,X),X.return=M,M=X),E(M)):o(M,V)}return function(M,V,z,X){try{$u=0;var fe=rt(M,V,z,X);return Qo=null,fe}catch(_e){if(_e===zu||_e===bd)throw _e;var Pe=Bn(29,_e,null,M.mode);return Pe.lanes=X,Pe.return=M,Pe}finally{}}}var Yo=gT(!0),_T=gT(!1),ar=ee(null),Lr=null;function rs(r){var s=r.alternate;re(jt,jt.current&1),re(ar,r),Lr===null&&(s===null||jo.current!==null||s.memoizedState!==null)&&(Lr=r)}function yT(r){if(r.tag===22){if(re(jt,jt.current),re(ar,r),Lr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Lr=r)}}else is()}function is(){re(jt,jt.current),re(ar,ar.current)}function Ii(r){ue(ar),Lr===r&&(Lr=null),ue(jt)}var jt=ee(0);function Ld(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ug(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function $p(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Wp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=jn(),d=es(u);d.payload=s,o!=null&&(d.callback=o),s=ts(r,d,u),s!==null&&(Hn(s,r,u),Fu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=jn(),d=es(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=ts(r,d,u),s!==null&&(Hn(s,r,u),Fu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=jn(),u=es(o);u.tag=2,s!=null&&(u.callback=s),s=ts(r,u,o),s!==null&&(Hn(s,r,o),Fu(s,r,o))}};function vT(r,s,o,u,d,p,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,E):s.prototype&&s.prototype.isPureReactComponent?!Pu(o,u)||!Pu(d,p):!0}function ET(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Wp.enqueueReplaceState(s,s.state,null)}function xa(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var Ud=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function TT(r){Ud(r)}function wT(r){console.error(r)}function IT(r){Ud(r)}function Bd(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function bT(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Xp(r,s,o){return o=es(o),o.tag=3,o.payload={element:null},o.callback=function(){Bd(r,s)},o}function AT(r){return r=es(r),r.tag=3,r}function ST(r,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;r.payload=function(){return d(p)},r.callback=function(){bT(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){bT(s,o,u),typeof d!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function lC(r,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Lu(s,o,d,!0),o=ar.current,o!==null){switch(o.tag){case 13:return Lr===null?Tg():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Sp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Ig(r,u,d)),!1;case 22:return o.flags|=65536,u===Sp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Ig(r,u,d)),!1}throw Error(n(435,o.tag))}return Ig(r,u,d),Tg(),!1}if(Ke)return s=ar.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==vp&&(r=Error(n(422),{cause:u}),Mu(nr(r,o)))):(u!==vp&&(s=Error(n(423),{cause:u}),Mu(nr(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,u=nr(u,o),d=Xp(r.stateNode,u,d),Dp(r,d),wt!==4&&(wt=2)),!1;var p=Error(n(520),{cause:u});if(p=nr(p,o),rc===null?rc=[p]:rc.push(p),wt!==4&&(wt=2),s===null)return!0;u=nr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=Xp(o.stateNode,u,r),Dp(o,r),!1;case 1:if(s=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(cs===null||!cs.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=AT(d),ST(d,r,o,u),Dp(o,d),!1}o=o.return}while(o!==null);return!1}var RT=Error(n(461)),$t=!1;function sn(r,s,o,u){s.child=r===null?_T(s,null,o,u):Yo(s,r.child,o,u)}function CT(r,s,o,u,d){o=o.render;var p=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return Ca(s),u=Op(r,s,o,E,p,d),w=kp(),r!==null&&!$t?(Mp(r,s,d),bi(r,s,d)):(Ke&&w&&_p(s),s.flags|=1,sn(r,s,u,d),s.child)}function DT(r,s,o,u,d){if(r===null){var p=o.type;return typeof p=="function"&&!mp(p)&&p.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=p,NT(r,s,p,u,d)):(r=yd(o.type,null,u,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,!sg(r,d)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Pu,o(E,u)&&r.ref===s.ref)return bi(r,s,d)}return s.flags|=1,r=_i(p,u),r.ref=s.ref,r.return=s,s.child=r}function NT(r,s,o,u,d){if(r!==null){var p=r.memoizedProps;if(Pu(p,u)&&r.ref===s.ref)if($t=!1,s.pendingProps=u=p,sg(r,d))(r.flags&131072)!==0&&($t=!0);else return s.lanes=r.lanes,bi(r,s,d)}return Jp(r,s,o,u,d)}function xT(r,s,o){var u=s.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,r!==null){for(d=s.child=r.child,p=0;d!==null;)p=p|d.lanes|d.childLanes,d=d.sibling;s.childLanes=p&~u}else s.childLanes=0,s.child=null;return PT(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Id(s,p!==null?p.cachePool:null),p!==null?NE(s,p):xp(),yT(s);else return s.lanes=s.childLanes=536870912,PT(r,s,p!==null?p.baseLanes|o:o,o)}else p!==null?(Id(s,p.cachePool),NE(s,p),is(),s.memoizedState=null):(r!==null&&Id(s,null),xp(),is());return sn(r,s,d,o),s.child}function PT(r,s,o,u){var d=Ap();return d=d===null?null:{parent:Ft._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Id(s,null),xp(),yT(s),r!==null&&Lu(r,s,u,!0),null}function zd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(n(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Jp(r,s,o,u,d){return Ca(s),o=Op(r,s,o,u,void 0,d),u=kp(),r!==null&&!$t?(Mp(r,s,d),bi(r,s,d)):(Ke&&u&&_p(s),s.flags|=1,sn(r,s,o,d),s.child)}function VT(r,s,o,u,d,p){return Ca(s),s.updateQueue=null,o=PE(s,u,o,d),xE(r),u=kp(),r!==null&&!$t?(Mp(r,s,p),bi(r,s,p)):(Ke&&u&&_p(s),s.flags|=1,sn(r,s,o,p),s.child)}function OT(r,s,o,u,d){if(Ca(s),s.stateNode===null){var p=Uo,E=o.contextType;typeof E=="object"&&E!==null&&(p=fn(E)),p=new o(u,p),s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Wp,s.stateNode=p,p._reactInternals=s,p=s.stateNode,p.props=u,p.state=s.memoizedState,p.refs={},Rp(s),E=o.contextType,p.context=typeof E=="object"&&E!==null?fn(E):Uo,p.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&($p(s,o,E,u),p.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&Wp.enqueueReplaceState(p,p.state,null),Hu(s,u,p,d),ju(),p.state=s.memoizedState),typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){p=s.stateNode;var w=s.memoizedProps,R=xa(o,w);p.props=R;var q=p.context,$=o.contextType;E=Uo,typeof $=="object"&&$!==null&&(E=fn($));var J=o.getDerivedStateFromProps;$=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,$||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||q!==E)&&ET(s,p,u,E),Zi=!1;var F=s.memoizedState;p.state=F,Hu(s,u,p,d),ju(),q=s.memoizedState,w||F!==q||Zi?(typeof J=="function"&&($p(s,o,J,u),q=s.memoizedState),(R=Zi||vT(s,o,R,u,F,q,E))?($||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(s.flags|=4194308)):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=q),p.props=u,p.state=q,p.context=E,u=R):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{p=s.stateNode,Cp(r,s),E=s.memoizedProps,$=xa(o,E),p.props=$,J=s.pendingProps,F=p.context,q=o.contextType,R=Uo,typeof q=="object"&&q!==null&&(R=fn(q)),w=o.getDerivedStateFromProps,(q=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==J||F!==R)&&ET(s,p,u,R),Zi=!1,F=s.memoizedState,p.state=F,Hu(s,u,p,d),ju();var j=s.memoizedState;E!==J||F!==j||Zi||r!==null&&r.dependencies!==null&&Td(r.dependencies)?(typeof w=="function"&&($p(s,o,w,u),j=s.memoizedState),($=Zi||vT(s,o,$,u,F,j,R)||r!==null&&r.dependencies!==null&&Td(r.dependencies))?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,j,R),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,j,R)),typeof p.componentDidUpdate=="function"&&(s.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=j),p.props=u,p.state=j,p.context=R,u=$):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),u=!1)}return p=u,zd(r,s),u=(s.flags&128)!==0,p||u?(p=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),s.flags|=1,r!==null&&u?(s.child=Yo(s,r.child,null,d),s.child=Yo(s,null,o,d)):sn(r,s,o,d),s.memoizedState=p.state,r=s.child):r=bi(r,s,d),r}function kT(r,s,o,u){return ku(),s.flags|=256,sn(r,s,o,u),s.child}var Zp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eg(r){return{baseLanes:r,cachePool:wE()}}function tg(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=or),r}function MT(r,s,o){var u=s.pendingProps,d=!1,p=(s.flags&128)!==0,E;if((E=p)||(E=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),E&&(d=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ke){if(d?rs(s):is(),Ke){var w=Tt,R;if(R=w){e:{for(R=w,w=Mr;R.nodeType!==8;){if(!w){w=null;break e}if(R=_r(R.nextSibling),R===null){w=null;break e}}w=R}w!==null?(s.memoizedState={dehydrated:w,treeContext:Ia!==null?{id:yi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},R=Bn(18,null,null,0),R.stateNode=w,R.return=s,s.child=R,In=s,Tt=null,R=!0):R=!1}R||Sa(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Ug(w)?s.lanes=32:s.lanes=536870912,null;Ii(s)}return w=u.children,u=u.fallback,d?(is(),d=s.mode,w=qd({mode:"hidden",children:w},d),u=wa(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,d=s.child,d.memoizedState=eg(o),d.childLanes=tg(r,E,o),s.memoizedState=Zp,u):(rs(s),ng(s,w))}if(R=r.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(p)s.flags&256?(rs(s),s.flags&=-257,s=rg(r,s,o)):s.memoizedState!==null?(is(),s.child=r.child,s.flags|=128,s=null):(is(),d=u.fallback,w=s.mode,u=qd({mode:"visible",children:u.children},w),d=wa(d,w,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,Yo(s,r.child,null,o),u=s.child,u.memoizedState=eg(o),u.childLanes=tg(r,E,o),s.memoizedState=Zp,s=d);else if(rs(s),Ug(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(n(419)),u.stack="",u.digest=E,Mu({value:u,source:null,stack:null}),s=rg(r,s,o)}else if($t||Lu(r,s,o,!1),E=(o&r.childLanes)!==0,$t||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:Gi(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,Lo(r,u),Hn(E,r,u),RT;w.data==="$?"||Tg(),s=rg(r,s,o)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=R.treeContext,Tt=_r(w.nextSibling),In=s,Ke=!0,Aa=null,Mr=!1,r!==null&&(ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=Ia,yi=r.id,vi=r.overflow,Ia=s),s=ng(s,u.children),s.flags|=4096);return s}return d?(is(),d=u.fallback,w=s.mode,R=r.child,q=R.sibling,u=_i(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,q!==null?d=_i(q,d):(d=wa(d,w,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,w=r.child.memoizedState,w===null?w=eg(o):(R=w.cachePool,R!==null?(q=Ft._currentValue,R=R.parent!==q?{parent:q,pool:q}:R):R=wE(),w={baseLanes:w.baseLanes|o,cachePool:R}),d.memoizedState=w,d.childLanes=tg(r,E,o),s.memoizedState=Zp,u):(rs(s),o=r.child,r=o.sibling,o=_i(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function ng(r,s){return s=qd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function qd(r,s){return r=Bn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function rg(r,s,o){return Yo(s,r.child,null,o),r=ng(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function LT(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Tp(r.return,s,o)}function ig(r,s,o,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function UT(r,s,o){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if(sn(r,s,u.children,o),u=jt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&LT(r,o,s);else if(r.tag===19)LT(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(re(jt,u),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&Ld(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),ig(s,!1,d,o,p);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Ld(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}ig(s,!0,o,null,p);break;case"together":ig(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Lu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,o=_i(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=_i(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function sg(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Td(r)))}function uC(r,s,o){switch(s.tag){case 3:st(s,s.stateNode.containerInfo),Ji(s,Ft,r.memoizedState.cache),ku();break;case 27:case 5:Hi(s);break;case 4:st(s,s.stateNode.containerInfo);break;case 10:Ji(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(rs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?MT(r,s,o):(rs(s),r=bi(r,s,o),r!==null?r.sibling:null);rs(s);break;case 19:var d=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Lu(r,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return UT(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),re(jt,jt.current),u)break;return null;case 22:case 23:return s.lanes=0,xT(r,s,o);case 24:Ji(s,Ft,r.memoizedState.cache)}return bi(r,s,o)}function BT(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)$t=!0;else{if(!sg(r,o)&&(s.flags&128)===0)return $t=!1,uC(r,s,o);$t=(r.flags&131072)!==0}else $t=!1,Ke&&(s.flags&1048576)!==0&&pE(s,Ed,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")mp(u)?(r=xa(u,r),s.tag=1,s=OT(null,s,u,r,o)):(s.tag=0,s=Jp(null,s,u,r,o));else{if(u!=null){if(d=u.$$typeof,d===Ie){s.tag=11,s=CT(null,s,u,r,o);break e}else if(d===N){s.tag=14,s=DT(null,s,u,r,o);break e}}throw s=tn(u)||u,Error(n(306,s,""))}}return s;case 0:return Jp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=xa(u,s.pendingProps),OT(r,s,u,d,o);case 3:e:{if(st(s,s.stateNode.containerInfo),r===null)throw Error(n(387));u=s.pendingProps;var p=s.memoizedState;d=p.element,Cp(r,s),Hu(s,u,null,o);var E=s.memoizedState;if(u=E.cache,Ji(s,Ft,u),u!==p.cache&&wp(s,[Ft],o,!0),ju(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){s=kT(r,s,u,o);break e}else if(u!==d){d=nr(Error(n(424)),s),Mu(d),s=kT(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=_r(r.firstChild),In=s,Ke=!0,Aa=null,Mr=!0,o=_T(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ku(),u===d){s=bi(r,s,o);break e}sn(r,s,u,o)}s=s.child}return s;case 26:return zd(r,s),r===null?(o=jw(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ke||(o=s.type,r=s.pendingProps,u=tf(Se.current).createElement(o),u[Bt]=s,u[Pt]=r,on(u,o,r),St(u),s.stateNode=u):s.memoizedState=jw(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Hi(s),r===null&&Ke&&(u=s.stateNode=zw(s.type,s.pendingProps,Se.current),In=s,Mr=!0,d=Tt,fs(s.type)?(Bg=d,Tt=_r(u.firstChild)):Tt=d),sn(r,s,s.pendingProps.children,o),zd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ke&&((d=u=Tt)&&(u=LC(u,s.type,s.pendingProps,Mr),u!==null?(s.stateNode=u,In=s,Tt=_r(u.firstChild),Mr=!1,d=!0):d=!1),d||Sa(s)),Hi(s),d=s.type,p=s.pendingProps,E=r!==null?r.memoizedProps:null,u=p.children,kg(d,p)?u=null:E!==null&&kg(d,E)&&(s.flags|=32),s.memoizedState!==null&&(d=Op(r,s,tC,null,null,o),dc._currentValue=d),zd(r,s),sn(r,s,u,o),s.child;case 6:return r===null&&Ke&&((r=o=Tt)&&(o=UC(o,s.pendingProps,Mr),o!==null?(s.stateNode=o,In=s,Tt=null,r=!0):r=!1),r||Sa(s)),null;case 13:return MT(r,s,o);case 4:return st(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Yo(s,null,u,o):sn(r,s,u,o),s.child;case 11:return CT(r,s,s.type,s.pendingProps,o);case 7:return sn(r,s,s.pendingProps,o),s.child;case 8:return sn(r,s,s.pendingProps.children,o),s.child;case 12:return sn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Ji(s,s.type,u.value),sn(r,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Ca(s),d=fn(d),u=u(d),s.flags|=1,sn(r,s,u,o),s.child;case 14:return DT(r,s,s.type,s.pendingProps,o);case 15:return NT(r,s,s.type,s.pendingProps,o);case 19:return UT(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=qd(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=_i(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return xT(r,s,o);case 24:return Ca(s),u=fn(Ft),r===null?(d=Ap(),d===null&&(d=at,p=Ip(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),s.memoizedState={parent:u,cache:d},Rp(s),Ji(s,Ft,d)):((r.lanes&o)!==0&&(Cp(r,s),Hu(s,null,null,o),ju()),d=r.memoizedState,p=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ji(s,Ft,u)):(u=p.cache,Ji(s,Ft,u),u!==d.cache&&wp(s,[Ft],o,!0))),sn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(n(156,s.tag))}function Ai(r){r.flags|=4}function zT(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Yw(s)){if(s=ar.current,s!==null&&((ze&4194048)===ze?Lr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||s!==Lr))throw qu=Sp,IE;r.flags|=8192}}function Fd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?mu():536870912,r.lanes|=s,Jo|=s)}function Xu(r,s){if(!Ke)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function gt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function cC(r,s,o){var u=s.pendingProps;switch(yp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(s),null;case 1:return gt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Ti(Ft),br(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Ou(s)?Ai(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yE())),gt(s),null;case 26:return o=s.memoizedState,r===null?(Ai(s),o!==null?(gt(s),zT(s,o)):(gt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Ai(s),gt(s),zT(s,o)):(gt(s),s.flags&=-16777217):(r.memoizedProps!==u&&Ai(s),gt(s),s.flags&=-16777217),null;case 27:ii(s),o=Se.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Ai(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return gt(s),null}r=ve.current,Ou(s)?gE(s):(r=zw(d,u,o),s.stateNode=r,Ai(s))}return gt(s),null;case 5:if(ii(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Ai(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return gt(s),null}if(r=ve.current,Ou(s))gE(s);else{switch(d=tf(Se.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}r[Bt]=s,r[Pt]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(on(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ai(s)}}return gt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Ai(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(r=Se.current,Ou(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,d=In,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}r[Bt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Vw(r.nodeValue,o)),r||Sa(s)}else r=tf(r).createTextNode(u),r[Bt]=s,s.stateNode=r}return gt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=Ou(s),u!==null&&u.dehydrated!==null){if(r===null){if(!d)throw Error(n(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[Bt]=s}else ku(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gt(s),d=!1}else d=yE(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Ii(s),s):(Ii(s),null)}if(Ii(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Fd(s,s.updateQueue),gt(s),null;case 4:return br(),r===null&&Ng(s.stateNode.containerInfo),gt(s),null;case 10:return Ti(s.type),gt(s),null;case 19:if(ue(jt),d=s.memoizedState,d===null)return gt(s),null;if(u=(s.flags&128)!==0,p=d.rendering,p===null)if(u)Xu(d,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(p=Ld(r),p!==null){for(s.flags|=128,Xu(d,!1),r=p.updateQueue,s.updateQueue=r,Fd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)mE(o,r),o=o.sibling;return re(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wn()>Gd&&(s.flags|=128,u=!0,Xu(d,!1),s.lanes=4194304)}else{if(!u)if(r=Ld(p),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Fd(s,r),Xu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Ke)return gt(s),null}else 2*Wn()-d.renderingStartTime>Gd&&o!==536870912&&(s.flags|=128,u=!0,Xu(d,!1),s.lanes=4194304);d.isBackwards?(p.sibling=s.child,s.child=p):(r=d.last,r!==null?r.sibling=p:s.child=p,d.last=p)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wn(),s.sibling=null,r=jt.current,re(jt,u?r&1|2:r&1),s):(gt(s),null);case 22:case 23:return Ii(s),Pp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(gt(s),s.subtreeFlags&6&&(s.flags|=8192)):gt(s),o=s.updateQueue,o!==null&&Fd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ue(Da),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ti(Ft),gt(s),null;case 25:return null;case 30:return null}throw Error(n(156,s.tag))}function hC(r,s){switch(yp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ti(Ft),br(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return ii(s),null;case 13:if(Ii(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));ku()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(jt),null;case 4:return br(),null;case 10:return Ti(s.type),null;case 22:case 23:return Ii(s),Pp(),r!==null&&ue(Da),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Ti(Ft),null;case 25:return null;default:return null}}function qT(r,s){switch(yp(s),s.tag){case 3:Ti(Ft),br();break;case 26:case 27:case 5:ii(s);break;case 4:br();break;case 13:Ii(s);break;case 19:ue(jt);break;case 10:Ti(s.type);break;case 22:case 23:Ii(s),Pp(),r!==null&&ue(Da);break;case 24:Ti(Ft)}}function Ju(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&r)===r){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==d)}}catch(w){it(s,s.return,w)}}function ss(r,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&r)===r){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=s;var R=o,q=w;try{q()}catch($){it(d,R,$)}}}u=u.next}while(u!==p)}}catch($){it(s,s.return,$)}}function FT(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{DE(s,o)}catch(u){it(r,r.return,u)}}}function jT(r,s,o){o.props=xa(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){it(r,s,u)}}function Zu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(d){it(r,s,d)}}function Ur(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){it(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){it(r,s,d)}else o.current=null}function HT(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){it(r,r.return,d)}}function ag(r,s,o){try{var u=r.stateNode;PC(u,r.type,o,s),u[Pt]=s}catch(d){it(r,r.return,d)}}function GT(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&fs(r.type)||r.tag===4}function og(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||GT(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&fs(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function lg(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ef));else if(u!==4&&(u===27&&fs(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(lg(r,s,o),r=r.sibling;r!==null;)lg(r,s,o),r=r.sibling}function jd(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&fs(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(jd(r,s,o),r=r.sibling;r!==null;)jd(r,s,o),r=r.sibling}function KT(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);on(s,u,o),s[Bt]=r,s[Pt]=o}catch(p){it(r,r.return,p)}}var Si=!1,Ct=!1,ug=!1,QT=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function dC(r,s){if(r=r.containerInfo,Vg=lf,r=iE(r),op(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,w=-1,R=-1,q=0,$=0,J=r,F=null;t:for(;;){for(var j;J!==o||d!==0&&J.nodeType!==3||(w=E+d),J!==p||u!==0&&J.nodeType!==3||(R=E+u),J.nodeType===3&&(E+=J.nodeValue.length),(j=J.firstChild)!==null;)F=J,J=j;for(;;){if(J===r)break t;if(F===o&&++q===d&&(w=E),F===p&&++$===u&&(R=E),(j=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=j}o=w===-1||R===-1?null:{start:w,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Og={focusedElem:r,selectionRange:o},lf=!1,Wt=s;Wt!==null;)if(s=Wt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Wt=r;else for(;Wt!==null;){switch(s=Wt,p=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,o=s,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Ae=xa(o.type,d,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ae,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(we){it(o,o.return,we)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Lg(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Lg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(n(163))}if(r=s.sibling,r!==null){r.return=s.return,Wt=r;break}Wt=s.return}}function YT(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:as(r,o),u&4&&Ju(5,o);break;case 1:if(as(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(E){it(o,o.return,E)}else{var d=xa(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&FT(o),u&512&&Zu(o,o.return);break;case 3:if(as(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{DE(r,s)}catch(E){it(o,o.return,E)}}break;case 27:s===null&&u&4&&KT(o);case 26:case 5:as(r,o),s===null&&u&4&&HT(o),u&512&&Zu(o,o.return);break;case 12:as(r,o);break;case 13:as(r,o),u&4&&XT(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=TC.bind(null,o),BC(r,o))));break;case 22:if(u=o.memoizedState!==null||Si,!u){s=s!==null&&s.memoizedState!==null||Ct,d=Si;var p=Ct;Si=u,(Ct=s)&&!p?os(r,o,(o.subtreeFlags&8772)!==0):as(r,o),Si=d,Ct=p}break;case 30:break;default:as(r,o)}}function $T(r){var s=r.alternate;s!==null&&(r.alternate=null,$T(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Yi(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ht=null,Nn=!1;function Ri(r,s,o){for(o=o.child;o!==null;)WT(r,s,o),o=o.sibling}function WT(r,s,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 26:Ct||Ur(o,s),Ri(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ct||Ur(o,s);var u=ht,d=Nn;fs(o.type)&&(ht=o.stateNode,Nn=!1),Ri(r,s,o),lc(o.stateNode),ht=u,Nn=d;break;case 5:Ct||Ur(o,s);case 6:if(u=ht,d=Nn,ht=null,Ri(r,s,o),ht=u,Nn=d,ht!==null)if(Nn)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(o.stateNode)}catch(p){it(o,s,p)}else try{ht.removeChild(o.stateNode)}catch(p){it(o,s,p)}break;case 18:ht!==null&&(Nn?(r=ht,Uw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),gc(r)):Uw(ht,o.stateNode));break;case 4:u=ht,d=Nn,ht=o.stateNode.containerInfo,Nn=!0,Ri(r,s,o),ht=u,Nn=d;break;case 0:case 11:case 14:case 15:Ct||ss(2,o,s),Ct||ss(4,o,s),Ri(r,s,o);break;case 1:Ct||(Ur(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&jT(o,s,u)),Ri(r,s,o);break;case 21:Ri(r,s,o);break;case 22:Ct=(u=Ct)||o.memoizedState!==null,Ri(r,s,o),Ct=u;break;default:Ri(r,s,o)}}function XT(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{gc(r)}catch(o){it(s,s.return,o)}}function fC(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new QT),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new QT),s;default:throw Error(n(435,r.tag))}}function cg(r,s){var o=fC(r);s.forEach(function(u){var d=wC.bind(null,r,u);o.has(u)||(o.add(u),u.then(d,d))})}function zn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=r,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(fs(w.type)){ht=w.stateNode,Nn=!1;break e}break;case 5:ht=w.stateNode,Nn=!1;break e;case 3:case 4:ht=w.stateNode.containerInfo,Nn=!0;break e}w=w.return}if(ht===null)throw Error(n(160));WT(p,E,d),ht=null,Nn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)JT(s,r),s=s.sibling}var gr=null;function JT(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:zn(s,r),qn(r),u&4&&(ss(3,r,r.return),Ju(3,r),ss(5,r,r.return));break;case 1:zn(s,r),qn(r),u&512&&(Ct||o===null||Ur(o,o.return)),u&64&&Si&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=gr;if(zn(s,r),qn(r),u&512&&(Ct||o===null||Ur(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[aa]||p[Bt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),on(p,u,o),p[Bt]=r,St(p),u=p;break e;case"link":var E=Kw("link","href",d).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(p=E[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}p=d.createElement(u),on(p,u,o),d.head.appendChild(p);break;case"meta":if(E=Kw("meta","content",d).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(p=E[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}p=d.createElement(u),on(p,u,o),d.head.appendChild(p);break;default:throw Error(n(468,u))}p[Bt]=r,St(p),u=p}r.stateNode=u}else Qw(d,r.type,r.stateNode);else r.stateNode=Gw(d,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?Qw(d,r.type,r.stateNode):Gw(d,u,r.memoizedProps)):u===null&&r.stateNode!==null&&ag(r,r.memoizedProps,o.memoizedProps)}break;case 27:zn(s,r),qn(r),u&512&&(Ct||o===null||Ur(o,o.return)),o!==null&&u&4&&ag(r,r.memoizedProps,o.memoizedProps);break;case 5:if(zn(s,r),qn(r),u&512&&(Ct||o===null||Ur(o,o.return)),r.flags&32){d=r.stateNode;try{Jn(d,"")}catch(j){it(r,r.return,j)}}u&4&&r.stateNode!=null&&(d=r.memoizedProps,ag(r,d,o!==null?o.memoizedProps:d)),u&1024&&(ug=!0);break;case 6:if(zn(s,r),qn(r),u&4){if(r.stateNode===null)throw Error(n(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(j){it(r,r.return,j)}}break;case 3:if(sf=null,d=gr,gr=nf(s.containerInfo),zn(s,r),gr=d,qn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{gc(s.containerInfo)}catch(j){it(r,r.return,j)}ug&&(ug=!1,ZT(r));break;case 4:u=gr,gr=nf(r.stateNode.containerInfo),zn(s,r),qn(r),gr=u;break;case 12:zn(s,r),qn(r);break;case 13:zn(s,r),qn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(gg=Wn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,cg(r,u)));break;case 22:d=r.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,q=Si,$=Ct;if(Si=q||d,Ct=$||R,zn(s,r),Ct=$,Si=q,qn(r),u&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||R||Si||Ct||Pa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){R=o=s;try{if(p=R.stateNode,d)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=R.stateNode;var J=R.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(j){it(R,R.return,j)}}}else if(s.tag===6){if(o===null){R=s;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(j){it(R,R.return,j)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,cg(r,o))));break;case 19:zn(s,r),qn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,cg(r,u)));break;case 30:break;case 21:break;default:zn(s,r),qn(r)}}function qn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(GT(u)){o=u;break}u=u.return}if(o==null)throw Error(n(160));switch(o.tag){case 27:var d=o.stateNode,p=og(r);jd(r,p,d);break;case 5:var E=o.stateNode;o.flags&32&&(Jn(E,""),o.flags&=-33);var w=og(r);jd(r,w,E);break;case 3:case 4:var R=o.stateNode.containerInfo,q=og(r);lg(r,q,R);break;default:throw Error(n(161))}}catch($){it(r,r.return,$)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function ZT(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;ZT(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function as(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)YT(r,s.alternate,s),s=s.sibling}function Pa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ss(4,s,s.return),Pa(s);break;case 1:Ur(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&jT(s,s.return,o),Pa(s);break;case 27:lc(s.stateNode);case 26:case 5:Ur(s,s.return),Pa(s);break;case 22:s.memoizedState===null&&Pa(s);break;case 30:Pa(s);break;default:Pa(s)}r=r.sibling}}function os(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=r,p=s,E=p.flags;switch(p.tag){case 0:case 11:case 15:os(d,p,o),Ju(4,p);break;case 1:if(os(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(q){it(u,u.return,q)}if(u=p,d=u.updateQueue,d!==null){var w=u.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)CE(R[d],w)}catch(q){it(u,u.return,q)}}o&&E&64&&FT(p),Zu(p,p.return);break;case 27:KT(p);case 26:case 5:os(d,p,o),o&&u===null&&E&4&&HT(p),Zu(p,p.return);break;case 12:os(d,p,o);break;case 13:os(d,p,o),o&&E&4&&XT(d,p);break;case 22:p.memoizedState===null&&os(d,p,o),Zu(p,p.return);break;case 30:break;default:os(d,p,o)}s=s.sibling}}function hg(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Uu(o))}function dg(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Uu(r))}function Br(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ew(r,s,o,u),s=s.sibling}function ew(r,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Br(r,s,o,u),d&2048&&Ju(9,s);break;case 1:Br(r,s,o,u);break;case 3:Br(r,s,o,u),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Uu(r)));break;case 12:if(d&2048){Br(r,s,o,u),r=s.stateNode;try{var p=s.memoizedProps,E=p.id,w=p.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(R){it(s,s.return,R)}}else Br(r,s,o,u);break;case 13:Br(r,s,o,u);break;case 23:break;case 22:p=s.stateNode,E=s.alternate,s.memoizedState!==null?p._visibility&2?Br(r,s,o,u):ec(r,s):p._visibility&2?Br(r,s,o,u):(p._visibility|=2,$o(r,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&hg(E,s);break;case 24:Br(r,s,o,u),d&2048&&dg(s.alternate,s);break;default:Br(r,s,o,u)}}function $o(r,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var p=r,E=s,w=o,R=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:$o(p,E,w,R,d),Ju(8,E);break;case 23:break;case 22:var $=E.stateNode;E.memoizedState!==null?$._visibility&2?$o(p,E,w,R,d):ec(p,E):($._visibility|=2,$o(p,E,w,R,d)),d&&q&2048&&hg(E.alternate,E);break;case 24:$o(p,E,w,R,d),d&&q&2048&&dg(E.alternate,E);break;default:$o(p,E,w,R,d)}s=s.sibling}}function ec(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,d=u.flags;switch(u.tag){case 22:ec(o,u),d&2048&&hg(u.alternate,u);break;case 24:ec(o,u),d&2048&&dg(u.alternate,u);break;default:ec(o,u)}s=s.sibling}}var tc=8192;function Wo(r){if(r.subtreeFlags&tc)for(r=r.child;r!==null;)tw(r),r=r.sibling}function tw(r){switch(r.tag){case 26:Wo(r),r.flags&tc&&r.memoizedState!==null&&JC(gr,r.memoizedState,r.memoizedProps);break;case 5:Wo(r);break;case 3:case 4:var s=gr;gr=nf(r.stateNode.containerInfo),Wo(r),gr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=tc,tc=16777216,Wo(r),tc=s):Wo(r));break;default:Wo(r)}}function nw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function nc(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,iw(u,r)}nw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)rw(r),r=r.sibling}function rw(r){switch(r.tag){case 0:case 11:case 15:nc(r),r.flags&2048&&ss(9,r,r.return);break;case 3:nc(r);break;case 12:nc(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Hd(r)):nc(r);break;default:nc(r)}}function Hd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,iw(u,r)}nw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ss(8,s,s.return),Hd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Hd(s));break;default:Hd(s)}r=r.sibling}}function iw(r,s){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:ss(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Uu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=r;Wt!==null;){u=Wt;var d=u.sibling,p=u.return;if($T(u),u===o){Wt=null;break e}if(d!==null){d.return=p,Wt=d;break e}Wt=p}}}var mC={getCacheForType:function(r){var s=fn(Ft),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},pC=typeof WeakMap=="function"?WeakMap:Map,We=0,at=null,Ve=null,ze=0,Xe=0,Fn=null,ls=!1,Xo=!1,fg=!1,Ci=0,wt=0,us=0,Va=0,mg=0,or=0,Jo=0,rc=null,xn=null,pg=!1,gg=0,Gd=1/0,Kd=null,cs=null,an=0,hs=null,Zo=null,el=0,_g=0,yg=null,sw=null,ic=0,vg=null;function jn(){if((We&2)!==0&&ze!==0)return ze&-ze;if(Y.T!==null){var r=qo;return r!==0?r:Sg()}return Ki()}function aw(){or===0&&(or=(ze&536870912)===0||Ke?fu():536870912);var r=ar.current;return r!==null&&(r.flags|=32),or}function Hn(r,s,o){(r===at&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)&&(tl(r,0),ds(r,ze,or,!1)),ai(r,o),((We&2)===0||r!==at)&&(r===at&&((We&2)===0&&(Va|=o),wt===4&&ds(r,ze,or,!1)),zr(r))}function ow(r,s,o){if((We&6)!==0)throw Error(n(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||sa(r,s),d=u?yC(r,s):wg(r,s,!0),p=u;do{if(d===0){Xo&&!u&&ds(r,s,0,!1);break}else{if(o=r.current.alternate,p&&!gC(o)){d=wg(r,s,!1),p=!1;continue}if(d===2){if(p=s,r.errorRecoveryDisabledLanes&p)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=r;d=rc;var R=w.current.memoizedState.isDehydrated;if(R&&(tl(w,E).flags|=256),E=wg(w,E,!1),E!==2){if(fg&&!R){w.errorRecoveryDisabledLanes|=p,Va|=p,d=4;break e}p=xn,xn=d,p!==null&&(xn===null?xn=p:xn.push.apply(xn,p))}d=E}if(p=!1,d!==2)continue}}if(d===1){tl(r,0),ds(r,s,0,!0);break}e:{switch(u=r,p=d,p){case 0:case 1:throw Error(n(345));case 4:if((s&4194048)!==s)break;case 6:ds(u,s,or,!ls);break e;case 2:xn=null;break;case 3:case 5:break;default:throw Error(n(329))}if((s&62914560)===s&&(d=gg+300-Wn(),10<d)){if(ds(u,s,or,!ls),yo(u,0,!0)!==0)break e;u.timeoutHandle=Mw(lw.bind(null,u,o,xn,Kd,pg,s,or,Va,Jo,ls,p,2,-0,0),d);break e}lw(u,o,xn,Kd,pg,s,or,Va,Jo,ls,p,0,-0,0)}}break}while(!0);zr(r)}function lw(r,s,o,u,d,p,E,w,R,q,$,J,F,j){if(r.timeoutHandle=-1,J=s.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(hc={stylesheets:null,count:0,unsuspend:XC},tw(s),J=ZC(),J!==null)){r.cancelPendingCommit=J(pw.bind(null,r,s,p,o,u,d,E,w,R,$,1,F,j)),ds(r,p,E,!q);return}pw(r,s,p,o,u,d,E,w,R)}function gC(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Un(p(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ds(r,s,o,u){s&=~mg,s&=~Va,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var d=s;0<d;){var p=31-dn(d),E=1<<p;u[p]=-1,d&=~E}o!==0&&Ar(r,o,s)}function Qd(){return(We&6)===0?(sc(0),!1):!0}function Eg(){if(Ve!==null){if(Xe===0)var r=Ve.return;else r=Ve,Ei=Ra=null,Lp(r),Qo=null,$u=0,r=Ve;for(;r!==null;)qT(r.alternate,r),r=r.return;Ve=null}}function tl(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,OC(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Eg(),at=r,Ve=o=_i(r.current,null),ze=s,Xe=0,Fn=null,ls=!1,Xo=sa(r,s),fg=!1,Jo=or=mg=Va=us=wt=0,xn=rc=null,pg=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var d=31-dn(u),p=1<<d;s|=r[d],u&=~p}return Ci=s,pd(),o}function uw(r,s){Ne=null,Y.H=Od,s===zu||s===bd?(s=SE(),Xe=3):s===IE?(s=SE(),Xe=4):Xe=s===RT?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Fn=s,Ve===null&&(wt=1,Bd(r,nr(s,r.current)))}function cw(){var r=Y.H;return Y.H=Od,r===null?Od:r}function hw(){var r=Y.A;return Y.A=mC,r}function Tg(){wt=4,ls||(ze&4194048)!==ze&&ar.current!==null||(Xo=!0),(us&134217727)===0&&(Va&134217727)===0||at===null||ds(at,ze,or,!1)}function wg(r,s,o){var u=We;We|=2;var d=cw(),p=hw();(at!==r||ze!==s)&&(Kd=null,tl(r,s)),s=!1;var E=wt;e:do try{if(Xe!==0&&Ve!==null){var w=Ve,R=Fn;switch(Xe){case 8:Eg(),E=6;break e;case 3:case 2:case 9:case 6:ar.current===null&&(s=!0);var q=Xe;if(Xe=0,Fn=null,nl(r,w,R,q),o&&Xo){E=0;break e}break;default:q=Xe,Xe=0,Fn=null,nl(r,w,R,q)}}_C(),E=wt;break}catch($){uw(r,$)}while(!0);return s&&r.shellSuspendCounter++,Ei=Ra=null,We=u,Y.H=d,Y.A=p,Ve===null&&(at=null,ze=0,pd()),E}function _C(){for(;Ve!==null;)dw(Ve)}function yC(r,s){var o=We;We|=2;var u=cw(),d=hw();at!==r||ze!==s?(Kd=null,Gd=Wn()+500,tl(r,s)):Xo=sa(r,s);e:do try{if(Xe!==0&&Ve!==null){s=Ve;var p=Fn;t:switch(Xe){case 1:Xe=0,Fn=null,nl(r,s,p,1);break;case 2:case 9:if(bE(p)){Xe=0,Fn=null,fw(s);break}s=function(){Xe!==2&&Xe!==9||at!==r||(Xe=7),zr(r)},p.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:bE(p)?(Xe=0,Fn=null,fw(s)):(Xe=0,Fn=null,nl(r,s,p,7));break;case 5:var E=null;switch(Ve.tag){case 26:E=Ve.memoizedState;case 5:case 27:var w=Ve;if(!E||Yw(E)){Xe=0,Fn=null;var R=w.sibling;if(R!==null)Ve=R;else{var q=w.return;q!==null?(Ve=q,Yd(q)):Ve=null}break t}}Xe=0,Fn=null,nl(r,s,p,5);break;case 6:Xe=0,Fn=null,nl(r,s,p,6);break;case 8:Eg(),wt=6;break e;default:throw Error(n(462))}}vC();break}catch($){uw(r,$)}while(!0);return Ei=Ra=null,Y.H=u,Y.A=d,We=o,Ve!==null?0:(at=null,ze=0,pd(),wt)}function vC(){for(;Ve!==null&&!uu();)dw(Ve)}function dw(r){var s=BT(r.alternate,r,Ci);r.memoizedProps=r.pendingProps,s===null?Yd(r):Ve=s}function fw(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=VT(o,s,s.pendingProps,s.type,void 0,ze);break;case 11:s=VT(o,s,s.pendingProps,s.type.render,s.ref,ze);break;case 5:Lp(s);default:qT(o,s),s=Ve=mE(s,Ci),s=BT(o,s,Ci)}r.memoizedProps=r.pendingProps,s===null?Yd(r):Ve=s}function nl(r,s,o,u){Ei=Ra=null,Lp(s),Qo=null,$u=0;var d=s.return;try{if(lC(r,d,s,o,ze)){wt=1,Bd(r,nr(o,r.current)),Ve=null;return}}catch(p){if(d!==null)throw Ve=d,p;wt=1,Bd(r,nr(o,r.current)),Ve=null;return}s.flags&32768?(Ke||u===1?r=!0:Xo||(ze&536870912)!==0?r=!1:(ls=r=!0,(u===2||u===9||u===3||u===6)&&(u=ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),mw(s,r)):Yd(s)}function Yd(r){var s=r;do{if((s.flags&32768)!==0){mw(s,ls);return}r=s.return;var o=cC(s.alternate,s,Ci);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);wt===0&&(wt=5)}function mw(r,s){do{var o=hC(r.alternate,r);if(o!==null){o.flags&=32767,Ve=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=o}while(r!==null);wt=6,Ve=null}function pw(r,s,o,u,d,p,E,w,R){r.cancelPendingCommit=null;do $d();while(an!==0);if((We&6)!==0)throw Error(n(327));if(s!==null){if(s===r.current)throw Error(n(177));if(p=s.lanes|s.childLanes,p|=dp,pu(r,o,p,E,w,R),r===at&&(Ve=at=null,ze=0),Zo=s,hs=r,el=o,_g=p,yg=d,sw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,IC(ta,function(){return Ew(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,d=oe.p,oe.p=2,E=We,We|=4;try{dC(r,s,o)}finally{We=E,oe.p=d,Y.T=u}}an=1,gw(),_w(),yw()}}function gw(){if(an===1){an=0;var r=hs,s=Zo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=oe.p;oe.p=2;var d=We;We|=4;try{JT(s,r);var p=Og,E=iE(r.containerInfo),w=p.focusedElem,R=p.selectionRange;if(E!==w&&w&&w.ownerDocument&&rE(w.ownerDocument.documentElement,w)){if(R!==null&&op(w)){var q=R.start,$=R.end;if($===void 0&&($=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min($,w.value.length);else{var J=w.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var j=F.getSelection(),Ae=w.textContent.length,we=Math.min(R.start,Ae),rt=R.end===void 0?we:Math.min(R.end,Ae);!j.extend&&we>rt&&(E=rt,rt=we,we=E);var M=nE(w,we),V=nE(w,rt);if(M&&V&&(j.rangeCount!==1||j.anchorNode!==M.node||j.anchorOffset!==M.offset||j.focusNode!==V.node||j.focusOffset!==V.offset)){var z=J.createRange();z.setStart(M.node,M.offset),j.removeAllRanges(),we>rt?(j.addRange(z),j.extend(V.node,V.offset)):(z.setEnd(V.node,V.offset),j.addRange(z))}}}}for(J=[],j=w;j=j.parentNode;)j.nodeType===1&&J.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<J.length;w++){var X=J[w];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}lf=!!Vg,Og=Vg=null}finally{We=d,oe.p=u,Y.T=o}}r.current=s,an=2}}function _w(){if(an===2){an=0;var r=hs,s=Zo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=oe.p;oe.p=2;var d=We;We|=4;try{YT(r,s.alternate,s)}finally{We=d,oe.p=u,Y.T=o}}an=3}}function yw(){if(an===4||an===3){an=0,Hh();var r=hs,s=Zo,o=el,u=sw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?an=5:(an=0,Zo=hs=null,vw(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(cs=null),vo(o),s=s.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Et,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,d=oe.p,oe.p=2,Y.T=null;try{for(var p=r.onRecoverableError,E=0;E<u.length;E++){var w=u[E];p(w.value,{componentStack:w.stack})}}finally{Y.T=s,oe.p=d}}(el&3)!==0&&$d(),zr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===vg?ic++:(ic=0,vg=r):ic=0,sc(0)}}function vw(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,Uu(s)))}function $d(r){return gw(),_w(),yw(),Ew()}function Ew(){if(an!==5)return!1;var r=hs,s=_g;_g=0;var o=vo(el),u=Y.T,d=oe.p;try{oe.p=32>o?32:o,Y.T=null,o=yg,yg=null;var p=hs,E=el;if(an=0,Zo=hs=null,el=0,(We&6)!==0)throw Error(n(331));var w=We;if(We|=4,rw(p.current),ew(p,p.current,E,o),We=w,sc(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Et,p)}catch{}return!0}finally{oe.p=d,Y.T=u,vw(r,s)}}function Tw(r,s,o){s=nr(o,s),s=Xp(r.stateNode,s,2),r=ts(r,s,2),r!==null&&(ai(r,2),zr(r))}function it(r,s,o){if(r.tag===3)Tw(r,r,o);else for(;s!==null;){if(s.tag===3){Tw(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cs===null||!cs.has(u))){r=nr(o,r),o=AT(2),u=ts(s,o,2),u!==null&&(ST(o,u,s,r),ai(u,2),zr(u));break}}s=s.return}}function Ig(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new pC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(fg=!0,d.add(o),r=EC.bind(null,r,s,o),s.then(r,r))}function EC(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,at===r&&(ze&o)===o&&(wt===4||wt===3&&(ze&62914560)===ze&&300>Wn()-gg?(We&2)===0&&tl(r,0):mg|=o,Jo===ze&&(Jo=0)),zr(r)}function ww(r,s){s===0&&(s=mu()),r=Lo(r,s),r!==null&&(ai(r,s),zr(r))}function TC(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),ww(r,o)}function wC(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(n(314))}u!==null&&u.delete(s),ww(r,o)}function IC(r,s){return Zs(r,s)}var Wd=null,rl=null,bg=!1,Xd=!1,Ag=!1,Oa=0;function zr(r){r!==rl&&r.next===null&&(rl===null?Wd=rl=r:rl=rl.next=r),Xd=!0,bg||(bg=!0,AC())}function sc(r,s){if(!Ag&&Xd){Ag=!0;do for(var o=!1,u=Wd;u!==null;){if(r!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var E=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-dn(42|r)+1)-1,p&=d&~(E&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,Sw(u,p))}else p=ze,p=yo(u,u===at?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||sa(u,p)||(o=!0,Sw(u,p));u=u.next}while(o);Ag=!1}}function bC(){Iw()}function Iw(){Xd=bg=!1;var r=0;Oa!==0&&(VC()&&(r=Oa),Oa=0);for(var s=Wn(),o=null,u=Wd;u!==null;){var d=u.next,p=bw(u,s);p===0?(u.next=null,o===null?Wd=d:o.next=d,d===null&&(rl=o)):(o=u,(r!==0||(p&3)!==0)&&(Xd=!0)),u=d}sc(r)}function bw(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var E=31-dn(p),w=1<<E,R=d[E];R===-1?((w&o)===0||(w&u)!==0)&&(d[E]=du(w,s)):R<=s&&(r.expiredLanes|=w),p&=~w}if(s=at,o=ze,o=yo(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ea(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||sa(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&ea(u),vo(o)){case 2:case 8:o=go;break;case 32:o=ta;break;case 268435456:o=_o;break;default:o=ta}return u=Aw.bind(null,r),o=Zs(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&ea(u),r.callbackPriority=2,r.callbackNode=null,2}function Aw(r,s){if(an!==0&&an!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if($d()&&r.callbackNode!==o)return null;var u=ze;return u=yo(r,r===at?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(ow(r,u,s),bw(r,Wn()),r.callbackNode!=null&&r.callbackNode===o?Aw.bind(null,r):null)}function Sw(r,s){if($d())return null;ow(r,s,!0)}function AC(){kC(function(){(We&6)!==0?Zs(cu,bC):Iw()})}function Sg(){return Oa===0&&(Oa=fu()),Oa}function Rw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Ao(""+r)}function Cw(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function SC(r,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var p=Rw((d[Pt]||null).action),E=u.submitter;E&&(s=(s=E[Pt]||null)?Rw(s.formAction):E.getAttribute("formAction"),s!==null&&(p=s,E=null));var w=new So("action","action",null,u,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Oa!==0){var R=E?Cw(d,E):new FormData(d);Kp(o,{pending:!0,data:R,method:d.method,action:p},null,R)}}else typeof p=="function"&&(w.preventDefault(),R=E?Cw(d,E):new FormData(d),Kp(o,{pending:!0,data:R,method:d.method,action:p},p,R))},currentTarget:d}]})}}for(var Rg=0;Rg<hp.length;Rg++){var Cg=hp[Rg],RC=Cg.toLowerCase(),CC=Cg[0].toUpperCase()+Cg.slice(1);pr(RC,"on"+CC)}pr(oE,"onAnimationEnd"),pr(lE,"onAnimationIteration"),pr(uE,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(G1,"onTransitionRun"),pr(K1,"onTransitionStart"),pr(Q1,"onTransitionCancel"),pr(cE,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ac));function Dw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],R=w.instance,q=w.currentTarget;if(w=w.listener,R!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=q;try{p(d)}catch($){Ud($)}d.currentTarget=null,p=R}else for(E=0;E<u.length;E++){if(w=u[E],R=w.instance,q=w.currentTarget,w=w.listener,R!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=q;try{p(d)}catch($){Ud($)}d.currentTarget=null,p=R}}}}function Oe(r,s){var o=s[_u];o===void 0&&(o=s[_u]=new Set);var u=r+"__bubble";o.has(u)||(Nw(s,r,2,!1),o.add(u))}function Dg(r,s,o){var u=0;s&&(u|=4),Nw(o,r,u,s)}var Jd="_reactListening"+Math.random().toString(36).slice(2);function Ng(r){if(!r[Jd]){r[Jd]=!0,yu.forEach(function(o){o!=="selectionchange"&&(DC.has(o)||Dg(o,!1,r),Dg(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Jd]||(s[Jd]=!0,Dg("selectionchange",!1,s))}}function Nw(r,s,o,u){switch(e0(s)){case 2:var d=nD;break;case 8:d=rD;break;default:d=Hg}o=d.bind(null,s,o,r),d=void 0,!er||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function xg(r,s,o,u,d){var p=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===d)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;w!==null;){if(E=oi(w),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=p=E;continue e}w=w.parentNode}}u=u.return}ed(function(){var q=p,$=Zn(o),J=[];e:{var F=hE.get(r);if(F!==void 0){var j=So,Ae=r;switch(r){case"keypress":if(xr(o)===0)break e;case"keydown":case"keyup":j=Po;break;case"focusin":Ae="focus",j=Do;break;case"focusout":Ae="blur",j=Do;break;case"beforeblur":case"afterblur":j=Do;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=ld;break;case oE:case lE:case uE:j=No;break;case cE:j=cd;break;case"scroll":case"scrollend":j=td;break;case"wheel":j=Vo;break;case"copy":case"cut":case"paste":j=xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Nu;break;case"toggle":case"beforetoggle":j=dd}var we=(s&4)!==0,rt=!we&&(r==="scroll"||r==="scrollend"),M=we?F!==null?F+"Capture":null:F;we=[];for(var V=q,z;V!==null;){var X=V;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||M===null||(X=fa(V,M),X!=null&&we.push(oc(V,X,z))),rt)break;V=V.return}0<we.length&&(F=new j(F,Ae,null,o,$),J.push({event:F,listeners:we}))}}if((s&7)===0){e:{if(F=r==="mouseover"||r==="pointerover",j=r==="mouseout"||r==="pointerout",F&&o!==hi&&(Ae=o.relatedTarget||o.fromElement)&&(oi(Ae)||Ae[Xn]))break e;if((j||F)&&(F=$.window===$?$:(F=$.ownerDocument)?F.defaultView||F.parentWindow:window,j?(Ae=o.relatedTarget||o.toElement,j=q,Ae=Ae?oi(Ae):null,Ae!==null&&(rt=l(Ae),we=Ae.tag,Ae!==rt||we!==5&&we!==27&&we!==6)&&(Ae=null)):(j=null,Ae=q),j!==Ae)){if(we=tr,X="onMouseLeave",M="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(we=Nu,X="onPointerLeave",M="onPointerEnter",V="pointer"),rt=j==null?F:Rr(j),z=Ae==null?F:Rr(Ae),F=new we(X,V+"leave",j,o,$),F.target=rt,F.relatedTarget=z,X=null,oi($)===q&&(we=new we(M,V+"enter",Ae,o,$),we.target=z,we.relatedTarget=rt,X=we),rt=X,j&&Ae)t:{for(we=j,M=Ae,V=0,z=we;z;z=il(z))V++;for(z=0,X=M;X;X=il(X))z++;for(;0<V-z;)we=il(we),V--;for(;0<z-V;)M=il(M),z--;for(;V--;){if(we===M||M!==null&&we===M.alternate)break t;we=il(we),M=il(M)}we=null}else we=null;j!==null&&xw(J,F,j,we,!1),Ae!==null&&rt!==null&&xw(J,rt,Ae,we,!0)}}e:{if(F=q?Rr(q):window,j=F.nodeName&&F.nodeName.toLowerCase(),j==="select"||j==="input"&&F.type==="file")var fe=Wv;else if(qt(F))if(Xv)fe=F1;else{fe=z1;var Pe=B1}else j=F.nodeName,!j||j.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&Iu(q.elementType)&&(fe=Wv):fe=q1;if(fe&&(fe=fe(r,q))){gi(J,fe,o,$);break e}Pe&&Pe(r,F,q),r==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&Wi(F,"number",F.value)}switch(Pe=q?Rr(q):window,r){case"focusin":(qt(Pe)||Pe.contentEditable==="true")&&(Oo=Pe,lp=q,Vu=null);break;case"focusout":Vu=lp=Oo=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,sE(J,o,$);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":sE(J,o,$)}var _e;if(Or)e:{switch(r){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ue?K(r,o)&&(be="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(v&&o.locale!=="ko"&&(Ue||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ue&&(_e=Au()):(Nr=$,Xi="value"in Nr?Nr.value:Nr.textContent,Ue=!0)),Pe=Zd(q,be),0<Pe.length&&(be=new Cu(be,r,null,o,$),J.push({event:be,listeners:Pe}),_e?be.data=_e:(_e=ie(o),_e!==null&&(be.data=_e)))),(_e=_?zt(r,o):Be(r,o))&&(be=Zd(q,"onBeforeInput"),0<be.length&&(Pe=new Cu("onBeforeInput","beforeinput",null,o,$),J.push({event:Pe,listeners:be}),Pe.data=_e)),SC(J,r,q,o,$)}Dw(J,s)})}function oc(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Zd(r,s){for(var o=s+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=fa(r,o),d!=null&&u.unshift(oc(r,d,p)),d=fa(r,s),d!=null&&u.push(oc(r,d,p))),r.tag===3)return u;r=r.return}return[]}function il(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function xw(r,s,o,u,d){for(var p=s._reactName,E=[];o!==null&&o!==u;){var w=o,R=w.alternate,q=w.stateNode;if(w=w.tag,R!==null&&R===u)break;w!==5&&w!==26&&w!==27||q===null||(R=q,d?(q=fa(o,p),q!=null&&E.unshift(oc(o,q,R))):d||(q=fa(o,p),q!=null&&E.push(oc(o,q,R)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var NC=/\r\n?/g,xC=/\u0000|\uFFFD/g;function Pw(r){return(typeof r=="string"?r:""+r).replace(NC,`
`).replace(xC,"")}function Vw(r,s){return s=Pw(s),Pw(r)===s}function ef(){}function nt(r,s,o,u,d,p){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Jn(r,""+u);break;case"className":Cr(r,"class",u);break;case"tabIndex":Cr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Cr(r,o,u);break;case"style":wu(r,u,p);break;case"data":if(s!=="object"){Cr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Ao(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(s!=="input"&&nt(r,s,"name",d.name,d,null),nt(r,s,"formEncType",d.formEncType,d,null),nt(r,s,"formMethod",d.formMethod,d,null),nt(r,s,"formTarget",d.formTarget,d,null)):(nt(r,s,"encType",d.encType,d,null),nt(r,s,"method",d.method,d,null),nt(r,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Ao(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=ef);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Ao(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Oe("beforetoggle",r),Oe("toggle",r),$i(r,"popover",u);break;case"xlinkActuate":nn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":nn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":nn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":nn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":nn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":nn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":nn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":nn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":nn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":$i(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=tp.get(o)||o,$i(r,o,u))}}function Pg(r,s,o,u,d,p){switch(o){case"style":wu(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&Jn(r,""+u);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=ef);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),p=r[Pt]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(s,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,d);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):$i(r,o,u)}}}function on(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",r),Oe("load",r);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:nt(r,s,p,E,o,null)}}d&&nt(r,s,"srcSet",o.srcSet,o,null),u&&nt(r,s,"src",o.src,o,null);return;case"input":Oe("invalid",r);var w=p=E=d=null,R=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var $=o[u];if($!=null)switch(u){case"name":d=$;break;case"type":E=$;break;case"checked":R=$;break;case"defaultChecked":q=$;break;case"value":p=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(n(137,s));break;default:nt(r,s,u,$,o,null)}}ca(r,p,w,R,q,E,d,!1),bo(r);return;case"select":Oe("invalid",r),u=E=p=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":p=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:nt(r,s,d,w,o,null)}s=p,o=E,r.multiple=!!u,s!=null?ci(r,!!u,s,!1):o!=null&&ci(r,!!u,o,!0);return;case"textarea":Oe("invalid",r),p=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":d=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(n(91));break;default:nt(r,s,E,w,o,null)}ha(r,u,d,p),bo(r);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(r,s,R,u,o,null)}return;case"dialog":Oe("beforetoggle",r),Oe("toggle",r),Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":Oe("load",r);break;case"video":case"audio":for(u=0;u<ac.length;u++)Oe(ac[u],r);break;case"image":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"embed":case"source":case"link":Oe("error",r),Oe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:nt(r,s,q,u,o,null)}return;default:if(Iu(s)){for($ in o)o.hasOwnProperty($)&&(u=o[$],u!==void 0&&Pg(r,s,$,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&nt(r,s,w,u,o,null))}function PC(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,E=null,w=null,R=null,q=null,$=null;for(j in o){var J=o[j];if(o.hasOwnProperty(j)&&J!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":R=J;default:u.hasOwnProperty(j)||nt(r,s,j,null,u,J)}}for(var F in u){var j=u[F];if(J=o[F],u.hasOwnProperty(F)&&(j!=null||J!=null))switch(F){case"type":p=j;break;case"name":d=j;break;case"checked":q=j;break;case"defaultChecked":$=j;break;case"value":E=j;break;case"defaultValue":w=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(n(137,s));break;default:j!==J&&nt(r,s,F,j,u,J)}}Ln(r,E,w,R,q,$,p,d);return;case"select":j=E=w=F=null;for(p in o)if(R=o[p],o.hasOwnProperty(p)&&R!=null)switch(p){case"value":break;case"multiple":j=R;default:u.hasOwnProperty(p)||nt(r,s,p,null,u,R)}for(d in u)if(p=u[d],R=o[d],u.hasOwnProperty(d)&&(p!=null||R!=null))switch(d){case"value":F=p;break;case"defaultValue":w=p;break;case"multiple":E=p;default:p!==R&&nt(r,s,d,p,u,R)}s=w,o=E,u=j,F!=null?ci(r,!!o,F,!1):!!u!=!!o&&(s!=null?ci(r,!!o,s,!0):ci(r,!!o,o?[]:"",!1));return;case"textarea":j=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:nt(r,s,w,null,u,d)}for(E in u)if(d=u[E],p=o[E],u.hasOwnProperty(E)&&(d!=null||p!=null))switch(E){case"value":F=d;break;case"defaultValue":j=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:d!==p&&nt(r,s,E,d,u,p)}et(r,F,j);return;case"option":for(var Ae in o)if(F=o[Ae],o.hasOwnProperty(Ae)&&F!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:nt(r,s,Ae,null,u,F)}for(R in u)if(F=u[R],j=o[R],u.hasOwnProperty(R)&&F!==j&&(F!=null||j!=null))switch(R){case"selected":r.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:nt(r,s,R,F,u,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)F=o[we],o.hasOwnProperty(we)&&F!=null&&!u.hasOwnProperty(we)&&nt(r,s,we,null,u,F);for(q in u)if(F=u[q],j=o[q],u.hasOwnProperty(q)&&F!==j&&(F!=null||j!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(n(137,s));break;default:nt(r,s,q,F,u,j)}return;default:if(Iu(s)){for(var rt in o)F=o[rt],o.hasOwnProperty(rt)&&F!==void 0&&!u.hasOwnProperty(rt)&&Pg(r,s,rt,void 0,u,F);for($ in u)F=u[$],j=o[$],!u.hasOwnProperty($)||F===j||F===void 0&&j===void 0||Pg(r,s,$,F,u,j);return}}for(var M in o)F=o[M],o.hasOwnProperty(M)&&F!=null&&!u.hasOwnProperty(M)&&nt(r,s,M,null,u,F);for(J in u)F=u[J],j=o[J],!u.hasOwnProperty(J)||F===j||F==null&&j==null||nt(r,s,J,F,u,j)}var Vg=null,Og=null;function tf(r){return r.nodeType===9?r:r.ownerDocument}function Ow(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function kg(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mg=null;function VC(){var r=window.event;return r&&r.type==="popstate"?r===Mg?!1:(Mg=r,!0):(Mg=null,!1)}var Mw=typeof setTimeout=="function"?setTimeout:void 0,OC=typeof clearTimeout=="function"?clearTimeout:void 0,Lw=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof Lw<"u"?function(r){return Lw.resolve(null).then(r).catch(MC)}:Mw;function MC(r){setTimeout(function(){throw r})}function fs(r){return r==="head"}function Uw(r,s){var o=s,u=0,d=0;do{var p=o.nextSibling;if(r.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&lc(E.documentElement),o&2&&lc(E.body),o&4)for(o=E.head,lc(o),E=o.firstChild;E;){var w=E.nextSibling,R=E.nodeName;E[aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(d===0){r.removeChild(p),gc(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);gc(s)}function Lg(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Lg(o),Yi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function LC(r,s,o,u){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[aa])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=_r(r.nextSibling),r===null)break}return null}function UC(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=_r(r.nextSibling),r===null))return null;return r}function Ug(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function BC(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function _r(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Bg=null;function Bw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function zw(r,s,o){switch(s=tf(o),r){case"html":if(r=s.documentElement,!r)throw Error(n(452));return r;case"head":if(r=s.head,!r)throw Error(n(453));return r;case"body":if(r=s.body,!r)throw Error(n(454));return r;default:throw Error(n(451))}}function lc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Yi(r)}var lr=new Map,qw=new Set;function nf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Di=oe.d;oe.d={f:zC,r:qC,D:FC,C:jC,L:HC,m:GC,X:QC,S:KC,M:YC};function zC(){var r=Di.f(),s=Qd();return r||s}function qC(r){var s=Sr(r);s!==null&&s.tag===5&&s.type==="form"?oT(s):Di.r(r)}var sl=typeof document>"u"?null:document;function Fw(r,s,o){var u=sl;if(u&&typeof s=="string"&&s){var d=Vt(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),qw.has(d)||(qw.add(d),r={rel:r,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),on(s,"link",r),St(s),u.head.appendChild(s)))}}function FC(r){Di.D(r),Fw("dns-prefetch",r,null)}function jC(r,s){Di.C(r,s),Fw("preconnect",r,s)}function HC(r,s,o){Di.L(r,s,o);var u=sl;if(u&&r&&s){var d='link[rel="preload"][as="'+Vt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Vt(o.imageSizes)+'"]')):d+='[href="'+Vt(r)+'"]';var p=d;switch(s){case"style":p=al(r);break;case"script":p=ol(r)}lr.has(p)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),lr.set(p,r),u.querySelector(d)!==null||s==="style"&&u.querySelector(uc(p))||s==="script"&&u.querySelector(cc(p))||(s=u.createElement("link"),on(s,"link",r),St(s),u.head.appendChild(s)))}}function GC(r,s){Di.m(r,s);var o=sl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(r)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ol(r)}if(!lr.has(p)&&(r=y({rel:"modulepreload",href:r},s),lr.set(p,r),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(cc(p)))return}u=o.createElement("link"),on(u,"link",r),St(u),o.head.appendChild(u)}}}function KC(r,s,o){Di.S(r,s,o);var u=sl;if(u&&r){var d=En(u).hoistableStyles,p=al(r);s=s||"default";var E=d.get(p);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(uc(p)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=lr.get(p))&&zg(r,o);var R=E=u.createElement("link");St(R),on(R,"link",r),R._p=new Promise(function(q,$){R.onload=q,R.onerror=$}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,rf(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(p,E)}}}function QC(r,s){Di.X(r,s);var o=sl;if(o&&r){var u=En(o).hoistableScripts,d=ol(r),p=u.get(d);p||(p=o.querySelector(cc(d)),p||(r=y({src:r,async:!0},s),(s=lr.get(d))&&qg(r,s),p=o.createElement("script"),St(p),on(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function YC(r,s){Di.M(r,s);var o=sl;if(o&&r){var u=En(o).hoistableScripts,d=ol(r),p=u.get(d);p||(p=o.querySelector(cc(d)),p||(r=y({src:r,async:!0,type:"module"},s),(s=lr.get(d))&&qg(r,s),p=o.createElement("script"),St(p),on(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function jw(r,s,o,u){var d=(d=Se.current)?nf(d):null;if(!d)throw Error(n(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=al(o.href),o=En(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=al(o.href);var p=En(d).hoistableStyles,E=p.get(r);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,E),(p=d.querySelector(uc(r)))&&!p._p&&(E.instance=p,E.state.loading=5),lr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},lr.set(r,o),p||$C(d,r,o,E.state))),s&&u===null)throw Error(n(528,""));return E}if(s&&u!==null)throw Error(n(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=En(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,r))}}function al(r){return'href="'+Vt(r)+'"'}function uc(r){return'link[rel="stylesheet"]['+r+"]"}function Hw(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function $C(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),on(s,"link",o),St(s),r.head.appendChild(s))}function ol(r){return'[src="'+Vt(r)+'"]'}function cc(r){return"script[async]"+r}function Gw(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return s.instance=u,St(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),St(u),on(u,"style",d),rf(u,o.precedence,r),s.instance=u;case"stylesheet":d=al(o.href);var p=r.querySelector(uc(d));if(p)return s.state.loading|=4,s.instance=p,St(p),p;u=Hw(o),(d=lr.get(d))&&zg(u,d),p=(r.ownerDocument||r).createElement("link"),St(p);var E=p;return E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),on(p,"link",u),s.state.loading|=4,rf(p,o.precedence,r),s.instance=p;case"script":return p=ol(o.src),(d=r.querySelector(cc(p)))?(s.instance=d,St(d),d):(u=o,(d=lr.get(p))&&(u=y({},o),qg(u,d)),r=r.ownerDocument||r,d=r.createElement("script"),St(d),on(d,"link",u),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(n(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,rf(u,o.precedence,r));return s.instance}function rf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)p=w;else if(p!==d)break}p?p.parentNode.insertBefore(r,p.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function zg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function qg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var sf=null;function Kw(r,s,o){if(sf===null){var u=new Map,d=sf=new Map;d.set(o,u)}else d=sf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var p=o[d];if(!(p[aa]||p[Bt]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(s)||"";E=r+E;var w=u.get(E);w?w.push(p):u.set(E,[p])}}return u}function Qw(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function WC(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Yw(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var hc=null;function XC(){}function JC(r,s,o){if(hc===null)throw Error(n(475));var u=hc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=al(o.href),p=r.querySelector(uc(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=af.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=p,St(p);return}p=r.ownerDocument||r,o=Hw(o),(d=lr.get(d))&&zg(o,d),p=p.createElement("link"),St(p);var E=p;E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),on(p,"link",o),s.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=af.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function ZC(){if(hc===null)throw Error(n(475));var r=hc;return r.stylesheets&&r.count===0&&Fg(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Fg(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function af(){if(this.count--,this.count===0){if(this.stylesheets)Fg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var of=null;function Fg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,of=new Map,s.forEach(eD,r),of=null,af.call(r))}function eD(r,s){if(!(s.state.loading&4)){var o=of.get(r);if(o)var u=o.get(null);else{o=new Map,of.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var E=d[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=s.instance,E=d.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,d),o.set(E,d),this.count++,u=af.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var dc={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function tD(r,s,o,u,d,p,E,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.hiddenUpdates=si(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function $w(r,s,o,u,d,p,E,w,R,q,$,J){return r=new tD(r,s,o,E,w,R,q,J),s=1,p===!0&&(s|=24),p=Bn(3,null,null,s),r.current=p,p.stateNode=r,s=Ip(),s.refCount++,r.pooledCache=s,s.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:s},Rp(p),r}function Ww(r){return r?(r=Uo,r):Uo}function Xw(r,s,o,u,d,p){d=Ww(d),u.context===null?u.context=d:u.pendingContext=d,u=es(s),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ts(r,u,s),o!==null&&(Hn(o,r,s),Fu(o,r,s))}function Jw(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function jg(r,s){Jw(r,s),(r=r.alternate)&&Jw(r,s)}function Zw(r){if(r.tag===13){var s=Lo(r,67108864);s!==null&&Hn(s,r,67108864),jg(r,67108864)}}var lf=!0;function nD(r,s,o,u){var d=Y.T;Y.T=null;var p=oe.p;try{oe.p=2,Hg(r,s,o,u)}finally{oe.p=p,Y.T=d}}function rD(r,s,o,u){var d=Y.T;Y.T=null;var p=oe.p;try{oe.p=8,Hg(r,s,o,u)}finally{oe.p=p,Y.T=d}}function Hg(r,s,o,u){if(lf){var d=Gg(u);if(d===null)xg(r,s,u,uf,o),t0(r,u);else if(sD(d,r,s,o,u))u.stopPropagation();else if(t0(r,u),s&4&&-1<iD.indexOf(r)){for(;d!==null;){var p=Sr(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=dr(p.pendingLanes);if(E!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var R=1<<31-dn(E);w.entanglements[1]|=R,E&=~R}zr(p),(We&6)===0&&(Gd=Wn()+500,sc(0))}}break;case 13:w=Lo(p,2),w!==null&&Hn(w,p,2),Qd(),jg(p,2)}if(p=Gg(u),p===null&&xg(r,s,u,uf,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else xg(r,s,u,null,o)}}function Gg(r){return r=Zn(r),Kg(r)}var uf=null;function Kg(r){if(uf=null,r=oi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return uf=r,null}function e0(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($m()){case cu:return 2;case go:return 8;case ta:case Wm:return 32;case _o:return 268435456;default:return 32}default:return 32}}var Qg=!1,ms=null,ps=null,gs=null,fc=new Map,mc=new Map,_s=[],iD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(r,s){switch(r){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":fc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mc.delete(s.pointerId)}}function pc(r,s,o,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Sr(s),s!==null&&Zw(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function sD(r,s,o,u,d){switch(s){case"focusin":return ms=pc(ms,r,s,o,u,d),!0;case"dragenter":return ps=pc(ps,r,s,o,u,d),!0;case"mouseover":return gs=pc(gs,r,s,o,u,d),!0;case"pointerover":var p=d.pointerId;return fc.set(p,pc(fc.get(p)||null,r,s,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,mc.set(p,pc(mc.get(p)||null,r,s,o,u,d)),!0}return!1}function n0(r){var s=oi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,Qh(r.priority,function(){if(o.tag===13){var u=jn();u=Gi(u);var d=Lo(o,u);d!==null&&Hn(d,o,u),jg(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function cf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Gg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);hi=u,o.target.dispatchEvent(u),hi=null}else return s=Sr(o),s!==null&&Zw(s),r.blockedOn=o,!1;s.shift()}return!0}function r0(r,s,o){cf(r)&&o.delete(s)}function aD(){Qg=!1,ms!==null&&cf(ms)&&(ms=null),ps!==null&&cf(ps)&&(ps=null),gs!==null&&cf(gs)&&(gs=null),fc.forEach(r0),mc.forEach(r0)}function hf(r,s){r.blockedOn===s&&(r.blockedOn=null,Qg||(Qg=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,aD)))}var df=null;function i0(r){df!==r&&(df=r,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){df===r&&(df=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],d=r[s+2];if(typeof u!="function"){if(Kg(u||o)===null)continue;break}var p=Sr(o);p!==null&&(r.splice(s,3),s-=3,Kp(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function gc(r){function s(R){return hf(R,r)}ms!==null&&hf(ms,r),ps!==null&&hf(ps,r),gs!==null&&hf(gs,r),fc.forEach(s),mc.forEach(s);for(var o=0;o<_s.length;o++){var u=_s[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<_s.length&&(o=_s[0],o.blockedOn===null);)n0(o),o.blockedOn===null&&_s.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],E=d[Pt]||null;if(typeof p=="function")E||i0(o);else if(E){var w=null;if(p&&p.hasAttribute("formAction")){if(d=p,E=p[Pt]||null)w=E.formAction;else if(Kg(d)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),i0(o)}}}function Yg(r){this._internalRoot=r}ff.prototype.render=Yg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));var o=s.current,u=jn();Xw(o,u,r,s,null,null)},ff.prototype.unmount=Yg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Xw(r.current,2,null,r,null,null),Qd(),s[Xn]=null}};function ff(r){this._internalRoot=r}ff.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ki();r={blockedOn:null,target:r,priority:s};for(var o=0;o<_s.length&&s!==0&&s<_s[o].priority;o++);_s.splice(o,0,r),o===0&&n0(r)}};var s0=e.version;if(s0!=="19.1.1")throw Error(n(527,s0,"19.1.1"));oe.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=m(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var oD={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mf.isDisabled&&mf.supportsFiber)try{Et=mf.inject(oD),$e=mf}catch{}}return yc.createRoot=function(r,s){if(!a(r))throw Error(n(299));var o=!1,u="",d=TT,p=wT,E=IT,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=$w(r,1,!1,null,null,o,u,d,p,E,w,null),r[Xn]=s.current,Ng(r),new Yg(s)},yc.hydrateRoot=function(r,s,o){if(!a(r))throw Error(n(299));var u=!1,d="",p=TT,E=wT,w=IT,R=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),s=$w(r,1,!0,s,o??null,u,d,p,E,w,R,q),s.context=Ww(null),o=s.current,u=jn(),u=Gi(u),d=es(u),d.callback=null,ts(o,d,u),o=u,s.current.lanes=o,ai(s,o),zr(s),r[Xn]=s.current,Ng(r),new ff(s)},yc.version="19.1.1",yc}var p0;function yD(){if(p0)return Xg.exports;p0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Xg.exports=_D(),Xg.exports}var vD=yD();const ED=Ab(vD),TD=()=>{};var g0={};/**
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
 */const Sb=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let a=i.charCodeAt(n);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},wD=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const a=i[t++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[n++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],f=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[n++]=String.fromCharCode(55296+(m>>10)),e[n++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[n++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Rb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,f=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,y=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|g>>6,O=g&63;m||(O=64,c||(I=64)),n.push(t[y],t[T],t[I],t[O])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Sb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):wD(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],f=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new ID;const I=l<<2|f>>4;if(n.push(I),g!==64){const O=f<<4&240|g>>2;if(n.push(O),T!==64){const G=g<<6&192|T;n.push(G)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ID extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bD=function(i){const e=Sb(i);return Rb.encodeByteArray(e,!0)},Uf=function(i){return bD(i).replace(/\./g,"")},cy=function(i){try{return Rb.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Bf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!AD(t)||(i[t]=Bf(i[t],e[t]));return i}function AD(i){return i!=="__proto__"}/**
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
 */function hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SD=()=>hy().__FIREBASE_DEFAULTS__,RD=()=>{if(typeof process>"u"||typeof g0>"u")return;const i=g0.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},CD=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cy(i[1]);return e&&JSON.parse(e)},dy=()=>{try{return TD()||SD()||RD()||CD()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},fy=()=>{var i;return(i=dy())==null?void 0:i.config},DD=i=>{var e;return(e=dy())==null?void 0:e[`_${i}`]};/**
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
 */class ND{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Wl(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cb(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function xD(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Uf(JSON.stringify(t)),Uf(JSON.stringify(c)),""].join(".")}const Mc={};function PD(){const i={prod:[],emulator:[]};for(const e of Object.keys(Mc))Mc[e]?i.emulator.push(e):i.prod.push(e);return i}function VD(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let _0=!1;function Db(i,e){if(typeof window>"u"||typeof document>"u"||!Wl(window.location.host)||Mc[i]===e||Mc[i]||_0)return;Mc[i]=e;function t(I){return`__firebase__banner__${I}`}const n="__firebase__banner",l=PD().prod.length>0;function c(){const I=document.getElementById(n);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,O){I.setAttribute("width","24"),I.setAttribute("id",O),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function g(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{_0=!0,c()},I}function y(I,O){I.setAttribute("id",O),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=VD(n),O=t("text"),G=document.getElementById(O)||document.createElement("span"),W=t("learnmore"),Q=document.getElementById(W)||document.createElement("a"),de=t("preprendIcon"),he=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ae=I.element;f(ae),y(Q,W);const Ie=g();m(he,de),ae.append(he,G,Q,Ie),document.body.appendChild(ae)}l?(G.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function cm(){var e;const i=(e=dy())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kD(){return typeof window<"u"||Nb()}function Nb(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function MD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pb(){const i=_t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Vb(){return!cm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ob(){return!cm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function LD(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const UD="FirebaseError";class Sn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=UD,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?BD(l,n):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Sn(a,f,n)}}function BD(i,e){return i.replace(zD,(t,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const zD=/\{\$([^}]+)}/g;/**
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
 */function y0(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function qD(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Vs(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const a of t){if(!n.includes(a))return!1;const l=i[a],c=e[a];if(v0(l)&&v0(c)){if(!Vs(l,c))return!1}else if(l!==c)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function v0(i){return i!==null&&typeof i=="object"}/**
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
 */function Xl(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function El(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,l]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Cc(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function kb(i,e){const t=new FD(i,e);return t.subscribe.bind(t)}class FD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let a;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");jD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:n},a.next===void 0&&(a.next=t_),a.error===void 0&&(a.error=t_),a.complete===void 0&&(a.complete=t_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jD(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function t_(){}/**
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
 */function Ee(i){return i&&i._delegate?i._delegate:i}class Zr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ma="[DEFAULT]";/**
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
 */class HD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ND;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KD(e))try{this.getOrInitializeService({instanceIdentifier:Ma})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});n.resolve(l)}catch{}}}}clearInstance(e=Ma){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ma){return this.instances.has(e)}getOptions(e=Ma){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);n===f&&c.resolve(a)}return a}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(n)??new Set;a.add(e),this.onInitCallbacks.set(n,a);const l=this.instances.get(n);return l&&e(l,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:GD(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ma){return this.component?this.component.multipleInstances?e:Ma:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GD(i){return i===Ma?void 0:i}function KD(i){return i.instantiationMode==="EAGER"}/**
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
 */class Mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const py=[];var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Lb={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},QD=ke.INFO,YD={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},$D=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),a=YD[e];if(a)console[a](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hm{constructor(e){this.name=e,this._logLevel=QD,this._logHandler=$D,this._userLogHandler=null,py.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}function WD(i){py.forEach(e=>{e.setLogLevel(i)})}function XD(i,e){for(const t of py){let n=null;e&&e.level&&(n=Lb[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");l>=(n??a.logLevel)&&i({level:ke[l].toLowerCase(),message:f,args:c,type:a.name})}}}const JD=(i,e)=>e.some(t=>i instanceof t);let E0,T0;function ZD(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e2(){return T0||(T0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ub=new WeakMap,w_=new WeakMap,Bb=new WeakMap,n_=new WeakMap,gy=new WeakMap;function t2(i){const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Cs(i.result)),a()},c=()=>{n(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Ub.set(t,i)}).catch(()=>{}),gy.set(e,i),e}function n2(i){if(w_.has(i))return;const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{n(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});w_.set(i,e)}let I_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return w_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Bb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cs(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function r2(i){I_=i(I_)}function i2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(r_(this),e,...t);return Bb.set(n,e.sort?e.sort():[e]),Cs(n)}:e2().includes(i)?function(...e){return i.apply(r_(this),e),Cs(Ub.get(this))}:function(...e){return Cs(i.apply(r_(this),e))}}function s2(i){return typeof i=="function"?i2(i):(i instanceof IDBTransaction&&n2(i),JD(i,ZD())?new Proxy(i,I_):i)}function Cs(i){if(i instanceof IDBRequest)return t2(i);if(n_.has(i))return n_.get(i);const e=s2(i);return e!==i&&(n_.set(i,e),gy.set(e,i)),e}const r_=i=>gy.get(i);function a2(i,e,{blocked:t,upgrade:n,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),f=Cs(c);return n&&c.addEventListener("upgradeneeded",m=>{n(Cs(c.result),m.oldVersion,m.newVersion,Cs(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const o2=["get","getKey","getAll","getAllKeys","count"],l2=["put","add","delete","clear"],i_=new Map;function w0(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(i_.get(e))return i_.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=l2.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||o2.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return n&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return i_.set(e,l),l}r2(i=>({...i,get:(e,t,n)=>w0(e,t)||i.get(e,t,n),has:(e,t)=>!!w0(e,t)||i.has(e,t)}));/**
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
 */class u2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(c2(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function c2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",b_="0.14.2";/**
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
 */const Oi=new hm("@firebase/app"),h2="@firebase/app-compat",d2="@firebase/analytics-compat",f2="@firebase/analytics",m2="@firebase/app-check-compat",p2="@firebase/app-check",g2="@firebase/auth",_2="@firebase/auth-compat",y2="@firebase/database",v2="@firebase/data-connect",E2="@firebase/database-compat",T2="@firebase/functions",w2="@firebase/functions-compat",I2="@firebase/installations",b2="@firebase/installations-compat",A2="@firebase/messaging",S2="@firebase/messaging-compat",R2="@firebase/performance",C2="@firebase/performance-compat",D2="@firebase/remote-config",N2="@firebase/remote-config-compat",x2="@firebase/storage",P2="@firebase/storage-compat",V2="@firebase/firestore",O2="@firebase/ai",k2="@firebase/firestore-compat",M2="firebase",L2="12.2.0";/**
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
 */const Os="[DEFAULT]",U2={[zf]:"fire-core",[h2]:"fire-core-compat",[f2]:"fire-analytics",[d2]:"fire-analytics-compat",[p2]:"fire-app-check",[m2]:"fire-app-check-compat",[g2]:"fire-auth",[_2]:"fire-auth-compat",[y2]:"fire-rtdb",[v2]:"fire-data-connect",[E2]:"fire-rtdb-compat",[T2]:"fire-fn",[w2]:"fire-fn-compat",[I2]:"fire-iid",[b2]:"fire-iid-compat",[A2]:"fire-fcm",[S2]:"fire-fcm-compat",[R2]:"fire-perf",[C2]:"fire-perf-compat",[D2]:"fire-rc",[N2]:"fire-rc-compat",[x2]:"fire-gcs",[P2]:"fire-gcs-compat",[V2]:"fire-fst",[k2]:"fire-fst-compat",[O2]:"fire-vertex","fire-js":"fire-js",[M2]:"fire-js-all"};/**
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
 */const ks=new Map,Rl=new Map,Cl=new Map;function Zc(i,e){try{i.container.addComponent(e)}catch(t){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function zb(i,e){i.container.addOrOverwriteComponent(e)}function Ms(i){const e=i.name;if(Cl.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Cl.set(e,i);for(const t of ks.values())Zc(t,i);for(const t of Rl.values())Zc(t,i);return!0}function qb(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function B2(i,e,t=Os){qb(i,e).clearInstance(t)}function _y(i){return i.options!==void 0}function Fb(i){return _y(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function ft(i){return i==null?!1:i.settings!==void 0}function z2(){Cl.clear()}/**
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
 */const q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new uo("app","Firebase",q2);/**
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
 */let jb=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */function I0(i,e){const t=cy(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class F2 extends jb{constructor(e,t,n,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:n,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig={automaticDataCollectionEnabled:l,...t},this._serverConfig.authIdToken&&I0(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&I0(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Er(zf,b_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){vy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Yn.create("server-app-deleted")}}/**
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
 */const Gs=L2;function yy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:Os,automaticDataCollectionEnabled:!0,...e},a=n.name;if(typeof a!="string"||!a)throw Yn.create("bad-app-name",{appName:String(a)});if(t||(t=fy()),!t)throw Yn.create("no-options");const l=ks.get(a);if(l){if(Vs(t,l.options)&&Vs(n,l.config))return l;throw Yn.create("duplicate-app",{appName:a})}const c=new Mb(a);for(const m of Cl.values())c.addComponent(m);const f=new jb(t,n,c);return ks.set(a,f),f}function j2(i,e={}){if(kD()&&!Nb())throw Yn.create("invalid-server-app-environment");let t,n=e||{};if(i&&(_y(i)?t=i.options:Fb(i)?n=i:t=i),n.automaticDataCollectionEnabled===void 0&&(n.automaticDataCollectionEnabled=!0),t||(t=fy()),!t)throw Yn.create("no-options");const a={...n,...t};a.releaseOnDeref!==void 0&&delete a.releaseOnDeref;const l=y=>[...y].reduce((T,I)=>Math.imul(31,T)+I.charCodeAt(0)|0,0);if(n.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Yn.create("finalization-registry-not-supported",{});const c=""+l(JSON.stringify(a)),f=Rl.get(c);if(f)return f.incRefCount(n.releaseOnDeref),f;const m=new Mb(c);for(const y of Cl.values())m.addComponent(y);const g=new F2(t,n,c,m);return Rl.set(c,g),g}function H2(i=Os){const e=ks.get(i);if(!e&&i===Os&&fy())return yy();if(!e)throw Yn.create("no-app",{appName:i});return e}function G2(){return Array.from(ks.values())}async function vy(i){let e=!1;const t=i.name;ks.has(t)?(e=!0,ks.delete(t)):Rl.has(t)&&i.decRefCount()<=0&&(Rl.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Er(i,e,t){let n=U2[i]??i;t&&(n+=`-${t}`);const a=n.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${n}" with version "${e}":`];a&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(c.join(" "));return}Ms(new Zr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function Hb(i,e){if(i!==null&&typeof i!="function")throw Yn.create("invalid-log-argument");XD(i,e)}function Gb(i){WD(i)}/**
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
 */const K2="firebase-heartbeat-database",Q2=1,eh="firebase-heartbeat-store";let s_=null;function Kb(){return s_||(s_=a2(K2,Q2,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(eh)}catch(t){console.warn(t)}}}}).catch(i=>{throw Yn.create("idb-open",{originalErrorMessage:i.message})})),s_}async function Y2(i){try{const t=(await Kb()).transaction(eh),n=await t.objectStore(eh).get(Qb(i));return await t.done,n}catch(e){if(e instanceof Sn)Oi.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(t.message)}}}async function b0(i,e){try{const n=(await Kb()).transaction(eh,"readwrite");await n.objectStore(eh).put(e,Qb(i)),await n.done}catch(t){if(t instanceof Sn)Oi.warn(t.message);else{const n=Yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oi.warn(n.message)}}}function Qb(i){return`${i.name}!${i.options.appId}`}/**
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
 */const $2=1024,W2=30;class X2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z2(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=A0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>W2){const c=eN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Oi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=A0(),{heartbeatsToSend:n,unsentEntries:a}=J2(this._heartbeatsCache.heartbeats),l=Uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Oi.warn(t),""}}}function A0(){return new Date().toISOString().substring(0,10)}function J2(i,e=$2){const t=[];let n=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),S0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),S0(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Z2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?LD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Y2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return b0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return b0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function S0(i){return Uf(JSON.stringify({version:2,heartbeats:i})).length}function eN(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function tN(i){Ms(new Zr("platform-logger",e=>new u2(e),"PRIVATE")),Ms(new Zr("heartbeat",e=>new X2(e),"PRIVATE")),Er(zf,b_,i),Er(zf,b_,"esm2020"),Er("fire-js","")}tN("");const nN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Sn,SDK_VERSION:Gs,_DEFAULT_ENTRY_NAME:Os,_addComponent:Zc,_addOrOverwriteComponent:zb,_apps:ks,_clearComponents:z2,_components:Cl,_getProvider:qb,_isFirebaseApp:_y,_isFirebaseServerApp:ft,_isFirebaseServerAppSettings:Fb,_registerComponent:Ms,_removeServiceInstance:B2,_serverApps:Rl,deleteApp:vy,getApp:H2,getApps:G2,initializeApp:yy,initializeServerApp:j2,onLog:Hb,registerVersion:Er,setLogLevel:Gb},Symbol.toStringTag,{value:"Module"}));/**
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
 */class rN{constructor(e,t){this._delegate=e,this.firebase=t,Zc(e,new Zr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),vy(this._delegate)))}_getService(e,t=Os){var a;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return!n.isInitialized()&&((a=n.getComponent())==null?void 0:a.instantiationMode)==="EXPLICIT"&&n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=Os){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Zc(this._delegate,e)}_addOrOverwriteComponent(e){zb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const iN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},R0=new uo("app-compat","Firebase",iN);/**
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
 */function sN(i){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Er,setLogLevel:Gb,onLog:Hb,apps:null,SDK_VERSION:Gs,INTERNAL:{registerComponent:f,removeApp:n,useAsService:m,modularAPIs:nN}};t.default=t,Object.defineProperty(t,"apps",{get:c});function n(g){delete e[g]}function a(g){if(g=g||Os,!y0(e,g))throw R0.create("no-app",{appName:g});return e[g]}a.App=i;function l(g,y={}){const T=yy(g,y);if(y0(e,T.name))return e[T.name];const I=new i(T,t);return e[T.name]=I,I}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const y=g.name,T=y.replace("-compat","");if(Ms(g)&&g.type==="PUBLIC"){const I=(O=a())=>{if(typeof O[T]!="function")throw R0.create("invalid-app-argument",{appName:y});return O[T]()};g.serviceProps!==void 0&&Bf(I,g.serviceProps),t[T]=I,i.prototype[T]=function(...O){return this._getService.bind(this,y).apply(this,g.multipleInstances?O:[])}}return g.type==="PUBLIC"?t[T]:null}function m(g,y){return y==="serverAuth"?null:y}return t}/**
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
 */function Yb(){const i=sN(rN);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:Yb,extendNamespace:e,createSubscribe:kb,ErrorFactory:uo,deepExtend:Bf};function e(t){Bf(i,t)}return i}const aN=Yb();/**
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
 */const C0=new hm("@firebase/app-compat"),oN="@firebase/app-compat",lN="0.5.2";/**
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
 */function uN(i){Er(oN,lN,i)}/**
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
 */try{const i=hy();if(i.firebase!==void 0){C0.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&C0.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ei=aN;uN();var cN="firebase",hN="12.2.1";/**
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
 */ei.registerVersion(cN,hN,"app-compat");const vc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ll={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function dN(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function $b(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fN=dN,mN=$b,Wb=new uo("auth","Firebase",$b());/**
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
 */const qf=new hm("@firebase/auth");function pN(i,...e){qf.logLevel<=ke.WARN&&qf.warn(`Auth (${Gs}): ${i}`,...e)}function If(i,...e){qf.logLevel<=ke.ERROR&&qf.error(`Auth (${Gs}): ${i}`,...e)}/**
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
 */function hn(i,...e){throw Ty(i,...e)}function Ht(i,...e){return Ty(i,...e)}function Ey(i,e,t){const n={...mN(),[e]:t};return new uo("auth","Firebase",n).create(e,{appName:i.name})}function en(i){return Ey(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jl(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&hn(i,"argument-error"),Ey(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ty(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return Wb.create(i,...e)}function ne(i,e,...t){if(!i)throw Ty(e,...t)}function Qr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw If(e),new Error(e)}function Ir(i,e){i||Qr(e)}/**
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
 */function th(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function wy(){return D0()==="http:"||D0()==="https:"}function D0(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function gN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wy()||xb()||"connection"in navigator)?navigator.onLine:!0}function _N(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class wh{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=OD()||my()}get(){return gN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Iy(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xb{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EN=new wh(3e4,6e4);function bt(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function At(i,e,t,n,a={}){return Jb(i,a,async()=>{let l={},c={};n&&(e==="GET"?c=n:l={body:JSON.stringify(n)});const f=Xl({key:i.config.apiKey,...c}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...l};return MD()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Wl(i.emulatorConfig.host)&&(g.credentials="include"),Xb.fetch()(await Zb(i,i.config.apiHost,t,f),g)})}async function Jb(i,e,t){i._canInitEmulator=!1;const n={...yN,...e};try{const a=new wN(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Dc(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dc(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Dc(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Dc(i,"user-disabled",c);const y=n[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ey(i,y,g);hn(i,y)}}catch(a){if(a instanceof Sn)throw a;hn(i,"network-request-failed",{message:String(a)})}}async function Ui(i,e,t,n,a={}){const l=await At(i,e,t,n,a);return"mfaPendingCredential"in l&&hn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function Zb(i,e,t,n){const a=`${e}${t}?${n}`,l=i,c=l.config.emulator?Iy(i.config,a):`${i.config.apiScheme}://${a}`;return vN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function TN(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ht(this.auth,"network-request-failed")),EN.get())})}}function Dc(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=Ht(i,e,n);return a.customData._tokenResponse=t,a}/**
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
 */function N0(i){return i!==void 0&&i.getResponse!==void 0}function x0(i){return i!==void 0&&i.enterprise!==void 0}class eA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function IN(i){return(await At(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tA(i,e){return At(i,"GET","/v2/recaptchaConfig",bt(i,e))}/**
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
 */async function bN(i,e){return At(i,"POST","/v1/accounts:delete",e)}async function AN(i,e){return At(i,"POST","/v1/accounts:update",e)}async function Ff(i,e){return At(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lc(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SN(i,e=!1){const t=Ee(i),n=await t.getIdToken(e),a=dm(n);ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:n,authTime:Lc(a_(a.auth_time)),issuedAtTime:Lc(a_(a.iat)),expirationTime:Lc(a_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function a_(i){return Number(i)*1e3}function dm(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return If("JWT malformed, contained fewer than 3 sections"),null;try{const a=cy(t);return a?JSON.parse(a):(If("Failed to decode base64 JWT payload"),null)}catch(a){return If("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function P0(i){const e=dm(i);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Sn&&RN(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function RN({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class CN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class A_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lc(this.lastLoginAt),this.creationTime=Lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nh(i){var T;const e=i.auth,t=await i.getIdToken(),n=await ki(i,Ff(e,{idToken:t}));ne(n==null?void 0:n.users.length,e,"internal-error");const a=n.users[0];i._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?nA(a.providerUserInfo):[],c=NN(i.providerData,l),f=i.isAnonymous,m=!(i.email&&a.passwordHash)&&!(c!=null&&c.length),g=f?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new A_(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function DN(i){const e=Ee(i);await nh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NN(i,e){return[...i.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function nA(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function xN(i,e){const t=await Jb(i,{},async()=>{const n=Xl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Zb(i,a,"/v1/token",`key=${l}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:n};return i.emulatorConfig&&Wl(i.emulatorConfig.host)&&(m.credentials="include"),Xb.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PN(i,e){return At(i,"POST","/v2/accounts:revokeToken",bt(i,e))}/**
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
 */class Tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=P0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:a,expiresIn:l}=await xN(e,t);this.updateTokensAndExpiration(n,a,Number(l))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:a,expirationTime:l}=t,c=new Tl;return n&&(ne(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),a&&(ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tl,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
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
 */function vs(i,e){ne(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor({uid:e,auth:t,stsTokenManager:n,...a}){this.providerId="firebase",this.proactiveRefresh=new CN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new A_(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ki(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SN(this,e)}reload(){return DN(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await nh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await ki(this,bN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:O,providerData:G,stsTokenManager:W}=t;ne(T&&W,e,"internal-error");const Q=Tl.fromJSON(this.name,W);ne(typeof T=="string",e,"internal-error"),vs(n,e.name),vs(a,e.name),ne(typeof I=="boolean",e,"internal-error"),ne(typeof O=="boolean",e,"internal-error"),vs(l,e.name),vs(c,e.name),vs(f,e.name),vs(m,e.name),vs(g,e.name),vs(y,e.name);const de=new vr({uid:T,auth:e,email:a,emailVerified:I,displayName:n,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:Q,createdAt:g,lastLoginAt:y});return G&&Array.isArray(G)&&(de.providerData=G.map(he=>({...he}))),m&&(de._redirectEventId=m),de}static async _fromIdTokenResponse(e,t,n=!1){const a=new Tl;a.updateFromServerResponse(t);const l=new vr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await nh(l),l}static async _fromGetAccountInfoResponse(e,t,n){const a=t.users[0];ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?nA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Tl;f.updateFromIdToken(n);const m=new vr({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new A_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const V0=new Map;function Qn(i){Ir(i instanceof Function,"Expected a class definition");let e=V0.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,V0.set(i,e),e)}/**
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
 */class rA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rA.type="NONE";const Dl=rA;/**
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
 */function Ya(i,e,t){return`firebase:${i}:${e}:${t}`}class wl{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:a,name:l}=this.auth;this.fullUserKey=Ya(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ya("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ff(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new wl(Qn(Dl),e,n);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Qn(Dl);const c=Ya(n,e.config.apiKey,e.name);let f=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const I=await Ff(e,{idToken:y}).catch(()=>{});if(!I)break;T=await vr._fromGetAccountInfoResponse(e,I,y)}else T=vr._fromJSON(e,y);g!==l&&(f=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new wl(l,e,n):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new wl(l,e,n))}}/**
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
 */function O0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lA(e))return"Blackberry";if(uA(e))return"Webos";if(sA(e))return"Safari";if((e.includes("chrome/")||aA(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function iA(i=_t()){return/firefox\//i.test(i)}function sA(i=_t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aA(i=_t()){return/crios\//i.test(i)}function oA(i=_t()){return/iemobile/i.test(i)}function Ih(i=_t()){return/android/i.test(i)}function lA(i=_t()){return/blackberry/i.test(i)}function uA(i=_t()){return/webos/i.test(i)}function bh(i=_t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function VN(i=_t()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function ON(i=_t()){var e;return bh(i)&&!!((e=window.navigator)!=null&&e.standalone)}function kN(){return Pb()&&document.documentMode===10}function cA(i=_t()){return bh(i)||Ih(i)||uA(i)||lA(i)||/windows phone/i.test(i)||oA(i)}/**
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
 */function hA(i,e=[]){let t;switch(i){case"Browser":t=O0(_t());break;case"Worker":t=`${O0(_t())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gs}/${n}`}/**
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
 */class MN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});n.onAbort=t,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function LN(i,e={}){return At(i,"GET","/v2/passwordPolicy",bt(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const UN=6;class BN{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??UN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class zN{constructor(e,t,n,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k0(this),this.idTokenSubscription=new k0(this),this.beforeStateQueue=new MN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qn(t)),this._initializationPromise=this.queue(async()=>{var n,a,l;if(!this._deleted&&(this.persistenceManager=await wl.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ff(this,{idToken:e}),n=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(ft(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=n==null?void 0:n._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(n=m.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(c){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(en(this));const t=e?Ee(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LN(this),t=new BN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await PN(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await wl.create(this,[Qn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,n,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function yt(i){return Ee(i)}class k0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kb(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qN(i){Ah=i}function by(i){return Ah.loadJS(i)}function FN(){return Ah.recaptchaV2Script}function jN(){return Ah.recaptchaEnterpriseScript}function HN(){return Ah.gapiScript}function dA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GN=500,KN=6e4,pf=1e12;class QN{constructor(e){this.auth=e,this.counter=pf,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new WN(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||pf;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||pf;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||pf;return(n=this._widgets.get(t))==null||n.execute(),""}}class YN{constructor(){this.enterprise=new $N}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $N{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class WN{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ne(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=XN(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},KN)},GN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function XN(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<i;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const JN="recaptcha-enterprise",Uc="NO_RECAPTCHA";class fA{constructor(e){this.type=JN,this.auth=yt(e)}async verify(e="verify",t=!1){async function n(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{tA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new eA(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;x0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Uc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YN().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{n(this.auth).then(f=>{if(!t&&x0(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=jN();m.length!==0&&(m+=f),by(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Ec(i,e,t,n=!1,a=!1){const l=new fA(i);let c;if(a)c=Uc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return n?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ds(i,e,t,n,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if((l=i._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Ec(i,e,t,t==="getOobCode");return n(i,f)}else return n(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ec(i,e,t,t==="getOobCode");return n(i,m)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if((c=i._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await Ec(i,e,t);return n(i,f).catch(async m=>{var g;if(((g=i._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Ec(i,e,t,!1,!0);return n(i,y)}return Promise.reject(m)})}else{const f=await Ec(i,e,t,!1,!0);return n(i,f)}else return Promise.reject(a+" provider is not supported.")}async function ZN(i){const e=yt(i),t=await tA(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eA(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new fA(e).verify()}function ex(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tx(i,e,t){const n=yt(i);ne(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=mA(e),{host:c,port:f}=nx(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator){ne(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ne(Vs(g,n.config.emulator)&&Vs(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,Wl(c)?(Cb(`${l}//${c}${m}`),Db("Auth",!0)):a||rx()}function mA(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nx(i){const e=mA(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const l=a[1];return{host:l,port:M0(n.substr(l.length+1))}}else{const[l,c]=n.split(":");return{host:l,port:M0(c)}}}function M0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function rx(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Zl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qr("not implemented")}_getIdTokenResponse(e){return Qr("not implemented")}_linkToIdToken(e,t){return Qr("not implemented")}_getReauthenticationResolver(e){return Qr("not implemented")}}/**
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
 */async function pA(i,e){return At(i,"POST","/v1/accounts:resetPassword",bt(i,e))}async function ix(i,e){return At(i,"POST","/v1/accounts:update",e)}async function sx(i,e){return At(i,"POST","/v1/accounts:signUp",e)}async function ax(i,e){return At(i,"POST","/v1/accounts:update",bt(i,e))}/**
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
 */async function ox(i,e){return Ui(i,"POST","/v1/accounts:signInWithPassword",bt(i,e))}async function fm(i,e){return At(i,"POST","/v1/accounts:sendOobCode",bt(i,e))}async function lx(i,e){return fm(i,e)}async function ux(i,e){return fm(i,e)}async function cx(i,e){return fm(i,e)}async function hx(i,e){return fm(i,e)}/**
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
 */async function dx(i,e){return Ui(i,"POST","/v1/accounts:signInWithEmailLink",bt(i,e))}async function fx(i,e){return Ui(i,"POST","/v1/accounts:signInWithEmailLink",bt(i,e))}/**
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
 */class rh extends Zl{constructor(e,t,n,a=null){super("password",n),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new rh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new rh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,t,"signInWithPassword",ox,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dx(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,n,"signUpPassword",sx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return fx(e,{idToken:t,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vi(i,e){return Ui(i,"POST","/v1/accounts:signInWithIdp",bt(i,e))}/**
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
 */const mx="http://localhost";class ti extends Zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,...l}=t;if(!n||!a)return null;const c=new ti(n,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Vi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Vi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vi(e,t)}buildRequest(){const e={requestUri:mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xl(t)}return e}}/**
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
 */async function L0(i,e){return At(i,"POST","/v1/accounts:sendVerificationCode",bt(i,e))}async function px(i,e){return Ui(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,e))}async function gx(i,e){const t=await Ui(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,e));if(t.temporaryProof)throw Dc(i,"account-exists-with-different-credential",t);return t}const _x={USER_NOT_FOUND:"user-not-found"};async function yx(i,e){const t={...e,operation:"REAUTH"};return Ui(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,t),_x)}/**
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
 */class $a extends Zl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $a({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $a({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return px(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gx(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return yx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l}=e;return!n&&!t&&!a&&!l?null:new $a({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l})}}/**
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
 */function vx(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(i){const e=El(Cc(i)).link,t=e?El(Cc(e)).deep_link_id:null,n=El(Cc(i)).deep_link_id;return(n?El(Cc(n)).link:null)||n||t||e||i}class mm{constructor(e){const t=El(Cc(e)),n=t.apiKey??null,a=t.oobCode??null,l=vx(t.mode??null);ne(n&&a&&l,"argument-error"),this.apiKey=n,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ex(e);try{return new mm(t)}catch{return null}}}/**
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
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,t){return rh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mm.parseLink(t);return ne(n,"argument-error"),rh._fromEmailAndCode(e,n.code,n.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eu extends Bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Il extends eu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ne("providerId"in t&&"signInMethod"in t,"argument-error"),ti._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return ne(e.idToken||e.accessToken,"argument-error"),ti._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Il.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Il.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!n&&!a&&!t&&!l||!f)return null;try{return new Il(f)._credential({idToken:t,accessToken:n,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class jr extends eu{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Hr extends eu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ti._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Hr.credential(t,n)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
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
 */class Gr extends eu{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */const Tx="http://localhost";class Nl extends Zl{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Vi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Vi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,pendingToken:l}=t;return!n||!a||!l||n!==a?null:new Nl(n,l)}static _create(e,t){return new Nl(e,t)}buildRequest(){return{requestUri:Tx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const wx="saml.";class jf extends Bi{constructor(e){ne(e.startsWith(wx),"argument-error"),super(e)}static credentialFromResult(e){return jf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return jf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Nl.fromJSON(e);return ne(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Nl._create(n,t)}catch{return null}}}/**
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
 */class Kr extends eu{constructor(){super("twitter.com")}static credential(e,t){return ti._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Kr.credential(t,n)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */async function gA(i,e){return Ui(i,"POST","/v1/accounts:signUp",bt(i,e))}/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,a=!1){const l=await vr._fromIdTokenResponse(e,n,a),c=U0(n);return new hr({user:l,providerId:c,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const a=U0(n);return new hr({user:e,providerId:a,_tokenResponse:n,operationType:t})}}function U0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function Ix(i){var a;if(ft(i.app))return Promise.reject(en(i));const e=yt(i);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new hr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await gA(e,{returnSecureToken:!0}),n=await hr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class Hf extends Sn{constructor(e,t,n,a){super(t.code,t.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Hf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,a){return new Hf(e,t,n,a)}}function _A(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Hf._fromErrorAndOperation(i,l,e,n):l})}/**
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
 */function yA(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function bx(i,e){const t=Ee(i);await pm(!0,t,e);const{providerUserInfo:n}=await AN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=yA(n||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ay(i,e,t=!1){const n=await ki(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return hr._forOperation(i,"link",n)}async function pm(i,e,t){await nh(e);const n=yA(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";ne(n.has(t)===i,e.auth,a)}/**
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
 */async function vA(i,e,t=!1){const{auth:n}=i;if(ft(n.app))return Promise.reject(en(n));const a="reauthenticate";try{const l=await ki(i,_A(n,a,e,i),t);ne(l.idToken,n,"internal-error");const c=dm(l.idToken);ne(c,n,"internal-error");const{sub:f}=c;return ne(i.uid===f,n,"user-mismatch"),hr._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&hn(n,"user-mismatch"),l}}/**
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
 */async function EA(i,e,t=!1){if(ft(i.app))return Promise.reject(en(i));const n="signIn",a=await _A(i,n,e),l=await hr._fromIdTokenResponse(i,n,a);return t||await i._updateCurrentUser(l.user),l}async function gm(i,e){return EA(yt(i),e)}async function TA(i,e){const t=Ee(i);return await pm(!1,t,e.providerId),Ay(t,e)}async function wA(i,e){return vA(Ee(i),e)}/**
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
 */async function Ax(i,e){return Ui(i,"POST","/v1/accounts:signInWithCustomToken",bt(i,e))}/**
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
 */async function Sx(i,e){if(ft(i.app))return Promise.reject(en(i));const t=yt(i),n=await Ax(t,{token:e,returnSecureToken:!0}),a=await hr._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(a.user),a}/**
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
 */class Sh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Sy._fromServerResponse(e,t):"totpInfo"in t?Ry._fromServerResponse(e,t):hn(e,"internal-error")}}class Sy extends Sh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Sy(t)}}class Ry extends Sh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ry(t)}}/**
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
 */function _m(i,e,t){var n;ne(((n=t.url)==null?void 0:n.length)>0,i,"invalid-continue-uri"),ne(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),ne(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ne(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ne(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Cy(i){const e=yt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rx(i,e,t){const n=yt(i),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&_m(n,a,t),await Ds(n,a,"getOobCode",ux,"EMAIL_PASSWORD_PROVIDER")}async function Cx(i,e,t){await pA(Ee(i),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cy(i),n})}async function Dx(i,e){await ax(Ee(i),{oobCode:e})}async function IA(i,e){const t=Ee(i),n=await pA(t,{oobCode:e}),a=n.requestType;switch(ne(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ne(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ne(n.mfaInfo,t,"internal-error");default:ne(n.email,t,"internal-error")}let l=null;return n.mfaInfo&&(l=Sh._fromServerResponse(yt(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:l},operation:a}}async function Nx(i,e){const{data:t}=await IA(Ee(i),e);return t.email}async function xx(i,e,t){if(ft(i.app))return Promise.reject(en(i));const n=yt(i),c=await Ds(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gA,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Cy(i),m}),f=await hr._fromIdTokenResponse(n,"signIn",c);return await n._updateCurrentUser(f.user),f}function Px(i,e,t){return ft(i.app)?Promise.reject(en(i)):gm(Ee(i),Ks.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cy(i),n})}/**
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
 */async function Vx(i,e,t){const n=yt(i),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){ne(f.handleCodeInApp,n,"argument-error"),f&&_m(n,c,f)}l(a,t),await Ds(n,a,"getOobCode",cx,"EMAIL_PASSWORD_PROVIDER")}function Ox(i,e){const t=mm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function kx(i,e,t){if(ft(i.app))return Promise.reject(en(i));const n=Ee(i),a=Ks.credentialWithLink(e,t||th());return ne(a._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),gm(n,a)}/**
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
 */async function Mx(i,e){return At(i,"POST","/v1/accounts:createAuthUri",bt(i,e))}/**
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
 */async function Lx(i,e){const t=wy()?th():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:a}=await Mx(Ee(i),n);return a||[]}async function Ux(i,e){const t=Ee(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&_m(t.auth,a,e);const{email:l}=await lx(t.auth,a);l!==i.email&&await i.reload()}async function Bx(i,e,t){const n=Ee(i),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&_m(n.auth,l,t);const{email:c}=await hx(n.auth,l);c!==i.email&&await i.reload()}/**
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
 */async function zx(i,e){return At(i,"POST","/v1/accounts:update",e)}/**
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
 */async function qx(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(i),l={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await ki(n,zx(n.auth,l));n.displayName=c.displayName||null,n.photoURL=c.photoUrl||null;const f=n.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=n.displayName,f.photoURL=n.photoURL),await n._updateTokensIfNecessary(c)}function Fx(i,e){const t=Ee(i);return ft(t.auth.app)?Promise.reject(en(t.auth)):bA(t,e,null)}function jx(i,e){return bA(Ee(i),null,e)}async function bA(i,e,t){const{auth:n}=i,l={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await ki(i,ix(n,l));await i._updateTokensIfNecessary(c,!0)}/**
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
 */function Hx(i){var a,l;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},n=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const c=(l=(a=dm(i.idToken))==null?void 0:a.firebase)==null?void 0:l.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new bl(n,f)}}if(!e)return null;switch(e){case"facebook.com":return new Gx(n,t);case"github.com":return new Kx(n,t);case"google.com":return new Qx(n,t);case"twitter.com":return new Yx(n,t,i.screenName||null);case"custom":case"anonymous":return new bl(n,null);default:return new bl(n,e,t)}}class bl{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class AA extends bl{constructor(e,t,n,a){super(e,t,n),this.username=a}}class Gx extends bl{constructor(e,t){super(e,"facebook.com",t)}}class Kx extends AA{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Qx extends bl{constructor(e,t){super(e,"google.com",t)}}class Yx extends AA{constructor(e,t,n){super(e,"twitter.com",t,n)}}function $x(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Hx(t)}/**
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
 */class Ha{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Ha("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ha("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return Ha._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)!=null&&n.idToken)return Ha._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Dy{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=yt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Sh._fromServerResponse(n,f));ne(a.mfaPendingCredential,n,"internal-error");const c=Ha._fromMfaPendingCredential(a.mfaPendingCredential);return new Dy(c,l,async f=>{const m=await f._process(n,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g={...a,idToken:m.idToken,refreshToken:m.refreshToken};switch(t.operationType){case"signIn":const y=await hr._fromIdTokenResponse(n,t.operationType,g);return await n._updateCurrentUser(y.user),y;case"reauthenticate":return ne(t.user,n,"internal-error"),hr._forOperation(t.user,t.operationType,g);default:hn(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Wx(i,e){var a;const t=Ee(i),n=e;return ne(e.customData.operationType,t,"argument-error"),ne((a=n.customData._serverResponse)==null?void 0:a.mfaPendingCredential,t,"argument-error"),Dy._fromError(t,n)}/**
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
 */function B0(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:start",bt(i,e))}function Xx(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:finalize",bt(i,e))}function Jx(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:withdraw",bt(i,e))}class Ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>Sh._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Ny(e)}async getSession(){return Ha._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,a=await this.getSession(),l=await ki(this.user,n._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const a=await ki(this.user,Jx(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const o_=new WeakMap;function Zx(i){const e=Ee(i);return o_.has(e)||o_.set(e,Ny._fromUser(e)),o_.get(e)}const Gf="__sak";/**
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
 */class SA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gf,"1"),this.storage.removeItem(Gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eP=1e3,tP=10;class RA extends SA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),a=this.localCache[t];n!==a&&e(t,a,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const n=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(n);!t&&this.localCache[n]===c||this.notifyListeners(n,c)},l=this.storage.getItem(n);kN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,tP):a()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}RA.type="LOCAL";const xy=RA;/**
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
 */class CA extends SA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}CA.type="SESSION";const Xa=CA;/**
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
 */function nP(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ym{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const n=new ym(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await nP(f);t.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ym.receivers=[];/**
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
 */function Rh(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class rP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Rh("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},n);c={messageChannel:a,onMessage(T){const I=T;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Lt(){return window}function iP(i){Lt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Py(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function sP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aP(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function oP(){return Py()?self:null}/**
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
 */const DA="firebaseLocalStorageDb",lP=1,Kf="firebaseLocalStorage",NA="fbase_key";class Ch{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vm(i,e){return i.transaction([Kf],e?"readwrite":"readonly").objectStore(Kf)}function uP(){const i=indexedDB.deleteDatabase(DA);return new Ch(i).toPromise()}function S_(){const i=indexedDB.open(DA,lP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(Kf,{keyPath:NA})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(Kf)?e(n):(n.close(),await uP(),e(await S_()))})})}async function z0(i,e,t){const n=vm(i,!0).put({[NA]:e,value:t});return new Ch(n).toPromise()}async function cP(i,e){const t=vm(i,!1).get(e),n=await new Ch(t).toPromise();return n===void 0?null:n.value}function q0(i,e){const t=vm(i,!0).delete(e);return new Ch(t).toPromise()}const hP=800,dP=3;class xA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await S_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>dP)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ym._getInstance(oP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sP(),!this.activeServiceWorker)return;this.sender=new rP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await S_();return await z0(e,Gf,"1"),await q0(e,Gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>z0(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>cP(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>q0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=vm(a,!1).getAll();return new Ch(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xA.type="LOCAL";const ih=xA;/**
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
 */function F0(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:start",bt(i,e))}function fP(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:finalize",bt(i,e))}/**
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
 */const l_=dA("rcb"),mP=new wh(3e4,6e4);class pP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Lt().grecaptcha)!=null&&e.render)}load(e,t=""){return ne(gP(t),e,"argument-error"),this.shouldResolveImmediately(t)&&N0(Lt().grecaptcha)?Promise.resolve(Lt().grecaptcha):new Promise((n,a)=>{const l=Lt().setTimeout(()=>{a(Ht(e,"network-request-failed"))},mP.get());Lt()[l_]=()=>{Lt().clearTimeout(l),delete Lt()[l_];const f=Lt().grecaptcha;if(!f||!N0(f)){a(Ht(e,"internal-error"));return}const m=f.render;f.render=(g,y)=>{const T=m(g,y);return this.counter++,T},this.hostLanguage=t,n(f)};const c=`${FN()}?${Xl({onload:l_,render:"explicit",hl:t})}`;by(c).catch(()=>{clearTimeout(l),a(Ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Lt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gP(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class _P{async load(e){return new QN(e)}clearedOneInstance(){}}/**
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
 */const Bc="recaptcha",yP={theme:"light",type:"image"};let vP=class{constructor(e,t,n={...yP}){this.parameters=n,this.type=Bc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(e),this.isInvisible=this.parameters.size==="invisible",ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ne(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _P:new pP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ne(!this.parameters.sitekey,this.auth,"argument-error"),ne(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Lt()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){ne(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ne(wy()&&!Py(),this.auth,"internal-error"),await EP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await IN(this.auth);ne(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ne(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function EP(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Vy{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=$a._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function TP(i,e,t){if(ft(i.app))return Promise.reject(en(i));const n=yt(i),a=await Em(n,e,Ee(t));return new Vy(a,l=>gm(n,l))}async function wP(i,e,t){const n=Ee(i);await pm(!1,n,"phone");const a=await Em(n.auth,e,Ee(t));return new Vy(a,l=>TA(n,l))}async function IP(i,e,t){const n=Ee(i);if(ft(n.auth.app))return Promise.reject(en(n.auth));const a=await Em(n.auth,e,Ee(t));return new Vy(a,l=>wA(n,l))}async function Em(i,e,t){var n;if(!i._getRecaptchaConfig())try{await ZN(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){ne(l.type==="enroll",i,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ds(i,c,"mfaSmsEnrollment",async(y,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,y,"argument-error");const I=await u_(y,T,t);return B0(y,I)}return B0(y,T)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{ne(l.type==="signin",i,"internal-error");const c=((n=a.multiFactorHint)==null?void 0:n.uid)||a.multiFactorUid;ne(c,i,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ds(i,f,"mfaSmsSignIn",async(T,I)=>{if(I.phoneSignInInfo.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,T,"argument-error");const O=await u_(T,I,t);return F0(T,O)}return F0(T,I)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ds(i,l,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,g,"argument-error");const T=await u_(g,y,t);return L0(g,T)}return L0(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function bP(i,e){const t=Ee(i);if(ft(t.auth.app))return Promise.reject(en(t.auth));await Ay(t,e)}async function u_(i,e,t){ne(t.type===Bc,i,"argument-error");const n=await t.verify();ne(typeof n=="string",i,"argument-error");const a={...e};if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:n,captchaResponse:c,clientType:f,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:n}),a}/**
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
 */let Ja=class bf{constructor(e){this.providerId=bf.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,t){return Em(this.auth,e,Ee(t))}static credential(e,t){return $a._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bf.credentialFromTaggedObject(t)}static credentialFromError(e){return bf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$a._fromTokenResponse(t,n):null}};Ja.PROVIDER_ID="phone";Ja.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function co(i,e){return e?Qn(e):(ne(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Oy extends Zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AP(i){return EA(i.auth,new Oy(i),i.bypassAuthState)}function SP(i){const{auth:e,user:t}=i;return ne(t,e,"internal-error"),vA(t,new Oy(i),i.bypassAuthState)}async function RP(i){const{auth:e,user:t}=i;return ne(t,e,"internal-error"),Ay(t,new Oy(i),i.bypassAuthState)}/**
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
 */class PA{constructor(e,t,n,a,l=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:n,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AP;case"linkViaPopup":case"linkViaRedirect":return RP;case"reauthViaPopup":case"reauthViaRedirect":return SP;default:hn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CP=new wh(2e3,1e4);async function DP(i,e,t){if(ft(i.app))return Promise.reject(Ht(i,"operation-not-supported-in-this-environment"));const n=yt(i);Jl(i,e,Bi);const a=co(n,t);return new xi(n,"signInViaPopup",e,a).executeNotNull()}async function NP(i,e,t){const n=Ee(i);if(ft(n.auth.app))return Promise.reject(Ht(n.auth,"operation-not-supported-in-this-environment"));Jl(n.auth,e,Bi);const a=co(n.auth,t);return new xi(n.auth,"reauthViaPopup",e,a,n).executeNotNull()}async function xP(i,e,t){const n=Ee(i);Jl(n.auth,e,Bi);const a=co(n.auth,t);return new xi(n.auth,"linkViaPopup",e,a,n).executeNotNull()}class xi extends PA{constructor(e,t,n,a,l){super(e,t,a,l),this.provider=n,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CP.get())};e()}}xi.currentPopupAction=null;/**
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
 */const PP="pendingRedirect",zc=new Map;class VP extends PA{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const n=await OP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OP(i,e){const t=OA(e),n=VA(i);if(!await n._isAvailable())return!1;const a=await n._get(t)==="true";return await n._remove(t),a}async function ky(i,e){return VA(i)._set(OA(e),"true")}function kP(){zc.clear()}function My(i,e){zc.set(i._key(),e)}function VA(i){return Qn(i._redirectPersistence)}function OA(i){return Ya(PP,i.config.apiKey,i.name)}/**
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
 */function MP(i,e,t){return LP(i,e,t)}async function LP(i,e,t){if(ft(i.app))return Promise.reject(en(i));const n=yt(i);Jl(i,e,Bi),await n._initializationPromise;const a=co(n,t);return await ky(a,n),a._openRedirect(n,e,"signInViaRedirect")}function UP(i,e,t){return BP(i,e,t)}async function BP(i,e,t){const n=Ee(i);if(Jl(n.auth,e,Bi),ft(n.auth.app))return Promise.reject(en(n.auth));await n.auth._initializationPromise;const a=co(n.auth,t);await ky(a,n.auth);const l=await kA(n);return a._openRedirect(n.auth,e,"reauthViaRedirect",l)}function zP(i,e,t){return qP(i,e,t)}async function qP(i,e,t){const n=Ee(i);Jl(n.auth,e,Bi),await n.auth._initializationPromise;const a=co(n.auth,t);await pm(!1,n,e.providerId),await ky(a,n.auth);const l=await kA(n);return a._openRedirect(n.auth,e,"linkViaRedirect",l)}async function FP(i,e){return await yt(i)._initializationPromise,Tm(i,e,!1)}async function Tm(i,e,t=!1){if(ft(i.app))return Promise.reject(en(i));const n=yt(i),a=co(n,e),c=await new VP(n,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}async function kA(i){const e=Rh(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const jP=600*1e3;class MA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!LA(e)){const a=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ht(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jP&&this.cachedEventUids.clear(),this.cachedEventUids.has(j0(e))}saveEventToCache(e){this.cachedEventUids.add(j0(e)),this.lastProcessedEventTime=Date.now()}}function j0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function LA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LA(i);default:return!1}}/**
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
 */async function UA(i,e={}){return At(i,"GET","/v1/projects",e)}/**
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
 */const GP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KP=/^https?/;async function QP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await UA(i);for(const t of e)try{if(YP(t))return}catch{}hn(i,"unauthorized-domain")}function YP(i){const e=th(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===n}if(!KP.test(t))return!1;if(GP.test(i))return n===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $P=new wh(3e4,6e4);function H0(){const i=Lt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function WP(i){return new Promise((e,t)=>{var a,l,c;function n(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),t(Ht(i,"network-request-failed"))},timeout:$P.get()})}if((l=(a=Lt().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=Lt().gapi)!=null&&c.load)n();else{const f=dA("iframefcb");return Lt()[f]=()=>{gapi.load?n():t(Ht(i,"network-request-failed"))},by(`${HN()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Af=null,e})}let Af=null;function XP(i){return Af=Af||WP(i),Af}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const JP=new wh(5e3,15e3),ZP="__/auth/iframe",eV="emulator/auth/iframe",tV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rV(i){const e=i.config;ne(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Iy(e,eV):`https://${i.config.authDomain}/${ZP}`,n={apiKey:e.apiKey,appName:i.name,v:Gs},a=nV.get(i.config.apiHost);a&&(n.eid=a);const l=i._getFrameworks();return l.length&&(n.fw=l.join(",")),`${t}?${Xl(n).slice(1)}`}async function iV(i){const e=await XP(i),t=Lt().gapi;return ne(t,i,"internal-error"),e.open({where:document.body,url:rV(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tV,dontclear:!0},n=>new Promise(async(a,l)=>{await n.restyle({setHideOnLeave:!1});const c=Ht(i,"network-request-failed"),f=Lt().setTimeout(()=>{l(c)},JP.get());function m(){Lt().clearTimeout(f),a(n)}n.ping(m).then(m,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const sV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aV=500,oV=600,lV="_blank",uV="http://localhost";class G0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cV(i,e,t,n=aV,a=oV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let f="";const m={...sV,width:n.toString(),height:a.toString(),top:l,left:c},g=_t().toLowerCase();t&&(f=aA(g)?lV:t),iA(g)&&(e=e||uV,m.scrollbars="yes");const y=Object.entries(m).reduce((I,[O,G])=>`${I}${O}=${G},`,"");if(ON(g)&&f!=="_self")return hV(e||"",f),new G0(null);const T=window.open(e||"",f,y);ne(T,i,"popup-blocked");try{T.focus()}catch{}return new G0(T)}function hV(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const dV="__/auth/handler",fV="emulator/auth/handler",mV=encodeURIComponent("fac");async function R_(i,e,t,n,a,l){ne(i.config.authDomain,i,"auth-domain-config-required"),ne(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Gs,eventId:a};if(e instanceof Bi){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",qD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries(l||{}))c[y]=T}if(e instanceof eu){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),g=m?`#${mV}=${encodeURIComponent(m)}`:"";return`${pV(i)}?${Xl(f).slice(1)}${g}`}function pV({config:i}){return i.emulator?Iy(i,fV):`https://${i.authDomain}/${dV}`}/**
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
 */const c_="webStorageSupport";class gV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xa,this._completeRedirectFn=Tm,this._overrideRedirectResult=My}async _openPopup(e,t,n,a){var c;Ir((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await R_(e,t,n,th(),a);return cV(e,l,Rh())}async _openRedirect(e,t,n,a){await this._originValidation(e);const l=await R_(e,t,n,th(),a);return iP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ir(l,"If manager is not set, promise should be"),l)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await iV(e),n=new MA(e);return t.register("authEvent",a=>(ne(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(c_,{type:c_},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[c_];l!==void 0&&t(!!l),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cA()||sA()||bh()}}const _V=gV;class yV{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Qr("unexpected MultiFactorSessionType")}}}class Ly extends yV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ly(e)}_finalizeEnroll(e,t,n){return Xx(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class BA{constructor(){}static assertion(e){return Ly._fromCredential(e)}}BA.FACTOR_ID="phone";var K0="@firebase/auth",Q0="1.11.0";/**
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
 */class vV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TV(i){Ms(new Zr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=n.options;ne(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const m={apiKey:c,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hA(i)},g=new zN(n,a,l,m);return ex(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ms(new Zr("auth-internal",e=>{const t=yt(e.getProvider("auth").getImmediate());return(n=>new vV(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(K0,Q0,EV(i)),Er(K0,Q0,"esm2020")}/**
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
 */const wV=300;DD("authIdTokenMaxAge");function IV(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}qN({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=a=>{const l=Ht("internal-error");l.customData=a,t(l)},n.type="text/javascript",n.charset="UTF-8",IV().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TV("Browser");/**
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
 */function Za(){return window}/**
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
 */const bV=2e3;async function AV(i,e,t){const{BuildInfo:n}=Za();Ir(e.sessionId,"AuthEvent did not contain a session ID");const a=await NV(e.sessionId),l={};return bh()?l.ibi=n.packageName:Ih()?l.apn=n.packageName:hn(i,"operation-not-supported-in-this-environment"),n.displayName&&(l.appDisplayName=n.displayName),l.sessionId=a,R_(i,t,e.type,void 0,e.eventId??void 0,l)}async function SV(i){const{BuildInfo:e}=Za(),t={};bh()?t.iosBundleId=e.packageName:Ih()?t.androidPackageName=e.packageName:hn(i,"operation-not-supported-in-this-environment"),await UA(i,t)}function RV(i){const{cordova:e}=Za();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let a=null;n?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,VN()?"_blank":"_system","location=yes"),t(a)})})}async function CV(i,e,t){const{cordova:n}=Za();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function m(){var I;l();const T=(I=n.plugins.browsertab)==null?void 0:I.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(Ht(i,"redirect-cancelled-by-user"))},bV))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(m),document.addEventListener("resume",g,!1),Ih()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),f&&window.clearTimeout(f)}})}finally{a()}}function DV(i){var t,n,a,l,c,f,m,g,y,T;const e=Za();ne(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ne(typeof((n=e==null?void 0:e.BuildInfo)==null?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ne(typeof((c=(l=(a=e==null?void 0:e.cordova)==null?void 0:a.plugins)==null?void 0:l.browsertab)==null?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((g=(m=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:m.browsertab)==null?void 0:g.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((T=(y=e==null?void 0:e.cordova)==null?void 0:y.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NV(i){const e=xV(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function xV(i){if(Ir(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}/**
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
 */const PV=20;class VV extends MA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function OV(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:LV(),postBody:null,tenantId:i.tenantId,error:Ht(i,"no-auth-event")}}function kV(i,e){return C_()._set(D_(i),e)}async function Y0(i){const e=await C_()._get(D_(i));return e&&await C_()._remove(D_(i)),e}function MV(i,e){var n,a;const t=BV(e);if(t.includes("/__/auth/callback")){const l=Sf(t),c=l.firebaseError?UV(decodeURIComponent(l.firebaseError)):null,f=(a=(n=c==null?void 0:c.code)==null?void 0:n.split("auth/"))==null?void 0:a[1],m=f?Ht(f):null;return m?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function LV(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<PV;t++){const n=Math.floor(Math.random()*e.length);i.push(e.charAt(n))}return i.join("")}function C_(){return Qn(xy)}function D_(i){return Ya("authEvent",i.config.apiKey,i.name)}function UV(i){try{return JSON.parse(i)}catch{return null}}function BV(i){const e=Sf(i),t=e.link?decodeURIComponent(e.link):void 0,n=Sf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Sf(a).link||a||n||t||i}function Sf(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return El(t.join("?"))}/**
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
 */const zV=500;class qV{constructor(){this._redirectPersistence=Xa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Tm,this._overrideRedirectResult=My}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new VV(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){hn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,a){DV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),kP(),await this._originValidation(e);const c=OV(e,n,a);await kV(e,c);const f=await AV(e,c,t),m=await RV(f);return CV(e,l,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:a,BuildInfo:l}=Za(),c=setTimeout(async()=>{await Y0(e),t.onEvent($0())},zV),f=async y=>{clearTimeout(c);const T=await Y0(e);let I=null;T&&(y!=null&&y.url)&&(I=MV(T,y.url)),t.onEvent(I||$0())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,f);const m=a,g=`${l.packageName.toLowerCase()}://`;Za().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&f({url:y}),typeof m=="function")try{m(y)}catch(T){console.error(T)}}}}const FV=qV;function $0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ht("no-auth-event")}}/**
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
 */function jV(i,e){yt(i)._logFramework(e)}var HV="@firebase/auth-compat",GV="0.6.0";/**
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
 */const KV=1e3;function qc(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function QV(){return qc()==="http:"||qc()==="https:"}function zA(i=_t()){return!!((qc()==="file:"||qc()==="ionic:"||qc()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function YV(){return my()||cm()}function $V(){return Pb()&&(document==null?void 0:document.documentMode)===11}function WV(i=_t()){return/Edge\/\d+/.test(i)}function XV(i=_t()){return $V()||WV(i)}function qA(){try{const i=self.localStorage,e=Rh();if(i)return i.setItem(e,"1"),i.removeItem(e),XV()?Jc():!0}catch{return Uy()&&Jc()}return!1}function Uy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function h_(){return(QV()||xb()||zA())&&!YV()&&qA()&&!Uy()}function FA(){return zA()&&typeof document<"u"}async function JV(){return FA()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},KV);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function ZV(){return typeof window<"u"?window:null}/**
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
 */const Kn={LOCAL:"local",NONE:"none",SESSION:"session"},Tc=ne,jA="persistence";function eO(i,e){if(Tc(Object.values(Kn).includes(e),i,"invalid-persistence-type"),my()){Tc(e!==Kn.SESSION,i,"unsupported-persistence-type");return}if(cm()){Tc(e===Kn.NONE,i,"unsupported-persistence-type");return}if(Uy()){Tc(e===Kn.NONE||e===Kn.LOCAL&&Jc(),i,"unsupported-persistence-type");return}Tc(e===Kn.NONE||qA(),i,"unsupported-persistence-type")}async function N_(i){await i._initializationPromise;const e=HA(),t=Ya(jA,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function tO(i,e){const t=HA();if(!t)return[];const n=Ya(jA,i,e);switch(t.getItem(n)){case Kn.NONE:return[Dl];case Kn.LOCAL:return[ih,Xa];case Kn.SESSION:return[Xa];default:return[]}}function HA(){var i;try{return((i=ZV())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const nO=ne;class As{constructor(){this.browserResolver=Qn(_V),this.cordovaResolver=Qn(FV),this.underlyingResolver=null,this._redirectPersistence=Xa,this._completeRedirectFn=Tm,this._overrideRedirectResult=My}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,a)}async _openRedirect(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function GA(i){return i.unwrap()}function rO(i){return i.wrapped()}/**
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
 */function iO(i){return KA(i)}function sO(i,e){var n;const t=(n=e.customData)==null?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new aO(i,Wx(i,e))}else if(t){const a=KA(e),l=e;a&&(l.credential=a,l.tenantId=t.tenantId||void 0,l.email=t.email||void 0,l.phoneNumber=t.phoneNumber||void 0)}}function KA(i){const{_tokenResponse:e}=i instanceof Sn?i.customData:i;if(!e)return null;if(!(i instanceof Sn)&&"temporaryProof"in e&&"phoneNumber"in e)return Ja.credentialFromResult(i);const t=e.providerId;if(!t||t===vc.PASSWORD)return null;let n;switch(t){case vc.GOOGLE:n=Hr;break;case vc.FACEBOOK:n=jr;break;case vc.GITHUB:n=Gr;break;case vc.TWITTER:n=Kr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:m}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Nl._create(t,f):ti._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new Il(t).credential({idToken:a,accessToken:l,rawNonce:m})}return i instanceof Sn?n.credentialFromError(i):n.credentialFromResult(i)}function Pn(i,e){return e.catch(t=>{throw t instanceof Sn&&sO(i,t),t}).then(t=>{const n=t.operationType,a=t.user;return{operationType:n,credential:iO(t),additionalUserInfo:$x(t),user:wm.getOrCreate(a)}})}async function x_(i,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>Pn(i,t.confirm(n))}}class aO{constructor(e,t){this.resolver=t,this.auth=rO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pn(GA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let wm=class Nc{constructor(e){this._delegate=e,this.multiFactor=Zx(e)}static getOrCreate(e){return Nc.USER_MAP.has(e)||Nc.USER_MAP.set(e,new Nc(e)),Nc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pn(this.auth,TA(this._delegate,e))}async linkWithPhoneNumber(e,t){return x_(this.auth,wP(this._delegate,e,t))}async linkWithPopup(e){return Pn(this.auth,xP(this._delegate,e,As))}async linkWithRedirect(e){return await N_(yt(this.auth)),zP(this._delegate,e,As)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pn(this.auth,wA(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return x_(this.auth,IP(this._delegate,e,t))}reauthenticateWithPopup(e){return Pn(this.auth,NP(this._delegate,e,As))}async reauthenticateWithRedirect(e){return await N_(yt(this.auth)),UP(this._delegate,e,As)}sendEmailVerification(e){return Ux(this._delegate,e)}async unlink(e){return await bx(this._delegate,e),this}updateEmail(e){return Fx(this._delegate,e)}updatePassword(e){return jx(this._delegate,e)}updatePhoneNumber(e){return bP(this._delegate,e)}updateProfile(e){return qx(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Bx(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};wm.USER_MAP=new WeakMap;/**
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
 */const wc=ne;class P_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;wc(n,"invalid-api-key",{appName:e.name}),wc(n,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?As:void 0;this._delegate=t.initialize({options:{persistence:oO(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(fN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){tx(this._delegate,e,t)}applyActionCode(e){return Dx(this._delegate,e)}checkActionCode(e){return IA(this._delegate,e)}confirmPasswordReset(e,t){return Cx(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Pn(this._delegate,xx(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Lx(this._delegate,e)}isSignInWithEmailLink(e){return Ox(this._delegate,e)}async getRedirectResult(){wc(h_(),this._delegate,"operation-not-supported-in-this-environment");const e=await FP(this._delegate,As);return e?Pn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){jV(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:a,error:l,complete:c}=W0(e,t,n);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,n){const{next:a,error:l,complete:c}=W0(e,t,n);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return Vx(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Rx(this._delegate,e,t||void 0)}async setPersistence(e){eO(this._delegate,e);let t;switch(e){case Kn.SESSION:t=Xa;break;case Kn.LOCAL:t=await Qn(ih)._isAvailable()?ih:xy;break;case Kn.NONE:t=Dl;break;default:return hn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pn(this._delegate,Ix(this._delegate))}signInWithCredential(e){return Pn(this._delegate,gm(this._delegate,e))}signInWithCustomToken(e){return Pn(this._delegate,Sx(this._delegate,e))}signInWithEmailAndPassword(e,t){return Pn(this._delegate,Px(this._delegate,e,t))}signInWithEmailLink(e,t){return Pn(this._delegate,kx(this._delegate,e,t))}signInWithPhoneNumber(e,t){return x_(this._delegate,TP(this._delegate,e,t))}async signInWithPopup(e){return wc(h_(),this._delegate,"operation-not-supported-in-this-environment"),Pn(this._delegate,DP(this._delegate,e,As))}async signInWithRedirect(e){return wc(h_(),this._delegate,"operation-not-supported-in-this-environment"),await N_(this._delegate),MP(this._delegate,e,As)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Nx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}P_.Persistence=Kn;function W0(i,e,t){let n=i;typeof i!="function"&&({next:n,error:e,complete:t}=i);const a=n;return{next:c=>a(c&&wm.getOrCreate(c)),error:e,complete:t}}function oO(i,e){const t=tO(i,e);if(typeof self<"u"&&!t.includes(ih)&&t.push(ih),typeof window<"u")for(const n of[xy,Xa])t.includes(n)||t.push(n);return t.includes(Dl)||t.push(Dl),t}/**
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
 */class By{static credential(e,t){return Ja.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Ja(GA(ei.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}By.PHONE_SIGN_IN_METHOD=Ja.PHONE_SIGN_IN_METHOD;By.PROVIDER_ID=Ja.PROVIDER_ID;/**
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
 */const lO=ne;class uO{constructor(e,t,n=ei.app()){var a;lO((a=n.options)==null?void 0:a.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new vP(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const cO="auth-compat";function hO(i){i.INTERNAL.registerComponent(new Zr(cO,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new P_(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ll.EMAIL_SIGNIN,PASSWORD_RESET:ll.PASSWORD_RESET,RECOVER_EMAIL:ll.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ll.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ll.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ll.VERIFY_EMAIL}},EmailAuthProvider:Ks,FacebookAuthProvider:jr,GithubAuthProvider:Gr,GoogleAuthProvider:Hr,OAuthProvider:Il,SAMLAuthProvider:jf,PhoneAuthProvider:By,PhoneMultiFactorGenerator:BA,RecaptchaVerifier:uO,TwitterAuthProvider:Kr,Auth:P_,AuthCredential:Zl,Error:Sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(HV,GV)}hO(ei);var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,QA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(D,P,k){for(var C=Array(arguments.length-2),tn=2;tn<arguments.length;tn++)C[tn-2]=arguments[tn];return S.prototype[P].apply(D,C)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,S,A){A||(A=0);var D=Array(16);if(typeof S=="string")for(var P=0;16>P;++P)D[P]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(P=0;16>P;++P)D[P]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],P=N.g[2];var k=N.g[3],C=S+(k^A&(P^k))+D[0]+3614090360&4294967295;S=A+(C<<7&4294967295|C>>>25),C=k+(P^S&(A^P))+D[1]+3905402710&4294967295,k=S+(C<<12&4294967295|C>>>20),C=P+(A^k&(S^A))+D[2]+606105819&4294967295,P=k+(C<<17&4294967295|C>>>15),C=A+(S^P&(k^S))+D[3]+3250441966&4294967295,A=P+(C<<22&4294967295|C>>>10),C=S+(k^A&(P^k))+D[4]+4118548399&4294967295,S=A+(C<<7&4294967295|C>>>25),C=k+(P^S&(A^P))+D[5]+1200080426&4294967295,k=S+(C<<12&4294967295|C>>>20),C=P+(A^k&(S^A))+D[6]+2821735955&4294967295,P=k+(C<<17&4294967295|C>>>15),C=A+(S^P&(k^S))+D[7]+4249261313&4294967295,A=P+(C<<22&4294967295|C>>>10),C=S+(k^A&(P^k))+D[8]+1770035416&4294967295,S=A+(C<<7&4294967295|C>>>25),C=k+(P^S&(A^P))+D[9]+2336552879&4294967295,k=S+(C<<12&4294967295|C>>>20),C=P+(A^k&(S^A))+D[10]+4294925233&4294967295,P=k+(C<<17&4294967295|C>>>15),C=A+(S^P&(k^S))+D[11]+2304563134&4294967295,A=P+(C<<22&4294967295|C>>>10),C=S+(k^A&(P^k))+D[12]+1804603682&4294967295,S=A+(C<<7&4294967295|C>>>25),C=k+(P^S&(A^P))+D[13]+4254626195&4294967295,k=S+(C<<12&4294967295|C>>>20),C=P+(A^k&(S^A))+D[14]+2792965006&4294967295,P=k+(C<<17&4294967295|C>>>15),C=A+(S^P&(k^S))+D[15]+1236535329&4294967295,A=P+(C<<22&4294967295|C>>>10),C=S+(P^k&(A^P))+D[1]+4129170786&4294967295,S=A+(C<<5&4294967295|C>>>27),C=k+(A^P&(S^A))+D[6]+3225465664&4294967295,k=S+(C<<9&4294967295|C>>>23),C=P+(S^A&(k^S))+D[11]+643717713&4294967295,P=k+(C<<14&4294967295|C>>>18),C=A+(k^S&(P^k))+D[0]+3921069994&4294967295,A=P+(C<<20&4294967295|C>>>12),C=S+(P^k&(A^P))+D[5]+3593408605&4294967295,S=A+(C<<5&4294967295|C>>>27),C=k+(A^P&(S^A))+D[10]+38016083&4294967295,k=S+(C<<9&4294967295|C>>>23),C=P+(S^A&(k^S))+D[15]+3634488961&4294967295,P=k+(C<<14&4294967295|C>>>18),C=A+(k^S&(P^k))+D[4]+3889429448&4294967295,A=P+(C<<20&4294967295|C>>>12),C=S+(P^k&(A^P))+D[9]+568446438&4294967295,S=A+(C<<5&4294967295|C>>>27),C=k+(A^P&(S^A))+D[14]+3275163606&4294967295,k=S+(C<<9&4294967295|C>>>23),C=P+(S^A&(k^S))+D[3]+4107603335&4294967295,P=k+(C<<14&4294967295|C>>>18),C=A+(k^S&(P^k))+D[8]+1163531501&4294967295,A=P+(C<<20&4294967295|C>>>12),C=S+(P^k&(A^P))+D[13]+2850285829&4294967295,S=A+(C<<5&4294967295|C>>>27),C=k+(A^P&(S^A))+D[2]+4243563512&4294967295,k=S+(C<<9&4294967295|C>>>23),C=P+(S^A&(k^S))+D[7]+1735328473&4294967295,P=k+(C<<14&4294967295|C>>>18),C=A+(k^S&(P^k))+D[12]+2368359562&4294967295,A=P+(C<<20&4294967295|C>>>12),C=S+(A^P^k)+D[5]+4294588738&4294967295,S=A+(C<<4&4294967295|C>>>28),C=k+(S^A^P)+D[8]+2272392833&4294967295,k=S+(C<<11&4294967295|C>>>21),C=P+(k^S^A)+D[11]+1839030562&4294967295,P=k+(C<<16&4294967295|C>>>16),C=A+(P^k^S)+D[14]+4259657740&4294967295,A=P+(C<<23&4294967295|C>>>9),C=S+(A^P^k)+D[1]+2763975236&4294967295,S=A+(C<<4&4294967295|C>>>28),C=k+(S^A^P)+D[4]+1272893353&4294967295,k=S+(C<<11&4294967295|C>>>21),C=P+(k^S^A)+D[7]+4139469664&4294967295,P=k+(C<<16&4294967295|C>>>16),C=A+(P^k^S)+D[10]+3200236656&4294967295,A=P+(C<<23&4294967295|C>>>9),C=S+(A^P^k)+D[13]+681279174&4294967295,S=A+(C<<4&4294967295|C>>>28),C=k+(S^A^P)+D[0]+3936430074&4294967295,k=S+(C<<11&4294967295|C>>>21),C=P+(k^S^A)+D[3]+3572445317&4294967295,P=k+(C<<16&4294967295|C>>>16),C=A+(P^k^S)+D[6]+76029189&4294967295,A=P+(C<<23&4294967295|C>>>9),C=S+(A^P^k)+D[9]+3654602809&4294967295,S=A+(C<<4&4294967295|C>>>28),C=k+(S^A^P)+D[12]+3873151461&4294967295,k=S+(C<<11&4294967295|C>>>21),C=P+(k^S^A)+D[15]+530742520&4294967295,P=k+(C<<16&4294967295|C>>>16),C=A+(P^k^S)+D[2]+3299628645&4294967295,A=P+(C<<23&4294967295|C>>>9),C=S+(P^(A|~k))+D[0]+4096336452&4294967295,S=A+(C<<6&4294967295|C>>>26),C=k+(A^(S|~P))+D[7]+1126891415&4294967295,k=S+(C<<10&4294967295|C>>>22),C=P+(S^(k|~A))+D[14]+2878612391&4294967295,P=k+(C<<15&4294967295|C>>>17),C=A+(k^(P|~S))+D[5]+4237533241&4294967295,A=P+(C<<21&4294967295|C>>>11),C=S+(P^(A|~k))+D[12]+1700485571&4294967295,S=A+(C<<6&4294967295|C>>>26),C=k+(A^(S|~P))+D[3]+2399980690&4294967295,k=S+(C<<10&4294967295|C>>>22),C=P+(S^(k|~A))+D[10]+4293915773&4294967295,P=k+(C<<15&4294967295|C>>>17),C=A+(k^(P|~S))+D[1]+2240044497&4294967295,A=P+(C<<21&4294967295|C>>>11),C=S+(P^(A|~k))+D[8]+1873313359&4294967295,S=A+(C<<6&4294967295|C>>>26),C=k+(A^(S|~P))+D[15]+4264355552&4294967295,k=S+(C<<10&4294967295|C>>>22),C=P+(S^(k|~A))+D[6]+2734768916&4294967295,P=k+(C<<15&4294967295|C>>>17),C=A+(k^(P|~S))+D[13]+1309151649&4294967295,A=P+(C<<21&4294967295|C>>>11),C=S+(P^(A|~k))+D[4]+4149444226&4294967295,S=A+(C<<6&4294967295|C>>>26),C=k+(A^(S|~P))+D[11]+3174756917&4294967295,k=S+(C<<10&4294967295|C>>>22),C=P+(S^(k|~A))+D[2]+718787259&4294967295,P=k+(C<<15&4294967295|C>>>17),C=A+(k^(P|~S))+D[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+P&4294967295,N.g[3]=N.g[3]+k&4294967295}n.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,D=this.B,P=this.h,k=0;k<S;){if(P==0)for(;k<=A;)a(this,N,k),k+=this.blockSize;if(typeof N=="string"){for(;k<S;)if(D[P++]=N.charCodeAt(k++),P==this.blockSize){a(this,D),P=0;break}}else for(;k<S;)if(D[P++]=N[k++],P==this.blockSize){a(this,D),P=0;break}}this.h=P,this.o+=S},n.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var D=0;32>D;D+=8)N[A++]=this.g[S]>>>D&255;return N};function l(N,S){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function c(N,S){this.h=S;for(var A=[],D=!0,P=N.length-1;0<=P;P--){var k=N[P]|0;D&&k==S||(A[P]=k,D=!1)}this.g=A}var f={};function m(N){return-128<=N&&128>N?l(N,function(S){return new c([S|0],0>S?-1:0)}):new c([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return Q(g(-N));for(var S=[],A=1,D=0;N>=A;D++)S[D]=N/A|0,A*=4294967296;return new c(S,0)}function y(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return Q(y(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(S,8)),D=T,P=0;P<N.length;P+=8){var k=Math.min(8,N.length-P),C=parseInt(N.substring(P,P+k),S);8>k?(k=g(Math.pow(S,k)),D=D.j(k).add(g(C))):(D=D.j(A),D=D.add(g(C)))}return D}var T=m(0),I=m(1),O=m(16777216);i=c.prototype,i.m=function(){if(W(this))return-Q(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var D=this.i(A);N+=(0<=D?D:4294967296+D)*S,S*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(W(this))return"-"+Q(this).toString(N);for(var S=g(Math.pow(N,6)),A=this,D="";;){var P=Ie(A,S).g;A=de(A,P.j(S));var k=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=P,G(A))return k+D;for(;6>k.length;)k="0"+k;D=k+D}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function W(N){return N.h==-1}i.l=function(N){return N=de(this,N),W(N)?-1:G(N)?0:1};function Q(N){for(var S=N.g.length,A=[],D=0;D<S;D++)A[D]=~N.g[D];return new c(A,~N.h).add(I)}i.abs=function(){return W(this)?Q(this):this},i.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],D=0,P=0;P<=S;P++){var k=D+(this.i(P)&65535)+(N.i(P)&65535),C=(k>>>16)+(this.i(P)>>>16)+(N.i(P)>>>16);D=C>>>16,k&=65535,C&=65535,A[P]=C<<16|k}return new c(A,A[A.length-1]&-2147483648?-1:0)};function de(N,S){return N.add(Q(S))}i.j=function(N){if(G(this)||G(N))return T;if(W(this))return W(N)?Q(this).j(Q(N)):Q(Q(this).j(N));if(W(N))return Q(this.j(Q(N)));if(0>this.l(O)&&0>N.l(O))return g(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],D=0;D<2*S;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(var P=0;P<N.g.length;P++){var k=this.i(D)>>>16,C=this.i(D)&65535,tn=N.i(P)>>>16,vt=N.i(P)&65535;A[2*D+2*P]+=C*vt,he(A,2*D+2*P),A[2*D+2*P+1]+=k*vt,he(A,2*D+2*P+1),A[2*D+2*P+1]+=C*tn,he(A,2*D+2*P+1),A[2*D+2*P+2]+=k*tn,he(A,2*D+2*P+2)}for(D=0;D<S;D++)A[D]=A[2*D+1]<<16|A[2*D];for(D=S;D<2*S;D++)A[D]=0;return new c(A,0)};function he(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ae(N,S){this.g=N,this.h=S}function Ie(N,S){if(G(S))throw Error("division by zero");if(G(N))return new ae(T,T);if(W(N))return S=Ie(Q(N),S),new ae(Q(S.g),Q(S.h));if(W(S))return S=Ie(N,Q(S)),new ae(Q(S.g),S.h);if(30<N.g.length){if(W(N)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,D=S;0>=D.l(N);)A=me(A),D=me(D);var P=Te(A,1),k=Te(D,1);for(D=Te(D,2),A=Te(A,2);!G(D);){var C=k.add(D);0>=C.l(N)&&(P=P.add(A),k=C),D=Te(D,1),A=Te(A,1)}return S=de(N,P.j(S)),new ae(P,S)}for(P=T;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),k=g(A),C=k.j(S);W(C)||0<C.l(N);)A-=D,k=g(A),C=k.j(S);G(k)&&(k=I),P=P.add(k),N=de(N,C)}return new ae(P,N)}i.A=function(N){return Ie(this,N).h},i.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)&N.i(D);return new c(A,this.h&N.h)},i.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)|N.i(D);return new c(A,this.h|N.h)},i.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)^N.i(D);return new c(A,this.h^N.h)};function me(N){for(var S=N.g.length+1,A=[],D=0;D<S;D++)A[D]=N.i(D)<<1|N.i(D-1)>>>31;return new c(A,N.h)}function Te(N,S){var A=S>>5;S%=32;for(var D=N.g.length-A,P=[],k=0;k<D;k++)P[k]=0<S?N.i(k+A)>>>S|N.i(k+A+1)<<32-S:N.i(k+A);return new c(P,N.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,QA=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Ns=c}).apply(typeof X0<"u"?X0:typeof self<"u"?self:typeof window<"u"?window:{});var gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YA,xc,$A,Rf,V_,WA,XA,JA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof gf=="object"&&gf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var n=t(this);function a(h,_){if(_)e:{var v=n;h=h.split(".");for(var b=0;b<h.length-1;b++){var U=h[b];if(!(U in v))break e;v=v[U]}h=h[h.length-1],b=v[h],_=_(b),_!=b&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,b=!1,U={next:function(){if(!b&&v<h.length){var K=v++;return{value:_(K,h[K]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function I(h,_,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,I.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function G(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(b,U,K){for(var ie=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ie[Ue-2]=arguments[Ue];return _.prototype[U].apply(b,ie)}}function W(h){const _=h.length;if(0<_){const v=Array(_);for(let b=0;b<_;b++)v[b]=h[b];return v}return[]}function Q(h,_){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const U=h.length||0,K=b.length||0;h.length=U+K;for(let ie=0;ie<K;ie++)h[U+ie]=b[ie]}else h.push(b)}}class de{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function he(h){return/^[\s\xa0]*$/.test(h)}function ae(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function Ie(h){return Ie[" "](h),h}Ie[" "]=function(){};var me=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function Te(h,_,v){for(const b in h)_.call(v,h[b],b,h)}function N(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function S(h){const _={};for(const v in h)_[v]=h[v];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(h,_){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)h[v]=b[v];for(let K=0;K<A.length;K++)v=A[K],Object.prototype.hasOwnProperty.call(b,v)&&(h[v]=b[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function k(h){f.setTimeout(()=>{throw h},0)}function C(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class tn{constructor(){this.h=this.g=null}add(_,v){const b=vt.get();b.set(_,v),this.h?this.h.next=b:this.g=b,this.h=b}}var vt=new de(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ye=!1,Ge=new tn,x=()=>{const h=f.Promise.resolve(void 0);oe=()=>{h.then(ee)}};var ee=()=>{for(var h;h=C();){try{h.h.call(h.g)}catch(v){k(v)}var _=vt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ye=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h})();function xe(h,_){if(re.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(me){e:{try{Ie(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}G(xe,re);var Se={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),st=0;function br(h,_,v,b,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!b,this.ha=U,this.key=++st,this.da=this.fa=!1}function Hi(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ii(h){this.src=h,this.g={},this.h=0}ii.prototype.add=function(h,_,v,b,U){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var ie=Zs(h,_,b,U);return-1<ie?(_=h[ie],v||(_.fa=!1)):(_=new br(_,this.src,K,!!b,U),_.fa=v,h.push(_)),_};function Js(h,_){var v=_.type;if(v in h.g){var b=h.g[v],U=Array.prototype.indexOf.call(b,_,void 0),K;(K=0<=U)&&Array.prototype.splice.call(b,U,1),K&&(Hi(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Zs(h,_,v,b){for(var U=0;U<h.length;++U){var K=h[U];if(!K.da&&K.listener==_&&K.capture==!!v&&K.ha==b)return U}return-1}var ea="closure_lm_"+(1e6*Math.random()|0),uu={};function Hh(h,_,v,b,U){if(Array.isArray(_)){for(var K=0;K<_.length;K++)Hh(h,_[K],v,b,U);return null}return v=Gh(v),h&&h[Kt]?h.K(_,v,g(b)?!!b.capture:!1,U):Wn(h,_,v,!1,b,U)}function Wn(h,_,v,b,U,K){if(!_)throw Error("Invalid event type");var ie=g(U)?!!U.capture:!!U,Ue=_o(h);if(Ue||(h[ea]=Ue=new ii(h)),v=Ue.add(_,v,b,ie,K),v.proxy)return v;if(b=$m(),v.proxy=b,b.src=h,b.listener=v,h.addEventListener)ve||(U=ie),U===void 0&&(U=!1),h.addEventListener(_.toString(),b,U);else if(h.attachEvent)h.attachEvent(ta(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $m(){function h(v){return _.call(h.src,h.listener,v)}const _=Wm;return h}function cu(h,_,v,b,U){if(Array.isArray(_))for(var K=0;K<_.length;K++)cu(h,_[K],v,b,U);else b=g(b)?!!b.capture:!!b,v=Gh(v),h&&h[Kt]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],v=Zs(K,v,b,U),-1<v&&(Hi(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=_o(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Zs(_,v,b,U)),(v=-1<h?_[h]:null)&&go(v))}function go(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Kt])Js(_.i,h);else{var v=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(v,b,h.capture):_.detachEvent?_.detachEvent(ta(v),b):_.addListener&&_.removeListener&&_.removeListener(b),(v=_o(_))?(Js(v,h),v.h==0&&(v.src=null,_[ea]=null)):Hi(h)}}}function ta(h){return h in uu?uu[h]:uu[h]="on"+h}function Wm(h,_){if(h.da)h=!0;else{_=new xe(_,this);var v=h.listener,b=h.ha||h.src;h.fa&&go(h),h=v.call(b,_)}return h}function _o(h){return h=h[ea],h instanceof ii?h:null}var hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gh(h){return typeof h=="function"?h:(h[hu]||(h[hu]=function(_){return h.handleEvent(_)}),h[hu])}function Et(){ue.call(this),this.i=new ii(this),this.M=this,this.F=null}G(Et,ue),Et.prototype[Kt]=!0,Et.prototype.removeEventListener=function(h,_,v,b){cu(this,h,_,v,b)};function $e(h,_){var v,b=h.F;if(b)for(v=[];b;b=b.F)v.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new re(_,h);else if(_ instanceof re)_.target=_.target||h;else{var U=_;_=new re(b,h),D(_,U)}if(U=!0,v)for(var K=v.length-1;0<=K;K--){var ie=_.g=v[K];U=Mn(ie,b,!0,_)&&U}if(ie=_.g=h,U=Mn(ie,b,!0,_)&&U,U=Mn(ie,b,!1,_)&&U,v)for(K=0;K<v.length;K++)ie=_.g=v[K],U=Mn(ie,b,!1,_)&&U}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],b=0;b<v.length;b++)Hi(v[b]);delete h.g[_],h.h--}}this.F=null},Et.prototype.K=function(h,_,v,b){return this.i.add(String(h),_,!1,v,b)},Et.prototype.L=function(h,_,v,b){return this.i.add(String(h),_,!0,v,b)};function Mn(h,_,v,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,K=0;K<_.length;++K){var ie=_[K];if(ie&&!ie.da&&ie.capture==v){var Ue=ie.listener,zt=ie.ha||ie.src;ie.fa&&Js(h.i,ie),U=Ue.call(zt,b)!==!1&&U}}return U&&!b.defaultPrevented}function dn(h,_,v){if(typeof h=="function")v&&(h=I(h,v));else if(h&&typeof h.handleEvent=="function")h=I(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Kh(h){h.g=dn(()=>{h.g=null,h.i&&(h.i=!1,Kh(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Xm extends ue{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Kh(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(h){ue.call(this),this.h=h,this.g={}}G(na,ue);var ra=[];function ia(h){Te(h.g,function(_,v){this.g.hasOwnProperty(v)&&go(_)},h),h.g={}}na.prototype.N=function(){na.aa.N.call(this),ia(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=f.JSON.stringify,yo=f.JSON.parse,sa=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function du(){}du.prototype.h=null;function fu(h){return h.h||(h.h=h.i())}function mu(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ai(){re.call(this,"d")}G(ai,re);function pu(){re.call(this,"c")}G(pu,re);var Ar={},gu=null;function Gi(){return gu=gu||new Et}Ar.La="serverreachability";function vo(h){re.call(this,Ar.La,h)}G(vo,re);function Ki(h){const _=Gi();$e(_,new vo(_))}Ar.STAT_EVENT="statevent";function Qh(h,_){re.call(this,Ar.STAT_EVENT,h),this.stat=_}G(Qh,re);function ct(h){const _=Gi();$e(_,new Qh(_,h))}Ar.Ma="timingevent";function Bt(h,_){re.call(this,Ar.Ma,h),this.size=_}G(Bt,re);function Pt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function _u(h,_,v,b,U,K){h.info(function(){if(h.g)if(K)for(var ie="",Ue=K.split("&"),zt=0;zt<Ue.length;zt++){var Be=Ue[zt].split("=");if(1<Be.length){var Yt=Be[0];Be=Be[1];var qt=Yt.split("_");ie=2<=qt.length&&qt[1]=="type"?ie+(Yt+"="+Be+"&"):ie+(Yt+"=redacted&")}}else ie=null;else ie=K;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+v+`
`+ie})}function Jm(h,_,v,b,U,K,ie){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+v+`
`+K+" "+ie})}function Qi(h,_,v,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+aa(h,v)+(b?" "+b:"")})}function Yh(h,_){h.info(function(){return"TIMEOUT: "+_})}Xn.prototype.info=function(){};function aa(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var b=v[h];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return dr(v)}catch{return _}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function Rr(){}G(Rr,du),Rr.prototype.g=function(){return new XMLHttpRequest},Rr.prototype.i=function(){return{}},Sr=new Rr;function En(h,_,v,b){this.j=h,this.i=_,this.l=v,this.R=b||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var yu={},Eo={};function fr(h,_,v){h.L=1,h.v=ha(Ln(_)),h.m=v,h.P=!0,li(h,null)}function li(h,_){h.F=Date.now(),oa(h),h.A=Ln(h.v);var v=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),bu(v.i,"t",b),h.C=0,v=h.j.J,h.h=new St,h.g=cd(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Xm(I(h.Y,h,h.g),h.O)),_=h.U,v=h.g,b=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(ra[0]=U.toString()),U=ra);for(var K=0;K<U.length;K++){var ie=Hh(v,U[K],b||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ki(),_u(h.i,h.u,h.A,h.l,h.R,h.m)}En.prototype.ca=function(h){h=h.target;const _=this.M;_&&tr(h)==3?_.j():this.Y(h)},En.prototype.Y=function(h){try{if(h==this.g)e:{const qt=tr(this.g);var _=this.g.Ba();const gi=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||nd(this.g)))){this.J||qt!=4||_==7||(_==8||0>=gi?Ki(3):Ki(2)),$i(this);var v=this.g.Z();this.X=v;t:if($h(this)){var b=nd(this.g);h="";var U=b.length,K=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),Cr(this);var ie="";break t}this.h.i=new f.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(K&&_==U-1)});b.length=0,this.h.g+=h,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,Jm(this.i,this.u,this.A,this.l,this.R,qt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,zt=this.g;if((Ue=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Qi(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,v);else{this.o=!1,this.s=3,ct(12),nn(this),Cr(this);break e}}if(this.P){v=!0;let rn;for(;!this.J&&this.C<ie.length;)if(rn=Wh(this,ie),rn==Eo){qt==4&&(this.s=4,ct(14),v=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==yu){this.s=4,ct(15),Qi(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else Qi(this.i,this.l,rn,null),la(this,rn);if($h(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),v=!1),this.o=this.o&&v,!v)Qi(this.i,this.l,ie,"[Invalid Chunked Response]"),nn(this),Cr(this);else if(0<ie.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),va(Yt),Yt.M=!0,ct(11))}}else Qi(this.i,this.l,ie,null),la(this,ie);qt==4&&nn(this),this.o&&!this.J&&(qt==4?od(this.j,this):(this.o=!1,oa(this)))}else rp(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),nn(this),Cr(this)}}}catch{}finally{}};function $h(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Wh(h,_){var v=h.C,b=_.indexOf(`
`,v);return b==-1?Eo:(v=Number(_.substring(v,b)),isNaN(v)?yu:(b+=1,b+v>_.length?Eo:(_=_.slice(b,b+v),h.C=b+v,_)))}En.prototype.cancel=function(){this.J=!0,nn(this)};function oa(h){h.S=Date.now()+h.I,Xh(h,h.I)}function Xh(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Pt(I(h.ba,h),_)}function $i(h){h.B&&(f.clearTimeout(h.B),h.B=null)}En.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Yh(this.i,this.A),this.L!=2&&(Ki(),ct(17)),nn(this),this.s=2,Cr(this)):Xh(this,this.S-h)};function Cr(h){h.j.G==0||h.J||od(h.j,h)}function nn(h){$i(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,ia(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function la(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||vu(v.h,h))){if(!h.K&&vu(v.h,h)&&v.G==3){try{var b=v.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Po(v),No(v);else break e;Du(v),ct(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pt(I(v.Za,v),6e3));if(1>=wo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else pi(v,11)}else if((h.K||v.g==h)&&Po(v),!he(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Be=U[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Yt=Be[3];Yt!=null&&(v.la=Yt,v.j.info("VER="+v.la));const qt=Be[4];qt!=null&&(v.Aa=qt,v.j.info("SVER="+v.Aa));const gi=Be[5];gi!=null&&typeof gi=="number"&&0<gi&&(b=1.5*gi,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const rn=h.g;if(rn){const kr=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var K=b.h;K.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Io(K,K.h),K.h=null))}if(b.D){const xu=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(b.ya=xu,et(b.I,b.D,xu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var ie=h;if(b.qa=ud(b,b.J?b.ia:null,b.W),ie.K){Tn(b.h,ie);var Ue=ie,zt=b.L;zt&&(Ue.I=zt),Ue.B&&($i(Ue),oa(Ue)),b.g=ie}else sd(b);0<v.i.length&&xo(v)}else Be[0]!="stop"&&Be[0]!="close"||pi(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?pi(v,7):Ru(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}Ki(4)}catch{}}var Jh=class{constructor(h,_){this.g=h,this.map=_}};function ui(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function To(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function wo(h){return h.h?1:h.g?h.g.size:0}function vu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Io(h,_){h.g?h.g.add(_):h.h=_}function Tn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ui.prototype.cancel=function(){if(this.i=Eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Eu(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return W(h.i)}function Zm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,b=0;b<v;b++)_.push(h[b]);return _}_=[],v=0;for(b in h)_[v++]=h[b];return _}function bo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const b in h)_[v++]=b;return _}}}function Tu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=bo(h),b=Zm(h),U=b.length,K=0;K<U;K++)_.call(void 0,b[K],v&&v[K],h)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ep(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var b=h[v].indexOf("="),U=null;if(0<=b){var K=h[v].substring(0,b);U=h[v].substring(b+1)}else K=h[v];_(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,ca(this,h.j),this.o=h.o,this.g=h.g,Wi(this,h.s),this.l=h.l;var _=h.i,v=new hi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ci(this,v),this.m=h.m}else h&&(_=String(h).match(ua))?(this.h=!1,ca(this,_[1]||"",!0),this.o=Jn(_[2]||""),this.g=Jn(_[3]||"",!0),Wi(this,_[4]),this.l=Jn(_[5]||"",!0),ci(this,_[6]||"",!0),this.m=Jn(_[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(da(_,wu,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(da(_,wu,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(da(v,v.charAt(0)=="/"?tp:Iu,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",da(v,Ao)),h.join("")};function Ln(h){return new Vt(h)}function ca(h,_,v){h.j=v?Jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Wi(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ci(h,_,v){_ instanceof hi?(h.i=_,ed(h.i,h.h)):(v||(_=da(_,np)),h.i=new hi(_,h.h))}function et(h,_,v){h.i.set(_,v)}function ha(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function da(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Zh),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var wu=/[#\/\?@]/g,Iu=/[#\?:]/g,tp=/[#\?]/g,np=/[#\?@]/g,Ao=/#/g;function hi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&ep(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=hi.prototype,i.add=function(h,_){Zn(this),this.i=null,h=Dr(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function di(h,_){Zn(h),_=Dr(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function fi(h,_){return Zn(h),_=Dr(h,_),h.g.has(_)}i.forEach=function(h,_){Zn(this),this.g.forEach(function(v,b){v.forEach(function(U){h.call(_,U,b,this)},this)},this)},i.na=function(){Zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let b=0;b<_.length;b++){const U=h[b];for(let K=0;K<U.length;K++)v.push(_[b])}return v},i.V=function(h){Zn(this);let _=[];if(typeof h=="string")fi(this,h)&&(_=_.concat(this.g.get(Dr(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Zn(this),this.i=null,h=Dr(this,h),fi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bu(h,_,v){di(h,_),0<v.length&&(h.i=null,h.g.set(Dr(h,_),W(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var b=_[v];const K=encodeURIComponent(String(b)),ie=this.V(b);for(b=0;b<ie.length;b++){var U=K;ie[b]!==""&&(U+="="+encodeURIComponent(String(ie[b]))),h.push(U)}}return this.i=h.join("&")};function Dr(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function ed(h,_){_&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(di(this,b),bu(this,U,v))},h)),h.j=_}function fa(h,_){const v=new Xn;if(f.Image){const b=new Image;b.onload=O(er,v,"TestLoadImage: loaded",!0,_,b),b.onerror=O(er,v,"TestLoadImage: error",!1,_,b),b.onabort=O(er,v,"TestLoadImage: abort",!1,_,b),b.ontimeout=O(er,v,"TestLoadImage: timeout",!1,_,b),f.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function mr(h,_){const v=new Xn,b=new AbortController,U=setTimeout(()=>{b.abort(),er(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(K=>{clearTimeout(U),K.ok?er(v,"TestPingServer: ok",!0,_):er(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),er(v,"TestPingServer: error",!1,_)})}function er(h,_,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function ma(){this.g=new sa}function Nr(h,_,v){const b=v||"";try{Tu(h,function(U,K){let ie=U;g(U)&&(ie=dr(U)),_.push(b+K+"="+encodeURIComponent(ie))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function Xi(h){this.l=h.Ub||null,this.j=h.eb||!1}G(Xi,du),Xi.prototype.g=function(){return new mi(this.l,this.j)},Xi.prototype.i=(function(h){return function(){return h}})({});function mi(h,_){Et.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(mi,Et),i=mi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Pr(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Au(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Au(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?xr(this):Pr(this),this.readyState==3&&Au(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,xr(this))},i.Qa=function(h){this.g&&(this.response=h,xr(this))},i.ga=function(){this.g&&xr(this)};function xr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Pr(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Pr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Su(h){let _="";return Te(h,function(v,b){_+=b,_+=":",_+=v,_+=`\r
`}),_}function Qt(h,_,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Su(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):et(h,_,v))}function Qe(h){Et.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Qe,Et);var So=/^https?$/i,pa=["POST","PUT"];i=Qe.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?fu(this.o):fu(Sr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){td(this,K);return}if(h=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const K of b.keys())v.set(K,b.get(K));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),U=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(pa,_,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ie]of v)this.g.setRequestHeader(K,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ga(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){td(this,K)}};function td(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ro(h),Vr(h)}function Ro(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),Vr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vr(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Co(this):this.bb())},i.bb=function(){Co(this)};function Co(h){if(h.h&&typeof c<"u"&&(!h.v[1]||tr(h)!=4||h.Z()!=2)){if(h.u&&tr(h)==4)dn(h.Ea,0,h);else if($e(h,"readystatechange"),tr(h)==4){h.h=!1;try{const ie=h.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var b;if(b=ie===0){var U=String(h.D).match(ua)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),b=!So.test(U?U.toLowerCase():"")}v=b}if(v)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var K=2<tr(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",Ro(h)}}finally{Vr(h)}}}}function Vr(h,_){if(h.g){ga(h);const v=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||$e(h,"ready");try{v.onreadystatechange=b}catch{}}}function ga(h){h.I&&(f.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function tr(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),yo(_)}};function nd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function rp(h){const _={};h=(h.g&&2<=tr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(he(h[b]))continue;var v=P(h[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=_[U]||[];_[U]=K,K.push(v)}N(_,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _a(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Do(h){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_a("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_a("baseRetryDelayMs",5e3,h),this.cb=_a("retryDelaySeedMs",1e4,h),this.Wa=_a("forwardChannelMaxRetries",2,h),this.wa=_a("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ui(h&&h.concurrentRequestLimit),this.Da=new ma,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Do.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,b){ct(0),this.W=h,this.H=_||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=ud(this,null,this.W),xo(this)};function Ru(h){if(rd(h),h.G==3){var _=h.U++,v=Ln(h.I);if(et(v,"SID",h.K),et(v,"RID",_),et(v,"TYPE","terminate"),ya(h,v),_=new En(h,h.j,_),_.L=2,_.v=ha(Ln(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=cd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),oa(_)}ld(h)}function No(h){h.g&&(va(h),h.g.cancel(),h.g=null)}function rd(h){No(h),h.u&&(f.clearTimeout(h.u),h.u=null),Po(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function xo(h){if(!To(h.h)&&!h.s){h.s=!0;var _=h.Ga;oe||x(),ye||(oe(),ye=!0),Ge.add(_,h),h.B=0}}function ip(h,_){return wo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Pt(I(h.Ga,h,_),Nu(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new En(this,this.j,h);let K=this.o;if(this.S&&(K?(K=S(K),D(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=id(this,U,_),v=Ln(this.I),et(v,"RID",h),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),ya(this,v),K&&(this.O?_="headers="+encodeURIComponent(String(Su(K)))+"&"+_:this.m&&Qt(v,this.m,K)),Io(this.h,U),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",_),et(v,"SID","null"),U.T=!0,fr(U,v,null)):fr(U,v,_),this.G=2}}else this.G==3&&(h?Cu(this,h):this.i.length==0||To(this.h)||Cu(this))};function Cu(h,_){var v;_?v=_.l:v=h.U++;const b=Ln(h.I);et(b,"SID",h.K),et(b,"RID",v),et(b,"AID",h.T),ya(h,b),h.m&&h.o&&Qt(b,h.m,h.o),v=new En(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=id(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Io(h.h,v),fr(v,b,_)}function ya(h,_){h.H&&Te(h.H,function(v,b){et(_,b,v)}),h.l&&Tu({},function(v,b){et(_,b,v)})}function id(h,_,v){v=Math.min(h.i.length,v);var b=h.l?I(h.l.Na,h.l,h):null;e:{var U=h.i;let K=-1;for(;;){const ie=["count="+v];K==-1?0<v?(K=U[0].g,ie.push("ofs="+K)):K=0:ie.push("ofs="+K);let Ue=!0;for(let zt=0;zt<v;zt++){let Be=U[zt].g;const Yt=U[zt].map;if(Be-=K,0>Be)K=Math.max(0,U[zt].g-100),Ue=!1;else try{Nr(Yt,ie,"req"+Be+"_")}catch{b&&b(Yt)}}if(Ue){b=ie.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,b}function sd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;oe||x(),ye||(oe(),ye=!0),Ge.add(_,h),h.v=0}}function Du(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Pt(I(h.Fa,h),Nu(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,ad(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Pt(I(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),No(this),ad(this))};function va(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function ad(h){h.g=new En(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Ln(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),ya(h,_),h.m&&h.o&&Qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ha(Ln(_)),v.m=null,v.P=!0,li(v,h)}i.Za=function(){this.C!=null&&(this.C=null,No(this),Du(this),ct(19))};function Po(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function od(h,_){var v=null;if(h.g==_){Po(h),va(h),h.g=null;var b=2}else if(vu(h.h,_))v=_.D,Tn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;b=Gi(),$e(b,new Bt(b,v)),xo(h)}else sd(h);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&ip(h,_)||b==2&&Du(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:pi(h,5);break;case 4:pi(h,10);break;case 3:pi(h,6);break;default:pi(h,2)}}}function Nu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function pi(h,_){if(h.j.info("Error code "+_),_==2){var v=I(h.fb,h),b=h.Xa;const U=!b;b=new Vt(b||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ca(b,"https"),ha(b),U?fa(b.toString(),v):mr(b.toString(),v)}else ct(2);h.G=0,h.l&&h.l.sa(_),ld(h),rd(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function ld(h){if(h.G=0,h.ka=[],h.l){const _=Eu(h.h);(_.length!=0||h.i.length!=0)&&(Q(h.ka,_),Q(h.ka,h.i),h.h.i.length=0,W(h.i),h.i.length=0),h.l.ra()}}function ud(h,_,v){var b=v instanceof Vt?Ln(v):new Vt(v);if(b.g!="")_&&(b.g=_+"."+b.g),Wi(b,b.s);else{var U=f.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var K=new Vt(null);b&&ca(K,b),_&&(K.g=_),U&&Wi(K,U),v&&(K.l=v),b=K}return v=h.D,_=h.ya,v&&_&&et(b,v,_),et(b,"VER",h.la),ya(h,b),b}function cd(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Qe(new Xi({eb:v})):new Qe(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function hd(){}i=hd.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Vo(){}Vo.prototype.g=function(h,_){return new wn(h,_)};function wn(h,_){Et.call(this),this.g=new Do(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!he(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!he(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Or(this)}G(wn,Et),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){Ru(this.g)},wn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=dr(h),h=v);_.i.push(new Jh(_.Ya++,h)),_.G==3&&xo(_)},wn.prototype.N=function(){this.g.l=null,delete this.j,Ru(this.g),delete this.g,wn.aa.N.call(this)};function dd(h){ai.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}G(dd,ai);function fd(){pu.call(this),this.status=1}G(fd,pu);function Or(h){this.g=h}G(Or,hd),Or.prototype.ua=function(){$e(this.g,"a")},Or.prototype.ta=function(h){$e(this.g,new dd(h))},Or.prototype.sa=function(h){$e(this.g,new fd)},Or.prototype.ra=function(){$e(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,JA=function(){return new Vo},XA=function(){return Gi()},WA=Ar,V_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Rf=Yi,oi.COMPLETE="complete",$A=oi,mu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Et.prototype.listen=Et.prototype.K,xc=mu,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,YA=Qe}).apply(typeof gf<"u"?gf:typeof self<"u"?self:typeof window<"u"?window:{});const J0="@firebase/firestore",Z0="4.9.1";/**
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
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
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
 */let tu="12.2.0";/**
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
 */const Ls=new hm("@firebase/firestore");function pl(){return Ls.logLevel}function dO(i){Ls.setLogLevel(i)}function te(i,...e){if(Ls.logLevel<=ke.DEBUG){const t=e.map(zy);Ls.debug(`Firestore (${tu}): ${i}`,...t)}}function Dt(i,...e){if(Ls.logLevel<=ke.ERROR){const t=e.map(zy);Ls.error(`Firestore (${tu}): ${i}`,...t)}}function ni(i,...e){if(Ls.logLevel<=ke.WARN){const t=e.map(zy);Ls.warn(`Firestore (${tu}): ${i}`,...t)}}function zy(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function ce(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ZA(i,n,t)}function ZA(i,e,t){let n=`FIRESTORE (${tu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Dt(n),new Error(n)}function pe(i,e,t,n){let a="Unexpected state";typeof t=="string"?a=t:n=t,i||ZA(e,a,n)}function fO(i,e){i||ce(57014,e)}function le(i,e){return i}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class eS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Zt.UNAUTHENTICATED)))}shutdown(){}}class pO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gO{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let n=this.i;const a=m=>this.i!==n?(n=this.i,t(m)):Promise.resolve();let l=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new cn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},f=m=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new cn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(pe(typeof n.accessToken=="string",31837,{l:n}),new eS(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class _O{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yO{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new _O(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class eI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const n=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>n(l)))};const a=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new eI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eI(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function EO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class qy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const a=EO(40);for(let l=0;l<a.length;++l)n.length<20&&a[l]<t&&(n+=e.charAt(a[l]%62))}return n}}function Re(i,e){return i<e?-1:i>e?1:0}function O_(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const a=i.charAt(n),l=e.charAt(n);if(a!==l)return d_(a)===d_(l)?Re(a,l):d_(a)?1:-1}return Re(i.length,e.length)}const TO=55296,wO=57343;function d_(i){const e=i.charCodeAt(0);return e>=TO&&e<=wO}function xl(i,e,t){return i.length===e.length&&i.every(((n,a)=>t(n,e[a])))}function tS(i){return i+"\0"}/**
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
 */const tI="__name__";class qr{constructor(e,t,n){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ce(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qr?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let a=0;a<n;a++){const l=qr.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const n=qr.isNumericId(e),a=qr.isNumericId(t);return n&&!a?-1:!n&&a?1:n&&a?qr.extractNumericId(e).compare(qr.extractNumericId(t)):O_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ns.fromString(e.substring(4,e.length-2))}}class Me extends qr{construct(e,t,n){return new Me(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Z(H.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((a=>a.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const IO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends qr{construct(e,t,n){return new mt(e,t,n)}static isValidIdentifier(e){return IO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tI}static keyField(){return new mt([tI])}static fromServerFormat(e){const t=[];let n="",a=0;const l=()=>{if(n.length===0)throw new Z(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new Z(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Z(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(n+=f,a++):(l(),a++)}if(l(),c)throw new Z(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}/**
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
 */function Fy(i,e,t){if(!t)throw new Z(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function nS(i,e,t,n){if(e===!0&&n===!0)throw new Z(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function nI(i){if(!se.isDocumentKey(i))throw new Z(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function rI(i){if(se.isDocumentKey(i))throw new Z(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function rS(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Im(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ce(12329,{type:typeof i})}function He(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Z(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Im(i);throw new Z(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function iS(i,e){if(e<=0)throw new Z(H.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function Dh(i,e){if(!rS(i))throw new Z(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const a=e[n].typeString,l="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const c=i[n];if(a&&typeof c!==a){t=`JSON field '${n}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${n}' field to equal '${l.value}'`;break}}if(t)throw new Z(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const iI=-62135596800,sI=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*sI);return new Ye(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<iI)throw new Z(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sI}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dh(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:Ut("string",Ye._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Ye(0,0))}static max(){return new ge(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pl=-1;class Qf{constructor(e,t,n,a){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=a}}function k_(i){return i.fields.find((e=>e.kind===2))}function La(i){return i.fields.filter((e=>e.kind!==2))}Qf.UNKNOWN_ID=-1;class Cf{constructor(e,t){this.fieldPath=e,this.kind=t}}class sh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new sh(0,$n.min())}}function sS(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,a=ge.fromTimestamp(n===1e9?new Ye(t+1,0):new Ye(t,n));return new $n(a,se.empty(),e)}function aS(i){return new $n(i.readTime,i.key,Pl)}class $n{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new $n(ge.min(),se.empty(),Pl)}static max(){return new $n(ge.max(),se.empty(),Pl)}}function jy(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const oS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Qs(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==oS)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((n,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(n,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(n,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,n)=>{t(e)}))}static reject(e){return new B(((t,n)=>{n(e)}))}static waitFor(e){return new B(((t,n)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(m=>n(m)))})),c=!0,l===a&&t()}))}static or(e){let t=B.resolve(!1);for(const n of e)t=t.next((a=>a?B.resolve(a):n()));return t}static forEach(e,t){const n=[];return e.forEach(((a,l)=>{n.push(t.call(this,a,l))})),this.waitFor(n)}static mapArray(e,t){return new B(((n,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((y=>{c[g]=y,++f,f===l&&n(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new B(((n,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):n()};l()}))}}/**
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
 */const Gn="SimpleDb";class bm{static open(e,t,n,a){try{return new bm(t,e.transaction(a,n))}catch(l){throw new Fc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new cn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Fc(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const a=Hy(n.target.error);this.S.reject(new Fc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(te(Gn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new AO(t)}}class Wr{static delete(e){return te(Gn,"Removing database:",e),Ba(hy().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Jc())return!1;if(Wr.F())return!0;const e=_t(),t=Wr.M(e),n=0<t&&t<10,a=uS(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Wr.M(_t())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(te(Gn,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{n(new Fc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?n(new Z(H.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?n(new Z(H.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):n(new Fc(e,c))},a.onupgradeneeded=l=>{te(Gn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.N.k(c,a.transaction,l.oldVersion,this.version).next((()=>{te(Gn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.L(e);const f=bm.open(this.db,e,l?"readonly":"readwrite",n),m=a(f).next((g=>(f.C(),g))).catch((g=>(f.abort(g),B.reject(g)))).toPromise();return m.catch((()=>{})),await f.D,m}catch(f){const m=f,g=m.name!=="FirebaseError"&&c<3;if(te(Gn,"Transaction failed with error:",m.message,"Retrying:",g),this.close(),!g)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class bO{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Ba(this.U.delete())}}class Fc extends Z{constructor(e,t){super(H.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ys(i){return i.name==="IndexedDbTransactionError"}class AO{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(te(Gn,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(te(Gn,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ba(n)}add(e){return te(Gn,"ADD",this.store.name,e,e),Ba(this.store.add(e))}get(e){return Ba(this.store.get(e)).next((t=>(t===void 0&&(t=null),te(Gn,"GET",this.store.name,e,t),t)))}delete(e){return te(Gn,"DELETE",this.store.name,e),Ba(this.store.delete(e))}count(){return te(Gn,"COUNT",this.store.name),Ba(this.store.count())}J(e,t){const n=this.options(e,t),a=n.index?this.store.index(n.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(n.range);return new B(((c,f)=>{l.onerror=m=>{f(m.target.error)},l.onsuccess=m=>{c(m.target.result)}}))}{const l=this.cursor(n),c=[];return this.H(l,((f,m)=>{c.push(m)})).next((()=>c))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new B(((a,l)=>{n.onerror=c=>{l(c.target.error)},n.onsuccess=c=>{a(c.target.result)}}))}Z(e,t){te(Gn,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const a=this.cursor(n);return this.H(a,((l,c,f)=>f.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const a=this.cursor(n);return this.H(a,t)}te(e){const t=this.cursor({});return new B(((n,a)=>{t.onerror=l=>{const c=Hy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():n()})):n()}}))}H(e,t){const n=[];return new B(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const m=new bO(f),g=t(f.primaryKey,f.value,m);if(g instanceof B){const y=g.catch((T=>(m.done(),B.reject(T))));n.push(y)}m.isDone?a():m.G===null?f.continue():f.continue(m.G)}})).next((()=>B.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ba(i){return new B(((e,t)=>{i.onsuccess=n=>{const a=n.target.result;e(a)},i.onerror=n=>{const a=Hy(n.target.error);t(a)}}))}let aI=!1;function Hy(i){const e=Wr.M(_t());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(i.message.indexOf(t)>=0){const n=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aI||(aI=!0,setTimeout((()=>{throw n}),0)),n}}return i}const jc="IndexBackfiller";class SO{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){te(jc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();te(jc,`Documents written: ${t}`)}catch(t){Ys(t)?te(jc,"Ignoring IndexedDB error during index backfill: ",t):await Qs(t)}await this.re(6e4)}))}}class RO{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let a=t,l=!0;return B.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!n.has(c))return te(jc,`Processing collection: ${c}`),this.oe(e,c,a).next((f=>{a-=f,n.add(c)}));l=!1})))).next((()=>t-a))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,n).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this._e(a,l))).next((f=>(te(jc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((a,l)=>{const c=aS(l);jy(c,n)>0&&(n=c)})),new $n(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Vn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vn.ce=-1;/**
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
 */const xs=-1;function Nh(i){return i==null}function ah(i){return i===0&&1/i==-1/0}function cS(i){return typeof i=="number"&&Number.isInteger(i)&&!ah(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yf="";function yn(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=oI(e)),e=CO(i.get(t),e);return oI(e)}function CO(i,e){let t=e;const n=i.length;for(let a=0;a<n;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Yf:t+="";break;default:t+=l}}return t}function oI(i){return i+Yf+""}function Yr(i){const e=i.length;if(pe(e>=2,64408,{path:i}),e===2)return pe(i.charAt(0)===Yf&&i.charAt(1)==="",56145,{path:i}),Me.emptyPath();const t=e-2,n=[];let a="";for(let l=0;l<e;){const c=i.indexOf(Yf,l);switch((c<0||c>t)&&ce(50515,{path:i}),i.charAt(c+1)){case"":const f=i.substring(l,c);let m;a.length===0?m=f:(a+=f,m=a,a=""),n.push(m);break;case"":a+=i.substring(l,c),a+="\0";break;case"":a+=i.substring(l,c+1);break;default:ce(61167,{path:i})}l=c+2}return new Me(n)}/**
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
 */const Ua="remoteDocuments",xh="owner",ul="owner",oh="mutationQueues",DO="userId",yr="mutations",lI="batchId",Ga="userMutationsIndex",uI=["userId","batchId"];/**
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
 */function Df(i,e){return[i,yn(e)]}function hS(i,e,t){return[i,yn(e),t]}const NO={},Vl="documentMutations",$f="remoteDocumentsV14",xO=["prefixPath","collectionGroup","readTime","documentId"],Nf="documentKeyIndex",PO=["prefixPath","collectionGroup","documentId"],dS="collectionGroupIndex",VO=["collectionGroup","readTime","prefixPath","documentId"],lh="remoteDocumentGlobal",M_="remoteDocumentGlobalKey",Ol="targets",fS="queryTargetsIndex",OO=["canonicalId","targetId"],kl="targetDocuments",kO=["targetId","path"],Gy="documentTargetsIndex",MO=["path","targetId"],Wf="targetGlobalKey",Wa="targetGlobal",uh="collectionParents",LO=["collectionId","parent"],Ml="clientMetadata",UO="clientId",Am="bundles",BO="bundleId",Sm="namedQueries",zO="name",Ky="indexConfiguration",qO="indexId",L_="collectionGroupIndex",FO="collectionGroup",Hc="indexState",jO=["indexId","uid"],mS="sequenceNumberIndex",HO=["uid","sequenceNumber"],Gc="indexEntries",GO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pS="documentKeyIndex",KO=["indexId","uid","orderedDocumentKey"],Rm="documentOverlays",QO=["userId","collectionPath","documentId"],U_="collectionPathOverlayIndex",YO=["userId","collectionPath","largestBatchId"],gS="collectionGroupOverlayIndex",$O=["userId","collectionGroup","largestBatchId"],Qy="globals",WO="name",_S=[oh,yr,Vl,Ua,Ol,xh,Wa,kl,Ml,lh,uh,Am,Sm],XO=[..._S,Rm],yS=[oh,yr,Vl,$f,Ol,xh,Wa,kl,Ml,lh,uh,Am,Sm,Rm],vS=yS,Yy=[...vS,Ky,Hc,Gc],JO=Yy,ES=[...Yy,Qy],ZO=ES;/**
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
 */class B_ extends lS{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Gt(i,e){const t=le(i);return Wr.O(t.le,e)}/**
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
 */function cI(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function $s(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function TS(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||ln.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return t+n.left.size;a<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _f(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _f(this.root,e,this.comparator,!1)}getReverseIterator(){return new _f(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _f(this.root,e,this.comparator,!0)}}class _f{constructor(e,t,n,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?n(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,t,n,a,l){this.key=e,this.value=t,this.color=n??ln.RED,this.left=a??ln.EMPTY,this.right=l??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,a,l){return new ln(e??this.key,t??this.value,n??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let a=this;const l=n(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,n),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ln.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,n,a,l){return this}insert(e,t,n){return new ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hI(this.data.getIterator())}getIteratorFrom(e){return new hI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class hI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cl(i){return i.hasNext()?i.getNext():void 0}/**
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
 */class On{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new On([])}unionWith(e){let t=new Ze(mt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xl(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class wS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function ek(){return typeof atob<"u"}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new wS("Invalid base64 string: "+l):l}})(e);return new It(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new It(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const tk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(i){if(pe(!!i,39018),typeof i=="string"){let e=0;const t=tk.exec(i);if(pe(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:dt(i.seconds),nanos:dt(i.nanos)}}function dt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Li(i){return typeof i=="string"?It.fromBase64String(i):It.fromUint8Array(i)}/**
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
 */const IS="server_timestamp",bS="__type__",AS="__previous_value__",SS="__local_write_time__";function Cm(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[bS])==null?void 0:n.stringValue)===IS}function Dm(i){const e=i.mapValue.fields[AS];return Cm(e)?Dm(e):e}function ch(i){const e=Mi(i.mapValue.fields[SS].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class nk{constructor(e,t,n,a,l,c,f,m,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y}}const z_="(default)";class Us{constructor(e,t){this.projectId=e,this.database=t||z_}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database===z_}isEqual(e){return e instanceof Us&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $y="__type__",RS="__max__",Ss={mapValue:{fields:{__type__:{stringValue:RS}}}},Wy="__vector__",Ll="value",xf={nullValue:"NULL_VALUE"};function Bs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Cm(i)?4:CS(i)?9007199254740991:Nm(i)?10:11:ce(28295,{value:i})}function ri(i,e){if(i===e)return!0;const t=Bs(i);if(t!==Bs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ch(i).isEqual(ch(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Mi(a.timestampValue),f=Mi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,l){return Li(a.bytesValue).isEqual(Li(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,l){return dt(a.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(i,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return dt(a.integerValue)===dt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=dt(a.doubleValue),f=dt(l.doubleValue);return c===f?ah(c)===ah(f):isNaN(c)&&isNaN(f)}return!1})(i,e);case 9:return xl(i.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(cI(c)!==cI(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!ri(c[m],f[m])))return!1;return!0})(i,e);default:return ce(52216,{left:i})}}function hh(i,e){return(i.values||[]).find((t=>ri(t,e)))!==void 0}function zs(i,e){if(i===e)return 0;const t=Bs(i),n=Bs(e);if(t!==n)return Re(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=dt(l.integerValue||l.doubleValue),m=dt(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(i,e);case 3:return dI(i.timestampValue,e.timestampValue);case 4:return dI(ch(i),ch(e));case 5:return O_(i.stringValue,e.stringValue);case 6:return(function(l,c){const f=Li(l),m=Li(c);return f.compareTo(m)})(i.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const y=Re(f[g],m[g]);if(y!==0)return y}return Re(f.length,m.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Re(dt(l.latitude),dt(c.latitude));return f!==0?f:Re(dt(l.longitude),dt(c.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return fI(i.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,O,G,W;const f=l.fields||{},m=c.fields||{},g=(I=f[Ll])==null?void 0:I.arrayValue,y=(O=m[Ll])==null?void 0:O.arrayValue,T=Re(((G=g==null?void 0:g.values)==null?void 0:G.length)||0,((W=y==null?void 0:y.values)==null?void 0:W.length)||0);return T!==0?T:fI(g,y)})(i.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Ss.mapValue&&c===Ss.mapValue)return 0;if(l===Ss.mapValue)return 1;if(c===Ss.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const I=O_(m[T],y[T]);if(I!==0)return I;const O=zs(f[m[T]],g[y[T]]);if(O!==0)return O}return Re(m.length,y.length)})(i.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function dI(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=Mi(i),n=Mi(e),a=Re(t.seconds,n.seconds);return a!==0?a:Re(t.nanos,n.nanos)}function fI(i,e){const t=i.values||[],n=e.values||[];for(let a=0;a<t.length&&a<n.length;++a){const l=zs(t[a],n[a]);if(l)return l}return Re(t.length,n.length)}function Ul(i){return q_(i)}function q_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=Mi(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Li(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return se.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",a=!0;for(const l of t.values||[])a?a=!1:n+=",",n+=q_(l);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of n)l?l=!1:a+=",",a+=`${c}:${q_(t.fields[c])}`;return a+"}"})(i.mapValue):ce(61005,{value:i})}function Pf(i){switch(Bs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dm(i);return e?16+Pf(e):16;case 5:return 2*i.stringValue.length;case 6:return Li(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((a,l)=>a+Pf(l)),0)})(i.arrayValue);case 10:case 11:return(function(n){let a=0;return $s(n.fields,((l,c)=>{a+=l.length+Pf(c)})),a})(i.mapValue);default:throw ce(13486,{value:i})}}function eo(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function F_(i){return!!i&&"integerValue"in i}function dh(i){return!!i&&"arrayValue"in i}function mI(i){return!!i&&"nullValue"in i}function pI(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Vf(i){return!!i&&"mapValue"in i}function Nm(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[$y])==null?void 0:n.stringValue)===Wy}function Kc(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return $s(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kc(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kc(i.arrayValue.values[t]);return e}return{...i}}function CS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===RS}const DS={mapValue:{fields:{[$y]:{stringValue:Wy},[Ll]:{arrayValue:{}}}}};function rk(i){return"nullValue"in i?xf:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?eo(Us.empty(),se.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?Nm(i)?DS:{mapValue:{}}:ce(35942,{value:i})}function ik(i){return"nullValue"in i?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?eo(Us.empty(),se.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?DS:"mapValue"in i?Nm(i)?{mapValue:{}}:Ss:ce(61959,{value:i})}function gI(i,e){const t=zs(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?-1:!i.inclusive&&e.inclusive?1:0}function _I(i,e){const t=zs(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?1:!i.inclusive&&e.inclusive?-1:0}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Vf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kc(t)}setAll(e){let t=mt.emptyPath(),n={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,n,a),n={},a=[],t=f.popLast()}c?n[f.lastSegment()]=Kc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,n,a)}delete(e){const t=this.field(e.popLast());Vf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ri(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=t.mapValue.fields[e.get(n)];Vf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,n){$s(t,((a,l)=>e[a]=l));for(const a of n)delete e[a]}clone(){return new un(Kc(this.value))}}function NS(i){const e=[];return $s(i.fields,((t,n)=>{const a=new mt([t]);if(Vf(n)){const l=NS(n.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new On(e)}/**
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
 */class ut{constructor(e,t,n,a,l,c,f){this.key=e,this.documentType=t,this.version=n,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ut(e,0,ge.min(),ge.min(),ge.min(),un.empty(),0)}static newFoundDocument(e,t,n,a){return new ut(e,1,t,ge.min(),n,a,0)}static newNoDocument(e,t){return new ut(e,2,t,ge.min(),ge.min(),un.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,ge.min(),ge.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qs{constructor(e,t){this.position=e,this.inclusive=t}}function yI(i,e,t){let n=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?n=se.comparator(se.fromName(c.referenceValue),t.key):n=zs(c,t.data.field(l.field)),l.dir==="desc"&&(n*=-1),n!==0)break}return n}function vI(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ri(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class fh{constructor(e,t="asc"){this.field=e,this.dir=t}}function sk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class xS{}class Le extends xS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ak(e,t,n):t==="array-contains"?new uk(e,n):t==="in"?new LS(e,n):t==="not-in"?new ck(e,n):t==="array-contains-any"?new hk(e,n):new Le(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ok(e,n):new lk(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zs(t,this.value)):t!==null&&Bs(this.value)===Bs(t)&&this.matchesComparison(zs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends xS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Je(e,t)}matches(e){return Bl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bl(i){return i.op==="and"}function j_(i){return i.op==="or"}function Xy(i){return PS(i)&&Bl(i)}function PS(i){for(const e of i.filters)if(e instanceof Je)return!1;return!0}function H_(i){if(i instanceof Le)return i.field.canonicalString()+i.op.toString()+Ul(i.value);if(Xy(i))return i.filters.map((e=>H_(e))).join(",");{const e=i.filters.map((t=>H_(t))).join(",");return`${i.op}(${e})`}}function VS(i,e){return i instanceof Le?(function(n,a){return a instanceof Le&&n.op===a.op&&n.field.isEqual(a.field)&&ri(n.value,a.value)})(i,e):i instanceof Je?(function(n,a){return a instanceof Je&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce(((l,c,f)=>l&&VS(c,a.filters[f])),!0):!1})(i,e):void ce(19439)}function OS(i,e){const t=i.filters.concat(e);return Je.create(t,i.op)}function kS(i){return i instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ul(t.value)}`})(i):i instanceof Je?(function(t){return t.op.toString()+" {"+t.getFilters().map(kS).join(" ,")+"}"})(i):"Filter"}class ak extends Le{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class ok extends Le{constructor(e,t){super(e,"in",t),this.keys=MS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lk extends Le{constructor(e,t){super(e,"not-in",t),this.keys=MS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function MS(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>se.fromName(n.referenceValue)))}class uk extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dh(t)&&hh(t.arrayValue,this.value)}}class LS extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hh(this.value.arrayValue,t)}}class ck extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(hh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hh(this.value.arrayValue,t)}}class hk extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>hh(this.value.arrayValue,n)))}}/**
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
 */class dk{constructor(e,t=null,n=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function G_(i,e=null,t=[],n=[],a=null,l=null,c=null){return new dk(i,e,t,n,a,l,c)}function to(i){const e=le(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>H_(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(l){return l.field.canonicalString()+l.dir})(n))).join(","),Nh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Ul(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Ul(n))).join(",")),e.Te=t}return e.Te}function Ph(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!sk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!VS(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!vI(i.startAt,e.startAt)&&vI(i.endAt,e.endAt)}function Xf(i){return se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function Jf(i,e){return i.filters.filter((t=>t instanceof Le&&t.field.isEqual(e)))}function EI(i,e,t){let n=xf,a=!0;for(const l of Jf(i,e)){let c=xf,f=!0;switch(l.op){case"<":case"<=":c=rk(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=xf}gI({value:n,inclusive:a},{value:c,inclusive:f})<0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];gI({value:n,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}function TI(i,e,t){let n=Ss,a=!0;for(const l of Jf(i,e)){let c=Ss,f=!0;switch(l.op){case">=":case">":c=ik(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=Ss}_I({value:n,inclusive:a},{value:c,inclusive:f})>0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];_I({value:n,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}/**
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
 */class zi{constructor(e,t=null,n=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function US(i,e,t,n,a,l,c,f){return new zi(i,e,t,n,a,l,c,f)}function nu(i){return new zi(i)}function wI(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Jy(i){return i.collectionGroup!==null}function Al(i){const e=le(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Ze(mt.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new fh(l,n))})),t.has(mt.keyField().canonicalString())||e.Ie.push(new fh(mt.keyField(),n))}return e.Ie}function Rn(i){const e=le(i);return e.Ee||(e.Ee=fk(e,Al(i))),e.Ee}function fk(i,e){if(i.limitType==="F")return G_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new fh(a.field,l)}));const t=i.endAt?new qs(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new qs(i.startAt.position,i.startAt.inclusive):null;return G_(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function K_(i,e){const t=i.filters.concat([e]);return new zi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Zf(i,e,t){return new zi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Vh(i,e){return Ph(Rn(i),Rn(e))&&i.limitType===e.limitType}function BS(i){return`${to(Rn(i))}|lt:${i.limitType}`}function gl(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((a=>kS(a))).join(", ")}]`),Nh(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((a=>Ul(a))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((a=>Ul(a))).join(",")),`Target(${n})`})(Rn(i))}; limitType=${i.limitType})`}function Oh(i,e){return e.isFoundDocument()&&(function(n,a){const l=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(l):se.isDocumentKey(n.path)?n.path.isEqual(l):n.path.isImmediateParentOf(l)})(i,e)&&(function(n,a){for(const l of Al(n))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(n,a){for(const l of n.filters)if(!l.matches(a))return!1;return!0})(i,e)&&(function(n,a){return!(n.startAt&&!(function(c,f,m){const g=yI(c,f,m);return c.inclusive?g<=0:g<0})(n.startAt,Al(n),a)||n.endAt&&!(function(c,f,m){const g=yI(c,f,m);return c.inclusive?g>=0:g>0})(n.endAt,Al(n),a))})(i,e)}function zS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function qS(i){return(e,t)=>{let n=!1;for(const a of Al(i)){const l=mk(a,e,t);if(l!==0)return l;n=n||a.field.isKeyField()}return 0}}function mk(i,e,t){const n=i.field.isKeyField()?se.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?zs(m,g):ce(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return ce(19790,{direction:i.dir})}}/**
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
 */class qi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[a,l]of n)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[t]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,n)=>{for(const[a,l]of n)e(a,l)}))}isEmpty(){return TS(this.inner)}size(){return this.innerSize}}/**
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
 */const pk=new lt(se.comparator);function kn(){return pk}const FS=new lt(se.comparator);function Pc(...i){let e=FS;for(const t of i)e=e.insert(t.key,t);return e}function jS(i){let e=FS;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $r(){return Qc()}function HS(){return Qc()}function Qc(){return new qi((i=>i.toString()),((i,e)=>i.isEqual(e)))}const gk=new lt(se.comparator),_k=new Ze(se.comparator);function Ce(...i){let e=_k;for(const t of i)e=e.add(t);return e}const yk=new Ze(Re);function Zy(){return yk}/**
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
 */function ev(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(e)?"-0":e}}function GS(i){return{integerValue:""+i}}function KS(i,e){return cS(e)?GS(e):ev(i,e)}/**
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
 */class xm{constructor(){this._=void 0}}function vk(i,e,t){return i instanceof zl?(function(a,l){const c={fields:{[bS]:{stringValue:IS},[SS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Cm(l)&&(l=Dm(l)),l&&(c.fields[AS]=l),{mapValue:c}})(t,e):i instanceof no?YS(i,e):i instanceof ro?$S(i,e):(function(a,l){const c=QS(a,l),f=II(c)+II(a.Ae);return F_(c)&&F_(a.Ae)?GS(f):ev(a.serializer,f)})(i,e)}function Ek(i,e,t){return i instanceof no?YS(i,e):i instanceof ro?$S(i,e):t}function QS(i,e){return i instanceof ql?(function(n){return F_(n)||(function(l){return!!l&&"doubleValue"in l})(n)})(e)?e:{integerValue:0}:null}class zl extends xm{}class no extends xm{constructor(e){super(),this.elements=e}}function YS(i,e){const t=WS(e);for(const n of i.elements)t.some((a=>ri(a,n)))||t.push(n);return{arrayValue:{values:t}}}class ro extends xm{constructor(e){super(),this.elements=e}}function $S(i,e){let t=WS(e);for(const n of i.elements)t=t.filter((a=>!ri(a,n)));return{arrayValue:{values:t}}}class ql extends xm{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function II(i){return dt(i.integerValue||i.doubleValue)}function WS(i){return dh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class kh{constructor(e,t){this.field=e,this.transform=t}}function Tk(i,e){return i.field.isEqual(e.field)&&(function(n,a){return n instanceof no&&a instanceof no||n instanceof ro&&a instanceof ro?xl(n.elements,a.elements,ri):n instanceof ql&&a instanceof ql?ri(n.Ae,a.Ae):n instanceof zl&&a instanceof zl})(i.transform,e.transform)}class wk{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Of(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Pm{}function XS(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new iu(i.key,pt.none()):new ru(i.key,i.data,pt.none());{const t=i.data,n=un.empty();let a=new Ze(mt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?n.delete(l):n.set(l,c),a=a.add(l)}return new Fi(i.key,n,new On(a.toArray()),pt.none())}}function Ik(i,e,t){i instanceof ru?(function(a,l,c){const f=a.value.clone(),m=AI(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(i,e,t):i instanceof Fi?(function(a,l,c){if(!Of(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=AI(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(JS(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(i,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Yc(i,e,t,n){return i instanceof ru?(function(l,c,f,m){if(!Of(l.precondition,c))return f;const g=l.value.clone(),y=SI(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(i,e,t,n):i instanceof Fi?(function(l,c,f,m){if(!Of(l.precondition,c))return f;const g=SI(l.fieldTransforms,m,c),y=c.data;return y.setAll(JS(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(i,e,t,n):(function(l,c,f){return Of(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(i,e,t)}function bk(i,e){let t=null;for(const n of i.fieldTransforms){const a=e.data.field(n.field),l=QS(n.transform,a||null);l!=null&&(t===null&&(t=un.empty()),t.set(n.field,l))}return t||null}function bI(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&xl(n,a,((l,c)=>Tk(l,c)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ru extends Pm{constructor(e,t,n,a=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Fi extends Pm{constructor(e,t,n,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function JS(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function AI(i,e,t){const n=new Map;pe(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,f=e.data.field(l.field);n.set(l.field,Ek(c,f,t[a]))}return n}function SI(i,e,t){const n=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);n.set(a.field,vk(l,c,e))}return n}class iu extends Pm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tv extends Pm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nv{constructor(e,t,n,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Ik(l,e,n[a])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Yc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Yc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=HS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=XS(c,f);m!==null&&n.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ge.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&xl(this.mutations,e.mutations,((t,n)=>bI(t,n)))&&xl(this.baseMutations,e.baseMutations,((t,n)=>bI(t,n)))}}class rv{constructor(e,t,n,a){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=a}static from(e,t,n){pe(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let a=(function(){return gk})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,n[c].version);return new rv(e,t,n,a)}}/**
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
 */class iv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ak{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Mt,qe;function ZS(i){switch(i){case H.OK:return ce(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ce(15467,{code:i})}}function eR(i){if(i===void 0)return Dt("GRPC error has no .code"),H.UNKNOWN;switch(i){case Mt.OK:return H.OK;case Mt.CANCELLED:return H.CANCELLED;case Mt.UNKNOWN:return H.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return H.INTERNAL;case Mt.UNAVAILABLE:return H.UNAVAILABLE;case Mt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Mt.NOT_FOUND:return H.NOT_FOUND;case Mt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Mt.ABORTED:return H.ABORTED;case Mt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Mt.DATA_LOSS:return H.DATA_LOSS;default:return ce(39323,{code:i})}}(qe=Mt||(Mt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function tR(){return new TextEncoder}/**
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
 */const Sk=new Ns([4294967295,4294967295],0);function RI(i){const e=tR().encode(i),t=new QA;return t.update(e),new Uint8Array(t.digest())}function CI(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ns([t,n],0),new Ns([a,l],0)]}class sv{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Vc(`Invalid padding: ${t}`);if(n<0)throw new Vc(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Vc(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Vc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ns.fromNumber(this.ge)}ye(e,t,n){let a=e.add(t.multiply(Ns.fromNumber(n)));return a.compare(Sk)===1&&(a=new Ns([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=RI(e),[n,a]=CI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);if(!this.we(c))return!1}return!0}static create(e,t,n){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new sv(l,a,t);return n.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=RI(e),[n,a]=CI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Vc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mh{constructor(e,t,n,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const a=new Map;return a.set(e,Lh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Mh(ge.min(),a,new lt(Re),kn(),Ce())}}class Lh{constructor(e,t,n,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Lh(n,t,Ce(),Ce(),Ce())}}/**
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
 */class kf{constructor(e,t,n,a){this.be=e,this.removedTargetIds=t,this.key=n,this.De=a}}class nR{constructor(e,t){this.targetId=e,this.Ce=t}}class rR{constructor(e,t,n=It.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=a}}class DI{constructor(){this.ve=0,this.Fe=NI(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),n=Ce();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:n=n.add(a);break;default:ce(38017,{changeType:l})}})),new Lh(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=NI()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=yf(),this.He=yf(),this.Ye=new lt(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,n=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Xf(l))if(n===0){const c=new se(l.path);this.et(t,c,ut.newNoDocument(c,ge.min()))}else pe(n===1,20013,{expectedCount:n});else{const c=this._t(t);if(c!==n){const f=this.ut(e),m=f?this.ct(f,e,c):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Li(n).toUint8Array()}catch(m){if(m instanceof wS)return ni("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new sv(c,a,l)}catch(m){return ni(m instanceof Vc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let a=0;return n.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&Xf(f.target)){const m=new se(f.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,ut.newNoDocument(m,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let n=Ce();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(n=n.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Mh(e,t,this.Ye,this.je,n);return this.je=kn(),this.Je=yf(),this.He=yf(),this.Ye=new lt(Re),a}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new DI,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new DI),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function yf(){return new lt(se.comparator)}function NI(){return new lt(se.comparator)}const Ck={asc:"ASCENDING",desc:"DESCENDING"},Dk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class xk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Q_(i,e){return i.useProto3Json||Nh(e)?e:{value:e}}function Fl(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iR(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Pk(i,e){return Fl(i,e.toTimestamp())}function Nt(i){return pe(!!i,49232),ge.fromTimestamp((function(t){const n=Mi(t);return new Ye(n.seconds,n.nanos)})(i))}function av(i,e){return Y_(i,e).canonicalString()}function Y_(i,e){const t=(function(a){return new Me(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function sR(i){const e=Me.fromString(i);return pe(pR(e),10190,{key:e.toString()}),e}function mh(i,e){return av(i.databaseId,e.path)}function Xr(i,e){const t=sR(e);if(t.get(1)!==i.databaseId.projectId)throw new Z(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Z(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new se(lR(t))}function aR(i,e){return av(i.databaseId,e)}function oR(i){const e=sR(i);return e.length===4?Me.emptyPath():lR(e)}function $_(i){return new Me(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function lR(i){return pe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function xI(i,e,t){return{name:mh(i,e),fields:t.value.mapValue.fields}}function uR(i,e,t){const n=Xr(i,e.name),a=Nt(e.updateTime),l=e.createTime?Nt(e.createTime):ge.min(),c=new un({mapValue:{fields:e.fields}}),f=ut.newFoundDocument(n,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function Vk(i,e){return"found"in e?(function(n,a){pe(!!a.found,43571),a.found.name,a.found.updateTime;const l=Xr(n,a.found.name),c=Nt(a.found.updateTime),f=a.found.createTime?Nt(a.found.createTime):ge.min(),m=new un({mapValue:{fields:a.found.fields}});return ut.newFoundDocument(l,c,f,m)})(i,e):"missing"in e?(function(n,a){pe(!!a.missing,3894),pe(!!a.readTime,22933);const l=Xr(n,a.missing),c=Nt(a.readTime);return ut.newNoDocument(l,c)})(i,e):ce(7234,{result:e})}function Ok(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ce(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(pe(y===void 0||typeof y=="string",58123),It.fromBase64String(y||"")):(pe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),It.fromUint8Array(y||new Uint8Array))})(i,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const y=g.code===void 0?H.UNKNOWN:eR(g.code);return new Z(y,g.message||"")})(c);t=new rR(n,a,l,f||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=Xr(i,n.document.name),l=Nt(n.document.updateTime),c=n.document.createTime?Nt(n.document.createTime):ge.min(),f=new un({mapValue:{fields:n.document.fields}}),m=ut.newFoundDocument(a,l,c,f),g=n.targetIds||[],y=n.removedTargetIds||[];t=new kf(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=Xr(i,n.document),l=n.readTime?Nt(n.readTime):ge.min(),c=ut.newNoDocument(a,l),f=n.removedTargetIds||[];t=new kf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=Xr(i,n.document),l=n.removedTargetIds||[];t=new kf([],l,a,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:l}=n,c=new Ak(a,l),f=n.targetId;t=new nR(f,c)}}return t}function ph(i,e){let t;if(e instanceof ru)t={update:xI(i,e.key,e.value)};else if(e instanceof iu)t={delete:mh(i,e.key)};else if(e instanceof Fi)t={update:xI(i,e.key,e.data),updateMask:zk(e.fieldMask)};else{if(!(e instanceof tv))return ce(16599,{Vt:e.type});t={verify:mh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(l,c){const f=c.transform;if(f instanceof zl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof no)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ro)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof ql)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw ce(20930,{transform:c.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Pk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ce(27497)})(i,e.precondition)),t}function W_(i,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?pt.updateTime(Nt(l.updateTime)):l.exists!==void 0?pt.exists(l.exists):pt.none()})(e.currentDocument):pt.none(),n=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let m=null;if("setToServerValue"in f)pe(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),m=new zl;else if("appendMissingElements"in f){const y=f.appendMissingElements.values||[];m=new no(y)}else if("removeAllFromArray"in f){const y=f.removeAllFromArray.values||[];m=new ro(y)}else"increment"in f?m=new ql(c,f.increment):ce(16584,{proto:f});const g=mt.fromServerFormat(f.fieldPath);return new kh(g,m)})(i,a))):[];if(e.update){e.update.name;const a=Xr(i,e.update.name),l=new un({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(m){const g=m.fieldPaths||[];return new On(g.map((y=>mt.fromServerFormat(y))))})(e.updateMask);return new Fi(a,l,c,t,n)}return new ru(a,l,t,n)}if(e.delete){const a=Xr(i,e.delete);return new iu(a,t)}if(e.verify){const a=Xr(i,e.verify);return new tv(a,t)}return ce(1463,{proto:e})}function kk(i,e){return i&&i.length>0?(pe(e!==void 0,14353),i.map((t=>(function(a,l){let c=a.updateTime?Nt(a.updateTime):Nt(l);return c.isEqual(ge.min())&&(c=Nt(l)),new wk(c,a.transformResults||[])})(t,e)))):[]}function cR(i,e){return{documents:[aR(i,e.path)]}}function hR(i,e){const t={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=aR(i,a);const l=(function(g){if(g.length!==0)return mR(Je.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(I){return{field:_l(I.field),direction:Lk(I.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Q_(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function dR(i){let e=oR(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let a=null;if(n>0){pe(n===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const I=fR(T);return I instanceof Je&&Xy(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function(G){return new fh(yl(G.field),(function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Nh(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,O=T.values||[];return new qs(O,I)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const I=!T.before,O=T.values||[];return new qs(O,I)})(t.endAt)),US(e,a,c,l,f,"F",m,g)}function Mk(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fR(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=yl(t.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=yl(t.unaryFilter.field);return Le.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yl(t.unaryFilter.field);return Le.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=yl(t.unaryFilter.field);return Le.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Le.create(yl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Je.create(t.compositeFilter.filters.map((n=>fR(n))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(t.compositeFilter.op))})(i):ce(30097,{filter:i})}function Lk(i){return Ck[i]}function Uk(i){return Dk[i]}function Bk(i){return Nk[i]}function _l(i){return{fieldPath:i.canonicalString()}}function yl(i){return mt.fromServerFormat(i.fieldPath)}function mR(i){return i instanceof Le?(function(t){if(t.op==="=="){if(pI(t.value))return{unaryFilter:{field:_l(t.field),op:"IS_NAN"}};if(mI(t.value))return{unaryFilter:{field:_l(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pI(t.value))return{unaryFilter:{field:_l(t.field),op:"IS_NOT_NAN"}};if(mI(t.value))return{unaryFilter:{field:_l(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_l(t.field),op:Uk(t.op),value:t.value}}})(i):i instanceof Je?(function(t){const n=t.getFilters().map((a=>mR(a)));return n.length===1?n[0]:{compositeFilter:{op:Bk(t.op),filters:n}}})(i):ce(54877,{filter:i})}function zk(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Pi{constructor(e,t,n,a,l=ge.min(),c=ge.min(),f=It.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gR{constructor(e){this.yt=e}}function qk(i,e){let t;if(e.document)t=uR(i.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=se.fromSegments(e.noDocument.path),a=so(e.noDocument.readTime);t=ut.newNoDocument(n,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ce(56709);{const n=se.fromSegments(e.unknownDocument.path),a=so(e.unknownDocument.version);t=ut.newUnknownDocument(n,a)}}return e.readTime&&t.setReadTime((function(a){const l=new Ye(a[0],a[1]);return ge.fromTimestamp(l)})(e.readTime)),t}function PI(i,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:em(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(l,c){return{name:mh(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Fl(l,c.version.toTimestamp()),createTime:Fl(l,c.createTime.toTimestamp())}})(i.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:io(e.version)};else{if(!e.isUnknownDocument())return ce(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:io(e.version)}}return n}function em(i){const e=i.toTimestamp();return[e.seconds,e.nanoseconds]}function io(i){const e=i.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function so(i){const e=new Ye(i.seconds,i.nanoseconds);return ge.fromTimestamp(e)}function za(i,e){const t=(e.baseMutations||[]).map((l=>W_(i.yt,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const n=e.mutations.map((l=>W_(i.yt,l))),a=Ye.fromMillis(e.localWriteTimeMs);return new nv(e.batchId,a,t,n)}function Oc(i){const e=so(i.readTime),t=i.lastLimboFreeSnapshotVersion!==void 0?so(i.lastLimboFreeSnapshotVersion):ge.min();let n;return n=(function(l){return l.documents!==void 0})(i.query)?(function(l){const c=l.documents.length;return pe(c===1,1966,{count:c}),Rn(nu(oR(l.documents[0])))})(i.query):(function(l){return Rn(dR(l))})(i.query),new Pi(n,i.targetId,"TargetPurposeListen",i.lastListenSequenceNumber,e,t,It.fromBase64String(i.resumeToken))}function _R(i,e){const t=io(e.snapshotVersion),n=io(e.lastLimboFreeSnapshotVersion);let a;a=Xf(e.target)?cR(i.yt,e.target):hR(i.yt,e.target).ft;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:to(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:a}}function ov(i){const e=dR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Zf(e,e.limit,"L"):e}function f_(i,e){return new iv(e.largestBatchId,W_(i.yt,e.overlayMutation))}function VI(i,e){const t=e.path.lastSegment();return[i,yn(e.path.popLast()),t]}function OI(i,e,t,n){return{indexId:i,uid:e,sequenceNumber:t,readTime:io(n.readTime),documentKey:yn(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Fk{getBundleMetadata(e,t){return kI(e).get(t).next((n=>{if(n)return(function(l){return{id:l.bundleId,createTime:so(l.createTime),version:l.version}})(n)}))}saveBundleMetadata(e,t){return kI(e).put((function(a){return{bundleId:a.id,createTime:io(Nt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return MI(e).get(t).next((n=>{if(n)return(function(l){return{name:l.name,query:ov(l.bundledQuery),readTime:so(l.readTime)}})(n)}))}saveNamedQuery(e,t){return MI(e).put((function(a){return{name:a.name,readTime:io(Nt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function kI(i){return Gt(i,Am)}function MI(i){return Gt(i,Sm)}/**
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
 */class Vm{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Vm(e,n)}getOverlay(e,t){return Ic(e).get(VI(this.userId,t)).next((n=>n?f_(this.serializer,n):null))}getOverlays(e,t){const n=$r();return B.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){const a=[];return n.forEach(((l,c)=>{const f=new iv(t,c);a.push(this.St(e,f))})),B.waitFor(a)}removeOverlaysForBatchId(e,t,n){const a=new Set;t.forEach((c=>a.add(yn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,n],[this.userId,c,n+1],!1,!0);l.push(Ic(e).Z(U_,f))})),B.waitFor(l)}getOverlaysForCollection(e,t,n){const a=$r(),l=yn(t),c=IDBKeyRange.bound([this.userId,l,n],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Ic(e).J(U_,c).next((f=>{for(const m of f){const g=f_(this.serializer,m);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,n,a){const l=$r();let c;const f=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ic(e).ee({index:gS,range:f},((m,g,y)=>{const T=f_(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):y.done()})).next((()=>l))}St(e,t){return Ic(e).put((function(a,l,c){const[f,m,g]=VI(l,c.mutation.key);return{userId:l,collectionPath:m,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:ph(a.yt,c.mutation)}})(this.serializer,this.userId,t))}}function Ic(i){return Gt(i,Rm)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jk{bt(e){return Gt(e,Qy)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?It.fromUint8Array(n):It.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class qa{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(dt(e.integerValue));else if("doubleValue"in e){const n=dt(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),ah(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=Mi(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Li(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?CS(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Nm(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):ce(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const a of Object.keys(n))this.Ot(a,t),this.Ct(n[a],t)}kt(e,t){var c,f;const n=e.fields||{};this.Ft(t,53);const a=Ll,l=((f=(c=n[a].arrayValue)==null?void 0:c.values)==null?void 0:f.length)||0;this.Ft(t,15),t.Mt(dt(l)),this.Ot(a,t),this.Ct(n[a],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const a of n)this.Ct(a,t)}Lt(e,t){this.Ft(t,37),se.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}qa.Kt=new qa;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=255;function Hk(i){if(i===0)return 8;let e=0;return i>>4||(e+=4,i<<=4),i>>6||(e+=2,i<<=2),i>>7||(e+=1),e}function LI(i){const e=64-(function(n){let a=0;for(let l=0;l<8;++l){const c=Hk(255&n[l]);if(a+=c,c!==8)break}return a})(i);return Math.ceil(e/8)}class Gk{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const a=t.codePointAt(0);this.Gt(240|a>>>18),this.Gt(128|63&a>>>12),this.Gt(128|63&a>>>6),this.Gt(128|63&a)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Ht()}Xt(e){const t=this.en(e),n=LI(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=255&t[a]}nn(e){const t=this.en(e),n=LI(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}rn(){this.sn(hl),this.sn(255)}_n(){this.an(hl),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let a=1;a<t.length;++a)t[a]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===hl?(this.sn(hl),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===hl?(this.an(hl),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const a=new Uint8Array(n);a.set(this.buffer),this.buffer=a}}class Kk{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class Qk{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class bc{constructor(){this.cn=new Gk,this.ln=new Kk(this.cn),this.hn=new Qk(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Fa{constructor(e,t,n,a){this.Tn=e,this.In=t,this.En=n,this.dn=a}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Fa(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Mf(this.En),directionalValue:Mf(this.dn),orderedDocumentKey:Mf(t),documentKey:n.path.toArray()}}Vn(e,t,n){const a=this.Rn(e,t,n);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function Es(i,e){let t=i.Tn-e.Tn;return t!==0?t:(t=UI(i.En,e.En),t!==0?t:(t=UI(i.dn,e.dn),t!==0?t:se.comparator(i.In,e.In)))}function UI(i,e){for(let t=0;t<i.length&&t<e.length;++t){const n=i[t]-e[t];if(n!==0)return n}return i.length-e.length}function Mf(i){return Ob()?(function(t){let n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n})(i):i}function BI(i){return typeof i!="string"?i:(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(i)}class zI{constructor(e){this.mn=new Ze(((t,n)=>mt.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(pe(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=k_(e);if(t!==void 0&&!this.wn(t))return!1;const n=La(e);let a=new Set,l=0,c=0;for(;l<n.length&&this.wn(n[l]);++l)a=a.add(n[l].fieldPath.canonicalString());if(l===n.length)return!0;if(this.mn.size>0){const f=this.mn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const m=n[l];if(!this.Sn(f,m)||!this.bn(this.fn[c++],m))return!1}++l}for(;l<n.length;++l){const f=n[l];if(c>=this.fn.length||!this.bn(this.fn[c++],f))return!1}return!0}Dn(){if(this.pn)return null;let e=new Ze(mt.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Cf(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Cf(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Cf(n.field,n.dir==="asc"?0:1)));return new Qf(Qf.UNKNOWN_ID,this.collectionId,t,sh.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function yR(i){var t,n;if(pe(i instanceof Le||i instanceof Je,20012),i instanceof Le){if(i instanceof LS){const a=((n=(t=i.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((l=>Le.create(i.field,"==",l))))||[];return Je.create(a,"or")}return i}const e=i.filters.map((a=>yR(a)));return Je.create(e,i.op)}function Yk(i){if(i.getFilters().length===0)return[];const e=Z_(yR(i));return pe(vR(e),7391),X_(e)||J_(e)?[e]:e.getFilters()}function X_(i){return i instanceof Le}function J_(i){return i instanceof Je&&Xy(i)}function vR(i){return X_(i)||J_(i)||(function(t){if(t instanceof Je&&j_(t)){for(const n of t.getFilters())if(!X_(n)&&!J_(n))return!1;return!0}return!1})(i)}function Z_(i){if(pe(i instanceof Le||i instanceof Je,34018),i instanceof Le)return i;if(i.filters.length===1)return Z_(i.filters[0]);const e=i.filters.map((n=>Z_(n)));let t=Je.create(e,i.op);return t=tm(t),vR(t)?t:(pe(t instanceof Je,64498),pe(Bl(t),40251),pe(t.filters.length>1,57927),t.filters.reduce(((n,a)=>lv(n,a))))}function lv(i,e){let t;return pe(i instanceof Le||i instanceof Je,38388),pe(e instanceof Le||e instanceof Je,25473),t=i instanceof Le?e instanceof Le?(function(a,l){return Je.create([a,l],"and")})(i,e):qI(i,e):e instanceof Le?qI(e,i):(function(a,l){if(pe(a.filters.length>0&&l.filters.length>0,48005),Bl(a)&&Bl(l))return OS(a,l.getFilters());const c=j_(a)?a:l,f=j_(a)?l:a,m=c.filters.map((g=>lv(g,f)));return Je.create(m,"or")})(i,e),tm(t)}function qI(i,e){if(Bl(e))return OS(e,i.getFilters());{const t=e.filters.map((n=>lv(i,n)));return Je.create(t,"or")}}function tm(i){if(pe(i instanceof Le||i instanceof Je,11850),i instanceof Le)return i;const e=i.getFilters();if(e.length===1)return tm(e[0]);if(PS(i))return i;const t=e.map((a=>tm(a))),n=[];return t.forEach((a=>{a instanceof Le?n.push(a):a instanceof Je&&(a.op===i.op?n.push(...a.filters):n.push(a))})),n.length===1?n[0]:Je.create(n,i.op)}/**
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
 */class $k{constructor(){this.Cn=new uv}addToCollectionParentIndex(e,t){return this.Cn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve($n.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve($n.min())}updateCollectionGroup(e,t,n){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class uv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t]||new Ze(Me.comparator),l=!a.has(n);return this.index[t]=a.add(n),l}has(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t];return a&&a.has(n)}getEntries(e){return(this.index[e]||new Ze(Me.comparator)).toArray()}}/**
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
 */const FI="IndexedDbIndexManager",vf=new Uint8Array(0);class Wk{constructor(e,t){this.databaseId=t,this.vn=new uv,this.Fn=new qi((n=>to(n)),((n,a)=>Ph(n,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const l={collectionId:n,parent:yn(a)};return jI(e).put(l)}return B.resolve()}getCollectionParents(e,t){const n=[],a=IDBKeyRange.bound([t,""],[tS(t),""],!1,!0);return jI(e).J(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;n.push(Yr(c.parent))}return n}))}addFieldIndex(e,t){const n=Ac(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((m=>[m.fieldPath.canonicalString(),m.kind]))}})(t);delete a.indexId;const l=n.add(a);if(t.indexState){const c=fl(e);return l.next((f=>{c.put(OI(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const n=Ac(e),a=fl(e),l=dl(e);return n.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ac(e),n=dl(e),a=fl(e);return t.Z().next((()=>n.Z())).next((()=>a.Z()))}createTargetIndexes(e,t){return B.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((a=>{if(a===0||a===1){const l=new zI(n).Dn();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const n=dl(e);let a=!0;const l=new Map;return B.forEach(this.Mn(t),(c=>this.xn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ce();const f=[];return B.forEach(l,((m,g)=>{te(FI,`Using index ${(function(ae){return`id=${ae.indexId}|cg=${ae.collectionGroup}|f=${ae.fields.map((Ie=>`${Ie.fieldPath}:${Ie.kind}`)).join(",")}`})(m)} to execute ${to(t)}`);const y=(function(ae,Ie){const me=k_(Ie);if(me===void 0)return null;for(const Te of Jf(ae,me.fieldPath))switch(Te.op){case"array-contains-any":return Te.value.arrayValue.values||[];case"array-contains":return[Te.value]}return null})(g,m),T=(function(ae,Ie){const me=new Map;for(const Te of La(Ie))for(const N of Jf(ae,Te.fieldPath))switch(N.op){case"==":case"in":me.set(Te.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return me.set(Te.fieldPath.canonicalString(),N.value),Array.from(me.values())}return null})(g,m),I=(function(ae,Ie){const me=[];let Te=!0;for(const N of La(Ie)){const S=N.kind===0?EI(ae,N.fieldPath,ae.startAt):TI(ae,N.fieldPath,ae.startAt);me.push(S.value),Te&&(Te=S.inclusive)}return new qs(me,Te)})(g,m),O=(function(ae,Ie){const me=[];let Te=!0;for(const N of La(Ie)){const S=N.kind===0?TI(ae,N.fieldPath,ae.endAt):EI(ae,N.fieldPath,ae.endAt);me.push(S.value),Te&&(Te=S.inclusive)}return new qs(me,Te)})(g,m),G=this.On(m,g,I),W=this.On(m,g,O),Q=this.Nn(m,g,T),de=this.Bn(m.indexId,y,G,I.inclusive,W,O.inclusive,Q);return B.forEach(de,(he=>n.Y(he,t.limit).next((ae=>{ae.forEach((Ie=>{const me=se.fromSegments(Ie.documentKey);c.has(me)||(c=c.add(me),f.push(me))}))}))))})).next((()=>f))}return B.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=Yk(Je.create(e.filters,"and")).map((n=>G_(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,a,l,c,f){const m=(t!=null?t.length:1)*Math.max(n.length,l.length),g=m/(t!=null?t.length:1),y=[];for(let T=0;T<m;++T){const I=t?this.Ln(t[T/g]):vf,O=this.kn(e,I,n[T%g],a),G=this.qn(e,I,l[T%g],c),W=f.map((Q=>this.kn(e,I,Q,!0)));y.push(...this.createRange(O,G,W))}return y}kn(e,t,n,a){const l=new Fa(e,se.empty(),t,n);return a?l:l.An()}qn(e,t,n,a){const l=new Fa(e,se.empty(),t,n);return a?l.An():l}xn(e,t){const n=new zI(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)n.yn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let n=2;const a=this.Mn(t);return B.forEach(a,(l=>this.xn(e,l).next((c=>{c?n!==0&&c.fields.length<(function(m){let g=new Ze(mt.comparator),y=!1;for(const T of m.filters)for(const I of T.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?y=!0:g=g.add(I.field));for(const T of m.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(y?1:0)})(l)&&(n=1):n=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&n===2?1:n))}Qn(e,t){const n=new bc;for(const a of La(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=n.Pn(a.kind);qa.Kt.Dt(l,c)}return n.un()}Ln(e){const t=new bc;return qa.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new bc;return qa.Kt.Dt(eo(this.databaseId,t),n.Pn((function(l){const c=La(l);return c.length===0?0:c[c.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let a=[];a.push(new bc);let l=0;for(const c of La(e)){const f=n[l++];for(const m of a)if(this.Un(t,c.fieldPath)&&dh(f))a=this.Kn(a,c,f);else{const g=m.Pn(c.kind);qa.Kt.Dt(f,g)}}return this.Wn(a)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const a=[...e],l=[];for(const c of n.arrayValue.values||[])for(const f of a){const m=new bc;m.seed(f.un()),qa.Kt.Dt(c,m.Pn(t.kind)),l.push(m)}return l}Un(e,t){return!!e.filters.find((n=>n instanceof Le&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Ac(e),a=fl(e);return(t?n.J(L_,IDBKeyRange.bound(t,t)):n.J()).next((l=>{const c=[];return B.forEach(l,(f=>a.get([f.indexId,this.uid]).next((m=>{c.push((function(y,T){const I=T?new sh(T.sequenceNumber,new $n(so(T.readTime),new se(Yr(T.documentKey)),T.largestBatchId)):sh.empty(),O=y.fields.map((([G,W])=>new Cf(mt.fromServerFormat(G),W)));return new Qf(y.indexId,y.collectionGroup,O,I)})(f,m))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,a)=>{const l=n.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(n.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const a=Ac(e),l=fl(e);return this.Gn(e).next((c=>a.J(L_,IDBKeyRange.bound(t,t)).next((f=>B.forEach(f,(m=>l.put(OI(m.indexId,this.uid,c,n))))))))}updateIndexEntries(e,t){const n=new Map;return B.forEach(t,((a,l)=>{const c=n.get(a.collectionGroup);return(c?B.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(n.set(a.collectionGroup,f),B.forEach(f,(m=>this.zn(e,a,m).next((g=>{const y=this.jn(l,m);return g.isEqual(y)?B.resolve():this.Jn(e,l,m,g,y)})))))))}))}Hn(e,t,n,a){return dl(e).put(a.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,a){return dl(e).delete(a.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const a=dl(e);let l=new Ze(Es);return a.ee({index:pS,range:IDBKeyRange.only([n.indexId,this.uid,Mf(this.$n(n,t))])},((c,f)=>{l=l.add(new Fa(n.indexId,t,BI(f.arrayValue),BI(f.directionalValue)))})).next((()=>l))}jn(e,t){let n=new Ze(Es);const a=this.Qn(t,e);if(a==null)return n;const l=k_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(dh(c))for(const f of c.arrayValue.values||[])n=n.add(new Fa(t.indexId,e.key,this.Ln(f),a))}else n=n.add(new Fa(t.indexId,e.key,vf,a));return n}Jn(e,t,n,a,l){te(FI,"Updating index entries for document '%s'",t.key);const c=[];return(function(m,g,y,T,I){const O=m.getIterator(),G=g.getIterator();let W=cl(O),Q=cl(G);for(;W||Q;){let de=!1,he=!1;if(W&&Q){const ae=y(W,Q);ae<0?he=!0:ae>0&&(de=!0)}else W!=null?he=!0:de=!0;de?(T(Q),Q=cl(G)):he?(I(W),W=cl(O)):(W=cl(O),Q=cl(G))}})(a,l,Es,(f=>{c.push(this.Hn(e,t,n,f))}),(f=>{c.push(this.Yn(e,t,n,f))})),B.waitFor(c)}Gn(e){let t=1;return fl(e).ee({index:mS,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((c,f)=>Es(c,f))).filter(((c,f,m)=>!f||Es(c,m[f-1])!==0));const a=[];a.push(e);for(const c of n){const f=Es(c,e),m=Es(c,t);if(f===0)a[0]=e.An();else if(f>0&&m<0)a.push(c),a.push(c.An());else if(m>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Zn(a[c],a[c+1]))return[];const f=a[c].Vn(this.uid,vf,se.empty()),m=a[c+1].Vn(this.uid,vf,se.empty());l.push(IDBKeyRange.bound(f,m))}return l}Zn(e,t){return Es(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(HI)}getMinOffset(e,t){return B.mapArray(this.Mn(t),(n=>this.xn(e,n).next((a=>a||ce(44426))))).next(HI)}}function jI(i){return Gt(i,uh)}function dl(i){return Gt(i,Gc)}function Ac(i){return Gt(i,Ky)}function fl(i){return Gt(i,Hc)}function HI(i){pe(i.length!==0,28825);let e=i[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<i.length;n++){const a=i[n].indexState.offset;jy(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new $n(e.readTime,e.documentKey,t)}/**
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
 */const GI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ER=41943040;class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function TR(i,e,t){const n=i.store(yr),a=i.store(Vl),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const m=n.ee({range:c},((y,T,I)=>(f++,I.delete())));l.push(m.next((()=>{pe(f===1,47070,{batchId:t.batchId})})));const g=[];for(const y of t.mutations){const T=hS(e,y.key.path,t.batchId);l.push(a.delete(T)),g.push(y.key)}return B.waitFor(l).next((()=>g))}function nm(i){if(!i)return 0;let e;if(i.document)e=i.document;else if(i.unknownDocument)e=i.unknownDocument;else{if(!i.noDocument)throw ce(14731);e=i.noDocument}return JSON.stringify(e).length}/**
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
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(ER,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);class Om{constructor(e,t,n,a){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=a,this.Xn={}}static wt(e,t,n,a){pe(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Om(l,t,n,a)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ts(e).ee({index:Ga,range:n},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,n,a){const l=vl(e),c=Ts(e);return c.add({}).next((f=>{pe(typeof f=="number",49019);const m=new nv(f,t,n,a),g=(function(O,G,W){const Q=W.baseMutations.map((he=>ph(O.yt,he))),de=W.mutations.map((he=>ph(O.yt,he)));return{userId:G,batchId:W.batchId,localWriteTimeMs:W.localWriteTime.toMillis(),baseMutations:Q,mutations:de}})(this.serializer,this.userId,m),y=[];let T=new Ze(((I,O)=>Re(I.canonicalString(),O.canonicalString())));for(const I of a){const O=hS(this.userId,I.key.path,f);T=T.add(I.key.path.popLast()),y.push(c.put(g)),y.push(l.put(O,NO))}return T.forEach((I=>{y.push(this.indexManager.addToCollectionParentIndex(e,I))})),e.addOnCommittedListener((()=>{this.Xn[f]=m.keys()})),B.waitFor(y).next((()=>m))}))}lookupMutationBatch(e,t){return Ts(e).get(t).next((n=>n?(pe(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),za(this.serializer,n)):null))}er(e,t){return this.Xn[t]?B.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const a=n.keys();return this.Xn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=IDBKeyRange.lowerBound([this.userId,n]);let l=null;return Ts(e).ee({index:Ga,range:a},((c,f,m)=>{f.userId===this.userId&&(pe(f.batchId>=n,47524,{tr:n}),l=za(this.serializer,f)),m.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=xs;return Ts(e).ee({index:Ga,range:t,reverse:!0},((a,l,c)=>{n=l.batchId,c.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,xs],[this.userId,Number.POSITIVE_INFINITY]);return Ts(e).J(Ga,t).next((n=>n.map((a=>za(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Df(this.userId,t.path),a=IDBKeyRange.lowerBound(n),l=[];return vl(e).ee({range:a},((c,f,m)=>{const[g,y,T]=c,I=Yr(y);if(g===this.userId&&t.path.isEqual(I))return Ts(e).get(T).next((O=>{if(!O)throw ce(61480,{nr:c,batchId:T});pe(O.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:O.userId,batchId:T}),l.push(za(this.serializer,O))}));m.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ze(Re);const a=[];return t.forEach((l=>{const c=Df(this.userId,l.path),f=IDBKeyRange.lowerBound(c),m=vl(e).ee({range:f},((g,y,T)=>{const[I,O,G]=g,W=Yr(O);I===this.userId&&l.path.isEqual(W)?n=n.add(G):T.done()}));a.push(m)})),B.waitFor(a).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1,l=Df(this.userId,n),c=IDBKeyRange.lowerBound(l);let f=new Ze(Re);return vl(e).ee({range:c},((m,g,y)=>{const[T,I,O]=m,G=Yr(I);T===this.userId&&n.isPrefixOf(G)?G.length===a&&(f=f.add(O)):y.done()})).next((()=>this.rr(e,f)))}rr(e,t){const n=[],a=[];return t.forEach((l=>{a.push(Ts(e).get(l).next((c=>{if(c===null)throw ce(35274,{batchId:l});pe(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),n.push(za(this.serializer,c))})))})),B.waitFor(a).next((()=>n))}removeMutationBatch(e,t){return TR(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),B.forEach(n,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return B.resolve();const n=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return vl(e).ee({range:n},((l,c,f)=>{if(l[0]===this.userId){const m=Yr(l[1]);a.push(m)}else f.done()})).next((()=>{pe(a.length===0,56720,{sr:a.map((l=>l.canonicalString()))})}))}))}containsKey(e,t){return wR(e,this.userId,t)}_r(e){return IR(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:xs,lastStreamToken:""}))}}function wR(i,e,t){const n=Df(e,t.path),a=n[1],l=IDBKeyRange.lowerBound(n);let c=!1;return vl(i).ee({range:l,X:!0},((f,m,g)=>{const[y,T,I]=f;y===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Ts(i){return Gt(i,yr)}function vl(i){return Gt(i,Vl)}function IR(i){return Gt(i,oh)}/**
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
 */class ao{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ao(0)}static cr(){return new ao(-1)}}/**
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
 */class Xk{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new ao(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ge.fromTimestamp(new Ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((a=>(a.highestListenSequenceNumber=t,n&&(a.lastRemoteSnapshotVersion=n.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.hr(e,a))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>ml(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(pe(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let a=0;const l=[];return ml(e).ee(((c,f)=>{const m=Oc(f);m.sequenceNumber<=t&&n.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))})).next((()=>B.waitFor(l))).next((()=>a))}forEachTarget(e,t){return ml(e).ee(((n,a)=>{const l=Oc(a);t(l)}))}lr(e){return KI(e).get(Wf).next((t=>(pe(t!==null,2888),t)))}hr(e,t){return KI(e).put(Wf,t)}Pr(e,t){return ml(e).put(_R(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=to(t),a=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let l=null;return ml(e).ee({range:a,index:fS},((c,f,m)=>{const g=Oc(f);Ph(t,g.target)&&(l=g,m.done())})).next((()=>l))}addMatchingKeys(e,t,n){const a=[],l=bs(e);return t.forEach((c=>{const f=yn(c.path);a.push(l.put({targetId:n,path:f})),a.push(this.referenceDelegate.addReference(e,n,c))})),B.waitFor(a)}removeMatchingKeys(e,t,n){const a=bs(e);return B.forEach(t,(l=>{const c=yn(l.path);return B.waitFor([a.delete([n,c]),this.referenceDelegate.removeReference(e,n,l)])}))}removeMatchingKeysForTargetId(e,t){const n=bs(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(a)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),a=bs(e);let l=Ce();return a.ee({range:n,X:!0},((c,f,m)=>{const g=Yr(c[1]),y=new se(g);l=l.add(y)})).next((()=>l))}containsKey(e,t){const n=yn(t.path),a=IDBKeyRange.bound([n],[tS(n)],!1,!0);let l=0;return bs(e).ee({index:Gy,X:!0,range:a},(([c,f],m,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}At(e,t){return ml(e).get(t).next((n=>n?Oc(n):null))}}function ml(i){return Gt(i,Ol)}function KI(i){return Gt(i,Wa)}function bs(i){return Gt(i,kl)}/**
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
 */const QI="LruGarbageCollector",Jk=1048576;function YI([i,e],[t,n]){const a=Re(i,t);return a===0?Re(e,n):a}class Zk{constructor(e){this.Ir=e,this.buffer=new Ze(YI),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();YI(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(QI,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ys(t)?te(QI,"Ignoring IndexedDB error during garbage collection: ",t):await Qs(t)}await this.Vr(3e5)}))}}class eM{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Vn.ce);const n=new Zk(t);return this.mr.forEachTarget(e,(a=>n.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>n.Ar(a))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(GI)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),GI):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,a,l,c,f,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(n=T,f=Date.now(),this.removeTargets(e,n,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,n)))).next((T=>(g=Date.now(),pl()<=ke.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function AR(i,e){return new eM(i,e)}/**
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
 */class tM{constructor(e,t){this.db=e,this.garbageCollector=AR(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,a)=>t(a)))}addReference(e,t,n){return Ef(e,n)}removeReference(e,t,n){return Ef(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ef(e,t)}br(e,t){return(function(a,l){let c=!1;return IR(a).te((f=>wR(a,f,l).next((m=>(m&&(c=!0),B.resolve(!m)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,((c,f)=>{if(f<=t){const m=this.br(e,c).next((g=>{if(!g)return l++,n.getEntry(e,c).next((()=>(n.removeEntry(c,ge.min()),bs(e).delete((function(T){return[0,yn(T.path)]})(c)))))}));a.push(m)}})).next((()=>B.waitFor(a))).next((()=>n.apply(e))).next((()=>l))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ef(e,t)}Sr(e,t){const n=bs(e);let a,l=Vn.ce;return n.ee({index:Gy},(([c,f],{path:m,sequenceNumber:g})=>{c===0?(l!==Vn.ce&&t(new se(Yr(a)),l),l=g,a=m):l=Vn.ce})).next((()=>{l!==Vn.ce&&t(new se(Yr(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ef(i,e){return bs(i).put((function(n,a){return{targetId:0,path:yn(n.path),sequenceNumber:a}})(e,i.currentSequenceNumber))}/**
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
 */class SR{constructor(){this.changes=new qi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?B.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ka(e).put(n)}removeEntry(e,t,n){return ka(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],em(c),f[f.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ut.newInvalidDocument(t);return ka(e).ee({index:Nf,range:IDBKeyRange.only(Sc(t))},((a,l)=>{n=this.Cr(t,l)})).next((()=>n))}vr(e,t){let n={size:0,document:ut.newInvalidDocument(t)};return ka(e).ee({index:Nf,range:IDBKeyRange.only(Sc(t))},((a,l)=>{n={document:this.Cr(t,l),size:nm(l)}})).next((()=>n))}getEntries(e,t){let n=kn();return this.Fr(e,t,((a,l)=>{const c=this.Cr(a,l);n=n.insert(a,c)})).next((()=>n))}Mr(e,t){let n=kn(),a=new lt(se.comparator);return this.Fr(e,t,((l,c)=>{const f=this.Cr(l,c);n=n.insert(l,f),a=a.insert(l,nm(c))})).next((()=>({documents:n,Or:a})))}Fr(e,t,n){if(t.isEmpty())return B.resolve();let a=new Ze(XI);t.forEach((m=>a=a.add(m)));const l=IDBKeyRange.bound(Sc(a.first()),Sc(a.last())),c=a.getIterator();let f=c.getNext();return ka(e).ee({index:Nf,range:l},((m,g,y)=>{const T=se.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&XI(f,T)<0;)n(f,null),f=c.getNext();f&&f.isEqual(T)&&(n(f,g),f=c.hasNext()?c.getNext():null),f?y.j(Sc(f)):y.done()})).next((()=>{for(;f;)n(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,n,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),em(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],m=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ka(e).J(IDBKeyRange.bound(f,m,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let y=kn();for(const T of g){const I=this.Cr(se.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);I.isFoundDocument()&&(Oh(t,I)||a.has(I.key))&&(y=y.insert(I.key,I))}return y}))}getAllFromCollectionGroup(e,t,n,a){let l=kn();const c=WI(t,n),f=WI(t,$n.max());return ka(e).ee({index:dS,range:IDBKeyRange.bound(c,f,!0)},((m,g,y)=>{const T=this.Cr(se.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&y.done()})).next((()=>l))}newChangeBuffer(e){return new rM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return $I(e).get(M_).next((t=>(pe(!!t,20021),t)))}Dr(e,t){return $I(e).put(M_,t)}Cr(e,t){if(t){const n=qk(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ge.min())))return n}return ut.newInvalidDocument(e)}}function RR(i){return new nM(i)}class rM extends SR{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new qi((n=>n.toString()),((n,a)=>n.isEqual(a)))}applyChanges(e){const t=[];let n=0,a=new Ze(((l,c)=>Re(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.Br.get(l);if(t.push(this.Nr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const m=PI(this.Nr.serializer,c);a=a.add(l.path.popLast());const g=nm(m);n+=g-f.size,t.push(this.Nr.addEntry(e,l,m))}else if(n-=f.size,this.trackRemovals){const m=PI(this.Nr.serializer,c.convertToNoDocument(ge.min()));t.push(this.Nr.addEntry(e,l,m))}})),a.forEach((l=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.Nr.updateMetadata(e,n)),B.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:a})=>(a.forEach(((l,c)=>{this.Br.set(l,{size:c,readTime:n.get(l).readTime})})),n)))}}function $I(i){return Gt(i,lh)}function ka(i){return Gt(i,$f)}function Sc(i){const e=i.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function WI(i,e){const t=e.documentKey.path.toArray();return[i,em(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function XI(i,e){const t=i.path.toArray(),n=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<n.length-2;++l)if(a=Re(t[l],n[l]),a)return a;return a=Re(t.length,n.length),a||(a=Re(t[t.length-2],n[n.length-2]),a||Re(t[t.length-1],n[n.length-1]))}/**
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
 *//**
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
 */class iM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class CR{constructor(e,t,n,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(n=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(n!==null&&Yc(n.mutation,a,On.empty(),Ye.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,Ce()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=Ce()){const a=$r();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,n).next((l=>{let c=Pc();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const n=$r();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ce())))}populateOverlays(e,t,n){const a=[];return n.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,n,a){let l=kn();const c=Qc(),f=(function(){return Qc()})();return t.forEach(((m,g)=>{const y=n.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Fi)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Yc(y.mutation,g,y.mutation.getFieldMask(),Ye.now())):c.set(g.key,On.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>f.set(g,new iM(y,c.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const n=Qc();let a=new lt(((c,f)=>c-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let y=n.get(m)||On.empty();y=f.applyToLocalView(g,y),n.set(m,y);const T=(a.get(f.batchId)||Ce()).add(m);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,y=m.value,T=HS();y.forEach((I=>{if(!l.has(I)){const O=XS(t.get(I),n.get(I));O!==null&&T.set(I,O),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return B.waitFor(c)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,a){return(function(c){return se.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,a):this.getDocumentsMatchingCollectionQuery(e,t,n,a)}getNextDocuments(e,t,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,a-l.size):B.resolve($r());let f=Pl,m=l;return c.next((g=>B.forEach(g,((y,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(y)?B.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{m=m.insert(y,I)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,Ce()))).next((y=>({batchId:f,changes:jS(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next((n=>{let a=Pc();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,a){const l=t.collectionGroup;let c=Pc();return this.indexManager.getCollectionParents(e,l).next((f=>B.forEach(f,(m=>{const g=(function(T,I){return new zi(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,n,a).next((y=>{y.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,n,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,l,a)))).next((c=>{l.forEach(((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,ut.newInvalidDocument(y)))}));let f=Pc();return c.forEach(((m,g)=>{const y=l.get(m);y!==void 0&&Yc(y.mutation,g,On.empty(),Ye.now()),Oh(t,g)&&(f=f.insert(m,g))})),f}))}}/**
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
 */class sM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return B.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Nt(a.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:ov(a.bundledQuery),readTime:Nt(a.readTime)}})(t)),B.resolve()}}/**
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
 */class aM{constructor(){this.overlays=new lt(se.comparator),this.qr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$r();return B.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((a,l)=>{this.St(e,t,l)})),B.resolve()}removeOverlaysForBatchId(e,t,n){const a=this.qr.get(n);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(n)),B.resolve()}getOverlaysForCollection(e,t,n){const a=$r(),l=t.length+1,c=new se(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>n&&a.set(m.getKey(),m)}return B.resolve(a)}getOverlaysForCollectionGroup(e,t,n,a){let l=new lt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>n){let y=l.get(g.largestBatchId);y===null&&(y=$r(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=$r(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,y)=>f.set(g,y))),!(f.size()>=a)););return B.resolve(f)}St(e,t,n){const a=this.overlays.get(n.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(n.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new iv(t,n));let l=this.qr.get(t);l===void 0&&(l=Ce(),this.qr.set(t,l)),this.qr.set(t,l.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class oM{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class cv{constructor(){this.Qr=new Ze(Jt.$r),this.Ur=new Ze(Jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Jt(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Jt(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new se(new Me([])),n=new Jt(t,e),a=new Jt(t,e+1),l=[];return this.Ur.forEachInRange([n,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new se(new Me([])),n=new Jt(t,e),a=new Jt(t,e+1);let l=Ce();return this.Ur.forEachInRange([n,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Jt(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Jt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return se.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||se.comparator(e.key,t.key)}}/**
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
 */class lM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(Jt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new nv(l,t,n,a);this.mutationQueue.push(c);for(const f of a)this.Zr=this.Zr.add(new Jt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return B.resolve(c)}lookupMutationBatch(e,t){return B.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=this.ei(n),l=a<0?0:a;return B.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?xs:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Jt(t,0),a=new Jt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([n,a],(c=>{const f=this.Xr(c.Yr);l.push(f)})),B.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ze(Re);return t.forEach((a=>{const l=new Jt(a,0),c=new Jt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(f=>{n=n.add(f.Yr)}))})),B.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1;let l=n;se.isDocumentKey(l)||(l=l.child(""));const c=new Jt(new se(l),0);let f=new Ze(Re);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!n.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Yr)),!0)}),c),B.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((n=>{const a=this.Xr(n);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){pe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return B.forEach(t.mutations,(a=>{const l=new Jt(a.key,t.batchId);return n=n.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Jt(t,0),a=this.Zr.firstAfterOrEqual(n);return B.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uM{constructor(e){this.ri=e,this.docs=(function(){return new lt(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,a=this.docs.get(n),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return B.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let n=kn();return t.forEach((a=>{const l=this.docs.get(a);n=n.insert(a,l?l.document.mutableCopy():ut.newInvalidDocument(a))})),B.resolve(n)}getDocumentsMatchingQuery(e,t,n,a){let l=kn();const c=t.path,f=new se(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||jy(aS(y),n)<=0||(a.has(y.key)||Oh(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return B.resolve(l)}getAllFromCollectionGroup(e,t,n,a){ce(9500)}ii(e,t){return B.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new cM(this)}getSize(e){return B.resolve(this.size)}}class cM extends SR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(n)})),B.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class hM{constructor(e){this.persistence=e,this.si=new qi((t=>to(t)),Ph),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.oi=0,this._i=new cv,this.targetCount=0,this.ai=ao.ur()}forEachTarget(e,t){return this.si.forEach(((n,a)=>t(a))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),B.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Pr(t),B.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,n){let a=0;const l=[];return this.si.forEach(((c,f)=>{f.sequenceNumber<=t&&n.get(f.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),B.waitFor(l).next((()=>a))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return B.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),B.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),B.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return B.resolve(n)}containsKey(e,t){return B.resolve(this._i.containsKey(t))}}/**
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
 */class hv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Vn(0),this.li=!1,this.li=!0,this.hi=new oM,this.referenceDelegate=e(this),this.Pi=new hM(this),this.indexManager=new $k,this.remoteDocumentCache=(function(a){return new uM(a)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new gR(t),this.Ii=new sM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new lM(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){te("MemoryPersistence","Starting transaction:",e);const a=new dM(this.ci.next());return this.referenceDelegate.Ei(),n(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return B.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class dM extends lS{constructor(e){super(),this.currentSequenceNumber=e}}class km{constructor(e){this.persistence=e,this.Ri=new cv,this.Vi=null}static mi(e){return new km(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),B.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,(n=>{const a=se.fromPath(n);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ge.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rm{constructor(e,t){this.persistence=e,this.pi=new qi((n=>yn(n.path)),((n,a)=>n.isEqual(a))),this.garbageCollector=AR(this,t)}static mi(e,t){return new rm(e,t)}Ei(){}di(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return B.forEach(this.pi,((n,a)=>this.br(e,n,a).next((l=>l?B.resolve():t(a)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((f=>{f||(n++,l.removeEntry(c,ge.min()))})))).next((()=>l.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),B.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pf(e.data.value)),t}br(e,t,n){return B.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return B.resolve(a!==void 0&&a>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fM{constructor(e){this.serializer=e}k(e,t,n,a){const l=new bm("createOrUpgrade",t);n<1&&a>=1&&((function(m){m.createObjectStore(xh)})(e),(function(m){m.createObjectStore(oh,{keyPath:DO}),m.createObjectStore(yr,{keyPath:lI,autoIncrement:!0}).createIndex(Ga,uI,{unique:!0}),m.createObjectStore(Vl)})(e),JI(e),(function(m){m.createObjectStore(Ua)})(e));let c=B.resolve();return n<3&&a>=3&&(n!==0&&((function(m){m.deleteObjectStore(kl),m.deleteObjectStore(Ol),m.deleteObjectStore(Wa)})(e),JI(e)),c=c.next((()=>(function(m){const g=m.store(Wa),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ge.min().toTimestamp(),targetCount:0};return g.put(Wf,y)})(l)))),n<4&&a>=4&&(n!==0&&(c=c.next((()=>(function(m,g){return g.store(yr).J().next((T=>{m.deleteObjectStore(yr),m.createObjectStore(yr,{keyPath:lI,autoIncrement:!0}).createIndex(Ga,uI,{unique:!0});const I=g.store(yr),O=T.map((G=>I.put(G)));return B.waitFor(O)}))})(e,l)))),c=c.next((()=>{(function(m){m.createObjectStore(Ml,{keyPath:UO})})(e)}))),n<5&&a>=5&&(c=c.next((()=>this.yi(l)))),n<6&&a>=6&&(c=c.next((()=>((function(m){m.createObjectStore(lh)})(e),this.wi(l))))),n<7&&a>=7&&(c=c.next((()=>this.Si(l)))),n<8&&a>=8&&(c=c.next((()=>this.bi(e,l)))),n<9&&a>=9&&(c=c.next((()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&a>=10&&(c=c.next((()=>this.Di(l)))),n<11&&a>=11&&(c=c.next((()=>{(function(m){m.createObjectStore(Am,{keyPath:BO})})(e),(function(m){m.createObjectStore(Sm,{keyPath:zO})})(e)}))),n<12&&a>=12&&(c=c.next((()=>{(function(m){const g=m.createObjectStore(Rm,{keyPath:QO});g.createIndex(U_,YO,{unique:!1}),g.createIndex(gS,$O,{unique:!1})})(e)}))),n<13&&a>=13&&(c=c.next((()=>(function(m){const g=m.createObjectStore($f,{keyPath:xO});g.createIndex(Nf,PO),g.createIndex(dS,VO)})(e))).next((()=>this.Ci(e,l))).next((()=>e.deleteObjectStore(Ua)))),n<14&&a>=14&&(c=c.next((()=>this.Fi(e,l)))),n<15&&a>=15&&(c=c.next((()=>(function(m){m.createObjectStore(Ky,{keyPath:qO,autoIncrement:!0}).createIndex(L_,FO,{unique:!1}),m.createObjectStore(Hc,{keyPath:jO}).createIndex(mS,HO,{unique:!1}),m.createObjectStore(Gc,{keyPath:GO}).createIndex(pS,KO,{unique:!1})})(e)))),n<16&&a>=16&&(c=c.next((()=>{t.objectStore(Hc).clear()})).next((()=>{t.objectStore(Gc).clear()}))),n<17&&a>=17&&(c=c.next((()=>{(function(m){m.createObjectStore(Qy,{keyPath:WO})})(e)}))),n<18&&a>=18&&Ob()&&(c=c.next((()=>{t.objectStore(Hc).clear()})).next((()=>{t.objectStore(Gc).clear()}))),c}wi(e){let t=0;return e.store(Ua).ee(((n,a)=>{t+=nm(a)})).next((()=>{const n={byteSize:t};return e.store(lh).put(M_,n)}))}yi(e){const t=e.store(oh),n=e.store(yr);return t.J().next((a=>B.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,xs],[l.userId,l.lastAcknowledgedBatchId]);return n.J(Ga,c).next((f=>B.forEach(f,(m=>{pe(m.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:m.batchId});const g=za(this.serializer,m);return TR(e,l.userId,g).next((()=>{}))}))))}))))}Si(e){const t=e.store(kl),n=e.store(Ua);return e.store(Wa).get(Wf).next((a=>{const l=[];return n.ee(((c,f)=>{const m=new Me(c),g=(function(T){return[0,yn(T)]})(m);l.push(t.get(g).next((y=>y?B.resolve():(T=>t.put({targetId:0,path:yn(T),sequenceNumber:a.highestListenSequenceNumber}))(m))))})).next((()=>B.waitFor(l)))}))}bi(e,t){e.createObjectStore(uh,{keyPath:LO});const n=t.store(uh),a=new uv,l=c=>{if(a.add(c)){const f=c.lastSegment(),m=c.popLast();return n.put({collectionId:f,parent:yn(m)})}};return t.store(Ua).ee({X:!0},((c,f)=>{const m=new Me(c);return l(m.popLast())})).next((()=>t.store(Vl).ee({X:!0},(([c,f,m],g)=>{const y=Yr(f);return l(y.popLast())}))))}Di(e){const t=e.store(Ol);return t.ee(((n,a)=>{const l=Oc(a),c=_R(this.serializer,l);return t.put(c)}))}Ci(e,t){const n=t.store(Ua),a=[];return n.ee(((l,c)=>{const f=t.store($f),m=(function(T){return T.document?new se(Me.fromString(T.document.name).popFirst(5)):T.noDocument?se.fromSegments(T.noDocument.path):T.unknownDocument?se.fromSegments(T.unknownDocument.path):ce(36783)})(c).path.toArray(),g={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>B.waitFor(a)))}Fi(e,t){const n=t.store(yr),a=RR(this.serializer),l=new hv(km.mi,this.serializer.yt);return n.J().next((c=>{const f=new Map;return c.forEach((m=>{let g=f.get(m.userId)??Ce();za(this.serializer,m).keys().forEach((y=>g=g.add(y))),f.set(m.userId,g)})),B.forEach(f,((m,g)=>{const y=new Zt(g),T=Vm.wt(this.serializer,y),I=l.getIndexManager(y),O=Om.wt(y,this.serializer,I,l.referenceDelegate);return new CR(a,O,T,I).recalculateAndSaveOverlaysForDocumentKeys(new B_(t,Vn.ce),m).next()}))}))}}function JI(i){i.createObjectStore(kl,{keyPath:kO}).createIndex(Gy,MO,{unique:!0}),i.createObjectStore(Ol,{keyPath:"targetId"}).createIndex(fS,OO,{unique:!0}),i.createObjectStore(Wa)}const ws="IndexedDbPersistence",m_=18e5,p_=5e3,g_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",DR="main";class dv{constructor(e,t,n,a,l,c,f,m,g,y,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=l,this.window=c,this.document=f,this.xi=g,this.Oi=y,this.Ni=T,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!dv.v())throw new Z(H.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tM(this,a),this.$i=t+DR,this.serializer=new gR(m),this.Ui=new Wr(this.$i,this.Ni,new fM(this.serializer)),this.hi=new jk,this.Pi=new Xk(this.referenceDelegate,this.serializer),this.remoteDocumentCache=RR(this.serializer),this.Ii=new Fk,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,y===!1&&Dt(ws,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z(H.FAILED_PRECONDITION,g_);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Vn(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Tf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Ys(e))return te(ws,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return te(ws,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Rc(e).get(ul).next((t=>B.resolve(this.es(t))))}ts(e){return Tf(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,m_)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Gt(t,Ml);return n.J().next((a=>{const l=this.ss(a,m_),c=a.filter((f=>l.indexOf(f)===-1));return B.forEach(c,(f=>n.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?B.resolve(!0):Rc(e).get(ul).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,p_)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new Z(H.FAILED_PRECONDITION,g_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Tf(e).J().next((n=>this.ss(n,p_).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&te(ws,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[xh,Ml],(e=>{const t=new B_(e,Vn.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Tf(e).J().next((t=>this.ss(t,m_).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Om.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wk(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Vm.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){te(ws,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(m){return m===18?ZO:m===17?ES:m===16?JO:m===15?Yy:m===14?vS:m===13?yS:m===12?XO:m===11?_S:void ce(60245)})(this.Ni);let c;return this.Ui.runTransaction(e,a,l,(f=>(c=new B_(f,this.ci?this.ci.next():Vn.ce),t==="readwrite-primary"?this.Hi(c).next((m=>!!m||this.Yi(c))).next((m=>{if(!m)throw Dt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new Z(H.FAILED_PRECONDITION,oS);return n(c)})).next((m=>this.Xi(c).next((()=>m)))):this.Is(c).next((()=>n(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Is(e){return Rc(e).get(ul).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,p_)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z(H.FAILED_PRECONDITION,g_)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Rc(e).put(ul,t)}static v(){return Wr.v()}Zi(e){const t=Rc(e);return t.get(ul).next((n=>this.es(n)?(te(ws,"Releasing primary lease."),t.delete(ul)):B.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Dt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Vb()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return te(ws,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Dt(ws,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Dt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Rc(i){return Gt(i,xh)}function Tf(i){return Gt(i,Ml)}function fv(i,e){let t=i.projectId;return i.isDefaultDatabase||(t+="."+i.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class mv{constructor(e,t,n,a){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=a}static As(e,t){let n=Ce(),a=Ce();for(const l of t.docChanges)switch(l.type){case 0:n=n.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new mv(e,t.fromCache,n,a)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Vb()?8:uS(_t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,n).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new mM;return this.Ss(e,t,c).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,c,f.size)}))})).next((()=>l.result))}bs(e,t,n,a){return n.documentReadCount<this.fs?(pl()<=ke.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",gl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(pl()<=ke.DEBUG&&te("QueryEngine","Query:",gl(t),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.gs*a?(pl()<=ke.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",gl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(t))):B.resolve())}ys(e,t){if(wI(t))return B.resolve(null);let n=Rn(t);return this.indexManager.getIndexType(e,n).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Zf(t,null,"F"),n=Rn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((l=>{const c=Ce(...l);return this.ps.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,n).next((m=>{const g=this.Ds(t,f);return this.Cs(t,g,c,m.readTime)?this.ys(e,Zf(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ws(e,t,n,a){return wI(t)||a.isEqual(ge.min())?B.resolve(null):this.ps.getDocuments(e,n).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,n,a)?B.resolve(null):(pl()<=ke.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),gl(t)),this.vs(e,c,t,sS(a,Pl)).next((f=>f)))}))}Ds(e,t){let n=new Ze(qS(e));return t.forEach(((a,l)=>{Oh(e,l)&&(n=n.add(l))})),n}Cs(e,t,n,a){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,n){return pl()<=ke.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",gl(t)),this.ps.getDocumentsMatchingQuery(e,t,$n.min(),n)}vs(e,t,n,a){return this.ps.getDocumentsMatchingQuery(e,n,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const pv="LocalStore",pM=3e8;class gM{constructor(e,t,n,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new lt(Re),this.xs=new qi((l=>to(l)),Ph),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function xR(i,e,t,n){return new gM(i,e,t,n)}async function PR(i,e){const t=le(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let a;return t.mutationQueue.getAllMutationBatches(n).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((l=>{const c=[],f=[];let m=Ce();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){f.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(n,m).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function _M(i,e){const t=le(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,m,g,y){const T=g.batch,I=T.keys();let O=B.resolve();return I.forEach((G=>{O=O.next((()=>y.getEntry(m,G))).next((W=>{const Q=g.docVersions.get(G);pe(Q!==null,48541),W.version.compareTo(Q)<0&&(T.applyToRemoteDocument(W,g),W.isValidDocument()&&(W.setReadTime(g.commitVersion),y.addEntry(W)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,n,e,l).next((()=>l.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(f){let m=Ce();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(n,a)))}))}function VR(i){const e=le(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function yM(i,e){const t=le(i),n=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((y,T)=>{const I=a.get(T);if(!I)return;f.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let O=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(It.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,n)),a=a.insert(T,O),(function(W,Q,de){return W.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=pM?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(I,O,y)&&f.push(t.Pi.updateTargetData(l,O))}));let m=kn(),g=Ce();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),f.push(OR(l,c,e.documentUpdates).next((y=>{m=y.ks,g=y.qs}))),!n.isEqual(ge.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,n)));f.push(y)}return B.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Ms=a,l)))}function OR(i,e,t){let n=Ce(),a=Ce();return t.forEach((l=>n=n.add(l))),e.getEntries(i,n).next((l=>{let c=kn();return t.forEach(((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ge.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):te(pv,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)})),{ks:c,qs:a}}))}function vM(i,e){const t=le(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=xs),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function jl(i,e){const t=le(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let a;return t.Pi.getTargetData(n,e).next((l=>l?(a=l,B.resolve(a)):t.Pi.allocateTargetId(n).next((c=>(a=new Pi(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,a).next((()=>a)))))))})).then((n=>{const a=t.Ms.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function Hl(i,e,t){const n=le(i),a=n.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",l,(c=>n.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Ys(c))throw c;te(pv,`Failed to update sequence numbers for target ${e}: ${c}`)}n.Ms=n.Ms.remove(e),n.xs.delete(a.target)}function im(i,e,t){const n=le(i);let a=ge.min(),l=Ce();return n.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,y){const T=le(m),I=T.xs.get(y);return I!==void 0?B.resolve(T.Ms.get(I)):T.Pi.getTargetData(g,y)})(n,c,Rn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>n.Fs.getDocumentsMatchingQuery(c,e,t?a:ge.min(),t?l:Ce()))).next((f=>(LR(n,zS(e),f),{documents:f,Qs:l})))))}function kR(i,e){const t=le(i),n=le(t.Pi),a=t.Ms.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>n.At(l,e).next((c=>c?c.target:null))))}function MR(i,e){const t=le(i),n=t.Os.get(e)||ge.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.Ns.getAllFromCollectionGroup(a,e,sS(n,Pl),Number.MAX_SAFE_INTEGER))).then((a=>(LR(t,e,a),a)))}function LR(i,e,t){let n=i.Os.get(e)||ge.min();t.forEach(((a,l)=>{l.readTime.compareTo(n)>0&&(n=l.readTime)})),i.Os.set(e,n)}async function EM(i,e,t,n){const a=le(i);let l=Ce(),c=kn();for(const g of t){const y=e.$s(g.metadata.name);g.document&&(l=l.add(y));const T=e.Us(g);T.setReadTime(e.Ks(g.metadata.readTime)),c=c.insert(y,T)}const f=a.Ns.newChangeBuffer({trackRemovals:!0}),m=await jl(a,(function(y){return Rn(nu(Me.fromString(`__bundle__/docs/${y}`)))})(n));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>OR(g,f,c).next((y=>(f.apply(g),y))).next((y=>a.Pi.removeMatchingKeysForTargetId(g,m.targetId).next((()=>a.Pi.addMatchingKeys(g,l,m.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,y.ks,y.qs))).next((()=>y.ks))))))}async function TM(i,e,t=Ce()){const n=await jl(i,Rn(ov(e.bundledQuery))),a=le(i);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Nt(e.readTime);if(n.snapshotVersion.compareTo(c)>=0)return a.Ii.saveNamedQuery(l,e);const f=n.withResumeToken(It.EMPTY_BYTE_STRING,c);return a.Ms=a.Ms.insert(f.targetId,f),a.Pi.updateTargetData(l,f).next((()=>a.Pi.removeMatchingKeysForTargetId(l,n.targetId))).next((()=>a.Pi.addMatchingKeys(l,t,n.targetId))).next((()=>a.Ii.saveNamedQuery(l,e)))}))}/**
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
 */const UR="firestore_clients";function ZI(i,e){return`${UR}_${i}_${e}`}const BR="firestore_mutations";function eb(i,e,t){let n=`${BR}_${i}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const zR="firestore_targets";function __(i,e){return`${zR}_${i}_${e}`}/**
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
 */const Fr="SharedClientState";class sm{constructor(e,t,n,a){this.user=e,this.batchId=t,this.state=n,this.error=a}static Ws(e,t,n){const a=JSON.parse(n);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new Z(a.error.code,a.error.message))),c?new sm(e,t,a.state,l):(Dt(Fr,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $c{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let a,l=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return l&&n.error&&(l=typeof n.error.message=="string"&&typeof n.error.code=="string",l&&(a=new Z(n.error.code,n.error.message))),l?new $c(e,n.state,a):(Dt(Fr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class am{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let a=typeof n=="object"&&n.activeTargetIds instanceof Array,l=Zy();for(let c=0;a&&c<n.activeTargetIds.length;++c)a=cS(n.activeTargetIds[c]),l=l.add(n.activeTargetIds[c]);return a?new am(e,l):(Dt(Fr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class gv{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new gv(t.clientId,t.onlineState):(Dt(Fr,`Failed to parse online state: ${e}`),null)}}class ey{constructor(){this.activeTargetIds=Zy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y_{constructor(e,t,n,a,l){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new lt(Re),this.started=!1,this.Xs=[];const c=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.eo=ZI(this.persistenceKey,this.Js),this.no=(function(m){return`firestore_sequence_number_${m}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new ey),this.ro=new RegExp(`^${UR}_${c}_([^_]*)$`),this.io=new RegExp(`^${BR}_${c}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${zR}_${c}_(\\d+)$`),this.oo=(function(m){return`firestore_online_state_${m}`})(this.persistenceKey),this._o=(function(m){return`firestore_bundle_loaded_v2_${m}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const a=this.getItem(ZI(this.persistenceKey,n));if(a){const l=am.Ws(n,a);l&&(this.Zs=this.Zs.insert(l.clientId,l))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(__(this.persistenceKey,e));if(a){const l=$c.Ws(e,a);l&&(n=l.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(__(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((a=>{this.Po(a)})),this.currentUser=e,n.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return te(Fr,"READ",e,t),t}setItem(e,t){te(Fr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){te(Fr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(te(Fr,"EVENT",t.key,t.newValue),t.key===this.eo)return void Dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(l){let c=Vn.ce;if(l!=null)try{const f=JSON.parse(l);pe(typeof f=="number",30636,{So:l}),c=f}catch(f){Dt(Fr,"Failed to read sequence number from WebStorage",f)}return c})(t.newValue);n!==Vn.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((a=>this.syncEngine.Do(a))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const a=new sm(this.currentUser,e,t,n),l=eb(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Gs())}Po(e){const t=eb(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const a=__(this.persistenceKey,e),l=new $c(e,t,n);this.setItem(a,l.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return am.Ws(n,t)}fo(e,t){const n=this.io.exec(e),a=Number(n[1]),l=n[2]!==void 0?n[2]:null;return sm.Ws(new Zt(l),a,t)}yo(e,t){const n=this.so.exec(e),a=Number(n[1]);return $c.Ws(a,t)}uo(e){return gv.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);te(Fr,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),a=this.lo(this.Zs),l=this.lo(n),c=[],f=[];return l.forEach((m=>{a.has(m)||c.push(m)})),a.forEach((m=>{l.has(m)||f.push(m)})),this.syncEngine.Fo(c,f).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Zy();return e.forEach(((n,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class qR{constructor(){this.Mo=new ey,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ey,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wM{Oo(e){}shutdown(){}}/**
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
 */const tb="ConnectivityMonitor";class nb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(tb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(tb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let wf=null;function ty(){return wf===null?wf=(function(){return 268435456+Math.round(2147483648*Math.random())})():wf++,"0x"+wf.toString(16)}/**
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
 */const v_="RestConnection",IM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${a}`,this.Wo=this.databaseId.database===z_?`project_id=${n}`:`project_id=${n}&database_id=${a}`}Go(e,t,n,a,l){const c=ty(),f=this.zo(e,t.toUriEncodedString());te(v_,`Sending RPC '${e}' ${c}:`,f,n);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,a,l);const{host:g}=new URL(f),y=Wl(g);return this.Jo(e,f,m,n,y).then((T=>(te(v_,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ni(v_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",n),T}))}Ho(e,t,n,a,l,c){return this.Go(e,t,n,a,l)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+tu})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),n&&n.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const n=IM[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class AM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const pn="WebChannelConnection";class SM extends bM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,a,l){const c=ty();return new Promise(((f,m)=>{const g=new YA;g.setWithCredentials(!0),g.listenOnce($A.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Rf.NO_ERROR:const T=g.getResponseJson();te(pn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Rf.TIMEOUT:te(pn,`RPC '${e}' ${c} timed out`),m(new Z(H.DEADLINE_EXCEEDED,"Request time out"));break;case Rf.HTTP_ERROR:const I=g.getStatus();if(te(pn,`RPC '${e}' ${c} failed with status:`,I,"response text:",g.getResponseText()),I>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const G=O==null?void 0:O.error;if(G&&G.status&&G.message){const W=(function(de){const he=de.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(he)>=0?he:H.UNKNOWN})(G.status);m(new Z(W,G.message))}else m(new Z(H.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Z(H.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{te(pn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);te(pn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,n,15)}))}T_(e,t,n){const a=ty(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=JA(),f=XA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,n),m.encodeInitMessageHeaders=!0;const y=l.join("");te(pn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);this.I_(T);let I=!1,O=!1;const G=new AM({Yo:Q=>{O?te(pn,`Not sending because RPC '${e}' stream ${a} is closed:`,Q):(I||(te(pn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),I=!0),te(pn,`RPC '${e}' stream ${a} sending:`,Q),T.send(Q))},Zo:()=>T.close()}),W=(Q,de,he)=>{Q.listen(de,(ae=>{try{he(ae)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return W(T,xc.EventType.OPEN,(()=>{O||(te(pn,`RPC '${e}' stream ${a} transport opened.`),G.o_())})),W(T,xc.EventType.CLOSE,(()=>{O||(O=!0,te(pn,`RPC '${e}' stream ${a} transport closed`),G.a_(),this.E_(T))})),W(T,xc.EventType.ERROR,(Q=>{O||(O=!0,ni(pn,`RPC '${e}' stream ${a} transport errored. Name:`,Q.name,"Message:",Q.message),G.a_(new Z(H.UNAVAILABLE,"The operation could not be completed")))})),W(T,xc.EventType.MESSAGE,(Q=>{var de;if(!O){const he=Q.data[0];pe(!!he,16349);const ae=he,Ie=(ae==null?void 0:ae.error)||((de=ae[0])==null?void 0:de.error);if(Ie){te(pn,`RPC '${e}' stream ${a} received error:`,Ie);const me=Ie.status;let Te=(function(A){const D=Mt[A];if(D!==void 0)return eR(D)})(me),N=Ie.message;Te===void 0&&(Te=H.INTERNAL,N="Unknown error status: "+me+" with message "+Ie.message),O=!0,G.a_(new Z(Te,N)),T.close()}else te(pn,`RPC '${e}' stream ${a} received:`,he),G.u_(he)}})),W(f,WA.STAT_EVENT,(Q=>{Q.stat===V_.PROXY?te(pn,`RPC '${e}' stream ${a} detected buffering proxy`):Q.stat===V_.NOPROXY&&te(pn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{G.__()}),0),G}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 *//**
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
 */function FR(){return typeof window<"u"?window:null}function Lf(){return typeof document<"u"?document:null}/**
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
 */function Uh(i){return new xk(i,!0)}/**
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
 */class _v{constructor(e,t,n=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-n);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const rb="PersistentStream";class jR{constructor(e,t,n,a,l,c,f,m){this.Mi=e,this.S_=n,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,a])=>{this.D_===t&&this.G_(n,a)}),(n=>{e((()=>{const a=new Z(H.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(a)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{n((()=>this.z_(a)))})),this.stream.onMessage((a=>{n((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(rb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(rb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RM extends jR{constructor(e,t,n,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Ok(this.serializer,e),n=(function(l){if(!("targetChange"in l))return ge.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ge.min():c.readTime?Nt(c.readTime):ge.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=$_(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=Xf(m)?{documents:cR(l,m)}:{query:hR(l,m).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=iR(l,c.resumeToken);const g=Q_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ge.min())>0){f.readTime=Fl(l,c.snapshotVersion.toTimestamp());const g=Q_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const n=Mk(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=$_(this.serializer),t.removeTarget=e,this.q_(t)}}class CM extends jR{constructor(e,t,n,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kk(e.writeResults,e.commitTime),n=Nt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=$_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ph(this.serializer,n)))};this.q_(t)}}/**
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
 */class DM{}class NM extends DM{constructor(e,t,n,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new Z(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Y_(t,n),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Z(H.UNKNOWN,l.toString())}))}Ho(e,t,n,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Ho(e,Y_(t,n),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Z(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class xM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const oo="RemoteStore";class PM{constructor(e,t,n,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{n.enqueueAndForget((async()=>{Ws(this)&&(te(oo,"Restarting streams for network reachability change."),await(async function(m){const g=le(m);g.Ea.add(4),await su(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Bh(g)})(this))}))})),this.Ra=new xM(n,a)}}async function Bh(i){if(Ws(i))for(const e of i.da)await e(!0)}async function su(i){for(const e of i.da)await e(!1)}function Mm(i,e){const t=le(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ev(t)?vv(t):ou(t).O_()&&yv(t,e))}function Gl(i,e){const t=le(i),n=ou(t);t.Ia.delete(e),n.O_()&&HR(t,e),t.Ia.size===0&&(n.O_()?n.L_():Ws(t)&&t.Ra.set("Unknown"))}function yv(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ou(i).Y_(e)}function HR(i,e){i.Va.Ue(e),ou(i).Z_(e)}function vv(i){i.Va=new Rk({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ou(i).start(),i.Ra.ua()}function Ev(i){return Ws(i)&&!ou(i).x_()&&i.Ia.size>0}function Ws(i){return le(i).Ea.size===0}function GR(i){i.Va=void 0}async function VM(i){i.Ra.set("Online")}async function OM(i){i.Ia.forEach(((e,t)=>{yv(i,e)}))}async function kM(i,e){GR(i),Ev(i)?(i.Ra.ha(e),vv(i)):i.Ra.set("Unknown")}async function MM(i,e,t){if(i.Ra.set("Online"),e instanceof rR&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ia.delete(f),a.Va.removeTarget(f))})(i,e)}catch(n){te(oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await om(i,n)}else if(e instanceof kf?i.Va.Ze(e):e instanceof nR?i.Va.st(e):i.Va.tt(e),!t.isEqual(ge.min()))try{const n=await VR(i.localStore);t.compareTo(n)>=0&&await(function(l,c){const f=l.Va.Tt(c);return f.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,g)=>{const y=l.Ia.get(m);if(!y)return;l.Ia.set(m,y.withResumeToken(It.EMPTY_BYTE_STRING,y.snapshotVersion)),HR(l,m);const T=new Pi(y.target,m,g,y.sequenceNumber);yv(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(i,t)}catch(n){te(oo,"Failed to raise snapshot:",n),await om(i,n)}}async function om(i,e,t){if(!Ys(e))throw e;i.Ea.add(1),await su(i),i.Ra.set("Offline"),t||(t=()=>VR(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(oo,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Bh(i)}))}function KR(i,e){return e().catch((t=>om(i,t,e)))}async function au(i){const e=le(i),t=Fs(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xs;for(;LM(e);)try{const a=await vM(e.localStore,n);if(a===null){e.Ta.length===0&&t.L_();break}n=a.batchId,UM(e,a)}catch(a){await om(e,a)}QR(e)&&YR(e)}function LM(i){return Ws(i)&&i.Ta.length<10}function UM(i,e){i.Ta.push(e);const t=Fs(i);t.O_()&&t.X_&&t.ea(e.mutations)}function QR(i){return Ws(i)&&!Fs(i).x_()&&i.Ta.length>0}function YR(i){Fs(i).start()}async function BM(i){Fs(i).ra()}async function zM(i){const e=Fs(i);for(const t of i.Ta)e.ea(t.mutations)}async function qM(i,e,t){const n=i.Ta.shift(),a=rv.from(n,e,t);await KR(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await au(i)}async function FM(i,e){e&&Fs(i).X_&&await(async function(n,a){if((function(c){return ZS(c)&&c!==H.ABORTED})(a.code)){const l=n.Ta.shift();Fs(n).B_(),await KR(n,(()=>n.remoteSyncer.rejectFailedWrite(l.batchId,a))),await au(n)}})(i,e),QR(i)&&YR(i)}async function ib(i,e){const t=le(i);t.asyncQueue.verifyOperationInProgress(),te(oo,"RemoteStore received new credentials");const n=Ws(t);t.Ea.add(3),await su(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bh(t)}async function ny(i,e){const t=le(i);e?(t.Ea.delete(2),await Bh(t)):e||(t.Ea.add(2),await su(t),t.Ra.set("Unknown"))}function ou(i){return i.ma||(i.ma=(function(t,n,a){const l=le(t);return l.sa(),new RM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:VM.bind(null,i),t_:OM.bind(null,i),r_:kM.bind(null,i),H_:MM.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Ev(i)?vv(i):i.Ra.set("Unknown")):(await i.ma.stop(),GR(i))}))),i.ma}function Fs(i){return i.fa||(i.fa=(function(t,n,a){const l=le(t);return l.sa(),new CM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:BM.bind(null,i),r_:FM.bind(null,i),ta:zM.bind(null,i),na:qM.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await au(i)):(await i.fa.stop(),i.Ta.length>0&&(te(oo,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class Tv{constructor(e,t,n,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=a,this.removalCallback=l,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,a,l){const c=Date.now()+n,f=new Tv(e,t,c,a,l);return f.start(n),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(i,e){if(Dt("AsyncQueue",`${e}: ${i}`),Ys(i))return new Z(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Sl{static emptySet(e){return new Sl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(t,n)=>se.comparator(t.key,n.key),this.keyedMap=Pc(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Sl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class sb{constructor(){this.ga=new lt(se.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Kl{constructor(e,t,n,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,n,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Kl(e,t,Sl.emptySet(t),c,n,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==n[a].type||!t[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
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
 */class jM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class HM{constructor(){this.queries=ab(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const a=le(t),l=a.queries;a.queries=ab(),l.forEach(((c,f)=>{for(const m of f.Sa)m.onError(n)}))})(this,new Z(H.ABORTED,"Firestore shutting down"))}}function ab(){return new qi((i=>BS(i)),Vh)}async function wv(i,e){const t=le(i);let n=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(n=2):(l=new jM,n=e.Da()?0:1);try{switch(n){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=lu(c,`Initialization of query '${gl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&bv(t)}async function Iv(i,e){const t=le(i),n=e.query;let a=3;const l=t.queries.get(n);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function GM(i,e){const t=le(i);let n=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(a)&&(n=!0);c.wa=a}}n&&bv(t)}function KM(i,e,t){const n=le(i),a=n.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);n.queries.delete(e)}function bv(i){i.Ca.forEach((e=>{e.next()}))}var ry,ob;(ob=ry||(ry={})).Ma="default",ob.Cache="cache";class Av{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new Kl(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ry.Cache}}/**
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
 */class QM{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class lb{constructor(e){this.serializer=e}$s(e){return Xr(this.serializer,e)}Us(e){return e.metadata.exists?uR(this.serializer,e.document,!1):ut.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Nt(e)}}class YM{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=$R(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=Me.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new lb(this.serializer);for(const a of e)if(a.metadata.queries){const l=n.$s(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ce()).add(l);t.set(c,f)}}return t}async ja(e){const t=await EM(e,new lb(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const a of this.Ka)await TM(e,a,n.get(a.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function $R(i){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}}/**
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
 */class WR{constructor(e){this.key=e}}class XR{constructor(e){this.key=e}}class JR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=qS(e),this.tu=new Sl(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new sb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const I=a.get(y),O=Oh(this.query,T)?T:null,G=!!I&&this.mutatedKeys.has(I.key),W=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let Q=!1;I&&O?I.data.isEqual(O.data)?G!==W&&(n.track({type:3,doc:O}),Q=!0):this.su(I,O)||(n.track({type:2,doc:O}),Q=!0,(m&&this.eu(O,m)>0||g&&this.eu(O,g)<0)&&(f=!0)):!I&&O?(n.track({type:0,doc:O}),Q=!0):I&&!O&&(n.track({type:1,doc:I}),Q=!0,(m||g)&&(f=!0)),Q&&(O?(c=c.add(O),l=W?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),n.track({type:1,doc:y})}return{tu:c,iu:n,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(O,G){const W=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:Q})}};return W(O)-W(G)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(n),a=a??!1;const f=t&&!a?this._u():[],m=this.Xa.size===0&&this.current&&!a?1:0,g=m!==this.Za;return this.Za=m,c.length!==0||g?{snapshot:new Kl(this.query,e.tu,l,c,e.mutatedKeys,m===0,g,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new XR(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new WR(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xs="SyncEngine";class $M{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class WM{constructor(e){this.key=e,this.hu=!1}}class XM{constructor(e,t,n,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new qi((f=>BS(f)),Vh),this.Iu=new Map,this.Eu=new Set,this.du=new lt(se.comparator),this.Au=new Map,this.Ru=new cv,this.Vu={},this.mu=new Map,this.fu=ao.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JM(i,e,t=!0){const n=Lm(i);let a;const l=n.Tu.get(e);return l?(n.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await ZR(n,e,t,!0),a}async function ZM(i,e){const t=Lm(i);await ZR(t,e,!0,!1)}async function ZR(i,e,t,n){const a=await jl(i.localStore,Rn(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let f;return n&&(f=await Sv(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&Mm(i.remoteStore,a),f}async function Sv(i,e,t,n,a){i.pu=(T,I,O)=>(async function(W,Q,de,he){let ae=Q.view.ru(de);ae.Cs&&(ae=await im(W.localStore,Q.query,!1).then((({documents:N})=>Q.view.ru(N,ae))));const Ie=he&&he.targetChanges.get(Q.targetId),me=he&&he.targetMismatches.get(Q.targetId)!=null,Te=Q.view.applyChanges(ae,W.isPrimaryClient,Ie,me);return iy(W,Q.targetId,Te.au),Te.snapshot})(i,T,I,O);const l=await im(i.localStore,e,!0),c=new JR(e,l.Qs),f=c.ru(l.documents),m=Lh.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",a),g=c.applyChanges(f,i.isPrimaryClient,m);iy(i,t,g.au);const y=new $M(e,t,c);return i.Tu.set(e,y),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),g.snapshot}async function e4(i,e,t){const n=le(i),a=n.Tu.get(e),l=n.Iu.get(a.targetId);if(l.length>1)return n.Iu.set(a.targetId,l.filter((c=>!Vh(c,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Hl(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),t&&Gl(n.remoteStore,a.targetId),Ql(n,a.targetId)})).catch(Qs)):(Ql(n,a.targetId),await Hl(n.localStore,a.targetId,!0))}async function t4(i,e){const t=le(i),n=t.Tu.get(e),a=t.Iu.get(n.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Gl(t.remoteStore,n.targetId))}async function n4(i,e,t){const n=Nv(i);try{const a=await(function(c,f){const m=le(c),g=Ye.now(),y=f.reduce(((O,G)=>O.add(G.key)),Ce());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let G=kn(),W=Ce();return m.Ns.getEntries(O,y).next((Q=>{G=Q,G.forEach(((de,he)=>{he.isValidDocument()||(W=W.add(de))}))})).next((()=>m.localDocuments.getOverlayedDocuments(O,G))).next((Q=>{T=Q;const de=[];for(const he of f){const ae=bk(he,T.get(he.key).overlayedDocument);ae!=null&&de.push(new Fi(he.key,ae,NS(ae.value.mapValue),pt.exists(!0)))}return m.mutationQueue.addMutationBatch(O,g,de,f)})).next((Q=>{I=Q;const de=Q.applyToLocalDocumentSet(T,W);return m.documentOverlayCache.saveOverlays(O,Q.batchId,de)}))})).then((()=>({batchId:I.batchId,changes:jS(T)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),(function(c,f,m){let g=c.Vu[c.currentUser.toKey()];g||(g=new lt(Re)),g=g.insert(f,m),c.Vu[c.currentUser.toKey()]=g})(n,a.batchId,t),await ji(n,a.changes),await au(n.remoteStore)}catch(a){const l=lu(a,"Failed to persist write");t.reject(l)}}async function e1(i,e){const t=le(i);try{const n=await yM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(pe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?pe(c.hu,14607):a.removedDocuments.size>0&&(pe(c.hu,42227),c.hu=!1))})),await ji(t,n,e)}catch(n){await Qs(n)}}function ub(i,e,t){const n=le(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const a=[];n.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const m=le(c);m.onlineState=f;let g=!1;m.queries.forEach(((y,T)=>{for(const I of T.Sa)I.va(f)&&(g=!0)})),g&&bv(m)})(n.eventManager,e),a.length&&n.Pu.H_(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function r4(i,e,t){const n=le(i);n.sharedClientState.updateQueryState(e,"rejected",t);const a=n.Au.get(e),l=a&&a.key;if(l){let c=new lt(se.comparator);c=c.insert(l,ut.newNoDocument(l,ge.min()));const f=Ce().add(l),m=new Mh(ge.min(),new Map,new lt(Re),c,f);await e1(n,m),n.du=n.du.remove(l),n.Au.delete(e),Dv(n)}else await Hl(n.localStore,e,!1).then((()=>Ql(n,e,t))).catch(Qs)}async function i4(i,e){const t=le(i),n=e.batch.batchId;try{const a=await _M(t.localStore,e);Cv(t,n,null),Rv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ji(t,a)}catch(a){await Qs(a)}}async function s4(i,e,t){const n=le(i);try{const a=await(function(c,f){const m=le(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return m.mutationQueue.lookupMutationBatch(g,f).next((T=>(pe(T!==null,37113),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>m.localDocuments.getDocuments(g,y)))}))})(n.localStore,e);Cv(n,e,t),Rv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ji(n,a)}catch(a){await Qs(a)}}async function a4(i,e){const t=le(i);Ws(t.remoteStore)||te(Xs,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(c){const f=le(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(m=>f.mutationQueue.getHighestUnacknowledgedBatchId(m)))})(t.localStore);if(n===xs)return void e.resolve();const a=t.mu.get(n)||[];a.push(e),t.mu.set(n,a)}catch(n){const a=lu(n,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function Rv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Cv(i,e,t){const n=le(i);let a=n.Vu[n.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),n.Vu[n.currentUser.toKey()]=a}}function Ql(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Iu.get(e))i.Tu.delete(n),t&&i.Pu.yu(n,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((n=>{i.Ru.containsKey(n)||t1(i,n)}))}function t1(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Gl(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Dv(i))}function iy(i,e,t){for(const n of t)n instanceof WR?(i.Ru.addReference(n.key,e),o4(i,n)):n instanceof XR?(te(Xs,"Document no longer in limbo: "+n.key),i.Ru.removeReference(n.key,e),i.Ru.containsKey(n.key)||t1(i,n.key)):ce(19791,{wu:n})}function o4(i,e){const t=e.key,n=t.path.canonicalString();i.du.get(t)||i.Eu.has(n)||(te(Xs,"New document in limbo: "+t),i.Eu.add(n),Dv(i))}function Dv(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new se(Me.fromString(e)),n=i.fu.next();i.Au.set(n,new WM(t)),i.du=i.du.insert(t,n),Mm(i.remoteStore,new Pi(Rn(nu(t.path)),n,"TargetPurposeLimboResolution",Vn.ce))}}async function ji(i,e,t){const n=le(i),a=[],l=[],c=[];n.Tu.isEmpty()||(n.Tu.forEach(((f,m)=>{c.push(n.pu(m,e,t).then((g=>{var y;if((g||t)&&n.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:y.current;n.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=mv.As(m.targetId,g);l.push(T)}})))})),await Promise.all(c),n.Pu.H_(a),await(async function(m,g){const y=le(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>B.forEach(g,(I=>B.forEach(I.Es,(O=>y.persistence.referenceDelegate.addReference(T,I.targetId,O))).next((()=>B.forEach(I.ds,(O=>y.persistence.referenceDelegate.removeReference(T,I.targetId,O)))))))))}catch(T){if(!Ys(T))throw T;te(pv,"Failed to update sequence numbers: "+T)}for(const T of g){const I=T.targetId;if(!T.fromCache){const O=y.Ms.get(I),G=O.snapshotVersion,W=O.withLastLimboFreeSnapshotVersion(G);y.Ms=y.Ms.insert(I,W)}}})(n.localStore,l))}async function l4(i,e){const t=le(i);if(!t.currentUser.isEqual(e)){te(Xs,"User change. New user:",e.toKey());const n=await PR(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((m=>{m.reject(new Z(H.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ji(t,n.Ls)}}function u4(i,e){const t=le(i),n=t.Au.get(e);if(n&&n.hu)return Ce().add(n.key);{let a=Ce();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const f=t.Tu.get(c);a=a.unionWith(f.view.nu)}return a}}async function c4(i,e){const t=le(i),n=await im(t.localStore,e.query,!0),a=e.view.cu(n);return t.isPrimaryClient&&iy(t,e.targetId,a.au),a}async function h4(i,e){const t=le(i);return MR(t.localStore,e).then((n=>ji(t,n)))}async function d4(i,e,t,n){const a=le(i),l=await(function(f,m){const g=le(f),y=le(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>y.er(T,m).next((I=>I?g.localDocuments.getDocuments(T,I):B.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await au(a.remoteStore):t==="acknowledged"||t==="rejected"?(Cv(a,e,n||null),Rv(a,e),(function(f,m){le(le(f).mutationQueue).ir(m)})(a.localStore,e)):ce(6720,"Unknown batchState",{Su:t}),await ji(a,l)):te(Xs,"Cannot apply mutation batch with id: "+e)}async function f4(i,e){const t=le(i);if(Lm(t),Nv(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),a=await cb(t,n.toArray());t.gu=!0,await ny(t.remoteStore,!0);for(const l of a)Mm(t.remoteStore,l)}else if(e===!1&&t.gu!==!1){const n=[];let a=Promise.resolve();t.Iu.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?n.push(c):a=a.then((()=>(Ql(t,c),Hl(t.localStore,c,!0)))),Gl(t.remoteStore,c)})),await a,await cb(t,n),(function(c){const f=le(c);f.Au.forEach(((m,g)=>{Gl(f.remoteStore,g)})),f.Ru.Jr(),f.Au=new Map,f.du=new lt(se.comparator)})(t),t.gu=!1,await ny(t.remoteStore,!1)}}async function cb(i,e,t){const n=le(i),a=[],l=[];for(const c of e){let f;const m=n.Iu.get(c);if(m&&m.length!==0){f=await jl(n.localStore,Rn(m[0]));for(const g of m){const y=n.Tu.get(g),T=await c4(n,y);T.snapshot&&l.push(T.snapshot)}}else{const g=await kR(n.localStore,c);f=await jl(n.localStore,g),await Sv(n,n1(g),c,!1,f.resumeToken)}a.push(f)}return n.Pu.H_(l),a}function n1(i){return US(i.path,i.collectionGroup,i.orderBy,i.filters,i.limit,"F",i.startAt,i.endAt)}function m4(i){return(function(t){return le(le(t).persistence).Ts()})(le(i).localStore)}async function p4(i,e,t,n){const a=le(i);if(a.gu)return void te(Xs,"Ignoring unexpected query state notification.");const l=a.Iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await MR(a.localStore,zS(l[0])),f=Mh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",It.EMPTY_BYTE_STRING);await ji(a,c,f);break}case"rejected":await Hl(a.localStore,e,!0),Ql(a,e,n);break;default:ce(64155,t)}}async function g4(i,e,t){const n=Lm(i);if(n.gu){for(const a of e){if(n.Iu.has(a)&&n.sharedClientState.isActiveQueryTarget(a)){te(Xs,"Adding an already active target "+a);continue}const l=await kR(n.localStore,a),c=await jl(n.localStore,l);await Sv(n,n1(l),c.targetId,!1,c.resumeToken),Mm(n.remoteStore,c)}for(const a of t)n.Iu.has(a)&&await Hl(n.localStore,a,!1).then((()=>{Gl(n.remoteStore,a),Ql(n,a)})).catch(Qs)}}function Lm(i){const e=le(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=e1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r4.bind(null,e),e.Pu.H_=GM.bind(null,e.eventManager),e.Pu.yu=KM.bind(null,e.eventManager),e}function Nv(i){const e=le(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=i4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s4.bind(null,e),e}function _4(i,e,t){const n=le(i);(async function(l,c,f){try{const m=await c.getMetadata();if(await(function(O,G){const W=le(O),Q=Nt(G.createTime);return W.persistence.runTransaction("hasNewerBundle","readonly",(de=>W.Ii.getBundleMetadata(de,G.id))).then((de=>!!de&&de.createTime.compareTo(Q)>=0))})(l.localStore,m))return await c.close(),f._completeWith((function(O){return{taskState:"Success",documentsLoaded:O.totalDocuments,bytesLoaded:O.totalBytes,totalDocuments:O.totalDocuments,totalBytes:O.totalBytes}})(m)),Promise.resolve(new Set);f._updateProgress($R(m));const g=new YM(m,c.serializer);let y=await c.bu();for(;y;){const I=await g.Ga(y);I&&f._updateProgress(I),y=await c.bu()}const T=await g.ja(l.localStore);return await ji(l,T.Ha,void 0),await(function(O,G){const W=le(O);return W.persistence.runTransaction("Save bundle","readwrite",(Q=>W.Ii.saveBundleMetadata(Q,G)))})(l.localStore,m),f._completeWith(T.progress),Promise.resolve(T.Ja)}catch(m){return ni(Xs,`Loading bundle failed with ${m}`),f._failWith(m),Promise.resolve(new Set)}})(n,e,t).then((a=>{n.sharedClientState.notifyBundleLoaded(a)}))}class gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return xR(this.persistence,new NR,e.initialUser,this.serializer)}Cu(e){return new hv(km.mi,this.serializer)}Du(e){return new qR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gh.provider={build:()=>new gh};class y4 extends gh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof rm,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new bR(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new hv((n=>rm.mi(n,t)),this.serializer)}}class r1 extends gh{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Nv(this.xu.syncEngine),await au(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return xR(this.persistence,new NR,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new bR(n,e.asyncQueue,t)}Mu(e,t){const n=new RO(t,this.persistence);return new SO(e.asyncQueue,n)}Cu(e){const t=fv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new dv(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,FR(),Lf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new qR}}class v4 extends r1{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof y_&&(this.sharedClientState.syncEngine={Co:d4.bind(null,t),vo:p4.bind(null,t),Fo:g4.bind(null,t),Ts:m4.bind(null,t),Do:h4.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await f4(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=FR();if(!y_.v(t))throw new Z(H.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=fv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new y_(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class _h{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ub(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=l4.bind(null,this.syncEngine),await ny(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HM})()}createDatastore(e){const t=Uh(e.databaseInfo.databaseId),n=(function(l){return new SM(l)})(e.databaseInfo);return(function(l,c,f,m){return new NM(l,c,f,m)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,a,l,c,f){return new PM(n,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>ub(this.syncEngine,t,0)),(function(){return nb.v()?new nb:new wM})())}createSyncEngine(e,t){return(function(a,l,c,f,m,g,y){const T=new XM(a,l,c,f,m,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=le(a);te(oo,"RemoteStore shutting down."),l.Ea.add(5),await su(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_h.provider={build:()=>new _h};function hb(i,e=10240){let t=0;return{async read(){if(t<i.byteLength){const n={value:i.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Um{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class E4{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new cn,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.$a()?this.metadata.resolve(n.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Qu(`length string (${t}) is not valid number`);const a=await this.$u(n);return new QM(JSON.parse(a),e.length+n)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class T4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=le(a),f={documents:l.map((T=>mh(c.serializer,T)))},m=await c.Ho("BatchGetDocuments",c.serializer.databaseId,Me.emptyPath(),f,l.length),g=new Map;m.forEach((T=>{const I=Vk(c.serializer,T);g.set(I.key.toString(),I)}));const y=[];return l.forEach((T=>{const I=g.get(T.toString());pe(!!I,55234,{key:T}),y.push(I)})),y})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new iu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const a=se.fromPath(n);this.mutations.push(new tv(a,this.precondition(a)))})),await(async function(n,a){const l=le(n),c={writes:a.map((f=>ph(l.serializer,f)))};await l.Go("Commit",l.serializer.databaseId,Me.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ce(50498,{Gu:e.constructor.name});t=ge.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Z(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ge.min())?pt.exists(!1):pt.updateTime(t):pt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ge.min()))throw new Z(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pt.updateTime(t)}return pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class w4{constructor(e,t,n,a,l){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=a,this.deferred=l,this.zu=n.maxAttempts,this.M_=new _v(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new T4(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((a=>{this.Yu(a)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!Nh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ZS(t)}return!1}}/**
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
 */const js="FirestoreClient";class I4{constructor(e,t,n,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=a,this.user=Zt.UNAUTHENTICATED,this.clientId=qy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(n,(async c=>{te(js,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(n,(c=>(te(js,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=lu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function E_(i,e){i.asyncQueue.verifyOperationInProgress(),te(js,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async a=>{n.isEqual(a)||(await PR(e.localStore,a),n=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function db(i,e){i.asyncQueue.verifyOperationInProgress();const t=await xv(i);te(js,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>ib(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,a)=>ib(e.remoteStore,a))),i._onlineComponents=e}async function xv(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(js,"Using user provided OfflineComponentProvider");try{await E_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===H.FAILED_PRECONDITION||a.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ni("Error using user provided cache. Falling back to memory cache: "+t),await E_(i,new gh)}}else te(js,"Using default OfflineComponentProvider"),await E_(i,new y4(void 0));return i._offlineComponents}async function Bm(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(js,"Using user provided OnlineComponentProvider"),await db(i,i._uninitializedComponentsProvider._online)):(te(js,"Using default OnlineComponentProvider"),await db(i,new _h))),i._onlineComponents}function i1(i){return xv(i).then((e=>e.persistence))}function Pv(i){return xv(i).then((e=>e.localStore))}function s1(i){return Bm(i).then((e=>e.remoteStore))}function Vv(i){return Bm(i).then((e=>e.syncEngine))}function b4(i){return Bm(i).then((e=>e.datastore))}async function Yl(i){const e=await Bm(i),t=e.eventManager;return t.onListen=JM.bind(null,e.syncEngine),t.onUnlisten=e4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=t4.bind(null,e.syncEngine),t}function A4(i){return i.asyncQueue.enqueue((async()=>{const e=await i1(i),t=await s1(i);return e.setNetworkEnabled(!0),(function(a){const l=le(a);return l.Ea.delete(0),Bh(l)})(t)}))}function S4(i){return i.asyncQueue.enqueue((async()=>{const e=await i1(i),t=await s1(i);return e.setNetworkEnabled(!1),(async function(a){const l=le(a);l.Ea.add(0),await su(l),l.Ra.set("Offline")})(t)}))}function R4(i,e){const t=new cn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,y){const T=le(g);return T.persistence.runTransaction("read document","readonly",(I=>T.localDocuments.getDocument(I,y)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new Z(H.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const m=lu(f,`Failed to get document '${l} from cache`);c.reject(m)}})(await Pv(i),e,t))),t.promise}function a1(i,e,t={}){const n=new cn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new Um({next:I=>{y.Nu(),c.enqueueAndForget((()=>Iv(l,T)));const O=I.docs.has(f);!O&&I.fromCache?g.reject(new Z(H.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&I.fromCache&&m&&m.source==="server"?g.reject(new Z(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Av(nu(f.path),y,{includeMetadataChanges:!0,qa:!0});return wv(l,T)})(await Yl(i),i.asyncQueue,e,t,n))),n.promise}function C4(i,e){const t=new cn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await im(a,l,!0),m=new JR(l,f.Qs),g=m.ru(f.documents),y=m.applyChanges(g,!1);c.resolve(y.snapshot)}catch(f){const m=lu(f,`Failed to execute query '${l} against cache`);c.reject(m)}})(await Pv(i),e,t))),t.promise}function o1(i,e,t={}){const n=new cn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new Um({next:I=>{y.Nu(),c.enqueueAndForget((()=>Iv(l,T))),I.fromCache&&m.source==="server"?g.reject(new Z(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Av(f,y,{includeMetadataChanges:!0,qa:!0});return wv(l,T)})(await Yl(i),i.asyncQueue,e,t,n))),n.promise}function D4(i,e){const t=new Um(e);return i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.add(l),l.next()})(await Yl(i),t))),()=>{t.Nu(),i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.delete(l)})(await Yl(i),t)))}}function N4(i,e,t,n){const a=(function(c,f){let m;return m=typeof c=="string"?tR().encode(c):c,(function(y,T){return new E4(y,T)})((function(y,T){if(y instanceof Uint8Array)return hb(y,T);if(y instanceof ArrayBuffer)return hb(new Uint8Array(y),T);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(m),f)})(t,Uh(e));i.asyncQueue.enqueueAndForget((async()=>{_4(await Vv(i),a,n)}))}function x4(i,e){return i.asyncQueue.enqueue((async()=>(function(n,a){const l=le(n);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Ii.getNamedQuery(c,a)))})(await Pv(i),e)))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function l1(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const fb=new Map;/**
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
 */const u1="firestore.googleapis.com",mb=!0;class pb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u1,this.ssl=mb}else this.host=e.host,this.ssl=e.ssl??mb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ER;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jk)throw new Z(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l1(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new Z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new Z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new Z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,a){return n.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zh{constructor(e,t,n,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new mO;switch(n.type){case"firstParty":return new yO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=fb.get(t);n&&(te("ComponentProvider","Removing Datastore"),fb.delete(t),n.terminate())})(this),Promise.resolve()}}function P4(i,e,t,n={}){var g;i=He(i,zh);const a=Wl(e),l=i._getSettings(),c={...l,emulatorOptions:i._getEmulatorOptions()},f=`${e}:${t}`;a&&(Cb(`https://${f}`),Db("Firestore",!0)),l.host!==u1&&l.host!==f&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:f,ssl:a,emulatorOptions:n};if(!Vs(m,c)&&(i._setSettings(m),n.mockUserToken)){let y,T;if(typeof n.mockUserToken=="string")y=n.mockUserToken,T=Zt.MOCK_USER;else{y=xD(n.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new Z(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Zt(I)}i._authCredentials=new pO(new eS(y,T))}}/**
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
 */let Cn=class c1{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new c1(this.firestore,e,this._query)}},ot=class kc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kc(this.firestore,e,this._key)}toJSON(){return{type:kc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Dh(t,kc._jsonSchema))return new kc(e,n||null,new se(Me.fromString(t.referencePath)))}};ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:Ut("string",ot._jsonSchemaVersion),referencePath:Ut("string")};let Ps=class h1 extends Cn{constructor(e,t,n){super(e,t,nu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new se(e))}withConverter(e){return new h1(this.firestore,e,this._path)}};function d1(i,e,...t){if(i=Ee(i),Fy("collection","path",e),i instanceof zh){const n=Me.fromString(e,...t);return rI(n),new Ps(i,null,n)}{if(!(i instanceof ot||i instanceof Ps))throw new Z(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return rI(n),new Ps(i.firestore,null,n)}}function V4(i,e){if(i=He(i,zh),Fy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z(H.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cn(i,null,(function(n){return new zi(Me.emptyPath(),n)})(e))}function lm(i,e,...t){if(i=Ee(i),arguments.length===1&&(e=qy.newId()),Fy("doc","path",e),i instanceof zh){const n=Me.fromString(e,...t);return nI(n),new ot(i,null,new se(n))}{if(!(i instanceof ot||i instanceof Ps))throw new Z(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return nI(n),new ot(i.firestore,i instanceof Ps?i.converter:null,new se(n))}}function f1(i,e){return i=Ee(i),e=Ee(e),(i instanceof ot||i instanceof Ps)&&(e instanceof ot||e instanceof Ps)&&i.firestore===e.firestore&&i.path===e.path&&i.converter===e.converter}function m1(i,e){return i=Ee(i),e=Ee(e),i instanceof Cn&&e instanceof Cn&&i.firestore===e.firestore&&Vh(i._query,e._query)&&i.converter===e.converter}/**
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
 */const gb="AsyncQueue";class _b{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const n=Lf();n&&te(gb,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Lf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Lf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new cn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ys(e))throw e;te(gb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",yb(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Tv.createAndSchedule(this,e,t,n,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&ce(47125,{Pc:yb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yb(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function sy(i){return(function(t,n){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of n)if(l in a&&typeof a[l]=="function")return!0;return!1})(i,["next","error","complete"])}class O4{constructor(){this._progressObserver={},this._taskCompletionResolver=new cn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const k4=-1;let xt=class extends zh{constructor(e,t,n,a){super(e,t,n,a),this.type="firestore",this._queue=new _b,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _b(e),this._firestoreClient=void 0,await e}}};function vn(i){if(i._terminated)throw new Z(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||p1(i),i._firestoreClient}function p1(i){var n,a,l;const e=i._freezeSettings(),t=(function(f,m,g,y){return new nk(f,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,l1(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(i._databaseId,((n=i._app)==null?void 0:n.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new I4(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(i._componentsProvider))}function M4(i,e){ni("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=i._freezeSettings();return g1(i,_h.provider,{build:n=>new r1(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function L4(i){ni("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=i._freezeSettings();g1(i,_h.provider,{build:t=>new v4(t,e.cacheSizeBytes)})}function g1(i,e,t){if((i=He(i,xt))._firestoreClient||i._terminated)throw new Z(H.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(i._componentsProvider||i._getSettings().localCache)throw new Z(H.FAILED_PRECONDITION,"SDK cache is already specified.");i._componentsProvider={_online:e,_offline:t},p1(i)}function U4(i){if(i._initialized&&!i._terminated)throw new Z(H.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new cn;return i._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Wr.v())return Promise.resolve();const a=n+DR;await Wr.delete(a)})(fv(i._databaseId,i._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function B4(i){return(function(t){const n=new cn;return t.asyncQueue.enqueueAndForget((async()=>a4(await Vv(t),n))),n.promise})(vn(i=He(i,xt)))}function z4(i){return A4(vn(i=He(i,xt)))}function q4(i){return S4(vn(i=He(i,xt)))}function F4(i,e){const t=vn(i=He(i,xt)),n=new O4;return N4(t,i._databaseId,e,n),n}function j4(i,e){return x4(vn(i=He(i,xt)),e).then((t=>t?new Cn(i,null,t.query):null))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(It.fromBase64String(e))}catch(t){throw new Z(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dh(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:Ut("string",_n._jsonSchemaVersion),bytes:Ut("string")};/**
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
 */let Hs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let ho=class{constructor(e){this._methodName=e}};/**
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
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(Dh(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:Ut("string",Tr._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Jr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,a){if(n.length!==a.length)return!1;for(let l=0;l<n.length;++l)if(n[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dh(e,Jr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jr(e.vectorValues);throw new Z(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jr._jsonSchemaVersion="firestore/vectorValue/1.0",Jr._jsonSchema={type:Ut("string",Jr._jsonSchemaVersion),vectorValues:Ut("object")};/**
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
 */const H4=/^__.*__$/;class G4{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ru(e,this.data,t,this.fieldTransforms)}}class _1{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function y1(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:i})}}class zm{constructor(e,t,n,a,l,c){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new zm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return um(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(y1(this.Ac)&&H4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class K4{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Uh(e)}Cc(e,t,n,a=!1){return new zm({Ac:e,methodName:t,Dc:n,path:mt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fo(i){const e=i._freezeSettings(),t=Uh(i._databaseId);return new K4(i._databaseId,!!e.ignoreUndefinedProperties,t)}function qm(i,e,t,n,a,l={}){const c=i.Cc(l.merge||l.mergeFields?2:0,e,t,a);zv("Data must be an object, but it was:",c,n);const f=T1(n,c);let m,g;if(l.merge)m=new On(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const I=ay(e,T,t);if(!c.contains(I))throw new Z(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);I1(y,I)||y.push(I)}m=new On(y),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new G4(new un(f),m,g)}class qh extends ho{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qh}}function v1(i,e,t){return new zm({Ac:3,Dc:e.settings.Dc,methodName:i._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ov extends ho{_toFieldTransform(e){return new kh(e.path,new zl)}isEqual(e){return e instanceof Ov}}class kv extends ho{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=v1(this,e,!0),n=this.vc.map((l=>mo(l,t))),a=new no(n);return new kh(e.path,a)}isEqual(e){return e instanceof kv&&Vs(this.vc,e.vc)}}class Mv extends ho{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=v1(this,e,!0),n=this.vc.map((l=>mo(l,t))),a=new ro(n);return new kh(e.path,a)}isEqual(e){return e instanceof Mv&&Vs(this.vc,e.vc)}}class Lv extends ho{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new ql(e.serializer,KS(e.serializer,this.Fc));return new kh(e.path,t)}isEqual(e){return e instanceof Lv&&this.Fc===e.Fc}}function Uv(i,e,t,n){const a=i.Cc(1,e,t);zv("Data must be an object, but it was:",a,n);const l=[],c=un.empty();$s(n,((m,g)=>{const y=qv(e,m,t);g=Ee(g);const T=a.yc(y);if(g instanceof qh)l.push(y);else{const I=mo(g,T);I!=null&&(l.push(y),c.set(y,I))}}));const f=new On(l);return new _1(c,f,a.fieldTransforms)}function Bv(i,e,t,n,a,l){const c=i.Cc(1,e,t),f=[ay(e,n,t)],m=[a];if(l.length%2!=0)throw new Z(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(ay(e,l[I])),m.push(l[I+1]);const g=[],y=un.empty();for(let I=f.length-1;I>=0;--I)if(!I1(g,f[I])){const O=f[I];let G=m[I];G=Ee(G);const W=c.yc(O);if(G instanceof qh)g.push(O);else{const Q=mo(G,W);Q!=null&&(g.push(O),y.set(O,Q))}}const T=new On(g);return new _1(y,T,c.fieldTransforms)}function E1(i,e,t,n=!1){return mo(t,i.Cc(n?4:3,e))}function mo(i,e){if(w1(i=Ee(i)))return zv("Unsupported field value:",e,i),T1(i,e);if(i instanceof ho)return(function(n,a){if(!y1(a.Ac))throw a.Sc(`${n._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${n._methodName}() is not currently supported inside arrays`);const l=n._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,a){const l=[];let c=0;for(const f of n){let m=mo(f,a.wc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(i,e)}return(function(n,a){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return KS(a.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const l=Ye.fromDate(n);return{timestampValue:Fl(a.serializer,l)}}if(n instanceof Ye){const l=new Ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fl(a.serializer,l)}}if(n instanceof Tr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _n)return{bytesValue:iR(a.serializer,n._byteString)};if(n instanceof ot){const l=a.databaseId,c=n.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:av(n.firestore._databaseId||a.databaseId,n._key.path)}}if(n instanceof Jr)return(function(c,f){return{mapValue:{fields:{[$y]:{stringValue:Wy},[Ll]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return ev(f.serializer,g)}))}}}}}})(n,a);throw a.Sc(`Unsupported field value: ${Im(n)}`)})(i,e)}function T1(i,e){const t={};return TS(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(i,((n,a)=>{const l=mo(a,e.mc(n));l!=null&&(t[n]=l)})),{mapValue:{fields:t}}}function w1(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof Tr||i instanceof _n||i instanceof ot||i instanceof ho||i instanceof Jr)}function zv(i,e,t){if(!w1(t)||!rS(t)){const n=Im(t);throw n==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+n)}}function ay(i,e,t){if((e=Ee(e))instanceof Hs)return e._internalPath;if(typeof e=="string")return qv(i,e);throw um("Field path arguments must be of type string or ",i,!1,void 0,t)}const Q4=new RegExp("[~\\*/\\[\\]]");function qv(i,e,t){if(e.search(Q4)>=0)throw um(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Hs(...e.split("."))._internalPath}catch{throw um(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function um(i,e,t,n,a){const l=n&&!n.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${n}`),c&&(m+=` in document ${a}`),m+=")"),new Z(H.INVALID_ARGUMENT,f+i+m)}function I1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class yh{constructor(e,t,n,a,l){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Y4 extends yh{data(){return super.data()}}function Fm(i,e){return typeof e=="string"?qv(i,e):e instanceof Hs?e._internalPath:e._delegate._internalPath}/**
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
 */function b1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Z(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fv{}class Fh extends Fv{}function Is(i,e,...t){let n=[];e instanceof Fv&&n.push(e),n=n.concat(t),(function(l){const c=l.filter((m=>m instanceof jv)).length,f=l.filter((m=>m instanceof jm)).length;if(c>1||c>0&&f>0)throw new Z(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const a of n)i=a._apply(i);return i}class jm extends Fh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new jm(e,t,n)}_apply(e){const t=this._parse(e);return S1(e._query,t),new Cn(e.firestore,e.converter,K_(e._query,t))}_parse(e){const t=fo(e.firestore);return(function(l,c,f,m,g,y,T){let I;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Z(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Eb(T,y);const G=[];for(const W of T)G.push(vb(m,l,W));I={arrayValue:{values:G}}}else I=vb(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Eb(T,y),I=E1(f,c,T,y==="in"||y==="not-in");return Le.create(g,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function $4(i,e,t){const n=e,a=Fm("where",i);return jm._create(a,n,t)}class jv extends Fv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jv(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)S1(c,m),c=K_(c,m)})(e._query,t),new Cn(e.firestore,e.converter,K_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hv extends Fh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hv(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new Z(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new Z(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fh(l,c)})(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new zi(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function W4(i,e="asc"){const t=e,n=Fm("orderBy",i);return Hv._create(n,t)}class Hm extends Fh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Hm(e,t,n)}_apply(e){return new Cn(e.firestore,e.converter,Zf(e._query,this._limit,this._limitType))}}function X4(i){return iS("limit",i),Hm._create("limit",i,"F")}function J4(i){return iS("limitToLast",i),Hm._create("limitToLast",i,"L")}class Gm extends Fh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Gm(e,t,n)}_apply(e){const t=A1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new zi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function Z4(...i){return Gm._create("startAt",i,!0)}function eL(...i){return Gm._create("startAfter",i,!1)}class Km extends Fh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Km(e,t,n)}_apply(e){const t=A1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new zi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function tL(...i){return Km._create("endBefore",i,!1)}function nL(...i){return Km._create("endAt",i,!0)}function A1(i,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof yh)return(function(l,c,f,m,g){if(!m)throw new Z(H.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const y=[];for(const T of Al(l))if(T.field.isKeyField())y.push(eo(c,m.key));else{const I=m.data.field(T.field);if(Cm(I))throw new Z(H.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const O=T.field.canonicalString();throw new Z(H.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${O}' (used as the orderBy) does not exist.`)}y.push(I)}return new qs(y,g)})(i._query,i.firestore._databaseId,e,t[0]._document,n);{const a=fo(i.firestore);return(function(c,f,m,g,y,T){const I=c.explicitOrderBy;if(y.length>I.length)throw new Z(H.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const O=[];for(let G=0;G<y.length;G++){const W=y[G];if(I[G].field.isKeyField()){if(typeof W!="string")throw new Z(H.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof W}`);if(!Jy(c)&&W.indexOf("/")!==-1)throw new Z(H.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${W}' contains a slash.`);const Q=c.path.child(Me.fromString(W));if(!se.isDocumentKey(Q))throw new Z(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${Q}' is not because it contains an odd number of segments.`);const de=new se(Q);O.push(eo(f,de))}else{const Q=E1(m,g,W);O.push(Q)}}return new qs(O,T)})(i._query,i.firestore._databaseId,a,e,t,n)}}function vb(i,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new Z(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jy(e)&&t.indexOf("/")!==-1)throw new Z(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Me.fromString(t));if(!se.isDocumentKey(n))throw new Z(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eo(i,new se(n))}if(t instanceof ot)return eo(i,t._key);throw new Z(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Im(t)}.`)}function Eb(i,e){if(!Array.isArray(i)||i.length===0)throw new Z(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S1(i,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(i.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Z(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Gv{convertValue(e,t="none"){switch(Bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $s(e,((a,l)=>{n[a]=this.convertValue(l,t)})),n}convertVectorValue(e){var n,a,l;const t=(l=(a=(n=e.fields)==null?void 0:n[Ll].arrayValue)==null?void 0:a.values)==null?void 0:l.map((c=>dt(c.doubleValue)));return new Jr(t)}convertGeoPoint(e){return new Tr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Dm(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ch(e));default:return null}}convertTimestamp(e){const t=Mi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Me.fromString(e);pe(pR(n),9688,{name:e});const a=new Us(n.get(1),n.get(3)),l=new se(n.popFirst(5));return a.isEqual(t)||Dt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Qm(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class rL extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}class Ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let cr=class R1 extends yh{constructor(e,t,n,a,l,c){super(e,t,n,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=R1._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",cr._jsonSchema={type:Ut("string",cr._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};let Wc=class extends cr{data(e={}){return super.data(e)}},wr=class C1{constructor(e,t,n,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Ka(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Wc(this._firestore,this._userDataWriter,n.key,n,new Ka(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const m=new Wc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ka(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new Wc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ka(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),y=c.indexOf(f.doc.key)),{type:iL(f.type),doc:m,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=C1._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),n.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function iL(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:i})}}function D1(i,e){return i instanceof cr&&e instanceof cr?i._firestore===e._firestore&&i._key.isEqual(e._key)&&(i._document===null?e._document===null:i._document.isEqual(e._document))&&i._converter===e._converter:i instanceof wr&&e instanceof wr&&i._firestore===e._firestore&&m1(i.query,e.query)&&i.metadata.isEqual(e.metadata)&&i._snapshot.isEqual(e._snapshot)}/**
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
 */function sL(i){i=He(i,ot);const e=He(i.firestore,xt);return a1(vn(e),i._key).then((t=>Kv(e,i,t)))}wr._jsonSchemaVersion="firestore/querySnapshot/1.0",wr._jsonSchema={type:Ut("string",wr._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class po extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function aL(i){i=He(i,ot);const e=He(i.firestore,xt),t=vn(e),n=new po(e);return R4(t,i._key).then((a=>new cr(e,n,i._key,a,new Ka(a!==null&&a.hasLocalMutations,!0),i.converter)))}function oL(i){i=He(i,ot);const e=He(i.firestore,xt);return a1(vn(e),i._key,{source:"server"}).then((t=>Kv(e,i,t)))}function lL(i){i=He(i,Cn);const e=He(i.firestore,xt),t=vn(e),n=new po(e);return b1(i._query),o1(t,i._query).then((a=>new wr(e,n,i,a)))}function uL(i){i=He(i,Cn);const e=He(i.firestore,xt),t=vn(e),n=new po(e);return C4(t,i._query).then((a=>new wr(e,n,i,a)))}function cL(i){i=He(i,Cn);const e=He(i.firestore,xt),t=vn(e),n=new po(e);return o1(t,i._query,{source:"server"}).then((a=>new wr(e,n,i,a)))}function Tb(i,e,t){i=He(i,ot);const n=He(i.firestore,xt),a=Qm(i.converter,e,t);return jh(n,[qm(fo(n),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,pt.none())])}function wb(i,e,t,...n){i=He(i,ot);const a=He(i.firestore,xt),l=fo(a);let c;return c=typeof(e=Ee(e))=="string"||e instanceof Hs?Bv(l,"updateDoc",i._key,e,t,n):Uv(l,"updateDoc",i._key,e),jh(a,[c.toMutation(i._key,pt.exists(!0))])}function hL(i){return jh(He(i.firestore,xt),[new iu(i._key,pt.none())])}function dL(i,e){const t=He(i.firestore,xt),n=lm(i),a=Qm(i.converter,e);return jh(t,[qm(fo(i.firestore),"addDoc",n._key,a,i.converter!==null,{}).toMutation(n._key,pt.exists(!1))]).then((()=>n))}function N1(i,...e){var m,g,y;i=Ee(i);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||sy(e[n])||(t=e[n++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(sy(e[n])){const T=e[n];e[n]=(m=T.next)==null?void 0:m.bind(T),e[n+1]=(g=T.error)==null?void 0:g.bind(T),e[n+2]=(y=T.complete)==null?void 0:y.bind(T)}let l,c,f;if(i instanceof ot)c=He(i.firestore,xt),f=nu(i._key.path),l={next:T=>{e[n]&&e[n](Kv(c,i,T))},error:e[n+1],complete:e[n+2]};else{const T=He(i,Cn);c=He(T.firestore,xt),f=T._query;const I=new po(c);l={next:O=>{e[n]&&e[n](new wr(c,I,T,O))},error:e[n+1],complete:e[n+2]},b1(i._query)}return(function(I,O,G,W){const Q=new Um(W),de=new Av(O,Q,G);return I.asyncQueue.enqueueAndForget((async()=>wv(await Yl(I),de))),()=>{Q.Nu(),I.asyncQueue.enqueueAndForget((async()=>Iv(await Yl(I),de)))}})(vn(c),f,a,l)}function fL(i,e){return D4(vn(i=He(i,xt)),sy(e)?e:{next:e})}function jh(i,e){return(function(n,a){const l=new cn;return n.asyncQueue.enqueueAndForget((async()=>n4(await Vv(n),a,l))),l.promise})(vn(i),e)}function Kv(i,e,t){const n=t.docs.get(e._key),a=new po(i);return new cr(i,a,e._key,n,new Ka(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const mL={maxAttempts:5};/**
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
 */let pL=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fo(e)}set(e,t,n){this._verifyNotCommitted();const a=Rs(e,this._firestore),l=Qm(a.converter,t,n),c=qm(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,n);return this._mutations.push(c.toMutation(a._key,pt.none())),this}update(e,t,n,...a){this._verifyNotCommitted();const l=Rs(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof Hs?Bv(this._dataReader,"WriteBatch.update",l._key,t,n,a):Uv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Rs(e,this._firestore);return this._mutations=this._mutations.concat(new iu(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Rs(i,e){if((i=Ee(i)).firestore!==e)throw new Z(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */class gL{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=fo(e)}get(e){const t=Rs(e,this._firestore),n=new rL(this._firestore);return this._transaction.lookup([t._key]).then((a=>{if(!a||a.length!==1)return ce(24041);const l=a[0];if(l.isFoundDocument())return new yh(this._firestore,n,l.key,l,t.converter);if(l.isNoDocument())return new yh(this._firestore,n,t._key,null,t.converter);throw ce(18433,{doc:l})}))}set(e,t,n){const a=Rs(e,this._firestore),l=Qm(a.converter,t,n),c=qm(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,n);return this._transaction.set(a._key,c),this}update(e,t,n,...a){const l=Rs(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof Hs?Bv(this._dataReader,"Transaction.update",l._key,t,n,a):Uv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=Rs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let _L=class extends gL{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Rs(e,this._firestore),n=new po(this._firestore);return super.get(e).then((a=>new cr(this._firestore,n,t._key,a._document,new Ka(!1,!1),t.converter)))}};function yL(i,e,t){i=He(i,xt);const n={...mL,...t};return(function(l){if(l.maxAttempts<1)throw new Z(H.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(l,c,f){const m=new cn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await b4(l);new w4(l.asyncQueue,g,f,c,m).ju()})),m.promise})(vn(i),(a=>e(new _L(i,a))),n)}/**
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
 */function vL(){return new qh("deleteField")}function EL(){return new Ov("serverTimestamp")}function TL(...i){return new kv("arrayUnion",i)}function wL(...i){return new Mv("arrayRemove",i)}function IL(i){return new Lv("increment",i)}(function(e,t=!0){(function(a){tu=a})(Gs),Ms(new Zr("firestore",((n,{instanceIdentifier:a,options:l})=>{const c=n.getProvider("app").getImmediate(),f=new xt(new gO(n.getProvider("auth-internal")),new vO(c,n.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Z(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Er(J0,Z0,e),Er(J0,Z0,"esm2020")})();const bL="@firebase/firestore-compat",AL="0.4.1";/**
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
 */function Qv(i,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Z("invalid-argument",`Invalid options passed to function ${i}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Ib(){if(typeof Uint8Array>"u")throw new Z("unimplemented","Uint8Arrays are not available in this environment.")}function bb(){if(!ek())throw new Z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class vh{constructor(e){this._delegate=e}static fromBase64String(e){return bb(),new vh(_n.fromBase64String(e))}static fromUint8Array(e){return Ib(),new vh(_n.fromUint8Array(e))}toBase64(){return bb(),this._delegate.toBase64()}toUint8Array(){return Ib(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function oy(i){return SL(i,["next","error","complete"])}function SL(i,e){if(typeof i!="object"||i===null)return!1;const t=i;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class RL{enableIndexedDbPersistence(e,t){return M4(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return L4(e._delegate)}clearIndexedDbPersistence(e){return U4(e._delegate)}}class x1{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Us||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ni("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e={...t,...e},delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){P4(this._delegate,e,t,n)}enableNetwork(){return z4(this._delegate)}disableNetwork(){return q4(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,nS("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return B4(this._delegate)}onSnapshotsInSync(e){return fL(this._delegate,e)}get app(){if(!this._appCompat)throw new Z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new $l(this,d1(this._delegate,e))}catch(t){throw An(t,"collection()","Firestore.collection()")}}doc(e){try{return new ur(this,lm(this._delegate,e))}catch(t){throw An(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new bn(this,V4(this._delegate,e))}catch(t){throw An(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return yL(this._delegate,t=>e(new P1(this,t)))}batch(){return vn(this._delegate),new V1(new pL(this._delegate,e=>jh(this._delegate,e)))}loadBundle(e){return F4(this._delegate,e)}namedQuery(e){return j4(this._delegate,e).then(t=>t?new bn(this,t):null)}}class Ym extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new vh(new _n(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ur.forKey(t,this.firestore,null)}}function CL(i){dO(i)}class P1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ym(e)}get(e){const t=Qa(e);return this._delegate.get(t).then(n=>new Eh(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const a=Qa(e);return n?(Qv("Transaction.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Qa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Qa(e);return this._delegate.delete(t),this}}class V1{constructor(e){this._delegate=e}set(e,t,n){const a=Qa(e);return n?(Qv("WriteBatch.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Qa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Qa(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class lo{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Wc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Th(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=lo.INSTANCES;let a=n.get(e);a||(a=new WeakMap,n.set(e,a));let l=a.get(t);return l||(l=new lo(e,new Ym(e),t),a.set(t,l)),l}}lo.INSTANCES=new WeakMap;class ur{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ym(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ur(t,new ot(t._delegate,n,new se(e)))}static forKey(e,t,n){return new ur(t,new ot(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new $l(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new $l(this.firestore,d1(this._delegate,e))}catch(t){throw An(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ee(e),e instanceof ot?f1(this._delegate,e):!1}set(e,t){t=Qv("DocumentReference.set",t);try{return t?Tb(this._delegate,e,t):Tb(this._delegate,e)}catch(n){throw An(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?wb(this._delegate,e):wb(this._delegate,e,t,...n)}catch(a){throw An(a,"updateDoc()","DocumentReference.update()")}}delete(){return hL(this._delegate)}onSnapshot(...e){const t=O1(e),n=k1(e,a=>new Eh(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return N1(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=aL(this._delegate):(e==null?void 0:e.source)==="server"?t=oL(this._delegate):t=sL(this._delegate),t.then(n=>new Eh(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new ur(this.firestore,e?this._delegate.withConverter(lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function An(i,e,t){return i.message=i.message.replace(e,t),i}function O1(i){for(const e of i)if(typeof e=="object"&&!oy(e))return e;return{}}function k1(i,e){var n,a;let t;return oy(i[0])?t=i[0]:oy(i[1])?t=i[1]:typeof i[0]=="function"?t={next:i[0],error:i[1],complete:i[2]}:t={next:i[1],error:i[2],complete:i[3]},{next:l=>{t.next&&t.next(e(l))},error:(n=t.error)==null?void 0:n.bind(t),complete:(a=t.complete)==null?void 0:a.bind(t)}}class Eh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ur(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return D1(this._delegate,e._delegate)}}class Th extends Eh{data(e){const t=this._delegate.data(e);return this._delegate._converter||fO(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class bn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ym(e)}where(e,t,n){try{return new bn(this.firestore,Is(this._delegate,$4(e,t,n)))}catch(a){throw An(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new bn(this.firestore,Is(this._delegate,W4(e,t)))}catch(n){throw An(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new bn(this.firestore,Is(this._delegate,X4(e)))}catch(t){throw An(t,"limit()","Query.limit()")}}limitToLast(e){try{return new bn(this.firestore,Is(this._delegate,J4(e)))}catch(t){throw An(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new bn(this.firestore,Is(this._delegate,Z4(...e)))}catch(t){throw An(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new bn(this.firestore,Is(this._delegate,eL(...e)))}catch(t){throw An(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new bn(this.firestore,Is(this._delegate,tL(...e)))}catch(t){throw An(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new bn(this.firestore,Is(this._delegate,nL(...e)))}catch(t){throw An(t,"endAt()","Query.endAt()")}}isEqual(e){return m1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=uL(this._delegate):(e==null?void 0:e.source)==="server"?t=cL(this._delegate):t=lL(this._delegate),t.then(n=>new ly(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=O1(e),n=k1(e,a=>new ly(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return N1(this._delegate,t,n)}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class DL{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Th(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ly{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new bn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Th(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new DL(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Th(this._firestore,n))})}isEqual(e){return D1(this._delegate,e._delegate)}}class $l extends bn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ur(this.firestore,e):null}doc(e){try{return e===void 0?new ur(this.firestore,lm(this._delegate)):new ur(this.firestore,lm(this._delegate,e))}catch(t){throw An(t,"doc()","CollectionReference.doc()")}}add(e){return dL(this._delegate,e).then(t=>new ur(this.firestore,t))}isEqual(e){return f1(this._delegate,e._delegate)}withConverter(e){return new $l(this.firestore,e?this._delegate.withConverter(lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Qa(i){return He(i,ot)}/**
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
 */class Yv{constructor(...e){this._delegate=new Hs(...e)}static documentId(){return new Yv(mt.keyField().canonicalString())}isEqual(e){return e=Ee(e),e instanceof Hs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ja{static serverTimestamp(){const e=EL();return e._methodName="FieldValue.serverTimestamp",new ja(e)}static delete(){const e=vL();return e._methodName="FieldValue.delete",new ja(e)}static arrayUnion(...e){const t=TL(...e);return t._methodName="FieldValue.arrayUnion",new ja(t)}static arrayRemove(...e){const t=wL(...e);return t._methodName="FieldValue.arrayRemove",new ja(t)}static increment(e){const t=IL(e);return t._methodName="FieldValue.increment",new ja(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const NL={Firestore:x1,GeoPoint:Tr,Timestamp:Ye,Blob:vh,Transaction:P1,WriteBatch:V1,DocumentReference:ur,DocumentSnapshot:Eh,Query:bn,QueryDocumentSnapshot:Th,QuerySnapshot:ly,CollectionReference:$l,FieldPath:Yv,FieldValue:ja,setLogLevel:CL,CACHE_SIZE_UNLIMITED:k4};function xL(i,e){i.INTERNAL.registerComponent(new Zr("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(n,a)},"PUBLIC").setServiceProps({...NL}))}/**
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
 */function PL(i){xL(i,(e,t)=>new x1(e,t,new RL)),i.registerVersion(bL,AL)}PL(ei);const VL={apiKey:"AIzaSyCZh_PwX7LZfXujZiHGH9T-8uA17hNQGBY",authDomain:"bkomhate-site.firebaseapp.com",projectId:"bkomhate-site",storageBucket:"bkomhate-site.firebasestorage.app",messagingSenderId:"37549082348",appId:"1:37549082348:web:cf0c6c4f504b40192887c9"};ei.apps.length||ei.initializeApp(VL);const T_=ei.auth(),Ni=ei.firestore(),Xc=ei.firestore,OL=()=>L.jsx("header",{className:"bg-black/50 border-b-2 border-amber-500/50 p-4",children:L.jsxs("div",{className:"container mx-auto text-center",children:[L.jsx("h1",{className:"font-display text-4xl md:text-5xl text-amber-400 tracking-widest",children:"B_KOMHATE"}),L.jsx("p",{className:"text-stone-400 text-sm tracking-wider",children:"QUEST & CODEWORD PLATFORM"})]})}),kL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v4H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v4H8z",clipRule:"evenodd"})}),ML=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),LL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),M1=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})}),UL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),BL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{d:"M17 3H5a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zm-3 12H8v-4h6v4zm2-6H5V5h12v4z"})}),zL=()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[L.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),L.jsx("path",{fillRule:"evenodd",d:"M.458 10C3.732 4.943 9.522 4.5 10 4.5c.478 0 6.268.443 9.542 5.5.25.362.25.868 0 1.23C16.268 15.057 10.478 15.5 10 15.5c-.478 0-6.268-.443-9.542-5.5a.75.75 0 010-1.23zM10 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",clipRule:"evenodd"})]}),qL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{d:"M2 11h3v7H2v-7zM6 3h3v15H6V3zm5 8h3v7h-3v-7zm4-4h3v11h-3V7z"})}),FL=()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[L.jsx("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),L.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),jL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}),HL=()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z"})}),GL=()=>{const[i,e]=Fe.useState(""),[t,n]=Fe.useState(""),[a,l]=Fe.useState(""),{login:c}=$v(),f=async m=>{m.preventDefault(),l("");try{await c(i,t)}catch(g){l("Ошибка входа. Проверьте почту и пароль."),console.error(g)}};return L.jsx("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:L.jsxs("div",{className:"w-full max-w-sm p-8 bg-stone-800/50 border border-stone-700 rounded-md",children:[L.jsx("h2",{className:"font-display text-3xl text-center text-stone-200 mb-6",children:"ВХОД В ПАНЕЛЬ"}),L.jsxs("form",{onSubmit:f,className:"space-y-4",children:[L.jsx("input",{type:"email",value:i,onChange:m=>e(m.target.value),placeholder:"Email",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all","aria-label":"Email",required:!0}),L.jsx("input",{type:"password",value:t,onChange:m=>n(m.target.value),placeholder:"Пароль",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all","aria-label":"Password",required:!0}),L.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:[L.jsx(kL,{}),"ВОЙТИ"]}),a&&L.jsx("p",{className:"text-red-500 text-center mt-4",children:a})]})]})})},KL=({data:i})=>{if(!i||i.length===0)return L.jsx("p",{className:"text-stone-400 text-center py-8",children:"Нет данных для отображения."});const e=300,t=40,n=15,a=i.length*(t+n),l=Math.max(...i.map(c=>c.value),0);return L.jsx("div",{className:"overflow-x-auto p-4 bg-stone-900/50 rounded-md",children:L.jsxs("svg",{width:a,height:e+40,className:"min-w-full",children:[L.jsx("g",{transform:"translate(0, 10)",children:i.map((c,f)=>{const m=l>0?c.value/l*e:0,g=f*(t+n),y=e-m;return L.jsxs("g",{children:[L.jsx("rect",{x:g,y,width:t,height:m,fill:"url(#barGradient)",rx:"2"}),L.jsx("text",{x:g+t/2,y:y-5,textAnchor:"middle",fill:"#f59e0b",className:"text-sm font-bold",children:c.value}),L.jsx("text",{x:g+t/2,y:e+15,textAnchor:"middle",fill:"#a8a29e",className:"text-xs",children:c.label.split(" ")[0]}),c.label.split(" ")[1]&&L.jsx("text",{x:g+t/2,y:e+30,textAnchor:"middle",fill:"#a8a29e",className:"text-xs",children:c.label.split(" ")[1]})]},c.label)})}),L.jsx("defs",{children:L.jsxs("linearGradient",{id:"barGradient",x1:"0",x2:"0",y1:"0",y2:"1",children:[L.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),L.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})})]})})},QL=({codeword:i,onUpdate:e,onDelete:t})=>{const[n,a]=Fe.useState(i.usedMessage),[l,c]=Fe.useState(i.introText||"ВАШЕ КОДОВОЕ СЛОВО:"),[f,m]=Fe.useState(i.note||""),[g,y]=Fe.useState(!1),[T,I]=Fe.useState([]),[O,G]=Fe.useState(!1),[W,Q]=Fe.useState(""),[de,he]=Fe.useState("day"),ae=`${window.location.origin}${window.location.pathname}#/view?c=${i.id}`,Ie=`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(ae)}`,me=async()=>{G(!0),Q(""),I([]);try{const A=(await Ni.collection("codewords").doc(i.id).collection("viewEvents").orderBy("viewedAt","asc").get()).docs.map(k=>k.data().viewedAt.toDate());if(A.length===0){G(!1);return}const D={};A.forEach(k=>{let C="";de==="day"?C=k.toLocaleDateString("ru-RU",{year:"2-digit",month:"2-digit",day:"2-digit"}):C=k.toLocaleDateString("ru-RU",{year:"2-digit",month:"2-digit",day:"2-digit"})+` ${k.getHours()}:00`,D[C]=(D[C]||0)+1});const P=Object.keys(D).map(k=>({label:k,value:D[k]}));I(P)}catch(N){console.error("Error fetching stats:",N),Q("Не удалось загрузить статистику.")}finally{G(!1)}};Fe.useEffect(()=>{g&&me()},[g,de]);const Te=async()=>{try{const N=await fetch(Ie);if(!N.ok)throw new Error("QR code fetch failed");const S=await N.blob(),A=window.URL.createObjectURL(S),D=document.createElement("a");D.href=A;const P=i.word.replace(/[^a-z0-9а-яё]/gi,"_").toLowerCase();D.setAttribute("download",`qr_${P}.png`),document.body.appendChild(D),D.click(),D.parentNode&&D.parentNode.removeChild(D),window.URL.revokeObjectURL(A)}catch(N){console.error("Failed to download QR code",N),alert("Не удалось скачать QR-код.")}};return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"bg-stone-800/70 border border-stone-700 p-4 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 items-start",children:[L.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[L.jsx("img",{src:Ie,alt:"QR Code",className:"w-36 h-36 border-2 border-stone-600 rounded-md"}),L.jsxs("button",{onClick:Te,className:"flex items-center justify-center gap-2 w-full bg-stone-600 hover:bg-stone-500 text-stone-200 px-3 py-2 rounded-md text-sm transition-colors",children:[L.jsx(UL,{}),"Скачать QR"]}),L.jsx("a",{href:ae,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-amber-400 hover:text-amber-300 break-all text-center pt-1",children:ae})]}),L.jsxs("div",{className:"md:col-span-2 space-y-3",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:`introText_${i.id}`,className:"text-sm font-bold text-stone-400 block",children:"Вступительный текст:"}),L.jsx("input",{id:`introText_${i.id}`,type:"text",value:l,onChange:N=>c(N.target.value),onBlur:()=>e(i.id,{introText:l}),className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"})]}),L.jsxs("div",{children:[L.jsx("label",{className:"text-sm font-bold text-stone-400 block",children:"Кодовое слово:"}),L.jsx("p",{className:"text-lg bg-stone-900 p-2 rounded-md font-bold text-stone-100 break-words",children:i.word})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:`usedMsg_${i.id}`,className:"text-sm font-bold text-stone-400 block",children:"Сообщение (если использовано):"}),L.jsx("input",{id:`usedMsg_${i.id}`,type:"text",value:n,onChange:N=>a(N.target.value),onBlur:()=>e(i.id,{usedMessage:n}),className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:`note_${i.id}`,className:"text-sm font-bold text-stone-400 block",children:"Заметка (видна только вам):"}),L.jsx("textarea",{id:`note_${i.id}`,value:f,onChange:N=>m(N.target.value),onBlur:()=>e(i.id,{note:f}),className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all h-20 resize-y",placeholder:"Любые пометки по этому коду..."})]}),L.jsxs("div",{className:"flex items-center justify-between pt-2",children:[L.jsxs("label",{htmlFor:`toggle_${i.id}`,className:"flex items-center cursor-pointer",children:[L.jsxs("div",{className:"relative",children:[L.jsx("input",{type:"checkbox",id:`toggle_${i.id}`,className:"sr-only",checked:i.isUsed,onChange:()=>e(i.id,{isUsed:!i.isUsed})}),L.jsx("div",{className:`block ${i.isUsed?"bg-amber-500":"bg-stone-600"} w-14 h-8 rounded-full transition-colors`}),L.jsx("div",{className:`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${i.isUsed?"transform translate-x-6":""}`})]}),L.jsx("div",{className:"ml-3 text-stone-300 font-semibold",children:i.isUsed?"ИСПОЛЬЗОВАНО":"АКТИВНО"})]}),L.jsxs("div",{className:"flex items-center gap-2 text-stone-400",children:[L.jsxs("div",{className:"flex items-center gap-1",title:"Просмотры",children:[L.jsx(zL,{}),L.jsx("span",{children:i.views||0})]}),L.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-1 bg-sky-800 hover:bg-sky-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors",children:[L.jsx(qL,{}),"Статистика"]}),L.jsxs("button",{onClick:()=>t(i.id),className:"flex items-center gap-1 bg-red-800 hover:bg-red-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors",children:[L.jsx(M1,{}),"Удалить"]})]})]})]})]}),g&&L.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",onClick:()=>y(!1),role:"dialog","aria-modal":"true","aria-labelledby":"stats-modal-title",children:L.jsxs("div",{className:"bg-stone-800 border border-stone-700 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col",onClick:N=>N.stopPropagation(),children:[L.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-stone-700",children:[L.jsx("h3",{id:"stats-modal-title",className:"font-display text-2xl text-amber-400",children:"Статистика просмотров"}),L.jsx("button",{onClick:()=>y(!1),className:"text-stone-400 hover:text-white text-3xl leading-none","aria-label":"Close",children:"×"})]}),L.jsxs("div",{className:"p-4 flex-grow overflow-y-auto",children:[L.jsxs("div",{className:"flex gap-2 mb-4",children:[L.jsx("button",{onClick:()=>he("day"),className:`px-4 py-2 rounded-md font-semibold ${de==="day"?"bg-amber-500 text-stone-900":"bg-stone-700 text-stone-300 hover:bg-stone-600"}`,children:"По дням"}),L.jsx("button",{onClick:()=>he("hour"),className:`px-4 py-2 rounded-md font-semibold ${de==="hour"?"bg-amber-500 text-stone-900":"bg-stone-700 text-stone-300 hover:bg-stone-600"}`,children:"По часам"})]}),O&&L.jsx("p",{className:"animate-pulse text-center py-8 font-display text-xl text-stone-400",children:"ЗАГРУЗКА СТАТИСТИКИ..."}),W&&L.jsx("p",{className:"text-red-500 text-center py-8",children:W}),!O&&!W&&L.jsx(KL,{data:T})]})]})})]})},YL=({game:i,onDelete:e})=>{var a;const t=(a=i.createdAt)==null?void 0:a.toDate().toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}),n=()=>{alert(`Редактирование квеста "${i.title}" еще не реализовано.`)};return L.jsxs("div",{className:"bg-stone-800/70 border border-stone-700 p-4 rounded-md flex justify-between items-center",children:[L.jsxs("div",{children:[L.jsx("h4",{className:"text-xl font-bold text-stone-100",children:i.title}),L.jsxs("div",{className:"text-sm text-stone-400 mt-1",children:[L.jsx("span",{className:"inline-block bg-sky-900/50 text-sky-300 px-2 py-0.5 rounded-md mr-2",children:i.status||"Черновик"}),L.jsxs("span",{children:["Создан: ",t||"N/A"]})]})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsxs("button",{onClick:n,className:"flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors",children:[L.jsx(FL,{}),"Редактировать"]}),L.jsxs("button",{onClick:()=>e(i.id),className:"flex items-center gap-1 bg-red-800 hover:bg-red-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors",children:[L.jsx(M1,{}),"Удалить"]})]})]})},$L=()=>{const{logout:i,changePassword:e}=$v(),[t,n]=Fe.useState("codewords"),[a,l]=Fe.useState([]),[c,f]=Fe.useState(""),[m,g]=Fe.useState("Этот код уже был использован."),[y,T]=Fe.useState("ВАШЕ КОДОВОЕ СЛОВО:"),[I,O]=Fe.useState([]),[G,W]=Fe.useState(""),[Q,de]=Fe.useState("");Fe.useEffect(()=>{if(t!=="codewords")return;const D=Ni.collection("codewords").orderBy("createdAt","desc").onSnapshot(P=>{const k=P.docs.map(C=>({...C.data(),id:C.id}));l(k)},P=>{console.error("Error fetching codewords:",P),alert("Не удалось загрузить кодовые слова.")});return()=>D()},[t]);const he=async A=>{if(A.preventDefault(),c.trim()!=="")try{await Ni.collection("codewords").add({word:c.trim(),isUsed:!1,usedMessage:m.trim()||"Этот код уже был использован.",introText:y.trim()||"ВАШЕ КОДОВОЕ СЛОВО:",note:"",createdAt:Xc.FieldValue.serverTimestamp(),views:0}),f(""),T("ВАШЕ КОДОВОЕ СЛОВО:"),g("Этот код уже был использован.")}catch(D){console.error("Error adding codeword:",D),alert("Ошибка при добавлении кода.")}},ae=async(A,D)=>{const P=Ni.collection("codewords").doc(A);try{await P.update(D)}catch(k){console.error("Error updating codeword:",k),alert("Ошибка при обновлении кода.")}},Ie=async A=>{if(window.confirm("Вы уверены, что хотите удалить этот код? Это действие необратимо.")){const D=Ni.collection("codewords").doc(A);try{await D.delete()}catch(P){console.error("Error deleting codeword:",P),alert("Ошибка при удалении кода.")}}};Fe.useEffect(()=>{if(t!=="quests")return;const D=Ni.collection("games").orderBy("createdAt","desc").onSnapshot(P=>{const k=P.docs.map(C=>({...C.data(),id:C.id}));O(k)},P=>{console.error("Error fetching games:",P),alert("Не удалось загрузить квесты.")});return()=>D()},[t]);const me=async A=>{if(A.preventDefault(),G.trim()!=="")try{await Ni.collection("games").add({title:G.trim(),status:"draft",createdAt:Xc.FieldValue.serverTimestamp(),updatedAt:Xc.FieldValue.serverTimestamp(),dsl:{format:"bk-quest@1",meta:{id:"new-quest",title:G.trim(),version:1,defaultLocale:"ru"},assets:{images:{},audio:{}},state:{vars:{},inventory:[]},nodes:{start:{text:"This is the beginning."}}}}),W("")}catch(D){console.error("Error adding quest:",D),alert("Ошибка при создании квеста.")}},Te=async A=>{if(window.confirm("Вы уверены, что хотите удалить этот квест? Все его данные будут стерты навсегда.")){const D=Ni.collection("games").doc(A);try{await D.delete()}catch(P){console.error("Error deleting quest:",P),alert("Ошибка при удалении квеста.")}}},N=async A=>{if(A.preventDefault(),window.confirm("Вы уверены, что хотите изменить пароль?"))try{await e(Q),alert("Пароль успешно изменен!"),de("")}catch(D){alert(`Ошибка изменения пароля: ${D.message}`)}},S=({tabName:A,label:D,children:P})=>L.jsxs("button",{onClick:()=>n(A),className:`flex items-center justify-center w-full px-4 py-3 font-display text-xl rounded-t-md transition-colors ${t===A?"bg-stone-800/50 text-amber-400 border-b-2 border-amber-400":"bg-stone-900/50 text-stone-400 hover:bg-stone-800/50"}`,children:[P,D]});return L.jsxs("div",{className:"container mx-auto py-8 px-4",children:[L.jsxs("div",{className:"flex justify-between items-center mb-6",children:[L.jsx("h2",{className:"font-display text-4xl text-stone-200",children:"Панель управления"}),L.jsx("button",{onClick:i,className:"bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold py-2 px-4 rounded-md transition-colors",children:"Выйти"})]}),L.jsxs("div",{className:"bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8",children:[L.jsx("h3",{className:"font-display text-2xl text-amber-400 mb-4",children:"Изменить пароль"}),L.jsxs("form",{onSubmit:N,className:"space-y-4",children:[L.jsx("input",{type:"password",value:Q,onChange:A=>de(A.target.value),placeholder:"Новый пароль (минимум 6 символов)",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),L.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:[L.jsx(BL,{})," Сохранить пароль"]})]})]}),L.jsxs("div",{className:"flex mb-[-1px]",children:[L.jsx(S,{tabName:"codewords",label:"Кодовые слова",children:L.jsx(HL,{})}),L.jsx(S,{tabName:"quests",label:"Квесты",children:L.jsx(jL,{})})]}),L.jsxs("div",{className:"bg-stone-800/50 border border-stone-700 p-6 rounded-b-md rounded-tr-md",children:[t==="codewords"&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"mb-8",children:[L.jsx("h3",{className:"font-display text-2xl text-amber-400 mb-4",children:"Добавить новый код"}),L.jsxs("form",{onSubmit:he,className:"space-y-4",children:[L.jsx("input",{type:"text",value:y,onChange:A=>T(A.target.value),placeholder:"Вступительный текст (обращение)",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),L.jsx("input",{type:"text",value:c,onChange:A=>f(A.target.value),placeholder:"Новое кодовое слово",required:!0,className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),L.jsx("input",{type:"text",value:m,onChange:A=>g(A.target.value),placeholder:"Сообщение если код использован",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),L.jsx("button",{type:"submit",className:"w-full font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:"Создать QR-код"})]})]}),L.jsx("div",{className:"space-y-4",children:a.map(A=>L.jsx(QL,{codeword:A,onUpdate:ae,onDelete:Ie},A.id))})]}),t==="quests"&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"mb-8",children:[L.jsx("h3",{className:"font-display text-2xl text-amber-400 mb-4",children:"Создать новый квест"}),L.jsxs("form",{onSubmit:me,className:"flex gap-4",children:[L.jsx("input",{type:"text",value:G,onChange:A=>W(A.target.value),placeholder:"Название квеста",required:!0,className:"flex-grow bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),L.jsx("button",{type:"submit",className:"font-display text-xl bg-amber-500 text-stone-900 py-2 px-6 rounded-md hover:bg-amber-400 transition-colors",children:"Создать"})]})]}),L.jsx("div",{className:"space-y-4",children:I.length>0?I.map(A=>L.jsx(YL,{game:A,onDelete:Te},A.id)):L.jsx("p",{className:"text-stone-400 text-center py-4",children:"Квесты еще не созданы."})})]})]})]})},WL=({codeId:i})=>{const[e,t]=Fe.useState(null),[n,a]=Fe.useState("loading"),[l,c]=Fe.useState(!1);Fe.useEffect(()=>{if(i){const m=Ni.collection("codewords").doc(i);(async()=>{try{const y=await m.get();if(y.exists){t({id:y.id,...y.data()}),a("found");const T=`viewed-${i}`;sessionStorage.getItem(T)||(await m.update({views:Xc.FieldValue.increment(1)}),await m.collection("viewEvents").add({viewedAt:Xc.FieldValue.serverTimestamp()}),sessionStorage.setItem(T,"true"))}else a("not-found")}catch(y){console.error("Failed to fetch codeword from Firestore:",y),a("error")}})()}else a("not-found")},[i]);const f=()=>{e&&!e.isUsed&&(navigator.clipboard.writeText(e.word),c(!0),setTimeout(()=>c(!1),2e3))};return n==="loading"?L.jsx("div",{className:"flex items-center justify-center min-h-[80vh]",children:L.jsx("p",{className:"font-display text-2xl text-stone-400 animate-pulse",children:"ПОИСК КОДА..."})}):n==="not-found"||n==="error"?L.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[L.jsx("h2",{className:"font-display text-6xl text-red-500",children:"404"}),L.jsx("p",{className:"text-stone-300 text-xl mt-2",children:"Код не найден."}),L.jsx("p",{className:"text-stone-500",children:"Возможно, ссылка неверна или код был удален."})]}):e&&e.isUsed?L.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[L.jsx("h2",{className:"font-display text-5xl text-amber-500",children:"КОД ИСПОЛЬЗОВАН"}),L.jsx("p",{className:"text-stone-300 text-xl mt-4 max-w-lg",children:e.usedMessage})]}):L.jsx("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:L.jsxs("div",{className:"w-full max-w-2xl bg-stone-800/50 border-2 border-stone-700 p-8 rounded-lg",children:[L.jsx("p",{className:"text-stone-400 font-display text-2xl",children:(e==null?void 0:e.introText)||"ВАШЕ КОДОВОЕ СЛОВО:"}),L.jsx("p",{className:"text-amber-400 font-bold text-3xl md:text-5xl my-4 break-words select-all",children:e==null?void 0:e.word}),L.jsxs("button",{onClick:f,className:"w-full flex items-center justify-center gap-3 mt-6 bg-stone-700 hover:bg-amber-500 hover:text-stone-900 text-stone-200 font-display text-2xl py-3 rounded-md transition-all duration-300",children:[l?L.jsx(LL,{}):L.jsx(ML,{}),l?"СКОПИРОВАНО!":"СКОПИРОВАТЬ КОД"]})]})})},L1=Fe.createContext(null),$v=()=>{const i=Fe.useContext(L1);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},XL=({children:i})=>{const[e,t]=Fe.useState(null),[n,a]=Fe.useState(!0);Fe.useEffect(()=>T_.onAuthStateChanged(y=>{t(y),a(!1)}),[]);const m={currentUser:e,loading:n,login:(g,y)=>T_.signInWithEmailAndPassword(g,y),logout:()=>T_.signOut(),changePassword:g=>e?!g||g.length<6?Promise.reject(new Error("Пароль должен содержать не менее 6 символов.")):e.updatePassword(g):Promise.reject(new Error("Пользователь не авторизован."))};return L.jsx(L1.Provider,{value:m,children:!n&&i})},JL=()=>{const{currentUser:i}=$v();return i?L.jsx($L,{}):L.jsx(GL,{})},ZL=()=>{const[i,e]=Fe.useState({path:"admin",codeId:null});Fe.useEffect(()=>{const a=()=>{const c=new URLSearchParams(window.location.search).get("c");c&&window.history.replaceState(null,"",`/#/view?c=${c}`);const f=window.location.hash;if(f.startsWith("#/view")){const m=new URLSearchParams(f.split("?")[1]||"");e({path:"view",codeId:m.get("c")})}else e(f==="#/admin"||f==="#/"||f===""?{path:"admin",codeId:null}:{path:"404",codeId:null})};return a(),window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]);const t="min-h-screen bg-stone-900 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23292524%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]",n=()=>{switch(i.path){case"view":return L.jsx(WL,{codeId:i.codeId});case"admin":return L.jsx(XL,{children:L.jsx(JL,{})});case"404":default:return L.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[L.jsx("h2",{className:"font-display text-6xl text-red-500",children:"404"}),L.jsx("p",{className:"text-stone-300 text-xl mt-2",children:"Страница не найдена."}),L.jsx("a",{href:"/#/admin",className:"text-amber-400 hover:text-amber-300 mt-4",children:"Перейти в панель управления"})]})}};return L.jsxs("div",{className:t,children:[L.jsx(OL,{}),L.jsx("main",{children:n()})]})},U1=document.getElementById("root");if(!U1)throw new Error("Could not find root element to mount to");const eU=ED.createRoot(U1);eU.render(L.jsx(dD.StrictMode,{children:L.jsx(ZL,{})}));
