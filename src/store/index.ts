import { combineReducers, createStore } from "redux"
import { stepReducer } from "./step/reducer"
import { platformReducer } from "./platform/reducer"
import { reviewsReducer } from "./reviews/reducer"

const reducers = combineReducers({
    step: stepReducer,
    platform: platformReducer,
    reviews: reviewsReducer
})

const store = createStore(
    reducers, 
)

export default store