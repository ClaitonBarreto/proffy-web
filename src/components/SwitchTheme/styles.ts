import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${({theme}) => theme.switchButton};
    border: none;
    border-radius: 0.5rem;
    width: 7rem;
    height: 4rem;
    font-size: 1.5rem;
    transition: .2s;
    color: ${({theme}) => theme.switchText};
    cursor: pointer;
    
    @media (min-width: 700px) {
        width: 7rem;
        height: 3rem;
    }
`
export const ButtonContainer = styled.div`
    position: absolute;
    top: 0.2rem;
    width: 100vw;
    display: flex;
    justify-content: center;
`
