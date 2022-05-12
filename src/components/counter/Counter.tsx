import s from "./Counter.module.css";
import {Button} from "../button/Button";
import React from "react";
import {CounterDisplay} from "../counterDisplay/CounterDisplay";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {incCounterValueAC, resCounterValueAC} from "../../redux/counterReducer";


export const Counter = () => {
    const counterValue = useSelector<RootStateType, number>(state => state.counter.counterValue);
    const maxValue = useSelector<RootStateType, number>(state => state.counter.maxValue);
    const startValue = useSelector<RootStateType, number>(state => state.counter.startValue);
    const error = useSelector<RootStateType, boolean>(state => state.counter.error)
    const errorText = useSelector<RootStateType, boolean>(state => state.counter.errorText)
    const dispatch = useDispatch();

    const incCounterHandler = () => {
        dispatch(incCounterValueAC());

    };
    const resCounterHandler = () => {
        dispatch(resCounterValueAC());

    };

    return (
        <div>
            <div className={s.wrap}>
                <CounterDisplay counterValue={counterValue} error={error} maxValue={maxValue}
                                textError={errorText}/>
            </div>
            <div className={s.button_inner}>
                <Button name={"Inc"} callBack={incCounterHandler}
                        disabled={error || errorText || counterValue === maxValue}/>
                <Button
                    name={"Reset"}
                    callBack={resCounterHandler}
                    disabled={error || errorText || counterValue <= 0 || counterValue === startValue}
                />
            </div>
        </div>
    );
};
