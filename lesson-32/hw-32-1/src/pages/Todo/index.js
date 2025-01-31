import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import {useContext} from "react";

import "./ToDo.scss"
import {ThemeContext} from "../../context/ThemeContext";

export default function TodoPage() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`todo-container-${theme}`}>
            <h1> To Do List </h1>
            <div>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}