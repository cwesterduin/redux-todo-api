export const addTodo = content => ({ type: 'ADD_TODO', payload: content })
export const toggleTodo = id => ({ type: 'TOGGLE_TODO', payload: id })
export const deleteTodo = id => ({ type: 'DELETE_TODO', payload: id })
export const editTodo = content => ({ type: 'EDIT_TODO', payload: content })

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/todos')
            const data = await res.json()
            let newTodosArray = data.todos.map(todo => ({ id: todo.id, title: todo.title, body: todo.body}))
            console.log(newTodosArray)
            dispatch({
                type: 'LOAD_TODOS',
                payload: newTodosArray
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}
