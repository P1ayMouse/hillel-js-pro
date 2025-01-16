import {ThemeContext} from "../../context/ThemeContext";
import {useContext} from "react";

export default function TodoItem({todo, toggleTodo, deleteTodo}) {
    const {theme} = useContext(ThemeContext);

    console.log(theme);
    return (
        <div className={`toDoItem toDoItem-${theme}`}
             style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
             onClick={() => toggleTodo(todo.id)}>
                {todo.task}
            <button
                onClick={() => deleteTodo(todo.id)}
            >
                X
            </button>
        </div>
    )
}