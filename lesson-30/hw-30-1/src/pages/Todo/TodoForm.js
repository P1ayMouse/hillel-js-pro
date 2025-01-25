import {Form, Field, ErrorMessage, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";

import {addTodo} from "../../store/thunks/todoThunk";

export default function TodoForm() {
    const task = '';
    const {loading, error} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const validate = (values) => {
        const errors = {};

        if (!values.task) {
            errors.task = "Task is required!";
        } else if (values.task.length < 5) {
            errors.task = "Task must be at least 5 characters long!"
        }

        return errors;
    }

    const handleSubmit = (values, {resetForm}) => {
        dispatch(addTodo({title: values.task}));
        resetForm();
    }


    return (
        <Formik
            initialValues={{ task }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div className="todoForm">
                        <div>
                            <Field
                                type='text'
                                name='task'
                                placeholder='Task name'
                                className="taskField"
                            />
                            <ErrorMessage name='task' className='error' component='p' />
                        </div>
                        <button className="toDoButton" type="submit">Add new Task</button>
                    </div>
                    {
                        loading &&
                        <div className="stateTodoContainer">
                            <span className="loading">
                                Loading...
                            </span>
                        </div>
                    }
                    {
                        error &&
                        <div className="stateTodoContainer">
                            <span className="error" style={{fontSize: '22px'}}>
                                {error}
                            </span>
                        </div>
                    }
                </Form>
            )}
        </Formik>
    )
}