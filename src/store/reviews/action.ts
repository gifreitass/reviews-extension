import { IReviewsDetails } from "../../types/reviewDetails.interface"

export const setReviewsAction = (reviewsInformation: IReviewsDetails[]) => {
    return {
        type: "SET_REVIEWS",
        payload: reviewsInformation
    }
}