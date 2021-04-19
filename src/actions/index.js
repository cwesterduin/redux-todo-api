export const addTodo = content => ({ type: 'ADD_TODO', payload: content })
export const toggleTodo = id => ({ type: 'TOGGLE_TODO', payload: id })
export const deleteTodo = id => ({ type: 'DELETE_TODO', payload: id })
export const editTodo = content => ({ type: 'EDIT_TODO', payload: content })

