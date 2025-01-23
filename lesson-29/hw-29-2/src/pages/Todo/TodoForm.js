import {Form, Field, ErrorMessage, Formik} from "formik";
import {useDispatch} from "react-redux";

import {addTodo} from "../../store/slices/todoSlices";

export default function TodoForm() {
    const task = '';
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
                <Form className="todoForm">
                    <div>
                        <Field type='text' name='task' placeholder='Task name' className="taskField"></Field>
                        <ErrorMessage name='task' className='error' component='p' />
                    </div>
                    <button className="toDoButton" type="submit">Add new Task</button>
                </Form>
            )}
        </Formik>
    )
}