import { applyMiddleware, createStore } from "redux";
import UserReducer from "../Reducer/UsersReducer";
let Store = createStore(UserReducer, applyMiddleware());

export default Store;