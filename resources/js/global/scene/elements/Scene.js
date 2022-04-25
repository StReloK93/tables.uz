class Scene {
   DefaultLeg = 1
   DefaultFloor = '/floors/1.jpg'
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()
      scene.onReadyObservable.add(()=>{
         //Default texturani urnatadi
         Engine.Room.floorImage(this.DefaultFloor)

         //Default Stolni urnatadi
         Engine.Legs.setLegType(this.DefaultLeg)

         // Engine.Legs.setDeskMaterial(store.state.params.deskimage)
         Engine.Legs.setLegColor(1)

         const glass = scene.getMaterialByName('glass')
         glass.alphaMode = 3
         glass._transparencyMode = 3
         glass.alpha = 0.4
      })
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