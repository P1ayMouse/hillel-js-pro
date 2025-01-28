import {useContext} from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./ToDo.css"
import {ThemeContext} from "../../context/ThemeContext";

export default function TodoPage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}} className={`toDoContainer toDoContainer-${theme}`}>
            <h1> ToDo Page </h1>
            <div>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}