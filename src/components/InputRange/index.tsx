import { useState } from "react"
import { DivReviews, DivRangeValue, DivTitleAndBar, TextRange, Input, DivGender, DivGenderDetails, DivGenderDetailsMan, DivGenderDetailsWoman } from "./styles"

const InputRange = () => {
    const [rangeValue, setRangeValue] = useState<string>('150')

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.value)
    }

    return (
        <>
            <DivReviews>
                <DivTitleAndBar>
                    <TextRange htmlFor="numberReviews">Qtd. Reviews</TextRange>
                    <Input onChange={handleRangeChange} type="range" id='numberReviews' max='222' value={rangeValue} />
                </DivTitleAndBar>
                <DivRangeValue>{rangeValue}</DivRangeValue>
            </DivReviews>
            <DivGender>
                <TextRange htmlFor="gender">Distribuição de gênero</TextRange>
                <Input type="range" id='gender' />
                <DivGenderDetails>
                    <DivGenderDetailsMan>
                        <span>111</span>
                        <TextRange>Homens</TextRange>
                    </DivGenderDetailsMan>
                    <DivGenderDetailsWoman>
                        <span>111</span>
                        <TextRange>Mulheres</TextRange>
                    </DivGenderDetailsWoman>
                </DivGenderDetails>
            </DivGender>
        </>
    )
}

export default InputRange