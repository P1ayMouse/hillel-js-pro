import TodoItem from "./TodoItem";
import { useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

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
