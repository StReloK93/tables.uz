export default class Room {
    ColorChanger() {
        const colorOne = store.state.params.wallColor

        let wall = scene.getMaterialByName('wall')
        wall.albedoColor = BABYLON.Color3.FromHexString(colorOne).toLinearSpace()
    }

    floorImage(textureName) {
        store.state.params.floor = textureName
        scene.getMaterialByName('floor').albedoTexture = scene.getTextureByName(textureName)
    }
}