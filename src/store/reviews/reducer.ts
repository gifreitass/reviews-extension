import { iAction } from "../types/store.interface"

const REVIEW_INICIAL_STATE = {
    reviewsInformation: ''
}

export const reviewsReducer = (state = REVIEW_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_REVIEWS":
            return {
                ...state,
                reviewsInformation: action.payload
            }
        default:
            return state
    }
}