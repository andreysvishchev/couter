import s from './Counter.module.css'
import {Button} from "../button/Button";
import React from "react";
import {CounterDisplay} from "../counterDisplay/CounterDisplay";

type CounterType = {
    maxValue: number
    startValue: number
    counterValue: number
    incCounter: (counter: number) => void
    resCounter: () => void
    error: boolean
    errorText: boolean
}

export const Counter = (props: CounterType) => {

    const incCounterHandler = () => {
        props.incCounter(props.counterValue)
    }
    const resCounterHandler = () => {
        props.resCounter()
    }

    return (
        <div>
            <div className={s.wrap}>
                <CounterDisplay counterValue={props.counterValue}
                                error={props.error}
                                maxValue={props.maxValue}
                                textError={props.errorText}/>
            </div>
            <div className={s.button_inner}>
                <Button name={'inc'} callBack={incCounterHandler}
                        disabled={props.error || props.errorText || props.counterValue === props.maxValue}/>
                <Button name={'reset'} callBack={resCounterHandler}
                        disabled={props.error || props.errorText || props.counterValue <= 0 || props.counterValue === props.startValue}/>
            </div>
        </div>

    )
}