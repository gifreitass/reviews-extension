import { styled, css } from "styled-components";

export const sharedItemsDiv = css`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Section = styled.section`
    margin: 30px;
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

export const TextInput = styled.input`
    width: 100%;
    height: 35px;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    border-radius: 5px;
    background: #33363b;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`

export const DivCheckbox = styled.div`
    width: 100%;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const InputCheckbox = styled.input`
    width: 18px;
    height: 18px;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    border-radius: 5px;
    background: aliceblue;
`

