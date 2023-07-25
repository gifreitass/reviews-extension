import { styled } from "styled-components";
import checkImage from '../../assets/check.png'

interface IChecked {
    checked: boolean
}

export const DivCheckbox = styled.div`
    width: 100%;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const StyledCheckbox = styled.span<IChecked>`
    background-color: #3A3F47;
    width: 15px;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    height: 15px;
    border-radius: 3px;
    cursor: pointer;

    ${({ checked }) => checked && `
        &::before {
            content: "";
            background-image: url(${checkImage});
            background-size: 100% 100%;
            display: inline-block;
            height: 20px;
            width: 18px;
            position: relative;
            top: -5px;
        }
    `}
`

export const LabelCheckbox = styled.label`
    cursor: pointer;
`