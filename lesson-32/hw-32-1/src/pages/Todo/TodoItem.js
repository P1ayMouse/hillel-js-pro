import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../store/thunks/todoThunk";
import {CloseOutlined} from "@ant-design/icons";
import {Button, Card, Flex, Typography} from "antd";
const { Text } = Typography;

export default function TodoItem({todo}) {
    const dispatch = useDispatch();

    const toggleTodo = () => {
        dispatch(updateTodo({...todo, completed: !todo.completed}))
    }

    const deleteButton = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(todo));
    }

    return (
        <Card
            hoverable
            onClick={toggleTodo}
        >
            <Flex justify="space-between" align="center">
                <Text
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        fontSize: 16,
                    }}
                >
                    {todo.title}
                </Text>
                <Button
                    type="primary"
                    danger
                    icon={<CloseOutlined />}
                    onClick={deleteButton}
                />
            </Flex>
        </Card>
    );
}