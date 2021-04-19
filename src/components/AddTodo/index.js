import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, addTodo } from "../../actions";

const AddTodo = ({ newId, edit }) => {
  const [title, setTitle] = useState(edit ? edit.title : "");
  const [body, setBody] = useState(edit ? edit.body : "");
  const dispatch = useDispatch();

  function submitTodo(e) {
    e.preventDefault();
    dispatch(addTodo({ title, body, completed: false, id: newId }));
    setTitle("");
    setBody("");
  }

  function saveTodo(e) {
    e.preventDefault();
    dispatch(editTodo({ title, body, id: newId }));
    edit.setEditing(false)
  }


  return (
    <tr>
      <td>
        {edit && <button onClick={() => edit.setEditing(false)}>x</button>}
        <textarea
          style={{ resize: "vertical", width: "100%", minHeight: "40px" }}
          id="title"
          name="title"
          form="form1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </td>
      <td>
        <textarea
          style={{ resize: "vertical", width: "100%", minHeight: "40px" }}
          id="body"
          name="body"
          form="form1"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </td>
      <td>
        {!edit ? (
          <input
            onClick={(e) => submitTodo(e)}
            type="submit"
            value="submit"
            form="form1"
          />
        ) : (
          <input
            onClick={(e) => saveTodo(e)}
            type="submit"
            value="save"
            form="form1"
          />
        )}
      </td>
    </tr>
  );
};

export default AddTodo;
