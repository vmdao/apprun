class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){let n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:i,options:s}=n;return s.delay?this.delay(t,i,e,s):i.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,i){i._t&&clearTimeout(i._t),i._t=setTimeout(()=>{clearTimeout(i._t),e.apply(this,n)},i.delay)}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-2");var i=e;let s=0;function o(t,e,n=0){if(0===n&&(s=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>o(t,e,s));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:s,props:o,children:r}=t;let c=`_${n}`,f=o&&o.id;f?c=f:f=`_${n}${Date.now()}`,e.i||(e.i={});let u=e.i[c];u?f=u.s:(u=e.i[c]=new s(Object.assign(Object.assign({},o),{children:r})).mount(f),u.s=f);let h=u.state;if(u.mounted){const t=u.mounted(o,r,h);void 0!==t&&(h=u.state=t)}if(h instanceof Promise){const t=t=>{u.element=t,u.setState(h)};return i.createElement("section",Object.assign({},o,{id:f,ref:e=>t(e)}))}{const t=u._view(h,o),e=e=>{u.element=e,u.renderState(h,t)};return i.createElement("section",Object.assign({},o,{id:f,ref:t=>e(t)}),t)}}(t,e,s++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(t=>o(t,e,s))),r}function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const i=r(n);if("string"==typeof t)return{tag:t,props:e,children:i};if(Array.isArray(t))return t;if(void 0===t&&n)return i;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:i};if("function"==typeof t)return t(e,i);throw new Error(`Unknown tag in vdom ${t}`)}const f={},u=function(t,e,n={}){if(null==e||!1===e)return;if(e=o(e,n),!t)return;Array.isArray(e)?a(t,e):a(t,[e])};function h(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,i=`${e.tag||""}`;return n.toUpperCase()===i.toUpperCase()}(t,e)?(a(t,e.children),p(t,e.props)):t.parentNode.replaceChild(d(e),t)}function a(t,e){const n=Math.min(t.childNodes.length,e.length);for(let i=0;i<n;i++){const n=e[i],s=t.childNodes[i];if(n instanceof HTMLElement)t.insertBefore(n,s);else if("string"==typeof n)s.textContent!==n&&(3===s.nodeType?s.textContent=n:t.replaceChild(l(n),s));else{const e=n.props&&n.props.key;if(e)if(s.key===e)h(t.childNodes[i],n);else{const o=f[e];o?(t.insertBefore(o,s),t.appendChild(s),h(t.childNodes[i],n)):t.insertBefore(d(n),s)}else h(t.childNodes[i],n)}}let i=t.childNodes.length;for(;i>n;)t.removeChild(t.lastChild),i--;if(e.length>n){const i=document.createDocumentFragment();for(let t=n;t<e.length;t++)i.appendChild(d(e[t]));t.appendChild(i)}}function l(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e=!1){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(d(t,e))),n}function p(t,e){console.assert(!!t);const n=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e||{}),t._props=e;for(const n in e){const i=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==i&&(i||""===i?t.dataset[e]=i:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==i&&(i?t.setAttribute(n,i):t.removeAttribute(n)):t[n]!==i&&(t[n]=i);"key"===n&&i&&(f[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function b(t,...e){return r(e)}const v=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const i={};Array.from(this.attributes).forEach(t=>i[t.name]=t.value);const s=this.children?Array.from(this.children):[];if(s.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},i),{children:s})).mount(this._shadowRoot,n),this._component.mounted){const t=this._component.mounted(i,s,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){this._component.unload&&this._component.unload(),this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}};var m=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,v(e,n))};const y={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function g(t,e={}){return(n,i,s)=>{const o=t?t.toString():i;return y.defineMetadata(`apprun-update:${o}`,{name:o,key:i,options:e},n),s}}function O(t,e={}){return function(n,i){const s=t?t.toString():i;y.defineMetadata(`apprun-update:${s}`,{name:s,key:i,options:e},n)}}function w(t,e){return function(n){return m(t,n,e),n}}const j=(t,e)=>(e?t.state[e]:t.state)||"",T=(t,e,n)=>{if(e){const i=Object.assign({},t.state);i[e]=n,t.setState(i)}else t.setState(n)};const A={};i.on("get-components",t=>t.components=A);const E=t=>t;class k{constructor(e,n,i,s){this.state=e,this.view=n,this.update=i,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){i.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=i.createElement;i.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[i,...o]=n;"string"==typeof i?e[t]=t=>s.run(i,...o,t):"function"==typeof i&&(e[t]=t=>s.setState(i(s.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=j(s,o),e.onclick=t=>T(s,o||t.target.name,t.target.checked);break;case"radio":e.checked=j(s,o)===e.value,e.onclick=t=>T(s,o||t.target.name,t.target.value);break;case"number":case"range":e.value=j(s,o),e.oninput=t=>T(s,o||t.target.name,Number(t.target.value));break;default:e.value=j(s,o),e.oninput=t=>T(s,o||t.target.name,t.target.value)}else"select"===n?(e.value=j(s,o),e.onchange=t=>{t.target.multiple||T(s,o||t.target.name,t.target.value)}):"option"===n&&(e.selected=j(s,o),e.onclick=t=>T(s,o||t.target.name,t.target.selected))}else i.run("$",{key:t,tag:n,props:e,component:s})})(n,e,t,this),delete e[n])}),n(t,e,...s));const s=e?this.view(t,e):this.view(t);return i.createElement=n,s}renderState(t,e=null){if(!this.view)return;const n=e||this._view(t);if(i.debug&&i.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}e||this.render(s,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),this.state=null!=(s=null!=(n=this.state)?n:this.model)?s:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug){const e="string"==typeof t?t:t.id;A[e]=A[e]||[],A[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...s)=>{const o=e(this.state,...s);i.debug&&i.run("debug",{component:this,event:t,e:s,state:this.state,newState:o,options:n}),this.setState(o,n)},n))}add_actions(){const t=this.update||{};y.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=y.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,i,s]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[i,s])}):Object.keys(t).forEach(n=>{const i=t[n];("function"==typeof i||Array.isArray(i))&&n.split(",").forEach(t=>e[t.trim()]=i)}),e["."]||(e["."]=E),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)})}}k.t=!0;const $="//",M="///",C=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run("///",e,...n),i.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run("///","/"+n,...s),i.run("//","/"+n,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.createElement=c,i.render=function(t,e,n){u(t,e,n)},i.Fragment=b,i.webComponent=m,i.start=(t,e,n,i,s)=>{const o=Object.assign(Object.assign({},s),{render:!0,global_event:!0}),r=new k(e,n,i);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const _=t=>{};i.on("$",_),i.on("debug",t=>_),i.on("//",_),i.on("#",_),i.route=C,i.on("route",t=>i.route&&i.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{i.route===C&&(window.onpopstate=()=>C(location.hash),C(location.hash))}),"object"==typeof window&&(window.Component=k,window.React=i);var x;var P="undefined"==typeof document?void 0:document,L=!!P&&"content"in P.createElement("template"),S=!!P&&P.createRange&&"createContextualFragment"in P.createRange();function N(t){return t=t.trim(),L?function(t){var e=P.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(t):S?function(t){return x||(x=P.createRange()).selectNode(P.body),x.createContextualFragment(t).childNodes[0]}(t):function(t){var e=P.createElement("body");return e.innerHTML=t,e.childNodes[0]}(t)}function R(t,e){var n=t.nodeName,i=e.nodeName;return n===i||!!(e.actualize&&n.charCodeAt(0)<91&&i.charCodeAt(0)>90)&&n===i.toUpperCase()}function G(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var H={OPTION:function(t,e){var n=t.parentNode;if(n){var i=n.nodeName.toUpperCase();"OPTGROUP"===i&&(i=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==i||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}G(t,e,"selected")},INPUT:function(t,e){G(t,e,"checked"),G(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var i=t.firstChild;if(i){var s=i.nodeValue;if(s==n||!n&&s==t.placeholder)return;i.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,i,s=-1,o=0,r=t.firstChild;r;)if("OPTGROUP"===(i=r.nodeName&&r.nodeName.toUpperCase()))r=(n=r).firstChild;else{if("OPTION"===i){if(r.hasAttribute("selected")){s=o;break}o++}!(r=r.nextSibling)&&n&&(r=n.nextSibling,n=null)}t.selectedIndex=s}}};function U(){}function D(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}var I=function(t){return function(e,n,i){if(i||(i={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName){var s=n;(n=P.createElement("html")).innerHTML=s}else n=N(n);var o=i.getNodeKey||D,r=i.onBeforeNodeAdded||U,c=i.onNodeAdded||U,f=i.onBeforeElUpdated||U,u=i.onElUpdated||U,h=i.onBeforeNodeDiscarded||U,a=i.onNodeDiscarded||U,l=i.onBeforeElChildrenUpdated||U,d=!0===i.childrenOnly,p=Object.create(null),b=[];function v(t){b.push(t)}function m(t,e,n){!1!==h(t)&&(e&&e.removeChild(t),a(t),function t(e,n){if(1===e.nodeType)for(var i=e.firstChild;i;){var s=void 0;n&&(s=o(i))?v(s):(a(i),i.firstChild&&t(i,n)),i=i.nextSibling}}(t,n))}function y(t){c(t);for(var e=t.firstChild;e;){var n=e.nextSibling,i=o(e);if(i){var s=p[i];s&&R(e,s)&&(e.parentNode.replaceChild(s,e),g(s,e))}y(e),e=n}}function g(e,n,i){var s=o(n);if(s&&delete p[s],!i){if(!1===f(e,n))return;if(t(e,n),u(e),!1===l(e,n))return}"TEXTAREA"!==e.nodeName?function(t,e){var n,i,s,c,f,u=e.firstChild,h=t.firstChild;t:for(;u;){for(c=u.nextSibling,n=o(u);h;){if(s=h.nextSibling,u.isSameNode&&u.isSameNode(h)){u=c,h=s;continue t}i=o(h);var a=h.nodeType,l=void 0;if(a===u.nodeType&&(1===a?(n?n!==i&&((f=p[n])?s===f?l=!1:(t.insertBefore(f,h),i?v(i):m(h,t,!0),h=f):l=!1):i&&(l=!1),(l=!1!==l&&R(h,u))&&g(h,u)):3!==a&&8!=a||(l=!0,h.nodeValue!==u.nodeValue&&(h.nodeValue=u.nodeValue))),l){u=c,h=s;continue t}i?v(i):m(h,t,!0),h=s}if(n&&(f=p[n])&&R(f,u))t.appendChild(f),g(f,u);else{var d=r(u);!1!==d&&(d&&(u=d),u.actualize&&(u=u.actualize(t.ownerDocument||P)),t.appendChild(u),y(u))}u=c,h=s}!function(t,e,n){for(;e;){var i=e.nextSibling;(n=o(e))?v(n):m(e,t,!0),e=i}}(t,h,i);var b=H[t.nodeName];b&&b(t,e)}(e,n):H.TEXTAREA(e,n)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var i=o(n);i&&(p[i]=n),t(n),n=n.nextSibling}}(e);var O,w,j=e,T=j.nodeType,A=n.nodeType;if(!d)if(1===T)1===A?R(e,n)||(a(e),j=function(t,e){for(var n=t.firstChild;n;){var i=n.nextSibling;e.appendChild(n),n=i}return e}(e,(O=n.nodeName,(w=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==w?P.createElementNS(w,O):P.createElement(O)))):j=n;else if(3===T||8===T){if(A===T)return j.nodeValue!==n.nodeValue&&(j.nodeValue=n.nodeValue),j;j=n}if(j===n)a(e);else{if(n.isSameNode&&n.isSameNode(j))return;if(g(j,n,d),b)for(var E=0,k=b.length;E<k;E++){var $=p[b[E]];$&&m($,$.parentNode,!1)}}return!d&&j!==e&&e.parentNode&&(j.actualize&&(j=j.actualize(e.ownerDocument||P)),e.parentNode.replaceChild(j,e)),j}}((function(t,e){var n,i,s,o,r=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var c=r.length-1;c>=0;c--)i=(n=r[c]).name,s=n.namespaceURI,o=n.value,s?(i=n.localName||i,t.getAttributeNS(s,i)!==o&&("xmlns"===n.prefix&&(i=n.name),t.setAttributeNS(s,i,o))):t.getAttribute(i)!==o&&t.setAttribute(i,o);for(var f=t.attributes,u=f.length-1;u>=0;u--)i=(n=f[u]).name,(s=n.namespaceURI)?(i=n.localName||i,e.hasAttributeNS(s,i)||t.removeAttributeNS(s,i)):e.hasAttribute(i)||t.removeAttribute(i)}}));i.createElement=c,i.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,I(t,n)}else t.innerHTML=e;else u(t,e,n)},i.Fragment=b;export default i;export{k as Component,M as ROUTER_404_EVENT,$ as ROUTER_EVENT,i as app,w as customElement,g as event,O as on,g as update};
//# sourceMappingURL=apprun-html.esm.js.map