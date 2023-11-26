const initState = {
    themeId: 1,
}

type T_InitTheme = typeof initState

export const themeReducer = (state: T_InitTheme = initState, action: T_ChangeThemeId): T_InitTheme => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {themeId: action.id}
        }
        default:
            return state
    }
}

type T_ChangeThemeId = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({type: 'SET_THEME_ID', id} as const) // fix any
