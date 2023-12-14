import {useState} from 'react';
import './App.css';
import {NewFilterComponent} from './NewFilterComponent';


export type FilterValueType = 'all' | 'ruble' | 'dollar'

export const Filter = () => {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'}
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')
    let currentMoney = money;

    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    return (
       <NewFilterComponent currentMoney={currentMoney} changeFilter={changeFilter}/>
    )
}