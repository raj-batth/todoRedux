import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { delTodo, markTodo } from "../actions";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const getStyle = () => {
        return {
            textDecoration: props.completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            marginTop: '5px',
            borderBottem: '1px #cc dotted',
            fontSize: '16px',
        }
    }
    const delTodoClick = (id) => {
        dispatch(delTodo(id));
    }
    const markComplete = (id) => {
        dispatch(markTodo(id));
    }
    return (
        <>
            {/* {console.log(props.completed)} */}
            <div style={getStyle()} >
                <p style={{ display: 'flex' }}>
                    <span style={{ flex: '10', padding: '10px', textAlign: 'left' }}>
                        {props.title}({props.completed})</span>
                    <button onClick={markComplete.bind(this, props.id)} style={btnCheckStyle}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={delTodoClick.bind(this, props.id)} style={btnStyle}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </p>
            </div >
        </>
    );
}

const btnStyle = {
    background: '#ee7455',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',

}
const btnCheckStyle = {
    background: '#79C27B',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',
}




export default TodoItem
