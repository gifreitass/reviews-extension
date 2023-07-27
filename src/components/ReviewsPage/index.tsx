import { ButtonNext, ButtonPrev, DivButtons, DivReviews, DivTopButtons, Image, Main, SpanNumberStars, StarsAverageDiv, StarsDiv, TitleStars, TopButton, TopDiv } from "./styles"
import rating from '../../assets/rating.png'
import ReviewComment from "../ReviewComment"
import { iState } from "../../store/types/store.interface"
import { useSelector } from "react-redux";
import store from "../../store";
import { setStepAction } from "../../store/step/action";
import { setReviewsAction } from "../../store/reviews/action";

const ReviewsPage = () => {
    const reviews = useSelector((state: iState) => state.reviews.reviewsInformation)

    const handleClick = () => {
        store.dispatch(setStepAction('2'))
    }

    const closeHandleClick = (orderId: number) => {
        const indice = reviews.findIndex((review) => review.orderId === orderId)
        const newReviews = [...reviews]
        newReviews.splice(indice, 1)
        store.dispatch(setReviewsAction(newReviews))
    }

    return (
        <Main>
            <TopDiv>
                <StarsDiv>
                    <StarsAverageDiv>
                        <TitleStars>Média de estrelas</TitleStars>
                        <Image src={rating} alt="5 estrelas" />
                    </StarsAverageDiv>
                    <SpanNumberStars>5</SpanNumberStars>
                </StarsDiv>
                <DivTopButtons>
                    <TopButton>Baixar CSV</TopButton>
                    <TopButton>Apagar Imagens</TopButton>
                </DivTopButtons>
            </TopDiv>
            <DivReviews>
                {reviews.map((review, index) => {
                    return <ReviewComment key={index} author={review.author} comment={review.comment} images={review.images} rating={review.rating_star} orderId={review.orderId} closeButtonClick={closeHandleClick} />
                })}
            </DivReviews>
            <DivButtons>
                <ButtonPrev onClick={handleClick}>Voltar</ButtonPrev>
                <ButtonNext>Enviar</ButtonNext>
            </DivButtons>
        </Main>
    )
}

export default ReviewsPage