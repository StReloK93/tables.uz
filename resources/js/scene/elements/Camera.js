class Camera{
    constructor(canvas) {
        this.creataCamera(canvas)
    }
    //called in constructor
    creataCamera(canvas) {
        var camera = new BABYLON.ArcRotateCamera("camera", 1.938, 1.227, 2.538, new BABYLON.Vector3(1.215, 1.317, -1.110));
        camera.attachControl(canvas, false);
        camera.inputs.attached.mousewheel.wheelPrecision = 100;
        // camera.inputs.attached.pointers.buttons = [1, 2]
        this.camera = camera
    }
}
export default Camera;