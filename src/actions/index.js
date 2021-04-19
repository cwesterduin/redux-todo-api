export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/todos')
            const data = await res.json()
            let newTodosArray = data.todos.map(todo => ({ id: todo.id, title: todo.title, body: todo.body, completed: todo.completed}))
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

export const addTodo = (content) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: content.title, body: content.body})
            }
            const res = await fetch('http://localhost:3000/todos', options)
            const data = await res.json()
            let newTodo = data
            dispatch({
                type: 'ADD_TODO',
                payload: newTodo
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'DELETE',
            }
            await fetch(`http://localhost:3000/todos/${id}`, options)
            dispatch({
                type: 'DELETE_TODO',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}


export const toggleTodo = (id) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'PATCH',
            }
            await fetch(`http://localhost:3000/todos/${id}/toggle`, options)
            dispatch({
                type: 'TOGGLE_TODO',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export const editTodo = (content) => {
    return async (dispatch) => {
        try {
            const id = content.id
            console.log(content.title, content.body)
            const options = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: content.title, body: content.body})
            }
            await fetch(`http://localhost:3000/todos/${id}`, options)
            dispatch({
                type: 'EDIT_TODO',
                payload: content
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}