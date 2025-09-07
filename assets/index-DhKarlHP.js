(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function b0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yg={exports:{}},gc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI;function uD(){if(aI)return gc;aI=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:i,type:n,key:c,ref:a!==void 0?a:null,props:l}}return gc.Fragment=e,gc.jsx=t,gc.jsxs=t,gc}var oI;function cD(){return oI||(oI=1,Yg.exports=uD()),Yg.exports}var W=cD(),$g={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function hD(){if(lI)return De;lI=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function A(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,X={};function K(D,ee,ue){this.props=D,this.context=ee,this.refs=X,this.updater=ue||x}K.prototype.isReactComponent={},K.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},K.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function de(){}de.prototype=K.prototype;function ce(D,ee,ue){this.props=D,this.context=ee,this.refs=X,this.updater=ue||x}var ae=ce.prototype=new de;ae.constructor=ce,G(ae,K.prototype),ae.isPureReactComponent=!0;var Ie=Array.isArray,pe={H:null,A:null,T:null,S:null,V:null},be=Object.prototype.hasOwnProperty;function P(D,ee,ue,re,ve,Pe){return ue=Pe.ref,{$$typeof:i,type:D,key:ee,ref:ue!==void 0?ue:null,props:Pe}}function b(D,ee){return P(D.type,ee,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function V(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ue){return ee[ue]})}var O=/\/+/g;function M(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):ee.toString(36)}function R(){}function tn(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function yt(D,ee,ue,re,ve){var Pe=typeof D;(Pe==="undefined"||Pe==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(Pe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case i:case e:Se=!0;break;case y:return Se=D._init,yt(Se(D._payload),ee,ue,re,ve)}}if(Se)return ve=ve(D),Se=re===""?"."+M(D,0):re,Ie(ve)?(ue="",Se!=null&&(ue=Se.replace(O,"$&/")+"/"),yt(ve,ee,ue,"",function(Ar){return Ar})):ve!=null&&(C(ve)&&(ve=b(ve,ue+(ve.key==null||D&&D.key===ve.key?"":(""+ve.key).replace(O,"$&/")+"/")+Se)),ee.push(ve)),1;Se=0;var Kt=re===""?".":re+":";if(Ie(D))for(var it=0;it<D.length;it++)re=D[it],Pe=Kt+M(re,it),Se+=yt(re,ee,ue,Pe,ve);else if(it=A(D),typeof it=="function")for(D=it.call(D),it=0;!(re=D.next()).done;)re=re.value,Pe=Kt+M(re,it++),Se+=yt(re,ee,ue,Pe,ve);else if(Pe==="object"){if(typeof D.then=="function")return yt(tn(D),ee,ue,re,ve);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Q(D,ee,ue){if(D==null)return D;var re=[],ve=0;return yt(D,re,"","",function(Pe){return ee.call(ue,Pe,ve++)}),re}function oe(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(ue){(D._status===0||D._status===-1)&&(D._status=1,D._result=ue)},function(ue){(D._status===0||D._status===-1)&&(D._status=2,D._result=ue)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var ye=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function He(){}return De.Children={map:Q,forEach:function(D,ee,ue){Q(D,function(){ee.apply(this,arguments)},ue)},count:function(D){var ee=0;return Q(D,function(){ee++}),ee},toArray:function(D){return Q(D,function(ee){return ee})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},De.Component=K,De.Fragment=t,De.Profiler=a,De.PureComponent=ce,De.StrictMode=n,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,De.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pe.H.useMemoCache(D)}},De.cache=function(D){return function(){return D.apply(null,arguments)}},De.cloneElement=function(D,ee,ue){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var re=G({},D.props),ve=D.key,Pe=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(Pe=void 0),ee.key!==void 0&&(ve=""+ee.key),ee)!be.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(re[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)re.children=ue;else if(1<Se){for(var Kt=Array(Se),it=0;it<Se;it++)Kt[it]=arguments[it+2];re.children=Kt}return P(D.type,ve,void 0,void 0,Pe,re)},De.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},De.createElement=function(D,ee,ue){var re,ve={},Pe=null;if(ee!=null)for(re in ee.key!==void 0&&(Pe=""+ee.key),ee)be.call(ee,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ve[re]=ee[re]);var Se=arguments.length-2;if(Se===1)ve.children=ue;else if(1<Se){for(var Kt=Array(Se),it=0;it<Se;it++)Kt[it]=arguments[it+2];ve.children=Kt}if(D&&D.defaultProps)for(re in Se=D.defaultProps,Se)ve[re]===void 0&&(ve[re]=Se[re]);return P(D,Pe,void 0,void 0,null,ve)},De.createRef=function(){return{current:null}},De.forwardRef=function(D){return{$$typeof:f,render:D}},De.isValidElement=C,De.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:oe}},De.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},De.startTransition=function(D){var ee=pe.T,ue={};pe.T=ue;try{var re=D(),ve=pe.S;ve!==null&&ve(ue,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(He,ye)}catch(Pe){ye(Pe)}finally{pe.T=ee}},De.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},De.use=function(D){return pe.H.use(D)},De.useActionState=function(D,ee,ue){return pe.H.useActionState(D,ee,ue)},De.useCallback=function(D,ee){return pe.H.useCallback(D,ee)},De.useContext=function(D){return pe.H.useContext(D)},De.useDebugValue=function(){},De.useDeferredValue=function(D,ee){return pe.H.useDeferredValue(D,ee)},De.useEffect=function(D,ee,ue){var re=pe.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(D,ee)},De.useId=function(){return pe.H.useId()},De.useImperativeHandle=function(D,ee,ue){return pe.H.useImperativeHandle(D,ee,ue)},De.useInsertionEffect=function(D,ee){return pe.H.useInsertionEffect(D,ee)},De.useLayoutEffect=function(D,ee){return pe.H.useLayoutEffect(D,ee)},De.useMemo=function(D,ee){return pe.H.useMemo(D,ee)},De.useOptimistic=function(D,ee){return pe.H.useOptimistic(D,ee)},De.useReducer=function(D,ee,ue){return pe.H.useReducer(D,ee,ue)},De.useRef=function(D){return pe.H.useRef(D)},De.useState=function(D){return pe.H.useState(D)},De.useSyncExternalStore=function(D,ee,ue){return pe.H.useSyncExternalStore(D,ee,ue)},De.useTransition=function(){return pe.H.useTransition()},De.version="19.1.1",De}var uI;function uy(){return uI||(uI=1,$g.exports=hD()),$g.exports}var Ct=uy();const dD=b0(Ct);var Wg={exports:{}},_c={},Xg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cI;function fD(){return cI||(cI=1,(function(i){function e(Q,oe){var ye=Q.length;Q.push(oe);e:for(;0<ye;){var He=ye-1>>>1,D=Q[He];if(0<a(D,oe))Q[He]=oe,Q[ye]=D,ye=He;else break e}}function t(Q){return Q.length===0?null:Q[0]}function n(Q){if(Q.length===0)return null;var oe=Q[0],ye=Q.pop();if(ye!==oe){Q[0]=ye;e:for(var He=0,D=Q.length,ee=D>>>1;He<ee;){var ue=2*(He+1)-1,re=Q[ue],ve=ue+1,Pe=Q[ve];if(0>a(re,ye))ve<D&&0>a(Pe,re)?(Q[He]=Pe,Q[ve]=ye,He=ve):(Q[He]=re,Q[ue]=ye,He=ue);else if(ve<D&&0>a(Pe,ye))Q[He]=Pe,Q[ve]=ye,He=ve;else break e}}return oe}function a(Q,oe){var ye=Q.sortIndex-oe.sortIndex;return ye!==0?ye:Q.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var m=[],g=[],y=1,T=null,A=3,x=!1,G=!1,X=!1,K=!1,de=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Ie(Q){for(var oe=t(g);oe!==null;){if(oe.callback===null)n(g);else if(oe.startTime<=Q)n(g),oe.sortIndex=oe.expirationTime,e(m,oe);else break;oe=t(g)}}function pe(Q){if(X=!1,Ie(Q),!G)if(t(m)!==null)G=!0,be||(be=!0,M());else{var oe=t(g);oe!==null&&yt(pe,oe.startTime-Q)}}var be=!1,P=-1,b=5,C=-1;function V(){return K?!0:!(i.unstable_now()-C<b)}function O(){if(K=!1,be){var Q=i.unstable_now();C=Q;var oe=!0;try{e:{G=!1,X&&(X=!1,ce(P),P=-1),x=!0;var ye=A;try{t:{for(Ie(Q),T=t(m);T!==null&&!(T.expirationTime>Q&&V());){var He=T.callback;if(typeof He=="function"){T.callback=null,A=T.priorityLevel;var D=He(T.expirationTime<=Q);if(Q=i.unstable_now(),typeof D=="function"){T.callback=D,Ie(Q),oe=!0;break t}T===t(m)&&n(m),Ie(Q)}else n(m);T=t(m)}if(T!==null)oe=!0;else{var ee=t(g);ee!==null&&yt(pe,ee.startTime-Q),oe=!1}}break e}finally{T=null,A=ye,x=!1}oe=void 0}}finally{oe?M():be=!1}}}var M;if(typeof ae=="function")M=function(){ae(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,tn=R.port2;R.port1.onmessage=O,M=function(){tn.postMessage(null)}}else M=function(){de(O,0)};function yt(Q,oe){P=de(function(){Q(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(Q){switch(A){case 1:case 2:case 3:var oe=3;break;default:oe=A}var ye=A;A=oe;try{return Q()}finally{A=ye}},i.unstable_requestPaint=function(){K=!0},i.unstable_runWithPriority=function(Q,oe){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ye=A;A=Q;try{return oe()}finally{A=ye}},i.unstable_scheduleCallback=function(Q,oe,ye){var He=i.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?He+ye:He):ye=He,Q){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ye+D,Q={id:y++,callback:oe,priorityLevel:Q,startTime:ye,expirationTime:D,sortIndex:-1},ye>He?(Q.sortIndex=ye,e(g,Q),t(m)===null&&Q===t(g)&&(X?(ce(P),P=-1):X=!0,yt(pe,ye-He))):(Q.sortIndex=D,e(m,Q),G||x||(G=!0,be||(be=!0,M()))),Q},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(Q){var oe=A;return function(){var ye=A;A=oe;try{return Q.apply(this,arguments)}finally{A=ye}}}})(Jg)),Jg}var hI;function mD(){return hI||(hI=1,Xg.exports=fD()),Xg.exports}var Zg={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dI;function pD(){if(dI)return mn;dI=1;var i=uy();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,mn.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},mn.flushSync=function(m){var g=c.T,y=n.p;try{if(c.T=null,n.p=2,m)return m()}finally{c.T=g,n.p=y,n.d.f()}},mn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,n.d.C(m,g))},mn.prefetchDNS=function(m){typeof m=="string"&&n.d.D(m)},mn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?n.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:x}):y==="script"&&n.d.X(m,{crossOrigin:T,integrity:A,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},mn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);n.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&n.d.M(m)},mn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin);n.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},mn.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);n.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else n.d.m(m)},mn.requestFormReset=function(m){n.d.r(m)},mn.unstable_batchedUpdates=function(m,g){return m(g)},mn.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},mn.useFormStatus=function(){return c.H.useHostTransitionStatus()},mn.version="19.1.1",mn}var fI;function gD(){if(fI)return Zg.exports;fI=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Zg.exports=pD(),Zg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mI;function _D(){if(mI)return _c;mI=1;var i=mD(),e=uy(),t=gD();function n(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(n(188))}function m(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(n(188));return s!==r?null:r}for(var o=r,u=s;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return f(d),r;if(p===u)return f(d),s;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var E=!1,w=d.child;w;){if(w===o){E=!0,o=d,u=p;break}if(w===u){E=!0,u=d,o=p;break}w=w.sibling}if(!E){for(w=p.child;w;){if(w===o){E=!0,o=p,u=d;break}if(w===u){E=!0,u=p,o=d;break}w=w.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),ce=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=O&&r[O]||r["@@iterator"],typeof r=="function"?r:null)}var R=Symbol.for("react.client.reference");function tn(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===R?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case G:return"Fragment";case K:return"Profiler";case X:return"StrictMode";case pe:return"Suspense";case be:return"SuspenseList";case C:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case x:return"Portal";case ae:return(r.displayName||"Context")+".Provider";case ce:return(r._context.displayName||"Context")+".Consumer";case Ie:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:tn(r.type)||"Memo";case b:s=r._payload,r=r._init;try{return tn(r(s))}catch{}}return null}var yt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},He=[],D=-1;function ee(r){return{current:r}}function ue(r){0>D||(r.current=He[D],He[D]=null,D--)}function re(r,s){D++,He[D]=r.current,r.current=s}var ve=ee(null),Pe=ee(null),Se=ee(null),Kt=ee(null);function it(r,s){switch(re(Se,s),re(Pe,r),re(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Ow(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Ow(s),r=kw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(ve),re(ve,r)}function Ar(){ue(ve),ue(Pe),ue(Se)}function ji(r){r.memoizedState!==null&&re(Kt,r);var s=ve.current,o=kw(s,r.type);s!==o&&(re(Pe,r),re(ve,o))}function ii(r){Pe.current===r&&(ue(ve),ue(Pe)),Kt.current===r&&(ue(Kt),hc._currentValue=ye)}var Xs=Object.prototype.hasOwnProperty,Js=i.unstable_scheduleCallback,Zs=i.unstable_cancelCallback,lu=i.unstable_shouldYield,jh=i.unstable_requestPaint,Wn=i.unstable_now,Ym=i.unstable_getCurrentPriorityLevel,uu=i.unstable_ImmediatePriority,po=i.unstable_UserBlockingPriority,ea=i.unstable_NormalPriority,$m=i.unstable_LowPriority,go=i.unstable_IdlePriority,cu=i.log,Hh=i.unstable_setDisableYieldValue,vt=null,Ye=null;function Mn(r){if(typeof cu=="function"&&Hh(r),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(vt,r)}catch{}}var dn=Math.clz32?Math.clz32:ta,Gh=Math.log,Wm=Math.LN2;function ta(r){return r>>>=0,r===0?32:31-(Gh(r)/Wm|0)|0}var na=256,ra=4194304;function dr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function _o(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var d=0,p=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?d=dr(u):(E&=w,E!==0?d=dr(E):o||(o=w&~r,o!==0&&(d=dr(o))))):(w=u&~p,w!==0?d=dr(w):E!==0?d=dr(E):o||(o=u&~r,o!==0&&(d=dr(o)))),d===0?0:s!==0&&s!==d&&(s&p)===0&&(p=d&-d,o=s&-s,p>=o||p===32&&(o&4194048)!==0)?s:d}function ia(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function hu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function du(){var r=na;return na<<=1,(na&4194048)===0&&(na=256),r}function fu(){var r=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),r}function si(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function ai(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function mu(r,s,o,u,d,p){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var w=r.entanglements,S=r.expirationTimes,z=r.hiddenUpdates;for(o=E&~o;0<o;){var Y=31-dn(o),J=1<<Y;w[Y]=0,S[Y]=-1;var F=z[Y];if(F!==null)for(z[Y]=null,Y=0;Y<F.length;Y++){var q=F[Y];q!==null&&(q.lane&=-536870913)}o&=~J}u!==0&&br(r,u,0),p!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=p&~(E&~s))}function br(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-dn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function pu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-dn(o),d=1<<u;d&s|r[u]&s&&(r[u]|=s),o&=~d}}function Hi(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function yo(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Gi(){var r=oe.p;return r!==0?r:(r=window.event,r===void 0?32:eI(r.type))}function Kh(r,s){var o=oe.p;try{return oe.p=r,s()}finally{oe.p=o}}var ut=Math.random().toString(36).slice(2),Bt="__reactFiber$"+ut,xt="__reactProps$"+ut,Xn="__reactContainer$"+ut,gu="__reactEvents$"+ut,Xm="__reactListeners$"+ut,Ki="__reactHandles$"+ut,Qh="__reactResources$"+ut,sa="__reactMarker$"+ut;function Qi(r){delete r[Bt],delete r[xt],delete r[gu],delete r[Xm],delete r[Ki]}function oi(r){var s=r[Bt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Xn]||o[Bt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=Bw(r);r!==null;){if(o=r[Bt])return o;r=Bw(r)}return s}r=o,o=r.parentNode}return null}function Sr(r){if(r=r[Bt]||r[Xn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Rr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(n(33))}function En(r){var s=r[Qh];return s||(s=r[Qh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function bt(r){r[sa]=!0}var _u=new Set,vo={};function fr(r,s){li(r,s),li(r+"Capture",s)}function li(r,s){for(vo[r]=s,r=0;r<s.length;r++)_u.add(s[r])}var Yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$h={},aa={};function Wh(r){return Xs.call(aa,r)?!0:Xs.call($h,r)?!1:Yh.test(r)?aa[r]=!0:($h[r]=!0,!1)}function Yi(r,s,o){if(Wh(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Cr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function nn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var oa,Xh;function ui(r){if(oa===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);oa=s&&s[1]||"",Xh=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+r+Xh}var Eo=!1;function To(r,s){if(!r||Eo)return"";Eo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var F=q}Reflect.construct(r,[],J)}else{try{J.call()}catch(q){F=q}r.call(J.prototype)}}else{try{throw Error()}catch(q){F=q}(J=r())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],w=p[1];if(E&&w){var S=E.split(`
`),z=w.split(`
`);for(d=u=0;u<S.length&&!S[u].includes("DetermineComponentFrameRoot");)u++;for(;d<z.length&&!z[d].includes("DetermineComponentFrameRoot");)d++;if(u===S.length||d===z.length)for(u=S.length-1,d=z.length-1;1<=u&&0<=d&&S[u]!==z[d];)d--;for(;1<=u&&0<=d;u--,d--)if(S[u]!==z[d]){if(u!==1||d!==1)do if(u--,d--,0>d||S[u]!==z[d]){var Y=`
`+S[u].replace(" at new "," at ");return r.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",r.displayName)),Y}while(1<=u&&0<=d);break}}}finally{Eo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?ui(o):""}function yu(r){switch(r.tag){case 26:case 27:case 5:return ui(r.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 15:return To(r.type,!1);case 11:return To(r.type.render,!1);case 1:return To(r.type,!0);case 31:return ui("Activity");default:return""}}function wo(r){try{var s="";do s+=yu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Tn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function vu(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Jm(r){var s=vu(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Io(r){r._valueTracker||(r._valueTracker=Jm(r))}function Eu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=vu(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function la(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Zm=/[\n"\\]/g;function Vt(r){return r.replace(Zm,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ln(r,s,o,u,d,p,E,w){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Tn(s)):r.value!==""+Tn(s)&&(r.value=""+Tn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?$i(r,E,Tn(s)):o!=null?$i(r,E,Tn(o)):u!=null&&r.removeAttribute("value"),d==null&&p!=null&&(r.defaultChecked=!!p),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+Tn(w):r.removeAttribute("name")}function ua(r,s,o,u,d,p,E,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),s!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||s!=null))return;o=o!=null?""+Tn(o):"",s=s!=null?""+Tn(s):o,w||s===r.value||(r.value=s),r.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=w?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function $i(r,s,o){s==="number"&&la(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function ci(r,s,o,u){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Tn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Ze(r,s,o){if(s!=null&&(s=""+Tn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Tn(o):""}function ca(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(n(92));if(yt(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Tn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Jn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var ha=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jh(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||ha.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Tu(r,s,o){if(s!=null&&typeof s!="object")throw Error(n(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&Jh(r,d,u)}else for(var p in s)s.hasOwnProperty(p)&&Jh(r,p,s[p])}function wu(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ao(r){return tp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var hi=null;function Zn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var di=null,fi=null;function Iu(r){var s=Sr(r);if(s&&(r=s.stateNode)){var o=r[xt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Ln(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var d=u[xt]||null;if(!d)throw Error(n(90));Ln(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Eu(u)}break e;case"textarea":Ze(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ci(r,!!o.multiple,s,!1)}}}var Dr=!1;function Zh(r,s,o){if(Dr)return r(s,o);Dr=!0;try{var u=r(s);return u}finally{if(Dr=!1,(di!==null||fi!==null)&&(Kd(),di&&(s=di,r=fi,fi=di=null,Iu(s),r)))for(s=0;s<r.length;s++)Iu(r[s])}}function da(r,s){var o=r.stateNode;if(o===null)return null;var u=o[xt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(mr)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){er=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{er=!1}var Nr=null,Wi=null,mi=null;function Au(){if(mi)return mi;var r,s=Wi,o=s.length,u,d="value"in Nr?Nr.value:Nr.textContent,p=d.length;for(r=0;r<o&&s[r]===d[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===d[p-u];u++);return mi=d.slice(r,1<u?1-u:void 0)}function Pr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function xr(){return!0}function bu(){return!1}function Qt(r){function s(o,u,d,p,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xr:bu,this.isPropagationStopped=bu,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Qt(Ke),ma=y({},Ke,{view:0,detail:0}),ed=Qt(ma),So,Ro,Vr,pa=y({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Vr&&(Vr&&r.type==="mousemove"?(So=r.screenX-Vr.screenX,Ro=r.screenY-Vr.screenY):Ro=So=0,Vr=r),So)},movementY:function(r){return"movementY"in r?r.movementY:Ro}}),tr=Qt(pa),td=y({},pa,{dataTransfer:0}),np=Qt(td),ga=y({},ma,{relatedTarget:0}),Co=Qt(ga),Su=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Do=Qt(Su),nd=y({},Ke,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),No=Qt(nd),rp=y({},Ke,{data:0}),Ru=Qt(rp),_a={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=id[r])?!!s[r]:!1}function ya(){return Cu}var sd=y({},ma,{key:function(r){if(r.key){var s=_a[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Pr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?rd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(r){return r.type==="keypress"?Pr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Pr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Po=Qt(sd),ad=y({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=Qt(ad),pi=y({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),od=Qt(pi),ld=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=Qt(ld),cd=y({},pa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),xo=Qt(cd),wn=y({},Ke,{newState:0,oldState:0}),hd=Qt(wn),dd=[9,13,27,32],Or=mr&&"CompositionEvent"in window,h=null;mr&&"documentMode"in document&&(h=document.documentMode);var _=mr&&"TextEvent"in window&&!h,v=mr&&(!Or||h&&8<h&&11>=h),I=" ",L=!1;function H(r,s){switch(r){case"keyup":return dd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ue=!1;function zt(r,s){switch(r){case"compositionend":return ie(s);case"keypress":return s.which!==32?null:(L=!0,I);case"textInput":return r=s.data,r===I&&L?null:r;default:return null}}function Be(r,s){if(Ue)return r==="compositionend"||!Or&&H(r,s)?(r=Au(),mi=Wi=Nr=null,Ue=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Yt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ft(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Yt[r.type]:s==="textarea"}function gi(r,s,o,u){di?fi?fi.push(u):fi=[u]:di=u,s=Jd(s,"onChange"),0<s.length&&(o=new bo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var rn=null,kr=null;function Nu(r){Dw(r,0)}function fd(r){var s=Rr(r);if(Eu(s))return r}function Wv(r,s){if(r==="change")return s}var Xv=!1;if(mr){var ip;if(mr){var sp="oninput"in document;if(!sp){var Jv=document.createElement("div");Jv.setAttribute("oninput","return;"),sp=typeof Jv.oninput=="function"}ip=sp}else ip=!1;Xv=ip&&(!document.documentMode||9<document.documentMode)}function Zv(){rn&&(rn.detachEvent("onpropertychange",eE),kr=rn=null)}function eE(r){if(r.propertyName==="value"&&fd(kr)){var s=[];gi(s,kr,r,Zn(r)),Zh(Nu,s)}}function B1(r,s,o){r==="focusin"?(Zv(),rn=s,kr=o,rn.attachEvent("onpropertychange",eE)):r==="focusout"&&Zv()}function z1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return fd(kr)}function F1(r,s){if(r==="click")return fd(s)}function q1(r,s){if(r==="input"||r==="change")return fd(s)}function j1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:j1;function Pu(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Xs.call(s,d)||!Un(r[d],s[d]))return!1}return!0}function tE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function nE(r,s){var o=tE(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tE(o)}}function rE(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?rE(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function iE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=la(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=la(r.document)}return s}function ap(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var H1=mr&&"documentMode"in document&&11>=document.documentMode,Vo=null,op=null,xu=null,lp=!1;function sE(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lp||Vo==null||Vo!==la(u)||(u=Vo,"selectionStart"in u&&ap(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xu&&Pu(xu,u)||(xu=u,u=Jd(op,"onSelect"),0<u.length&&(s=new bo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Vo)))}function va(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Oo={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},up={},aE={};mr&&(aE=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function Ea(r){if(up[r])return up[r];if(!Oo[r])return r;var s=Oo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in aE)return up[r]=s[o];return r}var oE=Ea("animationend"),lE=Ea("animationiteration"),uE=Ea("animationstart"),G1=Ea("transitionrun"),K1=Ea("transitionstart"),Q1=Ea("transitioncancel"),cE=Ea("transitionend"),hE=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cp.push("scrollEnd");function pr(r,s){hE.set(r,s),fr(s,[r])}var dE=new WeakMap;function nr(r,s){if(typeof r=="object"&&r!==null){var o=dE.get(r);return o!==void 0?o:(s={value:r,source:s,stack:wo(s)},dE.set(r,s),s)}return{value:r,source:s,stack:wo(s)}}var rr=[],ko=0,hp=0;function md(){for(var r=ko,s=hp=ko=0;s<r;){var o=rr[s];rr[s++]=null;var u=rr[s];rr[s++]=null;var d=rr[s];rr[s++]=null;var p=rr[s];if(rr[s++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}p!==0&&fE(o,d,p)}}function pd(r,s,o,u){rr[ko++]=r,rr[ko++]=s,rr[ko++]=o,rr[ko++]=u,hp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function dp(r,s,o,u){return pd(r,s,o,u),gd(r)}function Mo(r,s){return pd(r,null,null,s),gd(r)}function fE(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(d=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,d&&s!==null&&(d=31-dn(o),r=p.hiddenUpdates,u=r[d],u===null?r[d]=[s]:u.push(s),s.lane=o|536870912),p):null}function gd(r){if(50<rc)throw rc=0,yg=null,Error(n(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Lo={};function Y1(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(r,s,o,u){return new Y1(r,s,o,u)}function fp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _i(r,s){var o=r.alternate;return o===null?(o=Bn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function mE(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function _d(r,s,o,u,d,p){var E=0;if(u=r,typeof r=="function")fp(r)&&(E=1);else if(typeof r=="string")E=WC(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case C:return r=Bn(31,o,s,d),r.elementType=C,r.lanes=p,r;case G:return Ta(o.children,d,p,s);case X:E=8,d|=24;break;case K:return r=Bn(12,o,s,d|2),r.elementType=K,r.lanes=p,r;case pe:return r=Bn(13,o,s,d),r.elementType=pe,r.lanes=p,r;case be:return r=Bn(19,o,s,d),r.elementType=be,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case de:case ae:E=10;break e;case ce:E=9;break e;case Ie:E=11;break e;case P:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(n(130,r===null?"null":typeof r,"")),u=null}return s=Bn(E,o,s,d),s.elementType=r,s.type=u,s.lanes=p,s}function Ta(r,s,o,u){return r=Bn(7,r,u,s),r.lanes=o,r}function mp(r,s,o){return r=Bn(6,r,null,s),r.lanes=o,r}function pp(r,s,o){return s=Bn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Uo=[],Bo=0,yd=null,vd=0,ir=[],sr=0,wa=null,yi=1,vi="";function Ia(r,s){Uo[Bo++]=vd,Uo[Bo++]=yd,yd=r,vd=s}function pE(r,s,o){ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=wa,wa=r;var u=yi;r=vi;var d=32-dn(u)-1;u&=~(1<<d),o+=1;var p=32-dn(s)+d;if(30<p){var E=d-d%5;p=(u&(1<<E)-1).toString(32),u>>=E,d-=E,yi=1<<32-dn(s)+d|o<<d|u,vi=p+r}else yi=1<<p|o<<d|u,vi=r}function gp(r){r.return!==null&&(Ia(r,1),pE(r,1,0))}function _p(r){for(;r===yd;)yd=Uo[--Bo],Uo[Bo]=null,vd=Uo[--Bo],Uo[Bo]=null;for(;r===wa;)wa=ir[--sr],ir[sr]=null,vi=ir[--sr],ir[sr]=null,yi=ir[--sr],ir[sr]=null}var In=null,Et=null,Ge=!1,Aa=null,Mr=!1,yp=Error(n(519));function ba(r){var s=Error(n(418,""));throw ku(nr(s,r)),yp}function gE(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Bt]=r,s[xt]=u,o){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(o=0;o<sc.length;o++)Oe(sc[o],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Oe("invalid",s),ua(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Io(s);break;case"select":Oe("invalid",s);break;case"textarea":Oe("invalid",s),ca(s,u.value,u.defaultValue,u.children),Io(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Vw(s.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",s),Oe("toggle",s)),u.onScroll!=null&&Oe("scroll",s),u.onScrollEnd!=null&&Oe("scrollend",s),u.onClick!=null&&(s.onclick=Zd),s=!0):s=!1,s||ba(r)}function _E(r){for(In=r.return;In;)switch(In.tag){case 5:case 13:Mr=!1;return;case 27:case 3:Mr=!0;return;default:In=In.return}}function Vu(r){if(r!==In)return!1;if(!Ge)return _E(r),Ge=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Og(r.type,r.memoizedProps)),o=!o),o&&Et&&ba(r),_E(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Et=_r(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Et=null}}else s===27?(s=Et,ds(r.type)?(r=Ug,Ug=null,Et=r):Et=s):Et=In?_r(r.stateNode.nextSibling):null;return!0}function Ou(){Et=In=null,Ge=!1}function yE(){var r=Aa;return r!==null&&(Pn===null?Pn=r:Pn.push.apply(Pn,r),Aa=null),r}function ku(r){Aa===null?Aa=[r]:Aa.push(r)}var vp=ee(null),Sa=null,Ei=null;function Xi(r,s,o){re(vp,s._currentValue),s._currentValue=o}function Ti(r){r._currentValue=vp.current,ue(vp)}function Ep(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function Tp(r,s,o,u){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var p=d.dependencies;if(p!==null){var E=d.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=d;for(var S=0;S<s.length;S++)if(w.context===s[S]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),Ep(p.return,o,r),u||(E=null);break e}p=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Ep(E,o,r),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===r){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Mu(r,s,o,u){r=null;for(var d=s,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(n(387));if(E=E.memoizedProps,E!==null){var w=d.type;Un(d.pendingProps.value,E.value)||(r!==null?r.push(w):r=[w])}}else if(d===Kt.current){if(E=d.alternate,E===null)throw Error(n(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(hc):r=[hc])}d=d.return}r!==null&&Tp(s,r,o,u),s.flags|=262144}function Ed(r){for(r=r.firstContext;r!==null;){if(!Un(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ra(r){Sa=r,Ei=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function fn(r){return vE(Sa,r)}function Td(r,s){return Sa===null&&Ra(r),vE(r,s)}function vE(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Ei===null){if(r===null)throw Error(n(308));Ei=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Ei=Ei.next=s;return o}var $1=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},W1=i.unstable_scheduleCallback,X1=i.unstable_NormalPriority,qt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wp(){return{controller:new $1,data:new Map,refCount:0}}function Lu(r){r.refCount--,r.refCount===0&&W1(X1,function(){r.controller.abort()})}var Uu=null,Ip=0,zo=0,Fo=null;function J1(r,s){if(Uu===null){var o=Uu=[];Ip=0,zo=bg(),Fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ip++,s.then(EE,EE),s}function EE(){if(--Ip===0&&Uu!==null){Fo!==null&&(Fo.status="fulfilled");var r=Uu;Uu=null,zo=0,Fo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function Z1(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var TE=Q.S;Q.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&J1(r,s),TE!==null&&TE(r,s)};var Ca=ee(null);function Ap(){var r=Ca.current;return r!==null?r:st.pooledCache}function wd(r,s){s===null?re(Ca,Ca.current):re(Ca,s.pool)}function wE(){var r=Ap();return r===null?null:{parent:qt._currentValue,pool:r}}var Bu=Error(n(460)),IE=Error(n(474)),Id=Error(n(542)),bp={then:function(){}};function AE(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ad(){}function bE(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ad,Ad),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,RE(r),r;default:if(typeof s.status=="string")s.then(Ad,Ad);else{if(r=st,r!==null&&100<r.shellSuspendCounter)throw Error(n(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,RE(r),r}throw zu=s,Bu}}var zu=null;function SE(){if(zu===null)throw Error(n(459));var r=zu;return zu=null,r}function RE(r){if(r===Bu||r===Id)throw Error(n(483))}var Ji=!1;function Sp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Zi(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function es(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=gd(r),fE(r,null,o),s}return pd(r,u,s,o),gd(r)}function Fu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,pu(r,o)}}function Cp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=s:p=p.next=s}else d=p=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Dp=!1;function qu(){if(Dp){var r=Fo;if(r!==null)throw r}}function ju(r,s,o,u){Dp=!1;var d=r.updateQueue;Ji=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var S=w,z=S.next;S.next=null,E===null?p=z:E.next=z,E=S;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==E&&(w===null?Y.firstBaseUpdate=z:w.next=z,Y.lastBaseUpdate=S))}if(p!==null){var J=d.baseState;E=0,Y=z=S=null,w=p;do{var F=w.lane&-536870913,q=F!==w.lane;if(q?(ze&F)===F:(u&F)===F){F!==0&&F===zo&&(Dp=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=r,Te=w;F=s;var nt=o;switch(Te.tag){case 1:if(Ae=Te.payload,typeof Ae=="function"){J=Ae.call(nt,J,F);break e}J=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Te.payload,F=typeof Ae=="function"?Ae.call(nt,J,F):Ae,F==null)break e;J=y({},J,F);break e;case 2:Ji=!0}}F=w.callback,F!==null&&(r.flags|=64,q&&(r.flags|=8192),q=d.callbacks,q===null?d.callbacks=[F]:q.push(F))}else q={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(z=Y=q,S=J):Y=Y.next=q,E|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);Y===null&&(S=J),d.baseState=S,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,p===null&&(d.shared.lanes=0),ls|=E,r.lanes=E,r.memoizedState=J}}function CE(r,s){if(typeof r!="function")throw Error(n(191,r));r.call(s)}function DE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)CE(o[r],s)}var qo=ee(null),bd=ee(0);function NE(r,s){r=Ci,re(bd,r),re(qo,s),Ci=r|s.baseLanes}function Np(){re(bd,Ci),re(qo,qo.current)}function Pp(){Ci=bd.current,ue(qo),ue(bd)}var ts=0,Ne=null,et=null,Ot=null,Sd=!1,jo=!1,Da=!1,Rd=0,Hu=0,Ho=null,eC=0;function St(){throw Error(n(321))}function xp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Un(r[o],s[o]))return!1;return!0}function Vp(r,s,o,u,d,p){return ts=p,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Q.H=r===null||r.memoizedState===null?fT:mT,Da=!1,p=o(u,d),Da=!1,jo&&(p=xE(s,o,u,d)),PE(r),p}function PE(r){Q.H=Vd;var s=et!==null&&et.next!==null;if(ts=0,Ot=et=Ne=null,Sd=!1,Hu=0,Ho=null,s)throw Error(n(300));r===null||$t||(r=r.dependencies,r!==null&&Ed(r)&&($t=!0))}function xE(r,s,o,u){Ne=r;var d=0;do{if(jo&&(Ho=null),Hu=0,jo=!1,25<=d)throw Error(n(301));if(d+=1,Ot=et=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Q.H=oC,p=s(o,u)}while(jo);return p}function tC(){var r=Q.H,s=r.useState()[0];return s=typeof s.then=="function"?Gu(s):s,r=r.useState()[0],(et!==null?et.memoizedState:null)!==r&&(Ne.flags|=1024),s}function Op(){var r=Rd!==0;return Rd=0,r}function kp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Mp(r){if(Sd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Sd=!1}ts=0,Ot=et=Ne=null,jo=!1,Hu=Rd=0,Ho=null}function Dn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Ne.memoizedState=Ot=r:Ot=Ot.next=r,Ot}function kt(){if(et===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=et.next;var s=Ot===null?Ne.memoizedState:Ot.next;if(s!==null)Ot=s,et=r;else{if(r===null)throw Ne.alternate===null?Error(n(467)):Error(n(310));et=r,r={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Ot===null?Ne.memoizedState=Ot=r:Ot=Ot.next=r}return Ot}function Lp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gu(r){var s=Hu;return Hu+=1,Ho===null&&(Ho=[]),r=bE(Ho,r,s),s=Ne,(Ot===null?s.memoizedState:Ot.next)===null&&(s=s.alternate,Q.H=s===null||s.memoizedState===null?fT:mT),r}function Cd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Gu(r);if(r.$$typeof===ae)return fn(r)}throw Error(n(438,String(r)))}function Up(r){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Lp(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=V;return s.index++,o}function wi(r,s){return typeof s=="function"?s(r):s}function Dd(r){var s=kt();return Bp(s,et,r)}function Bp(r,s,o){var u=r.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=o;var d=r.baseQueue,p=u.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}s.baseQueue=d=p,u.pending=null}if(p=r.baseState,d===null)r.memoizedState=p;else{s=d.next;var w=E=null,S=null,z=s,Y=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(ze&J)===J:(ts&J)===J){var F=z.revertLane;if(F===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===zo&&(Y=!0);else if((ts&F)===F){z=z.next,F===zo&&(Y=!0);continue}else J={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=J,E=p):S=S.next=J,Ne.lanes|=F,ls|=F;J=z.action,Da&&o(p,J),p=z.hasEagerState?z.eagerState:o(p,J)}else F={lane:J,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=F,E=p):S=S.next=F,Ne.lanes|=J,ls|=J;z=z.next}while(z!==null&&z!==s);if(S===null?E=p:S.next=w,!Un(p,r.memoizedState)&&($t=!0,Y&&(o=Fo,o!==null)))throw o;r.memoizedState=p,r.baseState=E,r.baseQueue=S,u.lastRenderedState=p}return d===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function zp(r){var s=kt(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=r;var u=o.dispatch,d=o.pending,p=s.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=r(p,E.action),E=E.next;while(E!==d);Un(p,s.memoizedState)||($t=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function VE(r,s,o){var u=Ne,d=kt(),p=Ge;if(p){if(o===void 0)throw Error(n(407));o=o()}else o=s();var E=!Un((et||d).memoizedState,o);E&&(d.memoizedState=o,$t=!0),d=d.queue;var w=ME.bind(null,u,d,r);if(Ku(2048,8,w,[r]),d.getSnapshot!==s||E||Ot!==null&&Ot.memoizedState.tag&1){if(u.flags|=2048,Go(9,Nd(),kE.bind(null,u,d,o,s),null),st===null)throw Error(n(349));p||(ts&124)!==0||OE(u,s,o)}return o}function OE(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Lp(),Ne.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function kE(r,s,o,u){s.value=o,s.getSnapshot=u,LE(s)&&UE(r)}function ME(r,s,o){return o(function(){LE(s)&&UE(r)})}function LE(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Un(r,o)}catch{return!0}}function UE(r){var s=Mo(r,2);s!==null&&Hn(s,r,2)}function Fp(r){var s=Dn();if(typeof r=="function"){var o=r;if(r=o(),Da){Mn(!0);try{o()}finally{Mn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:r},s}function BE(r,s,o,u){return r.baseState=o,Bp(r,et,typeof u=="function"?u:wi)}function nC(r,s,o,u,d){if(xd(r))throw Error(n(485));if(r=s.action,r!==null){var p={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};Q.T!==null?o(!0):p.isTransition=!1,u(p),o=s.pending,o===null?(p.next=s.pending=p,zE(s,p)):(p.next=o.next,s.pending=o.next=p)}}function zE(r,s){var o=s.action,u=s.payload,d=r.state;if(s.isTransition){var p=Q.T,E={};Q.T=E;try{var w=o(d,u),S=Q.S;S!==null&&S(E,w),FE(r,s,w)}catch(z){qp(r,s,z)}finally{Q.T=p}}else try{p=o(d,u),FE(r,s,p)}catch(z){qp(r,s,z)}}function FE(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){qE(r,s,u)},function(u){return qp(r,s,u)}):qE(r,s,o)}function qE(r,s,o){s.status="fulfilled",s.value=o,jE(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,zE(r,o)))}function qp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,jE(s),s=s.next;while(s!==u)}r.action=null}function jE(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function HE(r,s){return s}function GE(r,s){if(Ge){var o=st.formState;if(o!==null){e:{var u=Ne;if(Ge){if(Et){t:{for(var d=Et,p=Mr;d.nodeType!==8;){if(!p){d=null;break t}if(d=_r(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Et=_r(d.nextSibling),u=d.data==="F!";break e}}ba(u)}u=!1}u&&(s=o[0])}}return o=Dn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:HE,lastRenderedState:s},o.queue=u,o=cT.bind(null,Ne,u),u.dispatch=o,u=Fp(!1),p=Qp.bind(null,Ne,!1,u.queue),u=Dn(),d={state:s,dispatch:null,action:r,pending:null},u.queue=d,o=nC.bind(null,Ne,d,p,o),d.dispatch=o,u.memoizedState=r,[s,o,!1]}function KE(r){var s=kt();return QE(s,et,r)}function QE(r,s,o){if(s=Bp(r,s,HE)[0],r=Dd(wi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Gu(s)}catch(E){throw E===Bu?Id:E}else u=s;s=kt();var d=s.queue,p=d.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Go(9,Nd(),rC.bind(null,d,o),null)),[u,p,r]}function rC(r,s){r.action=s}function YE(r){var s=kt(),o=et;if(o!==null)return QE(s,o,r);kt(),s=s.memoizedState,o=kt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Go(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Lp(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Nd(){return{destroy:void 0,resource:void 0}}function $E(){return kt().memoizedState}function Pd(r,s,o,u){var d=Dn();u=u===void 0?null:u,Ne.flags|=r,d.memoizedState=Go(1|s,Nd(),o,u)}function Ku(r,s,o,u){var d=kt();u=u===void 0?null:u;var p=d.memoizedState.inst;et!==null&&u!==null&&xp(u,et.memoizedState.deps)?d.memoizedState=Go(s,p,o,u):(Ne.flags|=r,d.memoizedState=Go(1|s,p,o,u))}function WE(r,s){Pd(8390656,8,r,s)}function XE(r,s){Ku(2048,8,r,s)}function JE(r,s){return Ku(4,2,r,s)}function ZE(r,s){return Ku(4,4,r,s)}function eT(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function tT(r,s,o){o=o!=null?o.concat([r]):null,Ku(4,4,eT.bind(null,s,r),o)}function jp(){}function nT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&xp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function rT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&xp(s,u[1]))return u[0];if(u=r(),Da){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u}function Hp(r,s,o){return o===void 0||(ts&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=aw(),Ne.lanes|=r,ls|=r,o)}function iT(r,s,o,u){return Un(o,s)?o:qo.current!==null?(r=Hp(r,o,u),Un(r,s)||($t=!0),r):(ts&42)===0?($t=!0,r.memoizedState=o):(r=aw(),Ne.lanes|=r,ls|=r,s)}function sT(r,s,o,u,d){var p=oe.p;oe.p=p!==0&&8>p?p:8;var E=Q.T,w={};Q.T=w,Qp(r,!1,s,o);try{var S=d(),z=Q.S;if(z!==null&&z(w,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=Z1(S,u);Qu(r,s,Y,jn(r))}else Qu(r,s,u,jn(r))}catch(J){Qu(r,s,{then:function(){},status:"rejected",reason:J},jn())}finally{oe.p=p,Q.T=E}}function iC(){}function Gp(r,s,o,u){if(r.tag!==5)throw Error(n(476));var d=aT(r).queue;sT(r,d,s,ye,o===null?iC:function(){return oT(r),o(u)})}function aT(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:ye},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function oT(r){var s=aT(r).next.queue;Qu(r,s,{},jn())}function Kp(){return fn(hc)}function lT(){return kt().memoizedState}function uT(){return kt().memoizedState}function sC(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=jn();r=Zi(o);var u=es(s,r,o);u!==null&&(Hn(u,s,o),Fu(u,s,o)),s={cache:wp()},r.payload=s;return}s=s.return}}function aC(r,s,o){var u=jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},xd(r)?hT(s,o):(o=dp(r,s,o,u),o!==null&&(Hn(o,r,u),dT(o,s,u)))}function cT(r,s,o){var u=jn();Qu(r,s,o,u)}function Qu(r,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(xd(r))hT(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var E=s.lastRenderedState,w=p(E,o);if(d.hasEagerState=!0,d.eagerState=w,Un(w,E))return pd(r,s,d,0),st===null&&md(),!1}catch{}finally{}if(o=dp(r,s,d,u),o!==null)return Hn(o,r,u),dT(o,s,u),!0}return!1}function Qp(r,s,o,u){if(u={lane:2,revertLane:bg(),action:u,hasEagerState:!1,eagerState:null,next:null},xd(r)){if(s)throw Error(n(479))}else s=dp(r,o,u,2),s!==null&&Hn(s,r,2)}function xd(r){var s=r.alternate;return r===Ne||s!==null&&s===Ne}function hT(r,s){jo=Sd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function dT(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,pu(r,o)}}var Vd={readContext:fn,use:Cd,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},fT={readContext:fn,use:Cd,useCallback:function(r,s){return Dn().memoizedState=[r,s===void 0?null:s],r},useContext:fn,useEffect:WE,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Pd(4194308,4,eT.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Pd(4194308,4,r,s)},useInsertionEffect:function(r,s){Pd(4,2,r,s)},useMemo:function(r,s){var o=Dn();s=s===void 0?null:s;var u=r();if(Da){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Dn();if(o!==void 0){var d=o(s);if(Da){Mn(!0);try{o(s)}finally{Mn(!1)}}}else d=s;return u.memoizedState=u.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},u.queue=r,r=r.dispatch=aC.bind(null,Ne,r),[u.memoizedState,r]},useRef:function(r){var s=Dn();return r={current:r},s.memoizedState=r},useState:function(r){r=Fp(r);var s=r.queue,o=cT.bind(null,Ne,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:jp,useDeferredValue:function(r,s){var o=Dn();return Hp(o,r,s)},useTransition:function(){var r=Fp(!1);return r=sT.bind(null,Ne,r.queue,!0,!1),Dn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ne,d=Dn();if(Ge){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),st===null)throw Error(n(349));(ze&124)!==0||OE(u,s,o)}d.memoizedState=o;var p={value:o,getSnapshot:s};return d.queue=p,WE(ME.bind(null,u,p,r),[r]),u.flags|=2048,Go(9,Nd(),kE.bind(null,u,p,o,s),null),o},useId:function(){var r=Dn(),s=st.identifierPrefix;if(Ge){var o=vi,u=yi;o=(u&~(1<<32-dn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Rd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=eC++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Kp,useFormState:GE,useActionState:GE,useOptimistic:function(r){var s=Dn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Qp.bind(null,Ne,!0,o),o.dispatch=s,[r,s]},useMemoCache:Up,useCacheRefresh:function(){return Dn().memoizedState=sC.bind(null,Ne)}},mT={readContext:fn,use:Cd,useCallback:nT,useContext:fn,useEffect:XE,useImperativeHandle:tT,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rT,useReducer:Dd,useRef:$E,useState:function(){return Dd(wi)},useDebugValue:jp,useDeferredValue:function(r,s){var o=kt();return iT(o,et.memoizedState,r,s)},useTransition:function(){var r=Dd(wi)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Gu(r),s]},useSyncExternalStore:VE,useId:lT,useHostTransitionStatus:Kp,useFormState:KE,useActionState:KE,useOptimistic:function(r,s){var o=kt();return BE(o,et,r,s)},useMemoCache:Up,useCacheRefresh:uT},oC={readContext:fn,use:Cd,useCallback:nT,useContext:fn,useEffect:XE,useImperativeHandle:tT,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rT,useReducer:zp,useRef:$E,useState:function(){return zp(wi)},useDebugValue:jp,useDeferredValue:function(r,s){var o=kt();return et===null?Hp(o,r,s):iT(o,et.memoizedState,r,s)},useTransition:function(){var r=zp(wi)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Gu(r),s]},useSyncExternalStore:VE,useId:lT,useHostTransitionStatus:Kp,useFormState:YE,useActionState:YE,useOptimistic:function(r,s){var o=kt();return et!==null?BE(o,et,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Up,useCacheRefresh:uT},Ko=null,Yu=0;function Od(r){var s=Yu;return Yu+=1,Ko===null&&(Ko=[]),bE(Ko,r,s)}function $u(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function kd(r,s){throw s.$$typeof===T?Error(n(525)):(r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function pT(r){var s=r._init;return s(r._payload)}function gT(r){function s(k,N){if(r){var B=k.deletions;B===null?(k.deletions=[N],k.flags|=16):B.push(N)}}function o(k,N){if(!r)return null;for(;N!==null;)s(k,N),N=N.sibling;return null}function u(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function d(k,N){return k=_i(k,N),k.index=0,k.sibling=null,k}function p(k,N,B){return k.index=B,r?(B=k.alternate,B!==null?(B=B.index,B<N?(k.flags|=67108866,N):B):(k.flags|=67108866,N)):(k.flags|=1048576,N)}function E(k){return r&&k.alternate===null&&(k.flags|=67108866),k}function w(k,N,B,$){return N===null||N.tag!==6?(N=mp(B,k.mode,$),N.return=k,N):(N=d(N,B),N.return=k,N)}function S(k,N,B,$){var fe=B.type;return fe===G?Y(k,N,B.props.children,$,B.key):N!==null&&(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&pT(fe)===N.type)?(N=d(N,B.props),$u(N,B),N.return=k,N):(N=_d(B.type,B.key,B.props,null,k.mode,$),$u(N,B),N.return=k,N)}function z(k,N,B,$){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=pp(B,k.mode,$),N.return=k,N):(N=d(N,B.children||[]),N.return=k,N)}function Y(k,N,B,$,fe){return N===null||N.tag!==7?(N=Ta(B,k.mode,$,fe),N.return=k,N):(N=d(N,B),N.return=k,N)}function J(k,N,B){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=mp(""+N,k.mode,B),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return B=_d(N.type,N.key,N.props,null,k.mode,B),$u(B,N),B.return=k,B;case x:return N=pp(N,k.mode,B),N.return=k,N;case b:var $=N._init;return N=$(N._payload),J(k,N,B)}if(yt(N)||M(N))return N=Ta(N,k.mode,B,null),N.return=k,N;if(typeof N.then=="function")return J(k,Od(N),B);if(N.$$typeof===ae)return J(k,Td(k,N),B);kd(k,N)}return null}function F(k,N,B,$){var fe=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return fe!==null?null:w(k,N,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case A:return B.key===fe?S(k,N,B,$):null;case x:return B.key===fe?z(k,N,B,$):null;case b:return fe=B._init,B=fe(B._payload),F(k,N,B,$)}if(yt(B)||M(B))return fe!==null?null:Y(k,N,B,$,null);if(typeof B.then=="function")return F(k,N,Od(B),$);if(B.$$typeof===ae)return F(k,N,Td(k,B),$);kd(k,B)}return null}function q(k,N,B,$,fe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return k=k.get(B)||null,w(N,k,""+$,fe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return k=k.get($.key===null?B:$.key)||null,S(N,k,$,fe);case x:return k=k.get($.key===null?B:$.key)||null,z(N,k,$,fe);case b:var xe=$._init;return $=xe($._payload),q(k,N,B,$,fe)}if(yt($)||M($))return k=k.get(B)||null,Y(N,k,$,fe,null);if(typeof $.then=="function")return q(k,N,B,Od($),fe);if($.$$typeof===ae)return q(k,N,B,Td(N,$),fe);kd(N,$)}return null}function Ae(k,N,B,$){for(var fe=null,xe=null,_e=N,we=N=0,Xt=null;_e!==null&&we<B.length;we++){_e.index>we?(Xt=_e,_e=null):Xt=_e.sibling;var qe=F(k,_e,B[we],$);if(qe===null){_e===null&&(_e=Xt);break}r&&_e&&qe.alternate===null&&s(k,_e),N=p(qe,N,we),xe===null?fe=qe:xe.sibling=qe,xe=qe,_e=Xt}if(we===B.length)return o(k,_e),Ge&&Ia(k,we),fe;if(_e===null){for(;we<B.length;we++)_e=J(k,B[we],$),_e!==null&&(N=p(_e,N,we),xe===null?fe=_e:xe.sibling=_e,xe=_e);return Ge&&Ia(k,we),fe}for(_e=u(_e);we<B.length;we++)Xt=q(_e,k,we,B[we],$),Xt!==null&&(r&&Xt.alternate!==null&&_e.delete(Xt.key===null?we:Xt.key),N=p(Xt,N,we),xe===null?fe=Xt:xe.sibling=Xt,xe=Xt);return r&&_e.forEach(function(_s){return s(k,_s)}),Ge&&Ia(k,we),fe}function Te(k,N,B,$){if(B==null)throw Error(n(151));for(var fe=null,xe=null,_e=N,we=N=0,Xt=null,qe=B.next();_e!==null&&!qe.done;we++,qe=B.next()){_e.index>we?(Xt=_e,_e=null):Xt=_e.sibling;var _s=F(k,_e,qe.value,$);if(_s===null){_e===null&&(_e=Xt);break}r&&_e&&_s.alternate===null&&s(k,_e),N=p(_s,N,we),xe===null?fe=_s:xe.sibling=_s,xe=_s,_e=Xt}if(qe.done)return o(k,_e),Ge&&Ia(k,we),fe;if(_e===null){for(;!qe.done;we++,qe=B.next())qe=J(k,qe.value,$),qe!==null&&(N=p(qe,N,we),xe===null?fe=qe:xe.sibling=qe,xe=qe);return Ge&&Ia(k,we),fe}for(_e=u(_e);!qe.done;we++,qe=B.next())qe=q(_e,k,we,qe.value,$),qe!==null&&(r&&qe.alternate!==null&&_e.delete(qe.key===null?we:qe.key),N=p(qe,N,we),xe===null?fe=qe:xe.sibling=qe,xe=qe);return r&&_e.forEach(function(lD){return s(k,lD)}),Ge&&Ia(k,we),fe}function nt(k,N,B,$){if(typeof B=="object"&&B!==null&&B.type===G&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case A:e:{for(var fe=B.key;N!==null;){if(N.key===fe){if(fe=B.type,fe===G){if(N.tag===7){o(k,N.sibling),$=d(N,B.props.children),$.return=k,k=$;break e}}else if(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&pT(fe)===N.type){o(k,N.sibling),$=d(N,B.props),$u($,B),$.return=k,k=$;break e}o(k,N);break}else s(k,N);N=N.sibling}B.type===G?($=Ta(B.props.children,k.mode,$,B.key),$.return=k,k=$):($=_d(B.type,B.key,B.props,null,k.mode,$),$u($,B),$.return=k,k=$)}return E(k);case x:e:{for(fe=B.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){o(k,N.sibling),$=d(N,B.children||[]),$.return=k,k=$;break e}else{o(k,N);break}else s(k,N);N=N.sibling}$=pp(B,k.mode,$),$.return=k,k=$}return E(k);case b:return fe=B._init,B=fe(B._payload),nt(k,N,B,$)}if(yt(B))return Ae(k,N,B,$);if(M(B)){if(fe=M(B),typeof fe!="function")throw Error(n(150));return B=fe.call(B),Te(k,N,B,$)}if(typeof B.then=="function")return nt(k,N,Od(B),$);if(B.$$typeof===ae)return nt(k,N,Td(k,B),$);kd(k,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,N!==null&&N.tag===6?(o(k,N.sibling),$=d(N,B),$.return=k,k=$):(o(k,N),$=mp(B,k.mode,$),$.return=k,k=$),E(k)):o(k,N)}return function(k,N,B,$){try{Yu=0;var fe=nt(k,N,B,$);return Ko=null,fe}catch(_e){if(_e===Bu||_e===Id)throw _e;var xe=Bn(29,_e,null,k.mode);return xe.lanes=$,xe.return=k,xe}finally{}}}var Qo=gT(!0),_T=gT(!1),ar=ee(null),Lr=null;function ns(r){var s=r.alternate;re(jt,jt.current&1),re(ar,r),Lr===null&&(s===null||qo.current!==null||s.memoizedState!==null)&&(Lr=r)}function yT(r){if(r.tag===22){if(re(jt,jt.current),re(ar,r),Lr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Lr=r)}}else rs()}function rs(){re(jt,jt.current),re(ar,ar.current)}function Ii(r){ue(ar),Lr===r&&(Lr=null),ue(jt)}var jt=ee(0);function Md(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Lg(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Yp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var $p={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=jn(),d=Zi(u);d.payload=s,o!=null&&(d.callback=o),s=es(r,d,u),s!==null&&(Hn(s,r,u),Fu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=jn(),d=Zi(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=es(r,d,u),s!==null&&(Hn(s,r,u),Fu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=jn(),u=Zi(o);u.tag=2,s!=null&&(u.callback=s),s=es(r,u,o),s!==null&&(Hn(s,r,o),Fu(s,r,o))}};function vT(r,s,o,u,d,p,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,E):s.prototype&&s.prototype.isPureReactComponent?!Pu(o,u)||!Pu(d,p):!0}function ET(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&$p.enqueueReplaceState(s,s.state,null)}function Na(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var Ld=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function TT(r){Ld(r)}function wT(r){console.error(r)}function IT(r){Ld(r)}function Ud(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function AT(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wp(r,s,o){return o=Zi(o),o.tag=3,o.payload={element:null},o.callback=function(){Ud(r,s)},o}function bT(r){return r=Zi(r),r.tag=3,r}function ST(r,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;r.payload=function(){return d(p)},r.callback=function(){AT(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){AT(s,o,u),typeof d!="function"&&(us===null?us=new Set([this]):us.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function lC(r,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Mu(s,o,d,!0),o=ar.current,o!==null){switch(o.tag){case 13:return Lr===null?Eg():o.alternate===null&&Tt===0&&(Tt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===bp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),wg(r,u,d)),!1;case 22:return o.flags|=65536,u===bp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),wg(r,u,d)),!1}throw Error(n(435,o.tag))}return wg(r,u,d),Eg(),!1}if(Ge)return s=ar.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==yp&&(r=Error(n(422),{cause:u}),ku(nr(r,o)))):(u!==yp&&(s=Error(n(423),{cause:u}),ku(nr(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,u=nr(u,o),d=Wp(r.stateNode,u,d),Cp(r,d),Tt!==4&&(Tt=2)),!1;var p=Error(n(520),{cause:u});if(p=nr(p,o),nc===null?nc=[p]:nc.push(p),Tt!==4&&(Tt=2),s===null)return!0;u=nr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=Wp(o.stateNode,u,r),Cp(o,r),!1;case 1:if(s=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(us===null||!us.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=bT(d),ST(d,r,o,u),Cp(o,d),!1}o=o.return}while(o!==null);return!1}var RT=Error(n(461)),$t=!1;function sn(r,s,o,u){s.child=r===null?_T(s,null,o,u):Qo(s,r.child,o,u)}function CT(r,s,o,u,d){o=o.render;var p=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return Ra(s),u=Vp(r,s,o,E,p,d),w=Op(),r!==null&&!$t?(kp(r,s,d),Ai(r,s,d)):(Ge&&w&&gp(s),s.flags|=1,sn(r,s,u,d),s.child)}function DT(r,s,o,u,d){if(r===null){var p=o.type;return typeof p=="function"&&!fp(p)&&p.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=p,NT(r,s,p,u,d)):(r=_d(o.type,null,u,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,!ig(r,d)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Pu,o(E,u)&&r.ref===s.ref)return Ai(r,s,d)}return s.flags|=1,r=_i(p,u),r.ref=s.ref,r.return=s,s.child=r}function NT(r,s,o,u,d){if(r!==null){var p=r.memoizedProps;if(Pu(p,u)&&r.ref===s.ref)if($t=!1,s.pendingProps=u=p,ig(r,d))(r.flags&131072)!==0&&($t=!0);else return s.lanes=r.lanes,Ai(r,s,d)}return Xp(r,s,o,u,d)}function PT(r,s,o){var u=s.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,r!==null){for(d=s.child=r.child,p=0;d!==null;)p=p|d.lanes|d.childLanes,d=d.sibling;s.childLanes=p&~u}else s.childLanes=0,s.child=null;return xT(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&wd(s,p!==null?p.cachePool:null),p!==null?NE(s,p):Np(),yT(s);else return s.lanes=s.childLanes=536870912,xT(r,s,p!==null?p.baseLanes|o:o,o)}else p!==null?(wd(s,p.cachePool),NE(s,p),rs(),s.memoizedState=null):(r!==null&&wd(s,null),Np(),rs());return sn(r,s,d,o),s.child}function xT(r,s,o,u){var d=Ap();return d=d===null?null:{parent:qt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&wd(s,null),Np(),yT(s),r!==null&&Mu(r,s,u,!0),null}function Bd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(n(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Xp(r,s,o,u,d){return Ra(s),o=Vp(r,s,o,u,void 0,d),u=Op(),r!==null&&!$t?(kp(r,s,d),Ai(r,s,d)):(Ge&&u&&gp(s),s.flags|=1,sn(r,s,o,d),s.child)}function VT(r,s,o,u,d,p){return Ra(s),s.updateQueue=null,o=xE(s,u,o,d),PE(r),u=Op(),r!==null&&!$t?(kp(r,s,p),Ai(r,s,p)):(Ge&&u&&gp(s),s.flags|=1,sn(r,s,o,p),s.child)}function OT(r,s,o,u,d){if(Ra(s),s.stateNode===null){var p=Lo,E=o.contextType;typeof E=="object"&&E!==null&&(p=fn(E)),p=new o(u,p),s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=$p,s.stateNode=p,p._reactInternals=s,p=s.stateNode,p.props=u,p.state=s.memoizedState,p.refs={},Sp(s),E=o.contextType,p.context=typeof E=="object"&&E!==null?fn(E):Lo,p.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Yp(s,o,E,u),p.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&$p.enqueueReplaceState(p,p.state,null),ju(s,u,p,d),qu(),p.state=s.memoizedState),typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){p=s.stateNode;var w=s.memoizedProps,S=Na(o,w);p.props=S;var z=p.context,Y=o.contextType;E=Lo,typeof Y=="object"&&Y!==null&&(E=fn(Y));var J=o.getDerivedStateFromProps;Y=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||z!==E)&&ET(s,p,u,E),Ji=!1;var F=s.memoizedState;p.state=F,ju(s,u,p,d),qu(),z=s.memoizedState,w||F!==z||Ji?(typeof J=="function"&&(Yp(s,o,J,u),z=s.memoizedState),(S=Ji||vT(s,o,S,u,F,z,E))?(Y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(s.flags|=4194308)):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),p.props=u,p.state=z,p.context=E,u=S):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{p=s.stateNode,Rp(r,s),E=s.memoizedProps,Y=Na(o,E),p.props=Y,J=s.pendingProps,F=p.context,z=o.contextType,S=Lo,typeof z=="object"&&z!==null&&(S=fn(z)),w=o.getDerivedStateFromProps,(z=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==J||F!==S)&&ET(s,p,u,S),Ji=!1,F=s.memoizedState,p.state=F,ju(s,u,p,d),qu();var q=s.memoizedState;E!==J||F!==q||Ji||r!==null&&r.dependencies!==null&&Ed(r.dependencies)?(typeof w=="function"&&(Yp(s,o,w,u),q=s.memoizedState),(Y=Ji||vT(s,o,Y,u,F,q,S)||r!==null&&r.dependencies!==null&&Ed(r.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,q,S),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,q,S)),typeof p.componentDidUpdate=="function"&&(s.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=q),p.props=u,p.state=q,p.context=S,u=Y):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),u=!1)}return p=u,Bd(r,s),u=(s.flags&128)!==0,p||u?(p=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),s.flags|=1,r!==null&&u?(s.child=Qo(s,r.child,null,d),s.child=Qo(s,null,o,d)):sn(r,s,o,d),s.memoizedState=p.state,r=s.child):r=Ai(r,s,d),r}function kT(r,s,o,u){return Ou(),s.flags|=256,sn(r,s,o,u),s.child}var Jp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zp(r){return{baseLanes:r,cachePool:wE()}}function eg(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=or),r}function MT(r,s,o){var u=s.pendingProps,d=!1,p=(s.flags&128)!==0,E;if((E=p)||(E=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),E&&(d=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ge){if(d?ns(s):rs(),Ge){var w=Et,S;if(S=w){e:{for(S=w,w=Mr;S.nodeType!==8;){if(!w){w=null;break e}if(S=_r(S.nextSibling),S===null){w=null;break e}}w=S}w!==null?(s.memoizedState={dehydrated:w,treeContext:wa!==null?{id:yi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},S=Bn(18,null,null,0),S.stateNode=w,S.return=s,s.child=S,In=s,Et=null,S=!0):S=!1}S||ba(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Lg(w)?s.lanes=32:s.lanes=536870912,null;Ii(s)}return w=u.children,u=u.fallback,d?(rs(),d=s.mode,w=zd({mode:"hidden",children:w},d),u=Ta(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,d=s.child,d.memoizedState=Zp(o),d.childLanes=eg(r,E,o),s.memoizedState=Jp,u):(ns(s),tg(s,w))}if(S=r.memoizedState,S!==null&&(w=S.dehydrated,w!==null)){if(p)s.flags&256?(ns(s),s.flags&=-257,s=ng(r,s,o)):s.memoizedState!==null?(rs(),s.child=r.child,s.flags|=128,s=null):(rs(),d=u.fallback,w=s.mode,u=zd({mode:"visible",children:u.children},w),d=Ta(d,w,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,Qo(s,r.child,null,o),u=s.child,u.memoizedState=Zp(o),u.childLanes=eg(r,E,o),s.memoizedState=Jp,s=d);else if(ns(s),Lg(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(n(419)),u.stack="",u.digest=E,ku({value:u,source:null,stack:null}),s=ng(r,s,o)}else if($t||Mu(r,s,o,!1),E=(o&r.childLanes)!==0,$t||E){if(E=st,E!==null&&(u=o&-o,u=(u&42)!==0?1:Hi(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==S.retryLane))throw S.retryLane=u,Mo(r,u),Hn(E,r,u),RT;w.data==="$?"||Eg(),s=ng(r,s,o)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=S.treeContext,Et=_r(w.nextSibling),In=s,Ge=!0,Aa=null,Mr=!1,r!==null&&(ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=wa,yi=r.id,vi=r.overflow,wa=s),s=tg(s,u.children),s.flags|=4096);return s}return d?(rs(),d=u.fallback,w=s.mode,S=r.child,z=S.sibling,u=_i(S,{mode:"hidden",children:u.children}),u.subtreeFlags=S.subtreeFlags&65011712,z!==null?d=_i(z,d):(d=Ta(d,w,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,w=r.child.memoizedState,w===null?w=Zp(o):(S=w.cachePool,S!==null?(z=qt._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=wE(),w={baseLanes:w.baseLanes|o,cachePool:S}),d.memoizedState=w,d.childLanes=eg(r,E,o),s.memoizedState=Jp,u):(ns(s),o=r.child,r=o.sibling,o=_i(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function tg(r,s){return s=zd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function zd(r,s){return r=Bn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function ng(r,s,o){return Qo(s,r.child,null,o),r=tg(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function LT(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Ep(r.return,s,o)}function rg(r,s,o,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function UT(r,s,o){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if(sn(r,s,u.children,o),u=jt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&LT(r,o,s);else if(r.tag===19)LT(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(re(jt,u),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&Md(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),rg(s,!1,d,o,p);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Md(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}rg(s,!0,o,null,p);break;case"together":rg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ai(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Mu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,o=_i(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=_i(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function ig(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Ed(r)))}function uC(r,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),Xi(s,qt,r.memoizedState.cache),Ou();break;case 27:case 5:ji(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:Xi(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(ns(s),s.flags|=128,null):(o&s.child.childLanes)!==0?MT(r,s,o):(ns(s),r=Ai(r,s,o),r!==null?r.sibling:null);ns(s);break;case 19:var d=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Mu(r,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return UT(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),re(jt,jt.current),u)break;return null;case 22:case 23:return s.lanes=0,PT(r,s,o);case 24:Xi(s,qt,r.memoizedState.cache)}return Ai(r,s,o)}function BT(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)$t=!0;else{if(!ig(r,o)&&(s.flags&128)===0)return $t=!1,uC(r,s,o);$t=(r.flags&131072)!==0}else $t=!1,Ge&&(s.flags&1048576)!==0&&pE(s,vd,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")fp(u)?(r=Na(u,r),s.tag=1,s=OT(null,s,u,r,o)):(s.tag=0,s=Xp(null,s,u,r,o));else{if(u!=null){if(d=u.$$typeof,d===Ie){s.tag=11,s=CT(null,s,u,r,o);break e}else if(d===P){s.tag=14,s=DT(null,s,u,r,o);break e}}throw s=tn(u)||u,Error(n(306,s,""))}}return s;case 0:return Xp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=Na(u,s.pendingProps),OT(r,s,u,d,o);case 3:e:{if(it(s,s.stateNode.containerInfo),r===null)throw Error(n(387));u=s.pendingProps;var p=s.memoizedState;d=p.element,Rp(r,s),ju(s,u,null,o);var E=s.memoizedState;if(u=E.cache,Xi(s,qt,u),u!==p.cache&&Tp(s,[qt],o,!0),qu(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){s=kT(r,s,u,o);break e}else if(u!==d){d=nr(Error(n(424)),s),ku(d),s=kT(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Et=_r(r.firstChild),In=s,Ge=!0,Aa=null,Mr=!0,o=_T(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ou(),u===d){s=Ai(r,s,o);break e}sn(r,s,u,o)}s=s.child}return s;case 26:return Bd(r,s),r===null?(o=jw(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,r=s.pendingProps,u=ef(Se.current).createElement(o),u[Bt]=s,u[xt]=r,on(u,o,r),bt(u),s.stateNode=u):s.memoizedState=jw(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return ji(s),r===null&&Ge&&(u=s.stateNode=zw(s.type,s.pendingProps,Se.current),In=s,Mr=!0,d=Et,ds(s.type)?(Ug=d,Et=_r(u.firstChild)):Et=d),sn(r,s,s.pendingProps.children,o),Bd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ge&&((d=u=Et)&&(u=LC(u,s.type,s.pendingProps,Mr),u!==null?(s.stateNode=u,In=s,Et=_r(u.firstChild),Mr=!1,d=!0):d=!1),d||ba(s)),ji(s),d=s.type,p=s.pendingProps,E=r!==null?r.memoizedProps:null,u=p.children,Og(d,p)?u=null:E!==null&&Og(d,E)&&(s.flags|=32),s.memoizedState!==null&&(d=Vp(r,s,tC,null,null,o),hc._currentValue=d),Bd(r,s),sn(r,s,u,o),s.child;case 6:return r===null&&Ge&&((r=o=Et)&&(o=UC(o,s.pendingProps,Mr),o!==null?(s.stateNode=o,In=s,Et=null,r=!0):r=!1),r||ba(s)),null;case 13:return MT(r,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Qo(s,null,u,o):sn(r,s,u,o),s.child;case 11:return CT(r,s,s.type,s.pendingProps,o);case 7:return sn(r,s,s.pendingProps,o),s.child;case 8:return sn(r,s,s.pendingProps.children,o),s.child;case 12:return sn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Xi(s,s.type,u.value),sn(r,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Ra(s),d=fn(d),u=u(d),s.flags|=1,sn(r,s,u,o),s.child;case 14:return DT(r,s,s.type,s.pendingProps,o);case 15:return NT(r,s,s.type,s.pendingProps,o);case 19:return UT(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=zd(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=_i(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return PT(r,s,o);case 24:return Ra(s),u=fn(qt),r===null?(d=Ap(),d===null&&(d=st,p=wp(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),s.memoizedState={parent:u,cache:d},Sp(s),Xi(s,qt,d)):((r.lanes&o)!==0&&(Rp(r,s),ju(s,null,null,o),qu()),d=r.memoizedState,p=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Xi(s,qt,u)):(u=p.cache,Xi(s,qt,u),u!==d.cache&&Tp(s,[qt],o,!0))),sn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(n(156,s.tag))}function bi(r){r.flags|=4}function zT(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Yw(s)){if(s=ar.current,s!==null&&((ze&4194048)===ze?Lr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||s!==Lr))throw zu=bp,IE;r.flags|=8192}}function Fd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?fu():536870912,r.lanes|=s,Xo|=s)}function Wu(r,s){if(!Ge)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function pt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function cC(r,s,o){var u=s.pendingProps;switch(_p(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(s),null;case 1:return pt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Ti(qt),Ar(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Vu(s)?bi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yE())),pt(s),null;case 26:return o=s.memoizedState,r===null?(bi(s),o!==null?(pt(s),zT(s,o)):(pt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(bi(s),pt(s),zT(s,o)):(pt(s),s.flags&=-16777217):(r.memoizedProps!==u&&bi(s),pt(s),s.flags&=-16777217),null;case 27:ii(s),o=Se.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return pt(s),null}r=ve.current,Vu(s)?gE(s):(r=zw(d,u,o),s.stateNode=r,bi(s))}return pt(s),null;case 5:if(ii(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return pt(s),null}if(r=ve.current,Vu(s))gE(s);else{switch(d=ef(Se.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}r[Bt]=s,r[xt]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(on(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&bi(s)}}return pt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(r=Se.current,Vu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,d=In,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}r[Bt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Vw(r.nodeValue,o)),r||ba(s)}else r=ef(r).createTextNode(u),r[Bt]=s,s.stateNode=r}return pt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=Vu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!d)throw Error(n(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[Bt]=s}else Ou(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;pt(s),d=!1}else d=yE(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Ii(s),s):(Ii(s),null)}if(Ii(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Fd(s,s.updateQueue),pt(s),null;case 4:return Ar(),r===null&&Dg(s.stateNode.containerInfo),pt(s),null;case 10:return Ti(s.type),pt(s),null;case 19:if(ue(jt),d=s.memoizedState,d===null)return pt(s),null;if(u=(s.flags&128)!==0,p=d.rendering,p===null)if(u)Wu(d,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(p=Md(r),p!==null){for(s.flags|=128,Wu(d,!1),r=p.updateQueue,s.updateQueue=r,Fd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)mE(o,r),o=o.sibling;return re(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wn()>Hd&&(s.flags|=128,u=!0,Wu(d,!1),s.lanes=4194304)}else{if(!u)if(r=Md(p),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Fd(s,r),Wu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Ge)return pt(s),null}else 2*Wn()-d.renderingStartTime>Hd&&o!==536870912&&(s.flags|=128,u=!0,Wu(d,!1),s.lanes=4194304);d.isBackwards?(p.sibling=s.child,s.child=p):(r=d.last,r!==null?r.sibling=p:s.child=p,d.last=p)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wn(),s.sibling=null,r=jt.current,re(jt,u?r&1|2:r&1),s):(pt(s),null);case 22:case 23:return Ii(s),Pp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(pt(s),s.subtreeFlags&6&&(s.flags|=8192)):pt(s),o=s.updateQueue,o!==null&&Fd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ue(Ca),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ti(qt),pt(s),null;case 25:return null;case 30:return null}throw Error(n(156,s.tag))}function hC(r,s){switch(_p(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ti(qt),Ar(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return ii(s),null;case 13:if(Ii(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Ou()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(jt),null;case 4:return Ar(),null;case 10:return Ti(s.type),null;case 22:case 23:return Ii(s),Pp(),r!==null&&ue(Ca),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Ti(qt),null;case 25:return null;default:return null}}function FT(r,s){switch(_p(s),s.tag){case 3:Ti(qt),Ar();break;case 26:case 27:case 5:ii(s);break;case 4:Ar();break;case 13:Ii(s);break;case 19:ue(jt);break;case 10:Ti(s.type);break;case 22:case 23:Ii(s),Pp(),r!==null&&ue(Ca);break;case 24:Ti(qt)}}function Xu(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&r)===r){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==d)}}catch(w){rt(s,s.return,w)}}function is(r,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&r)===r){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=s;var S=o,z=w;try{z()}catch(Y){rt(d,S,Y)}}}u=u.next}while(u!==p)}}catch(Y){rt(s,s.return,Y)}}function qT(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{DE(s,o)}catch(u){rt(r,r.return,u)}}}function jT(r,s,o){o.props=Na(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){rt(r,s,u)}}function Ju(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(d){rt(r,s,d)}}function Ur(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){rt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){rt(r,s,d)}else o.current=null}function HT(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){rt(r,r.return,d)}}function sg(r,s,o){try{var u=r.stateNode;xC(u,r.type,o,s),u[xt]=s}catch(d){rt(r,r.return,d)}}function GT(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ds(r.type)||r.tag===4}function ag(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||GT(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ds(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function og(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Zd));else if(u!==4&&(u===27&&ds(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(og(r,s,o),r=r.sibling;r!==null;)og(r,s,o),r=r.sibling}function qd(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&ds(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(qd(r,s,o),r=r.sibling;r!==null;)qd(r,s,o),r=r.sibling}function KT(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);on(s,u,o),s[Bt]=r,s[xt]=o}catch(p){rt(r,r.return,p)}}var Si=!1,Rt=!1,lg=!1,QT=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function dC(r,s){if(r=r.containerInfo,xg=of,r=iE(r),ap(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,w=-1,S=-1,z=0,Y=0,J=r,F=null;t:for(;;){for(var q;J!==o||d!==0&&J.nodeType!==3||(w=E+d),J!==p||u!==0&&J.nodeType!==3||(S=E+u),J.nodeType===3&&(E+=J.nodeValue.length),(q=J.firstChild)!==null;)F=J,J=q;for(;;){if(J===r)break t;if(F===o&&++z===d&&(w=E),F===p&&++Y===u&&(S=E),(q=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=q}o=w===-1||S===-1?null:{start:w,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vg={focusedElem:r,selectionRange:o},of=!1,Wt=s;Wt!==null;)if(s=Wt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Wt=r;else for(;Wt!==null;){switch(s=Wt,p=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,o=s,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Ae=Na(o.type,d,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ae,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(Te){rt(o,o.return,Te)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Mg(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Mg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(n(163))}if(r=s.sibling,r!==null){r.return=s.return,Wt=r;break}Wt=s.return}}function YT(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ss(r,o),u&4&&Xu(5,o);break;case 1:if(ss(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(E){rt(o,o.return,E)}else{var d=Na(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(E){rt(o,o.return,E)}}u&64&&qT(o),u&512&&Ju(o,o.return);break;case 3:if(ss(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{DE(r,s)}catch(E){rt(o,o.return,E)}}break;case 27:s===null&&u&4&&KT(o);case 26:case 5:ss(r,o),s===null&&u&4&&HT(o),u&512&&Ju(o,o.return);break;case 12:ss(r,o);break;case 13:ss(r,o),u&4&&XT(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=TC.bind(null,o),BC(r,o))));break;case 22:if(u=o.memoizedState!==null||Si,!u){s=s!==null&&s.memoizedState!==null||Rt,d=Si;var p=Rt;Si=u,(Rt=s)&&!p?as(r,o,(o.subtreeFlags&8772)!==0):ss(r,o),Si=d,Rt=p}break;case 30:break;default:ss(r,o)}}function $T(r){var s=r.alternate;s!==null&&(r.alternate=null,$T(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Qi(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ct=null,Nn=!1;function Ri(r,s,o){for(o=o.child;o!==null;)WT(r,s,o),o=o.sibling}function WT(r,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(vt,o)}catch{}switch(o.tag){case 26:Rt||Ur(o,s),Ri(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||Ur(o,s);var u=ct,d=Nn;ds(o.type)&&(ct=o.stateNode,Nn=!1),Ri(r,s,o),oc(o.stateNode),ct=u,Nn=d;break;case 5:Rt||Ur(o,s);case 6:if(u=ct,d=Nn,ct=null,Ri(r,s,o),ct=u,Nn=d,ct!==null)if(Nn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(o.stateNode)}catch(p){rt(o,s,p)}else try{ct.removeChild(o.stateNode)}catch(p){rt(o,s,p)}break;case 18:ct!==null&&(Nn?(r=ct,Uw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),pc(r)):Uw(ct,o.stateNode));break;case 4:u=ct,d=Nn,ct=o.stateNode.containerInfo,Nn=!0,Ri(r,s,o),ct=u,Nn=d;break;case 0:case 11:case 14:case 15:Rt||is(2,o,s),Rt||is(4,o,s),Ri(r,s,o);break;case 1:Rt||(Ur(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&jT(o,s,u)),Ri(r,s,o);break;case 21:Ri(r,s,o);break;case 22:Rt=(u=Rt)||o.memoizedState!==null,Ri(r,s,o),Rt=u;break;default:Ri(r,s,o)}}function XT(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{pc(r)}catch(o){rt(s,s.return,o)}}function fC(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new QT),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new QT),s;default:throw Error(n(435,r.tag))}}function ug(r,s){var o=fC(r);s.forEach(function(u){var d=wC.bind(null,r,u);o.has(u)||(o.add(u),u.then(d,d))})}function zn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=r,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(ds(w.type)){ct=w.stateNode,Nn=!1;break e}break;case 5:ct=w.stateNode,Nn=!1;break e;case 3:case 4:ct=w.stateNode.containerInfo,Nn=!0;break e}w=w.return}if(ct===null)throw Error(n(160));WT(p,E,d),ct=null,Nn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)JT(s,r),s=s.sibling}var gr=null;function JT(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:zn(s,r),Fn(r),u&4&&(is(3,r,r.return),Xu(3,r),is(5,r,r.return));break;case 1:zn(s,r),Fn(r),u&512&&(Rt||o===null||Ur(o,o.return)),u&64&&Si&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=gr;if(zn(s,r),Fn(r),u&512&&(Rt||o===null||Ur(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[sa]||p[Bt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),on(p,u,o),p[Bt]=r,bt(p),u=p;break e;case"link":var E=Kw("link","href",d).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(p=E[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}p=d.createElement(u),on(p,u,o),d.head.appendChild(p);break;case"meta":if(E=Kw("meta","content",d).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(p=E[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}p=d.createElement(u),on(p,u,o),d.head.appendChild(p);break;default:throw Error(n(468,u))}p[Bt]=r,bt(p),u=p}r.stateNode=u}else Qw(d,r.type,r.stateNode);else r.stateNode=Gw(d,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?Qw(d,r.type,r.stateNode):Gw(d,u,r.memoizedProps)):u===null&&r.stateNode!==null&&sg(r,r.memoizedProps,o.memoizedProps)}break;case 27:zn(s,r),Fn(r),u&512&&(Rt||o===null||Ur(o,o.return)),o!==null&&u&4&&sg(r,r.memoizedProps,o.memoizedProps);break;case 5:if(zn(s,r),Fn(r),u&512&&(Rt||o===null||Ur(o,o.return)),r.flags&32){d=r.stateNode;try{Jn(d,"")}catch(q){rt(r,r.return,q)}}u&4&&r.stateNode!=null&&(d=r.memoizedProps,sg(r,d,o!==null?o.memoizedProps:d)),u&1024&&(lg=!0);break;case 6:if(zn(s,r),Fn(r),u&4){if(r.stateNode===null)throw Error(n(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(q){rt(r,r.return,q)}}break;case 3:if(rf=null,d=gr,gr=tf(s.containerInfo),zn(s,r),gr=d,Fn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pc(s.containerInfo)}catch(q){rt(r,r.return,q)}lg&&(lg=!1,ZT(r));break;case 4:u=gr,gr=tf(r.stateNode.containerInfo),zn(s,r),Fn(r),gr=u;break;case 12:zn(s,r),Fn(r);break;case 13:zn(s,r),Fn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(pg=Wn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,ug(r,u)));break;case 22:d=r.memoizedState!==null;var S=o!==null&&o.memoizedState!==null,z=Si,Y=Rt;if(Si=z||d,Rt=Y||S,zn(s,r),Rt=Y,Si=z,Fn(r),u&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||S||Si||Rt||Pa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){S=o=s;try{if(p=S.stateNode,d)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=S.stateNode;var J=S.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){rt(S,S.return,q)}}}else if(s.tag===6){if(o===null){S=s;try{S.stateNode.nodeValue=d?"":S.memoizedProps}catch(q){rt(S,S.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ug(r,o))));break;case 19:zn(s,r),Fn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,ug(r,u)));break;case 30:break;case 21:break;default:zn(s,r),Fn(r)}}function Fn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(GT(u)){o=u;break}u=u.return}if(o==null)throw Error(n(160));switch(o.tag){case 27:var d=o.stateNode,p=ag(r);qd(r,p,d);break;case 5:var E=o.stateNode;o.flags&32&&(Jn(E,""),o.flags&=-33);var w=ag(r);qd(r,w,E);break;case 3:case 4:var S=o.stateNode.containerInfo,z=ag(r);og(r,z,S);break;default:throw Error(n(161))}}catch(Y){rt(r,r.return,Y)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function ZT(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;ZT(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ss(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)YT(r,s.alternate,s),s=s.sibling}function Pa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:is(4,s,s.return),Pa(s);break;case 1:Ur(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&jT(s,s.return,o),Pa(s);break;case 27:oc(s.stateNode);case 26:case 5:Ur(s,s.return),Pa(s);break;case 22:s.memoizedState===null&&Pa(s);break;case 30:Pa(s);break;default:Pa(s)}r=r.sibling}}function as(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=r,p=s,E=p.flags;switch(p.tag){case 0:case 11:case 15:as(d,p,o),Xu(4,p);break;case 1:if(as(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(z){rt(u,u.return,z)}if(u=p,d=u.updateQueue,d!==null){var w=u.stateNode;try{var S=d.shared.hiddenCallbacks;if(S!==null)for(d.shared.hiddenCallbacks=null,d=0;d<S.length;d++)CE(S[d],w)}catch(z){rt(u,u.return,z)}}o&&E&64&&qT(p),Ju(p,p.return);break;case 27:KT(p);case 26:case 5:as(d,p,o),o&&u===null&&E&4&&HT(p),Ju(p,p.return);break;case 12:as(d,p,o);break;case 13:as(d,p,o),o&&E&4&&XT(d,p);break;case 22:p.memoizedState===null&&as(d,p,o),Ju(p,p.return);break;case 30:break;default:as(d,p,o)}s=s.sibling}}function cg(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Lu(o))}function hg(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Lu(r))}function Br(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ew(r,s,o,u),s=s.sibling}function ew(r,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Br(r,s,o,u),d&2048&&Xu(9,s);break;case 1:Br(r,s,o,u);break;case 3:Br(r,s,o,u),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Lu(r)));break;case 12:if(d&2048){Br(r,s,o,u),r=s.stateNode;try{var p=s.memoizedProps,E=p.id,w=p.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(S){rt(s,s.return,S)}}else Br(r,s,o,u);break;case 13:Br(r,s,o,u);break;case 23:break;case 22:p=s.stateNode,E=s.alternate,s.memoizedState!==null?p._visibility&2?Br(r,s,o,u):Zu(r,s):p._visibility&2?Br(r,s,o,u):(p._visibility|=2,Yo(r,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&cg(E,s);break;case 24:Br(r,s,o,u),d&2048&&hg(s.alternate,s);break;default:Br(r,s,o,u)}}function Yo(r,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var p=r,E=s,w=o,S=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:Yo(p,E,w,S,d),Xu(8,E);break;case 23:break;case 22:var Y=E.stateNode;E.memoizedState!==null?Y._visibility&2?Yo(p,E,w,S,d):Zu(p,E):(Y._visibility|=2,Yo(p,E,w,S,d)),d&&z&2048&&cg(E.alternate,E);break;case 24:Yo(p,E,w,S,d),d&&z&2048&&hg(E.alternate,E);break;default:Yo(p,E,w,S,d)}s=s.sibling}}function Zu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,d=u.flags;switch(u.tag){case 22:Zu(o,u),d&2048&&cg(u.alternate,u);break;case 24:Zu(o,u),d&2048&&hg(u.alternate,u);break;default:Zu(o,u)}s=s.sibling}}var ec=8192;function $o(r){if(r.subtreeFlags&ec)for(r=r.child;r!==null;)tw(r),r=r.sibling}function tw(r){switch(r.tag){case 26:$o(r),r.flags&ec&&r.memoizedState!==null&&JC(gr,r.memoizedState,r.memoizedProps);break;case 5:$o(r);break;case 3:case 4:var s=gr;gr=tf(r.stateNode.containerInfo),$o(r),gr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=ec,ec=16777216,$o(r),ec=s):$o(r));break;default:$o(r)}}function nw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function tc(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,iw(u,r)}nw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)rw(r),r=r.sibling}function rw(r){switch(r.tag){case 0:case 11:case 15:tc(r),r.flags&2048&&is(9,r,r.return);break;case 3:tc(r);break;case 12:tc(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,jd(r)):tc(r);break;default:tc(r)}}function jd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,iw(u,r)}nw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:is(8,s,s.return),jd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,jd(s));break;default:jd(s)}r=r.sibling}}function iw(r,s){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:is(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Lu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=r;Wt!==null;){u=Wt;var d=u.sibling,p=u.return;if($T(u),u===o){Wt=null;break e}if(d!==null){d.return=p,Wt=d;break e}Wt=p}}}var mC={getCacheForType:function(r){var s=fn(qt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},pC=typeof WeakMap=="function"?WeakMap:Map,$e=0,st=null,Ve=null,ze=0,We=0,qn=null,os=!1,Wo=!1,dg=!1,Ci=0,Tt=0,ls=0,xa=0,fg=0,or=0,Xo=0,nc=null,Pn=null,mg=!1,pg=0,Hd=1/0,Gd=null,us=null,an=0,cs=null,Jo=null,Zo=0,gg=0,_g=null,sw=null,rc=0,yg=null;function jn(){if(($e&2)!==0&&ze!==0)return ze&-ze;if(Q.T!==null){var r=zo;return r!==0?r:bg()}return Gi()}function aw(){or===0&&(or=(ze&536870912)===0||Ge?du():536870912);var r=ar.current;return r!==null&&(r.flags|=32),or}function Hn(r,s,o){(r===st&&(We===2||We===9)||r.cancelPendingCommit!==null)&&(el(r,0),hs(r,ze,or,!1)),ai(r,o),(($e&2)===0||r!==st)&&(r===st&&(($e&2)===0&&(xa|=o),Tt===4&&hs(r,ze,or,!1)),zr(r))}function ow(r,s,o){if(($e&6)!==0)throw Error(n(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||ia(r,s),d=u?yC(r,s):Tg(r,s,!0),p=u;do{if(d===0){Wo&&!u&&hs(r,s,0,!1);break}else{if(o=r.current.alternate,p&&!gC(o)){d=Tg(r,s,!1),p=!1;continue}if(d===2){if(p=s,r.errorRecoveryDisabledLanes&p)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=r;d=nc;var S=w.current.memoizedState.isDehydrated;if(S&&(el(w,E).flags|=256),E=Tg(w,E,!1),E!==2){if(dg&&!S){w.errorRecoveryDisabledLanes|=p,xa|=p,d=4;break e}p=Pn,Pn=d,p!==null&&(Pn===null?Pn=p:Pn.push.apply(Pn,p))}d=E}if(p=!1,d!==2)continue}}if(d===1){el(r,0),hs(r,s,0,!0);break}e:{switch(u=r,p=d,p){case 0:case 1:throw Error(n(345));case 4:if((s&4194048)!==s)break;case 6:hs(u,s,or,!os);break e;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(n(329))}if((s&62914560)===s&&(d=pg+300-Wn(),10<d)){if(hs(u,s,or,!os),_o(u,0,!0)!==0)break e;u.timeoutHandle=Mw(lw.bind(null,u,o,Pn,Gd,mg,s,or,xa,Xo,os,p,2,-0,0),d);break e}lw(u,o,Pn,Gd,mg,s,or,xa,Xo,os,p,0,-0,0)}}break}while(!0);zr(r)}function lw(r,s,o,u,d,p,E,w,S,z,Y,J,F,q){if(r.timeoutHandle=-1,J=s.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(cc={stylesheets:null,count:0,unsuspend:XC},tw(s),J=ZC(),J!==null)){r.cancelPendingCommit=J(pw.bind(null,r,s,p,o,u,d,E,w,S,Y,1,F,q)),hs(r,p,E,!z);return}pw(r,s,p,o,u,d,E,w,S)}function gC(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Un(p(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hs(r,s,o,u){s&=~fg,s&=~xa,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var d=s;0<d;){var p=31-dn(d),E=1<<p;u[p]=-1,d&=~E}o!==0&&br(r,o,s)}function Kd(){return($e&6)===0?(ic(0),!1):!0}function vg(){if(Ve!==null){if(We===0)var r=Ve.return;else r=Ve,Ei=Sa=null,Mp(r),Ko=null,Yu=0,r=Ve;for(;r!==null;)FT(r.alternate,r),r=r.return;Ve=null}}function el(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,OC(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),vg(),st=r,Ve=o=_i(r.current,null),ze=s,We=0,qn=null,os=!1,Wo=ia(r,s),dg=!1,Xo=or=fg=xa=ls=Tt=0,Pn=nc=null,mg=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var d=31-dn(u),p=1<<d;s|=r[d],u&=~p}return Ci=s,md(),o}function uw(r,s){Ne=null,Q.H=Vd,s===Bu||s===Id?(s=SE(),We=3):s===IE?(s=SE(),We=4):We=s===RT?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,qn=s,Ve===null&&(Tt=1,Ud(r,nr(s,r.current)))}function cw(){var r=Q.H;return Q.H=Vd,r===null?Vd:r}function hw(){var r=Q.A;return Q.A=mC,r}function Eg(){Tt=4,os||(ze&4194048)!==ze&&ar.current!==null||(Wo=!0),(ls&134217727)===0&&(xa&134217727)===0||st===null||hs(st,ze,or,!1)}function Tg(r,s,o){var u=$e;$e|=2;var d=cw(),p=hw();(st!==r||ze!==s)&&(Gd=null,el(r,s)),s=!1;var E=Tt;e:do try{if(We!==0&&Ve!==null){var w=Ve,S=qn;switch(We){case 8:vg(),E=6;break e;case 3:case 2:case 9:case 6:ar.current===null&&(s=!0);var z=We;if(We=0,qn=null,tl(r,w,S,z),o&&Wo){E=0;break e}break;default:z=We,We=0,qn=null,tl(r,w,S,z)}}_C(),E=Tt;break}catch(Y){uw(r,Y)}while(!0);return s&&r.shellSuspendCounter++,Ei=Sa=null,$e=u,Q.H=d,Q.A=p,Ve===null&&(st=null,ze=0,md()),E}function _C(){for(;Ve!==null;)dw(Ve)}function yC(r,s){var o=$e;$e|=2;var u=cw(),d=hw();st!==r||ze!==s?(Gd=null,Hd=Wn()+500,el(r,s)):Wo=ia(r,s);e:do try{if(We!==0&&Ve!==null){s=Ve;var p=qn;t:switch(We){case 1:We=0,qn=null,tl(r,s,p,1);break;case 2:case 9:if(AE(p)){We=0,qn=null,fw(s);break}s=function(){We!==2&&We!==9||st!==r||(We=7),zr(r)},p.then(s,s);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:AE(p)?(We=0,qn=null,fw(s)):(We=0,qn=null,tl(r,s,p,7));break;case 5:var E=null;switch(Ve.tag){case 26:E=Ve.memoizedState;case 5:case 27:var w=Ve;if(!E||Yw(E)){We=0,qn=null;var S=w.sibling;if(S!==null)Ve=S;else{var z=w.return;z!==null?(Ve=z,Qd(z)):Ve=null}break t}}We=0,qn=null,tl(r,s,p,5);break;case 6:We=0,qn=null,tl(r,s,p,6);break;case 8:vg(),Tt=6;break e;default:throw Error(n(462))}}vC();break}catch(Y){uw(r,Y)}while(!0);return Ei=Sa=null,Q.H=u,Q.A=d,$e=o,Ve!==null?0:(st=null,ze=0,md(),Tt)}function vC(){for(;Ve!==null&&!lu();)dw(Ve)}function dw(r){var s=BT(r.alternate,r,Ci);r.memoizedProps=r.pendingProps,s===null?Qd(r):Ve=s}function fw(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=VT(o,s,s.pendingProps,s.type,void 0,ze);break;case 11:s=VT(o,s,s.pendingProps,s.type.render,s.ref,ze);break;case 5:Mp(s);default:FT(o,s),s=Ve=mE(s,Ci),s=BT(o,s,Ci)}r.memoizedProps=r.pendingProps,s===null?Qd(r):Ve=s}function tl(r,s,o,u){Ei=Sa=null,Mp(s),Ko=null,Yu=0;var d=s.return;try{if(lC(r,d,s,o,ze)){Tt=1,Ud(r,nr(o,r.current)),Ve=null;return}}catch(p){if(d!==null)throw Ve=d,p;Tt=1,Ud(r,nr(o,r.current)),Ve=null;return}s.flags&32768?(Ge||u===1?r=!0:Wo||(ze&536870912)!==0?r=!1:(os=r=!0,(u===2||u===9||u===3||u===6)&&(u=ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),mw(s,r)):Qd(s)}function Qd(r){var s=r;do{if((s.flags&32768)!==0){mw(s,os);return}r=s.return;var o=cC(s.alternate,s,Ci);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);Tt===0&&(Tt=5)}function mw(r,s){do{var o=hC(r.alternate,r);if(o!==null){o.flags&=32767,Ve=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=o}while(r!==null);Tt=6,Ve=null}function pw(r,s,o,u,d,p,E,w,S){r.cancelPendingCommit=null;do Yd();while(an!==0);if(($e&6)!==0)throw Error(n(327));if(s!==null){if(s===r.current)throw Error(n(177));if(p=s.lanes|s.childLanes,p|=hp,mu(r,o,p,E,w,S),r===st&&(Ve=st=null,ze=0),Jo=s,cs=r,Zo=o,gg=p,_g=d,sw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,IC(ea,function(){return Ew(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Q.T,Q.T=null,d=oe.p,oe.p=2,E=$e,$e|=4;try{dC(r,s,o)}finally{$e=E,oe.p=d,Q.T=u}}an=1,gw(),_w(),yw()}}function gw(){if(an===1){an=0;var r=cs,s=Jo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var u=oe.p;oe.p=2;var d=$e;$e|=4;try{JT(s,r);var p=Vg,E=iE(r.containerInfo),w=p.focusedElem,S=p.selectionRange;if(E!==w&&w&&w.ownerDocument&&rE(w.ownerDocument.documentElement,w)){if(S!==null&&ap(w)){var z=S.start,Y=S.end;if(Y===void 0&&(Y=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(Y,w.value.length);else{var J=w.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var q=F.getSelection(),Ae=w.textContent.length,Te=Math.min(S.start,Ae),nt=S.end===void 0?Te:Math.min(S.end,Ae);!q.extend&&Te>nt&&(E=nt,nt=Te,Te=E);var k=nE(w,Te),N=nE(w,nt);if(k&&N&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==N.node||q.focusOffset!==N.offset)){var B=J.createRange();B.setStart(k.node,k.offset),q.removeAllRanges(),Te>nt?(q.addRange(B),q.extend(N.node,N.offset)):(B.setEnd(N.node,N.offset),q.addRange(B))}}}}for(J=[],q=w;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<J.length;w++){var $=J[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}of=!!xg,Vg=xg=null}finally{$e=d,oe.p=u,Q.T=o}}r.current=s,an=2}}function _w(){if(an===2){an=0;var r=cs,s=Jo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var u=oe.p;oe.p=2;var d=$e;$e|=4;try{YT(r,s.alternate,s)}finally{$e=d,oe.p=u,Q.T=o}}an=3}}function yw(){if(an===4||an===3){an=0,jh();var r=cs,s=Jo,o=Zo,u=sw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?an=5:(an=0,Jo=cs=null,vw(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(us=null),yo(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(vt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Q.T,d=oe.p,oe.p=2,Q.T=null;try{for(var p=r.onRecoverableError,E=0;E<u.length;E++){var w=u[E];p(w.value,{componentStack:w.stack})}}finally{Q.T=s,oe.p=d}}(Zo&3)!==0&&Yd(),zr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===yg?rc++:(rc=0,yg=r):rc=0,ic(0)}}function vw(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,Lu(s)))}function Yd(r){return gw(),_w(),yw(),Ew()}function Ew(){if(an!==5)return!1;var r=cs,s=gg;gg=0;var o=yo(Zo),u=Q.T,d=oe.p;try{oe.p=32>o?32:o,Q.T=null,o=_g,_g=null;var p=cs,E=Zo;if(an=0,Jo=cs=null,Zo=0,($e&6)!==0)throw Error(n(331));var w=$e;if($e|=4,rw(p.current),ew(p,p.current,E,o),$e=w,ic(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(vt,p)}catch{}return!0}finally{oe.p=d,Q.T=u,vw(r,s)}}function Tw(r,s,o){s=nr(o,s),s=Wp(r.stateNode,s,2),r=es(r,s,2),r!==null&&(ai(r,2),zr(r))}function rt(r,s,o){if(r.tag===3)Tw(r,r,o);else for(;s!==null;){if(s.tag===3){Tw(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(us===null||!us.has(u))){r=nr(o,r),o=bT(2),u=es(s,o,2),u!==null&&(ST(o,u,s,r),ai(u,2),zr(u));break}}s=s.return}}function wg(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new pC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(dg=!0,d.add(o),r=EC.bind(null,r,s,o),s.then(r,r))}function EC(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,st===r&&(ze&o)===o&&(Tt===4||Tt===3&&(ze&62914560)===ze&&300>Wn()-pg?($e&2)===0&&el(r,0):fg|=o,Xo===ze&&(Xo=0)),zr(r)}function ww(r,s){s===0&&(s=fu()),r=Mo(r,s),r!==null&&(ai(r,s),zr(r))}function TC(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),ww(r,o)}function wC(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(n(314))}u!==null&&u.delete(s),ww(r,o)}function IC(r,s){return Js(r,s)}var $d=null,nl=null,Ig=!1,Wd=!1,Ag=!1,Va=0;function zr(r){r!==nl&&r.next===null&&(nl===null?$d=nl=r:nl=nl.next=r),Wd=!0,Ig||(Ig=!0,bC())}function ic(r,s){if(!Ag&&Wd){Ag=!0;do for(var o=!1,u=$d;u!==null;){if(r!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var E=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-dn(42|r)+1)-1,p&=d&~(E&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,Sw(u,p))}else p=ze,p=_o(u,u===st?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||ia(u,p)||(o=!0,Sw(u,p));u=u.next}while(o);Ag=!1}}function AC(){Iw()}function Iw(){Wd=Ig=!1;var r=0;Va!==0&&(VC()&&(r=Va),Va=0);for(var s=Wn(),o=null,u=$d;u!==null;){var d=u.next,p=Aw(u,s);p===0?(u.next=null,o===null?$d=d:o.next=d,d===null&&(nl=o)):(o=u,(r!==0||(p&3)!==0)&&(Wd=!0)),u=d}ic(r)}function Aw(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var E=31-dn(p),w=1<<E,S=d[E];S===-1?((w&o)===0||(w&u)!==0)&&(d[E]=hu(w,s)):S<=s&&(r.expiredLanes|=w),p&=~w}if(s=st,o=ze,o=_o(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(We===2||We===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Zs(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||ia(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Zs(u),yo(o)){case 2:case 8:o=po;break;case 32:o=ea;break;case 268435456:o=go;break;default:o=ea}return u=bw.bind(null,r),o=Js(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Zs(u),r.callbackPriority=2,r.callbackNode=null,2}function bw(r,s){if(an!==0&&an!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Yd()&&r.callbackNode!==o)return null;var u=ze;return u=_o(r,r===st?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(ow(r,u,s),Aw(r,Wn()),r.callbackNode!=null&&r.callbackNode===o?bw.bind(null,r):null)}function Sw(r,s){if(Yd())return null;ow(r,s,!0)}function bC(){kC(function(){($e&6)!==0?Js(uu,AC):Iw()})}function bg(){return Va===0&&(Va=du()),Va}function Rw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Ao(""+r)}function Cw(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function SC(r,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var p=Rw((d[xt]||null).action),E=u.submitter;E&&(s=(s=E[xt]||null)?Rw(s.formAction):E.getAttribute("formAction"),s!==null&&(p=s,E=null));var w=new bo("action","action",null,u,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Va!==0){var S=E?Cw(d,E):new FormData(d);Gp(o,{pending:!0,data:S,method:d.method,action:p},null,S)}}else typeof p=="function"&&(w.preventDefault(),S=E?Cw(d,E):new FormData(d),Gp(o,{pending:!0,data:S,method:d.method,action:p},p,S))},currentTarget:d}]})}}for(var Sg=0;Sg<cp.length;Sg++){var Rg=cp[Sg],RC=Rg.toLowerCase(),CC=Rg[0].toUpperCase()+Rg.slice(1);pr(RC,"on"+CC)}pr(oE,"onAnimationEnd"),pr(lE,"onAnimationIteration"),pr(uE,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(G1,"onTransitionRun"),pr(K1,"onTransitionStart"),pr(Q1,"onTransitionCancel"),pr(cE,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sc));function Dw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],S=w.instance,z=w.currentTarget;if(w=w.listener,S!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=z;try{p(d)}catch(Y){Ld(Y)}d.currentTarget=null,p=S}else for(E=0;E<u.length;E++){if(w=u[E],S=w.instance,z=w.currentTarget,w=w.listener,S!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=z;try{p(d)}catch(Y){Ld(Y)}d.currentTarget=null,p=S}}}}function Oe(r,s){var o=s[gu];o===void 0&&(o=s[gu]=new Set);var u=r+"__bubble";o.has(u)||(Nw(s,r,2,!1),o.add(u))}function Cg(r,s,o){var u=0;s&&(u|=4),Nw(o,r,u,s)}var Xd="_reactListening"+Math.random().toString(36).slice(2);function Dg(r){if(!r[Xd]){r[Xd]=!0,_u.forEach(function(o){o!=="selectionchange"&&(DC.has(o)||Cg(o,!1,r),Cg(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Xd]||(s[Xd]=!0,Cg("selectionchange",!1,s))}}function Nw(r,s,o,u){switch(eI(s)){case 2:var d=nD;break;case 8:d=rD;break;default:d=jg}o=d.bind(null,s,o,r),d=void 0,!er||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function Ng(r,s,o,u,d){var p=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===d)break;if(E===4)for(E=u.return;E!==null;){var S=E.tag;if((S===3||S===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;w!==null;){if(E=oi(w),E===null)return;if(S=E.tag,S===5||S===6||S===26||S===27){u=p=E;continue e}w=w.parentNode}}u=u.return}Zh(function(){var z=p,Y=Zn(o),J=[];e:{var F=hE.get(r);if(F!==void 0){var q=bo,Ae=r;switch(r){case"keypress":if(Pr(o)===0)break e;case"keydown":case"keyup":q=Po;break;case"focusin":Ae="focus",q=Co;break;case"focusout":Ae="blur",q=Co;break;case"beforeblur":case"afterblur":q=Co;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=od;break;case oE:case lE:case uE:q=Do;break;case cE:q=ud;break;case"scroll":case"scrollend":q=ed;break;case"wheel":q=xo;break;case"copy":case"cut":case"paste":q=No;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Du;break;case"toggle":case"beforetoggle":q=hd}var Te=(s&4)!==0,nt=!Te&&(r==="scroll"||r==="scrollend"),k=Te?F!==null?F+"Capture":null:F;Te=[];for(var N=z,B;N!==null;){var $=N;if(B=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||B===null||k===null||($=da(N,k),$!=null&&Te.push(ac(N,$,B))),nt)break;N=N.return}0<Te.length&&(F=new q(F,Ae,null,o,Y),J.push({event:F,listeners:Te}))}}if((s&7)===0){e:{if(F=r==="mouseover"||r==="pointerover",q=r==="mouseout"||r==="pointerout",F&&o!==hi&&(Ae=o.relatedTarget||o.fromElement)&&(oi(Ae)||Ae[Xn]))break e;if((q||F)&&(F=Y.window===Y?Y:(F=Y.ownerDocument)?F.defaultView||F.parentWindow:window,q?(Ae=o.relatedTarget||o.toElement,q=z,Ae=Ae?oi(Ae):null,Ae!==null&&(nt=l(Ae),Te=Ae.tag,Ae!==nt||Te!==5&&Te!==27&&Te!==6)&&(Ae=null)):(q=null,Ae=z),q!==Ae)){if(Te=tr,$="onMouseLeave",k="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(Te=Du,$="onPointerLeave",k="onPointerEnter",N="pointer"),nt=q==null?F:Rr(q),B=Ae==null?F:Rr(Ae),F=new Te($,N+"leave",q,o,Y),F.target=nt,F.relatedTarget=B,$=null,oi(Y)===z&&(Te=new Te(k,N+"enter",Ae,o,Y),Te.target=B,Te.relatedTarget=nt,$=Te),nt=$,q&&Ae)t:{for(Te=q,k=Ae,N=0,B=Te;B;B=rl(B))N++;for(B=0,$=k;$;$=rl($))B++;for(;0<N-B;)Te=rl(Te),N--;for(;0<B-N;)k=rl(k),B--;for(;N--;){if(Te===k||k!==null&&Te===k.alternate)break t;Te=rl(Te),k=rl(k)}Te=null}else Te=null;q!==null&&Pw(J,F,q,Te,!1),Ae!==null&&nt!==null&&Pw(J,nt,Ae,Te,!0)}}e:{if(F=z?Rr(z):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var fe=Wv;else if(Ft(F))if(Xv)fe=q1;else{fe=z1;var xe=B1}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?z&&wu(z.elementType)&&(fe=Wv):fe=F1;if(fe&&(fe=fe(r,z))){gi(J,fe,o,Y);break e}xe&&xe(r,F,z),r==="focusout"&&z&&F.type==="number"&&z.memoizedProps.value!=null&&$i(F,"number",F.value)}switch(xe=z?Rr(z):window,r){case"focusin":(Ft(xe)||xe.contentEditable==="true")&&(Vo=xe,op=z,xu=null);break;case"focusout":xu=op=Vo=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,sE(J,o,Y);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":sE(J,o,Y)}var _e;if(Or)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ue?H(r,o)&&(we="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&(Ue||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ue&&(_e=Au()):(Nr=Y,Wi="value"in Nr?Nr.value:Nr.textContent,Ue=!0)),xe=Jd(z,we),0<xe.length&&(we=new Ru(we,r,null,o,Y),J.push({event:we,listeners:xe}),_e?we.data=_e:(_e=ie(o),_e!==null&&(we.data=_e)))),(_e=_?zt(r,o):Be(r,o))&&(we=Jd(z,"onBeforeInput"),0<we.length&&(xe=new Ru("onBeforeInput","beforeinput",null,o,Y),J.push({event:xe,listeners:we}),xe.data=_e)),SC(J,r,z,o,Y)}Dw(J,s)})}function ac(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Jd(r,s){for(var o=s+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=da(r,o),d!=null&&u.unshift(ac(r,d,p)),d=da(r,s),d!=null&&u.push(ac(r,d,p))),r.tag===3)return u;r=r.return}return[]}function rl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Pw(r,s,o,u,d){for(var p=s._reactName,E=[];o!==null&&o!==u;){var w=o,S=w.alternate,z=w.stateNode;if(w=w.tag,S!==null&&S===u)break;w!==5&&w!==26&&w!==27||z===null||(S=z,d?(z=da(o,p),z!=null&&E.unshift(ac(o,z,S))):d||(z=da(o,p),z!=null&&E.push(ac(o,z,S)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var NC=/\r\n?/g,PC=/\u0000|\uFFFD/g;function xw(r){return(typeof r=="string"?r:""+r).replace(NC,`
`).replace(PC,"")}function Vw(r,s){return s=xw(s),xw(r)===s}function Zd(){}function tt(r,s,o,u,d,p){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Jn(r,""+u);break;case"className":Cr(r,"class",u);break;case"tabIndex":Cr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Cr(r,o,u);break;case"style":Tu(r,u,p);break;case"data":if(s!=="object"){Cr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Ao(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(s!=="input"&&tt(r,s,"name",d.name,d,null),tt(r,s,"formEncType",d.formEncType,d,null),tt(r,s,"formMethod",d.formMethod,d,null),tt(r,s,"formTarget",d.formTarget,d,null)):(tt(r,s,"encType",d.encType,d,null),tt(r,s,"method",d.method,d,null),tt(r,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Ao(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Zd);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Ao(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Oe("beforetoggle",r),Oe("toggle",r),Yi(r,"popover",u);break;case"xlinkActuate":nn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":nn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":nn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":nn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":nn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":nn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":nn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":nn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":nn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Yi(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ep.get(o)||o,Yi(r,o,u))}}function Pg(r,s,o,u,d,p){switch(o){case"style":Tu(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&Jn(r,""+u);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Zd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),p=r[xt]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(s,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,d);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Yi(r,o,u)}}}function on(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",r),Oe("load",r);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:tt(r,s,p,E,o,null)}}d&&tt(r,s,"srcSet",o.srcSet,o,null),u&&tt(r,s,"src",o.src,o,null);return;case"input":Oe("invalid",r);var w=p=E=d=null,S=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":d=Y;break;case"type":E=Y;break;case"checked":S=Y;break;case"defaultChecked":z=Y;break;case"value":p=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(n(137,s));break;default:tt(r,s,u,Y,o,null)}}ua(r,p,w,S,z,E,d,!1),Io(r);return;case"select":Oe("invalid",r),u=E=p=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":p=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:tt(r,s,d,w,o,null)}s=p,o=E,r.multiple=!!u,s!=null?ci(r,!!u,s,!1):o!=null&&ci(r,!!u,o,!0);return;case"textarea":Oe("invalid",r),p=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":d=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(n(91));break;default:tt(r,s,E,w,o,null)}ca(r,u,d,p),Io(r);return;case"option":for(S in o)if(o.hasOwnProperty(S)&&(u=o[S],u!=null))switch(S){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(r,s,S,u,o,null)}return;case"dialog":Oe("beforetoggle",r),Oe("toggle",r),Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":Oe("load",r);break;case"video":case"audio":for(u=0;u<sc.length;u++)Oe(sc[u],r);break;case"image":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"embed":case"source":case"link":Oe("error",r),Oe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:tt(r,s,z,u,o,null)}return;default:if(wu(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Pg(r,s,Y,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&tt(r,s,w,u,o,null))}function xC(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,E=null,w=null,S=null,z=null,Y=null;for(q in o){var J=o[q];if(o.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=J;default:u.hasOwnProperty(q)||tt(r,s,q,null,u,J)}}for(var F in u){var q=u[F];if(J=o[F],u.hasOwnProperty(F)&&(q!=null||J!=null))switch(F){case"type":p=q;break;case"name":d=q;break;case"checked":z=q;break;case"defaultChecked":Y=q;break;case"value":E=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(n(137,s));break;default:q!==J&&tt(r,s,F,q,u,J)}}Ln(r,E,w,S,z,Y,p,d);return;case"select":q=E=w=F=null;for(p in o)if(S=o[p],o.hasOwnProperty(p)&&S!=null)switch(p){case"value":break;case"multiple":q=S;default:u.hasOwnProperty(p)||tt(r,s,p,null,u,S)}for(d in u)if(p=u[d],S=o[d],u.hasOwnProperty(d)&&(p!=null||S!=null))switch(d){case"value":F=p;break;case"defaultValue":w=p;break;case"multiple":E=p;default:p!==S&&tt(r,s,d,p,u,S)}s=w,o=E,u=q,F!=null?ci(r,!!o,F,!1):!!u!=!!o&&(s!=null?ci(r,!!o,s,!0):ci(r,!!o,o?[]:"",!1));return;case"textarea":q=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:tt(r,s,w,null,u,d)}for(E in u)if(d=u[E],p=o[E],u.hasOwnProperty(E)&&(d!=null||p!=null))switch(E){case"value":F=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:d!==p&&tt(r,s,E,d,u,p)}Ze(r,F,q);return;case"option":for(var Ae in o)if(F=o[Ae],o.hasOwnProperty(Ae)&&F!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:tt(r,s,Ae,null,u,F)}for(S in u)if(F=u[S],q=o[S],u.hasOwnProperty(S)&&F!==q&&(F!=null||q!=null))switch(S){case"selected":r.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:tt(r,s,S,F,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)F=o[Te],o.hasOwnProperty(Te)&&F!=null&&!u.hasOwnProperty(Te)&&tt(r,s,Te,null,u,F);for(z in u)if(F=u[z],q=o[z],u.hasOwnProperty(z)&&F!==q&&(F!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(n(137,s));break;default:tt(r,s,z,F,u,q)}return;default:if(wu(s)){for(var nt in o)F=o[nt],o.hasOwnProperty(nt)&&F!==void 0&&!u.hasOwnProperty(nt)&&Pg(r,s,nt,void 0,u,F);for(Y in u)F=u[Y],q=o[Y],!u.hasOwnProperty(Y)||F===q||F===void 0&&q===void 0||Pg(r,s,Y,F,u,q);return}}for(var k in o)F=o[k],o.hasOwnProperty(k)&&F!=null&&!u.hasOwnProperty(k)&&tt(r,s,k,null,u,F);for(J in u)F=u[J],q=o[J],!u.hasOwnProperty(J)||F===q||F==null&&q==null||tt(r,s,J,F,u,q)}var xg=null,Vg=null;function ef(r){return r.nodeType===9?r:r.ownerDocument}function Ow(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Og(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kg=null;function VC(){var r=window.event;return r&&r.type==="popstate"?r===kg?!1:(kg=r,!0):(kg=null,!1)}var Mw=typeof setTimeout=="function"?setTimeout:void 0,OC=typeof clearTimeout=="function"?clearTimeout:void 0,Lw=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof Lw<"u"?function(r){return Lw.resolve(null).then(r).catch(MC)}:Mw;function MC(r){setTimeout(function(){throw r})}function ds(r){return r==="head"}function Uw(r,s){var o=s,u=0,d=0;do{var p=o.nextSibling;if(r.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&oc(E.documentElement),o&2&&oc(E.body),o&4)for(o=E.head,oc(o),E=o.firstChild;E;){var w=E.nextSibling,S=E.nodeName;E[sa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(d===0){r.removeChild(p),pc(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);pc(s)}function Mg(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Mg(o),Qi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function LC(r,s,o,u){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[sa])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=_r(r.nextSibling),r===null)break}return null}function UC(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=_r(r.nextSibling),r===null))return null;return r}function Lg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function BC(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function _r(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Ug=null;function Bw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function zw(r,s,o){switch(s=ef(o),r){case"html":if(r=s.documentElement,!r)throw Error(n(452));return r;case"head":if(r=s.head,!r)throw Error(n(453));return r;case"body":if(r=s.body,!r)throw Error(n(454));return r;default:throw Error(n(451))}}function oc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Qi(r)}var lr=new Map,Fw=new Set;function tf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Di=oe.d;oe.d={f:zC,r:FC,D:qC,C:jC,L:HC,m:GC,X:QC,S:KC,M:YC};function zC(){var r=Di.f(),s=Kd();return r||s}function FC(r){var s=Sr(r);s!==null&&s.tag===5&&s.type==="form"?oT(s):Di.r(r)}var il=typeof document>"u"?null:document;function qw(r,s,o){var u=il;if(u&&typeof s=="string"&&s){var d=Vt(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Fw.has(d)||(Fw.add(d),r={rel:r,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),on(s,"link",r),bt(s),u.head.appendChild(s)))}}function qC(r){Di.D(r),qw("dns-prefetch",r,null)}function jC(r,s){Di.C(r,s),qw("preconnect",r,s)}function HC(r,s,o){Di.L(r,s,o);var u=il;if(u&&r&&s){var d='link[rel="preload"][as="'+Vt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Vt(o.imageSizes)+'"]')):d+='[href="'+Vt(r)+'"]';var p=d;switch(s){case"style":p=sl(r);break;case"script":p=al(r)}lr.has(p)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),lr.set(p,r),u.querySelector(d)!==null||s==="style"&&u.querySelector(lc(p))||s==="script"&&u.querySelector(uc(p))||(s=u.createElement("link"),on(s,"link",r),bt(s),u.head.appendChild(s)))}}function GC(r,s){Di.m(r,s);var o=il;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(r)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=al(r)}if(!lr.has(p)&&(r=y({rel:"modulepreload",href:r},s),lr.set(p,r),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(uc(p)))return}u=o.createElement("link"),on(u,"link",r),bt(u),o.head.appendChild(u)}}}function KC(r,s,o){Di.S(r,s,o);var u=il;if(u&&r){var d=En(u).hoistableStyles,p=sl(r);s=s||"default";var E=d.get(p);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(lc(p)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=lr.get(p))&&Bg(r,o);var S=E=u.createElement("link");bt(S),on(S,"link",r),S._p=new Promise(function(z,Y){S.onload=z,S.onerror=Y}),S.addEventListener("load",function(){w.loading|=1}),S.addEventListener("error",function(){w.loading|=2}),w.loading|=4,nf(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(p,E)}}}function QC(r,s){Di.X(r,s);var o=il;if(o&&r){var u=En(o).hoistableScripts,d=al(r),p=u.get(d);p||(p=o.querySelector(uc(d)),p||(r=y({src:r,async:!0},s),(s=lr.get(d))&&zg(r,s),p=o.createElement("script"),bt(p),on(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function YC(r,s){Di.M(r,s);var o=il;if(o&&r){var u=En(o).hoistableScripts,d=al(r),p=u.get(d);p||(p=o.querySelector(uc(d)),p||(r=y({src:r,async:!0,type:"module"},s),(s=lr.get(d))&&zg(r,s),p=o.createElement("script"),bt(p),on(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function jw(r,s,o,u){var d=(d=Se.current)?tf(d):null;if(!d)throw Error(n(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=En(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=sl(o.href);var p=En(d).hoistableStyles,E=p.get(r);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,E),(p=d.querySelector(lc(r)))&&!p._p&&(E.instance=p,E.state.loading=5),lr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},lr.set(r,o),p||$C(d,r,o,E.state))),s&&u===null)throw Error(n(528,""));return E}if(s&&u!==null)throw Error(n(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=al(o),o=En(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,r))}}function sl(r){return'href="'+Vt(r)+'"'}function lc(r){return'link[rel="stylesheet"]['+r+"]"}function Hw(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function $C(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),on(s,"link",o),bt(s),r.head.appendChild(s))}function al(r){return'[src="'+Vt(r)+'"]'}function uc(r){return"script[async]"+r}function Gw(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return s.instance=u,bt(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),bt(u),on(u,"style",d),nf(u,o.precedence,r),s.instance=u;case"stylesheet":d=sl(o.href);var p=r.querySelector(lc(d));if(p)return s.state.loading|=4,s.instance=p,bt(p),p;u=Hw(o),(d=lr.get(d))&&Bg(u,d),p=(r.ownerDocument||r).createElement("link"),bt(p);var E=p;return E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),on(p,"link",u),s.state.loading|=4,nf(p,o.precedence,r),s.instance=p;case"script":return p=al(o.src),(d=r.querySelector(uc(p)))?(s.instance=d,bt(d),d):(u=o,(d=lr.get(p))&&(u=y({},o),zg(u,d)),r=r.ownerDocument||r,d=r.createElement("script"),bt(d),on(d,"link",u),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(n(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,nf(u,o.precedence,r));return s.instance}function nf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)p=w;else if(p!==d)break}p?p.parentNode.insertBefore(r,p.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Bg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function zg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var rf=null;function Kw(r,s,o){if(rf===null){var u=new Map,d=rf=new Map;d.set(o,u)}else d=rf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var p=o[d];if(!(p[sa]||p[Bt]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(s)||"";E=r+E;var w=u.get(E);w?w.push(p):u.set(E,[p])}}return u}function Qw(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function WC(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Yw(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var cc=null;function XC(){}function JC(r,s,o){if(cc===null)throw Error(n(475));var u=cc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=sl(o.href),p=r.querySelector(lc(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=sf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=p,bt(p);return}p=r.ownerDocument||r,o=Hw(o),(d=lr.get(d))&&Bg(o,d),p=p.createElement("link"),bt(p);var E=p;E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),on(p,"link",o),s.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=sf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function ZC(){if(cc===null)throw Error(n(475));var r=cc;return r.stylesheets&&r.count===0&&Fg(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Fg(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function sf(){if(this.count--,this.count===0){if(this.stylesheets)Fg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var af=null;function Fg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,af=new Map,s.forEach(eD,r),af=null,sf.call(r))}function eD(r,s){if(!(s.state.loading&4)){var o=af.get(r);if(o)var u=o.get(null);else{o=new Map,af.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var E=d[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=s.instance,E=d.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,d),o.set(E,d),this.count++,u=sf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var hc={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function tD(r,s,o,u,d,p,E,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.hiddenUpdates=si(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function $w(r,s,o,u,d,p,E,w,S,z,Y,J){return r=new tD(r,s,o,E,w,S,z,J),s=1,p===!0&&(s|=24),p=Bn(3,null,null,s),r.current=p,p.stateNode=r,s=wp(),s.refCount++,r.pooledCache=s,s.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:s},Sp(p),r}function Ww(r){return r?(r=Lo,r):Lo}function Xw(r,s,o,u,d,p){d=Ww(d),u.context===null?u.context=d:u.pendingContext=d,u=Zi(s),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=es(r,u,s),o!==null&&(Hn(o,r,s),Fu(o,r,s))}function Jw(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function qg(r,s){Jw(r,s),(r=r.alternate)&&Jw(r,s)}function Zw(r){if(r.tag===13){var s=Mo(r,67108864);s!==null&&Hn(s,r,67108864),qg(r,67108864)}}var of=!0;function nD(r,s,o,u){var d=Q.T;Q.T=null;var p=oe.p;try{oe.p=2,jg(r,s,o,u)}finally{oe.p=p,Q.T=d}}function rD(r,s,o,u){var d=Q.T;Q.T=null;var p=oe.p;try{oe.p=8,jg(r,s,o,u)}finally{oe.p=p,Q.T=d}}function jg(r,s,o,u){if(of){var d=Hg(u);if(d===null)Ng(r,s,u,lf,o),tI(r,u);else if(sD(d,r,s,o,u))u.stopPropagation();else if(tI(r,u),s&4&&-1<iD.indexOf(r)){for(;d!==null;){var p=Sr(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=dr(p.pendingLanes);if(E!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var S=1<<31-dn(E);w.entanglements[1]|=S,E&=~S}zr(p),($e&6)===0&&(Hd=Wn()+500,ic(0))}}break;case 13:w=Mo(p,2),w!==null&&Hn(w,p,2),Kd(),qg(p,2)}if(p=Hg(u),p===null&&Ng(r,s,u,lf,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Ng(r,s,u,null,o)}}function Hg(r){return r=Zn(r),Gg(r)}var lf=null;function Gg(r){if(lf=null,r=oi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return lf=r,null}function eI(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ym()){case uu:return 2;case po:return 8;case ea:case $m:return 32;case go:return 268435456;default:return 32}default:return 32}}var Kg=!1,fs=null,ms=null,ps=null,dc=new Map,fc=new Map,gs=[],iD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tI(r,s){switch(r){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":dc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":fc.delete(s.pointerId)}}function mc(r,s,o,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Sr(s),s!==null&&Zw(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function sD(r,s,o,u,d){switch(s){case"focusin":return fs=mc(fs,r,s,o,u,d),!0;case"dragenter":return ms=mc(ms,r,s,o,u,d),!0;case"mouseover":return ps=mc(ps,r,s,o,u,d),!0;case"pointerover":var p=d.pointerId;return dc.set(p,mc(dc.get(p)||null,r,s,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,fc.set(p,mc(fc.get(p)||null,r,s,o,u,d)),!0}return!1}function nI(r){var s=oi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,Kh(r.priority,function(){if(o.tag===13){var u=jn();u=Hi(u);var d=Mo(o,u);d!==null&&Hn(d,o,u),qg(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function uf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Hg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);hi=u,o.target.dispatchEvent(u),hi=null}else return s=Sr(o),s!==null&&Zw(s),r.blockedOn=o,!1;s.shift()}return!0}function rI(r,s,o){uf(r)&&o.delete(s)}function aD(){Kg=!1,fs!==null&&uf(fs)&&(fs=null),ms!==null&&uf(ms)&&(ms=null),ps!==null&&uf(ps)&&(ps=null),dc.forEach(rI),fc.forEach(rI)}function cf(r,s){r.blockedOn===s&&(r.blockedOn=null,Kg||(Kg=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,aD)))}var hf=null;function iI(r){hf!==r&&(hf=r,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){hf===r&&(hf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],d=r[s+2];if(typeof u!="function"){if(Gg(u||o)===null)continue;break}var p=Sr(o);p!==null&&(r.splice(s,3),s-=3,Gp(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function pc(r){function s(S){return cf(S,r)}fs!==null&&cf(fs,r),ms!==null&&cf(ms,r),ps!==null&&cf(ps,r),dc.forEach(s),fc.forEach(s);for(var o=0;o<gs.length;o++){var u=gs[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<gs.length&&(o=gs[0],o.blockedOn===null);)nI(o),o.blockedOn===null&&gs.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],E=d[xt]||null;if(typeof p=="function")E||iI(o);else if(E){var w=null;if(p&&p.hasAttribute("formAction")){if(d=p,E=p[xt]||null)w=E.formAction;else if(Gg(d)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),iI(o)}}}function Qg(r){this._internalRoot=r}df.prototype.render=Qg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));var o=s.current,u=jn();Xw(o,u,r,s,null,null)},df.prototype.unmount=Qg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Xw(r.current,2,null,r,null,null),Kd(),s[Xn]=null}};function df(r){this._internalRoot=r}df.prototype.unstable_scheduleHydration=function(r){if(r){var s=Gi();r={blockedOn:null,target:r,priority:s};for(var o=0;o<gs.length&&s!==0&&s<gs[o].priority;o++);gs.splice(o,0,r),o===0&&nI(r)}};var sI=e.version;if(sI!=="19.1.1")throw Error(n(527,sI,"19.1.1"));oe.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=m(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var oD={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{vt=ff.inject(oD),Ye=ff}catch{}}return _c.createRoot=function(r,s){if(!a(r))throw Error(n(299));var o=!1,u="",d=TT,p=wT,E=IT,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=$w(r,1,!1,null,null,o,u,d,p,E,w,null),r[Xn]=s.current,Dg(r),new Qg(s)},_c.hydrateRoot=function(r,s,o){if(!a(r))throw Error(n(299));var u=!1,d="",p=TT,E=wT,w=IT,S=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(S=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=$w(r,1,!0,s,o??null,u,d,p,E,w,S,z),s.context=Ww(null),o=s.current,u=jn(),u=Hi(u),d=Zi(u),d.callback=null,es(o,d,u),o=u,s.current.lanes=o,ai(s,o),zr(s),r[Xn]=s.current,Dg(r),new df(s)},_c.version="19.1.1",_c}var pI;function yD(){if(pI)return Wg.exports;pI=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wg.exports=_D(),Wg.exports}var vD=yD();const ED=b0(vD),TD=()=>{};var gI={};/**
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
 */const S0=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let a=i.charCodeAt(n);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},wD=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const a=i[t++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[n++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],f=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[n++]=String.fromCharCode(55296+(m>>10)),e[n++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[n++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},R0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,f=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,y=l>>2,T=(l&3)<<4|f>>4;let A=(f&15)<<2|g>>6,x=g&63;m||(x=64,c||(A=64)),n.push(t[y],t[T],t[A],t[x])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(S0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):wD(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],f=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new ID;const A=l<<2|f>>4;if(n.push(A),g!==64){const x=f<<4&240|g>>2;if(n.push(x),T!==64){const G=g<<6&192|T;n.push(G)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ID extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AD=function(i){const e=S0(i);return R0.encodeByteArray(e,!0)},Lf=function(i){return AD(i).replace(/\./g,"")},cy=function(i){try{return R0.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Uf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bD(t)||(i[t]=Uf(i[t],e[t]));return i}function bD(i){return i!=="__proto__"}/**
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
 */const SD=()=>hy().__FIREBASE_DEFAULTS__,RD=()=>{if(typeof process>"u"||typeof gI>"u")return;const i=gI.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},CD=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cy(i[1]);return e&&JSON.parse(e)},dy=()=>{try{return TD()||SD()||RD()||CD()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},fy=()=>{var i;return(i=dy())==null?void 0:i.config},DD=i=>{var e;return(e=dy())==null?void 0:e[`_${i}`]};/**
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
 */function $l(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function C0(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function PD(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Lf(JSON.stringify(t)),Lf(JSON.stringify(c)),""].join(".")}const Mc={};function xD(){const i={prod:[],emulator:[]};for(const e of Object.keys(Mc))Mc[e]?i.emulator.push(e):i.prod.push(e);return i}function VD(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let _I=!1;function D0(i,e){if(typeof window>"u"||typeof document>"u"||!$l(window.location.host)||Mc[i]===e||Mc[i]||_I)return;Mc[i]=e;function t(A){return`__firebase__banner__${A}`}const n="__firebase__banner",l=xD().prod.length>0;function c(){const A=document.getElementById(n);A&&A.remove()}function f(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,x){A.setAttribute("width","24"),A.setAttribute("id",x),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{_I=!0,c()},A}function y(A,x){A.setAttribute("id",x),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=VD(n),x=t("text"),G=document.getElementById(x)||document.createElement("span"),X=t("learnmore"),K=document.getElementById(X)||document.createElement("a"),de=t("preprendIcon"),ce=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ae=A.element;f(ae),y(K,X);const Ie=g();m(ce,de),ae.append(ce,G,K,Ie),document.body.appendChild(ae)}l?(G.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function um(){var e;const i=(e=dy())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kD(){return typeof window<"u"||N0()}function N0(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function MD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x0(){const i=gt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function V0(){return!um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O0(){return!um()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Xc(){try{return typeof indexedDB=="object"}catch{return!1}}function LD(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const UD="FirebaseError";class Sn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=UD,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?BD(l,n):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Sn(a,f,n)}}function BD(i,e){return i.replace(zD,(t,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const zD=/\{\$([^}]+)}/g;/**
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
 */function yI(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function FD(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function xs(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const a of t){if(!n.includes(a))return!1;const l=i[a],c=e[a];if(vI(l)&&vI(c)){if(!xs(l,c))return!1}else if(l!==c)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function vI(i){return i!==null&&typeof i=="object"}/**
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
 */function Wl(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function vl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,l]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Rc(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function k0(i,e){const t=new qD(i,e);return t.subscribe.bind(t)}class qD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let a;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");jD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:n},a.next===void 0&&(a.next=e_),a.error===void 0&&(a.error=e_),a.complete===void 0&&(a.complete=e_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jD(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function e_(){}/**
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
 */const ka="[DEFAULT]";/**
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
 */class HD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ND;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KD(e))try{this.getOrInitializeService({instanceIdentifier:ka})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});n.resolve(l)}catch{}}}}clearInstance(e=ka){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ka){return this.instances.has(e)}getOptions(e=ka){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);n===f&&c.resolve(a)}return a}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(n)??new Set;a.add(e),this.onInitCallbacks.set(n,a);const l=this.instances.get(n);return l&&e(l,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:GD(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ka){return this.component?this.component.multipleInstances?e:ka:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GD(i){return i===ka?void 0:i}function KD(i){return i.instantiationMode==="EAGER"}/**
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
 */class M0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const py=[];var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const L0={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},QD=ke.INFO,YD={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},$D=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),a=YD[e];if(a)console[a](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cm{constructor(e){this.name=e,this._logLevel=QD,this._logHandler=$D,this._userLogHandler=null,py.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}function WD(i){py.forEach(e=>{e.setLogLevel(i)})}function XD(i,e){for(const t of py){let n=null;e&&e.level&&(n=L0[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");l>=(n??a.logLevel)&&i({level:ke[l].toLowerCase(),message:f,args:c,type:a.name})}}}const JD=(i,e)=>e.some(t=>i instanceof t);let EI,TI;function ZD(){return EI||(EI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eN(){return TI||(TI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U0=new WeakMap,w_=new WeakMap,B0=new WeakMap,t_=new WeakMap,gy=new WeakMap;function tN(i){const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Rs(i.result)),a()},c=()=>{n(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&U0.set(t,i)}).catch(()=>{}),gy.set(e,i),e}function nN(i){if(w_.has(i))return;const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{n(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});w_.set(i,e)}let I_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return w_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||B0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function rN(i){I_=i(I_)}function iN(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(n_(this),e,...t);return B0.set(n,e.sort?e.sort():[e]),Rs(n)}:eN().includes(i)?function(...e){return i.apply(n_(this),e),Rs(U0.get(this))}:function(...e){return Rs(i.apply(n_(this),e))}}function sN(i){return typeof i=="function"?iN(i):(i instanceof IDBTransaction&&nN(i),JD(i,ZD())?new Proxy(i,I_):i)}function Rs(i){if(i instanceof IDBRequest)return tN(i);if(t_.has(i))return t_.get(i);const e=sN(i);return e!==i&&(t_.set(i,e),gy.set(e,i)),e}const n_=i=>gy.get(i);function aN(i,e,{blocked:t,upgrade:n,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),f=Rs(c);return n&&c.addEventListener("upgradeneeded",m=>{n(Rs(c.result),m.oldVersion,m.newVersion,Rs(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const oN=["get","getKey","getAll","getAllKeys","count"],lN=["put","add","delete","clear"],r_=new Map;function wI(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(r_.get(e))return r_.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=lN.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||oN.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return n&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return r_.set(e,l),l}rN(i=>({...i,get:(e,t,n)=>wI(e,t)||i.get(e,t,n),has:(e,t)=>!!wI(e,t)||i.has(e,t)}));/**
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
 */class uN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cN(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function cN(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bf="@firebase/app",A_="0.14.2";/**
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
 */const Vi=new cm("@firebase/app"),hN="@firebase/app-compat",dN="@firebase/analytics-compat",fN="@firebase/analytics",mN="@firebase/app-check-compat",pN="@firebase/app-check",gN="@firebase/auth",_N="@firebase/auth-compat",yN="@firebase/database",vN="@firebase/data-connect",EN="@firebase/database-compat",TN="@firebase/functions",wN="@firebase/functions-compat",IN="@firebase/installations",AN="@firebase/installations-compat",bN="@firebase/messaging",SN="@firebase/messaging-compat",RN="@firebase/performance",CN="@firebase/performance-compat",DN="@firebase/remote-config",NN="@firebase/remote-config-compat",PN="@firebase/storage",xN="@firebase/storage-compat",VN="@firebase/firestore",ON="@firebase/ai",kN="@firebase/firestore-compat",MN="firebase",LN="12.2.0";/**
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
 */const Vs="[DEFAULT]",UN={[Bf]:"fire-core",[hN]:"fire-core-compat",[fN]:"fire-analytics",[dN]:"fire-analytics-compat",[pN]:"fire-app-check",[mN]:"fire-app-check-compat",[gN]:"fire-auth",[_N]:"fire-auth-compat",[yN]:"fire-rtdb",[vN]:"fire-data-connect",[EN]:"fire-rtdb-compat",[TN]:"fire-fn",[wN]:"fire-fn-compat",[IN]:"fire-iid",[AN]:"fire-iid-compat",[bN]:"fire-fcm",[SN]:"fire-fcm-compat",[RN]:"fire-perf",[CN]:"fire-perf-compat",[DN]:"fire-rc",[NN]:"fire-rc-compat",[PN]:"fire-gcs",[xN]:"fire-gcs-compat",[VN]:"fire-fst",[kN]:"fire-fst-compat",[ON]:"fire-vertex","fire-js":"fire-js",[MN]:"fire-js-all"};/**
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
 */const Os=new Map,Sl=new Map,Rl=new Map;function Jc(i,e){try{i.container.addComponent(e)}catch(t){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function z0(i,e){i.container.addOrOverwriteComponent(e)}function ks(i){const e=i.name;if(Rl.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;Rl.set(e,i);for(const t of Os.values())Jc(t,i);for(const t of Sl.values())Jc(t,i);return!0}function F0(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function BN(i,e,t=Vs){F0(i,e).clearInstance(t)}function _y(i){return i.options!==void 0}function q0(i){return _y(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function dt(i){return i==null?!1:i.settings!==void 0}function zN(){Rl.clear()}/**
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
 */const FN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new lo("app","Firebase",FN);/**
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
 */let j0=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};/**
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
 */function II(i,e){const t=cy(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class qN extends j0{constructor(e,t,n,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:n,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig={automaticDataCollectionEnabled:l,...t},this._serverConfig.authIdToken&&II(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&II(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Er(Bf,A_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){vy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Yn.create("server-app-deleted")}}/**
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
 */const Hs=LN;function yy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:Vs,automaticDataCollectionEnabled:!0,...e},a=n.name;if(typeof a!="string"||!a)throw Yn.create("bad-app-name",{appName:String(a)});if(t||(t=fy()),!t)throw Yn.create("no-options");const l=Os.get(a);if(l){if(xs(t,l.options)&&xs(n,l.config))return l;throw Yn.create("duplicate-app",{appName:a})}const c=new M0(a);for(const m of Rl.values())c.addComponent(m);const f=new j0(t,n,c);return Os.set(a,f),f}function jN(i,e={}){if(kD()&&!N0())throw Yn.create("invalid-server-app-environment");let t,n=e||{};if(i&&(_y(i)?t=i.options:q0(i)?n=i:t=i),n.automaticDataCollectionEnabled===void 0&&(n.automaticDataCollectionEnabled=!0),t||(t=fy()),!t)throw Yn.create("no-options");const a={...n,...t};a.releaseOnDeref!==void 0&&delete a.releaseOnDeref;const l=y=>[...y].reduce((T,A)=>Math.imul(31,T)+A.charCodeAt(0)|0,0);if(n.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Yn.create("finalization-registry-not-supported",{});const c=""+l(JSON.stringify(a)),f=Sl.get(c);if(f)return f.incRefCount(n.releaseOnDeref),f;const m=new M0(c);for(const y of Rl.values())m.addComponent(y);const g=new qN(t,n,c,m);return Sl.set(c,g),g}function HN(i=Vs){const e=Os.get(i);if(!e&&i===Vs&&fy())return yy();if(!e)throw Yn.create("no-app",{appName:i});return e}function GN(){return Array.from(Os.values())}async function vy(i){let e=!1;const t=i.name;Os.has(t)?(e=!0,Os.delete(t)):Sl.has(t)&&i.decRefCount()<=0&&(Sl.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Er(i,e,t){let n=UN[i]??i;t&&(n+=`-${t}`);const a=n.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${n}" with version "${e}":`];a&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(c.join(" "));return}ks(new Zr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function H0(i,e){if(i!==null&&typeof i!="function")throw Yn.create("invalid-log-argument");XD(i,e)}function G0(i){WD(i)}/**
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
 */const KN="firebase-heartbeat-database",QN=1,Zc="firebase-heartbeat-store";let i_=null;function K0(){return i_||(i_=aN(KN,QN,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Zc)}catch(t){console.warn(t)}}}}).catch(i=>{throw Yn.create("idb-open",{originalErrorMessage:i.message})})),i_}async function YN(i){try{const t=(await K0()).transaction(Zc),n=await t.objectStore(Zc).get(Q0(i));return await t.done,n}catch(e){if(e instanceof Sn)Vi.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vi.warn(t.message)}}}async function AI(i,e){try{const n=(await K0()).transaction(Zc,"readwrite");await n.objectStore(Zc).put(e,Q0(i)),await n.done}catch(t){if(t instanceof Sn)Vi.warn(t.message);else{const n=Yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vi.warn(n.message)}}}function Q0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const $N=1024,WN=30;class XN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZN(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=bI();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>WN){const c=e2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Vi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bI(),{heartbeatsToSend:n,unsentEntries:a}=JN(this._heartbeatsCache.heartbeats),l=Lf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vi.warn(t),""}}}function bI(){return new Date().toISOString().substring(0,10)}function JN(i,e=$N){const t=[];let n=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),SI(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),SI(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ZN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xc()?LD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return AI(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return AI(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function SI(i){return Lf(JSON.stringify({version:2,heartbeats:i})).length}function e2(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function t2(i){ks(new Zr("platform-logger",e=>new uN(e),"PRIVATE")),ks(new Zr("heartbeat",e=>new XN(e),"PRIVATE")),Er(Bf,A_,i),Er(Bf,A_,"esm2020"),Er("fire-js","")}t2("");const n2=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Sn,SDK_VERSION:Hs,_DEFAULT_ENTRY_NAME:Vs,_addComponent:Jc,_addOrOverwriteComponent:z0,_apps:Os,_clearComponents:zN,_components:Rl,_getProvider:F0,_isFirebaseApp:_y,_isFirebaseServerApp:dt,_isFirebaseServerAppSettings:q0,_registerComponent:ks,_removeServiceInstance:BN,_serverApps:Sl,deleteApp:vy,getApp:HN,getApps:GN,initializeApp:yy,initializeServerApp:jN,onLog:H0,registerVersion:Er,setLogLevel:G0},Symbol.toStringTag,{value:"Module"}));/**
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
 */class r2{constructor(e,t){this._delegate=e,this.firebase=t,Jc(e,new Zr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),vy(this._delegate)))}_getService(e,t=Vs){var a;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return!n.isInitialized()&&((a=n.getComponent())==null?void 0:a.instantiationMode)==="EXPLICIT"&&n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=Vs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Jc(this._delegate,e)}_addOrOverwriteComponent(e){z0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const i2={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},RI=new lo("app-compat","Firebase",i2);/**
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
 */function s2(i){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Er,setLogLevel:G0,onLog:H0,apps:null,SDK_VERSION:Hs,INTERNAL:{registerComponent:f,removeApp:n,useAsService:m,modularAPIs:n2}};t.default=t,Object.defineProperty(t,"apps",{get:c});function n(g){delete e[g]}function a(g){if(g=g||Vs,!yI(e,g))throw RI.create("no-app",{appName:g});return e[g]}a.App=i;function l(g,y={}){const T=yy(g,y);if(yI(e,T.name))return e[T.name];const A=new i(T,t);return e[T.name]=A,A}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const y=g.name,T=y.replace("-compat","");if(ks(g)&&g.type==="PUBLIC"){const A=(x=a())=>{if(typeof x[T]!="function")throw RI.create("invalid-app-argument",{appName:y});return x[T]()};g.serviceProps!==void 0&&Uf(A,g.serviceProps),t[T]=A,i.prototype[T]=function(...x){return this._getService.bind(this,y).apply(this,g.multipleInstances?x:[])}}return g.type==="PUBLIC"?t[T]:null}function m(g,y){return y==="serverAuth"?null:y}return t}/**
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
 */function Y0(){const i=s2(r2);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:Y0,extendNamespace:e,createSubscribe:k0,ErrorFactory:lo,deepExtend:Uf};function e(t){Uf(i,t)}return i}const a2=Y0();/**
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
 */const CI=new cm("@firebase/app-compat"),o2="@firebase/app-compat",l2="0.5.2";/**
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
 */function u2(i){Er(o2,l2,i)}/**
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
 */try{const i=hy();if(i.firebase!==void 0){CI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&CI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ei=a2;u2();var c2="firebase",h2="12.2.1";/**
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
 */ei.registerVersion(c2,h2,"app-compat");const yc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ol={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function d2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f2=d2,m2=$0,W0=new lo("auth","Firebase",$0());/**
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
 */const zf=new cm("@firebase/auth");function p2(i,...e){zf.logLevel<=ke.WARN&&zf.warn(`Auth (${Hs}): ${i}`,...e)}function wf(i,...e){zf.logLevel<=ke.ERROR&&zf.error(`Auth (${Hs}): ${i}`,...e)}/**
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
 */function hn(i,...e){throw Ty(i,...e)}function Ht(i,...e){return Ty(i,...e)}function Ey(i,e,t){const n={...m2(),[e]:t};return new lo("auth","Firebase",n).create(e,{appName:i.name})}function en(i){return Ey(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xl(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&hn(i,"argument-error"),Ey(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ty(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return W0.create(i,...e)}function ne(i,e,...t){if(!i)throw Ty(e,...t)}function Qr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw wf(e),new Error(e)}function Ir(i,e){i||Qr(e)}/**
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
 */function eh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function wy(){return DI()==="http:"||DI()==="https:"}function DI(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function g2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wy()||P0()||"connection"in navigator)?navigator.onLine:!0}function _2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Th{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=OD()||my()}get(){return g2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class X0{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const v2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],E2=new Th(3e4,6e4);function It(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function At(i,e,t,n,a={}){return J0(i,a,async()=>{let l={},c={};n&&(e==="GET"?c=n:l={body:JSON.stringify(n)});const f=Wl({key:i.config.apiKey,...c}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...l};return MD()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&$l(i.emulatorConfig.host)&&(g.credentials="include"),X0.fetch()(await Z0(i,i.config.apiHost,t,f),g)})}async function J0(i,e,t){i._canInitEmulator=!1;const n={...y2,...e};try{const a=new w2(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Cc(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Cc(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Cc(i,"user-disabled",c);const y=n[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ey(i,y,g);hn(i,y)}}catch(a){if(a instanceof Sn)throw a;hn(i,"network-request-failed",{message:String(a)})}}async function Li(i,e,t,n,a={}){const l=await At(i,e,t,n,a);return"mfaPendingCredential"in l&&hn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function Z0(i,e,t,n){const a=`${e}${t}?${n}`,l=i,c=l.config.emulator?Iy(i.config,a):`${i.config.apiScheme}://${a}`;return v2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function T2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ht(this.auth,"network-request-failed")),E2.get())})}}function Cc(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=Ht(i,e,n);return a.customData._tokenResponse=t,a}/**
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
 */function NI(i){return i!==void 0&&i.getResponse!==void 0}function PI(i){return i!==void 0&&i.enterprise!==void 0}class eb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return T2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function I2(i){return(await At(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tb(i,e){return At(i,"GET","/v2/recaptchaConfig",It(i,e))}/**
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
 */async function A2(i,e){return At(i,"POST","/v1/accounts:delete",e)}async function b2(i,e){return At(i,"POST","/v1/accounts:update",e)}async function Ff(i,e){return At(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lc(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S2(i,e=!1){const t=Ee(i),n=await t.getIdToken(e),a=hm(n);ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:n,authTime:Lc(s_(a.auth_time)),issuedAtTime:Lc(s_(a.iat)),expirationTime:Lc(s_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function s_(i){return Number(i)*1e3}function hm(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return wf("JWT malformed, contained fewer than 3 sections"),null;try{const a=cy(t);return a?JSON.parse(a):(wf("Failed to decode base64 JWT payload"),null)}catch(a){return wf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function xI(i){const e=hm(i);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oi(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Sn&&R2(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function R2({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class C2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class b_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lc(this.lastLoginAt),this.creationTime=Lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function th(i){var T;const e=i.auth,t=await i.getIdToken(),n=await Oi(i,Ff(e,{idToken:t}));ne(n==null?void 0:n.users.length,e,"internal-error");const a=n.users[0];i._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?nb(a.providerUserInfo):[],c=N2(i.providerData,l),f=i.isAnonymous,m=!(i.email&&a.passwordHash)&&!(c!=null&&c.length),g=f?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new b_(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function D2(i){const e=Ee(i);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N2(i,e){return[...i.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function nb(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function P2(i,e){const t=await J0(i,{},async()=>{const n=Wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Z0(i,a,"/v1/token",`key=${l}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:n};return i.emulatorConfig&&$l(i.emulatorConfig.host)&&(m.credentials="include"),X0.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x2(i,e){return At(i,"POST","/v2/accounts:revokeToken",It(i,e))}/**
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
 */class El{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=xI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:a,expiresIn:l}=await P2(e,t);this.updateTokensAndExpiration(n,a,Number(l))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:a,expirationTime:l}=t,c=new El;return n&&(ne(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),a&&(ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new El,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
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
 */function ys(i,e){ne(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor({uid:e,auth:t,stsTokenManager:n,...a}){this.providerId="firebase",this.proactiveRefresh=new C2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new b_(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return S2(this,e)}reload(){return D2(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await th(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Oi(this,A2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:x,providerData:G,stsTokenManager:X}=t;ne(T&&X,e,"internal-error");const K=El.fromJSON(this.name,X);ne(typeof T=="string",e,"internal-error"),ys(n,e.name),ys(a,e.name),ne(typeof A=="boolean",e,"internal-error"),ne(typeof x=="boolean",e,"internal-error"),ys(l,e.name),ys(c,e.name),ys(f,e.name),ys(m,e.name),ys(g,e.name),ys(y,e.name);const de=new vr({uid:T,auth:e,email:a,emailVerified:A,displayName:n,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:K,createdAt:g,lastLoginAt:y});return G&&Array.isArray(G)&&(de.providerData=G.map(ce=>({...ce}))),m&&(de._redirectEventId=m),de}static async _fromIdTokenResponse(e,t,n=!1){const a=new El;a.updateFromServerResponse(t);const l=new vr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await th(l),l}static async _fromGetAccountInfoResponse(e,t,n){const a=t.users[0];ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?nb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new El;f.updateFromIdToken(n);const m=new vr({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new b_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const VI=new Map;function Qn(i){Ir(i instanceof Function,"Expected a class definition");let e=VI.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,VI.set(i,e),e)}/**
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
 */class rb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rb.type="NONE";const Cl=rb;/**
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
 */function Qa(i,e,t){return`firebase:${i}:${e}:${t}`}class Tl{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:a,name:l}=this.auth;this.fullUserKey=Qa(this.userKey,a.apiKey,l),this.fullPersistenceKey=Qa("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ff(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tl(Qn(Cl),e,n);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Qn(Cl);const c=Qa(n,e.config.apiKey,e.name);let f=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const A=await Ff(e,{idToken:y}).catch(()=>{});if(!A)break;T=await vr._fromGetAccountInfoResponse(e,A,y)}else T=vr._fromJSON(e,y);g!==l&&(f=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Tl(l,e,n):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Tl(l,e,n))}}/**
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
 */function OI(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ob(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ib(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lb(e))return"Blackberry";if(ub(e))return"Webos";if(sb(e))return"Safari";if((e.includes("chrome/")||ab(e))&&!e.includes("edge/"))return"Chrome";if(wh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ib(i=gt()){return/firefox\//i.test(i)}function sb(i=gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ab(i=gt()){return/crios\//i.test(i)}function ob(i=gt()){return/iemobile/i.test(i)}function wh(i=gt()){return/android/i.test(i)}function lb(i=gt()){return/blackberry/i.test(i)}function ub(i=gt()){return/webos/i.test(i)}function Ih(i=gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function V2(i=gt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function O2(i=gt()){var e;return Ih(i)&&!!((e=window.navigator)!=null&&e.standalone)}function k2(){return x0()&&document.documentMode===10}function cb(i=gt()){return Ih(i)||wh(i)||ub(i)||lb(i)||/windows phone/i.test(i)||ob(i)}/**
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
 */function hb(i,e=[]){let t;switch(i){case"Browser":t=OI(gt());break;case"Worker":t=`${OI(gt())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hs}/${n}`}/**
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
 */class M2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});n.onAbort=t,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function L2(i,e={}){return At(i,"GET","/v2/passwordPolicy",It(i,e))}/**
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
 */const U2=6;class B2{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??U2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class z2{constructor(e,t,n,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kI(this),this.idTokenSubscription=new kI(this),this.beforeStateQueue=new M2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qn(t)),this._initializationPromise=this.queue(async()=>{var n,a,l;if(!this._deleted&&(this.persistenceManager=await Tl.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ff(this,{idToken:e}),n=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(dt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=n==null?void 0:n._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(n=m.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(c){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await th(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(en(this));const t=e?Ee(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L2(this),t=new B2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await x2(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Tl.create(this,[Qn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,n,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&p2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(i){return Ee(i)}class kI{constructor(e){this.auth=e,this.observer=null,this.addObserver=k0(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F2(i){Ah=i}function Ay(i){return Ah.loadJS(i)}function q2(){return Ah.recaptchaV2Script}function j2(){return Ah.recaptchaEnterpriseScript}function H2(){return Ah.gapiScript}function db(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const G2=500,K2=6e4,mf=1e12;class Q2{constructor(e){this.auth=e,this.counter=mf,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new W2(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||mf;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||mf;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||mf;return(n=this._widgets.get(t))==null||n.execute(),""}}class Y2{constructor(){this.enterprise=new $2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class W2{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ne(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=X2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},K2)},G2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function X2(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<i;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const J2="recaptcha-enterprise",Uc="NO_RECAPTCHA";class fb{constructor(e){this.type=J2,this.auth=_t(e)}async verify(e="verify",t=!1){async function n(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{tb(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new eb(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;PI(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Uc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y2().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{n(this.auth).then(f=>{if(!t&&PI(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=j2();m.length!==0&&(m+=f),Ay(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function vc(i,e,t,n=!1,a=!1){const l=new fb(i);let c;if(a)c=Uc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return n?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Cs(i,e,t,n,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if((l=i._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await vc(i,e,t,t==="getOobCode");return n(i,f)}else return n(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await vc(i,e,t,t==="getOobCode");return n(i,m)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if((c=i._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await vc(i,e,t);return n(i,f).catch(async m=>{var g;if(((g=i._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await vc(i,e,t,!1,!0);return n(i,y)}return Promise.reject(m)})}else{const f=await vc(i,e,t,!1,!0);return n(i,f)}else return Promise.reject(a+" provider is not supported.")}async function Z2(i){const e=_t(i),t=await tb(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eb(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new fb(e).verify()}function eP(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tP(i,e,t){const n=_t(i);ne(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=mb(e),{host:c,port:f}=nP(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator){ne(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ne(xs(g,n.config.emulator)&&xs(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,$l(c)?(C0(`${l}//${c}${m}`),D0("Auth",!0)):a||rP()}function mb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nP(i){const e=mb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const l=a[1];return{host:l,port:MI(n.substr(l.length+1))}}else{const[l,c]=n.split(":");return{host:l,port:MI(c)}}}function MI(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function rP(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Jl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qr("not implemented")}_getIdTokenResponse(e){return Qr("not implemented")}_linkToIdToken(e,t){return Qr("not implemented")}_getReauthenticationResolver(e){return Qr("not implemented")}}/**
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
 */async function pb(i,e){return At(i,"POST","/v1/accounts:resetPassword",It(i,e))}async function iP(i,e){return At(i,"POST","/v1/accounts:update",e)}async function sP(i,e){return At(i,"POST","/v1/accounts:signUp",e)}async function aP(i,e){return At(i,"POST","/v1/accounts:update",It(i,e))}/**
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
 */async function oP(i,e){return Li(i,"POST","/v1/accounts:signInWithPassword",It(i,e))}async function dm(i,e){return At(i,"POST","/v1/accounts:sendOobCode",It(i,e))}async function lP(i,e){return dm(i,e)}async function uP(i,e){return dm(i,e)}async function cP(i,e){return dm(i,e)}async function hP(i,e){return dm(i,e)}/**
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
 */async function dP(i,e){return Li(i,"POST","/v1/accounts:signInWithEmailLink",It(i,e))}async function fP(i,e){return Li(i,"POST","/v1/accounts:signInWithEmailLink",It(i,e))}/**
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
 */class nh extends Jl{constructor(e,t,n,a=null){super("password",n),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new nh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cs(e,t,"signInWithPassword",oP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dP(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cs(e,n,"signUpPassword",sP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return fP(e,{idToken:t,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(i,e){return Li(i,"POST","/v1/accounts:signInWithIdp",It(i,e))}/**
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
 */const mP="http://localhost";class ti extends Jl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,...l}=t;if(!n||!a)return null;const c=new ti(n,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}buildRequest(){const e={requestUri:mP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wl(t)}return e}}/**
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
 */async function LI(i,e){return At(i,"POST","/v1/accounts:sendVerificationCode",It(i,e))}async function pP(i,e){return Li(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,e))}async function gP(i,e){const t=await Li(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,e));if(t.temporaryProof)throw Cc(i,"account-exists-with-different-credential",t);return t}const _P={USER_NOT_FOUND:"user-not-found"};async function yP(i,e){const t={...e,operation:"REAUTH"};return Li(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,t),_P)}/**
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
 */class Ya extends Jl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ya({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ya({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return pP(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gP(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return yP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l}=e;return!n&&!t&&!a&&!l?null:new Ya({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l})}}/**
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
 */function vP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EP(i){const e=vl(Rc(i)).link,t=e?vl(Rc(e)).deep_link_id:null,n=vl(Rc(i)).deep_link_id;return(n?vl(Rc(n)).link:null)||n||t||e||i}class fm{constructor(e){const t=vl(Rc(e)),n=t.apiKey??null,a=t.oobCode??null,l=vP(t.mode??null);ne(n&&a&&l,"argument-error"),this.apiKey=n,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=EP(e);try{return new fm(t)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,t){return nh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=fm.parseLink(t);return ne(n,"argument-error"),nh._fromEmailAndCode(e,n.code,n.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ui{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zl extends Ui{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class wl extends Zl{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ne("providerId"in t&&"signInMethod"in t,"argument-error"),ti._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return ne(e.idToken||e.accessToken,"argument-error"),ti._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return wl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return wl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!n&&!a&&!t&&!l||!f)return null;try{return new wl(f)._credential({idToken:t,accessToken:n,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class jr extends Zl{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Hr extends Zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ti._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Hr.credential(t,n)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
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
 */class Gr extends Zl{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */const TP="http://localhost";class Dl extends Jl{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return xi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,pendingToken:l}=t;return!n||!a||!l||n!==a?null:new Dl(n,l)}static _create(e,t){return new Dl(e,t)}buildRequest(){return{requestUri:TP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const wP="saml.";class qf extends Ui{constructor(e){ne(e.startsWith(wP),"argument-error"),super(e)}static credentialFromResult(e){return qf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Dl.fromJSON(e);return ne(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Dl._create(n,t)}catch{return null}}}/**
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
 */class Kr extends Zl{constructor(){super("twitter.com")}static credential(e,t){return ti._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Kr.credential(t,n)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */async function gb(i,e){return Li(i,"POST","/v1/accounts:signUp",It(i,e))}/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,a=!1){const l=await vr._fromIdTokenResponse(e,n,a),c=UI(n);return new hr({user:l,providerId:c,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const a=UI(n);return new hr({user:e,providerId:a,_tokenResponse:n,operationType:t})}}function UI(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function IP(i){var a;if(dt(i.app))return Promise.reject(en(i));const e=_t(i);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new hr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await gb(e,{returnSecureToken:!0}),n=await hr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class jf extends Sn{constructor(e,t,n,a){super(t.code,t.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,jf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,a){return new jf(e,t,n,a)}}function _b(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jf._fromErrorAndOperation(i,l,e,n):l})}/**
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
 */function yb(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function AP(i,e){const t=Ee(i);await mm(!0,t,e);const{providerUserInfo:n}=await b2(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=yb(n||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function by(i,e,t=!1){const n=await Oi(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return hr._forOperation(i,"link",n)}async function mm(i,e,t){await th(e);const n=yb(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";ne(n.has(t)===i,e.auth,a)}/**
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
 */async function vb(i,e,t=!1){const{auth:n}=i;if(dt(n.app))return Promise.reject(en(n));const a="reauthenticate";try{const l=await Oi(i,_b(n,a,e,i),t);ne(l.idToken,n,"internal-error");const c=hm(l.idToken);ne(c,n,"internal-error");const{sub:f}=c;return ne(i.uid===f,n,"user-mismatch"),hr._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&hn(n,"user-mismatch"),l}}/**
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
 */async function Eb(i,e,t=!1){if(dt(i.app))return Promise.reject(en(i));const n="signIn",a=await _b(i,n,e),l=await hr._fromIdTokenResponse(i,n,a);return t||await i._updateCurrentUser(l.user),l}async function pm(i,e){return Eb(_t(i),e)}async function Tb(i,e){const t=Ee(i);return await mm(!1,t,e.providerId),by(t,e)}async function wb(i,e){return vb(Ee(i),e)}/**
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
 */async function bP(i,e){return Li(i,"POST","/v1/accounts:signInWithCustomToken",It(i,e))}/**
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
 */async function SP(i,e){if(dt(i.app))return Promise.reject(en(i));const t=_t(i),n=await bP(t,{token:e,returnSecureToken:!0}),a=await hr._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(a.user),a}/**
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
 */class bh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Sy._fromServerResponse(e,t):"totpInfo"in t?Ry._fromServerResponse(e,t):hn(e,"internal-error")}}class Sy extends bh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Sy(t)}}class Ry extends bh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ry(t)}}/**
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
 */function gm(i,e,t){var n;ne(((n=t.url)==null?void 0:n.length)>0,i,"invalid-continue-uri"),ne(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),ne(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ne(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ne(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Cy(i){const e=_t(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RP(i,e,t){const n=_t(i),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&gm(n,a,t),await Cs(n,a,"getOobCode",uP,"EMAIL_PASSWORD_PROVIDER")}async function CP(i,e,t){await pb(Ee(i),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cy(i),n})}async function DP(i,e){await aP(Ee(i),{oobCode:e})}async function Ib(i,e){const t=Ee(i),n=await pb(t,{oobCode:e}),a=n.requestType;switch(ne(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ne(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ne(n.mfaInfo,t,"internal-error");default:ne(n.email,t,"internal-error")}let l=null;return n.mfaInfo&&(l=bh._fromServerResponse(_t(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:l},operation:a}}async function NP(i,e){const{data:t}=await Ib(Ee(i),e);return t.email}async function PP(i,e,t){if(dt(i.app))return Promise.reject(en(i));const n=_t(i),c=await Cs(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gb,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Cy(i),m}),f=await hr._fromIdTokenResponse(n,"signIn",c);return await n._updateCurrentUser(f.user),f}function xP(i,e,t){return dt(i.app)?Promise.reject(en(i)):pm(Ee(i),Gs.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cy(i),n})}/**
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
 */async function VP(i,e,t){const n=_t(i),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){ne(f.handleCodeInApp,n,"argument-error"),f&&gm(n,c,f)}l(a,t),await Cs(n,a,"getOobCode",cP,"EMAIL_PASSWORD_PROVIDER")}function OP(i,e){const t=fm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function kP(i,e,t){if(dt(i.app))return Promise.reject(en(i));const n=Ee(i),a=Gs.credentialWithLink(e,t||eh());return ne(a._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),pm(n,a)}/**
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
 */async function MP(i,e){return At(i,"POST","/v1/accounts:createAuthUri",It(i,e))}/**
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
 */async function LP(i,e){const t=wy()?eh():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:a}=await MP(Ee(i),n);return a||[]}async function UP(i,e){const t=Ee(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&gm(t.auth,a,e);const{email:l}=await lP(t.auth,a);l!==i.email&&await i.reload()}async function BP(i,e,t){const n=Ee(i),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&gm(n.auth,l,t);const{email:c}=await hP(n.auth,l);c!==i.email&&await i.reload()}/**
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
 */async function zP(i,e){return At(i,"POST","/v1/accounts:update",e)}/**
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
 */async function FP(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(i),l={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Oi(n,zP(n.auth,l));n.displayName=c.displayName||null,n.photoURL=c.photoUrl||null;const f=n.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=n.displayName,f.photoURL=n.photoURL),await n._updateTokensIfNecessary(c)}function qP(i,e){const t=Ee(i);return dt(t.auth.app)?Promise.reject(en(t.auth)):Ab(t,e,null)}function jP(i,e){return Ab(Ee(i),null,e)}async function Ab(i,e,t){const{auth:n}=i,l={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Oi(i,iP(n,l));await i._updateTokensIfNecessary(c,!0)}/**
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
 */function HP(i){var a,l;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},n=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const c=(l=(a=hm(i.idToken))==null?void 0:a.firebase)==null?void 0:l.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new Il(n,f)}}if(!e)return null;switch(e){case"facebook.com":return new GP(n,t);case"github.com":return new KP(n,t);case"google.com":return new QP(n,t);case"twitter.com":return new YP(n,t,i.screenName||null);case"custom":case"anonymous":return new Il(n,null);default:return new Il(n,e,t)}}class Il{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class bb extends Il{constructor(e,t,n,a){super(e,t,n),this.username=a}}class GP extends Il{constructor(e,t){super(e,"facebook.com",t)}}class KP extends bb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class QP extends Il{constructor(e,t){super(e,"google.com",t)}}class YP extends bb{constructor(e,t,n){super(e,"twitter.com",t,n)}}function $P(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:HP(t)}/**
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
 */class ja{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new ja("enroll",e,t)}static _fromMfaPendingCredential(e){return new ja("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ja._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)!=null&&n.idToken)return ja._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Dy{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=_t(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>bh._fromServerResponse(n,f));ne(a.mfaPendingCredential,n,"internal-error");const c=ja._fromMfaPendingCredential(a.mfaPendingCredential);return new Dy(c,l,async f=>{const m=await f._process(n,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g={...a,idToken:m.idToken,refreshToken:m.refreshToken};switch(t.operationType){case"signIn":const y=await hr._fromIdTokenResponse(n,t.operationType,g);return await n._updateCurrentUser(y.user),y;case"reauthenticate":return ne(t.user,n,"internal-error"),hr._forOperation(t.user,t.operationType,g);default:hn(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function WP(i,e){var a;const t=Ee(i),n=e;return ne(e.customData.operationType,t,"argument-error"),ne((a=n.customData._serverResponse)==null?void 0:a.mfaPendingCredential,t,"argument-error"),Dy._fromError(t,n)}/**
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
 */function BI(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:start",It(i,e))}function XP(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:finalize",It(i,e))}function JP(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:withdraw",It(i,e))}class Ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>bh._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Ny(e)}async getSession(){return ja._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,a=await this.getSession(),l=await Oi(this.user,n._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const a=await Oi(this.user,JP(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const a_=new WeakMap;function ZP(i){const e=Ee(i);return a_.has(e)||a_.set(e,Ny._fromUser(e)),a_.get(e)}const Hf="__sak";/**
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
 */class Sb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hf,"1"),this.storage.removeItem(Hf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ex=1e3,tx=10;class Rb extends Sb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),a=this.localCache[t];n!==a&&e(t,a,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const n=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(n);!t&&this.localCache[n]===c||this.notifyListeners(n,c)},l=this.storage.getItem(n);k2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,tx):a()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rb.type="LOCAL";const Py=Rb;/**
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
 */class Cb extends Sb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cb.type="SESSION";const Wa=Cb;/**
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
 */function nx(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _m{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const n=new _m(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await nx(f);t.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_m.receivers=[];/**
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
 */function Sh(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class rx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Sh("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},n);c={messageChannel:a,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Lt(){return window}function ix(i){Lt().location.href=i}/**
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
 */function xy(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function sx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ax(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function ox(){return xy()?self:null}/**
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
 */const Db="firebaseLocalStorageDb",lx=1,Gf="firebaseLocalStorage",Nb="fbase_key";class Rh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ym(i,e){return i.transaction([Gf],e?"readwrite":"readonly").objectStore(Gf)}function ux(){const i=indexedDB.deleteDatabase(Db);return new Rh(i).toPromise()}function S_(){const i=indexedDB.open(Db,lx);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(Gf,{keyPath:Nb})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(Gf)?e(n):(n.close(),await ux(),e(await S_()))})})}async function zI(i,e,t){const n=ym(i,!0).put({[Nb]:e,value:t});return new Rh(n).toPromise()}async function cx(i,e){const t=ym(i,!1).get(e),n=await new Rh(t).toPromise();return n===void 0?null:n.value}function FI(i,e){const t=ym(i,!0).delete(e);return new Rh(t).toPromise()}const hx=800,dx=3;class Pb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await S_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>dx)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_m._getInstance(ox()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sx(),!this.activeServiceWorker)return;this.sender=new rx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ax()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await S_();return await zI(e,Hf,"1"),await FI(e,Hf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zI(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>cx(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>FI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=ym(a,!1).getAll();return new Rh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pb.type="LOCAL";const rh=Pb;/**
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
 */function qI(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:start",It(i,e))}function fx(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:finalize",It(i,e))}/**
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
 */const o_=db("rcb"),mx=new Th(3e4,6e4);class px{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Lt().grecaptcha)!=null&&e.render)}load(e,t=""){return ne(gx(t),e,"argument-error"),this.shouldResolveImmediately(t)&&NI(Lt().grecaptcha)?Promise.resolve(Lt().grecaptcha):new Promise((n,a)=>{const l=Lt().setTimeout(()=>{a(Ht(e,"network-request-failed"))},mx.get());Lt()[o_]=()=>{Lt().clearTimeout(l),delete Lt()[o_];const f=Lt().grecaptcha;if(!f||!NI(f)){a(Ht(e,"internal-error"));return}const m=f.render;f.render=(g,y)=>{const T=m(g,y);return this.counter++,T},this.hostLanguage=t,n(f)};const c=`${q2()}?${Wl({onload:o_,render:"explicit",hl:t})}`;Ay(c).catch(()=>{clearTimeout(l),a(Ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Lt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gx(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class _x{async load(e){return new Q2(e)}clearedOneInstance(){}}/**
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
 */const Bc="recaptcha",yx={theme:"light",type:"image"};let vx=class{constructor(e,t,n={...yx}){this.parameters=n,this.type=Bc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_t(e),this.isInvisible=this.parameters.size==="invisible",ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ne(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _x:new px,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ne(!this.parameters.sitekey,this.auth,"argument-error"),ne(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Lt()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){ne(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ne(wy()&&!xy(),this.auth,"internal-error"),await Ex(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await I2(this.auth);ne(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ne(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Ex(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Vy{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ya._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Tx(i,e,t){if(dt(i.app))return Promise.reject(en(i));const n=_t(i),a=await vm(n,e,Ee(t));return new Vy(a,l=>pm(n,l))}async function wx(i,e,t){const n=Ee(i);await mm(!1,n,"phone");const a=await vm(n.auth,e,Ee(t));return new Vy(a,l=>Tb(n,l))}async function Ix(i,e,t){const n=Ee(i);if(dt(n.auth.app))return Promise.reject(en(n.auth));const a=await vm(n.auth,e,Ee(t));return new Vy(a,l=>wb(n,l))}async function vm(i,e,t){var n;if(!i._getRecaptchaConfig())try{await Z2(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){ne(l.type==="enroll",i,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Cs(i,c,"mfaSmsEnrollment",async(y,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,y,"argument-error");const A=await l_(y,T,t);return BI(y,A)}return BI(y,T)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{ne(l.type==="signin",i,"internal-error");const c=((n=a.multiFactorHint)==null?void 0:n.uid)||a.multiFactorUid;ne(c,i,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Cs(i,f,"mfaSmsSignIn",async(T,A)=>{if(A.phoneSignInInfo.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,T,"argument-error");const x=await l_(T,A,t);return qI(T,x)}return qI(T,A)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Cs(i,l,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===Uc){ne((t==null?void 0:t.type)===Bc,g,"argument-error");const T=await l_(g,y,t);return LI(g,T)}return LI(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function Ax(i,e){const t=Ee(i);if(dt(t.auth.app))return Promise.reject(en(t.auth));await by(t,e)}async function l_(i,e,t){ne(t.type===Bc,i,"argument-error");const n=await t.verify();ne(typeof n=="string",i,"argument-error");const a={...e};if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:n,captchaResponse:c,clientType:f,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:n}),a}/**
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
 */let Xa=class If{constructor(e){this.providerId=If.PROVIDER_ID,this.auth=_t(e)}verifyPhoneNumber(e,t){return vm(this.auth,e,Ee(t))}static credential(e,t){return Ya._fromVerification(e,t)}static credentialFromResult(e){const t=e;return If.credentialFromTaggedObject(t)}static credentialFromError(e){return If.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ya._fromTokenResponse(t,n):null}};Xa.PROVIDER_ID="phone";Xa.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function uo(i,e){return e?Qn(e):(ne(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Oy extends Jl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bx(i){return Eb(i.auth,new Oy(i),i.bypassAuthState)}function Sx(i){const{auth:e,user:t}=i;return ne(t,e,"internal-error"),vb(t,new Oy(i),i.bypassAuthState)}async function Rx(i){const{auth:e,user:t}=i;return ne(t,e,"internal-error"),by(t,new Oy(i),i.bypassAuthState)}/**
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
 */class xb{constructor(e,t,n,a,l=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:n,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bx;case"linkViaPopup":case"linkViaRedirect":return Rx;case"reauthViaPopup":case"reauthViaRedirect":return Sx;default:hn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cx=new Th(2e3,1e4);async function Dx(i,e,t){if(dt(i.app))return Promise.reject(Ht(i,"operation-not-supported-in-this-environment"));const n=_t(i);Xl(i,e,Ui);const a=uo(n,t);return new Ni(n,"signInViaPopup",e,a).executeNotNull()}async function Nx(i,e,t){const n=Ee(i);if(dt(n.auth.app))return Promise.reject(Ht(n.auth,"operation-not-supported-in-this-environment"));Xl(n.auth,e,Ui);const a=uo(n.auth,t);return new Ni(n.auth,"reauthViaPopup",e,a,n).executeNotNull()}async function Px(i,e,t){const n=Ee(i);Xl(n.auth,e,Ui);const a=uo(n.auth,t);return new Ni(n.auth,"linkViaPopup",e,a,n).executeNotNull()}class Ni extends xb{constructor(e,t,n,a,l){super(e,t,a,l),this.provider=n,this.authWindow=null,this.pollId=null,Ni.currentPopupAction&&Ni.currentPopupAction.cancel(),Ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cx.get())};e()}}Ni.currentPopupAction=null;/**
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
 */const xx="pendingRedirect",zc=new Map;class Vx extends xb{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const n=await Ox(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ox(i,e){const t=Ob(e),n=Vb(i);if(!await n._isAvailable())return!1;const a=await n._get(t)==="true";return await n._remove(t),a}async function ky(i,e){return Vb(i)._set(Ob(e),"true")}function kx(){zc.clear()}function My(i,e){zc.set(i._key(),e)}function Vb(i){return Qn(i._redirectPersistence)}function Ob(i){return Qa(xx,i.config.apiKey,i.name)}/**
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
 */function Mx(i,e,t){return Lx(i,e,t)}async function Lx(i,e,t){if(dt(i.app))return Promise.reject(en(i));const n=_t(i);Xl(i,e,Ui),await n._initializationPromise;const a=uo(n,t);return await ky(a,n),a._openRedirect(n,e,"signInViaRedirect")}function Ux(i,e,t){return Bx(i,e,t)}async function Bx(i,e,t){const n=Ee(i);if(Xl(n.auth,e,Ui),dt(n.auth.app))return Promise.reject(en(n.auth));await n.auth._initializationPromise;const a=uo(n.auth,t);await ky(a,n.auth);const l=await kb(n);return a._openRedirect(n.auth,e,"reauthViaRedirect",l)}function zx(i,e,t){return Fx(i,e,t)}async function Fx(i,e,t){const n=Ee(i);Xl(n.auth,e,Ui),await n.auth._initializationPromise;const a=uo(n.auth,t);await mm(!1,n,e.providerId),await ky(a,n.auth);const l=await kb(n);return a._openRedirect(n.auth,e,"linkViaRedirect",l)}async function qx(i,e){return await _t(i)._initializationPromise,Em(i,e,!1)}async function Em(i,e,t=!1){if(dt(i.app))return Promise.reject(en(i));const n=_t(i),a=uo(n,e),c=await new Vx(n,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}async function kb(i){const e=Sh(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const jx=600*1e3;class Mb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lb(e)){const a=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ht(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(jI(e))}saveEventToCache(e){this.cachedEventUids.add(jI(e)),this.lastProcessedEventTime=Date.now()}}function jI(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Lb({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hx(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lb(i);default:return!1}}/**
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
 */async function Ub(i,e={}){return At(i,"GET","/v1/projects",e)}/**
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
 */const Gx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kx=/^https?/;async function Qx(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ub(i);for(const t of e)try{if(Yx(t))return}catch{}hn(i,"unauthorized-domain")}function Yx(i){const e=eh(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===n}if(!Kx.test(t))return!1;if(Gx.test(i))return n===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
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
 */const $x=new Th(3e4,6e4);function HI(){const i=Lt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Wx(i){return new Promise((e,t)=>{var a,l,c;function n(){HI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{HI(),t(Ht(i,"network-request-failed"))},timeout:$x.get()})}if((l=(a=Lt().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=Lt().gapi)!=null&&c.load)n();else{const f=db("iframefcb");return Lt()[f]=()=>{gapi.load?n():t(Ht(i,"network-request-failed"))},Ay(`${H2()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Af=null,e})}let Af=null;function Xx(i){return Af=Af||Wx(i),Af}/**
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
 */const Jx=new Th(5e3,15e3),Zx="__/auth/iframe",eV="emulator/auth/iframe",tV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rV(i){const e=i.config;ne(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Iy(e,eV):`https://${i.config.authDomain}/${Zx}`,n={apiKey:e.apiKey,appName:i.name,v:Hs},a=nV.get(i.config.apiHost);a&&(n.eid=a);const l=i._getFrameworks();return l.length&&(n.fw=l.join(",")),`${t}?${Wl(n).slice(1)}`}async function iV(i){const e=await Xx(i),t=Lt().gapi;return ne(t,i,"internal-error"),e.open({where:document.body,url:rV(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tV,dontclear:!0},n=>new Promise(async(a,l)=>{await n.restyle({setHideOnLeave:!1});const c=Ht(i,"network-request-failed"),f=Lt().setTimeout(()=>{l(c)},Jx.get());function m(){Lt().clearTimeout(f),a(n)}n.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const sV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aV=500,oV=600,lV="_blank",uV="http://localhost";class GI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cV(i,e,t,n=aV,a=oV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let f="";const m={...sV,width:n.toString(),height:a.toString(),top:l,left:c},g=gt().toLowerCase();t&&(f=ab(g)?lV:t),ib(g)&&(e=e||uV,m.scrollbars="yes");const y=Object.entries(m).reduce((A,[x,G])=>`${A}${x}=${G},`,"");if(O2(g)&&f!=="_self")return hV(e||"",f),new GI(null);const T=window.open(e||"",f,y);ne(T,i,"popup-blocked");try{T.focus()}catch{}return new GI(T)}function hV(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const dV="__/auth/handler",fV="emulator/auth/handler",mV=encodeURIComponent("fac");async function R_(i,e,t,n,a,l){ne(i.config.authDomain,i,"auth-domain-config-required"),ne(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Hs,eventId:a};if(e instanceof Ui){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",FD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries(l||{}))c[y]=T}if(e instanceof Zl){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),g=m?`#${mV}=${encodeURIComponent(m)}`:"";return`${pV(i)}?${Wl(f).slice(1)}${g}`}function pV({config:i}){return i.emulator?Iy(i,fV):`https://${i.authDomain}/${dV}`}/**
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
 */const u_="webStorageSupport";class gV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wa,this._completeRedirectFn=Em,this._overrideRedirectResult=My}async _openPopup(e,t,n,a){var c;Ir((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await R_(e,t,n,eh(),a);return cV(e,l,Sh())}async _openRedirect(e,t,n,a){await this._originValidation(e);const l=await R_(e,t,n,eh(),a);return ix(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ir(l,"If manager is not set, promise should be"),l)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await iV(e),n=new Mb(e);return t.register("authEvent",a=>(ne(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(u_,{type:u_},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[u_];l!==void 0&&t(!!l),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cb()||sb()||Ih()}}const _V=gV;class yV{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Qr("unexpected MultiFactorSessionType")}}}class Ly extends yV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ly(e)}_finalizeEnroll(e,t,n){return XP(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fx(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Bb{constructor(){}static assertion(e){return Ly._fromCredential(e)}}Bb.FACTOR_ID="phone";var KI="@firebase/auth",QI="1.11.0";/**
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
 */function EV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TV(i){ks(new Zr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=n.options;ne(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const m={apiKey:c,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hb(i)},g=new z2(n,a,l,m);return eP(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),ks(new Zr("auth-internal",e=>{const t=_t(e.getProvider("auth").getImmediate());return(n=>new vV(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(KI,QI,EV(i)),Er(KI,QI,"esm2020")}/**
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
 */const wV=300;DD("authIdTokenMaxAge");function IV(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}F2({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=a=>{const l=Ht("internal-error");l.customData=a,t(l)},n.type="text/javascript",n.charset="UTF-8",IV().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TV("Browser");/**
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
 */function Ja(){return window}/**
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
 */const AV=2e3;async function bV(i,e,t){const{BuildInfo:n}=Ja();Ir(e.sessionId,"AuthEvent did not contain a session ID");const a=await NV(e.sessionId),l={};return Ih()?l.ibi=n.packageName:wh()?l.apn=n.packageName:hn(i,"operation-not-supported-in-this-environment"),n.displayName&&(l.appDisplayName=n.displayName),l.sessionId=a,R_(i,t,e.type,void 0,e.eventId??void 0,l)}async function SV(i){const{BuildInfo:e}=Ja(),t={};Ih()?t.iosBundleId=e.packageName:wh()?t.androidPackageName=e.packageName:hn(i,"operation-not-supported-in-this-environment"),await Ub(i,t)}function RV(i){const{cordova:e}=Ja();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let a=null;n?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,V2()?"_blank":"_system","location=yes"),t(a)})})}async function CV(i,e,t){const{cordova:n}=Ja();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function m(){var A;l();const T=(A=n.plugins.browsertab)==null?void 0:A.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(Ht(i,"redirect-cancelled-by-user"))},AV))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(m),document.addEventListener("resume",g,!1),wh()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),f&&window.clearTimeout(f)}})}finally{a()}}function DV(i){var t,n,a,l,c,f,m,g,y,T;const e=Ja();ne(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ne(typeof((n=e==null?void 0:e.BuildInfo)==null?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ne(typeof((c=(l=(a=e==null?void 0:e.cordova)==null?void 0:a.plugins)==null?void 0:l.browsertab)==null?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((g=(m=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:m.browsertab)==null?void 0:g.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((T=(y=e==null?void 0:e.cordova)==null?void 0:y.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NV(i){const e=PV(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function PV(i){if(Ir(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}/**
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
 */const xV=20;class VV extends Mb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function OV(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:LV(),postBody:null,tenantId:i.tenantId,error:Ht(i,"no-auth-event")}}function kV(i,e){return C_()._set(D_(i),e)}async function YI(i){const e=await C_()._get(D_(i));return e&&await C_()._remove(D_(i)),e}function MV(i,e){var n,a;const t=BV(e);if(t.includes("/__/auth/callback")){const l=bf(t),c=l.firebaseError?UV(decodeURIComponent(l.firebaseError)):null,f=(a=(n=c==null?void 0:c.code)==null?void 0:n.split("auth/"))==null?void 0:a[1],m=f?Ht(f):null;return m?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function LV(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<xV;t++){const n=Math.floor(Math.random()*e.length);i.push(e.charAt(n))}return i.join("")}function C_(){return Qn(Py)}function D_(i){return Qa("authEvent",i.config.apiKey,i.name)}function UV(i){try{return JSON.parse(i)}catch{return null}}function BV(i){const e=bf(i),t=e.link?decodeURIComponent(e.link):void 0,n=bf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return bf(a).link||a||n||t||i}function bf(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return vl(t.join("?"))}/**
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
 */const zV=500;class FV{constructor(){this._redirectPersistence=Wa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Em,this._overrideRedirectResult=My}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new VV(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){hn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,a){DV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),kx(),await this._originValidation(e);const c=OV(e,n,a);await kV(e,c);const f=await bV(e,c,t),m=await RV(f);return CV(e,l,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:a,BuildInfo:l}=Ja(),c=setTimeout(async()=>{await YI(e),t.onEvent($I())},zV),f=async y=>{clearTimeout(c);const T=await YI(e);let A=null;T&&(y!=null&&y.url)&&(A=MV(T,y.url)),t.onEvent(A||$I())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,f);const m=a,g=`${l.packageName.toLowerCase()}://`;Ja().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&f({url:y}),typeof m=="function")try{m(y)}catch(T){console.error(T)}}}}const qV=FV;function $I(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ht("no-auth-event")}}/**
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
 */function jV(i,e){_t(i)._logFramework(e)}var HV="@firebase/auth-compat",GV="0.6.0";/**
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
 */const KV=1e3;function Fc(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function QV(){return Fc()==="http:"||Fc()==="https:"}function zb(i=gt()){return!!((Fc()==="file:"||Fc()==="ionic:"||Fc()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function YV(){return my()||um()}function $V(){return x0()&&(document==null?void 0:document.documentMode)===11}function WV(i=gt()){return/Edge\/\d+/.test(i)}function XV(i=gt()){return $V()||WV(i)}function Fb(){try{const i=self.localStorage,e=Sh();if(i)return i.setItem(e,"1"),i.removeItem(e),XV()?Xc():!0}catch{return Uy()&&Xc()}return!1}function Uy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function c_(){return(QV()||P0()||zb())&&!YV()&&Fb()&&!Uy()}function qb(){return zb()&&typeof document<"u"}async function JV(){return qb()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},KV);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function ZV(){return typeof window<"u"?window:null}/**
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
 */const Kn={LOCAL:"local",NONE:"none",SESSION:"session"},Ec=ne,jb="persistence";function eO(i,e){if(Ec(Object.values(Kn).includes(e),i,"invalid-persistence-type"),my()){Ec(e!==Kn.SESSION,i,"unsupported-persistence-type");return}if(um()){Ec(e===Kn.NONE,i,"unsupported-persistence-type");return}if(Uy()){Ec(e===Kn.NONE||e===Kn.LOCAL&&Xc(),i,"unsupported-persistence-type");return}Ec(e===Kn.NONE||Fb(),i,"unsupported-persistence-type")}async function N_(i){await i._initializationPromise;const e=Hb(),t=Qa(jb,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function tO(i,e){const t=Hb();if(!t)return[];const n=Qa(jb,i,e);switch(t.getItem(n)){case Kn.NONE:return[Cl];case Kn.LOCAL:return[rh,Wa];case Kn.SESSION:return[Wa];default:return[]}}function Hb(){var i;try{return((i=ZV())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const nO=ne;class As{constructor(){this.browserResolver=Qn(_V),this.cordovaResolver=Qn(qV),this.underlyingResolver=null,this._redirectPersistence=Wa,this._completeRedirectFn=Em,this._overrideRedirectResult=My}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,a)}async _openRedirect(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Gb(i){return i.unwrap()}function rO(i){return i.wrapped()}/**
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
 */function iO(i){return Kb(i)}function sO(i,e){var n;const t=(n=e.customData)==null?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new aO(i,WP(i,e))}else if(t){const a=Kb(e),l=e;a&&(l.credential=a,l.tenantId=t.tenantId||void 0,l.email=t.email||void 0,l.phoneNumber=t.phoneNumber||void 0)}}function Kb(i){const{_tokenResponse:e}=i instanceof Sn?i.customData:i;if(!e)return null;if(!(i instanceof Sn)&&"temporaryProof"in e&&"phoneNumber"in e)return Xa.credentialFromResult(i);const t=e.providerId;if(!t||t===yc.PASSWORD)return null;let n;switch(t){case yc.GOOGLE:n=Hr;break;case yc.FACEBOOK:n=jr;break;case yc.GITHUB:n=Gr;break;case yc.TWITTER:n=Kr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:m}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Dl._create(t,f):ti._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new wl(t).credential({idToken:a,accessToken:l,rawNonce:m})}return i instanceof Sn?n.credentialFromError(i):n.credentialFromResult(i)}function xn(i,e){return e.catch(t=>{throw t instanceof Sn&&sO(i,t),t}).then(t=>{const n=t.operationType,a=t.user;return{operationType:n,credential:iO(t),additionalUserInfo:$P(t),user:Tm.getOrCreate(a)}})}async function P_(i,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>xn(i,t.confirm(n))}}class aO{constructor(e,t){this.resolver=t,this.auth=rO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xn(Gb(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Tm=class Dc{constructor(e){this._delegate=e,this.multiFactor=ZP(e)}static getOrCreate(e){return Dc.USER_MAP.has(e)||Dc.USER_MAP.set(e,new Dc(e)),Dc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xn(this.auth,Tb(this._delegate,e))}async linkWithPhoneNumber(e,t){return P_(this.auth,wx(this._delegate,e,t))}async linkWithPopup(e){return xn(this.auth,Px(this._delegate,e,As))}async linkWithRedirect(e){return await N_(_t(this.auth)),zx(this._delegate,e,As)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xn(this.auth,wb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return P_(this.auth,Ix(this._delegate,e,t))}reauthenticateWithPopup(e){return xn(this.auth,Nx(this._delegate,e,As))}async reauthenticateWithRedirect(e){return await N_(_t(this.auth)),Ux(this._delegate,e,As)}sendEmailVerification(e){return UP(this._delegate,e)}async unlink(e){return await AP(this._delegate,e),this}updateEmail(e){return qP(this._delegate,e)}updatePassword(e){return jP(this._delegate,e)}updatePhoneNumber(e){return Ax(this._delegate,e)}updateProfile(e){return FP(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return BP(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Tm.USER_MAP=new WeakMap;/**
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
 */const Tc=ne;class x_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Tc(n,"invalid-api-key",{appName:e.name}),Tc(n,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?As:void 0;this._delegate=t.initialize({options:{persistence:oO(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(f2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){tP(this._delegate,e,t)}applyActionCode(e){return DP(this._delegate,e)}checkActionCode(e){return Ib(this._delegate,e)}confirmPasswordReset(e,t){return CP(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xn(this._delegate,PP(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return LP(this._delegate,e)}isSignInWithEmailLink(e){return OP(this._delegate,e)}async getRedirectResult(){Tc(c_(),this._delegate,"operation-not-supported-in-this-environment");const e=await qx(this._delegate,As);return e?xn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){jV(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:a,error:l,complete:c}=WI(e,t,n);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,n){const{next:a,error:l,complete:c}=WI(e,t,n);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return VP(this._delegate,e,t)}sendPasswordResetEmail(e,t){return RP(this._delegate,e,t||void 0)}async setPersistence(e){eO(this._delegate,e);let t;switch(e){case Kn.SESSION:t=Wa;break;case Kn.LOCAL:t=await Qn(rh)._isAvailable()?rh:Py;break;case Kn.NONE:t=Cl;break;default:return hn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xn(this._delegate,IP(this._delegate))}signInWithCredential(e){return xn(this._delegate,pm(this._delegate,e))}signInWithCustomToken(e){return xn(this._delegate,SP(this._delegate,e))}signInWithEmailAndPassword(e,t){return xn(this._delegate,xP(this._delegate,e,t))}signInWithEmailLink(e,t){return xn(this._delegate,kP(this._delegate,e,t))}signInWithPhoneNumber(e,t){return P_(this._delegate,Tx(this._delegate,e,t))}async signInWithPopup(e){return Tc(c_(),this._delegate,"operation-not-supported-in-this-environment"),xn(this._delegate,Dx(this._delegate,e,As))}async signInWithRedirect(e){return Tc(c_(),this._delegate,"operation-not-supported-in-this-environment"),await N_(this._delegate),Mx(this._delegate,e,As)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}x_.Persistence=Kn;function WI(i,e,t){let n=i;typeof i!="function"&&({next:n,error:e,complete:t}=i);const a=n;return{next:c=>a(c&&Tm.getOrCreate(c)),error:e,complete:t}}function oO(i,e){const t=tO(i,e);if(typeof self<"u"&&!t.includes(rh)&&t.push(rh),typeof window<"u")for(const n of[Py,Wa])t.includes(n)||t.push(n);return t.includes(Cl)||t.push(Cl),t}/**
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
 */class By{static credential(e,t){return Xa.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Xa(Gb(ei.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}By.PHONE_SIGN_IN_METHOD=Xa.PHONE_SIGN_IN_METHOD;By.PROVIDER_ID=Xa.PROVIDER_ID;/**
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
 */const lO=ne;class uO{constructor(e,t,n=ei.app()){var a;lO((a=n.options)==null?void 0:a.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new vx(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const cO="auth-compat";function hO(i){i.INTERNAL.registerComponent(new Zr(cO,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new x_(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ol.EMAIL_SIGNIN,PASSWORD_RESET:ol.PASSWORD_RESET,RECOVER_EMAIL:ol.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ol.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ol.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ol.VERIFY_EMAIL}},EmailAuthProvider:Gs,FacebookAuthProvider:jr,GithubAuthProvider:Gr,GoogleAuthProvider:Hr,OAuthProvider:wl,SAMLAuthProvider:qf,PhoneAuthProvider:By,PhoneMultiFactorGenerator:Bb,RecaptchaVerifier:uO,TwitterAuthProvider:Kr,Auth:x_,AuthCredential:Jl,Error:Sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(HV,GV)}hO(ei);var XI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ds,Qb;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,b){function C(){}C.prototype=b.prototype,P.D=b.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(V,O,M){for(var R=Array(arguments.length-2),tn=2;tn<arguments.length;tn++)R[tn-2]=arguments[tn];return b.prototype[O].apply(V,R)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,b,C){C||(C=0);var V=Array(16);if(typeof b=="string")for(var O=0;16>O;++O)V[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;16>O;++O)V[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=P.g[0],C=P.g[1],O=P.g[2];var M=P.g[3],R=b+(M^C&(O^M))+V[0]+3614090360&4294967295;b=C+(R<<7&4294967295|R>>>25),R=M+(O^b&(C^O))+V[1]+3905402710&4294967295,M=b+(R<<12&4294967295|R>>>20),R=O+(C^M&(b^C))+V[2]+606105819&4294967295,O=M+(R<<17&4294967295|R>>>15),R=C+(b^O&(M^b))+V[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(M^C&(O^M))+V[4]+4118548399&4294967295,b=C+(R<<7&4294967295|R>>>25),R=M+(O^b&(C^O))+V[5]+1200080426&4294967295,M=b+(R<<12&4294967295|R>>>20),R=O+(C^M&(b^C))+V[6]+2821735955&4294967295,O=M+(R<<17&4294967295|R>>>15),R=C+(b^O&(M^b))+V[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(M^C&(O^M))+V[8]+1770035416&4294967295,b=C+(R<<7&4294967295|R>>>25),R=M+(O^b&(C^O))+V[9]+2336552879&4294967295,M=b+(R<<12&4294967295|R>>>20),R=O+(C^M&(b^C))+V[10]+4294925233&4294967295,O=M+(R<<17&4294967295|R>>>15),R=C+(b^O&(M^b))+V[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(M^C&(O^M))+V[12]+1804603682&4294967295,b=C+(R<<7&4294967295|R>>>25),R=M+(O^b&(C^O))+V[13]+4254626195&4294967295,M=b+(R<<12&4294967295|R>>>20),R=O+(C^M&(b^C))+V[14]+2792965006&4294967295,O=M+(R<<17&4294967295|R>>>15),R=C+(b^O&(M^b))+V[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(O^M&(C^O))+V[1]+4129170786&4294967295,b=C+(R<<5&4294967295|R>>>27),R=M+(C^O&(b^C))+V[6]+3225465664&4294967295,M=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(M^b))+V[11]+643717713&4294967295,O=M+(R<<14&4294967295|R>>>18),R=C+(M^b&(O^M))+V[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^M&(C^O))+V[5]+3593408605&4294967295,b=C+(R<<5&4294967295|R>>>27),R=M+(C^O&(b^C))+V[10]+38016083&4294967295,M=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(M^b))+V[15]+3634488961&4294967295,O=M+(R<<14&4294967295|R>>>18),R=C+(M^b&(O^M))+V[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^M&(C^O))+V[9]+568446438&4294967295,b=C+(R<<5&4294967295|R>>>27),R=M+(C^O&(b^C))+V[14]+3275163606&4294967295,M=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(M^b))+V[3]+4107603335&4294967295,O=M+(R<<14&4294967295|R>>>18),R=C+(M^b&(O^M))+V[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^M&(C^O))+V[13]+2850285829&4294967295,b=C+(R<<5&4294967295|R>>>27),R=M+(C^O&(b^C))+V[2]+4243563512&4294967295,M=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(M^b))+V[7]+1735328473&4294967295,O=M+(R<<14&4294967295|R>>>18),R=C+(M^b&(O^M))+V[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(C^O^M)+V[5]+4294588738&4294967295,b=C+(R<<4&4294967295|R>>>28),R=M+(b^C^O)+V[8]+2272392833&4294967295,M=b+(R<<11&4294967295|R>>>21),R=O+(M^b^C)+V[11]+1839030562&4294967295,O=M+(R<<16&4294967295|R>>>16),R=C+(O^M^b)+V[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^M)+V[1]+2763975236&4294967295,b=C+(R<<4&4294967295|R>>>28),R=M+(b^C^O)+V[4]+1272893353&4294967295,M=b+(R<<11&4294967295|R>>>21),R=O+(M^b^C)+V[7]+4139469664&4294967295,O=M+(R<<16&4294967295|R>>>16),R=C+(O^M^b)+V[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^M)+V[13]+681279174&4294967295,b=C+(R<<4&4294967295|R>>>28),R=M+(b^C^O)+V[0]+3936430074&4294967295,M=b+(R<<11&4294967295|R>>>21),R=O+(M^b^C)+V[3]+3572445317&4294967295,O=M+(R<<16&4294967295|R>>>16),R=C+(O^M^b)+V[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^M)+V[9]+3654602809&4294967295,b=C+(R<<4&4294967295|R>>>28),R=M+(b^C^O)+V[12]+3873151461&4294967295,M=b+(R<<11&4294967295|R>>>21),R=O+(M^b^C)+V[15]+530742520&4294967295,O=M+(R<<16&4294967295|R>>>16),R=C+(O^M^b)+V[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(O^(C|~M))+V[0]+4096336452&4294967295,b=C+(R<<6&4294967295|R>>>26),R=M+(C^(b|~O))+V[7]+1126891415&4294967295,M=b+(R<<10&4294967295|R>>>22),R=O+(b^(M|~C))+V[14]+2878612391&4294967295,O=M+(R<<15&4294967295|R>>>17),R=C+(M^(O|~b))+V[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~M))+V[12]+1700485571&4294967295,b=C+(R<<6&4294967295|R>>>26),R=M+(C^(b|~O))+V[3]+2399980690&4294967295,M=b+(R<<10&4294967295|R>>>22),R=O+(b^(M|~C))+V[10]+4293915773&4294967295,O=M+(R<<15&4294967295|R>>>17),R=C+(M^(O|~b))+V[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~M))+V[8]+1873313359&4294967295,b=C+(R<<6&4294967295|R>>>26),R=M+(C^(b|~O))+V[15]+4264355552&4294967295,M=b+(R<<10&4294967295|R>>>22),R=O+(b^(M|~C))+V[6]+2734768916&4294967295,O=M+(R<<15&4294967295|R>>>17),R=C+(M^(O|~b))+V[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~M))+V[4]+4149444226&4294967295,b=C+(R<<6&4294967295|R>>>26),R=M+(C^(b|~O))+V[11]+3174756917&4294967295,M=b+(R<<10&4294967295|R>>>22),R=O+(b^(M|~C))+V[2]+718787259&4294967295,O=M+(R<<15&4294967295|R>>>17),R=C+(M^(O|~b))+V[9]+3951481745&4294967295,P.g[0]=P.g[0]+b&4294967295,P.g[1]=P.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+M&4294967295}n.prototype.u=function(P,b){b===void 0&&(b=P.length);for(var C=b-this.blockSize,V=this.B,O=this.h,M=0;M<b;){if(O==0)for(;M<=C;)a(this,P,M),M+=this.blockSize;if(typeof P=="string"){for(;M<b;)if(V[O++]=P.charCodeAt(M++),O==this.blockSize){a(this,V),O=0;break}}else for(;M<b;)if(V[O++]=P[M++],O==this.blockSize){a(this,V),O=0;break}}this.h=O,this.o+=b},n.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var b=1;b<P.length-8;++b)P[b]=0;var C=8*this.o;for(b=P.length-8;b<P.length;++b)P[b]=C&255,C/=256;for(this.u(P),P=Array(16),b=C=0;4>b;++b)for(var V=0;32>V;V+=8)P[C++]=this.g[b]>>>V&255;return P};function l(P,b){var C=f;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=b(P)}function c(P,b){this.h=b;for(var C=[],V=!0,O=P.length-1;0<=O;O--){var M=P[O]|0;V&&M==b||(C[O]=M,V=!1)}this.g=C}var f={};function m(P){return-128<=P&&128>P?l(P,function(b){return new c([b|0],0>b?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return K(g(-P));for(var b=[],C=1,V=0;P>=C;V++)b[V]=P/C|0,C*=4294967296;return new c(b,0)}function y(P,b){if(P.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P.charAt(0)=="-")return K(y(P.substring(1),b));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(b,8)),V=T,O=0;O<P.length;O+=8){var M=Math.min(8,P.length-O),R=parseInt(P.substring(O,O+M),b);8>M?(M=g(Math.pow(b,M)),V=V.j(M).add(g(R))):(V=V.j(C),V=V.add(g(R)))}return V}var T=m(0),A=m(1),x=m(16777216);i=c.prototype,i.m=function(){if(X(this))return-K(this).m();for(var P=0,b=1,C=0;C<this.g.length;C++){var V=this.i(C);P+=(0<=V?V:4294967296+V)*b,b*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(G(this))return"0";if(X(this))return"-"+K(this).toString(P);for(var b=g(Math.pow(P,6)),C=this,V="";;){var O=Ie(C,b).g;C=de(C,O.j(b));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=O,G(C))return M+V;for(;6>M.length;)M="0"+M;V=M+V}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function G(P){if(P.h!=0)return!1;for(var b=0;b<P.g.length;b++)if(P.g[b]!=0)return!1;return!0}function X(P){return P.h==-1}i.l=function(P){return P=de(this,P),X(P)?-1:G(P)?0:1};function K(P){for(var b=P.g.length,C=[],V=0;V<b;V++)C[V]=~P.g[V];return new c(C,~P.h).add(A)}i.abs=function(){return X(this)?K(this):this},i.add=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],V=0,O=0;O<=b;O++){var M=V+(this.i(O)&65535)+(P.i(O)&65535),R=(M>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);V=R>>>16,M&=65535,R&=65535,C[O]=R<<16|M}return new c(C,C[C.length-1]&-2147483648?-1:0)};function de(P,b){return P.add(K(b))}i.j=function(P){if(G(this)||G(P))return T;if(X(this))return X(P)?K(this).j(K(P)):K(K(this).j(P));if(X(P))return K(this.j(K(P)));if(0>this.l(x)&&0>P.l(x))return g(this.m()*P.m());for(var b=this.g.length+P.g.length,C=[],V=0;V<2*b;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(var O=0;O<P.g.length;O++){var M=this.i(V)>>>16,R=this.i(V)&65535,tn=P.i(O)>>>16,yt=P.i(O)&65535;C[2*V+2*O]+=R*yt,ce(C,2*V+2*O),C[2*V+2*O+1]+=M*yt,ce(C,2*V+2*O+1),C[2*V+2*O+1]+=R*tn,ce(C,2*V+2*O+1),C[2*V+2*O+2]+=M*tn,ce(C,2*V+2*O+2)}for(V=0;V<b;V++)C[V]=C[2*V+1]<<16|C[2*V];for(V=b;V<2*b;V++)C[V]=0;return new c(C,0)};function ce(P,b){for(;(P[b]&65535)!=P[b];)P[b+1]+=P[b]>>>16,P[b]&=65535,b++}function ae(P,b){this.g=P,this.h=b}function Ie(P,b){if(G(b))throw Error("division by zero");if(G(P))return new ae(T,T);if(X(P))return b=Ie(K(P),b),new ae(K(b.g),K(b.h));if(X(b))return b=Ie(P,K(b)),new ae(K(b.g),b.h);if(30<P.g.length){if(X(P)||X(b))throw Error("slowDivide_ only works with positive integers.");for(var C=A,V=b;0>=V.l(P);)C=pe(C),V=pe(V);var O=be(C,1),M=be(V,1);for(V=be(V,2),C=be(C,2);!G(V);){var R=M.add(V);0>=R.l(P)&&(O=O.add(C),M=R),V=be(V,1),C=be(C,1)}return b=de(P,O.j(b)),new ae(O,b)}for(O=T;0<=P.l(b);){for(C=Math.max(1,Math.floor(P.m()/b.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),M=g(C),R=M.j(b);X(R)||0<R.l(P);)C-=V,M=g(C),R=M.j(b);G(M)&&(M=A),O=O.add(M),P=de(P,R)}return new ae(O,P)}i.A=function(P){return Ie(this,P).h},i.and=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],V=0;V<b;V++)C[V]=this.i(V)&P.i(V);return new c(C,this.h&P.h)},i.or=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],V=0;V<b;V++)C[V]=this.i(V)|P.i(V);return new c(C,this.h|P.h)},i.xor=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],V=0;V<b;V++)C[V]=this.i(V)^P.i(V);return new c(C,this.h^P.h)};function pe(P){for(var b=P.g.length+1,C=[],V=0;V<b;V++)C[V]=P.i(V)<<1|P.i(V-1)>>>31;return new c(C,P.h)}function be(P,b){var C=b>>5;b%=32;for(var V=P.g.length-C,O=[],M=0;M<V;M++)O[M]=0<b?P.i(M+C)>>>b|P.i(M+C+1)<<32-b:P.i(M+C);return new c(O,P.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Qb=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Ds=c}).apply(typeof XI<"u"?XI:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yb,Nc,$b,Sf,V_,Wb,Xb,Jb;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var n=t(this);function a(h,_){if(_)e:{var v=n;h=h.split(".");for(var I=0;I<h.length-1;I++){var L=h[I];if(!(L in v))break e;v=v[L]}h=h[h.length-1],I=v[h],_=_(I),_!=I&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,I=!1,L={next:function(){if(!I&&v<h.length){var H=v++;return{value:_(H,h[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,I),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function A(h,_,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,A.apply(null,arguments)}function x(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function G(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(I,L,H){for(var ie=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ie[Ue-2]=arguments[Ue];return _.prototype[L].apply(I,ie)}}function X(h){const _=h.length;if(0<_){const v=Array(_);for(let I=0;I<_;I++)v[I]=h[I];return v}return[]}function K(h,_){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(m(I)){const L=h.length||0,H=I.length||0;h.length=L+H;for(let ie=0;ie<H;ie++)h[L+ie]=I[ie]}else h.push(I)}}class de{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ce(h){return/^[\s\xa0]*$/.test(h)}function ae(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function Ie(h){return Ie[" "](h),h}Ie[" "]=function(){};var pe=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function be(h,_,v){for(const I in h)_.call(v,h[I],I,h)}function P(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function b(h){const _={};for(const v in h)_[v]=h[v];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,_){let v,I;for(let L=1;L<arguments.length;L++){I=arguments[L];for(v in I)h[v]=I[v];for(let H=0;H<C.length;H++)v=C[H],Object.prototype.hasOwnProperty.call(I,v)&&(h[v]=I[v])}}function O(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function M(h){f.setTimeout(()=>{throw h},0)}function R(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class tn{constructor(){this.h=this.g=null}add(_,v){const I=yt.get();I.set(_,v),this.h?this.h.next=I:this.g=I,this.h=I}}var yt=new de(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ye=!1,He=new tn,D=()=>{const h=f.Promise.resolve(void 0);oe=()=>{h.then(ee)}};var ee=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){M(v)}var _=yt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ye=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h})();function Pe(h,_){if(re.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(pe){e:{try{Ie(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Pe.aa.h.call(this)}}G(Pe,re);var Se={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),it=0;function Ar(h,_,v,I,L){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!I,this.ha=L,this.key=++it,this.da=this.fa=!1}function ji(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ii(h){this.src=h,this.g={},this.h=0}ii.prototype.add=function(h,_,v,I,L){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var ie=Js(h,_,I,L);return-1<ie?(_=h[ie],v||(_.fa=!1)):(_=new Ar(_,this.src,H,!!I,L),_.fa=v,h.push(_)),_};function Xs(h,_){var v=_.type;if(v in h.g){var I=h.g[v],L=Array.prototype.indexOf.call(I,_,void 0),H;(H=0<=L)&&Array.prototype.splice.call(I,L,1),H&&(ji(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Js(h,_,v,I){for(var L=0;L<h.length;++L){var H=h[L];if(!H.da&&H.listener==_&&H.capture==!!v&&H.ha==I)return L}return-1}var Zs="closure_lm_"+(1e6*Math.random()|0),lu={};function jh(h,_,v,I,L){if(Array.isArray(_)){for(var H=0;H<_.length;H++)jh(h,_[H],v,I,L);return null}return v=Hh(v),h&&h[Kt]?h.K(_,v,g(I)?!!I.capture:!1,L):Wn(h,_,v,!1,I,L)}function Wn(h,_,v,I,L,H){if(!_)throw Error("Invalid event type");var ie=g(L)?!!L.capture:!!L,Ue=go(h);if(Ue||(h[Zs]=Ue=new ii(h)),v=Ue.add(_,v,I,ie,H),v.proxy)return v;if(I=Ym(),v.proxy=I,I.src=h,I.listener=v,h.addEventListener)ve||(L=ie),L===void 0&&(L=!1),h.addEventListener(_.toString(),I,L);else if(h.attachEvent)h.attachEvent(ea(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ym(){function h(v){return _.call(h.src,h.listener,v)}const _=$m;return h}function uu(h,_,v,I,L){if(Array.isArray(_))for(var H=0;H<_.length;H++)uu(h,_[H],v,I,L);else I=g(I)?!!I.capture:!!I,v=Hh(v),h&&h[Kt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],v=Js(H,v,I,L),-1<v&&(ji(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=go(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Js(_,v,I,L)),(v=-1<h?_[h]:null)&&po(v))}function po(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Kt])Xs(_.i,h);else{var v=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(v,I,h.capture):_.detachEvent?_.detachEvent(ea(v),I):_.addListener&&_.removeListener&&_.removeListener(I),(v=go(_))?(Xs(v,h),v.h==0&&(v.src=null,_[Zs]=null)):ji(h)}}}function ea(h){return h in lu?lu[h]:lu[h]="on"+h}function $m(h,_){if(h.da)h=!0;else{_=new Pe(_,this);var v=h.listener,I=h.ha||h.src;h.fa&&po(h),h=v.call(I,_)}return h}function go(h){return h=h[Zs],h instanceof ii?h:null}var cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hh(h){return typeof h=="function"?h:(h[cu]||(h[cu]=function(_){return h.handleEvent(_)}),h[cu])}function vt(){ue.call(this),this.i=new ii(this),this.M=this,this.F=null}G(vt,ue),vt.prototype[Kt]=!0,vt.prototype.removeEventListener=function(h,_,v,I){uu(this,h,_,v,I)};function Ye(h,_){var v,I=h.F;if(I)for(v=[];I;I=I.F)v.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new re(_,h);else if(_ instanceof re)_.target=_.target||h;else{var L=_;_=new re(I,h),V(_,L)}if(L=!0,v)for(var H=v.length-1;0<=H;H--){var ie=_.g=v[H];L=Mn(ie,I,!0,_)&&L}if(ie=_.g=h,L=Mn(ie,I,!0,_)&&L,L=Mn(ie,I,!1,_)&&L,v)for(H=0;H<v.length;H++)ie=_.g=v[H],L=Mn(ie,I,!1,_)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],I=0;I<v.length;I++)ji(v[I]);delete h.g[_],h.h--}}this.F=null},vt.prototype.K=function(h,_,v,I){return this.i.add(String(h),_,!1,v,I)},vt.prototype.L=function(h,_,v,I){return this.i.add(String(h),_,!0,v,I)};function Mn(h,_,v,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,H=0;H<_.length;++H){var ie=_[H];if(ie&&!ie.da&&ie.capture==v){var Ue=ie.listener,zt=ie.ha||ie.src;ie.fa&&Xs(h.i,ie),L=Ue.call(zt,I)!==!1&&L}}return L&&!I.defaultPrevented}function dn(h,_,v){if(typeof h=="function")v&&(h=A(h,v));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Gh(h){h.g=dn(()=>{h.g=null,h.i&&(h.i=!1,Gh(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Wm extends ue{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Gh(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ta(h){ue.call(this),this.h=h,this.g={}}G(ta,ue);var na=[];function ra(h){be(h.g,function(_,v){this.g.hasOwnProperty(v)&&po(_)},h),h.g={}}ta.prototype.N=function(){ta.aa.N.call(this),ra(this)},ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=f.JSON.stringify,_o=f.JSON.parse,ia=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function hu(){}hu.prototype.h=null;function du(h){return h.h||(h.h=h.i())}function fu(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ai(){re.call(this,"d")}G(ai,re);function mu(){re.call(this,"c")}G(mu,re);var br={},pu=null;function Hi(){return pu=pu||new vt}br.La="serverreachability";function yo(h){re.call(this,br.La,h)}G(yo,re);function Gi(h){const _=Hi();Ye(_,new yo(_))}br.STAT_EVENT="statevent";function Kh(h,_){re.call(this,br.STAT_EVENT,h),this.stat=_}G(Kh,re);function ut(h){const _=Hi();Ye(_,new Kh(_,h))}br.Ma="timingevent";function Bt(h,_){re.call(this,br.Ma,h),this.size=_}G(Bt,re);function xt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function gu(h,_,v,I,L,H){h.info(function(){if(h.g)if(H)for(var ie="",Ue=H.split("&"),zt=0;zt<Ue.length;zt++){var Be=Ue[zt].split("=");if(1<Be.length){var Yt=Be[0];Be=Be[1];var Ft=Yt.split("_");ie=2<=Ft.length&&Ft[1]=="type"?ie+(Yt+"="+Be+"&"):ie+(Yt+"=redacted&")}}else ie=null;else ie=H;return"XMLHTTP REQ ("+I+") [attempt "+L+"]: "+_+`
`+v+`
`+ie})}function Xm(h,_,v,I,L,H,ie){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+L+"]: "+_+`
`+v+`
`+H+" "+ie})}function Ki(h,_,v,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+sa(h,v)+(I?" "+I:"")})}function Qh(h,_){h.info(function(){return"TIMEOUT: "+_})}Xn.prototype.info=function(){};function sa(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var I=v[h];if(!(2>I.length)){var L=I[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ie=1;ie<L.length;ie++)L[ie]=""}}}}return dr(v)}catch{return _}}var Qi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function Rr(){}G(Rr,hu),Rr.prototype.g=function(){return new XMLHttpRequest},Rr.prototype.i=function(){return{}},Sr=new Rr;function En(h,_,v,I){this.j=h,this.i=_,this.l=v,this.R=I||1,this.U=new ta(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bt}function bt(){this.i=null,this.g="",this.h=!1}var _u={},vo={};function fr(h,_,v){h.L=1,h.v=ca(Ln(_)),h.m=v,h.P=!0,li(h,null)}function li(h,_){h.F=Date.now(),aa(h),h.A=Ln(h.v);var v=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),Iu(v.i,"t",I),h.C=0,v=h.j.J,h.h=new bt,h.g=ud(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Wm(A(h.Y,h,h.g),h.O)),_=h.U,v=h.g,I=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(na[0]=L.toString()),L=na);for(var H=0;H<L.length;H++){var ie=jh(v,L[H],I||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Gi(),gu(h.i,h.u,h.A,h.l,h.R,h.m)}En.prototype.ca=function(h){h=h.target;const _=this.M;_&&tr(h)==3?_.j():this.Y(h)},En.prototype.Y=function(h){try{if(h==this.g)e:{const Ft=tr(this.g);var _=this.g.Ba();const gi=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||td(this.g)))){this.J||Ft!=4||_==7||(_==8||0>=gi?Gi(3):Gi(2)),Yi(this);var v=this.g.Z();this.X=v;t:if(Yh(this)){var I=td(this.g);h="";var L=I.length,H=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),Cr(this);var ie="";break t}this.h.i=new f.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(H&&_==L-1)});I.length=0,this.h.g+=h,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,Xm(this.i,this.u,this.A,this.l,this.R,Ft,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,zt=this.g;if((Ue=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Ki(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,v);else{this.o=!1,this.s=3,ut(12),nn(this),Cr(this);break e}}if(this.P){v=!0;let rn;for(;!this.J&&this.C<ie.length;)if(rn=$h(this,ie),rn==vo){Ft==4&&(this.s=4,ut(14),v=!1),Ki(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==_u){this.s=4,ut(15),Ki(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else Ki(this.i,this.l,rn,null),oa(this,rn);if(Yh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||ie.length!=0||this.h.h||(this.s=1,ut(16),v=!1),this.o=this.o&&v,!v)Ki(this.i,this.l,ie,"[Invalid Chunked Response]"),nn(this),Cr(this);else if(0<ie.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),ya(Yt),Yt.M=!0,ut(11))}}else Ki(this.i,this.l,ie,null),oa(this,ie);Ft==4&&nn(this),this.o&&!this.J&&(Ft==4?ad(this.j,this):(this.o=!1,aa(this)))}else np(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),nn(this),Cr(this)}}}catch{}finally{}};function Yh(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function $h(h,_){var v=h.C,I=_.indexOf(`
`,v);return I==-1?vo:(v=Number(_.substring(v,I)),isNaN(v)?_u:(I+=1,I+v>_.length?vo:(_=_.slice(I,I+v),h.C=I+v,_)))}En.prototype.cancel=function(){this.J=!0,nn(this)};function aa(h){h.S=Date.now()+h.I,Wh(h,h.I)}function Wh(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=xt(A(h.ba,h),_)}function Yi(h){h.B&&(f.clearTimeout(h.B),h.B=null)}En.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qh(this.i,this.A),this.L!=2&&(Gi(),ut(17)),nn(this),this.s=2,Cr(this)):Wh(this,this.S-h)};function Cr(h){h.j.G==0||h.J||ad(h.j,h)}function nn(h){Yi(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,ra(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function oa(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||yu(v.h,h))){if(!h.K&&yu(v.h,h)&&v.G==3){try{var I=v.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var L=I;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Po(v),Do(v);else break e;Cu(v),ut(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=xt(A(v.Za,v),6e3));if(1>=To(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else pi(v,11)}else if((h.K||v.g==h)&&Po(v),!ce(_))for(L=v.Da.g.parse(_),_=0;_<L.length;_++){let Be=L[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Yt=Be[3];Yt!=null&&(v.la=Yt,v.j.info("VER="+v.la));const Ft=Be[4];Ft!=null&&(v.Aa=Ft,v.j.info("SVER="+v.Aa));const gi=Be[5];gi!=null&&typeof gi=="number"&&0<gi&&(I=1.5*gi,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const rn=h.g;if(rn){const kr=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var H=I.h;H.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(wo(H,H.h),H.h=null))}if(I.D){const Nu=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Nu&&(I.ya=Nu,Ze(I.I,I.D,Nu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var ie=h;if(I.qa=ld(I,I.J?I.ia:null,I.W),ie.K){Tn(I.h,ie);var Ue=ie,zt=I.L;zt&&(Ue.I=zt),Ue.B&&(Yi(Ue),aa(Ue)),I.g=ie}else id(I);0<v.i.length&&No(v)}else Be[0]!="stop"&&Be[0]!="close"||pi(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?pi(v,7):Su(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}Gi(4)}catch{}}var Xh=class{constructor(h,_){this.g=h,this.map=_}};function ui(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function To(h){return h.h?1:h.g?h.g.size:0}function yu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function wo(h,_){h.g?h.g.add(_):h.h=_}function Tn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ui.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function vu(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return X(h.i)}function Jm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,I=0;I<v;I++)_.push(h[I]);return _}_=[],v=0;for(I in h)_[v++]=h[I];return _}function Io(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const I in h)_[v++]=I;return _}}}function Eu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Io(h),I=Jm(h),L=I.length,H=0;H<L;H++)_.call(void 0,I[H],v&&v[H],h)}var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var I=h[v].indexOf("="),L=null;if(0<=I){var H=h[v].substring(0,I);L=h[v].substring(I+1)}else H=h[v];_(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,ua(this,h.j),this.o=h.o,this.g=h.g,$i(this,h.s),this.l=h.l;var _=h.i,v=new hi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ci(this,v),this.m=h.m}else h&&(_=String(h).match(la))?(this.h=!1,ua(this,_[1]||"",!0),this.o=Jn(_[2]||""),this.g=Jn(_[3]||"",!0),$i(this,_[4]),this.l=Jn(_[5]||"",!0),ci(this,_[6]||"",!0),this.m=Jn(_[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ha(_,Tu,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ha(_,Tu,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ha(v,v.charAt(0)=="/"?ep:wu,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ha(v,Ao)),h.join("")};function Ln(h){return new Vt(h)}function ua(h,_,v){h.j=v?Jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function $i(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ci(h,_,v){_ instanceof hi?(h.i=_,Zh(h.i,h.h)):(v||(_=ha(_,tp)),h.i=new hi(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function ca(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ha(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Jh),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Jh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Tu=/[#\/\?@]/g,wu=/[#\?:]/g,ep=/[#\?]/g,tp=/[#\?@]/g,Ao=/#/g;function hi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Zm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=hi.prototype,i.add=function(h,_){Zn(this),this.i=null,h=Dr(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function di(h,_){Zn(h),_=Dr(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function fi(h,_){return Zn(h),_=Dr(h,_),h.g.has(_)}i.forEach=function(h,_){Zn(this),this.g.forEach(function(v,I){v.forEach(function(L){h.call(_,L,I,this)},this)},this)},i.na=function(){Zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let I=0;I<_.length;I++){const L=h[I];for(let H=0;H<L.length;H++)v.push(_[I])}return v},i.V=function(h){Zn(this);let _=[];if(typeof h=="string")fi(this,h)&&(_=_.concat(this.g.get(Dr(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Zn(this),this.i=null,h=Dr(this,h),fi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Iu(h,_,v){di(h,_),0<v.length&&(h.i=null,h.g.set(Dr(h,_),X(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var I=_[v];const H=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var L=H;ie[I]!==""&&(L+="="+encodeURIComponent(String(ie[I]))),h.push(L)}}return this.i=h.join("&")};function Dr(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Zh(h,_){_&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(v,I){var L=I.toLowerCase();I!=L&&(di(this,I),Iu(this,L,v))},h)),h.j=_}function da(h,_){const v=new Xn;if(f.Image){const I=new Image;I.onload=x(er,v,"TestLoadImage: loaded",!0,_,I),I.onerror=x(er,v,"TestLoadImage: error",!1,_,I),I.onabort=x(er,v,"TestLoadImage: abort",!1,_,I),I.ontimeout=x(er,v,"TestLoadImage: timeout",!1,_,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function mr(h,_){const v=new Xn,I=new AbortController,L=setTimeout(()=>{I.abort(),er(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(H=>{clearTimeout(L),H.ok?er(v,"TestPingServer: ok",!0,_):er(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),er(v,"TestPingServer: error",!1,_)})}function er(h,_,v,I,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),I(v)}catch{}}function fa(){this.g=new ia}function Nr(h,_,v){const I=v||"";try{Eu(h,function(L,H){let ie=L;g(L)&&(ie=dr(L)),_.push(I+H+"="+encodeURIComponent(ie))})}catch(L){throw _.push(I+"type="+encodeURIComponent("_badmap")),L}}function Wi(h){this.l=h.Ub||null,this.j=h.eb||!1}G(Wi,hu),Wi.prototype.g=function(){return new mi(this.l,this.j)},Wi.prototype.i=(function(h){return function(){return h}})({});function mi(h,_){vt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(mi,vt),i=mi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,xr(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Au(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Au(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pr(this):xr(this),this.readyState==3&&Au(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Pr(this))},i.Qa=function(h){this.g&&(this.response=h,Pr(this))},i.ga=function(){this.g&&Pr(this)};function Pr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,xr(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function xr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function bu(h){let _="";return be(h,function(v,I){_+=I,_+=":",_+=v,_+=`\r
`}),_}function Qt(h,_,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=bu(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function Ke(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ke,vt);var bo=/^https?$/i,ma=["POST","PUT"];i=Ke.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?du(this.o):du(Sr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){ed(this,H);return}if(h=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var L in I)v.set(L,I[L]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())v.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ma,_,void 0))||I||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of v)this.g.setRequestHeader(H,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pa(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){ed(this,H)}};function ed(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,So(h),Vr(h)}function So(h){h.A||(h.A=!0,Ye(h,"complete"),Ye(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ye(this,"complete"),Ye(this,"abort"),Vr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vr(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ro(this):this.bb())},i.bb=function(){Ro(this)};function Ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||tr(h)!=4||h.Z()!=2)){if(h.u&&tr(h)==4)dn(h.Ea,0,h);else if(Ye(h,"readystatechange"),tr(h)==4){h.h=!1;try{const ie=h.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var I;if(I=ie===0){var L=String(h.D).match(la)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),I=!bo.test(L?L.toLowerCase():"")}v=I}if(v)Ye(h,"complete"),Ye(h,"success");else{h.m=6;try{var H=2<tr(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",So(h)}}finally{Vr(h)}}}}function Vr(h,_){if(h.g){pa(h);const v=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ye(h,"ready");try{v.onreadystatechange=I}catch{}}}function pa(h){h.I&&(f.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function tr(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),_o(_)}};function td(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function np(h){const _={};h=(h.g&&2<=tr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(ce(h[I]))continue;var v=O(h[I]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=_[L]||[];_[L]=H,H.push(v)}P(_,function(I){return I.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ga(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Co(h){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ga("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ga("baseRetryDelayMs",5e3,h),this.cb=ga("retryDelaySeedMs",1e4,h),this.Wa=ga("forwardChannelMaxRetries",2,h),this.wa=ga("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ui(h&&h.concurrentRequestLimit),this.Da=new fa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Co.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,I){ut(0),this.W=h,this.H=_||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=ld(this,null,this.W),No(this)};function Su(h){if(nd(h),h.G==3){var _=h.U++,v=Ln(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),_a(h,v),_=new En(h,h.j,_),_.L=2,_.v=ca(Ln(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=ud(_.j,null),_.g.ea(_.v)),_.F=Date.now(),aa(_)}od(h)}function Do(h){h.g&&(ya(h),h.g.cancel(),h.g=null)}function nd(h){Do(h),h.u&&(f.clearTimeout(h.u),h.u=null),Po(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function No(h){if(!Eo(h.h)&&!h.s){h.s=!0;var _=h.Ga;oe||D(),ye||(oe(),ye=!0),He.add(_,h),h.B=0}}function rp(h,_){return To(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=xt(A(h.Ga,h,_),Du(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new En(this,this.j,h);let H=this.o;if(this.S&&(H?(H=b(H),V(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=rd(this,L,_),v=Ln(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),_a(this,v),H&&(this.O?_="headers="+encodeURIComponent(String(bu(H)))+"&"+_:this.m&&Qt(v,this.m,H)),wo(this.h,L),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),L.T=!0,fr(L,v,null)):fr(L,v,_),this.G=2}}else this.G==3&&(h?Ru(this,h):this.i.length==0||Eo(this.h)||Ru(this))};function Ru(h,_){var v;_?v=_.l:v=h.U++;const I=Ln(h.I);Ze(I,"SID",h.K),Ze(I,"RID",v),Ze(I,"AID",h.T),_a(h,I),h.m&&h.o&&Qt(I,h.m,h.o),v=new En(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=rd(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),wo(h.h,v),fr(v,I,_)}function _a(h,_){h.H&&be(h.H,function(v,I){Ze(_,I,v)}),h.l&&Eu({},function(v,I){Ze(_,I,v)})}function rd(h,_,v){v=Math.min(h.i.length,v);var I=h.l?A(h.l.Na,h.l,h):null;e:{var L=h.i;let H=-1;for(;;){const ie=["count="+v];H==-1?0<v?(H=L[0].g,ie.push("ofs="+H)):H=0:ie.push("ofs="+H);let Ue=!0;for(let zt=0;zt<v;zt++){let Be=L[zt].g;const Yt=L[zt].map;if(Be-=H,0>Be)H=Math.max(0,L[zt].g-100),Ue=!1;else try{Nr(Yt,ie,"req"+Be+"_")}catch{I&&I(Yt)}}if(Ue){I=ie.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,I}function id(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;oe||D(),ye||(oe(),ye=!0),He.add(_,h),h.v=0}}function Cu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=xt(A(h.Fa,h),Du(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,sd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=xt(A(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Do(this),sd(this))};function ya(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function sd(h){h.g=new En(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Ln(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),_a(h,_),h.m&&h.o&&Qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ca(Ln(_)),v.m=null,v.P=!0,li(v,h)}i.Za=function(){this.C!=null&&(this.C=null,Do(this),Cu(this),ut(19))};function Po(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function ad(h,_){var v=null;if(h.g==_){Po(h),ya(h),h.g=null;var I=2}else if(yu(h.h,_))v=_.D,Tn(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;I=Hi(),Ye(I,new Bt(I,v)),No(h)}else id(h);else if(L=_.s,L==3||L==0&&0<_.X||!(I==1&&rp(h,_)||I==2&&Cu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),L){case 1:pi(h,5);break;case 4:pi(h,10);break;case 3:pi(h,6);break;default:pi(h,2)}}}function Du(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function pi(h,_){if(h.j.info("Error code "+_),_==2){var v=A(h.fb,h),I=h.Xa;const L=!I;I=new Vt(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ua(I,"https"),ca(I),L?da(I.toString(),v):mr(I.toString(),v)}else ut(2);h.G=0,h.l&&h.l.sa(_),od(h),nd(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function od(h){if(h.G=0,h.ka=[],h.l){const _=vu(h.h);(_.length!=0||h.i.length!=0)&&(K(h.ka,_),K(h.ka,h.i),h.h.i.length=0,X(h.i),h.i.length=0),h.l.ra()}}function ld(h,_,v){var I=v instanceof Vt?Ln(v):new Vt(v);if(I.g!="")_&&(I.g=_+"."+I.g),$i(I,I.s);else{var L=f.location;I=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var H=new Vt(null);I&&ua(H,I),_&&(H.g=_),L&&$i(H,L),v&&(H.l=v),I=H}return v=h.D,_=h.ya,v&&_&&Ze(I,v,_),Ze(I,"VER",h.la),_a(h,I),I}function ud(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Wi({eb:v})):new Ke(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function cd(){}i=cd.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xo(){}xo.prototype.g=function(h,_){return new wn(h,_)};function wn(h,_){vt.call(this),this.g=new Co(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ce(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ce(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Or(this)}G(wn,vt),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){Su(this.g)},wn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=dr(h),h=v);_.i.push(new Xh(_.Ya++,h)),_.G==3&&No(_)},wn.prototype.N=function(){this.g.l=null,delete this.j,Su(this.g),delete this.g,wn.aa.N.call(this)};function hd(h){ai.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}G(hd,ai);function dd(){mu.call(this),this.status=1}G(dd,mu);function Or(h){this.g=h}G(Or,cd),Or.prototype.ua=function(){Ye(this.g,"a")},Or.prototype.ta=function(h){Ye(this.g,new hd(h))},Or.prototype.sa=function(h){Ye(this.g,new dd)},Or.prototype.ra=function(){Ye(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,Jb=function(){return new xo},Xb=function(){return Hi()},Wb=br,V_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Sf=Qi,oi.COMPLETE="complete",$b=oi,fu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Nc=fu,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Yb=Ke}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const JI="@firebase/firestore",ZI="4.9.1";/**
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
 */let eu="12.2.0";/**
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
 */const Ms=new cm("@firebase/firestore");function ml(){return Ms.logLevel}function dO(i){Ms.setLogLevel(i)}function te(i,...e){if(Ms.logLevel<=ke.DEBUG){const t=e.map(zy);Ms.debug(`Firestore (${eu}): ${i}`,...t)}}function Dt(i,...e){if(Ms.logLevel<=ke.ERROR){const t=e.map(zy);Ms.error(`Firestore (${eu}): ${i}`,...t)}}function ni(i,...e){if(Ms.logLevel<=ke.WARN){const t=e.map(zy);Ms.warn(`Firestore (${eu}): ${i}`,...t)}}function zy(i){if(typeof i=="string")return i;try{/**
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
 */function he(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Zb(i,n,t)}function Zb(i,e,t){let n=`FIRESTORE (${eu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Dt(n),new Error(n)}function me(i,e,t,n){let a="Unexpected state";typeof t=="string"?a=t:n=t,i||Zb(e,a,n)}function fO(i,e){i||he(57014,e)}function le(i,e){return i}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class eS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Zt.UNAUTHENTICATED)))}shutdown(){}}class pO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gO{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let n=this.i;const a=m=>this.i!==n?(n=this.i,t(m)):Promise.resolve();let l=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new cn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},f=m=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new cn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(me(typeof n.accessToken=="string",31837,{l:n}),new eS(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class _O{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yO{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new _O(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class eA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const n=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>n(l)))};const a=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new eA(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eA(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Fy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const a=EO(40);for(let l=0;l<a.length;++l)n.length<20&&a[l]<t&&(n+=e.charAt(a[l]%62))}return n}}function Re(i,e){return i<e?-1:i>e?1:0}function O_(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const a=i.charAt(n),l=e.charAt(n);if(a!==l)return h_(a)===h_(l)?Re(a,l):h_(a)?1:-1}return Re(i.length,e.length)}const TO=55296,wO=57343;function h_(i){const e=i.charCodeAt(0);return e>=TO&&e<=wO}function Nl(i,e,t){return i.length===e.length&&i.every(((n,a)=>t(n,e[a])))}function tS(i){return i+"\0"}/**
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
 */const tA="__name__";class Fr{constructor(e,t,n){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&he(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let a=0;a<n;a++){const l=Fr.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const n=Fr.isNumericId(e),a=Fr.isNumericId(t);return n&&!a?-1:!n&&a?1:n&&a?Fr.extractNumericId(e).compare(Fr.extractNumericId(t)):O_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ds.fromString(e.substring(4,e.length-2))}}class Me extends Fr{construct(e,t,n){return new Me(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((a=>a.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const IO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Fr{construct(e,t,n){return new ft(e,t,n)}static isValidIdentifier(e){return IO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tA}static keyField(){return new ft([tA])}static fromServerFormat(e){const t=[];let n="",a=0;const l=()=>{if(n.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(n+=f,a++):(l(),a++)}if(l(),c)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(t)}static emptyPath(){return new ft([])}}/**
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
 */function qy(i,e,t){if(!t)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function nS(i,e,t,n){if(e===!0&&n===!0)throw new Z(j.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function nA(i){if(!se.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function rA(i){if(se.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function rS(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function wm(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":he(12329,{type:typeof i})}function je(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wm(i);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function iS(i,e){if(e<=0)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ch(i,e){if(!rS(i))throw new Z(j.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const a=e[n].typeString,l="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const c=i[n];if(a&&typeof c!==a){t=`JSON field '${n}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${n}' field to equal '${l.value}'`;break}}if(t)throw new Z(j.INVALID_ARGUMENT,t);return!0}/**
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
 */const iA=-62135596800,sA=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*sA);return new Qe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<iA)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sA}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ch(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iA;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:Ut("string",Qe._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Qe(0,0))}static max(){return new ge(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pl=-1;class Kf{constructor(e,t,n,a){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=a}}function k_(i){return i.fields.find((e=>e.kind===2))}function Ma(i){return i.fields.filter((e=>e.kind!==2))}Kf.UNKNOWN_ID=-1;class Rf{constructor(e,t){this.fieldPath=e,this.kind=t}}class ih{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ih(0,$n.min())}}function sS(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,a=ge.fromTimestamp(n===1e9?new Qe(t+1,0):new Qe(t,n));return new $n(a,se.empty(),e)}function aS(i){return new $n(i.readTime,i.key,Pl)}class $n{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new $n(ge.min(),se.empty(),Pl)}static max(){return new $n(ge.max(),se.empty(),Pl)}}function jy(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */async function Ks(i){if(i.code!==j.FAILED_PRECONDITION||i.message!==oS)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U(((n,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(n,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(n,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):U.reject(t)}static resolve(e){return new U(((t,n)=>{t(e)}))}static reject(e){return new U(((t,n)=>{n(e)}))}static waitFor(e){return new U(((t,n)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(m=>n(m)))})),c=!0,l===a&&t()}))}static or(e){let t=U.resolve(!1);for(const n of e)t=t.next((a=>a?U.resolve(a):n()));return t}static forEach(e,t){const n=[];return e.forEach(((a,l)=>{n.push(t.call(this,a,l))})),this.waitFor(n)}static mapArray(e,t){return new U(((n,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((y=>{c[g]=y,++f,f===l&&n(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new U(((n,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):n()};l()}))}}/**
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
 */const Gn="SimpleDb";class Im{static open(e,t,n,a){try{return new Im(t,e.transaction(a,n))}catch(l){throw new qc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new cn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new qc(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const a=Hy(n.target.error);this.S.reject(new qc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(te(Gn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new bO(t)}}class Wr{static delete(e){return te(Gn,"Removing database:",e),Ua(hy().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Xc())return!1;if(Wr.F())return!0;const e=gt(),t=Wr.M(e),n=0<t&&t<10,a=uS(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Wr.M(gt())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(te(Gn,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{n(new qc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?n(new Z(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?n(new Z(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):n(new qc(e,c))},a.onupgradeneeded=l=>{te(Gn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.N.k(c,a.transaction,l.oldVersion,this.version).next((()=>{te(Gn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.L(e);const f=Im.open(this.db,e,l?"readonly":"readwrite",n),m=a(f).next((g=>(f.C(),g))).catch((g=>(f.abort(g),U.reject(g)))).toPromise();return m.catch((()=>{})),await f.D,m}catch(f){const m=f,g=m.name!=="FirebaseError"&&c<3;if(te(Gn,"Transaction failed with error:",m.message,"Retrying:",g),this.close(),!g)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class AO{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Ua(this.U.delete())}}class qc extends Z{constructor(e,t){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qs(i){return i.name==="IndexedDbTransactionError"}class bO{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(te(Gn,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(te(Gn,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ua(n)}add(e){return te(Gn,"ADD",this.store.name,e,e),Ua(this.store.add(e))}get(e){return Ua(this.store.get(e)).next((t=>(t===void 0&&(t=null),te(Gn,"GET",this.store.name,e,t),t)))}delete(e){return te(Gn,"DELETE",this.store.name,e),Ua(this.store.delete(e))}count(){return te(Gn,"COUNT",this.store.name),Ua(this.store.count())}J(e,t){const n=this.options(e,t),a=n.index?this.store.index(n.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(n.range);return new U(((c,f)=>{l.onerror=m=>{f(m.target.error)},l.onsuccess=m=>{c(m.target.result)}}))}{const l=this.cursor(n),c=[];return this.H(l,((f,m)=>{c.push(m)})).next((()=>c))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new U(((a,l)=>{n.onerror=c=>{l(c.target.error)},n.onsuccess=c=>{a(c.target.result)}}))}Z(e,t){te(Gn,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const a=this.cursor(n);return this.H(a,((l,c,f)=>f.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const a=this.cursor(n);return this.H(a,t)}te(e){const t=this.cursor({});return new U(((n,a)=>{t.onerror=l=>{const c=Hy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():n()})):n()}}))}H(e,t){const n=[];return new U(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const m=new AO(f),g=t(f.primaryKey,f.value,m);if(g instanceof U){const y=g.catch((T=>(m.done(),U.reject(T))));n.push(y)}m.isDone?a():m.G===null?f.continue():f.continue(m.G)}})).next((()=>U.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ua(i){return new U(((e,t)=>{i.onsuccess=n=>{const a=n.target.result;e(a)},i.onerror=n=>{const a=Hy(n.target.error);t(a)}}))}let aA=!1;function Hy(i){const e=Wr.M(gt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(i.message.indexOf(t)>=0){const n=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aA||(aA=!0,setTimeout((()=>{throw n}),0)),n}}return i}const jc="IndexBackfiller";class SO{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){te(jc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();te(jc,`Documents written: ${t}`)}catch(t){Qs(t)?te(jc,"Ignoring IndexedDB error during index backfill: ",t):await Ks(t)}await this.re(6e4)}))}}class RO{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let a=t,l=!0;return U.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!n.has(c))return te(jc,`Processing collection: ${c}`),this.oe(e,c,a).next((f=>{a-=f,n.add(c)}));l=!1})))).next((()=>t-a))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,n).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this._e(a,l))).next((f=>(te(jc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((a,l)=>{const c=aS(l);jy(c,n)>0&&(n=c)})),new $n(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Ns=-1;function Dh(i){return i==null}function sh(i){return i===0&&1/i==-1/0}function cS(i){return typeof i=="number"&&Number.isInteger(i)&&!sh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qf="";function yn(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=oA(e)),e=CO(i.get(t),e);return oA(e)}function CO(i,e){let t=e;const n=i.length;for(let a=0;a<n;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Qf:t+="";break;default:t+=l}}return t}function oA(i){return i+Qf+""}function Yr(i){const e=i.length;if(me(e>=2,64408,{path:i}),e===2)return me(i.charAt(0)===Qf&&i.charAt(1)==="",56145,{path:i}),Me.emptyPath();const t=e-2,n=[];let a="";for(let l=0;l<e;){const c=i.indexOf(Qf,l);switch((c<0||c>t)&&he(50515,{path:i}),i.charAt(c+1)){case"":const f=i.substring(l,c);let m;a.length===0?m=f:(a+=f,m=a,a=""),n.push(m);break;case"":a+=i.substring(l,c),a+="\0";break;case"":a+=i.substring(l,c+1);break;default:he(61167,{path:i})}l=c+2}return new Me(n)}/**
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
 */const La="remoteDocuments",Nh="owner",ll="owner",ah="mutationQueues",DO="userId",yr="mutations",lA="batchId",Ha="userMutationsIndex",uA=["userId","batchId"];/**
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
 */function Cf(i,e){return[i,yn(e)]}function hS(i,e,t){return[i,yn(e),t]}const NO={},xl="documentMutations",Yf="remoteDocumentsV14",PO=["prefixPath","collectionGroup","readTime","documentId"],Df="documentKeyIndex",xO=["prefixPath","collectionGroup","documentId"],dS="collectionGroupIndex",VO=["collectionGroup","readTime","prefixPath","documentId"],oh="remoteDocumentGlobal",M_="remoteDocumentGlobalKey",Vl="targets",fS="queryTargetsIndex",OO=["canonicalId","targetId"],Ol="targetDocuments",kO=["targetId","path"],Gy="documentTargetsIndex",MO=["path","targetId"],$f="targetGlobalKey",$a="targetGlobal",lh="collectionParents",LO=["collectionId","parent"],kl="clientMetadata",UO="clientId",Am="bundles",BO="bundleId",bm="namedQueries",zO="name",Ky="indexConfiguration",FO="indexId",L_="collectionGroupIndex",qO="collectionGroup",Hc="indexState",jO=["indexId","uid"],mS="sequenceNumberIndex",HO=["uid","sequenceNumber"],Gc="indexEntries",GO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pS="documentKeyIndex",KO=["indexId","uid","orderedDocumentKey"],Sm="documentOverlays",QO=["userId","collectionPath","documentId"],U_="collectionPathOverlayIndex",YO=["userId","collectionPath","largestBatchId"],gS="collectionGroupOverlayIndex",$O=["userId","collectionGroup","largestBatchId"],Qy="globals",WO="name",_S=[ah,yr,xl,La,Vl,Nh,$a,Ol,kl,oh,lh,Am,bm],XO=[..._S,Sm],yS=[ah,yr,xl,Yf,Vl,Nh,$a,Ol,kl,oh,lh,Am,bm,Sm],vS=yS,Yy=[...vS,Ky,Hc,Gc],JO=Yy,ES=[...Yy,Qy],ZO=ES;/**
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
 */function cA(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ys(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function TS(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||ln.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return t+n.left.size;a<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gf(this.root,e,this.comparator,!0)}}class gf{constructor(e,t,n,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?n(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,t,n,a,l){this.key=e,this.value=t,this.color=n??ln.RED,this.left=a??ln.EMPTY,this.right=l??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,a,l){return new ln(e??this.key,t??this.value,n??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let a=this;const l=n(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,n),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ln.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,n,a,l){return this}insert(e,t,n){return new ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hA(this.data.getIterator())}getIteratorFrom(e){return new hA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class hA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ul(i){return i.hasNext()?i.getNext():void 0}/**
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
 */class On{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new On([])}unionWith(e){let t=new Je(ft.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nl(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new wS("Invalid base64 string: "+l):l}})(e);return new wt(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const tk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(i){if(me(!!i,39018),typeof i=="string"){let e=0;const t=tk.exec(i);if(me(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ht(i.seconds),nanos:ht(i.nanos)}}function ht(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Mi(i){return typeof i=="string"?wt.fromBase64String(i):wt.fromUint8Array(i)}/**
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
 */const IS="server_timestamp",AS="__type__",bS="__previous_value__",SS="__local_write_time__";function Rm(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[AS])==null?void 0:n.stringValue)===IS}function Cm(i){const e=i.mapValue.fields[bS];return Rm(e)?Cm(e):e}function uh(i){const e=ki(i.mapValue.fields[SS].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class nk{constructor(e,t,n,a,l,c,f,m,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y}}const z_="(default)";class Ls{constructor(e,t){this.projectId=e,this.database=t||z_}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database===z_}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $y="__type__",RS="__max__",bs={mapValue:{fields:{__type__:{stringValue:RS}}}},Wy="__vector__",Ml="value",Nf={nullValue:"NULL_VALUE"};function Us(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Rm(i)?4:CS(i)?9007199254740991:Dm(i)?10:11:he(28295,{value:i})}function ri(i,e){if(i===e)return!0;const t=Us(i);if(t!==Us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return uh(i).isEqual(uh(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ki(a.timestampValue),f=ki(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,l){return Mi(a.bytesValue).isEqual(Mi(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,l){return ht(a.geoPointValue.latitude)===ht(l.geoPointValue.latitude)&&ht(a.geoPointValue.longitude)===ht(l.geoPointValue.longitude)})(i,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return ht(a.integerValue)===ht(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=ht(a.doubleValue),f=ht(l.doubleValue);return c===f?sh(c)===sh(f):isNaN(c)&&isNaN(f)}return!1})(i,e);case 9:return Nl(i.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(cA(c)!==cA(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!ri(c[m],f[m])))return!1;return!0})(i,e);default:return he(52216,{left:i})}}function ch(i,e){return(i.values||[]).find((t=>ri(t,e)))!==void 0}function Bs(i,e){if(i===e)return 0;const t=Us(i),n=Us(e);if(t!==n)return Re(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ht(l.integerValue||l.doubleValue),m=ht(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(i,e);case 3:return dA(i.timestampValue,e.timestampValue);case 4:return dA(uh(i),uh(e));case 5:return O_(i.stringValue,e.stringValue);case 6:return(function(l,c){const f=Mi(l),m=Mi(c);return f.compareTo(m)})(i.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const y=Re(f[g],m[g]);if(y!==0)return y}return Re(f.length,m.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Re(ht(l.latitude),ht(c.latitude));return f!==0?f:Re(ht(l.longitude),ht(c.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return fA(i.arrayValue,e.arrayValue);case 10:return(function(l,c){var A,x,G,X;const f=l.fields||{},m=c.fields||{},g=(A=f[Ml])==null?void 0:A.arrayValue,y=(x=m[Ml])==null?void 0:x.arrayValue,T=Re(((G=g==null?void 0:g.values)==null?void 0:G.length)||0,((X=y==null?void 0:y.values)==null?void 0:X.length)||0);return T!==0?T:fA(g,y)})(i.mapValue,e.mapValue);case 11:return(function(l,c){if(l===bs.mapValue&&c===bs.mapValue)return 0;if(l===bs.mapValue)return 1;if(c===bs.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const A=O_(m[T],y[T]);if(A!==0)return A;const x=Bs(f[m[T]],g[y[T]]);if(x!==0)return x}return Re(m.length,y.length)})(i.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function dA(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=ki(i),n=ki(e),a=Re(t.seconds,n.seconds);return a!==0?a:Re(t.nanos,n.nanos)}function fA(i,e){const t=i.values||[],n=e.values||[];for(let a=0;a<t.length&&a<n.length;++a){const l=Bs(t[a],n[a]);if(l)return l}return Re(t.length,n.length)}function Ll(i){return F_(i)}function F_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=ki(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Mi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return se.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",a=!0;for(const l of t.values||[])a?a=!1:n+=",",n+=F_(l);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of n)l?l=!1:a+=",",a+=`${c}:${F_(t.fields[c])}`;return a+"}"})(i.mapValue):he(61005,{value:i})}function Pf(i){switch(Us(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cm(i);return e?16+Pf(e):16;case 5:return 2*i.stringValue.length;case 6:return Mi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((a,l)=>a+Pf(l)),0)})(i.arrayValue);case 10:case 11:return(function(n){let a=0;return Ys(n.fields,((l,c)=>{a+=l.length+Pf(c)})),a})(i.mapValue);default:throw he(13486,{value:i})}}function Za(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function q_(i){return!!i&&"integerValue"in i}function hh(i){return!!i&&"arrayValue"in i}function mA(i){return!!i&&"nullValue"in i}function pA(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function xf(i){return!!i&&"mapValue"in i}function Dm(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[$y])==null?void 0:n.stringValue)===Wy}function Kc(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ys(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kc(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kc(i.arrayValue.values[t]);return e}return{...i}}function CS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===RS}const DS={mapValue:{fields:{[$y]:{stringValue:Wy},[Ml]:{arrayValue:{}}}}};function rk(i){return"nullValue"in i?Nf:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?Za(Ls.empty(),se.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?Dm(i)?DS:{mapValue:{}}:he(35942,{value:i})}function ik(i){return"nullValue"in i?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?Za(Ls.empty(),se.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?DS:"mapValue"in i?Dm(i)?{mapValue:{}}:bs:he(61959,{value:i})}function gA(i,e){const t=Bs(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?-1:!i.inclusive&&e.inclusive?1:0}function _A(i,e){const t=Bs(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?1:!i.inclusive&&e.inclusive?-1:0}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kc(t)}setAll(e){let t=ft.emptyPath(),n={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,n,a),n={},a=[],t=f.popLast()}c?n[f.lastSegment()]=Kc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,n,a)}delete(e){const t=this.field(e.popLast());xf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ri(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=t.mapValue.fields[e.get(n)];xf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,n){Ys(t,((a,l)=>e[a]=l));for(const a of n)delete e[a]}clone(){return new un(Kc(this.value))}}function NS(i){const e=[];return Ys(i.fields,((t,n)=>{const a=new ft([t]);if(xf(n)){const l=NS(n.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new On(e)}/**
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
 */class lt{constructor(e,t,n,a,l,c,f){this.key=e,this.documentType=t,this.version=n,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new lt(e,0,ge.min(),ge.min(),ge.min(),un.empty(),0)}static newFoundDocument(e,t,n,a){return new lt(e,1,t,ge.min(),n,a,0)}static newNoDocument(e,t){return new lt(e,2,t,ge.min(),ge.min(),un.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,ge.min(),ge.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zs{constructor(e,t){this.position=e,this.inclusive=t}}function yA(i,e,t){let n=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?n=se.comparator(se.fromName(c.referenceValue),t.key):n=Bs(c,t.data.field(l.field)),l.dir==="desc"&&(n*=-1),n!==0)break}return n}function vA(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ri(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class dh{constructor(e,t="asc"){this.field=e,this.dir=t}}function sk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class PS{}class Le extends PS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ak(e,t,n):t==="array-contains"?new uk(e,n):t==="in"?new LS(e,n):t==="not-in"?new ck(e,n):t==="array-contains-any"?new hk(e,n):new Le(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ok(e,n):new lk(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bs(t,this.value)):t!==null&&Us(this.value)===Us(t)&&this.matchesComparison(Bs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends PS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xe(e,t)}matches(e){return Ul(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ul(i){return i.op==="and"}function j_(i){return i.op==="or"}function Xy(i){return xS(i)&&Ul(i)}function xS(i){for(const e of i.filters)if(e instanceof Xe)return!1;return!0}function H_(i){if(i instanceof Le)return i.field.canonicalString()+i.op.toString()+Ll(i.value);if(Xy(i))return i.filters.map((e=>H_(e))).join(",");{const e=i.filters.map((t=>H_(t))).join(",");return`${i.op}(${e})`}}function VS(i,e){return i instanceof Le?(function(n,a){return a instanceof Le&&n.op===a.op&&n.field.isEqual(a.field)&&ri(n.value,a.value)})(i,e):i instanceof Xe?(function(n,a){return a instanceof Xe&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce(((l,c,f)=>l&&VS(c,a.filters[f])),!0):!1})(i,e):void he(19439)}function OS(i,e){const t=i.filters.concat(e);return Xe.create(t,i.op)}function kS(i){return i instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ll(t.value)}`})(i):i instanceof Xe?(function(t){return t.op.toString()+" {"+t.getFilters().map(kS).join(" ,")+"}"})(i):"Filter"}class ak extends Le{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class ok extends Le{constructor(e,t){super(e,"in",t),this.keys=MS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lk extends Le{constructor(e,t){super(e,"not-in",t),this.keys=MS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function MS(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>se.fromName(n.referenceValue)))}class uk extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hh(t)&&ch(t.arrayValue,this.value)}}class LS extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ch(this.value.arrayValue,t)}}class ck extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ch(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ch(this.value.arrayValue,t)}}class hk extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ch(this.value.arrayValue,n)))}}/**
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
 */class dk{constructor(e,t=null,n=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function G_(i,e=null,t=[],n=[],a=null,l=null,c=null){return new dk(i,e,t,n,a,l,c)}function eo(i){const e=le(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>H_(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(l){return l.field.canonicalString()+l.dir})(n))).join(","),Dh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Ll(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Ll(n))).join(",")),e.Te=t}return e.Te}function Ph(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!sk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!VS(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!vA(i.startAt,e.startAt)&&vA(i.endAt,e.endAt)}function Wf(i){return se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function Xf(i,e){return i.filters.filter((t=>t instanceof Le&&t.field.isEqual(e)))}function EA(i,e,t){let n=Nf,a=!0;for(const l of Xf(i,e)){let c=Nf,f=!0;switch(l.op){case"<":case"<=":c=rk(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=Nf}gA({value:n,inclusive:a},{value:c,inclusive:f})<0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];gA({value:n,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}function TA(i,e,t){let n=bs,a=!0;for(const l of Xf(i,e)){let c=bs,f=!0;switch(l.op){case">=":case">":c=ik(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=bs}_A({value:n,inclusive:a},{value:c,inclusive:f})>0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];_A({value:n,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}/**
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
 */class Bi{constructor(e,t=null,n=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function US(i,e,t,n,a,l,c,f){return new Bi(i,e,t,n,a,l,c,f)}function tu(i){return new Bi(i)}function wA(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Jy(i){return i.collectionGroup!==null}function Al(i){const e=le(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Je(ft.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new dh(l,n))})),t.has(ft.keyField().canonicalString())||e.Ie.push(new dh(ft.keyField(),n))}return e.Ie}function Rn(i){const e=le(i);return e.Ee||(e.Ee=fk(e,Al(i))),e.Ee}function fk(i,e){if(i.limitType==="F")return G_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new dh(a.field,l)}));const t=i.endAt?new zs(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new zs(i.startAt.position,i.startAt.inclusive):null;return G_(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function K_(i,e){const t=i.filters.concat([e]);return new Bi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Jf(i,e,t){return new Bi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function xh(i,e){return Ph(Rn(i),Rn(e))&&i.limitType===e.limitType}function BS(i){return`${eo(Rn(i))}|lt:${i.limitType}`}function pl(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((a=>kS(a))).join(", ")}]`),Dh(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((a=>Ll(a))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((a=>Ll(a))).join(",")),`Target(${n})`})(Rn(i))}; limitType=${i.limitType})`}function Vh(i,e){return e.isFoundDocument()&&(function(n,a){const l=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(l):se.isDocumentKey(n.path)?n.path.isEqual(l):n.path.isImmediateParentOf(l)})(i,e)&&(function(n,a){for(const l of Al(n))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(n,a){for(const l of n.filters)if(!l.matches(a))return!1;return!0})(i,e)&&(function(n,a){return!(n.startAt&&!(function(c,f,m){const g=yA(c,f,m);return c.inclusive?g<=0:g<0})(n.startAt,Al(n),a)||n.endAt&&!(function(c,f,m){const g=yA(c,f,m);return c.inclusive?g>=0:g>0})(n.endAt,Al(n),a))})(i,e)}function zS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function FS(i){return(e,t)=>{let n=!1;for(const a of Al(i)){const l=mk(a,e,t);if(l!==0)return l;n=n||a.field.isKeyField()}return 0}}function mk(i,e,t){const n=i.field.isKeyField()?se.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?Bs(m,g):he(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return he(19790,{direction:i.dir})}}/**
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
 */class zi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[a,l]of n)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[t]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,((t,n)=>{for(const[a,l]of n)e(a,l)}))}isEmpty(){return TS(this.inner)}size(){return this.innerSize}}/**
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
 */const pk=new ot(se.comparator);function kn(){return pk}const qS=new ot(se.comparator);function Pc(...i){let e=qS;for(const t of i)e=e.insert(t.key,t);return e}function jS(i){let e=qS;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $r(){return Qc()}function HS(){return Qc()}function Qc(){return new zi((i=>i.toString()),((i,e)=>i.isEqual(e)))}const gk=new ot(se.comparator),_k=new Je(se.comparator);function Ce(...i){let e=_k;for(const t of i)e=e.add(t);return e}const yk=new Je(Re);function Zy(){return yk}/**
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
 */function ev(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sh(e)?"-0":e}}function GS(i){return{integerValue:""+i}}function KS(i,e){return cS(e)?GS(e):ev(i,e)}/**
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
 */class Nm{constructor(){this._=void 0}}function vk(i,e,t){return i instanceof Bl?(function(a,l){const c={fields:{[AS]:{stringValue:IS},[SS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Rm(l)&&(l=Cm(l)),l&&(c.fields[bS]=l),{mapValue:c}})(t,e):i instanceof to?YS(i,e):i instanceof no?$S(i,e):(function(a,l){const c=QS(a,l),f=IA(c)+IA(a.Ae);return q_(c)&&q_(a.Ae)?GS(f):ev(a.serializer,f)})(i,e)}function Ek(i,e,t){return i instanceof to?YS(i,e):i instanceof no?$S(i,e):t}function QS(i,e){return i instanceof zl?(function(n){return q_(n)||(function(l){return!!l&&"doubleValue"in l})(n)})(e)?e:{integerValue:0}:null}class Bl extends Nm{}class to extends Nm{constructor(e){super(),this.elements=e}}function YS(i,e){const t=WS(e);for(const n of i.elements)t.some((a=>ri(a,n)))||t.push(n);return{arrayValue:{values:t}}}class no extends Nm{constructor(e){super(),this.elements=e}}function $S(i,e){let t=WS(e);for(const n of i.elements)t=t.filter((a=>!ri(a,n)));return{arrayValue:{values:t}}}class zl extends Nm{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function IA(i){return ht(i.integerValue||i.doubleValue)}function WS(i){return hh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Oh{constructor(e,t){this.field=e,this.transform=t}}function Tk(i,e){return i.field.isEqual(e.field)&&(function(n,a){return n instanceof to&&a instanceof to||n instanceof no&&a instanceof no?Nl(n.elements,a.elements,ri):n instanceof zl&&a instanceof zl?ri(n.Ae,a.Ae):n instanceof Bl&&a instanceof Bl})(i.transform,e.transform)}class wk{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Pm{}function XS(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ru(i.key,mt.none()):new nu(i.key,i.data,mt.none());{const t=i.data,n=un.empty();let a=new Je(ft.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?n.delete(l):n.set(l,c),a=a.add(l)}return new Fi(i.key,n,new On(a.toArray()),mt.none())}}function Ik(i,e,t){i instanceof nu?(function(a,l,c){const f=a.value.clone(),m=bA(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(i,e,t):i instanceof Fi?(function(a,l,c){if(!Vf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=bA(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(JS(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(i,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Yc(i,e,t,n){return i instanceof nu?(function(l,c,f,m){if(!Vf(l.precondition,c))return f;const g=l.value.clone(),y=SA(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(i,e,t,n):i instanceof Fi?(function(l,c,f,m){if(!Vf(l.precondition,c))return f;const g=SA(l.fieldTransforms,m,c),y=c.data;return y.setAll(JS(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(i,e,t,n):(function(l,c,f){return Vf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(i,e,t)}function Ak(i,e){let t=null;for(const n of i.fieldTransforms){const a=e.data.field(n.field),l=QS(n.transform,a||null);l!=null&&(t===null&&(t=un.empty()),t.set(n.field,l))}return t||null}function AA(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&Nl(n,a,((l,c)=>Tk(l,c)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class nu extends Pm{constructor(e,t,n,a=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Fi extends Pm{constructor(e,t,n,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function JS(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function bA(i,e,t){const n=new Map;me(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,f=e.data.field(l.field);n.set(l.field,Ek(c,f,t[a]))}return n}function SA(i,e,t){const n=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);n.set(a.field,vk(l,c,e))}return n}class ru extends Pm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tv extends Pm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nv{constructor(e,t,n,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Ik(l,e,n[a])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Yc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Yc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=HS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=XS(c,f);m!==null&&n.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ge.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&Nl(this.mutations,e.mutations,((t,n)=>AA(t,n)))&&Nl(this.baseMutations,e.baseMutations,((t,n)=>AA(t,n)))}}class rv{constructor(e,t,n,a){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=a}static from(e,t,n){me(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let a=(function(){return gk})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,n[c].version);return new rv(e,t,n,a)}}/**
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
 */class bk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Mt,Fe;function ZS(i){switch(i){case j.OK:return he(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return he(15467,{code:i})}}function eR(i){if(i===void 0)return Dt("GRPC error has no .code"),j.UNKNOWN;switch(i){case Mt.OK:return j.OK;case Mt.CANCELLED:return j.CANCELLED;case Mt.UNKNOWN:return j.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return j.INTERNAL;case Mt.UNAVAILABLE:return j.UNAVAILABLE;case Mt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Mt.NOT_FOUND:return j.NOT_FOUND;case Mt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Mt.ABORTED:return j.ABORTED;case Mt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Mt.DATA_LOSS:return j.DATA_LOSS;default:return he(39323,{code:i})}}(Fe=Mt||(Mt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Sk=new Ds([4294967295,4294967295],0);function RA(i){const e=tR().encode(i),t=new Qb;return t.update(e),new Uint8Array(t.digest())}function CA(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ds([t,n],0),new Ds([a,l],0)]}class sv{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new xc(`Invalid padding: ${t}`);if(n<0)throw new xc(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new xc(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new xc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ds.fromNumber(this.ge)}ye(e,t,n){let a=e.add(t.multiply(Ds.fromNumber(n)));return a.compare(Sk)===1&&(a=new Ds([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=RA(e),[n,a]=CA(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);if(!this.we(c))return!1}return!0}static create(e,t,n){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new sv(l,a,t);return n.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=RA(e),[n,a]=CA(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class xc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kh{constructor(e,t,n,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const a=new Map;return a.set(e,Mh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new kh(ge.min(),a,new ot(Re),kn(),Ce())}}class Mh{constructor(e,t,n,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Mh(n,t,Ce(),Ce(),Ce())}}/**
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
 */class Of{constructor(e,t,n,a){this.be=e,this.removedTargetIds=t,this.key=n,this.De=a}}class nR{constructor(e,t){this.targetId=e,this.Ce=t}}class rR{constructor(e,t,n=wt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=a}}class DA{constructor(){this.ve=0,this.Fe=NA(),this.Me=wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),n=Ce();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:n=n.add(a);break;default:he(38017,{changeType:l})}})),new Mh(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=NA()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=_f(),this.He=_f(),this.Ye=new ot(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,n=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Wf(l))if(n===0){const c=new se(l.path);this.et(t,c,lt.newNoDocument(c,ge.min()))}else me(n===1,20013,{expectedCount:n});else{const c=this._t(t);if(c!==n){const f=this.ut(e),m=f?this.ct(f,e,c):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Mi(n).toUint8Array()}catch(m){if(m instanceof wS)return ni("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new sv(c,a,l)}catch(m){return ni(m instanceof xc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let a=0;return n.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&Wf(f.target)){const m=new se(f.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,lt.newNoDocument(m,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let n=Ce();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(n=n.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new kh(e,t,this.Ye,this.je,n);return this.je=kn(),this.Je=_f(),this.He=_f(),this.Ye=new ot(Re),a}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new DA,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new DA),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _f(){return new ot(se.comparator)}function NA(){return new ot(se.comparator)}const Ck={asc:"ASCENDING",desc:"DESCENDING"},Dk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class Pk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Q_(i,e){return i.useProto3Json||Dh(e)?e:{value:e}}function Fl(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iR(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function xk(i,e){return Fl(i,e.toTimestamp())}function Nt(i){return me(!!i,49232),ge.fromTimestamp((function(t){const n=ki(t);return new Qe(n.seconds,n.nanos)})(i))}function av(i,e){return Y_(i,e).canonicalString()}function Y_(i,e){const t=(function(a){return new Me(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function sR(i){const e=Me.fromString(i);return me(pR(e),10190,{key:e.toString()}),e}function fh(i,e){return av(i.databaseId,e.path)}function Xr(i,e){const t=sR(e);if(t.get(1)!==i.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new se(lR(t))}function aR(i,e){return av(i.databaseId,e)}function oR(i){const e=sR(i);return e.length===4?Me.emptyPath():lR(e)}function $_(i){return new Me(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function lR(i){return me(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function PA(i,e,t){return{name:fh(i,e),fields:t.value.mapValue.fields}}function uR(i,e,t){const n=Xr(i,e.name),a=Nt(e.updateTime),l=e.createTime?Nt(e.createTime):ge.min(),c=new un({mapValue:{fields:e.fields}}),f=lt.newFoundDocument(n,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function Vk(i,e){return"found"in e?(function(n,a){me(!!a.found,43571),a.found.name,a.found.updateTime;const l=Xr(n,a.found.name),c=Nt(a.found.updateTime),f=a.found.createTime?Nt(a.found.createTime):ge.min(),m=new un({mapValue:{fields:a.found.fields}});return lt.newFoundDocument(l,c,f,m)})(i,e):"missing"in e?(function(n,a){me(!!a.missing,3894),me(!!a.readTime,22933);const l=Xr(n,a.missing),c=Nt(a.readTime);return lt.newNoDocument(l,c)})(i,e):he(7234,{result:e})}function Ok(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:he(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(me(y===void 0||typeof y=="string",58123),wt.fromBase64String(y||"")):(me(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),wt.fromUint8Array(y||new Uint8Array))})(i,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const y=g.code===void 0?j.UNKNOWN:eR(g.code);return new Z(y,g.message||"")})(c);t=new rR(n,a,l,f||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=Xr(i,n.document.name),l=Nt(n.document.updateTime),c=n.document.createTime?Nt(n.document.createTime):ge.min(),f=new un({mapValue:{fields:n.document.fields}}),m=lt.newFoundDocument(a,l,c,f),g=n.targetIds||[],y=n.removedTargetIds||[];t=new Of(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=Xr(i,n.document),l=n.readTime?Nt(n.readTime):ge.min(),c=lt.newNoDocument(a,l),f=n.removedTargetIds||[];t=new Of([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=Xr(i,n.document),l=n.removedTargetIds||[];t=new Of([],l,a,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:l}=n,c=new bk(a,l),f=n.targetId;t=new nR(f,c)}}return t}function mh(i,e){let t;if(e instanceof nu)t={update:PA(i,e.key,e.value)};else if(e instanceof ru)t={delete:fh(i,e.key)};else if(e instanceof Fi)t={update:PA(i,e.key,e.data),updateMask:zk(e.fieldMask)};else{if(!(e instanceof tv))return he(16599,{Vt:e.type});t={verify:fh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(l,c){const f=c.transform;if(f instanceof Bl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof to)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof no)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof zl)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw he(20930,{transform:c.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:xk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:he(27497)})(i,e.precondition)),t}function W_(i,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?mt.updateTime(Nt(l.updateTime)):l.exists!==void 0?mt.exists(l.exists):mt.none()})(e.currentDocument):mt.none(),n=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let m=null;if("setToServerValue"in f)me(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),m=new Bl;else if("appendMissingElements"in f){const y=f.appendMissingElements.values||[];m=new to(y)}else if("removeAllFromArray"in f){const y=f.removeAllFromArray.values||[];m=new no(y)}else"increment"in f?m=new zl(c,f.increment):he(16584,{proto:f});const g=ft.fromServerFormat(f.fieldPath);return new Oh(g,m)})(i,a))):[];if(e.update){e.update.name;const a=Xr(i,e.update.name),l=new un({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(m){const g=m.fieldPaths||[];return new On(g.map((y=>ft.fromServerFormat(y))))})(e.updateMask);return new Fi(a,l,c,t,n)}return new nu(a,l,t,n)}if(e.delete){const a=Xr(i,e.delete);return new ru(a,t)}if(e.verify){const a=Xr(i,e.verify);return new tv(a,t)}return he(1463,{proto:e})}function kk(i,e){return i&&i.length>0?(me(e!==void 0,14353),i.map((t=>(function(a,l){let c=a.updateTime?Nt(a.updateTime):Nt(l);return c.isEqual(ge.min())&&(c=Nt(l)),new wk(c,a.transformResults||[])})(t,e)))):[]}function cR(i,e){return{documents:[aR(i,e.path)]}}function hR(i,e){const t={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=aR(i,a);const l=(function(g){if(g.length!==0)return mR(Xe.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(A){return{field:gl(A.field),direction:Lk(A.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Q_(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function dR(i){let e=oR(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let a=null;if(n>0){me(n===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const A=fR(T);return A instanceof Xe&&Xy(A)?A.getFilters():[A]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((A=>(function(G){return new dh(_l(G.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let A;return A=typeof T=="object"?T.value:T,Dh(A)?null:A})(t.limit));let m=null;t.startAt&&(m=(function(T){const A=!!T.before,x=T.values||[];return new zs(x,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const A=!T.before,x=T.values||[];return new zs(x,A)})(t.endAt)),US(e,a,c,l,f,"F",m,g)}function Mk(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fR(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=_l(t.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=_l(t.unaryFilter.field);return Le.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_l(t.unaryFilter.field);return Le.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=_l(t.unaryFilter.field);return Le.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Le.create(_l(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Xe.create(t.compositeFilter.filters.map((n=>fR(n))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(i):he(30097,{filter:i})}function Lk(i){return Ck[i]}function Uk(i){return Dk[i]}function Bk(i){return Nk[i]}function gl(i){return{fieldPath:i.canonicalString()}}function _l(i){return ft.fromServerFormat(i.fieldPath)}function mR(i){return i instanceof Le?(function(t){if(t.op==="=="){if(pA(t.value))return{unaryFilter:{field:gl(t.field),op:"IS_NAN"}};if(mA(t.value))return{unaryFilter:{field:gl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pA(t.value))return{unaryFilter:{field:gl(t.field),op:"IS_NOT_NAN"}};if(mA(t.value))return{unaryFilter:{field:gl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gl(t.field),op:Uk(t.op),value:t.value}}})(i):i instanceof Xe?(function(t){const n=t.getFilters().map((a=>mR(a)));return n.length===1?n[0]:{compositeFilter:{op:Bk(t.op),filters:n}}})(i):he(54877,{filter:i})}function zk(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Pi{constructor(e,t,n,a,l=ge.min(),c=ge.min(),f=wt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gR{constructor(e){this.yt=e}}function Fk(i,e){let t;if(e.document)t=uR(i.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=se.fromSegments(e.noDocument.path),a=io(e.noDocument.readTime);t=lt.newNoDocument(n,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return he(56709);{const n=se.fromSegments(e.unknownDocument.path),a=io(e.unknownDocument.version);t=lt.newUnknownDocument(n,a)}}return e.readTime&&t.setReadTime((function(a){const l=new Qe(a[0],a[1]);return ge.fromTimestamp(l)})(e.readTime)),t}function xA(i,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Zf(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(l,c){return{name:fh(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Fl(l,c.version.toTimestamp()),createTime:Fl(l,c.createTime.toTimestamp())}})(i.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:ro(e.version)};else{if(!e.isUnknownDocument())return he(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:ro(e.version)}}return n}function Zf(i){const e=i.toTimestamp();return[e.seconds,e.nanoseconds]}function ro(i){const e=i.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function io(i){const e=new Qe(i.seconds,i.nanoseconds);return ge.fromTimestamp(e)}function Ba(i,e){const t=(e.baseMutations||[]).map((l=>W_(i.yt,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const n=e.mutations.map((l=>W_(i.yt,l))),a=Qe.fromMillis(e.localWriteTimeMs);return new nv(e.batchId,a,t,n)}function Vc(i){const e=io(i.readTime),t=i.lastLimboFreeSnapshotVersion!==void 0?io(i.lastLimboFreeSnapshotVersion):ge.min();let n;return n=(function(l){return l.documents!==void 0})(i.query)?(function(l){const c=l.documents.length;return me(c===1,1966,{count:c}),Rn(tu(oR(l.documents[0])))})(i.query):(function(l){return Rn(dR(l))})(i.query),new Pi(n,i.targetId,"TargetPurposeListen",i.lastListenSequenceNumber,e,t,wt.fromBase64String(i.resumeToken))}function _R(i,e){const t=ro(e.snapshotVersion),n=ro(e.lastLimboFreeSnapshotVersion);let a;a=Wf(e.target)?cR(i.yt,e.target):hR(i.yt,e.target).ft;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:eo(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:a}}function ov(i){const e=dR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Jf(e,e.limit,"L"):e}function d_(i,e){return new iv(e.largestBatchId,W_(i.yt,e.overlayMutation))}function VA(i,e){const t=e.path.lastSegment();return[i,yn(e.path.popLast()),t]}function OA(i,e,t,n){return{indexId:i,uid:e,sequenceNumber:t,readTime:ro(n.readTime),documentKey:yn(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class qk{getBundleMetadata(e,t){return kA(e).get(t).next((n=>{if(n)return(function(l){return{id:l.bundleId,createTime:io(l.createTime),version:l.version}})(n)}))}saveBundleMetadata(e,t){return kA(e).put((function(a){return{bundleId:a.id,createTime:ro(Nt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return MA(e).get(t).next((n=>{if(n)return(function(l){return{name:l.name,query:ov(l.bundledQuery),readTime:io(l.readTime)}})(n)}))}saveNamedQuery(e,t){return MA(e).put((function(a){return{name:a.name,readTime:ro(Nt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function kA(i){return Gt(i,Am)}function MA(i){return Gt(i,bm)}/**
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
 */class xm{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new xm(e,n)}getOverlay(e,t){return wc(e).get(VA(this.userId,t)).next((n=>n?d_(this.serializer,n):null))}getOverlays(e,t){const n=$r();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){const a=[];return n.forEach(((l,c)=>{const f=new iv(t,c);a.push(this.St(e,f))})),U.waitFor(a)}removeOverlaysForBatchId(e,t,n){const a=new Set;t.forEach((c=>a.add(yn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,n],[this.userId,c,n+1],!1,!0);l.push(wc(e).Z(U_,f))})),U.waitFor(l)}getOverlaysForCollection(e,t,n){const a=$r(),l=yn(t),c=IDBKeyRange.bound([this.userId,l,n],[this.userId,l,Number.POSITIVE_INFINITY],!0);return wc(e).J(U_,c).next((f=>{for(const m of f){const g=d_(this.serializer,m);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,n,a){const l=$r();let c;const f=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wc(e).ee({index:gS,range:f},((m,g,y)=>{const T=d_(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):y.done()})).next((()=>l))}St(e,t){return wc(e).put((function(a,l,c){const[f,m,g]=VA(l,c.mutation.key);return{userId:l,collectionPath:m,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:mh(a.yt,c.mutation)}})(this.serializer,this.userId,t))}}function wc(i){return Gt(i,Sm)}/**
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
 */class jk{bt(e){return Gt(e,Qy)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?wt.fromUint8Array(n):wt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class za{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ht(e.integerValue));else if("doubleValue"in e){const n=ht(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),sh(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=ki(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Mi(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?CS(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Dm(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):he(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const a of Object.keys(n))this.Ot(a,t),this.Ct(n[a],t)}kt(e,t){var c,f;const n=e.fields||{};this.Ft(t,53);const a=Ml,l=((f=(c=n[a].arrayValue)==null?void 0:c.values)==null?void 0:f.length)||0;this.Ft(t,15),t.Mt(ht(l)),this.Ot(a,t),this.Ct(n[a],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const a of n)this.Ct(a,t)}Lt(e,t){this.Ft(t,37),se.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}za.Kt=new za;/**
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
 */const cl=255;function Hk(i){if(i===0)return 8;let e=0;return i>>4||(e+=4,i<<=4),i>>6||(e+=2,i<<=2),i>>7||(e+=1),e}function LA(i){const e=64-(function(n){let a=0;for(let l=0;l<8;++l){const c=Hk(255&n[l]);if(a+=c,c!==8)break}return a})(i);return Math.ceil(e/8)}class Gk{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const a=t.codePointAt(0);this.Gt(240|a>>>18),this.Gt(128|63&a>>>12),this.Gt(128|63&a>>>6),this.Gt(128|63&a)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Ht()}Xt(e){const t=this.en(e),n=LA(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=255&t[a]}nn(e){const t=this.en(e),n=LA(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}rn(){this.sn(cl),this.sn(255)}_n(){this.an(cl),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let a=1;a<t.length;++a)t[a]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===cl?(this.sn(cl),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===cl?(this.an(cl),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const a=new Uint8Array(n);a.set(this.buffer),this.buffer=a}}class Kk{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class Qk{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ic{constructor(){this.cn=new Gk,this.ln=new Kk(this.cn),this.hn=new Qk(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Fa{constructor(e,t,n,a){this.Tn=e,this.In=t,this.En=n,this.dn=a}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Fa(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:kf(this.En),directionalValue:kf(this.dn),orderedDocumentKey:kf(t),documentKey:n.path.toArray()}}Vn(e,t,n){const a=this.Rn(e,t,n);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function vs(i,e){let t=i.Tn-e.Tn;return t!==0?t:(t=UA(i.En,e.En),t!==0?t:(t=UA(i.dn,e.dn),t!==0?t:se.comparator(i.In,e.In)))}function UA(i,e){for(let t=0;t<i.length&&t<e.length;++t){const n=i[t]-e[t];if(n!==0)return n}return i.length-e.length}function kf(i){return O0()?(function(t){let n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n})(i):i}function BA(i){return typeof i!="string"?i:(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(i)}class zA{constructor(e){this.mn=new Je(((t,n)=>ft.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(me(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=k_(e);if(t!==void 0&&!this.wn(t))return!1;const n=Ma(e);let a=new Set,l=0,c=0;for(;l<n.length&&this.wn(n[l]);++l)a=a.add(n[l].fieldPath.canonicalString());if(l===n.length)return!0;if(this.mn.size>0){const f=this.mn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const m=n[l];if(!this.Sn(f,m)||!this.bn(this.fn[c++],m))return!1}++l}for(;l<n.length;++l){const f=n[l];if(c>=this.fn.length||!this.bn(this.fn[c++],f))return!1}return!0}Dn(){if(this.pn)return null;let e=new Je(ft.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Rf(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Rf(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Rf(n.field,n.dir==="asc"?0:1)));return new Kf(Kf.UNKNOWN_ID,this.collectionId,t,ih.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function yR(i){var t,n;if(me(i instanceof Le||i instanceof Xe,20012),i instanceof Le){if(i instanceof LS){const a=((n=(t=i.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((l=>Le.create(i.field,"==",l))))||[];return Xe.create(a,"or")}return i}const e=i.filters.map((a=>yR(a)));return Xe.create(e,i.op)}function Yk(i){if(i.getFilters().length===0)return[];const e=Z_(yR(i));return me(vR(e),7391),X_(e)||J_(e)?[e]:e.getFilters()}function X_(i){return i instanceof Le}function J_(i){return i instanceof Xe&&Xy(i)}function vR(i){return X_(i)||J_(i)||(function(t){if(t instanceof Xe&&j_(t)){for(const n of t.getFilters())if(!X_(n)&&!J_(n))return!1;return!0}return!1})(i)}function Z_(i){if(me(i instanceof Le||i instanceof Xe,34018),i instanceof Le)return i;if(i.filters.length===1)return Z_(i.filters[0]);const e=i.filters.map((n=>Z_(n)));let t=Xe.create(e,i.op);return t=em(t),vR(t)?t:(me(t instanceof Xe,64498),me(Ul(t),40251),me(t.filters.length>1,57927),t.filters.reduce(((n,a)=>lv(n,a))))}function lv(i,e){let t;return me(i instanceof Le||i instanceof Xe,38388),me(e instanceof Le||e instanceof Xe,25473),t=i instanceof Le?e instanceof Le?(function(a,l){return Xe.create([a,l],"and")})(i,e):FA(i,e):e instanceof Le?FA(e,i):(function(a,l){if(me(a.filters.length>0&&l.filters.length>0,48005),Ul(a)&&Ul(l))return OS(a,l.getFilters());const c=j_(a)?a:l,f=j_(a)?l:a,m=c.filters.map((g=>lv(g,f)));return Xe.create(m,"or")})(i,e),em(t)}function FA(i,e){if(Ul(e))return OS(e,i.getFilters());{const t=e.filters.map((n=>lv(i,n)));return Xe.create(t,"or")}}function em(i){if(me(i instanceof Le||i instanceof Xe,11850),i instanceof Le)return i;const e=i.getFilters();if(e.length===1)return em(e[0]);if(xS(i))return i;const t=e.map((a=>em(a))),n=[];return t.forEach((a=>{a instanceof Le?n.push(a):a instanceof Xe&&(a.op===i.op?n.push(...a.filters):n.push(a))})),n.length===1?n[0]:Xe.create(n,i.op)}/**
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
 */class $k{constructor(){this.Cn=new uv}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve($n.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve($n.min())}updateCollectionGroup(e,t,n){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class uv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t]||new Je(Me.comparator),l=!a.has(n);return this.index[t]=a.add(n),l}has(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t];return a&&a.has(n)}getEntries(e){return(this.index[e]||new Je(Me.comparator)).toArray()}}/**
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
 */const qA="IndexedDbIndexManager",yf=new Uint8Array(0);class Wk{constructor(e,t){this.databaseId=t,this.vn=new uv,this.Fn=new zi((n=>eo(n)),((n,a)=>Ph(n,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const l={collectionId:n,parent:yn(a)};return jA(e).put(l)}return U.resolve()}getCollectionParents(e,t){const n=[],a=IDBKeyRange.bound([t,""],[tS(t),""],!1,!0);return jA(e).J(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;n.push(Yr(c.parent))}return n}))}addFieldIndex(e,t){const n=Ac(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((m=>[m.fieldPath.canonicalString(),m.kind]))}})(t);delete a.indexId;const l=n.add(a);if(t.indexState){const c=dl(e);return l.next((f=>{c.put(OA(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const n=Ac(e),a=dl(e),l=hl(e);return n.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ac(e),n=hl(e),a=dl(e);return t.Z().next((()=>n.Z())).next((()=>a.Z()))}createTargetIndexes(e,t){return U.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((a=>{if(a===0||a===1){const l=new zA(n).Dn();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const n=hl(e);let a=!0;const l=new Map;return U.forEach(this.Mn(t),(c=>this.xn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ce();const f=[];return U.forEach(l,((m,g)=>{te(qA,`Using index ${(function(ae){return`id=${ae.indexId}|cg=${ae.collectionGroup}|f=${ae.fields.map((Ie=>`${Ie.fieldPath}:${Ie.kind}`)).join(",")}`})(m)} to execute ${eo(t)}`);const y=(function(ae,Ie){const pe=k_(Ie);if(pe===void 0)return null;for(const be of Xf(ae,pe.fieldPath))switch(be.op){case"array-contains-any":return be.value.arrayValue.values||[];case"array-contains":return[be.value]}return null})(g,m),T=(function(ae,Ie){const pe=new Map;for(const be of Ma(Ie))for(const P of Xf(ae,be.fieldPath))switch(P.op){case"==":case"in":pe.set(be.fieldPath.canonicalString(),P.value);break;case"not-in":case"!=":return pe.set(be.fieldPath.canonicalString(),P.value),Array.from(pe.values())}return null})(g,m),A=(function(ae,Ie){const pe=[];let be=!0;for(const P of Ma(Ie)){const b=P.kind===0?EA(ae,P.fieldPath,ae.startAt):TA(ae,P.fieldPath,ae.startAt);pe.push(b.value),be&&(be=b.inclusive)}return new zs(pe,be)})(g,m),x=(function(ae,Ie){const pe=[];let be=!0;for(const P of Ma(Ie)){const b=P.kind===0?TA(ae,P.fieldPath,ae.endAt):EA(ae,P.fieldPath,ae.endAt);pe.push(b.value),be&&(be=b.inclusive)}return new zs(pe,be)})(g,m),G=this.On(m,g,A),X=this.On(m,g,x),K=this.Nn(m,g,T),de=this.Bn(m.indexId,y,G,A.inclusive,X,x.inclusive,K);return U.forEach(de,(ce=>n.Y(ce,t.limit).next((ae=>{ae.forEach((Ie=>{const pe=se.fromSegments(Ie.documentKey);c.has(pe)||(c=c.add(pe),f.push(pe))}))}))))})).next((()=>f))}return U.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=Yk(Xe.create(e.filters,"and")).map((n=>G_(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,a,l,c,f){const m=(t!=null?t.length:1)*Math.max(n.length,l.length),g=m/(t!=null?t.length:1),y=[];for(let T=0;T<m;++T){const A=t?this.Ln(t[T/g]):yf,x=this.kn(e,A,n[T%g],a),G=this.qn(e,A,l[T%g],c),X=f.map((K=>this.kn(e,A,K,!0)));y.push(...this.createRange(x,G,X))}return y}kn(e,t,n,a){const l=new Fa(e,se.empty(),t,n);return a?l:l.An()}qn(e,t,n,a){const l=new Fa(e,se.empty(),t,n);return a?l.An():l}xn(e,t){const n=new zA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)n.yn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let n=2;const a=this.Mn(t);return U.forEach(a,(l=>this.xn(e,l).next((c=>{c?n!==0&&c.fields.length<(function(m){let g=new Je(ft.comparator),y=!1;for(const T of m.filters)for(const A of T.getFlattenedFilters())A.field.isKeyField()||(A.op==="array-contains"||A.op==="array-contains-any"?y=!0:g=g.add(A.field));for(const T of m.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(y?1:0)})(l)&&(n=1):n=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&n===2?1:n))}Qn(e,t){const n=new Ic;for(const a of Ma(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=n.Pn(a.kind);za.Kt.Dt(l,c)}return n.un()}Ln(e){const t=new Ic;return za.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Ic;return za.Kt.Dt(Za(this.databaseId,t),n.Pn((function(l){const c=Ma(l);return c.length===0?0:c[c.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let a=[];a.push(new Ic);let l=0;for(const c of Ma(e)){const f=n[l++];for(const m of a)if(this.Un(t,c.fieldPath)&&hh(f))a=this.Kn(a,c,f);else{const g=m.Pn(c.kind);za.Kt.Dt(f,g)}}return this.Wn(a)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const a=[...e],l=[];for(const c of n.arrayValue.values||[])for(const f of a){const m=new Ic;m.seed(f.un()),za.Kt.Dt(c,m.Pn(t.kind)),l.push(m)}return l}Un(e,t){return!!e.filters.find((n=>n instanceof Le&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Ac(e),a=dl(e);return(t?n.J(L_,IDBKeyRange.bound(t,t)):n.J()).next((l=>{const c=[];return U.forEach(l,(f=>a.get([f.indexId,this.uid]).next((m=>{c.push((function(y,T){const A=T?new ih(T.sequenceNumber,new $n(io(T.readTime),new se(Yr(T.documentKey)),T.largestBatchId)):ih.empty(),x=y.fields.map((([G,X])=>new Rf(ft.fromServerFormat(G),X)));return new Kf(y.indexId,y.collectionGroup,x,A)})(f,m))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,a)=>{const l=n.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(n.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const a=Ac(e),l=dl(e);return this.Gn(e).next((c=>a.J(L_,IDBKeyRange.bound(t,t)).next((f=>U.forEach(f,(m=>l.put(OA(m.indexId,this.uid,c,n))))))))}updateIndexEntries(e,t){const n=new Map;return U.forEach(t,((a,l)=>{const c=n.get(a.collectionGroup);return(c?U.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(n.set(a.collectionGroup,f),U.forEach(f,(m=>this.zn(e,a,m).next((g=>{const y=this.jn(l,m);return g.isEqual(y)?U.resolve():this.Jn(e,l,m,g,y)})))))))}))}Hn(e,t,n,a){return hl(e).put(a.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,a){return hl(e).delete(a.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const a=hl(e);let l=new Je(vs);return a.ee({index:pS,range:IDBKeyRange.only([n.indexId,this.uid,kf(this.$n(n,t))])},((c,f)=>{l=l.add(new Fa(n.indexId,t,BA(f.arrayValue),BA(f.directionalValue)))})).next((()=>l))}jn(e,t){let n=new Je(vs);const a=this.Qn(t,e);if(a==null)return n;const l=k_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(hh(c))for(const f of c.arrayValue.values||[])n=n.add(new Fa(t.indexId,e.key,this.Ln(f),a))}else n=n.add(new Fa(t.indexId,e.key,yf,a));return n}Jn(e,t,n,a,l){te(qA,"Updating index entries for document '%s'",t.key);const c=[];return(function(m,g,y,T,A){const x=m.getIterator(),G=g.getIterator();let X=ul(x),K=ul(G);for(;X||K;){let de=!1,ce=!1;if(X&&K){const ae=y(X,K);ae<0?ce=!0:ae>0&&(de=!0)}else X!=null?ce=!0:de=!0;de?(T(K),K=ul(G)):ce?(A(X),X=ul(x)):(X=ul(x),K=ul(G))}})(a,l,vs,(f=>{c.push(this.Hn(e,t,n,f))}),(f=>{c.push(this.Yn(e,t,n,f))})),U.waitFor(c)}Gn(e){let t=1;return dl(e).ee({index:mS,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((c,f)=>vs(c,f))).filter(((c,f,m)=>!f||vs(c,m[f-1])!==0));const a=[];a.push(e);for(const c of n){const f=vs(c,e),m=vs(c,t);if(f===0)a[0]=e.An();else if(f>0&&m<0)a.push(c),a.push(c.An());else if(m>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Zn(a[c],a[c+1]))return[];const f=a[c].Vn(this.uid,yf,se.empty()),m=a[c+1].Vn(this.uid,yf,se.empty());l.push(IDBKeyRange.bound(f,m))}return l}Zn(e,t){return vs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(HA)}getMinOffset(e,t){return U.mapArray(this.Mn(t),(n=>this.xn(e,n).next((a=>a||he(44426))))).next(HA)}}function jA(i){return Gt(i,lh)}function hl(i){return Gt(i,Gc)}function Ac(i){return Gt(i,Ky)}function dl(i){return Gt(i,Hc)}function HA(i){me(i.length!==0,28825);let e=i[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<i.length;n++){const a=i[n].indexState.offset;jy(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new $n(e.readTime,e.documentKey,t)}/**
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
 */const GA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ER=41943040;class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function TR(i,e,t){const n=i.store(yr),a=i.store(xl),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const m=n.ee({range:c},((y,T,A)=>(f++,A.delete())));l.push(m.next((()=>{me(f===1,47070,{batchId:t.batchId})})));const g=[];for(const y of t.mutations){const T=hS(e,y.key.path,t.batchId);l.push(a.delete(T)),g.push(y.key)}return U.waitFor(l).next((()=>g))}function tm(i){if(!i)return 0;let e;if(i.document)e=i.document;else if(i.unknownDocument)e=i.unknownDocument;else{if(!i.noDocument)throw he(14731);e=i.noDocument}return JSON.stringify(e).length}/**
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
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(ER,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);class Vm{constructor(e,t,n,a){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=a,this.Xn={}}static wt(e,t,n,a){me(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Vm(l,t,n,a)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Es(e).ee({index:Ha,range:n},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,n,a){const l=yl(e),c=Es(e);return c.add({}).next((f=>{me(typeof f=="number",49019);const m=new nv(f,t,n,a),g=(function(x,G,X){const K=X.baseMutations.map((ce=>mh(x.yt,ce))),de=X.mutations.map((ce=>mh(x.yt,ce)));return{userId:G,batchId:X.batchId,localWriteTimeMs:X.localWriteTime.toMillis(),baseMutations:K,mutations:de}})(this.serializer,this.userId,m),y=[];let T=new Je(((A,x)=>Re(A.canonicalString(),x.canonicalString())));for(const A of a){const x=hS(this.userId,A.key.path,f);T=T.add(A.key.path.popLast()),y.push(c.put(g)),y.push(l.put(x,NO))}return T.forEach((A=>{y.push(this.indexManager.addToCollectionParentIndex(e,A))})),e.addOnCommittedListener((()=>{this.Xn[f]=m.keys()})),U.waitFor(y).next((()=>m))}))}lookupMutationBatch(e,t){return Es(e).get(t).next((n=>n?(me(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Ba(this.serializer,n)):null))}er(e,t){return this.Xn[t]?U.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const a=n.keys();return this.Xn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=IDBKeyRange.lowerBound([this.userId,n]);let l=null;return Es(e).ee({index:Ha,range:a},((c,f,m)=>{f.userId===this.userId&&(me(f.batchId>=n,47524,{tr:n}),l=Ba(this.serializer,f)),m.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ns;return Es(e).ee({index:Ha,range:t,reverse:!0},((a,l,c)=>{n=l.batchId,c.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ns],[this.userId,Number.POSITIVE_INFINITY]);return Es(e).J(Ha,t).next((n=>n.map((a=>Ba(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Cf(this.userId,t.path),a=IDBKeyRange.lowerBound(n),l=[];return yl(e).ee({range:a},((c,f,m)=>{const[g,y,T]=c,A=Yr(y);if(g===this.userId&&t.path.isEqual(A))return Es(e).get(T).next((x=>{if(!x)throw he(61480,{nr:c,batchId:T});me(x.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:x.userId,batchId:T}),l.push(Ba(this.serializer,x))}));m.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Je(Re);const a=[];return t.forEach((l=>{const c=Cf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),m=yl(e).ee({range:f},((g,y,T)=>{const[A,x,G]=g,X=Yr(x);A===this.userId&&l.path.isEqual(X)?n=n.add(G):T.done()}));a.push(m)})),U.waitFor(a).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1,l=Cf(this.userId,n),c=IDBKeyRange.lowerBound(l);let f=new Je(Re);return yl(e).ee({range:c},((m,g,y)=>{const[T,A,x]=m,G=Yr(A);T===this.userId&&n.isPrefixOf(G)?G.length===a&&(f=f.add(x)):y.done()})).next((()=>this.rr(e,f)))}rr(e,t){const n=[],a=[];return t.forEach((l=>{a.push(Es(e).get(l).next((c=>{if(c===null)throw he(35274,{batchId:l});me(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),n.push(Ba(this.serializer,c))})))})),U.waitFor(a).next((()=>n))}removeMutationBatch(e,t){return TR(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),U.forEach(n,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return U.resolve();const n=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return yl(e).ee({range:n},((l,c,f)=>{if(l[0]===this.userId){const m=Yr(l[1]);a.push(m)}else f.done()})).next((()=>{me(a.length===0,56720,{sr:a.map((l=>l.canonicalString()))})}))}))}containsKey(e,t){return wR(e,this.userId,t)}_r(e){return IR(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ns,lastStreamToken:""}))}}function wR(i,e,t){const n=Cf(e,t.path),a=n[1],l=IDBKeyRange.lowerBound(n);let c=!1;return yl(i).ee({range:l,X:!0},((f,m,g)=>{const[y,T,A]=f;y===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Es(i){return Gt(i,yr)}function yl(i){return Gt(i,xl)}function IR(i){return Gt(i,ah)}/**
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
 */class so{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new so(0)}static cr(){return new so(-1)}}/**
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
 */class Xk{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new so(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ge.fromTimestamp(new Qe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((a=>(a.highestListenSequenceNumber=t,n&&(a.lastRemoteSnapshotVersion=n.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.hr(e,a))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>fl(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(me(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let a=0;const l=[];return fl(e).ee(((c,f)=>{const m=Vc(f);m.sequenceNumber<=t&&n.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))})).next((()=>U.waitFor(l))).next((()=>a))}forEachTarget(e,t){return fl(e).ee(((n,a)=>{const l=Vc(a);t(l)}))}lr(e){return KA(e).get($f).next((t=>(me(t!==null,2888),t)))}hr(e,t){return KA(e).put($f,t)}Pr(e,t){return fl(e).put(_R(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=eo(t),a=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let l=null;return fl(e).ee({range:a,index:fS},((c,f,m)=>{const g=Vc(f);Ph(t,g.target)&&(l=g,m.done())})).next((()=>l))}addMatchingKeys(e,t,n){const a=[],l=Is(e);return t.forEach((c=>{const f=yn(c.path);a.push(l.put({targetId:n,path:f})),a.push(this.referenceDelegate.addReference(e,n,c))})),U.waitFor(a)}removeMatchingKeys(e,t,n){const a=Is(e);return U.forEach(t,(l=>{const c=yn(l.path);return U.waitFor([a.delete([n,c]),this.referenceDelegate.removeReference(e,n,l)])}))}removeMatchingKeysForTargetId(e,t){const n=Is(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(a)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),a=Is(e);let l=Ce();return a.ee({range:n,X:!0},((c,f,m)=>{const g=Yr(c[1]),y=new se(g);l=l.add(y)})).next((()=>l))}containsKey(e,t){const n=yn(t.path),a=IDBKeyRange.bound([n],[tS(n)],!1,!0);let l=0;return Is(e).ee({index:Gy,X:!0,range:a},(([c,f],m,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}At(e,t){return fl(e).get(t).next((n=>n?Vc(n):null))}}function fl(i){return Gt(i,Vl)}function KA(i){return Gt(i,$a)}function Is(i){return Gt(i,Ol)}/**
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
 */const QA="LruGarbageCollector",Jk=1048576;function YA([i,e],[t,n]){const a=Re(i,t);return a===0?Re(e,n):a}class Zk{constructor(e){this.Ir=e,this.buffer=new Je(YA),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();YA(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(QA,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qs(t)?te(QA,"Ignoring IndexedDB error during garbage collection: ",t):await Ks(t)}await this.Vr(3e5)}))}}class eM{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return U.resolve(Vn.ce);const n=new Zk(t);return this.mr.forEachTarget(e,(a=>n.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>n.Ar(a))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(GA)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),GA):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,a,l,c,f,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(n=T,f=Date.now(),this.removeTargets(e,n,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,n)))).next((T=>(g=Date.now(),ml()<=ke.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function bR(i,e){return new eM(i,e)}/**
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
 */class tM{constructor(e,t){this.db=e,this.garbageCollector=bR(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,a)=>t(a)))}addReference(e,t,n){return vf(e,n)}removeReference(e,t,n){return vf(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return vf(e,t)}br(e,t){return(function(a,l){let c=!1;return IR(a).te((f=>wR(a,f,l).next((m=>(m&&(c=!0),U.resolve(!m)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,((c,f)=>{if(f<=t){const m=this.br(e,c).next((g=>{if(!g)return l++,n.getEntry(e,c).next((()=>(n.removeEntry(c,ge.min()),Is(e).delete((function(T){return[0,yn(T.path)]})(c)))))}));a.push(m)}})).next((()=>U.waitFor(a))).next((()=>n.apply(e))).next((()=>l))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return vf(e,t)}Sr(e,t){const n=Is(e);let a,l=Vn.ce;return n.ee({index:Gy},(([c,f],{path:m,sequenceNumber:g})=>{c===0?(l!==Vn.ce&&t(new se(Yr(a)),l),l=g,a=m):l=Vn.ce})).next((()=>{l!==Vn.ce&&t(new se(Yr(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function vf(i,e){return Is(i).put((function(n,a){return{targetId:0,path:yn(n.path),sequenceNumber:a}})(e,i.currentSequenceNumber))}/**
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
 */class SR{constructor(){this.changes=new zi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?U.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Oa(e).put(n)}removeEntry(e,t,n){return Oa(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],Zf(c),f[f.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=lt.newInvalidDocument(t);return Oa(e).ee({index:Df,range:IDBKeyRange.only(bc(t))},((a,l)=>{n=this.Cr(t,l)})).next((()=>n))}vr(e,t){let n={size:0,document:lt.newInvalidDocument(t)};return Oa(e).ee({index:Df,range:IDBKeyRange.only(bc(t))},((a,l)=>{n={document:this.Cr(t,l),size:tm(l)}})).next((()=>n))}getEntries(e,t){let n=kn();return this.Fr(e,t,((a,l)=>{const c=this.Cr(a,l);n=n.insert(a,c)})).next((()=>n))}Mr(e,t){let n=kn(),a=new ot(se.comparator);return this.Fr(e,t,((l,c)=>{const f=this.Cr(l,c);n=n.insert(l,f),a=a.insert(l,tm(c))})).next((()=>({documents:n,Or:a})))}Fr(e,t,n){if(t.isEmpty())return U.resolve();let a=new Je(XA);t.forEach((m=>a=a.add(m)));const l=IDBKeyRange.bound(bc(a.first()),bc(a.last())),c=a.getIterator();let f=c.getNext();return Oa(e).ee({index:Df,range:l},((m,g,y)=>{const T=se.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&XA(f,T)<0;)n(f,null),f=c.getNext();f&&f.isEqual(T)&&(n(f,g),f=c.hasNext()?c.getNext():null),f?y.j(bc(f)):y.done()})).next((()=>{for(;f;)n(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,n,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),Zf(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],m=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oa(e).J(IDBKeyRange.bound(f,m,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let y=kn();for(const T of g){const A=this.Cr(se.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);A.isFoundDocument()&&(Vh(t,A)||a.has(A.key))&&(y=y.insert(A.key,A))}return y}))}getAllFromCollectionGroup(e,t,n,a){let l=kn();const c=WA(t,n),f=WA(t,$n.max());return Oa(e).ee({index:dS,range:IDBKeyRange.bound(c,f,!0)},((m,g,y)=>{const T=this.Cr(se.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&y.done()})).next((()=>l))}newChangeBuffer(e){return new rM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return $A(e).get(M_).next((t=>(me(!!t,20021),t)))}Dr(e,t){return $A(e).put(M_,t)}Cr(e,t){if(t){const n=Fk(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ge.min())))return n}return lt.newInvalidDocument(e)}}function RR(i){return new nM(i)}class rM extends SR{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new zi((n=>n.toString()),((n,a)=>n.isEqual(a)))}applyChanges(e){const t=[];let n=0,a=new Je(((l,c)=>Re(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.Br.get(l);if(t.push(this.Nr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const m=xA(this.Nr.serializer,c);a=a.add(l.path.popLast());const g=tm(m);n+=g-f.size,t.push(this.Nr.addEntry(e,l,m))}else if(n-=f.size,this.trackRemovals){const m=xA(this.Nr.serializer,c.convertToNoDocument(ge.min()));t.push(this.Nr.addEntry(e,l,m))}})),a.forEach((l=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.Nr.updateMetadata(e,n)),U.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:a})=>(a.forEach(((l,c)=>{this.Br.set(l,{size:c,readTime:n.get(l).readTime})})),n)))}}function $A(i){return Gt(i,oh)}function Oa(i){return Gt(i,Yf)}function bc(i){const e=i.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function WA(i,e){const t=e.documentKey.path.toArray();return[i,Zf(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function XA(i,e){const t=i.path.toArray(),n=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<n.length-2;++l)if(a=Re(t[l],n[l]),a)return a;return a=Re(t.length,n.length),a||(a=Re(t[t.length-2],n[n.length-2]),a||Re(t[t.length-1],n[n.length-1]))}/**
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
 */class CR{constructor(e,t,n,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(n=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(n!==null&&Yc(n.mutation,a,On.empty(),Qe.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,Ce()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=Ce()){const a=$r();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,n).next((l=>{let c=Pc();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const n=$r();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ce())))}populateOverlays(e,t,n){const a=[];return n.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,n,a){let l=kn();const c=Qc(),f=(function(){return Qc()})();return t.forEach(((m,g)=>{const y=n.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Fi)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Yc(y.mutation,g,y.mutation.getFieldMask(),Qe.now())):c.set(g.key,On.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>f.set(g,new iM(y,c.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const n=Qc();let a=new ot(((c,f)=>c-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let y=n.get(m)||On.empty();y=f.applyToLocalView(g,y),n.set(m,y);const T=(a.get(f.batchId)||Ce()).add(m);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,y=m.value,T=HS();y.forEach((A=>{if(!l.has(A)){const x=XS(t.get(A),n.get(A));x!==null&&T.set(A,x),l=l.add(A)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return U.waitFor(c)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,a){return(function(c){return se.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,a):this.getDocumentsMatchingCollectionQuery(e,t,n,a)}getNextDocuments(e,t,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,a-l.size):U.resolve($r());let f=Pl,m=l;return c.next((g=>U.forEach(g,((y,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(y)?U.resolve():this.remoteDocumentCache.getEntry(e,y).next((A=>{m=m.insert(y,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,Ce()))).next((y=>({batchId:f,changes:jS(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next((n=>{let a=Pc();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,a){const l=t.collectionGroup;let c=Pc();return this.indexManager.getCollectionParents(e,l).next((f=>U.forEach(f,(m=>{const g=(function(T,A){return new Bi(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,n,a).next((y=>{y.forEach(((T,A)=>{c=c.insert(T,A)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,n,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,l,a)))).next((c=>{l.forEach(((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,lt.newInvalidDocument(y)))}));let f=Pc();return c.forEach(((m,g)=>{const y=l.get(m);y!==void 0&&Yc(y.mutation,g,On.empty(),Qe.now()),Vh(t,g)&&(f=f.insert(m,g))})),f}))}}/**
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
 */class sM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return U.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Nt(a.createTime)}})(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:ov(a.bundledQuery),readTime:Nt(a.readTime)}})(t)),U.resolve()}}/**
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
 */class aM{constructor(){this.overlays=new ot(se.comparator),this.qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$r();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((a,l)=>{this.St(e,t,l)})),U.resolve()}removeOverlaysForBatchId(e,t,n){const a=this.qr.get(n);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(n)),U.resolve()}getOverlaysForCollection(e,t,n){const a=$r(),l=t.length+1,c=new se(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>n&&a.set(m.getKey(),m)}return U.resolve(a)}getOverlaysForCollectionGroup(e,t,n,a){let l=new ot(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>n){let y=l.get(g.largestBatchId);y===null&&(y=$r(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=$r(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,y)=>f.set(g,y))),!(f.size()>=a)););return U.resolve(f)}St(e,t,n){const a=this.overlays.get(n.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(n.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new iv(t,n));let l=this.qr.get(t);l===void 0&&(l=Ce(),this.qr.set(t,l)),this.qr.set(t,l.add(n.key))}}/**
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
 */class oM{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class cv{constructor(){this.Qr=new Je(Jt.$r),this.Ur=new Je(Jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Jt(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Jt(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new se(new Me([])),n=new Jt(t,e),a=new Jt(t,e+1),l=[];return this.Ur.forEachInRange([n,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new se(new Me([])),n=new Jt(t,e),a=new Jt(t,e+1);let l=Ce();return this.Ur.forEachInRange([n,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Jt(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Jt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return se.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||se.comparator(e.key,t.key)}}/**
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
 */class lM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(Jt.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new nv(l,t,n,a);this.mutationQueue.push(c);for(const f of a)this.Zr=this.Zr.add(new Jt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return U.resolve(c)}lookupMutationBatch(e,t){return U.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=this.ei(n),l=a<0?0:a;return U.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Ns:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Jt(t,0),a=new Jt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([n,a],(c=>{const f=this.Xr(c.Yr);l.push(f)})),U.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Je(Re);return t.forEach((a=>{const l=new Jt(a,0),c=new Jt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(f=>{n=n.add(f.Yr)}))})),U.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1;let l=n;se.isDocumentKey(l)||(l=l.child(""));const c=new Jt(new se(l),0);let f=new Je(Re);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!n.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Yr)),!0)}),c),U.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((n=>{const a=this.Xr(n);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){me(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return U.forEach(t.mutations,(a=>{const l=new Jt(a.key,t.batchId);return n=n.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Jt(t,0),a=this.Zr.firstAfterOrEqual(n);return U.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uM{constructor(e){this.ri=e,this.docs=(function(){return new ot(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,a=this.docs.get(n),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return U.resolve(n?n.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let n=kn();return t.forEach((a=>{const l=this.docs.get(a);n=n.insert(a,l?l.document.mutableCopy():lt.newInvalidDocument(a))})),U.resolve(n)}getDocumentsMatchingQuery(e,t,n,a){let l=kn();const c=t.path,f=new se(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||jy(aS(y),n)<=0||(a.has(y.key)||Vh(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return U.resolve(l)}getAllFromCollectionGroup(e,t,n,a){he(9500)}ii(e,t){return U.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new cM(this)}getSize(e){return U.resolve(this.size)}}class cM extends SR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(n)})),U.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class hM{constructor(e){this.persistence=e,this.si=new zi((t=>eo(t)),Ph),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.oi=0,this._i=new cv,this.targetCount=0,this.ai=so.ur()}forEachTarget(e,t){return this.si.forEach(((n,a)=>t(a))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),U.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new so(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Pr(t),U.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,n){let a=0;const l=[];return this.si.forEach(((c,f)=>{f.sequenceNumber<=t&&n.get(f.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),U.waitFor(l).next((()=>a))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return U.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),U.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),U.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return U.resolve(n)}containsKey(e,t){return U.resolve(this._i.containsKey(t))}}/**
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
 */class hv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Vn(0),this.li=!1,this.li=!0,this.hi=new oM,this.referenceDelegate=e(this),this.Pi=new hM(this),this.indexManager=new $k,this.remoteDocumentCache=(function(a){return new uM(a)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new gR(t),this.Ii=new sM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new lM(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){te("MemoryPersistence","Starting transaction:",e);const a=new dM(this.ci.next());return this.referenceDelegate.Ei(),n(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return U.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class dM extends lS{constructor(e){super(),this.currentSequenceNumber=e}}class Om{constructor(e){this.persistence=e,this.Ri=new cv,this.Vi=null}static mi(e){return new Om(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),U.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,(n=>{const a=se.fromPath(n);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ge.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return U.or([()=>U.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class nm{constructor(e,t){this.persistence=e,this.pi=new zi((n=>yn(n.path)),((n,a)=>n.isEqual(a))),this.garbageCollector=bR(this,t)}static mi(e,t){return new nm(e,t)}Ei(){}di(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return U.forEach(this.pi,((n,a)=>this.br(e,n,a).next((l=>l?U.resolve():t(a)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((f=>{f||(n++,l.removeEntry(c,ge.min()))})))).next((()=>l.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pf(e.data.value)),t}br(e,t,n){return U.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return U.resolve(a!==void 0&&a>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fM{constructor(e){this.serializer=e}k(e,t,n,a){const l=new Im("createOrUpgrade",t);n<1&&a>=1&&((function(m){m.createObjectStore(Nh)})(e),(function(m){m.createObjectStore(ah,{keyPath:DO}),m.createObjectStore(yr,{keyPath:lA,autoIncrement:!0}).createIndex(Ha,uA,{unique:!0}),m.createObjectStore(xl)})(e),JA(e),(function(m){m.createObjectStore(La)})(e));let c=U.resolve();return n<3&&a>=3&&(n!==0&&((function(m){m.deleteObjectStore(Ol),m.deleteObjectStore(Vl),m.deleteObjectStore($a)})(e),JA(e)),c=c.next((()=>(function(m){const g=m.store($a),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ge.min().toTimestamp(),targetCount:0};return g.put($f,y)})(l)))),n<4&&a>=4&&(n!==0&&(c=c.next((()=>(function(m,g){return g.store(yr).J().next((T=>{m.deleteObjectStore(yr),m.createObjectStore(yr,{keyPath:lA,autoIncrement:!0}).createIndex(Ha,uA,{unique:!0});const A=g.store(yr),x=T.map((G=>A.put(G)));return U.waitFor(x)}))})(e,l)))),c=c.next((()=>{(function(m){m.createObjectStore(kl,{keyPath:UO})})(e)}))),n<5&&a>=5&&(c=c.next((()=>this.yi(l)))),n<6&&a>=6&&(c=c.next((()=>((function(m){m.createObjectStore(oh)})(e),this.wi(l))))),n<7&&a>=7&&(c=c.next((()=>this.Si(l)))),n<8&&a>=8&&(c=c.next((()=>this.bi(e,l)))),n<9&&a>=9&&(c=c.next((()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&a>=10&&(c=c.next((()=>this.Di(l)))),n<11&&a>=11&&(c=c.next((()=>{(function(m){m.createObjectStore(Am,{keyPath:BO})})(e),(function(m){m.createObjectStore(bm,{keyPath:zO})})(e)}))),n<12&&a>=12&&(c=c.next((()=>{(function(m){const g=m.createObjectStore(Sm,{keyPath:QO});g.createIndex(U_,YO,{unique:!1}),g.createIndex(gS,$O,{unique:!1})})(e)}))),n<13&&a>=13&&(c=c.next((()=>(function(m){const g=m.createObjectStore(Yf,{keyPath:PO});g.createIndex(Df,xO),g.createIndex(dS,VO)})(e))).next((()=>this.Ci(e,l))).next((()=>e.deleteObjectStore(La)))),n<14&&a>=14&&(c=c.next((()=>this.Fi(e,l)))),n<15&&a>=15&&(c=c.next((()=>(function(m){m.createObjectStore(Ky,{keyPath:FO,autoIncrement:!0}).createIndex(L_,qO,{unique:!1}),m.createObjectStore(Hc,{keyPath:jO}).createIndex(mS,HO,{unique:!1}),m.createObjectStore(Gc,{keyPath:GO}).createIndex(pS,KO,{unique:!1})})(e)))),n<16&&a>=16&&(c=c.next((()=>{t.objectStore(Hc).clear()})).next((()=>{t.objectStore(Gc).clear()}))),n<17&&a>=17&&(c=c.next((()=>{(function(m){m.createObjectStore(Qy,{keyPath:WO})})(e)}))),n<18&&a>=18&&O0()&&(c=c.next((()=>{t.objectStore(Hc).clear()})).next((()=>{t.objectStore(Gc).clear()}))),c}wi(e){let t=0;return e.store(La).ee(((n,a)=>{t+=tm(a)})).next((()=>{const n={byteSize:t};return e.store(oh).put(M_,n)}))}yi(e){const t=e.store(ah),n=e.store(yr);return t.J().next((a=>U.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,Ns],[l.userId,l.lastAcknowledgedBatchId]);return n.J(Ha,c).next((f=>U.forEach(f,(m=>{me(m.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:m.batchId});const g=Ba(this.serializer,m);return TR(e,l.userId,g).next((()=>{}))}))))}))))}Si(e){const t=e.store(Ol),n=e.store(La);return e.store($a).get($f).next((a=>{const l=[];return n.ee(((c,f)=>{const m=new Me(c),g=(function(T){return[0,yn(T)]})(m);l.push(t.get(g).next((y=>y?U.resolve():(T=>t.put({targetId:0,path:yn(T),sequenceNumber:a.highestListenSequenceNumber}))(m))))})).next((()=>U.waitFor(l)))}))}bi(e,t){e.createObjectStore(lh,{keyPath:LO});const n=t.store(lh),a=new uv,l=c=>{if(a.add(c)){const f=c.lastSegment(),m=c.popLast();return n.put({collectionId:f,parent:yn(m)})}};return t.store(La).ee({X:!0},((c,f)=>{const m=new Me(c);return l(m.popLast())})).next((()=>t.store(xl).ee({X:!0},(([c,f,m],g)=>{const y=Yr(f);return l(y.popLast())}))))}Di(e){const t=e.store(Vl);return t.ee(((n,a)=>{const l=Vc(a),c=_R(this.serializer,l);return t.put(c)}))}Ci(e,t){const n=t.store(La),a=[];return n.ee(((l,c)=>{const f=t.store(Yf),m=(function(T){return T.document?new se(Me.fromString(T.document.name).popFirst(5)):T.noDocument?se.fromSegments(T.noDocument.path):T.unknownDocument?se.fromSegments(T.unknownDocument.path):he(36783)})(c).path.toArray(),g={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>U.waitFor(a)))}Fi(e,t){const n=t.store(yr),a=RR(this.serializer),l=new hv(Om.mi,this.serializer.yt);return n.J().next((c=>{const f=new Map;return c.forEach((m=>{let g=f.get(m.userId)??Ce();Ba(this.serializer,m).keys().forEach((y=>g=g.add(y))),f.set(m.userId,g)})),U.forEach(f,((m,g)=>{const y=new Zt(g),T=xm.wt(this.serializer,y),A=l.getIndexManager(y),x=Vm.wt(y,this.serializer,A,l.referenceDelegate);return new CR(a,x,T,A).recalculateAndSaveOverlaysForDocumentKeys(new B_(t,Vn.ce),m).next()}))}))}}function JA(i){i.createObjectStore(Ol,{keyPath:kO}).createIndex(Gy,MO,{unique:!0}),i.createObjectStore(Vl,{keyPath:"targetId"}).createIndex(fS,OO,{unique:!0}),i.createObjectStore($a)}const Ts="IndexedDbPersistence",f_=18e5,m_=5e3,p_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",DR="main";class dv{constructor(e,t,n,a,l,c,f,m,g,y,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=l,this.window=c,this.document=f,this.xi=g,this.Oi=y,this.Ni=T,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=A=>Promise.resolve(),!dv.v())throw new Z(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tM(this,a),this.$i=t+DR,this.serializer=new gR(m),this.Ui=new Wr(this.$i,this.Ni,new fM(this.serializer)),this.hi=new jk,this.Pi=new Xk(this.referenceDelegate,this.serializer),this.remoteDocumentCache=RR(this.serializer),this.Ii=new qk,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,y===!1&&Dt(Ts,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,p_);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Vn(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ef(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Qs(e))return te(Ts,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return te(Ts,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Sc(e).get(ll).next((t=>U.resolve(this.es(t))))}ts(e){return Ef(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,f_)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Gt(t,kl);return n.J().next((a=>{const l=this.ss(a,f_),c=a.filter((f=>l.indexOf(f)===-1));return U.forEach(c,(f=>n.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?U.resolve(!0):Sc(e).get(ll).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,m_)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,p_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ef(e).J().next((n=>this.ss(n,m_).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&te(Ts,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Nh,kl],(e=>{const t=new B_(e,Vn.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Ef(e).J().next((t=>this.ss(t,f_).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Vm.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wk(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return xm.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){te(Ts,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(m){return m===18?ZO:m===17?ES:m===16?JO:m===15?Yy:m===14?vS:m===13?yS:m===12?XO:m===11?_S:void he(60245)})(this.Ni);let c;return this.Ui.runTransaction(e,a,l,(f=>(c=new B_(f,this.ci?this.ci.next():Vn.ce),t==="readwrite-primary"?this.Hi(c).next((m=>!!m||this.Yi(c))).next((m=>{if(!m)throw Dt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new Z(j.FAILED_PRECONDITION,oS);return n(c)})).next((m=>this.Xi(c).next((()=>m)))):this.Is(c).next((()=>n(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Is(e){return Sc(e).get(ll).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,m_)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z(j.FAILED_PRECONDITION,p_)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Sc(e).put(ll,t)}static v(){return Wr.v()}Zi(e){const t=Sc(e);return t.get(ll).next((n=>this.es(n)?(te(Ts,"Releasing primary lease."),t.delete(ll)):U.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Dt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;V0()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return te(Ts,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Dt(Ts,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Dt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Sc(i){return Gt(i,Nh)}function Ef(i){return Gt(i,kl)}function fv(i,e){let t=i.projectId;return i.isDefaultDatabase||(t+="."+i.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class NR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return V0()?8:uS(gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,n).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new mM;return this.Ss(e,t,c).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,c,f.size)}))})).next((()=>l.result))}bs(e,t,n,a){return n.documentReadCount<this.fs?(ml()<=ke.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",pl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(ml()<=ke.DEBUG&&te("QueryEngine","Query:",pl(t),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.gs*a?(ml()<=ke.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",pl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(t))):U.resolve())}ys(e,t){if(wA(t))return U.resolve(null);let n=Rn(t);return this.indexManager.getIndexType(e,n).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Jf(t,null,"F"),n=Rn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((l=>{const c=Ce(...l);return this.ps.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,n).next((m=>{const g=this.Ds(t,f);return this.Cs(t,g,c,m.readTime)?this.ys(e,Jf(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ws(e,t,n,a){return wA(t)||a.isEqual(ge.min())?U.resolve(null):this.ps.getDocuments(e,n).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,n,a)?U.resolve(null):(ml()<=ke.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),pl(t)),this.vs(e,c,t,sS(a,Pl)).next((f=>f)))}))}Ds(e,t){let n=new Je(FS(e));return t.forEach(((a,l)=>{Vh(e,l)&&(n=n.add(l))})),n}Cs(e,t,n,a){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,n){return ml()<=ke.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",pl(t)),this.ps.getDocumentsMatchingQuery(e,t,$n.min(),n)}vs(e,t,n,a){return this.ps.getDocumentsMatchingQuery(e,n,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const pv="LocalStore",pM=3e8;class gM{constructor(e,t,n,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new ot(Re),this.xs=new zi((l=>eo(l)),Ph),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function PR(i,e,t,n){return new gM(i,e,t,n)}async function xR(i,e){const t=le(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let a;return t.mutationQueue.getAllMutationBatches(n).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((l=>{const c=[],f=[];let m=Ce();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){f.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(n,m).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function _M(i,e){const t=le(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,m,g,y){const T=g.batch,A=T.keys();let x=U.resolve();return A.forEach((G=>{x=x.next((()=>y.getEntry(m,G))).next((X=>{const K=g.docVersions.get(G);me(K!==null,48541),X.version.compareTo(K)<0&&(T.applyToRemoteDocument(X,g),X.isValidDocument()&&(X.setReadTime(g.commitVersion),y.addEntry(X)))}))})),x.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,n,e,l).next((()=>l.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(f){let m=Ce();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(n,a)))}))}function VR(i){const e=le(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function yM(i,e){const t=le(i),n=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((y,T)=>{const A=a.get(T);if(!A)return;f.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let x=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(wt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,n)),a=a.insert(T,x),(function(X,K,de){return X.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=pM?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(A,x,y)&&f.push(t.Pi.updateTargetData(l,x))}));let m=kn(),g=Ce();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),f.push(OR(l,c,e.documentUpdates).next((y=>{m=y.ks,g=y.qs}))),!n.isEqual(ge.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,n)));f.push(y)}return U.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Ms=a,l)))}function OR(i,e,t){let n=Ce(),a=Ce();return t.forEach((l=>n=n.add(l))),e.getEntries(i,n).next((l=>{let c=kn();return t.forEach(((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ge.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):te(pv,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)})),{ks:c,qs:a}}))}function vM(i,e){const t=le(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ns),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function ql(i,e){const t=le(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let a;return t.Pi.getTargetData(n,e).next((l=>l?(a=l,U.resolve(a)):t.Pi.allocateTargetId(n).next((c=>(a=new Pi(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,a).next((()=>a)))))))})).then((n=>{const a=t.Ms.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function jl(i,e,t){const n=le(i),a=n.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",l,(c=>n.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Qs(c))throw c;te(pv,`Failed to update sequence numbers for target ${e}: ${c}`)}n.Ms=n.Ms.remove(e),n.xs.delete(a.target)}function rm(i,e,t){const n=le(i);let a=ge.min(),l=Ce();return n.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,y){const T=le(m),A=T.xs.get(y);return A!==void 0?U.resolve(T.Ms.get(A)):T.Pi.getTargetData(g,y)})(n,c,Rn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>n.Fs.getDocumentsMatchingQuery(c,e,t?a:ge.min(),t?l:Ce()))).next((f=>(LR(n,zS(e),f),{documents:f,Qs:l})))))}function kR(i,e){const t=le(i),n=le(t.Pi),a=t.Ms.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>n.At(l,e).next((c=>c?c.target:null))))}function MR(i,e){const t=le(i),n=t.Os.get(e)||ge.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.Ns.getAllFromCollectionGroup(a,e,sS(n,Pl),Number.MAX_SAFE_INTEGER))).then((a=>(LR(t,e,a),a)))}function LR(i,e,t){let n=i.Os.get(e)||ge.min();t.forEach(((a,l)=>{l.readTime.compareTo(n)>0&&(n=l.readTime)})),i.Os.set(e,n)}async function EM(i,e,t,n){const a=le(i);let l=Ce(),c=kn();for(const g of t){const y=e.$s(g.metadata.name);g.document&&(l=l.add(y));const T=e.Us(g);T.setReadTime(e.Ks(g.metadata.readTime)),c=c.insert(y,T)}const f=a.Ns.newChangeBuffer({trackRemovals:!0}),m=await ql(a,(function(y){return Rn(tu(Me.fromString(`__bundle__/docs/${y}`)))})(n));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>OR(g,f,c).next((y=>(f.apply(g),y))).next((y=>a.Pi.removeMatchingKeysForTargetId(g,m.targetId).next((()=>a.Pi.addMatchingKeys(g,l,m.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,y.ks,y.qs))).next((()=>y.ks))))))}async function TM(i,e,t=Ce()){const n=await ql(i,Rn(ov(e.bundledQuery))),a=le(i);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Nt(e.readTime);if(n.snapshotVersion.compareTo(c)>=0)return a.Ii.saveNamedQuery(l,e);const f=n.withResumeToken(wt.EMPTY_BYTE_STRING,c);return a.Ms=a.Ms.insert(f.targetId,f),a.Pi.updateTargetData(l,f).next((()=>a.Pi.removeMatchingKeysForTargetId(l,n.targetId))).next((()=>a.Pi.addMatchingKeys(l,t,n.targetId))).next((()=>a.Ii.saveNamedQuery(l,e)))}))}/**
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
 */const UR="firestore_clients";function ZA(i,e){return`${UR}_${i}_${e}`}const BR="firestore_mutations";function e0(i,e,t){let n=`${BR}_${i}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const zR="firestore_targets";function g_(i,e){return`${zR}_${i}_${e}`}/**
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
 */const qr="SharedClientState";class im{constructor(e,t,n,a){this.user=e,this.batchId=t,this.state=n,this.error=a}static Ws(e,t,n){const a=JSON.parse(n);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new Z(a.error.code,a.error.message))),c?new im(e,t,a.state,l):(Dt(qr,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $c{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let a,l=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return l&&n.error&&(l=typeof n.error.message=="string"&&typeof n.error.code=="string",l&&(a=new Z(n.error.code,n.error.message))),l?new $c(e,n.state,a):(Dt(qr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let a=typeof n=="object"&&n.activeTargetIds instanceof Array,l=Zy();for(let c=0;a&&c<n.activeTargetIds.length;++c)a=cS(n.activeTargetIds[c]),l=l.add(n.activeTargetIds[c]);return a?new sm(e,l):(Dt(qr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class gv{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new gv(t.clientId,t.onlineState):(Dt(qr,`Failed to parse online state: ${e}`),null)}}class ey{constructor(){this.activeTargetIds=Zy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class __{constructor(e,t,n,a,l){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new ot(Re),this.started=!1,this.Xs=[];const c=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.eo=ZA(this.persistenceKey,this.Js),this.no=(function(m){return`firestore_sequence_number_${m}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new ey),this.ro=new RegExp(`^${UR}_${c}_([^_]*)$`),this.io=new RegExp(`^${BR}_${c}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${zR}_${c}_(\\d+)$`),this.oo=(function(m){return`firestore_online_state_${m}`})(this.persistenceKey),this._o=(function(m){return`firestore_bundle_loaded_v2_${m}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const a=this.getItem(ZA(this.persistenceKey,n));if(a){const l=sm.Ws(n,a);l&&(this.Zs=this.Zs.insert(l.clientId,l))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(g_(this.persistenceKey,e));if(a){const l=$c.Ws(e,a);l&&(n=l.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(g_(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((a=>{this.Po(a)})),this.currentUser=e,n.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return te(qr,"READ",e,t),t}setItem(e,t){te(qr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){te(qr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(te(qr,"EVENT",t.key,t.newValue),t.key===this.eo)return void Dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(l){let c=Vn.ce;if(l!=null)try{const f=JSON.parse(l);me(typeof f=="number",30636,{So:l}),c=f}catch(f){Dt(qr,"Failed to read sequence number from WebStorage",f)}return c})(t.newValue);n!==Vn.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((a=>this.syncEngine.Do(a))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const a=new im(this.currentUser,e,t,n),l=e0(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Gs())}Po(e){const t=e0(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const a=g_(this.persistenceKey,e),l=new $c(e,t,n);this.setItem(a,l.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return sm.Ws(n,t)}fo(e,t){const n=this.io.exec(e),a=Number(n[1]),l=n[2]!==void 0?n[2]:null;return im.Ws(new Zt(l),a,t)}yo(e,t){const n=this.so.exec(e),a=Number(n[1]);return $c.Ws(a,t)}uo(e){return gv.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);te(qr,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),a=this.lo(this.Zs),l=this.lo(n),c=[],f=[];return l.forEach((m=>{a.has(m)||c.push(m)})),a.forEach((m=>{l.has(m)||f.push(m)})),this.syncEngine.Fo(c,f).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Zy();return e.forEach(((n,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class FR{constructor(){this.Mo=new ey,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ey,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const t0="ConnectivityMonitor";class n0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(t0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(t0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tf=null;function ty(){return Tf===null?Tf=(function(){return 268435456+Math.round(2147483648*Math.random())})():Tf++,"0x"+Tf.toString(16)}/**
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
 */const y_="RestConnection",IM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${a}`,this.Wo=this.databaseId.database===z_?`project_id=${n}`:`project_id=${n}&database_id=${a}`}Go(e,t,n,a,l){const c=ty(),f=this.zo(e,t.toUriEncodedString());te(y_,`Sending RPC '${e}' ${c}:`,f,n);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,a,l);const{host:g}=new URL(f),y=$l(g);return this.Jo(e,f,m,n,y).then((T=>(te(y_,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ni(y_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",n),T}))}Ho(e,t,n,a,l,c){return this.Go(e,t,n,a,l)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+eu})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),n&&n.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const n=IM[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class bM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const pn="WebChannelConnection";class SM extends AM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,a,l){const c=ty();return new Promise(((f,m)=>{const g=new Yb;g.setWithCredentials(!0),g.listenOnce($b.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Sf.NO_ERROR:const T=g.getResponseJson();te(pn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Sf.TIMEOUT:te(pn,`RPC '${e}' ${c} timed out`),m(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Sf.HTTP_ERROR:const A=g.getStatus();if(te(pn,`RPC '${e}' ${c} failed with status:`,A,"response text:",g.getResponseText()),A>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const G=x==null?void 0:x.error;if(G&&G.status&&G.message){const X=(function(de){const ce=de.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(ce)>=0?ce:j.UNKNOWN})(G.status);m(new Z(X,G.message))}else m(new Z(j.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Z(j.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{te(pn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);te(pn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,n,15)}))}T_(e,t,n){const a=ty(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Jb(),f=Xb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,n),m.encodeInitMessageHeaders=!0;const y=l.join("");te(pn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);this.I_(T);let A=!1,x=!1;const G=new bM({Yo:K=>{x?te(pn,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(A||(te(pn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),A=!0),te(pn,`RPC '${e}' stream ${a} sending:`,K),T.send(K))},Zo:()=>T.close()}),X=(K,de,ce)=>{K.listen(de,(ae=>{try{ce(ae)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return X(T,Nc.EventType.OPEN,(()=>{x||(te(pn,`RPC '${e}' stream ${a} transport opened.`),G.o_())})),X(T,Nc.EventType.CLOSE,(()=>{x||(x=!0,te(pn,`RPC '${e}' stream ${a} transport closed`),G.a_(),this.E_(T))})),X(T,Nc.EventType.ERROR,(K=>{x||(x=!0,ni(pn,`RPC '${e}' stream ${a} transport errored. Name:`,K.name,"Message:",K.message),G.a_(new Z(j.UNAVAILABLE,"The operation could not be completed")))})),X(T,Nc.EventType.MESSAGE,(K=>{var de;if(!x){const ce=K.data[0];me(!!ce,16349);const ae=ce,Ie=(ae==null?void 0:ae.error)||((de=ae[0])==null?void 0:de.error);if(Ie){te(pn,`RPC '${e}' stream ${a} received error:`,Ie);const pe=Ie.status;let be=(function(C){const V=Mt[C];if(V!==void 0)return eR(V)})(pe),P=Ie.message;be===void 0&&(be=j.INTERNAL,P="Unknown error status: "+pe+" with message "+Ie.message),x=!0,G.a_(new Z(be,P)),T.close()}else te(pn,`RPC '${e}' stream ${a} received:`,ce),G.u_(ce)}})),X(f,Wb.STAT_EVENT,(K=>{K.stat===V_.PROXY?te(pn,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===V_.NOPROXY&&te(pn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{G.__()}),0),G}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 */function qR(){return typeof window<"u"?window:null}function Mf(){return typeof document<"u"?document:null}/**
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
 */function Lh(i){return new Pk(i,!0)}/**
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
 */const r0="PersistentStream";class jR{constructor(e,t,n,a,l,c,f,m){this.Mi=e,this.S_=n,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,a])=>{this.D_===t&&this.G_(n,a)}),(n=>{e((()=>{const a=new Z(j.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(a)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{n((()=>this.z_(a)))})),this.stream.onMessage((a=>{n((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(r0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(r0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RM extends jR{constructor(e,t,n,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Ok(this.serializer,e),n=(function(l){if(!("targetChange"in l))return ge.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ge.min():c.readTime?Nt(c.readTime):ge.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=$_(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=Wf(m)?{documents:cR(l,m)}:{query:hR(l,m).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=iR(l,c.resumeToken);const g=Q_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ge.min())>0){f.readTime=Fl(l,c.snapshotVersion.toTimestamp());const g=Q_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const n=Mk(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=$_(this.serializer),t.removeTarget=e,this.q_(t)}}class CM extends jR{constructor(e,t,n,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kk(e.writeResults,e.commitTime),n=Nt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=$_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>mh(this.serializer,n)))};this.q_(t)}}/**
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
 */class DM{}class NM extends DM{constructor(e,t,n,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Y_(t,n),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Z(j.UNKNOWN,l.toString())}))}Ho(e,t,n,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Ho(e,Y_(t,n),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Z(j.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class PM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const ao="RemoteStore";class xM{constructor(e,t,n,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{n.enqueueAndForget((async()=>{$s(this)&&(te(ao,"Restarting streams for network reachability change."),await(async function(m){const g=le(m);g.Ea.add(4),await iu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Uh(g)})(this))}))})),this.Ra=new PM(n,a)}}async function Uh(i){if($s(i))for(const e of i.da)await e(!0)}async function iu(i){for(const e of i.da)await e(!1)}function km(i,e){const t=le(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ev(t)?vv(t):au(t).O_()&&yv(t,e))}function Hl(i,e){const t=le(i),n=au(t);t.Ia.delete(e),n.O_()&&HR(t,e),t.Ia.size===0&&(n.O_()?n.L_():$s(t)&&t.Ra.set("Unknown"))}function yv(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}au(i).Y_(e)}function HR(i,e){i.Va.Ue(e),au(i).Z_(e)}function vv(i){i.Va=new Rk({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),au(i).start(),i.Ra.ua()}function Ev(i){return $s(i)&&!au(i).x_()&&i.Ia.size>0}function $s(i){return le(i).Ea.size===0}function GR(i){i.Va=void 0}async function VM(i){i.Ra.set("Online")}async function OM(i){i.Ia.forEach(((e,t)=>{yv(i,e)}))}async function kM(i,e){GR(i),Ev(i)?(i.Ra.ha(e),vv(i)):i.Ra.set("Unknown")}async function MM(i,e,t){if(i.Ra.set("Online"),e instanceof rR&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ia.delete(f),a.Va.removeTarget(f))})(i,e)}catch(n){te(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await am(i,n)}else if(e instanceof Of?i.Va.Ze(e):e instanceof nR?i.Va.st(e):i.Va.tt(e),!t.isEqual(ge.min()))try{const n=await VR(i.localStore);t.compareTo(n)>=0&&await(function(l,c){const f=l.Va.Tt(c);return f.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,g)=>{const y=l.Ia.get(m);if(!y)return;l.Ia.set(m,y.withResumeToken(wt.EMPTY_BYTE_STRING,y.snapshotVersion)),HR(l,m);const T=new Pi(y.target,m,g,y.sequenceNumber);yv(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(i,t)}catch(n){te(ao,"Failed to raise snapshot:",n),await am(i,n)}}async function am(i,e,t){if(!Qs(e))throw e;i.Ea.add(1),await iu(i),i.Ra.set("Offline"),t||(t=()=>VR(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(ao,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Uh(i)}))}function KR(i,e){return e().catch((t=>am(i,t,e)))}async function su(i){const e=le(i),t=Fs(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ns;for(;LM(e);)try{const a=await vM(e.localStore,n);if(a===null){e.Ta.length===0&&t.L_();break}n=a.batchId,UM(e,a)}catch(a){await am(e,a)}QR(e)&&YR(e)}function LM(i){return $s(i)&&i.Ta.length<10}function UM(i,e){i.Ta.push(e);const t=Fs(i);t.O_()&&t.X_&&t.ea(e.mutations)}function QR(i){return $s(i)&&!Fs(i).x_()&&i.Ta.length>0}function YR(i){Fs(i).start()}async function BM(i){Fs(i).ra()}async function zM(i){const e=Fs(i);for(const t of i.Ta)e.ea(t.mutations)}async function FM(i,e,t){const n=i.Ta.shift(),a=rv.from(n,e,t);await KR(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await su(i)}async function qM(i,e){e&&Fs(i).X_&&await(async function(n,a){if((function(c){return ZS(c)&&c!==j.ABORTED})(a.code)){const l=n.Ta.shift();Fs(n).B_(),await KR(n,(()=>n.remoteSyncer.rejectFailedWrite(l.batchId,a))),await su(n)}})(i,e),QR(i)&&YR(i)}async function i0(i,e){const t=le(i);t.asyncQueue.verifyOperationInProgress(),te(ao,"RemoteStore received new credentials");const n=$s(t);t.Ea.add(3),await iu(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Uh(t)}async function ny(i,e){const t=le(i);e?(t.Ea.delete(2),await Uh(t)):e||(t.Ea.add(2),await iu(t),t.Ra.set("Unknown"))}function au(i){return i.ma||(i.ma=(function(t,n,a){const l=le(t);return l.sa(),new RM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:VM.bind(null,i),t_:OM.bind(null,i),r_:kM.bind(null,i),H_:MM.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Ev(i)?vv(i):i.Ra.set("Unknown")):(await i.ma.stop(),GR(i))}))),i.ma}function Fs(i){return i.fa||(i.fa=(function(t,n,a){const l=le(t);return l.sa(),new CM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:BM.bind(null,i),r_:qM.bind(null,i),ta:zM.bind(null,i),na:FM.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await su(i)):(await i.fa.stop(),i.Ta.length>0&&(te(ao,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class Tv{constructor(e,t,n,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=a,this.removalCallback=l,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,a,l){const c=Date.now()+n,f=new Tv(e,t,c,a,l);return f.start(n),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(i,e){if(Dt("AsyncQueue",`${e}: ${i}`),Qs(i))return new Z(j.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class bl{static emptySet(e){return new bl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(t,n)=>se.comparator(t.key,n.key),this.keyedMap=Pc(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new bl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class s0{constructor(){this.ga=new ot(se.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Gl{constructor(e,t,n,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,n,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Gl(e,t,bl.emptySet(t),c,n,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==n[a].type||!t[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
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
 */class jM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class HM{constructor(){this.queries=a0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const a=le(t),l=a.queries;a.queries=a0(),l.forEach(((c,f)=>{for(const m of f.Sa)m.onError(n)}))})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function a0(){return new zi((i=>BS(i)),xh)}async function wv(i,e){const t=le(i);let n=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(n=2):(l=new jM,n=e.Da()?0:1);try{switch(n){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=ou(c,`Initialization of query '${pl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Av(t)}async function Iv(i,e){const t=le(i),n=e.query;let a=3;const l=t.queries.get(n);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function GM(i,e){const t=le(i);let n=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(a)&&(n=!0);c.wa=a}}n&&Av(t)}function KM(i,e,t){const n=le(i),a=n.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);n.queries.delete(e)}function Av(i){i.Ca.forEach((e=>{e.next()}))}var ry,o0;(o0=ry||(ry={})).Ma="default",o0.Cache="cache";class bv{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new Gl(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Gl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ry.Cache}}/**
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
 */class l0{constructor(e){this.serializer=e}$s(e){return Xr(this.serializer,e)}Us(e){return e.metadata.exists?uR(this.serializer,e.document,!1):lt.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Nt(e)}}class YM{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=$R(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=Me.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new l0(this.serializer);for(const a of e)if(a.metadata.queries){const l=n.$s(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ce()).add(l);t.set(c,f)}}return t}async ja(e){const t=await EM(e,new l0(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const a of this.Ka)await TM(e,a,n.get(a.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function $R(i){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}}/**
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
 */class WR{constructor(e){this.key=e}}class XR{constructor(e){this.key=e}}class JR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=FS(e),this.tu=new bl(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new s0,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const A=a.get(y),x=Vh(this.query,T)?T:null,G=!!A&&this.mutatedKeys.has(A.key),X=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let K=!1;A&&x?A.data.isEqual(x.data)?G!==X&&(n.track({type:3,doc:x}),K=!0):this.su(A,x)||(n.track({type:2,doc:x}),K=!0,(m&&this.eu(x,m)>0||g&&this.eu(x,g)<0)&&(f=!0)):!A&&x?(n.track({type:0,doc:x}),K=!0):A&&!x&&(n.track({type:1,doc:A}),K=!0,(m||g)&&(f=!0)),K&&(x?(c=c.add(x),l=X?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),n.track({type:1,doc:y})}return{tu:c,iu:n,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(x,G){const X=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:K})}};return X(x)-X(G)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(n),a=a??!1;const f=t&&!a?this._u():[],m=this.Xa.size===0&&this.current&&!a?1:0,g=m!==this.Za;return this.Za=m,c.length!==0||g?{snapshot:new Gl(this.query,e.tu,l,c,e.mutatedKeys,m===0,g,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new s0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new XR(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new WR(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Gl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ws="SyncEngine";class $M{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class WM{constructor(e){this.key=e,this.hu=!1}}class XM{constructor(e,t,n,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new zi((f=>BS(f)),xh),this.Iu=new Map,this.Eu=new Set,this.du=new ot(se.comparator),this.Au=new Map,this.Ru=new cv,this.Vu={},this.mu=new Map,this.fu=so.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JM(i,e,t=!0){const n=Mm(i);let a;const l=n.Tu.get(e);return l?(n.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await ZR(n,e,t,!0),a}async function ZM(i,e){const t=Mm(i);await ZR(t,e,!0,!1)}async function ZR(i,e,t,n){const a=await ql(i.localStore,Rn(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let f;return n&&(f=await Sv(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&km(i.remoteStore,a),f}async function Sv(i,e,t,n,a){i.pu=(T,A,x)=>(async function(X,K,de,ce){let ae=K.view.ru(de);ae.Cs&&(ae=await rm(X.localStore,K.query,!1).then((({documents:P})=>K.view.ru(P,ae))));const Ie=ce&&ce.targetChanges.get(K.targetId),pe=ce&&ce.targetMismatches.get(K.targetId)!=null,be=K.view.applyChanges(ae,X.isPrimaryClient,Ie,pe);return iy(X,K.targetId,be.au),be.snapshot})(i,T,A,x);const l=await rm(i.localStore,e,!0),c=new JR(e,l.Qs),f=c.ru(l.documents),m=Mh.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",a),g=c.applyChanges(f,i.isPrimaryClient,m);iy(i,t,g.au);const y=new $M(e,t,c);return i.Tu.set(e,y),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),g.snapshot}async function e4(i,e,t){const n=le(i),a=n.Tu.get(e),l=n.Iu.get(a.targetId);if(l.length>1)return n.Iu.set(a.targetId,l.filter((c=>!xh(c,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await jl(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),t&&Hl(n.remoteStore,a.targetId),Kl(n,a.targetId)})).catch(Ks)):(Kl(n,a.targetId),await jl(n.localStore,a.targetId,!0))}async function t4(i,e){const t=le(i),n=t.Tu.get(e),a=t.Iu.get(n.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Hl(t.remoteStore,n.targetId))}async function n4(i,e,t){const n=Nv(i);try{const a=await(function(c,f){const m=le(c),g=Qe.now(),y=f.reduce(((x,G)=>x.add(G.key)),Ce());let T,A;return m.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let G=kn(),X=Ce();return m.Ns.getEntries(x,y).next((K=>{G=K,G.forEach(((de,ce)=>{ce.isValidDocument()||(X=X.add(de))}))})).next((()=>m.localDocuments.getOverlayedDocuments(x,G))).next((K=>{T=K;const de=[];for(const ce of f){const ae=Ak(ce,T.get(ce.key).overlayedDocument);ae!=null&&de.push(new Fi(ce.key,ae,NS(ae.value.mapValue),mt.exists(!0)))}return m.mutationQueue.addMutationBatch(x,g,de,f)})).next((K=>{A=K;const de=K.applyToLocalDocumentSet(T,X);return m.documentOverlayCache.saveOverlays(x,K.batchId,de)}))})).then((()=>({batchId:A.batchId,changes:jS(T)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),(function(c,f,m){let g=c.Vu[c.currentUser.toKey()];g||(g=new ot(Re)),g=g.insert(f,m),c.Vu[c.currentUser.toKey()]=g})(n,a.batchId,t),await qi(n,a.changes),await su(n.remoteStore)}catch(a){const l=ou(a,"Failed to persist write");t.reject(l)}}async function e1(i,e){const t=le(i);try{const n=await yM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(me(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?me(c.hu,14607):a.removedDocuments.size>0&&(me(c.hu,42227),c.hu=!1))})),await qi(t,n,e)}catch(n){await Ks(n)}}function u0(i,e,t){const n=le(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const a=[];n.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const m=le(c);m.onlineState=f;let g=!1;m.queries.forEach(((y,T)=>{for(const A of T.Sa)A.va(f)&&(g=!0)})),g&&Av(m)})(n.eventManager,e),a.length&&n.Pu.H_(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function r4(i,e,t){const n=le(i);n.sharedClientState.updateQueryState(e,"rejected",t);const a=n.Au.get(e),l=a&&a.key;if(l){let c=new ot(se.comparator);c=c.insert(l,lt.newNoDocument(l,ge.min()));const f=Ce().add(l),m=new kh(ge.min(),new Map,new ot(Re),c,f);await e1(n,m),n.du=n.du.remove(l),n.Au.delete(e),Dv(n)}else await jl(n.localStore,e,!1).then((()=>Kl(n,e,t))).catch(Ks)}async function i4(i,e){const t=le(i),n=e.batch.batchId;try{const a=await _M(t.localStore,e);Cv(t,n,null),Rv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await qi(t,a)}catch(a){await Ks(a)}}async function s4(i,e,t){const n=le(i);try{const a=await(function(c,f){const m=le(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return m.mutationQueue.lookupMutationBatch(g,f).next((T=>(me(T!==null,37113),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>m.localDocuments.getDocuments(g,y)))}))})(n.localStore,e);Cv(n,e,t),Rv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await qi(n,a)}catch(a){await Ks(a)}}async function a4(i,e){const t=le(i);$s(t.remoteStore)||te(Ws,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(c){const f=le(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(m=>f.mutationQueue.getHighestUnacknowledgedBatchId(m)))})(t.localStore);if(n===Ns)return void e.resolve();const a=t.mu.get(n)||[];a.push(e),t.mu.set(n,a)}catch(n){const a=ou(n,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function Rv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Cv(i,e,t){const n=le(i);let a=n.Vu[n.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),n.Vu[n.currentUser.toKey()]=a}}function Kl(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Iu.get(e))i.Tu.delete(n),t&&i.Pu.yu(n,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((n=>{i.Ru.containsKey(n)||t1(i,n)}))}function t1(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Hl(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Dv(i))}function iy(i,e,t){for(const n of t)n instanceof WR?(i.Ru.addReference(n.key,e),o4(i,n)):n instanceof XR?(te(Ws,"Document no longer in limbo: "+n.key),i.Ru.removeReference(n.key,e),i.Ru.containsKey(n.key)||t1(i,n.key)):he(19791,{wu:n})}function o4(i,e){const t=e.key,n=t.path.canonicalString();i.du.get(t)||i.Eu.has(n)||(te(Ws,"New document in limbo: "+t),i.Eu.add(n),Dv(i))}function Dv(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new se(Me.fromString(e)),n=i.fu.next();i.Au.set(n,new WM(t)),i.du=i.du.insert(t,n),km(i.remoteStore,new Pi(Rn(tu(t.path)),n,"TargetPurposeLimboResolution",Vn.ce))}}async function qi(i,e,t){const n=le(i),a=[],l=[],c=[];n.Tu.isEmpty()||(n.Tu.forEach(((f,m)=>{c.push(n.pu(m,e,t).then((g=>{var y;if((g||t)&&n.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:y.current;n.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=mv.As(m.targetId,g);l.push(T)}})))})),await Promise.all(c),n.Pu.H_(a),await(async function(m,g){const y=le(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>U.forEach(g,(A=>U.forEach(A.Es,(x=>y.persistence.referenceDelegate.addReference(T,A.targetId,x))).next((()=>U.forEach(A.ds,(x=>y.persistence.referenceDelegate.removeReference(T,A.targetId,x)))))))))}catch(T){if(!Qs(T))throw T;te(pv,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const x=y.Ms.get(A),G=x.snapshotVersion,X=x.withLastLimboFreeSnapshotVersion(G);y.Ms=y.Ms.insert(A,X)}}})(n.localStore,l))}async function l4(i,e){const t=le(i);if(!t.currentUser.isEqual(e)){te(Ws,"User change. New user:",e.toKey());const n=await xR(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((m=>{m.reject(new Z(j.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await qi(t,n.Ls)}}function u4(i,e){const t=le(i),n=t.Au.get(e);if(n&&n.hu)return Ce().add(n.key);{let a=Ce();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const f=t.Tu.get(c);a=a.unionWith(f.view.nu)}return a}}async function c4(i,e){const t=le(i),n=await rm(t.localStore,e.query,!0),a=e.view.cu(n);return t.isPrimaryClient&&iy(t,e.targetId,a.au),a}async function h4(i,e){const t=le(i);return MR(t.localStore,e).then((n=>qi(t,n)))}async function d4(i,e,t,n){const a=le(i),l=await(function(f,m){const g=le(f),y=le(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>y.er(T,m).next((A=>A?g.localDocuments.getDocuments(T,A):U.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await su(a.remoteStore):t==="acknowledged"||t==="rejected"?(Cv(a,e,n||null),Rv(a,e),(function(f,m){le(le(f).mutationQueue).ir(m)})(a.localStore,e)):he(6720,"Unknown batchState",{Su:t}),await qi(a,l)):te(Ws,"Cannot apply mutation batch with id: "+e)}async function f4(i,e){const t=le(i);if(Mm(t),Nv(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),a=await c0(t,n.toArray());t.gu=!0,await ny(t.remoteStore,!0);for(const l of a)km(t.remoteStore,l)}else if(e===!1&&t.gu!==!1){const n=[];let a=Promise.resolve();t.Iu.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?n.push(c):a=a.then((()=>(Kl(t,c),jl(t.localStore,c,!0)))),Hl(t.remoteStore,c)})),await a,await c0(t,n),(function(c){const f=le(c);f.Au.forEach(((m,g)=>{Hl(f.remoteStore,g)})),f.Ru.Jr(),f.Au=new Map,f.du=new ot(se.comparator)})(t),t.gu=!1,await ny(t.remoteStore,!1)}}async function c0(i,e,t){const n=le(i),a=[],l=[];for(const c of e){let f;const m=n.Iu.get(c);if(m&&m.length!==0){f=await ql(n.localStore,Rn(m[0]));for(const g of m){const y=n.Tu.get(g),T=await c4(n,y);T.snapshot&&l.push(T.snapshot)}}else{const g=await kR(n.localStore,c);f=await ql(n.localStore,g),await Sv(n,n1(g),c,!1,f.resumeToken)}a.push(f)}return n.Pu.H_(l),a}function n1(i){return US(i.path,i.collectionGroup,i.orderBy,i.filters,i.limit,"F",i.startAt,i.endAt)}function m4(i){return(function(t){return le(le(t).persistence).Ts()})(le(i).localStore)}async function p4(i,e,t,n){const a=le(i);if(a.gu)return void te(Ws,"Ignoring unexpected query state notification.");const l=a.Iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await MR(a.localStore,zS(l[0])),f=kh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",wt.EMPTY_BYTE_STRING);await qi(a,c,f);break}case"rejected":await jl(a.localStore,e,!0),Kl(a,e,n);break;default:he(64155,t)}}async function g4(i,e,t){const n=Mm(i);if(n.gu){for(const a of e){if(n.Iu.has(a)&&n.sharedClientState.isActiveQueryTarget(a)){te(Ws,"Adding an already active target "+a);continue}const l=await kR(n.localStore,a),c=await ql(n.localStore,l);await Sv(n,n1(l),c.targetId,!1,c.resumeToken),km(n.remoteStore,c)}for(const a of t)n.Iu.has(a)&&await jl(n.localStore,a,!1).then((()=>{Hl(n.remoteStore,a),Kl(n,a)})).catch(Ks)}}function Mm(i){const e=le(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=e1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r4.bind(null,e),e.Pu.H_=GM.bind(null,e.eventManager),e.Pu.yu=KM.bind(null,e.eventManager),e}function Nv(i){const e=le(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=i4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s4.bind(null,e),e}function _4(i,e,t){const n=le(i);(async function(l,c,f){try{const m=await c.getMetadata();if(await(function(x,G){const X=le(x),K=Nt(G.createTime);return X.persistence.runTransaction("hasNewerBundle","readonly",(de=>X.Ii.getBundleMetadata(de,G.id))).then((de=>!!de&&de.createTime.compareTo(K)>=0))})(l.localStore,m))return await c.close(),f._completeWith((function(x){return{taskState:"Success",documentsLoaded:x.totalDocuments,bytesLoaded:x.totalBytes,totalDocuments:x.totalDocuments,totalBytes:x.totalBytes}})(m)),Promise.resolve(new Set);f._updateProgress($R(m));const g=new YM(m,c.serializer);let y=await c.bu();for(;y;){const A=await g.Ga(y);A&&f._updateProgress(A),y=await c.bu()}const T=await g.ja(l.localStore);return await qi(l,T.Ha,void 0),await(function(x,G){const X=le(x);return X.persistence.runTransaction("Save bundle","readwrite",(K=>X.Ii.saveBundleMetadata(K,G)))})(l.localStore,m),f._completeWith(T.progress),Promise.resolve(T.Ja)}catch(m){return ni(Ws,`Loading bundle failed with ${m}`),f._failWith(m),Promise.resolve(new Set)}})(n,e,t).then((a=>{n.sharedClientState.notifyBundleLoaded(a)}))}class ph{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return PR(this.persistence,new NR,e.initialUser,this.serializer)}Cu(e){return new hv(Om.mi,this.serializer)}Du(e){return new FR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ph.provider={build:()=>new ph};class y4 extends ph{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){me(this.persistence.referenceDelegate instanceof nm,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new AR(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new hv((n=>nm.mi(n,t)),this.serializer)}}class r1 extends ph{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Nv(this.xu.syncEngine),await su(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return PR(this.persistence,new NR,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new AR(n,e.asyncQueue,t)}Mu(e,t){const n=new RO(t,this.persistence);return new SO(e.asyncQueue,n)}Cu(e){const t=fv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new dv(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,qR(),Mf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new FR}}class v4 extends r1{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof __&&(this.sharedClientState.syncEngine={Co:d4.bind(null,t),vo:p4.bind(null,t),Fo:g4.bind(null,t),Ts:m4.bind(null,t),Do:h4.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await f4(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=qR();if(!__.v(t))throw new Z(j.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=fv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new __(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class gh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>u0(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=l4.bind(null,this.syncEngine),await ny(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HM})()}createDatastore(e){const t=Lh(e.databaseInfo.databaseId),n=(function(l){return new SM(l)})(e.databaseInfo);return(function(l,c,f,m){return new NM(l,c,f,m)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,a,l,c,f){return new xM(n,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>u0(this.syncEngine,t,0)),(function(){return n0.v()?new n0:new wM})())}createSyncEngine(e,t){return(function(a,l,c,f,m,g,y){const T=new XM(a,l,c,f,m,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=le(a);te(ao,"RemoteStore shutting down."),l.Ea.add(5),await iu(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}gh.provider={build:()=>new gh};function h0(i,e=10240){let t=0;return{async read(){if(t<i.byteLength){const n={value:i.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Lm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class T4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=le(a),f={documents:l.map((T=>fh(c.serializer,T)))},m=await c.Ho("BatchGetDocuments",c.serializer.databaseId,Me.emptyPath(),f,l.length),g=new Map;m.forEach((T=>{const A=Vk(c.serializer,T);g.set(A.key.toString(),A)}));const y=[];return l.forEach((T=>{const A=g.get(T.toString());me(!!A,55234,{key:T}),y.push(A)})),y})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new ru(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const a=se.fromPath(n);this.mutations.push(new tv(a,this.precondition(a)))})),await(async function(n,a){const l=le(n),c={writes:a.map((f=>mh(l.serializer,f)))};await l.Go("Commit",l.serializer.databaseId,Me.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw he(50498,{Gu:e.constructor.name});t=ge.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Z(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ge.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ge.min()))throw new Z(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class w4{constructor(e,t,n,a,l){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=a,this.deferred=l,this.zu=n.maxAttempts,this.M_=new _v(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new T4(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((a=>{this.Yu(a)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!Dh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ZS(t)}return!1}}/**
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
 */const qs="FirestoreClient";class I4{constructor(e,t,n,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=a,this.user=Zt.UNAUTHENTICATED,this.clientId=Fy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(n,(async c=>{te(qs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(n,(c=>(te(qs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ou(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function v_(i,e){i.asyncQueue.verifyOperationInProgress(),te(qs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async a=>{n.isEqual(a)||(await xR(e.localStore,a),n=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function d0(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Pv(i);te(qs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>i0(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,a)=>i0(e.remoteStore,a))),i._onlineComponents=e}async function Pv(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(qs,"Using user provided OfflineComponentProvider");try{await v_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===j.FAILED_PRECONDITION||a.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ni("Error using user provided cache. Falling back to memory cache: "+t),await v_(i,new ph)}}else te(qs,"Using default OfflineComponentProvider"),await v_(i,new y4(void 0));return i._offlineComponents}async function Um(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(qs,"Using user provided OnlineComponentProvider"),await d0(i,i._uninitializedComponentsProvider._online)):(te(qs,"Using default OnlineComponentProvider"),await d0(i,new gh))),i._onlineComponents}function i1(i){return Pv(i).then((e=>e.persistence))}function xv(i){return Pv(i).then((e=>e.localStore))}function s1(i){return Um(i).then((e=>e.remoteStore))}function Vv(i){return Um(i).then((e=>e.syncEngine))}function A4(i){return Um(i).then((e=>e.datastore))}async function Ql(i){const e=await Um(i),t=e.eventManager;return t.onListen=JM.bind(null,e.syncEngine),t.onUnlisten=e4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=t4.bind(null,e.syncEngine),t}function b4(i){return i.asyncQueue.enqueue((async()=>{const e=await i1(i),t=await s1(i);return e.setNetworkEnabled(!0),(function(a){const l=le(a);return l.Ea.delete(0),Uh(l)})(t)}))}function S4(i){return i.asyncQueue.enqueue((async()=>{const e=await i1(i),t=await s1(i);return e.setNetworkEnabled(!1),(async function(a){const l=le(a);l.Ea.add(0),await iu(l),l.Ra.set("Offline")})(t)}))}function R4(i,e){const t=new cn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,y){const T=le(g);return T.persistence.runTransaction("read document","readonly",(A=>T.localDocuments.getDocument(A,y)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new Z(j.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const m=ou(f,`Failed to get document '${l} from cache`);c.reject(m)}})(await xv(i),e,t))),t.promise}function a1(i,e,t={}){const n=new cn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new Lm({next:A=>{y.Nu(),c.enqueueAndForget((()=>Iv(l,T)));const x=A.docs.has(f);!x&&A.fromCache?g.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&A.fromCache&&m&&m.source==="server"?g.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new bv(tu(f.path),y,{includeMetadataChanges:!0,qa:!0});return wv(l,T)})(await Ql(i),i.asyncQueue,e,t,n))),n.promise}function C4(i,e){const t=new cn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await rm(a,l,!0),m=new JR(l,f.Qs),g=m.ru(f.documents),y=m.applyChanges(g,!1);c.resolve(y.snapshot)}catch(f){const m=ou(f,`Failed to execute query '${l} against cache`);c.reject(m)}})(await xv(i),e,t))),t.promise}function o1(i,e,t={}){const n=new cn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new Lm({next:A=>{y.Nu(),c.enqueueAndForget((()=>Iv(l,T))),A.fromCache&&m.source==="server"?g.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new bv(f,y,{includeMetadataChanges:!0,qa:!0});return wv(l,T)})(await Ql(i),i.asyncQueue,e,t,n))),n.promise}function D4(i,e){const t=new Lm(e);return i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.add(l),l.next()})(await Ql(i),t))),()=>{t.Nu(),i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.delete(l)})(await Ql(i),t)))}}function N4(i,e,t,n){const a=(function(c,f){let m;return m=typeof c=="string"?tR().encode(c):c,(function(y,T){return new E4(y,T)})((function(y,T){if(y instanceof Uint8Array)return h0(y,T);if(y instanceof ArrayBuffer)return h0(new Uint8Array(y),T);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(m),f)})(t,Lh(e));i.asyncQueue.enqueueAndForget((async()=>{_4(await Vv(i),a,n)}))}function P4(i,e){return i.asyncQueue.enqueue((async()=>(function(n,a){const l=le(n);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Ii.getNamedQuery(c,a)))})(await xv(i),e)))}/**
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
 */const f0=new Map;/**
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
 */const u1="firestore.googleapis.com",m0=!0;class p0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u1,this.ssl=m0}else this.host=e.host,this.ssl=e.ssl??m0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ER;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jk)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l1(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,a){return n.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,t,n,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new mO;switch(n.type){case"firstParty":return new yO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=f0.get(t);n&&(te("ComponentProvider","Removing Datastore"),f0.delete(t),n.terminate())})(this),Promise.resolve()}}function x4(i,e,t,n={}){var g;i=je(i,Bh);const a=$l(e),l=i._getSettings(),c={...l,emulatorOptions:i._getEmulatorOptions()},f=`${e}:${t}`;a&&(C0(`https://${f}`),D0("Firestore",!0)),l.host!==u1&&l.host!==f&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:f,ssl:a,emulatorOptions:n};if(!xs(m,c)&&(i._setSettings(m),n.mockUserToken)){let y,T;if(typeof n.mockUserToken=="string")y=n.mockUserToken,T=Zt.MOCK_USER;else{y=PD(n.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Zt(A)}i._authCredentials=new pO(new eS(y,T))}}/**
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
 */let Cn=class c1{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new c1(this.firestore,e,this._query)}},at=class Oc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oc(this.firestore,e,this._key)}toJSON(){return{type:Oc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ch(t,Oc._jsonSchema))return new Oc(e,n||null,new se(Me.fromString(t.referencePath)))}};at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:Ut("string",at._jsonSchemaVersion),referencePath:Ut("string")};let Ps=class h1 extends Cn{constructor(e,t,n){super(e,t,tu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new se(e))}withConverter(e){return new h1(this.firestore,e,this._path)}};function d1(i,e,...t){if(i=Ee(i),qy("collection","path",e),i instanceof Bh){const n=Me.fromString(e,...t);return rA(n),new Ps(i,null,n)}{if(!(i instanceof at||i instanceof Ps))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return rA(n),new Ps(i.firestore,null,n)}}function V4(i,e){if(i=je(i,Bh),qy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cn(i,null,(function(n){return new Bi(Me.emptyPath(),n)})(e))}function om(i,e,...t){if(i=Ee(i),arguments.length===1&&(e=Fy.newId()),qy("doc","path",e),i instanceof Bh){const n=Me.fromString(e,...t);return nA(n),new at(i,null,new se(n))}{if(!(i instanceof at||i instanceof Ps))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return nA(n),new at(i.firestore,i instanceof Ps?i.converter:null,new se(n))}}function f1(i,e){return i=Ee(i),e=Ee(e),(i instanceof at||i instanceof Ps)&&(e instanceof at||e instanceof Ps)&&i.firestore===e.firestore&&i.path===e.path&&i.converter===e.converter}function m1(i,e){return i=Ee(i),e=Ee(e),i instanceof Cn&&e instanceof Cn&&i.firestore===e.firestore&&xh(i._query,e._query)&&i.converter===e.converter}/**
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
 */const g0="AsyncQueue";class _0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const n=Mf();n&&te(g0,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Mf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Mf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new cn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Qs(e))throw e;te(g0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",y0(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Tv.createAndSchedule(this,e,t,n,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&he(47125,{Pc:y0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function y0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */const k4=-1;let Pt=class extends Bh{constructor(e,t,n,a){super(e,t,n,a),this.type="firestore",this._queue=new _0,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _0(e),this._firestoreClient=void 0,await e}}};function vn(i){if(i._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||p1(i),i._firestoreClient}function p1(i){var n,a,l;const e=i._freezeSettings(),t=(function(f,m,g,y){return new nk(f,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,l1(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(i._databaseId,((n=i._app)==null?void 0:n.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new I4(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(i._componentsProvider))}function M4(i,e){ni("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=i._freezeSettings();return g1(i,gh.provider,{build:n=>new r1(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function L4(i){ni("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=i._freezeSettings();g1(i,gh.provider,{build:t=>new v4(t,e.cacheSizeBytes)})}function g1(i,e,t){if((i=je(i,Pt))._firestoreClient||i._terminated)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(i._componentsProvider||i._getSettings().localCache)throw new Z(j.FAILED_PRECONDITION,"SDK cache is already specified.");i._componentsProvider={_online:e,_offline:t},p1(i)}function U4(i){if(i._initialized&&!i._terminated)throw new Z(j.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new cn;return i._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Wr.v())return Promise.resolve();const a=n+DR;await Wr.delete(a)})(fv(i._databaseId,i._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function B4(i){return(function(t){const n=new cn;return t.asyncQueue.enqueueAndForget((async()=>a4(await Vv(t),n))),n.promise})(vn(i=je(i,Pt)))}function z4(i){return b4(vn(i=je(i,Pt)))}function F4(i){return S4(vn(i=je(i,Pt)))}function q4(i,e){const t=vn(i=je(i,Pt)),n=new O4;return N4(t,i._databaseId,e,n),n}function j4(i,e){return P4(vn(i=je(i,Pt)),e).then((t=>t?new Cn(i,null,t.query):null))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(wt.fromBase64String(e))}catch(t){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ch(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:Ut("string",_n._jsonSchemaVersion),bytes:Ut("string")};/**
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
 */let js=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let co=class{constructor(e){this._methodName=e}};/**
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
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(Ch(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:Ut("string",Tr._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
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
 */class Jr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,a){if(n.length!==a.length)return!1;for(let l=0;l<n.length;++l)if(n[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ch(e,Jr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jr(e.vectorValues);throw new Z(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jr._jsonSchemaVersion="firestore/vectorValue/1.0",Jr._jsonSchema={type:Ut("string",Jr._jsonSchemaVersion),vectorValues:Ut("object")};/**
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
 */const H4=/^__.*__$/;class G4{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new nu(e,this.data,t,this.fieldTransforms)}}class _1{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function y1(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:i})}}class Bm{constructor(e,t,n,a,l,c){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return lm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(y1(this.Ac)&&H4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class K4{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Lh(e)}Cc(e,t,n,a=!1){return new Bm({Ac:e,methodName:t,Dc:n,path:ft.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ho(i){const e=i._freezeSettings(),t=Lh(i._databaseId);return new K4(i._databaseId,!!e.ignoreUndefinedProperties,t)}function zm(i,e,t,n,a,l={}){const c=i.Cc(l.merge||l.mergeFields?2:0,e,t,a);zv("Data must be an object, but it was:",c,n);const f=T1(n,c);let m,g;if(l.merge)m=new On(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const A=ay(e,T,t);if(!c.contains(A))throw new Z(j.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);I1(y,A)||y.push(A)}m=new On(y),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new G4(new un(f),m,g)}class zh extends co{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zh}}function v1(i,e,t){return new Bm({Ac:3,Dc:e.settings.Dc,methodName:i._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ov extends co{_toFieldTransform(e){return new Oh(e.path,new Bl)}isEqual(e){return e instanceof Ov}}class kv extends co{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=v1(this,e,!0),n=this.vc.map((l=>fo(l,t))),a=new to(n);return new Oh(e.path,a)}isEqual(e){return e instanceof kv&&xs(this.vc,e.vc)}}class Mv extends co{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=v1(this,e,!0),n=this.vc.map((l=>fo(l,t))),a=new no(n);return new Oh(e.path,a)}isEqual(e){return e instanceof Mv&&xs(this.vc,e.vc)}}class Lv extends co{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new zl(e.serializer,KS(e.serializer,this.Fc));return new Oh(e.path,t)}isEqual(e){return e instanceof Lv&&this.Fc===e.Fc}}function Uv(i,e,t,n){const a=i.Cc(1,e,t);zv("Data must be an object, but it was:",a,n);const l=[],c=un.empty();Ys(n,((m,g)=>{const y=Fv(e,m,t);g=Ee(g);const T=a.yc(y);if(g instanceof zh)l.push(y);else{const A=fo(g,T);A!=null&&(l.push(y),c.set(y,A))}}));const f=new On(l);return new _1(c,f,a.fieldTransforms)}function Bv(i,e,t,n,a,l){const c=i.Cc(1,e,t),f=[ay(e,n,t)],m=[a];if(l.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(ay(e,l[A])),m.push(l[A+1]);const g=[],y=un.empty();for(let A=f.length-1;A>=0;--A)if(!I1(g,f[A])){const x=f[A];let G=m[A];G=Ee(G);const X=c.yc(x);if(G instanceof zh)g.push(x);else{const K=fo(G,X);K!=null&&(g.push(x),y.set(x,K))}}const T=new On(g);return new _1(y,T,c.fieldTransforms)}function E1(i,e,t,n=!1){return fo(t,i.Cc(n?4:3,e))}function fo(i,e){if(w1(i=Ee(i)))return zv("Unsupported field value:",e,i),T1(i,e);if(i instanceof co)return(function(n,a){if(!y1(a.Ac))throw a.Sc(`${n._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${n._methodName}() is not currently supported inside arrays`);const l=n._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,a){const l=[];let c=0;for(const f of n){let m=fo(f,a.wc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(i,e)}return(function(n,a){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return KS(a.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const l=Qe.fromDate(n);return{timestampValue:Fl(a.serializer,l)}}if(n instanceof Qe){const l=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fl(a.serializer,l)}}if(n instanceof Tr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _n)return{bytesValue:iR(a.serializer,n._byteString)};if(n instanceof at){const l=a.databaseId,c=n.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:av(n.firestore._databaseId||a.databaseId,n._key.path)}}if(n instanceof Jr)return(function(c,f){return{mapValue:{fields:{[$y]:{stringValue:Wy},[Ml]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return ev(f.serializer,g)}))}}}}}})(n,a);throw a.Sc(`Unsupported field value: ${wm(n)}`)})(i,e)}function T1(i,e){const t={};return TS(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(i,((n,a)=>{const l=fo(a,e.mc(n));l!=null&&(t[n]=l)})),{mapValue:{fields:t}}}function w1(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof Tr||i instanceof _n||i instanceof at||i instanceof co||i instanceof Jr)}function zv(i,e,t){if(!w1(t)||!rS(t)){const n=wm(t);throw n==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+n)}}function ay(i,e,t){if((e=Ee(e))instanceof js)return e._internalPath;if(typeof e=="string")return Fv(i,e);throw lm("Field path arguments must be of type string or ",i,!1,void 0,t)}const Q4=new RegExp("[~\\*/\\[\\]]");function Fv(i,e,t){if(e.search(Q4)>=0)throw lm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new js(...e.split("."))._internalPath}catch{throw lm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function lm(i,e,t,n,a){const l=n&&!n.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${n}`),c&&(m+=` in document ${a}`),m+=")"),new Z(j.INVALID_ARGUMENT,f+i+m)}function I1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class _h{constructor(e,t,n,a,l){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Y4 extends _h{data(){return super.data()}}function Fm(i,e){return typeof e=="string"?Fv(i,e):e instanceof js?e._internalPath:e._delegate._internalPath}/**
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
 */function A1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qv{}class Fh extends qv{}function ws(i,e,...t){let n=[];e instanceof qv&&n.push(e),n=n.concat(t),(function(l){const c=l.filter((m=>m instanceof jv)).length,f=l.filter((m=>m instanceof qm)).length;if(c>1||c>0&&f>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const a of n)i=a._apply(i);return i}class qm extends Fh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new qm(e,t,n)}_apply(e){const t=this._parse(e);return S1(e._query,t),new Cn(e.firestore,e.converter,K_(e._query,t))}_parse(e){const t=ho(e.firestore);return(function(l,c,f,m,g,y,T){let A;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){E0(T,y);const G=[];for(const X of T)G.push(v0(m,l,X));A={arrayValue:{values:G}}}else A=v0(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||E0(T,y),A=E1(f,c,T,y==="in"||y==="not-in");return Le.create(g,y,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function $4(i,e,t){const n=e,a=Fm("where",i);return qm._create(a,n,t)}class jv extends qv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jv(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)S1(c,m),c=K_(c,m)})(e._query,t),new Cn(e.firestore,e.converter,K_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hv extends Fh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hv(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dh(l,c)})(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Bi(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function W4(i,e="asc"){const t=e,n=Fm("orderBy",i);return Hv._create(n,t)}class jm extends Fh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new jm(e,t,n)}_apply(e){return new Cn(e.firestore,e.converter,Jf(e._query,this._limit,this._limitType))}}function X4(i){return iS("limit",i),jm._create("limit",i,"F")}function J4(i){return iS("limitToLast",i),jm._create("limitToLast",i,"L")}class Hm extends Fh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Hm(e,t,n)}_apply(e){const t=b1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new Bi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function Z4(...i){return Hm._create("startAt",i,!0)}function eL(...i){return Hm._create("startAfter",i,!1)}class Gm extends Fh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Gm(e,t,n)}_apply(e){const t=b1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new Bi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function tL(...i){return Gm._create("endBefore",i,!1)}function nL(...i){return Gm._create("endAt",i,!0)}function b1(i,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof _h)return(function(l,c,f,m,g){if(!m)throw new Z(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const y=[];for(const T of Al(l))if(T.field.isKeyField())y.push(Za(c,m.key));else{const A=m.data.field(T.field);if(Rm(A))throw new Z(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const x=T.field.canonicalString();throw new Z(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${x}' (used as the orderBy) does not exist.`)}y.push(A)}return new zs(y,g)})(i._query,i.firestore._databaseId,e,t[0]._document,n);{const a=ho(i.firestore);return(function(c,f,m,g,y,T){const A=c.explicitOrderBy;if(y.length>A.length)throw new Z(j.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const x=[];for(let G=0;G<y.length;G++){const X=y[G];if(A[G].field.isKeyField()){if(typeof X!="string")throw new Z(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof X}`);if(!Jy(c)&&X.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${X}' contains a slash.`);const K=c.path.child(Me.fromString(X));if(!se.isDocumentKey(K))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${K}' is not because it contains an odd number of segments.`);const de=new se(K);x.push(Za(f,de))}else{const K=E1(m,g,X);x.push(K)}}return new zs(x,T)})(i._query,i.firestore._databaseId,a,e,t,n)}}function v0(i,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jy(e)&&t.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Me.fromString(t));if(!se.isDocumentKey(n))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Za(i,new se(n))}if(t instanceof at)return Za(i,t._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wm(t)}.`)}function E0(i,e){if(!Array.isArray(i)||i.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S1(i,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(i.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Gv{convertValue(e,t="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ys(e,((a,l)=>{n[a]=this.convertValue(l,t)})),n}convertVectorValue(e){var n,a,l;const t=(l=(a=(n=e.fields)==null?void 0:n[Ml].arrayValue)==null?void 0:a.values)==null?void 0:l.map((c=>ht(c.doubleValue)));return new Jr(t)}convertGeoPoint(e){return new Tr(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cm(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(uh(e));default:return null}}convertTimestamp(e){const t=ki(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Me.fromString(e);me(pR(n),9688,{name:e});const a=new Ls(n.get(1),n.get(3)),l=new se(n.popFirst(5));return a.isEqual(t)||Dt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Km(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class rL extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let cr=class R1 extends _h{constructor(e,t,n,a,l,c){super(e,t,n,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=R1._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",cr._jsonSchema={type:Ut("string",cr._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};let Wc=class extends cr{data(e={}){return super.data(e)}},wr=class C1{constructor(e,t,n,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Ga(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Wc(this._firestore,this._userDataWriter,n.key,n,new Ga(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const m=new Wc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ga(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new Wc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ga(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),y=c.indexOf(f.doc.key)),{type:iL(f.type),doc:m,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=C1._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),n.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function iL(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:i})}}function D1(i,e){return i instanceof cr&&e instanceof cr?i._firestore===e._firestore&&i._key.isEqual(e._key)&&(i._document===null?e._document===null:i._document.isEqual(e._document))&&i._converter===e._converter:i instanceof wr&&e instanceof wr&&i._firestore===e._firestore&&m1(i.query,e.query)&&i.metadata.isEqual(e.metadata)&&i._snapshot.isEqual(e._snapshot)}/**
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
 */function sL(i){i=je(i,at);const e=je(i.firestore,Pt);return a1(vn(e),i._key).then((t=>Kv(e,i,t)))}wr._jsonSchemaVersion="firestore/querySnapshot/1.0",wr._jsonSchema={type:Ut("string",wr._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class mo extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function aL(i){i=je(i,at);const e=je(i.firestore,Pt),t=vn(e),n=new mo(e);return R4(t,i._key).then((a=>new cr(e,n,i._key,a,new Ga(a!==null&&a.hasLocalMutations,!0),i.converter)))}function oL(i){i=je(i,at);const e=je(i.firestore,Pt);return a1(vn(e),i._key,{source:"server"}).then((t=>Kv(e,i,t)))}function lL(i){i=je(i,Cn);const e=je(i.firestore,Pt),t=vn(e),n=new mo(e);return A1(i._query),o1(t,i._query).then((a=>new wr(e,n,i,a)))}function uL(i){i=je(i,Cn);const e=je(i.firestore,Pt),t=vn(e),n=new mo(e);return C4(t,i._query).then((a=>new wr(e,n,i,a)))}function cL(i){i=je(i,Cn);const e=je(i.firestore,Pt),t=vn(e),n=new mo(e);return o1(t,i._query,{source:"server"}).then((a=>new wr(e,n,i,a)))}function T0(i,e,t){i=je(i,at);const n=je(i.firestore,Pt),a=Km(i.converter,e,t);return qh(n,[zm(ho(n),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,mt.none())])}function w0(i,e,t,...n){i=je(i,at);const a=je(i.firestore,Pt),l=ho(a);let c;return c=typeof(e=Ee(e))=="string"||e instanceof js?Bv(l,"updateDoc",i._key,e,t,n):Uv(l,"updateDoc",i._key,e),qh(a,[c.toMutation(i._key,mt.exists(!0))])}function hL(i){return qh(je(i.firestore,Pt),[new ru(i._key,mt.none())])}function dL(i,e){const t=je(i.firestore,Pt),n=om(i),a=Km(i.converter,e);return qh(t,[zm(ho(i.firestore),"addDoc",n._key,a,i.converter!==null,{}).toMutation(n._key,mt.exists(!1))]).then((()=>n))}function N1(i,...e){var m,g,y;i=Ee(i);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||sy(e[n])||(t=e[n++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(sy(e[n])){const T=e[n];e[n]=(m=T.next)==null?void 0:m.bind(T),e[n+1]=(g=T.error)==null?void 0:g.bind(T),e[n+2]=(y=T.complete)==null?void 0:y.bind(T)}let l,c,f;if(i instanceof at)c=je(i.firestore,Pt),f=tu(i._key.path),l={next:T=>{e[n]&&e[n](Kv(c,i,T))},error:e[n+1],complete:e[n+2]};else{const T=je(i,Cn);c=je(T.firestore,Pt),f=T._query;const A=new mo(c);l={next:x=>{e[n]&&e[n](new wr(c,A,T,x))},error:e[n+1],complete:e[n+2]},A1(i._query)}return(function(A,x,G,X){const K=new Lm(X),de=new bv(x,K,G);return A.asyncQueue.enqueueAndForget((async()=>wv(await Ql(A),de))),()=>{K.Nu(),A.asyncQueue.enqueueAndForget((async()=>Iv(await Ql(A),de)))}})(vn(c),f,a,l)}function fL(i,e){return D4(vn(i=je(i,Pt)),sy(e)?e:{next:e})}function qh(i,e){return(function(n,a){const l=new cn;return n.asyncQueue.enqueueAndForget((async()=>n4(await Vv(n),a,l))),l.promise})(vn(i),e)}function Kv(i,e,t){const n=t.docs.get(e._key),a=new mo(i);return new cr(i,a,e._key,n,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */let pL=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ho(e)}set(e,t,n){this._verifyNotCommitted();const a=Ss(e,this._firestore),l=Km(a.converter,t,n),c=zm(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,n);return this._mutations.push(c.toMutation(a._key,mt.none())),this}update(e,t,n,...a){this._verifyNotCommitted();const l=Ss(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof js?Bv(this._dataReader,"WriteBatch.update",l._key,t,n,a):Uv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ss(e,this._firestore);return this._mutations=this._mutations.concat(new ru(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ss(i,e){if((i=Ee(i)).firestore!==e)throw new Z(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */class gL{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ho(e)}get(e){const t=Ss(e,this._firestore),n=new rL(this._firestore);return this._transaction.lookup([t._key]).then((a=>{if(!a||a.length!==1)return he(24041);const l=a[0];if(l.isFoundDocument())return new _h(this._firestore,n,l.key,l,t.converter);if(l.isNoDocument())return new _h(this._firestore,n,t._key,null,t.converter);throw he(18433,{doc:l})}))}set(e,t,n){const a=Ss(e,this._firestore),l=Km(a.converter,t,n),c=zm(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,n);return this._transaction.set(a._key,c),this}update(e,t,n,...a){const l=Ss(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof js?Bv(this._dataReader,"Transaction.update",l._key,t,n,a):Uv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=Ss(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let _L=class extends gL{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ss(e,this._firestore),n=new mo(this._firestore);return super.get(e).then((a=>new cr(this._firestore,n,t._key,a._document,new Ga(!1,!1),t.converter)))}};function yL(i,e,t){i=je(i,Pt);const n={...mL,...t};return(function(l){if(l.maxAttempts<1)throw new Z(j.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(l,c,f){const m=new cn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await A4(l);new w4(l.asyncQueue,g,f,c,m).ju()})),m.promise})(vn(i),(a=>e(new _L(i,a))),n)}/**
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
 */function vL(){return new zh("deleteField")}function EL(){return new Ov("serverTimestamp")}function TL(...i){return new kv("arrayUnion",i)}function wL(...i){return new Mv("arrayRemove",i)}function IL(i){return new Lv("increment",i)}(function(e,t=!0){(function(a){eu=a})(Hs),ks(new Zr("firestore",((n,{instanceIdentifier:a,options:l})=>{const c=n.getProvider("app").getImmediate(),f=new Pt(new gO(n.getProvider("auth-internal")),new vO(c,n.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Er(JI,ZI,e),Er(JI,ZI,"esm2020")})();const AL="@firebase/firestore-compat",bL="0.4.1";/**
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
 */function I0(){if(typeof Uint8Array>"u")throw new Z("unimplemented","Uint8Arrays are not available in this environment.")}function A0(){if(!ek())throw new Z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class yh{constructor(e){this._delegate=e}static fromBase64String(e){return A0(),new yh(_n.fromBase64String(e))}static fromUint8Array(e){return I0(),new yh(_n.fromUint8Array(e))}toBase64(){return A0(),this._delegate.toBase64()}toUint8Array(){return I0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */class RL{enableIndexedDbPersistence(e,t){return M4(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return L4(e._delegate)}clearIndexedDbPersistence(e){return U4(e._delegate)}}class P1{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ls||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ni("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e={...t,...e},delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){x4(this._delegate,e,t,n)}enableNetwork(){return z4(this._delegate)}disableNetwork(){return F4(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,nS("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return B4(this._delegate)}onSnapshotsInSync(e){return fL(this._delegate,e)}get app(){if(!this._appCompat)throw new Z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Yl(this,d1(this._delegate,e))}catch(t){throw bn(t,"collection()","Firestore.collection()")}}doc(e){try{return new ur(this,om(this._delegate,e))}catch(t){throw bn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new An(this,V4(this._delegate,e))}catch(t){throw bn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return yL(this._delegate,t=>e(new x1(this,t)))}batch(){return vn(this._delegate),new V1(new pL(this._delegate,e=>qh(this._delegate,e)))}loadBundle(e){return q4(this._delegate,e)}namedQuery(e){return j4(this._delegate,e).then(t=>t?new An(this,t):null)}}class Qm extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yh(new _n(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ur.forKey(t,this.firestore,null)}}function CL(i){dO(i)}class x1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Qm(e)}get(e){const t=Ka(e);return this._delegate.get(t).then(n=>new vh(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const a=Ka(e);return n?(Qv("Transaction.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Ka(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Ka(e);return this._delegate.delete(t),this}}class V1{constructor(e){this._delegate=e}set(e,t,n){const a=Ka(e);return n?(Qv("WriteBatch.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Ka(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Ka(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class oo{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Wc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Eh(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=oo.INSTANCES;let a=n.get(e);a||(a=new WeakMap,n.set(e,a));let l=a.get(t);return l||(l=new oo(e,new Qm(e),t),a.set(t,l)),l}}oo.INSTANCES=new WeakMap;class ur{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ur(t,new at(t._delegate,n,new se(e)))}static forKey(e,t,n){return new ur(t,new at(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Yl(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Yl(this.firestore,d1(this._delegate,e))}catch(t){throw bn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ee(e),e instanceof at?f1(this._delegate,e):!1}set(e,t){t=Qv("DocumentReference.set",t);try{return t?T0(this._delegate,e,t):T0(this._delegate,e)}catch(n){throw bn(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?w0(this._delegate,e):w0(this._delegate,e,t,...n)}catch(a){throw bn(a,"updateDoc()","DocumentReference.update()")}}delete(){return hL(this._delegate)}onSnapshot(...e){const t=O1(e),n=k1(e,a=>new vh(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return N1(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=aL(this._delegate):(e==null?void 0:e.source)==="server"?t=oL(this._delegate):t=sL(this._delegate),t.then(n=>new vh(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new ur(this.firestore,e?this._delegate.withConverter(oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bn(i,e,t){return i.message=i.message.replace(e,t),i}function O1(i){for(const e of i)if(typeof e=="object"&&!oy(e))return e;return{}}function k1(i,e){var n,a;let t;return oy(i[0])?t=i[0]:oy(i[1])?t=i[1]:typeof i[0]=="function"?t={next:i[0],error:i[1],complete:i[2]}:t={next:i[1],error:i[2],complete:i[3]},{next:l=>{t.next&&t.next(e(l))},error:(n=t.error)==null?void 0:n.bind(t),complete:(a=t.complete)==null?void 0:a.bind(t)}}class vh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ur(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return D1(this._delegate,e._delegate)}}class Eh extends vh{data(e){const t=this._delegate.data(e);return this._delegate._converter||fO(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class An{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qm(e)}where(e,t,n){try{return new An(this.firestore,ws(this._delegate,$4(e,t,n)))}catch(a){throw bn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new An(this.firestore,ws(this._delegate,W4(e,t)))}catch(n){throw bn(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new An(this.firestore,ws(this._delegate,X4(e)))}catch(t){throw bn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new An(this.firestore,ws(this._delegate,J4(e)))}catch(t){throw bn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new An(this.firestore,ws(this._delegate,Z4(...e)))}catch(t){throw bn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new An(this.firestore,ws(this._delegate,eL(...e)))}catch(t){throw bn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new An(this.firestore,ws(this._delegate,tL(...e)))}catch(t){throw bn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new An(this.firestore,ws(this._delegate,nL(...e)))}catch(t){throw bn(t,"endAt()","Query.endAt()")}}isEqual(e){return m1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=uL(this._delegate):(e==null?void 0:e.source)==="server"?t=cL(this._delegate):t=lL(this._delegate),t.then(n=>new ly(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=O1(e),n=k1(e,a=>new ly(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return N1(this._delegate,t,n)}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class DL{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Eh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ly{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new An(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Eh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new DL(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Eh(this._firestore,n))})}isEqual(e){return D1(this._delegate,e._delegate)}}class Yl extends An{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ur(this.firestore,e):null}doc(e){try{return e===void 0?new ur(this.firestore,om(this._delegate)):new ur(this.firestore,om(this._delegate,e))}catch(t){throw bn(t,"doc()","CollectionReference.doc()")}}add(e){return dL(this._delegate,e).then(t=>new ur(this.firestore,t))}isEqual(e){return f1(this._delegate,e._delegate)}withConverter(e){return new Yl(this.firestore,e?this._delegate.withConverter(oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ka(i){return je(i,at)}/**
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
 */class Yv{constructor(...e){this._delegate=new js(...e)}static documentId(){return new Yv(ft.keyField().canonicalString())}isEqual(e){return e=Ee(e),e instanceof js?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class qa{static serverTimestamp(){const e=EL();return e._methodName="FieldValue.serverTimestamp",new qa(e)}static delete(){const e=vL();return e._methodName="FieldValue.delete",new qa(e)}static arrayUnion(...e){const t=TL(...e);return t._methodName="FieldValue.arrayUnion",new qa(t)}static arrayRemove(...e){const t=wL(...e);return t._methodName="FieldValue.arrayRemove",new qa(t)}static increment(e){const t=IL(e);return t._methodName="FieldValue.increment",new qa(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const NL={Firestore:P1,GeoPoint:Tr,Timestamp:Qe,Blob:yh,Transaction:x1,WriteBatch:V1,DocumentReference:ur,DocumentSnapshot:vh,Query:An,QueryDocumentSnapshot:Eh,QuerySnapshot:ly,CollectionReference:Yl,FieldPath:Yv,FieldValue:qa,setLogLevel:CL,CACHE_SIZE_UNLIMITED:k4};function PL(i,e){i.INTERNAL.registerComponent(new Zr("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(n,a)},"PUBLIC").setServiceProps({...NL}))}/**
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
 */function xL(i){PL(i,(e,t)=>new P1(e,t,new RL)),i.registerVersion(AL,bL)}xL(ei);const VL={apiKey:"AIzaSyCZh_PwX7LZfXujZiHGH9T-8uA17hNQGBY",authDomain:"bkomhate-site.firebaseapp.com",projectId:"bkomhate-site",storageBucket:"bkomhate-site.firebasestorage.app",messagingSenderId:"37549082348",appId:"1:37549082348:web:cf0c6c4f504b40192887c9"};ei.apps.length||ei.initializeApp(VL);const E_=ei.auth(),kc=ei.firestore(),M1=ei.firestore,T_=()=>W.jsx("header",{className:"bg-black/50 border-b-2 border-amber-500/50 p-4",children:W.jsxs("div",{className:"container mx-auto text-center",children:[W.jsx("h1",{className:"font-display text-4xl md:text-5xl text-amber-400 tracking-widest",children:"B_KOMHATE"}),W.jsx("p",{className:"text-stone-400 text-sm tracking-wider",children:"ГЕНЕРАТОР КОДОВЫХ СЛОВ"})]})}),OL=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:W.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v4H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v4H8z",clipRule:"evenodd"})}),kL=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),ML=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),LL=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:W.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})}),UL=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),BL=()=>W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:W.jsx("path",{d:"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"})}),zL=()=>W.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[W.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),W.jsx("path",{fillRule:"evenodd",d:"M.458 10C3.732 4.943 9.522 4.5 10 4.5c.478 0 6.268.443 9.542 5.5.25.362.25.868 0 1.23C16.268 15.057 10.478 15.5 10 15.5c-.478 0-6.268-.443-9.542-5.5a.75.75 0 010-1.23zM10 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",clipRule:"evenodd"})]}),FL=()=>{const[i,e]=Ct.useState(""),[t,n]=Ct.useState(""),[a,l]=Ct.useState(""),{login:c}=$v(),f=async m=>{m.preventDefault(),l("");try{await c(i,t)}catch(g){l("Ошибка входа. Проверьте почту и пароль."),console.error(g)}};return W.jsx("div",{className:"flex flex-col items-center justify-center min-h-[60vh]",children:W.jsxs("div",{className:"w-full max-w-sm p-8 bg-stone-800/50 border border-stone-700 rounded-md",children:[W.jsx("h2",{className:"font-display text-3xl text-center text-stone-200 mb-6",children:"ВХОД В ПАНЕЛЬ"}),W.jsxs("form",{onSubmit:f,className:"space-y-4",children:[W.jsx("input",{type:"email",value:i,onChange:m=>e(m.target.value),placeholder:"Email",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all","aria-label":"Email",required:!0}),W.jsx("input",{type:"password",value:t,onChange:m=>n(m.target.value),placeholder:"Пароль",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all","aria-label":"Password",required:!0}),W.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:[W.jsx(OL,{}),"ВОЙТИ"]}),a&&W.jsx("p",{className:"text-red-500 text-center mt-4",children:a})]})]})})},qL=({codeword:i,onUpdate:e,onDelete:t})=>{const[n,a]=Ct.useState(i.usedMessage),[l,c]=Ct.useState(i.introText||"ВАШЕ КОДОВОЕ СЛОВО:"),f=`${window.location.origin}${window.location.pathname}?c=${i.id}`,m=`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(f)}`,g=async()=>{try{const y=await fetch(m);if(!y.ok)throw new Error("QR code fetch failed");const T=await y.blob(),A=window.URL.createObjectURL(T),x=document.createElement("a");x.href=A;const G=i.word.replace(/[^a-z0-9а-яё]/gi,"_").toLowerCase();x.setAttribute("download",`qr_${G}.png`),document.body.appendChild(x),x.click(),x.parentNode&&x.parentNode.removeChild(x),window.URL.revokeObjectURL(A)}catch(y){console.error("Failed to download QR code",y),alert("Не удалось скачать QR-код.")}};return W.jsxs("div",{className:"bg-stone-800/70 border border-stone-700 p-4 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 items-start",children:[W.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[W.jsx("img",{src:m,alt:"QR Code",className:"w-36 h-36 border-2 border-stone-600 rounded-md"}),W.jsxs("button",{onClick:g,className:"flex items-center justify-center gap-2 w-full bg-stone-600 hover:bg-stone-500 text-stone-200 px-3 py-2 rounded-md text-sm transition-colors",children:[W.jsx(UL,{}),"Скачать QR"]}),W.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-amber-400 hover:text-amber-300 break-all text-center pt-1",children:f})]}),W.jsxs("div",{className:"md:col-span-2 space-y-3",children:[W.jsxs("div",{children:[W.jsx("label",{htmlFor:`introText_${i.id}`,className:"text-sm font-bold text-stone-400 block",children:"Вступительный текст:"}),W.jsx("div",{className:"flex gap-2",children:W.jsx("input",{id:`introText_${i.id}`,type:"text",value:l,onChange:y=>c(y.target.value),onBlur:()=>e(i.id,{introText:l}),className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"})})]}),W.jsxs("div",{children:[W.jsx("label",{className:"text-sm font-bold text-stone-400 block",children:"Кодовое слово:"}),W.jsx("p",{className:"text-lg bg-stone-900 p-2 rounded-md font-bold text-stone-100 break-words",children:i.word})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:`usedMsg_${i.id}`,className:"text-sm font-bold text-stone-400 block",children:"Сообщение (если использовано):"}),W.jsx("div",{className:"flex gap-2",children:W.jsx("input",{id:`usedMsg_${i.id}`,type:"text",value:n,onChange:y=>a(y.target.value),onBlur:()=>e(i.id,{usedMessage:n}),className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"})})]}),W.jsxs("div",{className:"flex items-center justify-between pt-2",children:[W.jsxs("label",{htmlFor:`toggle_${i.id}`,className:"flex items-center cursor-pointer",children:[W.jsxs("div",{className:"relative",children:[W.jsx("input",{type:"checkbox",id:`toggle_${i.id}`,className:"sr-only",checked:i.isUsed,onChange:()=>e(i.id,{isUsed:!i.isUsed})}),W.jsx("div",{className:`block ${i.isUsed?"bg-amber-500":"bg-stone-600"} w-14 h-8 rounded-full transition-colors`}),W.jsx("div",{className:`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${i.isUsed?"transform translate-x-6":""}`})]}),W.jsx("div",{className:"ml-3 text-stone-300 font-semibold",children:i.isUsed?"ИСПОЛЬЗОВАНО":"АКТИВНО"})]}),W.jsxs("div",{className:"flex items-center gap-4 text-stone-400",children:[W.jsxs("div",{className:"flex items-center gap-1",title:"Просмотры",children:[W.jsx(zL,{}),W.jsx("span",{children:i.views||0})]}),W.jsxs("button",{onClick:()=>t(i.id),className:"flex items-center gap-1 bg-red-800 hover:bg-red-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors",children:[W.jsx(LL,{}),"Удалить"]})]})]})]})]})},jL=()=>{const{logout:i,changePassword:e}=$v(),[t,n]=Ct.useState([]),[a,l]=Ct.useState(""),[c,f]=Ct.useState("Этот код уже был использован."),[m,g]=Ct.useState("ВАШЕ КОДОВОЕ СЛОВО:"),[y,T]=Ct.useState("");Ct.useEffect(()=>{const de=kc.collection("codewords").orderBy("createdAt","desc").onSnapshot(ce=>{const ae=ce.docs.map(Ie=>({...Ie.data(),id:Ie.id}));n(ae)},ce=>{console.error("Error fetching codewords from Firestore:",ce),alert("Не удалось загрузить данные. Проверьте настройки Firebase и подключение к сети.")});return()=>de()},[]);const A=async K=>{if(K.preventDefault(),a.trim()!=="")try{await kc.collection("codewords").add({word:a.trim(),isUsed:!1,usedMessage:c.trim()||"Этот код уже был использован.",introText:m.trim()||"ВАШЕ КОДОВОЕ СЛОВО:",createdAt:M1.FieldValue.serverTimestamp(),views:0}),l(""),g("ВАШЕ КОДОВОЕ СЛОВО:"),f("Этот код уже был использован.")}catch(de){console.error("Error adding codeword to Firestore: ",de),alert("Ошибка при добавлении кода.")}},x=async(K,de)=>{const ce=kc.collection("codewords").doc(K);try{await ce.update(de)}catch(ae){console.error("Error updating codeword in Firestore: ",ae),alert("Ошибка при обновлении кода.")}},G=async K=>{if(window.confirm("Вы уверены, что хотите удалить этот код? Это действие необратимо.")){const de=kc.collection("codewords").doc(K);try{await de.delete()}catch(ce){console.error("Error deleting codeword from Firestore: ",ce),alert("Ошибка при удалении кода.")}}},X=async K=>{if(K.preventDefault(),window.confirm("Вы уверены, что хотите изменить пароль?"))try{await e(y),alert("Пароль успешно изменен!"),T("")}catch(de){alert(`Ошибка изменения пароля: ${de.message}`)}};return W.jsxs("div",{className:"container mx-auto py-8 px-4",children:[W.jsxs("div",{className:"flex justify-between items-center mb-6",children:[W.jsx("h2",{className:"font-display text-4xl text-stone-200",children:"Панель управления"}),W.jsx("button",{onClick:i,className:"bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold py-2 px-4 rounded-md transition-colors",children:"Выйти"})]}),W.jsxs("div",{className:"bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8",children:[W.jsx("h3",{className:"font-display text-2xl text-amber-400 mb-4",children:"Изменить пароль"}),W.jsxs("form",{onSubmit:X,className:"space-y-4",children:[W.jsx("input",{type:"password",value:y,onChange:K=>T(K.target.value),placeholder:"Новый пароль (минимум 6 символов)",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),W.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:[W.jsx(BL,{})," Сохранить пароль"]})]})]}),W.jsxs("div",{className:"bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8",children:[W.jsx("h3",{className:"font-display text-2xl text-amber-400 mb-4",children:"Добавить новый код"}),W.jsxs("form",{onSubmit:A,className:"space-y-4",children:[W.jsx("input",{type:"text",value:m,onChange:K=>g(K.target.value),placeholder:"Вступительный текст (обращение)",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),W.jsx("input",{type:"text",value:a,onChange:K=>l(K.target.value),placeholder:"Новое кодовое слово",required:!0,className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),W.jsx("input",{type:"text",value:c,onChange:K=>f(K.target.value),placeholder:"Сообщение если код использован",className:"w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"}),W.jsx("button",{type:"submit",className:"w-full font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors",children:"Создать QR-код"})]})]}),W.jsx("div",{className:"space-y-4",children:t.map(K=>W.jsx(qL,{codeword:K,onUpdate:x,onDelete:G},K.id))})]})},HL=({codeId:i})=>{const[e,t]=Ct.useState(null),[n,a]=Ct.useState("loading"),[l,c]=Ct.useState(!1);Ct.useEffect(()=>{if(i){const m=kc.collection("codewords").doc(i);(async()=>{try{const y=await m.get();if(y.exists){t({id:y.id,...y.data()}),a("found");const T=`viewed-${i}`;sessionStorage.getItem(T)||(await m.update({views:M1.FieldValue.increment(1)}),sessionStorage.setItem(T,"true"))}else a("not-found")}catch(y){console.error("Failed to fetch codeword from Firestore:",y),a("error")}})()}},[i]);const f=()=>{e&&!e.isUsed&&(navigator.clipboard.writeText(e.word),c(!0),setTimeout(()=>c(!1),2e3))};return n==="loading"?W.jsx("div",{className:"flex items-center justify-center min-h-[80vh]",children:W.jsx("p",{className:"font-display text-2xl text-stone-400 animate-pulse",children:"ПОИСК КОДА..."})}):n==="not-found"||n==="error"?W.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[W.jsx("h2",{className:"font-display text-6xl text-red-500",children:"404"}),W.jsx("p",{className:"text-stone-300 text-xl mt-2",children:"Код не найден."}),W.jsx("p",{className:"text-stone-500",children:"Возможно, ссылка неверна или код был удален."})]}):e&&e.isUsed?W.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[W.jsx("h2",{className:"font-display text-5xl text-amber-500",children:"КОД ИСПОЛЬЗОВАН"}),W.jsx("p",{className:"text-stone-300 text-xl mt-4 max-w-lg",children:e.usedMessage})]}):W.jsx("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:W.jsxs("div",{className:"w-full max-w-2xl bg-stone-800/50 border-2 border-stone-700 p-8 rounded-lg",children:[W.jsx("p",{className:"text-stone-400 font-display text-2xl",children:(e==null?void 0:e.introText)||"ВАШЕ КОДОВОЕ СЛОВО:"}),W.jsx("p",{className:"text-amber-400 font-bold text-3xl md:text-5xl my-4 break-words select-all",children:e==null?void 0:e.word}),W.jsxs("button",{onClick:f,className:"w-full flex items-center justify-center gap-3 mt-6 bg-stone-700 hover:bg-amber-500 hover:text-stone-900 text-stone-200 font-display text-2xl py-3 rounded-md transition-all duration-300",children:[l?W.jsx(ML,{}):W.jsx(kL,{}),l?"СКОПИРОВАНО!":"СКОПИРОВАТЬ КОД"]})]})})},L1=Ct.createContext(null),$v=()=>{const i=Ct.useContext(L1);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},GL=({children:i})=>{const[e,t]=Ct.useState(null),[n,a]=Ct.useState(!0);Ct.useEffect(()=>E_.onAuthStateChanged(y=>{t(y),a(!1)}),[]);const m={currentUser:e,loading:n,login:(g,y)=>E_.signInWithEmailAndPassword(g,y),logout:()=>E_.signOut(),changePassword:g=>e?!g||g.length<6?Promise.reject(new Error("Пароль должен содержать не менее 6 символов.")):e.updatePassword(g):Promise.reject(new Error("Пользователь не авторизован."))};return W.jsx(L1.Provider,{value:m,children:!n&&i})},KL=()=>{const{currentUser:i}=$v();return i?W.jsx(jL,{}):W.jsx(FL,{})},QL=()=>{const i=new URLSearchParams(window.location.search).get("c"),e=window.location.hash,t="min-h-screen bg-stone-900 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23292524%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]";return i?W.jsxs("div",{className:t,children:[W.jsx(T_,{}),W.jsx("main",{children:W.jsx(HL,{codeId:i})})]}):e&&e!=="#/admin"?W.jsxs("div",{className:t,children:[W.jsx(T_,{}),W.jsx("main",{children:W.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center p-4",children:[W.jsx("h2",{className:"font-display text-6xl text-red-500",children:"404"}),W.jsx("p",{className:"text-stone-300 text-xl mt-2",children:"Страница не найдена."}),W.jsx("a",{href:"/#/admin",className:"text-amber-400 hover:text-amber-300 mt-4",children:"Перейти в панель управления"})]})})]}):W.jsx(GL,{children:W.jsxs("div",{className:t,children:[W.jsx(T_,{}),W.jsx("main",{children:W.jsx(KL,{})})]})})},U1=document.getElementById("root");if(!U1)throw new Error("Could not find root element to mount to");const YL=ED.createRoot(U1);YL.render(W.jsx(dD.StrictMode,{children:W.jsx(QL,{})}));
