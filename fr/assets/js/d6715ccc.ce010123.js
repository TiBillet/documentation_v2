"use strict";(self.webpackChunkdocumentation_v_2=self.webpackChunkdocumentation_v_2||[]).push([[9731],{3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=r(4848),n=r(8453);const o={sidebar_position:2,slug:"laboutik",title:"Install LaBoutik",description:"Construct your own cash and cashless register box.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas, mike"},i=void 0,a={id:"install/Raspberry Box/Software/LaBoutik_soft",title:"Install LaBoutik",description:"Construct your own cash and cashless register box.",source:"@site/docs/install/Raspberry Box/Software/LaBoutik_soft.md",sourceDirName:"install/Raspberry Box/Software",slug:"/install/Raspberry Box/Software/laboutik",permalink:"/fr/docs/install/Raspberry Box/Software/laboutik",draft:!1,unlisted:!1,editUrl:"https://github.com/TiBillet/documentation_v2/tree/main/docs/install/Raspberry Box/Software/LaBoutik_soft.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"laboutik",title:"Install LaBoutik",description:"Construct your own cash and cashless register box.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas, mike"},sidebar:"tutorialSidebar",previous:{title:"Install Raspberry OS",permalink:"/fr/docs/install/Raspberry Box/Software/raspberry_OS"},next:{title:"Hardware",permalink:"/fr/docs/category/hardware"}},l={},u=[{value:"Download and launch the script to install: &quot;LaBoutik&quot; :",id:"download-and-launch-the-script-to-install-laboutik-",level:2},{value:"if you use your own server :",id:"if-you-use-your-own-server-",level:2},{value:"Troubleshooting :",id:"troubleshooting-",level:2},{value:"After &quot;sudo apt-get install git -y&quot; I have return &quot;E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?&quot;",id:"after-sudo-apt-get-install-git--y-i-have-return-e-unable-to-fetch-some-archives-maybe-run-apt-get-update-or-try-with---fix-missing",level:4}];function c(e){const t={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"download-and-launch-the-script-to-install-laboutik-",children:'Download and launch the script to install: "LaBoutik" :'}),"\n",(0,s.jsx)(t.p,{children:"Connect to your Pi via ssh :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"updates the package list\nsudo apt-get update  \n\n#install git on your Pi\nsudo apt-get install git -y  \n\n#git clone this repro\ngit clone https://github.com/TiBillet/client-raspberry-cashless-LaBoutik  \n\n#go to the repositorie\ncd client-raspberry-cashless-LaBoutik  \n\n#permit exec\nsudo chmod +x LaBoutik.sh\n"})}),"\n",(0,s.jsx)(t.p,{children:"run the script"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"sudo ./LaBoutik.sh \n"})}),"\n",(0,s.jsx)(t.p,{children:"And take a coffe :) around 20 minutes ."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note: Run the script, without parameters, is for an installation hosted by Tibillet with the default settings.\nIf you have hosted your own server, read more below"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"if-you-use-your-own-server-",children:"if you use your own server :"}),"\n",(0,s.jsx)(t.p,{children:"Run the script like this"}),"\n",(0,s.jsx)(t.p,{children:"sudo ./LaBoutik.sh nfc_type :: server_pin_code :: nfc_server_port :: nfc_server_address :: nfc_server_version :: front_type :: rotate"}),"\n",(0,s.jsxs)(t.p,{children:["with :",(0,s.jsx)(t.br,{}),"\n","nfc_type : gpio or usb"]}),"\n",(0,s.jsx)(t.p,{children:"server_pin_code : Your pin code server address"}),"\n",(0,s.jsx)(t.p,{children:"nfc_server_port: by default :3000"}),"\n",(0,s.jsxs)(t.p,{children:["nfc_server_address: by default ",":localhost"]}),"\n",(0,s.jsx)(t.p,{children:"nfc_server_version: by default(to day) :2.24.04.11.15.58"}),"\n",(0,s.jsxs)(t.p,{children:["front_type",":for"," raspberry : FPI for laptop: FPO"]}),"\n",(0,s.jsx)(t.p,{children:"rotate: 0 -> Normal , 1 -> 90\xb0, 2 -> 180\xb0, 3 -> 270\xb0"}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting-",children:"Troubleshooting :"}),"\n",(0,s.jsx)(t.h4,{id:"after-sudo-apt-get-install-git--y-i-have-return-e-unable-to-fetch-some-archives-maybe-run-apt-get-update-or-try-with---fix-missing",children:'After "sudo apt-get install git -y" I have return "E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?"'}),"\n",(0,s.jsx)(t.p,{children:"Make sudo apt-get update and try again"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);