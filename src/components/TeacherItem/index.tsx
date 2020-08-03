import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import * as Styled from './styles'


const TeacherItem: React.FC = () => {
    return (
        <Styled.TeacherItem>
            <header>
                <img src="https://avatars0.githubusercontent.com/u/34696974?s=460&u=5c8f1eb1dd1d1620bf1d68c804e89a11d7c97c7d&v=4" alt="avatar"/>
                <div>
                    <strong>Claiton Barreto</strong>
                    <span>Sistemas de informação</span>
                </div>
            </header>
            <p>
                O incentivo ao avanço tecnológico
                <br />
                <br />
                Assim como a consulta aos diversos militantes agrega valor ao estabelecimento das direções preferenciais no sentido do progresso.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </Styled.TeacherItem>
    );
}

export default TeacherItem;