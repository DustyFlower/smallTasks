import {ChangeEvent, FC} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: FC<InputPropsType> = ({title, setTitle}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    )
}