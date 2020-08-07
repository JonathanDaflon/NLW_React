import React from 'react';

import iconWhats from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/57598746?s=460&u=1e3e7cd5e2d913465ae93e7a8608411a85ff069c&v=4" alt="Jonathan Daflon" />
                <div>
                    <strong>Jonathan Daflon</strong>
                    <span>React</span>
                </div>
            </header>
            <p>
                Aprendiz de programador
                        <br /><br />
                        Tentando conseguir um emprego pra não morrer de fome!
                    </p>

            <footer>
                <p>
                    Preço/hora:
                            <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={iconWhats} alt="Whatsapp" />
                            Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem