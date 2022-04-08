import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/button/Button";
import {Set} from "./components/set/Set";
import stream from "node:stream";
import set = Reflect.set;

function App() {

    let [counterValue, setCounterValue] = useState(0)
    let [disabledValue, setDisabledValue] = useState(5)

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)

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
        let valueAsString = localStorage.getItem('disabledValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setDisabledValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('disabledValue', JSON.stringify(disabledValue))
    }, [disabledValue])

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


    function addDisabledValue(disabledValue: number) {
        setDisabledValue(disabledValue)
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
                    disabledValue={disabledValue}
                    addMinValueCounter={addMinValueCounter}
                    addDisabledValue={addDisabledValue}
                    errorText={errorText}
                    setErrorText={setErrorText}
                    error={error}
                    setError={setError}
                />


            </div>

            <div className="wrap">
                <Counter
                    counter={counterValue}
                    incCounter={incCounter}
                    resCounter={resCounter}
                    disabledValue={disabledValue}
                    error={error}
                    errorText={errorText}
                />
            </div>
        </div>
    );
}

export default App;
