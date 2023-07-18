import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("I'm a stupid button")
    }

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const ReturnToZero = () => {
        setA(a = 0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={ReturnToZero}>0</button>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo("I'm Vasya", 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={'Stupid button'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
