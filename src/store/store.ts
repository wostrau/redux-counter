import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {CounterActionType, counterReducer} from './counter-reducer'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatchType = typeof store.dispatch
export type CounterDispatch = ThunkDispatch<AppStateType, unknown, CounterActionType>
//export const useAppDispatch = () => useDispatch<AppDispatchType>();