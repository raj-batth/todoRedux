const searchQuery = (state = 'all', action) => {
    switch (action.type) {
        case 'SET_QUERY_PARAM':
            return state = action.payload;
        default:
            return state;
    }
}

export default searchQuery;