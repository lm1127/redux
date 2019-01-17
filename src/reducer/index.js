function reducer (state = [], action) {
    switch (action.type) {
        case 'ADD':     
            return [
                ...state,
                {
                    completed: false,
                    text: action.text
                }
            ]
        case "REDUCE":
            return [
                ...state.slice(0,action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index+1)
            ]
        default:
            return state;
    }
}

export default reducer;
