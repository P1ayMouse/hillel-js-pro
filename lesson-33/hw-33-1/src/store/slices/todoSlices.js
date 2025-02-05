import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    count: 0,
    loading: false,
    error: '',
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1,
                title: action.payload.title,
                completed: false,
            };

            const addNewTodo = state.todos.push(newTodo);
            if (addNewTodo) {
                state.count += 1;
            }
        },
        deleteTask: (state, action) => {
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (todoIndex !== -1) {
                state.todos.splice(todoIndex, 1)
                state.count -= 1;
            }
        },
        toggleTask: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, deleteTask, toggleTask } = todosSlice.actions;
export default todosSlice.reducer;