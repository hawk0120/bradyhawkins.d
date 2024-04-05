import{A as at,B as Lt,D as be,E as Dt,G as y,H as k,I as rt,O as x,P as _t,Q as N,T as ye,_ as ke,ba as xe,ca as we,e as pe,p as M,q as ve,s as Ft,t as he,z as ge}from"./chunk-IKH3S3SS.js";var Ce=(()=>{let e=class e{Constructor(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-navbar"]],standalone:!0,features:[N],decls:12,vars:0,consts:[["href","#","routerLink","/app-component","routerLinkActive","active"],["href","/blog","routerLink","/blog-component","routerLinkActive","active"],["href","/projects","routerLink","/projects-component","routerLinkActive","active"]],template:function(r,i){r&1&&(y(0,"header")(1,"nav")(2,"ul")(3,"li")(4,"a",0),x(5,"Home"),k()(),y(6,"li")(7,"a",1),x(8,"Blog"),k()(),y(9,"li")(10,"a",2),x(11,"Projects"),k()()()()())},styles:["header[_ngcontent-%COMP%]{padding:10px;text-align:center}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin-right:20px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;transition:transform color .3s ease-in-out}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:gray}"]});let t=e;return t})();var Ae=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-footer"]],standalone:!0,features:[N],decls:3,vars:0,template:function(r,i){r&1&&(y(0,"footer")(1,"p"),x(2,"\xA9 2024 bradyhawkins.dev"),k()())},styles:["footer[_ngcontent-%COMP%]{text-align:center;background-color:#fff;position:fixed;margin-bottom:0;width:100%}"]});let t=e;return t})();var Rt=(()=>{let e=class e{constructor(){this.title="Brady Hawkins app"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:4,vars:0,template:function(r,i){r&1&&(rt(0,"app-navbar"),y(1,"router-outlet")(2,"router-outlet"),rt(3,"app-footer"),k()())},dependencies:[Ce,Ae,xe]});let t=e;return t})();var Se=(()=>{let e=class e{getProjects(){return pe([{name:"Clammy",description:"The project is a typescript-based Insurance Claim Management Platform, powered by Express.js, Angular, and PostgreSQL. The user can create, resolve and retrieve insurance claims through an RESTful API endpoints.",url:"https://github.com/hawk0120/clammy"},{name:"Harambe",description:"A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app",url:"https://github.com/hawk0120/Harambe"},{name:"Cooking With Andrea Application",description:"A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end",url:""},{name:"Personal portfolio site",description:"Used Angular to create persoanl website that dynamically render markdown files in blog posts",url:"https://www.bradyhawkins.dev"}])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ft({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function zn(t,e){if(t&1&&(y(0,"div",2)(1,"h3",3),x(2),k(),y(3,"p",4),x(4),k(),y(5,"a",5),x(6,"Visit Project"),k()()),t&2){let n=e.$implicit;at(2),_t(n.name),at(2),_t(n.description),at(),Dt("href",n.url,ge)}}var Oe=(()=>{let e=class e{constructor(a){this.projectService=a,this.project=[]}ngOnInit(){this.projectService.getProjects().subscribe(a=>{this.project=a})}};e.\u0275fac=function(r){return new(r||e)(Lt(Se))},e.\u0275cmp=M({type:e,selectors:[["app-projects"]],standalone:!0,features:[N],decls:2,vars:1,consts:[[1,"projects-list"],["class","project-item",4,"ngFor","ngForOf"],[1,"project-item"],[1,"project-name"],[1,"project.descrition"],["target","_blank",1,"project-link",3,"href"]],template:function(r,i){r&1&&(y(0,"div",0),be(1,zn,7,3,"div",1),k()),r&2&&(at(),Dt("ngForOf",i.project))},dependencies:[ye],styles:[".projects-list[_ngcontent-%COMP%]{text-decoration:none!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;padding:20px;max-width:80vh;margin:0 auto}.project-name[_ngcontent-%COMP%]{font-size:1.5em}.project-link[_ngcontent-%COMP%]{margin-bottom:3px;font-size:1.1em;letter-spacing:-.01em}.project-link[_ngcontent-%COMP%]:hover{color:#579272}"]});let t=e;return t})();function Ie(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(n),!0).forEach(function(a){w(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function jn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Fn(t,e,n){return e&&Pe(t.prototype,e),n&&Pe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){return Dn(t)||Rn(t,e)||Ze(t,e)||Yn()}function dt(t){return Ln(t)||_n(t)||Ze(t)||$n()}function Ln(t){if(Array.isArray(t))return Ut(t)}function Dn(t){if(Array.isArray(t))return t}function _n(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ze(t,e){if(t){if(typeof t=="string")return Ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(t,e)}}function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function $n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ee=function(){},ne={},tn={},en=null,nn={mark:Ee,measure:Ee};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(tn=document),typeof MutationObserver<"u"&&(en=MutationObserver),typeof performance<"u"&&(nn=performance)}catch{}var Hn=ne.navigator||{},Me=Hn.userAgent,Ne=Me===void 0?"":Me,H=ne,g=tn,Te=en,ht=nn,Or=!!H.document,R=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",an=~Ne.indexOf("MSIE")||~Ne.indexOf("Trident/"),gt,bt,yt,kt,xt,L="___FONT_AWESOME___",Bt=16,rn="fa",on="svg-inline--fa",q="data-fa-i2svg",Vt="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",ze="fontawesome-i2svg",Un="async",Bn=["HTML","HEAD","STYLE","SCRIPT"],sn=function(){try{return!0}catch{return!1}}(),h="classic",b="sharp",ie=[h,b];function pt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var ft=pt((gt={},w(gt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(gt,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),gt)),lt=pt((bt={},w(bt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(bt,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),ct=pt((yt={},w(yt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(yt,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),yt)),Vn=pt((kt={},w(kt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(kt,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kt)),Gn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,fn="fa-layers-text",Xn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qn=pt((xt={},w(xt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(xt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xt)),ln=[1,2,3,4,5,6,7,8,9,10],Kn=ln.concat([11,12,13,14,15,16,17,18,19,20]),Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ut=new Set;Object.keys(lt[h]).map(ut.add.bind(ut));Object.keys(lt[b]).map(ut.add.bind(ut));var Jn=[].concat(ie,dt(ut),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(ln.map(function(t){return"".concat(t,"x")})).concat(Kn.map(function(t){return"w-".concat(t)})),ot=H.FontAwesomeConfig||{};function Zn(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(je=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],je.forEach(function(t){var e=ee(t,2),n=e[0],a=e[1],r=ta(Zn(n));r!=null&&(ot[a]=r)}));var je,cn={styleDefault:"solid",familyDefault:"classic",cssPrefix:rn,replacementClass:on,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var et=u(u({},cn),ot);et.autoReplaceSvg||(et.observeMutations=!1);var d={};Object.keys(cn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){et[t]=n,st.forEach(function(a){return a(d)})},get:function(){return et[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){et.cssPrefix=e,st.forEach(function(n){return n(d)})},get:function(){return et.cssPrefix}});H.FontAwesomeConfig=d;var st=[];function ea(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var Y=Bt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!(!t||!R)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var t=12,e="";t-- >0;)e+=aa[Math.random()*62|0];return e}function nt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function oe(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function un(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(un(t[n]),'" ')},"").trim()}function Mt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function se(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function ia(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function oa(t){var e=t.transform,n=t.width,a=n===void 0?Bt:n,r=t.height,i=r===void 0?Bt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&an?f+="translate(".concat(e.x/Y-a/2,"em, ").concat(e.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):f+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),f+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mn(){var t=rn,e=on,n=d.cssPrefix,a=d.replacementClass,r=sa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Fe=!1;function $t(){d.autoAddCss&&!Fe&&(na(mn()),Fe=!0)}var fa={mixout:function(){return{dom:{css:mn,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},D=H||{};D[L]||(D[L]={});D[L].styles||(D[L].styles={});D[L].hooks||(D[L].hooks={});D[L].shims||(D[L].shims=[]);var T=D[L],dn=[],la=function t(){g.removeEventListener("DOMContentLoaded",t),Pt=1,dn.map(function(e){return e()})},Pt=!1;R&&(Pt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Pt||g.addEventListener("DOMContentLoaded",la));function ca(t){R&&(Pt?setTimeout(t,0):dn.push(t))}function vt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?un(t):"<".concat(e," ").concat(ra(a),">").concat(i.map(vt).join(""),"</").concat(e,">")}function Le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ua=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?ua(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function ma(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Gt(t){var e=ma(t);return e.length===1?e[0].toString(16):null}function da(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function De(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=De(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,De(e)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Xt("fa",e)}var wt,Ct,At,J=T.styles,pa=T.shims,va=(wt={},w(wt,h,Object.values(ct[h])),w(wt,b,Object.values(ct[b])),wt),fe=null,pn={},vn={},hn={},gn={},bn={},ha=(Ct={},w(Ct,h,Object.keys(ft[h])),w(Ct,b,Object.keys(ft[b])),Ct);function ga(t){return~Jn.indexOf(t)}function ba(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}var yn=function(){var e=function(i){return Yt(J,function(o,s,f){return o[f]=Yt(s,i,{}),o},{})};pn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),vn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),bn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in J||d.autoFetchSvg,a=Yt(pa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});hn=a.names,gn=a.unicodes,fe=Nt(d.styleDefault,{family:d.familyDefault})};ea(function(t){fe=Nt(t.styleDefault,{family:d.familyDefault})});yn();function le(t,e){return(pn[t]||{})[e]}function ya(t,e){return(vn[t]||{})[e]}function X(t,e){return(bn[t]||{})[e]}function kn(t){return hn[t]||{prefix:null,iconName:null}}function ka(t){var e=gn[t],n=le("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return fe}var ce=function(){return{prefix:null,iconName:null,rest:[]}};function Nt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=ft[a][t],i=lt[a][t]||lt[a][r],o=t in T.styles?t:null;return i||o||null}var _e=(At={},w(At,h,Object.keys(ct[h])),w(At,b,Object.keys(ct[b])),At);function Tt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},w(e,h,"".concat(d.cssPrefix,"-").concat(h)),w(e,b,"".concat(d.cssPrefix,"-").concat(b)),e),o=null,s=h;(t.includes(i[h])||t.some(function(l){return _e[h].includes(l)}))&&(s=h),(t.includes(i[b])||t.some(function(l){return _e[b].includes(l)}))&&(s=b);var f=t.reduce(function(l,c){var m=ba(d.cssPrefix,c);if(J[c]?(c=va[s].includes(c)?Vn[s][c]:c,o=c,l.prefix=c):ha[s].indexOf(c)>-1?(o=c,l.prefix=Nt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[h]&&c!==i[b]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var p=o==="fa"?kn(l.iconName):{},v=X(l.prefix,l.iconName);p.prefix&&(o=null),l.iconName=p.iconName||v||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},ce());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===b&&(J.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var xa=function(){function t(){jn(this,t),this.definitions={}}return Fn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=ct[h][s];f&&Xt(f,o[s]),yn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=l)}),n[s][f]=l}),n}}]),t}(),Re=[],Z={},tt={},wa=Object.keys(tt);function Ca(t,e){var n=e.mixoutsTo;return Re=t,Z={},Object.keys(tt).forEach(function(a){wa.indexOf(a)===-1&&delete tt[a]}),Re.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(tt)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,n)})}function _(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(e)return e=X(n,e)||e,Le(xn.definitions,n,e)||Le(T.styles,n,e)}var xn=new xa,Aa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,K("noAuto")},Sa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(K("beforeI2svg",e),_("pseudoElements2svg",e),_("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ca(function(){Ia({autoReplaceSvgRoot:n}),K("watch",e)})}},Oa={icon:function(e){if(e===null)return null;if(It(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Nt(e[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Gn))){var r=Tt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:X(i,e)||e}}}},I={noAuto:Aa,config:d,dom:Sa,parse:Oa,library:xn,findIconDefinition:Kt,toHtml:vt},Ia=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function zt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(R){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Pa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(se(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Mt(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ea(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ue(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,p=t.watchable,v=p===void 0?!1:p,A=a.found?a:n,P=A.width,E=A.height,z=r==="fak",C=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),S={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},j=z&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};v&&(S.attributes[q]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(c||mt())},children:[f]}),delete S.attributes.title);var O=u(u({},S),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},j),m.styles)}),B=a.found&&n.found?_("generateAbstractMask",O)||{children:[],attributes:{}}:_("generateAbstractIcon",O)||{children:[],attributes:{}},V=B.children,jt=B.attributes;return O.children=V,O.attributes=jt,s?Ea(O):Pa(O)}function $e(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[q]="");var c=u({},o.styles);se(r)&&(c.transform=oa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Mt(c);m.length>0&&(l.style=m);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ma(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Mt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ht=T.styles;function Qt(t){var e=t[0],n=t[1],a=t.slice(4),r=ee(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Na={found:!1,width:512,height:512};function Ta(t,e){!sn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=W()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:_("missingIconAbstract")||{}};if(n==="fa"){var o=kn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ht[e]&&Ht[e][t]){var s=Ht[e][t];return a(Qt(s))}Ta(t,e),a(u(u({},Na),{},{icon:d.showMissingIcons&&t?_("missingIconAbstract")||{}:{}}))})}var Ye=function(){},Zt=d.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:Ye,measure:Ye},it='FA "6.5.1"',za=function(e){return Zt.mark("".concat(it," ").concat(e," begins")),function(){return wn(e)}},wn=function(e){Zt.mark("".concat(it," ").concat(e," ends")),Zt.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},me={begin:za,end:wn},St=function(){};function He(t){var e=t.getAttribute?t.getAttribute(q):null;return typeof e=="string"}function ja(t){var e=t.getAttribute?t.getAttribute(ae):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function Fa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function La(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function Da(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function _a(t){return g.createElement(t)}function Cn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Da:_a:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Cn(o,{ceFn:a}))}),r}function Ra(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ot={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Cn(r),n)}),n.getAttribute(q)===null&&d.keepOriginalSource){var a=g.createComment(Ra(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~oe(n).indexOf(d.replacementClass))return Ot.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);n.setAttribute(q,""),n.innerHTML=o}};function We(t){t()}function An(t,e){var n=typeof e=="function"?e:St;if(t.length===0)n();else{var a=We;d.mutateApproach===Un&&(a=H.requestAnimationFrame||We),a(function(){var r=La(),i=me.begin("mutate");t.map(r),i(),n()})}}var de=!1;function Sn(){de=!0}function te(){de=!1}var Et=null;function Ue(t){if(Te&&d.observeMutations){var e=t.treeCallback,n=e===void 0?St:e,a=t.nodeCallback,r=a===void 0?St:a,i=t.pseudoElementsCallback,o=i===void 0?St:i,s=t.observeMutationsRoot,f=s===void 0?g:s;Et=new Te(function(l){if(!de){var c=W();nt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!He(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&He(m.target)&&~Qn.indexOf(m.attributeName))if(m.attributeName==="class"&&ja(m.target)){var p=Tt(oe(m.target)),v=p.prefix,A=p.iconName;m.target.setAttribute(ae,v||c),A&&m.target.setAttribute(re,A)}else Fa(m.target)&&r(m.target)})}}),R&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $a(){Et&&Et.disconnect()}function Ya(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ha(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Tt(oe(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,t.innerText)||le(r.prefix,Gt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Wa(t){var e=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Be(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ha(t),a=n.iconName,r=n.prefix,i=n.rest,o=Wa(t),s=qt("parseNodeAttributes",{},t),f=e.styleParser?Ya(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ba=T.styles;function On(t){var e=d.autoReplaceSvg==="nest"?Be(t,{styleParser:!1}):Be(t);return~e.extra.classes.indexOf(fn)?_("generateLayersText",t,e):_("generateSvgReplacementMutation",t,e)}var U=new Set;ie.map(function(t){U.add("fa-".concat(t))});Object.keys(ft[h]).map(U.add.bind(U));Object.keys(ft[b]).map(U.add.bind(U));U=dt(U);function Ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=g.documentElement.classList,a=function(m){return n.add("".concat(ze,"-").concat(m))},r=function(m){return n.remove("".concat(ze,"-").concat(m))},i=d.autoFetchSvg?U:ie.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");var o=[".".concat(fn,":not([").concat(q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=me.begin("onTree"),l=s.reduce(function(c,m){try{var p=On(m);p&&c.push(p)}catch(v){sn||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(p){An(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(p){f(),m(p)})})}function Va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(t).then(function(n){n&&An([n],e)})}function Ga(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Kt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Xa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?F:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,m=n.title,p=m===void 0?null:m,v=n.titleId,A=v===void 0?null:v,P=n.classes,E=P===void 0?[]:P,z=n.attributes,C=z===void 0?{}:z,S=n.styles,j=S===void 0?{}:S;if(e){var O=e.prefix,B=e.iconName,V=e.icon;return zt(u({type:"icon"},e),function(){return K("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(p?C["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||mt()):(C["aria-hidden"]="true",C.focusable="false")),ue({icons:{main:Qt(V),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:B,transform:u(u({},F),r),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:C,styles:j,classes:E}})})}},qa={mixout:function(){return{icon:Ga(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ve,n.nodeCallback=Va,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return Ve(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,p=a.extra;return new Promise(function(v,A){Promise.all([Jt(r,s),c.iconName?Jt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=ee(P,2),z=E[0],C=E[1];v([n,ue({icons:{main:z,mask:C},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Mt(s);f.length>0&&(r.style=f);var l;return se(o)&&(l=_("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Ka={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(dt(i)).join(" ")},children:o}]})}}}},Qa={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return zt({type:"counter",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),Ma({content:n.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(dt(s))}})})}}}},Ja={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?F:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,p=a.styles,v=p===void 0?{}:p;return zt({type:"text",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),$e({content:n,transform:u(u({},F),i),title:s,extra:{attributes:m,styles:v,classes:["".concat(d.cssPrefix,"-layers-text")].concat(dt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(an){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$e({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Za=new RegExp('"',"ug"),Ge=[1105920,1112319];function tr(t){var e=t.replace(Za,""),n=da(e,0),a=n>=Ge[0]&&n<=Ge[1],r=e.length===2?e[0]===e[1]:!1;return{value:Gt(r?e[0]:e),isSecondary:a||r}}function Xe(t,e){var n="".concat(Wn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=nt(t.children),o=i.filter(function(V){return V.getAttribute(Vt)===e})[0],s=H.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Xn),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?b:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?lt[p][f[2].toLowerCase()]:qn[p][l],A=tr(m),P=A.value,E=A.isSecondary,z=f[0].startsWith("FontAwesome"),C=le(v,P),S=C;if(z){var j=ka(P);j.iconName&&j.prefix&&(C=j.iconName,v=j.prefix)}if(C&&!E&&(!o||o.getAttribute(ae)!==v||o.getAttribute(re)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);var O=Ua(),B=O.extra;B.attributes[Vt]=e,Jt(C,v).then(function(V){var jt=ue(u(u({},O),{},{icons:{main:V,mask:ce()},prefix:v,iconName:S,extra:B,watchable:!0})),$=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=jt.map(function(Nn){return vt(Nn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function er(t){return Promise.all([Xe(t,"::before"),Xe(t,"::after")])}function nr(t){return t.parentNode!==document.head&&!~Bn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qe(t){if(R)return new Promise(function(e,n){var a=nt(t.querySelectorAll("*")).filter(nr).map(er),r=me.begin("searchPseudoElements");Sn(),Promise.all(a).then(function(){r(),te(),e()}).catch(function(){r(),te(),n()})})}var ar={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qe,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;d.searchPseudoElements&&qe(r)}}},Ke=!1,rr={mixout:function(){return{dom:{unwatch:function(){Sn(),Ke=!0}}}},hooks:function(){return{bootstrap:function(){Ue(qt("mutationObserverCallbacks",{}))},noAuto:function(){$a()},watch:function(n){var a=n.observeMutationsRoot;Ke?te():Ue(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Qe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ir={mixout:function(){return{parse:{transform:function(n){return Qe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Qe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},v.outer),children:[{tag:"g",attributes:u({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),v.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function Je(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function or(t){return t.tag==="g"?t.children:[t]}var sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):ce();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,m=o.width,p=o.icon,v=ia({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Wt),{},{fill:"white"})},P=c.children?{children:c.children.map(Je)}:{},E={tag:"g",attributes:u({},v.inner),children:[Je(u({tag:c.tag,attributes:u(u({},c.attributes),v.path)},P))]},z={tag:"g",attributes:u({},v.outer),children:[E]},C="mask-".concat(s||mt()),S="clip-".concat(s||mt()),j={tag:"mask",attributes:u(u({},Wt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,z]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:or(p)},j]};return a.push(O,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(C,")")},Wt)}),{children:a,attributes:r}}}},fr={provides:function(e){var n=!1;H.matchMedia&&(n=H.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},lr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},cr=[fa,qa,Ka,Qa,Ja,ar,rr,ir,sr,fr,lr];Ca(cr,{mixoutsTo:I});var Ir=I.noAuto,Pr=I.config,Er=I.library,Mr=I.dom,ur=I.parse,Nr=I.findIconDefinition,Tr=I.toHtml,mr=I.icon,zr=I.layer,dr=I.text,pr=I.counter;var In=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ve({type:e}),e.\u0275inj=he({});let t=e;return t})();var Pn=(()=>{let e=class e{ngOnInit(){class a{constructor(l){this.canvas=document.getElementById(l),this.ctx=this.canvas.getContext("2d"),this.initCanvasSize(),this.addEventListeners()}initCanvasSize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addEventListeners(){window.addEventListener("resize",()=>this.initCanvasSize())}}class r{constructor(l,c,m){this.x=l,this.y=c,this.size=m,this.speedX=Math.random()*3-1.5,this.speedY=Math.random()*3-1.5}update(){this.x+=this.speedX,this.y+=this.speedY}draw(l){l.fillStyle="grey",l.strokeStyle="grey",l.lineWidth=2,l.beginPath(),l.arc(this.x,this.y,this.size,0,Math.PI*2),l.closePath(),l.fill(),l.stroke()}}class i{constructor(){this.particles=[]}createParticles(l){let c=Math.random()*l.width,m=Math.random()*l.height,p=Math.random()*5;this.particles.push(new r(c,m,p))}animateParticles(l){l.clearRect(0,0,l.canvas.width,l.canvas.height),this.particles.forEach((c,m)=>{c.update(),c.draw(l),c.size<=.2&&this.particles.splice(m,1)}),requestAnimationFrame(()=>this.animateParticles(l))}}let o=new a("particles-canvas"),s=new i;setInterval(()=>s.createParticles(o.canvas),500),s.animateParticles(o.ctx)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-home"]],standalone:!0,features:[N],decls:19,vars:0,consts:[["id","particles-canvas"],[1,"home-wrapper"],[1,"divider"],[1,"about-container"],[1,"links-container"],["href","mailto:hi@bradyhawkins.dev",1,"link"],["href","https://github.com/hawk0120",1,"link"],["href","https://www.linkedin.com/in/brady-hawkins",1,"link"]],template:function(r,i){r&1&&(rt(0,"canvas",0),y(1,"div",1)(2,"h1"),x(3,"Hi, I'm Brady"),k(),y(4,"p"),x(5,"Developer "),y(6,"span",2),x(7," | "),k(),x(8," Writer"),k()(),y(9,"div",3)(10,"p"),x(11," I am a software developer that brings craftsmanship approach to my work. I have a background in software and the humantarian field. I am always looking for new opportunities to grow and expand my knowledge. If you think we could work together, please feel free to reach me at one of the links below. "),k(),y(12,"div",4)(13,"a",5),x(14," Mail "),k(),y(15,"a",6),x(16," Github "),k(),y(17,"a",7),x(18," Linkedin"),k()()())},dependencies:[In],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;text-decoration:none}canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1}.home-wrapper[_ngcontent-%COMP%]{margin-top:100px;width:100%;text-align:center;position:relative;z-index:10}h1[_ngcontent-%COMP%]{font-family:Source Sans Pro,sans-serif;font-size:3em;letter-spacing:-.02em}p[_ngcontent-%COMP%]{font-family:Source Sans Pro;font-size:1.3em;margin:15px 0}.divider[_ngcontent-%COMP%]{color:#000}.about-container[_ngcontent-%COMP%]{max-width:80%;margin:50px auto}.links-container[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-direction:column}.link[_ngcontent-%COMP%]{padding-top:5px}"]});let t=e;return t})();var En=[{path:"",component:Pn},{path:"blog",loadChildren:()=>import("./chunk-CZHSJTAE.js").then(t=>t.BlogModule)},{path:"projects",component:Oe}];var Mn={providers:[we(En)]};ke(Rt,Mn).catch(t=>console.error(t));
