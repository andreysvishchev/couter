import s from "./CounterDsplay.module.css";
import React from "react";

type PropsType = {
    maxValue: number;
    counterValue: number;
    textError: boolean;
    error: boolean;

};
export const CounterDisplay: React.FC<PropsType> = (
    {
        counterValue,
        maxValue,
        textError,
        error,
    }
) => {
    if (textError) {
        return <h1
            className={error ? `${s.error + " " + s.text}` : s.text}> {error ? " Incorrect Value!" : 'Enter values and press "Set"'}</h1>;
    } else {
        return <h1
            className={error || counterValue === maxValue ? `${s.error + " " + s.title}` : s.title}>{counterValue}</h1>;
    }
};
