import { Div, SpanInputText, TextInput } from "./styles"

const InputText: React.FC<{ id: string, children: string }> = (props) => {
    const { id, children } = props

    return (
        <Div>
            <SpanInputText>{children}</SpanInputText>
            <TextInput type="text" id={id} />
        </Div>
    )
}

export default InputText