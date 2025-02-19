import {createContext} from "react";

const languageContext = createContext<any>(undefined);
languageContext.displayName = 'languageContext';

export default languageContext;