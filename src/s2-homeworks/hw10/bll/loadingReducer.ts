
const initState: T_InitState = {
    isLoading: false,
}

export type T_InitState = {
    isLoading: boolean
}


export const loadingReducer = (state = initState, action: LoadingActionType): T_InitState => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
