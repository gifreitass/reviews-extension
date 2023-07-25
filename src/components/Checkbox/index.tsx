import { useState } from "react"
import { DivCheckbox, LabelCheckbox, StyledCheckbox } from "./styles"

const Checkbox: React.FC = () => {
    const [onlyImagesChecked, setOnlyImagesChecked] = useState<boolean>(false)
    const [reviewImageChecked, setReviewImageChecked] = useState<boolean>(false)
    
    return (
        <DivCheckbox>
            <StyledCheckbox checked={onlyImagesChecked} onClick={() => { setOnlyImagesChecked(!onlyImagesChecked) }}></StyledCheckbox>
            <LabelCheckbox htmlFor="onlyImages" onClick={() => { setOnlyImagesChecked(!onlyImagesChecked) }}>Somente com imagens</LabelCheckbox>
            <StyledCheckbox checked={reviewImageChecked} onClick={() => { setReviewImageChecked(!reviewImageChecked) }}></StyledCheckbox>
            <LabelCheckbox htmlFor="reviewImage" onClick={() => { setReviewImageChecked(!reviewImageChecked) }}>Uma imagem por review</LabelCheckbox>
        </DivCheckbox>
    )
}

export default Checkbox