import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todosS = useSelector(state => state.todos);
  const searchParam = useSelector(state => state.searchQuery)
  return (
    <>
      {todosS.map((todo, i) => {
        if (searchParam === 'completed' && todo.completed === true) {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
        else if (searchParam === 'notCompleted' && todo.completed === false) {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
        else if (searchParam === 'all') {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
        // return <TodoItem key={i} id={todo.id} title={todo.title} completed={false} />

      })}
    </>
  );

}

export default Todos;
