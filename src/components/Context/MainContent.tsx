import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

interface ContextType {
    theme:string,
    toggleTheme:()=>void
}

function MainContent() {
    const {theme, toggleTheme} = useContext<ContextType>(ThemeContext);
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
        }}>
            <p>안녕하세요.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;