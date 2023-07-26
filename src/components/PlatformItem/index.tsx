import store from "../../store"
import { setPlatformAction } from "../../store/platform/action"
import { iState } from "../../store/types/store.interface";
import { Div, Image, Span } from "./styles"
import { useSelector } from "react-redux";

const PlatformItem: React.FC<{ src: string, children: string }> = (props) => {
    const { src, children } = props
    const platform = useSelector((state: iState) => state.platform.platformInformation)

    const handleClick = () => {
        store.dispatch(setPlatformAction(`${children}`))
    }

    return (
        <Div>
            <Image isSelected={platform === children} onClick={handleClick} src={src} alt={`ícone da plataforma ${children}`} />
            <Span>{children}</Span>
        </Div>
    )
}

export default PlatformItem