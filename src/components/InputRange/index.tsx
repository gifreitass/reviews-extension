import { useState } from "react"
import { DivReviews, DivRangeValue, DivTitleAndBar, TextRange, Input, DivGender, DivGenderDetails, DivGenderDetailsMan, DivGenderDetailsWoman } from "./styles"

const InputRange = () => {
    const [rangeReviewsValue, setRangeReviewsValue] = useState<string>('150')
    const [rangeGenderValue, setRangeGenderValue] = useState<string>('150')

    const handleRangeReviewsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeReviewsValue(event.target.value)
    }

    const handleRangeGenderhange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeGenderValue(event.target.value)
    }

    return (
        <>
            <DivReviews>
                <DivTitleAndBar>
                    <TextRange htmlFor="numberReviews">Qtd. Reviews</TextRange>
                    <Input onChange={handleRangeReviewsChange} type="range" id='numberReviews' max='222' value={rangeReviewsValue} />
                </DivTitleAndBar>
                <DivRangeValue>{rangeReviewsValue}</DivRangeValue>
            </DivReviews>
            <DivGender>
                <TextRange htmlFor="gender">Distribuição de gênero</TextRange>
                <Input type="range" id='gender' max='222' value={rangeGenderValue} onChange={handleRangeGenderhange} />
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