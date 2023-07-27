import rating from '../../assets/rating.png'
import { Author, CloseButton, Comment, DivComment, DivImage, DivRatingImage, DivReview, Image, StarImage } from './styles'
import closeButton from '../../assets/cancel.png'

const ReviewComment: React.FC<{ author: string, comment: string, images: string[], rating: number, orderId: number, closeButtonClick: (orderId: number) => void}> = (props) => {
    const { author, comment, images, closeButtonClick, orderId } = props

    return (
        <DivReview>
            <CloseButton onClick={() => closeButtonClick(orderId)} src={closeButton} alt="ícone de fechamento" />
            <DivComment>
                <Author>{author}</Author>
                <Comment>{comment}</Comment>
            </DivComment>
            <DivRatingImage>
                <DivImage disabled={!images.length || images.length <= 2}>
                    {images.map((image, index) => {
                        return <Image key={index} src={`https://down-lum-br.img.susercontent.com/${image}`} alt="imagem de avaliação de produtos enviadas por compradores" />
                    })}
                </DivImage>
                <StarImage src={rating} alt="estrela" />
            </DivRatingImage>
        </DivReview>
    )
}

export default ReviewComment