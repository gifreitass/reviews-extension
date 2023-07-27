import leftArrow from '../../assets/left-arrow.png'
import globalIcon from '../../assets/global.png'
import userIcon from '../../assets/user.png'
import { DivProfileImage, Image, Main, WelcomeSpan, TopDiv, TopImageItemsDiv, TopItemsDiv, ExtensionSpan, Form, DivContent, SpanContinue, Button } from './styles'
import InputText from '../InputText'
import Checkbox from '../Checkbox'
import InputRange from '../InputRange'
import store from '../../store'
import { setStepAction } from '../../store/step/action'
import { useState } from 'react'
import getReviews from '../../services/api/getReviews'
import { setReviewsAction } from '../../store/reviews/action'

const HomePage: React.FC = () => {
    const [inputLinkValue, setInputLinkValue] = useState<string>('')
    const [inputShopValue, setInputShopValue] = useState<string>('')

    const handleChangeProductLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputLinkValue(event.currentTarget.value)
    }

    const handleChangeShopLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputShopValue(event.currentTarget.value)
    }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (inputLinkValue && inputShopValue) {
            store.dispatch(setStepAction('2'))

            const reviews = await getReviews(inputLinkValue)
            store.dispatch(setReviewsAction(reviews))
        }
    }

    return (
        <Main>
            <TopDiv>
                <TopItemsDiv>
                    <Image src={leftArrow} alt="ícone de seta para a direção esquerda" />
                    <WelcomeSpan>Olá, Thiago.</WelcomeSpan>
                </TopItemsDiv>
                <TopImageItemsDiv>
                    <Image src={globalIcon} alt="ícone de globo de internet" />
                    <DivProfileImage>
                        <Image src={userIcon} alt="ícone do perfil do usuário" />
                    </DivProfileImage>
                </TopImageItemsDiv>
            </TopDiv>
            <DivContent>
                <span>Bem vindo ao</span>
                <ExtensionSpan>Importador de Reviews</ExtensionSpan>
                <Form action="">
                    <InputText id='productLink' onChange={handleChangeProductLink}>Link do produto Shopee</InputText>
                    <Checkbox />
                    <InputText id='pageLink' onChange={handleChangeShopLink}>Link da sua página de vendas</InputText>
                    <InputRange />
                    <SpanContinue><u>Continuar de onde parei</u></SpanContinue>
                    <Button disabled={!inputLinkValue || !inputShopValue} onClick={handleClick}>Importar</Button>
                </Form>
            </DivContent>
        </Main>
    )
}

export default HomePage