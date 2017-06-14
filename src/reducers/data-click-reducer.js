function dataClickReducer(state = [], action) {
    switch (action.type) {
        case 'FIND_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default dataClickReducer;
