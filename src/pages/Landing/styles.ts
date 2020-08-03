import styled from 'styled-components'
import Container from '../../defaultStyles/Container'
import { Link } from 'react-router-dom'


export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.textInPrimary};
    background: ${({theme}) => theme.primary};
`

export const PageLandingContainer = styled(Container)`

    @media (min-width: 1100px) {
        max-width: 1100px;

        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            'logo hero hero'
            'buttons buttons total'
        ;
    }

`

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;


    img {
        height: 10rem;
    }

    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }


    @media (min-width: 1100px) {
        grid-area: logo;
        align-self: center;
        margin: 0;
        text-align: left;

        h2 {
            text-align: initial;
            font-size: 3.6rem;
        }

        img {
            height: 100%;
        }
    }
`

export const HeroImage = styled.img`
    width: 100%;

    @media (min-width: 1100px) {
        grid-area: hero;
        justify-self: end;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    a {
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;
        font: 700 2rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: ${({theme}) => theme.buttonText};

        transition: background-color .2s;
    }

    a:first-child {
        margin-right: 1.6rem;
    }

    a img {
        width: 4rem;
    }

    @media (min-width: 1100px) {
        justify-self: flex-start;
        grid-area: buttons;

        a {
            font-size: 2.4rem;
        }

        a img {
            margin-right: 2.4rem;
        }
    }
`

export const StudyButton = styled(Link)`
    background-color: ${({theme}) => theme.primaryLighter};
    :hover {
        background-color: ${({theme}) => theme.primaryLight}
    }
`

export const GiveClassesButton = styled(Link)`
    background-color: ${({theme}) => theme.secondary};
    :hover {
        background-color: ${({theme}) => theme.secondayDark}
    }
`

export const TotalConnections = styled.span`
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 0.8rem;
    }

    @media (min-width: 1100px) {
        justify-self: end;
        grid-area: total;
    }
`   