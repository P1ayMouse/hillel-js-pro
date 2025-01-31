import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "../../store/thunks/todoThunk";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className="todo-list-container">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem key={`${todo.id}--${todo.title}`} todo={todo} />
                ))
            ) : (
                <p className="empty-list">TodoList is empty!</p>
            )}
        </div>
    );
};

export default TodoList;
