export default class Customization {
    setter(index,type){
        if (index == store.state.custom[type]) {
            return store.state.custom[type] = null
        }
        store.state.custom[type] = index
    }
}
