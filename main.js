(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,'/*\n  Josh\'s Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n/*reset ends */\n\n:root {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\ndialog[open] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  position: absolute;\n  float: left;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\ninput {\n  border: 1px solid black;\n  margin-bottom: 20px;\n}\n\n.x {\n  align-self: flex-end;\n}\n\n::backdrop {\n  background-color: rgba(128, 128, 128, 0.75);\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  height: 100px;\n  background-color: #bcb147;\n  color: white;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\ncontent {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  flex-shrink: 2;\n  width: 75%;\n  height: 100%;\n  background-color: #48bcb0;\n  display: grid;\n  grid-template-columns: repeat(3, calc(80% / 3));\n  grid-template-rows: repeat(3, calc(80% / 3));\n  gap: 5%;\n  padding-top: 3%;\n  justify-content: center;\n  justify-items: stretch;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-shrink: 1;\n  width: 25%;\n  height: 100%;\n  background-color: #56e2d4;\n}\n\nbutton {\n  padding: 10px 20px;\n  border-radius: 0.5rem;\n  border: none;\n  background-color: #48bcb0;\n}\n\n#new-book {\n  margin-top: 50px;\n}\n\n.book {\n  padding: 15px;\n  background-color: #70e9dd;\n  border: none;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.title {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.book button {\n  width: 50%;\n  min-width: 90px;\n  gap: 10px;\n}\n\n.buttons-div {\n  display: flex;\n  gap: 10px;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;AACA,cAAc;;AAEd;EACE,4DAA4D;AAC9D;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;EACd,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,+CAA+C;EAC/C,4CAA4C;EAC5C,OAAO;EACP,eAAe;EACf,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX",sourcesContent:['/*\n  Josh\'s Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n/*reset ends */\n\n:root {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\ndialog[open] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  position: absolute;\n  float: left;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\ninput {\n  border: 1px solid black;\n  margin-bottom: 20px;\n}\n\n.x {\n  align-self: flex-end;\n}\n\n::backdrop {\n  background-color: rgba(128, 128, 128, 0.75);\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  height: 100px;\n  background-color: #bcb147;\n  color: white;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\ncontent {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  flex-shrink: 2;\n  width: 75%;\n  height: 100%;\n  background-color: #48bcb0;\n  display: grid;\n  grid-template-columns: repeat(3, calc(80% / 3));\n  grid-template-rows: repeat(3, calc(80% / 3));\n  gap: 5%;\n  padding-top: 3%;\n  justify-content: center;\n  justify-items: stretch;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-shrink: 1;\n  width: 25%;\n  height: 100%;\n  background-color: #56e2d4;\n}\n\nbutton {\n  padding: 10px 20px;\n  border-radius: 0.5rem;\n  border: none;\n  background-color: #48bcb0;\n}\n\n#new-book {\n  margin-top: 50px;\n}\n\n.book {\n  padding: 15px;\n  background-color: #70e9dd;\n  border: none;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.title {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.book button {\n  width: 50%;\n  min-width: 90px;\n  gap: 10px;\n}\n\n.buttons-div {\n  display: flex;\n  gap: 10px;\n}\n'],sourceRoot:""}]);const i=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},A=[],i=0;i<n.length;i++){var s=n[i],c=o.base?s[0]+o.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}A.push(l)}return A}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var i=t(a[A]);e[i].references--}for(var s=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),A=t.n(a),i=t(659),s=t.n(i),c=t(56),d=t.n(c),l=t(540),u=t.n(l),p=t(113),f=t.n(p),E=t(208),C={};C.styleTagTransform=f(),C.setAttributes=d(),C.insert=s().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=u(),r()(E.A,C),E.A&&E.A.locals&&E.A.locals,document.addEventListener("DOMContentLoaded",(()=>{v()}));const m=[];function h(n,e,t,o){this.title=n,this.author=e,this.pages=t,this.read=o}h.prototype.info=function(){return`${this.title} by ${this.author}. ${this.pages} pages. ${this.read}.`};const b=new h("The Hobbit","Tolkien",295,"read"),B=new h("The Neuromancer","William Gibson",450,"not read yet"),g=new h("Good Omens","Neil Gaiman",400,"read");function x(n){m.push(n)}x(b),x(B),x(g),console.log(m);const y=document.querySelector("#main");function v(){y.innerHTML="";for(const n of m){const e=document.createElement("div");e.classList.add("book"),e.dataset.index=m.indexOf(n);const t=document.createElement("p");t.textContent=n.title;const o=document.createElement("p");o.textContent=n.author;const r=document.createElement("p");r.textContent=n.pages;const a=document.createElement("p"),A=document.createElement("button");A.textContent="Remove",A.classList.add("remove");const i=document.createElement("button");i.textContent="read | unread",i.classList.add("read");const s=document.createElement("div");s.classList.add("buttons-div"),a.textContent=n.read,e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a),e.appendChild(s),s.appendChild(i),s.appendChild(A),e.addEventListener("click",(n=>{const t=n.target,o=e.dataset.index;switch(t.className){case"remove":m.splice(o,1),v();break;case"read":"read"===m[o].read?(m[o].read="not read yet",v()):(m[o].read="read",v())}})),y.appendChild(e)}}const w=document.querySelector("#dialog"),k=document.querySelector("#new-book"),S=document.querySelector(".x"),j=document.querySelector("#submit_2");k.addEventListener("click",(()=>{w.showModal()})),S.addEventListener("click",(()=>{w.close()})),j.addEventListener("click",(()=>{w.close(),function(){const n=document.querySelector("#title").value,e=document.querySelector("#author").value,t=document.querySelector("#pages").value;let o;o=document.querySelector("#read").checked?"read":"not read yet";const r=new h(n,e,t,o);console.log(r),x(r),console.log(m)}(),v()}))})();
//# sourceMappingURL=main.js.map