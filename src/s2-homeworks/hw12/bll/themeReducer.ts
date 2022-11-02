const initState = {
    themeId: 1,
}

type InitialState = typeof initState

export const themeReducer = (state:InitialState = initState, action: ActionType): InitialState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
