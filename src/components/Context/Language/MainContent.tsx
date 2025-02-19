import React, {useContext} from 'react';
import languageContext from "./LanguageContext";
import KoreanContent from "./KoreanContent";
import EnglishContent from "./EnglishContent";
import JapanContent from "./JapanContent";

interface langType {
    lang:string,
    toggleLang: (lagn:string)=>void,
}

function MainContent() {
    const { lang, toggleLang } = useContext<langType>(languageContext);
    return (
        <>
            {
                lang === 'korean' ? <KoreanContent/> : lang === 'english' ? <EnglishContent /> : null
            }
            {
                lang === 'japan' && <JapanContent/>
            }
        </>
    );
}

export default MainContent;