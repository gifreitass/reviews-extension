import { styled } from "styled-components";

interface PlatformItemProps {
    isplatformselected: boolean
}

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

export const Image = styled.img<PlatformItemProps>`
    width: 50px;
    border-radius: 5px;
    border: ${(props) => (props.isplatformselected ? '3px solid grey' : 'none')};
`

export const Span = styled.span`
    font-size: 13px;
    margin-top: 10px;
`