import React from 'react';

type  TasksPropsType = {
    title: string
    tasks: TaskType[]
    students: Array<string>
}

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
            </ol>
{/*            <ul>
                <li>{props.students}</li>
            </ul>*/}
            <ul>
                {props.students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </div>
    )
}