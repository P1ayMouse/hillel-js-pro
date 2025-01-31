import ResumeEducationItem from "./ResumeEducationItem";
import { List, Typography } from "antd";

const { Title } = Typography;

export default function ResumeEducationList({ title, data }) {
    return (
        <div className="education-list-container">
            <Title level={3} className="resume-theme-title">{title}</Title>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <ResumeEducationItem education={item} isCourse={!!item.link} />
                    </List.Item>
                )}
            />
        </div>
    );
}
