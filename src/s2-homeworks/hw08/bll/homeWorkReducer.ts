import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name);
                } else if (action.payload === 'down') {
                    return b.name.localeCompare(a.name);
                } else {
                    return 0;
                }
            });
        }
        case 'check': {
            return state.filter((el) => el.age >= action.payload).reverse()
        }
        default:
            return state
    }
}

