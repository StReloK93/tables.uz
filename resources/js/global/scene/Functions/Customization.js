export default class Customization {
    setter(index,type){
        if (index == store.state.custom[type]) {
            return store.state.custom[type] = null
        }
        store.state.custom[type] = index
    }

    setCorner(indexCorners) {
        store.state.custom.corners = indexCorners
        console.log(indexCorners);
    }
}

// ArraySharpes.forEach((element, index) => {
//     element.forEach(tables => {
//         if (index == indexCorners - 1) {
//             const mesh = scene.getNodeByName(tables)
//             mesh.setEnabled(true)
//         }
//         else {
//             const mesh = scene.getNodeByName(tables)
//             mesh.setEnabled(false)
//         }
//     });
// })