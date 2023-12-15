import {ChangeEvent, FC, MouseEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput: FC<FullInputPropsType> = ({addMessage}) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}