"use strict";(self.webpackChunkdocumentation_v_2=self.webpackChunkdocumentation_v_2||[]).push([[6670],{5508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(141),i=t(5213);const r={sidebar_position:3,slug:"tenants",title:"Tenants",description:"Cr\xe9ez et listez les instances de votre serveur multi-tenant",keywords:["cashless","billetterie","ticketing","cli","curl","python","tenant","saas"],wiktags:["cashless","billetterie","ticketing","curl","python","tenant","saas"],authors:"jonas"},l=void 0,a={id:"api/03 Tenants",title:"Tenants",description:"Cr\xe9ez et listez les instances de votre serveur multi-tenant",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/03 Tenants.md",sourceDirName:"api",slug:"/api/tenants",permalink:"/fr/docs/api/tenants",draft:!1,unlisted:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/api/03 Tenants.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"tenants",title:"Tenants",description:"Cr\xe9ez et listez les instances de votre serveur multi-tenant",keywords:["cashless","billetterie","ticketing","cli","curl","python","tenant","saas"],wiktags:["cashless","billetterie","ticketing","curl","python","tenant","saas"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/fr/docs/api/apikey"},next:{title:"Produits",permalink:"/fr/docs/api/products"}},d={},o=[{value:"Base de donn\xe9es partag\xe9e, sch\xe9mas distincts.",id:"base-de-donn\xe9es-partag\xe9e-sch\xe9mas-distincts",level:2},{value:"Cat\xe9gories",id:"cat\xe9gories",level:2},{value:"Lieu",id:"lieu",level:3},{value:"Festival",id:"festival",level:3},{value:"Projet",id:"projet",level:3},{value:"Producteurs",id:"producteurs",level:3},{value:"Meta : L&#39;agenda f\xe9d\xe9r\xe9",id:"meta--lagenda-f\xe9d\xe9r\xe9",level:3},{value:"Root",id:"root",level:3},{value:"Donn\xe9es initiales",id:"donn\xe9es-initiales",level:2},{value:"Lister les tenants",id:"lister-les-tenants",level:2},{value:"Cr\xe9ation de nouveau tenant",id:"cr\xe9ation-de-nouveau-tenant",level:2},{value:"example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"base-de-donn\xe9es-partag\xe9e-sch\xe9mas-distincts",children:"Base de donn\xe9es partag\xe9e, sch\xe9mas distincts."}),"\n",(0,s.jsx)(n.p,{children:"TiBillet est construit autour d'une architecture multi-tenant. Il s'agit d'une fonctionnalit\xe9 essentielle pour toute\napplication de type \"Software-as-a-Service\"."}),"\n",(0,s.jsx)(n.p,{children:"C'est une approche semi-isol\xe9e : Base de donn\xe9es partag\xe9e, sch\xe9mas distincts. Une base de donn\xe9es pour tous les\nlocataires, mais un sch\xe9ma par locataire."}),"\n",(0,s.jsxs)(n.p,{children:["Pour plus d'information : ",(0,s.jsx)(n.a,{href:"https://django-tenants.readthedocs.io/",children:"https://django-tenants.readthedocs.io/"})]}),"\n",(0,s.jsx)(n.h2,{id:"cat\xe9gories",children:"Cat\xe9gories"}),"\n",(0,s.jsx)(n.p,{children:"Nous avons d\xe9fini plusieurs cat\xe9gories de tenant qui determinent les comportements et templates."}),"\n",(0,s.jsx)(n.h3,{id:"lieu",children:"Lieu"}),"\n",(0,s.jsx)(n.p,{children:"Une salle de spectacle, un caf\xe9 concert, un tiers lieux..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Un nom."}),"\n",(0,s.jsx)(n.li,{children:"Un lieu."}),"\n",(0,s.jsx)(n.li,{children:"Une sc\xe8ne."}),"\n",(0,s.jsx)(n.li,{children:"Un ou plusieurs artistes par soir."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "S"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"festival",children:"Festival"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Un nom."}),"\n",(0,s.jsx)(n.li,{children:"Un ou plusieurs lieux."}),"\n",(0,s.jsx)(n.li,{children:"Une ou plusieurs sc\xe8nes."}),"\n",(0,s.jsx)(n.li,{children:"Un ou plusieurs artistes par soir."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "F"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"projet",children:"Projet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Un nom."}),"\n",(0,s.jsx)(n.li,{children:"Plusieurs lieux et sc\xe8nes sur plusieurs dates."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "A"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"producteurs",children:"Producteurs"}),"\n",(0,s.jsx)(n.p,{children:"Ex : Boite de production, agent, compagnie de th\xe9atre, tourneur"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Plusieurs projets."}),"\n",(0,s.jsx)(n.li,{children:"Plusieurs lieux et sc\xe8nes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "P"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"meta--lagenda-f\xe9d\xe9r\xe9",children:"Meta : L'agenda f\xe9d\xe9r\xe9"}),"\n",(0,s.jsx)(n.p,{children:"Plusieurs instances se f\xe9d\xe8rent pour cr\xe9er un agenda \xe9v\xe8nementiel commun."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Plusieurs lieux"}),"\n",(0,s.jsx)(n.li,{children:"Plusieurs projets"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "M"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"root",children:"Root"}),"\n",(0,s.jsx)(n.p,{children:"Une seule instance par serveur.\nG\xe8re les tables communes \xe0 tous les tenants :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cartes NFC"}),"\n",(0,s.jsx)(n.li,{children:"Utilisateurs"}),"\n",(0,s.jsx)(n.li,{children:"Super-users"}),"\n",(0,s.jsx)(n.li,{children:"Gestion des domaines principaux et sous domaines multi tenant."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'categorie = "R"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"donn\xe9es-initiales",children:"Donn\xe9es initiales"}),"\n",(0,s.jsx)(n.p,{children:"Lors de l'installation d'un nouveau serveur Django, une instance ROOT et une META sont d\xe9ja pr\xe9sente."}),"\n",(0,s.jsx)(n.p,{children:"S'il ne peut y avoir qu'un seul ROOT, plusieurs instances META sont possibles pour un agenda f\xe9d\xe9r\xe9 autour d'une\ncommunaut\xe9 interne."}),"\n",(0,s.jsx)(n.p,{children:"La premi\xe8re META initalement cr\xe9\xe9e est utile pour lister toutes les autres instances du serveur Django. Le sous domaine\npar defauilt est \"meta\". Il est possible de changer l'adresse avant l'installation : modifiez le fichier .env pr\xe9sent \xe0\nla racine du docker-compose. Il est aussi possible de changer l'adresse post install dans l'administration ROOT."}),"\n",(0,s.jsx)(n.h2,{id:"lister-les-tenants",children:"Lister les tenants"}),"\n",(0,s.jsx)(n.p,{children:"\xc0 lancer sur la premi\xe8re META."}),"\n",(0,s.jsx)(n.p,{children:"Aucune autorisation n'est n\xe9c\xe9ssaire pour lister les tenants d'un serveur."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"# all tenant :\nGET https://meta.<domain>/api/place/\n\n# retrieve one tenant :\nGET https://meta.<domain>/api/place/<uuid>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9ation-de-nouveau-tenant",children:"Cr\xe9ation de nouveau tenant"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["BETA en cours : En plus de l'autorisation sp\xe9ficifique de la cl\xe9 d'Api, l'utilisateur enregistr\xe9 doit avoir une\nautorisation sp\xe9ciale pour la cr\xe9ation de tenant. La case \"Peux cr\xe9er des tenants\" doit \xeatre coch\xe9 dans l'interface d'administration ROOT : ",(0,s.jsx)(n.code,{children:"https://www.<domain>/admin/"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"POST https://meta.<domain>/api/place/\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"Requis"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"organisation"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"short_description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"long_description"}),(0,s.jsx)(n.td,{children:"decimal"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"phone"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"site_web"}),(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"postal_code"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"img_url"}),(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"logo_url"}),(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"categorie"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Y"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"adress"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"N"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"city"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"N"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "http://meta.tibillet.local/api/place/"\n\npayload = {\n    "organisation": "Le Bisik",\n    "short_description": " Le lieu des musiques actuelles de Saint-Beno\xeet",\n    "long_description": "ACTER (Agir pour la Culture et le Tourisme dans l\u2019Est de La R\xe9union) est n\xe9e il y cinq ans de la volont\xe9 farouche de porter un projet culturel populaire et de cr\xe9er un lieu de diffusion original de Musiques Actuelles dans l\u2019Est de La R\xe9union. Avec le Bisik nous avons invent\xe9 un tiers-lieu original, un espace de convivialit\xe9 pluriel qui pourrait pr\xe9figurer une Sc\xe8ne De Musiques Actuelles adapt\xe9e au territoire souhait\xe9e par notre \xe9quipe et d\u2019ores et d\xe9j\xe0 par nombre de nos partenaires avec qui nous signerons prochainement un conventionnement pluriannuel.",\n    "phone": "0692929292",\n    "email": "contact+bisik@tibillet.re",\n    "site_web": "http://bisik.re",\n    "postal_code": "97410",\n    "img_url": "http://bisik.re/wp-content/uploads/2019/01/MayaBisik.jpg",\n    "logo_url": "http://bisik.re/wp-content/uploads/2017/05/logo-Bisik.png",\n    "categorie": "S"\n}\nheaders = {\n    "Content-Type": "application/json",\n    "Authorization": "Api-Key  NvGv0CHV.aQGS09HOQuF14sqfez8132jhEd8UAcBsp"\n}\n\nresponse = requests.request("POST", url, json=payload, headers=headers)\n\nprint(response.text)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="HTTP json response"',children:'{\n\t"uuid": "1cf9889c-3414-4a39-bdde-1a36e1f97b96",\n\t"organisation": "Le Bisik",\n\t"slug": "le-bisik",\n\t"short_description": "Le lieu des musiques actuelles de Saint-Beno\xeet",\n\t"long_description": "ACTER (Agir pour la Culture et le Tourisme dans l\u2019Est de La R\xe9union) est n\xe9e il y cinq ans de la volont\xe9 farouche de porter un projet culturel populaire et de cr\xe9er un lieu de diffusion original de Musiques Actuelles dans l\u2019Est de La R\xe9union. Avec le Bisik nous avons invent\xe9 un tiers-lieu original, un espace de convivialit\xe9 pluriel qui pourrait pr\xe9figurer une Sc\xe8ne De Musiques Actuelles adapt\xe9e au territoire souhait\xe9e par notre \xe9quipe et d\u2019ores et d\xe9j\xe0 par nombre de nos partenaires avec qui nous signerons prochainement un conventionnement pluriannuel.",\n\t"adress": null,\n\t"postal_code": 97410,\n\t"city": null,\n\t"phone": "0692929292",\n\t"email": "contact@tibillet.re",\n\t"site_web": "http://bisik.re",\n\t"legal_documents": null,\n\t"twitter": null,\n\t"facebook": null,\n\t"instagram": null,\n\t"adhesion_obligatoire": false,\n\t"button_adhesion": false,\n\t"map_img": null,\n\t"carte_restaurant": null,\n\t"img_variations": {\n\t\t"fhd": "/media/images/MayaBisik_shOX4fO.fhd.jpg",\n\t\t"hdr": "/media/images/MayaBisik_shOX4fO.hdr.jpg",\n\t\t"med": "/media/images/MayaBisik_shOX4fO.med.jpg",\n\t\t"thumbnail": "/media/images/MayaBisik_shOX4fO.thumbnail.jpg"\n\t},\n\t"logo_variations": {\n\t\t"fhd": "/media/images/MayaBisik_shOX4fO.fhd.jpg",\n\t\t"hdr": "/media/images/MayaBisik_shOX4fO.hdr.jpg",\n\t\t"med": "/media/images/MayaBisik_shOX4fO.med.jpg",\n\t\t"thumbnail": "/media/images/MayaBisik_shOX4fO.thumbnail.jpg"\n\t},\n\t"categorie": "S"\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5213:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(4673);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);