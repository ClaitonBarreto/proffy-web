import styled from 'styled-components'

export const TeacherItem = styled.article`


background: ${({theme}) => theme.boxBase};
border: ${({theme}) => `1px solid ${theme.lineInWhite}`};
border-radius: 0.8rem;
margin-top: 2.4rem;
overflow: hidden;
transition: .2s;

p {
    color: ${({theme}) => theme.textBase};
}

header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
}

header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
}

header div {
    margin-left: 2.4rem;
}

header div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: ${({theme}) => theme.textTitle};
}

header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
}

> p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
}

footer {
    padding: 3.2rem;
    background: ${({theme}) => theme.boxFooter};
    border-top: ${({theme}) => `1px solid ${theme.boxFooter}`};
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

footer p strong {
   color: ${({theme}) => theme.price};
   font-size: 1.6rem;
   display: block;
}

footer button {
    width: 20rem;
    height: 5.6rem;
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
}

footer button:hover {
    background: ${({theme}) => theme.secondayDark};
}

@media (min-width: 700px) {
    header,
    footer {
        padding: 3.2rem;
    }

    > p {
        padding: 0 3.2rem;
    }

    footer p strong {
        display: initial;
        margin-left: 1.6rem;
    }

    footer button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
    }

    footer button img {
        margin-right: 1.6rem;
    }
}

`