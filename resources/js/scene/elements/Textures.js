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
      const images = await store.dispatch('textures')
      
      images.forEach((imagepath, i) => {
         this.newTexture(`floor${i+1}`, `/textures/${imagepath}`)
      });
   }
}
export default Textures;