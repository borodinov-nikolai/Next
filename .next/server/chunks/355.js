exports.id=355,exports.ids=[355],exports.modules={53307:(e,r,s)=>{Promise.resolve().then(s.bind(s,34791)),Promise.resolve().then(s.bind(s,54420)),Promise.resolve().then(s.bind(s,35897)),Promise.resolve().then(s.bind(s,44427)),Promise.resolve().then(s.bind(s,24726))},93555:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,13724,23)),Promise.resolve().then(s.t.bind(s,35365,23)),Promise.resolve().then(s.t.bind(s,44900,23)),Promise.resolve().then(s.t.bind(s,44714,23)),Promise.resolve().then(s.t.bind(s,45392,23)),Promise.resolve().then(s.t.bind(s,8898,23))},54420:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=s(30784),a=s(9885),n=s.n(a),i=s(64021),o=s(57114);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>{let r=n().useMemo(()=>(0,i.createCache)(),[]);return(0,o.useServerInsertedHTML)(()=>t.jsx("style",{id:"antd",dangerouslySetInnerHTML:{__html:(0,i.extractStyle)(r,!0)}})),t.jsx(i.StyleProvider,{cache:r,children:e})}},35897:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=s(30784),a=s(11440),n=s.n(a);s(9885);let __WEBPACK_DEFAULT_EXPORT__=({children:e,href:r})=>(0,t.jsxs)("li",{children:[" ",t.jsx(n(),{href:r,children:e})]})},44427:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=s(30784),a=s(9885),n=s.n(a),i=s(66369),o=s.n(i),l=s(11440),d=s.n(l);let __WEBPACK_DEFAULT_EXPORT__=({menulist:e,closeWidth:r})=>{let[s,a]=n().useState(!1);if(r){let[e,s]=n().useState(0);n().useEffect(()=>{let handleResize=()=>s(window.innerWidth);return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),n().useEffect(()=>{e>r&&a(!1)},[e])}return(0,t.jsxs)("div",{className:o().root,children:[t.jsx("div",{onClick:()=>a(!s),className:o().show_btn,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:t.jsx("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),s&&t.jsx("div",{onClick:()=>a(!s),className:o().fade}),(0,t.jsxs)("div",{className:s?o().window+" "+o().show:o().window,children:[t.jsx("div",{onClick:()=>a(!1),className:o().close_btn,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})}),t.jsx("div",{className:o().inner,children:t.jsx("ul",{className:o().menu,children:e?.map(({id:e,name:r,href:s})=>t.jsx("li",{className:o().menuItem,children:t.jsx(d(),{href:s,children:r})},e))})})]})]})}},24726:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>reduxProvider});var t=s(30784);s(9885);var a=s(8250),n=s(91388),i=s(4459);let o=(0,n.createSlice)({name:"Navigation",initialState:{headerNavItem:""},reducers:{setHeaderNavItem:(e,r)=>{e.headerNavItem=r.payload}}}),{setHeaderNavItem:l}=o.actions,d=o.reducer,c=(0,n.configureStore)({reducer:{filters:i.ZP,navigation:d}}),reduxProvider=({children:e})=>t.jsx(a.Provider,{store:c,children:e})},4459:(e,r,s)=>{"use strict";s.d(r,{HD:()=>l,VY:()=>i,ZP:()=>c,aw:()=>d,bU:()=>n,qP:()=>o});var t=s(91388);let a=(0,t.createSlice)({name:"filters",initialState:{genre:"",platform:"",searchValue:"",sortValue:""},reducers:{setGenre:(e,r)=>{e.genre=r.payload},setPlatform:(e,r)=>{e.platform=r.payload},setSearch:(e,r)=>{e.searchValue=r.payload},setSort:(e,r)=>{e.sortValue=r.payload},resetFilters:e=>{e.genre="Все",e.platform="Все",e.sortValue="price:asc"}}}),{setGenre:n,setPlatform:i,setSearch:o,setSort:l,resetFilters:d}=a.actions,c=a.reducer},82805:e=>{e.exports={root:"header_root___1grn",navbar:"header_navbar__KDKzZ",burger:"header_burger__j2Hwz",left_menu:"header_left_menu__Izm_X",right_menu:"header_right_menu__oSu6V"}},66369:e=>{e.exports={root:"offcanvas_root__CYoHb",show_btn:"offcanvas_show_btn__E4pSK",close_btn:"offcanvas_close_btn__0kaQh",fade:"offcanvas_fade__K5n7F",window:"offcanvas_window__j7lb_",show:"offcanvas_show__TrJ9Z",inner:"offcanvas_inner__a0Mvm",menu:"offcanvas_menu__Yu3yw",menuItem:"offcanvas_menuItem__GcjPL"}},77714:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>RootLayout,metadata:()=>C});var t=s(4656),a=s(40186),n=s.n(a);s(3542);var i=s(82805),o=s.n(i),l=s(95153);let d=(0,l.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\gamemag\next\src\components\Header\offcanvas\index.tsx`),{__esModule:c,$$typeof:_}=d,h=d.default,m=(0,l.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\gamemag\next\src\components\Header\changeNavbarItem\index.tsx`),{__esModule:u,$$typeof:v}=m,x=m.default,components_Header=()=>{let e=[{id:1,name:"Главная",href:"/"},{id:2,name:"Каталог",href:"/catalog"},{id:3,name:"Как купить",href:"/howbuy"},{id:4,name:"Гарантии",href:"/garanty"},{id:5,name:"Частые вопросы",href:"/questions"}];return t.jsx("div",{className:o().root,children:(0,t.jsxs)("div",{className:o().navbar,children:[t.jsx("div",{className:o().burger,children:t.jsx(h,{menulist:e,closeWidth:992})}),t.jsx("ul",{className:o().left_menu,children:e.map(({id:e,name:r,href:s})=>t.jsx(x,{href:s,children:r},e))}),t.jsx("ul",{className:o().right_menu,children:t.jsx("li",{className:o().right_menu_item,children:" Валюта: $ "})})]})})};s(46798);let f=(0,l.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\gamemag\next\src\antDesign\AntdRegistry.tsx`),{__esModule:g,$$typeof:P}=f,j=f.default,w={token:{fontSize:16,colorBorder:"rgb(145 145 145)",colorPrimary:"#8c8c8c",colorTextPlaceholder:"rgb(125, 122, 115)"},components:{}};var p=s(50191),b=s.n(p);let N=(0,l.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\gamemag\next\src\redux_toolkit\reduxProvider.tsx`),{__esModule:y,$$typeof:E}=N,S=N.default,C={title:"Create Next App",description:"Generated by create next app"};function RootLayout({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{className:n().className,children:t.jsx(b(),{theme:w,children:t.jsx(j,{children:t.jsx(S,{children:(0,t.jsxs)("div",{className:"container",children:[t.jsx(components_Header,{}),e]})})})})})})}},46798:()=>{}};