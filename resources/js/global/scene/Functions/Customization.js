export default class Customization {
    setter(index,type){
        if (index == store.state.custom[type]) {
            return store.state.custom[type] = null
        }
        store.state.custom[type] = index
    }

    setCorner(indexCorners) {
        store.state.custom.corners = indexCorners

        if (store.state.params.activeFolder == 'desks/bamboo') {
            var ArraySharpes = [
                //sharp
                ['oneTable', 'twoTableBambuk', 'threeTableRight', 'threeTableLeft', 'fourTable', 'fiveTable'],
                //circle
                ['oneTableCircle', 'twoTableBambukCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourTableCircle', 'fiveTableCircle'],
                //rounded
                ['oneTableRounded', 'twoTableBambukRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourTableRounded', 'fiveTableRounded'],
                ['twoTable', 'twoTableCircle', 'twoTableRounded', 'oneTableTrad', 'oneTabletradCircle', 'oneTableRounded']
            ]
        }
        else if (store.state.params.activeFolder == 'desks/solidedge') {
            var ArraySharpes = [
                //sharp
                ['oneTable', 'twoLiveEdge', 'threeTableRight', 'threeTableLeft', 'fourLiveEdge', 'fiveTable'],
                //circle
                ['oneTableCircle', 'twoLiveEdgeCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourLiveEdgeCircle', 'fiveTableCircle'],
                //rounded
                ['oneTableRounded', 'twoLiveEdgeRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourLiveEdgeRounded', 'fiveTableRounded'],
                ['twoTableBambuk', 'twoTableBambukCircle', 'twoTableBambukRounded', 'twoTable', 'fourTable', 'oneTableTrad', 'oneTabletradCircle', 'oneTableRounded']
            ]
        }
        else if (store.state.params.activeFolder == 'desks/solidtraditional') {
            var ArraySharpes = [
                //sharp
                ['oneTableTrad', 'twoLiveEdge', 'threeTableRight', 'threeTableLeft', 'fourLiveEdge', 'fiveTable'],
                //circle
                ['oneTabletradCircle', 'twoLiveEdgeCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourLiveEdgeCircle', 'fiveTableCircle'],
                //rounded
                ['oneTabletradRounded', 'twoLiveEdgeRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourLiveEdgeRounded', 'fiveTableRounded'],
                ['twoTableBambuk', 'twoTableBambukCircle', 'twoTableBambukRounded', 'twoTable', 'fourTable', 'oneTable', 'oneTableCircle', 'oneTableRounded']
            ]
        }
        else {
            var ArraySharpes = [
                //sharp
                ['oneTable', 'twoTable', 'threeTableRight', 'threeTableLeft', 'fourTable', 'fiveTable'],
                //circle
                ['oneTableCircle', 'twoTableCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourTableCircle', 'fiveTableCircle'],
                //rounded
                ['oneTableRounded', 'twoTableRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourTableRounded', 'fiveTableRounded'],
            ]
        }

        ArraySharpes.forEach((element, index) => {
            element.forEach(tables => {
                if (index == indexCorners - 1) {
                    const mesh = scene.getNodeByName(tables)
                    mesh.setEnabled(true)
                }
                else {
                    const mesh = scene.getNodeByName(tables)
                    mesh.setEnabled(false)
                }
            });
        })
    }
}