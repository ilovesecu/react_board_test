import React, {useContext} from 'react';
import languageContext from "./LanguageContext";
interface langType {
    lang:string,
    toggleLang: (lagn:string)=>void,
}
function ToggleLangBtns() {
    const {toggleLang} = useContext<langType>(languageContext);
    const onClickLang = (e:React.MouseEvent<HTMLButtonElement>) => {
        const lang = e.currentTarget.dataset.lang as 'korean' | 'english' | 'japan';
        toggleLang(lang);
    }


    return (
        <div>
            <button data-lang={"korean"} onClick={onClickLang}>한국어</button>
            <button data-lang={"english"} onClick={onClickLang}>영어</button>
            <button data-lang={"japan"} onClick={onClickLang}>일본어</button>
        </div>
    );
}

export default ToggleLangBtns;