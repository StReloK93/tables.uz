import Scene from './elements/Scene'
import Camera from './elements/Camera'
import Light from './elements/Light'
import Textures from './elements/Textures'
function initScene(canvas){
   const engine = {
      scene: new Scene(canvas),
      camera: new Camera(canvas),
      light: new Light(),
      
   }
   engine.textures = new Textures(engine.scene.get())
   return engine
}

export default initScene