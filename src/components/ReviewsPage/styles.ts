import { styled, css } from "styled-components";

export const sharedButton = css`
    width: 40%;
    height: 40px;
    border-radius: 8px;
    font-weight: 600;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    color: #C0C0C0;
    margin: 30px 10px 0 10px;
    align-items: center;
    gap: 20px;
    width: 100%;
`

export const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;
    align-items: flex-end;
    height: 50px;
`

export const TitleStars = styled.span`
    font-size: 13px;
    color: grey;
`

export const SpanNumberStars = styled.span`
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    background-color: #33363b;
    width: 38px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
`

export const StarsDiv = styled.div`
    display: flex;
    align-items: flex-end;
    height: 48px;
    gap: 10px;
    font-size: 13px;
`

export const StarsAverageDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Image = styled.img`
    width: 150px;
`

export const DivTopButtons = styled.div`
    display: flex;
    gap: 10px;
`

export const TopButton = styled.span`
    background-color: #383838;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
`

export const DivReviews = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 6px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
     background: #383838; 
     border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: grey;    
    border-radius: 20px;   
}
`

export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 25px;
`

export const ButtonPrev = styled.button`
    ${sharedButton}
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    background: #33363b;
    color: #C0C0C0;
    cursor: pointer;
`

export const ButtonNext = styled.button`
    ${sharedButton}
    background-color: #C0C0C0;
    color: #33363b;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    cursor: pointer;
`