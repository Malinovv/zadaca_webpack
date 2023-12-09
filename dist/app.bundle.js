(()=>{var t={647:function(t){function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(){"use strict";var t="(prefers-reduced-motion: reduce)",e=4,i=5,r={CREATED:1,MOUNTED:2,IDLE:3,MOVING:e,SCROLLING:i,DRAGGING:6,DESTROYED:7};function o(t){t.length=0}function u(t,n,e){return Array.prototype.slice.call(t,n,e)}function a(t){return t.bind.apply(t,[null].concat(u(arguments,1)))}var c=setTimeout,s=function(){};function l(t){return requestAnimationFrame(t)}function f(t,n){return typeof n===t}function d(t){return!m(t)&&f("object",t)}var v=Array.isArray,p=a(f,"function"),h=a(f,"string"),g=a(f,"undefined");function m(t){return null===t}function y(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function b(t){return v(t)?t:[t]}function w(t,n){b(t).forEach(n)}function E(t,n){return t.indexOf(n)>-1}function x(t,n){return t.push.apply(t,b(n)),t}function S(t,n,e){t&&w(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function C(t,n){S(t,h(n)?n.split(" "):n,!0)}function P(t,n){w(n,t.appendChild.bind(t))}function k(t,n){w(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function L(t,n){return y(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function _(t,n){var e=t?u(t.children):[];return n?e.filter((function(t){return L(t,n)})):e}function M(t,n){return n?_(t,n)[0]:t.firstElementChild}var A=Object.keys;function D(t,n,e){return t&&(e?A(t).reverse():A(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function z(t){return u(arguments,1).forEach((function(n){D(n,(function(e,i){t[i]=n[i]}))})),t}function O(t){return u(arguments,1).forEach((function(n){D(n,(function(n,e){v(n)?t[e]=n.slice():d(n)?t[e]=O({},d(t[e])?t[e]:{},n):t[e]=n}))})),t}function T(t,n){w(n||A(t),(function(n){delete t[n]}))}function I(t,n){w(t,(function(t){w(n,(function(n){t&&t.removeAttribute(n)}))}))}function N(t,n,e){d(n)?D(n,(function(n,e){N(t,e,n)})):w(t,(function(t){m(e)||""===e?I(t,n):t.setAttribute(n,String(e))}))}function j(t,n,e){var i=document.createElement(t);return n&&(h(n)?C(i,n):N(i,n)),e&&P(e,i),i}function F(t,n,e){if(g(e))return getComputedStyle(t)[n];m(e)||(t.style[n]=""+e)}function R(t,n){F(t,"display",n)}function B(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function W(t,n){return t.getAttribute(n)}function X(t,n){return t&&t.classList.contains(n)}function G(t){return t.getBoundingClientRect()}function H(t){w(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function Y(t){return M((new DOMParser).parseFromString(t,"text/html").body)}function q(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function U(t,n){return t&&t.querySelector(n)}function K(t,n){return n?u(t.querySelectorAll(n)):[]}function J(t,n){S(t,n,!1)}function V(t){return t.timeStamp}function Q(t){return h(t)?t:t?t+"px":""}var Z="splide",$="data-"+Z;function tt(t,n){if(!t)throw new Error("["+Z+"] "+(n||""))}var nt=Math.min,et=Math.max,it=Math.floor,rt=Math.ceil,ot=Math.abs;function ut(t,n,e){return ot(t-n)<e}function at(t,n,e,i){var r=nt(n,e),o=et(n,e);return i?r<t&&t<o:r<=t&&t<=o}function ct(t,n,e){var i=nt(n,e),r=et(n,e);return nt(et(i,t),r)}function st(t){return+(t>0)-+(t<0)}function lt(t,n){return w(n,(function(n){t=t.replace("%s",""+n)})),t}function ft(t){return t<10?"0"+t:""+t}var dt={};function vt(){var t=[];function n(t,n,e){w(t,(function(t){t&&w(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){n(e,i,(function(n,e,i){var u="addEventListener"in n,a=u?n.removeEventListener.bind(n,e,r,o):n.removeListener.bind(n,r);u?n.addEventListener(e,r,o):n.addListener(r),t.push([n,e,i,r,a])}))},unbind:function(e,i,r){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,true,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),o(t)}}}var pt="mounted",ht="ready",gt="move",mt="moved",yt="click",bt="active",wt="inactive",Et="visible",xt="hidden",St="refresh",Ct="updated",Pt="resize",kt="resized",Lt="scroll",_t="scrolled",Mt="destroy",At="arrows:mounted",Dt="navigation:mounted",zt="autoplay:play",Ot="autoplay:pause",Tt="lazyload:loaded",It="sk",Nt="sh",jt="ei";function Ft(t){var n=t?t.event.bus:document.createDocumentFragment(),e=vt();return t&&t.event.on(Mt,e.destroy),z(e,{bus:n,on:function(t,i){e.bind(n,b(t).join(" "),(function(t){i.apply(i,v(t.detail)?t.detail:[])}))},off:a(e.unbind,n),emit:function(t){e.dispatch(n,t,u(arguments,1))}})}function Rt(t,n,e,i){var r,o,u=Date.now,a=0,c=!0,s=0;function f(){if(!c){if(a=t?nt((u()-r)/t,1):1,e&&e(a),a>=1&&(n(),r=u(),i&&++s>=i))return d();o=l(f)}}function d(){c=!0}function v(){o&&cancelAnimationFrame(o),a=0,o=0,c=!0}return{start:function(n){n||v(),r=u()-(n?a*t:0),c=!1,o=l(f)},rewind:function(){r=u(),a=0,e&&e(a)},pause:d,cancel:v,set:function(n){t=n},isPaused:function(){return c}}}var Bt="Arrow",Wt=Bt+"Left",Xt=Bt+"Right",Gt=Bt+"Up",Ht=Bt+"Down",Yt="ttb",qt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Gt,Xt],ArrowRight:[Ht,Wt]};var Ut="role",Kt="tabindex",Jt="aria-",Vt=Jt+"controls",Qt=Jt+"current",Zt=Jt+"selected",$t=Jt+"label",tn=Jt+"labelledby",nn=Jt+"hidden",en=Jt+"orientation",rn=Jt+"roledescription",on=Jt+"live",un=Jt+"busy",an=Jt+"atomic",cn=[Ut,Kt,"disabled",Vt,Qt,$t,tn,nn,en,rn],sn=Z+"__",ln="is-",fn=Z,dn=sn+"track",vn=sn+"list",pn=sn+"slide",hn=pn+"--clone",gn=pn+"__container",mn=sn+"arrows",yn=sn+"arrow",bn=yn+"--prev",wn=yn+"--next",En=sn+"pagination",xn=En+"__page",Sn=sn+"progress__bar",Cn=sn+"toggle",Pn=sn+"sr",kn=ln+"initialized",Ln=ln+"active",_n=ln+"prev",Mn=ln+"next",An=ln+"visible",Dn=ln+"loading",zn=ln+"focus-in",On=ln+"overflow",Tn=[Ln,An,_n,Mn,Dn,zn,On],In={slide:pn,clone:hn,arrows:mn,arrow:yn,prev:bn,next:wn,pagination:En,page:xn,spinner:sn+"spinner"};var Nn="touchstart mousedown",jn="touchmove mousemove",Fn="touchend touchcancel mouseup click";var Rn="slide",Bn="loop",Wn="fade";function Xn(t,n,r,o){var u,c=Ft(t),s=c.on,l=c.emit,f=c.bind,d=t.Components,v=t.root,p=t.options,h=p.isNavigation,g=p.updateOnMove,m=p.i18n,y=p.pagination,b=p.slideFocus,w=d.Direction.resolve,E=W(o,"style"),x=W(o,$t),C=r>-1,P=M(o,"."+gn);function k(){var e=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");N(o,$t,lt(m.slideX,(C?r:n)+1)),N(o,Vt,e),N(o,Ut,b?"button":""),b&&I(o,rn)}function L(){u||_()}function _(){if(!u){var r=t.index;(a=A())!==X(o,Ln)&&(S(o,Ln,a),N(o,Qt,h&&a||""),l(a?bt:wt,D)),function(){var n=function(){if(t.is(Wn))return A();var n=G(d.Elements.track),e=G(o),i=w("left",!0),r=w("right",!0);return it(n[i])<=rt(e[i])&&it(e[r])<=rt(n[r])}(),r=!n&&(!A()||C);if(t.state.is([e,i])||N(o,nn,r||""),N(K(o,p.focusableNodes||""),Kt,r?-1:""),b&&N(o,Kt,r?-1:0),n!==X(o,An)&&(S(o,An,n),l(n?Et:xt,D)),!n&&document.activeElement===o){var u=d.Slides.getAt(t.index);u&&B(u.slide)}}(),S(o,_n,n===r-1),S(o,Mn,n===r+1)}var a}function A(){var e=t.index;return e===n||p.cloneStatus&&e===r}var D={index:n,slideIndex:r,slide:o,container:P,isClone:C,mount:function(){C||(o.id=v.id+"-slide"+ft(n+1),N(o,Ut,y?"tabpanel":"group"),N(o,rn,m.slide),N(o,$t,x||lt(m.slideLabel,[n+1,t.length]))),f(o,"click",a(l,yt,D)),f(o,"keydown",a(l,It,D)),s([mt,Nt,_t],_),s(Dt,k),g&&s(gt,L)},destroy:function(){u=!0,c.destroy(),J(o,Tn),I(o,cn),N(o,"style",E),N(o,$t,x||"")},update:_,style:function(t,n,e){F(e&&P||o,t,n)},isWithin:function(e,i){var r=ot(e-n);return C||!p.rewind&&!t.is(Bn)||(r=nt(r,t.length-r)),r<=i}};return D}var Gn=$+"-interval";var Hn={passive:!1,capture:!0};var Yn={Spacebar:" ",Right:Xt,Left:Wt,Up:Gt,Down:Ht};function qn(t){return t=h(t)?t:t.key,Yn[t]||t}var Un="keydown";var Kn=$+"-lazy",Jn=Kn+"-srcset",Vn="["+Kn+"], ["+Jn+"]";var Qn=[" ","Enter"];var Zn=Object.freeze({__proto__:null,Media:function(n,e,i){var r=n.state,o=i.breakpoints||{},u=i.reducedMotion||{},a=vt(),c=[];function s(t){t&&a.destroy()}function l(t,n){var e=matchMedia(n);a.bind(e,"change",f),c.push([t,e])}function f(){var t=r.is(7),e=i.direction,o=c.reduce((function(t,n){return O(t,n[1].matches?n[0]:{})}),{});T(i),d(o),i.destroy?n.destroy("completely"===i.destroy):t?(s(!0),n.mount()):e!==i.direction&&n.refresh()}function d(t,e,o){O(i,t),e&&O(Object.getPrototypeOf(i),t),!o&&r.is(1)||n.emit(Ct,i)}return{setup:function(){var n="min"===i.mediaQuery;A(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,t),f()},destroy:s,reduce:function(n){matchMedia(t).matches&&(n?O(i,u):T(i,A(u)))},set:d}},Direction:function(t,n,e){return{resolve:function(t,n,i){var r="rtl"!==(i=i||e.direction)||n?i===Yt?0:-1:1;return qt[t]&&qt[t][r]||t.replace(/width|left|right/i,(function(t,n){var e=qt[t.toLowerCase()][r]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var i,r,u,a=Ft(t),c=a.on,s=a.bind,l=t.root,f=e.i18n,d={},v=[],h=[],g=[];function m(){var t,n,o;i=w("."+dn),r=M(i,"."+vn),tt(i&&r,"A track/list element is missing."),x(v,_(r,"."+pn+":not(."+hn+")")),D({arrows:mn,pagination:En,prev:bn,next:wn,bar:Sn,toggle:Cn},(function(t,n){d[n]=w("."+t)})),z(d,{root:l,track:i,list:r,slides:v}),t=l.id||""+(o=Z)+ft(dt[o]=(dt[o]||0)+1),n=e.role,l.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!W(l,Ut)&&"SECTION"!==l.tagName&&n&&N(l,Ut,n),N(l,rn,f.carousel),N(r,Ut,"presentation"),b()}function y(t){var n=cn.concat("style");o(v),J(l,h),J(i,g),I([i,r],n),I(l,t?n:["style",rn])}function b(){J(l,h),J(i,g),h=E(fn),g=E(dn),C(l,h),C(i,g),N(l,$t,e.label),N(l,tn,e.labelledby)}function w(t){var n=U(l,t);return n&&function(t,n){if(p(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!L(e,n);)e=e.parentElement;return e}(n,"."+fn)===l?n:void 0}function E(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===fn&&Ln]}return z(d,{setup:m,mount:function(){c(St,y),c(St,m),c(Ct,b),s(document,Nn+" keydown",(function(t){u="keydown"===t.type}),{capture:!0}),s(l,"focusin",(function(){S(l,zn,!!u)}))},destroy:y})},Slides:function(t,n,e){var i=Ft(t),r=i.on,u=i.emit,c=i.bind,s=n.Elements,l=s.slides,f=s.list,d=[];function v(){l.forEach((function(t,n){m(t,n,-1)}))}function g(){S((function(t){t.destroy()})),o(d)}function m(n,e,i){var r=Xn(t,e,i,n);r.mount(),d.push(r),d.sort((function(t,n){return t.index-n.index}))}function x(t){return t?_((function(t){return!t.isClone})):d}function S(t,n){x(n).forEach(t)}function _(t){return d.filter(p(t)?t:function(n){return h(t)?L(n.slide,t):E(b(t),n.index)})}return{mount:function(){v(),r(St,g),r(St,v)},destroy:g,update:function(){S((function(t){t.update()}))},register:m,get:x,getIn:function(t){var i=n.Controller,r=i.toIndex(t),o=i.hasFocus()?1:e.perPage;return _((function(t){return at(t.index,r,r+o-1)}))},getAt:function(t){return _(t)[0]},add:function(t,n){w(t,(function(t){if(h(t)&&(t=Y(t)),y(t)){var i=l[n];i?k(t,i):P(f,t),C(t,e.classes.slide),r=t,o=a(u,Pt),s=K(r,"img"),(d=s.length)?s.forEach((function(t){c(t,"load error",(function(){--d||o()}))})):o()}var r,o,s,d})),u(St)},remove:function(t){H(_(t).map((function(t){return t.slide}))),u(St)},forEach:S,filter:_,style:function(t,n,e){S((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(t,n,e){var i,r,o,u=Ft(t),c=u.on,s=u.bind,l=u.emit,f=n.Slides,v=n.Direction.resolve,p=n.Elements,h=p.root,g=p.track,m=p.list,y=f.getAt,b=f.style;function w(){i=e.direction===Yt,F(h,"maxWidth",Q(e.width)),F(g,v("paddingLeft"),x(!1)),F(g,v("paddingRight"),x(!0)),E(!0)}function E(t){var n,u=G(h);(t||r.width!==u.width||r.height!==u.height)&&(F(g,"height",(n="",i&&(tt(n=C(),"height or heightRatio is missing."),n="calc("+n+" - "+x(!1)+" - "+x(!0)+")"),n)),b(v("marginRight"),Q(e.gap)),b("width",e.autoWidth?null:Q(e.fixedWidth)||(i?"":P())),b("height",Q(e.fixedHeight)||(i?e.autoHeight?null:P():C()),!0),r=u,l(kt),o!==(o=D())&&(S(h,On,o),l("overflow",o)))}function x(t){var n=e.padding,i=v(t?"right":"left");return n&&Q(n[i]||(d(n)?0:n))||"0px"}function C(){return Q(e.height||G(m).width*e.heightRatio)}function P(){var t=Q(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function k(){return G(m)[v("width")]}function L(t,n){var e=y(t||0);return e?G(e.slide)[v("width")]+(n?0:A()):0}function _(t,n){var e=y(t);if(e){var i=G(e.slide)[v("right")],r=G(m)[v("left")];return ot(i-r)+(n?0:A())}return 0}function M(n){return _(t.length-1)-_(0)+L(0,n)}function A(){var t=y(0);return t&&parseFloat(F(t.slide,v("marginRight")))||0}function D(){return t.is(Wn)||M(!0)>k()}return{mount:function(){var t,n,e;w(),s(window,"resize load",(t=a(l,Pt),e=Rt(n||0,t,null,1),function(){e.isPaused()&&e.start()})),c([Ct,St],w),c(Pt,E)},resize:E,listSize:k,slideSize:L,sliderSize:M,totalSize:_,getPadding:function(t){return parseFloat(F(g,v("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var i,r=Ft(t),u=r.on,a=n.Elements,c=n.Slides,s=n.Direction.resolve,l=[];function f(){u(St,d),u([Ct,Pt],p),(i=h())&&(function(n){var i=c.get().slice(),r=i.length;if(r){for(;i.length<n;)x(i,i);x(i.slice(-n),i.slice(0,n)).forEach((function(o,u){var s=u<n,f=function(n,i){var r=n.cloneNode(!0);return C(r,e.classes.clone),r.id=t.root.id+"-clone"+ft(i+1),r}(o.slide,u);s?k(f,i[0].slide):P(a.list,f),x(l,f),c.register(f,u-n+(s?0:r),o.index)}))}}(i),n.Layout.resize(!0))}function d(){v(),f()}function v(){H(l),o(l),r.destroy()}function p(){var t=h();i!==t&&(i<t||!t)&&r.emit(St)}function h(){var i=e.clones;if(t.is(Bn)){if(g(i)){var r=e[s("fixedWidth")]&&n.Layout.slideSize(0);i=r&&rt(G(a.track)[s("width")]/r)||e[s("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:v}},Move:function(t,n,i){var r,o=Ft(t),u=o.on,a=o.emit,c=t.state.set,s=n.Layout,l=s.slideSize,f=s.getPadding,d=s.totalSize,v=s.listSize,p=s.sliderSize,h=n.Direction,m=h.resolve,y=h.orient,b=n.Elements,w=b.list,E=b.track;function x(){n.Controller.isBusy()||(n.Scroll.cancel(),S(t.index),n.Slides.update())}function S(t){C(_(t,!0))}function C(e,i){if(!t.is(Wn)){var r=i?e:function(e){if(t.is(Bn)){var i=L(e),r=i>n.Controller.getEnd();(i<0||r)&&(e=P(e,r))}return e}(e);F(w,"transform","translate"+m("X")+"("+r+"px)"),e!==r&&a(Nt)}}function P(t,n){var e=t-A(n),i=p();return t-y(i*(rt(ot(e)/i)||1))*(n?1:-1)}function k(){C(M(),!0),r.cancel()}function L(t){for(var e=n.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=ot(_(u,!0)-t);if(!(a<=r))break;r=a,i=u}return i}function _(n,e){var r=y(d(n-1)-function(t){var n=i.focus;return"center"===n?(v()-l(t,!0))/2:+n*l(t)||0}(n));return e?function(n){return i.trimSpace&&t.is(Rn)&&(n=ct(n,0,y(p(!0)-v()))),n}(r):r}function M(){var t=m("left");return G(w)[t]-G(E)[t]+y(f(!1))}function A(t){return _(t?n.Controller.getEnd():0,!!i.trimSpace)}return{mount:function(){r=n.Transition,u([pt,kt,Ct,St],x)},move:function(t,n,i,o){var u,s;t!==n&&(u=t>i,s=y(P(M(),u)),u?s>=0:s<=w[m("scrollWidth")]-G(E)[m("width")])&&(k(),C(P(M(),t>i),!0)),c(e),a(gt,n,i,t),r.start(n,(function(){c(3),a(mt,n,i,t),o&&o()}))},jump:S,translate:C,shift:P,cancel:k,toIndex:L,toPosition:_,getPosition:M,getLimit:A,exceededLimit:function(t,n){n=g(n)?M():n;var e=!0!==t&&y(n)<y(A(!1)),i=!1!==t&&y(n)>y(A(!0));return e||i},reposition:x}},Controller:function(t,n,r){var o,u,c,s,l=Ft(t),f=l.on,d=l.emit,v=n.Move,p=v.getPosition,m=v.getLimit,y=v.toPosition,b=n.Slides,w=b.isEnough,E=b.getLength,x=r.omitEnd,S=t.is(Bn),C=t.is(Rn),P=a(D,!1),k=a(D,!0),L=r.start||0,_=L;function M(){u=E(!0),c=r.perMove,s=r.perPage,o=T();var t=ct(L,0,x?o:u-1);t!==L&&(L=t,v.reposition())}function A(){o!==T()&&d(jt)}function D(t,n){var e=c||(F()?1:s),i=z(L+e*(t?-1:1),L,!(c||F()));return-1===i&&C&&!ut(p(),m(!t),1)?t?0:o:n?i:O(i)}function z(n,e,i){if(w()||F()){var a=function(n){if(C&&"move"===r.trimSpace&&n!==L)for(var e=p();e===y(n,!0)&&at(n,0,t.length-1,!r.rewind);)n<L?--n:++n;return n}(n);a!==n&&(e=n,n=a,i=!1),n<0||n>o?n=c||!at(0,n,e,!0)&&!at(o,e,n,!0)?S?i?n<0?-(u%s||s):u:n:r.rewind?n<0?o:0:-1:I(N(n)):i&&n!==e&&(n=I(N(e)+(n<e?-1:1)))}else n=-1;return n}function O(t){return S?(t+u)%u||0:t}function T(){for(var t=u-(F()||S&&c?1:s);x&&t-- >0;)if(y(u-1,!0)!==y(t,!0)){t++;break}return ct(t,0,u-1)}function I(t){return ct(F()?t:s*t,0,o)}function N(t){return F()?nt(t,o):it((t>=o?u-1:t)/s)}function j(t){t!==L&&(_=L,L=t)}function F(){return!g(r.focus)||r.isNavigation}function R(){return t.state.is([e,i])&&!!r.waitForTransition}return{mount:function(){M(),f([Ct,St,jt],M),f(kt,A)},go:function(t,n,e){if(!R()){var i=function(t){var n=L;if(h(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?n=z(L+ +(""+i+(+r||1)),L):">"===i?n=r?I(+r):P(!0):"<"===i&&(n=k(!0))}else n=S?t:ct(t,0,o);return n}(t),r=O(i);r>-1&&(n||r!==L)&&(j(r),v.move(i,r,_,e))}},scroll:function(t,e,i,r){n.Scroll.scroll(t,e,i,(function(){var t=O(v.toIndex(p()));j(x?nt(t,o):t),r&&r()}))},getNext:P,getPrev:k,getAdjacent:D,getEnd:T,setIndex:j,getIndex:function(t){return t?_:L},toIndex:I,toPage:N,toDest:function(t){var n=v.toIndex(t);return C?ct(n,0,o):n},hasFocus:F,isBusy:R}},Arrows:function(t,n,e){var i,r,o=Ft(t),u=o.on,c=o.bind,s=o.emit,l=e.classes,f=e.i18n,d=n.Elements,v=n.Controller,p=d.arrows,h=d.track,g=p,m=d.prev,y=d.next,b={};function w(){var t;!(t=e.arrows)||m&&y||(g=p||j("div",l.arrows),m=L(!0),y=L(!1),i=!0,P(g,[m,y]),!p&&k(g,h)),m&&y&&(z(b,{prev:m,next:y}),R(g,t?"":"none"),C(g,r=mn+"--"+e.direction),t&&(u([pt,mt,St,_t,jt],_),c(y,"click",a(S,">")),c(m,"click",a(S,"<")),_(),N([m,y],Vt,h.id),s(At,m,y))),u(Ct,E)}function E(){x(),w()}function x(){o.destroy(),J(g,r),i?(H(p?[m,y]:g),m=y=null):I([m,y],cn)}function S(t){v.go(t,!0)}function L(t){return Y('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function _(){if(m&&y){var n=t.index,e=v.getPrev(),i=v.getNext(),r=e>-1&&n<e?f.last:f.prev,o=i>-1&&n>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,N(m,$t,r),N(y,$t,o),s("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:x,update:_}},Autoplay:function(t,n,e){var i,r,o=Ft(t),u=o.on,a=o.bind,c=o.emit,s=Rt(e.interval,t.go.bind(t,">"),(function(t){var n=f.bar;n&&F(n,"width",100*t+"%"),c("autoplay:playing",t)})),l=s.isPaused,f=n.Elements,d=n.Elements,v=d.root,p=d.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&n.Slides.isEnough()&&(s.start(!e.resetProgress),r=i=g=!1,w(),c(zt))}function y(t){void 0===t&&(t=!0),g=!!t,w(),l()||(s.pause(),c(Ot))}function b(){g||(i||r?y(!1):m())}function w(){p&&(S(p,Ln,!g),N(p,$t,e.i18n[g?"play":"pause"]))}function E(t){var i=n.Slides.getAt(t);s.set(i&&+W(i.slide,Gn)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&a(v,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()})),e.pauseOnFocus&&a(v,"focusin focusout",(function(t){r="focusin"===t.type,b()})),p&&a(p,"click",(function(){g?m():y(!0)})),u([gt,Lt,St],s.rewind),u(gt,E),p&&N(p,Vt,f.track.id),g||m(),w())},destroy:s.cancel,play:m,pause:y,isPaused:l}},Cover:function(t,n,e){var i=Ft(t).on;function r(t){n.Slides.forEach((function(n){var e=M(n.container||n.slide,"img");e&&e.src&&o(t,e,n)}))}function o(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),R(n,t?"none":"")}return{mount:function(){e.cover&&(i(Tt,a(o,!0)),i([pt,Ct,St],a(r,!0)))},destroy:a(r,!1)}},Scroll:function(t,n,e){var r,o,u=Ft(t),c=u.on,s=u.emit,l=t.state.set,f=n.Move,d=f.getPosition,v=f.getLimit,p=f.exceededLimit,h=f.translate,g=t.is(Rn),m=1;function y(t,e,u,c,v){var h=d();if(E(),u&&(!g||!p())){var y=n.Layout.sliderSize(),x=st(t)*y*it(ot(t)/y)||0;t=f.toPosition(n.Controller.toDest(t%y))+x}var S=ut(h,t,1);m=1,e=S?0:e||et(ot(t-h)/1.5,800),o=c,r=Rt(e,b,a(w,h,t,v),1),l(i),s(Lt),r.start()}function b(){l(3),o&&o(),s(_t)}function w(t,n,i,r){var u,a,c=d(),s=(t+(n-t)*(u=r,(a=e.easingFunc)?a(u):1-Math.pow(1-u,4))-c)*m;h(c+s),g&&!i&&p()&&(m*=.6,ot(s)<10&&y(v(p(!0)),600,!1,o,!0))}function E(){r&&r.cancel()}function x(){r&&!r.isPaused()&&(E(),b())}return{mount:function(){c(gt,E),c([Ct,St],x)},destroy:E,scroll:y,cancel:x}},Drag:function(t,n,r){var o,u,a,c,l,f,v,p,h=Ft(t),g=h.on,m=h.emit,y=h.bind,b=h.unbind,w=t.state,E=n.Move,x=n.Scroll,S=n.Controller,C=n.Elements.track,P=n.Media.reduce,k=n.Direction,_=k.resolve,M=k.orient,A=E.getPosition,D=E.exceededLimit,z=!1;function O(){var t=r.drag;H(!t),c="free"===t}function T(t){if(f=!1,!v){var n=G(t);o=t.target,u=r.noDrag,L(o,"."+xn+", ."+yn)||u&&L(o,u)||!n&&t.button||(S.isBusy()?q(t,!0):(p=n?C:window,l=w.is([e,i]),a=null,y(p,jn,I,Hn),y(p,Fn,N,Hn),E.cancel(),x.cancel(),F(t)))}var o,u}function I(n){if(w.is(6)||(w.set(6),m("drag")),n.cancelable)if(l){E.translate(o+R(n)/(z&&t.is(Rn)?5:1));var e=B(n)>200,i=z!==(z=D());(e||i)&&F(n),f=!0,m("dragging"),q(n)}else(function(t){return ot(R(t))>ot(R(t,!0))})(n)&&(l=function(t){var n=r.dragMinThreshold,e=d(n),i=e&&n.mouse||0,o=(e?n.touch:+n)||10;return ot(R(t))>(G(t)?o:i)}(n),q(n))}function N(e){w.is(6)&&(w.set(3),m("dragged")),l&&(function(e){var i=function(n){if(t.is(Bn)||!z){var e=B(n);if(e&&e<200)return R(n)/e}return 0}(e),o=function(t){return A()+st(t)*nt(ot(t)*(r.flickPower||600),c?1/0:n.Layout.listSize()*(r.flickMaxPages||1))}(i),u=r.rewind&&r.rewindByDrag;P(!1),c?S.scroll(o,0,r.snap):t.is(Wn)?S.go(M(st(i))<0?u?"<":"-":u?">":"+"):t.is(Rn)&&z&&u?S.go(D(!0)?">":"<"):S.go(S.toDest(o),!0),P(!0)}(e),q(e)),b(p,jn,I),b(p,Fn,N),l=!1}function j(t){!v&&f&&q(t,!0)}function F(t){a=u,u=t,o=A()}function R(t,n){return X(t,n)-X(W(t),n)}function B(t){return V(t)-V(W(t))}function W(t){return u===t&&a||u}function X(t,n){return(G(t)?t.changedTouches[0]:t)["page"+_(n?"Y":"X")]}function G(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function H(t){v=t}return{mount:function(){y(C,jn,s,Hn),y(C,Fn,s,Hn),y(C,Nn,T,Hn),y(C,"click",j,{capture:!0}),y(C,"dragstart",q),g([pt,Ct],O)},disable:H,isDragging:function(){return l}}},Keyboard:function(t,n,e){var i,r,o=Ft(t),u=o.on,a=o.bind,s=o.unbind,l=t.root,f=n.Direction.resolve;function d(){var t=e.keyboard;t&&(i="global"===t?window:l,a(i,Un,h))}function v(){s(i,Un)}function p(){var t=r;r=!0,c((function(){r=t}))}function h(n){if(!r){var e=qn(n);e===f(Wt)?t.go("<"):e===f(Xt)&&t.go(">")}}return{mount:function(){d(),u(Ct,v),u(Ct,d),u(gt,p)},destroy:v,disable:function(t){r=t}}},LazyLoad:function(t,n,e){var i=Ft(t),r=i.on,u=i.off,c=i.bind,s=i.emit,l="sequential"===e.lazyLoad,f=[mt,_t],d=[];function v(){o(d),n.Slides.forEach((function(t){K(t.slide,Vn).forEach((function(n){var i=W(n,Kn),r=W(n,Jn);if(i!==n.src||r!==n.srcset){var o=e.classes.spinner,u=n.parentElement,a=M(u,"."+o)||j("span",o,u);d.push([n,t,a]),n.src||R(n,"none")}}))})),l?m():(u(f),r(f,p),p())}function p(){(d=d.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||h(n)}))).length||u(f)}function h(t){var n=t[0];C(t[1].slide,Dn),c(n,"load error",a(g,t)),N(n,"src",W(n,Kn)),N(n,"srcset",W(n,Jn)),I(n,Kn),I(n,Jn)}function g(t,n){var e=t[0],i=t[1];J(i.slide,Dn),"error"!==n.type&&(H(t[2]),R(e,""),s(Tt,e,i),s(Pt)),l&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(v(),r(St,v))},destroy:a(o,d),check:p}},Pagination:function(t,n,e){var i,r,c=Ft(t),s=c.on,l=c.emit,f=c.bind,d=n.Slides,v=n.Elements,p=n.Controller,h=p.hasFocus,g=p.getIndex,m=p.go,y=n.Direction.resolve,b=v.pagination,w=[];function E(){i&&(H(b?u(i.children):i),J(i,r),o(w),i=null),c.destroy()}function x(t){m(">"+t,!0)}function S(t,n){var e=w.length,i=qn(n),r=P(),o=-1;i===y(Xt,!1,r)?o=++t%e:i===y(Wt,!1,r)?o=(--t+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(B(u.button),m(">"+o),q(n,!0))}function P(){return e.paginationDirection||e.direction}function k(t){return w[p.toPage(t)]}function L(){var t=k(g(!0)),n=k(g());if(t){var e=t.button;J(e,Ln),I(e,Zt),N(e,Kt,-1)}if(n){var r=n.button;C(r,Ln),N(r,Zt,!0),N(r,Kt,"")}l("pagination:updated",{list:i,items:w},t,n)}return{items:w,mount:function n(){E(),s([Ct,St,jt],n);var o=e.pagination;b&&R(b,o?"":"none"),o&&(s([gt,Lt,_t],L),function(){var n=t.length,o=e.classes,u=e.i18n,c=e.perPage,s=h()?p.getEnd()+1:rt(n/c);C(i=b||j("ul",o.pagination,v.track.parentElement),r=En+"--"+P()),N(i,Ut,"tablist"),N(i,$t,u.select),N(i,en,P()===Yt?"vertical":"");for(var l=0;l<s;l++){var g=j("li",null,i),m=j("button",{class:o.page,type:"button"},g),y=d.getIn(l).map((function(t){return t.slide.id})),E=!h()&&c>1?u.pageX:u.slideX;f(m,"click",a(x,l)),e.paginationKeyboard&&f(m,"keydown",a(S,l)),N(g,Ut,"presentation"),N(m,Ut,"tab"),N(m,Vt,y.join(" ")),N(m,$t,lt(E,l+1)),N(m,Kt,-1),w.push({li:g,button:m,page:l})}}(),L(),l("pagination:mounted",{list:i,items:w},k(t.index)))},destroy:E,getAt:k,update:L}},Sync:function(t,n,e){var i=e.isNavigation,r=e.slideFocus,u=[];function c(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&(n=Ft(t),(e=n.on)(yt,d),e(It,v),e([pt,Ct],f),u.push(n),n.emit(Dt,t.splides))}function s(){u.forEach((function(t){t.destroy()})),o(u)}function l(t,n){var e=Ft(t);e.on(gt,(function(t,e,i){n.go(n.is(Bn)?i:t)})),u.push(e)}function f(){N(n.Elements.list,en,e.direction===Yt?"vertical":"")}function d(n){t.go(n.index)}function v(t,n){E(Qn,qn(n))&&(d(t),q(n))}return{setup:a(n.Media.set,{slideFocus:g(r)?i:r},!0),mount:c,destroy:s,remount:function(){s(),c()}}},Wheel:function(t,n,i){var r=Ft(t).bind,o=0;function u(r){if(r.cancelable){var u=r.deltaY,a=u<0,c=V(r),s=i.wheelMinThreshold||0,l=i.wheelSleep||0;ot(u)>s&&c-o>l&&(t.go(a?"<":">"),o=c),function(r){return!i.releaseWheel||t.state.is(e)||-1!==n.Controller.getAdjacent(r)}(a)&&q(r)}}return{mount:function(){i.wheel&&r(n.Elements.track,"wheel",u,Hn)}}},Live:function(t,n,e){var i=Ft(t).on,r=n.Elements.track,o=e.live&&!e.isNavigation,u=j("span",Pn),c=Rt(90,a(s,!1));function s(t){N(r,un,t),t?(P(r,u),c.start()):(H(u),c.cancel())}function l(t){o&&N(r,on,t?"off":"polite")}return{mount:function(){o&&(l(!n.Autoplay.isPaused()),N(r,an,!0),u.textContent="…",i(zt,a(l,!0)),i(Ot,a(l,!1)),i([mt,_t],a(s,!0)))},disable:l,destroy:function(){I(r,[on,an,un]),H(u)}}}}),$n={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:In,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function te(t,n,e){var i=n.Slides;function r(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){Ft(t).on([pt,St],r)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),c(n)},cancel:s}}function ne(t,n,e){var i,r=n.Move,o=n.Controller,u=n.Scroll,c=n.Elements.list,s=a(F,c,"transition");function l(){s(""),u.cancel()}return{mount:function(){Ft(t).bind(c,"transitionend",(function(t){t.target===c&&i&&(l(),i())}))},start:function(n,a){var c=r.toPosition(n,!0),l=r.getPosition(),f=function(n){var i=e.rewindSpeed;if(t.is(Rn)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&n>=u||r>=u&&0===n)return i}return e.speed}(n);ot(c-l)>=1&&f>=1?e.useScroll?u.scroll(c,f,!1,a):(s("transform "+f+"ms "+e.easing),r.translate(c,!0),i=a):(r.jump(n),a())},cancel:l}}var ee=function(){function t(n,e){var i;this.event=Ft(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return E(b(t),i)}}),this.splides=[],this._o={},this._E={};var r=h(n)?U(document,n):n;tt(r,r+" is invalid."),this.root=r,e=O({label:W(r,$t)||"",labelledby:W(r,tn)||""},$n,t.defaults,e||{});try{O(e,JSON.parse(W(r,$)))}catch(t){tt(!1,"Invalid JSON")}this._o=Object.create(O({},e))}var e,i,r=t.prototype;return r.mount=function(t,n){var e=this,i=this.state,r=this.Components;return tt(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=n||this._T||(this.is(Wn)?te:ne),this._E=t||this._E,D(z({},Zn,this._E,{Transition:this._T}),(function(t,n){var i=t(e,r,e._o);r[n]=i,i.setup&&i.setup()})),D(r,(function(t){t.mount&&t.mount()})),this.emit(pt),C(this.root,kn),i.set(3),this.emit(ht),this},r.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},r.go=function(t){return this._C.Controller.go(t),this},r.on=function(t,n){return this.event.on(t,n),this},r.off=function(t){return this.event.off(t),this},r.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(u(arguments,1))),this},r.add=function(t,n){return this._C.Slides.add(t,n),this},r.remove=function(t){return this._C.Slides.remove(t),this},r.is=function(t){return this._o.type===t},r.refresh=function(){return this.emit(St),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?Ft(this).on(ht,this.destroy.bind(this,t)):(D(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(Mt),n.destroy(),t&&o(this.splides),e.set(7)),this},e=t,(i=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),ie=ee;return ie.defaults={},ie.STATES=r,ie}()}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";let t=document.getElementById("newTask"),n=document.getElementById("taskList");function i(t){t.target.parentElement.classList.toggle("completed")}function r(t){let n=t.target.closest("li");n.remove(n)}var o=e(647);new(e.n(o)())(".splide",{type:"loop",perPage:1,rewind:!0,rewindByDrag:!0,heightRatio:.3,speed:1200}).mount(),console.log("Start"),document.getElementById("addTaskBtn").addEventListener("click",(function(){if(""!=t.value){let e=document.createElement("li"),o=document.createElement("span");o.textContent=t.value;let u=document.createElement("button");u.innerHTML="Completed",u.addEventListener("click",i);let a=document.createElement("button");a.innerHTML="Delete",a.addEventListener("click",r);let c=document.createElement("button");c.innerHTML="Edit",e.appendChild(o),e.appendChild(u),e.appendChild(a),e.appendChild(c),n.appendChild(e)}t.value=""}))})()})();