import{A as X,B as $t,D as xe,E as it,G as b,H as y,I as F,O as k,P as Yt,Q as T,T as Ae,_ as Se,ba as Ce,ca as Ie,e as be,p as M,q as ye,s as _t,t as we,z as ke}from"./chunk-ZLO6CNIQ.js";var Oe=(()=>{let e=class e{Constructor(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-navbar"]],standalone:!0,features:[T],decls:15,vars:0,consts:[["href","#","routerLink","/app-component","routerLinkActive","active"],["href","/blog","routerLink","/blog-component","routerLinkActive","active"],["href","/projects","routerLink","/projects-component","routerLinkActive","active"]],template:function(r,i){r&1&&(b(0,"header")(1,"nav")(2,"p"),k(3," bradyhawkins.dev "),y(),b(4,"ul")(5,"li")(6,"a",0),k(7,"Home"),y()(),b(8,"li")(9,"a",1),k(10,"Blog"),y()(),b(11,"li")(12,"a",2),k(13,"Projects"),y()()()(),F(14,"hr"),y())},styles:["header[_ngcontent-%COMP%]{padding-top:1em;padding-bottom:1em;margin-right:0}nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;display:flex}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.2em}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]});let t=e;return t})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-footer"]],standalone:!0,features:[T],decls:8,vars:0,consts:[[1,"icon-container"],["href","https://www.linkedin.com/in/brady-hawkins"],[1,"icon","fab","fa-linkedin","fa-2x"],["href","https://github.com/hawk0120"],[1,"icon","fab","fa-github","fa-2x"]],template:function(r,i){r&1&&(b(0,"footer")(1,"p"),k(2,"Brady Hawkins"),y(),b(3,"div",0)(4,"a",1),F(5,"i",2),y(),b(6,"a",3),F(7,"i",4),y()()())},styles:["footer[_ngcontent-%COMP%]{position:fixed;bottom:0;display:flex;overflow:visible;width:800px;justify-content:space-between;margin:0 auto}.icon[_ngcontent-%COMP%]{color:var(--grey);padding:12px;width:10px;height:10px}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--yellow)}"]});let t=e;return t})();var gt=class{constructor(e){this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext("2d"),this.initCanvasSize(),this.addEventListeners()}initCanvasSize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addEventListeners(){window.addEventListener("resize",()=>this.initCanvasSize())}},Ht=class{constructor(e,n,a){this.x=e,this.y=n,this.size=a,this.speedX=Math.random()*3-1.5,this.speedY=Math.random()*3-1.5}update(){this.x+=this.speedX,this.y+=this.speedY}draw(e){e.fillStyle="grey",e.strokeStyle="grey",e.lineWidth=2,e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.closePath(),e.fill(),e.stroke()}},bt=class{constructor(){this.particles=[]}createParticles(e){let n=Math.random()*e.width,a=Math.random()*e.height,r=Math.random()*5;this.particles.push(new Ht(n,a,r))}animateParticles(e){e.clearRect(0,0,e.canvas.width,e.canvas.height),this.particles.forEach((n,a)=>{n.update(),n.draw(e),n.size<=.2&&this.particles.splice(a,1)}),requestAnimationFrame(()=>this.animateParticles(e))}};var Wt=(()=>{let e=class e{constructor(){this.title="Brady Hawkins app"}ngOnInit(){let a=new gt("particles-canvas"),r=new bt;setInterval(()=>r.createParticles(a.canvas),10),r.animateParticles(a.ctx)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[T],decls:5,vars:0,consts:[["id","particles-canvas"]],template:function(r,i){r&1&&(F(0,"canvas",0)(1,"app-navbar"),b(2,"router-outlet")(3,"router-outlet"),F(4,"app-footer"),y()())},dependencies:[Oe,Pe,Ce],styles:["[_ngcontent-%COMP%]:root{margin:0}canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1}"]});let t=e;return t})();var Ee=(()=>{let e=class e{getProjects(){return be([{name:"Clammy",description:"The project is a Insurance Claim Management Platform, powered by Angular on the front end. I have written the backend server in Java/Spring and Typescript/Express to compare verbosity. The server interacts with a PostgreSQL database. The user can create, resolve and retrieve insurance claims through an RESTful API endpoints.",url:"https://github.com/hawk0120/clammy"},{name:"Weapy App",description:"Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",url:"https://www.bradyhawkins.dev/blog/build-weepy-app"},{name:"Cooking With Andrea Application",description:"A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end",url:""},{name:"bowmaneconomics.ca",description:"A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.",url:"https://www.bowmaneconomics.ca"},{name:"Customer Portal for Scotty's Auto",description:"A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",url:"https://www.scottysauto.ca"},{name:"Flappy Niks Game",description:"Created an interactive Flappy Bird inspired game using HTML5 Canvas, Angular, and Typescript. This was developed as a fun gift for my nephews in Canada.",url:"https://www.bradyhawkins.dev/game-canvas"},{name:"Personal portfolio site",description:"Used Angular to create persoanl website that dynamically render markdown files in blog posts",url:"https://www.bradyhawkins.dev"},{name:"Harambe",description:"A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app",url:"https://github.com/hawk0120/Harambe"},{name:"Counter React Native Application",description:"A simple React Native application developed to track the number of people entering a building. This project was initiated during the Covid-19 pandemic to aid clients in managing and monitoring occupancy levels effectively.",url:"https://github.com/hawk0120/counter"},{name:"compassionatekenora.ca",description:"A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.",url:"https://www.compassionatekenora.ca"}])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=_t({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ln(t,e){if(t&1&&(b(0,"div",2)(1,"p",3),k(2),y(),b(3,"p",4),k(4),y(),b(5,"a",5),k(6,"Visit Project"),y()()),t&2){let n=e.$implicit;X(2),Yt(n.name),X(2),Yt(n.description),X(),it("href",n.url,ke)}}var yt=(()=>{let e=class e{constructor(a){this.projectService=a,this.numOfProjectToShow=8,this.project=[]}ngOnInit(){this.projectService.getProjects().subscribe(a=>{this.project=a.slice(0,this.numOfProjectToShow)})}};e.\u0275fac=function(r){return new(r||e)($t(Ee))},e.\u0275cmp=M({type:e,selectors:[["app-projects"]],inputs:{numOfProjectToShow:"numOfProjectToShow"},standalone:!0,features:[T],decls:2,vars:1,consts:[[1,"projects-list"],["class","project-item",4,"ngFor","ngForOf"],[1,"project-item"],[1,"project-name"],[1,"project.description"],["target","_blank",1,"project-link",3,"href"]],template:function(r,i){r&1&&(b(0,"div",0),xe(1,Ln,7,3,"div",1),y()),r&2&&(X(),it("ngForOf",i.project))},dependencies:[Ae],styles:[".projects-list[_ngcontent-%COMP%]{text-decoration:none!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin:0 auto}.project-link[_ngcontent-%COMP%]{margin-bottom:3px}.project-link[_ngcontent-%COMP%]:hover{color:var(--yellow);padding:.1em;border-radius:3px;translate:4em}"]});let t=e;return t})();function Me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(n),!0).forEach(function(a){x(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function Dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Te(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Rn(t,e,n){return e&&Te(t.prototype,e),n&&Te(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ie(t,e){return $n(t)||Hn(t,e)||nn(t,e)||Un()}function pt(t){return _n(t)||Yn(t)||nn(t)||Wn()}function _n(t){if(Array.isArray(t))return Xt(t)}function $n(t){if(Array.isArray(t))return t}function Yn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Hn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function nn(t,e){if(t){if(typeof t=="string")return Xt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xt(t,e)}}function Xt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ne=function(){},oe={},an={},rn=null,on={mark:Ne,measure:Ne};try{typeof window<"u"&&(oe=window),typeof document<"u"&&(an=document),typeof MutationObserver<"u"&&(rn=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}var Bn=oe.navigator||{},je=Bn.userAgent,ze=je===void 0?"":je,W=oe,g=an,Fe=rn,wt=on,Nr=!!W.document,$=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",sn=~ze.indexOf("MSIE")||~ze.indexOf("Trident/"),kt,xt,At,St,Ct,D="___FONT_AWESOME___",qt=16,fn="fa",ln="svg-inline--fa",Q="data-fa-i2svg",Kt="data-fa-pseudo-element",Vn="data-fa-pseudo-element-pending",se="data-prefix",fe="data-icon",Le="fontawesome-i2svg",Gn="async",Xn=["HTML","HEAD","STYLE","SCRIPT"],cn=function(){try{return!0}catch{return!1}}(),h="classic",w="sharp",le=[h,w];function vt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var lt=vt((kt={},x(kt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(kt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),kt)),ct=vt((xt={},x(xt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(xt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xt)),ut=vt((At={},x(At,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(At,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),At)),qn=vt((St={},x(St,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(St,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),St)),Kn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,un="fa-layers-text",Qn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jn=vt((Ct={},x(Ct,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(Ct,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ct)),mn=[1,2,3,4,5,6,7,8,9,10],Zn=mn.concat([11,12,13,14,15,16,17,18,19,20]),ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ct[h]).map(mt.add.bind(mt));Object.keys(ct[w]).map(mt.add.bind(mt));var ea=[].concat(le,pt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(mn.map(function(t){return"".concat(t,"x")})).concat(Zn.map(function(t){return"w-".concat(t)})),st=W.FontAwesomeConfig||{};function na(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(De=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],De.forEach(function(t){var e=ie(t,2),n=e[0],a=e[1],r=aa(na(n));r!=null&&(st[a]=r)}));var De,dn={styleDefault:"solid",familyDefault:"classic",cssPrefix:fn,replacementClass:ln,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var at=c(c({},dn),st);at.autoReplaceSvg||(at.observeMutations=!1);var m={};Object.keys(dn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){at[t]=n,ft.forEach(function(a){return a(m)})},get:function(){return at[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){at.cssPrefix=e,ft.forEach(function(n){return n(m)})},get:function(){return at.cssPrefix}});W.FontAwesomeConfig=m;var ft=[];function ra(t){return ft.push(t),function(){ft.splice(ft.indexOf(t),1)}}var H=qt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ia(t){if(!(!t||!$)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var oa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var t=12,e="";t-- >0;)e+=oa[Math.random()*62|0];return e}function rt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ce(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(pn(t[n]),'" ')},"").trim()}function zt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ue(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function fa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function la(t){var e=t.transform,n=t.width,a=n===void 0?qt:n,r=t.height,i=r===void 0?qt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&sn?f+="translate(".concat(e.x/H-a/2,"em, ").concat(e.y/H-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):f+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),f+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ca=`:root, :host {
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
}`;function vn(){var t=fn,e=ln,n=m.cssPrefix,a=m.replacementClass,r=ca;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Re=!1;function Ut(){m.autoAddCss&&!Re&&(ia(vn()),Re=!0)}var ua={mixout:function(){return{dom:{css:vn,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},R=W||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var N=R[D],hn=[],ma=function t(){g.removeEventListener("DOMContentLoaded",t),Nt=1,hn.map(function(e){return e()})},Nt=!1;$&&(Nt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Nt||g.addEventListener("DOMContentLoaded",ma));function da(t){$&&(Nt?setTimeout(t,0):hn.push(t))}function ht(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?pn(t):"<".concat(e," ").concat(sa(a),">").concat(i.map(ht).join(""),"</").concat(e,">")}function _e(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Bt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?pa(n,r):n,f,u,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,e[u],u,e);return l};function va(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Qt(t){var e=va(t);return e.length===1?e[0].toString(16):null}function ha(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function $e(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Jt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=$e(e);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,$e(e)):N.styles[t]=c(c({},N.styles[t]||{}),i),t==="fas"&&Jt("fa",e)}var It,Ot,Pt,tt=N.styles,ga=N.shims,ba=(It={},x(It,h,Object.values(ut[h])),x(It,w,Object.values(ut[w])),It),me=null,gn={},bn={},yn={},wn={},kn={},ya=(Ot={},x(Ot,h,Object.keys(lt[h])),x(Ot,w,Object.keys(lt[w])),Ot);function wa(t){return~ea.indexOf(t)}function ka(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!wa(r)?r:null}var xn=function(){var e=function(i){return Bt(tt,function(o,s,f){return o[f]=Bt(s,i,{}),o},{})};gn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),bn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),kn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in tt||m.autoFetchSvg,a=Bt(ga,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});yn=a.names,wn=a.unicodes,me=Ft(m.styleDefault,{family:m.familyDefault})};ra(function(t){me=Ft(t.styleDefault,{family:m.familyDefault})});xn();function de(t,e){return(gn[t]||{})[e]}function xa(t,e){return(bn[t]||{})[e]}function K(t,e){return(kn[t]||{})[e]}function An(t){return yn[t]||{prefix:null,iconName:null}}function Aa(t){var e=wn[t],n=de("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return me}var pe=function(){return{prefix:null,iconName:null,rest:[]}};function Ft(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=lt[a][t],i=ct[a][t]||ct[a][r],o=t in N.styles?t:null;return i||o||null}var Ye=(Pt={},x(Pt,h,Object.keys(ut[h])),x(Pt,w,Object.keys(ut[w])),Pt);function Lt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},x(e,h,"".concat(m.cssPrefix,"-").concat(h)),x(e,w,"".concat(m.cssPrefix,"-").concat(w)),e),o=null,s=h;(t.includes(i[h])||t.some(function(u){return Ye[h].includes(u)}))&&(s=h),(t.includes(i[w])||t.some(function(u){return Ye[w].includes(u)}))&&(s=w);var f=t.reduce(function(u,l){var d=ka(m.cssPrefix,l);if(tt[l]?(l=ba[s].includes(l)?qn[s][l]:l,o=l,u.prefix=l):ya[s].indexOf(l)>-1?(o=l,u.prefix=Ft(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[h]&&l!==i[w]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var p=o==="fa"?An(u.iconName):{},v=K(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!tt.far&&tt.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},pe());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(tt.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=K(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var Sa=function(){function t(){Dn(this,t),this.definitions={}}return Rn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),o[s]),Jt(s,o[s]);var f=ut[h][s];f&&Jt(f,o[s]),xn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][f]=u}),n}}]),t}(),He=[],et={},nt={},Ca=Object.keys(nt);function Ia(t,e){var n=e.mixoutsTo;return He=t,et={},Object.keys(nt).forEach(function(a){Ca.indexOf(a)===-1&&delete nt[a]}),He.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(nt)}),n}function Zt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,n)})}function _(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,e):void 0}function te(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||U();if(e)return e=K(n,e)||e,_e(Sn.definitions,n,e)||_e(N.styles,n,e)}var Sn=new Sa,Oa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},Pa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(J("beforeI2svg",e),_("pseudoElements2svg",e),_("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,da(function(){Ma({autoReplaceSvgRoot:n}),J("watch",e)})}},Ea={icon:function(e){if(e===null)return null;if(Tt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ft(e[0]);return{prefix:a,iconName:K(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Kn))){var r=Lt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=U();return{prefix:i,iconName:K(i,e)||e}}}},O={noAuto:Oa,config:m,dom:Pa,parse:Ea,library:Sn,findIconDefinition:te,toHtml:ht},Ma=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(N.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&O.dom.i2svg({node:a})};function Dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ht(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ta(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ue(o)&&n.found&&!a.found){var s=n.width,f=n.height,u={x:s/f/2,y:.5};r.style=zt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Na(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function ve(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,S=a.found?a:n,P=S.width,E=S.height,j=r==="fak",A=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),C={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},z=j&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};v&&(C.attributes[Q]=""),f&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(l||dt())},children:[f]}),delete C.attributes.title);var I=c(c({},C),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},z),d.styles)}),V=a.found&&n.found?_("generateAbstractMask",I)||{children:[],attributes:{}}:_("generateAbstractIcon",I)||{children:[],attributes:{}},G=V.children,Rt=V.attributes;return I.children=G,I.attributes=Rt,s?Na(I):Ta(I)}function We(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[Q]="");var l=c({},o.styles);ue(r)&&(l.transform=la({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var d=zt(l);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ja(t){var e=t.content,n=t.title,a=t.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=zt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vt=N.styles;function ee(t){var e=t[0],n=t[1],a=t.slice(4),r=ie(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var za={found:!1,width:512,height:512};function Fa(t,e){!cn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ne(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=U()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:_("missingIconAbstract")||{}};if(n==="fa"){var o=An(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Vt[e]&&Vt[e][t]){var s=Vt[e][t];return a(ee(s))}Fa(t,e),a(c(c({},za),{},{icon:m.showMissingIcons&&t?_("missingIconAbstract")||{}:{}}))})}var Ue=function(){},ae=m.measurePerformance&&wt&&wt.mark&&wt.measure?wt:{mark:Ue,measure:Ue},ot='FA "6.5.1"',La=function(e){return ae.mark("".concat(ot," ").concat(e," begins")),function(){return Cn(e)}},Cn=function(e){ae.mark("".concat(ot," ").concat(e," ends")),ae.measure("".concat(ot," ").concat(e),"".concat(ot," ").concat(e," begins"),"".concat(ot," ").concat(e," ends"))},he={begin:La,end:Cn},Et=function(){};function Be(t){var e=t.getAttribute?t.getAttribute(Q):null;return typeof e=="string"}function Da(t){var e=t.getAttribute?t.getAttribute(se):null,n=t.getAttribute?t.getAttribute(fe):null;return e&&n}function Ra(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function _a(){if(m.autoReplaceSvg===!0)return Mt.replace;var t=Mt[m.autoReplaceSvg];return t||Mt.replace}function $a(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Ya(t){return g.createElement(t)}function In(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?$a:Ya:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(In(o,{ceFn:a}))}),r}function Ha(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Mt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(In(r),n)}),n.getAttribute(Q)===null&&m.keepOriginalSource){var a=g.createComment(Ha(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ce(n).indexOf(m.replacementClass))return Mt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ht(s)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function Ve(t){t()}function On(t,e){var n=typeof e=="function"?e:Et;if(t.length===0)n();else{var a=Ve;m.mutateApproach===Gn&&(a=W.requestAnimationFrame||Ve),a(function(){var r=_a(),i=he.begin("mutate");t.map(r),i(),n()})}}var ge=!1;function Pn(){ge=!0}function re(){ge=!1}var jt=null;function Ge(t){if(Fe&&m.observeMutations){var e=t.treeCallback,n=e===void 0?Et:e,a=t.nodeCallback,r=a===void 0?Et:a,i=t.pseudoElementsCallback,o=i===void 0?Et:i,s=t.observeMutationsRoot,f=s===void 0?g:s;jt=new Fe(function(u){if(!ge){var l=U();rt(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Be(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Be(d.target)&&~ta.indexOf(d.attributeName))if(d.attributeName==="class"&&Da(d.target)){var p=Lt(ce(d.target)),v=p.prefix,S=p.iconName;d.target.setAttribute(se,v||l),S&&d.target.setAttribute(fe,S)}else Ra(d.target)&&r(d.target)})}}),$&&jt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wa(){jt&&jt.disconnect()}function Ua(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ba(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Lt(ce(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=xa(r.prefix,t.innerText)||de(r.prefix,Qt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Va(t){var e=rt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||dt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ba(t),a=n.iconName,r=n.prefix,i=n.rest,o=Va(t),s=Zt("parseNodeAttributes",{},t),f=e.styleParser?Ua(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Xa=N.styles;function En(t){var e=m.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(un)?_("generateLayersText",t,e):_("generateSvgReplacementMutation",t,e)}var B=new Set;le.map(function(t){B.add("fa-".concat(t))});Object.keys(lt[h]).map(B.add.bind(B));Object.keys(lt[w]).map(B.add.bind(B));B=pt(B);function qe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var n=g.documentElement.classList,a=function(d){return n.add("".concat(Le,"-").concat(d))},r=function(d){return n.remove("".concat(Le,"-").concat(d))},i=m.autoFetchSvg?B:le.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Xa));i.includes("fa")||i.push("fa");var o=[".".concat(un,":not([").concat(Q,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=he.begin("onTree"),u=s.reduce(function(l,d){try{var p=En(d);p&&l.push(p)}catch(v){cn||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(p){On(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(p){f(),d(p)})})}function qa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;En(t).then(function(n){n&&On([n],e)})}function Ka(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:te(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:te(r||{})),t(a,c(c({},n),{},{mask:r}))}}var Qa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,u=n.maskId,l=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,S=v===void 0?null:v,P=n.classes,E=P===void 0?[]:P,j=n.attributes,A=j===void 0?{}:j,C=n.styles,z=C===void 0?{}:C;if(e){var I=e.prefix,V=e.iconName,G=e.icon;return Dt(c({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(p?A["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||dt()):(A["aria-hidden"]="true",A.focusable="false")),ve({icons:{main:ee(G),mask:f?ee(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:V,transform:c(c({},L),r),symbol:o,title:p,maskId:l,titleId:S,extra:{attributes:A,styles:z,classes:E}})})}},Ja={mixout:function(){return{icon:Ka(Qa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qe,n.nodeCallback=qa,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return qe(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,p=a.extra;return new Promise(function(v,S){Promise.all([ne(r,s),l.iconName?ne(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=ie(P,2),j=E[0],A=E[1];v([n,ve({icons:{main:j,mask:A},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=zt(s);f.length>0&&(r.style=f);var u;return ue(o)&&(u=_("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Za={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Dt({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(pt(i)).join(" ")},children:o}]})}}}},tr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Dt({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),ja({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(pt(s))}})})}}}},er={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,p=a.styles,v=p===void 0?{}:p;return Dt({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),We({content:n,transform:c(c({},L),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(pt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(sn){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,We({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},nr=new RegExp('"',"ug"),Ke=[1105920,1112319];function ar(t){var e=t.replace(nr,""),n=ha(e,0),a=n>=Ke[0]&&n<=Ke[1],r=e.length===2?e[0]===e[1]:!1;return{value:Qt(r?e[0]:e),isSecondary:a||r}}function Qe(t,e){var n="".concat(Vn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=rt(t.children),o=i.filter(function(G){return G.getAttribute(Kt)===e})[0],s=W.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Qn),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?w:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ct[p][f[2].toLowerCase()]:Jn[p][u],S=ar(d),P=S.value,E=S.isSecondary,j=f[0].startsWith("FontAwesome"),A=de(v,P),C=A;if(j){var z=Aa(P);z.iconName&&z.prefix&&(A=z.iconName,v=z.prefix)}if(A&&!E&&(!o||o.getAttribute(se)!==v||o.getAttribute(fe)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var I=Ga(),V=I.extra;V.attributes[Kt]=e,ne(A,v).then(function(G){var Rt=ve(c(c({},I),{},{icons:{main:G,mask:pe()},prefix:v,iconName:C,extra:V,watchable:!0})),Y=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=Rt.map(function(zn){return ht(zn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function rr(t){return Promise.all([Qe(t,"::before"),Qe(t,"::after")])}function ir(t){return t.parentNode!==document.head&&!~Xn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Je(t){if($)return new Promise(function(e,n){var a=rt(t.querySelectorAll("*")).filter(ir).map(rr),r=he.begin("searchPseudoElements");Pn(),Promise.all(a).then(function(){r(),re(),e()}).catch(function(){r(),re(),n()})})}var or={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Je,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;m.searchPseudoElements&&Je(r)}}},Ze=!1,sr={mixout:function(){return{dom:{unwatch:function(){Pn(),Ze=!0}}}},hooks:function(){return{bootstrap:function(){Ge(Zt("mutationObserverCallbacks",{}))},noAuto:function(){Wa()},watch:function(n){var a=n.observeMutationsRoot;Ze?re():Ge(Zt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},tn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},fr={mixout:function(){return{parse:{transform:function(n){return tn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=tn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),v.path)}]}]}}}},Gt={x:0,y:0,width:"100%",height:"100%"};function en(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function lr(t){return t.tag==="g"?t.children:[t]}var cr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Lt(r.split(" ").map(function(o){return o.trim()})):pe();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,u=i.width,l=i.icon,d=o.width,p=o.icon,v=fa({transform:f,containerWidth:d,iconWidth:u}),S={tag:"rect",attributes:c(c({},Gt),{},{fill:"white"})},P=l.children?{children:l.children.map(en)}:{},E={tag:"g",attributes:c({},v.inner),children:[en(c({tag:l.tag,attributes:c(c({},l.attributes),v.path)},P))]},j={tag:"g",attributes:c({},v.outer),children:[E]},A="mask-".concat(s||dt()),C="clip-".concat(s||dt()),z={tag:"mask",attributes:c(c({},Gt),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,j]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:lr(p)},z]};return a.push(I,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(A,")")},Gt)}),{children:a,attributes:r}}}},ur={provides:function(e){var n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},mr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},dr=[ua,Ja,Za,tr,er,or,sr,fr,cr,ur,mr];Ia(dr,{mixoutsTo:O});var jr=O.noAuto,zr=O.config,Fr=O.library,Lr=O.dom,pr=O.parse,Dr=O.findIconDefinition,Rr=O.toHtml,vr=O.icon,_r=O.layer,hr=O.text,gr=O.counter;var Mn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e}),e.\u0275inj=we({});let t=e;return t})();var Tn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-home"]],standalone:!0,features:[T],decls:16,vars:1,consts:[[1,"about-container"],[1,"project-container"],[3,"numOfProjectToShow"]],template:function(r,i){r&1&&(b(0,"div",0)(1,"p"),k(2," Hi there. My name is "),b(3,"strong"),k(4,"Brady"),y(),k(5,". I am a software developer. I like "),b(6,"strong"),k(7,"building things"),y(),k(8," and "),b(9,"strong"),k(10,"helping people"),y(),k(11,". I enjoy "),b(12,"strong"),k(13," full stack web development, projects that provide a social impact, and I live in the terminal. "),y()()(),b(14,"div",1),F(15,"app-projects",2),y()),r&2&&(X(15),it("numOfProjectToShow",4))},dependencies:[Mn,yt],styles:["strong[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]});let t=e;return t})();var Nn=[{path:"",component:Tn},{path:"blog",loadChildren:()=>import("./chunk-AI2MI2KN.js").then(t=>t.BlogModule)},{path:"projects",component:yt}];var jn={providers:[Ie(Nn)]};Se(Wt,jn).catch(t=>console.error(t));
