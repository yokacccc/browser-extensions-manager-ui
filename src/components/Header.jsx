import React from "react";

import logo from "/assets/images/logo.svg";
import moonIcon from "/assets/images/icon-moon.svg";
import sunIcon from "/assets/images/icon-sun.svg";

export default function Header() {
    return (
        <div className="Header-container">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <button className="Header__switch-theme-btn">
                <img src={moonIcon} alt="moon icon" />
                <img src={sunIcon} alt="sun icon" />
            </button>
        </div>
    );
}
