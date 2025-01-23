import {useContext } from "react";

import RegistrationForm from "./RegistrationForm";

import "./Registration.css"
import {ThemeContext} from "../../context/ThemeContext";

export default function RegistrationPage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{display: 'flex', flexDirection: 'column'}}
            className={`registrationContainer registrationContainer-${theme}`}
        >
            <h1> Registration Page </h1>
            <RegistrationForm />
        </div>
    )
}