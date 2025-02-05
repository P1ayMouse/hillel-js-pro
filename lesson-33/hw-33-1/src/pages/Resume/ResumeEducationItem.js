import { Card, Typography } from "antd";
import { BankOutlined, FileTextOutlined, LinkOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ResumeEducationItem({ education, isCourse }) {
    return (
        <Card className="education-item-card">
            {isCourse ? (
                <FileTextOutlined style={{ fontSize: 20, marginRight: 8, color: "#333" }} />
            ) : (
                <BankOutlined style={{ fontSize: 20, marginRight: 8, color: "#333" }} />
            )}
                <Text strong>{education.title}</Text> <Text type="secondary">({education.speciality})</Text>
                <br />
                <Text>{education.year}</Text>

                {isCourse && (
                    <>
                        {education.addition && <br />}
                        {education.addition && <Text type="secondary">{education.addition}</Text>}
                        <br />
                        <a href={education.link} target="_blank" rel="noopener noreferrer">
                            <LinkOutlined /> View Certificate
                        </a>
                    </>
                )}
        </Card>
    );
}
