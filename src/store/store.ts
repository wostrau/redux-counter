import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import {counterReducer} from './counter-reducer'
import {loadState, saveState} from '../utilities/localStorage'

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch