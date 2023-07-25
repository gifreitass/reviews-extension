import PlatformItem from "../PlatformItem"
import cartpandaLogo from '../../assets/logos/cartpanda.jpg'
import lpqvLogo from '../../assets/logos/lpqv.png'
import nuvemshopLogo from '../../assets/logos/nuvemshop.jpg'
import shopifyLogo from '../../assets/logos/shopify.png'
import woocommerceLogo from '../../assets/logos/woocommerce.jpg'
import yampiLogo from '../../assets/logos/yampi.png'
import { DivPlatforms, Main } from "./styles"


const PlatformPage = () => {
    return (
        <Main>
            <div>
                <h1>Qual a plataforma da sua loja?</h1>
                <DivPlatforms>
                    <PlatformItem src={shopifyLogo}>Shopify</PlatformItem>
                    <PlatformItem src={cartpandaLogo}>Cartpanda</PlatformItem>
                    <PlatformItem src={nuvemshopLogo}>Nuvemshop</PlatformItem>
                    <PlatformItem src={lpqvLogo}>LQPV</PlatformItem>
                    <PlatformItem src={yampiLogo}>Yampi</PlatformItem>
                    <PlatformItem src={woocommerceLogo}>WooComerce</PlatformItem>
                </DivPlatforms>
            </div>
            <div>
                <button>Voltar</button>
                <button>Próximo</button>
            </div>
        </Main>
    )
}

export default PlatformPage