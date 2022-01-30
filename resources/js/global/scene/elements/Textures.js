class Textures {

   floors = []
   folders = []
   constructor() {
      this._floorTextures()
      this._deskTextures()
      scene.onReadyObservable.add(() => {
         let CountAllTextures = this._AmbientTextures.length + this._NormalTextures.length
         let addProsent = 50 / (CountAllTextures + 1);

         this.AllAmbientWhite(addProsent) //Scenadagi Hamma Elementlarni Ambientni oq rang qiladi
         new ImportTextures({ textureType: 'ambientTexture', materials: this._AmbientTextures, prosent: addProsent })
         new ImportTextures({ textureType: 'bumpTexture', materials: this._NormalTextures, prosent: addProsent })
      })
   }

   _newTexture(name, path) {
      const texture = new BABYLON.Texture(path)
      texture.name = name
      return texture
   }

   _floorTextures() {
      var datas = this._TextureData
      store.dispatch('textures').then(images => {
         images.forEach((imagepath, i) => {
            var texture = this._newTexture(`floor${i + 1}`, `/floors/${imagepath}`)
            texture.uScale = datas[i].uScale
            texture.vScale = datas[i].vScale
            texture.wAng = datas[i].wAng
            this.floors.push({ name: `floor${i + 1}`, path: `/floors/${imagepath}` })
         });
      })
   }

   async _deskTextures() {
      this.folders = await store.dispatch('deskTextures')
      for (const key in this.folders.images) {
         this.folders.images[key].forEach(image => {
            const texture = this._newTexture(image.path, `/floors/${image.path}`)
            if(key == 'desks/melamineglass' || key == 'desks/solidedge'){
               texture.uScale = 1
            }
            else{
               texture.uScale = 2
            }
            texture.vScale = 1
            texture.uAng = Math.PI
         })
      }
   }

   AllAmbientWhite(prosent) {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
      hdr.onLoadObservable.add(() => {
         store.state.onLoaded += prosent
      });
      scene.ambientColor = BABYLON.Color3.FromHexString('#CAC1C1')
      scene.materials.forEach(element => {
         element.ambientColor = new BABYLON.Color3(1, 1, 1)
      });
   }


   _TextureData = [
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 2.5, vScale: 3, wAng: Math.PI / 2 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
      { uScale: 3, vScale: 4, wAng: 0 },
   ]

   _AmbientTextures = [

      //room
      new Texture({ uAng: Math.PI, materialName: 'mainWall', texturePath: '/textures/wall.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'wallTop', texturePath: '/textures/wall.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'wall', texturePath: '/textures/wall.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'plintus', texturePath: '/textures/plintus.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'floor', texturePath: '/textures/floor.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'podokolnik', texturePath: '/textures/podokolnik.jpg' }),
      //Legs
      new Texture({ uAng: Math.PI, materialName: 'oneLeg', texturePath: '/textures/oneLeg.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'twoLeg', texturePath: '/textures/twoLeg.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'threeLegLeft', texturePath: '/textures/threeLegLeft.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'threeLegRight', texturePath: '/textures/threeLegRight.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fourLeg', texturePath: '/textures/fourLeg.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fiveLeg', texturePath: '/textures/fiveLeg.jpg' }),
      //Tables
      new Texture({ uAng: Math.PI, materialName: 'oneTable', texturePath: '/textures/oneTable.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'twoTable', texturePath: '/textures/twoTable.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'solidedge', texturePath: '/textures/solidedge.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'threeTable', texturePath: '/textures/threeTable.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fourTable', texturePath: '/textures/fourTable.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fiveTable', texturePath: '/textures/fiveTable.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fiveShkafEshik', texturePath: '/textures/fiveShkafEshik.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fiveShkaf', texturePath: '/textures/fiveShkaf.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'fiveWhite', texturePath: '/textures/fiveWhite.jpg' }),
      //Stul
      new Texture({ uAng: Math.PI, materialName: 'stulback', texturePath: '/textures/stulback.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'stulbottom', texturePath: '/textures/stulbottom.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'stulLeg', texturePath: '/textures/stulLeg.jpg' }),
      //Decorations
      new Texture({ uAng: Math.PI, materialName: 'monitormain', texturePath: '/textures/monitormain.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'lampwood', texturePath: '/textures/lampwood.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'plantMain', texturePath: '/textures/plantMain.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'tumbochka', texturePath: '/textures/tumbochka.jpg' })
   ]

   _NormalTextures = [
      new Texture({ materialName: 'wall', texturePath: '/textures/normalwall.jpg', uScale: 15, vScale: 15, level: 0.75 }),
      new Texture({ materialName: 'mainWall', texturePath: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
      new Texture({ materialName: 'wallTop', texturePath: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 0.75 }),
      new Texture({ materialName: 'stulback', texturePath: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
      new Texture({ materialName: 'stulbottom', texturePath: '/textures/chair.jpg', uScale: 8, vScale: 8 }),
   ]
}

class Texture {
   constructor({ materialName = null, texturePath = null, uScale = 1, vScale = 1, level = 1, uAng = 0, wAng = 0 }) {
      this.materialName = materialName
      this.texturePath = texturePath
      this.uScale = uScale
      this.vScale = vScale
      this.level = level
      this.uAng = uAng
      this.wAng = wAng
   }
}

class ImportTextures {
   constructor({ textureType, materials, prosent }) {
      for (let i = 0; i < materials.length; i++) {
         //texture Settings
         let newTexture = new BABYLON.Texture(materials[i].texturePath, scene)
         newTexture.uScale = materials[i].uScale
         newTexture.vScale = materials[i].vScale
         newTexture.level = materials[i].level
         newTexture.uAng = materials[i].uAng
         newTexture.wAng = materials[i].wAng


         let material = scene.getMaterialByName(materials[i].materialName)
         material[textureType] = newTexture;

         newTexture.onLoadObservable.add(() => {
            store.state.onLoaded += prosent
         });
      }
   }
}

export default Textures