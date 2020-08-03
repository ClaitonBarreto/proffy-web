import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles'

function TeacherList() {
    return (
        <Styled.PageTeacherList>
            <PageHeader title="Estes são os proffys disponíveis">
                <Styled.SearchTeachers>
                    <Styled.InputBlock>
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </Styled.InputBlock>
                    <Styled.InputBlock>
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </Styled.InputBlock>
                    <Styled.InputBlock>
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </Styled.InputBlock>
                </Styled.SearchTeachers>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </Styled.PageTeacherList>
    );
}

export default TeacherList;