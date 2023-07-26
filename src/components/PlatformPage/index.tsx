import PlatformItem from "../PlatformItem"
import cartpandaLogo from '../../assets/logos/cartpanda.jpg'
import lpqvLogo from '../../assets/logos/lpqv.png'
import nuvemshopLogo from '../../assets/logos/nuvemshop.jpg'
import shopifyLogo from '../../assets/logos/shopify.png'
import woocommerceLogo from '../../assets/logos/woocommerce.jpg'
import yampiLogo from '../../assets/logos/yampi.png'
import { ButtonNext, ButtonPrev, DivButtons, DivPlatform, DivPlatformItems, Main, Title } from "./styles"
import store from "../../store"
import { setStepAction } from "../../store/step/action"
import { useSelector } from "react-redux";
import { iState } from "../../store/types/store.interface"

const PlatformPage = () => {
    const platform = useSelector((state: iState) => state.platform.platformInformation)

    const handleClickPrev = () => {
        store.dispatch(setStepAction('1'))
    }

    const handleClickNext = () => {
        if (platform) {
            store.dispatch(setStepAction('3'))
        }
        return
    }

    return (
        <Main>
            <DivPlatform>
                <Title>Qual é a plataforma da sua loja?</Title>
                <DivPlatformItems>
                    <PlatformItem src={shopifyLogo}>Shopify</PlatformItem>
                    <PlatformItem src={cartpandaLogo}>Cartpanda</PlatformItem>
                    <PlatformItem src={nuvemshopLogo}>Nuvemshop</PlatformItem>
                    <PlatformItem src={lpqvLogo}>LQPV</PlatformItem>
                    <PlatformItem src={yampiLogo}>Yampi</PlatformItem>
                    <PlatformItem src={woocommerceLogo}>WooComerce</PlatformItem>
                </DivPlatformItems>
            </DivPlatform>
            <DivButtons>
                <ButtonPrev onClick={handleClickPrev}>Voltar</ButtonPrev>
                <ButtonNext isPlatformSelected={!platform} onClick={handleClickNext}>Próximo</ButtonNext>
            </DivButtons>
        </Main>
    )
}

export default PlatformPage