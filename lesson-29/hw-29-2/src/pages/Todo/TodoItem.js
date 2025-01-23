import {ThemeContext} from "../../context/ThemeContext";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import {deleteTask, toggleTodo} from "../../store/slices/todoSlices";

export default function TodoItem({todo}) {
    const {theme} = useContext(ThemeContext);
    const detach = useDispatch();

    return (
        <div className={`toDoItem toDoItem-${theme}`} onClick={() => detach(toggleTodo(todo))}>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.title}
            </span>
            <button
                onClick={() => detach(deleteTask(todo))}
            >
                X
            </button>
        </div>
    )
}