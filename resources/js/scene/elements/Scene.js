class Scene {
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()
      this.sceneOnload()
   }

   createScene(canvas) {
      const engine = new BABYLON.Engine(canvas)
      window.scene = new BABYLON.Scene(engine)
      //adaptive resize
      engine.runRenderLoop(() => { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

   AllAmbientWhite(){
      scene.ambientColor = new BABYLON.Color3(1,1,1)
      scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1,1,1)
      });
   }

   UseSkyBox(meshes){
      for (let i = 0; i < meshes.length; i++) {
         var node = scene.getNodeByName(meshes[i])
         if(node._isMesh){
            var material = node.material
            material.backFaceCulling = true;
            material.reflectionTexture = new BABYLON.CubeTexture("/textures/skybox/skybox", scene);
            material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
         }
         else{
            if(Array.isArray(node._children)){
               node._children.forEach(element => {
                  var material = element.material
                  material.backFaceCulling = true;
                  material.reflectionTexture = new BABYLON.CubeTexture("/textures/skybox/skybox", scene);
                  material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
               });
            }
         }
      }
   }
   
   MaterialLightMap(array){
      for (let i = 0; i < array.length; i++) {
         var material = scene.getMaterialByName(array[i])
         material.useLightmapAsShadowmap = true
         // material.ambientTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, scene);
         // material.ambientTexture.uAng = Math.PI
         material.lightmapTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, scene);
         material.lightmapTexture.uAng = Math.PI
      }
   }

   sceneOnload(){
      scene.onReadyObservable.add(()=>{
         this.AllAmbientWhite()
         // this.MaterialLightMap(['wall','lenolium','floor','podokolnik','legMetal','legMetalBottom','tableMain','image']) // ambient va lightmap texturalarni ismiga qarab qoshadi
         // this.UseSkyBox(['legMetalBottom', 'legMetal']) // skybox qoshish
         store.dispatch('floorImage', {scene: scene,textureName: 'floor1'})
         store.commit('setLegType', {scene: scene, legType: 1})
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