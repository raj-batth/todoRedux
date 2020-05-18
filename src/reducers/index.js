import { combineReducers } from "redux";
import searchQuery from "./searchquery";
import todosReducer from "./todos";

const allReducers = combineReducers({
    searchQuery,
    todos: todosReducer
});

export default allReducers;