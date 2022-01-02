class Camera{
    constructor(canvas) {
        this.creataCamera(canvas)
        this.Limits()
    }
    //called in constructor
    creataCamera(canvas) {
        this.camera = new BABYLON.ArcRotateCamera("camera", 2, 1.5, 20, new BABYLON.Vector3(-3.938, 10.611, -14.277));
        this.camera.target = new BABYLON.Vector3(-3.938, 10.611, -14.277)
        this.camera.attachControl(canvas, false);
        this.camera.useBouncingBehavior = true;
        this.camera.useAutoRotationBehavior = true;
        // camera.inputs.attached.mousewheel.wheelPrecision = 100;
        this.camera.inputs.attached.pointers.buttons = [0,1]
    }

    Limits(){
        this.camera.lowerRadiusLimit = 5;
        this.camera.upperRadiusLimit = 50;

        this.camera.lowerAlphaLimit = 0.9;
        this.camera.upperAlphaLimit = 2;

        this.camera.lowerBetaLimit = 1.2;
        this.camera.upperBetaLimit = 1.7;
    }
}
export default Camera;