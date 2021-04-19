import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../actions";
import { NavLink } from "react-router-dom";
import { DeleteButton, AddTodo } from ".."

const Todo = ({ title, body, completed, todoId }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(toggleTodo(todoId));
  }
  return !editing ? (
    <tr>
      <td>
        <DeleteButton todoId={todoId} />
        <button onClick={() => setEditing((e) => !e)}>✎</button>
        {title}
        <NavLink style={{ float: "right" }} to={`/todo/${todoId}`}>
          more...
        </NavLink>
      </td>
      <td>{body}</td>
      <td>
        <input type="checkbox" checked={completed} onChange={handleCheck} />
      </td>
    </tr>
  ) : (
    <AddTodo edit={{title, body, todoId, setEditing}} />
  );
};

export default Todo;
