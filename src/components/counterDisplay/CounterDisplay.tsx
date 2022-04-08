import s from './CounterDsplay.module.css'
import React from "react";

type PropsType = {
    textError: boolean
    error: boolean
    disabledValue: number
    counter: number
}
export const CounterDisplay = (props: PropsType) => {
   if(props.textError) {
       return (
           <h1 className={props.error ? `${s.error + ' ' + s.text}` : s.text}> {props.error ? ' Incorrect Value!' : 'Enter values and press "set"'}</h1>
       )
   } else {
       return (
           <h1 className={props.error || props.counter === props.disabledValue ? `${s.error + ' ' + s.title}` : s.title}>
               { props.counter}
           </h1>
       )
   }
}