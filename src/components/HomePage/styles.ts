import { styled, css } from "styled-components";

export const sharedItemsDiv = css`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Main = styled.main`
    margin: 20px;
`

export const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TopItemsDiv = styled.div`
    ${sharedItemsDiv}
`

export const TopImageItemsDiv = styled.div`
    ${sharedItemsDiv}
    background-color: #33363b;
    padding: 10px;
    border-radius: 50px;
    position: relative;
    width: 80px;
`

export const DivProfileImage = styled.div`
    background-color: #3A3F47;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`

export const WelcomeSpan = styled.span`
    color: #C0C0C0;
    font-size: 20px;
`

export const Image = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const DivContent = styled.div`
    color: #C0C0C0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-size: 18px;
`

export const ExtensionSpan = styled.span`
    font-weight: 600;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`

export const SpanContinue = styled.span`
    font-size: 15px;
    cursor: pointer;
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    background-color: #C0C0C0;
    color: #33363b;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
`