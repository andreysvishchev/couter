import {Button} from "../button/Button";
import React, {ChangeEvent} from "react";
import s from './Set.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    addMaxValueCounterAC,
    addStartValueCounterAC,
    changeErrorAC,
    changeErrorTextAC,
    setValuesAC
} from "../../redux/counterReducer";
import {RootStateType} from "../../redux/store";

export const Set = () => {
    const dispatch = useDispatch()
    const error = useSelector<RootStateType, boolean>(state => state.counter.error)
    let maxValue = useSelector<RootStateType, number>(state=> state.counter.maxValue)
    let startValue = useSelector<RootStateType, number>(state => state.counter.startValue)

    const addSettingsHandler = () => {
        dispatch(setValuesAC())
        dispatch(changeErrorTextAC(false))
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberMaxValue = Number(e.currentTarget.value)
        dispatch(addMaxValueCounterAC(numberMaxValue))
        if (numberMaxValue < 0 || numberMaxValue <= startValue) {
            dispatch(changeErrorTextAC(true))
            dispatch(changeErrorAC(true))
        } else {
            dispatch(changeErrorAC(false))
        }
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberStartValue = Number(e.currentTarget.value)
        dispatch(addStartValueCounterAC(numberStartValue))
        if (numberStartValue < 0 || numberStartValue >= maxValue) {
            dispatch(changeErrorTextAC(true))
            dispatch(changeErrorAC(true))
        } else {
            dispatch(changeErrorAC(false))
        }
    }

    return (
        <div>
            <div className={s.wrap}>
                <div className={s.row}>
                    <h2 className={s.title}>Max value</h2>
                    <input type="number"
                           className={error ? `${s.error + ' ' + s.input}` : s.input}
                           onChange={onChangeMaxValueHandler}
                           value={maxValue}/>
                </div>
                <div className={s.row}>
                    <h2 className={s.title}>Start Value</h2>
                    <input type="number"
                           className={error ? `${s.error + ' ' + s.input}` : s.input}
                           onChange={onChangeStartValueHandler}
                           value={startValue}/>
                </div>
            </div>
            <div className={s.button_inner}>
                <Button name={'Set'}
                        callBack={addSettingsHandler}
                        disabled={error}/>
            </div>
        </div>
    )
}