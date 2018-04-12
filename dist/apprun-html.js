!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];console.assert(!!o,"No subscriber for event: "+e),o&&(this._events[e]=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?t.delay(e,o,n,i):o.apply(t,n),!r.options.once}))},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(o,n)},r.delay)},e}();t.App=r,t.default=new r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(7),i=n(5);t.Component=i.Component;var a=n(4),u=n(2);t.on=u.on,t.update=u.update,t.event=u.update,r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(e,t,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),u=new i.Component(t,n,r);return o&&o.rendered&&(u.rendered=o.rendered),u.mount(e,a),u};var s=r.default;"object"==typeof window&&(window.app&&window.app.start?s=window.app:(window.app=s,document.addEventListener("DOMContentLoaded",function(){return new a.default}))),t.default=s,r.default.on("debug",function(e){return 0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,o,i){return e=o+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,action:[i.value,n]},r),i}},t.on=function(e,n){return void 0===n&&(n={}),function(n,r){e=r+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:r},n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o="_props";function i(e){var t=[],n=function(e){null!==e&&void 0!==e&&""!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var u=i(n);if("string"==typeof e)return{tag:e,props:t,children:u};if(void 0===e&&n)return u;if(Object.getPrototypeOf(e).__isAppRunComponent){var s=t&&t.id||"_"+e.name+"_"+ ++a;return r.default(e,s,t)}return e(t,u)};var a=0,u={};function s(e,t){if(a=0,t&&e)if(Array.isArray(t))for(var n=0;n<t.length;n++)e.children[n]?d(e.children[1],t[n]):e.appendChild(c(t[n]));else{var r=t;e.firstChild?d(e.firstChild,r):e.appendChild(c(r))}}function d(e,t){if(console.assert(!!e),function(e,t){return e.nodeName===(""+(t.tag||"")).toUpperCase()}(e,t)){for(var n=Math.min(e.childNodes.length,t.children.length),r=0;r<n;r++){var o=t.children[r],i=e.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:e.replaceChild(l(o),i));else{var a=o.props&&o.props.key;if(a)if(i.key===a)d(e.childNodes[r],o);else{var s=a&&u[a];s?(e.replaceChild(s,i),e.appendChild(i),d(e.childNodes[r],o)):(e.appendChild(c(t),i),d(e.childNodes[r],o))}else d(e.childNodes[r],o)}}for(var p=e.childNodes.length;p>n;)e.removeChild(e.lastChild),p--;if(t.children.length>n){var h=document.createDocumentFragment();for(r=n;r<t.children.length;r++)h.appendChild(c(t.children[r]));e.appendChild(h)}f(e,t.props)}else e.parentNode.replaceChild(c(t),e)}function l(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function c(e){if(console.assert(null!==e&&void 0!==e),"string"==typeof e)return l(e);if(!e.tag)return l(JSON.stringify(e));var t="svg"===e.tag?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return f(t,e.props),e.children&&e.children.forEach(function(e){return t.appendChild(c(e))}),t}function f(e,t){console.assert(!!e);var n=e[o]||{};for(var r in t=function(e,t){var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=""}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t),e[o]=t,t){var i=t[r];if(n[r]!==i)if("style"===r)for(var a in e.style.cssText&&(e.style.cssText=""),i)e.style[a]!==i[a]&&(e.style[a]=i[a]);else if(r.startsWith("data-")){var s=r.substring(5);e.dataset[s]!==i&&(e.dataset[s]=i)}else e[r]!==i&&(e[r]=i),"key"===r&&i&&(u[i]=e)}}t.updateElement=s,t.render=s,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o="//";r.default.on("//",function(e){}),r.default.on("#",function(e){});var i=function(){function e(){var e=this;r.default.on("route",function(t){return e.route(t)}),window.onpopstate=function(t){return e.route(location.hash)},this.route(location.hash)}return e.prototype.route=function(e){if(e||(e="#"),e.indexOf("/")>0){var t=e.split("/"),n=t[0],i=t.slice(1);r.default.run.apply(r.default,[n].concat(i)),r.default.run.apply(r.default,[o,n].concat(i))}else r.default.run(e),r.default.run(o,e)},e}();t.default=i},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(2),a=function(){function e(e,t,n,i){var a=this;this.state=e,this.view=t,this.update=n,this.options=i,this._app=new o.App,this._history=[],this._history_idx=-1,this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),a.mount(e,r({},t,{render:!0}))},this.render=function(){return a.view(a.state)}}return e.prototype.renderState=function(e){if(this.view){var t=this.view(e);o.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"});var n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&o.default.render&&(o.default.render(n,t),this.rendered&&this.rendered(this.state))}},e.prototype.setState=function(e,t){var n=this;if(e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e});else{if(null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){var n=this;if(void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){this.on(t.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(t.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this},e.prototype.is_global_event=function(e){return e&&(e.startsWith("#")||e.startsWith("/"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&this.on(e,function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var u=t.apply(void 0,[r.state].concat(i));o.default.run("debug",{component:r,event:e,e:i,state:r.state,newState:u,options:n}),r.setState(u,n)},n)},e.prototype.add_actions=function(){var e=this,t=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,e);t[r.name]=r.action||e[r.key]}});var n={};Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(e)?o.default.run.apply(o.default,[e].concat(n)):(t=this._app).run.apply(t,[e].concat(n))},e.prototype.on=function(e,t,n){return this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)},e.__isAppRunComponent=!0,e}();t.Component=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={};t.default=function(e,t,n){var i=o[t]?o[t]:o[t]=new e(n).mount(t);return r.default.createElement("div",{id:t},i.render&&i.render())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t){console.assert(!!e),r.updateElement(e,t)}},,,,,,,,,,,,function(e,t,n){"use strict";var r,o="http://www.w3.org/1999/xhtml",i="undefined"==typeof document?void 0:document,a=i?i.body||i.createElement("div"):{},u=a.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:a.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function s(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function d(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var l={OPTION:function(e,t){d(e,t,"selected")},INPUT:function(e,t){d(e,t,"checked"),d(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),u(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!u(t,null,"multiple")){for(var n=0,r=t.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(u(r,null,"selected")){n;break}n++}r=r.nextSibling}e.selectedIndex=n}}},c=1,f=3,p=8;function h(){}function v(e){return e.id}var y=function(e){return function(t,n,a){if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var u=n;(n=i.createElement("html")).innerHTML=u}else d=n,!r&&i.createRange&&(r=i.createRange()).selectNode(i.body),r&&r.createContextualFragment?y=r.createContextualFragment(d):(y=i.createElement("body")).innerHTML=d,n=y.childNodes[0];var d,y,m,g=a.getNodeKey||v,_=a.onBeforeNodeAdded||h,b=a.onNodeAdded||h,C=a.onBeforeElUpdated||h,N=a.onElUpdated||h,x=a.onBeforeNodeDiscarded||h,E=a.onNodeDiscarded||h,O=a.onBeforeElChildrenUpdated||h,w=!0===a.childrenOnly,A={};function S(e){m?m.push(e):m=[e]}function j(e,t,n){!1!==x(e)&&(t&&t.removeChild(e),E(e),function e(t,n){if(t.nodeType===c)for(var r=t.firstChild;r;){var o=void 0;n&&(o=g(r))?S(o):(E(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function M(e){b(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=g(t);if(r){var o=A[r];o&&s(t,o)&&(t.parentNode.replaceChild(o,t),T(o,t))}M(t),t=n}}function T(r,o,a){var u,d=g(o);if(d&&delete A[d],!n.isSameNode||!n.isSameNode(t)){if(!a){if(!1===C(r,o))return;if(e(r,o),N(r),!1===O(r,o))return}if("TEXTAREA"!==r.nodeName){var h,v,y,m,b=o.firstChild,x=r.firstChild;e:for(;b;){for(y=b.nextSibling,h=g(b);x;){if(v=x.nextSibling,b.isSameNode&&b.isSameNode(x)){b=y,x=v;continue e}u=g(x);var E=x.nodeType,w=void 0;if(E===b.nodeType&&(E===c?(h?h!==u&&((m=A[h])?x.nextSibling===m?w=!1:(r.insertBefore(m,x),v=x.nextSibling,u?S(u):j(x,r,!0),x=m):w=!1):u&&(w=!1),(w=!1!==w&&s(x,b))&&T(x,b)):E!==f&&E!=p||(w=!0,x.nodeValue!==b.nodeValue&&(x.nodeValue=b.nodeValue))),w){b=y,x=v;continue e}u?S(u):j(x,r,!0),x=v}if(h&&(m=A[h])&&s(m,b))r.appendChild(m),T(m,b);else{var P=_(b);!1!==P&&(P&&(b=P),b.actualize&&(b=b.actualize(r.ownerDocument||i)),r.appendChild(b),M(b))}b=y,x=v}for(;x;)v=x.nextSibling,(u=g(x))?S(u):j(x,r,!0),x=v}var k=l[r.nodeName];k&&k(r,o)}}!function e(t){if(t.nodeType===c)for(var n=t.firstChild;n;){var r=g(n);r&&(A[r]=n),e(n),n=n.nextSibling}}(t);var P,k,R=t,F=R.nodeType,U=n.nodeType;if(!w)if(F===c)U===c?s(t,n)||(E(t),R=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(P=n.nodeName,(k=n.namespaceURI)&&k!==o?i.createElementNS(k,P):i.createElement(P)))):R=n;else if(F===f||F===p){if(U===F)return R.nodeValue!==n.nodeValue&&(R.nodeValue=n.nodeValue),R;R=n}if(R===n)E(t);else if(T(R,n,w),m)for(var V=0,I=m.length;V<I;V++){var L=A[m[V]];L&&j(L,L.parentNode,!1)}return!w&&R!==t&&t.parentNode&&(R.actualize&&(R=R.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(R,t)),R}}(function(e,t){var n,r,o,i,a,s=t.attributes;for(n=s.length-1;n>=0;--n)o=(r=s[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(s=e.attributes).length-1;n>=0;--n)!1!==(r=s[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,u(t,i,o)||e.removeAttributeNS(i,o)):u(t,null,o)||e.removeAttribute(o))});e.exports=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.createElement=r.createElement,t.Fragment=r.Fragment;var o=n(19);t.render=function(e,t){console.assert(!!e),"string"==typeof t?e.firstChild?o(e.firstChild,t):e.innerHTML=t:r.updateElement(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.Component=r.Component,t.on=r.on,t.update=r.update;var o=n(20);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,t.default=r.default}])});
//# sourceMappingURL=apprun-html.js.map