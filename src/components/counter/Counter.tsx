import s from './Counter.module.css'
import {Button} from "../button/Button";
import React from "react";
import {CounterDisplay} from "../counterDisplay/CounterDisplay";

type CounterType = {
    counter: number
    incCounter: (counter: number) => void
    resCounter: () => void
    disabledValue: number
    error: boolean
    errorText: boolean
}

export const Counter = (props: CounterType) => {

    const incCounterHandler = () => {
        props.incCounter(props.counter)
    }
    const resCounterHandler = () => {
        props.resCounter()
    }

    return (
        <div>
            <div className={s.wrap}>
                <CounterDisplay counter={props.counter}
                                error={props.error}
                                disabledValue={props.disabledValue}
                                textError={props.errorText}/>
            </div>
            <div className={s.button_inner}>
                <Button name={'inc'} callBack={incCounterHandler}
                        disabled={props.error || props.errorText || props.counter === props.disabledValue}/>
                <Button name={'reset'} callBack={resCounterHandler}
                        disabled={props.error || props.errorText || props.counter <= 0}/>
            </div>
        </div>

    )
}