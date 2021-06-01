import { displayActionTypes } from "./display.types"

export const addSearchedValue = (value)=>({
    type:displayActionTypes.ADD_SEARCHED_VALUE,
    payload:value
})

export const addMoviesArray = (array)=>({
    type:displayActionTypes.ADD_MOVIES_ARRAY,
    payload:array
})

