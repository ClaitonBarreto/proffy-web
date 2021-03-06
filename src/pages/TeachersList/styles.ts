import styled from 'styled-components'
import Container from '../../defaultStyles/Container'

export const PageTeacherList = styled(Container)`
    width: 100vw;
    height: 100vh;

    main {
        margin: 3.2rem auto;
        width: 90%;
    }

    @media (min-width: 700px) {
        max-width: 100%;

        main {
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`

export const SearchTeachers = styled.form`
    margin-top: 3.2rem;
    
    label {
        color: ${({theme}) => theme.textInPrimary};
    }

    input + input {
        margin-top: 1.4rem;
    }

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;;
        position: absolute;
        bottom: -28px;

        input + input {
            margin-top: 0;
        }

        main {
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`
export const InputBlock = styled.div`
    position: relative;

    label {
        font-size: 1.4rem;    
    }

    input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: ${({theme}) => theme.inputBackground};
        border: ${({theme}) => `1px solid ${theme.lineInWhite}`};
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
    }

    :focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: ${({theme}) => theme.primaryLight};
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`






