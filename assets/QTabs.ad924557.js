import{r as w,z as je,o as U,j as we,m as X,t as ne,R as he,h as T,g as ae,v as be,i as We,l as ee,c as h,S as ye,U as Fe,V as Qe,W as ge,X as Ve,Y as He,Z as G,C as Ke,_ as Ne,$ as Ue,a0 as te,a1 as me,w as F,q as Xe,a2 as Ge,a3 as Ye,k as Ze}from"./index.490d9ea0.js";function Je(){const e=w(!je.value);return e.value===!1&&U(()=>{e.value=!0}),e}const Ce=typeof ResizeObserver!="undefined",Te=Ce===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var pe=we({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:_}){let b=null,l,o={width:-1,height:-1};function x(v){v===!0||e.debounce===0||e.debounce==="0"?L():b===null&&(b=setTimeout(L,e.debounce))}function L(){if(clearTimeout(b),b=null,l){const{offsetWidth:v,offsetHeight:f}=l;(v!==o.width||f!==o.height)&&(o={width:v,height:f},_("resize",o))}}const{proxy:I}=ae();if(Ce===!0){let v;const f=R=>{l=I.$el.parentNode,l?(v=new ResizeObserver(x),v.observe(l),L()):R!==!0&&he(()=>{f(!0)})};return U(()=>{f()}),X(()=>{clearTimeout(b),v!==void 0&&(v.disconnect!==void 0?v.disconnect():l&&v.unobserve(l))}),ne}else{let R=function(){clearTimeout(b),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",x,be.passive),f=void 0)},z=function(){R(),l&&l.contentDocument&&(f=l.contentDocument.defaultView,f.addEventListener("resize",x,be.passive),L())};const v=Je();let f;return U(()=>{he(()=>{l=I.$el,l&&z()})}),X(R),I.trigger=x,()=>{if(v.value===!0)return T("object",{style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:z})}}}});let et=0;const ot=["click","keydown"],rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${et++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function lt(e,_,b,l){const o=We(ye,ee);if(o===ee)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ee;const{proxy:x}=ae(),L=w(null),I=w(null),v=w(null),f=h(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=h(()=>o.currentModel.value===e.name),z=h(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),M=h(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=h(()=>e.disable===!0||o.hasFocus.value===!0||R.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function k(i,d){if(d!==!0&&L.value!==null&&L.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&ge(i);return}if(l===void 0){o.updateModel({name:e.name}),b("click",i);return}if(l.hasRouterLink.value===!0){const q=(C={})=>{let $;const V=C.to===void 0||Ne(C.to,e.to)===!0?o.avoidRouteWatcher=Ue():null;return l.navigateToRouterLink(i,{...C,returnRouterError:!0}).catch(m=>{$=m}).then(m=>{if(V===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,$===void 0&&(m===void 0||m.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),C.returnRouterError===!0)return $!==void 0?Promise.reject($):m})};b("click",i,q),i.defaultPrevented!==!0&&q();return}b("click",i)}function A(i){Ve(i,[13,32])?k(i,!0):He(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&o.onKbdNavigate(i.keyCode,x.$el)===!0&&ge(i),b("keydown",i)}function j(){const i=o.tabProps.value.narrowIndicator,d=[],q=T("div",{ref:v,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&d.push(T(G,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&d.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&d.push(e.alertIcon!==void 0?T(G,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&d.push(q);const C=[T("div",{class:"q-focus-helper",tabindex:-1,ref:L}),T("div",{class:M.value},Ke(_.default,d))];return i===!1&&C.push(q),C}const D={name:h(()=>e.name),rootRef:I,tabIndicatorRef:v,routeData:l};X(()=>{o.unregisterTab(D)}),U(()=>{o.registerTab(D)});function Q(i,d){const q={ref:I,class:z.value,tabindex:y.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:A,...d};return Fe(T(i,q,j()),[[Qe,f.value]])}return{renderTab:Q,$tabs:o}}let Re=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const _=document.createElement("div");Object.assign(_.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(_),e.scrollLeft=-1e3,Re=e.scrollLeft>=0,e.remove()}function tt(e,_,b){const l=b===!0?["left","right"]:["top","bottom"];return`absolute-${_===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const nt=["left","center","right","justify"];var it=we({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:_,emit:b}){const{proxy:l}=ae(),{$q:o}=l,{registerTick:x}=te(),{registerTick:L}=te(),{registerTick:I}=te(),{registerTimeout:v,removeTimeout:f}=me(),{registerTimeout:R,removeTimeout:z}=me(),M=w(null),y=w(null),k=w(e.modelValue),A=w(!1),j=w(!0),D=w(!1),Q=w(!1),i=h(()=>o.platform.is.desktop===!0||e.mobileArrows===!0),d=[],q=w(0),C=w(!1);let $,V,m,E=i.value===!0?re:ne;const qe=h(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:tt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),_e=h(()=>{const t=q.value,n=k.value;for(let a=0;a<t;a++)if(d[a].name.value===n)return!0;return!1}),Le=h(()=>`q-tabs__content--align-${A.value===!0?"left":Q.value===!0?"justify":e.align}`),ke=h(()=>`q-tabs row no-wrap items-center q-tabs--${A.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${i.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Se=h(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Le.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(o.platform.is.mobile===!0?" scroll":"")),H=h(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=h(()=>e.vertical!==!0&&o.lang.rtl===!0),Y=h(()=>Re===!1&&K.value===!0);F(K,E),F(()=>e.modelValue,t=>{Z({name:t,setCurrent:!0,skipEmit:!0})}),F(()=>e.outsideArrows,()=>{W()}),F(i,t=>{E=t===!0?re:ne,W()});function Z({name:t,setCurrent:n,skipEmit:a,fromRoute:u}){k.value!==t&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&b("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(Pe(k.value,t),k.value=t))}function W(){x(()=>{oe({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function oe(t){if(H.value===void 0||y.value===null)return;const n=t[H.value.container],a=Math.min(y.value[H.value.scroll],Array.prototype.reduce.call(y.value.children,(c,s)=>c+(s[H.value.content]||0),0)),u=n>0&&a>n;A.value=u,u===!0&&L(E),Q.value=n<parseInt(e.breakpoint,10)}function Pe(t,n){const a=t!=null&&t!==""?d.find(c=>c.name.value===t):null,u=n!=null&&n!==""?d.find(c=>c.name.value===n):null;if(a&&u){const c=a.tabIndicatorRef.value,s=u.tabIndicatorRef.value;clearTimeout($),c.style.transition="none",c.style.transform="none",s.style.transition="none",s.style.transform="none";const r=c.getBoundingClientRect(),g=s.getBoundingClientRect();s.style.transform=e.vertical===!0?`translate3d(0,${r.top-g.top}px,0) scale3d(1,${g.height?r.height/g.height:1},1)`:`translate3d(${r.left-g.left}px,0,0) scale3d(${g.width?r.width/g.width:1},1,1)`,I(()=>{$=setTimeout(()=>{s.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",s.style.transform="none"},70)})}u&&A.value===!0&&O(u.rootRef.value)}function O(t){const{left:n,width:a,top:u,height:c}=y.value.getBoundingClientRect(),s=t.getBoundingClientRect();let r=e.vertical===!0?s.top-u:s.left-n;if(r<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),E();return}r+=e.vertical===!0?s.height-c:s.width-a,r>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),E())}function re(){const t=y.value;if(t!==null){const n=t.getBoundingClientRect(),a=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(j.value=Math.ceil(a+n.width)<t.scrollWidth-1,D.value=a>0):(j.value=a>0,D.value=e.vertical===!0?Math.ceil(a+n.height)<t.scrollHeight:Math.ceil(a+n.width)<t.scrollWidth)}}function le(t){S(),V=setInterval(()=>{Ae(t)===!0&&S()},5)}function ie(){le(Y.value===!0?Number.MAX_SAFE_INTEGER:0)}function se(){le(Y.value===!0?0:Number.MAX_SAFE_INTEGER)}function S(){clearInterval(V)}function xe(t,n){const a=Array.prototype.filter.call(y.value.children,g=>g===n||g.matches&&g.matches(".q-tab.q-focusable")===!0),u=a.length;if(u===0)return;if(t===36)return O(a[0]),a[0].focus(),!0;if(t===35)return O(a[u-1]),a[u-1].focus(),!0;const c=t===(e.vertical===!0?38:37),s=t===(e.vertical===!0?40:39),r=c===!0?-1:s===!0?1:void 0;if(r!==void 0){const g=K.value===!0?-1:1,P=a.indexOf(n)+r*g;return P>=0&&P<u&&(O(a[P]),a[P].focus({preventScroll:!0})),!0}}const Ie=h(()=>Y.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Ae(t){const n=y.value,{get:a,set:u}=Ie.value;let c=!1,s=a(n);const r=t<s?-1:1;return s+=r*5,s<0?(c=!0,s=0):(r===-1&&s<=t||r===1&&s>=t)&&(c=!0,s=t),u(n,s),E(),c}function ue(t,n){for(const a in t)if(t[a]!==n[a])return!1;return!0}function $e(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const a=d.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:u,query:c}=l.$route,s=Object.keys(c).length;for(const r of a){const g=r.routeData.exact.value===!0;if(r.routeData[g===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:P,query:J,matched:De,href:Oe}=r.routeData.resolvedLink.value,p=Object.keys(J).length;if(g===!0){if(P!==u||p!==s||ue(c,J)===!1)continue;t=r.name.value;break}if(P!==""&&P!==u||p!==0&&ue(J,c)===!1)continue;const B={matchedLen:De.length,queryDiff:s-p,hrefLen:Oe.length-P.length};if(B.matchedLen>n.matchedLen){t=r.name.value,n=B;continue}else if(B.matchedLen!==n.matchedLen)continue;if(B.queryDiff<n.queryDiff)t=r.name.value,n=B;else if(B.queryDiff!==n.queryDiff)continue;B.hrefLen>n.hrefLen&&(t=r.name.value,n=B)}t===null&&d.some(r=>r.routeData===void 0&&r.name.value===k.value)===!0||Z({name:t,setCurrent:!0})}function Be(t){if(f(),C.value!==!0&&M.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&M.value.contains(n)===!0&&(C.value=!0,A.value===!0&&O(n))}}function Me(){v(()=>{C.value=!1},30)}function N(){de.avoidRouteWatcher===!1?R($e):z()}function ce(){if(m===void 0){const t=F(()=>l.$route.fullPath,N);m=()=>{t(),m=void 0}}}function Ee(t){d.push(t),q.value++,W(),t.routeData===void 0||l.$route===void 0?R(()=>{if(A.value===!0){const n=k.value,a=n!=null&&n!==""?d.find(u=>u.name.value===n):null;a&&O(a.rootRef.value)}}):(ce(),t.routeData.hasRouterLink.value===!0&&N())}function ze(t){d.splice(d.indexOf(t),1),q.value--,W(),m!==void 0&&t.routeData!==void 0&&(d.every(n=>n.routeData===void 0)===!0&&m(),N())}const de={currentModel:k,tabProps:qe,hasFocus:C,hasActiveTab:_e,registerTab:Ee,unregisterTab:ze,verifyRouteModel:N,updateModel:Z,onKbdNavigate:xe,avoidRouteWatcher:!1};Xe(ye,de);function ve(){clearTimeout($),S(),m!==void 0&&m()}let fe;return X(ve),Ge(()=>{fe=m!==void 0,ve()}),Ye(()=>{fe===!0&&ce(),W()}),()=>{const t=[T(pe,{onResize:oe}),T("div",{ref:y,class:Se.value,onScroll:E},Ze(_.default))];return i.value===!0&&t.push(T(G,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(j.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ie,onTouchstartPassive:ie,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S}),T(G,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:se,onTouchstartPassive:se,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S})),T("div",{ref:M,class:ke.value,role:"tablist",onFocusin:Be,onFocusout:Me},t)}}});export{pe as Q,ot as a,lt as b,it as c,Re as r,rt as u};
