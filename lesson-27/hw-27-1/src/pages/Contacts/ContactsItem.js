import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function TodoItem({ contact }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`contact contact-${theme}`}>
            <img
                src={require(`../../assets/icons/${theme === "light" ? contact.darkIcon : contact.lightIcon}`)}
                alt={contact.id}
            />
            <span className="contact-description">{contact.description}</span>
        </div>
    );
}
