export default (state=0, action) => {
    switch(action.type) {
        case "ADD" :
        return state + 1
        case "Reduce":
            return state - 1
        default:
            return state
    }
}