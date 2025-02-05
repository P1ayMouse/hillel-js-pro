import {useDispatch} from "react-redux";
import {CloseOutlined} from "@ant-design/icons";
import {deleteTask, toggleTask} from "../../store/slices/todoSlices";
import {Button, Card, Flex, Typography} from "antd";
const { Text } = Typography;

export default function TodoItem({todo}) {
    const dispatch = useDispatch();

    const toggleTodo = () => {
        dispatch(toggleTask(todo))
    }

    const deleteButton = (e) => {
        e.stopPropagation();
        dispatch(deleteTask(todo));
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
                    data-testid="delete-button"
                />
            </Flex>
        </Card>
    );
}