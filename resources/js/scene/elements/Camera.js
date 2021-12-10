class Camera{
    constructor(canvas) {
        this.creataCamera(canvas)
    }
    //called in constructor
    creataCamera(canvas) {
        const camera = new BABYLON.ArcRotateCamera("camera", -4.375, 1.579, 15, new BABYLON.Vector3(0, 20, 0));
        camera.attachControl(canvas, false);
        // camera.inputs.attached.mousewheel.wheelPrecision = 100;
        // camera.inputs.attached.pointers.buttons = [1, 2]
        this.camera = camera
    }
}
export default Camera;