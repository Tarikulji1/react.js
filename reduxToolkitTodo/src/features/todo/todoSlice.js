import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world!"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // state accessable to initialState variable value
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // or Date.now()
                text: action.payload // payload is object gives text, email, etc
            }
            state.todos.push(todo)
        },
        // removeTodo call to action which generated unique id value then remove value 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text; // update the text of the found todo item
            }
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer