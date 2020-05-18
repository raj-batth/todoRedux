import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from "../actions";
import { useDispatch } from "react-redux";
const AddTodo = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const onChange = (e) => {
        setTitle(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        dispatch(addTodo({ id: id, title: title, completed: false }));
        setTitle('');
    }
    return (
        <div className="toDoForm">
            <form onSubmit={onSubmit} style={formStyle}>
                <p style={{ backgroundColor: ' #fff', padding: '5px', width: '100%' }}>
                    <input
                        className="toDoInputBox"
                        type="text"
                        name="title"
                        placeholder="Add Todo .."
                        value={title}
                        onChange={onChange}
                        required
                    >
                    </input>
                    <button
                        type="submit" style={btnStyle}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </p>
            </form>
        </div>
    );
}




const formStyle = {
    display: 'flex'
}

const btnStyle = {
    background: '#ee7455',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    margin: '5px',
    cursor: 'pointer',
    float: 'right'

}
export default AddTodo
