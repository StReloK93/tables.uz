class Textures {
   constructor() {
      this.allTextures()
      this.sceneOnload()
   }

   newTexture(name, path) {
      const texture = new BABYLON.Texture(path)
      texture.name = name
      return texture
   }

   sceneOnload() {
      scene.onReadyObservable.add(() => {
         this.AllAmbientWhite()
         //Ambient textura qoshiladigan || :: Materiallar kiritiladi
         this.AmbientTexture([
            { materialName: 'mainWall', textureName: 'wall' },
            { materialName: 'wallTop', textureName: 'wall' },
            'oneLeg', 'twoLeg', 'threeLegLeft', 'threeLegRight', 'fourLeg', 'fiveLeg', //legs
            'oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', //tables
            'fiveShkafEshik', 'fiveShkaf',
            'stulback', 'stulbottom', 'stulLeg', //stull
            'wall', 'plintus', 'floor', 'podokolnik',
            'monitormain', 'lampwood', 'plantMain', 'tumbochka', //decoration

         ]) // ambient va lightmap texturalarni ismiga qarab qoshadi

         this.NormalTexture([
            new Texture({ materialName: 'wall', textureName: '/textures/normalwall.jpg', uScale: 15, vScale: 15, level: 0.75 }),
            new Texture({ materialName: 'mainWall', textureName: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
            new Texture({ materialName: 'wallTop', textureName: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
            new Texture({ materialName: 'stulback', textureName: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
            new Texture({ materialName: 'stulbottom', textureName: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
         ])

         this.AlbedoTexture([
            new Texture({ materialName: 'oneTable', textureName: '/textures/laminate/cw115.jpg' }),
            new Texture({ materialName: 'twoTable', textureName: '/textures/laminate/cw115.jpg' }),
            new Texture({ materialName: 'threeTable', textureName: '/textures/laminate/cw115.jpg',uScale: 2, vScale: 2}),
            new Texture({ materialName: 'fourTable', textureName: '/textures/laminate/cw115.jpg',uScale: 2, vScale: 2 }),
            new Texture({ materialName: 'fiveTable', textureName: '/textures/laminate/cw115.jpg' }),
         ])

         //Metal yoki clearCoatga Skyboxlar || :: Materiallar kiritiladi
         this.UseSkyBox(['twoLeg', 'fourLeg', 'oneLeg', 'fiveLeg', 'threeLegLeft', 'threeLegRight', 'lampmetal', 'GlobalMetalicSilinder', 'floor']) // skybox qoshish

      })
   }

   async allTextures() {
      //Massiv
      let datas = this.textureData()
      const images = await store.dispatch('textures')
      images.forEach((imagepath, i) => {
         var texture = this.newTexture(`floor${i + 1}`, `/floors/${imagepath}`)
         texture.uScale = datas[i].uScale
         texture.vScale = datas[i].vScale
         texture.wAng = datas[i].wAng
      });
   }

   AllAmbientWhite() {
      scene.ambientColor = BABYLON.Color3.FromHexString('#CAC1C1')
      scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1, 1, 1)
      });
   }

   UseSkyBox(meshes) {
      //--------HDR udalit
      var reflectionTexture = new BABYLON.HDRCubeTexture("./textures/allhdr.hdr", scene, 128, false, true, false, true);
      for (let i = 0; i < meshes.length; i++) {
         var material = scene.getMaterialByName(meshes[i])
         material.backFaceCulling = true;
         material.reflectionTexture = reflectionTexture
         material.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
      }
   }

   AmbientTexture(array) {
      for (let i = 0; i < array.length; i++) {
         if (typeof array[i] == 'object') {
            var material = scene.getMaterialByName(array[i].materialName)
            material.ambientTexture = new BABYLON.Texture(`/textures/${array[i].textureName}.jpg`, scene);
            material.ambientTexture.uAng = Math.PI
         }
         else {
            var material = scene.getMaterialByName(array[i])
            material.ambientTexture = new BABYLON.Texture(`/textures/${array[i]}.jpg`, scene);
            material.ambientTexture.uAng = Math.PI
         }
      }
   }

   NormalTexture(materials) {
      for (let i = 0; i < materials.length; i++) {
         var material = scene.getMaterialByName(materials[i].materialName)
         material.bumpTexture = new BABYLON.Texture(materials[i].textureName, scene);
         material.bumpTexture.uScale = materials[i].uScale
         material.bumpTexture.vScale = materials[i].vScale
         material.bumpTexture.level = materials[i].level
      }
   }

   AlbedoTexture(materials) {
      for (let i = 0; i < materials.length; i++) {
         var material = scene.getMaterialByName(materials[i].materialName)
         material.albedoTexture = new BABYLON.Texture(materials[i].textureName, scene);
         material.albedoTexture.uScale = materials[i].uScale
         material.albedoTexture.vScale = materials[i].vScale
         material.albedoTexture.level = materials[i].level
      }
   }

   textureData() {
      return [
         { uScale: 3, vScale: 4, wAng: 0 },
         { uScale: 3, vScale: 4, wAng: 0 },
         { uScale: 2.5, vScale: 3, wAng: Math.PI / 2 },
         { uScale: 3, vScale: 4, wAng: 0 },
         { uScale: 3, vScale: 4, wAng: 0 },
      ]
   }
}

class Texture {
   constructor({ materialName = null, textureName = null, uScale = 1, vScale = 1, level = 1 }) {
      this.materialName = materialName
      this.textureName = textureName
      this.uScale = uScale
      this.vScale = vScale
      this.level = level
   }
}

export default Textures;