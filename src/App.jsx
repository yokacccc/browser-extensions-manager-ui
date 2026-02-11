import { useState, useEffectffect, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // 返回当没有查到时默认返回false
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        // 获取html根标签
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="App">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Main />
        </div>
    );
}

export default App;
