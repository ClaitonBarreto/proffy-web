import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string,
        primaryLighter: string,
        primaryLight: string,
        primary: string,
        primaryDark: string,
        primaryDarker: string,
        secondary: string,
        secondayDark: string,
        titeInPrimary: string,      
        textInPrimary: string,
        textTitle: string,
        textComplement: string,
        textBase: string,
        lineInWhite: string,
        inputBackground: string,
        buttonText: string,      
        boxBase: string,      
        boxFooter: string,
        switchButton: string,
        switchText: string,
        price: string   
    }
}