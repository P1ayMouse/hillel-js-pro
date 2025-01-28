import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import './Layout.css';
import {logout} from "../../store/slices/userSlices";

export default function Layout () {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector(state => state.user.isLogin);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login');
    }

    return (
        <div className='container'>
            <div className={`header header-${theme}`}>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 0.8s ease'
                }} to='/'>Головна</NavLink>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 1.2s ease'
                }}
                         to={'/contacts'}>Контакти</NavLink>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 1.6s ease'
                }}
                         to={'/about-me'}>Про мене</NavLink>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 1.6s ease'
                }}
                         to={'/login'}>Логін</NavLink>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 2.0s ease'
                }}
                         to={'/registration-page'}>Реєстрація</NavLink>
                <div className="header-buttons">
                    <button className={`button-theme button-theme-${theme}`} onClick={toggleTheme}>
                        Змінити тему
                    </button>
                    {
                        isLogin &&
                        <button className={`button-logout button-logout-${theme}`} onClick={handleLogout}>
                            Вихід
                        </button>
                    }

                </div>
            </div>
            <Outlet/>

        </div>
    )
}