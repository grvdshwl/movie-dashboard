import { displayActionTypes } from "./display.types"

const INITIAL_STATE = {
    searchValue : "hellboy",
    moviesArray:[false]
}


const displayReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case displayActionTypes.ADD_SEARCHED_VALUE:
            return{
                ...state,
                searchValue:action.payload
            }
        case displayActionTypes.ADD_MOVIES_ARRAY:
            return{
                ...state,
                moviesArray:action.payload
            }    
        default:
            return state    
    }
}


export default displayReducer;