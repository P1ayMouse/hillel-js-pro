import { Card, Typography, Space } from "antd";
import { MailOutlined, LinkedinOutlined, GithubOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ResumeContacts() {
    return (
        <Card className="contacts-card">
            <Title level={3}>Contacts</Title>
            <Space direction="vertical" size="middle">
                <Text>
                    <MailOutlined /> Email: <a href="mailto:artem@ryzhenko.com">artem@ryzhenko.com</a>
                </Text>
                <Text>
                    <PhoneOutlined /> Phone: +380 (11) 111-11-11
                </Text>
                <Text>
                    <LinkedinOutlined /> LinkedIn: <a href="https://www.linkedin.com/in/artem-ryzhenko-886601172/" target="_blank" rel="noopener noreferrer">linkedin.com/in/artem-ryzhenko-886601172/</a>
                </Text>
                <Text>
                    <GithubOutlined /> GitHub: <a href="https://github.com/P1ayMouse" target="_blank" rel="noopener noreferrer">github.com/P1ayMouse</a>
                </Text>
            </Space>
        </Card>
    );
}
