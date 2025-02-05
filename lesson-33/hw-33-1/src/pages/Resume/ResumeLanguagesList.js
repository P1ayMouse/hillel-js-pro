import { Card, Typography, Progress, Tag } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ResumeLanguagesList() {
    const languages = [
        { name: "Ukrainian", level: 100, proficiency: "Native" },
        { name: "English", level: 66.6, proficiency: "Upper Intermediate" },
        { name: "russian", level: 0, proficiency: "DO NOT USE" },
    ];

    return (
        <Card className="languages-card">
            <Title level={3}>
                <GlobalOutlined /> Languages
            </Title>
            <br />
            <div className="language-list">
                {languages.map((lang) => (
                    <div key={lang.name} className="language-item">
                        <Text>{lang.name}</Text>
                        <Tag color={lang.level >= 80 ? "green" : lang.level >= 50 ? "gold" : "red"}>
                            {lang.proficiency}
                        </Tag>
                        <Progress percent={lang.level} showInfo={false} />
                    </div>
                ))}
            </div>
        </Card>
    );
}
