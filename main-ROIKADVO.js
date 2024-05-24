import{A as Yt,B as X,C as $t,E as Oe,F as rt,H as h,I as g,J as M,M as gt,P as Wt,Q as Bt,R as Ut,S as b,T as Gt,U as N,X as Pe,ca as Ee,e as Ce,fa as Me,ga as Te,p as O,q as Se,s as Ht,t as Ae,z as Ie}from"./chunk-QDJWW3Y4.js";var Ne=(()=>{let e=class e{Constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=O({type:e,selectors:[["app-navbar"]],standalone:!0,features:[N],decls:18,vars:0,consts:[["href","#","routerLink","/app-component","routerLinkActive","active"],["href","/blog","routerLink","/blog-component","routerLinkActive","active"],["href","/projects","routerLink","/projects-component","routerLinkActive","active"],["href","/game-canvas","routerLink","/game-canvas-component","routerLinkActive","active"]],template:function(i,r){i&1&&(h(0,"header")(1,"nav")(2,"p"),b(3," bradyhawkins.dev "),g(),h(4,"ul")(5,"li")(6,"a",0),b(7,"Home"),g()(),h(8,"li")(9,"a",1),b(10,"Blog"),g()(),h(11,"li")(12,"a",2),b(13,"Projects"),g()(),h(14,"li")(15,"a",3),b(16,"flappy-niks"),g()()()(),M(17,"hr"),g())},styles:["header[_ngcontent-%COMP%]{padding-top:1em;padding-bottom:1em;margin-right:0}nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;display:flex}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.2em}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]});let t=e;return t})();var je=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=O({type:e,selectors:[["app-footer"]],standalone:!0,features:[N],decls:8,vars:0,consts:[[1,"icon-container"],["href","https://www.linkedin.com/in/brady-hawkins"],[1,"icon","fab","fa-linkedin","fa-2x"],["href","https://github.com/hawk0120"],[1,"icon","fab","fa-github","fa-2x"]],template:function(i,r){i&1&&(h(0,"footer")(1,"p"),b(2,"Brady Hawkins"),g(),h(3,"div",0)(4,"a",1),M(5,"i",2),g(),h(6,"a",3),M(7,"i",4),g()()())},styles:["footer[_ngcontent-%COMP%]{position:fixed;bottom:0;display:flex;overflow:visible;width:800px;justify-content:space-between;margin:0 auto}.icon[_ngcontent-%COMP%]{color:var(--grey);padding:12px;width:10px;height:10px}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--yellow)}"]});let t=e;return t})();var bt=class{constructor(e){this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext("2d"),this.initCanvasSize(),this.addEventListeners()}initCanvasSize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addEventListeners(){window.addEventListener("resize",()=>this.initCanvasSize())}},Vt=class{constructor(e,a,n){this.x=e,this.y=a,this.size=n,this.speedX=Math.random()*3-1.5,this.speedY=Math.random()*3-1.5}update(){this.x+=this.speedX,this.y+=this.speedY}draw(e){e.fillStyle="grey",e.strokeStyle="grey",e.lineWidth=2,e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.closePath(),e.fill(),e.stroke()}},yt=class{constructor(){this.particles=[]}createParticles(e){let a=Math.random()*e.width,n=Math.random()*e.height,i=Math.random()*5;this.particles.push(new Vt(a,n,i))}animateParticles(e){e.clearRect(0,0,e.canvas.width,e.canvas.height),this.particles.forEach((a,n)=>{a.update(),a.draw(e),a.size<=.2&&this.particles.splice(n,1)}),requestAnimationFrame(()=>this.animateParticles(e))}};var Xt=(()=>{let e=class e{constructor(){this.title="Brady Hawkins app"}ngOnInit(){let n=new bt("particles-canvas"),i=new yt;setInterval(()=>i.createParticles(n.canvas),10),i.animateParticles(n.ctx)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=O({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:5,vars:0,consts:[["id","particles-canvas"]],template:function(i,r){i&1&&(M(0,"canvas",0)(1,"app-navbar"),h(2,"router-outlet")(3,"router-outlet"),M(4,"app-footer"),g()())},dependencies:[Ne,je,Me],styles:["[_ngcontent-%COMP%]:root{margin:0}canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1}"]});let t=e;return t})();var ze=(()=>{let e=class e{getProjects(){return Ce([{name:"Clammy",description:"The project is a Insurance Claim Management Platform, powered by Angular on the front end. I have written the backend server in Java/Spring and Typescript/Express to compare verbosity. The server interacts with a PostgreSQL database. The user can create, resolve and retrieve insurance claims through an RESTful API endpoints.",url:"https://github.com/hawk0120/clammy"},{name:"Flappy Niks Game",description:"Created an interactive Flappy Bird inspired game using HTML5 Canvas, Angular, and Typescript. This was developed as a fun gift for my nephews in Canada.",url:"https://www.bradyhawkins.dev/game-canvas"},{name:"Cooking With Andrea Application",description:"A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end",url:""},{name:"bowmaneconomics.ca",description:"A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.",url:"https://www.bowmaneconomics.ca"},{name:"Customer Portal for Scotty's Auto",description:"A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",url:"https://www.scottysauto.ca"},{name:"Personal portfolio site",description:"Used Angular to create persoanl website that dynamically render markdown files in blog posts",url:"https://www.bradyhawkins.dev"},{name:"Harambe",description:"A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app",url:"https://github.com/hawk0120/Harambe"},{name:"Counter React Native Application",description:"A simple React Native application developed to track the number of people entering a building. This project was initiated during the Covid-19 pandemic to aid clients in managing and monitoring occupancy levels effectively.",url:"https://github.com/hawk0120/counter"},{name:"compassionatekenora.ca",description:"A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.",url:"https://www.compassionatekenora.ca"}])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Ht({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function $n(t,e){if(t&1&&(h(0,"div",2)(1,"p",3),b(2),g(),h(3,"p",4),b(4),g(),h(5,"a",5),b(6,"Visit Project"),g()()),t&2){let a=e.$implicit;X(2),Gt(a.name),X(2),Gt(a.description),X(),rt("href",a.url,Ie)}}var wt=(()=>{let e=class e{constructor(n){this.projectService=n,this.numOfProjectToShow=8,this.project=[]}ngOnInit(){this.projectService.getProjects().subscribe(n=>{this.project=n.slice(0,this.numOfProjectToShow)})}};e.\u0275fac=function(i){return new(i||e)($t(ze))},e.\u0275cmp=O({type:e,selectors:[["app-projects"]],inputs:{numOfProjectToShow:"numOfProjectToShow"},standalone:!0,features:[N],decls:2,vars:1,consts:[[1,"projects-list"],["class","project-item",4,"ngFor","ngForOf"],[1,"project-item"],[1,"project-name"],[1,"project.description"],["target","_blank",1,"project-link",3,"href"]],template:function(i,r){i&1&&(h(0,"div",0),Oe(1,$n,7,3,"div",1),g()),i&2&&(X(),rt("ngForOf",r.project))},dependencies:[Pe],styles:[".projects-list[_ngcontent-%COMP%]{text-decoration:none!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin:0 auto}.project-link[_ngcontent-%COMP%]{margin-bottom:3px}.project-link[_ngcontent-%COMP%]:hover{color:var(--yellow);padding:.1em;border-radius:3px;translate:4em}"]});let t=e;return t})();function _e(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(a),!0).forEach(function(n){x(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_e(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function Wn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fe(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Bn(t,e,a){return e&&Fe(t.prototype,e),a&&Fe(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ce(t,e){return Gn(t)||Xn(t,e)||ln(t,e)||Kn()}function pt(t){return Un(t)||Vn(t)||ln(t)||qn()}function Un(t){if(Array.isArray(t))return Zt(t)}function Gn(t){if(Array.isArray(t))return t}function Vn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xn(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],i=!0,r=!1,o,s;try{for(a=a.call(t);!(i=(o=a.next()).done)&&(n.push(o.value),!(e&&n.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&a.return!=null&&a.return()}finally{if(r)throw s}}return n}}function ln(t,e){if(t){if(typeof t=="string")return Zt(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Zt(t,e)}}function Zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Le=function(){},ue={},fn={},cn=null,un={mark:Le,measure:Le};try{typeof window<"u"&&(ue=window),typeof document<"u"&&(fn=document),typeof MutationObserver<"u"&&(cn=MutationObserver),typeof performance<"u"&&(un=performance)}catch{}var Qn=ue.navigator||{},De=Qn.userAgent,Re=De===void 0?"":De,W=ue,w=fn,He=cn,kt=un,Hi=!!W.document,H=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",mn=~Re.indexOf("MSIE")||~Re.indexOf("Trident/"),xt,Ct,St,At,It,L="___FONT_AWESOME___",te=16,dn="fa",pn="svg-inline--fa",J="data-fa-i2svg",ee="data-fa-pseudo-element",Jn="data-fa-pseudo-element-pending",me="data-prefix",de="data-icon",Ye="fontawesome-i2svg",Zn="async",ta=["HTML","HEAD","STYLE","SCRIPT"],vn=function(){try{return!0}catch{return!1}}(),y="classic",k="sharp",pe=[y,k];function vt(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[y]}})}var ft=vt((xt={},x(xt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(xt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xt)),ct=vt((Ct={},x(Ct,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(Ct,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ct)),ut=vt((St={},x(St,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(St,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),St)),ea=vt((At={},x(At,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(At,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),At)),na=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,hn="fa-layers-text",aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ia=vt((It={},x(It,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(It,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),It)),gn=[1,2,3,4,5,6,7,8,9,10],ra=gn.concat([11,12,13,14,15,16,17,18,19,20]),oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ct[y]).map(mt.add.bind(mt));Object.keys(ct[k]).map(mt.add.bind(mt));var sa=[].concat(pe,pt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(gn.map(function(t){return"".concat(t,"x")})).concat(ra.map(function(t){return"w-".concat(t)})),st=W.FontAwesomeConfig||{};function la(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function fa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}w&&typeof w.querySelector=="function"&&($e=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],$e.forEach(function(t){var e=ce(t,2),a=e[0],n=e[1],i=fa(la(a));i!=null&&(st[n]=i)}));var $e,bn={styleDefault:"solid",familyDefault:"classic",cssPrefix:dn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var at=c(c({},bn),st);at.autoReplaceSvg||(at.observeMutations=!1);var m={};Object.keys(bn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(a){at[t]=a,lt.forEach(function(n){return n(m)})},get:function(){return at[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){at.cssPrefix=e,lt.forEach(function(a){return a(m)})},get:function(){return at.cssPrefix}});W.FontAwesomeConfig=m;var lt=[];function ca(t){return lt.push(t),function(){lt.splice(lt.indexOf(t),1)}}var $=te,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ua(t){if(!(!t||!H)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=w.head.childNodes,n=null,i=a.length-1;i>-1;i--){var r=a[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=r)}return w.head.insertBefore(e,n),t}}var ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var t=12,e="";t-- >0;)e+=ma[Math.random()*62|0];return e}function it(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function ve(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(yn(t[a]),'" ')},"").trim()}function _t(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function he(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function pa(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,i={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:l,path:u}}function va(t){var e=t.transform,a=t.width,n=a===void 0?te:a,i=t.height,r=i===void 0?te:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&mn?l+="translate(".concat(e.x/$-n/2,"em, ").concat(e.y/$-r/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):l+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),l+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ha=`:root, :host {
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
}`;function wn(){var t=dn,e=pn,a=m.cssPrefix,n=m.replacementClass,i=ha;if(a!==t||n!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return i}var We=!1;function qt(){m.autoAddCss&&!We&&(ua(wn()),We=!0)}var ga={mixout:function(){return{dom:{css:wn,insertCss:qt}}},hooks:function(){return{beforeDOMElementCreation:function(){qt()},beforeI2svg:function(){qt()}}}},D=W||{};D[L]||(D[L]={});D[L].styles||(D[L].styles={});D[L].hooks||(D[L].hooks={});D[L].shims||(D[L].shims=[]);var j=D[L],kn=[],ba=function t(){w.removeEventListener("DOMContentLoaded",t),jt=1,kn.map(function(e){return e()})},jt=!1;H&&(jt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),jt||w.addEventListener("DOMContentLoaded",ba));function ya(t){H&&(jt?setTimeout(t,0):kn.push(t))}function ht(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,i=t.children,r=i===void 0?[]:i;return typeof t=="string"?yn(t):"<".concat(e," ").concat(da(n),">").concat(r.map(ht).join(""),"</").concat(e,">")}function Be(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var wa=function(e,a){return function(n,i,r,o){return e.call(a,n,i,r,o)}},Kt=function(e,a,n,i){var r=Object.keys(e),o=r.length,s=i!==void 0?wa(a,i):a,l,u,f;for(n===void 0?(l=1,f=e[r[0]]):(l=0,f=n);l<o;l++)u=r[l],f=s(f,e[u],u,e);return f};function ka(t){for(var e=[],a=0,n=t.length;a<n;){var i=t.charCodeAt(a++);if(i>=55296&&i<=56319&&a<n){var r=t.charCodeAt(a++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),a--)}else e.push(i)}return e}function ne(t){var e=ka(t);return e.length===1?e[0].toString(16):null}function xa(t,e){var a=t.length,n=t.charCodeAt(e),i;return n>=55296&&n<=56319&&a>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Ue(t){return Object.keys(t).reduce(function(e,a){var n=t[a],i=!!n.icon;return i?e[n.iconName]=n.icon:e[a]=n,e},{})}function ae(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,i=n===void 0?!1:n,r=Ue(e);typeof j.hooks.addPack=="function"&&!i?j.hooks.addPack(t,Ue(e)):j.styles[t]=c(c({},j.styles[t]||{}),r),t==="fas"&&ae("fa",e)}var Ot,Pt,Et,tt=j.styles,Ca=j.shims,Sa=(Ot={},x(Ot,y,Object.values(ut[y])),x(Ot,k,Object.values(ut[k])),Ot),ge=null,xn={},Cn={},Sn={},An={},In={},Aa=(Pt={},x(Pt,y,Object.keys(ft[y])),x(Pt,k,Object.keys(ft[k])),Pt);function Ia(t){return~sa.indexOf(t)}function Oa(t,e){var a=e.split("-"),n=a[0],i=a.slice(1).join("-");return n===t&&i!==""&&!Ia(i)?i:null}var On=function(){var e=function(r){return Kt(tt,function(o,s,l){return o[l]=Kt(s,r,{}),o},{})};xn=e(function(i,r,o){if(r[3]&&(i[r[3]]=o),r[2]){var s=r[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Cn=e(function(i,r,o){if(i[o]=o,r[2]){var s=r[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),In=e(function(i,r,o){var s=r[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var a="far"in tt||m.autoFetchSvg,n=Kt(Ca,function(i,r){var o=r[0],s=r[1],l=r[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Sn=n.names,An=n.unicodes,ge=Ft(m.styleDefault,{family:m.familyDefault})};ca(function(t){ge=Ft(t.styleDefault,{family:m.familyDefault})});On();function be(t,e){return(xn[t]||{})[e]}function Pa(t,e){return(Cn[t]||{})[e]}function Q(t,e){return(In[t]||{})[e]}function Pn(t){return Sn[t]||{prefix:null,iconName:null}}function Ea(t){var e=An[t],a=be("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function B(){return ge}var ye=function(){return{prefix:null,iconName:null,rest:[]}};function Ft(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?y:a,i=ft[n][t],r=ct[n][t]||ct[n][i],o=t in j.styles?t:null;return r||o||null}var Ge=(Et={},x(Et,y,Object.keys(ut[y])),x(Et,k,Object.keys(ut[k])),Et);function Lt(t){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,i=n===void 0?!1:n,r=(e={},x(e,y,"".concat(m.cssPrefix,"-").concat(y)),x(e,k,"".concat(m.cssPrefix,"-").concat(k)),e),o=null,s=y;(t.includes(r[y])||t.some(function(u){return Ge[y].includes(u)}))&&(s=y),(t.includes(r[k])||t.some(function(u){return Ge[k].includes(u)}))&&(s=k);var l=t.reduce(function(u,f){var d=Oa(m.cssPrefix,f);if(tt[f]?(f=Sa[s].includes(f)?ea[s][f]:f,o=f,u.prefix=f):Aa[s].indexOf(f)>-1?(o=f,u.prefix=Ft(f,{family:s})):d?u.iconName=d:f!==m.replacementClass&&f!==r[y]&&f!==r[k]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var p=o==="fa"?Pn(u.iconName):{},v=Q(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!tt.far&&tt.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},ye());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===k&&(tt.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Q(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=B()||"fas"),l}var Ma=function(){function t(){Wn(this,t),this.definitions={}}return Bn(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),ae(s,o[s]);var l=ut[y][s];l&&ae(l,o[s]),On()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(r){var o=i[r],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}]),t}(),Ve=[],et={},nt={},Ta=Object.keys(nt);function Na(t,e){var a=e.mixoutsTo;return Ve=t,et={},Object.keys(nt).forEach(function(n){Ta.indexOf(n)===-1&&delete nt[n]}),Ve.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(a[o]=i[o]),Nt(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=i[o][s]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(o){et[o]||(et[o]=[]),et[o].push(r[o])})}n.provides&&n.provides(nt)}),a}function ie(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];var r=et[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function Z(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var i=et[t]||[];i.forEach(function(r){r.apply(null,a)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,e):void 0}function re(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||B();if(e)return e=Q(a,e)||e,Be(En.definitions,a,e)||Be(j.styles,a,e)}var En=new Ma,ja=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Z("noAuto")},za={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(Z("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ya(function(){Fa({autoReplaceSvgRoot:a}),Z("watch",e)})}},_a={icon:function(e){if(e===null)return null;if(Nt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ft(e[0]);return{prefix:n,iconName:Q(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(na))){var i=Lt(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||B(),iconName:Q(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var r=B();return{prefix:r,iconName:Q(r,e)||e}}}},P={noAuto:ja,config:m,dom:za,parse:_a,library:En,findIconDefinition:re,toHtml:ht},Fa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?w:a;(Object.keys(j.styles).length>0||m.autoFetchSvg)&&H&&m.autoReplaceSvg&&P.dom.i2svg({node:n})};function Dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return ht(n)})}}),Object.defineProperty(t,"node",{get:function(){if(H){var n=w.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function La(t){var e=t.children,a=t.main,n=t.mask,i=t.attributes,r=t.styles,o=t.transform;if(he(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};i.style=_t(c(c({},r),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Da(t){var e=t.prefix,a=t.iconName,n=t.children,i=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},i),{},{id:o}),children:n}]}]}function we(t){var e=t.icons,a=e.main,n=e.mask,i=t.prefix,r=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,f=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,S=n.found?n:a,E=S.width,T=S.height,z=i==="fak",C=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),A={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":i,"data-icon":r,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(T)})},_=z&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/T*16*.0625,"em")}:{};v&&(A.attributes[J]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||dt())},children:[l]}),delete A.attributes.title);var I=c(c({},A),{},{prefix:i,iconName:r,main:a,mask:n,maskId:u,transform:o,symbol:s,styles:c(c({},_),d.styles)}),G=n.found&&a.found?R("generateAbstractMask",I)||{children:[],attributes:{}}:R("generateAbstractIcon",I)||{children:[],attributes:{}},V=G.children,Rt=G.attributes;return I.children=V,I.attributes=Rt,s?Da(I):La(I)}function Xe(t){var e=t.content,a=t.width,n=t.height,i=t.transform,r=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[J]="");var f=c({},o.styles);he(i)&&(f.transform=va({transform:i,startCentered:!0,width:a,height:n}),f["-webkit-transform"]=f.transform);var d=_t(f);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function Ra(t){var e=t.content,a=t.title,n=t.extra,i=c(c(c({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),r=_t(n.styles);r.length>0&&(i.style=r);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Qt=j.styles;function oe(t){var e=t[0],a=t[1],n=t.slice(4),i=ce(n,1),r=i[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:a,icon:o}}var Ha={found:!1,width:512,height:512};function Ya(t,e){!vn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function se(t,e){var a=e;return e==="fa"&&m.styleDefault!==null&&(e=B()),new Promise(function(n,i){var r={found:!1,width:512,height:512,icon:R("missingIconAbstract")||{}};if(a==="fa"){var o=Pn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Qt[e]&&Qt[e][t]){var s=Qt[e][t];return n(oe(s))}Ya(t,e),n(c(c({},Ha),{},{icon:m.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var qe=function(){},le=m.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:qe,measure:qe},ot='FA "6.5.1"',$a=function(e){return le.mark("".concat(ot," ").concat(e," begins")),function(){return Mn(e)}},Mn=function(e){le.mark("".concat(ot," ").concat(e," ends")),le.measure("".concat(ot," ").concat(e),"".concat(ot," ").concat(e," begins"),"".concat(ot," ").concat(e," ends"))},ke={begin:$a,end:Mn},Mt=function(){};function Ke(t){var e=t.getAttribute?t.getAttribute(J):null;return typeof e=="string"}function Wa(t){var e=t.getAttribute?t.getAttribute(me):null,a=t.getAttribute?t.getAttribute(de):null;return e&&a}function Ba(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ua(){if(m.autoReplaceSvg===!0)return Tt.replace;var t=Tt[m.autoReplaceSvg];return t||Tt.replace}function Ga(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Va(t){return w.createElement(t)}function Tn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?Ga:Va:a;if(typeof t=="string")return w.createTextNode(t);var i=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){i.appendChild(Tn(o,{ceFn:n}))}),i}function Xa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Tt={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(i){a.parentNode.insertBefore(Tn(i),a)}),a.getAttribute(J)===null&&m.keepOriginalSource){var n=w.createComment(Xa(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~ve(a).indexOf(m.replacementClass))return Tt.replace(e);var i=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var o=n.map(function(s){return ht(s)}).join(`
`);a.setAttribute(J,""),a.innerHTML=o}};function Qe(t){t()}function Nn(t,e){var a=typeof e=="function"?e:Mt;if(t.length===0)a();else{var n=Qe;m.mutateApproach===Zn&&(n=W.requestAnimationFrame||Qe),n(function(){var i=Ua(),r=ke.begin("mutate");t.map(i),r(),a()})}}var xe=!1;function jn(){xe=!0}function fe(){xe=!1}var zt=null;function Je(t){if(He&&m.observeMutations){var e=t.treeCallback,a=e===void 0?Mt:e,n=t.nodeCallback,i=n===void 0?Mt:n,r=t.pseudoElementsCallback,o=r===void 0?Mt:r,s=t.observeMutationsRoot,l=s===void 0?w:s;zt=new He(function(u){if(!xe){var f=B();it(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ke(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ke(d.target)&&~oa.indexOf(d.attributeName))if(d.attributeName==="class"&&Wa(d.target)){var p=Lt(ve(d.target)),v=p.prefix,S=p.iconName;d.target.setAttribute(me,v||f),S&&d.target.setAttribute(de,S)}else Ba(d.target)&&i(d.target)})}}),H&&zt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qa(){zt&&zt.disconnect()}function Ka(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,i){var r=i.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Qa(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",i=Lt(ve(t));return i.prefix||(i.prefix=B()),e&&a&&(i.prefix=e,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Pa(i.prefix,t.innerText)||be(i.prefix,ne(t.innerText))),!i.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ja(t){var e=it(t.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return m.autoA11y&&(a?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||dt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Qa(t),n=a.iconName,i=a.prefix,r=a.rest,o=Ja(t),s=ie("parseNodeAttributes",{},t),l=e.styleParser?Ka(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}var ti=j.styles;function zn(t){var e=m.autoReplaceSvg==="nest"?Ze(t,{styleParser:!1}):Ze(t);return~e.extra.classes.indexOf(hn)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}var U=new Set;pe.map(function(t){U.add("fa-".concat(t))});Object.keys(ft[y]).map(U.add.bind(U));Object.keys(ft[k]).map(U.add.bind(U));U=pt(U);function tn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var a=w.documentElement.classList,n=function(d){return a.add("".concat(Ye,"-").concat(d))},i=function(d){return a.remove("".concat(Ye,"-").concat(d))},r=m.autoFetchSvg?U:pe.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ti));r.includes("fa")||r.push("fa");var o=[".".concat(hn,":not([").concat(J,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(J,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=it(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),i("complete");else return Promise.resolve();var l=ke.begin("onTree"),u=s.reduce(function(f,d){try{var p=zn(d);p&&f.push(p)}catch(v){vn||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(p){Nn(p,function(){n("active"),n("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),d(p)})})}function ei(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zn(t).then(function(a){a&&Nn([a],e)})}function ni(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:re(e||{}),i=a.mask;return i&&(i=(i||{}).icon?i:re(i||{})),t(n,c(c({},a),{},{mask:i}))}}var ai=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,i=n===void 0?F:n,r=a.symbol,o=r===void 0?!1:r,s=a.mask,l=s===void 0?null:s,u=a.maskId,f=u===void 0?null:u,d=a.title,p=d===void 0?null:d,v=a.titleId,S=v===void 0?null:v,E=a.classes,T=E===void 0?[]:E,z=a.attributes,C=z===void 0?{}:z,A=a.styles,_=A===void 0?{}:A;if(e){var I=e.prefix,G=e.iconName,V=e.icon;return Dt(c({type:"icon"},e),function(){return Z("beforeDOMElementCreation",{iconDefinition:e,params:a}),m.autoA11y&&(p?C["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||dt()):(C["aria-hidden"]="true",C.focusable="false")),we({icons:{main:oe(V),mask:l?oe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:G,transform:c(c({},F),i),symbol:o,title:p,maskId:f,titleId:S,extra:{attributes:C,styles:_,classes:T}})})}},ii={mixout:function(){return{icon:ni(ai)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=tn,a.nodeCallback=ei,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,i=n===void 0?w:n,r=a.callback,o=r===void 0?function(){}:r;return tn(i,o)},e.generateSvgReplacementMutation=function(a,n){var i=n.iconName,r=n.title,o=n.titleId,s=n.prefix,l=n.transform,u=n.symbol,f=n.mask,d=n.maskId,p=n.extra;return new Promise(function(v,S){Promise.all([se(i,s),f.iconName?se(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var T=ce(E,2),z=T[0],C=T[1];v([a,we({icons:{main:z,mask:C},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:r,titleId:o,extra:p,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(a){var n=a.children,i=a.attributes,r=a.main,o=a.transform,s=a.styles,l=_t(s);l.length>0&&(i.style=l);var u;return he(o)&&(u=R("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:i}}}},ri={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,r=i===void 0?[]:i;return Dt({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(pt(r)).join(" ")},children:o}]})}}}},oi={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,r=i===void 0?null:i,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,f=n.styles,d=f===void 0?{}:f;return Dt({type:"counter",content:a},function(){return Z("beforeDOMElementCreation",{content:a,params:n}),Ra({content:a.toString(),title:r,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(pt(s))}})})}}}},si={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?F:i,o=n.title,s=o===void 0?null:o,l=n.classes,u=l===void 0?[]:l,f=n.attributes,d=f===void 0?{}:f,p=n.styles,v=p===void 0?{}:p;return Dt({type:"text",content:a},function(){return Z("beforeDOMElementCreation",{content:a,params:n}),Xe({content:a,transform:c(c({},F),r),title:s,extra:{attributes:d,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(pt(u))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var i=n.title,r=n.transform,o=n.extra,s=null,l=null;if(mn){var u=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Xe({content:a.innerHTML,width:s,height:l,transform:r,title:i,extra:o,watchable:!0})])}}},li=new RegExp('"',"ug"),en=[1105920,1112319];function fi(t){var e=t.replace(li,""),a=xa(e,0),n=a>=en[0]&&a<=en[1],i=e.length===2?e[0]===e[1]:!1;return{value:ne(i?e[0]:e),isSecondary:n||i}}function nn(t,e){var a="".concat(Jn).concat(e.replace(":","-"));return new Promise(function(n,i){if(t.getAttribute(a)!==null)return n();var r=it(t.children),o=r.filter(function(V){return V.getAttribute(ee)===e})[0],s=W.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(aa),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),n();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?k:y,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ct[p][l[2].toLowerCase()]:ia[p][u],S=fi(d),E=S.value,T=S.isSecondary,z=l[0].startsWith("FontAwesome"),C=be(v,E),A=C;if(z){var _=Ea(E);_.iconName&&_.prefix&&(C=_.iconName,v=_.prefix)}if(C&&!T&&(!o||o.getAttribute(me)!==v||o.getAttribute(de)!==A)){t.setAttribute(a,A),o&&t.removeChild(o);var I=Za(),G=I.extra;G.attributes[ee]=e,se(C,v).then(function(V){var Rt=we(c(c({},I),{},{icons:{main:V,mask:ye()},prefix:v,iconName:A,extra:G,watchable:!0})),Y=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=Rt.map(function(Hn){return ht(Hn)}).join(`
`),t.removeAttribute(a),n()}).catch(i)}else n()}else n()})}function ci(t){return Promise.all([nn(t,"::before"),nn(t,"::after")])}function ui(t){return t.parentNode!==document.head&&!~ta.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ee)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function an(t){if(H)return new Promise(function(e,a){var n=it(t.querySelectorAll("*")).filter(ui).map(ci),i=ke.begin("searchPseudoElements");jn(),Promise.all(n).then(function(){i(),fe(),e()}).catch(function(){i(),fe(),a()})})}var mi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=an,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,i=n===void 0?w:n;m.searchPseudoElements&&an(i)}}},rn=!1,di={mixout:function(){return{dom:{unwatch:function(){jn(),rn=!0}}}},hooks:function(){return{bootstrap:function(){Je(ie("mutationObserverCallbacks",{}))},noAuto:function(){qa()},watch:function(a){var n=a.observeMutationsRoot;rn?fe():Je(ie("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},on=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,i){var r=i.toLowerCase().split("-"),o=r[0],s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},pi={mixout:function(){return{parse:{transform:function(a){return on(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-transform");return i&&(a.transform=on(i)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,i=a.transform,r=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),v.path)}]}]}}}},Jt={x:0,y:0,width:"100%",height:"100%"};function sn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vi(t){return t.tag==="g"?t.children:[t]}var hi={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-mask"),r=i?Lt(i.split(" ").map(function(o){return o.trim()})):ye();return r.prefix||(r.prefix=B()),a.mask=r,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,i=a.attributes,r=a.main,o=a.mask,s=a.maskId,l=a.transform,u=r.width,f=r.icon,d=o.width,p=o.icon,v=pa({transform:l,containerWidth:d,iconWidth:u}),S={tag:"rect",attributes:c(c({},Jt),{},{fill:"white"})},E=f.children?{children:f.children.map(sn)}:{},T={tag:"g",attributes:c({},v.inner),children:[sn(c({tag:f.tag,attributes:c(c({},f.attributes),v.path)},E))]},z={tag:"g",attributes:c({},v.outer),children:[T]},C="mask-".concat(s||dt()),A="clip-".concat(s||dt()),_={tag:"mask",attributes:c(c({},Jt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,z]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:vi(p)},_]};return n.push(I,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(C,")")},Jt)}),{children:n,attributes:i}}}},gi={provides:function(e){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:c(c({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bi={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return a.symbol=r,a}}}},yi=[ga,ii,ri,oi,si,mi,di,pi,hi,gi,bi];Na(yi,{mixoutsTo:P});var Yi=P.noAuto,$i=P.config,Wi=P.library,Bi=P.dom,wi=P.parse,Ui=P.findIconDefinition,Gi=P.toHtml,ki=P.icon,Vi=P.layer,xi=P.text,Ci=P.counter;var _n=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Se({type:e}),e.\u0275inj=Ae({});let t=e;return t})();var Fn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=O({type:e,selectors:[["app-home"]],standalone:!0,features:[N],decls:16,vars:1,consts:[[1,"about-container"],[1,"project-container"],[3,"numOfProjectToShow"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"p"),b(2," Hi there. My name is "),h(3,"strong"),b(4,"Brady"),g(),b(5,". I am a software developer. I like "),h(6,"strong"),b(7,"building things"),g(),b(8," and "),h(9,"strong"),b(10,"helping people"),g(),b(11,". I enjoy "),h(12,"strong"),b(13," full stack web development, projects that provide a social impact, and I live in the terminal. "),g()()(),h(14,"div",1),M(15,"app-projects",2),g()),i&2&&(X(15),rt("numOfProjectToShow",4))},dependencies:[_n,wt],styles:["strong[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]});let t=e;return t})();var Si=["gameCanvas"],Ai=["menu"],Ln=(()=>{let e=class e{constructor(){this.birdImage=new Image,this.pipeImage=new Image,this.backgroundImage=new Image,this.bird={x:100,y:0,velocityY:0,gravity:.2,jump:-4},this.pipes=[],this.gameOver=!1,this.score=0}ngOnInit(){this.birdImage.src="assets/images/niks_bg.png",this.pipeImage.src="assets/images/pipe.png",this.backgroundImage.src="assets/images/background.png",this.setCanvasSize(),this.ctx=this.gameCanvas.nativeElement.getContext("2d"),window.addEventListener("resize",()=>this.setCanvasSize()),this.bird.y=this.gameCanvas.nativeElement.height/2,this.loadFont(),this.draw()}handleKeyDown(n){n.code==="Space"&&(this.gameOver?this.restartGame():this.bird.velocityY=this.bird.jump)}handleTouchStart(){this.gameOver?this.restartGame():this.bird.velocityY=this.bird.jump}setCanvasSize(){let n=this.gameCanvas.nativeElement;n.width=window.innerWidth,n.height=window.innerHeight}drawBird(){this.ctx.drawImage(this.birdImage,this.bird.x-20,this.bird.y-20,100,100)}drawPipe(n){this.ctx.drawImage(this.pipeImage,n.x,0,n.width,n.topHeight),this.ctx.drawImage(this.pipeImage,n.x,n.topHeight+150,n.width,this.gameCanvas.nativeElement.height-(n.topHeight+150))}draw(){let n=this.gameCanvas.nativeElement;if(this.ctx.clearRect(0,0,n.width,n.height),this.ctx.drawImage(this.backgroundImage,0,0,n.width,n.height),!this.gameOver){this.bird.velocityY+=this.bird.gravity,this.bird.y+=this.bird.velocityY,(this.bird.y+20>n.height||this.bird.y-20<0)&&(this.gameOver=!0,this.showMenu()),(this.pipes.length===0||this.pipes[this.pipes.length-1].x<=n.width-300)&&this.createPipe();for(let i=this.pipes.length-1;i>=0;i--)this.pipes[i].x-=2,this.bird.x+5>this.pipes[i].x&&this.bird.x-5<this.pipes[i].x+this.pipes[i].width&&(this.bird.y-5<this.pipes[i].topHeight||this.bird.y+5>this.pipes[i].bottomY)&&(this.gameOver=!0,this.showMenu()),this.pipes[i].x+this.pipes[i].width<0&&(this.pipes.splice(i,1),this.score++,document.getElementById("score").innerText="Score: "+this.score)}this.pipes.forEach(i=>this.drawPipe(i)),this.drawBird(),this.gameOver||requestAnimationFrame(()=>this.draw())}createPipe(){let n=this.gameCanvas.nativeElement,i={x:n.width,width:50,topHeight:Math.random()*(n.height-200)+50,bottomY:0};i.bottomY=i.topHeight+150,this.pipes.push(i)}showMenu(){this.menu.nativeElement.style.display="block"}restartGame(){let n=this.gameCanvas.nativeElement;this.bird.y=n.height/2,this.bird.velocityY=0,this.pipes=[],this.gameOver=!1,this.score=0,document.getElementById("score").innerText="Score: 0",this.menu.nativeElement.style.display="none",this.draw()}goHome(){window.location.href="https://www.bradyhawkins.dev"}loadFont(){let n=document.createElement("link");n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",document.head.appendChild(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=O({type:e,selectors:[["app-game-canvas"]],viewQuery:function(i,r){if(i&1&&(Wt(Si,7),Wt(Ai,7)),i&2){let o;Bt(o=Ut())&&(r.gameCanvas=o.first),Bt(o=Ut())&&(r.menu=o.first)}},hostBindings:function(i,r){i&1&&gt("keydown",function(s){return r.handleKeyDown(s)},!1,Yt)("touchstart",function(s){return r.handleTouchStart(s)},!1,Yt)},decls:10,vars:0,consts:[["id","menu",2,"display","none"],["menu",""],[3,"click"],["id","gameCanvas"],["gameCanvas",""],["id","score"]],template:function(i,r){i&1&&(h(0,"div",0,1)(2,"button",2),gt("click",function(){return r.goHome()}),b(3,"Go Home"),g(),h(4,"button",2),gt("click",function(){return r.restartGame()}),b(5,"Restart Game"),g()(),M(6,"canvas",3,4),h(8,"div",5),b(9,"Score: 0"),g())},styles:['canvas[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0}#menu[_ngcontent-%COMP%]{position:absolute;z-index:10;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border:1px solid black;border-radius:1px;text-align:center}#menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px;padding:10px;font-size:18px;cursor:pointer;background-color:#4682b4;border:2px solid #000;color:#fff;font-family:"Press Start 2P",cursive}#score[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px;font-family:"Press Start 2P",cursive;font-size:20px}']});let t=e;return t})();var Dn=[{path:"",component:Fn},{path:"blog",loadChildren:()=>import("./chunk-PUG57Y3W.js").then(t=>t.BlogModule)},{path:"projects",component:wt},{path:"game-canvas",component:Ln}];var Rn={providers:[Te(Dn)]};Ee(Xt,Rn).catch(t=>console.error(t));
