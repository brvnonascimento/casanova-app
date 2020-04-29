export const initialSheets: InitialSheets = {
    sheet: []
}

export const sheetReducer = (state = initialSheets, action: Action) => {
    switch (action.type) {
        case 'NEW_SHEET':
            return {
                ...state,
                sheet: action.sheet
            }
        default:
            return state
    }
}

interface Action {
    type: string;
    sheet: Array<Array<string>>;
}

interface InitialSheets {
    sheet: Array<Array<string>>
}