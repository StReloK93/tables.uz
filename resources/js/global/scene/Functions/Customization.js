export default class Customization{
    setGrommet(index){
        if(index == store.state.custom.grommet){
            return store.state.custom.grommet = 0
        }
        store.state.custom.grommet = index
    }

    setAccessories(index){
        if(index == store.state.custom.accessories){
            return store.state.custom.accessories = 0
        }
        store.state.custom.accessories = index
    }

    setChair(path){
        if(path == store.state.custom.accessories){
            return store.state.custom.accessories = 0
        }
        store.state.custom.chair = path
    }
}