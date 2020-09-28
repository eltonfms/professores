import React from 'react';

import tempPhoto from '../../images/temp/temp-teacher-profile.jpg';
import whatsappIcon from '../../images/icons/whatsapp.svg';

import './styles.scss';

interface TeacherItemProps {
  info: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header className="teacher-item__header">
        <img src={tempPhoto} alt="Professora" />
        <div>
          <h3>Nome da pessoa</h3>
          <span>Matérias</span>
        </div>
      </header>
      <main className="teacher-item__main">
        <p>{props.info}</p>
      </main>
      <footer className="teacher-item__footer">
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
