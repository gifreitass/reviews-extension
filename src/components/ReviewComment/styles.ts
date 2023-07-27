import { styled } from "styled-components";

interface ImageProps {
    disabled: boolean
}

export const DivReview = styled.div`
    display: flex;
    background-color: #383838;
    border-radius: 10px;
    padding: 15px;
    width: 450px;
    gap: 10px;
    margin-right: 10px;
    margin-top: 5px;
    justify-content: space-between;
    position: relative;
`

export const CloseButton = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    right: -5px;
    top: -5px;
`

export const DivComment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Author = styled.div`
    color: white;
`

export const Comment = styled.p`
    font-size: 13px;
`

export const DivImage = styled.div<ImageProps>`
    display: flex;
    width: 140px;
    overflow: hidden;
    overflow-x: ${(props: ImageProps) => props.disabled ? 'none' : 'scroll'};
    gap: 10px;
    &::-webkit-scrollbar {
      height: 7px;
    }
    &::-webkit-scrollbar-track {
     background: white; 
     border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: grey;    
    border-radius: 20px;  
    }
`

export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 7px;
    margin-bottom: 10px;
`

export const StarImage = styled.img`
    width: 80px;
`

export const DivRatingImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
`