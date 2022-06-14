"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[757],{6008:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(3645),a=r.n(s)()((function(e){return e[1]}));a.push([e.id,".w-custom[data-v-6f6ddcdc]{width:27%}",""]);const l=a},2757:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s=r(821),a={class:"miniRoutes"},l={class:"color-title text-center font-medium mb-1 text-gray-600"},n={class:"text-center whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2"},o=["onClick"],i={class:"h-20 flex items-center justify-center"},d=["src"],u={class:"text-sm"},c={class:"miniRoutes"},m={class:"color-title text-center font-medium mb-2 text-gray-600"},g={key:0,class:"text-center text-xs whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2"},w=["onClick","innerHTML"],f={key:0,class:"text-xs whitespace-nowrap py-1 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1"},h=["onClick"],p=["src","title"],b={class:"miniRoutes"},k={class:"color-title text-center font-medium text-xl mb-3 text-gray-600"},y={class:"flex flex-wrap w-full justify-center -mr-2"},v=["onClick"];const _={props:["old"],data:function(){return{imagearr:null,folderImages:null,deskMaterials:[],events:Engine.Legs}},mounted:function(){var e=this;Engine.Legs.data=this,store.commit("setRoute",this.old),scene.onReadyObservable.add((function(){var t=Engine.textures.folders;e.folderImages=t.images,e.imagearr=e.folderImages[store.state.params.deskMaterial],Engine.Legs.FilterFolders(store.state.params.legType)}))}};var x=r(3379),C=r.n(x),$=r(6008),D={insert:"head",singleton:!1};C()($.Z,D);$.Z.locals;const T=(0,r(3744).Z)(_,[["render",function(e,t,r,_,x,C){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s.Wm)(s.uT,{name:"fade",mode:"out-in"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("main",a,[(0,s._)("h3",l,(0,s.zw)(e.$store.state.language.pageaviable),1),(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.legTypes,(function(t,r){return(0,s.wg)(),(0,s.iD)("aside",{key:r,onClick:function(e){return x.events.setLegType(r)},class:"w-custom inline-block mr-2"},[(0,s._)("section",{class:(0,s.C_)([{"border-myblue":e.$store.state.params.legType==r},"py-2 overflow-hidden rounded-md border border-transparent"])},[(0,s._)("main",i,[(0,s._)("img",{src:t.img,class:"w-9/12"},null,8,d)]),(0,s._)("div",u,(0,s.zw)(e.$store.state.language[t.name]),1)],2)],8,o)})),128))])],512),[[s.F8,1==e.$store.state.currentPage]])]})),_:1}),(0,s.Wm)(s.uT,{name:"fade",mode:"out-in"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("main",c,[(0,s._)("h3",m,(0,s.zw)(e.$store.state.language.pagematerials),1),x.deskMaterials.length>0?((0,s.wg)(),(0,s.iD)("aside",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.deskMaterials,(function(t){return(0,s.wg)(),(0,s.iD)("main",{key:t,class:"w-28 inline-block align-middle mr-2"},[(0,s._)("button",{onClick:function(e){return x.events.deskFolder(t.path)},class:(0,s.C_)([{"bg-my text-white":e.$store.state.params.deskMaterial==t.path},"leading-none h-8 w-full rounded-md shadow-sm border border-gray-50"]),innerHTML:e.$store.state.language[t.path]},null,10,w)])})),128))])):(0,s.kq)("",!0),(0,s.Wm)(s.uT,{name:"fade",mode:"in-out"},{default:(0,s.w5)((function(){return[x.imagearr?((0,s.wg)(),(0,s.iD)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.imagearr,(function(t){return(0,s.wg)(),(0,s.iD)("aside",{class:"w-20 mr-1 inline-block",key:t},[(0,s._)("main",{onClick:function(e){return x.events.setDeskMaterial(t.path)},class:"w-full h-20"},[(0,s._)("img",{class:(0,s.C_)([{"shadow-blue":e.$store.state.params.deskimage==t.path},"border-2 border-white rounded-md object-cover w-full h-full"]),src:"/floors/".concat(t.path),title:t.path},null,10,p)],8,h)])})),128))])):(0,s.kq)("",!0)]})),_:1})],512),[[s.F8,2==e.$store.state.currentPage]])]})),_:1}),(0,s.Wm)(s.uT,{name:"fade",mode:"out-in"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("main",b,[(0,s._)("h3",k,(0,s.zw)(e.$store.state.language.pagecolors),1),(0,s._)("div",y,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(3,(function(t){return(0,s._)("aside",{key:t,class:"w-1/4 mr-2"},[(0,s._)("main",{onClick:function(e){return x.events.setLegColor(t)},class:"h-20"},[1==t?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,s.C_)([{"shadow-blue border-2 border-white":e.$store.state.params.legColor==t},"w-full h-full bg-white border border-gray rounded-md"])},null,2)):(0,s.kq)("",!0),2==t?((0,s.wg)(),(0,s.iD)("div",{key:1,class:(0,s.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-gray-400 border-2 border-white rounded-md"])},null,2)):(0,s.kq)("",!0),3==t?((0,s.wg)(),(0,s.iD)("div",{key:2,class:(0,s.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-black border-2 border-white rounded-md"])},null,2)):(0,s.kq)("",!0)],8,v)])})),64))])],512),[[s.F8,3==e.$store.state.currentPage]])]})),_:1})])}],["__scopeId","data-v-6f6ddcdc"]])}}]);