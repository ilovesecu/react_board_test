//Context 생성
import React from "react";



const ThemeContext = React.createContext<any>(undefined);
ThemeContext.displayName = 'themeContext';

export default ThemeContext;