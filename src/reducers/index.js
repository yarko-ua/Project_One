import { combineReducers } from "redux";
import cart from './cart'
import filter from './filter'

export default combineReducers({
    filter,
    cart
});