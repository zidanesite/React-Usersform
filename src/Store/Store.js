import { legacy_createStore as createStore, applyMiddleware } from "redux";
import UserReducer from "../Reducer/UsersReducer";
import thunk from "redux-thunk";


let Store = createStore(UserReducer, applyMiddleware(thunk));

export default Store;