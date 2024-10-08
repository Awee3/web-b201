import './Components.css';
import React,{useState} from 'react';

function ThemeToggleComp(){

    const[isLightMode,setIsLightMode] = useState(true);

    const handleThemeToggle = () =>{
        setIsLightMode(!isLightMode);
        document.documentElement.classList.toggle('dark', isLightMode);
    }

    return(
        <div className = {`theme-toggle-comp ${isLightMode ? 'light' : 'dark'}`}>
            <button className="theme-toggle" onClick={handleThemeToggle}>
                {isLightMode ? '☀️' : '🌙'}
            </button>
        </div>
    );
}

export default ThemeToggleComp