import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
    const todoCount = useSelector(state => state.todos.count);
    const todos = useSelector(state => state.todos.todos)

    return (
        <div className="todoListContainer">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
            {todoCount <= 0 ? <p className="emptyList">TodoList is empty!</p> : <p className="todoCount">Count: {todoCount}</p>}
        </div>
    );
};

export default TodoList;
