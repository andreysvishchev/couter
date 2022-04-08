import s from './CounterDsplay.module.css'
import React from "react";

type PropsType = {
    maxValue: number
    counterValue: number
    textError: boolean
    error: boolean
}
export const CounterDisplay = (props: PropsType) => {
   if(props.textError) {
       return (
           <h1 className={props.error ? `${s.error + ' ' + s.text}` : s.text}> {props.error ? ' Incorrect Value!' : 'Enter values and press "set"'}</h1>
       )
   } else {
       return (
           <h1 className={props.error || props.counterValue === props.maxValue ? `${s.error + ' ' + s.title}` : s.title}>
               { props.counterValue}
           </h1>
       )
   }
}