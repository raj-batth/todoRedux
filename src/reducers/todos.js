import { v4 as uuidv4 } from 'uuid'
const todos = [{
    id: uuidv4(),
    title: "working on somenthing",
    completed: false,
},
{
    id: uuidv4(),
    title: "working on somenthing2",
    completed: true,
}]
const todosReducer = (state = todos, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return [...state.filter(todo => todo.id !== action.payload)];
        case 'MARK_COMPLETED':

            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo
            });
        default:
            return state;
    }
};

export default todosReducer;
