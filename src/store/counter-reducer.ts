const initialState = {value: 0}
type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: CounterActionType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT_VALUE':
            return {...state, value: state.value + 1}
        case 'INSTALL_VALUE':
            return {...state, value: action.value}
        default:
            return state
    }
}

export type CounterActionType = ReturnType<typeof incrementValueSuccess> | ReturnType<typeof installValueSuccess>

export const incrementValueSuccess = () => ({type: 'INCREMENT_VALUE'} as const)
export const installValueSuccess = (value: number) => ({type: 'INSTALL_VALUE', value} as const)
