import {useContext, useState} from "react";

import ContactsList from "./ContactsList";
import "./Contacts.css"
import {ThemeContext} from "../../context/ThemeContext";

export default function Contacts() {
    const [contacts] = useState([
        {id: 1, description: "+380639472638", darkIcon: "phone-dark.png", lightIcon: "phone-light.png"},
        {id: 2, description: "+380639884727", darkIcon: "phone-dark.png", lightIcon: "phone-light.png"},
        {id: 3, description: "https://t.me/Our_Contacts", darkIcon: "communication-dark.png", lightIcon: "communication-light.png"},
        {id: 4, description: "вул. Соборна, 27, м. Вінниця", darkIcon: "office-dark.png", lightIcon: "office-light.png"}
    ]);
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}} className={`contactsContainer contactsContainer-${theme}`}>
            <h1>Contacts</h1>
            <ContactsList
                contacts={contacts}
            />
        </div>
    )
}