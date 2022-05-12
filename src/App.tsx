import React from "react";
import "./App.css";
import {Counter} from "./components/counter/Counter";
import {Set} from "./components/set/Set";


function App() {

    return (
        <div className="App">
            <div className="wrap">
                <Set/>
            </div>
            <div className="wrap">
                <Counter/>
            </div>
        </div>
    );
}

export default App;
