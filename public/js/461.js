"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[461],{5166:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(3645),l=r.n(o)()((function(e){return e[1]}));l.push([e.id,".w-custom[data-v-6c6ccc08]{width:27%}",""]);const a=l},3629:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var o=r(821),l=function(e){return(0,o.dD)("data-v-6c6ccc08"),e=e(),(0,o.Cn)(),e},a={class:"miniRoutes"},n=l((function(){return(0,o._)("h3",{class:"color-title text-center font-medium mb-1 text-gray-600"}," Available legs ",-1)})),s={class:"text-center whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2"},i=["onClick"],c={class:"h-20 flex items-center justify-center"},u=["src"],d={class:"text-sm"},m={class:"miniRoutes"},f=l((function(){return(0,o._)("h3",{class:"color-title text-center font-medium mb-2 text-gray-600"}," Standing desk material ",-1)})),g={class:"text-center text-xs whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2"},w=["onClick","innerHTML"],h={key:0,class:"text-xs whitespace-nowrap py-1 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1"},b=["onClick"],k=["src","title"],p={class:"miniRoutes"},v=l((function(){return(0,o._)("h3",{class:"color-title text-center font-medium text-xl mb-3 text-gray-600"}," Choose the leg color ",-1)})),C={class:"flex flex-wrap w-full justify-center -mr-2"},_=["onClick"];const y={props:["old"],data:function(){return{routeTag:null,imagearr:null,folderImages:null,deskMaterials:null}},mounted:function(){var e=this;store.commit("setRoute",this.old),scene.onReadyObservable.add((function(){e.setLegColor(1);var t=Engine.textures.folders;e.deskMaterials=t.folders,e.folderImages=t.images,e.imagearr=e.folderImages[store.state.params.deskMaterial]}))},methods:{setLegColor:function(e){if(store.state.params.legColor!=e){var t=["#D6D6D6","#8B8B8B","#222222"];["oneLeg","twoLeg","fourLeg","fiveLeg","threeLegLeft","threeLegRight","tumb1"].forEach((function(r){var o=scene.getNodeByName(r),l=BABYLON.Color3.FromHexString(t[e-1]).toLinearSpace();Animate(o,"material.albedoColor",COLOR3,[{frame:0,value:o.material.albedoColor},{frame:15,value:l}])})),store.state.params.legColor=e}},deskFolder:function(e){var t=this;this.imagearr=null,setTimeout((function(){t.imagearr=t.folderImages[e],store.state.params.deskMaterial=e}),100)}}};var x=r(3379),D=r.n(x),L=r(5166),$={insert:"head",singleton:!1};D()(L.Z,$);L.Z.locals;const T=(0,r(3744).Z)(y,[["render",function(e,t,r,l,y,x){return(0,o.wg)(),(0,o.iD)("section",null,[(0,o.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o._)("main",a,[n,(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.legTypes,(function(t,r){return(0,o.wg)(),(0,o.iD)("aside",{key:r,onClick:function(t){return e.$store.commit("setLegType",r+1)},class:"w-custom inline-block mr-2"},[(0,o._)("section",{class:(0,o.C_)([{"border-myblue":e.$store.state.params.legType==r+1},"py-2 rounded-md border border-transparent"])},[(0,o._)("main",c,[(0,o._)("img",{src:t.img,class:"w-9/12"},null,8,u)]),(0,o._)("div",d,(0,o.zw)(t.name),1)],2)],8,i)})),128))])],512),[[o.F8,1==e.$store.state.currentPage]])]})),_:1}),(0,o.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o._)("main",m,[f,(0,o._)("aside",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(y.deskMaterials,(function(t){return(0,o.wg)(),(0,o.iD)("main",{key:t,class:"w-28 inline-block align-middle mr-2"},[(0,o._)("button",{onClick:function(e){return x.deskFolder(t.path)},class:(0,o.C_)([{"bg-my text-white":e.$store.state.params.deskMaterial==t.path},"leading-none h-8 w-full rounded-md border"]),innerHTML:t.text},null,10,w)])})),128))]),(0,o.Wm)(o.uT,{name:"fade",mode:"in-out"},{default:(0,o.w5)((function(){return[y.imagearr?((0,o.wg)(),(0,o.iD)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(y.imagearr,(function(t){return(0,o.wg)(),(0,o.iD)("aside",{class:"w-20 mr-1 inline-block",key:t},[(0,o._)("main",{onClick:function(r){return e.$store.commit("setDeskMaterial",t)},class:"w-full h-20"},[(0,o._)("img",{class:(0,o.C_)([{"shadow-blue":e.$store.state.params.deskimage==t},"border-2 border-white rounded-md object-cover w-full h-full"]),src:"/floors/".concat(t),title:t},null,10,k)],8,b)])})),128))])):(0,o.kq)("",!0)]})),_:1})],512),[[o.F8,2==e.$store.state.currentPage]])]})),_:1}),(0,o.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o._)("main",p,[v,(0,o._)("div",C,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(3,(function(t){return(0,o._)("aside",{key:t,class:"w-1/4 mr-2"},[(0,o._)("main",{onClick:function(e){return x.setLegColor(t)},class:"h-20"},[1==t?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,o.C_)([{"shadow-blue border-2 border-white":e.$store.state.params.legColor==t},"w-full h-full bg-white border border-gray rounded-md"])},null,2)):(0,o.kq)("",!0),2==t?((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,o.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-gray-400 border-2 border-white rounded-md"])},null,2)):(0,o.kq)("",!0),3==t?((0,o.wg)(),(0,o.iD)("div",{key:2,class:(0,o.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-black border-2 border-white rounded-md"])},null,2)):(0,o.kq)("",!0)],8,_)])})),64))])],512),[[o.F8,3==e.$store.state.currentPage]])]})),_:1})])}],["__scopeId","data-v-6c6ccc08"]])}}]);