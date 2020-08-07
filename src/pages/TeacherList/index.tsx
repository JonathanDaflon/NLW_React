import React from 'react';
import Input from '../../components/Inputs';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sãos os proffys disponíveis">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" input="text" />
                    <Input name="week_day" label="Dia da Semana" input="text" />
                    <Input name="time" label="Hora" input="time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
};

export default TeacherList;
