import { Div, SpanInputText, TextInput } from "./styles"

const InputText: React.FC<{ id: string, children: string, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }> = (props) => {
    const { id, children } = props

    return (
        <Div>
            <SpanInputText>{children}</SpanInputText>
            <TextInput onChange={props.onChange} type="text" id={id} />
        </Div>
    )
}

export default InputText