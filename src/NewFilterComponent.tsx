import './App.css';
import {FC} from 'react';
import {FilterValueType} from './Filter';

type NewComponentType = {
    currentMoney: MoneyType[]
    changeFilter: (filter: FilterValueType) => void
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

export const NewFilterComponent: FC<NewComponentType> = ({currentMoney, changeFilter}) => {
    return (
        <div>
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
                <button onClick={() => {
                    changeFilter('all')
                }}>all
                </button>
                <button onClick={() => {
                    changeFilter('ruble')
                }}>ruble
                </button>
                <button onClick={() => {
                    changeFilter('dollar')
                }}>dollar
                </button>
            </div>
        </div>
    )
}

