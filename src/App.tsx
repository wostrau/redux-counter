import React, {useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatchType, AppStateType} from './store/store'
import {incrementValueSuccess, installValueSuccess} from './store/counter-reducer'

function App() {
    const counterValue = useSelector((state: AppStateType) => state.counter?.value ?? 0)
    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {
        dispatch(installValueSuccess(counterValue))
    }, [])

    function incHandler() {
        dispatch(incrementValueSuccess())
    }

    return (
        <div className="App">
            <h1>{counterValue}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    )
}

export default App
