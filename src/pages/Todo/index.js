import React, { useEffect, useState } from 'react'
import { TodoList } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../actions';

const Todo = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)

  

  useEffect(() => {
    dispatch(fetchTodos())
  },[])

  return (
    <>
    <h1>Todo</h1>
      <TodoList todos={todos}/>
    </>
  );
};

export default Todo