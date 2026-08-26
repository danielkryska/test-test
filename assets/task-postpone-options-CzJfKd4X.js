import{aa as x,o as f,ao as k,ap as l,j as i,$ as d,bt as y}from"./index-BKBo-qzv.js";import{P as O,m as C}from"./postpone-options-UUbf-9g2.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=x("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);function N({taskId:a,onDone:r,dataE2e:n,showSectionLabel:c=!1,variant:s="full"}){const[e,m]=f(k(a)),u=l();if(!(e!=null&&e.date)&&!(e!=null&&e.recurrence))return null;const o=C(e,m,u,a,d),t=p=>()=>{p(),r==null||r()};return i.jsx(O,{onToday:t(o.today),onTomorrow:t(o.tomorrow),onNextOccurrence:t(()=>o.nextOccurrence(y)),onNextMonday:t(o.nextMonday),onRemoveDate:t(o.removeDate),showNextOccurrence:(e==null?void 0:e.recurrence)!=null,showRemoveDate:s==="focus"?!1:(e==null?void 0:e.date)!=null,showSectionLabel:c,variant:s,dataE2e:n})}export{w as C,N as T};
