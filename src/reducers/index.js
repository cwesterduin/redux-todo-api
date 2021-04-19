const todoState = (state=[], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.payload])
      case 'TOGGLE_TODO':
        const newToggleState = [...state]
        const todoToToggle = newToggleState.find(todo => todo.id === action.payload)
        todoToToggle.completed = !todoToToggle.completed
        return newToggleState
      case 'DELETE_TODO':
        const newDeleteState = [...state]
        const todoToDelete = newDeleteState.findIndex(todo => todo.id === action.payload)
        newDeleteState.splice(todoToDelete, 1)
        return newDeleteState
      case 'EDIT_TODO':
         const newEditState = [...state]
         const todoToEdit = newEditState.findIndex(todo => todo.id === action.payload.id)
         const todoCompletedVal = newEditState.find(todo => todo.id === action.payload.id).completed
         newEditState[todoToEdit] = {...action.payload, completed: todoCompletedVal}
         return newEditState    
      default:
        return state
    }
  }

  export default todoState;