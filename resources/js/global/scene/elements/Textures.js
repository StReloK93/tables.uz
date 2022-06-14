class Textures {
   floors = []
   folders = []
   constructor() {
      this._floorTextures()
      this._deskTextures()
      new newTexture({ texturePath: '/textures/tores.jpg', uScale: 22, uAng: Math.PI, wAng: Math.PI / 2 })
      scene.onReadyObservable.add(() => {
         let CountAllTextures = this._AmbientTextures.length + this._NormalTextures.length
         let addProsent = 50 / (CountAllTextures + 1);

         const material = scene.getMaterialByName('CtwoTable')
         material.albedoTexture = scene.getTextureByName('desks/laminate/dh111.jpg')
         
         this._AllAmbientWhite(addProsent) //Scenadagi Hamma Elementlarni Ambientni oq rang qiladi
         new ImportTextures({ textureType: 'ambientTexture', materials: this._AmbientTextures, prosent: addProsent })
         new ImportTextures({ textureType: 'bumpTexture', materials: this._NormalTextures, prosent: addProsent })

         
         var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
         skyMaterial.backFaceCulling = false;

         var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
         skybox.material = skyMaterial;
         skybox.material.inclination = 0;

         
         const plintus = scene.getMaterialByName('plintus')
         plintus.albedoColor = new BABYLON.Color3(0.6, 0.6, 0.6)

         const glass = scene.getMaterialByName('windowglass')
         glass.metallic = 1
         glass.roughness = 1
         glass.alphaMode = 3
         glass._transparencyMode = 3
         glass.alpha = 0.2


         const levelsArray = [
            { material: 'image black', level: 0.5 },
            { material: 'plantMain', level: 1.2 },
            { material: 'tumbochka', level: 1.4 },
            { material: 'twoLegLeft', level: 1.4 },
            { material: 'twoLegRight', level: 1.4 },
            { material: 'threeLegLeft', level: 1.3 },
            { material: 'threeLegLeft2', level: 1.6 },
            { material: 'threeLegRight', level: 1.5 },
            { material: 'oneLeg', level: 1.5 },
            { material: 'fourLegLeft', level: 2 },
            { material: 'fourLegRight', level: 2 },
            { material: 'fiveLeg', level: 1.5 },
         ]
         
         

         levelsArray.forEach(item => {
            scene.getMaterialByName(item.material).albedoTexture.level = item.level
         });

      })

   }

   async _floorTextures() {
      const images = await store.dispatch('textures')
      images.forEach((imagepath) => {
         if(imagepath == '3.jpg') new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 1.5, vScale: 1.5 })
         else if(imagepath == '132.jpg') new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 2.5, vScale: 2.5 })
         else if(imagepath == '2.jpg') new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 3, vScale: 3 })
         else if(imagepath == '13.jpg') new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 5, vScale: 5 })
         else if(imagepath == '14.jpg') new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 2, vScale: 2 })

         else  new newTexture({ texturePath: `/floors/${imagepath}`, uScale: 3, vScale: 4 })
         this.floors.push(`/floors/${imagepath}`)
      });
   }

   async _deskTextures() {
      this.folders = await store.dispatch('deskTextures')
      for (const key in this.folders.images) {
         this.folders.images[key].forEach(image => {
            var uScale = 2
            if(image.file == 'M79' || image.file == 'M24') uScale = 1

            const texture = new newTexture({ name: image.path, texturePath: `/floors/${image.path}`, uScale: uScale, vScale: 1, uAng: Math.PI })
            if (key == 'desks/melamineglass' || key == 'desks/solidedge' || key == 'desks/solidtraditional') texture.uScale = 1
            if(image.file == 'M17') {
               texture.vScale = 2
               texture.uScale = 4
            }
         })
      }
   }

   _AllAmbientWhite(prosent) {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
      scene.environmentIntensity = 1
      hdr.onLoadObservable.add(() => {
         store.state.onLoaded += prosent
      });


      const materials = ['wall', 'plantMain', 'image black' , 'tumbochka' , 'Wood stand' , 'oneLeg','twoLegLeft' , 'twoLegRight']

      scene.ambientColor = BABYLON.Color3.FromHexString('#CAC1C1')
      scene.materials.forEach(element => {
         if(materials.includes(element.name) == true) element.ambientColor = new BABYLON.Color3(1, 1, 1)
         else element.ambientColor = new BABYLON.Color3(0, 0, 0)
      });
   }

   _AmbientTextures = [
      //room
      new Texture({ uAng: Math.PI, materialName: 'floor', texturePath: '/textures/floor.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'forGlass', texturePath: '/textures/forGlass.jpg' }),
      new Texture({ uAng: Math.PI, materialName: 'monitormain', texturePath: '/textures/monitormain.jpg' }),
   ]

   _NormalTextures = [
      new Texture({ materialName: 'wall', texturePath: '/textures/normalwall.jpg', uScale: 15, vScale: 15, level: 1 }),
      new Texture({ materialName: 'wallTop', texturePath: '/textures/normalwall.jpg', uScale: 20, vScale: 20, level: 1 }),
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

class newTexture {
   constructor({ name = null, texturePath = null, uScale = 1, vScale = 1, level = 1, uAng = 0, wAng = 0 }) {
      const texture = new BABYLON.Texture(texturePath)
      texture.uScale = uScale
      texture.vScale = vScale
      texture.level = level
      texture.uAng = uAng
      texture.wAng = wAng
      if (name) texture.name = name
      return texture;
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