class Scene {
   DefautLeg = 2
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()

      scene.onReadyObservable.add(()=>{
         //Default texturani urnatadi
         store.commit('floorImage', {scene: scene,textureName: 'floor1'})

         //Default Stolni urnatadi
         store.commit('setLegType', this.DefautLeg)

         //stol ustidagi textura
         store.commit('setDeskMaterial', store.state.params.deskimage)
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