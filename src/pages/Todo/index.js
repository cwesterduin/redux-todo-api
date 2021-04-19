import React from 'react'
import { TodoList } from '../../components'
import { useSelector } from 'react-redux'

const Todo = () => {
  const todos = useSelector(state => state)

  return (
    <>
    <h1>Todo</h1>
      <TodoList todos={todos}/>
    </>
  );
};

export default Todo