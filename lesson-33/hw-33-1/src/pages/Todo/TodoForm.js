import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {Button, Col, Flex, Input, Row, Typography} from "antd";
import { addTodo } from "../../store/slices/todoSlices";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const { Text } = Typography;

export default function TodoForm() {
    const { loading, error } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const validate = (values) => {
        const errors = {};
        if (!values.task) {
            errors.task = "Task is required!";
        } else if (values.task.length < 5) {
            errors.task = "Task must be at least 5 characters long!";
        }
        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addTodo({ title: values.task }));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ task: "" }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="form-container">
                    <Flex justify="center">
                        <Row gutter={8} style={{ maxWidth: "600px", width: "100%" }}>
                            <Col flex="auto">
                                <Field name="task">
                                    {({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Task name"
                                            size="large"
                                            className="task-field"
                                            style={{
                                                borderColor: theme === "light" ? "#000000" : "#bababa",
                                                color: theme === "light" ? "#000000" : "#bababa",
                                                backgroundColor: "transparent",
                                                border: "2px solid",
                                            }}
                                        />
                                    )}
                                </Field>
                            </Col>

                            <Col flex="100px">
                                <Button
                                    className="add-new-task-button"
                                    htmlType="submit"
                                    loading={loading}
                                    style={{
                                        borderColor: theme === "light" ? "#000000" : "#bababa",
                                        color: theme === "light" ? "#000000" : "#bababa",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    Add Task
                                </Button>
                            </Col>
                        </Row>
                    </Flex>

                    <Row justify="center">
                        <Col>
                            <ErrorMessage name="task">
                                {(msg) => <Text type="danger" className="error">{msg}</Text>}
                            </ErrorMessage>
                        </Col>
                    </Row>

                    {error && (
                        <Row justify="center">
                            <Col>
                                <Text type="danger" className="error">{error}</Text>
                            </Col>
                        </Row>
                    )}
                </Form>
            )}
        </Formik>
    );
}
