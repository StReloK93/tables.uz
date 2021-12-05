import store from "../../store";

class Textures{
   constructor() {
      this.allTextures()
   }

   newTexture(name,path){
      const texture =  new BABYLON.Texture(path)
      texture.name = name
      return texture
   }

   async allTextures(){
      var datas = this.textureData()
      const images = await store.dispatch('textures')
      images.forEach((imagepath, i) => {
         var texture = this.newTexture(`floor${i+1}`, `/textures/${imagepath}`)
         texture.uScale = datas[i].uScale
         texture.vScale = datas[i].vScale
         texture.wAng = datas[i].wAng
      });
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