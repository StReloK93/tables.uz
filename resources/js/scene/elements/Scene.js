class Scene {

   constructor(canvas) {
      this.createScene(canvas)
      this.sceneOnload()
      this.AdaptiveWindow()
      
   }

   get(){
      return this.scene
   }

   createScene(canvas) {
      this.engine = new BABYLON.Engine(canvas)
      this.scene = new BABYLON.Scene(this.engine)

      this.scene.getTextureByName = (name)=>{
         return this.scene.textures.find(texture => texture.name === name)
      }

      BABYLON.SceneLoader.ImportMesh("", "./models/", "room.glb", this.scene, function (meshes, particleSystems, skeletons) {
         meshes[0].scaling = new BABYLON.Vector3(20,20,-20)
      })
   }

   AdaptiveWindow() {
      this.engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { this.engine.resize() })
   }

   AllAmbientWhite(){
      this.scene.ambientColor = new BABYLON.Color3(1,1,1)
      this.scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1,1,1)
      });
   }

   UseSkyBox(meshes){
      for (let i = 0; i < meshes.length; i++) {
         var node = this.scene.getNodeByName(meshes[i])
         if(node._isMesh){
            var material = node.material
            material.backFaceCulling = true;
            material.reflectionTexture = new BABYLON.CubeTexture("/textures/skybox/skybox", this.scene);
            material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
         }
         else{
            if(Array.isArray(node._children)){
               node._children.forEach(element => {
                  var material = element.material
                  material.backFaceCulling = true;
                  material.reflectionTexture = new BABYLON.CubeTexture("/textures/skybox/skybox", this.scene);
                  material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
               });
            }
         }
      }
   }
   
   
   MaterialLightMap(array){
      for (let i = 0; i < array.length; i++) {
         var material = this.scene.getMaterialByName(array[i])
         material.useLightmapAsShadowmap = true
         material.ambientTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, this.scene);
         material.lightmapTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, this.scene);
         material.lightmapTexture.uAng = Math.PI
         material.ambientTexture.uAng = Math.PI
      }
   }
   

   sceneOnload(){
      this.scene.onReadyObservable.add(()=>{
         this.AllAmbientWhite()
         this.MaterialLightMap(['wall','lenolium','floor','podokolnik','legMetal','legMetalBottom','tableMain','image']) // ambient va lightmap texturalarni ismiga qarab qoshadi
         this.UseSkyBox(['legMetalBottom', 'legMetal']) // skybox qoshish
         store.dispatch('floorImage', {scene: this.scene,textureName: 'floor1'})
      })
   }
}

export default Scene