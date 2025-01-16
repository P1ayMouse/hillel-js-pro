import { useState} from "react";

export default function TodoForm({ addTodo }) {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = () => {
        if (task.trim()){
            addTodo(task);
            setTask('');
        }
    }

        return (
            <div className="todoForm">
                <input
                    type='text'
                    value={task}
                    placeholder='Enter new Todo'
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add new Task</button>
            </div>
        )
}