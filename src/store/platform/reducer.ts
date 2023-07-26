import { iAction } from "../types/store.interface"

const PLATFORM_INICIAL_STATE = {
    platformInformation: ''
}

export const platformReducer = (state = PLATFORM_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_PLATFORM_NAME":
            return {
                ...state,
                platformInformation: action.payload
            }
        default:
            return state
    }
}