"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[178],{8094:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(3645),r=s.n(n)()((function(e){return e[1]}));r.push([e.id,".btns{position:relative;top:1px;transform:scale(-1)}.fades-enter-active,.fades-leave-active{transition:1s ease}.fades-enter-from,.fades-leave-to{opacity:0;transform:scaleX(0);width:0}",""]);const a=r},1178:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});var n=s(821),r=(0,n._)("h3",{class:"font-bold mb-4 xl:text-xl md:text-md text-gray-600"}," Available legs ",-1),a={class:"flex text-center justify-between -mr-2"},l=["onClick"],o={class:"xl:h-28 md:h-24 flex items-center justify-center"},i=["src"],d={class:"xl:text-sm md:text-xs"},u=(0,n._)("h3",{class:"font-bold mb-1 xl:text-xl md:text-md xl:mt-6 md:mt-4 text-gray-600"}," Standing desk material ",-1),c={key:0,src:"/images/true.png",class:"w-4 -m-1 -mt-2 absolute top-0 right-0 z-20"},m=["onClick","innerHTML"],f={key:0,class:"flex flex-wrap -mr-2 md:mt-2"},g=["title","onClick"],p=["src","title"],h={class:"text-center mb-1 uppercase"},k={class:"xl:pb-8 md:pb-4"},w=(0,n._)("h3",{class:"font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600"}," Choose the leg color ",-1),x={class:"flex flex-wrap -mr-2"},b=["onClick"];var v=s(7757),y=s.n(v),_={class:"flex justify-between items-center"},C=[(0,n._)("img",{src:"/images/leftang.png",class:"w-2/3 btns"},null,-1)],D={class:"overflow-hidden flex-grow py-3"},T=[(0,n._)("img",{src:"/images/leftang.png",class:"w-2/3"},null,-1)];const M={props:["itemCount"],data:function(){return{prosent:0,endItem:null}},computed:{transform:function(){return{transform:"translateX(".concat(this.prosent,"%)")}}},mounted:function(){var e=this.$refs.mainBlock.children.length-this.itemCount;this.endItem=100*-e/this.itemCount},methods:{next:function(){this.endItem<this.prosent&&(this.prosent+=-100/this.itemCount)},prev:function(){this.prosent<0&&(this.prosent+=100/this.itemCount)}}};var $=s(3379),I=s.n($),j=s(8094),q={insert:"head",singleton:!1};I()(j.Z,q);j.Z.locals;var H=s(3744);function L(e,t,s,n,r,a,l){try{var o=e[a](l),i=o.value}catch(e){return void s(e)}o.done?t(i):Promise.resolve(i).then(n,r)}const W={data:function(){return{imagearr:null,folderImages:null,deskMaterials:[],events:Engine.Legs}},mounted:function(){var e=this;scene.onReadyObservable.add((function(){var t=Engine.textures.folders;e.folderImages=t.images,e.imagearr=e.folderImages[store.state.params.deskMaterial],e.assignTextures(store.state.params.legType)}))},methods:{deskFolder:function(e){var t=this;this.imagearr=null,setTimeout((function(){t.imagearr=t.folderImages[e],store.state.params.deskMaterial=e}),100)},assignTextures:function(e){var t,s=this;return(t=y().mark((function t(){var n,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.deskMaterials=0,t.next=3,store.dispatch("deskTextures");case 3:n=t.sent,r=n.folders,s.deskMaterials=r,[["desks/bamboo","desks/solidedge"],[],["desks/bamboo","desks/solidedge","desks/pyledge"],["desks/bamboo","desks/solidedge"],["desks/bamboo","desks/solidedge"]][e-1].forEach((function(e){var t=null;s.deskMaterials.find((function(s,n){s.path==e&&(t=n)})),s.deskMaterials.splice(t,1)}));case 8:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(n,r){var a=t.apply(e,s);function l(e){L(a,n,r,l,o,"next",e)}function o(e){L(a,n,r,l,o,"throw",e)}l(void 0)}))})()}},components:{Caruosel:(0,H.Z)(M,[["render",function(e,t,s,r,a,l){return(0,n.wg)(),(0,n.iD)("section",_,[(0,n.Wm)(n.uT,{name:"fades",mode:"out-in"},{default:(0,n.w5)((function(){return[0!=a.prosent?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=function(){return l.prev&&l.prev.apply(l,arguments)}),class:"w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},C)):(0,n.kq)("",!0)]})),_:1}),(0,n._)("aside",D,[(0,n._)("main",{ref:"mainBlock",style:(0,n.j5)(l.transform),class:(0,n.C_)([{"-ml-2":0==a.prosent},"whitespace-nowrap easy-transition"])},[(0,n.WI)(e.$slots,"default")],6)]),(0,n.Wm)(n.uT,{name:"fades",mode:"out-in"},{default:(0,n.w5)((function(){return[a.prosent!=a.endItem?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[1]||(t[1]=function(){return l.next&&l.next.apply(l,arguments)}),class:"w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},T)):(0,n.kq)("",!0)]})),_:1})])}]])}},Z=(0,H.Z)(W,[["render",function(e,t,s,v,y,_){var C=(0,n.up)("Caruosel");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("main",null,[r,(0,n._)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.$store.state.legTypes,(function(t,s){return(0,n.wg)(),(0,n.iD)("aside",{key:s,onClick:function(e){return y.events.setLegType(s+1,_.deskFolder,y.events.setDeskMaterial,_.assignTextures)},class:"w-1/5 pr-2 cursor-pointer"},[(0,n._)("section",{class:(0,n.C_)([{"border-myblue":e.$store.state.params.legType==s+1},"p-2 pt-1 overflow-hidden rounded-xl border bg-white"])},[(0,n._)("main",o,[(0,n._)("img",{src:t.img,class:"w-10/12"},null,8,i)]),(0,n._)("div",d,(0,n.zw)(t.name),1)],2)],8,l)})),128))]),u,(0,n.Wm)(n.uT,{name:"fade",mode:"in-out"},{default:(0,n.w5)((function(){return[y.deskMaterials.length>0?((0,n.wg)(),(0,n.j4)(C,{key:0,itemCount:4,class:"text-md text-center text-gray-600"},{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.deskMaterials,(function(t){return(0,n.wg)(),(0,n.iD)("main",{key:t,class:"w-1/4 inline-block align-middle px-2 relative"},[e.$store.state.params.activeFolder==t.path?((0,n.wg)(),(0,n.iD)("img",c)):(0,n.kq)("",!0),(0,n._)("button",{onClick:function(e){return _.deskFolder(t.path)},class:(0,n.C_)([{"bg-my text-white":e.$store.state.params.deskMaterial==t.path},"xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"]),innerHTML:t.text},null,10,m)])})),128))]})),_:1})):(0,n.kq)("",!0)]})),_:1}),(0,n.Wm)(n.uT,{name:"fade",mode:"in-out"},{default:(0,n.w5)((function(){return[y.imagearr?((0,n.wg)(),(0,n.iD)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.imagearr,(function(t,s){return(0,n.wg)(),(0,n.iD)("aside",{class:"w-1/5 pr-2",key:s},[(0,n._)("main",{title:s,onClick:function(e){return y.events.setDeskMaterial(t.path)},class:"xl:h-32 md:h-20 cursor-pointer"},[(0,n._)("img",{class:(0,n.C_)([{"shadow-blue":e.$store.state.params.deskimage==t.path},"border-2 border-white rounded-md object-cover w-full h-full"]),src:"/floors/".concat(t.path),title:t.path},null,10,p)],8,g),(0,n._)("p",h,(0,n.zw)(t.file),1)])})),128))])):(0,n.kq)("",!0)]})),_:1})]),(0,n._)("main",k,[w,(0,n._)("div",x,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,(function(t){return(0,n._)("aside",{key:t,class:"w-1/5 pr-2"},[(0,n._)("main",{onClick:function(e){return y.events.setLegColor(t)},class:"xl:h-32 md:h-20"},[1==t?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,n.C_)([{"shadow-blue border-2 border-white":e.$store.state.params.legColor==t},"w-full h-full bg-white border border-gray rounded-md"])},null,2)):(0,n.kq)("",!0),2==t?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,n.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-gray-400 border-2 border-white rounded-md"])},null,2)):(0,n.kq)("",!0),3==t?((0,n.wg)(),(0,n.iD)("div",{key:2,class:(0,n.C_)([{"shadow-blue":e.$store.state.params.legColor==t},"w-full h-full bg-black border-2 border-white rounded-md"])},null,2)):(0,n.kq)("",!0)],8,b)])})),64))])])])}]])}}]);