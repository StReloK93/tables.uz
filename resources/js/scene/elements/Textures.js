class Textures {
   constructor() {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
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
         this.AllAmbientWhite() //Scenadagi Hamma Elementlarni Ambientni oq rang qiladi
         this.AmbientTexture(this._AmbientTextures) //Material va textura path korsatilgan
         this.NormalTexture(this._NormalTextures) //Material va textura path korsatilgan
         this.AlbedoTexture(this._AlbedoTextures) //Material va textura path korsatilgan
      })
   }

   allTextures() {
      var datas = this._TextureData
      store.dispatch('textures').then(images => {
         images.forEach((imagepath, i) => {
            var texture = this.newTexture(`floor${i + 1}`, `/floors/${imagepath}`)
            texture.uScale = datas[i].uScale
            texture.vScale = datas[i].vScale
            texture.wAng = datas[i].wAng
         });
      })
   }

   AllAmbientWhite() {
      scene.ambientColor = BABYLON.Color3.FromHexString('#CAC1C1')
      scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1, 1, 1)
      });
   }

   AmbientTexture(array) {
      for (let i = 0; i < array.length; i++) {
         let newTexture = new BABYLON.Texture(array[i].texturePath, scene)
         newTexture.uAng = Math.PI

         var material = scene.getMaterialByName(array[i].materialName)
         material.ambientTexture = newTexture

         newTexture.onLoadObservable.add(() => {
            console.log('AmbientTexture');
         });
      }
   }

   NormalTexture(materials) {
      for (let i = 0; i < materials.length; i++) {
         let newTexture = new BABYLON.Texture(materials[i].texturePath, scene)
         newTexture.uScale = materials[i].uScale
         newTexture.vScale = materials[i].vScale
         newTexture.level = materials[i].level

         var material = scene.getMaterialByName(materials[i].materialName)
         material.bumpTexture = newTexture

         newTexture.onLoadObservable.add(() => {
            console.log('NormalTexture');
         });
      }
   }

   AlbedoTexture(materials) {
      for (let i = 0; i < materials.length; i++) {
         let newTexture = new BABYLON.Texture(materials[i].texturePath, scene);
         newTexture.uScale = materials[i].uScale
         newTexture.vScale = materials[i].vScale
         newTexture.level = materials[i].level

         let material = scene.getMaterialByName(materials[i].materialName)
         material.albedoTexture = newTexture;

         newTexture.onLoadObservable.add(() => {
            console.log('AlbedoTexture');
         });
      }
   }

   _TextureData = [
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 2.5, vScale: 3, wAng: Math.PI / 2 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
   ]


   _AmbientTextures = [
      //room
      new Texture({ materialName: 'mainWall', texturePath: '/textures/wall.jpg' }),
      new Texture({ materialName: 'wallTop', texturePath: '/textures/wall.jpg' }),
      new Texture({ materialName: 'wall', texturePath: '/textures/wall.jpg' }),
      new Texture({ materialName: 'plintus', texturePath: '/textures/plintus.jpg' }),
      new Texture({ materialName: 'floor', texturePath: '/textures/floor.jpg' }),
      new Texture({ materialName: 'podokolnik', texturePath: '/textures/podokolnik.jpg' }),
      //Legs
      new Texture({ materialName: 'oneLeg', texturePath: '/textures/oneLeg.jpg' }),
      new Texture({ materialName: 'twoLeg', texturePath: '/textures/twoLeg.jpg' }),
      new Texture({ materialName: 'threeLegLeft', texturePath: '/textures/threeLegLeft.jpg' }),
      new Texture({ materialName: 'threeLegRight', texturePath: '/textures/threeLegRight.jpg' }),
      new Texture({ materialName: 'fourLeg', texturePath: '/textures/fourLeg.jpg' }),
      new Texture({ materialName: 'fiveLeg', texturePath: '/textures/fiveLeg.jpg' }),
      //Tables
      new Texture({ materialName: 'oneTable', texturePath: '/textures/oneTable.jpg' }),
      new Texture({ materialName: 'twoTable', texturePath: '/textures/twoTable.jpg' }),
      new Texture({ materialName: 'threeTable', texturePath: '/textures/threeTable.jpg' }),
      new Texture({ materialName: 'fourTable', texturePath: '/textures/fourTable.jpg' }),
      new Texture({ materialName: 'fiveTable', texturePath: '/textures/fiveTable.jpg' }),
      new Texture({ materialName: 'fiveShkafEshik', texturePath: '/textures/fiveShkafEshik.jpg' }),
      new Texture({ materialName: 'fiveShkaf', texturePath: '/textures/fiveShkaf.jpg' }),
      //Stul
      new Texture({ materialName: 'stulback', texturePath: '/textures/stulback.jpg' }),
      new Texture({ materialName: 'stulbottom', texturePath: '/textures/stulbottom.jpg' }),
      new Texture({ materialName: 'stulLeg', texturePath: '/textures/stulLeg.jpg' }),
      //Decorations
      new Texture({ materialName: 'monitormain', texturePath: '/textures/monitormain.jpg' }),
      new Texture({ materialName: 'lampwood', texturePath: '/textures/lampwood.jpg' }),
      new Texture({ materialName: 'plantMain', texturePath: '/textures/plantMain.jpg' }),
      new Texture({ materialName: 'tumbochka', texturePath: '/textures/tumbochka.jpg' })
   ]

   _NormalTextures = [
      new Texture({ materialName: 'wall', texturePath: '/textures/normalwall.jpg', uScale: 15, vScale: 15, level: 0.75 }),
      new Texture({ materialName: 'mainWall', texturePath: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
      new Texture({ materialName: 'wallTop', texturePath: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
      new Texture({ materialName: 'stulback', texturePath: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
      new Texture({ materialName: 'stulbottom', texturePath: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
   ]

   _AlbedoTextures = [
      new Texture({ materialName: 'oneTable', texturePath: '/textures/laminate/cw115.jpg' }),
      new Texture({ materialName: 'twoTable', texturePath: '/textures/laminate/cw115.jpg' }),
      new Texture({ materialName: 'threeTable', texturePath: '/textures/laminate/cw115.jpg', uScale: 2, vScale: 2 }),
      new Texture({ materialName: 'fourTable', texturePath: '/textures/laminate/cw115.jpg', uScale: 2, vScale: 2 }),
      new Texture({ materialName: 'fiveTable', texturePath: '/textures/laminate/cw115.jpg' }),
   ]
}

class Texture {
   constructor({ materialName = null, texturePath = null, uScale = 1, vScale = 1, level = 1 }) {
      this.materialName = materialName
      this.texturePath = texturePath
      this.uScale = uScale
      this.vScale = vScale
      this.level = level
   }
}

export default Textures