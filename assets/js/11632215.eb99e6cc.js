"use strict";(self.webpackChunkdocumentation_v_2=self.webpackChunkdocumentation_v_2||[]).push([[1938],{9735:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(6271),n=i(1621);const r={sidebar_position:40,slug:"webhook",title:"Webhook",description:"Send a POST for each confirmed booking.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],authors:"Jonas"},s=void 0,a={id:"Utilisateur/Billetterie/40 webhook",title:"Webhook",description:"Send a POST for each confirmed booking.",source:"@site/docs/Utilisateur/Billetterie/40 webhook.md",sourceDirName:"Utilisateur/Billetterie",slug:"/Utilisateur/Billetterie/webhook",permalink:"/docs/Utilisateur/Billetterie/webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Billetterie/40 webhook.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,slug:"webhook",title:"Webhook",description:"Send a POST for each confirmed booking.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],authors:"Jonas"},sidebar:"tutorialSidebar",previous:{title:"Create a free event",permalink:"/docs/Utilisateur/Billetterie/admin_add_new_free_event"},next:{title:"Integration",permalink:"/docs/Utilisateur/Billetterie/iframe"}},l={},c=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"It is possible to create webhooks after each event carried out on the ticket office in the administration interface."}),"\n",(0,o.jsxs)(t.p,{children:["example : ",(0,o.jsx)(t.a,{href:"https://demo.betabillet.tech/adminBaseBillet/webhook/",children:"https://demo.betabillet.tech/adminBaseBillet/webhook/"})]}),"\n",(0,o.jsx)(t.p,{children:"The webhook is triggered each time a free or paid reservation is validated, at the same time as the tickets are sent by email."}),"\n",(0,o.jsx)(t.p,{children:'It is possible to see the last response to the query in the "Last response" field.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",metastring:'title="Reservation"',children:'# Celery task : Billetterie/DjangoFiles/BaseBillet/tasks.py\n\njson = {\n    "object": "reservation",\n    "uuid": f"{reservation.uuid}",\n    "state": f"{reservation.status}",\n    "datetime": f"{reservation.datetime}",\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["It is then possible to retrieve more information about the reservation via the standard API ",(0,o.jsx)(t.a,{href:"/docs/api/reservations",children:"/docs/api/reservations"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1621:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(6663);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);