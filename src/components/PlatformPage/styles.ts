import { styled, css } from "styled-components";

interface ButtonNextProps {
    isPlatformSelected: boolean
}

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
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
    height: 350px;
`

export const Title = styled.h1`
    font-size: 23px;
    font-weight: 500;
`

export const DivPlatform = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const DivPlatformItems = styled.div`
    display: flex;
    gap: 20px;
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

export const ButtonNext = styled.button<ButtonNextProps>`
    ${sharedButton}
    background-color: #C0C0C0;
    color: #33363b;
    border: 1.5px solid rgba(192, 192, 192, 0.4);
    cursor: ${(props) => props.isPlatformSelected ? 'default' : 'pointer'};
`