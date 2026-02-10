import React from "react";
import useExtensionFilter from "../Store";

export default function ExtensionsList({ logo, name, description, isActive }) {
    const { toggleActive } = useExtensionFilter();

    const handleToggle = () => {
        toggleActive(name);
    };

    return (
        <div className="extension__container">
            <div className="extension-info__container">
                <img src={logo} alt="" />
                <div className="extension-info__text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="extension-action__container">
                <button className="extension-action__removeBtn">Remove</button>
                <label className="extension-action__activeBtn">
                    <input
                        type="checkbox"
                        id="activeBtn"
                        checked={isActive}
                        onChange={handleToggle}
                    />
                    <span className="silder"></span>
                </label>
            </div>
        </div>
    );
}
