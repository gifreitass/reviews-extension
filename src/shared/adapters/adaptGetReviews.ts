import { Reviews } from "../../types/reviewApi.interface"

const adaptGetReviews = (reviews: Reviews) => {
    const adaptedGetReviews = reviews.data.ratings.map((review) => {
        const adaptedReview = {
            orderId: review.orderid,
            rating_star: review.rating_star,
            comment: review.comment,
            author: review.author_username,
            images: review.images
        }
        return adaptedReview
    })
    return adaptedGetReviews
}

export default adaptGetReviews