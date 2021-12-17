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
      this.AmbientTexture([
         {materialName: 'mainWall', textureName: 'wall'},
         {materialName: 'wallTop', textureName: 'wall'},
         'oneLeg','oneTable','wall','plintus','floor','stulback','stulbottom','stulLeg',
         'podokolnik', 'monitormain', 'lampwood',
         'plantMain', 'tumbochka','twoLeg','twoTable',
         'threeLegLeft', 'threeLegRight', 'threeTable'
      ]) // ambient va lightmap texturalarni ismiga qarab qoshadi

      this.NormalTexture([
         {materialName: 'wall', textureName: 'normalWall', uScale: 15, vScale: 15, level: 0.75},
         {materialName: 'mainWall', textureName: 'normalWall', uScale: 20, vScale: 20, level: 0.75},
         {materialName: 'wallTop', textureName: 'normalWall', uScale: 20, vScale: 20, level: 0.75},
      ])

      //Metal yoki clearCoatga Skyboxlar || :: Materiallar kiritiladi
      this.UseSkyBox(['twoLeg', 'fourLeg','oneLeg','fiveLeg', 'threeLegLeft', 'threeLegRight', 'lampmetal', 'GlobalMetalicSilinder', 'tumbochka', 'floor']) // skybox qoshish
      
   })
   }

   async allTextures(){
      //Massiv
      let datas = this.textureData()
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
         if(typeof array[i] == 'object'){
            var material = scene.getMaterialByName(array[i].materialName)
            material.ambientTexture = new BABYLON.Texture(`/textures/${array[i].textureName}.jpg`, scene);
            material.ambientTexture.uAng = Math.PI
         }
         else{
            var material = scene.getMaterialByName(array[i])
            material.ambientTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, scene);
            material.ambientTexture.uAng = Math.PI
         }
      }
   }

   NormalTexture(materials){
      console.log(materials);
      for (let i = 0; i < materials.length; i++) {
         var material = scene.getMaterialByName(materials[i].materialName)
         material.bumpTexture = new BABYLON.Texture(`/textures/${materials[i].textureName}.jpg`, scene);
         material.bumpTexture.uScale = materials[i].uScale
         material.bumpTexture.vScale = materials[i].vScale
         material.bumpTexture.level = materials[i].level
      }
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