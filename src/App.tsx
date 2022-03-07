import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/button/Button";

function App() {

    let [counter, setCounter] = useState(0)

    function incCounter() {
        if (counter === 5) {
            console.log(123)
        }
        setCounter(++counter)
    }

    function resCounter() {
        setCounter(counter = 0)
    }
    

    return (
        <div className="App">
            <div className="wrap">
                <Counter counter={counter}/>
                <div className="button-inner">
                    <Button name={'inc'} callBack={incCounter} disabled={counter === 5}/>
                    <Button name={'reset'} callBack={resCounter} disabled={counter <= 0}/>
                </div>
            </div>


        </div>
    );
}

export default App;
