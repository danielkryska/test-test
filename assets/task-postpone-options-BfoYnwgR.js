import{c as x,l as f,c0 as k,z as l,k as i,C as d,aU as y}from"./index-csJsG9m1.js";import{P as C,m as O}from"./postpone-options-DKsuaz9N.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=x("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);function N({taskId:s,onDone:r,dataE2e:n,showSectionLabel:c=!1,variant:a="full"}){const[e,m]=f(k(s)),u=l();if(!(e!=null&&e.date)&&!(e!=null&&e.recurrence))return null;const t=O(e,m,u,s,d),o=p=>()=>{p(),r==null||r()};return i.jsx(C,{onToday:o(t.today),onTomorrow:o(t.tomorrow),onNextOccurrence:o(()=>t.nextOccurrence(y)),onNextMonday:o(t.nextMonday),onRemoveDate:o(t.removeDate),showNextOccurrence:(e==null?void 0:e.recurrence)!=null,showRemoveDate:a==="focus"?!1:(e==null?void 0:e.date)!=null,showSectionLabel:c,variant:a,dataE2e:n})}export{w as C,N as T};
