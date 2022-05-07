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

         
         const plintus = scene.getMaterialByName('plintus')
         plintus.albedoColor = new BABYLON.Color3(0.6, 0.6, 0.6)

         const glass = scene.getMaterialByName('glass')
         glass.alphaMode = 3
         glass._transparencyMode = 3
         glass.alpha = 0.4
         const imageWood = scene.getMaterialByName('image black')
         imageWood.albedoTexture.level = 0.5


         const twoLegLeft = scene.getMaterialByName('twoLegLeft')
         twoLegLeft.albedoTexture.level = 1.4

         const twoLegRight = scene.getMaterialByName('twoLegRight')
         twoLegRight.albedoTexture.level = 1.4
         
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