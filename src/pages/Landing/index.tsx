import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import * as Styled from  './styles'

const Landing = () => {
    return (
        <Styled.PageLanding>
            
            <Styled.PageLandingContainer>
                <Styled.LogoContainer>
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </Styled.LogoContainer>

                <Styled.HeroImage src={landingImg} alt="Plataforma de Estudos"/>

                <Styled.ButtonsContainer>
                    <Styled.StudyButton to="/study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Styled.StudyButton>
                    <Styled.GiveClassesButton to="/give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas                    
                    </Styled.GiveClassesButton>
                </Styled.ButtonsContainer>
                <Styled.TotalConnections>
                    Total de 200 conexões já realizadas <img src={purpleHeart} alt="Coração Roxo"/>
                </Styled.TotalConnections>
            </Styled.PageLandingContainer>
        </Styled.PageLanding>
    )
}

export default Landing;