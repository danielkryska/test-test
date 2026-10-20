import{ao as o,b3 as w,aW as m,aV as b,aq as y,ap as a,av as q}from"./index-C_5m5KGR.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=o("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=o("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function L({onDelete:r,size:k,ariaLabel:h="Delete",label:s,confirmTitle:c="Are you sure?",confirmDescription:u="This cannot be undone.",fullWidth:x=!1,justify:v,dataE2e:C="confirm-delete-btn"}){const d=w(m),i=b(m),n=y.useCallback(()=>{d({title:c,description:u,confirmLabel:"Delete",danger:!0,onConfirm:r})},[d,c,u,r]);return y.useEffect(()=>{const l=t=>{var p,f;if(t.key!=="Delete"&&t.key!=="Backspace"||t.defaultPrevented)return;const e=t.target;(p=e==null?void 0:e.closest)!=null&&p.call(e,"input, textarea, select, [contenteditable]")||(f=e==null?void 0:e.closest)!=null&&f.call(e,"[data-radix-popper-content-wrapper]")||i||document.querySelector('[data-e2e="confirm-modal"]')||(t.preventDefault(),n())};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[i,n]),a.jsxs(q,{variant:"danger",size:k,fullWidth:x,justify:v,"aria-label":h,"data-e2e":C,onClick:n,children:[a.jsx(D,{size:16}),s!==void 0&&a.jsx("span",{children:s})]})}export{E as C,L as F,D as T,A as a};
