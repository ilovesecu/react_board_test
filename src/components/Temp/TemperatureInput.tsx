import React from 'react';

interface TemperatureInputProps {
    value: number;
    scale: 'c' | 'f';
    onChange: (value:number) => void;
}
const scaleNames = {
    'c' : '섭씨',
    'f' : '화씨',
}
const TemperatureInput:React.FC<TemperatureInputProps> = ({value, onChange, scale}) => {
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        onChange(Number(e.target.value));
    }

    return (
        <div>
            <span>온도를 입력해주세요 (단위: {scaleNames[scale]})</span>
            <input value={value} onChange={handleOnChange}/>
        </div>
    );
};

export default TemperatureInput;