import React from "react";

import logo from "/assets/images/logo.svg";
import moonIcon from "/assets/images/icon-moon.svg";
import sunIcon from "/assets/images/icon-sun.svg";

export default function Header({ toggleTheme, isDarkMode }) {
    const displayMoonIcon = <img src={moonIcon} alt="moon icon" />;
    const displaySunIcon = <img src={sunIcon} alt="sun icon" />;

    return (
        <div className="Header-container">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <button className="Header__switch-theme-btn" onClick={toggleTheme}>
                {isDarkMode ? displaySunIcon : displayMoonIcon}
            </button>
        </div>
    );
}
