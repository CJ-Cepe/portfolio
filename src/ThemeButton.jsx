import { useState, useEffect } from 'react';
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'

function ThemeButton({buttonRef}){
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
    const [icon, setIcon] = useState(theme === 'light' ? sun : moon);

    useEffect(() => {
        document.querySelector('#root').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIcon(newTheme === 'light' ? sun : moon);
    }
    
    return(
        <>
        <button ref={buttonRef} onClick={toggleTheme} ><img src={icon} data-icon={icon} width="60" height="60" alt="icon for theme" /></button>
        </>
    )
}

export default ThemeButton