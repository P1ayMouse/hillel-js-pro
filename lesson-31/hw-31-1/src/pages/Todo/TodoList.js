import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "../../store/thunks/todoThunk";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    return (
        <div className="todoListContainer">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem key={`${todo.id}--${todo.title}`} todo={todo} />
                ))
            ) : (
                <p className="emptyList">TodoList is empty!</p>
            )}
        </div>
    );
};

export default TodoList;
