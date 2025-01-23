import ContactsItem from "./ContactsItem";
import {ThemeContext} from "../../context/ThemeContext";
import {useContext} from "react";

const ContactsList = ({contacts}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`contactsListContainer-${theme}`} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {contacts.map(contact => (
                <ContactsItem
                    key={contact.id}
                    contact={contact}
                />
            ))}

            {contacts.length === 0 ? <p>There is no contacts!</p> : ""}
        </div>
    )
}

export default ContactsList;