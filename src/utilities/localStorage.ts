import {AppStateType} from '../store/store'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: AppStateType) => {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('appState', serializedState)
}