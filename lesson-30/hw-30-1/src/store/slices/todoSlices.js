import { createSlice } from "@reduxjs/toolkit";
import {fetchTodos, addTodo, updateTodo, deleteTodo} from "../thunks/todoThunk";

const initialState = {
    todos: [],
    count: 0,
    loading: false,
    error: '',
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //fetchTodo
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //addTodo
            .addCase(addTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.todos.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //updateTodo
            .addCase(updateTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) {
                    state.todos[index] = action.payload;
                }
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //deleteTodo
            .addCase(deleteTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) {
                    state.todos.splice(index, 1);
                }
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default todosSlice.reducer;