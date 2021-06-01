import{combineReducers} from "redux";
import displayReducer from "./display/display.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user:userReducer,
    display:displayReducer
})