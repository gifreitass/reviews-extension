import { styled } from "styled-components";

export const DivReviews = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const DivTitleAndBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Input = styled.input`
    appearance: none;
    height: 5px;
    outline: none;
    cursor: pointer;

    background: ${({ value, max }) => {
        const percentage = (Number(value) * 100) / Number(max)
        return `linear-gradient(90deg, rgba(117,117,117,1) ${percentage}%, #1b1c1c ${percentage}%)`
    }};

    &::-webkit-slider-thumb {
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%; 
        background: #C0C0C0;
        cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
    }
`

export const TextRange = styled.label`
    font-size: 15px;
    color: grey;
`

export const DivRangeValue = styled.div`
    width: 30px;
    height: 35px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    background: #33363b;
    padding: 5px;
`

export const DivGender = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

export const DivGenderDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivGenderDetailsMan = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivGenderDetailsWoman = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`
