import Scene from './elements/Scene'
import Camera from './elements/Camera'
import Light from './elements/Light'
import Textures from './elements/Textures'
import Meshes from './elements/Meshes'
import Customization from './Functions/Customization'
import Size from './Functions/Size'
import Room from './Functions/Room'
import Legs from './Functions/Legs'
function initScene(canvas){
   return {
      scene: new Scene(canvas),
      camera: new Camera(canvas),
      light: new Light(),
      textures: new Textures(),
      Meshes: new Meshes(),

      Customization: new Customization(),
      Legs: new Legs(),
      Room: new Room(),
      Size: new Size(),
   }
}

export default initScene