import {useContext, useState} from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./ToDo.css"
import {ThemeContext} from "../../context/ThemeContext";

export default function TodoPage() {
    const [todos, setTodos] = useState([]);
    const { theme } = useContext(ThemeContext);

    const addTodo = (task) => {
        const newTodo = {
            task,
            completed: false,
            id: todos.length + 1,
        };

        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : todo
        }));
    }

        return (
            <div style={{display: 'flex', flexDirection: 'column'}} className={`toDoContainer toDoContainer-${theme}`}>
                <h1> ToDo Page </h1>
                <TodoForm addTodo={addTodo} />
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            </div>
        )
    }