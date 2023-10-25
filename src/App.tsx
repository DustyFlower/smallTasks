import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';

export type FilterValuesType = 'all' | 'active' | 'completed' | 'three tasks';

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
            setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
{/*            <FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


/*

function App() {

let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    const removeAllTasks = () => {
        setTasks(tasks = [])
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
/!*                      changeFilter={changeFilter}*!/
                      removeAllTasks={removeAllTasks}
            />
        </div>
    );
}
*/

export default App;
