import { createStore } from "redux"
import rootReducer from "../Reducer/combineReducer"

const store = createStore(rootReducer)

export default store
