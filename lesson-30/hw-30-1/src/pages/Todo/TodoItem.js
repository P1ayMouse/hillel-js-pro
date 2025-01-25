import {ThemeContext} from "../../context/ThemeContext";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../store/thunks/todoThunk";

export default function TodoItem({todo}) {
    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();

    const toggleTodo = () => {
        dispatch(updateTodo({...todo, completed: !todo.completed}))
    }

    const deleteButton = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(todo));
    }

    return (
        <div className={`toDoItem toDoItem-${theme}`} onClick={() => dispatch(toggleTodo)}>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.title}
            </span>
            <button
                onClick={deleteButton}
            >
                X
            </button>
        </div>
    )
}