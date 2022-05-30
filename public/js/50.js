"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{5411:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(3645),r=s.n(n)()((function(e){return e[1]}));r.push([e.id,".btns{position:relative;top:1px;transform:scale(-1)}.fades-enter-active,.fades-leave-active{transition:1s ease}.fades-enter-from,.fades-leave-to{opacity:0;transform:scaleX(0);width:0}.easy-transition{transition:.5s}.left-ang{left:-35px}.left-ang,.right-ang{top:50%;transform:translateY(-50%) scale(.8)}.right-ang{right:-35px}",""]);const l=r},9050:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var n=s(821),r=(0,n._)("h3",{class:"font-bold mb-4 xl:text-xl md:text-md text-gray-600"}," Available legs ",-1),l={class:"flex text-center justify-between -mr-2"},a=["onClick"],i={class:"xl:h-28 md:h-24 flex items-center justify-center"},o=["src"],u={class:"xl:text-sm md:text-xs"},d=(0,n._)("h3",{class:"font-bold mb-1 xl:text-xl md:text-md xl:mt-6 md:mt-4 text-gray-600"}," Table Top Materials ",-1),c={key:0,src:"/images/true.png",class:"w-4 -m-1 -mt-2 absolute top-0 right-0 z-20"},m=["onClick","innerHTML"],f={key:0,class:"flex flex-wrap -mr-2 md:mt-2"},g=["title","onClick"],p=["src","title"],h={class:"text-center mb-1 text-xs uppercase"},w={class:"xl:pb-8 md:pb-4"},x=(0,n._)("h3",{class:"font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600"}," Legs Colors ",-1),b={class:"flex flex-wrap -mr-2"},k=["onClick"];const y={data:function(){return{imagearr:null,folderImages:null,deskMaterials:[],events:Engine.Legs}},mounted:function(){var e=this;Engine.Legs.data=this,console.log(this.deskMaterials),scene.onReadyObservable.add((function(){var t=Engine.textures.folders;e.folderImages=t.images,e.imagearr=e.folderImages[store.state.params.deskMaterial],Engine.Legs.FilterFolders(store.state.params.legType)}))},components:{Caruosel:s(3966).Z}};const v=(0,s(3744).Z)(y,[["render",function(e,t,s,y,v,C){var _=(0,n.up)("Caruosel");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("main",null,[r,(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.$store.state.legTypes,(function(t,s){return(0,n.wg)(),(0,n.iD)("aside",{key:s,onClick:function(e){return v.events.setLegType(s)},class:"w-1/5 pr-2 cursor-pointer"},[(0,n._)("section",{class:(0,n.C_)([{"border-myblue":e.$store.state.params.legType==s},"p-2 pt-1 overflow-hidden rounded-xl border bg-white"])},[(0,n._)("main",i,[(0,n._)("img",{src:t.img,class:"w-10/12"},null,8,o)]),(0,n._)("div",u,(0,n.zw)(t.name),1)],2)],8,a)})),128))]),d,(0,n.Wm)(n.uT,{name:"fade",mode:"in-out"},{default:(0,n.w5)((function(){return[v.deskMaterials.length>0?((0,n.wg)(),(0,n.j4)(_,{key:0,itemCount:4,class:"text-md text-center text-gray-600"},{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(v.deskMaterials,(function(t){return(0,n.wg)(),(0,n.iD)("main",{key:t,class:"w-1/4 inline-block align-middle px-2 relative"},[e.$store.state.params.activeFolder==t.path?((0,n.wg)(),(0,n.iD)("img",c)):(0,n.kq)("",!0),(0,n._)("button",{onClick:function(e){return v.events.deskFolder(t.path)},class:(0,n.C_)([{"bg-my text-white":e.$store.state.params.deskMaterial==t.path},"xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"]),innerHTML:t.text},null,10,m)])})),128))]})),_:1})):(0,n.kq)("",!0)]})),_:1}),(0,n.Wm)(n.uT,{name:"fade",mode:"in-out"},{default:(0,n.w5)((function(){return[v.imagearr?((0,n.wg)(),(0,n.iD)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(v.imagearr,(function(t,s){return(0,n.wg)(),(0,n.iD)("aside",{class:"w-1/5 pr-2",key:s},[(0,n._)("main",{title:s,onClick:function(e){return v.events.setDeskMaterial(t.path)},class:"xl:h-32 md:h-20 cursor-pointer"},[(0,n._)("img",{class:(0,n.C_)([{"shadow-blue":e.$store.state.params.deskimage==t.path},"border-2 border-white rounded-md object-cover w-full h-full"]),src:"/floors/".concat(t.path),title:t.path},null,10,p)],8,g),(0,n._)("p",h,(0,n.zw)(e.$store.state.language[t.file]),1)])})),128))])):(0,n.kq)("",!0)]})),_:1})]),(0,n._)("main",w,[x,(0,n._)("div",b,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,(function(t){return(0,n._)("aside",{key:t,class:"w-1/5 pr-2"},[(0,n._)("main",{onClick:function(e){return v.events.setLegColor(t)},class:"xl:h-32 md:h-20"},[1==t?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,n.C_)([{"shadow-blue border-2 border-white":e.$store.state.params.legColor==t},"w-full h-full bg-white border border-gray rounded-md"])},null,2)):(0,n.kq)("",!0),2==t?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,n.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-gray-400 border-2 border-white rounded-md"])},null,2)):(0,n.kq)("",!0),3==t?((0,n.wg)(),(0,n.iD)("div",{key:2,class:(0,n.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-black border-2 border-white rounded-md"])},null,2)):(0,n.kq)("",!0)],8,k)])})),64))])])])}]])},3966:(e,t,s)=>{s.d(t,{Z:()=>f});var n=s(821),r={class:"flex justify-between items-center relative"},l=[(0,n._)("img",{src:"/images/leftang.png",class:"w-2/3 btns"},null,-1)],a={class:"overflow-hidden py-3 px-1 flex-grow"},i=[(0,n._)("img",{src:"/images/leftang.png",class:"w-2/3"},null,-1)];const o={props:["itemCount"],data:function(){return{prosent:0,endItem:null,slots:null}},computed:{transform:function(){return{transform:"translateX(".concat(this.prosent,"%)")}},casr:function(){var e=this.$refs.mainBlock.children.length;return e%this.itemCount==0?0:this.itemCount-e%this.itemCount}},mounted:function(){this.slots=this.$refs.mainBlock.children.length;var e=this.$refs.mainBlock.children.length-this.itemCount,t=this.itemCount;this.endItem=100*-e/t},methods:{next:function(){var e=this.itemCount;this.endItem<this.prosent&&(this.prosent+=-100/e)},prev:function(){this.prosent<0&&(this.prosent+=100/this.itemCount)}}};var u=s(3379),d=s.n(u),c=s(5411),m={insert:"head",singleton:!1};d()(c.Z,m);c.Z.locals;const f=(0,s(3744).Z)(o,[["render",function(e,t,s,o,u,d){return(0,n.wg)(),(0,n.iD)("section",r,[(0,n.Wm)(n.uT,{name:"fades",mode:"out-in"},{default:(0,n.w5)((function(){return[0!=u.prosent?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=function(){return d.prev&&d.prev.apply(d,arguments)}),class:"absolute left-ang top-0 left-0 w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},l)):(0,n.kq)("",!0)]})),_:1}),(0,n._)("aside",a,[(0,n._)("main",{ref:"mainBlock",style:(0,n.j5)(d.transform),class:(0,n.C_)([{"-ml-2":0==u.prosent},"whitespace-nowrap easy-transition"])},[(0,n.WI)(e.$slots,"default")],6)]),(0,n.Wm)(n.uT,{name:"fades",mode:"out-in"},{default:(0,n.w5)((function(){return[u.prosent!=u.endItem&&u.slots>s.itemCount?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[1]||(t[1]=function(){return d.next&&d.next.apply(d,arguments)}),class:"absolute right-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},i)):(0,n.kq)("",!0)]})),_:1})])}]])}}]);