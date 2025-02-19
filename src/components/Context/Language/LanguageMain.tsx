import React, {useCallback, useState} from 'react';
import LanguageContext from "./LanguageContext";
import MainContent from "./MainContent";
import ToggleLangBtns from "./ToggleLangBtns";

interface langType {
    lang : 'korean' | 'english' | 'japan'
}

function LanguageMain() {
    const [lang, setLang] = useState<'korean' | 'english' | 'japan'>('korean');
    const toggleLang = useCallback((lang:string)=>{
        if(lang === 'korean'){
            setLang('korean');
        }else if(lang === 'english'){
            setLang('english');
        }else if(lang === 'japan'){
            setLang('japan');
        }
    },[lang]);

    return (
        <LanguageContext.Provider value={{lang, toggleLang}}>
            <MainContent/>
            <ToggleLangBtns/>
        </LanguageContext.Provider>
    );
}

export default LanguageMain;