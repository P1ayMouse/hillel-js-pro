import { Tag } from "antd";

export default function ResumeSkillsItem({ skill }) {
    return (
        <Tag className="skill-tag">
            {skill}
        </Tag>
    );
}
