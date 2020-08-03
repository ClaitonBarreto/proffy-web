import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background-color: ${({theme}) => theme.background};
        * {
            transition: .2s
        }
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    textarea,
    button {
        font: 500 1.6rem Poppins;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%
        }
    }
`

export default GlobalStyle
