import ResumeSkillsList from "./ResumeSkillsList";
import ResumeEducationList from "./ResumeEducationList";
import ResumeContacts from "./ResumeContacts";
import ResumeLanguagesList from "./ResumeLanguagesList";
import { Row, Col, Typography } from "antd";

import "./Resume.scss";

const { Title } = Typography;

export default function Resume() {
    const educationList = [
        {
            id: 1,
            title: "Vinnytsia Technical Applied College",
            speciality: "Computer Engineering",
            year: "2018-2022",
        },
        {
            id: 2,
            title: "Vinnytsia National Technical University",
            speciality: "Computer Engineering",
            year: "2022-2024",
        },
        {
            id: 3,
            title: "National University of Kyiv-Mohyla Academy",
            speciality: "Computer Science",
            year: "2024-2026",
        }
    ];

    const coursesList = [
        {
            id: 1,
            title: "Hillel IT School",
            speciality: "Python Basic",
            year: "2022",
            link: "https://certificate.ithillel.ua/view/80827316"
        },
        {
            id: 2,
            title: "Hillel IT School",
            speciality: "Python Pro",
            year: "2022",
            link: "https://certificate.ithillel.ua/view/27062154",
        },
        {
            id: 3,
            title: "SoftServe Academy",
            speciality: "Practical Python",
            year: "2023",
            addition: "Series QI № 15346/2023",
            link: "https://career.softserveinc.com/en-us/certification/verification",
        },
        {
            id: 4,
            title: "Hillel IT School",
            speciality: "Front-end Pro",
            year: "2025",
            link: "https://certificate.ithillel.ua/view/45424055"
        },
    ];

    return (
        <div className="resume-container">
            <Title level={1} className="resume-theme-title">Resume</Title>

            <Row gutter={[24, 24]} align="start">
                <Col span={16}>
                    <ResumeSkillsList />
                    <ResumeLanguagesList />
                    <ResumeEducationList title="Education" data={educationList} />
                    <ResumeEducationList title="Courses" data={coursesList} />
                </Col>

                <Col span={8}>
                    <ResumeContacts />
                </Col>
            </Row>

        </div>
    );
}
