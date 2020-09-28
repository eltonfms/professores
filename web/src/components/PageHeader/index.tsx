import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo-educadores.svg';
import backIcon from '../../images/icons/back.svg';

import './styles.scss';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="teacher-list__header">
      <div className="wrapper">
        <header className="header">
          <div className="header__back">
            <Link to="/">
              <img src={backIcon} alt="Voltar" />
            </Link>
          </div>
          <div className="header__logo">
            <img src={logoImg} alt="Logo Educadores" />
          </div>
          <div className="header__title">
            <h2>{props.title}</h2>
          </div>
        </header>
        <div className="teacher-list__form">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader;
