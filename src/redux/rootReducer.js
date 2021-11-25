import { combineReducers } from "redux";
import AddReducer from "./reducers/AddReducer"
const rootReducer = combineReducers({
    AddReducer:AddReducer,
})
export default rootReducer;