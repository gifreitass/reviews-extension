import { Image } from "./styles"

const PlatformItem: React.FC<{ src: string, children: string }> = (props) => {
    const { src, children } = props

    return (
        <div>
            <Image src={src} alt={`ícone da plataforma ${children}`} />
            <span>{children}</span>
        </div>
    )
}

export default PlatformItem