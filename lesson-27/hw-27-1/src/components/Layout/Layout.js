import {useContext, useEffect} from "react";
import { NavLink, Outlet } from 'react-router-dom';

import { ThemeContext } from "../../context/ThemeContext";

import './Layout.css';

export default function Layout () {
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

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
                    transition: 'color 1.2s ease'}}
                         to={'/contacts'}>Контакти</NavLink>
                <NavLink style={{
                    color: theme === 'light' ? '#000000' : 'white',
                    textDecoration: 'none',
                    transition: 'color 1.6s ease'}}
                         to={'/about-me'}>Про мене</NavLink>
                <button className={`button-theme button-theme-${theme}`} onClick={toggleTheme}>
                    Змінити тему
                </button>
            </div>
            <Outlet />

        </div>
    )
}