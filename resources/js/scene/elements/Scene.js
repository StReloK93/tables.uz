class Scene {
   constructor(canvas) {
      this.createScene(canvas)
      this.expansion()
      this.sceneOnload()

      scene.executeWhenReady(() => { 
         //kogda vse zagrujona
      });
   }

   createScene(canvas) {
      const engine = new BABYLON.Engine(canvas)
      window.scene = new BABYLON.Scene(engine)
      //adaptive resize
      engine.runRenderLoop(() => { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

   AllAmbientWhite(){
      scene.ambientColor = BABYLON.Color3.FromHexString('#CAC1C1')
      
      scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1,1,1)
      });
   }

   UseSkyBox(meshes){
      var reflectionTexture = new BABYLON.HDRCubeTexture("./textures/allhdr.hdr", scene, 128, false, true, false, true);
      for (let i = 0; i < meshes.length; i++) {
         var material = scene.getMaterialByName(meshes[i])
         material.backFaceCulling = true;
         material.reflectionTexture = reflectionTexture
         material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
      }
   }
   
   AmbientTexture(array){
      for (let i = 0; i < array.length; i++) {
         var material = scene.getMaterialByName(array[i])
         material.ambientTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, scene);
         material.ambientTexture.uAng = Math.PI
      }

      var mainWall = scene.getMaterialByName('mainWall')
      mainWall.ambientTexture = new BABYLON.Texture(`/textures/wall.jpg`, scene);
      mainWall.ambientTexture.uAng = Math.PI
      mainWall.bumpTexture = new BABYLON.Texture(`/textures/normalwall.jpg`, scene);
      mainWall.bumpTexture.uScale = 20
      mainWall.bumpTexture.vScale = 20
      mainWall.bumpTexture.level = 0.75

      var wall = scene.getMaterialByName('wall')
      wall.bumpTexture = new BABYLON.Texture(`/textures/normalwall.jpg`, scene);
      wall.bumpTexture.uScale = 15
      wall.bumpTexture.vScale = 15
      wall.bumpTexture.level = 0.75
   }

   sceneOnload(){
      scene.onReadyObservable.add(()=>{
         this.AllAmbientWhite()
         //Ambient textura qoshiladigan || :: Materiallar kiritiladi
         this.AmbientTexture(['wall','plintus','floor','podokolnik', 'monitormain', 'lampwood', 'plantMain', 'tumbochka','twoLeg','twoTable']) // ambient va lightmap texturalarni ismiga qarab qoshadi
         //Metal yoki clearCoatga Skyboxlar || :: Materiallar kiritiladi
         this.UseSkyBox(['twoLeg', 'fourLeg', 'lampmetal', 'GlobalMetalicSilinder', 'tumbochka', 'floor']) // skybox qoshish

         //Defautl texturani urnatadi
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