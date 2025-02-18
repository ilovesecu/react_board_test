import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";

const Calculator = () => {
    const [temperture, setTemperture] = useState<number>(0);
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperture:number) => {
        setTemperture(temperture);
        setScale('c');
    }

    const handleFahrenheitChange = (temperture:number) => {
        setTemperture(temperture);
        setScale('f');
    }

    function toCelsius(fahrenheit:number){
        return (fahrenheit - 32) * 5 /9;
    }
    function toFahrenheit(celsius:number){
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature:number, convert:(num:number)=>number){
        const input = parseFloat(String(temperature));
        if(Number.isNaN(input)){
            return 0;
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded;
    }

    const celsius = scale === 'f' ? tryConvert(temperture, toCelsius) : temperture;
    const fahrenheit = scale === 'c' ? tryConvert(temperture, toFahrenheit) : temperture;

    return (
        <div>
            <TemperatureInput value={celsius} onChange={handleCelsiusChange} scale={'c'}/>
            <TemperatureInput value={fahrenheit} onChange={handleFahrenheitChange} scale={'f'}/>
        </div>
    );
};

export default Calculator;