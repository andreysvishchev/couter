import {Button} from "../button/Button";
import React, {ChangeEvent} from "react";
import s from './Set.module.css'


type SetPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    addMaxValueCounter: (maxValue: number) => void
    addMinValueCounter: (startValue: number) => void
    error: boolean
    setError: (e: boolean) => void
    errorText: boolean
    setErrorText: (e: boolean) => void
}

export const Set = (props: SetPropsType) => {

    const addSettingsHandler = (maxValue: number, startValue: number) => {
        props.addMaxValueCounter(maxValue)
        props.addMinValueCounter(startValue)
        props.setErrorText(false)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberMaxValue = Number(e.currentTarget.value)
        props.setMaxValue(numberMaxValue)
        console.log(numberMaxValue)
        if (numberMaxValue < 0 || numberMaxValue <= props.startValue) {
            props.setErrorText(true)
            props.setError(true)
        } else {
            props.setError(false)
        }
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberStartValue = Number(e.currentTarget.value)
        if (numberStartValue < 0 || numberStartValue >= props.maxValue) {
            props.setErrorText(true)
            props.setError(true)
        } else {
            props.setError(false)
        }
        props.setStartValue(numberStartValue)
    }

    return (
        <div>
            <div className={s.wrap}>
                <div className={s.row}>
                    <h2 className={s.title}>Max value</h2>
                    <input type="number"
                           className={props.error ? `${s.error + ' ' + s.input}` : s.input}
                           onChange={onChangeMaxValueHandler}
                           value={props.maxValue}/>
                </div>
                <div className={s.row}>
                    <h2 className={s.title}>Start Value</h2>
                    <input type="number"
                           className={props.error ? `${s.error + ' ' + s.input}` : s.input}
                           onChange={onChangeStartValueHandler}
                           value={props.startValue}/>
                </div>
            </div>
            <div className={s.button_inner}>
                <Button name={'set'}
                        callBack={() => addSettingsHandler(props.maxValue, props.startValue)}
                        disabled={props.error}/>
            </div>
        </div>
    )
}