import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea';

const TeacherForm: React.FC = () => {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher o formuláriod de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" input="text" />
                    <Input name="avatar" label="Avatar" input="text" />
                    <Input name="whatsapp" label="Whatsapp" input="text" />
                    <Textarea name="bio" label="Biografio" />

                </fieldset>

                <fieldset>
                    <legend>Sobre Aula</legend>

                    <Input name="subject" label="Matéria" input="text" />
                    <Input name="cost" label="Custo da sua hora por aula" input="text" />

                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis</legend>

                    <Input name="week_day" label="Matéria" input="text" />
                    <Input name="cost" label="Custo da sua hora por aula" input="text" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante!" />
                        Importante! <br />
                        Preenchar todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
};

export default TeacherForm;