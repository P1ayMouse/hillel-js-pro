import { useContext } from "react";
import { NavLink, Outlet } from 'react-router-dom';

import { ThemeContext } from "../../context/ThemeContext";

import './Layout.css';

export default function Layout () {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className='container'>
            <div className={`header header-${theme}`}>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white', textDecoration: 'none'
                }} to='/'>Головна</NavLink>
                <NavLink style={{color: theme === 'light' ? '#000000' : 'white', textDecoration: 'none'}}
                         to={'/contacts'}>Контакти</NavLink>
                <NavLink style={{color: theme === 'light' ? '#000000' : 'white', textDecoration: 'none'}}
                         to={'/about-me'}>Про мене</NavLink>
                <button className={`button-theme button-theme-${theme}`} onClick={toggleTheme}>Змінити тему</button>
            </div>

            <Outlet />
        </div>
    )
}