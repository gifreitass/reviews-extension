import { combineReducers, createStore } from "redux"
import { stepReducer } from "./step/reducer"
import { platformReducer } from "./platform/reducer"

const reducers = combineReducers({
    step: stepReducer,
    platform: platformReducer
})

const store = createStore(
    reducers, 
)

export default store