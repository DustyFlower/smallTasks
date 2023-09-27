import React from 'react';
import {FilterType} from '../App';

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentType = {
    money: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
    currentMoney: MoneyType[]
}

export const NewComponent = ({money, onClickFilterHandler, currentMoney}: NewComponentType) => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>
    )
}