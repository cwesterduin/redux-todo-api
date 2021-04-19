import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoSolo = () => {
  const { id } = useParams();
  const pageTodo = useSelector((state) => state.find((todo) => todo.id == id));
  return pageTodo ? (
    <>
      <h1>Todo: {id}</h1>
      <h2>{pageTodo.title}</h2>
      <p>{pageTodo.body}</p>
    </>
  ) : (
    <h1>404 - ToDo not found</h1>
  );
};

export default TodoSolo;
