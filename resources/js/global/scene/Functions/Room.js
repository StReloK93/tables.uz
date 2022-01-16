export default class Room {
    wallColorChanger(wallName) {
        const colorOne = store.state.params.wallColor
        const colorTwo = store.state.params.mainWallColor
        var material = scene.getMaterialByName(wallName)
        if (wallName == 'wall') {
            material.albedoColor = BABYLON.Color3.FromHexString(colorOne).toLinearSpace()
        }
        else {
            material.albedoColor = BABYLON.Color3.FromHexString(colorTwo).toLinearSpace()
        }
    }

    JoinColorChanger() {
        const colorOne = store.state.params.wallColor
        store.state.params.mainWallColor = colorOne

        let wall = scene.getMaterialByName('wall')
        let mainWall = scene.getMaterialByName('mainWall')
        wall.albedoColor = BABYLON.Color3.FromHexString(colorOne).toLinearSpace()
        mainWall.albedoColor = BABYLON.Color3.FromHexString(colorOne).toLinearSpace()
    }

    floorImage(textureName) {
        store.state.params.floor = textureName
        scene.getMaterialByName('floor').albedoTexture = scene.getTextureByName(textureName)
    }
}