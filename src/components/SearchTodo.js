import React from 'react';

import { useDispatch } from 'react-redux';
import { updateSearchParam } from '../actions'


const SearchTodo = () => {
    const dispatch = useDispatch();
    const change = (e) => {
        dispatch(updateSearchParam(e.target.value));
    }
    return (
        <div className="select">
            <select id="todos" className="filter-todo" onChange={change}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not-Completed</option>
            </select>

        </div>
    );
}




export default SearchTodo
