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