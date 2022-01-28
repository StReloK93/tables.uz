export default class Customization{
    setGrommet(index){
        if(index == store.state.custom.grommet){
            return store.state.custom.grommet = 0
        }
        store.state.custom.grommet = index
    }
}