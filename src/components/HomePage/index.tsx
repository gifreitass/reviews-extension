import leftArrow from '../../assets/left-arrow.png'
import globalIcon from '../../assets/global.png'
import userIcon from '../../assets/user.png'
import { DivProfileImage, Image, Section, WelcomeSpan, TopDiv, TopImageItemsDiv, TopItemsDiv, ExtensionSpan, TextInput, Form, DivContent, DivCheckbox, InputCheckbox } from './styles'

const HomePage = () => {
    return (
        <Section>
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
                    <TextInput type="text" id='productLink' />
                    <DivCheckbox>
                        <InputCheckbox type="checkbox" id='onlyImages' />
                        <label htmlFor="onlyImages">Somente com imagens</label>
                        <InputCheckbox type="checkbox" id='reviewImage' />
                        <label htmlFor="reviewImage">Uma imagem por review</label>
                    </DivCheckbox>
                    <TextInput type="text" id='pageLink' />
                    <div>
                        <div>
                            <label htmlFor="numberReviews">Qtd. Reviews</label>
                            <input type="range" id='numberReviews' />
                        </div>
                        <div>222</div>
                    </div>
                    <div>
                        <label htmlFor="gender">Distribuição de gênero</label>
                        <input type="range" id='gender' />
                        <div>
                            <div>
                                <span>111</span>
                                <span>Homens</span>
                            </div>
                            <div>
                                <span>111</span>
                                <span>Mulheres</span>
                            </div>
                        </div>
                    </div>
                    <span><u>Continuar de onde parei</u></span>
                    <button>Importar</button>
                </Form>
            </DivContent>
        </Section>
    )
}

export default HomePage