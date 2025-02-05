import ResumeSkillsItem from "./ResumeSkillsItem";
import { Col, Row, Typography, Card } from "antd";

const { Title } = Typography;

export default function ResumeSkillsList() {
    const languagesList = [
        {
            id: 1,
            title: "General",
            skills: ["SQL", "Docker Compose", "GIT", "PostgreSQL", "JSON", "Docker", "GitHub", "Requests",
                "Regular expressions", "HTML5", "CSS", "Celery", "Postman", "MongoDB", "Redis"],
        },
        {
            id: 2,
            title: "DevOps",
            skills: ["Amazon Web Services", "CircleCI"],
        },
        {
            id: 3,
            title: "Python",
            skills: ["OOP", "PyCharm", "Django", "Django Rest", "Fast API", "REST API", "Unittest"],
        },
        {
            id: 4,
            title: "JavaScript",
            skills: ["OOP", "WebStorm", "DOM", "ES6", "React", "Redux-Toolkit", "Redux-Thunk", "Bootstrap", "Ant Design"],
        }
    ];

    return (
        <div className="skill-list-container">
            {languagesList.map((language) => (
                <Card
                    key={language.id}
                    title={<Title level={3} style={{ marginBottom: "16px" }}>{language.title}</Title>}
                    bordered={false}
                    className="skill-category-card"
                >
                    <Row gutter={[16, 16]} justify="start">
                        {language.skills.map((skill) => (
                            <Col key={skill} sm={8}>
                                <ResumeSkillsItem skill={skill} />
                            </Col>
                        ))}
                    </Row>
                </Card>
            ))}
        </div>
    );
}
