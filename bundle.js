/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,i,s,e){var o,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,s,e);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(i,s,n):o(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new Map;class o{constructor(t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=e.get(this.cssText);return i&&void 0===t&&(e.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new o(e,s)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const l=window.trustedTypes,a=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=v){var e,o;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:d.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,i){var s,e,o;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),h=t.converter,l=null!==(o=null!==(e=null===(s=h)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof h?h:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=n,this[n]=l(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.2.1");const g=globalThis.trustedTypes,w=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,b="?"+$,y=`<${b}>`,m=document,x=(t="")=>m.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,A=t=>{var i;return k(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,M=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,U=/"/g,O=/^(?:script|style|textarea)$/i,T=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),R=T(1),N=T(2),P=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),I=new WeakMap,H=m.createTreeWalker(m,129,null,!1),D=(t,i)=>{const s=t.length-1,e=[];let o,r=2===i?"<svg>":"",n=S;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,c=0;for(;c<s.length&&(n.lastIndex=c,l=n.exec(s),null!==l);)c=n.lastIndex,n===S?"!--"===l[1]?n=C:void 0!==l[1]?n=M:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=null!=o?o:S,a=-1):void 0===l[1]?a=-2:(a=n.lastIndex-l[2].length,h=l[1],n=void 0===l[3]?z:'"'===l[3]?U:E):n===U||n===E?n=z:n===C||n===M?n=S:(n=z,o=void 0);const d=n===z&&t[i+1].startsWith("/>")?" ":"";r+=n===S?s+y:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+$+d):s+$+(-2===a?(e.push(void 0),i):d)}const h=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(h):h,e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,r=0;const n=t.length-1,h=this.parts,[l,a]=D(t,i);if(this.el=B.createElement(l,s),H.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=H.nextNode())&&h.length<n;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith($)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split($),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?V:"?"===i[1]?G:"@"===i[1]?W:K})}else h.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(O.test(e.tagName)){const t=e.textContent.split($),i=t.length-1;if(i>0){e.textContent=g?g.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],x()),H.nextNode(),h.push({type:2,index:++o});e.append(t[i],x())}}}else if(8===e.nodeType)if(e.data===b)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf($,t+1));)h.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,i){const s=m.createElement("template");return s.innerHTML=t,s}}function L(t,i,s=t,e){var o,r,n,h;if(i===P)return i;let l=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=_(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(n=(h=s)._$Cl)&&void 0!==n?n:h._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=L(t,l._$AS(t,i.values),l,e)),i}class Z{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:m).importNode(s,!0);H.currentNode=o;let r=H.nextNode(),n=0,h=0,l=e[0];for(;void 0!==l;){if(n===l.index){let i;2===l.type?i=new J(r,r.nextSibling,this,t):1===l.type?i=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(i=new Q(r,this,t)),this.v.push(i),l=e[++h]}n!==(null==l?void 0:l.index)&&(r=H.nextNode(),n++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class J{constructor(t,i,s,e){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=L(this,t,i),_(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==P&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):A(t)?this.A(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==j&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(m.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=B.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new Z(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=I.get(t.strings);return void 0===i&&I.set(t.strings,i=new B(t)),i}A(t){k(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new J(this.M(x()),this.M(x()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class K{constructor(t,i,s,e,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let r=!1;if(void 0===o)t=L(this,t,i,0),r=!_(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=L(this,e[s+n],i,n),h===P&&(h=this._$AH[n]),r||(r=!_(h)||h!==this._$AH[n]),h===j?t=j:t!==j&&(t+=(null!=h?h:"")+o[n+1]),this._$AH[n]=h}r&&!e&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}const F=g?g.emptyScript:"";class G extends K{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class W extends K{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=L(this,t,i,0))&&void 0!==s?s:j)===P)return;const e=this._$AH,o=t===j&&e!==j||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==j&&(e===j||o);o&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const X={P:"$lit$",V:$,L:b,I:1,N:D,R:Z,D:A,j:L,H:J,O:K,F:G,B:W,W:V,Z:Q},Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,tt;null==Y||Y(B,J),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.2");class it extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,o;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new J(i.insertBefore(x(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return P}}it.finalized=!0,it._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function rt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):ot(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=({finisher:t,descriptor:i})=>(s,e)=>{var o;if(void 0===e){const e=null!==(o=s.originalKey)&&void 0!==o?o:s.key,r=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(r.finisher=function(i){t(i,e)}),r}{const o=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(o,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function lt(t){return ht({finisher:(i,s)=>{Object.assign(i.prototype[s],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t,i){return ht({descriptor:s=>{const e={get(){var i,s;return null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof s?Symbol():"__"+s;e.get=function(){var s,e;return void 0===this[i]&&(this[i]=null!==(e=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==e?e:null),this[i]}}return e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=1,ut=2,vt=t=>(...i)=>({_$litDirective$:t,values:i});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=vt(class extends pt{constructor(t){var i;if(super(t),t.type!==dt||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,s)=>{const e=t[s];return null==e?i:i+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(t,[i]){const{style:s}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in i)this.ct.add(t);return this.render(i)}this.ct.forEach((t=>{null==i[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in i){const e=i[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return P}}),gt=t=>t.isPrimary&&("touch"===t.pointerType||t.pressure>0),wt=t=>"touch"!==t.pointerType&&t.isPrimary&&t.pressure>0,$t=t=>{t.preventDefault(),t.stopPropagation()},bt=(t,i)=>[t[0]+i[0],t[1]+i[1]],yt=(t,i)=>bt(t,[i,i]),mt=(t,i)=>[t[0]-i[0],t[1]-i[1]],xt=(t,i)=>[t[0]*i,t[1]*i],_t=(t,i)=>[t[0]*i[0],t[1]*i[1]],kt=(t,i)=>[t[0]/i[0],t[1]/i[1]],At=(t,i)=>[Math.max(t[0],i[0]),Math.max(t[1],i[1])],St=(t,i)=>[Math.min(t[0],i[0]),Math.min(t[1],i[1])],Ct=(t,i)=>t[0]===i[0]&&t[1]===i[1];let Mt=class extends it{constructor(){super(...arguments),this.scale=1,this.c_dim=[0,0],this.v_dim=[0,0],this.v_loc=[0,0],this._scrollPos=[0,0],this.smooth=0,this.#t=0,this.#i=[0,0],this.#s=new ResizeObserver((t=>{for(let i of t)switch(i.target){case this.surface:this.v_dim=[i.contentRect.width,i.contentRect.height];const t=this.getBoundingClientRect();this.v_loc=[t.x,t.y];break;case this.#e:this.c_dim=[this.#e.width.baseVal.value,this.#e.height.baseVal.value]}})),this.#o=[0,0],this.#r=t=>{$t(t),t.target.setPointerCapture(t.pointerId),this.#o=[t.clientX,t.clientY]},this.#n=(t,i,s,e)=>{let o=this.#h,r=this.#o;this.#o=[t.clientX,t.clientY],this.#h=[i?o[0]+e*(this.#o[0]-r[0]):o[0],s?o[1]+e*(this.#o[1]-r[1]):o[1]]},this.#l=t=>{t.target.releasePointerCapture(t.pointerId)},this._touchdragstart=t=>{t.isPrimary&&"touch"===t.pointerType&&this.#r(t)},this._touchdragmove=t=>{t.isPrimary&&"touch"===t.pointerType&&this.#n(t,!0,!0,-1)},this._touchdragend=t=>{t.isPrimary&&"touch"===t.pointerType&&this.#l(t)}}#e;get#h(){return At([0,0],St(this._scrollPos,mt(xt(this.c_dim,this.scale),this.v_dim)))}set#h(t){const i=this._scrollPos;this._scrollPos=t,this.requestUpdate("#scrollPos",i)}get offset(){return At([0,0],xt(mt(this.v_dim,xt(this.c_dim,this.scale)),.5)).map((t=>t))}render(){const t=this.offset,i=this.#h;let s=!1,e=!1;this.v_dim&&this.c_dim&&(s=this.v_dim[1]<this.c_dim[1]*this.scale,e=this.v_dim[0]<this.c_dim[0]*this.scale);const o=kt(_t(this.v_dim,this.v_dim),xt(this.c_dim,this.scale)),r=kt(_t(i,this.v_dim),xt(this.c_dim,this.scale));return R`<style>:host,:root{--scale:${this.scale}}::slotted(svg){transform:translate(${t[0]-i[0]}px,${t[1]-i[1]}px) scale(var(--scale))}*,::slotted(svg){transition-duration:${this.smooth+"ms"}}</style><div id="touch-surface" @wheel="${this._wheel}" @pointerdown="${this._touchdragstart}" @pointermove="${this._touchdragmove}" @pointerup="${this._touchdragend}" @gesturestart="${this._gesturestart}" @gesturechange="${this._gesturechange}"><div id="bg" part="background" style="${ft({backgroundPosition:`${t[0]-i[0]}px ${t[1]-i[1]}px`})}"></div><slot @slotchange="${this.handleSlotchange}"></slot><div part="bar" class="bottombar" style="${ft({width:o[0]+"px",transform:`translate(${r[0]}px, 0)`,opacity:e?"0.75":"0",pointerEvents:e?"auto":"none"})}" @pointerdown="${this.#a}" @pointermove="${this.#c}" @pointerup="${this.#d}"></div><div part="bar" class="rightbar" style="${ft({height:o[1]+"px",transform:`translate(0, ${r[1]}px)`,opacity:s?"0.75":"0",pointerEvents:s?"auto":"none"})}" @pointerdown="${this.#a}" @pointermove="${this.#u}" @pointerup="${this.#d}"></div></div>`}#a(t){wt(t)&&this.#r(t)}#c(t){wt(t)&&this.#n(t,!0,!1,this.c_dim[0]*this.scale/this.v_dim[0])}#u(t){wt(t)&&this.#n(t,!1,!0,this.c_dim[1]*this.scale/this.v_dim[1])}#d(t,i){this.#l(t)}_wheel(t){$t(t);const i=t.deltaMode===WheelEvent.DOM_DELTA_LINE?5:1;if(t.ctrlKey){const s=-t.deltaY*i;this.smooth=5*Math.abs(s),this._performZoom(this.coordToLocal([t.clientX,t.clientY]),.005*s*this.scale)}else{const s=xt([t.deltaX,t.deltaY],i);this.smooth=2*(Math.abs(s[0])+Math.abs(s[1])),this.#h=bt(s,this.#h)}}#t;#i;_gesturestart(t){this.#i=this.coordToLocal([t.clientX,t.clientY]),this.#t=1,$t(t)}_gesturechange(t){$t(t),this._performZoom(this.#i,this.scale*(t.scale-this.#t)*1.5),this.#t=t.scale}_performZoom(t,i){let s=Math.min(5,Math.max(.5,this.scale+i)),e=s-this.scale;this.#h=bt(xt(t,e),this.#h),this.scale=s}#s;firstUpdated(){this.#s.observe(this.surface)}disconnectedCallback(){super.disconnectedCallback(),this.#s.disconnect()}coordToLocal(t){console.log(this.v_loc);const i=bt(mt(t,this.v_loc),this.#h),s=((t,i)=>[t[0]/i,t[1]/i])(mt(i,this.offset),this.scale);return console.log(s),s}handleSlotchange({target:t}){this.#e&&this.#s.unobserve(this.#e),this.#e=t.assignedElements().find((t=>t.matches("svg")));const i=[this.#e.width.baseVal.value,this.#e.height.baseVal.value],s=this.surface.getBoundingClientRect();this.scale=Math.max(.5,Math.min(5,...xt(kt([s.width,s.height],i),.9))),this.#e&&this.#s.observe(this.#e)}#o;#r;#n;#l;static get styles(){return r`#touch-surface{position:relative;width:100%;height:100%;overflow:hidden}::slotted(svg){transform-origin:0 0;position:absolute}.bottombar{position:absolute;bottom:0;height:var(--thickness)}.rightbar{position:absolute;right:0;width:var(--thickness)}.smooth ::slotted(svg),.smooth>*{transition-property:transform,width,height,background-position,background-size}#bg{position:absolute;z-index:-1;height:100%;width:100%}`}};t([rt({type:Number})],Mt.prototype,"scale",void 0),t([nt()],Mt.prototype,"c_dim",void 0),t([nt()],Mt.prototype,"v_dim",void 0),t([nt()],Mt.prototype,"v_loc",void 0),t([nt()],Mt.prototype,"_scrollPos",void 0),t([at("#touch-surface",!0)],Mt.prototype,"surface",void 0),t([nt()],Mt.prototype,"smooth",void 0),t([lt({passive:!1})],Mt.prototype,"_wheel",null),t([lt({capture:!0})],Mt.prototype,"_gesturestart",null),t([lt({passive:!1})],Mt.prototype,"_gesturechange",null),Mt=t([et("bg-viewport")],Mt);const zt=()=>{document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)};window.addEventListener("resize",zt),zt();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:Et}=X,Ut=()=>document.createComment(""),Ot=(t,i,s)=>{var e;const o=t._$AA.parentNode,r=void 0===i?t._$AB:i._$AA;if(void 0===s){const i=o.insertBefore(Ut(),r),e=o.insertBefore(Ut(),r);s=new Et(i,e,t,t.options)}else{const i=s._$AB.nextSibling,n=s._$AM,h=n!==t;if(h){let i;null===(e=s._$AQ)||void 0===e||e.call(s,t),s._$AM=t,void 0!==s._$AP&&(i=t._$AU)!==n._$AU&&s._$AP(i)}if(i!==r||h){let t=s._$AA;for(;t!==i;){const i=t.nextSibling;o.insertBefore(t,r),t=i}}}return s},Tt=(t,i,s=t)=>(t._$AI(i,s),t),Rt={},Nt=t=>{var i;null===(i=t._$AP)||void 0===i||i.call(t,!1,!0);let s=t._$AA;const e=t._$AB.nextSibling;for(;s!==e;){const t=s.nextSibling;s.remove(),s=t}},Pt=(t,i,s)=>{const e=new Map;for(let o=i;o<=s;o++)e.set(t[o],o);return e},jt=vt(class extends pt{constructor(t){if(super(t),t.type!==ut)throw Error("repeat() can only be used in text expressions")}dt(t,i,s){let e;void 0===s?s=i:void 0!==i&&(e=i);const o=[],r=[];let n=0;for(const i of t)o[n]=e?e(i,n):n,r[n]=s(i,n),n++;return{values:r,keys:o}}render(t,i,s){return this.dt(t,i,s).values}update(t,[i,s,e]){var o;const r=(t=>t._$AH)(t),{values:n,keys:h}=this.dt(i,s,e);if(!Array.isArray(r))return this.at=h,n;const l=null!==(o=this.at)&&void 0!==o?o:this.at=[],a=[];let c,d,u=0,v=r.length-1,p=0,f=n.length-1;for(;u<=v&&p<=f;)if(null===r[u])u++;else if(null===r[v])v--;else if(l[u]===h[p])a[p]=Tt(r[u],n[p]),u++,p++;else if(l[v]===h[f])a[f]=Tt(r[v],n[f]),v--,f--;else if(l[u]===h[f])a[f]=Tt(r[u],n[f]),Ot(t,a[f+1],r[u]),u++,f--;else if(l[v]===h[p])a[p]=Tt(r[v],n[p]),Ot(t,r[u],r[v]),v--,p++;else if(void 0===c&&(c=Pt(h,p,f),d=Pt(l,u,v)),c.has(l[u]))if(c.has(l[v])){const i=d.get(h[p]),s=void 0!==i?r[i]:null;if(null===s){const i=Ot(t,r[u]);Tt(i,n[p]),a[p]=i}else a[p]=Tt(s,n[p]),Ot(t,r[u],s),r[i]=null;p++}else Nt(r[v]),v--;else Nt(r[u]),u++;for(;p<=f;){const i=Ot(t,a[f+1]);Tt(i,n[p]),a[p++]=i}for(;u<=v;){const t=r[u++];null!==t&&Nt(t)}return this.at=h,((t,i=Rt)=>{t._$AH=i})(t,a),P}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */async function It(t){const i=new FileReader;return new Promise(((s,e)=>{i.onload=()=>s(i.result),i.readAsDataURL(t)}))}function Ht(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("img")?.src||null}const Dt=t=>new CustomEvent("game-event",{detail:t});let Bt=class extends it{constructor(){super(),this.width=40,this.height=10,this.tokens=new Map([["1",{loc:[48,48],dim:[48,48],res:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",id:"1"}]]),this.#v=t=>{$t(t),this._drop_hint=this.screen_to_svg(t).map(Zt)},this.#p=t=>{this._drop_hint=void 0},this.#f=async t=>{$t(t),console.log(t);try{const i=await(async t=>{let i=t.dataTransfer?.items??[];return new Promise((async(t,s)=>{console.log("DataItems",i.length);for(let s=0;s<i.length;s++){if(console.log(i[s].type),i[s].type.startsWith("image/")){const e=await It(i[s].getAsFile());return t(e)}if("text/html"===i[s].type)return void i[s].getAsString((i=>t(Ht(i))));if("application/x-moz-file-promise-url"===i[s].type)return void i[s].getAsString(t);if("string"===i[s].kind){let t=i[s].type;i[s].getAsString((i=>console.log(t,i)))}}return s("No compatible drop type found")}))})(t),s=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)));this.tokens.set(s,{loc:this._drop_hint,dim:[24,24],id:s,res:i}),this.dispatchEvent(Dt({type:"token-added",loc:this._drop_hint,id:s,res:i}))}catch(t){}this._drop_hint=void 0},this.#g=t=>{t.preventDefault(),t.stopPropagation(),this.selection=t.target.id},this.#w=()=>{this.selection=void 0},this.#$=[0,0],this.#b=t=>{gt(t)&&($t(t),t.target.setPointerCapture(t.pointerId),this.#$=this.screen_to_svg(t))},this._selection_transform={move:[0,0],resize:[0,0]},this.#y=t=>{if(!gt(t))return;$t(t);const i=At([0,0],St([24*this.width,24*this.height],this.screen_to_svg(t))),s=this.tokens.get(this.selection),e=s.dim,o=s.loc,r=t.target.id;let n=[0,0],h=[0,0];new Set(["r-n","r-ne","r-nw"]).has(r)&&(h[1]=o[1]-i[1],n[1]=Lt(i[1])-o[1]),new Set(["r-w","r-nw","r-sw"]).has(r)&&(h[0]=o[0]-i[0],n[0]=Lt(i[0])-o[0]),new Set(["r-s","r-se","r-sw"]).has(r)&&(h[1]=Lt(i[1])-e[1]-o[1]),new Set(["r-e","r-se","r-ne"]).has(r)&&(h[0]=Lt(i[0])-e[0]-o[0]),"mover"===r?n=mt(i,this.#$).map(Lt):(n=St(yt(e,-24),n),h=At(yt(xt(e,-1),24),h.map(Lt))),Ct(n,this._selection_transform.move)&&Ct(h,this._selection_transform.resize)||(this._selection_transform={move:n,resize:h},this.dispatchEvent(Dt({type:"token-manipulated",id:s.id,loc:bt(s.loc,n),dim:bt(s.dim,h)})))},this.#m=t=>{$t(t);const i=this.tokens.get(this.selection);i&&(i.loc=bt(i.loc,this._selection_transform.move),i.dim=bt(i.dim,this._selection_transform.resize)),this._selection_transform={move:[0,0],resize:[0,0]}},this.screen_to_svg=t=>this.viewport.coordToLocal([t.clientX,t.clientY]),this.keydown=t=>{8===t.keyCode&&(this.tokens.delete(this.selection),this.dispatchEvent(Dt({type:"token-removed",id:this.selection})),this.selection=void 0,$t(t))}}get#x(){return xt([this.width,this.height],24)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.keydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydown)}render(){let t,i,s,e,o,r,[n,h]=this.#x,l=this.tokens.get(this.selection);return l&&(r=bt(l.loc,this._selection_transform.move),o=bt(l.dim,this._selection_transform.resize),t=r[0],i=r[0]+o[0],s=r[1],e=r[1]+o[1]),R`<style>:host{width:100%;height:100%}</style><bg-viewport style="width:100%;height:100%" @click="${this.#w}"><svg id="root" width="${n}" height="${h}" @dragstart="${$t}" @dragleave="${this.#p}" @dragover="${this.#v}" @drop="${this.#f}"><defs><clipPath id="canvasClip"><rect x="0" y="0" width="${n}" height="${h}" rx="5"/></clipPath><pattern id="pat" x="${-.25}" y="${-.25}" width="${24}" height="100%" patternUnits="userSpaceOnUse"><rect class="gridline" x="0" y="0" width="${.5}" height="100%" fill="grey" opacity="1"></rect></pattern><pattern id="pat2" x="${-.25}" y="${-.25}" width="100%" height="${24}" patternUnits="userSpaceOnUse"><rect class="gridline" x="0" y="0" width="100%" height="${.5}" fill="grey" opacity="1"></rect></pattern></defs><g style="clip-path:url(#canvasClip)"><rect class="shadow" x="0" y="0" width="${n}" height="${h}" fill="white"></rect><rect x="0" y="0" width="${n}" height="${h}" fill="url(#pat)" pointer-events="none"></rect><rect x="0" y="0" width="${n}" height="${h}" fill="url(#pat2)" pointer-events="none"></rect>${jt(this.tokens.values(),(t=>t.id),((t,i)=>N`<image id="${t.id}" x="${(this.selection===t.id?r[0]:t.loc[0])+.25}" y="${(this.selection===t.id?r[1]:t.loc[1])+.25}" @click="${this.#g}" width="${(this.selection===t.id?o[0]:t.dim[0])-.5}" height="${(this.selection===t.id?o[1]:t.dim[1])-.5}" href="${t.res}" preserveAspectRatio="none">`))}</g>${this._drop_hint?N`<rect class="drop_hint" x="${this._drop_hint[0]}" y="${this._drop_hint[1]}" width="${24}" height="${24}"></rect>`:null} <svg @pointerdown="${this.#b}" @pointermove="${this.#y}" @pointerup="${this.#m}">${l?N`<rect id="mover" class="selection" x="${t}" y="${s}" width="${o[0]}" height="${o[1]}" fill="transparent" @click="${$t}"></rect><line id="r-n" x1="${t}" y1="${s}" x2="${i}" y2="${s}"></line><line id="r-w" x1="${t}" y1="${s}" x2="${t}" y2="${e}"></line><line id="r-e" x1="${i}" y1="${s}" x2="${i}" y2="${e}"></line><line id="r-s" x1="${t}" y1="${e}" x2="${i}" y2="${e}"></line><rect id="r-nw" class="handle" x="${t-2.5}" y="${s-2.5}" width="${"5px"}" height="${"5px"}"></rect><rect id="r-ne" class="handle" x="${i-2.5}" y="${s-2.5}" width="${5}" height="${5}"></rect><rect id="r-sw" class="handle" x="${t-2.5}" y="${e-2.5}" width="${5}" height="${5}"></rect><rect id="r-se" class="handle" x="${i-2.5}" y="${e-2.5}" width="${5}" height="${5}"></rect>`:null}</svg></svg></bg-viewport>`}createRenderRoot(){return super.createRenderRoot()}#v;#p;#f;#g;#w;#$;#b;#y;#m};Bt.styles=r`:host{font-size:.25in;position:relative;display:inline-block;box-sizing:content-box!important;--selection-color:cornflowerblue}svg{overflow:visible}.drop_hint{transition:none;pointer-events:none;fill:gray}.selection{stroke:var(--selection-color);stroke-width:1;vector-effect:non-scaling-stroke;filter:drop-shadow(0 0 2px var(--selection-color))}.selection:active{cursor:move}.handle{vector-effect:non-scaling-size;fill:#fff;stroke:var(--selection-color)}#r-e,#r-n,#r-s,#r-w{stroke-width:${5};vector-effect:non-scaling-stroke;stroke:transparent}#r-ne,#r-sw{cursor:nesw-resize}#r-nw,#r-se{cursor:nwse-resize}#r-n,#r-s{cursor:row-resize}#r-e,#r-w{cursor:col-resize}bg-viewport::part(background){background-color:#dbdbdb;background-image:url(https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png);background-size:calc(var(--scale) * 315px)}bg-viewport::part(bar){background:#4b4b4b;--thickness:10px}bg-viewport::part(bar):hover{opacity:1}`,t([rt({type:Number})],Bt.prototype,"width",void 0),t([rt({type:Number})],Bt.prototype,"height",void 0),t([at("root",!0)],Bt.prototype,"root",void 0),t([at("bg-viewport",!0)],Bt.prototype,"viewport",void 0),t([nt()],Bt.prototype,"_drop_hint",void 0),t([nt()],Bt.prototype,"selection",void 0),t([nt()],Bt.prototype,"_selection_transform",void 0),Bt=t([et("bg-canvas")],Bt);const Lt=t=>24*Math.round(t/24),Zt=t=>t-t%24;let Jt=class extends it{constructor(){super(...arguments),this.dim=[40,30],this.updateDim=()=>{this.dim=[this.width?.value??0,this.height?.value??0]}}render(){return R`<section id="toolbar"><div>Grid: <input id="width" type="number" @input="${this.updateDim}" value="${this.dim[0]}"> x <input id="height" type="number" @input="${this.updateDim}" value="${this.dim[1]}"></div></section><bg-canvas .width="${this.dim[0]}" .height="${this.dim[1]}"></bg-canvas>`}};Jt.styles=r`:host{width:100%;height:100%;display:grid;grid:"toolbar" 30px "viewport" 1fr/1fr;font-family:inherit}bg-canvas{grid-area:viewport;z-index:1}input[type=number]{width:3em}#toolbar{grid-area:toolbar;background:#eee;box-shadow:0 0 4px gray;z-index:2;display:flex;align-items:center}`,t([nt()],Jt.prototype,"dim",void 0),t([at("#width",!0)],Jt.prototype,"width",void 0),t([at("#height",!0)],Jt.prototype,"height",void 0),Jt=t([et("bg-app")],Jt),document.body.addEventListener("wheel",(t=>{console.log("HUH..."),t.ctrlKey&&t.preventDefault()}),{passive:!1});
//# sourceMappingURL=bundle.js.map
