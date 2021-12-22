class Scene {
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()
      this.sceneOnload()
      window.onload = function(){
         console.log('Lolo Pepe Onload');
      }
      scene.executeWhenReady(() => { 
         console.log('its My Life');
      });
   }

   createScene(canvas) {
      const engine = new BABYLON.Engine(canvas)
      window.scene = new BABYLON.Scene(engine)
      //adaptive resize
      engine.runRenderLoop(() => { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

   sceneOnload(){
      scene.onReadyObservable.add(()=>{
         //Default texturani urnatadi
         store.commit('floorImage', {scene: scene,textureName: 'floor1'})

         //Default Stolni urnatadi
         let defaultLeg = 2
         store.commit('setLegType', defaultLeg)
         store.state.onLoaded = true
      })
   }
   

   expansion(){
      scene.getTextureByName = (name)=>{
         return scene.textures.find(texture => texture.name === name)
      }
   }
}

export default Scene