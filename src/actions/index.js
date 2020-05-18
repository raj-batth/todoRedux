export const addTodo = (payload) => {
    return {
        type: 'ADD',
        payload: payload
    }
}
export const delTodo = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}
export const markTodo = (id) => {
    return {
        type: 'MARK_COMPLETED',
        payload: id
    }
}
export const updateSearchParam = (query) => {
    return {
        type: 'SET_QUERY_PARAM',
        payload: query
    }
}
