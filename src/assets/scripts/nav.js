var K1=function(J,Q){J.indexOf(Q)===-1&&J.push(Q)};var p=(J,Q,Z)=>Math.min(Math.max(Z,J),Q);var Y={duration:0.3,delay:0,endDelay:0,repeat:0,easing:"ease"};var x=(J)=>typeof J==="number";var S=(J)=>Array.isArray(J)&&!x(J[0]);var x1=(J,Q,Z)=>{const W=Q-J;return((Z-J)%W+W)%W+J};var _1=function(J,Q){return S(J)?J[x1(0,J.length,Q)]:J};var n=(J,Q,Z)=>-Z*J+Z*Q+J;var y=()=>{},h=(J)=>J;var D=(J,Q,Z)=>Q-J===0?1:(Z-J)/(Q-J);var M1=function(J,Q){const Z=J[J.length-1];for(let W=1;W<=Q;W++){const q=D(0,Q,W);J.push(n(Z,1,q))}},F1=function(J){const Q=[0];return M1(Q,J-1),Q};var U1=function(J,Q=F1(J.length),Z=h){const W=J.length,q=W-Q.length;return q>0&&M1(Q,q),($)=>{let G=0;for(;G<W-2;G++)if($<Q[G+1])break;let H=p(0,1,D(Q[G],Q[G+1],$));return H=_1(Z,G)(H),n(J[G],J[G+1],H)}};var d=(J)=>Array.isArray(J)&&x(J[0]);var P=(J)=>typeof J==="object"&&Boolean(J.createAnimation);var R=(J)=>typeof J==="function";var Y1=(J)=>typeof J==="string";var B={ms:(J)=>J*1000,s:(J)=>J/1000};var r1=function(J,Q,Z,W,q){let $,G,H=0;do if(G=Q+(Z-Q)/2,$=B1(G,W,q)-J,$>0)Z=G;else Q=G;while(Math.abs($)>l1&&++H<m1);return G},T=function(J,Q,Z,W){if(J===Q&&Z===W)return h;const q=($)=>r1($,0,1,J,Z);return($)=>$===0||$===1?$:B1(q($),Q,W)},B1=(J,Q,Z)=>(((1-3*Z+3*Q)*J+(3*Z-6*Q))*J+3*Q)*J,l1=0.0000001,m1=12;var h1=(J,Q="end")=>(Z)=>{Z=Q==="end"?Math.min(Z,0.999):Math.max(Z,0.001);const W=Z*J,q=Q==="end"?Math.floor(W):Math.ceil(W);return p(0,1,q/J)};var w1=function(J){if(R(J))return J;if(d(J))return T(...J);if(C1[J])return C1[J];if(J.startsWith("steps")){const Q=o1.exec(J);if(Q){const Z=Q[1].split(",");return h1(parseFloat(Z[0]),Z[1].trim())}}return h},C1={ease:T(0.25,0.1,0.25,1),"ease-in":T(0.42,0,1,1),"ease-in-out":T(0.42,0,0.58,1),"ease-out":T(0,0,0.58,1)},o1=/\((.*?)\)/;class b{constructor(J,Q=[0,1],{easing:Z,duration:W=Y.duration,delay:q=Y.delay,endDelay:$=Y.endDelay,repeat:G=Y.repeat,offset:H,direction:w="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=h,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((L,z)=>{this.resolve=L,this.reject=z}),Z=Z||Y.easing,P(Z)){const L=Z.createAnimation(Q);Z=L.easing,Q=L.keyframes||Q,W=L.duration||W}this.repeat=G,this.easing=S(Z)?h:w1(Z),this.updateDuration(W);const _=U1(Q,H,S(Z)?Z.map(w1):h);this.tick=(L)=>{var z;q=q;let K=0;if(this.pauseTime!==void 0)K=this.pauseTime;else K=(L-this.startTime)*this.rate;if(this.t=K,K/=1000,K=Math.max(K-q,0),this.playState==="finished"&&this.pauseTime===void 0)K=this.totalDuration;const v=K/this.duration;let o=Math.floor(v),X=v%1;if(!X&&v>=1)X=1;X===1&&o--;const s=o%2;if(w==="reverse"||w==="alternate"&&s||w==="alternate-reverse"&&!s)X=1-X;const H1=K>=this.totalDuration?1:Math.min(X,1),E=_(this.easing(H1));if(J(E),this.pauseTime===void 0&&(this.playState==="finished"||K>=this.totalDuration+$))this.playState="finished",(z=this.resolve)===null||z===void 0||z.call(this,E);else if(this.playState!=="idle")this.frameRequestId=requestAnimationFrame(this.tick)},this.play()}play(){const J=performance.now();if(this.playState="running",this.pauseTime!==void 0)this.startTime=J-this.pauseTime;else if(!this.startTime)this.startTime=J;this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var J;if(this.playState="idle",this.frameRequestId!==void 0)cancelAnimationFrame(this.frameRequestId);(J=this.reject)===null||J===void 0||J.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(J){this.duration=J,this.totalDuration=J*(this.repeat+1)}get currentTime(){return this.t}set currentTime(J){if(this.pauseTime!==void 0||this.rate===0)this.pauseTime=J;else this.startTime=performance.now()-J/this.rate}get playbackRate(){return this.rate}set playbackRate(J){this.rate=J}}var s1=function(){},e=function(){};s1=function(J,Q){if(!J&&typeof console!=="undefined")console.warn(Q)},e=function(J,Q){if(!J)throw new Error(Q)};class J1{setAnimation(J){this.animation=J,J===null||J===void 0||J.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}var Q1=function(J){if(!L1.has(J))L1.set(J,{transforms:[],values:new Map});return L1.get(J)},N1=function(J,Q){if(!J.has(Q))J.set(Q,new J1);return J.get(Q)},L1=new WeakMap;var t1=["","X","Y","Z"],a1=["translate","scale","rotate","skew"],f={x:"translateX",y:"translateY",z:"translateZ"},V1={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:(J)=>J+"deg"},i1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:(J)=>J+"px"},rotate:V1,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:h},skew:V1},C=new Map,W1=(J)=>`--motion-${J}`,Z1=["x","y","z"];a1.forEach((J)=>{t1.forEach((Q)=>{Z1.push(J+Q),C.set(W1(J+Q),i1[J])})});var n1=(J,Q)=>Z1.indexOf(J)-Z1.indexOf(Q),e1=new Set(Z1),q1=(J)=>e1.has(J),D1=(J,Q)=>{if(f[Q])Q=f[Q];const{transforms:Z}=Q1(J);K1(Z,Q),J.style.transform=JJ(Z)},JJ=(J)=>J.sort(n1).reduce(QJ,"").trim(),QJ=(J,Q)=>`${J} ${Q}(var(${W1(Q)}))`;var I1=function(J){if(T1.has(J))return;T1.add(J);try{const{syntax:Q,initialValue:Z}=C.has(J)?C.get(J):{};CSS.registerProperty({name:J,inherits:!1,syntax:Q,initialValue:Z})}catch(Q){}},u=(J)=>J.startsWith("--"),T1=new Set;var R1=(J,Q)=>document.createElement("div").animate(J,Q),E1={cssRegisterProperty:()=>typeof CSS!=="undefined"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{R1({opacity:[1]})}catch(J){return!1}return!0},finished:()=>Boolean(R1({opacity:[0,1]},{duration:0.001}).finished),linearEasing:()=>{try{R1({opacity:0},{easing:"linear(0, 1)"})}catch(J){return!1}return!0}},z1={},N={};for(let J in E1)N[J]=()=>{if(z1[J]===void 0)z1[J]=E1[J]();return z1[J]};var ZJ=0.015,WJ=(J,Q)=>{let Z="";const W=Math.round(Q/ZJ);for(let q=0;q<W;q++)Z+=J(D(0,W-1,q))+", ";return Z.substring(0,Z.length-2)},O1=(J,Q)=>{if(R(J))return N.linearEasing()?`linear(${WJ(J,Q)})`:Y.easing;else return d(J)?qJ(J):J},qJ=([J,Q,Z,W])=>`cubic-bezier(${J}, ${Q}, ${Z}, ${W})`;var P1=function(J,Q){for(let Z=0;Z<J.length;Z++)if(J[Z]===null)J[Z]=Z?J[Z-1]:Q();return J},b1=(J)=>Array.isArray(J)?J:[J];var g=function(J){if(f[J])J=f[J];return q1(J)?W1(J):J};var l={get:(J,Q)=>{Q=g(Q);let Z=u(Q)?J.style.getPropertyValue(Q):getComputedStyle(J)[Q];if(!Z&&Z!==0){const W=C.get(Q);if(W)Z=W.initialValue}return Z},set:(J,Q,Z)=>{if(Q=g(Q),u(Q))J.style.setProperty(Q,Z);else J.style[Q]=Z}};var $1=function(J,Q=!0){if(!J||J.playState==="finished")return;try{if(J.stop)J.stop();else Q&&J.commitStyles(),J.cancel()}catch(Z){}};var A1=function(J,Q){var Z;let W=(Q===null||Q===void 0?void 0:Q.toDefaultUnit)||h;const q=J[J.length-1];if(Y1(q)){const $=((Z=q.match(/(-?[\d.]+)([a-z%]*)/))===null||Z===void 0?void 0:Z[2])||"";if($)W=(G)=>G+$}return W};var $J=function(){return window.__MOTION_DEV_TOOLS_RECORD},j1=function(J,Q,Z,W={},q){const $=$J(),G=W.record!==!1&&$;let H,{duration:w=Y.duration,delay:_=Y.delay,endDelay:L=Y.endDelay,repeat:z=Y.repeat,easing:K=Y.easing,persist:v=!1,direction:o,offset:X,allowWebkitAcceleration:s=!1}=W;const H1=Q1(J),E=q1(Q);let t=N.waapi();E&&D1(J,Q);const O=g(Q),a=N1(H1.values,O),F=C.get(O);return $1(a.animation,!(P(K)&&a.generator)&&W.record!==!1),()=>{const i=()=>{var M,c;return(c=(M=l.get(J,O))!==null&&M!==void 0?M:F===null||F===void 0?void 0:F.initialValue)!==null&&c!==void 0?c:0};let U=P1(b1(Z),i);const X1=A1(U,F);if(P(K)){const M=K.createAnimation(U,Q!=="opacity",i,O,a);K=M.easing,U=M.keyframes||U,w=M.duration||w}if(u(O))if(N.cssRegisterProperty())I1(O);else t=!1;if(E&&!N.linearEasing()&&(R(K)||S(K)&&K.some(R)))t=!1;if(t){if(F)U=U.map((V)=>x(V)?F.toDefaultUnit(V):V);if(U.length===1&&(!N.partialKeyframes()||G))U.unshift(i());const M={delay:B.ms(_),duration:B.ms(w),endDelay:B.ms(L),easing:!S(K)?O1(K,w):void 0,direction:o,iterations:z+1,fill:"both"};if(H=J.animate({[O]:U,offset:X,easing:S(K)?K.map((V)=>O1(V,w)):void 0},M),!H.finished)H.finished=new Promise((V,g1)=>{H.onfinish=V,H.oncancel=g1});const c=U[U.length-1];if(H.finished.then(()=>{if(v)return;l.set(J,O,c),H.cancel()}).catch(y),!s)H.playbackRate=1.000001}else if(q&&E){if(U=U.map((M)=>typeof M==="string"?parseFloat(M):M),U.length===1)U.unshift(parseFloat(i()));H=new q((M)=>{l.set(J,O,X1?X1(M):M)},U,Object.assign(Object.assign({},W),{duration:w,easing:K}))}else{const M=U[U.length-1];l.set(J,O,F&&x(M)?F.toDefaultUnit(M):M)}if(G)$(J,Q,U,{duration:w,delay:_,easing:K,repeat:z,offset:X},"motion-one");return a.setAnimation(H),H}};var k1=(J,Q)=>J[Q]?Object.assign(Object.assign({},J),J[Q]):Object.assign({},J);var v1=function(J,Q){var Z;if(typeof J==="string")if(Q)(Z=Q[J])!==null&&Z!==void 0||(Q[J]=document.querySelectorAll(J)),J=Q[J];else J=document.querySelectorAll(J);else if(J instanceof Element)J=[J];return Array.from(J||[])};var GJ=(J)=>J(),m=(J,Q,Z=Y.duration)=>{return new Proxy({animations:J.map(GJ).filter(Boolean),duration:Z,options:Q},KJ)},HJ=(J)=>J.animations[0],KJ={get:(J,Q)=>{const Z=HJ(J);switch(Q){case"duration":return J.duration;case"currentTime":return B.s((Z===null||Z===void 0?void 0:Z[Q])||0);case"playbackRate":case"playState":return Z===null||Z===void 0?void 0:Z[Q];case"finished":if(!J.finished)J.finished=Promise.all(J.animations.map(MJ)).catch(y);return J.finished;case"stop":return()=>{J.animations.forEach((W)=>$1(W))};case"forEachNative":return(W)=>{J.animations.forEach((q)=>W(q,J))};default:return typeof(Z===null||Z===void 0?void 0:Z[Q])==="undefined"?void 0:()=>J.animations.forEach((W)=>W[Q]())}},set:(J,Q,Z)=>{switch(Q){case"currentTime":Z=B.ms(Z);case"playbackRate":for(let W=0;W<J.animations.length;W++)J.animations[W][Q]=Z;return!0}return!1}},MJ=(J)=>J.finished;var c1=function(J,Q,Z){return R(J)?J(Q,Z):J};var p1=function(J){return function Q(Z,W,q={}){Z=v1(Z);const $=Z.length;e(Boolean($),"No valid element provided."),e(Boolean(W),"No keyframes defined.");const G=[];for(let H=0;H<$;H++){const w=Z[H];for(let _ in W){const L=k1(q,_);L.delay=c1(L.delay,H,$);const z=j1(w,_,W[_],L,J);G.push(z)}}return m(G,q,q.duration)}};var S1=p1(b);var UJ=function(J,Q={}){return m([()=>{const Z=new b(J,[0,1],Q);return Z.finished.catch(()=>{}),Z}],Q,Q.duration)},A=function(J,Q,Z){return(R(J)?UJ:S1)(J,Q,Z)};var y1=window.scrollY,I=!1,G1=!1,k=document.getElementById("nav-main"),YJ=()=>{if(I)return;const J=window.scrollY;if(J>y1){if(J>124){if(k&&!G1&&!I)I=!0,A(k,{y:k.clientHeight*-1}).finished.then(()=>{G1=!0,I=!1})}}else if(k&&G1&&!I)I=!0,A(k,{y:0}).finished.then(()=>{G1=!1,I=!1});y1=J};if(k)window.addEventListener("scroll",YJ);var d1=document.getElementById("mobile-nav-trigger"),f1=document.getElementById("close-mobile-nav"),r=document.getElementById("mobile-nav"),j=!1,u1=0.25;if(r&&d1&&f1){const J=()=>{if(j)return;j=!0,r.showModal(),document.body.classList.add("hide-scroll"),A(r,{opacity:1},{duration:u1}).finished.then(()=>{j=!1})},Q=()=>{if(j)return;j=!0,A(r,{opacity:0},{duration:u1}).finished.then(()=>{r.close(),document.body.classList.remove("hide-scroll"),j=!1})};d1.addEventListener("click",J),f1.addEventListener("click",Q)}