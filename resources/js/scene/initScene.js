import Scene from './elements/Scene'
import Camera from './elements/Camera'
import Light from './elements/Light'
function initScene(canvas){
   const engine = {
      scene: new Scene(canvas),
      camera: new Camera(canvas),
      Light: new Light()
   }
   return engine
}

export default initScene