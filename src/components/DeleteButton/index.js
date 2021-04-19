import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../actions";

const DeleteButton = ({ todoId }) => {
    const dispatch = useDispatch();

    function handleClick(){
        if (confirm('are you sure?')) {
            // Save it!
            dispatch(deleteTodo(todoId))
          } else {
            // Do nothing!
          }
    }

    return (
        <button onClick={handleClick}>🗑</button>
    )
}

export default DeleteButton
