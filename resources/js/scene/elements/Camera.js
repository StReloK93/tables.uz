class Camera{
    constructor(canvas) {
        this.creataCamera(canvas)
    }
    //called in constructor
    creataCamera(canvas) {
        const camera = new BABYLON.ArcRotateCamera("camera", -5.257, 1.489, 14.999, new BABYLON.Vector3(-3.938, 10.611, -14.277));
        camera.attachControl(canvas, false);
        // camera.inputs.attached.mousewheel.wheelPrecision = 100;
        // camera.inputs.attached.pointers.buttons = [1, 2]
        this.camera = camera
    }
}
export default Camera;