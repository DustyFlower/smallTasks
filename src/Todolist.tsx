import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
/*    changeFilter: (value: FilterValuesType) => void*/
    removeAllTasks: () => void
}

export function Todolist(props: PropsType) {

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = props.tasks;

    if (filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }
    if (filter === 'three tasks') {
        tasksForTodolist = props.tasks.slice(0, 3);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.removeAllTasks()
            }}>REMOVE ALL TASKS
            </button>
        </div>
        <div>
            <button onClick={() => {
                changeFilter('all')
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilter('active')
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilter('completed')
            }}>
                Completed
            </button>
            <button onClick={() => {
                changeFilter('three tasks')
            }}>
                First three tasks
            </button>
        </div>
    </div>
}