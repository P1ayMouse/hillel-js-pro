import {useContext} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import "./Login.css"

import {ThemeContext} from "../../context/ThemeContext";
import {login} from "../../store/slices/userSlices";

export default function Login() {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || '/about-me';

    const handleLogin = () => {
        dispatch(login())
        navigate(from, {replace: true});
    }

    return (
        <div
            style={{display: 'flex', flexDirection: 'column'}}
            className={`login-container login-container-${theme}`}
        >
            <h1> Login </h1>
            <button onClick={handleLogin} className='login-button'>Log In</button>
        </div>
    )
}