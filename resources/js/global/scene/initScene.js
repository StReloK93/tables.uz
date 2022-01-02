import Scene from './elements/Scene'
import Camera from './elements/Camera'
import Light from './elements/Light'
import Textures from './elements/Textures'
import Meshes from './elements/Meshes'
function initScene(canvas){
   return {
      scene: new Scene(canvas),
      camera: new Camera(canvas),
      light: new Light(),
      textures: new Textures(),
      Meshes: new Meshes()
   }
}

export default initScene