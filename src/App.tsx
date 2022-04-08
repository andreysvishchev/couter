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

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounterValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counterValue))
    }, [counterValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])


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
