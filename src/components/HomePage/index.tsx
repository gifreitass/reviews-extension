import leftArrow from '../../assets/left-arrow.png'
import globalIcon from '../../assets/global.png'
import userIcon from '../../assets/user.png'
import { DivProfileImage, Image, Main, WelcomeSpan, TopDiv, TopImageItemsDiv, TopItemsDiv, ExtensionSpan, Form, DivContent, SpanContinue, Button } from './styles'
import InputText from '../InputText'
import Checkbox from '../Checkbox'
import InputRange from '../InputRange'
import store from '../../store'
import { setStepAction } from '../../store/step/action'

const HomePage: React.FC = () => {
    const handleClick = () => {
        store.dispatch(setStepAction('2'))
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
                    <InputText id='productLink'>Link do produto Shopee</InputText>
                    <Checkbox />
                    <InputText id='pageLink'>Link da sua página de vendas</InputText>
                    <InputRange />
                    <SpanContinue><u>Continuar de onde parei</u></SpanContinue>
                    <Button onClick={handleClick}>Importar</Button>
                </Form>
            </DivContent>
        </Main>
    )
}

export default HomePage