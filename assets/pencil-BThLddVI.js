import{b$ as W,g as S,c0 as j,c1 as F,av as I}from"./index-CrwtKlFw.js";var N=W,O=function(){return N.Date.now()},P=O,R=F,k=P,p=j,$="Expected a function",z=Math.max,A=Math.min;function D(T,t,r){var u,o,l,c,n,a,f=0,x=!1,d=!1,v=!0;if(typeof T!="function")throw new TypeError($);t=p(t)||0,R(r)&&(x=!!r.leading,d="maxWait"in r,l=d?z(p(r.maxWait)||0,t):l,v="trailing"in r?!!r.trailing:v);function g(e){var i=u,s=o;return u=o=void 0,f=e,c=T.apply(s,i),c}function _(e){return f=e,n=setTimeout(m,t),x?g(e):c}function y(e){var i=e-a,s=e-f,E=t-i;return d?A(E,l-s):E}function b(e){var i=e-a,s=e-f;return a===void 0||i>=t||i<0||d&&s>=l}function m(){var e=k();if(b(e))return C(e);n=setTimeout(m,y(e))}function C(e){return n=void 0,v&&u?g(e):(u=o=void 0,c)}function L(){n!==void 0&&clearTimeout(n),f=0,u=a=o=n=void 0}function M(){return n===void 0?c:C(k())}function h(){var e=k(),i=b(e);if(u=arguments,o=this,a=e,i){if(n===void 0)return _(a);if(d)return clearTimeout(n),n=setTimeout(m,t),g(a)}return n===void 0&&(n=setTimeout(m,t)),c}return h.cancel=L,h.flush=M,h}var U=D;const q=S(U);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=I("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=I("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);export{B as C,G as P,q as d};
