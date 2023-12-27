"use strict";(self.webpackChunksecurity=self.webpackChunksecurity||[]).push([[2364],{8104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=t(5893),a=t(1151),l=(t(7294),t(3743));const s={tableOfContentsInline:"tableOfContentsInline_prmo"};function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.jsx)("div",{className:s.tableOfContentsInline,children:(0,i.jsx)(l.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}const o={title:"Testing Mermaid",sidebar_position:7,toc_min_heading_level:2,toc_max_heading_level:6},c=void 0,d={id:"tutorial-basics/mermaid",title:"Testing Mermaid",description:"---",source:"@site/docs/tutorial-basics/mermaid.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/mermaid",permalink:"/handbook/docs/tutorial-basics/mermaid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/mermaid.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Testing Mermaid",sidebar_position:7,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/handbook/docs/tutorial-basics/congratulations"},next:{title:"MDX",permalink:"/handbook/docs/tutorial-basics/MDX"}},u={},m=[{value:"Heading 2",id:"heading-2",level:2},{value:"Heading 3",id:"heading-3",level:3},{value:"Heading 2 again?",id:"heading-2-again",level:2},{value:"Heading 4",id:"heading-4",level:4},{value:"Heading 5",id:"heading-5",level:5},{value:"Heading 6",id:"heading-6",level:6}];function h(e){const n={h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",mermaid:"mermaid",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{toc:m,minHeadingLevel:2,maxHeadingLevel:6}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"heading-2",children:"Heading 2"}),"\n",(0,i.jsx)(n.p,{children:"Yay"}),"\n",(0,i.jsx)(n.h3,{id:"heading-3",children:"Heading 3"}),"\n",(0,i.jsx)(n.h2,{id:"heading-2-again",children:"Heading 2 again?"}),"\n",(0,i.jsx)(n.p,{children:"It is\na text"}),"\n",(0,i.jsx)(n.h4,{id:"heading-4",children:"Heading 4"}),"\n",(0,i.jsx)(n.p,{children:"Also this"}),"\n",(0,i.jsx)(n.h5,{id:"heading-5",children:"Heading 5"}),"\n",(0,i.jsx)(n.p,{children:"This one"}),"\n",(0,i.jsx)(n.h6,{id:"heading-6",children:"Heading 6"}),"\n",(0,i.jsx)(n.p,{children:"And this beauty here too:"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]"})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(7294),a=t(6668);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(9960),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const g=i.memo(h);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.L)(),f=c??v.tableOfContents.minHeadingLevel,x=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:f,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:x}}),[r,o,f,x])),(0,m.jsx)(g,{toc:p,className:t,linkClassName:r,...h})}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);