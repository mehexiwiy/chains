!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new t.Error).stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="9de49ebc-a1bc-4eab-a579-e36b9edf6b4a",t._sentryDebugIdIdentifier="sentry-dbid-9de49ebc-a1bc-4eab-a579-e36b9edf6b4a")}catch(t){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3908],{86886:function(t,r,e){e.d(r,{ZP:function(){return F}});var a=e(63366),o=e(87462),n=e(67294),s=e(90512),i=e(95408),c=e(39707),m=e(94780),l=e(90948),f=e(85845),d=e(2734);let p=n.createContext();var u=e(1588),y=e(34867);function getGridUtilityClass(t){return(0,y.ZP)("MuiGrid",t)}let g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,u.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(t=>`spacing-xs-${t}`),...["column-reverse","column","row-reverse","row"].map(t=>`direction-xs-${t}`),...["nowrap","wrap-reverse","wrap"].map(t=>`wrap-xs-${t}`),...g.map(t=>`grid-xs-${t}`),...g.map(t=>`grid-sm-${t}`),...g.map(t=>`grid-md-${t}`),...g.map(t=>`grid-lg-${t}`),...g.map(t=>`grid-xl-${t}`)]);var x=e(85893);let h=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function getOffset(t){let r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function extractZeroValueBreakpointKeys({breakpoints:t,values:r}){let e="";Object.keys(r).forEach(t=>{""===e&&0!==r[t]&&(e=t)});let a=Object.keys(t).sort((r,e)=>t[r]-t[e]);return a.slice(0,a.indexOf(e))}let _=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{let{ownerState:e}=t,{container:a,direction:o,item:n,spacing:s,wrap:i,zeroMinWidth:c,breakpoints:m}=e,l=[];a&&(l=function(t,r,e={}){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[e[`spacing-xs-${String(t)}`]];let a=[];return r.forEach(r=>{let o=t[r];Number(o)>0&&a.push(e[`spacing-${r}-${String(o)}`])}),a}(s,m,r));let f=[];return m.forEach(t=>{let a=e[t];a&&f.push(r[`grid-${t}-${String(a)}`])}),[r.root,a&&r.container,n&&r.item,c&&r.zeroMinWidth,...l,"row"!==o&&r[`direction-xs-${String(o)}`],"wrap"!==i&&r[`wrap-xs-${String(i)}`],...f]}})(({ownerState:t})=>(0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap}),function({theme:t,ownerState:r}){let e=(0,i.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,i.k9)({theme:t},e,t=>{let r={flexDirection:t};return 0===t.indexOf("column")&&(r[`& > .${b.item}`]={maxWidth:"none"}),r})},function({theme:t,ownerState:r}){let{container:e,rowSpacing:a}=r,o={};if(e&&0!==a){let r;let e=(0,i.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof e&&(r=extractZeroValueBreakpointKeys({breakpoints:t.breakpoints.values,values:e})),o=(0,i.k9)({theme:t},e,(e,a)=>{var o;let n=t.spacing(e);return"0px"!==n?{marginTop:`-${getOffset(n)}`,[`& > .${b.item}`]:{paddingTop:getOffset(n)}}:null!=(o=r)&&o.includes(a)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return o},function({theme:t,ownerState:r}){let{container:e,columnSpacing:a}=r,o={};if(e&&0!==a){let r;let e=(0,i.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof e&&(r=extractZeroValueBreakpointKeys({breakpoints:t.breakpoints.values,values:e})),o=(0,i.k9)({theme:t},e,(e,a)=>{var o;let n=t.spacing(e);return"0px"!==n?{width:`calc(100% + ${getOffset(n)})`,marginLeft:`-${getOffset(n)}`,[`& > .${b.item}`]:{paddingLeft:getOffset(n)}}:null!=(o=r)&&o.includes(a)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return o},function({theme:t,ownerState:r}){let e;return t.breakpoints.keys.reduce((a,n)=>{let s={};if(r[n]&&(e=r[n]),!e)return a;if(!0===e)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let c=(0,i.P$)({values:r.columns,breakpoints:t.breakpoints.values}),m="object"==typeof c?c[n]:c;if(null==m)return a;let l=`${Math.round(e/m*1e8)/1e6}%`,f={};if(r.container&&r.item&&0!==r.columnSpacing){let e=t.spacing(r.columnSpacing);if("0px"!==e){let t=`calc(${l} + ${getOffset(e)})`;f={flexBasis:t,maxWidth:t}}}s=(0,o.Z)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===t.breakpoints.values[n]?Object.assign(a,s):a[t.breakpoints.up(n)]=s,a},{})}),useUtilityClasses=t=>{let{classes:r,container:e,direction:a,item:o,spacing:n,wrap:s,zeroMinWidth:i,breakpoints:c}=t,l=[];e&&(l=function(t,r){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[`spacing-xs-${String(t)}`];let e=[];return r.forEach(r=>{let a=t[r];if(Number(a)>0){let t=`spacing-${r}-${String(a)}`;e.push(t)}}),e}(n,c));let f=[];c.forEach(r=>{let e=t[r];e&&f.push(`grid-${r}-${String(e)}`)});let d={root:["root",e&&"container",o&&"item",i&&"zeroMinWidth",...l,"row"!==a&&`direction-xs-${String(a)}`,"wrap"!==s&&`wrap-xs-${String(s)}`,...f]};return(0,m.Z)(d,getGridUtilityClass,r)},v=n.forwardRef(function(t,r){let e=(0,f.i)({props:t,name:"MuiGrid"}),{breakpoints:i}=(0,d.Z)(),m=(0,c.Z)(e),{className:l,columns:u,columnSpacing:y,component:g="div",container:b=!1,direction:v="row",item:F=!1,rowSpacing:w,spacing:j=0,wrap:k="wrap",zeroMinWidth:$=!1}=m,S=(0,a.Z)(m,h),N=w||j,O=y||j,z=n.useContext(p),Y=b?u||12:z,C={},X=(0,o.Z)({},S);i.keys.forEach(t=>{null!=S[t]&&(C[t]=S[t],delete X[t])});let I=(0,o.Z)({},m,{columns:Y,container:b,direction:v,item:F,rowSpacing:N,columnSpacing:O,wrap:k,zeroMinWidth:$,spacing:j},C,{breakpoints:i.keys}),V=useUtilityClasses(I);return(0,x.jsx)(p.Provider,{value:Y,children:(0,x.jsx)(_,(0,o.Z)({ownerState:I,className:(0,s.Z)(V.root,l),as:g,ref:r},X))})});var F=v},84415:function(t,r){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),m=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),r.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case e:switch(t=t.type){case o:case s:case n:case f:case d:return t;default:switch(t=t&&t.$$typeof){case m:case c:case l:case u:case p:case i:return t;default:return r}}case a:return r}}}(t)===o}},14954:function(t,r,e){t.exports=e(84415)},69745:function(t,r,e){e.d(r,{pT:function(){return Fade}});var a=e(85893),o=e(87685),n=e(67294);e(48711),e(8679),e(85662),e(27278);var s=a.Fragment,emotion_react_jsx_runtime_browser_esm_jsx=function(t,r,e){return o.h.call(r,"css")?a.jsx(o.E,(0,o.c)(t,r),e):a.jsx(t,r,e)},i=e(70917),c=Object.defineProperty,__defNormalProp=(t,r,e)=>r in t?c(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,__publicField=(t,r,e)=>__defNormalProp(t,"symbol"!=typeof r?r+"":r,e),m=new Map,l=new WeakMap,f=0,d=void 0;function observe(t,r,e={},a=d){if(void 0===window.IntersectionObserver&&void 0!==a){let o=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof e.threshold?e.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:n,elements:s}=function(t){let r=Object.keys(t).sort().filter(r=>void 0!==t[r]).map(r=>{var e;return`${r}_${"root"===r?(e=t.root)?(l.has(e)||(f+=1,l.set(e,f.toString())),l.get(e)):"0":t[r]}`}).toString(),e=m.get(r);if(!e){let a;let o=new Map,n=new IntersectionObserver(r=>{r.forEach(r=>{var e;let n=r.isIntersecting&&a.some(t=>r.intersectionRatio>=t);t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(e=o.get(r.target))||e.forEach(t=>{t(n,r)})})},t);a=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:n,elements:o},m.set(r,e)}return e}(e),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(r),n.observe(t),function(){i.splice(i.indexOf(r),1),0===i.length&&(s.delete(t),n.unobserve(t)),0===s.size&&(n.disconnect(),m.delete(o))}}var p=class extends n.Component{constructor(t){super(t),__publicField(this,"node",null),__publicField(this,"_unobserveCb",null),__publicField(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),__publicField(this,"handleChange",(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:o,fallbackInView:n}=this.props;this._unobserveCb=observe(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:o},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:r,entry:e}=this.state;return t({inView:r,entry:e,ref:this.handleNode})}let{as:r,triggerOnce:e,threshold:a,root:o,rootMargin:s,onChange:i,skip:c,trackVisibility:m,delay:l,initialInView:f,fallbackInView:d,...p}=this.props;return n.createElement(r||"div",{ref:this.handleNode,...p},t)}};function useInView({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:m,onChange:l}={}){var f;let[d,p]=n.useState(null),u=n.useRef(l),[y,g]=n.useState({inView:!!c,entry:void 0});u.current=l,n.useEffect(()=>{let n;if(!i&&d)return n=observe(d,(t,r)=>{g({inView:t,entry:r}),u.current&&u.current(t,r),r.isIntersecting&&s&&n&&(n(),n=void 0)},{root:o,rootMargin:a,threshold:t,trackVisibility:e,delay:r},m),()=>{n&&n()}},[Array.isArray(t)?t.toString():t,d,o,a,s,i,e,m,r]);let b=null==(f=y.entry)?void 0:f.target,x=n.useRef(void 0);d||!b||s||i||x.current===b||(x.current=b,g({inView:!!c,entry:void 0}));let h=[p,y.inView,y.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}var u=e(14954);i.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,i.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,i.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,i.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,i.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,i.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,i.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,i.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,i.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,i.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,i.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,i.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,i.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let y=i.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,g=i.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b=i.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x=i.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,h=i.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_=i.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v=i.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F=i.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w=i.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j=i.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k=i.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$=i.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S=i.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function matchIfOrNull(t){var r;return r=()=>null,e=>e?t():r()}function hideWhen(t){return matchIfOrNull(()=>({opacity:0}))(t)}let Reveal=t=>{let{cascade:r=!1,damping:e=.5,delay:a=0,duration:o=1e3,fraction:c=0,keyframes:m=_,triggerOnce:l=!1,className:f,style:d,childClassName:y,childStyle:g,children:b,onVisibilityChange:x}=t,h=(0,n.useMemo)(()=>(function({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=_,iterationCount:o=1}){return i.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:m,duration:o}),[o,m]);return void 0==b?null:"string"==typeof b||"number"==typeof b||"boolean"==typeof b?emotion_react_jsx_runtime_browser_esm_jsx(TextReveal,{...t,animationStyles:h,children:String(b)}):(0,u.isFragment)(b)?emotion_react_jsx_runtime_browser_esm_jsx(FragmentReveal,{...t,animationStyles:h}):emotion_react_jsx_runtime_browser_esm_jsx(s,{children:n.Children.map(b,(s,m)=>{if(!(0,n.isValidElement)(s))return null;let u=a+(r?m*o*e:0);switch(s.type){case"ol":case"ul":return emotion_react_jsx_runtime_browser_esm_jsx(i.ms,{children:({cx:r})=>emotion_react_jsx_runtime_browser_esm_jsx(s.type,{...s.props,className:r(f,s.props.className),style:Object.assign({},d,s.props.style),children:emotion_react_jsx_runtime_browser_esm_jsx(Reveal,{...t,children:s.props.children})})});case"li":return emotion_react_jsx_runtime_browser_esm_jsx(p,{threshold:c,triggerOnce:l,onChange:x,children:({inView:t,ref:r})=>emotion_react_jsx_runtime_browser_esm_jsx(i.ms,{children:({cx:e})=>emotion_react_jsx_runtime_browser_esm_jsx(s.type,{...s.props,ref:r,className:e(y,s.props.className),css:matchIfOrNull(()=>h)(t),style:Object.assign({},g,s.props.style,hideWhen(!t),{animationDelay:u+"ms"})})})});default:return emotion_react_jsx_runtime_browser_esm_jsx(p,{threshold:c,triggerOnce:l,onChange:x,children:({inView:t,ref:r})=>emotion_react_jsx_runtime_browser_esm_jsx("div",{ref:r,className:f,css:matchIfOrNull(()=>h)(t),style:Object.assign({},d,hideWhen(!t),{animationDelay:u+"ms"}),children:emotion_react_jsx_runtime_browser_esm_jsx(i.ms,{children:({cx:t})=>emotion_react_jsx_runtime_browser_esm_jsx(s.type,{...s.props,className:t(y,s.props.className),style:Object.assign({},g,s.props.style)})})})})}})})},N={display:"inline-block",whiteSpace:"pre"},TextReveal=t=>{var r,e;let{animationStyles:a,cascade:o=!1,damping:n=.5,delay:s=0,duration:i=1e3,fraction:c=0,triggerOnce:m=!1,className:l,style:f,children:d,onVisibilityChange:p}=t,{ref:u,inView:y}=useInView({triggerOnce:m,threshold:c,onChange:p});return(r=()=>emotion_react_jsx_runtime_browser_esm_jsx("div",{ref:u,className:l,style:Object.assign({},f,N),children:d.split("").map((t,r)=>emotion_react_jsx_runtime_browser_esm_jsx("span",{css:matchIfOrNull(()=>a)(y),style:{animationDelay:s+r*i*n+"ms"},children:t},r))}),e=()=>emotion_react_jsx_runtime_browser_esm_jsx(FragmentReveal,{...t,children:d}),e=>e?r():e())(o)},FragmentReveal=t=>{let{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:o,style:n,children:s,onVisibilityChange:i}=t,{ref:c,inView:m}=useInView({triggerOnce:a,threshold:e,onChange:i});return emotion_react_jsx_runtime_browser_esm_jsx("div",{ref:c,className:o,css:matchIfOrNull(()=>r)(m),style:Object.assign({},n,hideWhen(!m)),children:s})};i.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,i.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,i.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,i.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,i.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,i.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let O=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,z=i.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Y=i.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,C=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,X=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,I=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,V=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,W=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,M=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,R=i.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Z=i.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,E=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,P=i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,Fade=t=>{let{big:r=!1,direction:e,reverse:a=!1,...o}=t,s=(0,n.useMemo)(()=>(function(t,r,e){switch(e){case"bottom-left":return r?z:g;case"bottom-right":return r?Y:b;case"down":return t?r?X:h:r?C:x;case"left":return t?r?V:v:r?I:_;case"right":return t?r?M:w:r?W:F;case"top-left":return r?R:j;case"top-right":return r?Z:k;case"up":return t?r?P:S:r?E:$;default:return r?O:y}})(r,a,e),[r,e,a]);return emotion_react_jsx_runtime_browser_esm_jsx(Reveal,{keyframes:s,...o})};i.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,i.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,i.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,i.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,i.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,i.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,i.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,i.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,i.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,i.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,i.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,i.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,i.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,i.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,i.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,i.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,i.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,i.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,i.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,i.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,i.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,i.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);