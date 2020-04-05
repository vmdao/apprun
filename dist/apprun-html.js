!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return r.b})),n.d(e,"Component",(function(){return v})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"Fragment",(function(){return o.a})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return g})),n.d(e,"ROUTER_404_EVENT",(function(){return y})),n.d(e,"customElement",(function(){return l}));var r=n(1),o=n(2);const i=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return e.observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const r={};Array.from(this.attributes).forEach(t=>r[t.name]=t.value),(n.observedAttributes||[]).forEach(t=>{void 0!==this[t]&&(r[t]=this[t]),Object.defineProperty(this,t,{get:()=>r[t],set(e){this.attributeChangedCallback(t,r[t],e)},configurable:!0,enumerable:!0})});const o=this.children?Array.from(this.children):[];if(o.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},r),{children:o})).mount(this._shadowRoot,n),this._component._props=r,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(r,o,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,r;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(r=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===r||r.call(n),this._component=null}attributeChangedCallback(t,n,r){var o;null===(o=this._component)||void 0===o||o.run("attributeChanged",t,n,r),this._component&&(this._component._props[t]=r),r!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{var t;null===(t=this._component)||void 0===t||t.run(".")})}};var s=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,r,o)=>{const i=t?t.toString():r;return a.defineMetadata(`apprun-update:${i}`,{name:i,key:r,options:e},n),o}}function u(t,e={}){return function(n,r){const o=t?t.toString():r;a.defineMetadata(`apprun-update:${o}`,{name:o,key:r,options:e},n)}}function l(t,e){return function(n){return s(t,n,e),n}}const d=(t,e)=>(e?t.state[e]:t.state)||"",h=(t,e,n)=>{if(e){const r=t.state||{};r[e]=n,t.setState(r)}else t.setState(n)};var f;function p(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var n,r,o,i=Array.isArray(t),s=Array.isArray(e);if(i&&s){if((r=t.length)!=e.length)return!1;for(n=r;0!=n--;)if(!p(t[n],e[n]))return!1;return!0}if(i!=s)return!1;var a=Object.keys(t);if((r=a.length)!==Object.keys(e).length)return!1;for(n=r;0!=n--;)if(!e.hasOwnProperty(a[n]))return!1;for(n=r;0!=n--;)if(!p(t[o=a[n]],e[o]))return!1;return!0}return t!=t&&e!=e}!function(t){t[t.NO_ATTR_CHANGE=1]="NO_ATTR_CHANGE",t[t.NO_TREE_CHANGE=2]="NO_TREE_CHANGE"}(f||(f={}));var m=function t(e,n){const r=e.length,o=n.length,i=Math.min(r,o);for(let r=0;r<i;r++){const o=e[r],i=n[r];"object"==typeof i&&(p(o,i)?i._op=f.NO_ATTR_CHANGE|f.NO_TREE_CHANGE:(p(o.props,i.props)&&(i._op=f.NO_ATTR_CHANGE),p(o.children,i.children)?i._op=i._op|f.NO_TREE_CHANGE:t(o.children,i.children)))}};const b={};r.b.on("get-components",t=>t.components=b);const _=t=>t;class v{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new r.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){r.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=r.b.createElement;r.b.createElement=(t,e,...o)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,o)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>o.run(t,e);else if("string"==typeof n)e[t]=t=>o.run(n,t);else if("function"==typeof n)e[t]=t=>o.setState(n(o.state,t));else if(Array.isArray(n)){const[r,...i]=n;"string"==typeof r?e[t]=t=>o.run(r,...i,t):"function"==typeof r&&(e[t]=t=>o.setState(r(o.state,...i,t)))}}else if("$bind"===t){const r=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(r){case"checkbox":e.checked=d(o,i),e.onclick=t=>h(o,i||t.target.name,t.target.checked);break;case"radio":e.checked=d(o,i)===e.value,e.onclick=t=>h(o,i||t.target.name,t.target.value);break;case"number":case"range":e.value=d(o,i),e.oninput=t=>h(o,i||t.target.name,Number(t.target.value));break;default:e.value=d(o,i),e.oninput=t=>h(o,i||t.target.name,t.target.value)}else"select"===n?(e.value=d(o,i),e.onchange=t=>{t.target.multiple||h(o,i||t.target.name,t.target.value)}):"option"===n?(e.selected=d(o,i),e.onclick=t=>h(o,i||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=d(o,i),e.oninput=t=>h(o,i||t.target.name,t.target.value))}else r.b.run("$",{key:t,tag:n,props:e,component:o})})(n,e,t,this),delete e[n])}),n(t,e,...o));const o=e?this.view(t,e):this.view(t);return r.b.createElement=n,o}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(r.b.debug&&r.b.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const o="string"==typeof this.element?document.getElementById(this.element):this.element;if(o){const t="_c";this.unload?o._component===this&&o.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(o)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=null)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):o.removeAttribute&&o.removeAttribute(t),o._component===this&&this.save_vdom&&m([this.save_vdom],[n]),o._component=this}e||(this.render(o,n),this.save_vdom=n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,o;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=_),this.add_actions(),this.state=null!==(o=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==o?o:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),r.b.debug){const e="string"==typeof t?t:t.id;b[e]=b[e]||[],b[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...o)=>{const i=e(this.state,...o);r.b.debug&&r.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,r,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[r,o])}):Object.keys(t).forEach(n=>{const r=t[n];("function"==typeof r||Array.isArray(r))&&n.split(",").forEach(t=>e[t.trim()]=r)}),e["."]||(e["."]=_),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?r.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?r.b.on(o,e,n):this._app.on(o,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?r.b.off(e,n):this._app.off(e,n)})}}v.__isAppRunComponent=!0;const g="//",y="///",E=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");r.b.run(e,...n)||r.b.run(y,e,...n),r.b.run(g,e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");r.b.run("/"+n,...o)||r.b.run(y,"/"+n,...o),r.b.run(g,"/"+n,...o)}else r.b.run(t)||r.b.run(y,t),r.b.run(g,t)};r.b.h=r.b.createElement=o.b,r.b.render=function(t,e,n){Object(o.c)(t,e,n)},r.b.Fragment=o.a,r.b.webComponent=s,r.b.start=(t,e,n,r,o)=>{const i=Object.assign(Object.assign({},o),{render:!0,global_event:!0}),s=new v(e,n,r);return o&&o.rendered&&(s.rendered=o.rendered),s.mount(t,i),s};const A=t=>{};r.b.on("$",A),r.b.on("debug",t=>A),r.b.on(g,A),r.b.on("#",A),r.b.route=E,r.b.on("route",t=>r.b.route&&r.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{r.b.route===E&&(window.onpopstate=()=>E(location.hash),E(location.hash))});e.default=r.b;"object"==typeof window&&(window.Component=v,window.React=r.b,window.on=u,window.customElement=l)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));class r{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:r,options:o}=n;return o.delay?this.delay(t,r,e,o):r.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,r){r._t&&clearTimeout(r._t),r._t=setTimeout(()=>{clearTimeout(r._t),e.apply(this,n)},r.delay)}}let o;const i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?o=i.app:(o=new r,i.app=o,i._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return m}));var r=n(1);let o=0;function i(t,e,n=0){if(0===n&&(o=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>i(t,e,o));let s=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(s=function(t,e,n){const{tag:o,props:i,children:s}=t;let a=`_${n}`,c=i&&i.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u?c=u.__eid:(u=e.__componentCache[a]=new o(Object.assign(Object.assign({},i),{children:s})).mount(c),u.__eid=c);let l=u.state;if(u.mounted){const t=u.mounted(i,s,l);void 0!==t&&(l=u.state=t)}if(l instanceof Promise){const t=t=>{u.element=t,u.setState(l)};return r.b.createElement("section",Object.assign({},i,{id:c,ref:e=>t(e)}))}{const t=u._view(l,i),e=e=>{u.element=e,u.renderState(l,t)};return r.b.createElement("section",Object.assign({},i,{id:c,ref:t=>e(t)}),t)}}(t,e,o++)),s&&Array.isArray(s.children)&&(s.children=s.children.map(t=>i(t,e,o))),s}function s(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function a(t,e,...n){const r=s(n);if("string"==typeof t)return{tag:t,props:e,children:r};if(Array.isArray(t))return t;if(void 0===t&&n)return r;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:r};if("function"==typeof t)return t(e,r);throw new Error(`Unknown tag in vdom ${t}`)}const c=new WeakMap,u=function(t,e,n={}){if(null==e||!1===e)return;e=i(e,n);const r="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?d(t,e,r):d(t,[e],r)};function l(t,e,n){n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,r=`${e.tag||""}`;return n.toUpperCase()===r.toUpperCase()}(t,e)?(!(2&e._op)&&d(t,e.children,n),!(1&e._op)&&p(t,e.props,n)):t.parentNode.replaceChild(f(e,n),t)}function d(t,e,n){var r;const o=(null===(r=t.childNodes)||void 0===r?void 0:r.length)||0,i=(null==e?void 0:e.length)||0,s=Math.min(o,i);for(let r=0;r<s;r++){const o=e[r],i=t.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:t.replaceChild(h(o),i));else if(o instanceof HTMLElement||o instanceof SVGElement)t.insertBefore(o,i);else{const e=o.props&&o.props.key;if(e)if(i.key===e)l(t.childNodes[r],o,n);else{const s=c[e];s?(t.insertBefore(s,i),t.appendChild(i),l(t.childNodes[r],o,n)):t.insertBefore(f(o,n),i)}else l(t.childNodes[r],o,n)}}let a=t.childNodes.length;for(;a>s;)t.removeChild(t.lastChild),a--;if(i>s){const r=document.createDocumentFragment();for(let t=s;t<e.length;t++)r.appendChild(f(e[t],n));t.appendChild(r)}}function h(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function f(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return h(t);if(!t.tag||"function"==typeof t.tag)return h(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(f(t,e))),n}function p(t,e,n){const r=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(r,e||{}),t._props=e;for(const r in e){const o=e[r];if(r.startsWith("data-")){const e=r.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==o&&(o||""===o?t.dataset[e]=o:delete t.dataset[e])}else if("style"===r)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof o)t.style.cssText=o;else for(const e in o)t.style[e]!==o[e]&&(t.style[e]=o[e]);else if(r.startsWith("xlink")){const e=r.replace("xlink","").toLowerCase();null==o||!1===o?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,o)}else/id|class|role|-/g.test(r)||n?t.getAttribute(r)!==o&&(o?t.setAttribute(r,o):t.removeAttribute(r)):t[r]!==o&&(t[r]=o);"key"===r&&o&&(c[o]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function m(t,...e){return s(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return o.app})),n.d(e,"Component",(function(){return o.Component})),n.d(e,"on",(function(){return o.on})),n.d(e,"update",(function(){return o.update})),n.d(e,"event",(function(){return o.event})),n.d(e,"customElement",(function(){return o.customElement})),n.d(e,"ROUTER_404_EVENT",(function(){return o.ROUTER_404_EVENT})),n.d(e,"ROUTER_EVENT",(function(){return o.ROUTER_EVENT}));var r,o=n(0),i=n(2);var s="undefined"==typeof document?void 0:document,a=!!s&&"content"in s.createElement("template"),c=!!s&&s.createRange&&"createContextualFragment"in s.createRange();function u(t){return t=t.trim(),a?function(t){var e=s.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(t):c?function(t){return r||(r=s.createRange()).selectNode(s.body),r.createContextualFragment(t).childNodes[0]}(t):function(t){var e=s.createElement("body");return e.innerHTML=t,e.childNodes[0]}(t)}function l(t,e){var n=t.nodeName,r=e.nodeName;return n===r||!!(e.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function d(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var h={OPTION:function(t,e){var n=t.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}d(t,e,"selected")},INPUT:function(t,e){d(t,e,"checked"),d(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var r=t.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==t.placeholder)return;r.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,r,o=-1,i=0,s=t.firstChild;s;)if("OPTGROUP"===(r=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===r){if(s.hasAttribute("selected")){o=i;break}i++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}t.selectedIndex=o}}};function f(){}function p(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}var m=function(t){return function(e,n,r){if(r||(r={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName){var o=n;(n=s.createElement("html")).innerHTML=o}else n=u(n);var i=r.getNodeKey||p,a=r.onBeforeNodeAdded||f,c=r.onNodeAdded||f,d=r.onBeforeElUpdated||f,m=r.onElUpdated||f,b=r.onBeforeNodeDiscarded||f,_=r.onNodeDiscarded||f,v=r.onBeforeElChildrenUpdated||f,g=!0===r.childrenOnly,y=Object.create(null),E=[];function A(t){E.push(t)}function N(t,e,n){!1!==b(t)&&(e&&e.removeChild(t),_(t),function t(e,n){if(1===e.nodeType)for(var r=e.firstChild;r;){var o=void 0;n&&(o=i(r))?A(o):(_(r),r.firstChild&&t(r,n)),r=r.nextSibling}}(t,n))}function C(t){c(t);for(var e=t.firstChild;e;){var n=e.nextSibling,r=i(e);if(r){var o=y[r];o&&l(e,o)&&(e.parentNode.replaceChild(o,e),O(o,e))}C(e),e=n}}function O(e,n,r){var o=i(n);if(o&&delete y[o],!r){if(!1===d(e,n))return;if(t(e,n),m(e),!1===v(e,n))return}"TEXTAREA"!==e.nodeName?function(t,e){var n,r,o,c,u,d=e.firstChild,f=t.firstChild;t:for(;d;){for(c=d.nextSibling,n=i(d);f;){if(o=f.nextSibling,d.isSameNode&&d.isSameNode(f)){d=c,f=o;continue t}r=i(f);var p=f.nodeType,m=void 0;if(p===d.nodeType&&(1===p?(n?n!==r&&((u=y[n])?o===u?m=!1:(t.insertBefore(u,f),r?A(r):N(f,t,!0),f=u):m=!1):r&&(m=!1),(m=!1!==m&&l(f,d))&&O(f,d)):3!==p&&8!=p||(m=!0,f.nodeValue!==d.nodeValue&&(f.nodeValue=d.nodeValue))),m){d=c,f=o;continue t}r?A(r):N(f,t,!0),f=o}if(n&&(u=y[n])&&l(u,d))t.appendChild(u),O(u,d);else{var b=a(d);!1!==b&&(b&&(d=b),d.actualize&&(d=d.actualize(t.ownerDocument||s)),t.appendChild(d),C(d))}d=c,f=o}!function(t,e,n){for(;e;){var r=e.nextSibling;(n=i(e))?A(n):N(e,t,!0),e=r}}(t,f,r);var _=h[t.nodeName];_&&_(t,e)}(e,n):h.TEXTAREA(e,n)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var r=i(n);r&&(y[r]=n),t(n),n=n.nextSibling}}(e);var w,T,x=e,S=x.nodeType,j=n.nodeType;if(!g)if(1===S)1===j?l(e,n)||(_(e),x=function(t,e){for(var n=t.firstChild;n;){var r=n.nextSibling;e.appendChild(n),n=r}return e}(e,(w=n.nodeName,(T=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==T?s.createElementNS(T,w):s.createElement(w)))):x=n;else if(3===S||8===S){if(j===S)return x.nodeValue!==n.nodeValue&&(x.nodeValue=n.nodeValue),x;x=n}if(x===n)_(e);else{if(n.isSameNode&&n.isSameNode(x))return;if(O(x,n,g),E)for(var k=0,R=E.length;k<R;k++){var M=y[E[k]];M&&N(M,M.parentNode,!1)}}return!g&&x!==e&&e.parentNode&&(x.actualize&&(x=x.actualize(e.ownerDocument||s)),e.parentNode.replaceChild(x,e)),x}}((function(t,e){var n,r,o,i,s=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var a=s.length-1;a>=0;a--)r=(n=s[a]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,t.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),t.setAttributeNS(o,r,i))):t.getAttribute(r)!==i&&t.setAttribute(r,i);for(var c=t.attributes,u=c.length-1;u>=0;u--)r=(n=c[u]).name,(o=n.namespaceURI)?(r=n.localName||r,e.hasAttributeNS(o,r)||t.removeAttributeNS(o,r)):e.hasAttribute(r)||t.removeAttribute(r)}}));o.default.createElement=i.b,o.default.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,m(t,n)}else t.innerHTML=e;else Object(i.c)(t,e,n)},o.default.Fragment=i.a;e.default=o.default}])}));
//# sourceMappingURL=apprun-html.js.map