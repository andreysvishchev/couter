import s from "./Counter.module.css";
import { Button } from "../button/Button";
import React from "react";
import { CounterDisplay } from "../counterDisplay/CounterDisplay";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { incCounterValueAC, InitStateType, resCounterValueAC } from "../../redux/counterValueReducer";

type CounterType = {
  maxValue: number;
  startValue: number;

  error: boolean;
  errorText: boolean;
};

export const Counter = (props: CounterType) => {
  const dispatch = useDispatch();
  const counterValue = useSelector<RootStateType, number>((state) => state.counterValue.setCounterValue);

  const incCounterHandler = () => {
    dispatch(incCounterValueAC());
  };
  const resCounterHandler = () => {
    dispatch(resCounterValueAC());
  };

  return (
    <div>
      <div className={s.wrap}>
        <CounterDisplay counterValue={counterValue} error={props.error} maxValue={props.maxValue} textError={props.errorText} />
      </div>
      <div className={s.button_inner}>
        <Button name={"Inc"} callBack={incCounterHandler} disabled={props.error || props.errorText || counterValue === props.maxValue} />
        <Button
          name={"Reset"}
          callBack={resCounterHandler}
          disabled={props.error || props.errorText || counterValue <= 0 || counterValue === props.startValue}
        />
      </div>
    </div>
  );
};
