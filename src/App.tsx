import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/button/Button";
import {Set} from "./components/set/Set";
import stream from "node:stream";
import set = Reflect.set;

function App() {

    let [counterValue, setCounterValue] = useState(0)

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    let [error, setError] = useState<boolean>(false)
    let [errorText, setErrorText] = useState<boolean>(false)

    useEffect(()=> {
        let counterValue = localStorage.getItem('counterValue')
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')

        if(counterValue && startValue && maxValue) {
            let newCounterValue = JSON.parse(counterValue)
            let newStartValue = JSON.parse(startValue)
            let newMaxValue = JSON.parse(maxValue)

            setCounterValue(newCounterValue)
            setStartValue(newStartValue)
            setMaxValue(newMaxValue)
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('counterValue', JSON.stringify(counterValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[counterValue, startValue, maxValue ])

    function addMaxValueCounter(maxValue: number) {
        setMaxValue(maxValue)
    }

    function addMinValueCounter(startValue: number) {
        setCounterValue(startValue)
    }

    function incCounter(counter: number) {
        setCounterValue(++counter)
    }

    function resCounter() {
        setCounterValue(startValue)
    }


    return (
        <div className="App">
            <div className="wrap">
                <Set
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    addMinValueCounter={addMinValueCounter}
                    addMaxValueCounter={addMaxValueCounter}
                    errorText={errorText}
                    setErrorText={setErrorText}
                    error={error}
                    setError={setError}
                />
            </div>
            <div className="wrap">
                <Counter
                    counterValue={counterValue}
                    maxValue={maxValue}
                    startValue={startValue}
                    incCounter={incCounter}
                    resCounter={resCounter}
                    error={error}
                    errorText={errorText}
                />
            </div>
        </div>
    );
}

export default App;
