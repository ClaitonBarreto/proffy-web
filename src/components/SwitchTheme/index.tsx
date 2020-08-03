import React from 'react'

import * as Styled from './styles'

interface Props {
    toggleTheme: Function
}

const SwitchTheme: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Styled.ButtonContainer>
            <Styled.Button onClick={() => toggleTheme()}>
                Tema
            </Styled.Button>
        </Styled.ButtonContainer>
    )
}

export default SwitchTheme