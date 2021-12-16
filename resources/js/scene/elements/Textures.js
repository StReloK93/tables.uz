class Textures{
   constructor() {
      this.allTextures()
      this.sceneOnload()
   }

   newTexture(name,path){
      const texture =  new BABYLON.Texture(path)
      texture.name = name
      return texture
   }

   sceneOnload(){
      scene.onReadyObservable.add(()=>{
         this.AllAmbientWhite()
         //Ambient textura qoshiladigan || :: Materiallar kiritiladi
         this.AmbientTexture(['wall','plintus','floor','podokolnik', 'monitormain', 'lampwood', 'plantMain', 'tumbochka','twoLeg','twoTable']) // ambient va lightmap texturalarni ismiga qarab qoshadi
         //Metal yoki clearCoatga Skyboxlar || :: Materiallar kiritiladi
         this.UseSkyBox(['twoLeg', 'fourLeg', 'lampmetal', 'GlobalMetalicSilinder', 'tumbochka', 'floor']) // skybox qoshish
      })
   }

   async allTextures(){
      //Massiv
      var datas = this.textureData()
      const images = await store.dispatch('textures')
      images.forEach((imagepath, i) => {
         var texture = this.newTexture(`floor${i+1}`, `/textures/${imagepath}`)
         texture.uScale = datas[i].uScale
         texture.vScale = datas[i].vScale
         texture.wAng = datas[i].wAng
      });
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

      var mainWall = scene.getMaterialByName('wallTop')
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

   textureData(){
      return [
         { uScale: 3, vScale: 4, wAng: 0},
         { uScale: 3, vScale: 4, wAng: 0},
         { uScale: 2.5, vScale: 3, wAng: Math.PI/2},
         { uScale: 3, vScale: 4, wAng: 0},
         { uScale: 3, vScale: 4, wAng: 0},
      ]
   }
}
export default Textures;