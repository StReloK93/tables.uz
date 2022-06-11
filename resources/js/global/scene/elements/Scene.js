
class Scene {
   DefaultLeg = 1
   DefaultFloor = '/floors/1.jpg'
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()
      scene.onReadyObservable.add(()=>{
         this.toggleNode('lamp')
         this.toggleNode('monitor')
         // this.toggleNode('image')
         this.toggleNode('chair')
         this.toggleNode('plant')
         this.toggleNode('tumbochka')
         //Default texturani urnatadi
         Engine.Room.floorImage(this.DefaultFloor)

         //Default Stolni urnatadi
         Engine.Legs.setLegType(this.DefaultLeg)

         // Engine.Legs.setDeskMaterial(store.state.params.deskimage)
         Engine.Legs.setLegColor(1)

      })
   }

   toggleNode(node){
      var show = new BABYLON.Vector3(1,1,1)
      var hide = new BABYLON.Vector3(0,0,0)
      //soralgan meshni topamiz
      const mesh = scene.getNodeByName(node)
      if(mesh){
         //storedan tekshiradi
         if(store.state.decor[node]) Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: hide},{frame: 5,value: show}])
         else {
            Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: show},{frame: 5,value: hide}])
         }
         
         //Style ni uzgartiramiz Bor :: Yoq
         store.state.decor[node] = !store.state.decor[node]


         //Kreslo ucganda tanlangan elementni yuqotish uchun
         if(node == 'chair' && store.state.decor[node]) Engine.Meshes.clearActive()

         
      }
   }

   createScene(canvas) {
      const engine = new BABYLON.Engine(canvas)
      window.scene = new BABYLON.Scene(engine)
      //adaptive resize
      engine.runRenderLoop(() => { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

   expansion(){
      scene.getTextureByName = (name)=>{
         return scene.textures.find(texture => texture.name === name)
      }
   }
}

export default Scene