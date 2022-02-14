export default class Customization{
    setGrommet(index){
        if(index == store.state.custom.grommet){
            return store.state.custom.grommet = null
        }
        store.state.custom.grommet = index
    }
    
    setAccessories(index){
        if(index == store.state.custom.accessories){
            return store.state.custom.accessories = null
        }
        store.state.custom.accessories = index
    }

    setChair(path){
        if(path == store.state.custom.chair){
            return store.state.custom.chair = null
        }
        store.state.custom.chair = path
    }

    setPart(index){
        if(index == store.state.custom.partition){
            return store.state.custom.partition = null
        }
        store.state.custom.partition = index
    }
}