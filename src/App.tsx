import React, {useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatchType, AppStateType} from './store/store'
import {incrementValue, installValue} from './store/counter-reducer'

function App() {
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {
        dispatch(installValue())
    }, [])

    function incHandler() {
        dispatch(incrementValue())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    )
}

export default App
