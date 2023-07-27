import { IReviewsDetails } from "../../types/reviewDetails.interface"

export interface iAction {
    type: string,
    payload: any
}

export interface iState {
    step: {
        stepInformation: string
    },
    platform: {
        platformInformation: string
    },
    reviews: {
        reviewsInformation: IReviewsDetails[]
    }
}